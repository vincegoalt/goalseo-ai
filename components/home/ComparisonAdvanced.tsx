"use client"

import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import Link from 'next/link'
import { 
  Check, X, ArrowRight, Zap, Brain, Users, 
  TrendingUp, Clock, Shield, Award, Sparkles,
  BarChart3, Target, Gauge, Globe
} from 'lucide-react'

export default function ComparisonAdvanced() {
  const [activeTab, setActiveTab] = useState('agencies')
  
  const comparisons = {
    agencies: {
      title: 'vs Traditional Agencies',
      us: {
        name: 'GoalSEO AI',
        price: '$99-499/mo',
        features: [
          { text: '24/7 AI optimization', status: true },
          { text: 'Results in 7 days', status: true },
          { text: 'Unlimited content creation', status: true },
          { text: '50,000+ keyword tracking', status: true },
          { text: 'Real-time reporting', status: true },
          { text: 'No contracts', status: true },
          { text: 'Money-back guarantee', status: true },
          { text: 'Self-learning AI', status: true }
        ]
      },
      them: {
        name: 'Traditional Agency',
        price: '$3,000-8,000/mo',
        features: [
          { text: 'Business hours only', status: false },
          { text: 'Results in 3-6 months', status: false },
          { text: '10-20 articles/mo', status: false },
          { text: '100-500 keywords', status: false },
          { text: 'Monthly Excel reports', status: false },
          { text: '12-month contracts', status: false },
          { text: 'No guarantees', status: false },
          { text: 'Manual processes', status: false }
        ]
      }
    },
    tools: {
      title: 'vs SEO Tools',
      us: {
        name: 'GoalSEO AI',
        price: '$99-499/mo',
        features: [
          { text: 'Fully automated', status: true },
          { text: 'AI does the work', status: true },
          { text: 'No SEO expertise needed', status: true },
          { text: 'Content creation included', status: true },
          { text: 'Link building automated', status: true },
          { text: 'Technical SEO fixes', status: true },
          { text: 'Competitor monitoring', status: true },
          { text: 'Custom AI strategies', status: true }
        ]
      },
      them: {
        name: 'SEO Tools (Ahrefs, SEMrush)',
        price: '$99-399/mo',
        features: [
          { text: 'Manual operation required', status: false },
          { text: 'You do all the work', status: false },
          { text: 'Requires SEO expertise', status: false },
          { text: 'Content not included', status: false },
          { text: 'Manual link building', status: false },
          { text: 'Shows issues only', status: false },
          { text: 'Data only, no action', status: false },
          { text: 'Generic recommendations', status: false }
        ]
      }
    },
    inhouse: {
      title: 'vs In-House Team',
      us: {
        name: 'GoalSEO AI',
        price: '$99-499/mo',
        features: [
          { text: 'No hiring needed', status: true },
          { text: 'Instant deployment', status: true },
          { text: 'No training required', status: true },
          { text: 'Works 24/7/365', status: true },
          { text: 'Never takes vacation', status: true },
          { text: 'Scales infinitely', status: true },
          { text: 'Latest SEO knowledge', status: true },
          { text: 'Predictable costs', status: true }
        ]
      },
      them: {
        name: 'In-House SEO Team',
        price: '$10,000-25,000/mo',
        features: [
          { text: '3-6 month hiring process', status: false },
          { text: 'Onboarding time', status: false },
          { text: 'Continuous training needed', status: false },
          { text: '40 hours/week', status: false },
          { text: 'PTO and sick days', status: false },
          { text: 'Limited capacity', status: false },
          { text: 'Knowledge gaps', status: false },
          { text: 'Benefits & overhead', status: false }
        ]
      }
    }
  }
  
  const results = [
    { metric: 'Average Traffic Increase', value: '387%', time: '90 days' },
    { metric: 'Keywords Ranked #1', value: '50,000+', time: 'Total' },
    { metric: 'Content Produced', value: '1,000+', time: 'Monthly' },
    { metric: 'ROI Generated', value: '12.4x', time: 'Average' }
  ]
  
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary-100 to-electric-100 text-primary-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <BarChart3 className="h-4 w-4" />
            <span>Side-by-Side Comparison</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Why AI Beats Everything Else
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See exactly why 10,000+ businesses switched from expensive agencies and tools to GoalSEO AI
          </p>
        </motion.div>
        
        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="bg-white rounded-xl shadow-lg p-1 inline-flex">
            {Object.keys(comparisons).map((key) => (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                  activeTab === key
                    ? 'bg-gradient-to-r from-primary-500 to-primary-600 text-white'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                {comparisons[key as keyof typeof comparisons].title}
              </button>
            ))}
          </div>
        </div>
        
        {/* Comparison Table */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            <div className="grid lg:grid-cols-2 gap-8 mb-12">
              {/* GoalSEO Column */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="relative"
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-primary-500 to-electric-500 rounded-2xl blur opacity-20" />
                <div className="relative bg-white rounded-2xl shadow-xl border-2 border-primary-200 p-8">
                  <div className="absolute -top-4 left-8 bg-gradient-to-r from-primary-500 to-electric-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Recommended
                  </div>
                  
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">
                        {comparisons[activeTab as keyof typeof comparisons].us.name}
                      </h3>
                      <div className="flex items-center gap-2 mt-2">
                        <Brain className="h-5 w-5 text-primary-500" />
                        <span className="text-sm text-gray-600">AI-Powered</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-3xl font-bold text-primary-600">
                        {comparisons[activeTab as keyof typeof comparisons].us.price}
                      </div>
                      <div className="text-sm text-gray-500">per month</div>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    {comparisons[activeTab as keyof typeof comparisons].us.features.map((feature, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 + index * 0.05 }}
                        className="flex items-center gap-3"
                      >
                        <div className="flex-shrink-0 w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                          <Check className="h-4 w-4 text-green-600" />
                        </div>
                        <span className="text-gray-700">{feature.text}</span>
                      </motion.div>
                    ))}
                  </div>
                  
                  <Link
                    href="/free-audit"
                    className="mt-6 w-full bg-gradient-to-r from-primary-500 to-primary-600 text-white py-3 rounded-xl font-semibold hover:from-primary-600 hover:to-primary-700 transition-all flex items-center justify-center gap-2"
                  >
                    Get Started with AI
                    <ArrowRight className="h-5 w-5" />
                  </Link>
                </div>
              </motion.div>
              
              {/* Competitor Column */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-gray-50 rounded-2xl border border-gray-200 p-8"
              >
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">
                      {comparisons[activeTab as keyof typeof comparisons].them.name}
                    </h3>
                    <div className="flex items-center gap-2 mt-2">
                      <Users className="h-5 w-5 text-gray-400" />
                      <span className="text-sm text-gray-600">Traditional</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-3xl font-bold text-gray-700">
                      {comparisons[activeTab as keyof typeof comparisons].them.price}
                    </div>
                    <div className="text-sm text-gray-500">per month</div>
                  </div>
                </div>
                
                <div className="space-y-3">
                  {comparisons[activeTab as keyof typeof comparisons].them.features.map((feature, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 + index * 0.05 }}
                      className="flex items-center gap-3"
                    >
                      <div className="flex-shrink-0 w-6 h-6 bg-red-100 rounded-full flex items-center justify-center">
                        <X className="h-4 w-4 text-red-600" />
                      </div>
                      <span className="text-gray-500 line-through">{feature.text}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>
        </AnimatePresence>
        
        {/* Results Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-primary-500 to-electric-500 rounded-2xl p-8 text-white"
        >
          <div className="grid md:grid-cols-4 gap-6">
            {results.map((result, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl font-bold mb-1">{result.value}</div>
                <div className="text-sm opacity-90">{result.metric}</div>
                <div className="text-xs opacity-75 mt-1">{result.time}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
        
        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-lg text-gray-600 mb-6">
            Join 10,000+ businesses getting better results for less money
          </p>
          <Link
            href="/demo"
            className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 font-semibold"
          >
            See live comparison demo
            <ArrowRight className="h-5 w-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}