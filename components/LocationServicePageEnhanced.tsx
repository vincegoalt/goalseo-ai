'use client'

import React from 'react'
import Link from 'next/link'
import Script from 'next/script'
import { Phone, Mail, MapPin, Star, Check, ArrowRight, Clock, Users, Award, TrendingUp, Target, Shield, Zap, DollarSign, ChevronRight, Home } from 'lucide-react'
import { 
  generateOpeningParagraph, 
  generateLocalBenefits, 
  generateTestimonials,
  generateLocalInsights,
  generateSEOStrategies,
  generateFAQs,
  generateMetaDescription
} from '@/lib/location-data/content-generator'
import { locationDetails } from '@/lib/location-data/location-details'
import { serviceDetails } from '@/lib/location-data/service-details'
import locationServicesData from '@/lib/location-data/location-services.json'

interface LocationServicePageProps {
  location: string
  service: string
  metaTitle: string
  metaDescription: string
  slug: string
}

// Breadcrumb Component
function Breadcrumbs({ location, service }: { location: string; service: string }) {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://goalseo.ai"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "SEO Services",
        "item": "https://goalseo.ai/services-by-location"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": location,
        "item": `https://goalseo.ai/${location.toLowerCase().replace(/\s+/g, '-')}`
      },
      {
        "@type": "ListItem",
        "position": 4,
        "name": `${service} SEO`,
        "item": `https://goalseo.ai/${location.toLowerCase().replace(/\s+/g, '-')}/${service.toLowerCase().replace(/\s+/g, '-')}-seo`
      }
    ]
  }

  return (
    <>
      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema)
        }}
      />
      <nav className="bg-gray-50 border-b">
        <div className="container mx-auto max-w-7xl px-4 py-3">
          <ol className="flex items-center space-x-2 text-sm">
            <li>
              <Link href="/" className="text-gray-500 hover:text-blue-600 flex items-center">
                <Home className="h-4 w-4 mr-1" />
                Home
              </Link>
            </li>
            <ChevronRight className="h-4 w-4 text-gray-400" />
            <li>
              <Link href="/services-by-location" className="text-gray-500 hover:text-blue-600">
                SEO Services
              </Link>
            </li>
            <ChevronRight className="h-4 w-4 text-gray-400" />
            <li>
              <Link 
                href="/services-by-location#location" 
                className="text-gray-500 hover:text-blue-600"
              >
                {location}
              </Link>
            </li>
            <ChevronRight className="h-4 w-4 text-gray-400" />
            <li className="text-gray-900 font-semibold">
              {service} SEO
            </li>
          </ol>
        </div>
      </nav>
    </>
  )
}

// Related Services Component - shows other services in same location
function RelatedServices({ location, currentService }: { location: string; currentService: string }) {
  const locationSlug = location.toLowerCase().replace(/\s+/g, '-')
  const locationObj = locationServicesData.locations.find(loc => 
    loc.slug === locationSlug || loc.name === location
  )
  
  if (!locationObj) return null
  
  // Get up to 5 other services in the same location
  const otherServices = locationObj.services
    .filter(s => !s.service.toLowerCase().includes(currentService.toLowerCase()))
    .slice(0, 5)
  
  if (otherServices.length === 0) return null
  
  return (
    <section className="py-12 px-4 bg-gray-50">
      <div className="container mx-auto max-w-7xl">
        <h3 className="text-2xl font-bold mb-6">Other SEO Services in {location}</h3>
        <div className="grid md:grid-cols-5 gap-4">
          {otherServices.map((service, index) => (
            <Link
              key={index}
              href={service.slug}
              className="bg-white rounded-lg p-4 hover:shadow-lg transition-shadow text-center"
            >
              <div className="text-blue-600 font-semibold">
                {service.service} SEO
              </div>
              <ArrowRight className="h-4 w-4 mx-auto mt-2 text-gray-400" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

// Nearby Locations Component - shows same service in nearby locations
function NearbyLocations({ location, service }: { location: string; service: string }) {
  const serviceSlug = service.toLowerCase().replace(/\s+/g, '-')
  const currentLocationSlug = location.toLowerCase().replace(/\s+/g, '-')
  
  // Find service object
  const serviceObj = locationServicesData.services.find(s => 
    s.name.toLowerCase().replace(/\s+/g, '-') === serviceSlug ||
    s.name.toLowerCase() === service.toLowerCase()
  )
  
  if (!serviceObj) return null
  
  // Get up to 6 nearby locations (excluding current)
  const nearbyLocations = serviceObj.locations
    .filter(l => !l.location.toLowerCase().includes(location.toLowerCase()))
    .slice(0, 6)
  
  if (nearbyLocations.length === 0) return null
  
  return (
    <section className="py-12 px-4 bg-white border-t">
      <div className="container mx-auto max-w-7xl">
        <h3 className="text-2xl font-bold mb-6">{service} SEO in Nearby Cities</h3>
        <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-4">
          {nearbyLocations.map((loc, index) => (
            <Link
              key={index}
              href={loc.slug}
              className="bg-blue-50 rounded-lg p-4 hover:bg-blue-100 transition-colors text-center"
            >
              <MapPin className="h-5 w-5 mx-auto mb-2 text-blue-600" />
              <div className="text-sm font-semibold text-gray-900">
                {loc.location}
              </div>
            </Link>
          ))}
        </div>
        <div className="text-center mt-6">
          <Link 
            href="/services-by-location" 
            className="text-blue-600 hover:text-blue-700 font-semibold inline-flex items-center"
          >
            View All Locations
            <ArrowRight className="h-4 w-4 ml-1" />
          </Link>
        </div>
      </div>
    </section>
  )
}

export default function LocationServicePageEnhanced({
  location,
  service,
  metaTitle,
  metaDescription,
  slug
}: LocationServicePageProps) {
  // Get unique content for this specific page
  const locationSlug = location.toLowerCase().replace(/\s+/g, '-')
  const serviceSlug = service.toLowerCase().replace(/\s+/g, '-').replace('-seo', '').replace('auto-services', 'auto-services').replace('cpas', 'cpas')
  
  const locationData = locationDetails[locationSlug]
  const serviceData = serviceDetails[serviceSlug] || serviceDetails[service.toLowerCase().replace(/\s+/g, '-')]
  
  const openingParagraph = generateOpeningParagraph(location, service)
  const localBenefits = generateLocalBenefits(location, service)
  const testimonials = generateTestimonials(location, service)
  const localInsights = generateLocalInsights(location, service)
  const seoStrategies = generateSEOStrategies(location, service)
  const faqs = generateFAQs(location, service)
  
  // Generate schema markup for local business
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": `GoalSEO - ${service} SEO Services in ${location}`,
    "description": metaDescription,
    "url": `https://goalseo.ai${slug}`,
    "telephone": "+1-562-682-9403",
    "email": "info@goalseo.ai",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": location,
      "addressRegion": "CA",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "33.7701",
      "longitude": "-118.1937"
    },
    "areaServed": {
      "@type": "City",
      "name": location
    },
    "priceRange": serviceData?.averageTicket || "$$",
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "09:00",
      "closes": "18:00"
    }
  }

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  }

  return (
    <>
      {/* Schema Markup */}
      <Script
        id="schema-local-business"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schemaData)
        }}
      />
      <Script
        id="schema-faq"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema)
        }}
      />

      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        {/* Breadcrumbs */}
        <Breadcrumbs location={location} service={service} />

        {/* Hero Section with Unique Content */}
        <section className="relative py-20 px-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="container mx-auto max-w-7xl">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold mb-6">
                  {service} SEO Services in {location}
                </h1>
                <p className="text-xl mb-8 text-blue-100">
                  {openingParagraph}
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/free-audit"
                    className="inline-flex items-center justify-center px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-colors"
                  >
                    Get Free SEO Audit
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center px-6 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-colors"
                  >
                    <Phone className="mr-2 h-5 w-5" />
                    Call (562) 682-9403
                  </Link>
                </div>
              </div>
              <div className="hidden md:block">
                <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8">
                  <h3 className="text-2xl font-bold mb-4">Local Market Expertise</h3>
                  {locationData && (
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <MapPin className="h-6 w-6 mr-3 flex-shrink-0 text-green-400" />
                        <span>Serving {locationData.population} residents</span>
                      </li>
                      <li className="flex items-start">
                        <Users className="h-6 w-6 mr-3 flex-shrink-0 text-green-400" />
                        <span>{locationData.businessCount} local businesses</span>
                      </li>
                      <li className="flex items-start">
                        <DollarSign className="h-6 w-6 mr-3 flex-shrink-0 text-green-400" />
                        <span>Median income: {locationData.medianIncome}</span>
                      </li>
                      <li className="flex items-start">
                        <Target className="h-6 w-6 mr-3 flex-shrink-0 text-green-400" />
                        <span>{locationData.distance} from Long Beach</span>
                      </li>
                    </ul>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Local Insights Section */}
        <section className="py-16 px-4 bg-white">
          <div className="container mx-auto max-w-7xl">
            <h2 className="text-3xl font-bold text-center mb-12">
              {location} Market Intelligence for {service}
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {localInsights.map((insight, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-3">{insight.title}</h3>
                  <p className="text-gray-600">{insight.content}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Service-Specific SEO Strategies */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="container mx-auto max-w-7xl">
            <h2 className="text-3xl font-bold text-center mb-4">
              Proven SEO Strategies for {service} in {location}
            </h2>
            {serviceData && (
              <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
                Overcome {serviceData.competitionLevel.toLowerCase()} competition with strategies designed for {serviceData.frequency} service patterns and {serviceData.averageTicket} average tickets
              </p>
            )}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {seoStrategies.map((strategy, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                  <div className="text-3xl mb-4">
                    {index === 0 && <Target className="h-10 w-10 text-blue-600" />}
                    {index === 1 && <Zap className="h-10 w-10 text-blue-600" />}
                    {index === 2 && <Shield className="h-10 w-10 text-blue-600" />}
                    {index === 3 && <TrendingUp className="h-10 w-10 text-blue-600" />}
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{strategy.strategy}</h3>
                  <p className="text-gray-600 text-sm mb-2">{strategy.description}</p>
                  <p className="text-blue-600 font-semibold text-sm">{strategy.impact}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Unique Benefits Section */}
        <section className="py-16 px-4 bg-white">
          <div className="container mx-auto max-w-7xl">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">
                  Why {service} Choose GoalSEO in {location}
                </h2>
                {locationData && serviceData && (
                  <p className="text-xl text-gray-600 mb-8">
                    With {locationData.characteristics[0].toLowerCase()} and targeting {locationData.demographics.primary.toLowerCase()}, 
                    your {serviceData.name.toLowerCase()} business needs specialized strategies to overcome {serviceData.challenges[0].toLowerCase()}.
                  </p>
                )}
                <ul className="space-y-4">
                  {localBenefits.map((benefit, index) => (
                    <li key={index} className="flex items-start">
                      <Check className="h-6 w-6 mr-3 flex-shrink-0 text-green-500" />
                      <span className="text-gray-700">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8">
                {serviceData && (
                  <>
                    <h3 className="text-2xl font-bold mb-6">Service Metrics</h3>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center pb-2 border-b">
                        <span className="text-gray-600">Average Service Value</span>
                        <span className="font-semibold">{serviceData.averageTicket}</span>
                      </div>
                      <div className="flex justify-between items-center pb-2 border-b">
                        <span className="text-gray-600">Customer Frequency</span>
                        <span className="font-semibold">{serviceData.frequency}</span>
                      </div>
                      <div className="flex justify-between items-center pb-2 border-b">
                        <span className="text-gray-600">Peak Season</span>
                        <span className="font-semibold">{serviceData.seasonality}</span>
                      </div>
                      <div className="flex justify-between items-center pb-2 border-b">
                        <span className="text-gray-600">Competition Level</span>
                        <span className="font-semibold">{serviceData.competitionLevel}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600">Customer Lifetime</span>
                        <span className="font-semibold">{serviceData.customerLifetime}</span>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="container mx-auto max-w-7xl">
            <h2 className="text-3xl font-bold text-center mb-12">
              Success Stories from {location} {service}
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg p-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4 italic">"{testimonial.text}"</p>
                  <div className="border-t pt-4">
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.business}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Related Services in Same Location */}
        <RelatedServices location={location} currentService={service} />

        {/* FAQ Section */}
        <section className="py-16 px-4 bg-white">
          <div className="container mx-auto max-w-7xl">
            <h2 className="text-3xl font-bold text-center mb-12">
              Frequently Asked Questions
            </h2>
            <div className="max-w-3xl mx-auto space-y-6">
              {faqs.map((faq, index) => (
                <details key={index} className="bg-gray-50 rounded-lg p-6 cursor-pointer group">
                  <summary className="font-semibold text-lg flex items-center justify-between">
                    {faq.question}
                    <span className="ml-4 transition-transform group-open:rotate-180">▼</span>
                  </summary>
                  <p className="mt-4 text-gray-600">{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Nearby Locations for Same Service */}
        <NearbyLocations location={location} service={service} />

        {/* CTA Section */}
        <section className="py-16 px-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Dominate {location} Search Results?
            </h2>
            {locationData && serviceData && (
              <p className="text-xl mb-8 text-blue-100">
                Join successful {serviceData.name.toLowerCase()} near {locationData.landmarks[0]} who trust GoalSEO 
                to navigate {serviceData.competitionLevel.toLowerCase()} competition and capture {serviceData.averageTicket} value customers.
              </p>
            )}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/free-audit"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-colors text-lg"
              >
                Get Your Free SEO Audit
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <a
                href="tel:5626829403"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-colors text-lg"
              >
                <Phone className="mr-2 h-5 w-5" />
                (562) 682-9403
              </a>
            </div>
            
            {/* Quick Links to More Services */}
            <div className="mt-12 pt-8 border-t border-white/20">
              <p className="text-sm text-blue-100 mb-4">Explore More SEO Services:</p>
              <div className="flex flex-wrap justify-center gap-2">
                <Link href="/services-by-location" className="text-white hover:text-blue-200 underline text-sm">
                  All Locations
                </Link>
                <span className="text-blue-200">•</span>
                <Link href="/services" className="text-white hover:text-blue-200 underline text-sm">
                  All Services
                </Link>
                <span className="text-blue-200">•</span>
                <Link href="/local-seo" className="text-white hover:text-blue-200 underline text-sm">
                  Local SEO Guide
                </Link>
                <span className="text-blue-200">•</span>
                <Link href="/free-audit" className="text-white hover:text-blue-200 underline text-sm">
                  Free SEO Audit
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}