"use client"

import { motion } from 'framer-motion'
import Link from 'next/link'
import { 
  Handshake, Globe, Award, Users, 
  ArrowRight, CheckCircle, Sparkles, TrendingUp,
  DollarSign, Shield, Zap, Heart
} from 'lucide-react'

export default function PartnersPage() {
  const partnerTypes = [
    {
      title: 'Agency Partners',
      description: 'Offer GoalSEO AI to your clients and earn recurring commissions',
      benefits: [
        '30% recurring commission',
        'White-label options available',
        'Dedicated partner support',
        'Co-marketing opportunities'
      ],
      icon: Users
    },
    {
      title: 'Technology Partners',
      description: 'Integrate GoalSEO into your platform or marketplace',
      benefits: [
        'API access and documentation',
        'Technical integration support',
        'Revenue sharing model',
        'Joint product development'
      ],
      icon: Zap
    },
    {
      title: 'Referral Partners',
      description: 'Earn commissions by referring businesses to GoalSEO',
      benefits: [
        '20% lifetime commission',
        'Marketing materials provided',
        'Real-time tracking dashboard',
        'Monthly payouts'
      ],
      icon: DollarSign
    }
  ]
  
  const currentPartners = [
    { name: 'Shopify', logo: '🛍️', type: 'Technology' },
    { name: 'Google Cloud', logo: '☁️', type: 'Technology' },
    { name: 'HubSpot', logo: '🚀', type: 'Technology' },
    { name: 'WP Engine', logo: '⚡', type: 'Hosting' },
    { name: 'Cloudflare', logo: '🌐', type: 'Infrastructure' },
    { name: 'Stripe', logo: '💳', type: 'Payments' }
  ]
  
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-b from-primary-50 via-white to-gray-50 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-96 h-96 bg-primary-300/30 rounded-full mix-blend-multiply filter blur-3xl animate-blob" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-electric-300/30 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary-100 to-electric-100 text-primary-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Handshake className="h-4 w-4" />
              <span>Partner Program</span>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              Grow Together with{' '}
              <span className="bg-gradient-to-r from-primary-500 to-electric-500 bg-clip-text text-transparent">
                GoalSEO
              </span>
            </h1>
            
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Join our partner ecosystem and help businesses worldwide succeed with AI-powered SEO. 
              Earn recurring revenue while delivering exceptional value.
            </p>
            
            <Link
              href="/partners/apply"
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-primary-500 to-primary-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-primary-600 hover:to-primary-700 transition-all"
            >
              Become a Partner
              <ArrowRight className="h-5 w-5" />
            </Link>
          </motion.div>
        </div>
      </section>
      
      {/* Partner Types */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Partnership Opportunities
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the partnership model that works best for your business
            </p>
          </motion.div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {partnerTypes.map((type, index) => {
              const Icon = type.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all"
                >
                  <Icon className="h-12 w-12 text-primary-600 mb-4" />
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{type.title}</h3>
                  <p className="text-gray-600 mb-6">{type.description}</p>
                  <ul className="space-y-3">
                    {type.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700 text-sm">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/partners/apply"
                    className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 font-semibold mt-6"
                  >
                    Learn More
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>
      
      {/* Current Partners */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Trusted by Industry Leaders
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We partner with the best to deliver exceptional results
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-8">
            {currentPartners.map((partner, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all text-center"
              >
                <div className="text-4xl mb-3">{partner.logo}</div>
                <div className="font-semibold text-gray-900">{partner.name}</div>
                <div className="text-xs text-gray-500 mt-1">{partner.type}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Benefits */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Why Partner with GoalSEO?
              </h2>
              <div className="space-y-4">
                {[
                  'Industry-leading AI technology that delivers real results',
                  'Generous commission structure with lifetime value',
                  'Comprehensive partner portal with real-time analytics',
                  'Dedicated partner success manager',
                  'Co-marketing and lead generation support',
                  'Regular training and certification programs'
                ].map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-primary-50 to-electric-50 rounded-2xl p-8"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Partner Success Stats</h3>
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-600">Average Partner Revenue</span>
                    <span className="font-bold text-primary-600">$8,500/mo</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-gradient-to-r from-primary-500 to-electric-500 h-2 rounded-full" style={{ width: '85%' }} />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-600">Client Retention Rate</span>
                    <span className="font-bold text-primary-600">94%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-gradient-to-r from-primary-500 to-electric-500 h-2 rounded-full" style={{ width: '94%' }} />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-600">Partner Satisfaction</span>
                    <span className="font-bold text-primary-600">4.9/5.0</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-gradient-to-r from-primary-500 to-electric-500 h-2 rounded-full" style={{ width: '98%' }} />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-primary-500 to-electric-500 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Ready to Grow Together?
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Join our partner program and start earning today
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/partners/apply"
              className="inline-flex items-center justify-center gap-2 bg-white text-primary-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-all shadow-xl"
            >
              Apply Now
              <ArrowRight className="h-5 w-5" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur text-white border-2 border-white/30 px-8 py-4 rounded-xl font-semibold hover:bg-white/20 transition-all"
            >
              Talk to Partnership Team
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}