import { Metadata } from 'next'
import Link from 'next/link'
import { 
  MapPin, Store, Phone, Star, Users, Search,
  CheckCircle, ArrowRight, Sparkles, Award, TrendingUp,
  Clock, Navigation, Building, MessageSquare, Globe, Shield
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Long Beach SEO Experts | Dominate Local Search | GoalSEO.ai',
  description: 'Long Beach\'s premier SEO agency. Based in Belmont Shore, serving all of Long Beach and Greater LA. Dominate local search with our AI-enhanced local SEO strategies.',
}

export default function LocalSEOLongBeachPage() {
  const neighborhoods = [
    "Belmont Shore", "Naples", "Bixby Knolls", "Downtown Long Beach",
    "East Village", "Alamitos Beach", "California Heights", "Rose Park",
    "Lakewood Village", "El Dorado Park", "Los Altos", "Signal Hill"
  ]

  const localServices = [
    {
      icon: MapPin,
      title: "Google Business Profile Optimization",
      description: "Maximize your visibility in Google Maps and local pack results"
    },
    {
      icon: Store,
      title: "Local Citation Building",
      description: "Build consistent NAP across 100+ local directories"
    },
    {
      icon: Star,
      title: "Review Management Strategy",
      description: "Generate and manage reviews to build local trust"
    },
    {
      icon: Building,
      title: "Multi-Location SEO",
      description: "Optimize multiple Long Beach locations for maximum reach"
    },
    {
      icon: MessageSquare,
      title: "Hyperlocal Content Creation",
      description: "Content targeting specific Long Beach neighborhoods"
    },
    {
      icon: Users,
      title: "Local Link Building",
      description: "Partnerships with Long Beach businesses and organizations"
    }
  ]

  const industries = [
    { name: "Restaurants & Bars", icon: "🍽️", count: "50+ clients" },
    { name: "Medical & Healthcare", icon: "🏥", count: "30+ practices" },
    { name: "Legal Services", icon: "⚖️", count: "25+ firms" },
    { name: "Home Services", icon: "🏠", count: "40+ companies" },
    { name: "Retail Stores", icon: "🛍️", count: "35+ stores" },
    { name: "Auto Services", icon: "🚗", count: "20+ shops" },
    { name: "Real Estate", icon: "🏢", count: "30+ agencies" },
    { name: "Beauty & Wellness", icon: "💆", count: "25+ salons" }
  ]

  const caseStudies = [
    {
      business: "Belmont Shore Restaurant",
      results: [
        "300% increase in foot traffic",
        "#1 for 'best restaurant Belmont Shore'",
        "150% increase in reservations",
        "4.8 star average review rating"
      ]
    },
    {
      business: "Downtown Long Beach Law Firm",
      results: [
        "#1 for 15+ 'Long Beach lawyer' keywords",
        "500% increase in local leads",
        "Dominated Google Maps results",
        "200% ROI in 90 days"
      ]
    },
    {
      business: "Naples Home Services",
      results: [
        "400% increase in service calls",
        "#1 in Google Maps for service area",
        "80+ 5-star reviews generated",
        "Expanded to 3 new locations"
      ]
    }
  ]

  const longBeachStats = [
    { stat: "470,000+", label: "Population" },
    { stat: "52", label: "Square Miles" },
    { stat: "5th", label: "Largest City in CA" },
    { stat: "2nd", label: "Busiest Port in US" }
  ]

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-primary-50 via-white to-gray-50 overflow-hidden relative">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-96 h-96 bg-blue-300/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-300/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
              <MapPin className="h-4 w-4" />
              <span>Long Beach, California Based</span>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              Long Beach SEO Experts:{' '}
              <span className="bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">
                Dominate Local Search
              </span>
            </h1>
            
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Your neighbors, your SEO partners. Based in Belmont Shore, serving all of Long Beach 
              and Greater LA with AI-enhanced local SEO strategies that deliver real results.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link
                href="/free-audit"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-600 hover:to-cyan-700 transition-all shadow-lg hover:shadow-xl group"
              >
                <MapPin className="h-5 w-5" />
                Get Your Free Local SEO Audit
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-white text-blue-600 border-2 border-blue-200 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-all"
              >
                <Phone className="h-5 w-5" />
                Call a Local Expert: (562) XXX-XXXX
              </Link>
            </div>

            {/* Long Beach Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {longBeachStats.map((item, index) => (
                <div key={index} className="bg-white rounded-lg p-4 border border-gray-200">
                  <div className="text-2xl font-bold text-gray-900">{item.stat}</div>
                  <div className="text-sm text-gray-600">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Neighborhoods We Serve */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Serving All Long Beach Neighborhoods
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Deep local knowledge of every Long Beach community
            </p>
          </div>

          <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl p-8 border border-blue-200">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {neighborhoods.map((neighborhood, index) => (
                <div key={index} className="flex items-center gap-2 bg-white rounded-lg p-3 border border-gray-200">
                  <Navigation className="h-4 w-4 text-blue-500" />
                  <span className="text-gray-700 font-medium">{neighborhood}</span>
                </div>
              ))}
            </div>
            
            <div className="mt-6 text-center">
              <p className="text-gray-600">
                Plus: Seal Beach, Lakewood, Signal Hill, Carson, Paramount, Bellflower, and all surrounding areas
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Local SEO Services */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Local SEO Services for Long Beach Businesses
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive local SEO strategies tailored for Long Beach market dynamics
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {localServices.map((service, index) => {
              const Icon = service.icon
              return (
                <div key={index} className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mb-4">
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

      {/* Industries We Serve */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Long Beach Industries We Specialize In
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Deep expertise in Long Beach's key business sectors
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {industries.map((industry, index) => (
              <div key={index} className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-shadow text-center">
                <div className="text-4xl mb-3">{industry.icon}</div>
                <h3 className="font-bold text-gray-900 mb-1">{industry.name}</h3>
                <p className="text-sm text-primary-600">{industry.count}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Local Success Stories */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Long Beach Business Success Stories
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Real results from real Long Beach businesses
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <div key={index} className="bg-white rounded-xl p-8 border border-gray-200 hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-3 mb-6">
                  <Store className="h-8 w-8 text-blue-500" />
                  <h3 className="text-xl font-bold text-gray-900">{study.business}</h3>
                </div>
                <ul className="space-y-3">
                  {study.results.map((result, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <TrendingUp className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{result}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Long Beach Specific Strategy */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Long Beach SEO Strategy
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Leveraging local knowledge and connections for your success
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-6">Local Advantages We Leverage</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="font-semibold text-gray-900">Port of Long Beach Traffic:</span>
                    <span className="text-gray-600"> Target B2B logistics and shipping companies</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="font-semibold text-gray-900">Beach Communities:</span>
                    <span className="text-gray-600"> Tourism and hospitality optimization</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="font-semibold text-gray-900">CSULB Proximity:</span>
                    <span className="text-gray-600"> Target student and education markets</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="font-semibold text-gray-900">Local Events:</span>
                    <span className="text-gray-600"> Grand Prix, festivals, and community events</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="font-semibold text-gray-900">Business Networks:</span>
                    <span className="text-gray-600"> Chamber of Commerce partnerships</span>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl p-8 border border-blue-200">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Long Beach SEO Package Includes</h3>
              <ul className="space-y-3">
                {[
                  "Google Business Profile setup & optimization",
                  "100+ local citation building",
                  "Long Beach-specific content creation",
                  "Local link building with LB businesses",
                  "Review generation & management",
                  "Mobile optimization for local search",
                  "Schema markup for local business",
                  "Monthly reporting & strategy calls"
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-blue-500 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Local */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Why Choose a Long Beach SEO Agency?
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Local Knowledge</h3>
              <p className="text-gray-600">
                We know Long Beach inside and out - from Belmont Shore to Bixby Knolls, 
                we understand your market
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Local Connections</h3>
              <p className="text-gray-600">
                Established relationships with Long Beach media, businesses, and organizations 
                for better link building
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">In-Person Meetings</h3>
              <p className="text-gray-600">
                Meet face-to-face at our Belmont Shore office or your Long Beach location 
                for personalized service
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-500 to-cyan-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Ready to Dominate Long Beach Search Results?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join 200+ Long Beach businesses already dominating their local search results with our help.
          </p>
          
          <div className="bg-white/10 backdrop-blur rounded-xl p-6 mb-8 max-w-2xl mx-auto">
            <h3 className="text-lg font-semibold text-white mb-4">Free Local SEO Audit Includes:</h3>
            <div className="grid md:grid-cols-2 gap-3 text-left">
              {[
                "Google Business Profile analysis",
                "Local competitor research",
                "Citation audit",
                "Review analysis",
                "Local keyword opportunities",
                "Mobile optimization check",
                "Local link opportunities",
                "90-day action plan"
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-2 text-white/90">
                  <CheckCircle className="h-4 w-4 text-white/70 flex-shrink-0" />
                  <span className="text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/free-audit"
              className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all shadow-lg group"
            >
              <MapPin className="h-5 w-5" />
              Get Your Free Long Beach SEO Audit
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            
            <a
              href="tel:562-XXX-XXXX"
              className="inline-flex items-center gap-2 bg-blue-600 text-white border-2 border-white/20 px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-all"
            >
              <Phone className="h-5 w-5" />
              Call Now: (562) XXX-XXXX
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}