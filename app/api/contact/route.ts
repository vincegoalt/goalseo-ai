import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    const { name, email, phone, company, website, service, budget, message } = body

    // Validate required fields
    if (!name || !email || !phone || !service) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Here you would typically:
    // 1. Send an email notification using a service like SendGrid, Resend, or Nodemailer
    // 2. Store the lead in a database
    // 3. Add to CRM via API
    // 4. Send a confirmation email to the user

    // For now, we'll just log the submission and return success
    console.log('New contact form submission:', {
      name,
      email,
      phone,
      company,
      website,
      service,
      budget,
      message,
      timestamp: new Date().toISOString(),
    })

    // Simulate email sending delay
    await new Promise(resolve => setTimeout(resolve, 1000))

    return NextResponse.json(
      { 
        success: true,
        message: 'Thank you for your submission. We will contact you within 24 hours.'
      },
      { status: 200 }
    )
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

// Optional: Handle GET requests to check API status
export async function GET() {
  return NextResponse.json(
    { status: 'Contact API is running' },
    { status: 200 }
  )
}