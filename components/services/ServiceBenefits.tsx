import { TrendingUp, Target, Zap, Award } from 'lucide-react'
import { Service } from '@/data/services'

interface ServiceBenefitsProps {
  service: Service
}

const getIcon = (index: number) => {
  const icons = [TrendingUp, Target, Zap, Award]
  const Icon = icons[index % icons.length]
  return <Icon className="h-8 w-8" />
}

export default function ServiceBenefits({ service }: ServiceBenefitsProps) {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Benefits of Our {service.title}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Real results that impact your bottom line
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {service.benefits.map((benefit, index) => (
            <div key={index} className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-primary-500 to-electric-500 rounded-full text-white mb-4">
                {getIcon(index)}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Benefit {index + 1}
              </h3>
              <p className="text-gray-600">{benefit}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}