import { Metadata } from 'next'
import Link from 'next/link'
import { 
  Scale, Briefcase, Shield, Users, Award, Globe,
  CheckCircle, ArrowRight, Building, FileText, Gavel,
  Star, Phone, TrendingUp, Sparkles
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Legal SEO Services | Law Firm Marketing | GoalSEO.ai',
  description: 'Ethical SEO for law firms and attorneys. Practice area optimization, local SEO, and lead generation strategies that comply with bar regulations.',
}

export default function LegalIndustryPage() {
  const practiceAreas = [
    "Personal Injury", "Criminal Defense", "Family Law", "Estate Planning",
    "Business Law", "Immigration", "Employment Law", "Real Estate Law"
  ]

  const services = [
    {
      title: "Practice Area Optimization",
      description: "Dominate searches for your legal specialties",
      icon: Gavel
    },
    {
      title: "Local Legal SEO",
      description: "Rank #1 in your city for legal services",
      icon: Building
    },
    {
      title: "Legal Content Authority",
      description: "Build trust with authoritative legal content",
      icon: FileText
    },
    {
      title: "Attorney Profile Pages",
      description: "Showcase individual attorney expertise",
      icon: Users
    },
    {
      title: "Reputation Management",
      description: "Manage and improve online reviews",
      icon: Star
    },
    {
      title: "Ethical Lead Generation",
      description: "Bar-compliant marketing strategies",
      icon: Shield
    }
  ]

  const results = [
    { metric: "Case Inquiries", value: "+425%", timeframe: "9 months" },
    { metric: "Organic Traffic", value: "+298%", timeframe: "6 months" },
    { metric: "Cost Per Lead", value: "-67%", timeframe: "reduced" },
    { metric: "Practice Area Rankings", value: "Top 3", timeframe: "achieved" }
  ]

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-slate-50 via-white to-gray-50 overflow-hidden relative">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-96 h-96 bg-slate-300/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-300/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 bg-slate-100 text-slate-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
              <Scale className="h-5 w-5" />
              <span>Legal SEO Specialists</span>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              Legal SEO That{' '}
              <span className="bg-gradient-to-r from-slate-600 to-blue-600 bg-clip-text text-transparent">
                Wins Cases
              </span>
            </h1>
            
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Ethical, effective SEO for law firms. Build authority, attract qualified clients, 
              and grow your practice with strategies that comply with bar regulations.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link
                href="/free-audit"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-slate-600 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-slate-700 hover:to-blue-700 transition-all shadow-lg hover:shadow-xl group"
              >
                <Scale className="h-5 w-5" />
                Get Your Legal SEO Audit
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <Link
                href="/case-studies"
                className="inline-flex items-center gap-2 bg-white text-slate-600 border-2 border-slate-200 px-8 py-4 rounded-lg font-semibold hover:bg-slate-50 transition-all"
              >
                <Award className="h-5 w-5" />
                View Law Firm Success Stories
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap justify-center gap-8 text-sm">
              <div className="flex items-center gap-2 text-gray-600">
                <CheckCircle className="h-5 w-5 text-slate-600" />
                <span>52 Law Firms Served</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <CheckCircle className="h-5 w-5 text-slate-600" />
                <span>Bar Compliant Strategies</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <CheckCircle className="h-5 w-5 text-slate-600" />
                <span>Ethical Marketing Only</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Practice Areas */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              SEO for Every Practice Area
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Specialized strategies for your legal specialization
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {practiceAreas.map((area, index) => (
              <div key={index} className="bg-white rounded-lg p-4 border border-gray-200 hover:border-slate-300 hover:shadow-md transition-all text-center">
                <span className="text-gray-700">{area}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Legal SEO Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive SEO solutions designed for law firms
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <div key={index} className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 bg-gradient-to-r from-slate-600 to-blue-600 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-slate-600 to-blue-600 rounded-3xl p-8 lg:p-12 text-white">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">Legal SEO Results</h2>
              <p className="text-xl text-white/90">Average results across our law firm clients</p>
            </div>
            <div className="grid md:grid-cols-4 gap-6">
              {results.map((result, index) => (
                <div key={index} className="bg-white/10 backdrop-blur rounded-xl p-6 text-center">
                  <div className="text-3xl font-bold mb-2">{result.value}</div>
                  <div className="text-white/90 mb-1">{result.metric}</div>
                  <div className="text-sm text-white/70">{result.timeframe}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Ready to Grow Your Practice?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Get a free legal SEO audit and start attracting more qualified clients.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/free-audit"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-slate-600 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-slate-700 hover:to-blue-700 transition-all shadow-lg group"
            >
              <Sparkles className="h-5 w-5" />
              Get Your Free Legal Audit
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-white text-slate-600 border-2 border-slate-200 px-8 py-4 rounded-lg font-semibold hover:bg-slate-50 transition-all"
            >
              <Phone className="h-5 w-5" />
              Talk to a Legal SEO Expert
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}