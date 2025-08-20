"use client"

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { 
  Search, Globe, Activity, CheckCircle, AlertCircle,
  TrendingUp, Zap, Code, Link2, FileText, Users,
  BarChart3, Target, Gauge, Brain, Sparkles,
  ArrowRight, Shield, Clock
} from 'lucide-react'

export default function LiveSEOAnalyzer() {
  const [url, setUrl] = useState('')
  const [isAnalyzing, setIsAnalyzing] = useState(false)
  const [progress, setProgress] = useState(0)
  const [currentCheck, setCurrentCheck] = useState('')
  
  const checks = [
    'Crawling website structure...',
    'Analyzing meta tags...',
    'Checking Core Web Vitals...',
    'Evaluating content quality...',
    'Scanning for technical issues...',
    'Analyzing competitor landscape...',
    'Identifying keyword opportunities...',
    'Calculating SEO score...'
  ]
  
  const [results, setResults] = useState({
    score: 0,
    issues: 0,
    opportunities: 0,
    competitors: 0
  })
  
  const handleAnalyze = () => {
    if (!url) return
    
    setIsAnalyzing(true)
    setProgress(0)
    setResults({ score: 0, issues: 0, opportunities: 0, competitors: 0 })
    
    // Simulate analysis
    let checkIndex = 0
    const interval = setInterval(() => {
      setProgress(prev => Math.min(prev + 12.5, 100))
      setCurrentCheck(checks[checkIndex])
      checkIndex++
      
      if (checkIndex >= checks.length) {
        clearInterval(interval)
        setIsAnalyzing(false)
        setResults({
          score: 67,
          issues: 23,
          opportunities: 156,
          competitors: 12
        })
      }
    }, 800)
  }
  
  const sampleSites = [
    { name: 'E-commerce Store', url: 'yourstore.com', industry: 'Retail' },
    { name: 'SaaS Platform', url: 'yoursaas.com', industry: 'Technology' },
    { name: 'Local Business', url: 'localbiz.com', industry: 'Services' }
  ]
  
  const analysisMetrics = [
    { icon: Target, label: 'SEO Score', value: results.score, max: 100, color: 'from-green-500 to-emerald-500' },
    { icon: AlertCircle, label: 'Issues Found', value: results.issues, max: 50, color: 'from-red-500 to-orange-500' },
    { icon: Sparkles, label: 'Opportunities', value: results.opportunities, max: 200, color: 'from-blue-500 to-purple-500' },
    { icon: Users, label: 'Competitors', value: results.competitors, max: 20, color: 'from-indigo-500 to-pink-500' }
  ]
  
  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary-100 to-electric-100 text-primary-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Activity className="h-4 w-4" />
            <span>Live Demo</span>
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            See Your SEO Score in{' '}
            <span className="bg-gradient-to-r from-primary-500 to-electric-500 bg-clip-text text-transparent">
              Real-Time
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Watch our AI analyze any website and discover hidden opportunities in seconds
          </p>
        </motion.div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Input Section */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <Search className="h-5 w-5 text-primary-500" />
                Enter Your Website
              </h3>
              
              <div className="space-y-4">
                <div className="relative">
                  <Globe className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="example.com"
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:border-primary-500 focus:outline-none"
                    disabled={isAnalyzing}
                  />
                </div>
                
                <button
                  onClick={handleAnalyze}
                  disabled={!url || isAnalyzing}
                  className="w-full bg-gradient-to-r from-primary-500 to-primary-600 text-white py-3 rounded-lg font-semibold hover:from-primary-600 hover:to-primary-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isAnalyzing ? (
                    <>
                      <Activity className="h-5 w-5 animate-spin" />
                      Analyzing...
                    </>
                  ) : (
                    <>
                      <Zap className="h-5 w-5" />
                      Start Free Analysis
                    </>
                  )}
                </button>
              </div>
              
              {/* Sample Sites */}
              <div className="mt-6 pt-6 border-t border-gray-200">
                <p className="text-sm text-gray-600 mb-3">Try a sample:</p>
                <div className="space-y-2">
                  {sampleSites.map((site, index) => (
                    <button
                      key={index}
                      onClick={() => setUrl(site.url)}
                      className="w-full text-left p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-all flex items-center justify-between group"
                    >
                      <div>
                        <div className="font-medium text-gray-900">{site.name}</div>
                        <div className="text-sm text-gray-600">{site.url}</div>
                      </div>
                      <span className="text-xs bg-primary-100 text-primary-700 px-2 py-1 rounded">
                        {site.industry}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
              
              {/* Features */}
              <div className="mt-6 pt-6 border-t border-gray-200">
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { icon: Shield, text: '100% Safe' },
                    { icon: Clock, text: '30 Seconds' },
                    { icon: Brain, text: 'AI-Powered' },
                    { icon: CheckCircle, text: 'No Signup' }
                  ].map((feature, index) => {
                    const Icon = feature.icon
                    return (
                      <div key={index} className="flex items-center gap-2 text-sm text-gray-600">
                        <Icon className="h-4 w-4 text-green-500" />
                        <span>{feature.text}</span>
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* Results Section */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <BarChart3 className="h-5 w-5 text-primary-500" />
                Analysis Results
                {isAnalyzing && (
                  <div className="ml-auto flex items-center gap-2 text-sm text-gray-500">
                    <Activity className="h-4 w-4 animate-spin" />
                    Analyzing...
                  </div>
                )}
              </h3>
              
              {!isAnalyzing && results.score === 0 ? (
                <div className="text-center py-12">
                  <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Search className="h-10 w-10 text-gray-400" />
                  </div>
                  <p className="text-gray-600">Enter a website URL to see analysis</p>
                  <p className="text-sm text-gray-500 mt-2">Results will appear here in real-time</p>
                </div>
              ) : (
                <div className="space-y-6">
                  {/* Progress Bar */}
                  {isAnalyzing && (
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm text-gray-600">{currentCheck}</span>
                        <span className="text-sm font-semibold text-gray-900">{progress}%</span>
                      </div>
                      <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                        <motion.div
                          className="h-full bg-gradient-to-r from-primary-500 to-electric-500"
                          animate={{ width: `${progress}%` }}
                          transition={{ duration: 0.5 }}
                        />
                      </div>
                    </div>
                  )}
                  
                  {/* Metrics Grid */}
                  {!isAnalyzing && results.score > 0 && (
                    <>
                      <div className="grid grid-cols-2 gap-4">
                        {analysisMetrics.map((metric, index) => {
                          const Icon = metric.icon
                          const percentage = (metric.value / metric.max) * 100
                          
                          return (
                            <motion.div
                              key={index}
                              initial={{ opacity: 0, scale: 0.9 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ delay: index * 0.1 }}
                              className="bg-gray-50 rounded-xl p-4"
                            >
                              <div className="flex items-center justify-between mb-2">
                                <Icon className="h-5 w-5 text-gray-600" />
                                <span className="text-2xl font-bold text-gray-900">{metric.value}</span>
                              </div>
                              <div className="text-sm text-gray-600 mb-2">{metric.label}</div>
                              <div className="h-1 bg-gray-200 rounded-full overflow-hidden">
                                <motion.div
                                  className={`h-full bg-gradient-to-r ${metric.color}`}
                                  initial={{ width: 0 }}
                                  animate={{ width: `${percentage}%` }}
                                  transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                                />
                              </div>
                            </motion.div>
                          )
                        })}
                      </div>
                      
                      {/* Key Findings */}
                      <div className="space-y-3">
                        <h4 className="font-semibold text-gray-900">Key Findings:</h4>
                        {[
                          { type: 'error', text: 'Missing meta descriptions on 12 pages' },
                          { type: 'warning', text: 'Page speed needs improvement (3.2s load time)' },
                          { type: 'success', text: 'Good mobile responsiveness detected' },
                          { type: 'info', text: '156 untapped keyword opportunities found' }
                        ].map((finding, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 1 + index * 0.1 }}
                            className={`flex items-start gap-3 p-3 rounded-lg ${
                              finding.type === 'error' ? 'bg-red-50' :
                              finding.type === 'warning' ? 'bg-yellow-50' :
                              finding.type === 'success' ? 'bg-green-50' :
                              'bg-blue-50'
                            }`}
                          >
                            {finding.type === 'error' && <AlertCircle className="h-5 w-5 text-red-500 flex-shrink-0" />}
                            {finding.type === 'warning' && <AlertCircle className="h-5 w-5 text-yellow-500 flex-shrink-0" />}
                            {finding.type === 'success' && <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />}
                            {finding.type === 'info' && <TrendingUp className="h-5 w-5 text-blue-500 flex-shrink-0" />}
                            <span className="text-sm text-gray-700">{finding.text}</span>
                          </motion.div>
                        ))}
                      </div>
                      
                      {/* CTA */}
                      <div className="pt-6 border-t border-gray-200">
                        <p className="text-sm text-gray-600 mb-3">
                          Want our AI to fix these issues automatically?
                        </p>
                        <Link
                          href="/free-audit"
                          className="w-full bg-gradient-to-r from-primary-500 to-primary-600 text-white py-3 rounded-lg font-semibold hover:from-primary-600 hover:to-primary-700 transition-all flex items-center justify-center gap-2"
                        >
                          Get Full Audit & Fix Plan
                          <ArrowRight className="h-5 w-5" />
                        </Link>
                      </div>
                    </>
                  )}
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}