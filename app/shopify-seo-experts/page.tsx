import { Metadata } from 'next'
import Link from 'next/link'
import { 
  ShoppingCart, TrendingUp, Globe, Search, Code, Zap,
  CheckCircle, ArrowRight, Sparkles, Award, BarChart3,
  Package, CreditCard, Truck, Store, Shield, Users
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Shopify SEO Experts | AI-Enhanced E-commerce SEO | GoalSEO.ai',
  description: 'Shopify Plus Partners using AI to scale your store\'s SEO. Specializing in technical SEO, GEO for e-commerce, and product optimization at scale.',
}

export default function ShopifySEOPage() {
  const expertise = [
    {
      icon: Code,
      title: "Technical SEO for Shopify's Limitations",
      description: "Work around Shopify's platform constraints with expert solutions"
    },
    {
      icon: Package,
      title: "Product Page Optimization at Scale",
      description: "Optimize thousands of products efficiently with AI assistance"
    },
    {
      icon: Store,
      title: "Collection Page Strategies",
      description: "Dominate category searches with optimized collection pages"
    },
    {
      icon: Zap,
      title: "App Integration for SEO",
      description: "Select and optimize the right apps without hurting performance"
    },
    {
      icon: TrendingUp,
      title: "Page Speed Optimization",
      description: "Achieve lightning-fast load times despite theme limitations"
    },
    {
      icon: Globe,
      title: "Structured Data Implementation",
      description: "Rich snippets for products, reviews, and availability"
    }
  ]

  const services = [
    {
      title: "GEO for E-commerce",
      description: "Optimize for Google Shopping Graph and AI recommendations",
      features: [
        "Product entity optimization",
        "AI-friendly product descriptions",
        "Shopping Graph inclusion",
        "Voice commerce optimization"
      ]
    },
    {
      title: "AEO for Products",
      description: "Win featured snippets and shopping answers",
      features: [
        "Product comparison snippets",
        "FAQ schema for products",
        '"Best of" list optimization',
        "Review snippet optimization"
      ]
    },
    {
      title: "Reddit Strategy",
      description: "Tap into r/Shopify and niche communities",
      features: [
        "Product recommendation threads",
        "Community engagement",
        "User-generated content",
        "Authentic brand building"
      ]
    },
    {
      title: "AI Product Descriptions",
      description: "Unique, optimized descriptions at scale",
      features: [
        "Bulk description generation",
        "SEO-optimized content",
        "Brand voice consistency",
        "Conversion-focused copy"
      ]
    }
  ]

  const caseStudies = [
    {
      industry: "Fashion Retailer",
      results: [
        "400% increase in organic traffic",
        "287% increase in organic revenue",
        "#1 rankings for 500+ products",
        "65% reduction in CAC"
      ]
    },
    {
      industry: "Beauty Brand",
      results: [
        "350% growth in 6 months",
        "Featured snippets for 80+ queries",
        "50% increase in conversion rate",
        "3x ROAS improvement"
      ]
    },
    {
      industry: "Home Goods Store",
      results: [
        "500+ #1 rankings achieved",
        "420% increase in organic sales",
        "Reduced PPC spend by 60%",
        "2.5x increase in AOV"
      ]
    }
  ]

  const problems = [
    "Limited URL structure control",
    "Duplicate content issues",
    "Slow page load times",
    "Poor crawlability",
    "Limited technical SEO options",
    "App conflicts and bloat"
  ]

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-green-50 via-white to-gray-50 overflow-hidden relative">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-96 h-96 bg-green-300/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-emerald-300/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
              <svg className="h-5 w-5" viewBox="0 0 48 48" fill="none">
                <path d="M40.6 11.9C40.6 11.7 40.4 11.6 40.3 11.6C40.2 11.6 37.5 11.5 37.5 11.5C37.5 11.5 35.2 9.3 35 9.1C34.8 8.9 34.4 9 34.2 9.1C34.2 9.1 33.7 9.2 32.9 9.5C32.7 8.7 32.3 7.8 31.7 7C30.3 4.7 28.3 3.5 26 3.5C25.8 3.5 25.6 3.5 25.4 3.5C25.3 3.3 25.1 3.2 25 3C24 2.1 22.7 1.7 21.3 1.7C16.8 1.7 14.6 7.3 13.9 10.2C11.8 10.8 10.3 11.3 10.1 11.3C9.2 11.6 9.2 11.6 9 12.5C8.9 13.2 6 38.5 6 38.5L32.4 43.5L44 40.9C44 40.9 40.6 12.1 40.6 11.9ZM31.5 10C30.5 10.3 29.4 10.6 28.2 11C28.2 10.8 28.2 10.6 28.2 10.3C28.2 8.6 28 7.2 27.6 6.1C29.7 6.4 30.8 8.7 31.5 10ZM26 6.2C26.5 7.3 26.7 8.8 26.7 10.6C26.7 10.8 26.7 10.9 26.7 11.1C24.4 11.7 21.9 12.4 19.5 13.1C20.3 10.5 22.2 7.1 26 6.2ZM21.5 3.2C22.1 3.2 22.6 3.4 23.1 3.7C18.8 5.6 16.5 10.8 15.8 13.8C13.8 14.4 12 14.9 10.3 15.4C11.3 12.1 14.1 3.2 21.5 3.2Z" fill="#5E8E3E"/>
              </svg>
              <span>Shopify Plus Partners</span>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              Shopify SEO Experts:{' '}
              <span className="bg-gradient-to-r from-green-500 to-emerald-500 bg-clip-text text-transparent">
                AI-Enhanced, Human-Perfected
              </span>
            </h1>
            
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Long Beach's Premier Shopify SEO Agency. We've helped 200+ Shopify stores dominate search results 
              with our AI-powered approach and deep platform expertise.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link
                href="/free-audit"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-green-500 to-emerald-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-green-600 hover:to-emerald-700 transition-all shadow-lg hover:shadow-xl group"
              >
                <ShoppingCart className="h-5 w-5" />
                Get Your Free Shopify SEO Audit
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <Link
                href="/case-studies"
                className="inline-flex items-center gap-2 bg-white text-green-600 border-2 border-green-200 px-8 py-4 rounded-lg font-semibold hover:bg-green-50 transition-all"
              >
                <Award className="h-5 w-5" />
                See Shopify Success Stories
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap justify-center gap-8 text-sm">
              <div className="flex items-center gap-2 text-gray-600">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <span>200+ Shopify Stores Optimized</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <span>Shopify Plus Certified</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <span>400% Average Traffic Increase</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <span>Long Beach Based</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problems We Solve */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              We Solve Shopify's SEO Challenges
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Shopify is great for e-commerce, but it has SEO limitations. We know how to work around them.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-6">Common Shopify SEO Problems</h3>
              <div className="space-y-4">
                {problems.map((problem, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-red-600 font-bold text-sm">✗</span>
                    </div>
                    <span className="text-gray-700">{problem}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-6">Our Shopify Expertise</h3>
              <div className="space-y-4">
                {expertise.slice(0, 6).map((item, index) => {
                  const Icon = item.icon
                  return (
                    <div key={index} className="flex gap-4">
                      <div className="flex-shrink-0">
                        <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center">
                          <Icon className="h-5 w-5 text-white" />
                        </div>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">{item.title}</h4>
                        <p className="text-sm text-gray-600">{item.description}</p>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Shopify-Specific Services */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Shopify-Specific SEO Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Cutting-edge strategies designed specifically for Shopify stores
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-xl p-8 border border-gray-200 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-3">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Shopify SEO Success Stories
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Real results from real Shopify stores we've helped dominate search
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <div key={index} className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-8 border border-green-200">
                <div className="text-center mb-6">
                  <Store className="h-12 w-12 text-green-600 mx-auto mb-3" />
                  <h3 className="text-xl font-bold text-gray-900">{study.industry}</h3>
                </div>
                <ul className="space-y-3">
                  {study.results.map((result, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <TrendingUp className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 font-semibold">{result}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/case-studies"
                  className="inline-flex items-center gap-1 text-green-600 font-semibold mt-6 hover:text-green-700"
                >
                  View Full Case Study
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Shopify SEO Process
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A proven approach that delivers results for Shopify stores
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: 1, title: "Shopify Audit", desc: "Complete technical and content audit", icon: Search },
              { step: 2, title: "Strategy", desc: "Custom plan for your products and market", icon: BarChart3 },
              { step: 3, title: "Implementation", desc: "Technical fixes and content optimization", icon: Code },
              { step: 4, title: "Scale & Monitor", desc: "AI-powered monitoring and optimization", icon: TrendingUp }
            ].map((item, index) => (
              <div key={index} className="relative">
                <div className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-shadow">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center text-white font-bold">
                      {item.step}
                    </div>
                    <item.icon className="h-6 w-6 text-green-600" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </div>
                {index < 3 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2">
                    <ArrowRight className="h-6 w-6 text-gray-400" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Why Choose GoalSEO for Shopify?
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Shopify Plus Partners</h3>
              <p className="text-gray-600">
                Official partners with deep platform knowledge and exclusive insights
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">200+ Stores Optimized</h3>
              <p className="text-gray-600">
                Proven track record with stores of all sizes and industries
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Sparkles className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">AI + Human Expertise</h3>
              <p className="text-gray-600">
                Scale your SEO with AI while maintaining quality with human oversight
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-500 to-emerald-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Ready to Dominate Shopify Search?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Get your free Shopify SEO audit and discover how we can transform your organic traffic and sales.
          </p>
          
          <div className="bg-white/10 backdrop-blur rounded-xl p-6 mb-8 max-w-2xl mx-auto">
            <h3 className="text-lg font-semibold text-white mb-4">Your Free Audit Includes:</h3>
            <div className="grid md:grid-cols-2 gap-3 text-left">
              {[
                "Technical SEO analysis",
                "Product page optimization",
                "Site speed assessment",
                "Competitor analysis",
                "Content gap analysis",
                "GEO/AEO opportunities",
                "90-day action plan",
                "ROI projection"
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
              className="inline-flex items-center gap-2 bg-white text-green-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all shadow-lg group"
            >
              <ShoppingCart className="h-5 w-5" />
              Get Your Free Shopify Audit
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-green-600 text-white border-2 border-white/20 px-8 py-4 rounded-lg font-semibold hover:bg-green-700 transition-all"
            >
              Talk to a Shopify SEO Expert
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}