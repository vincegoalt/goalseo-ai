"use client"

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, Zap, TrendingUp, Award, Search, BarChart3, Target } from 'lucide-react'

const typewriterWords = [
  "Rankings",
  "Traffic", 
  "Conversions",
  "Revenue",
  "Authority",
  "Visibility"
]

export default function Hero() {
  const [typewriterText, setTypewriterText] = useState("")
  const [wordIndex, setWordIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

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

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-electric-50 opacity-50" />
      
      {/* Animated Background Shapes */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob" />
        <div className="absolute top-40 right-10 w-72 h-72 bg-electric-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000" />
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-accent-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-primary-100 text-primary-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Zap className="h-4 w-4" />
              <span>AI-Powered SEO Solutions</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Achieve Your Goals with{' '}
              <span className="bg-gradient-to-r from-primary-500 to-electric-500 bg-clip-text text-transparent">
                AI-Driven SEO
              </span>
            </h1>

            {/* Dynamic Subtitle */}
            <div className="text-2xl text-gray-700 mb-8 h-8">
              Boost Your{' '}
              <span className="font-bold text-primary-600">
                {typewriterText}
                <span className="animate-pulse">|</span>
              </span>
            </div>

            {/* Description */}
            <p className="text-lg text-gray-600 mb-8">
              Transform your online presence with data-driven SEO strategies that deliver 
              <span className="font-semibold text-primary-600"> 387% average ROI</span>. 
              Our AI-powered platform identifies opportunities, optimizes content, and tracks performance 24/7.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Link
                href="/free-audit"
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-primary-500 to-primary-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-primary-600 hover:to-primary-700 transition-all transform hover:scale-105 shadow-xl"
              >
                Get Free SEO Audit
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                href="/demo"
                className="inline-flex items-center justify-center gap-2 bg-white text-primary-600 border-2 border-primary-200 px-8 py-4 rounded-lg font-semibold hover:bg-primary-50 transition-all"
              >
                Watch Demo
                <BarChart3 className="h-5 w-5" />
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center gap-6 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <Award className="h-5 w-5 text-primary-500" />
                <span>Google Premier Partner</span>
              </div>
              <div className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-success-500" />
                <span>500+ Clients</span>
              </div>
              <div className="flex items-center gap-2">
                <Target className="h-5 w-5 text-accent-500" />
                <span>50K+ Rankings Improved</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Interactive Demo/Visual */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative bg-white rounded-2xl shadow-2xl p-8 border border-gray-100">
              {/* Mock Dashboard */}
              <div className="mb-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-gray-900">Live SEO Performance</h3>
                  <span className="text-sm text-success-500 font-medium">↑ 387% Growth</span>
                </div>
                
                {/* Animated Metrics */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center gap-3">
                      <Search className="h-5 w-5 text-primary-500" />
                      <span className="text-sm font-medium">Organic Traffic</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-bold">45,230</span>
                      <span className="text-xs text-success-500">+234%</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center gap-3">
                      <TrendingUp className="h-5 w-5 text-electric-500" />
                      <span className="text-sm font-medium">Keyword Rankings</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-bold">1,847</span>
                      <span className="text-xs text-success-500">+89%</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center gap-3">
                      <BarChart3 className="h-5 w-5 text-accent-500" />
                      <span className="text-sm font-medium">Conversion Rate</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-bold">4.8%</span>
                      <span className="text-xs text-success-500">+127%</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Chart Visualization */}
              <div className="h-32 flex items-end justify-between gap-2">
                {[40, 55, 65, 58, 72, 85, 92, 98, 87, 95, 102, 115].map((height, i) => (
                  <motion.div
                    key={i}
                    className="flex-1 bg-gradient-to-t from-primary-500 to-electric-500 rounded-t"
                    initial={{ height: 0 }}
                    animate={{ height: `${height}%` }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                  />
                ))}
              </div>
            </div>

            {/* Floating Badge */}
            <motion.div
              className="absolute -top-4 -right-4 bg-success-500 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              Live Data
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}