"use client"

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, CheckCircle, TrendingUp } from 'lucide-react'
import { Service } from '@/data/services'

interface ServiceHeroProps {
  service: Service
}

export default function ServiceHero({ service }: ServiceHeroProps) {
  return (
    <section className="relative py-20 bg-gradient-to-br from-primary-50 via-white to-electric-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
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
                  <Link href="/services" className="text-gray-500 hover:text-primary-500">
                    Services
                  </Link>
                </li>
                <li className="text-gray-400">/</li>
                <li className="text-primary-600 font-medium">{service.title}</li>
              </ol>
            </nav>

            {/* Title */}
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              {service.title}
            </h1>

            {/* Description */}
            <p className="text-xl text-gray-600 mb-8">
              {service.description}
            </p>

            {/* Key Points */}
            <div className="space-y-3 mb-8">
              {service.benefits.slice(0, 3).map((benefit, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-success-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{benefit}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-primary-500 to-primary-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-primary-600 hover:to-primary-700 transition-all transform hover:scale-105 shadow-xl"
              >
                Get Started
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                href="/free-audit"
                className="inline-flex items-center justify-center gap-2 bg-white text-primary-600 border-2 border-primary-200 px-8 py-4 rounded-lg font-semibold hover:bg-primary-50 transition-all"
              >
                Free SEO Audit
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            {/* Pricing Card */}
            {service.price && (
              <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
                <div className="text-center mb-6">
                  <p className="text-gray-500 text-sm mb-2">Starting at</p>
                  <div className="text-5xl font-bold text-gray-900 mb-2">
                    ${service.price.starting.toLocaleString()}
                    <span className="text-lg font-normal text-gray-500">/{service.price.period}</span>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center justify-between py-3 border-b border-gray-100">
                    <span className="text-gray-600">Average ROI</span>
                    <span className="font-semibold text-success-600">387%</span>
                  </div>
                  <div className="flex items-center justify-between py-3 border-b border-gray-100">
                    <span className="text-gray-600">Time to Results</span>
                    <span className="font-semibold">3-6 months</span>
                  </div>
                  <div className="flex items-center justify-between py-3 border-b border-gray-100">
                    <span className="text-gray-600">Dedicated Team</span>
                    <span className="font-semibold">Yes</span>
                  </div>
                  <div className="flex items-center justify-between py-3">
                    <span className="text-gray-600">Monthly Reporting</span>
                    <span className="font-semibold">Included</span>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-success-50 rounded-lg text-center">
                  <p className="text-success-700 font-medium">
                    <TrendingUp className="inline h-4 w-4 mr-1" />
                    100% Money-Back Guarantee
                  </p>
                </div>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}