"use client"

import { motion } from 'framer-motion'
import Link from 'next/link'
import { 
  Bot, Brain, Zap, TrendingUp, DollarSign, Clock,
  CheckCircle, X, ArrowRight, BarChart3, Users,
  Shield, Award, Sparkles, Target, Activity, Globe
} from 'lucide-react'

export default function WhyAIPage() {
  const comparisons = [
    { 
      feature: '24/7 Working Hours',
      ai: true,
      agency: false,
      aiText: 'Works around the clock',
      agencyText: 'Business hours only'
    },
    {
      feature: 'Speed to Results',
      ai: true,
      agency: false,
      aiText: '7 days to first results',
      agencyText: '3-6 months typical'
    },
    {
      feature: 'Content Production',
      ai: true,
      agency: false,
      aiText: '1000+ articles/month',
      agencyText: '10-20 articles/month'
    },
    {
      feature: 'Keyword Tracking',
      ai: true,
      agency: false,
      aiText: '50,000+ keywords',
      agencyText: '100-500 keywords'
    },
    {
      feature: 'Real-time Optimization',
      ai: true,
      agency: false,
      aiText: 'Instant adjustments',
      agencyText: 'Monthly updates'
    },
    {
      feature: 'Scalability',
      ai: true,
      agency: false,
      aiText: 'Unlimited scaling',
      agencyText: 'Limited by team size'
    },
    {
      feature: 'Cost Efficiency',
      ai: true,
      agency: false,
      aiText: '$199-499/month',
      agencyText: '$3,000-8,000/month'
    },
    {
      feature: 'Data Processing',
      ai: true,
      agency: false,
      aiText: '10TB daily analysis',
      agencyText: 'Manual analysis'
    }
  ]

  const benefits = [
    {
      icon: DollarSign,
      title: '90% Cost Reduction',
      description: 'Save thousands per month while getting better results'
    },
    {
      icon: Zap,
      title: '50x Faster',
      description: 'AI works at machine speed, not human speed'
    },
    {
      icon: Brain,
      title: 'Self-Learning',
      description: 'Gets smarter with every campaign and interaction'
    },
    {
      icon: Globe,
      title: 'Infinite Scale',
      description: 'Handle millions of keywords and pages simultaneously'
    },
    {
      icon: Shield,
      title: 'Zero Human Error',
      description: 'Consistent, accurate optimization every time'
    },
    {
      icon: Activity,
      title: 'Real-Time Adaptation',
      description: 'Responds instantly to algorithm changes'
    }
  ]

  const stats = [
    { value: '387%', label: 'Average Traffic Increase' },
    { value: '92%', label: 'Client Retention Rate' },
    { value: '7 Days', label: 'Time to First Results' },
    { value: '10,000+', label: 'Businesses Using AI' }
  ]

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-b from-primary-50 via-white to-gray-50 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-96 h-96 bg-primary-300/30 rounded-full mix-blend-multiply filter blur-3xl animate-blob" />
          <div className="absolute top-40 right-10 w-96 h-96 bg-electric-300/30 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary-100 to-electric-100 text-primary-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Bot className="h-4 w-4" />
              <span>The Future of SEO</span>
            </div>

            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              Why AI Beats{' '}
              <span className="bg-gradient-to-r from-primary-500 to-electric-500 bg-clip-text text-transparent">
                Everything Else
              </span>
            </h1>

            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Traditional agencies charge $3,000/month for Excel reports and weekly calls. 
              Our AI delivers better results 24/7 for 90% less cost.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/free-audit"
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-primary-500 to-primary-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-primary-600 hover:to-primary-700 transition-all shadow-xl"
              >
                <Sparkles className="h-5 w-5" />
                Get Free AI Audit
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                href="/demo"
                className="inline-flex items-center justify-center gap-2 bg-white text-primary-600 border-2 border-primary-200 px-8 py-4 rounded-xl font-semibold hover:bg-primary-50 transition-all"
              >
                See Live Comparison
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-12 bg-gradient-to-r from-primary-500 to-electric-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center text-white"
              >
                <div className="text-4xl font-bold mb-2">{stat.value}</div>
                <div className="text-sm opacity-90">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              AI vs Traditional Agencies
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See why 10,000+ businesses switched from agencies to AI
            </p>
          </motion.div>

          <div className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden">
            <div className="grid grid-cols-3 bg-gray-50 border-b border-gray-200">
              <div className="p-6">
                <h3 className="font-semibold text-gray-700">Feature</h3>
              </div>
              <div className="p-6 text-center border-l border-r border-gray-200">
                <div className="inline-flex items-center gap-2">
                  <Bot className="h-5 w-5 text-primary-500" />
                  <h3 className="font-semibold text-primary-600">GoalSEO AI</h3>
                </div>
              </div>
              <div className="p-6 text-center">
                <h3 className="font-semibold text-gray-700">Traditional Agency</h3>
              </div>
            </div>

            {comparisons.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="grid grid-cols-3 border-b border-gray-100 hover:bg-gray-50 transition-colors"
              >
                <div className="p-6">
                  <span className="font-medium text-gray-900">{item.feature}</span>
                </div>
                <div className="p-6 text-center border-l border-r border-gray-100">
                  <div className="flex flex-col items-center gap-2">
                    <CheckCircle className="h-6 w-6 text-green-500" />
                    <span className="text-sm text-gray-600">{item.aiText}</span>
                  </div>
                </div>
                <div className="p-6 text-center">
                  <div className="flex flex-col items-center gap-2">
                    <X className="h-6 w-6 text-red-500" />
                    <span className="text-sm text-gray-500 line-through">{item.agencyText}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              The AI Advantage
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Why AI-powered SEO is the only logical choice for modern businesses
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-primary-100 to-electric-100 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="h-6 w-6 text-primary-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Real Results */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Real Results from Real Businesses
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These companies ditched their agencies for AI
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {[
              {
                company: 'TechFlow Solutions',
                industry: 'SaaS',
                before: '$8,000/mo agency',
                after: '$299/mo AI',
                results: '+423% organic traffic',
                savings: '$92,400/year saved'
              },
              {
                company: 'E-Store Pro',
                industry: 'E-commerce',
                before: '$3,000/mo agency',
                after: '$499/mo AI',
                results: '+892% revenue',
                savings: '$57,600/year saved'
              },
              {
                company: 'LocalBiz Network',
                industry: 'Services',
                before: '$3,000/mo agency',
                after: '$199/mo AI',
                results: '+567% leads',
                savings: '$34,800/year saved'
              }
            ].map((story, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-primary-50 to-electric-50 rounded-xl p-6 border border-primary-200"
              >
                <div className="text-sm text-primary-600 font-medium mb-2">{story.industry}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{story.company}</h3>
                
                <div className="space-y-3 mb-4">
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Before:</span>
                    <span className="text-sm font-medium text-red-600 line-through">{story.before}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">After:</span>
                    <span className="text-sm font-medium text-green-600">{story.after}</span>
                  </div>
                </div>
                
                <div className="pt-4 border-t border-primary-200">
                  <div className="text-2xl font-bold text-primary-600 mb-1">{story.results}</div>
                  <div className="text-sm text-gray-600">{story.savings}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20 bg-gradient-to-r from-primary-500 to-electric-500 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Ready to Fire Your Agency?
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Join 10,000+ businesses getting better results for 90% less cost
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/free-audit"
                className="inline-flex items-center justify-center gap-2 bg-white text-primary-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-all shadow-xl"
              >
                Start Free AI Audit
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                href="/pricing"
                className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur text-white border-2 border-white/30 px-8 py-4 rounded-xl font-semibold hover:bg-white/20 transition-all"
              >
                View Pricing
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}