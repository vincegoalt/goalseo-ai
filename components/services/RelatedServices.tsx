import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { services, Service } from '@/data/services'

interface RelatedServicesProps {
  currentService: Service
}

export default function RelatedServices({ currentService }: RelatedServicesProps) {
  const relatedServices = services
    .filter(s => s.id !== currentService.id && s.category === currentService.category)
    .slice(0, 3)
    
  const otherServices = relatedServices.length < 3 
    ? services.filter(s => s.id !== currentService.id && !relatedServices.includes(s)).slice(0, 3 - relatedServices.length)
    : []
    
  const displayServices = [...relatedServices, ...otherServices].slice(0, 3)

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Related Services
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our other SEO services to maximize your online success
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {displayServices.map((service) => (
            <div
              key={service.id}
              className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-4 line-clamp-2">
                {service.shortDescription}
              </p>
              {service.price && (
                <div className="mb-4">
                  <span className="text-2xl font-bold text-gray-900">
                    ${service.price.starting}
                  </span>
                  <span className="text-gray-500">/{service.price.period}</span>
                </div>
              )}
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
    </section>
  )
}