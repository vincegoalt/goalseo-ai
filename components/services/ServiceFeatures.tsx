import { CheckCircle2 } from 'lucide-react'
import { Service } from '@/data/services'

interface ServiceFeaturesProps {
  service: Service
}

export default function ServiceFeatures({ service }: ServiceFeaturesProps) {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            What's Included in {service.title}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive features designed to maximize your SEO success
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {service.features.map((feature, index) => (
            <div
              key={index}
              className="flex items-start gap-4 p-6 bg-gray-50 rounded-xl hover:bg-primary-50 transition-colors"
            >
              <CheckCircle2 className="h-6 w-6 text-primary-500 flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">{feature}</h3>
                <p className="text-sm text-gray-600">
                  Professional implementation with proven results
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}