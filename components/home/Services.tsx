"use client"

import Link from 'next/link'
import { motion } from 'framer-motion'
import { 
  MapPin, Globe, Globe2, ShoppingCart, Building, Code, 
  FileText, Link as LinkIcon, Store, ArrowRight, Brain, 
  MessageSquare, Users, Sparkles, TrendingUp, Zap
} from 'lucide-react'
import { services } from '@/data/services'

interface FeaturedService extends Omit<typeof services[0], 'icon'> {
  icon: any
  gradient: string
  isNew?: boolean
  badge?: string
  badgeColor?: string
}

const featuredServices: FeaturedService[] = [
  {
    ...services[0], // GEO
    icon: Brain,
    gradient: 'from-purple-500 to-pink-500',
    isNew: true,
    badge: 'NEW',
    badgeColor: 'bg-red-500'
  },
  {
    ...services[1], // AEO
    icon: MessageSquare,
    gradient: 'from-blue-500 to-cyan-500',
    isNew: true,
    badge: 'NEW',
    badgeColor: 'bg-red-500'
  },
  {
    ...services[2], // Reddit SEO
    icon: TrendingUp,
    gradient: 'from-orange-500 to-red-500',
    isNew: true,
    badge: 'HOT',
    badgeColor: 'bg-orange-500'
  },
  {
    ...services[3], // AI Content
    icon: Sparkles,
    gradient: 'from-gradient-to-r from-primary-500 to-electric-500',
    isNew: true,
    badge: 'UPDATED',
    badgeColor: 'bg-blue-500'
  },
  {
    ...services[4], // Local SEO
    icon: MapPin,
    gradient: 'from-green-500 to-emerald-500',
  },
  {
    ...services[5], // National SEO
    icon: Globe,
    gradient: 'from-indigo-500 to-purple-500',
  },
  {
    ...services[6], // International SEO
    icon: Globe2,
    gradient: 'from-amber-500 to-yellow-500',
  },
  {
    ...services[7], // E-commerce SEO
    icon: ShoppingCart,
    gradient: 'from-pink-500 to-rose-500',
  },
  {
    ...services[8], // Enterprise SEO
    icon: Building,
    gradient: 'from-slate-500 to-gray-600',
  },
]

export default function Services() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-red-100 to-orange-100 text-red-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Zap className="h-4 w-4" />
            <span>Cutting-Edge SEO Services</span>
          </div>
          
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Next-Generation SEO Services for{' '}
            <span className="bg-gradient-to-r from-primary-500 to-electric-500 bg-clip-text text-transparent">
              Tomorrow's Search
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Be first to market with GEO, AEO, and Reddit SEO strategies. Plus all the traditional SEO services 
            you need to dominate today's search landscape.
          </p>
        </div>

        {/* Featured New Services Section */}
        <div className="mb-12">
          <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <Sparkles className="h-5 w-5 text-yellow-500" />
            Exclusive Next-Gen Services
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredServices.slice(0, 4).map((service, index) => {
              const Icon = service.icon
              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group relative bg-white border-2 border-gray-200 rounded-2xl p-6 hover:border-primary-300 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
                >
                  {/* New Badge */}
                  {service.isNew && (
                    <div className={`absolute -top-3 -right-3 ${service.badgeColor} text-white text-xs px-3 py-1 rounded-full font-bold animate-pulse`}>
                      {service.badge}
                    </div>
                  )}
                  
                  {/* Gradient Border on Hover */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${service.gradient} rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity`} />
                  
                  <div className="relative">
                    {/* Icon */}
                    <div className={`inline-flex items-center justify-center w-14 h-14 bg-gradient-to-r ${service.gradient} rounded-xl mb-4 text-white shadow-lg`}>
                      <Icon className="h-7 w-7" />
                    </div>

                    {/* Title */}
                    <h3 className="text-lg font-bold text-gray-900 mb-3">
                      {service.title}
                    </h3>

                    {/* Description */}
                    <p className="text-sm text-gray-600 mb-4 line-clamp-3">
                      {service.shortDescription}
                    </p>

                    {/* Price */}
                    {service.price && (
                      <div className="mb-4">
                        <span className="text-xs text-gray-500">Starting at</span>
                        <div className="text-xl font-bold text-gray-900">
                          ${service.price.starting}
                          <span className="text-xs font-normal text-gray-500">/{service.price.period}</span>
                        </div>
                      </div>
                    )}

                    {/* CTA */}
                    <Link
                      href={`/services/${service.slug}`}
                      className="inline-flex items-center gap-2 text-primary-600 font-semibold hover:text-primary-700 transition-colors group text-sm"
                    >
                      Learn More
                      <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>

        {/* Traditional Services Grid */}
        <div>
          <h3 className="text-xl font-bold text-gray-900 mb-6">
            Traditional SEO Excellence
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredServices.slice(4, 10).map((service, index) => {
              const Icon = service.icon
              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group relative bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
                >
                  <div className={`absolute inset-0 bg-gradient-to-r ${service.gradient} rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity`} />
                  
                  <div className="relative">
                    {/* Icon */}
                    <div className={`inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r ${service.gradient} rounded-xl mb-4 text-white shadow-lg`}>
                      <Icon className="h-6 w-6" />
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {service.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-600 mb-4 line-clamp-2">
                      {service.shortDescription}
                    </p>

                    {/* Features */}
                    <ul className="space-y-2 mb-6">
                      {service.features.slice(0, 3).map((feature, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                          <span className="text-primary-500 mt-0.5">✓</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>

                    {/* CTA */}
                    <Link
                      href={`/services/${service.slug}`}
                      className="inline-flex items-center gap-2 text-primary-600 font-semibold hover:text-primary-700 transition-colors group"
                    >
                      Learn More
                      <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-primary-50 to-electric-50 rounded-2xl p-8 border border-primary-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Future-Proof Your SEO?
            </h3>
            <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
              Get ahead of the competition with our cutting-edge GEO and AEO strategies while maintaining excellence in traditional SEO.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/free-audit"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-primary-500 to-primary-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-primary-600 hover:to-primary-700 transition-all transform hover:scale-105 shadow-xl"
              >
                <Sparkles className="h-5 w-5" />
                Get Your Free GEO/AEO Audit
                <ArrowRight className="h-5 w-5" />
              </Link>
              
              <Link
                href="/services"
                className="inline-flex items-center gap-2 bg-white text-primary-600 border-2 border-primary-200 px-8 py-4 rounded-lg font-semibold hover:bg-primary-50 transition-all"
              >
                View All Services
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}