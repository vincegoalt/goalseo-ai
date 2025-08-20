import { Metadata } from 'next'
import Link from 'next/link'
import { services } from '@/data/services'
import { ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'SEO Services | Professional Digital Marketing Solutions',
  description: 'Comprehensive SEO services including local SEO, national campaigns, e-commerce optimization, and enterprise solutions. Get 387% average ROI.',
}

export default function ServicesPage() {
  const categories = [
    { id: 'core', name: 'Core SEO Services', description: 'Essential SEO solutions for every business' },
    { id: 'technical', name: 'Technical SEO', description: 'Advanced technical optimization' },
    { id: 'specialized', name: 'Specialized Services', description: 'Industry-specific SEO solutions' },
    { id: 'marketing', name: 'Content Marketing', description: 'Content-driven SEO strategies' },
  ]

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary-50 via-white to-electric-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Professional SEO Services That{' '}
              <span className="bg-gradient-to-r from-primary-500 to-electric-500 bg-clip-text text-transparent">
                Drive Results
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              From local businesses to enterprise corporations, we have the expertise and tools 
              to achieve your specific SEO objectives with an average 387% ROI.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/free-audit"
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-primary-500 to-primary-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-primary-600 hover:to-primary-700 transition-all transform hover:scale-105 shadow-xl"
              >
                Get Free SEO Audit
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-white text-primary-600 border-2 border-primary-200 px-8 py-4 rounded-lg font-semibold hover:bg-primary-50 transition-all"
              >
                Schedule Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {categories.map((category) => {
            const categoryServices = services.filter(s => s.category === category.id)
            if (categoryServices.length === 0) return null

            return (
              <div key={category.id} className="mb-16">
                <div className="mb-8">
                  <h2 className="text-3xl font-bold text-gray-900 mb-2">{category.name}</h2>
                  <p className="text-gray-600">{category.description}</p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {categoryServices.map((service) => (
                    <div
                      key={service.id}
                      className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-xl transition-all hover:-translate-y-1"
                    >
                      <h3 className="text-xl font-bold text-gray-900 mb-3">
                        {service.title}
                      </h3>
                      <p className="text-gray-600 mb-4">
                        {service.shortDescription}
                      </p>
                      
                      {/* Key Features */}
                      <ul className="space-y-2 mb-6">
                        {service.features.slice(0, 3).map((feature, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                            <span className="text-primary-500 mt-0.5">✓</span>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Price */}
                      {service.price && (
                        <div className="mb-6">
                          <span className="text-sm text-gray-500">Starting at</span>
                          <div className="text-2xl font-bold text-gray-900">
                            ${service.price.starting.toLocaleString()}
                            <span className="text-sm font-normal text-gray-500">/{service.price.period}</span>
                          </div>
                        </div>
                      )}

                      {/* CTA */}
                      <Link
                        href={`/services/${service.slug}`}
                        className="inline-flex items-center gap-2 text-primary-600 font-semibold hover:text-primary-700 transition-colors"
                      >
                        Learn More
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-500 to-electric-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Not Sure Which Service You Need?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Get a free consultation and custom SEO strategy tailored to your business goals.
          </p>
          <Link
            href="/free-audit"
            className="inline-flex items-center justify-center gap-2 bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all transform hover:scale-105 shadow-xl"
          >
            Get Your Free SEO Audit
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}