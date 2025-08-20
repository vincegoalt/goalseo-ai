"use client"

import Link from 'next/link'
import { motion } from 'framer-motion'
import { MapPin, Globe, ShoppingCart, Building, Code, FileText, Link as LinkIcon, Store, ArrowRight } from 'lucide-react'
import { services } from '@/data/services'

const featuredServices = [
  {
    ...services[0], // Local SEO
    icon: MapPin,
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    ...services[1], // National SEO
    icon: Globe,
    gradient: 'from-primary-500 to-electric-500',
  },
  {
    ...services[2], // E-commerce SEO
    icon: ShoppingCart,
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    ...services[3], // Enterprise SEO
    icon: Building,
    gradient: 'from-orange-500 to-red-500',
  },
  {
    ...services[4], // Technical SEO
    icon: Code,
    gradient: 'from-green-500 to-teal-500',
  },
  {
    ...services[5], // Content SEO
    icon: FileText,
    gradient: 'from-indigo-500 to-purple-500',
  },
]

export default function Services() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Comprehensive SEO Services for{' '}
            <span className="bg-gradient-to-r from-primary-500 to-electric-500 bg-clip-text text-transparent">
              Every Goal
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            From local businesses to enterprise corporations, we have the expertise and tools 
            to achieve your specific SEO objectives.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredServices.map((service, index) => {
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
                {/* Gradient Border on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-r ${service.gradient} rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity`} />
                
                <div className="relative">
                  {/* Icon */}
                  <div className={`inline-flex items-center justify-center w-14 h-14 bg-gradient-to-r ${service.gradient} rounded-xl mb-4 text-white shadow-lg`}>
                    <Icon className="h-7 w-7" />
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

                  {/* Price */}
                  {service.price && (
                    <div className="mb-4">
                      <span className="text-sm text-gray-500">Starting at</span>
                      <div className="text-2xl font-bold text-gray-900">
                        ${service.price.starting}
                        <span className="text-sm font-normal text-gray-500">/{service.price.period}</span>
                      </div>
                    </div>
                  )}

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

        <div className="mt-12 text-center">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-primary-500 to-primary-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-primary-600 hover:to-primary-700 transition-all transform hover:scale-105 shadow-xl"
          >
            View All Services
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  )
}