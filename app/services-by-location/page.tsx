import { Metadata } from 'next'
import Link from 'next/link'
import locationData from '@/lib/location-data/location-services.json'
import { MapPin, Building2, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Local SEO Services by Location | GoalSEO.ai',
  description: 'Find specialized SEO services for your business in Long Beach and surrounding areas. Local SEO experts serving 35+ cities with proven results.',
  openGraph: {
    title: 'Local SEO Services by Location | GoalSEO.ai',
    description: 'Find specialized SEO services for your business in Long Beach and surrounding areas.',
    type: 'website',
    url: 'https://goalseo.ai/services-by-location',
  },
}

export default function ServicesByLocationPage() {
  // Group locations by first letter for easier navigation
  const locationsByLetter: Record<string, typeof locationData.locations> = {}
  
  locationData.locations.forEach(location => {
    const firstLetter = location.name[0].toUpperCase()
    if (!locationsByLetter[firstLetter]) {
      locationsByLetter[firstLetter] = []
    }
    locationsByLetter[firstLetter].push(location)
  })
  
  // Get unique services
  const services = locationData.services.map(s => s.name)
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto max-w-7xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">
            Local SEO Services Near Me
          </h1>
          <p className="text-xl text-center mb-8 text-blue-100 max-w-3xl mx-auto">
            Serving {locationData.locations.length} cities across Long Beach and surrounding areas 
            with specialized SEO solutions for {services.length} different industries
          </p>
          <div className="flex justify-center">
            <Link
              href="/free-audit"
              className="inline-flex items-center px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-colors"
            >
              Get Your Free SEO Audit
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-12 px-4 bg-white border-b">
        <div className="container mx-auto max-w-7xl">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">
                {locationData.locations.length}
              </div>
              <div className="text-gray-600">Cities Served</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">
                {services.length}
              </div>
              <div className="text-gray-600">Industry Specializations</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">
                {locationData.totalPages}
              </div>
              <div className="text-gray-600">Targeted Service Pages</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-3xl font-bold text-center mb-12">
            Industries We Serve
          </h2>
          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-center">
                  <Building2 className="h-5 w-5 mr-2 text-blue-600" />
                  <span className="font-semibold">{service}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Locations Directory */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-3xl font-bold text-center mb-12">
            Browse SEO Services by Location
          </h2>
          
          {/* Alphabetical Navigation */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {Object.keys(locationsByLetter).sort().map(letter => (
              <a
                key={letter}
                href={`#letter-${letter}`}
                className="px-3 py-1 bg-blue-100 text-blue-600 rounded hover:bg-blue-200 transition-colors font-semibold"
              >
                {letter}
              </a>
            ))}
          </div>

          {/* Locations Grid */}
          <div className="space-y-12">
            {Object.entries(locationsByLetter).sort().map(([letter, locations]) => (
              <div key={letter} id={`letter-${letter}`}>
                <h3 className="text-2xl font-bold mb-6 pb-2 border-b-2 border-blue-600">
                  {letter}
                </h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {locations.map((location, index) => (
                    <div
                      key={index}
                      className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow"
                    >
                      <h4 className="text-xl font-semibold mb-3 flex items-center">
                        <MapPin className="h-5 w-5 mr-2 text-blue-600" />
                        {location.name}
                      </h4>
                      <p className="text-gray-600 mb-4">
                        {location.services.length} specialized SEO services available
                      </p>
                      <details className="cursor-pointer">
                        <summary className="text-blue-600 hover:text-blue-700 font-semibold">
                          View Services →
                        </summary>
                        <ul className="mt-3 space-y-2">
                          {location.services.slice(0, 5).map((service, sIndex) => (
                            <li key={sIndex}>
                              <Link
                                href={service.slug}
                                className="text-gray-600 hover:text-blue-600 transition-colors text-sm flex items-center"
                              >
                                <ArrowRight className="h-3 w-3 mr-1" />
                                {service.service} SEO
                              </Link>
                            </li>
                          ))}
                          {location.services.length > 5 && (
                            <li className="text-sm text-gray-500">
                              +{location.services.length - 5} more services
                            </li>
                          )}
                        </ul>
                      </details>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Can't Find Your Location?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            We serve all of Southern California! Contact us to discuss SEO services for your area.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-colors text-lg"
            >
              Contact Us Today
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <a
              href="tel:5625013366"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-colors text-lg"
            >
              Call (562) 501-3366
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}