"use client"

import { motion } from 'framer-motion'
import { Check, ArrowRight, Sparkles, Phone } from 'lucide-react'
import Link from 'next/link'

export default function SimplePricing() {
  return (
    <section className="py-20 bg-gradient-to-b from-white via-gray-50 to-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            No contracts. No setup fees. Just results.
          </p>
        </motion.div>

        {/* Three Simple Options */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-white rounded-2xl shadow-xl p-8 text-center"
          >
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">SEO Services</h3>
              <p className="text-gray-600">Get found on Google</p>
            </div>
            <div className="mb-6">
              <p className="text-sm text-gray-500 mb-2">Starting at</p>
              <p className="text-4xl font-bold text-gray-900">$499</p>
              <p className="text-gray-600">/month</p>
            </div>
            <ul className="space-y-3 mb-8 text-left">
              <li className="flex items-start gap-2">
                <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-sm text-gray-700">Google rankings improvement</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-sm text-gray-700">AI-powered optimization</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-sm text-gray-700">Monthly reporting</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-sm text-gray-700">No long-term contracts</span>
              </li>
            </ul>
            <Link
              href="/free-audit"
              className="block w-full bg-gray-100 text-gray-700 py-3 rounded-xl font-semibold hover:bg-gray-200 transition-all"
            >
              Get Started
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-2xl shadow-xl p-8 text-center"
          >
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Website Development</h3>
              <p className="text-gray-600">Professional websites that convert</p>
            </div>
            <div className="mb-6">
              <p className="text-sm text-gray-500 mb-2">Starting at</p>
              <p className="text-4xl font-bold text-gray-900">$1,997</p>
              <p className="text-gray-600">one-time</p>
            </div>
            <ul className="space-y-3 mb-8 text-left">
              <li className="flex items-start gap-2">
                <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-sm text-gray-700">Custom WordPress or Shopify</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-sm text-gray-700">Mobile responsive design</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-sm text-gray-700">SEO-ready structure</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-sm text-gray-700">2-4 week delivery</span>
              </li>
            </ul>
            <Link
              href="/contact"
              className="block w-full bg-gray-100 text-gray-700 py-3 rounded-xl font-semibold hover:bg-gray-200 transition-all"
            >
              View Portfolio
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl shadow-xl p-8 text-center border-2 border-blue-200 relative"
          >
            <div className="absolute -top-3 left-1/2 -translate-x-1/2">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                BEST VALUE
              </span>
            </div>
            <div className="mb-6 mt-2">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Complete Package</h3>
              <p className="text-gray-600">Website + SEO together</p>
            </div>
            <div className="mb-6">
              <p className="text-sm text-gray-500 mb-2">Starting at</p>
              <p className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">$2,997</p>
              <p className="text-gray-600">website + SEO</p>
            </div>
            <ul className="space-y-3 mb-8 text-left">
              <li className="flex items-start gap-2">
                <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-sm text-gray-700">New website + SEO</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-sm text-gray-700">Best value package</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-sm text-gray-700">Faster results</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-sm text-gray-700">One point of contact</span>
              </li>
            </ul>
            <Link
              href="/free-audit"
              className="block w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all"
            >
              Book Strategy Call
            </Link>
          </motion.div>
        </div>

        {/* Simple CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center bg-gray-50 rounded-2xl p-8"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Need a Custom Quote?
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Every business is unique. Let's discuss your specific needs and create a package that fits your budget.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/free-audit"
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all"
            >
              <Sparkles className="h-5 w-5" />
              Get Free SEO Audit
            </Link>
            <a
              href="tel:5626829403"
              className="inline-flex items-center justify-center gap-2 bg-white text-gray-700 border-2 border-gray-300 px-8 py-3 rounded-xl font-semibold hover:bg-gray-50 transition-all"
            >
              <Phone className="h-5 w-5" />
              Call (562) 682-9403
            </a>
          </div>
        </motion.div>

        {/* Trust Statement */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="text-gray-600">
            ✓ No contracts &nbsp; ✓ Cancel anytime &nbsp; ✓ Results guaranteed
          </p>
        </motion.div>
      </div>
    </section>
  )
}