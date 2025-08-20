"use client"

import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import { 
  Star, Quote, Play, ChevronLeft, ChevronRight,
  TrendingUp, Users, Award, Verified, ArrowRight,
  BarChart3, Globe, Target, Zap
} from 'lucide-react'
import Image from 'next/image'

export default function TestimonialsUltra() {
  const [activeTestimonial, setActiveTestimonial] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)
  
  const testimonials = [
    {
      id: 1,
      name: 'Sarah Chen',
      role: 'CEO',
      company: 'TechFlow Solutions',
      image: '👩‍💼',
      video: true,
      rating: 5,
      results: {
        traffic: '+423%',
        revenue: '+$2.8M',
        rankings: '127 #1',
        roi: '18.5x'
      },
      quote: "GoalSEO AI replaced our $8,000/month agency and delivered 4x better results. We went from page 5 to dominating the first page for all our target keywords.",
      highlight: "From invisible to industry leader in 90 days",
      industry: 'SaaS',
      verified: true
    },
    {
      id: 2,
      name: 'Michael Rodriguez',
      role: 'Marketing Director',
      company: 'E-Store Pro',
      image: '👨‍💼',
      video: true,
      rating: 5,
      results: {
        traffic: '+892%',
        revenue: '+$5.2M',
        rankings: '450 #1',
        roi: '32.7x'
      },
      quote: "We tried Ahrefs, SEMrush, and 3 agencies. Nothing came close to GoalSEO's AI. Our organic revenue increased 892% in 6 months.",
      highlight: "Best ROI we've ever seen from marketing",
      industry: 'E-commerce',
      verified: true
    },
    {
      id: 3,
      name: 'Emily Thompson',
      role: 'Founder',
      company: 'GrowthLab Agency',
      image: '👩‍💻',
      video: false,
      rating: 5,
      results: {
        traffic: '+567%',
        revenue: '+$1.2M',
        rankings: '89 #1',
        roi: '24.3x'
      },
      quote: "As an agency owner, I was skeptical. But GoalSEO AI does what my team of 5 couldn't. We now use it for all our clients.",
      highlight: "Agency owner switched to GoalSEO",
      industry: 'Marketing Agency',
      verified: true
    },
    {
      id: 4,
      name: 'David Park',
      role: 'CMO',
      company: 'FinanceHub',
      image: '👨‍💻',
      video: true,
      rating: 5,
      results: {
        traffic: '+234%',
        revenue: '+$890K',
        rankings: '67 #1',
        roi: '15.2x'
      },
      quote: "The AI found opportunities we never knew existed. Our cost per acquisition dropped 78% while traffic tripled.",
      highlight: "78% reduction in CAC",
      industry: 'FinTech',
      verified: true
    },
    {
      id: 5,
      name: 'Lisa Anderson',
      role: 'VP Marketing',
      company: 'HealthTech Plus',
      image: '👩‍⚕️',
      video: false,
      rating: 5,
      results: {
        traffic: '+678%',
        revenue: '+$3.4M',
        rankings: '234 #1',
        roi: '28.9x'
      },
      quote: "GoalSEO's AI creates better content than our $50/hour writers and optimizes it perfectly. Game-changing technology.",
      highlight: "Replaced entire content team",
      industry: 'Healthcare',
      verified: true
    }
  ]
  
  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 8000)
    
    return () => clearInterval(interval)
  }, [])
  
  const currentTestimonial = testimonials[activeTestimonial]
  
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
            <Award className="h-4 w-4" />
            <span>Customer Success</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            10,000+ Businesses Choose{' '}
            <span className="bg-gradient-to-r from-primary-500 to-electric-500 bg-clip-text text-transparent">
              AI Over Agencies
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real results from real businesses. No cherry-picked case studies, just consistent excellence.
          </p>
        </motion.div>
        
        {/* Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-4 gap-4 mb-12"
        >
          {[
            { icon: Users, label: 'Happy Customers', value: '10,847+', color: 'from-blue-500 to-cyan-500' },
            { icon: Star, label: 'Average Rating', value: '4.9/5', color: 'from-yellow-500 to-orange-500' },
            { icon: TrendingUp, label: 'Avg Traffic Increase', value: '387%', color: 'from-green-500 to-emerald-500' },
            { icon: Award, label: 'Success Rate', value: '98.7%', color: 'from-purple-500 to-pink-500' }
          ].map((stat, index) => {
            const StatIcon = stat.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl p-4 text-center border border-gray-200"
              >
                <div className={`w-10 h-10 rounded-lg bg-gradient-to-r ${stat.color} flex items-center justify-center text-white mx-auto mb-2`}>
                  <StatIcon className="h-5 w-5" />
                </div>
                <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </motion.div>
            )
          })}
        </motion.div>
        
        {/* Main Testimonial Display */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTestimonial}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden"
            >
              <div className="grid lg:grid-cols-2 gap-0">
                {/* Video/Image Side */}
                <div className="relative bg-gradient-to-br from-primary-500 to-electric-500 p-12 flex items-center justify-center">
                  {currentTestimonial.video ? (
                    <div className="relative">
                      <div className="text-8xl mb-4">{currentTestimonial.image}</div>
                      <button
                        onClick={() => setIsPlaying(!isPlaying)}
                        className="absolute inset-0 flex items-center justify-center"
                      >
                        <div className="w-16 h-16 bg-white/20 backdrop-blur rounded-full flex items-center justify-center hover:bg-white/30 transition-all">
                          <Play className="h-8 w-8 text-white ml-1" />
                        </div>
                      </button>
                    </div>
                  ) : (
                    <div className="text-8xl">{currentTestimonial.image}</div>
                  )}
                  
                  {/* Floating Results */}
                  <div className="absolute top-8 right-8 bg-white/10 backdrop-blur text-white px-3 py-1 rounded-full text-sm">
                    {currentTestimonial.industry}
                  </div>
                  
                  {currentTestimonial.verified && (
                    <div className="absolute bottom-8 left-8 flex items-center gap-2 text-white">
                      <Verified className="h-5 w-5" />
                      <span className="text-sm font-medium">Verified Customer</span>
                    </div>
                  )}
                </div>
                
                {/* Content Side */}
                <div className="p-8 lg:p-12">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(currentTestimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  
                  <div className="relative mb-6">
                    <Quote className="absolute -top-2 -left-2 h-8 w-8 text-gray-200" />
                    <p className="text-xl text-gray-700 italic relative z-10 pl-6">
                      {currentTestimonial.quote}
                    </p>
                  </div>
                  
                  <div className="bg-gradient-to-r from-primary-50 to-electric-50 rounded-xl p-4 mb-6">
                    <p className="text-primary-700 font-semibold mb-2">
                      {currentTestimonial.highlight}
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                      {Object.entries(currentTestimonial.results).map(([key, value]) => (
                        <div key={key} className="flex items-center gap-2">
                          <BarChart3 className="h-4 w-4 text-primary-500" />
                          <span className="text-sm">
                            <span className="font-semibold text-gray-900">{value}</span>
                            <span className="text-gray-600 ml-1">{key}</span>
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-semibold text-gray-900">{currentTestimonial.name}</div>
                      <div className="text-sm text-gray-600">
                        {currentTestimonial.role} at {currentTestimonial.company}
                      </div>
                    </div>
                    
                    <button className="text-primary-600 hover:text-primary-700 font-medium flex items-center gap-1">
                      Read full story
                      <ArrowRight className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
          
          {/* Navigation */}
          <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 flex justify-between pointer-events-none">
            <button
              onClick={() => setActiveTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
              className="pointer-events-auto -ml-4 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:shadow-xl transition-all"
            >
              <ChevronLeft className="h-6 w-6 text-gray-600" />
            </button>
            <button
              onClick={() => setActiveTestimonial((prev) => (prev + 1) % testimonials.length)}
              className="pointer-events-auto -mr-4 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:shadow-xl transition-all"
            >
              <ChevronRight className="h-6 w-6 text-gray-600" />
            </button>
          </div>
        </div>
        
        {/* Testimonial Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveTestimonial(index)}
              className={`transition-all ${
                index === activeTestimonial
                  ? 'w-8 h-2 bg-primary-500 rounded-full'
                  : 'w-2 h-2 bg-gray-300 rounded-full hover:bg-gray-400'
              }`}
            />
          ))}
        </div>
        
        {/* Mini Testimonials Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-6 mt-12"
        >
          {[
            { quote: "Canceled our $5K/mo agency same day", author: "John D.", company: "TechCo" },
            { quote: "387% traffic increase in 90 days", author: "Maria S.", company: "ShopPlus" },
            { quote: "Finally ranking above Amazon!", author: "Alex W.", company: "GearPro" }
          ].map((mini, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl p-6 border border-gray-200"
            >
              <div className="flex gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-700 mb-3">"{mini.quote}"</p>
              <div className="text-sm">
                <span className="font-semibold text-gray-900">{mini.author}</span>
                <span className="text-gray-600"> - {mini.company}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}