import { NextRequest, NextResponse } from 'next/server'

export async function GET(req: NextRequest) {
  // Only allow in development or with secret key
  const secretKey = req.nextUrl.searchParams.get('key')
  if (process.env.NODE_ENV === 'production' && secretKey !== 'test-goalseo-2025') {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const results = {
    environment: process.env.NODE_ENV,
    timestamp: new Date().toISOString(),
    api_keys_configured: {
      groq: !!process.env.GROQ_API_KEY,
      groq_length: process.env.GROQ_API_KEY?.length || 0,
      huggingface: !!process.env.HUGGINGFACE_API_KEY,
      huggingface_length: process.env.HUGGINGFACE_API_KEY?.length || 0,
      cohere: !!process.env.COHERE_API_KEY,
      cohere_length: process.env.COHERE_API_KEY?.length || 0,
    },
    test_results: {} as Record<string, any>
  }

  // Test Groq if configured
  if (process.env.GROQ_API_KEY) {
    try {
      const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${process.env.GROQ_API_KEY}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          model: 'llama-3.3-70b-versatile',
          messages: [
            { role: 'system', content: 'You are a test bot. Respond with JSON only.' },
            { role: 'user', content: 'Return JSON with status: "ok"' }
          ],
          temperature: 0.1,
          max_tokens: 50
        })
      })
      
      results.test_results.groq = {
        status: response.status,
        ok: response.ok,
        statusText: response.statusText
      }
      
      if (!response.ok) {
        const error = await response.text()
        results.test_results.groq.error = error.substring(0, 200)
      }
    } catch (error: any) {
      results.test_results.groq = {
        error: error.message,
        type: 'connection_error'
      }
    }
  }

  // Test HuggingFace if configured
  if (process.env.HUGGINGFACE_API_KEY) {
    try {
      const response = await fetch('https://api-inference.huggingface.co/models/gpt2', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${process.env.HUGGINGFACE_API_KEY}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          inputs: 'Test',
          parameters: { max_new_tokens: 10 }
        })
      })
      
      results.test_results.huggingface = {
        status: response.status,
        ok: response.ok,
        statusText: response.statusText
      }
      
      if (!response.ok) {
        const error = await response.text()
        results.test_results.huggingface.error = error.substring(0, 200)
      }
    } catch (error: any) {
      results.test_results.huggingface = {
        error: error.message,
        type: 'connection_error'
      }
    }
  }

  // Test Cohere if configured
  if (process.env.COHERE_API_KEY) {
    try {
      const response = await fetch('https://api.cohere.ai/v1/generate', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${process.env.COHERE_API_KEY}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          model: 'command-light',
          prompt: 'Test',
          max_tokens: 10
        })
      })
      
      results.test_results.cohere = {
        status: response.status,
        ok: response.ok,
        statusText: response.statusText
      }
      
      if (!response.ok) {
        const error = await response.text()
        results.test_results.cohere.error = error.substring(0, 200)
      }
    } catch (error: any) {
      results.test_results.cohere = {
        error: error.message,
        type: 'connection_error'
      }
    }
  }

  return NextResponse.json(results, { status: 200 })
}