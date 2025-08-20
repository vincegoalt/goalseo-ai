"use client"

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { 
  Plug, ArrowRight, CheckCircle, Zap,
  ShoppingBag, FileText, MessageSquare, Mail,
  BarChart3, Database, Cloud, Globe
} from 'lucide-react'

export default function IntegrationsPage() {
  const integrations = [
    {
      category: 'E-commerce',
      items: [
        { name: 'Shopify', desc: 'Sync products & optimize listings', icon: '🛍️', status: 'active' },
        { name: 'WooCommerce', desc: 'WordPress integration', icon: '🛒', status: 'active' },
        { name: 'BigCommerce', desc: 'Enterprise e-commerce', icon: '🏪', status: 'active' },
        { name: 'Magento', desc: 'Open-source platform', icon: '🎯', status: 'coming' }
      ]
    },
    {
      category: 'Analytics',
      items: [
        { name: 'Google Analytics', desc: 'Traffic & conversion data', icon: '📊', status: 'active' },
        { name: 'Google Search Console', desc: 'Search performance', icon: '🔍', status: 'active' },
        { name: 'Adobe Analytics', desc: 'Enterprise analytics', icon: '📈', status: 'active' },
        { name: 'Mixpanel', desc: 'Product analytics', icon: '📉', status: 'coming' }
      ]
    },
    {
      category: 'Marketing',
      items: [
        { name: 'HubSpot', desc: 'CRM & marketing automation', icon: '🚀', status: 'active' },
        { name: 'Mailchimp', desc: 'Email marketing', icon: '✉️', status: 'active' },
        { name: 'Salesforce', desc: 'Enterprise CRM', icon: '☁️', status: 'active' },
        { name: 'Marketo', desc: 'B2B marketing', icon: '🎨', status: 'coming' }
      ]
    },
    {
      category: 'Content',
      items: [
        { name: 'WordPress', desc: 'CMS integration', icon: '📝', status: 'active' },
        { name: 'Contentful', desc: 'Headless CMS', icon: '📦', status: 'active' },
        { name: 'Strapi', desc: 'Open-source CMS', icon: '🔧', status: 'coming' },
        { name: 'Ghost', desc: 'Publishing platform', icon: '👻', status: 'coming' }
      ]
    }
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
              <Plug className="h-4 w-4" />
              <span>Integrations</span>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              Connect Your{' '}
              <span className="bg-gradient-to-r from-primary-500 to-electric-500 bg-clip-text text-transparent">
                Entire Stack
              </span>
            </h1>
            
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              GoalSEO integrates seamlessly with your favorite tools. 
              One-click setup, no developers required.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-primary-500 to-primary-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-primary-600 hover:to-primary-700 transition-all"
              >
                Start Integrating
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                href="/docs/integrations"
                className="inline-flex items-center justify-center gap-2 bg-white text-primary-600 border-2 border-primary-200 px-8 py-4 rounded-xl font-semibold hover:bg-primary-50 transition-all"
              >
                View Documentation
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* Integration Categories */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {integrations.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: categoryIndex * 0.1 }}
              className="mb-12"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6">{category.category}</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {category.items.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className={`bg-white border rounded-xl p-6 hover:shadow-lg transition-all ${
                      item.status === 'active' 
                        ? 'border-gray-200 hover:border-primary-300' 
                        : 'border-gray-100 opacity-75'
                    }`}
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="text-3xl">{item.icon}</div>
                      {item.status === 'active' ? (
                        <span className="bg-green-100 text-green-700 text-xs font-semibold px-2 py-1 rounded">
                          Active
                        </span>
                      ) : (
                        <span className="bg-gray-100 text-gray-600 text-xs font-semibold px-2 py-1 rounded">
                          Coming Soon
                        </span>
                      )}
                    </div>
                    <h3 className="font-bold text-gray-900 mb-2">{item.name}</h3>
                    <p className="text-sm text-gray-600">{item.desc}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>
      
      {/* How It Works */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              One-Click Setup
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Connect your tools in seconds, not hours
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { step: '1', title: 'Choose Integration', desc: 'Select from our library of pre-built integrations' },
              { step: '2', title: 'Authenticate', desc: 'Securely connect with OAuth 2.0' },
              { step: '3', title: 'Start Optimizing', desc: 'AI automatically syncs and optimizes' }
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative"
              >
                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-electric-500 rounded-full flex items-center justify-center text-white font-bold text-xl mb-4">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.desc}</p>
                </div>
                {index < 2 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <ArrowRight className="h-8 w-8 text-gray-300" />
                  </div>
                )}
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
                Why Integrate with GoalSEO?
              </h2>
              <div className="space-y-4">
                {[
                  'Automatic data sync across all platforms',
                  'Real-time optimization based on performance',
                  'Unified dashboard for all your SEO data',
                  'No coding required - just click and connect',
                  'Enterprise-grade security and compliance'
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
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary-600 mb-2">50+</div>
                  <div className="text-sm text-gray-600">Integrations</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary-600 mb-2">10M+</div>
                  <div className="text-sm text-gray-600">API Calls/Day</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary-600 mb-2">99.9%</div>
                  <div className="text-sm text-gray-600">Uptime SLA</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary-600 mb-2">5min</div>
                  <div className="text-sm text-gray-600">Setup Time</div>
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
            Don't See Your Tool?
          </h2>
          <p className="text-xl mb-8 text-white/90">
            We're always adding new integrations. Let us know what you need!
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 bg-white text-primary-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-all shadow-xl"
          >
            Request Integration
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}