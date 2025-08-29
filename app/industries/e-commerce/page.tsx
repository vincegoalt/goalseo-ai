import { Metadata } from 'next'
import Link from 'next/link'
import { 
  ShoppingCart, TrendingUp, DollarSign, Package, Search, Globe,
  CheckCircle, ArrowRight, BarChart3, Zap, Shield, Award,
  Star, Users, Clock, Target, Sparkles
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'E-commerce SEO Services | Shopify & WooCommerce Experts | GoalSEO.ai',
  description: 'Specialized e-commerce SEO services for Shopify, WooCommerce, and custom platforms. Product optimization, technical SEO, and AI-powered strategies that drive sales.',
}

export default function EcommerceIndustryPage() {
  const challenges = [
    "Thousands of product pages to optimize",
    "High competition for product keywords",
    "Complex site architecture and navigation",
    "Duplicate content issues",
    "Poor product descriptions",
    "Slow page load times affecting conversions",
    "Difficulty scaling content creation",
    "Managing seasonal inventory changes"
  ]

  const solutions = [
    {
      title: "AI-Powered Product Optimization",
      description: "Automatically optimize thousands of products with unique, conversion-focused descriptions",
      icon: Package
    },
    {
      title: "Technical E-commerce SEO",
      description: "Fix crawlability, site structure, and speed issues specific to e-commerce platforms",
      icon: Zap
    },
    {
      title: "Category Page Dominance",
      description: "Turn category pages into traffic magnets with strategic optimization",
      icon: Target
    },
    {
      title: "Schema Markup Excellence",
      description: "Rich snippets for products, reviews, prices, and availability",
      icon: Search
    },
    {
      title: "Conversion Rate Optimization",
      description: "SEO that doesn't just drive traffic but actually converts visitors into buyers",
      icon: TrendingUp
    },
    {
      title: "International E-commerce SEO",
      description: "Multi-language and multi-currency optimization for global reach",
      icon: Globe
    }
  ]

  const platforms = [
    { name: "Shopify", expertise: "Shopify Plus Partner", clients: 234 },
    { name: "WooCommerce", expertise: "Custom Development", clients: 156 },
    { name: "BigCommerce", expertise: "Enterprise Solutions", clients: 89 },
    { name: "Magento", expertise: "Technical Optimization", clients: 67 },
    { name: "Custom Platforms", expertise: "API Integration", clients: 45 }
  ]

  const results = [
    { metric: "Average Revenue Increase", value: "+312%", timeframe: "6 months" },
    { metric: "Organic Traffic Growth", value: "+428%", timeframe: "4 months" },
    { metric: "Conversion Rate Improvement", value: "+67%", timeframe: "3 months" },
    { metric: "Average Order Value", value: "+45%", timeframe: "5 months" }
  ]

  const caseStudies = [
    {
      company: "Fashion Boutique",
      platform: "Shopify",
      results: "523% increase in organic revenue",
      testimonial: "GoalSEO transformed our Shopify store from invisible to unstoppable."
    },
    {
      company: "Tech Gadgets Store",
      platform: "WooCommerce",
      results: "12,000+ products optimized, 389% traffic growth",
      testimonial: "Their AI tools handled our massive catalog effortlessly."
    },
    {
      company: "Home Decor Empire",
      platform: "BigCommerce",
      results: "$4.2M additional revenue in 8 months",
      testimonial: "The ROI has been absolutely incredible."
    }
  ]

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-orange-50 via-white to-gray-50 overflow-hidden relative">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-96 h-96 bg-orange-300/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-yellow-300/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
              <ShoppingCart className="h-5 w-5" />
              <span>E-commerce SEO Specialists</span>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              E-commerce SEO That{' '}
              <span className="bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text text-transparent">
                Drives Sales
              </span>
            </h1>
            
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Specialized SEO strategies for online stores. From Shopify to WooCommerce, 
              we've helped 200+ e-commerce brands dominate their markets with AI-powered optimization.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link
                href="/free-audit"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-yellow-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-orange-600 hover:to-yellow-700 transition-all shadow-lg hover:shadow-xl group"
              >
                <ShoppingCart className="h-5 w-5" />
                Get Your E-commerce SEO Audit
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <Link
                href="/case-studies"
                className="inline-flex items-center gap-2 bg-white text-orange-600 border-2 border-orange-200 px-8 py-4 rounded-lg font-semibold hover:bg-orange-50 transition-all"
              >
                <Award className="h-5 w-5" />
                View E-commerce Success Stories
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap justify-center gap-8 text-sm">
              <div className="flex items-center gap-2 text-gray-600">
                <CheckCircle className="h-5 w-5 text-orange-500" />
                <span>200+ E-commerce Clients</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <CheckCircle className="h-5 w-5 text-orange-500" />
                <span>$127M Revenue Generated</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <CheckCircle className="h-5 w-5 text-orange-500" />
                <span>Shopify Plus Partner</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Platform Expertise */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Platform Expertise
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Deep technical knowledge across all major e-commerce platforms
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            {platforms.map((platform, index) => (
              <div key={index} className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-shadow text-center">
                <h3 className="text-lg font-bold text-gray-900 mb-2">{platform.name}</h3>
                <p className="text-sm text-gray-600 mb-3">{platform.expertise}</p>
                <div className="text-2xl font-bold text-orange-600">{platform.clients}</div>
                <div className="text-xs text-gray-500">clients served</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* E-commerce Challenges & Solutions */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              E-commerce SEO Challenges We Solve
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Every online store faces unique challenges. Our AI-powered solutions handle them all.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="bg-red-50 rounded-2xl p-8 border border-red-200">
              <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <span className="text-red-500">⚠️</span> Common E-commerce SEO Problems
              </h3>
              <div className="space-y-4">
                {challenges.map((challenge, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-red-400 rounded-full" />
                    <span className="text-gray-700">{challenge}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-xl font-bold text-gray-900">Our Solutions</h3>
              {solutions.slice(0, 4).map((solution, index) => {
                const Icon = solution.icon
                return (
                  <div key={index} className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-shadow">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 mb-1">{solution.title}</h4>
                        <p className="text-sm text-gray-600">{solution.description}</p>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Our E-commerce SEO Services */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Complete E-commerce SEO Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Everything your online store needs to dominate search results and drive sales
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((service, index) => {
              const Icon = service.icon
              return (
                <div key={index} className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-lg flex items-center justify-center mb-4">
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
      <section className="py-20 bg-gradient-to-r from-orange-500 to-yellow-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              E-commerce Results That Matter
            </h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Our e-commerce clients see dramatic improvements across all key metrics
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {results.map((result, index) => (
              <div key={index} className="bg-white/10 backdrop-blur rounded-xl p-6 text-center">
                <div className="text-3xl font-bold text-white mb-2">{result.value}</div>
                <div className="text-white/90 mb-1">{result.metric}</div>
                <div className="text-sm text-white/70">in {result.timeframe}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mini Case Studies */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              E-commerce Success Stories
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Real results from real e-commerce brands
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <div key={index} className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-2 mb-4">
                  <ShoppingCart className="h-5 w-5 text-orange-500" />
                  <span className="text-sm text-gray-600">{study.platform}</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{study.company}</h3>
                <div className="text-2xl font-bold text-orange-600 mb-4">{study.results}</div>
                <p className="text-gray-600 italic">"{study.testimonial}"</p>
                <Link
                  href="/case-studies"
                  className="inline-flex items-center gap-1 text-orange-600 hover:text-orange-700 text-sm font-medium mt-4"
                >
                  Read Full Story
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Ready to Scale Your E-commerce Revenue?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Get a free e-commerce SEO audit and see exactly how we can help your store grow.
          </p>
          
          <div className="bg-white rounded-xl p-6 mb-8 max-w-2xl mx-auto border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Your Free E-commerce Audit Includes:</h3>
            <div className="grid md:grid-cols-2 gap-3 text-left">
              {[
                "Complete product page analysis",
                "Technical SEO health check",
                "Competitor comparison report",
                "Conversion optimization review",
                "Site speed assessment",
                "Mobile experience audit",
                "Custom growth roadmap",
                "ROI projection calculator"
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-2 text-gray-700">
                  <CheckCircle className="h-4 w-4 text-orange-500 flex-shrink-0" />
                  <span className="text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/free-audit"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-yellow-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-orange-600 hover:to-yellow-700 transition-all shadow-lg group"
            >
              <Sparkles className="h-5 w-5" />
              Get Your Free E-commerce Audit
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-white text-orange-600 border-2 border-orange-200 px-8 py-4 rounded-lg font-semibold hover:bg-orange-50 transition-all"
            >
              Talk to an E-commerce SEO Expert
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}