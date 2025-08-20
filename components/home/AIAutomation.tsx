"use client"

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Bot, Search, FileText, Link, Globe, TrendingUp, Shield, Languages,
  CheckCircle, XCircle, Clock, Zap, BarChart3, Code, Settings,
  ArrowRight, Sparkles, Activity, Database, Brain
} from 'lucide-react'

interface AutomationFeature {
  id: string
  title: string
  description: string
  icon: any
  features: string[]
  status: string
  color: string
  impact: string
}

const automationFeatures: AutomationFeature[] = [
  {
    id: 'product-seo',
    title: 'Product SEO Engine',
    description: 'AI-powered optimization for all your products',
    icon: Search,
    features: [
      'AI-powered descriptions',
      'Meta tag optimization',
      'Smart alt tags',
      'Daily updates'
    ],
    status: 'Analyzing 1,247 products...',
    color: 'primary',
    impact: '+234% organic traffic'
  },
  {
    id: 'smart-collections',
    title: 'Smart Collections',
    description: 'Automatically create and optimize collection pages',
    icon: Database,
    features: [
      'Trending collections',
      'Seasonal updates',
      'Keyword targeting',
      'Performance-based'
    ],
    status: 'Found trending opportunity',
    color: 'electric',
    impact: '+89% category rankings'
  },
  {
    id: 'search-insights',
    title: 'Search Insights',
    description: 'Real-time search data analysis and optimization',
    icon: BarChart3,
    features: [
      'Search Console sync',
      'Opportunity finder',
      'Position 1 targeting',
      'Daily tracking'
    ],
    status: 'Monitoring 1,892 keywords',
    color: 'accent',
    impact: '+52 new rankings'
  },
  {
    id: 'content-machine',
    title: 'Content Machine',
    description: 'Automated content creation and optimization',
    icon: FileText,
    features: [
      'Weekly blog posts',
      'Smart internal links',
      'Multi-language content',
      'Topical authority'
    ],
    status: 'Writing buying guide...',
    color: 'success',
    impact: '+180% engagement'
  },
  {
    id: 'technical-seo',
    title: 'Technical SEO',
    description: 'Continuous technical optimization',
    icon: Code,
    features: [
      'Smart sitemaps',
      'Schema markup',
      'Speed monitoring',
      '404 auto-fix'
    ],
    status: 'Optimizing site structure...',
    color: 'warning',
    impact: '98/100 PageSpeed'
  },
  {
    id: 'competitor-intel',
    title: 'Competitor Intel',
    description: 'Track and outperform competitors',
    icon: Shield,
    features: [
      'Competitor tracking',
      'Keyword discovery',
      'Opportunity alerts',
      'Weakness targeting'
    ],
    status: 'Tracking 3 competitors...',
    color: 'danger',
    impact: '+127 keyword gaps found'
  },
  {
    id: 'link-building',
    title: 'Link Building',
    description: 'Automated authority building',
    icon: Link,
    features: [
      'Quality backlinks',
      'Auto outreach',
      'Strategic links',
      'Authority tracking'
    ],
    status: 'Building authority links...',
    color: 'indigo',
    impact: '+45 DR increase'
  },
  {
    id: 'translations',
    title: 'Translations',
    description: 'Multi-language SEO automation',
    icon: Languages,
    features: [
      'Multi-language SEO',
      'Native translations',
      'Local keywords',
      'Global expansion'
    ],
    status: 'Translating content...',
    color: 'purple',
    impact: '12 languages active'
  }
]

export default function AIAutomation() {
  const [activeFeatures, setActiveFeatures] = useState<Set<string>>(
    new Set(['product-seo', 'smart-collections', 'search-insights', 'content-machine'])
  )
  const [hoveredFeature, setHoveredFeature] = useState<string | null>(null)

  const toggleFeature = (id: string) => {
    setActiveFeatures(prev => {
      const newSet = new Set(prev)
      if (newSet.has(id)) {
        newSet.delete(id)
      } else {
        newSet.add(id)
      }
      return newSet
    })
  }

  return (
    <section className="py-20 bg-gradient-to-b from-white via-gray-50 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary-100 to-electric-100 text-primary-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Bot className="h-4 w-4" />
            <span>8 AI Agents Working 24/7</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Set It Once.{' '}
            <span className="bg-gradient-to-r from-primary-500 to-electric-500 bg-clip-text text-transparent">
              Watch Your Rankings Soar.
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Toggle on the automations you want. Our AI handles the rest 24/7. 
            No maintenance required, just pure growth on autopilot.
          </p>
        </motion.div>

        {/* Main Automation Interface */}
        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Left - Control Panel */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-xl border border-gray-200 p-6 sticky top-24"
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
                <Settings className="h-5 w-5 text-primary-500" />
                AI Automations Active
              </h3>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-success-500 animate-pulse" />
                <span className="text-sm text-success-600 font-medium">
                  {activeFeatures.size} Active
                </span>
              </div>
            </div>

            <div className="space-y-4">
              {automationFeatures.map((feature) => {
                const Icon = feature.icon
                const isActive = activeFeatures.has(feature.id)
                
                return (
                  <motion.div
                    key={feature.id}
                    whileHover={{ scale: 1.02 }}
                    onHoverStart={() => setHoveredFeature(feature.id)}
                    onHoverEnd={() => setHoveredFeature(null)}
                    className={`relative p-4 rounded-xl border-2 transition-all cursor-pointer ${
                      isActive 
                        ? 'bg-gradient-to-r from-primary-50 to-electric-50 border-primary-300' 
                        : 'bg-gray-50 border-gray-200 opacity-60'
                    }`}
                    onClick={() => toggleFeature(feature.id)}
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <div className={`p-2 rounded-lg ${
                          isActive ? 'bg-white shadow-sm' : 'bg-gray-100'
                        }`}>
                          <Icon className={`h-5 w-5 ${
                            isActive ? 'text-primary-500' : 'text-gray-400'
                          }`} />
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900">{feature.title}</h4>
                          <p className="text-xs text-gray-500">{feature.description}</p>
                        </div>
                      </div>
                      <button
                        className={`relative w-12 h-6 rounded-full transition-colors ${
                          isActive ? 'bg-primary-500' : 'bg-gray-300'
                        }`}
                      >
                        <motion.div
                          className="absolute top-1 w-4 h-4 bg-white rounded-full shadow-sm"
                          animate={{ left: isActive ? '26px' : '4px' }}
                          transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                        />
                      </button>
                    </div>

                    {/* Feature List */}
                    <AnimatePresence>
                      {isActive && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          className="space-y-2"
                        >
                          <div className="grid grid-cols-2 gap-2 mb-3">
                            {feature.features.map((item, index) => (
                              <div key={index} className="flex items-center gap-1 text-xs text-gray-600">
                                <CheckCircle className="h-3 w-3 text-success-500 flex-shrink-0" />
                                <span>{item}</span>
                              </div>
                            ))}
                          </div>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <Activity className="h-3 w-3 text-primary-500 animate-pulse" />
                              <span className="text-xs text-primary-600 font-medium">
                                {feature.status}
                              </span>
                            </div>
                            <span className="text-xs font-medium text-success-600">
                              {feature.impact}
                            </span>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                )
              })}
            </div>

            {/* Summary Stats */}
            <div className="mt-6 p-4 bg-gradient-to-r from-primary-50 to-electric-50 rounded-xl">
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-primary-700">24/7</div>
                  <div className="text-xs text-gray-600">Working</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-electric-700">8,439</div>
                  <div className="text-xs text-gray-600">Tasks/Day</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-success-700">387%</div>
                  <div className="text-xs text-gray-600">Avg ROI</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right - Live Activity Monitor */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Activity Feed */}
            <div className="bg-gray-900 rounded-2xl p-6 text-white">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold flex items-center gap-2">
                  <Brain className="h-5 w-5 text-electric-400" />
                  AI Activity Feed
                </h3>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                  <span className="text-xs text-green-400">LIVE</span>
                </div>
              </div>

              <div className="space-y-3 font-mono text-sm">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                  className="flex items-start gap-2"
                >
                  <span className="text-green-400">[AI]</span>
                  <span className="text-gray-300">Optimized 47 product descriptions with trending keywords</span>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 }}
                  className="flex items-start gap-2"
                >
                  <span className="text-blue-400">[SEO]</span>
                  <span className="text-gray-300">Found 12 new ranking opportunities in "winter collection"</span>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 }}
                  className="flex items-start gap-2"
                >
                  <span className="text-yellow-400">[LINK]</span>
                  <span className="text-gray-300">Secured backlink from industry publication (DR 72)</span>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.8 }}
                  className="flex items-start gap-2"
                >
                  <span className="text-purple-400">[TECH]</span>
                  <span className="text-gray-300">Fixed 3 crawl errors and updated XML sitemap</span>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1 }}
                  className="flex items-start gap-2"
                >
                  <span className="text-pink-400">[CONTENT]</span>
                  <span className="text-gray-300">Published "Ultimate Guide to SEO in 2024" - targeting 18 keywords</span>
                </motion.div>
              </div>
            </div>

            {/* Performance Metrics */}
            <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-6">
              <h3 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-success-500" />
                Real-Time Performance
              </h3>

              <div className="space-y-4">
                <div className="flex items-center justify-between p-3 bg-gradient-to-r from-success-50 to-success-100 rounded-lg">
                  <div>
                    <div className="text-sm font-medium text-gray-700">Organic Traffic</div>
                    <div className="text-2xl font-bold text-success-700">+387%</div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-gray-600">45,230 visitors</div>
                    <div className="text-xs text-success-600">↑ 12% this week</div>
                  </div>
                </div>

                <div className="flex items-center justify-between p-3 bg-gradient-to-r from-primary-50 to-primary-100 rounded-lg">
                  <div>
                    <div className="text-sm font-medium text-gray-700">Keyword Rankings</div>
                    <div className="text-2xl font-bold text-primary-700">1,847</div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-gray-600">Page 1: 423</div>
                    <div className="text-xs text-primary-600">↑ 89 new this month</div>
                  </div>
                </div>

                <div className="flex items-center justify-between p-3 bg-gradient-to-r from-electric-50 to-electric-100 rounded-lg">
                  <div>
                    <div className="text-sm font-medium text-gray-700">Domain Authority</div>
                    <div className="text-2xl font-bold text-electric-700">67</div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-gray-600">Trust: 72</div>
                    <div className="text-xs text-electric-600">↑ 8 points YoY</div>
                  </div>
                </div>
              </div>

              <button className="w-full mt-4 bg-gradient-to-r from-primary-500 to-electric-500 text-white py-3 rounded-lg font-semibold hover:from-primary-600 hover:to-electric-600 transition-all flex items-center justify-center gap-2">
                View Full Dashboard
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}