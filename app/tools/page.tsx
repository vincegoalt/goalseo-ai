import { Metadata } from 'next'
import Link from 'next/link'
import { Calculator, Search, TrendingUp, BarChart3, Target, Zap } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Free SEO Tools | Audit, ROI Calculator & More',
  description: 'Free SEO tools to analyze your website, calculate ROI, and improve your rankings. Get instant insights and actionable recommendations.',
}

export default function ToolsPage() {
  const tools = [
    {
      icon: Search,
      title: 'SEO Audit Tool',
      description: 'Get instant analysis of your website\'s SEO performance with actionable recommendations.',
      href: '/free-audit',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Calculator,
      title: 'ROI Calculator',
      description: 'Calculate your potential return on investment from SEO services.',
      href: '/tools/roi-calculator',
      color: 'from-primary-500 to-electric-500',
    },
    {
      icon: TrendingUp,
      title: 'Keyword Rank Checker',
      description: 'Check where your website ranks for specific keywords.',
      href: '/tools/rank-checker',
      color: 'from-green-500 to-teal-500',
      comingSoon: true,
    },
    {
      icon: BarChart3,
      title: 'Traffic Estimator',
      description: 'Estimate potential traffic based on keyword rankings.',
      href: '/tools/traffic-estimator',
      color: 'from-purple-500 to-pink-500',
      comingSoon: true,
    },
    {
      icon: Target,
      title: 'Competitor Analysis',
      description: 'Compare your SEO performance against competitors.',
      href: '/tools/competitor-analysis',
      color: 'from-orange-500 to-red-500',
      comingSoon: true,
    },
    {
      icon: Zap,
      title: 'Speed Test',
      description: 'Test your website\'s loading speed and Core Web Vitals.',
      href: '/tools/speed-test',
      color: 'from-indigo-500 to-purple-500',
      comingSoon: true,
    },
  ]

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary-50 via-white to-electric-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Free{' '}
              <span className="bg-gradient-to-r from-primary-500 to-electric-500 bg-clip-text text-transparent">
                SEO Tools
              </span>
            </h1>
            <p className="text-xl text-gray-600">
              Professional-grade SEO tools to analyze, optimize, and track your website's performance. 
              Get instant insights and actionable recommendations.
            </p>
          </div>
        </div>
      </section>

      {/* Tools Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tools.map((tool, index) => {
              const Icon = tool.icon
              return (
                <div
                  key={index}
                  className={`relative bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-xl transition-all ${
                    !tool.comingSoon ? 'hover:-translate-y-1' : 'opacity-75'
                  }`}
                >
                  {tool.comingSoon && (
                    <div className="absolute top-4 right-4 bg-gray-100 text-gray-600 text-xs font-semibold px-2 py-1 rounded">
                      Coming Soon
                    </div>
                  )}
                  
                  <div className={`inline-flex items-center justify-center w-14 h-14 bg-gradient-to-r ${tool.color} rounded-xl text-white mb-4`}>
                    <Icon className="h-7 w-7" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {tool.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-6">
                    {tool.description}
                  </p>
                  
                  {!tool.comingSoon ? (
                    <Link
                      href={tool.href}
                      className="inline-flex items-center gap-2 text-primary-600 font-semibold hover:text-primary-700 transition-colors"
                    >
                      Try Tool →
                    </Link>
                  ) : (
                    <span className="text-gray-400">Available Soon</span>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-500 to-electric-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Need More Than Tools?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Get professional SEO services with guaranteed results and 387% average ROI.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all transform hover:scale-105 shadow-xl"
          >
            Get Professional Help →
          </Link>
        </div>
      </section>
    </div>
  )
}