"use client"

import { useState } from 'react'
import { Search, Loader2, CheckCircle, XCircle, AlertCircle, ArrowRight, Download } from 'lucide-react'

interface AuditResult {
  score: number
  issues: {
    type: 'error' | 'warning' | 'success'
    message: string
    impact: 'high' | 'medium' | 'low'
  }[]
  recommendations: string[]
}

export default function SEOAuditTool() {
  const [url, setUrl] = useState('')
  const [isAnalyzing, setIsAnalyzing] = useState(false)
  const [result, setResult] = useState<AuditResult | null>(null)

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
      ]
    }
    
    setResult(mockResult)
    setIsAnalyzing(false)
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
            <h3 className="text-2xl font-bold mb-4">Want a Complete SEO Analysis?</h3>
            <p className="text-white/90 mb-6">
              Get a detailed audit with 50+ checks, competitor analysis, and a custom action plan.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="inline-flex items-center justify-center gap-2 bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all">
                <Download className="h-5 w-5" />
                Download Full Report
              </button>
              <a
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-transparent text-white border-2 border-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-all"
              >
                Get Professional Audit
                <ArrowRight className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}