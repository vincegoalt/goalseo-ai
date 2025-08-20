"use client"

import { motion, useAnimation } from 'framer-motion'
import { useState, useEffect } from 'react'
import { 
  Brain, Cpu, Globe, Search, FileText, Link2, 
  TrendingUp, BarChart3, Users, Zap, Shield, 
  Sparkles, Target, Activity, Code, Database,
  Bot, Gauge, Award
} from 'lucide-react'

export default function AIFeaturesShowcase() {
  const [activeFeature, setActiveFeature] = useState(0)
  const [progress, setProgress] = useState(0)
  
  const features = [
    {
      id: 'content-ai',
      title: 'Content AI Engine',
      icon: FileText,
      color: 'from-purple-500 to-pink-500',
      description: 'Generates 1,000+ SEO-optimized articles monthly',
      metrics: {
        speed: '50x faster than humans',
        quality: '98% unique content',
        languages: '120+ languages'
      },
      demo: {
        input: 'Best project management software',
        output: 'Creating comprehensive guide with 2,500+ words, competitor analysis, and FAQ section...'
      }
    },
    {
      id: 'link-builder',
      title: 'Autonomous Link Builder',
      icon: Link2,
      color: 'from-blue-500 to-cyan-500',
      description: 'Secures high-authority backlinks automatically',
      metrics: {
        dr: 'DR 50+ domains',
        success: '73% outreach success',
        links: '100+ links/month'
      },
      demo: {
        input: 'Technology blog outreach',
        output: 'Found 847 relevant sites, personalizing outreach to top 100...'
      }
    },
    {
      id: 'rank-tracker',
      title: 'Real-Time Rank Tracker',
      icon: TrendingUp,
      color: 'from-green-500 to-emerald-500',
      description: 'Monitors 50,000+ keywords across all search engines',
      metrics: {
        updates: 'Every 6 hours',
        accuracy: '99.9% accurate',
        alerts: 'Instant notifications'
      },
      demo: {
        input: 'Monitor competitor rankings',
        output: 'Tracking 12,847 keywords, detected 234 ranking changes today...'
      }
    },
    {
      id: 'technical-seo',
      title: 'Technical SEO Autopilot',
      icon: Code,
      color: 'from-orange-500 to-red-500',
      description: 'Fixes technical issues before they impact rankings',
      metrics: {
        issues: '127 checks',
        speed: 'Real-time fixes',
        monitoring: '24/7 scanning'
      },
      demo: {
        input: 'Site health check',
        output: 'Fixed 23 issues: schema markup, Core Web Vitals, mobile optimization...'
      }
    },
    {
      id: 'competitor-intel',
      title: 'Competitor Intelligence',
      icon: Search,
      color: 'from-indigo-500 to-purple-500',
      description: 'Reverse-engineers competitor strategies in real-time',
      metrics: {
        competitors: 'Unlimited tracking',
        insights: 'Daily updates',
        gaps: 'Opportunity finder'
      },
      demo: {
        input: 'Analyze top 3 competitors',
        output: 'Found 156 content gaps and 89 easy-win keywords...'
      }
    },
    {
      id: 'conversion-optimizer',
      title: 'Conversion Optimizer',
      icon: Target,
      color: 'from-pink-500 to-rose-500',
      description: 'A/B tests and optimizes for maximum conversions',
      metrics: {
        testing: 'Multivariate tests',
        lift: '+156% avg improvement',
        personalization: 'AI-driven'
      },
      demo: {
        input: 'Optimize landing pages',
        output: 'Running 12 tests, winner showing +234% conversion rate...'
      }
    }
  ]
  
  // Auto-rotate features
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % features.length)
      setProgress(0)
    }, 5000)
    
    return () => clearInterval(interval)
  }, [])
  
  // Progress animation
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => Math.min(prev + 2, 100))
    }, 100)
    
    return () => clearInterval(interval)
  }, [activeFeature])
  
  const activeFeatureData = features[activeFeature]
  const Icon = activeFeatureData.icon
  
  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary-100 to-electric-100 text-primary-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Brain className="h-4 w-4" />
            <span>AI Features</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            6 AI Agents Working{' '}
            <span className="bg-gradient-to-r from-primary-500 to-electric-500 bg-clip-text text-transparent">
              24/7 For You
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Each AI agent is an expert in its domain, working together to dominate search results
          </p>
        </motion.div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Feature Selector */}
          <div className="space-y-4">
            {features.map((feature, index) => {
              const FeatureIcon = feature.icon
              return (
                <motion.button
                  key={feature.id}
                  onClick={() => {
                    setActiveFeature(index)
                    setProgress(0)
                  }}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`w-full text-left p-4 rounded-xl transition-all ${
                    activeFeature === index
                      ? 'bg-white shadow-xl border-2 border-primary-200'
                      : 'bg-gray-50 hover:bg-white hover:shadow-lg border border-transparent'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${feature.color} flex items-center justify-center text-white`}>
                      <FeatureIcon className="h-6 w-6" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900">{feature.title}</h3>
                      <p className="text-sm text-gray-600 mt-1">{feature.description}</p>
                    </div>
                    {activeFeature === index && (
                      <div className="w-12 h-12 rounded-full bg-gradient-to-r from-primary-500 to-electric-500 flex items-center justify-center">
                        <Activity className="h-6 w-6 text-white animate-pulse" />
                      </div>
                    )}
                  </div>
                  
                  {activeFeature === index && (
                    <motion.div
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      className="mt-3 h-1 bg-gradient-to-r from-primary-500 to-electric-500 rounded-full origin-left"
                      style={{ transform: `scaleX(${progress / 100})` }}
                    />
                  )}
                </motion.button>
              )
            })}
          </div>
          
          {/* Feature Demo */}
          <motion.div
            key={activeFeature}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-gradient-to-r from-primary-500/20 to-electric-500/20 rounded-2xl blur-xl" />
            <div className="relative bg-white rounded-2xl shadow-2xl border border-gray-200 p-8">
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-lg bg-gradient-to-r ${activeFeatureData.color} flex items-center justify-center text-white`}>
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{activeFeatureData.title}</h3>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  <span className="text-sm text-gray-500">Live</span>
                </div>
              </div>
              
              {/* Metrics */}
              <div className="grid grid-cols-3 gap-4 mb-6">
                {Object.entries(activeFeatureData.metrics).map(([key, value], index) => (
                  <motion.div
                    key={key}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="text-center p-3 bg-gray-50 rounded-lg"
                  >
                    <div className="text-sm font-semibold text-gray-900">{value}</div>
                    <div className="text-xs text-gray-600 capitalize">{key}</div>
                  </motion.div>
                ))}
              </div>
              
              {/* Demo Terminal */}
              <div className="bg-gray-900 rounded-lg p-4">
                <div className="flex items-center gap-2 mb-3">
                  <div className="flex gap-1">
                    <div className="w-3 h-3 bg-red-500 rounded-full" />
                    <div className="w-3 h-3 bg-yellow-500 rounded-full" />
                    <div className="w-3 h-3 bg-green-500 rounded-full" />
                  </div>
                  <span className="text-xs text-gray-400">AI Terminal</span>
                </div>
                
                <div className="space-y-2">
                  <div className="text-green-400 font-mono text-sm">
                    $ {activeFeatureData.demo.input}
                  </div>
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="text-gray-300 font-mono text-sm"
                  >
                    <span className="text-blue-400">AI:</span> {activeFeatureData.demo.output}
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                    className="flex items-center gap-2 text-yellow-400 font-mono text-sm"
                  >
                    <Activity className="h-4 w-4 animate-pulse" />
                    Processing...
                  </motion.div>
                </div>
              </div>
              
              {/* Action Button */}
              <button className="mt-6 w-full bg-gradient-to-r from-primary-500 to-primary-600 text-white py-3 rounded-xl font-semibold hover:from-primary-600 hover:to-primary-700 transition-all flex items-center justify-center gap-2">
                <Sparkles className="h-5 w-5" />
                See This Feature in Action
              </button>
            </div>
          </motion.div>
        </div>
        
        {/* Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 grid md:grid-cols-4 gap-6"
        >
          {[
            { icon: Bot, label: 'AI Agents', value: '6 Active', color: 'text-purple-600' },
            { icon: Gauge, label: 'Processing Speed', value: '50x Faster', color: 'text-blue-600' },
            { icon: Database, label: 'Data Analyzed', value: '10TB Daily', color: 'text-green-600' },
            { icon: Award, label: 'Success Rate', value: '98.7%', color: 'text-orange-600' }
          ].map((stat, index) => {
            const StatIcon = stat.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 text-center border border-gray-200 hover:shadow-lg transition-all"
              >
                <StatIcon className={`h-8 w-8 ${stat.color} mx-auto mb-3`} />
                <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}