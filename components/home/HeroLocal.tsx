"use client"

import { motion, useScroll, useTransform } from 'framer-motion'
import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { 
  MapPin, Phone, Users, TrendingUp, Award, CheckCircle,
  Clock, Star, Shield, Home, Wrench, Zap, Scale,
  DollarSign, Store, Heart, Utensils, ArrowRight
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
    { Icon: Zap, name: "Electricians", path: "/services/local/electricians" },
    { Icon: Home, name: "HVAC", path: "/services/local/hvac" },
    { Icon: Scale, name: "Attorneys", path: "/services/local/attorneys" },
    { Icon: Heart, name: "Dentists", path: "/services/local/dentists" },
    { Icon: DollarSign, name: "Real Estate", path: "/services/local/real-estate" },
    { Icon: Utensils, name: "Restaurants", path: "/services/local/restaurants" },
    { Icon: Store, name: "Retail", path: "/services/local/retail" }
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
        
        {/* Floating Location Markers */}
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
          <MapPin className="h-12 w-12" />
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
          <MapPin className="h-12 w-12" />
        </motion.div>
      </motion.div>
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          {/* Location Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 bg-white/90 backdrop-blur border border-gray-200 px-4 py-2 rounded-full mb-8"
          >
            <MapPin className="h-4 w-4 text-red-500" />
            <span className="text-sm text-gray-700">Proudly Serving</span>
            <span className="text-sm font-semibold text-blue-600">Long Beach & Southern California</span>
          </motion.div>
          
          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl lg:text-7xl font-bold text-gray-900 mb-6"
          >
            Local SEO That Makes{' '}
            <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
              Your Phone Ring
            </span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl lg:text-2xl text-gray-600 max-w-3xl mx-auto mb-4"
          >
            We help Long Beach businesses dominate Google search results and Google Maps. 
            From Belmont Shore to Bixby Knolls, we know your neighborhoods.
          </motion.p>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-lg text-gray-700 max-w-2xl mx-auto mb-12"
          >
            <span className="font-semibold">500+ local businesses</span> trust us to bring them customers. 
            <span className="block mt-2">Emergency services, professional services, restaurants — we know what works.</span>
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
              className="group relative inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-xl font-semibold hover:from-blue-700 hover:to-blue-800 transition-all shadow-xl hover:shadow-2xl"
            >
              <Phone className="h-5 w-5" />
              Get Your Free Local SEO Audit
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              <div className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full animate-pulse">
                Free
              </div>
            </Link>
            
            <Link
              href="#local-services"
              className="inline-flex items-center justify-center gap-2 bg-white text-blue-600 border-2 border-blue-200 px-8 py-4 rounded-xl font-semibold hover:bg-blue-50 transition-all"
            >
              <MapPin className="h-5 w-5" />
              See Local Success Stories
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
              <span>Google Partner</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="h-4 w-4 text-yellow-500" />
              <span>4.9/5 Local Reviews</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-blue-500" />
              <span>Results in 30 days</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="h-4 w-4 text-purple-500" />
              <span>500+ LB Businesses</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="h-4 w-4 text-green-500" />
              <span>Long Beach Chamber Member</span>
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
          <p className="text-center text-gray-600 mb-8 font-semibold">
            Specialized SEO for Local Businesses:
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {serviceIcons.map(({ Icon, name, path }, index) => (
              <Link
                key={name}
                href={path}
                className="group bg-white/90 backdrop-blur rounded-xl p-6 text-center hover:shadow-xl transition-all hover:scale-105 border border-gray-200"
              >
                <Icon className="h-10 w-10 mx-auto mb-3 text-blue-600 group-hover:text-blue-700" />
                <p className="text-sm font-semibold text-gray-900">{name}</p>
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
          <div className="bg-white/90 backdrop-blur rounded-2xl shadow-2xl border border-gray-200 p-8">
            <h3 className="text-center text-lg font-semibold text-gray-700 mb-6">
              Real Results for Long Beach Businesses
            </h3>
            
            {/* Metrics Grid */}
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-4xl font-bold text-gray-900 mb-2">
                  {metrics.businesses}+
                </div>
                <div className="text-sm text-gray-600 flex items-center justify-center gap-1">
                  <Store className="h-4 w-4" />
                  Local Businesses
                </div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-gray-900 mb-2">
                  {metrics.calls.toLocaleString()}+
                </div>
                <div className="text-sm text-gray-600 flex items-center justify-center gap-1">
                  <Phone className="h-4 w-4" />
                  Calls Generated/Mo
                </div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-gray-900 mb-2">
                  ${metrics.revenue.toLocaleString()}+
                </div>
                <div className="text-sm text-gray-600 flex items-center justify-center gap-1">
                  <DollarSign className="h-4 w-4" />
                  Revenue Generated
                </div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-gray-900 mb-2">
                  {metrics.rankings.toLocaleString()}+
                </div>
                <div className="text-sm text-gray-600 flex items-center justify-center gap-1">
                  <TrendingUp className="h-4 w-4" />
                  #1 Local Rankings
                </div>
              </div>
            </div>
            
            {/* Local Areas Served */}
            <div className="mt-8 pt-6 border-t border-gray-200">
              <p className="text-center text-sm text-gray-600">
                <span className="font-semibold">Areas We Serve:</span> Long Beach • Signal Hill • Lakewood • Seal Beach • 
                Los Alamitos • Cypress • Bellflower • Paramount • Downey • Cerritos • Carson • San Pedro
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}