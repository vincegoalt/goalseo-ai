"use client"

import { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { 
  Search, TrendingUp, BarChart3, Target, 
  ArrowRight, Sparkles, Filter, Download,
  Globe, DollarSign, Activity, Brain
} from 'lucide-react'

export default function KeywordResearchPage() {
  const [keyword, setKeyword] = useState('')
  const [results, setResults] = useState<any[]>([])
  const [loading, setLoading] = useState(false)
  
  const handleResearch = () => {
    setLoading(true)
    // Simulate API call
    setTimeout(() => {
      setResults([
        { keyword: keyword + ' reviews', volume: 12100, difficulty: 45, cpc: '$2.34' },
        { keyword: 'best ' + keyword, volume: 8900, difficulty: 62, cpc: '$3.12' },
        { keyword: keyword + ' alternatives', volume: 6700, difficulty: 38, cpc: '$1.89' },
        { keyword: 'cheap ' + keyword, volume: 5400, difficulty: 41, cpc: '$1.45' },
        { keyword: keyword + ' comparison', volume: 3200, difficulty: 55, cpc: '$2.78' },
      ])
      setLoading(false)
    }, 1500)
  }
  
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
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary-100 to-electric-100 text-primary-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Search className="h-4 w-4" />
              <span>Free Tool</span>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              AI-Powered{' '}
              <span className="bg-gradient-to-r from-primary-500 to-electric-500 bg-clip-text text-transparent">
                Keyword Research
              </span>
            </h1>
            
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover high-value keywords with AI analysis. Get search volume, 
              competition scores, and content opportunities instantly.
            </p>
          </motion.div>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto">
            <div className="flex gap-4">
              <input
                type="text"
                placeholder="Enter a seed keyword..."
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleResearch()}
                className="flex-1 px-6 py-4 border border-gray-300 rounded-xl text-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
              />
              <button
                onClick={handleResearch}
                disabled={!keyword || loading}
                className="px-8 py-4 bg-gradient-to-r from-primary-500 to-primary-600 text-white rounded-xl font-semibold hover:from-primary-600 hover:to-primary-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? 'Researching...' : 'Research'}
              </button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Results Section */}
      {results.length > 0 && (
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl font-bold text-gray-900">Keyword Opportunities</h2>
              <button className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 font-semibold">
                <Download className="h-5 w-5" />
                Export CSV
              </button>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <table className="w-full">
                <thead className="bg-gray-50 border-b border-gray-200">
                  <tr>
                    <th className="text-left px-6 py-4 text-sm font-semibold text-gray-700">Keyword</th>
                    <th className="text-left px-6 py-4 text-sm font-semibold text-gray-700">Monthly Volume</th>
                    <th className="text-left px-6 py-4 text-sm font-semibold text-gray-700">Difficulty</th>
                    <th className="text-left px-6 py-4 text-sm font-semibold text-gray-700">CPC</th>
                  </tr>
                </thead>
                <tbody>
                  {results.map((result, index) => (
                    <motion.tr
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="border-b border-gray-100 hover:bg-gray-50"
                    >
                      <td className="px-6 py-4 font-medium text-gray-900">{result.keyword}</td>
                      <td className="px-6 py-4 text-gray-600">{result.volume.toLocaleString()}</td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-2">
                          <div className="w-24 bg-gray-200 rounded-full h-2">
                            <div
                              className={`h-2 rounded-full ${
                                result.difficulty < 40 ? 'bg-green-500' :
                                result.difficulty < 60 ? 'bg-yellow-500' : 'bg-red-500'
                              }`}
                              style={{ width: `${result.difficulty}%` }}
                            />
                          </div>
                          <span className="text-sm text-gray-600">{result.difficulty}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-gray-600">{result.cpc}</td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
            
            <div className="mt-8 p-6 bg-gradient-to-r from-primary-50 to-electric-50 rounded-xl border border-primary-200">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    Want deeper insights and unlimited searches?
                  </h3>
                  <p className="text-gray-600">
                    Get AI-powered content recommendations and competitor analysis.
                  </p>
                </div>
                <Link
                  href="/pricing"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-primary-500 to-primary-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-primary-600 hover:to-primary-700 transition-all"
                >
                  Upgrade to Pro
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      )}
      
      {/* Features */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              More Than Just Keywords
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our AI analyzes billions of data points to give you actionable insights
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Brain, title: 'AI Intent Analysis', desc: 'Understand search intent' },
              { icon: TrendingUp, title: 'Trend Predictions', desc: 'Spot rising keywords' },
              { icon: Target, title: 'Content Gaps', desc: 'Find opportunities' },
              { icon: Globe, title: 'SERP Analysis', desc: 'See what ranks' }
            ].map((feature, index) => {
              const Icon = feature.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-xl p-6 shadow-lg"
                >
                  <Icon className="h-10 w-10 text-primary-500 mb-4" />
                  <h3 className="font-bold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600 text-sm">{feature.desc}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>
    </div>
  )
}