"use client"

import Link from 'next/link'
import { motion } from 'framer-motion'
import { 
  Wrench, Zap, Home, Scale, Heart, DollarSign, 
  Utensils, Store, Shield, Car, Scissors, Dumbbell,
  Briefcase, Building, Phone, ArrowRight, MapPin,
  Users, Star, TrendingUp
} from 'lucide-react'

export default function LocalServices() {
  const emergencyServices = [
    {
      icon: Wrench,
      title: "Plumbers",
      description: "24/7 emergency plumbing services in Long Beach",
      stats: "47 plumbers ranked #1",
      path: "/services/local/plumbers",
      color: "bg-blue-50 text-blue-600"
    },
    {
      icon: Zap,
      title: "Electricians",
      description: "Electrical contractors & emergency repairs",
      stats: "32 electricians dominating search",
      path: "/services/local/electricians",
      color: "bg-yellow-50 text-yellow-600"
    },
    {
      icon: Home,
      title: "HVAC Companies",
      description: "AC repair & heating services",
      stats: "28 HVAC companies on page 1",
      path: "/services/local/hvac",
      color: "bg-green-50 text-green-600"
    },
    {
      icon: Shield,
      title: "Roofing",
      description: "Roofing contractors & storm damage repair",
      stats: "19 roofers getting 100+ calls/mo",
      path: "/services/local/roofing",
      color: "bg-red-50 text-red-600"
    }
  ]

  const professionalServices = [
    {
      icon: Scale,
      title: "Attorneys",
      description: "Personal injury, DUI, family law",
      stats: "$2M+ in case value generated",
      path: "/services/local/attorneys",
      color: "bg-purple-50 text-purple-600"
    },
    {
      icon: Heart,
      title: "Dentists",
      description: "General, cosmetic & emergency dental",
      stats: "65 practices fully booked",
      path: "/services/local/dentists",
      color: "bg-pink-50 text-pink-600"
    },
    {
      icon: DollarSign,
      title: "Real Estate",
      description: "Agents, brokers & property managers",
      stats: "150+ properties sold via SEO",
      path: "/services/local/real-estate",
      color: "bg-indigo-50 text-indigo-600"
    },
    {
      icon: Briefcase,
      title: "CPAs & Tax Services",
      description: "Accountants & tax preparation",
      stats: "300% ROI in tax season",
      path: "/services/local/cpas",
      color: "bg-gray-50 text-gray-600"
    }
  ]

  const lifestyleServices = [
    {
      icon: Utensils,
      title: "Restaurants",
      description: "Local dining & catering services",
      stats: "85 restaurants packed nightly",
      path: "/services/local/restaurants",
      color: "bg-orange-50 text-orange-600"
    },
    {
      icon: Dumbbell,
      title: "Gyms & Fitness",
      description: "Personal trainers & fitness studios",
      stats: "2,000+ new memberships",
      path: "/services/local/gyms",
      color: "bg-cyan-50 text-cyan-600"
    },
    {
      icon: Scissors,
      title: "Salons & Spas",
      description: "Beauty services & wellness",
      stats: "40 salons fully booked",
      path: "/services/local/salons",
      color: "bg-rose-50 text-rose-600"
    },
    {
      icon: Car,
      title: "Auto Services",
      description: "Mechanics, body shops & detailing",
      stats: "55 shops dominating maps",
      path: "/services/local/auto",
      color: "bg-slate-50 text-slate-600"
    }
  ]

  const ServiceCard = ({ service, index }: { service: any, index: number }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <Link
        href={service.path}
        className="group block bg-white rounded-xl p-6 hover:shadow-xl transition-all border border-gray-200 h-full"
      >
        <div className={`inline-flex p-3 rounded-lg ${service.color} mb-4`}>
          <service.icon className="h-6 w-6" />
        </div>
        
        <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
          SEO for {service.title}
        </h3>
        
        <p className="text-gray-600 mb-3">
          {service.description}
        </p>
        
        <div className="flex items-center justify-between">
          <span className="text-sm font-semibold text-green-600">
            {service.stats}
          </span>
          <ArrowRight className="h-4 w-4 text-gray-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all" />
        </div>
      </Link>
    </motion.div>
  )

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full mb-6"
          >
            <MapPin className="h-4 w-4" />
            <span className="text-sm font-semibold">Local Business Specialization</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6"
          >
            We Know Your Industry Inside Out
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Specialized SEO strategies for Long Beach businesses. We understand your customers, 
            your competition, and exactly what it takes to dominate local search.
          </motion.p>
        </div>

        {/* Emergency & Home Services */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
            <h3 className="text-2xl font-bold text-gray-900">Emergency & Home Services</h3>
            <span className="text-sm text-gray-600">— High-urgency searches, immediate calls</span>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {emergencyServices.map((service, index) => (
              <ServiceCard key={service.title} service={service} index={index} />
            ))}
          </div>
        </div>

        {/* Professional Services */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-2 h-2 bg-blue-500 rounded-full" />
            <h3 className="text-2xl font-bold text-gray-900">Professional Services</h3>
            <span className="text-sm text-gray-600">— High-value clients, trust-based decisions</span>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {professionalServices.map((service, index) => (
              <ServiceCard key={service.title} service={service} index={index} />
            ))}
          </div>
        </div>

        {/* Lifestyle & Local Services */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-2 h-2 bg-green-500 rounded-full" />
            <h3 className="text-2xl font-bold text-gray-900">Lifestyle & Local Services</h3>
            <span className="text-sm text-gray-600">— Community favorites, repeat customers</span>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {lifestyleServices.map((service, index) => (
              <ServiceCard key={service.title} service={service} index={index} />
            ))}
          </div>
        </div>

        {/* Success Metrics Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 text-white"
        >
          <div className="grid md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold mb-2">500+</div>
              <div className="text-blue-100 flex items-center justify-center gap-1">
                <Building className="h-4 w-4" />
                Local Businesses
              </div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">87%</div>
              <div className="text-blue-100 flex items-center justify-center gap-1">
                <TrendingUp className="h-4 w-4" />
                Page 1 Rankings
              </div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">2,847</div>
              <div className="text-blue-100 flex items-center justify-center gap-1">
                <Phone className="h-4 w-4" />
                Calls/Month Average
              </div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">4.9★</div>
              <div className="text-blue-100 flex items-center justify-center gap-1">
                <Star className="h-4 w-4" />
                Client Rating
              </div>
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-lg text-gray-600 mb-6">
            Don't see your industry? We work with all local businesses.
          </p>
          <Link
            href="/free-audit"
            className="inline-flex items-center justify-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-blue-700 transition-all shadow-xl"
          >
            <Phone className="h-5 w-5" />
            Get Your Free Local SEO Audit
            <ArrowRight className="h-5 w-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}