import { Metadata } from 'next'
import Link from 'next/link'
import { 
  Home, MapPin, Users, TrendingUp, DollarSign, Search,
  CheckCircle, ArrowRight, Building, Key, Camera, Globe,
  Star, Phone, Calendar, Sparkles
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Real Estate SEO Services | Agent & Broker Marketing | GoalSEO.ai',
  description: 'Specialized SEO for real estate agents, brokers, and property management companies. IDX optimization, local SEO, and lead generation strategies.',
}

export default function RealEstateIndustryPage() {
  const services = [
    {
      title: "Hyperlocal SEO Dominance",
      description: "Rank #1 for every neighborhood and community",
      icon: MapPin
    },
    {
      title: "IDX Integration & Optimization",
      description: "Make your property listings search-friendly",
      icon: Home
    },
    {
      title: "Agent Profile Optimization",
      description: "Build individual agent authority and visibility",
      icon: Users
    },
    {
      title: "Property Landing Pages",
      description: "Optimized pages for listings and developments",
      icon: Building
    },
    {
      title: "Virtual Tour SEO",
      description: "Optimize 3D tours and video walkthroughs",
      icon: Camera
    },
    {
      title: "Lead Generation Funnels",
      description: "Convert searches into qualified buyer/seller leads",
      icon: Key
    }
  ]

  const propertyTypes = [
    "Residential", "Commercial", "Luxury Homes", "Condos",
    "Multi-family", "Land", "Rentals", "New Construction"
  ]

  const results = [
    { metric: "Lead Generation", value: "+687%", timeframe: "7 months" },
    { metric: "Organic Traffic", value: "+523%", timeframe: "5 months" },
    { metric: "Local Rankings", value: "47 #1s", timeframe: "achieved" },
    { metric: "Average Deal Size", value: "$485K", timeframe: "increased" }
  ]

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-emerald-50 via-white to-gray-50 overflow-hidden relative">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-96 h-96 bg-emerald-300/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-green-300/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
              <Home className="h-5 w-5" />
              <span>Real Estate SEO Specialists</span>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              Real Estate SEO That{' '}
              <span className="bg-gradient-to-r from-emerald-500 to-green-500 bg-clip-text text-transparent">
                Closes Deals
              </span>
            </h1>
            
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Dominate local real estate searches. From single agents to large brokerages, 
              we help you capture more leads and close more deals with AI-powered SEO.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link
                href="/free-audit"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-500 to-green-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-emerald-600 hover:to-green-700 transition-all shadow-lg hover:shadow-xl group"
              >
                <Home className="h-5 w-5" />
                Get Your Real Estate SEO Audit
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <Link
                href="/case-studies"
                className="inline-flex items-center gap-2 bg-white text-emerald-600 border-2 border-emerald-200 px-8 py-4 rounded-lg font-semibold hover:bg-emerald-50 transition-all"
              >
                <Star className="h-5 w-5" />
                View Real Estate Success Stories
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap justify-center gap-8 text-sm">
              <div className="flex items-center gap-2 text-gray-600">
                <CheckCircle className="h-5 w-5 text-emerald-500" />
                <span>64 Real Estate Clients</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <CheckCircle className="h-5 w-5 text-emerald-500" />
                <span>$2.3B in Property Sales</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <CheckCircle className="h-5 w-5 text-emerald-500" />
                <span>IDX Integration Experts</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Property Types */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              SEO for Every Property Type
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Specialized strategies for your real estate niche
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {propertyTypes.map((type, index) => (
              <div key={index} className="bg-white rounded-lg p-4 border border-gray-200 hover:border-emerald-300 hover:shadow-md transition-all text-center">
                <span className="text-gray-700">{type}</span>
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
              Real Estate SEO Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Everything you need to dominate local real estate searches
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <div key={index} className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-green-500 rounded-lg flex items-center justify-center mb-4">
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
          <div className="bg-gradient-to-r from-emerald-500 to-green-500 rounded-3xl p-8 lg:p-12 text-white">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">Real Estate SEO Results</h2>
              <p className="text-xl text-white/90">Average results across our real estate clients</p>
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
            Ready to Dominate Your Local Market?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Get a free real estate SEO audit and start generating more leads today.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/free-audit"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-500 to-green-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-emerald-600 hover:to-green-700 transition-all shadow-lg group"
            >
              <Sparkles className="h-5 w-5" />
              Get Your Free Real Estate Audit
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-white text-emerald-600 border-2 border-emerald-200 px-8 py-4 rounded-lg font-semibold hover:bg-emerald-50 transition-all"
            >
              <Phone className="h-5 w-5" />
              Talk to a Real Estate SEO Expert
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}