"use client"

import { useState } from 'react'
import Link from 'next/link'
import { Search, Loader2, CheckCircle, XCircle, AlertCircle, ArrowRight, Download, Mail, Lock, TrendingUp, Sparkles } from 'lucide-react'

interface AuditResult {
  score: number
  issues: {
    type: 'error' | 'warning' | 'success'
    message: string
    impact: 'high' | 'medium' | 'low'
  }[]
  recommendations: string[]
  competitors: {
    domain: string
    score: number
  }[]
}

export default function SEOAuditTool() {
  const [url, setUrl] = useState('')
  const [email, setEmail] = useState('')
  const [isAnalyzing, setIsAnalyzing] = useState(false)
  const [result, setResult] = useState<AuditResult | null>(null)
  const [showEmailCapture, setShowEmailCapture] = useState(false)
  const [emailCaptured, setEmailCaptured] = useState(false)

  const handleAudit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!url) return

    setIsAnalyzing(true)
    
    // Simulate API call - in production, this would call a real SEO analysis API
    await new Promise(resolve => setTimeout(resolve, 3000))
    
    // Mock audit result
    const mockResult: AuditResult = {
      score: 72,
      issues: [
        { type: 'success', message: 'HTTPS is enabled', impact: 'high' },
        { type: 'success', message: 'Mobile-friendly design detected', impact: 'high' },
        { type: 'warning', message: 'Title tag could be optimized (55 characters)', impact: 'medium' },
        { type: 'error', message: 'Missing meta description on 3 pages', impact: 'high' },
        { type: 'warning', message: 'Images missing alt text (5 found)', impact: 'medium' },
        { type: 'error', message: 'Page speed needs improvement (3.2s load time)', impact: 'high' },
        { type: 'success', message: 'XML sitemap found', impact: 'medium' },
        { type: 'warning', message: 'Low text-to-HTML ratio (12%)', impact: 'low' },
      ],
      recommendations: [
        'Add unique meta descriptions to all pages',
        'Optimize images and implement lazy loading',
        'Improve page speed by minifying CSS and JavaScript',
        'Add alt text to all images for better accessibility',
        'Increase content length on key pages',
      ],
      competitors: [
        { domain: 'competitor1.com', score: 85 },
        { domain: 'competitor2.com', score: 78 },
        { domain: url.replace('https://', '').replace('http://', ''), score: 72 },
        { domain: 'competitor3.com', score: 69 },
      ]
    }
    
    setResult(mockResult)
    setIsAnalyzing(false)
    
    // Show email capture after analysis if not already captured
    if (!emailCaptured) {
      setShowEmailCapture(true)
    }
  }

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return
    
    // In production, this would save the lead to your database
    // and potentially trigger an email sequence
    console.log('Lead captured:', { email, url })
    
    setEmailCaptured(true)
    setShowEmailCapture(false)
    
    // Optionally redirect to signup with pre-filled email
    // window.location.href = `/signup?email=${encodeURIComponent(email)}&source=audit`
  }

  const getScoreColor = (score: number) => {
    if (score >= 80) return 'text-success-600'
    if (score >= 60) return 'text-yellow-600'
    return 'text-red-600'
  }

  const getScoreLabel = (score: number) => {
    if (score >= 80) return 'Good'
    if (score >= 60) return 'Needs Improvement'
    return 'Poor'
  }

  return (
    <div>
      {/* Input Form */}
      <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
        <form onSubmit={handleAudit} className="space-y-4">
          <div>
            <label htmlFor="url" className="block text-sm font-medium text-gray-700 mb-2">
              Enter Your Website URL
            </label>
            <div className="flex gap-4">
              <input
                type="url"
                id="url"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                placeholder="https://example.com"
                required
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
              />
              <button
                type="submit"
                disabled={isAnalyzing}
                className="inline-flex items-center gap-2 bg-gradient-to-r from-primary-500 to-primary-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-primary-600 hover:to-primary-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isAnalyzing ? (
                  <>
                    <Loader2 className="h-5 w-5 animate-spin" />
                    Analyzing...
                  </>
                ) : (
                  <>
                    <Search className="h-5 w-5" />
                    Analyze
                  </>
                )}
              </button>
            </div>
          </div>
        </form>
      </div>

      {/* Loading State */}
      {isAnalyzing && (
        <div className="mt-8 bg-white rounded-2xl shadow-xl p-12 border border-gray-100 text-center">
          <Loader2 className="h-12 w-12 animate-spin text-primary-500 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-gray-900 mb-2">Analyzing Your Website</h3>
          <p className="text-gray-600">This may take a few moments...</p>
          <div className="mt-6 space-y-2">
            <div className="text-sm text-gray-500">✓ Checking technical SEO...</div>
            <div className="text-sm text-gray-500">✓ Analyzing content...</div>
            <div className="text-sm text-gray-500">✓ Evaluating performance...</div>
            <div className="text-sm text-gray-500">✓ Reviewing mobile experience...</div>
          </div>
        </div>
      )}

      {/* Email Capture Modal */}
      {showEmailCapture && result && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-8">
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-primary-100 to-electric-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Your SEO Audit is Ready!
              </h3>
              <p className="text-gray-600">
                Enter your email to unlock your full audit report and get:
              </p>
            </div>
            
            <ul className="space-y-2 mb-6">
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-success-500 flex-shrink-0 mt-0.5" />
                <span className="text-sm text-gray-700">Complete technical SEO analysis</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-success-500 flex-shrink-0 mt-0.5" />
                <span className="text-sm text-gray-700">Personalized action plan</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-success-500 flex-shrink-0 mt-0.5" />
                <span className="text-sm text-gray-700">Competitor comparison</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-success-500 flex-shrink-0 mt-0.5" />
                <span className="text-sm text-gray-700">14-day free trial of GoalSEO AI</span>
              </li>
            </ul>
            
            <form onSubmit={handleEmailSubmit} className="space-y-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
              />
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-primary-500 to-primary-600 text-white py-3 rounded-lg font-semibold hover:from-primary-600 hover:to-primary-700 transition-all"
              >
                Get My Full Audit Report
              </button>
            </form>
            
            <p className="text-xs text-center text-gray-500 mt-4">
              <Lock className="h-3 w-3 inline mr-1" />
              We respect your privacy. No spam, ever.
            </p>
          </div>
        </div>
      )}

      {/* Results */}
      {result && !isAnalyzing && (
        <div className="mt-8 space-y-8">
          {/* Score Card */}
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">SEO Score</h3>
              <div className={`text-6xl font-bold ${getScoreColor(result.score)} mb-2`}>
                {result.score}/100
              </div>
              <p className={`text-lg font-semibold ${getScoreColor(result.score)}`}>
                {getScoreLabel(result.score)}
              </p>
              
              {/* Competitor Comparison */}
              {emailCaptured && result.competitors && (
                <div className="mt-6 pt-6 border-t">
                  <p className="text-sm text-gray-600 mb-3">How you compare:</p>
                  <div className="space-y-2">
                    {result.competitors.sort((a, b) => b.score - a.score).map((comp, idx) => (
                      <div key={idx} className="flex items-center justify-between text-sm">
                        <span className={comp.domain === url.replace('https://', '').replace('http://', '') ? 'font-semibold' : ''}>
                          {comp.domain}
                        </span>
                        <span className={`font-medium ${getScoreColor(comp.score)}`}>
                          {comp.score}/100
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Issues */}
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <h3 className="text-xl font-bold text-gray-900 mb-6">SEO Issues Found</h3>
            <div className="space-y-3">
              {result.issues.map((issue, index) => (
                <div key={index} className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                  {issue.type === 'success' && (
                    <CheckCircle className="h-5 w-5 text-success-500 flex-shrink-0 mt-0.5" />
                  )}
                  {issue.type === 'warning' && (
                    <AlertCircle className="h-5 w-5 text-yellow-500 flex-shrink-0 mt-0.5" />
                  )}
                  {issue.type === 'error' && (
                    <XCircle className="h-5 w-5 text-red-500 flex-shrink-0 mt-0.5" />
                  )}
                  <div className="flex-1">
                    <p className="text-gray-900">{issue.message}</p>
                    <span className={`text-xs font-medium ${
                      issue.impact === 'high' ? 'text-red-600' :
                      issue.impact === 'medium' ? 'text-yellow-600' :
                      'text-gray-600'
                    }`}>
                      {issue.impact.toUpperCase()} IMPACT
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Recommendations */}
          <div className="bg-gradient-to-br from-primary-50 to-electric-50 rounded-2xl p-8">
            <h3 className="text-xl font-bold text-gray-900 mb-6">Recommendations</h3>
            <div className="space-y-3">
              {result.recommendations.map((rec, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-primary-600 text-sm font-bold">{index + 1}</span>
                  </div>
                  <p className="text-gray-700">{rec}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="bg-gradient-to-r from-primary-500 to-electric-500 rounded-2xl p-8 text-center text-white">
            {emailCaptured ? (
              <>
                <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-4">
                  <TrendingUp className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Ready to Fix These Issues?</h3>
                <p className="text-white/90 mb-6 max-w-2xl mx-auto">
                  GoalSEO AI can automatically fix {result.issues.filter(i => i.type === 'error' || i.type === 'warning').length} of these issues 
                  and improve your score to 90+ within 30 days. Start your free trial today.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    href={`/signup?email=${encodeURIComponent(email)}&plan=growth&source=audit`}
                    className="inline-flex items-center justify-center gap-2 bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all"
                  >
                    <Sparkles className="h-5 w-5" />
                    Start 14-Day Free Trial
                  </Link>
                  <button 
                    onClick={() => window.print()}
                    className="inline-flex items-center justify-center gap-2 bg-transparent text-white border-2 border-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-all"
                  >
                    <Download className="h-5 w-5" />
                    Download Report
                  </button>
                </div>
                <p className="text-white/70 text-sm mt-4">
                  No credit card required • Cancel anytime
                </p>
              </>
            ) : (
              <>
                <h3 className="text-2xl font-bold mb-4">Unlock Your Full SEO Audit</h3>
                <p className="text-white/90 mb-6">
                  See detailed recommendations and start fixing issues immediately
                </p>
                <button
                  onClick={() => setShowEmailCapture(true)}
                  className="inline-flex items-center justify-center gap-2 bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all"
                >
                  <Mail className="h-5 w-5" />
                  Get Full Report
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  )
}