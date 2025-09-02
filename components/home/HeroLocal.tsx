"use client"

import { motion, useScroll, useTransform } from 'framer-motion'
import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { 
  MapPin, Phone, Users, TrendingUp, Award, CheckCircle,
  Clock, Star, Shield, Home, Wrench, Zap, Scale,
  DollarSign, Store, Heart, Utensils, ArrowRight,
  Code, Rocket, Bot, Sparkles, Building2, Calculator,
  Dumbbell, Scissors, Car, Snowflake
} from 'lucide-react'

export default function HeroLocal() {
  const [metrics, setMetrics] = useState({
    businesses: 0,
    calls: 0,
    revenue: 0,
    rankings: 0
  })
  
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
        businesses: Math.min(prev.businesses + 12, 500),
        calls: Math.min(prev.calls + 47, 2847),
        revenue: Math.min(prev.revenue + 1893, 150000),
        rankings: Math.min(prev.rankings + 23, 1200)
      }))
    }, 50)
    
    const timeout = setTimeout(() => clearInterval(interval), 5000)
    return () => {
      clearInterval(interval)
      clearTimeout(timeout)
    }
  }, [])
  
  const serviceIcons = [
    { Icon: Wrench, name: "Plumbers", path: "/services/local/plumbers" },
    { Icon: Snowflake, name: "HVAC", path: "/services/local/hvac" },
    { Icon: Zap, name: "Electricians", path: "/services/local/electricians" },
    { Icon: Home, name: "Real Estate", path: "/services/local/real-estate" },
    { Icon: Scale, name: "Attorneys", path: "/services/local/attorneys" },
    { Icon: Utensils, name: "Restaurants", path: "/services/local/restaurants" },
    { Icon: Building2, name: "Roofing", path: "/services/local/roofing" },
    { Icon: Heart, name: "Dentists", path: "/services/local/dentists" },
    { Icon: Calculator, name: "CPAs", path: "/services/local/cpas" },
    { Icon: Dumbbell, name: "Gyms", path: "/services/local/gyms" },
    { Icon: Scissors, name: "Salons", path: "/services/local/salons" },
    { Icon: Car, name: "Auto Services", path: "/services/local/auto-services" }
  ]
  
  return (
    <div ref={containerRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background with Local Map Pattern */}
      <motion.div 
        style={{ y, opacity }}
        className="absolute inset-0"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-green-50" />
        
        {/* Map Grid Pattern */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-10" />
          <motion.div
            animate={{
              backgroundPosition: ['0% 0%', '100% 100%'],
            }}
            transition={{
              duration: 30,
              repeat: Infinity,
              repeatType: 'reverse',
            }}
            className="absolute inset-0 bg-gradient-to-tr from-blue-100/20 via-transparent to-green-100/20"
          />
        </div>
        
        {/* Floating Icons */}
        <motion.div
          animate={{
            y: [0, -20, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
          className="absolute top-32 left-20 text-blue-500 opacity-20"
        >
          <Code className="h-12 w-12" />
        </motion.div>
        <motion.div
          animate={{
            y: [0, 20, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
          className="absolute bottom-32 right-20 text-green-500 opacity-20"
        >
          <Rocket className="h-12 w-12" />
        </motion.div>
      </motion.div>
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          {/* New Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-100 to-purple-100 backdrop-blur border border-blue-200 px-4 py-2 rounded-full mb-8"
          >
            <Code className="h-4 w-4 text-blue-600" />
            <span className="text-sm font-semibold text-gray-800">We Build AND Rank Websites</span>
            <Bot className="h-4 w-4 text-purple-600" />
            <span className="text-xs bg-green-500 text-white px-2 py-0.5 rounded-full ml-2">AI-Ready</span>
          </motion.div>
          
          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl lg:text-7xl font-bold text-gray-900 mb-6"
          >
            We Build It.{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              We Rank It.
            </span>
            <span className="block mt-2 text-4xl lg:text-6xl">
              You Dominate Long Beach.
            </span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl lg:text-2xl text-gray-700 max-w-3xl mx-auto mb-4 font-semibold"
          >
            The only Long Beach SEO company that actually builds your website too.
          </motion.p>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-lg text-gray-600 max-w-2xl mx-auto mb-8"
          >
            Custom Shopify & WordPress development + Local SEO + AI-ready for voice search & ChatGPT.
            <span className="block mt-2 text-base">One team. Complete solution. Real results.</span>
          </motion.p>
          
          {/* New Value Props */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8 max-w-4xl mx-auto"
          >
            <div className="bg-white/90 backdrop-blur rounded-xl p-4 shadow-lg border border-blue-100">
              <Rocket className="h-8 w-8 mx-auto mb-2 text-blue-600" />
              <div className="font-bold text-gray-900">We BUILD</div>
              <div className="text-sm text-gray-600">Custom Shopify & WordPress sites from scratch</div>
            </div>
            <div className="bg-white/90 backdrop-blur rounded-xl p-4 shadow-lg border border-purple-100">
              <Star className="h-8 w-8 mx-auto mb-2 text-purple-600" />
              <div className="font-bold text-gray-900">We RANK</div>
              <div className="text-sm text-gray-600">Dominate Google, voice search & ChatGPT</div>
            </div>
            <div className="bg-white/90 backdrop-blur rounded-xl p-4 shadow-lg border border-green-100">
              <Phone className="h-8 w-8 mx-auto mb-2 text-green-600" />
              <div className="font-bold text-gray-900">You WIN</div>
              <div className="text-sm text-gray-600">More calls, more customers, more revenue</div>
            </div>
          </motion.div>
          
          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          >
            <Link
              href="/free-audit"
              className="group relative inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all shadow-xl hover:shadow-2xl"
            >
              <Sparkles className="h-5 w-5" />
              Get Your Site Built & Ranked
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              <div className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full animate-pulse">
                $5K-15K
              </div>
            </Link>
            
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-white text-blue-600 border-2 border-blue-200 px-8 py-4 rounded-xl font-semibold hover:bg-blue-50 transition-all"
            >
              <Phone className="h-5 w-5" />
              Call (562) 682-9403
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
              <Code className="h-4 w-4 text-blue-500" />
              <span>Shopify Partners</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="h-4 w-4 text-green-500" />
              <span>WordPress Experts</span>
            </div>
            <div className="flex items-center gap-2">
              <Bot className="h-4 w-4 text-purple-500" />
              <span>AI-Optimized</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-blue-500" />
              <span>30-60 Day Launch</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="h-4 w-4 text-yellow-500" />
              <span>500+ Sites Built</span>
            </div>
          </motion.div>
        </div>
        
        {/* Service Icons Grid */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          id="local-services"
          className="mb-16"
        >
          <p className="text-center text-gray-700 mb-2 font-bold text-lg">
            We Build & Rank Websites for All Local Businesses:
          </p>
          <p className="text-center text-gray-600 mb-8 text-sm">
            Custom development + SEO optimization + AI-ready architecture
          </p>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
            {serviceIcons.map(({ Icon, name, path }, index) => (
              <Link
                key={name}
                href={path}
                className="group bg-white/90 backdrop-blur rounded-xl p-4 text-center hover:shadow-xl transition-all hover:scale-105 border border-gray-200"
              >
                <Icon className="h-8 w-8 mx-auto mb-2 text-blue-600 group-hover:text-purple-600 transition-colors" />
                <p className="text-xs font-semibold text-gray-900">{name}</p>
              </Link>
            ))}
          </div>
        </motion.div>
        
        {/* Live Metrics Dashboard */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="relative"
        >
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 backdrop-blur rounded-2xl shadow-2xl border border-gray-200 p-8">
            <h3 className="text-center text-lg font-bold text-gray-900 mb-2">
              Why Other Agencies Can't Compete
            </h3>
            <p className="text-center text-sm text-gray-600 mb-6">
              Web developers can't do SEO. SEO companies can't build websites. We do BOTH.
            </p>
            
            {/* Metrics Grid */}
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                  {metrics.businesses}+
                </div>
                <div className="text-sm text-gray-600 flex items-center justify-center gap-1">
                  <Store className="h-4 w-4" />
                  Sites Built & Ranked
                </div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                  {metrics.calls.toLocaleString()}+
                </div>
                <div className="text-sm text-gray-600 flex items-center justify-center gap-1">
                  <Phone className="h-4 w-4" />
                  Calls Generated/Mo
                </div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                  ${metrics.revenue.toLocaleString()}+
                </div>
                <div className="text-sm text-gray-600 flex items-center justify-center gap-1">
                  <DollarSign className="h-4 w-4" />
                  Revenue Generated
                </div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                  {metrics.rankings.toLocaleString()}+
                </div>
                <div className="text-sm text-gray-600 flex items-center justify-center gap-1">
                  <TrendingUp className="h-4 w-4" />
                  #1 Rankings Achieved
                </div>
              </div>
            </div>
            
            {/* New Services Highlight */}
            <div className="mt-8 pt-6 border-t border-gray-200">
              <div className="grid md:grid-cols-3 gap-4 text-center">
                <div>
                  <Code className="h-6 w-6 mx-auto mb-2 text-blue-600" />
                  <p className="text-sm font-semibold text-gray-900">Shopify Development</p>
                  <p className="text-xs text-gray-600">Custom e-commerce stores</p>
                </div>
                <div>
                  <Rocket className="h-6 w-6 mx-auto mb-2 text-purple-600" />
                  <p className="text-sm font-semibold text-gray-900">WordPress Development</p>
                  <p className="text-xs text-gray-600">Service business websites</p>
                </div>
                <div>
                  <Bot className="h-6 w-6 mx-auto mb-2 text-green-600" />
                  <p className="text-sm font-semibold text-gray-900">AI Optimization</p>
                  <p className="text-xs text-gray-600">Voice search & ChatGPT ready</p>
                </div>
              </div>
            </div>
            
            {/* Local Areas Served */}
            <div className="mt-6 pt-6 border-t border-gray-200">
              <p className="text-center text-sm text-gray-600">
                <span className="font-semibold">Proudly Serving:</span> Long Beach • Signal Hill • Lakewood • Seal Beach • 
                Los Alamitos • Cypress • Bellflower • Paramount • Downey • Cerritos • Carson • San Pedro
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}