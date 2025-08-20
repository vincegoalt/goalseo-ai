import { Metadata } from 'next'
import SEOAuditTool from '@/components/tools/SEOAuditTool'

export const metadata: Metadata = {
  title: 'Free SEO Audit Tool | Instant Website Analysis',
  description: 'Get a free instant SEO audit of your website. Check technical SEO, performance, mobile-friendliness, and get actionable recommendations.',
}

export default function FreeAuditPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary-50 via-white to-electric-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Free{' '}
              <span className="bg-gradient-to-r from-primary-500 to-electric-500 bg-clip-text text-transparent">
                SEO Audit Tool
              </span>
            </h1>
            <p className="text-xl text-gray-600">
              Get an instant analysis of your website's SEO performance. 
              Discover issues, opportunities, and get actionable recommendations to improve your rankings.
            </p>
          </div>
        </div>
      </section>

      {/* Audit Tool */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SEOAuditTool />
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              What Our SEO Audit Checks
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive analysis of all critical SEO factors
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Technical SEO</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Page speed and Core Web Vitals</li>
                <li>• Mobile responsiveness</li>
                <li>• SSL certificate</li>
                <li>• XML sitemap</li>
                <li>• Robots.txt</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">On-Page SEO</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Title tags and meta descriptions</li>
                <li>• Heading structure</li>
                <li>• Content quality</li>
                <li>• Internal linking</li>
                <li>• Image optimization</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Off-Page SEO</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Backlink profile</li>
                <li>• Domain authority</li>
                <li>• Social signals</li>
                <li>• Brand mentions</li>
                <li>• Competitor analysis</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}