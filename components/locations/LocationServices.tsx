import Link from 'next/link'
import { MapPin, Globe, ShoppingCart, Building, TrendingUp, Users } from 'lucide-react'
import { Location } from '@/data/locations'

interface LocationServicesProps {
  location: Location
}

export default function LocationServices({ location }: LocationServicesProps) {
  const localServices = [
    {
      icon: MapPin,
      title: `Local SEO in ${location.city}`,
      description: `Dominate local search results and Google Maps in ${location.city}`,
      features: [
        'Google My Business optimization',
        'Local citation building',
        'Review management',
        'Local content creation'
      ]
    },
    {
      icon: ShoppingCart,
      title: 'E-commerce SEO',
      description: `Help ${location.city} online stores increase sales and visibility`,
      features: [
        'Product page optimization',
        'Category optimization',
        'Shopping feed management',
        'Conversion optimization'
      ]
    },
    {
      icon: Building,
      title: 'Small Business SEO',
      description: `Affordable SEO solutions for ${location.city} small businesses`,
      features: [
        'Competitor analysis',
        'Keyword research',
        'On-page optimization',
        'Monthly reporting'
      ]
    },
    {
      icon: Globe,
      title: 'National SEO',
      description: `Expand beyond ${location.city} to reach national markets`,
      features: [
        'National keyword targeting',
        'Content strategy',
        'Link building',
        'Brand visibility'
      ]
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            SEO Services We Offer in {location.city}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive SEO solutions tailored for businesses in {location.city} and {location.county ? `${location.county} County` : 'surrounding areas'}
            {location.industries && location.industries.length > 0 && (
              <>. Specializing in {location.industries.slice(0, 3).join(', ')} industries</>
            )}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {localServices.map((service, index) => {
            const Icon = service.icon
            return (
              <div
                key={index}
                className="bg-gray-50 rounded-xl p-6 hover:bg-primary-50 transition-colors"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-electric-500 rounded-lg flex items-center justify-center text-white flex-shrink-0">
                    <Icon className="h-6 w-6" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 mb-4">
                      {service.description}
                    </p>
                    <ul className="space-y-2">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                          <span className="text-primary-500 mt-0.5">✓</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {location.businessStats && (
          <div className="mt-12 bg-gradient-to-r from-primary-50 to-electric-50 rounded-xl p-8">
            <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
              {location.city} Business Landscape
            </h3>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              {location.businessStats.totalBusinesses && (
                <div>
                  <div className="text-3xl font-bold text-primary-600">
                    {location.businessStats.totalBusinesses.toLocaleString()}+
                  </div>
                  <div className="text-sm text-gray-600">Active Businesses</div>
                </div>
              )}
              {location.businessStats.growthRate && (
                <div>
                  <div className="text-3xl font-bold text-primary-600">
                    {location.businessStats.growthRate}
                  </div>
                  <div className="text-sm text-gray-600">Annual Growth</div>
                </div>
              )}
              {location.businessStats.topIndustries && (
                <div>
                  <div className="text-lg font-bold text-primary-600">
                    {location.businessStats.topIndustries[0]}
                  </div>
                  <div className="text-sm text-gray-600">Leading Industry</div>
                </div>
              )}
            </div>
          </div>
        )}

        <div className="mt-12 text-center">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-primary-600 font-semibold hover:text-primary-700 transition-colors"
          >
            View All Our Services →
          </Link>
        </div>
      </div>
    </section>
  )
}