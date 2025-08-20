import { Metadata } from 'next'
import ContactForm from '@/components/contact/ContactForm'
import ContactInfo from '@/components/contact/ContactInfo'
import ContactMap from '@/components/contact/ContactMap'

export const metadata: Metadata = {
  title: 'Contact Us | Get Your Free SEO Audit',
  description: 'Contact GoalSEO.ai for a free SEO audit and consultation. Call (562) 682-9403 or fill out our form for a custom SEO strategy.',
}

export default function ContactPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary-50 via-white to-electric-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Let's Achieve Your{' '}
              <span className="bg-gradient-to-r from-primary-500 to-electric-500 bg-clip-text text-transparent">
                SEO Goals Together
              </span>
            </h1>
            <p className="text-xl text-gray-600">
              Get your free SEO audit and custom strategy. We'll show you exactly how to 
              dominate your competition and achieve 387% average ROI.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Form - 2 columns */}
            <div className="lg:col-span-2">
              <ContactForm />
            </div>
            
            {/* Contact Info - 1 column */}
            <div>
              <ContactInfo />
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <ContactMap />
    </div>
  )
}