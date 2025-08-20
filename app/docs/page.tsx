"use client"

import { motion } from 'framer-motion'
import Link from 'next/link'
import { 
  BookOpen, FileText, Video, Download, Search,
  ArrowRight, Code, Zap, HelpCircle, ExternalLink,
  Play, FileVideo, Github, ChevronRight
} from 'lucide-react'

export default function DocsPage() {
  const docCategories = [
    {
      icon: Zap,
      title: "Getting Started",
      description: "Quick start guides to begin your SEO journey",
      docs: [
        { title: "Setup Guide", description: "Initial setup and configuration", type: "guide" },
        { title: "First Campaign", description: "Create your first SEO campaign", type: "tutorial" },
        { title: "Dashboard Overview", description: "Navigate the GoalSEO dashboard", type: "guide" }
      ]
    },
    {
      icon: Code,
      title: "API Documentation",
      description: "Integrate GoalSEO with your applications",
      docs: [
        { title: "API Reference", description: "Complete API endpoint documentation", type: "reference" },
        { title: "Authentication", description: "API keys and authentication methods", type: "guide" },
        { title: "Rate Limits", description: "Understanding API usage limits", type: "reference" }
      ]
    },
    {
      icon: Search,
      title: "SEO Strategies",
      description: "Learn proven SEO techniques and best practices",
      docs: [
        { title: "Keyword Research", description: "Find and target the right keywords", type: "guide" },
        { title: "On-Page Optimization", description: "Optimize your pages for search engines", type: "tutorial" },
        { title: "Link Building", description: "Build high-quality backlinks", type: "strategy" }
      ]
    },
    {
      icon: FileVideo,
      title: "Video Tutorials",
      description: "Visual guides and walkthroughs",
      docs: [
        { title: "Platform Overview", description: "Complete tour of GoalSEO platform", type: "video" },
        { title: "Campaign Setup", description: "Step-by-step campaign creation", type: "video" },
        { title: "Reporting & Analytics", description: "Understanding your SEO metrics", type: "video" }
      ]
    }
  ]

  const quickLinks = [
    { title: "API Quick Start", href: "/docs/api/quickstart", icon: Code },
    { title: "SEO Checklist", href: "/docs/seo-checklist", icon: FileText },
    { title: "Best Practices", href: "/docs/best-practices", icon: BookOpen },
    { title: "Troubleshooting", href: "/docs/troubleshooting", icon: HelpCircle }
  ]

  const popularDocs = [
    {
      title: "Complete SEO Guide for Beginners",
      description: "Everything you need to know to start ranking higher",
      readTime: "15 min read",
      category: "Guide"
    },
    {
      title: "Technical SEO Checklist",
      description: "Ensure your website is technically optimized",
      readTime: "8 min read",
      category: "Checklist"
    },
    {
      title: "Local SEO Optimization",
      description: "Dominate local search results in your area",
      readTime: "12 min read",
      category: "Strategy"
    }
  ]

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-b from-primary-50 via-white to-gray-50 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-96 h-96 bg-primary-300/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-electric-300/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary-100 to-electric-100 text-primary-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <BookOpen className="h-4 w-4" />
              <span>Documentation</span>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              SEO Knowledge{' '}
              <span className="bg-gradient-to-r from-primary-500 to-electric-500 bg-clip-text text-transparent">
                Center
              </span>
            </h1>
            
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Everything you need to master SEO with GoalSEO. From beginner guides 
              to advanced strategies and API documentation.
            </p>
            
            <div className="max-w-2xl mx-auto relative mb-8">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  type="text"
                  placeholder="Search documentation..."
                  className="w-full pl-12 pr-4 py-4 border border-gray-200 rounded-xl text-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-12 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {quickLinks.map((link, index) => {
              const Icon = link.icon
              return (
                <Link
                  key={index}
                  href={link.href}
                  className="flex items-center gap-3 p-4 bg-gray-50 hover:bg-primary-50 rounded-xl transition-colors group"
                >
                  <Icon className="h-6 w-6 text-primary-600" />
                  <span className="font-semibold text-gray-900 group-hover:text-primary-600">
                    {link.title}
                  </span>
                  <ArrowRight className="h-4 w-4 text-gray-400 group-hover:text-primary-600 ml-auto" />
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* Documentation Categories */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Browse Documentation
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Find guides, tutorials, and references organized by category
            </p>
          </motion.div>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {docCategories.map((category, index) => {
              const Icon = category.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-gradient-to-br from-primary-50 to-electric-50 rounded-xl p-8"
                >
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-12 h-12 bg-primary-600 rounded-lg flex items-center justify-center text-white flex-shrink-0">
                      <Icon className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">
                        {category.title}
                      </h3>
                      <p className="text-gray-600">
                        {category.description}
                      </p>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    {category.docs.map((doc, docIndex) => (
                      <Link
                        key={docIndex}
                        href={`/docs/${doc.title.toLowerCase().replace(/\s+/g, '-')}`}
                        className="flex items-center justify-between p-3 bg-white rounded-lg hover:shadow-md transition-all group"
                      >
                        <div>
                          <h4 className="font-semibold text-gray-900 group-hover:text-primary-600">
                            {doc.title}
                          </h4>
                          <p className="text-sm text-gray-600">
                            {doc.description}
                          </p>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                            {doc.type}
                          </span>
                          <ChevronRight className="h-4 w-4 text-gray-400 group-hover:text-primary-600" />
                        </div>
                      </Link>
                    ))}
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Popular Docs */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Popular Documentation
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Most viewed guides and tutorials from our community
            </p>
          </motion.div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {popularDocs.map((doc, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all"
              >
                <div className="flex items-start justify-between mb-4">
                  <span className="text-xs bg-primary-100 text-primary-700 px-2 py-1 rounded">
                    {doc.category}
                  </span>
                  <span className="text-xs text-gray-500">
                    {doc.readTime}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {doc.title}
                </h3>
                
                <p className="text-gray-600 mb-4">
                  {doc.description}
                </p>
                
                <Link
                  href={`/docs/${doc.title.toLowerCase().replace(/\s+/g, '-')}`}
                  className="inline-flex items-center gap-2 text-primary-600 font-semibold hover:text-primary-700 transition-colors"
                >
                  Read More
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-500 to-electric-500 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Need More Help?
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Can't find what you're looking for? Our support team is here to help you succeed.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/support"
              className="inline-flex items-center justify-center gap-2 bg-white text-primary-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-all shadow-xl"
            >
              Contact Support
              <HelpCircle className="h-5 w-5" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-transparent border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-primary-600 transition-all"
            >
              Schedule Demo
              <Video className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}