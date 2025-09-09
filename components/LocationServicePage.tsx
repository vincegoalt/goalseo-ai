'use client'

import React from 'react'
import Link from 'next/link'
import { Phone, Mail, MapPin, Star, Check, ArrowRight, Clock, Users, Award, TrendingUp } from 'lucide-react'

interface LocationServicePageProps {
  location: string
  service: string
  metaTitle: string
  metaDescription: string
  slug: string
}

export default function LocationServicePage({
  location,
  service,
  metaTitle,
  metaDescription,
  slug
}: LocationServicePageProps) {
  // Core SEO services we offer
  const seoServices = [
    {
      name: 'GEO (Generative Engine Optimization)',
      description: 'Optimize for AI-powered search engines and chatbots',
      icon: '🤖'
    },
    {
      name: 'AEO (Answer Engine Optimization)',
      description: 'Rank in featured snippets and voice search results',
      icon: '💬'
    },
    {
      name: 'Local SEO',
      description: 'Dominate local search results and Google Maps',
      icon: '📍'
    },
    {
      name: 'WordPress SEO',
      description: 'Complete WordPress optimization and performance',
      icon: '⚡'
    },
    {
      name: 'Shopify SEO',
      description: 'E-commerce optimization for maximum visibility',
      icon: '🛒'
    },
    {
      name: 'Technical SEO',
      description: 'Site speed, crawlability, and technical excellence',
      icon: '⚙️'
    },
    {
      name: 'Link Building',
      description: 'High-quality backlinks from authoritative sites',
      icon: '🔗'
    },
    {
      name: 'Web Development',
      description: 'SEO-optimized website design and development',
      icon: '💻'
    }
  ]

  // Benefits specific to the service industry
  const industryBenefits = [
    'Increase local visibility and attract more customers',
    'Outrank competitors in your service area',
    'Generate qualified leads 24/7',
    'Build trust with customer reviews and ratings',
    'Mobile-optimized for on-the-go searches',
    'Track ROI with detailed analytics and reporting'
  ]

  // Local area stats (these could be dynamic based on actual data)
  const localStats = [
    { label: 'Local Searches', value: '97%', desc: 'of consumers search online for local businesses' },
    { label: 'Mobile Searches', value: '88%', desc: 'of local searches are made on mobile devices' },
    { label: 'Same-Day Visits', value: '76%', desc: 'of local searches result in a visit within 24 hours' },
    { label: 'Purchase Intent', value: '28%', desc: 'of local searches result in a purchase' }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto max-w-7xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                {service} SEO Services in {location}
              </h1>
              <p className="text-xl mb-8 text-blue-100">
                {metaDescription}
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
                <h3 className="text-2xl font-bold mb-4">Why Choose GoalSEO?</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Check className="h-6 w-6 mr-3 flex-shrink-0 text-green-400" />
                    <span>Local {location} SEO Experts</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-6 w-6 mr-3 flex-shrink-0 text-green-400" />
                    <span>Proven Results for {service}</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-6 w-6 mr-3 flex-shrink-0 text-green-400" />
                    <span>100% Transparency & Reporting</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-6 w-6 mr-3 flex-shrink-0 text-green-400" />
                    <span>No Long-Term Contracts</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Local Stats Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-3xl font-bold text-center mb-12">
            Why Local SEO Matters for {service} in {location}
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
            {localStats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">{stat.value}</div>
                <div className="text-gray-900 font-semibold mb-1">{stat.label}</div>
                <div className="text-sm text-gray-600">{stat.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-3xl font-bold text-center mb-4">
            Complete SEO Solutions for {service} in {location}
          </h2>
          <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            We offer a comprehensive suite of SEO services tailored specifically for {service.toLowerCase()} businesses in {location}
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {seoServices.map((svc, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                <div className="text-4xl mb-4">{svc.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{svc.name}</h3>
                <p className="text-gray-600">{svc.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-7xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">
                Grow Your {service} Business in {location}
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Our proven SEO strategies help {service.toLowerCase()} businesses in {location} attract more customers, 
                increase revenue, and dominate local search results.
              </p>
              <ul className="space-y-4">
                {industryBenefits.map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <Check className="h-6 w-6 mr-3 flex-shrink-0 text-green-500" />
                    <span className="text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6">Get Started Today</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Clock className="h-6 w-6 mr-3 text-blue-600" />
                  <span>Free 30-minute consultation</span>
                </div>
                <div className="flex items-center">
                  <Users className="h-6 w-6 mr-3 text-blue-600" />
                  <span>Dedicated account manager</span>
                </div>
                <div className="flex items-center">
                  <Award className="h-6 w-6 mr-3 text-blue-600" />
                  <span>Guaranteed results or money back</span>
                </div>
                <div className="flex items-center">
                  <TrendingUp className="h-6 w-6 mr-3 text-blue-600" />
                  <span>Monthly progress reports</span>
                </div>
              </div>
              <Link
                href="/contact"
                className="mt-6 w-full inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
              >
                Schedule Free Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Dominate {location} Search Results?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Join hundreds of successful {service.toLowerCase()} businesses that trust GoalSEO 
            for their digital marketing success.
          </p>
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
        </div>
      </section>

      {/* Local Info Footer */}
      <section className="py-12 px-4 bg-gray-100">
        <div className="container mx-auto max-w-7xl">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-semibold mb-3 flex items-center">
                <MapPin className="h-5 w-5 mr-2 text-blue-600" />
                Serving {location}
              </h3>
              <p className="text-gray-600">
                Local SEO experts with deep knowledge of the {location} market and {service.toLowerCase()} industry.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-3 flex items-center">
                <Star className="h-5 w-5 mr-2 text-blue-600" />
                Proven Results
              </h3>
              <p className="text-gray-600">
                Helping {service.toLowerCase()} businesses rank #1 in {location} local search results.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-3 flex items-center">
                <Mail className="h-5 w-5 mr-2 text-blue-600" />
                Get in Touch
              </h3>
              <p className="text-gray-600">
                Email: info@goalseo.ai<br />
                Phone: (562) 682-9403
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}