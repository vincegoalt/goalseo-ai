"use client"

import { motion, useScroll, useTransform } from 'framer-motion'
import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { 
  Sparkles, TrendingUp, Globe, Users, Bot, Zap, 
  ArrowRight, CheckCircle, Star, Activity, BarChart3,
  Brain, Target, Gauge, Award, Shield, Clock
} from 'lucide-react'

export default function HeroUltra() {
  const [metrics, setMetrics] = useState({
    rankings: 0,
    traffic: 0,
    conversions: 0,
    roi: 0
  })
  
  // Removed word rotation - now static
  
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  })
  
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  
  // Animated counters
  useEffect(() => {
    const interval = setInterval(() => {
      setMetrics(prev => ({
        rankings: Math.min(prev.rankings + 237, 50000),
        traffic: Math.min(prev.traffic + 892, 387000),
        conversions: Math.min(prev.conversions + 47, 12500),
        roi: Math.min(prev.roi + 3, 387)
      }))
    }, 50)
    
    const timeout = setTimeout(() => clearInterval(interval), 5000)
    return () => {
      clearInterval(interval)
      clearTimeout(timeout)
    }
  }, [])
  
  // Word rotation removed - now static
  
  // Live activity feed
  const activities = [
    { icon: TrendingUp, text: "Ranked #1 for 'enterprise software'", time: "2 min ago" },
    { icon: Users, text: "+2,847 organic visitors today", time: "5 min ago" },
    { icon: Award, text: "Outranked Amazon for 'product category'", time: "12 min ago" },
    { icon: Zap, text: "CTR increased by 156%", time: "18 min ago" }
  ]
  
  return (
    <div ref={containerRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <motion.div 
        style={{ y, opacity }}
        className="absolute inset-0"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-electric-50" />
        
        {/* Animated Grid */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-20" />
          <motion.div
            animate={{
              backgroundPosition: ['0% 0%', '100% 100%'],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: 'reverse',
            }}
            className="absolute inset-0 bg-gradient-to-tr from-primary-100/20 via-transparent to-electric-100/20"
          />
        </div>
        
        {/* Floating Orbs */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
          className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-br from-primary-300/30 to-electric-300/30 rounded-full filter blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            x: [0, -70, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
          className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-electric-300/30 to-primary-300/30 rounded-full filter blur-3xl"
        />
      </motion.div>
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          {/* Live Status Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 bg-white/90 backdrop-blur border border-gray-200 px-4 py-2 rounded-full mb-8"
          >
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <span className="text-sm text-gray-700">AI Agents Active</span>
            <span className="text-sm font-semibold text-primary-600">24/7 Optimization</span>
          </motion.div>
          
          {/* Main Headline with Animation */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl lg:text-7xl font-bold text-gray-900 mb-6"
          >
            AI-Powered SEO with{' '}
            <span className="bg-gradient-to-r from-primary-500 to-electric-500 bg-clip-text text-transparent">
              Human Excellence
            </span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl lg:text-2xl text-gray-600 max-w-3xl mx-auto mb-8"
          >
            We combine cutting-edge AI with 10+ years of expertise to deliver results agencies charging $3,000/mo can't match.
            <span className="block mt-2 text-lg">
              <span className="font-semibold text-gray-900">387% average ROI</span> in 90 days or your money back.
            </span>
          </motion.p>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-lg text-primary-600 font-semibold max-w-3xl mx-auto mb-12"
          >
            Masters of Generative Engine Optimization (GEO), Answer Engine Optimization (AEO), and Traditional SEO
          </motion.p>
          
          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          >
            <Link
              href="/free-audit"
              className="group relative inline-flex items-center justify-center gap-2 bg-gradient-to-r from-primary-500 to-primary-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-primary-600 hover:to-primary-700 transition-all shadow-xl hover:shadow-2xl"
            >
              <Sparkles className="h-5 w-5" />
              Get Free AI Audit
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              <div className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full animate-pulse">
                Limited
              </div>
            </Link>
            
            <Link
              href="/demo"
              className="inline-flex items-center justify-center gap-2 bg-white text-primary-600 border-2 border-primary-200 px-8 py-4 rounded-xl font-semibold hover:bg-primary-50 transition-all"
            >
              <Activity className="h-5 w-5" />
              Watch Live Demo
            </Link>
          </motion.div>
          
          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-600 mb-16"
          >
            <div className="flex items-center gap-2">
              <Shield className="h-4 w-4 text-green-500" />
              <span>SOC 2 Compliant</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="h-4 w-4 text-yellow-500" />
              <span>4.9/5 Rating (2,847 reviews)</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-blue-500" />
              <span>Results in 7 days</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="h-4 w-4 text-purple-500" />
              <span>10,000+ businesses</span>
            </div>
          </motion.div>
        </div>
        
        {/* Live Metrics Dashboard */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="relative"
        >
          <div className="bg-white/90 backdrop-blur rounded-2xl shadow-2xl border border-gray-200 p-8">
            {/* Metrics Grid */}
            <div className="grid md:grid-cols-4 gap-6 mb-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-gray-900 mb-2">
                  {metrics.rankings.toLocaleString()}+
                </div>
                <div className="text-sm text-gray-600 flex items-center justify-center gap-1">
                  <Target className="h-4 w-4" />
                  #1 Rankings
                </div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-gray-900 mb-2">
                  {metrics.traffic.toLocaleString()}+
                </div>
                <div className="text-sm text-gray-600 flex items-center justify-center gap-1">
                  <TrendingUp className="h-4 w-4" />
                  Monthly Traffic
                </div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-gray-900 mb-2">
                  {metrics.conversions.toLocaleString()}+
                </div>
                <div className="text-sm text-gray-600 flex items-center justify-center gap-1">
                  <Users className="h-4 w-4" />
                  Conversions
                </div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-gray-900 mb-2">
                  {metrics.roi}%
                </div>
                <div className="text-sm text-gray-600 flex items-center justify-center gap-1">
                  <BarChart3 className="h-4 w-4" />
                  Average ROI
                </div>
              </div>
            </div>
            
            {/* Live Activity Feed */}
            <div className="border-t border-gray-200 pt-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                  <Activity className="h-4 w-4" />
                  Live Customer Results
                </h3>
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              </div>
              
              <div className="space-y-3">
                {activities.map((activity, index) => {
                  const Icon = activity.icon
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 1 + index * 0.1 }}
                      className="flex items-center gap-3 text-sm"
                    >
                      <Icon className="h-4 w-4 text-primary-500" />
                      <span className="text-gray-700 flex-1">{activity.text}</span>
                      <span className="text-xs text-gray-500">{activity.time}</span>
                    </motion.div>
                  )
                })}
              </div>
              
              <button className="mt-4 text-sm text-primary-600 hover:text-primary-700 font-medium">
                View all results →
              </button>
            </div>
          </div>
          
          {/* Floating Badge */}
          <motion.div
            animate={{
              y: [0, -10, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              repeatType: 'reverse',
            }}
            className="absolute -top-4 -right-4 bg-gradient-to-r from-primary-500 to-electric-500 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg"
          >
            <Brain className="inline h-4 w-4 mr-1" />
            Powered by GPT-4
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}