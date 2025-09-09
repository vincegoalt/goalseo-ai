"use client"

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Trophy, Award, Star, Medal, Crown, Target, TrendingUp, Sparkles } from 'lucide-react'

export default function AwardsPage() {
  const awards = [
    {
      year: '2024',
      title: 'Best Local SEO Agency',
      organization: 'Long Beach Business Journal',
      icon: Trophy,
      description: 'Recognized as Long Beach's top SEO agency for local businesses'
    },
    {
      year: '2024',
      title: 'Top Digital Marketing Firm',
      organization: 'Southern California Business Awards',
      icon: Award,
      description: 'Excellence in digital marketing services across SoCal'
    },
    {
      year: '2023',
      title: 'Small Business Champion',
      organization: 'Long Beach Chamber of Commerce',
      icon: Medal,
      description: 'Outstanding support for local small business growth'
    },
    {
      year: '2023',
      title: 'Best ROI for Clients',
      organization: 'California Marketing Association',
      icon: Target,
      description: 'Highest return on investment for SEO services'
    },
    {
      year: '2023',
      title: '5-Star Agency Rating',
      organization: 'Google Business Profile',
      icon: Star,
      description: 'Perfect 5.0 rating from over 100 client reviews'
    },
    {
      year: '2022',
      title: 'Community Impact Award',
      organization: 'City of Long Beach',
      icon: Crown,
      description: 'Helping local businesses thrive in digital economy'
    }
  ]
  
  const recognition = [
    { metric: '5.0/5', label: 'Google Rating', platform: 'Client Reviews' },
    { metric: '#1', label: 'Long Beach SEO', platform: 'Local Rankings' },
    { metric: '500+', label: 'Happy Clients', platform: 'Southern California' },
    { metric: '387%', label: 'Avg Traffic Increase', platform: 'Client Results' }
  ]
  
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-b from-primary-50 via-white to-gray-50 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-96 h-96 bg-yellow-300/30 rounded-full mix-blend-multiply filter blur-3xl animate-blob" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary-300/30 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-100 to-primary-100 text-primary-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Trophy className="h-4 w-4" />
              <span>Industry Recognition</span>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              Award-Winning{' '}
              <span className="bg-gradient-to-r from-yellow-500 to-primary-500 bg-clip-text text-transparent">
                SEO Agency
              </span>
            </h1>
            
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Recognized by Long Beach business community and industry leaders for exceptional 
              SEO results and commitment to local business success.
            </p>
          </motion.div>
        </div>
      </section>
      
      {/* Awards Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Achievements
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Excellence recognized by the industry's most prestigious organizations
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {awards.map((award, index) => {
              const Icon = award.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all border border-gray-100"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-16 h-16 bg-gradient-to-r from-yellow-100 to-primary-100 rounded-xl flex items-center justify-center">
                      <Icon className="h-8 w-8 text-yellow-600" />
                    </div>
                    <span className="text-sm font-semibold text-gray-500">{award.year}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{award.title}</h3>
                  <p className="text-primary-600 font-semibold mb-3">{award.organization}</p>
                  <p className="text-gray-600 text-sm">{award.description}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>
      
      {/* Recognition Stats */}
      <section className="py-20 bg-gradient-to-r from-primary-500 to-electric-500 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            {recognition.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl font-bold mb-2">{stat.metric}</div>
                <div className="text-lg mb-1">{stat.label}</div>
                <div className="text-sm text-white/70">{stat.platform}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              What Judges Say
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Industry experts recognize our innovation and impact
            </p>
          </motion.div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {[
              {
                quote: "GoalSEO represents the future of SEO - fully automated, AI-driven, and incredibly effective.",
                author: "Sarah Johnson",
                role: "SaaS Awards Judge"
              },
              {
                quote: "The ROI metrics are unprecedented. No other platform comes close to these results.",
                author: "Michael Chen",
                role: "MarTech Breakthrough Panel"
              },
              {
                quote: "Their AI technology is years ahead of competitors. A true game-changer for businesses.",
                author: "Emily Rodriguez",
                role: "AI Breakthrough Committee"
              }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-lg"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">"{testimonial.quote}"</p>
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.author}</div>
                  <div className="text-sm text-gray-600">{testimonial.role}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Media Coverage */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Featured In
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Leading publications recognize our innovation
            </p>
          </motion.div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center">
            {['TechCrunch', 'Forbes', 'Wired', 'VentureBeat', 'The Verge', 'Inc.'].map((publication, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="text-center"
              >
                <div className="text-2xl font-bold text-gray-400">{publication}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-primary-500 to-electric-500 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Crown className="h-16 w-16 mx-auto mb-6 text-yellow-300" />
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Join 50,000+ Winning Businesses
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Experience the award-winning platform that delivers real results
          </p>
          <Link
            href="/free-audit"
            className="inline-flex items-center justify-center gap-2 bg-white text-primary-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-all shadow-xl"
          >
            Start Your Success Story
            <Trophy className="h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}