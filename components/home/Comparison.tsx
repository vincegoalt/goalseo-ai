"use client"

import { motion } from 'framer-motion'
import { 
  XCircle, CheckCircle, AlertCircle, DollarSign, Clock, Bot,
  TrendingDown, TrendingUp, Users, FileText, Zap, Shield,
  Calendar, HeadphonesIcon, BarChart3, Sparkles
} from 'lucide-react'

interface ComparisonItem {
  feature: string
  cheapTools: string | boolean
  agencies: string | boolean
  goalSeo: string | boolean
}

const comparisonData: ComparisonItem[] = [
  {
    feature: "Monthly Cost",
    cheapTools: "$29-99",
    agencies: "$3,000-8,000",
    goalSeo: "$99-499"
  },
  {
    feature: "24/7 Automation",
    cheapTools: false,
    agencies: false,
    goalSeo: true
  },
  {
    feature: "AI-Powered Optimization",
    cheapTools: "Generic AI",
    agencies: false,
    goalSeo: "Industry-Specific AI"
  },
  {
    feature: "Time to Results",
    cheapTools: "Never",
    agencies: "6-12 months",
    goalSeo: "Days"
  },
  {
    feature: "Contract Required",
    cheapTools: false,
    agencies: "6-12 months",
    goalSeo: false
  },
  {
    feature: "Dedicated Support",
    cheapTools: "Chatbot only",
    agencies: "Account manager",
    goalSeo: "AI + Human experts"
  },
  {
    feature: "Real-time Updates",
    cheapTools: false,
    agencies: "Monthly reports",
    goalSeo: true
  },
  {
    feature: "Custom Strategy",
    cheapTools: false,
    agencies: true,
    goalSeo: true
  },
  {
    feature: "Implementation Speed",
    cheapTools: "Manual work",
    agencies: "Weeks",
    goalSeo: "Instant"
  },
  {
    feature: "Scalability",
    cheapTools: "Limited",
    agencies: "Expensive",
    goalSeo: "Unlimited"
  }
]

const renderValue = (value: string | boolean) => {
  if (typeof value === 'boolean') {
    return value ? (
      <CheckCircle className="h-5 w-5 text-success-500" />
    ) : (
      <XCircle className="h-5 w-5 text-danger-500" />
    )
  }
  return <span className="text-sm">{value}</span>
}

export default function Comparison() {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-danger-100 to-warning-100 text-danger-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <AlertCircle className="h-4 w-4" />
            <span>Why We're Different</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Stop Choosing Between{' '}
            <span className="bg-gradient-to-r from-danger-500 to-warning-500 bg-clip-text text-transparent">
              Cheap Tools That Don't Work
            </span>
            {' '}and{' '}
            <span className="bg-gradient-to-r from-danger-500 to-warning-500 bg-clip-text text-transparent">
              Agencies That Overcharge
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get the best of both worlds: Enterprise-level results at a fraction of the cost, 
            powered by AI that actually understands SEO.
          </p>
        </motion.div>

        {/* Comparison Cards */}
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {/* Cheap AI Tools */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="relative"
          >
            <div className="bg-white rounded-2xl p-6 border-2 border-gray-200 opacity-75">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-gray-900">Cheap AI Tools</h3>
                <div className="text-lg font-semibold text-gray-600">$29-99/mo</div>
              </div>
              
              <div className="flex items-center gap-2 mb-6">
                <TrendingDown className="h-5 w-5 text-danger-500" />
                <span className="text-danger-600 font-medium">Waste of Time</span>
              </div>

              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <XCircle className="h-5 w-5 text-danger-500 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-600">Generic AI that doesn't understand your industry</span>
                </li>
                <li className="flex items-start gap-2">
                  <XCircle className="h-5 w-5 text-danger-500 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-600">Creates duplicate content Google penalizes</span>
                </li>
                <li className="flex items-start gap-2">
                  <XCircle className="h-5 w-5 text-danger-500 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-600">No real SEO strategy or intelligence</span>
                </li>
                <li className="flex items-start gap-2">
                  <XCircle className="h-5 w-5 text-danger-500 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-600">Requires constant manual work</span>
                </li>
                <li className="flex items-start gap-2">
                  <XCircle className="h-5 w-5 text-danger-500 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-600">Support via chatbot only</span>
                </li>
              </ul>

              <div className="absolute -top-3 -right-3 bg-danger-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                NOT RECOMMENDED
              </div>
            </div>
          </motion.div>

          {/* SEO Agencies */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="relative"
          >
            <div className="bg-white rounded-2xl p-6 border-2 border-gray-200 opacity-75">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-gray-900">SEO Agencies</h3>
                <div className="text-lg font-semibold text-gray-600">$3,000-8,000/mo</div>
              </div>
              
              <div className="flex items-center gap-2 mb-6">
                <DollarSign className="h-5 w-5 text-warning-500" />
                <span className="text-warning-600 font-medium">Overpriced & Slow</span>
              </div>

              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <XCircle className="h-5 w-5 text-danger-500 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-600">Lock you into 6-12 month contracts</span>
                </li>
                <li className="flex items-start gap-2">
                  <XCircle className="h-5 w-5 text-danger-500 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-600">Deliver reports, not results</span>
                </li>
                <li className="flex items-start gap-2">
                  <XCircle className="h-5 w-5 text-danger-500 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-600">Take months to implement changes</span>
                </li>
                <li className="flex items-start gap-2">
                  <XCircle className="h-5 w-5 text-danger-500 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-600">Junior staff working on your account</span>
                </li>
                <li className="flex items-start gap-2">
                  <XCircle className="h-5 w-5 text-danger-500 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-600">Generic strategies for all clients</span>
                </li>
              </ul>

              <div className="absolute -top-3 -right-3 bg-warning-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                OVERPRICED
              </div>
            </div>
          </motion.div>

          {/* GoalSEO AI */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="relative transform scale-105"
          >
            <div className="bg-gradient-to-br from-primary-500 to-electric-500 p-1 rounded-2xl">
              <div className="bg-white rounded-2xl p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-gray-900">GoalSEO AI</h3>
                  <div className="text-lg font-semibold">
                    <span className="line-through text-gray-400">$499</span>
                    <span className="text-primary-600 ml-2">$99/mo</span>
                  </div>
                </div>
                
                <div className="flex items-center gap-2 mb-6">
                  <Sparkles className="h-5 w-5 text-success-500" />
                  <span className="text-success-600 font-medium">The Smart Choice</span>
                </div>

                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-success-500 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-700 font-medium">Built specifically for your industry</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-success-500 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-700 font-medium">AI works 24/7, no human delays</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-success-500 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-700 font-medium">Optimizes entire site in hours</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-success-500 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-700 font-medium">Real-time performance tracking</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-success-500 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-700 font-medium">Cancel anytime, no contracts</span>
                  </li>
                </ul>

                <div className="absolute -top-3 -right-3 bg-success-500 text-white px-3 py-1 rounded-full text-xs font-semibold animate-pulse">
                  BEST VALUE
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Detailed Comparison Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden"
        >
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gradient-to-r from-gray-50 to-primary-50">
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Features</th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-gray-600">Cheap Tools</th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-gray-600">Agencies</th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-primary-600 bg-primary-50">GoalSEO AI</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {comparisonData.map((item, index) => (
                  <tr key={index} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">{item.feature}</td>
                    <td className="px-6 py-4 text-center">{renderValue(item.cheapTools)}</td>
                    <td className="px-6 py-4 text-center">{renderValue(item.agencies)}</td>
                    <td className="px-6 py-4 text-center bg-primary-50/30">{renderValue(item.goalSeo)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <div className="bg-gradient-to-r from-primary-50 to-electric-50 rounded-2xl p-8 border border-primary-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Join 500+ Companies Getting{' '}
              <span className="text-primary-600">10X Better Results</span>
              {' '}for{' '}
              <span className="text-success-600">10X Less Cost</span>
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Stop wasting money on tools that don't work or agencies that overcharge. 
              Get AI-powered SEO that delivers real results, starting today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="/free-audit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 bg-gradient-to-r from-primary-500 to-primary-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-primary-600 hover:to-primary-700 transition-all shadow-xl"
              >
                Start Free Trial
                <Zap className="h-5 w-5" />
              </motion.a>
              <motion.a
                href="/pricing"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 bg-white text-primary-600 border-2 border-primary-200 px-8 py-4 rounded-xl font-semibold hover:bg-primary-50 transition-all"
              >
                View Pricing
                <BarChart3 className="h-5 w-5" />
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}