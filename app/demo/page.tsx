"use client"

import { motion } from 'framer-motion'
import { useState } from 'react'
import Link from 'next/link'
import { 
  Play, Calendar, Clock, Users, Bot, Sparkles,
  CheckCircle, ArrowRight, Monitor, Zap, TrendingUp
} from 'lucide-react'

export default function DemoPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    website: '',
    phone: '',
    timeSlot: ''
  })

  const timeSlots = [
    '9:00 AM - 9:30 AM PST',
    '10:00 AM - 10:30 AM PST',
    '11:00 AM - 11:30 AM PST',
    '2:00 PM - 2:30 PM PST',
    '3:00 PM - 3:30 PM PST',
    '4:00 PM - 4:30 PM PST'
  ]

  const demoAgenda = [
    'Live AI SEO audit of your website',
    'Competitor analysis and opportunities',
    'Custom strategy for your industry',
    'ROI projections and timeline',
    'Q&A and next steps'
  ]

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-b from-primary-50 via-white to-gray-50 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob" />
          <div className="absolute top-40 right-10 w-72 h-72 bg-electric-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary-100 to-electric-100 text-primary-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
                <Monitor className="h-4 w-4" />
                <span>Live Demo</span>
              </div>
              
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                See GoalSEO AI in Action
              </h1>
              
              <p className="text-xl text-gray-600 mb-8">
                Watch our AI analyze your website, identify opportunities, and show you exactly 
                how we'll achieve <span className="font-semibold text-primary-600">387% average ROI</span> for your business.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-success-500 flex-shrink-0" />
                  <span className="text-gray-700">30-minute personalized demo</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-success-500 flex-shrink-0" />
                  <span className="text-gray-700">Live AI audit of your website</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-success-500 flex-shrink-0" />
                  <span className="text-gray-700">Custom strategy for your industry</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-success-500 flex-shrink-0" />
                  <span className="text-gray-700">ROI projections and timeline</span>
                </div>
              </div>

              {/* Video Preview - Replace VIDEO_ID with your actual YouTube/Vimeo ID */}
              <div className="relative bg-gray-900 rounded-xl overflow-hidden shadow-2xl">
                <div className="aspect-video">
                  {/* Option 1: YouTube Embed */}
                  <iframe
                    className="w-full h-full"
                    src="https://www.youtube.com/embed/VIDEO_ID?rel=0&showinfo=0"
                    title="GoalSEO AI Demo"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                  
                  {/* Option 2: Vimeo Embed (comment out YouTube above and uncomment this) */}
                  {/* <iframe
                    className="w-full h-full"
                    src="https://player.vimeo.com/video/VIDEO_ID?badge=0&autopause=0&player_id=0"
                    frameBorder="0"
                    allow="autoplay; fullscreen; picture-in-picture"
                    allowFullScreen
                  /> */}
                  
                  {/* Option 3: Direct Video Upload (uncomment this and comment out iframes above) */}
                  {/* <video
                    className="w-full h-full object-cover"
                    controls
                    poster="/demo-thumbnail.jpg"
                  >
                    <source src="/demo-video.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video> */}
                </div>
              </div>
            </motion.div>

            {/* Booking Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-white rounded-2xl shadow-xl p-8 border border-gray-200"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Book Your Free Demo</h2>
              <p className="text-gray-600 mb-6">See how AI can transform your SEO in 30 minutes</p>

              <form className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      First Name *
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:border-primary-500 focus:outline-none"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Work Email *
                    </label>
                    <input
                      type="email"
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:border-primary-500 focus:outline-none"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Company *
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:border-primary-500 focus:outline-none"
                    value={formData.company}
                    onChange={(e) => setFormData({...formData, company: e.target.value})}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Website URL *
                  </label>
                  <input
                    type="url"
                    required
                    placeholder="https://example.com"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:border-primary-500 focus:outline-none"
                    value={formData.website}
                    onChange={(e) => setFormData({...formData, website: e.target.value})}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:border-primary-500 focus:outline-none"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Preferred Time Slot *
                  </label>
                  <select
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:border-primary-500 focus:outline-none"
                    value={formData.timeSlot}
                    onChange={(e) => setFormData({...formData, timeSlot: e.target.value})}
                  >
                    <option value="">Select a time...</option>
                    {timeSlots.map((slot) => (
                      <option key={slot} value={slot}>{slot}</option>
                    ))}
                  </select>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-primary-500 to-primary-600 text-white py-3 rounded-lg font-semibold hover:from-primary-600 hover:to-primary-700 transition-all flex items-center justify-center gap-2"
                >
                  Book Free Demo
                  <ArrowRight className="h-5 w-5" />
                </button>

                <p className="text-xs text-gray-500 text-center">
                  No credit card required • 100% free • No obligations
                </p>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">What to Expect</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Your personalized demo will show you exactly how GoalSEO AI will transform your SEO
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Bot,
                title: 'Live AI Analysis',
                description: "Watch our AI analyze your website in real-time and identify immediate opportunities"
              },
              {
                icon: TrendingUp,
                title: 'Competitor Insights',
                description: "See exactly where your competitors are winning and how to outrank them"
              },
              {
                icon: Sparkles,
                title: 'Custom Strategy',
                description: "Get a personalized SEO roadmap designed specifically for your industry and goals"
              },
              {
                icon: Calendar,
                title: 'Implementation Timeline',
                description: "Understand exactly when you'll see results and what milestones to expect"
              },
              {
                icon: Users,
                title: 'Team Integration',
                description: "Learn how GoalSEO fits into your existing workflow and team structure"
              },
              {
                icon: Zap,
                title: 'ROI Projections',
                description: "See detailed projections of traffic growth and revenue impact"
              }
            ].map((item, index) => {
              const Icon = item.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-gray-50 rounded-xl p-6"
                >
                  <Icon className="h-10 w-10 text-primary-500 mb-4" />
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Demo Agenda */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-xl p-8 border border-gray-200"
          >
            <div className="flex items-center gap-3 mb-6">
              <Clock className="h-6 w-6 text-primary-500" />
              <h3 className="text-2xl font-bold text-gray-900">30-Minute Demo Agenda</h3>
            </div>

            <div className="space-y-4">
              {demoAgenda.map((item, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center text-primary-600 font-semibold text-sm">
                    {index + 1}
                  </div>
                  <div className="flex-1">
                    <p className="text-gray-700">{item}</p>
                    <div className="text-xs text-gray-500 mt-1">~{6 - index} minutes</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 p-4 bg-success-50 rounded-lg border border-success-200">
              <p className="text-success-700 text-sm">
                <strong>After the demo:</strong> Receive a custom SEO audit report worth $2,500 - absolutely free!
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-500 to-electric-500 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Can't Wait for a Demo?
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Get instant insights with our free AI-powered SEO audit
            </p>
            <Link
              href="/free-audit"
              className="inline-flex items-center justify-center gap-2 bg-white text-primary-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-all shadow-xl"
            >
              Get Instant Free Audit
              <Sparkles className="h-5 w-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}