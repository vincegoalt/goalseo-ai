"use client"

import { motion } from 'framer-motion'
import Link from 'next/link'
import { 
  Calculator, TrendingUp, DollarSign, Target,
  CheckCircle, ArrowRight, BarChart3, Users,
  Clock, Award, Zap, Globe
} from 'lucide-react'

export default function ROIPage() {
  const roiMetrics = [
    {
      metric: "387%",
      label: "Average ROI",
      description: "Our clients see an average return of $3.87 for every $1 invested"
    },
    {
      metric: "6 months",
      label: "Time to ROI",
      description: "Most clients see positive ROI within the first 6 months"
    },
    {
      metric: "250%",
      label: "Traffic Increase",
      description: "Average organic traffic increase within 12 months"
    },
    {
      metric: "95%",
      label: "Client Retention",
      description: "Clients stay with us because we deliver measurable results"
    }
  ]

  const roiFactors = [
    {
      icon: Target,
      title: "Keyword Rankings",
      description: "Higher rankings for your target keywords drive more qualified traffic"
    },
    {
      icon: Users,
      title: "Increased Traffic",
      description: "More organic visitors to your website without paid advertising costs"
    },
    {
      icon: TrendingUp,
      title: "Lead Generation",
      description: "Better qualified leads that convert at higher rates"
    },
    {
      icon: DollarSign,
      title: "Revenue Growth",
      description: "Direct impact on your bottom line through increased sales"
    }
  ]

  const caseStudies = [
    {
      industry: "E-commerce",
      results: "450% ROI in 8 months",
      details: "Online retailer increased organic revenue from $50K to $275K monthly"
    },
    {
      industry: "Professional Services",
      results: "320% ROI in 6 months",
      details: "Law firm generated $500K in new business from SEO leads"
    },
    {
      industry: "Local Business",
      results: "280% ROI in 4 months",
      details: "Restaurant chain saw 180% increase in location visits"
    }
  ]

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-b from-primary-50 via-white to-gray-50 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-96 h-96 bg-primary-300/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-electric-300/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary-100 to-electric-100 text-primary-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Calculator className="h-4 w-4" />
              <span>ROI Calculator</span>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              Measure Your{' '}
              <span className="bg-gradient-to-r from-primary-500 to-electric-500 bg-clip-text text-transparent">
                SEO ROI
              </span>
            </h1>
            
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              See exactly how much revenue SEO can generate for your business. 
              Our proven strategies deliver measurable results and exceptional ROI.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/tools/roi-calculator"
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-primary-500 to-primary-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-primary-600 hover:to-primary-700 transition-all"
              >
                Calculate Your ROI
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                href="/free-audit"
                className="inline-flex items-center justify-center gap-2 bg-white text-primary-600 border-2 border-primary-200 px-8 py-4 rounded-xl font-semibold hover:bg-primary-50 transition-all"
              >
                Get Free Audit
                <BarChart3 className="h-5 w-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ROI Metrics */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Proven ROI Results
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real numbers from real clients who've transformed their business with SEO
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {roiMetrics.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-6 bg-gradient-to-br from-primary-50 to-electric-50 rounded-xl"
              >
                <div className="text-4xl font-bold text-primary-600 mb-2">
                  {item.metric}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {item.label}
                </h3>
                <p className="text-gray-600 text-sm">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ROI Factors */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              How SEO Drives ROI
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Understanding the key factors that contribute to your SEO return on investment
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {roiFactors.map((factor, index) => {
              const Icon = factor.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all"
                >
                  <Icon className="h-12 w-12 text-primary-600 mb-4" />
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {factor.title}
                  </h3>
                  <p className="text-gray-600">
                    {factor.description}
                  </p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Real ROI Case Studies
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See how businesses like yours achieved exceptional ROI with our SEO strategies
            </p>
          </motion.div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-primary-50 to-electric-50 rounded-xl p-8"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {study.industry}
                </h3>
                <div className="text-2xl font-bold text-primary-600 mb-4">
                  {study.results}
                </div>
                <p className="text-gray-700">
                  {study.details}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-500 to-electric-500 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Ready to Calculate Your SEO ROI?
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Use our free calculator to see exactly how much revenue SEO can generate for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/tools/roi-calculator"
              className="inline-flex items-center justify-center gap-2 bg-white text-primary-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-all shadow-xl"
            >
              Calculate ROI Now
              <Calculator className="h-5 w-5" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-transparent border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-primary-600 transition-all"
            >
              Speak with Expert
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}