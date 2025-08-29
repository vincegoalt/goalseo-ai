import { Metadata } from 'next'
import Link from 'next/link'
import { 
  Cloud, Rocket, Users, Target, TrendingUp, Globe,
  CheckCircle, ArrowRight, BarChart3, Zap, Shield, Award,
  Star, Code, Database, Cpu, Sparkles, Brain
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'SaaS SEO Services | B2B & B2C Software Marketing | GoalSEO.ai',
  description: 'Specialized SEO for SaaS companies. Drive qualified trials, reduce CAC, and dominate your software category with AI-powered SEO strategies.',
}

export default function SaaSIndustryPage() {
  const challenges = [
    "Competing against established market leaders",
    "High customer acquisition costs (CAC)",
    "Complex buyer journeys and long sales cycles",
    "Technical jargon that's hard to rank for",
    "Limited brand awareness",
    "Difficulty producing technical content at scale",
    "Low organic traffic compared to paid",
    "Poor conversion from traffic to trials"
  ]

  const solutions = [
    {
      title: "Competitor Gap Analysis",
      description: "Find and dominate keywords your competitors are missing",
      icon: Target
    },
    {
      title: "Product-Led SEO",
      description: "Create content that drives product signups, not just traffic",
      icon: Rocket
    },
    {
      title: "Technical Content Authority",
      description: "Build thought leadership with AI-enhanced technical content",
      icon: Brain
    },
    {
      title: "Feature & Comparison Pages",
      description: "Dominate high-intent comparison and alternative searches",
      icon: BarChart3
    },
    {
      title: "Developer Documentation SEO",
      description: "Optimize API docs and technical resources for search",
      icon: Code
    },
    {
      title: "Free Tool SEO Strategy",
      description: "Create viral free tools that drive backlinks and trials",
      icon: Zap
    }
  ]

  const metrics = [
    { label: "Average Trial Increase", value: "+234%", icon: Users },
    { label: "CAC Reduction", value: "-67%", icon: TrendingUp },
    { label: "Organic Traffic Growth", value: "+456%", icon: BarChart3 },
    { label: "Demo Requests", value: "+189%", icon: Rocket }
  ]

  const successStories = [
    {
      company: "CloudFlow Analytics",
      category: "Data Analytics",
      results: "+567% organic trials in 6 months",
      testimonial: "GoalSEO helped us compete with companies 10x our size."
    },
    {
      company: "SecureVault Pro",
      category: "Cybersecurity",
      results: "From 0 to 10,000 organic visitors/month",
      testimonial: "Their technical content strategy was game-changing."
    },
    {
      company: "TeamSync Platform",
      category: "Project Management",
      results: "$2.4M ARR from organic channel",
      testimonial: "Best marketing investment we've ever made."
    }
  ]

  const contentTypes = [
    "Product comparison pages",
    "Alternative to [competitor] pages",
    "Use case content",
    "Integration pages",
    "Feature deep-dives",
    "Industry-specific solutions",
    "ROI calculators",
    "Free tool pages"
  ]

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-blue-50 via-white to-gray-50 overflow-hidden relative">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-96 h-96 bg-blue-300/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-300/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
              <Cloud className="h-5 w-5" />
              <span>SaaS SEO Specialists</span>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              SaaS SEO That{' '}
              <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                Drives Trials
              </span>
            </h1>
            
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Specialized SEO strategies for B2B and B2C SaaS companies. Reduce CAC, 
              increase trials, and dominate your category with AI-powered optimization.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link
                href="/free-audit"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all shadow-lg hover:shadow-xl group"
              >
                <Rocket className="h-5 w-5" />
                Get Your SaaS SEO Audit
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <Link
                href="/case-studies"
                className="inline-flex items-center gap-2 bg-white text-blue-600 border-2 border-blue-200 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-all"
              >
                <Award className="h-5 w-5" />
                View SaaS Success Stories
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap justify-center gap-8 text-sm">
              <div className="flex items-center gap-2 text-gray-600">
                <CheckCircle className="h-5 w-5 text-blue-500" />
                <span>89 SaaS Clients</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <CheckCircle className="h-5 w-5 text-blue-500" />
                <span>$47M ARR Generated</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <CheckCircle className="h-5 w-5 text-blue-500" />
                <span>-67% Average CAC Reduction</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Metrics */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              SaaS SEO Results That Matter
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We focus on metrics that directly impact your MRR and growth
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {metrics.map((metric, index) => {
              const Icon = metric.icon
              return (
                <div key={index} className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-shadow text-center">
                  <Icon className="h-8 w-8 text-blue-500 mb-3 mx-auto" />
                  <div className="text-3xl font-bold text-gray-900 mb-2">{metric.value}</div>
                  <div className="text-sm text-gray-600">{metric.label}</div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* SaaS Challenges & Solutions */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              SaaS Marketing Challenges We Solve
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Every SaaS company faces unique growth challenges. We've solved them all.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="bg-red-50 rounded-2xl p-8 border border-red-200">
              <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <span className="text-red-500">⚠️</span> Common SaaS SEO Problems
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
                      <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 mb-1">{solution.title}</h4>
                        <p className="text-sm text-gray-600">{solution.description}</p>
                      </div>
                    </div>
                  </div>
                )
              }}}
            </div>
          </div>
        </div>
      </section>

      {/* Content Strategy */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              SaaS Content That Converts
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Strategic content types proven to drive trials and demos
            </p>
          </div>

          <div className="bg-gradient-to-r from-blue-500 to-purple-500 rounded-3xl p-8 lg:p-12 text-white">
            <div className="grid lg:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold mb-6">High-Converting Content Types</h3>
                <div className="space-y-3">
                  {contentTypes.map((type, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-white/80 flex-shrink-0" />
                      <span>{type}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-6">Our Content Process</h3>
                <div className="space-y-4">
                  <div className="bg-white/10 backdrop-blur rounded-lg p-4">
                    <div className="font-semibold mb-1">1. Keyword Research</div>
                    <div className="text-sm text-white/80">Find high-intent, low-competition opportunities</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur rounded-lg p-4">
                    <div className="font-semibold mb-1">2. AI Content Creation</div>
                    <div className="text-sm text-white/80">Generate technical content at scale</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur rounded-lg p-4">
                    <div className="font-semibold mb-1">3. Expert Review</div>
                    <div className="text-sm text-white/80">Technical accuracy and brand voice</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur rounded-lg p-4">
                    <div className="font-semibold mb-1">4. Conversion Optimization</div>
                    <div className="text-sm text-white/80">CTAs and trial funnels that convert</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              SaaS Success Stories
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Real results from real SaaS companies
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {successStories.map((story, index) => (
              <div key={index} className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-2 mb-4">
                  <Cloud className="h-5 w-5 text-blue-500" />
                  <span className="text-sm text-gray-600">{story.category}</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{story.company}</h3>
                <div className="text-2xl font-bold text-blue-600 mb-4">{story.results}</div>
                <p className="text-gray-600 italic">"{story.testimonial}"</p>
                <Link
                  href="/case-studies"
                  className="inline-flex items-center gap-1 text-blue-600 hover:text-blue-700 text-sm font-medium mt-4"
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
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Ready to Reduce CAC and Scale Your SaaS?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Get a free SaaS SEO audit and discover your growth opportunities.
          </p>
          
          <div className="bg-gray-50 rounded-xl p-6 mb-8 max-w-2xl mx-auto border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Your Free SaaS Audit Includes:</h3>
            <div className="grid md:grid-cols-2 gap-3 text-left">
              {[
                "Competitor keyword analysis",
                "Content gap assessment",
                "Technical SEO audit",
                "Conversion funnel review",
                "Link profile analysis",
                "Product page optimization",
                "Trial conversion analysis",
                "90-day growth roadmap"
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-2 text-gray-700">
                  <CheckCircle className="h-4 w-4 text-blue-500 flex-shrink-0" />
                  <span className="text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/free-audit"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all shadow-lg group"
            >
              <Sparkles className="h-5 w-5" />
              Get Your Free SaaS Audit
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-white text-blue-600 border-2 border-blue-200 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-all"
            >
              Talk to a SaaS SEO Expert
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}