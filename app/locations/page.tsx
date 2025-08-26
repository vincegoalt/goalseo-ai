"use client"

import { motion } from 'framer-motion'
import Link from 'next/link'
import { 
  MapPin, Globe, TrendingUp, Users, Building,
  ArrowRight, CheckCircle, Star, Search, Shield
} from 'lucide-react'

export default function LocationsPage() {
  const majorCities = [
    // California
    { name: 'Los Angeles', state: 'CA', slug: 'los-angeles', ranking: '#1 SEO Agency' },
    { name: 'San Francisco', state: 'CA', slug: 'san-francisco', ranking: 'Top Rated' },
    { name: 'San Diego', state: 'CA', slug: 'san-diego', ranking: '500+ Clients' },
    { name: 'San Jose', state: 'CA', slug: 'san-jose', ranking: 'Tech Hub Expert' },
    { name: 'Long Beach', state: 'CA', slug: 'long-beach', ranking: 'Local Leader' },
    { name: 'Sacramento', state: 'CA', slug: 'sacramento', ranking: 'Capital Choice' },
    
    // New York
    { name: 'New York City', state: 'NY', slug: 'new-york-city', ranking: '#1 Enterprise SEO' },
    { name: 'Brooklyn', state: 'NY', slug: 'brooklyn', ranking: 'E-commerce Expert' },
    { name: 'Queens', state: 'NY', slug: 'queens', ranking: 'Multilingual SEO' },
    { name: 'Buffalo', state: 'NY', slug: 'buffalo', ranking: 'Regional Leader' },
    
    // Texas
    { name: 'Houston', state: 'TX', slug: 'houston', ranking: 'Energy Sector SEO' },
    { name: 'Dallas', state: 'TX', slug: 'dallas', ranking: 'B2B Specialist' },
    { name: 'Austin', state: 'TX', slug: 'austin', ranking: 'Startup Favorite' },
    { name: 'San Antonio', state: 'TX', slug: 'san-antonio', ranking: 'Healthcare SEO' },
    
    // Florida
    { name: 'Miami', state: 'FL', slug: 'miami', ranking: 'International SEO' },
    { name: 'Orlando', state: 'FL', slug: 'orlando', ranking: 'Tourism Expert' },
    { name: 'Tampa', state: 'FL', slug: 'tampa', ranking: 'Growth Leader' },
    { name: 'Jacksonville', state: 'FL', slug: 'jacksonville', ranking: 'Logistics SEO' },
    
    // Other Major Cities
    { name: 'Chicago', state: 'IL', slug: 'chicago', ranking: 'Midwest Leader' },
    { name: 'Phoenix', state: 'AZ', slug: 'phoenix', ranking: 'Fastest Growing' },
    { name: 'Philadelphia', state: 'PA', slug: 'philadelphia', ranking: 'Historic Excellence' },
    { name: 'Las Vegas', state: 'NV', slug: 'las-vegas', ranking: 'Hospitality Expert' },
    { name: 'Seattle', state: 'WA', slug: 'seattle', ranking: 'Tech Pioneer' },
    { name: 'Boston', state: 'MA', slug: 'boston', ranking: 'Education Sector' },
    { name: 'Atlanta', state: 'GA', slug: 'atlanta', ranking: 'Southeast Hub' },
    { name: 'Denver', state: 'CO', slug: 'denver', ranking: 'Mountain Region' },
    { name: 'Portland', state: 'OR', slug: 'portland', ranking: 'Creative Industries' },
    { name: 'Detroit', state: 'MI', slug: 'detroit', ranking: 'Manufacturing SEO' },
    { name: 'Nashville', state: 'TN', slug: 'nashville', ranking: 'Music Industry' },
    { name: 'Charlotte', state: 'NC', slug: 'charlotte', ranking: 'Finance Sector' },
    { name: 'Tulsa', state: 'OK', slug: 'tulsa', ranking: 'Oil & Energy SEO' }
  ]

  const states = [
    'Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware',
    'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky',
    'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi',
    'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico',
    'New York', 'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania',
    'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont',
    'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'
  ]

  const benefits = [
    {
      icon: MapPin,
      title: 'Local Expertise',
      description: 'Deep understanding of your local market and competition'
    },
    {
      icon: Globe,
      title: 'National Reach',
      description: 'Scale from local to national with our proven strategies'
    },
    {
      icon: Users,
      title: 'Local & Global Team',
      description: 'On-ground support with global AI technology'
    },
    {
      icon: Shield,
      title: 'Guaranteed Results',
      description: '387% average traffic increase or your money back'
    }
  ]

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-b from-primary-50 via-white to-gray-50 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-96 h-96 bg-primary-300/30 rounded-full mix-blend-multiply filter blur-3xl animate-blob" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-electric-300/30 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary-100 to-electric-100 text-primary-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <MapPin className="h-4 w-4" />
              <span>Nationwide Coverage</span>
            </div>

            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              SEO Services{' '}
              <span className="bg-gradient-to-r from-primary-500 to-electric-500 bg-clip-text text-transparent">
                Everywhere
              </span>
            </h1>

            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              From coast to coast, our AI-powered SEO services help businesses dominate 
              local search results in every major city across America.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/free-audit"
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-primary-500 to-primary-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-primary-600 hover:to-primary-700 transition-all shadow-xl"
              >
                Get Local SEO Audit
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-white text-primary-600 border-2 border-primary-200 px-8 py-4 rounded-xl font-semibold hover:bg-primary-50 transition-all"
              >
                Find Your City
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-8 bg-gradient-to-r from-primary-500 to-electric-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 text-white text-center">
            <div>
              <div className="text-3xl font-bold">50</div>
              <div className="text-sm opacity-90">States Covered</div>
            </div>
            <div>
              <div className="text-3xl font-bold">500+</div>
              <div className="text-sm opacity-90">Cities Served</div>
            </div>
            <div>
              <div className="text-3xl font-bold">10,000+</div>
              <div className="text-sm opacity-90">Local Businesses</div>
            </div>
            <div>
              <div className="text-3xl font-bold">387%</div>
              <div className="text-sm opacity-90">Avg Traffic Increase</div>
            </div>
          </div>
        </div>
      </section>

      {/* Major Cities Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Major Cities We Serve
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Click on any city to learn about our local SEO services and success stories
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4">
            {majorCities.map((city, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.02 }}
              >
                <Link
                  href={`/locations/${city.slug}`}
                  className="block p-4 bg-gray-50 rounded-lg hover:bg-white hover:shadow-lg transition-all border border-gray-200 hover:border-primary-300 group"
                >
                  <div className="flex items-center justify-between mb-2">
                    <div>
                      <h3 className="font-semibold text-gray-900 group-hover:text-primary-600 transition-colors">
                        {city.name}
                      </h3>
                      <p className="text-sm text-gray-600">{city.state}</p>
                    </div>
                    <MapPin className="h-5 w-5 text-primary-500 group-hover:scale-110 transition-transform" />
                  </div>
                  <div className="flex items-center gap-2">
                    <Star className="h-4 w-4 text-yellow-500 fill-current" />
                    <span className="text-xs text-gray-600">{city.ranking}</span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* All States */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              SEO Services in All 50 States
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              No matter where you're located, we have local SEO expertise for your area
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-3">
            {states.map((state, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.01 }}
                className="bg-white p-3 rounded-lg text-center hover:shadow-md transition-all cursor-pointer hover:bg-primary-50"
              >
                <span className="text-sm text-gray-700 hover:text-primary-600">{state}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Why Choose GoalSEO for Local SEO?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Combine local market knowledge with global AI technology
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-primary-100 to-electric-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Icon className="h-8 w-8 text-primary-600" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Local Success Stories */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Local Success Stories
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real results from real local businesses across America
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {[
              {
                business: 'LA Fitness Studio',
                location: 'Los Angeles, CA',
                result: '+423% local traffic',
                testimonial: 'Went from invisible to #1 for "gym near me" in 60 days'
              },
              {
                business: 'NYC Pizza Co',
                location: 'New York, NY',
                result: '+892% phone calls',
                testimonial: 'Our phone hasn\'t stopped ringing since using GoalSEO'
              },
              {
                business: 'Miami Beach Hotel',
                location: 'Miami, FL',
                result: '+567% bookings',
                testimonial: 'Outranking major chains for local hotel searches'
              }
            ].map((story, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-lg border border-gray-200"
              >
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-500 fill-current" />
                  ))}
                </div>
                <h3 className="font-bold text-gray-900 mb-1">{story.business}</h3>
                <p className="text-sm text-gray-600 mb-3">{story.location}</p>
                <div className="text-2xl font-bold text-primary-600 mb-3">{story.result}</div>
                <p className="text-gray-700 italic">"{story.testimonial}"</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-500 to-electric-500 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Dominate Your Local Market
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Get found by customers in your city searching for your services
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/free-audit"
                className="inline-flex items-center justify-center gap-2 bg-white text-primary-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-all shadow-xl"
              >
                <MapPin className="h-5 w-5" />
                Get Local SEO Audit
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur text-white border-2 border-white/30 px-8 py-4 rounded-xl font-semibold hover:bg-white/20 transition-all"
              >
                Talk to Local Expert
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}