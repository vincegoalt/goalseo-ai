'use client'

import { useState } from 'react'
import { ArrowRight, CheckCircle, AlertCircle, TrendingUp, Globe, Search, Zap, Shield, Brain, Target } from 'lucide-react'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

interface AuditIssue {
  severity: 'critical' | 'warning' | 'info'
  issue: string
  recommendation: string
}

interface AuditOpportunity {
  impact: 'high' | 'medium' | 'low'
  opportunity: string
  action: string
}

interface AuditResult {
  url: string
  title: string
  meta_description: string
  overall_score: number
  issues: AuditIssue[]
  opportunities: AuditOpportunity[]
  quick_wins: string[]
  geo_aeo_readiness: {
    geo_score: number
    aeo_score: number
    recommendations: string[]
  }
  timestamp: string
}

export default function FreeAuditPage() {
  const [url, setUrl] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [result, setResult] = useState<AuditResult | null>(null)
  const [remainingAudits, setRemainingAudits] = useState<number | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setResult(null)
    setLoading(true)

    try {
      const response = await fetch('/api/audit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ url }),
      })

      const data = await response.json()

      if (!response.ok) {
        if (response.status === 429) {
          setError('You\'ve reached your free audit limit. Please try again in an hour.')
        } else {
          setError(data.error || 'Failed to analyze website')
        }
        return
      }

      setResult(data.analysis)
      setRemainingAudits(data.remaining_audits)
    } catch (err) {
      setError('Failed to connect to audit service. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'critical': return 'text-red-600 bg-red-50 border-red-200'
      case 'warning': return 'text-amber-600 bg-amber-50 border-amber-200'
      case 'info': return 'text-blue-600 bg-blue-50 border-blue-200'
      default: return 'text-gray-600 bg-gray-50 border-gray-200'
    }
  }

  const getImpactColor = (impact: string) => {
    switch (impact) {
      case 'high': return 'bg-gradient-to-r from-red-500 to-orange-500'
      case 'medium': return 'bg-gradient-to-r from-amber-500 to-yellow-500'
      case 'low': return 'bg-gradient-to-r from-blue-500 to-cyan-500'
      default: return 'bg-gradient-to-r from-gray-500 to-gray-600'
    }
  }

  const getScoreColor = (score: number) => {
    if (score >= 80) return 'text-green-600'
    if (score >= 60) return 'text-amber-600'
    if (score >= 40) return 'text-orange-600'
    return 'text-red-600'
  }

  return (
    <>
      <Header />
      <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-electric-50 opacity-50" />
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary-500/10 to-electric-500/10 rounded-full text-sm font-medium text-primary-700 mb-6">
                <Zap className="w-4 h-4" />
                FREE AI-POWERED SEO AUDIT
              </div>
              
              <h1 className="text-5xl font-bold text-gray-900 mb-6">
                Get Your Free{' '}
                <span className="bg-gradient-to-r from-primary-500 to-electric-500 bg-clip-text text-transparent">
                  AI SEO Audit
                </span>
              </h1>
              
              <p className="text-xl text-gray-600 mb-8">
                Discover how your website performs in AI search engines like ChatGPT and Google SGE.
                Get actionable insights for GEO and AEO optimization in seconds.
              </p>

              {/* Audit Form */}
              <form onSubmit={handleSubmit} className="max-w-2xl mx-auto">
                <div className="relative">
                  <input
                    type="text"
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                    placeholder="Enter your website URL (e.g., example.com)"
                    className="w-full px-6 py-4 pr-32 text-lg border-2 border-gray-200 rounded-xl focus:border-primary-500 focus:outline-none transition-colors"
                    required
                    disabled={loading}
                  />
                  <button
                    type="submit"
                    disabled={loading || !url}
                    className="absolute right-2 top-2 px-6 py-2 bg-gradient-to-r from-primary-500 to-electric-500 text-white font-semibold rounded-lg hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {loading ? (
                      <span className="flex items-center gap-2">
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Analyzing...
                      </span>
                    ) : (
                      <span className="flex items-center gap-2">
                        Analyze
                        <ArrowRight className="w-4 h-4" />
                      </span>
                    )}
                  </button>
                </div>
              </form>

              {remainingAudits !== null && (
                <p className="mt-4 text-sm text-gray-600">
                  {remainingAudits} free {remainingAudits === 1 ? 'audit' : 'audits'} remaining this hour
                </p>
              )}

              {error && (
                <div className="mt-6 p-4 bg-red-50 border border-red-200 rounded-lg text-red-700">
                  <p className="flex items-center gap-2">
                    <AlertCircle className="w-5 h-5" />
                    {error}
                  </p>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Results Section */}
        {result && (
          <section className="py-16 container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              {/* Score Overview */}
              <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
                <div className="grid md:grid-cols-3 gap-8">
                  {/* Overall Score */}
                  <div className="text-center">
                    <div className={`text-6xl font-bold mb-2 ${getScoreColor(result.overall_score)}`}>
                      {result.overall_score}
                    </div>
                    <div className="text-gray-600">Overall SEO Score</div>
                    <div className="mt-4 w-full bg-gray-200 rounded-full h-3">
                      <div 
                        className={`h-3 rounded-full transition-all ${
                          result.overall_score >= 80 ? 'bg-green-500' :
                          result.overall_score >= 60 ? 'bg-amber-500' :
                          result.overall_score >= 40 ? 'bg-orange-500' :
                          'bg-red-500'
                        }`}
                        style={{ width: `${result.overall_score}%` }}
                      />
                    </div>
                  </div>

                  {/* GEO Score */}
                  <div className="text-center">
                    <div className={`text-6xl font-bold mb-2 ${getScoreColor(result.geo_aeo_readiness.geo_score)}`}>
                      {result.geo_aeo_readiness.geo_score}
                    </div>
                    <div className="text-gray-600">GEO Readiness</div>
                    <div className="mt-4 w-full bg-gray-200 rounded-full h-3">
                      <div 
                        className="h-3 rounded-full bg-gradient-to-r from-primary-500 to-electric-500 transition-all"
                        style={{ width: `${result.geo_aeo_readiness.geo_score}%` }}
                      />
                    </div>
                  </div>

                  {/* AEO Score */}
                  <div className="text-center">
                    <div className={`text-6xl font-bold mb-2 ${getScoreColor(result.geo_aeo_readiness.aeo_score)}`}>
                      {result.geo_aeo_readiness.aeo_score}
                    </div>
                    <div className="text-gray-600">AEO Readiness</div>
                    <div className="mt-4 w-full bg-gray-200 rounded-full h-3">
                      <div 
                        className="h-3 rounded-full bg-gradient-to-r from-electric-500 to-cyan-500 transition-all"
                        style={{ width: `${result.geo_aeo_readiness.aeo_score}%` }}
                      />
                    </div>
                  </div>
                </div>

                {/* Site Info */}
                <div className="mt-8 pt-8 border-t border-gray-200">
                  <div className="flex items-start gap-2 mb-3">
                    <Globe className="w-5 h-5 text-gray-400 mt-0.5" />
                    <div>
                      <div className="text-sm text-gray-600">URL</div>
                      <div className="font-medium">{result.url}</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-2 mb-3">
                    <Search className="w-5 h-5 text-gray-400 mt-0.5" />
                    <div>
                      <div className="text-sm text-gray-600">Title Tag</div>
                      <div className="font-medium">{result.title || 'No title found'}</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <Target className="w-5 h-5 text-gray-400 mt-0.5" />
                    <div>
                      <div className="text-sm text-gray-600">Meta Description</div>
                      <div className="font-medium">{result.meta_description || 'No meta description found'}</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Issues & Recommendations */}
              <div className="grid lg:grid-cols-2 gap-8 mb-8">
                {/* Issues */}
                <div className="bg-white rounded-2xl shadow-xl p-8">
                  <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                    <AlertCircle className="w-6 h-6 text-amber-500" />
                    Issues Found
                  </h2>
                  <div className="space-y-4">
                    {result.issues.map((issue, index) => (
                      <div key={index} className={`p-4 rounded-lg border ${getSeverityColor(issue.severity)}`}>
                        <div className="font-semibold mb-2 flex items-center gap-2">
                          <span className={`px-2 py-1 rounded text-xs font-bold uppercase ${
                            issue.severity === 'critical' ? 'bg-red-600 text-white' :
                            issue.severity === 'warning' ? 'bg-amber-600 text-white' :
                            'bg-blue-600 text-white'
                          }`}>
                            {issue.severity}
                          </span>
                          {issue.issue}
                        </div>
                        <div className="text-sm opacity-90">
                          💡 {issue.recommendation}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Opportunities */}
                <div className="bg-white rounded-2xl shadow-xl p-8">
                  <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                    <TrendingUp className="w-6 h-6 text-green-500" />
                    Growth Opportunities
                  </h2>
                  <div className="space-y-4">
                    {result.opportunities.map((opp, index) => (
                      <div key={index} className="p-4 rounded-lg border border-gray-200 bg-gradient-to-r from-gray-50 to-white">
                        <div className="font-semibold mb-2 flex items-center gap-2">
                          <span className={`w-2 h-2 rounded-full ${getImpactColor(opp.impact)}`} />
                          {opp.opportunity}
                        </div>
                        <div className="text-sm text-gray-600">
                          {opp.action}
                        </div>
                        <div className="mt-2">
                          <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                            opp.impact === 'high' ? 'bg-red-100 text-red-700' :
                            opp.impact === 'medium' ? 'bg-amber-100 text-amber-700' :
                            'bg-blue-100 text-blue-700'
                          }`}>
                            {opp.impact.toUpperCase()} IMPACT
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Quick Wins & AI Readiness */}
              <div className="grid lg:grid-cols-2 gap-8">
                {/* Quick Wins */}
                <div className="bg-gradient-to-br from-primary-50 to-electric-50 rounded-2xl p-8">
                  <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                    <Zap className="w-6 h-6 text-electric-500" />
                    Quick Wins
                  </h2>
                  <ul className="space-y-3">
                    {result.quick_wins.map((win, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{win}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* AI Readiness */}
                <div className="bg-gradient-to-br from-electric-50 to-cyan-50 rounded-2xl p-8">
                  <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                    <Brain className="w-6 h-6 text-cyan-500" />
                    AI Search Readiness
                  </h2>
                  <div className="space-y-4">
                    <div>
                      <div className="text-sm text-gray-600 mb-1">GEO & AEO Recommendations</div>
                      <ul className="space-y-2">
                        {result.geo_aeo_readiness.recommendations.map((rec, index) => (
                          <li key={index} className="flex items-start gap-2">
                            <Shield className="w-4 h-4 text-primary-500 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700 text-sm">{rec}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* CTA Section */}
              <div className="mt-12 bg-gradient-to-r from-primary-500 to-electric-500 rounded-2xl p-8 text-white text-center">
                <h2 className="text-3xl font-bold mb-4">
                  Ready to Dominate AI Search Results?
                </h2>
                <p className="text-xl mb-6 opacity-90">
                  Get a comprehensive strategy to improve your GEO & AEO scores and rank in AI engines
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-primary-600 font-semibold rounded-lg hover:shadow-xl transition-all"
                  >
                    Get Professional Help
                    <ArrowRight className="w-5 h-5" />
                  </a>
                  <a
                    href="/services/geo-optimization"
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 backdrop-blur text-white font-semibold rounded-lg hover:bg-white/20 transition-all"
                  >
                    Learn About GEO
                  </a>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Features Section (shown when no results) */}
        {!result && (
          <section className="py-16 container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">
                What Our Free Audit Analyzes
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-primary-500 to-electric-500 rounded-full flex items-center justify-center">
                    <Search className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Traditional SEO</h3>
                  <p className="text-gray-600">
                    Title tags, meta descriptions, content quality, and technical SEO fundamentals
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-electric-500 to-cyan-500 rounded-full flex items-center justify-center">
                    <Brain className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">GEO Optimization</h3>
                  <p className="text-gray-600">
                    How well your site performs in AI search engines like ChatGPT and Perplexity
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-cyan-500 to-primary-500 rounded-full flex items-center justify-center">
                    <Target className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">AEO Readiness</h3>
                  <p className="text-gray-600">
                    Featured snippets potential, voice search optimization, and answer engine visibility
                  </p>
                </div>
              </div>
            </div>
          </section>
        )}
      </main>
      <Footer />
    </>
  )
}