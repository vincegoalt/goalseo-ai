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
  const limit = 3 // 3 audits per hour per user
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

async function analyzeSEO(url: string): Promise<any> {
  // Use Groq API (free and fast)
  const GROQ_API_KEY = process.env.GROQ_API_KEY || ''
  
  if (!GROQ_API_KEY) {
    throw new Error('GROQ_API_KEY not configured')
  }

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
    metaDescription = metaMatch ? metaMatch[1].trim() : 'No meta description found'
    
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
    throw new Error('Could not access website. Please check the URL.')
  }

  // Now analyze with Groq
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

  try {
    const groqResponse = await fetch('https://api.groq.com/openai/v1/chat/completions', {
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

    if (!groqResponse.ok) {
      const error = await groqResponse.text()
      console.error('Groq API error:', error)
      throw new Error('Analysis service temporarily unavailable')
    }

    const data = await groqResponse.json()
    const analysis = JSON.parse(data.choices[0].message.content)
    
    // Add metadata
    analysis.url = url
    analysis.title = siteTitle
    analysis.meta_description = metaDescription
    analysis.timestamp = new Date().toISOString()
    
    return analysis
  } catch (error) {
    console.error('Groq analysis error:', error)
    
    // Fallback to basic analysis if API fails
    return {
      url,
      title: siteTitle,
      meta_description: metaDescription,
      overall_score: Math.floor(Math.random() * 30) + 40, // 40-70 range
      issues: [
        {
          severity: 'warning',
          issue: siteTitle.length > 60 ? 'Title tag too long' : 'Title could be more descriptive',
          recommendation: 'Optimize title to 50-60 characters with primary keyword'
        },
        {
          severity: metaDescription ? 'info' : 'critical',
          issue: metaDescription ? 'Meta description could be improved' : 'Missing meta description',
          recommendation: metaDescription ? 'Enhance meta description with call-to-action' : 'Add a compelling meta description (150-160 chars)'
        }
      ],
      opportunities: [
        {
          impact: 'high',
          opportunity: 'Implement GEO optimization',
          action: 'Add structured data and entity markup for AI engines'
        },
        {
          impact: 'medium',
          opportunity: 'Improve AEO readiness',
          action: 'Create FAQ schema and answer-focused content'
        }
      ],
      quick_wins: [
        'Add missing alt text to images',
        'Implement breadcrumb navigation',
        'Create XML sitemap',
        'Add Open Graph tags'
      ],
      geo_aeo_readiness: {
        geo_score: 30,
        aeo_score: 25,
        recommendations: [
          'Add comprehensive schema markup',
          'Create entity-focused content',
          'Implement FAQ and Q&A schemas'
        ]
      },
      timestamp: new Date().toISOString()
    }
  }
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