"use client"

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, Zap, TrendingUp, Award, Search, BarChart3, Target, ChevronRight, Bot, Sparkles, Clock, DollarSign, Shield, CheckCircle } from 'lucide-react'

const typewriterWords = [
  "Rankings",
  "Traffic", 
  "Conversions",
  "Revenue",
  "Authority",
  "ROI"
]

const automationFeatures = [
  { icon: Bot, label: "AI-Powered 24/7", color: "primary" },
  { icon: DollarSign, label: "Save $60k+/year", color: "success" },
  { icon: Sparkles, label: "Fully Automated", color: "electric" }
]

export default function HeroEnhanced() {
  const [typewriterText, setTypewriterText] = useState("")
  const [wordIndex, setWordIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const [currentMetric, setCurrentMetric] = useState(0)

  useEffect(() => {
    const currentWord = typewriterWords[wordIndex]
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (typewriterText.length < currentWord.length) {
          setTypewriterText(currentWord.slice(0, typewriterText.length + 1))
        } else {
          setTimeout(() => setIsDeleting(true), 1500)
        }
      } else {
        if (typewriterText.length > 0) {
          setTypewriterText(currentWord.slice(0, typewriterText.length - 1))
        } else {
          setIsDeleting(false)
          setWordIndex((prev) => (prev + 1) % typewriterWords.length)
        }
      }
    }, isDeleting ? 50 : 100)

    return () => clearTimeout(timeout)
  }, [typewriterText, wordIndex, isDeleting])

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMetric((prev) => (prev + 1) % 3)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  const metrics = [
    { value: "10X", label: "Cheaper than agencies", trend: "+387%" },
    { value: "24/7", label: "AI automation", trend: "Always On" },
    { value: "2.8X", label: "More traffic on average", trend: "+189%" }
  ]

  return (
    <section className="relative min-h-[100vh] flex items-center overflow-hidden bg-gradient-to-b from-slate-50 via-white to-primary-50/20">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-96 h-96 bg-primary-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" />
        <div className="absolute top-40 right-10 w-96 h-96 bg-electric-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000" />
        <div className="absolute -bottom-8 left-20 w-96 h-96 bg-accent-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000" />
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-[0.02]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Badge */}
            <motion.div 
              className="inline-flex items-center gap-2 bg-gradient-to-r from-primary-100 to-electric-100 text-primary-700 px-4 py-2 rounded-full text-sm font-medium mb-6 border border-primary-200"
              whileHover={{ scale: 1.05 }}
            >
              <Bot className="h-4 w-4 animate-pulse" />
              <span>Replace Your $5,000/mo SEO Agency with AI</span>
            </motion.div>

            {/* Main Heading */}
            <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              Stop Paying Agencies for{' '}
              <span className="relative">
                <span className="bg-gradient-to-r from-primary-500 via-electric-500 to-accent-500 bg-clip-text text-transparent">
                  Excel Reports
                </span>
                <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 300 10" fill="none">
                  <path d="M0 5Q150 0 300 5" stroke="url(#gradient)" strokeWidth="3" strokeLinecap="round"/>
                  <defs>
                    <linearGradient id="gradient">
                      <stop stopColor="#4F46E5" />
                      <stop offset="0.5" stopColor="#06B6D4" />
                      <stop offset="1" stopColor="#10B981" />
                    </linearGradient>
                  </defs>
                </svg>
              </span>
            </h1>

            {/* Dynamic Subtitle */}
            <div className="text-2xl text-gray-700 mb-8 h-10">
              Get AI That Actually Improves Your{' '}
              <span className="font-bold bg-gradient-to-r from-primary-600 to-electric-600 bg-clip-text text-transparent">
                {typewriterText}
                <span className="animate-pulse text-primary-500">|</span>
              </span>
            </div>

            {/* Description */}
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              GoalSEO AI optimizes your entire website 24/7, creating content that ranks and converts. 
              Our AI identifies opportunities, implements changes, and tracks performance - all for
              <span className="font-bold text-primary-600"> 10X less than traditional agencies</span>.
            </p>

            {/* Feature Pills */}
            <div className="flex flex-wrap gap-3 mb-8">
              {automationFeatures.map((feature, index) => {
                const Icon = feature.icon
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className={`flex items-center gap-2 px-4 py-2 rounded-full bg-${feature.color}-50 border border-${feature.color}-200`}
                  >
                    <Icon className={`h-4 w-4 text-${feature.color}-500`} />
                    <span className={`text-sm font-medium text-${feature.color}-700`}>{feature.label}</span>
                  </motion.div>
                )
              })}
            </div>

            {/* CTA Section */}
            <div className="space-y-4 mb-8">
              <div className="flex flex-col sm:flex-row gap-4">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link
                    href="/free-audit"
                    className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-primary-500 to-primary-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-primary-600 hover:to-primary-700 transition-all shadow-xl shadow-primary-500/25"
                  >
                    Get Free AI SEO Audit
                    <ArrowRight className="h-5 w-5" />
                  </Link>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link
                    href="/demo"
                    className="inline-flex items-center justify-center gap-2 bg-white text-primary-600 border-2 border-primary-200 px-8 py-4 rounded-xl font-semibold hover:bg-primary-50 hover:border-primary-300 transition-all"
                  >
                    See Live Demo
                    <BarChart3 className="h-5 w-5" />
                  </Link>
                </motion.div>
              </div>
              
              {/* Trust Text */}
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Shield className="h-4 w-4 text-success-500" />
                <span>No contracts • Cancel anytime • 14-day money back guarantee</span>
              </div>
            </div>

            {/* Animated Metrics Bar */}
            <AnimatePresence mode="wait">
              <motion.div
                key={currentMetric}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="bg-gradient-to-r from-gray-50 to-primary-50 rounded-xl p-4 border border-gray-200"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="p-2 bg-white rounded-lg shadow-sm">
                      <TrendingUp className="h-5 w-5 text-primary-500" />
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-gray-900">{metrics[currentMetric].value}</div>
                      <div className="text-sm text-gray-600">{metrics[currentMetric].label}</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-medium text-success-500">{metrics[currentMetric].trend}</div>
                    <div className="text-xs text-gray-500">Average result</div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>

          {/* Right Column - Interactive Dashboard */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-2xl p-6 border border-gray-200">
              {/* Dashboard Header */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="flex gap-1">
                    <div className="w-3 h-3 rounded-full bg-red-500" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                  </div>
                  <span className="text-sm font-medium text-gray-700">AI SEO Command Center</span>
                </div>
                <motion.div
                  animate={{ opacity: [1, 0.5, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="flex items-center gap-2 text-xs text-success-500 font-medium"
                >
                  <div className="w-2 h-2 rounded-full bg-success-500" />
                  LIVE
                </motion.div>
              </div>

              {/* AI Activity Feed */}
              <div className="bg-gray-900 rounded-lg p-4 mb-6 font-mono text-xs text-green-400">
                <div className="space-y-2">
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                  >
                    [AI] Analyzing competitor keywords...
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                  >
                    [AI] Found 847 ranking opportunities ✓
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5 }}
                  >
                    [AI] Optimizing meta descriptions...
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2 }}
                    className="text-yellow-400"
                  >
                    [AI] Creating content for "best seo tools 2024"...
                  </motion.div>
                </div>
              </div>

              {/* Metrics Grid */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="bg-gradient-to-br from-primary-50 to-primary-100 p-4 rounded-lg border border-primary-200"
                >
                  <div className="text-2xl font-bold text-primary-700">45,230</div>
                  <div className="text-xs text-primary-600">Organic Visitors</div>
                  <div className="text-xs text-success-500 mt-1">↑ 234%</div>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="bg-gradient-to-br from-electric-50 to-electric-100 p-4 rounded-lg border border-electric-200"
                >
                  <div className="text-2xl font-bold text-electric-700">1,847</div>
                  <div className="text-xs text-electric-600">Keywords Ranking</div>
                  <div className="text-xs text-success-500 mt-1">↑ 89%</div>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="bg-gradient-to-br from-success-50 to-success-100 p-4 rounded-lg border border-success-200"
                >
                  <div className="text-2xl font-bold text-success-700">$127K</div>
                  <div className="text-xs text-success-600">Monthly Revenue</div>
                  <div className="text-xs text-success-500 mt-1">↑ 312%</div>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="bg-gradient-to-br from-accent-50 to-accent-100 p-4 rounded-lg border border-accent-200"
                >
                  <div className="text-2xl font-bold text-accent-700">4.8%</div>
                  <div className="text-xs text-accent-600">Conversion Rate</div>
                  <div className="text-xs text-success-500 mt-1">↑ 127%</div>
                </motion.div>
              </div>

              {/* Chart */}
              <div className="h-32 flex items-end justify-between gap-2">
                {[40, 55, 65, 58, 72, 85, 92, 98, 87, 95, 102, 115].map((height, i) => (
                  <motion.div
                    key={i}
                    className="flex-1 bg-gradient-to-t from-primary-500 to-electric-500 rounded-t-lg opacity-80"
                    initial={{ height: 0 }}
                    animate={{ height: `${height}%` }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                  />
                ))}
              </div>
            </div>

            {/* Floating Elements */}
            <motion.div
              className="absolute -top-4 -right-4 bg-gradient-to-r from-primary-500 to-electric-500 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg"
              animate={{ 
                y: [0, -10, 0],
                rotate: [0, 5, 0]
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              AI Working 24/7
            </motion.div>

            <motion.div
              className="absolute -bottom-4 -left-4 bg-white border-2 border-success-500 text-success-600 px-4 py-2 rounded-full text-sm font-semibold shadow-lg"
              animate={{ 
                x: [0, 10, 0],
                rotate: [0, -5, 0]
              }}
              transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
            >
              387% Avg ROI
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}