import Link from 'next/link'
import { MapPin, Phone, ArrowRight } from 'lucide-react'
import { Location } from '@/data/locations'
import { siteConfig } from '@/config/site'

interface LocationHeroProps {
  location: Location
}

export default function LocationHero({ location }: LocationHeroProps) {
  return (
    <section className="py-20 bg-gradient-to-br from-primary-50 via-white to-electric-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            {/* Breadcrumb */}
            <nav className="mb-6">
              <ol className="flex items-center space-x-2 text-sm">
                <li>
                  <Link href="/" className="text-gray-500 hover:text-primary-500">
                    Home
                  </Link>
                </li>
                <li className="text-gray-400">/</li>
                <li>
                  <Link href="/locations" className="text-gray-500 hover:text-primary-500">
                    Locations
                  </Link>
                </li>
                <li className="text-gray-400">/</li>
                <li className="text-primary-600 font-medium">{location.city}</li>
              </ol>
            </nav>

            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              SEO Services in{' '}
              <span className="bg-gradient-to-r from-primary-500 to-electric-500 bg-clip-text text-transparent">
                {location.city}, {location.stateAbbr}
              </span>
            </h1>

            <p className="text-xl text-gray-600 mb-8">
              {location.description ? (
                <>
                  {location.description}. Dominate local search results with our proven SEO strategies 
                  tailored for {location.nickname ? `"${location.nickname}"` : location.city}.
                </>
              ) : (
                <>
                  Dominate local search results in {location.city} with our proven SEO strategies. 
                  We help businesses in {location.county ? `${location.county} County` : location.city} achieve 
                  top rankings, more traffic, and increased revenue.
                </>
              )}
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-primary-500" />
                <span className="text-gray-700">
                  Serving {location.city} and surrounding areas
                  {location.population && ` (Population: ${location.population.toLocaleString()})`}
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-primary-500" />
                <span className="text-gray-700">
                  Local experts available at {siteConfig.phone}
                </span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-primary-500 to-primary-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-primary-600 hover:to-primary-700 transition-all transform hover:scale-105 shadow-xl"
              >
                Get Free Local SEO Audit
                <ArrowRight className="h-5 w-5" />
              </Link>
              <a
                href={`tel:${siteConfig.phone.replace(/\D/g, '')}`}
                className="inline-flex items-center justify-center gap-2 bg-white text-primary-600 border-2 border-primary-200 px-8 py-4 rounded-lg font-semibold hover:bg-primary-50 transition-all"
              >
                <Phone className="h-5 w-5" />
                Call Now
              </a>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Why Choose GoalSEO for {location.city} SEO?
            </h2>
            
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-success-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-success-600 text-sm">✓</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Local Market Expertise</h3>
                  <p className="text-gray-600 text-sm">Deep understanding of {location.city} market and competition</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-success-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-success-600 text-sm">✓</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Proven Local Results</h3>
                  <p className="text-gray-600 text-sm">500+ businesses ranked in {location.state}</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-success-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-success-600 text-sm">✓</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Google My Business Optimization</h3>
                  <p className="text-gray-600 text-sm">Dominate the local pack and map results</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-success-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-success-600 text-sm">✓</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">387% Average ROI</h3>
                  <p className="text-gray-600 text-sm">Measurable results that impact your bottom line</p>
                </div>
              </div>
            </div>

            {location.neighborhoods && location.neighborhoods.length > 0 && (
              <div className="mt-6 pt-6 border-t border-gray-200">
                <h3 className="text-sm font-semibold text-gray-900 mb-2">
                  Serving All {location.city} Neighborhoods:
                </h3>
                <div className="flex flex-wrap gap-2">
                  {location.neighborhoods.slice(0, 6).map((neighborhood, index) => (
                    <span
                      key={index}
                      className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded"
                    >
                      {neighborhood}
                    </span>
                  ))}
                  {location.neighborhoods.length > 6 && (
                    <span className="text-xs text-gray-500">
                      +{location.neighborhoods.length - 6} more
                    </span>
                  )}
                </div>
              </div>
            )}
            
            {location.landmarks && location.landmarks.length > 0 && (
              <div className="mt-4">
                <h3 className="text-sm font-semibold text-gray-900 mb-2">
                  Near Famous {location.city} Landmarks:
                </h3>
                <div className="text-xs text-gray-600">
                  {location.landmarks.slice(0, 3).join(' • ')}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}