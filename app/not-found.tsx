"use client"

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Home, Search, ArrowLeft, Bot, AlertCircle, Sparkles } from 'lucide-react'
import { useState, useEffect } from 'react'

const suggestions = [
  { title: 'AI SEO Automation', href: '/services/ai-seo-automation' },
  { title: 'Free SEO Audit', href: '/free-audit' },
  { title: 'Pricing Plans', href: '/pricing' },
  { title: 'Contact Us', href: '/contact' },
  { title: 'SEO Services', href: '/services' },
  { title: 'ROI Calculator', href: '/tools/roi-calculator' },
]

export default function NotFound() {
  const [searchQuery, setSearchQuery] = useState('')
  const [aiMessage, setAiMessage] = useState('')
  
  useEffect(() => {
    const messages = [
      "Our AI is searching for that page...",
      "Hmm, even our AI couldn't find that one...",
      "404: Page not found, but opportunities found!",
      "Lost? Let our AI guide you back...",
    ]
    setAiMessage(messages[Math.floor(Math.random() * messages.length)])
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 via-white to-primary-50/20 flex items-center justify-center px-4">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob" />
        <div className="absolute top-40 right-10 w-72 h-72 bg-electric-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000" />
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-accent-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000" />
      </div>

      <div className="relative max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* 404 Display */}
          <div className="mb-8">
            <motion.div
              initial={{ scale: 0.5 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
              className="inline-block"
            >
              <div className="text-9xl font-bold bg-gradient-to-r from-primary-500 via-electric-500 to-accent-500 bg-clip-text text-transparent">
                404
              </div>
            </motion.div>
          </div>

          {/* AI Message */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mb-6"
          >
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary-100 to-electric-100 text-primary-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
              <Bot className="h-4 w-4 animate-pulse" />
              <span>{aiMessage}</span>
            </div>
          </motion.div>

          {/* Main Message */}
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Page Not Found
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            The page you're looking for seems to have vanished from our rankings. 
            But don't worry, our AI has found some better alternatives for you!
          </p>

          {/* Search Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mb-8"
          >
            <div className="max-w-xl mx-auto">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search for what you need..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-6 py-4 pr-12 text-gray-900 bg-white border-2 border-gray-200 rounded-xl focus:border-primary-500 focus:outline-none transition-colors"
                />
                <button className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-gradient-to-r from-primary-500 to-electric-500 text-white rounded-lg hover:from-primary-600 hover:to-electric-600 transition-all">
                  <Search className="h-5 w-5" />
                </button>
              </div>
            </div>
          </motion.div>

          {/* Suggested Pages */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mb-8"
          >
            <h2 className="text-lg font-semibold text-gray-700 mb-4">Popular Pages</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-3xl mx-auto">
              {suggestions.map((suggestion, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    href={suggestion.href}
                    className="block p-4 bg-white rounded-xl border-2 border-gray-200 hover:border-primary-300 hover:bg-primary-50 transition-all group"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-gray-700 group-hover:text-primary-600 font-medium">
                        {suggestion.title}
                      </span>
                      <Sparkles className="h-4 w-4 text-primary-400 group-hover:text-primary-600" />
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              href="/"
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-primary-500 to-primary-600 text-white px-8 py-3 rounded-xl font-semibold hover:from-primary-600 hover:to-primary-700 transition-all shadow-lg"
            >
              <Home className="h-5 w-5" />
              Go to Homepage
            </Link>
            <button
              onClick={() => window.history.back()}
              className="inline-flex items-center justify-center gap-2 bg-white text-primary-600 border-2 border-primary-200 px-8 py-3 rounded-xl font-semibold hover:bg-primary-50 transition-all"
            >
              <ArrowLeft className="h-5 w-5" />
              Go Back
            </button>
          </motion.div>

          {/* Fun Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="mt-12 p-6 bg-gradient-to-r from-gray-50 to-primary-50 rounded-xl"
          >
            <div className="flex items-center justify-center gap-2 mb-3">
              <AlertCircle className="h-5 w-5 text-primary-500" />
              <span className="text-sm font-semibold text-gray-700">Did You Know?</span>
            </div>
            <p className="text-sm text-gray-600">
              While you're here, our AI has already optimized 
              <span className="font-bold text-primary-600"> 2,847 pages</span> for other clients today, 
              improving their rankings by an average of 
              <span className="font-bold text-success-600"> 387%</span>!
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}