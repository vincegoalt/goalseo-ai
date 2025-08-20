"use client"

import { motion } from 'framer-motion'
import Link from 'next/link'
import { 
  Headphones, MessageCircle, Book, Video,
  Mail, Phone, Clock, Search,
  ArrowRight, CheckCircle, HelpCircle, Zap
} from 'lucide-react'

export default function SupportPage() {
  const faqs = [
    {
      question: 'How quickly can I see results?',
      answer: 'Most clients see initial improvements within 7-14 days. Significant traffic increases typically occur within 30-60 days.'
    },
    {
      question: 'Do I need technical knowledge?',
      answer: 'No! GoalSEO AI handles all technical aspects automatically. Our interface is designed for business owners, not developers.'
    },
    {
      question: 'Can I cancel anytime?',
      answer: 'Yes, all plans are month-to-month with no contracts. Cancel anytime from your dashboard.'
    },
    {
      question: 'Does it work with my website platform?',
      answer: 'GoalSEO works with all major platforms including WordPress, Shopify, Wix, Squarespace, and custom websites.'
    },
    {
      question: 'What makes GoalSEO different?',
      answer: 'Unlike tools that just show data, GoalSEO AI actually does the work - creating content, building links, and optimizing 24/7.'
    },
    {
      question: 'Is there a free trial?',
      answer: 'Yes! Start with our free SEO audit to see exactly how we can help your business grow.'
    }
  ]
  
  const supportChannels = [
    {
      icon: MessageCircle,
      title: 'Live Chat',
      description: 'Chat with our team instantly',
      availability: '24/7 Support',
      action: 'Start Chat',
      primary: true
    },
    {
      icon: Mail,
      title: 'Email Support',
      description: 'Get help via email',
      availability: '< 2 hour response',
      action: 'Send Email',
      href: 'mailto:support@goalseo.ai'
    },
    {
      icon: Phone,
      title: 'Phone Support',
      description: 'Talk to a specialist',
      availability: 'Mon-Fri 9am-6pm EST',
      action: 'Call Now',
      href: 'tel:1-800-GOALSEO'
    },
    {
      icon: Book,
      title: 'Documentation',
      description: 'Browse help articles',
      availability: 'Always available',
      action: 'View Docs',
      href: '/docs'
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
              <Headphones className="h-4 w-4" />
              <span>Support Center</span>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              How Can We{' '}
              <span className="bg-gradient-to-r from-primary-500 to-electric-500 bg-clip-text text-transparent">
                Help You?
              </span>
            </h1>
            
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Get instant answers, browse documentation, or chat with our expert support team. 
              We're here to ensure your success.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search for help articles..."
                  className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-xl text-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* Support Channels */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Get Help Your Way
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose how you want to connect with our support team
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {supportChannels.map((channel, index) => {
              const Icon = channel.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`rounded-xl p-6 ${
                    channel.primary 
                      ? 'bg-gradient-to-br from-primary-500 to-electric-500 text-white' 
                      : 'bg-white border border-gray-200 hover:shadow-lg'
                  } transition-all`}
                >
                  <Icon className={`h-10 w-10 mb-4 ${channel.primary ? 'text-white' : 'text-primary-600'}`} />
                  <h3 className={`text-lg font-bold mb-2 ${channel.primary ? 'text-white' : 'text-gray-900'}`}>
                    {channel.title}
                  </h3>
                  <p className={`text-sm mb-3 ${channel.primary ? 'text-white/90' : 'text-gray-600'}`}>
                    {channel.description}
                  </p>
                  <div className={`text-xs mb-4 ${channel.primary ? 'text-white/80' : 'text-gray-500'}`}>
                    {channel.availability}
                  </div>
                  {channel.href ? (
                    <a
                      href={channel.href}
                      className={`inline-flex items-center gap-2 font-semibold ${
                        channel.primary 
                          ? 'text-white hover:text-white/90' 
                          : 'text-primary-600 hover:text-primary-700'
                      }`}
                    >
                      {channel.action}
                      <ArrowRight className="h-4 w-4" />
                    </a>
                  ) : (
                    <button className={`inline-flex items-center gap-2 font-semibold ${
                      channel.primary 
                        ? 'text-white hover:text-white/90' 
                        : 'text-primary-600 hover:text-primary-700'
                    }`}>
                      {channel.action}
                      <ArrowRight className="h-4 w-4" />
                    </button>
                  )}
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>
      
      {/* FAQs */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Quick answers to common questions
            </p>
          </motion.div>
          
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-white rounded-xl shadow-lg p-6"
              >
                <div className="flex gap-4">
                  <HelpCircle className="h-6 w-6 text-primary-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{faq.question}</h3>
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <Link
              href="/docs/faq"
              className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 font-semibold"
            >
              View All FAQs
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
      
      {/* Resources */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Helpful Resources
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to succeed with GoalSEO
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Book,
                title: 'Getting Started Guide',
                desc: 'Learn the basics and get up and running quickly',
                link: '/docs/getting-started'
              },
              {
                icon: Video,
                title: 'Video Tutorials',
                desc: 'Watch step-by-step guides and best practices',
                link: '/tutorials'
              },
              {
                icon: Zap,
                title: 'API Documentation',
                desc: 'Integrate GoalSEO with your applications',
                link: '/api'
              }
            ].map((resource, index) => {
              const Icon = resource.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-gradient-to-br from-primary-50 to-electric-50 rounded-xl p-6"
                >
                  <Icon className="h-10 w-10 text-primary-600 mb-4" />
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{resource.title}</h3>
                  <p className="text-gray-600 mb-4">{resource.desc}</p>
                  <Link
                    href={resource.link}
                    className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 font-semibold"
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
      
      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-primary-500 to-electric-500 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Still Need Help?
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Our support team is standing by to assist you
          </p>
          <button className="inline-flex items-center justify-center gap-2 bg-white text-primary-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-all shadow-xl">
            <MessageCircle className="h-5 w-5" />
            Start Live Chat
          </button>
        </div>
      </section>
    </div>
  )
}