import { NextRequest, NextResponse } from 'next/server'
import { headers } from 'next/headers'
import crypto from 'crypto'

// Rate limiting store (in production, use Redis)
const rateLimitStore = new Map<string, { count: number; resetTime: number }>()

// Clean up old entries every hour
setInterval(() => {
  const now = Date.now()
  Array.from(rateLimitStore.entries()).forEach(([key, value]) => {
    if (value.resetTime < now) {
      rateLimitStore.delete(key)
    }
  })
}, 3600000)

function getRateLimitKey(req: NextRequest): string {
  const headersList = headers()
  const ip = headersList.get('x-forwarded-for') || 
             headersList.get('x-real-ip') || 
             'unknown'
  
  // Create a hash of IP + User Agent for better fingerprinting
  const userAgent = headersList.get('user-agent') || ''
  const fingerprint = crypto.createHash('md5')
    .update(ip + userAgent)
    .digest('hex')
  
  return fingerprint
}

function checkRateLimit(key: string): { allowed: boolean; remaining: number } {
  const now = Date.now()
  const limit = 5 // Increased to 5 audits per hour per user
  const window = 3600000 // 1 hour in ms
  
  const record = rateLimitStore.get(key)
  
  if (!record || record.resetTime < now) {
    rateLimitStore.set(key, {
      count: 1,
      resetTime: now + window
    })
    return { allowed: true, remaining: limit - 1 }
  }
  
  if (record.count >= limit) {
    return { allowed: false, remaining: 0 }
  }
  
  record.count++
  return { allowed: true, remaining: limit - record.count }
}

// Multiple free LLM providers for fallback
async function analyzeWithGroq(prompt: string): Promise<any> {
  const GROQ_API_KEY = process.env.GROQ_API_KEY
  
  if (!GROQ_API_KEY) {
    throw new Error('Groq API not configured')
  }

  const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${GROQ_API_KEY}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      model: 'llama-3.3-70b-versatile',
      messages: [
        {
          role: 'system',
          content: 'You are an expert SEO analyst. Always respond with valid JSON only, no markdown formatting.'
        },
        {
          role: 'user',
          content: prompt
        }
      ],
      temperature: 0.3,
      max_tokens: 2000,
      response_format: { type: "json_object" }
    })
  })

  if (!response.ok) {
    throw new Error('Groq API failed')
  }

  const data = await response.json()
  return JSON.parse(data.choices[0].message.content)
}

async function analyzeWithHuggingFace(prompt: string): Promise<any> {
  const HF_API_KEY = process.env.HUGGINGFACE_API_KEY
  
  if (!HF_API_KEY) {
    throw new Error('HuggingFace API not configured')
  }

  // Using Mistral-7B-Instruct via HuggingFace Inference API (free tier)
  const response = await fetch('https://api-inference.huggingface.co/models/mistralai/Mistral-7B-Instruct-v0.2', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${HF_API_KEY}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      inputs: `<s>[INST] ${prompt} \n\nRespond with valid JSON only. [/INST]`,
      parameters: {
        max_new_tokens: 1500,
        temperature: 0.3,
        return_full_text: false
      }
    })
  })

  if (!response.ok) {
    throw new Error('HuggingFace API failed')
  }

  const data = await response.json()
  const text = data[0]?.generated_text || data.generated_text || ''
  
  // Extract JSON from response
  const jsonMatch = text.match(/\{[\s\S]*\}/)
  if (jsonMatch) {
    return JSON.parse(jsonMatch[0])
  }
  throw new Error('Invalid response format from HuggingFace')
}

async function analyzeWithCohere(prompt: string): Promise<any> {
  const COHERE_API_KEY = process.env.COHERE_API_KEY
  
  if (!COHERE_API_KEY) {
    throw new Error('Cohere API not configured')
  }

  const response = await fetch('https://api.cohere.ai/v1/generate', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${COHERE_API_KEY}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      model: 'command-light',
      prompt: `${prompt}\n\nProvide your response as valid JSON only:`,
      max_tokens: 1500,
      temperature: 0.3,
      k: 0,
      stop_sequences: [],
      return_likelihoods: 'NONE'
    })
  })

  if (!response.ok) {
    throw new Error('Cohere API failed')
  }

  const data = await response.json()
  const text = data.generations[0].text
  
  // Extract JSON from response
  const jsonMatch = text.match(/\{[\s\S]*\}/)
  if (jsonMatch) {
    return JSON.parse(jsonMatch[0])
  }
  throw new Error('Invalid response format from Cohere')
}

// Fallback analysis when all APIs fail
function generateBasicAnalysis(url: string, siteTitle: string, metaDescription: string, siteContent: string): any {
  const titleLength = siteTitle.length
  const descLength = metaDescription.length
  const hasDescription = descLength > 0
  
  // Calculate basic scores
  const titleScore = titleLength > 30 && titleLength < 60 ? 20 : 10
  const descScore = hasDescription && descLength > 120 && descLength < 160 ? 20 : hasDescription ? 10 : 0
  const contentScore = siteContent.length > 500 ? 20 : 10
  const baseScore = 30 // Base score for having a website
  
  const overallScore = baseScore + titleScore + descScore + contentScore

  return {
    url,
    title: siteTitle,
    meta_description: metaDescription,
    overall_score: overallScore,
    issues: [
      titleLength > 60 ? {
        severity: 'warning',
        issue: `Title tag is ${titleLength} characters (recommended: 50-60)`,
        recommendation: 'Shorten your title tag to under 60 characters while keeping primary keywords'
      } : titleLength < 30 ? {
        severity: 'critical',
        issue: `Title tag is only ${titleLength} characters`,
        recommendation: 'Expand your title to include primary keywords and brand name'
      } : {
        severity: 'info',
        issue: 'Title tag length is good',
        recommendation: 'Consider A/B testing different title variations'
      },
      !hasDescription ? {
        severity: 'critical',
        issue: 'Missing meta description',
        recommendation: 'Add a compelling 150-160 character meta description with call-to-action'
      } : descLength > 160 ? {
        severity: 'warning',
        issue: `Meta description is ${descLength} characters (will be truncated)`,
        recommendation: 'Shorten to under 160 characters to prevent truncation in search results'
      } : {
        severity: 'info',
        issue: 'Meta description present',
        recommendation: 'Include primary keywords and unique value proposition'
      },
      {
        severity: 'info',
        issue: 'Mobile responsiveness not verified',
        recommendation: 'Ensure your site is mobile-friendly with responsive design'
      }
    ],
    opportunities: [
      {
        impact: 'high',
        opportunity: 'Implement Generative Engine Optimization (GEO)',
        action: 'Add structured data and entity markup to appear in AI-powered search results'
      },
      {
        impact: 'high',
        opportunity: 'Optimize for Answer Engines (AEO)',
        action: 'Create FAQ sections and implement Q&A schema markup'
      },
      {
        impact: 'medium',
        opportunity: 'Improve Core Web Vitals',
        action: 'Optimize images, minimize JavaScript, and improve server response time'
      },
      {
        impact: 'medium',
        opportunity: 'Build topical authority',
        action: 'Create comprehensive content clusters around your main topics'
      }
    ],
    quick_wins: [
      'Add alt text to all images for better accessibility and SEO',
      'Create and submit an XML sitemap to Google Search Console',
      'Implement breadcrumb navigation with schema markup',
      'Add Open Graph tags for better social media sharing',
      'Set up Google Business Profile if you serve local customers',
      'Install Google Analytics 4 and Search Console'
    ],
    geo_aeo_readiness: {
      geo_score: 25,
      aeo_score: 20,
      recommendations: [
        'Add comprehensive schema markup (Organization, Product, FAQ, etc.)',
        'Create entity-focused content that defines your brand and offerings',
        'Implement speakable schema for voice search optimization',
        'Build authoritative backlinks to increase E-E-A-T signals',
        'Create detailed About and Author pages with expertise credentials'
      ]
    },
    timestamp: new Date().toISOString()
  }
}

async function analyzeSEO(url: string): Promise<any> {
  // First, fetch basic site data
  let siteContent = ''
  let siteTitle = ''
  let metaDescription = ''
  
  try {
    const response = await fetch(url, {
      headers: {
        'User-Agent': 'GoalSEO-Audit-Bot/1.0'
      },
      signal: AbortSignal.timeout(5000) // 5 second timeout
    })
    
    const html = await response.text()
    
    // Extract title
    const titleMatch = html.match(/<title[^>]*>(.*?)<\/title>/i)
    siteTitle = titleMatch ? titleMatch[1].trim() : 'No title found'
    
    // Extract meta description
    const metaMatch = html.match(/<meta\s+name=["']description["'][^>]*content=["'](.*?)["']/i)
    metaDescription = metaMatch ? metaMatch[1].trim() : ''
    
    // Extract visible text (first 5000 chars)
    const bodyMatch = html.match(/<body[^>]*>([\s\S]*?)<\/body>/i)
    if (bodyMatch) {
      siteContent = bodyMatch[1]
        .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
        .replace(/<style\b[^<]*(?:(?!<\/style>)<[^<]*)*<\/style>/gi, '')
        .replace(/<[^>]+>/g, ' ')
        .replace(/\s+/g, ' ')
        .trim()
        .substring(0, 5000)
    }
  } catch (error) {
    console.error('Error fetching site:', error)
    throw new Error('Could not access website. Please check the URL and try again.')
  }

  const prompt = `As an SEO expert, analyze this website and provide actionable recommendations.

URL: ${url}
Title: ${siteTitle}
Meta Description: ${metaDescription}
Content Sample: ${siteContent.substring(0, 2000)}

Provide a JSON response with:
1. overall_score (0-100)
2. issues (array of {severity: "critical|warning|info", issue: string, recommendation: string})
3. opportunities (array of {impact: "high|medium|low", opportunity: string, action: string})
4. quick_wins (array of strings - things they can fix immediately)
5. geo_aeo_readiness (object with {geo_score: 0-100, aeo_score: 0-100, recommendations: array})

Focus on:
- Title and meta description optimization
- Content quality and E-E-A-T signals
- Technical SEO basics
- GEO (Generative Engine Optimization) readiness
- AEO (Answer Engine Optimization) potential
- Mobile and Core Web Vitals indicators

Keep it practical and actionable. Format as valid JSON.`

  // Try multiple LLM providers with fallback
  const providers = [
    { name: 'Groq', fn: () => analyzeWithGroq(prompt) },
    { name: 'HuggingFace', fn: () => analyzeWithHuggingFace(prompt) },
    { name: 'Cohere', fn: () => analyzeWithCohere(prompt) }
  ]

  for (const provider of providers) {
    try {
      console.log(`Trying ${provider.name}...`)
      const analysis = await provider.fn()
      
      // Add metadata
      analysis.url = url
      analysis.title = siteTitle
      analysis.meta_description = metaDescription
      analysis.timestamp = new Date().toISOString()
      analysis.analyzed_with = provider.name
      
      return analysis
    } catch (error) {
      console.log(`${provider.name} failed:`, error)
      continue
    }
  }

  // If all providers fail, use basic analysis
  console.log('All LLM providers failed, using basic analysis')
  return generateBasicAnalysis(url, siteTitle, metaDescription, siteContent)
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { url } = body

    // Validate URL
    if (!url) {
      return NextResponse.json(
        { error: 'URL is required' },
        { status: 400 }
      )
    }

    // Clean and validate URL
    let validUrl: string
    try {
      if (!url.startsWith('http://') && !url.startsWith('https://')) {
        validUrl = `https://${url}`
      } else {
        validUrl = url
      }
      new URL(validUrl) // Validate URL format
    } catch {
      return NextResponse.json(
        { error: 'Invalid URL format' },
        { status: 400 }
      )
    }

    // Check rate limit
    const rateLimitKey = getRateLimitKey(req)
    const { allowed, remaining } = checkRateLimit(rateLimitKey)
    
    if (!allowed) {
      return NextResponse.json(
        { 
          error: 'Rate limit exceeded. Please try again in an hour.',
          retryAfter: 3600
        },
        { 
          status: 429,
          headers: {
            'X-RateLimit-Remaining': '0',
            'X-RateLimit-Reset': new Date(Date.now() + 3600000).toISOString()
          }
        }
      )
    }

    // Perform SEO analysis
    const analysis = await analyzeSEO(validUrl)

    return NextResponse.json(
      { 
        success: true,
        analysis,
        remaining_audits: remaining
      },
      {
        status: 200,
        headers: {
          'X-RateLimit-Remaining': remaining.toString(),
          'Cache-Control': 'no-store'
        }
      }
    )

  } catch (error: any) {
    console.error('Audit error:', error)
    return NextResponse.json(
      { 
        error: error.message || 'Failed to analyze website',
        details: process.env.NODE_ENV === 'development' ? error.stack : undefined
      },
      { status: 500 }
    )
  }
}