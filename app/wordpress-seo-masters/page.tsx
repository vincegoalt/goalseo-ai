import { Metadata } from 'next'
import Link from 'next/link'
import { 
  Globe, Code, Shield, Zap, Database, Search,
  CheckCircle, ArrowRight, Sparkles, Award, BarChart3,
  FileCode, Cpu, Package, Settings, TrendingUp, Users
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'WordPress SEO Masters | Beyond Yoast | GoalSEO.ai',
  description: 'Advanced WordPress SEO with AI intelligence. Custom solutions beyond plugins, headless WordPress SEO, WooCommerce optimization, and enterprise-level strategies.',
}

export default function WordPressSEOPage() {
  const expertise = [
    {
      icon: Code,
      title: "Custom Plugin Development",
      description: "Build SEO solutions tailored to your specific needs"
    },
    {
      icon: Database,
      title: "Advanced Schema Implementation",
      description: "Go beyond basic plugins with custom structured data"
    },
    {
      icon: Cpu,
      title: "Headless WordPress SEO",
      description: "Optimize decoupled WordPress architectures"
    },
    {
      icon: Package,
      title: "WooCommerce Optimization",
      description: "E-commerce SEO for WordPress stores"
    },
    {
      icon: Shield,
      title: "Multi-site Management",
      description: "SEO at scale for WordPress networks"
    },
    {
      icon: Zap,
      title: "Core Web Vitals Perfection",
      description: "Achieve perfect performance scores"
    }
  ]

  const services = [
    {
      title: "GEO Setup for WordPress",
      description: "Optimize your WordPress site for AI crawlers",
      features: [
        "Custom schema markup",
        "AI-friendly content structure",
        "Entity optimization",
        "Knowledge graph inclusion"
      ]
    },
    {
      title: "AEO Integration",
      description: "Automated FAQ schema and answer optimization",
      features: [
        "FAQ block optimization",
        "Voice search readiness",
        "Featured snippet targeting",
        "Q&A schema automation"
      ]
    },
    {
      title: "Technical Excellence",
      description: "Custom solutions beyond standard plugins",
      features: [
        "Custom sitemap generation",
        "Advanced canonicalization",
        "JavaScript SEO handling",
        "Database optimization"
      ]
    },
    {
      title: "Performance Optimization",
      description: "Lightning-fast WordPress sites",
      features: [
        "Image optimization automation",
        "Caching strategies",
        "CDN implementation",
        "Code minification"
      ]
    }
  ]

  const problems = [
    "Plugin conflicts affecting SEO",
    "Slow page load times",
    "Duplicate content issues",
    "Poor mobile optimization",
    "Inefficient database queries",
    "Limited customization with plugins"
  ]

  const solutions = [
    "Custom code solutions",
    "Performance optimization",
    "Content architecture planning",
    "Mobile-first development",
    "Database optimization",
    "Tailored SEO strategies"
  ]

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-blue-50 via-white to-gray-50 overflow-hidden relative">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-96 h-96 bg-blue-300/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-indigo-300/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
              <svg className="h-5 w-5" viewBox="0 0 48 48" fill="none">
                <path d="M6 24C6 14.059 14.059 6 24 6C33.941 6 42 14.059 42 24C42 33.941 33.941 42 24 42C14.059 42 6 33.941 6 24Z" fill="#21759B"/>
                <path d="M11.5 24C11.5 30.904 17.096 36.5 24 36.5V11.5C17.096 11.5 11.5 17.096 11.5 24Z" fill="white"/>
                <path d="M24 11.5V36.5C30.904 36.5 36.5 30.904 36.5 24C36.5 17.096 30.904 11.5 24 11.5Z" fill="white" opacity="0.8"/>
              </svg>
              <span>WordPress SEO Experts</span>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              WordPress SEO Masters:{' '}
              <span className="bg-gradient-to-r from-blue-500 to-indigo-500 bg-clip-text text-transparent">
                Beyond Yoast
              </span>
            </h1>
            
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Advanced WordPress SEO that goes beyond plugins. Custom solutions, headless optimization, 
              and enterprise-level strategies powered by AI intelligence.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link
                href="/free-audit"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-600 hover:to-indigo-700 transition-all shadow-lg hover:shadow-xl group"
              >
                <Globe className="h-5 w-5" />
                Get Your Free WordPress SEO Audit
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <Link
                href="/case-studies"
                className="inline-flex items-center gap-2 bg-white text-blue-600 border-2 border-blue-200 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-all"
              >
                <Award className="h-5 w-5" />
                See WordPress Success Stories
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap justify-center gap-8 text-sm">
              <div className="flex items-center gap-2 text-gray-600">
                <CheckCircle className="h-5 w-5 text-blue-500" />
                <span>500+ WordPress Sites Optimized</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <CheckCircle className="h-5 w-5 text-blue-500" />
                <span>Custom Development Expertise</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <CheckCircle className="h-5 w-5 text-blue-500" />
                <span>Enterprise WordPress Experience</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problems vs Solutions */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              We Go Beyond WordPress Plugins
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              While Yoast and RankMath are great starting points, true WordPress SEO excellence requires custom solutions
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="bg-red-50 rounded-2xl p-8 border border-red-200">
              <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <span className="text-red-500">⚠️</span> Common WordPress SEO Problems
              </h3>
              <div className="space-y-4">
                {problems.map((problem, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-red-400 rounded-full" />
                    <span className="text-gray-700">{problem}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-green-50 rounded-2xl p-8 border border-green-200">
              <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <span className="text-green-500">✓</span> Our WordPress Solutions
              </h3>
              <div className="space-y-4">
                {solutions.map((solution, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">{solution}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WordPress Expertise */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our WordPress Expertise
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Deep technical knowledge combined with SEO mastery
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {expertise.map((item, index) => {
              const Icon = item.icon
              return (
                <div key={index} className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* WordPress-Specific Services */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              WordPress-Specific SEO Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Advanced strategies tailored for WordPress architecture
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
                      <CheckCircle className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WordPress Types We Optimize */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Every Type of WordPress Site
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From simple blogs to complex enterprise installations
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Business WordPress",
                icon: Briefcase,
                features: ["Corporate sites", "Service pages", "Lead generation", "Local SEO"]
              },
              {
                title: "WooCommerce",
                icon: ShoppingCart,
                features: ["Product optimization", "Category pages", "Schema markup", "Speed optimization"]
              },
              {
                title: "Enterprise WordPress",
                icon: Building,
                features: ["Multi-site networks", "Custom post types", "API integrations", "Headless setups"]
              },
              {
                title: "Publishing Sites",
                icon: FileText,
                features: ["News sites", "Magazine layouts", "Content hubs", "Author pages"]
              },
              {
                title: "Membership Sites",
                icon: Users,
                features: ["Protected content", "User dashboards", "Course platforms", "Community sites"]
              },
              {
                title: "Custom WordPress",
                icon: Code,
                features: ["Custom themes", "Plugin development", "API endpoints", "Unique architectures"]
              }
            ].map((type, index) => {
              const Icon = type.icon
              return (
                <div key={index} className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-shadow">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                      <Icon className="h-5 w-5 text-blue-600" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900">{type.title}</h3>
                  </div>
                  <ul className="space-y-2">
                    {type.features.map((feature, i) => (
                      <li key={i} className="text-sm text-gray-600 flex items-start gap-2">
                        <span className="text-blue-500 mt-0.5">•</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-500 to-indigo-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Ready to Master WordPress SEO?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Go beyond plugins with custom WordPress SEO solutions that deliver real results.
          </p>
          
          <div className="bg-white/10 backdrop-blur rounded-xl p-6 mb-8 max-w-2xl mx-auto">
            <h3 className="text-lg font-semibold text-white mb-4">Your Free WordPress Audit Includes:</h3>
            <div className="grid md:grid-cols-2 gap-3 text-left">
              {[
                "Technical SEO analysis",
                "Plugin conflict check",
                "Performance audit",
                "Schema review",
                "Mobile optimization",
                "Security assessment",
                "Custom recommendations",
                "90-day roadmap"
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
              <Globe className="h-5 w-5" />
              Get Your Free WordPress Audit
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-blue-600 text-white border-2 border-white/20 px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-all"
            >
              Talk to a WordPress SEO Expert
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

// Add missing imports at the top
import { Briefcase, ShoppingCart, Building, FileText } from 'lucide-react'