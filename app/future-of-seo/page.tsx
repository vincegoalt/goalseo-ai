import { Metadata } from 'next'
import Link from 'next/link'
import { 
  Brain, Search, MessageSquare, TrendingUp, Sparkles,
  Target, Globe, Users, ArrowRight, CheckCircle, Bot,
  Mic, Smartphone, Award, BarChart3, Zap, Shield
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'The Future of SEO: GEO & AEO Mastery | GoalSEO.ai',
  description: 'Master Generative Engine Optimization (GEO) and Answer Engine Optimization (AEO). Position your brand for AI-powered search and zero-click results.',
}

export default function FutureOfSEOPage() {
  const geoStrategies = [
    {
      icon: Brain,
      title: "Training Data Optimization",
      description: "Ensure AI models recognize you as authoritative in your field"
    },
    {
      icon: Search,
      title: "Structured Data Mastery",
      description: "Help AI understand and categorize your content effectively"
    },
    {
      icon: Award,
      title: "Entity SEO",
      description: "Build your brand as a recognized entity in knowledge graphs"
    },
    {
      icon: Target,
      title: "Featured Snippet Dominance",
      description: "AI pulls primarily from featured snippets and structured data"
    },
    {
      icon: Users,
      title: "Citation Building",
      description: "Become a source that AI consistently references and cites"
    }
  ]

  const aeoStrategies = [
    {
      icon: MessageSquare,
      title: "People Also Ask Domination",
      description: "Target and win every relevant question in your niche"
    },
    {
      icon: Target,
      title: "Featured Snippet Optimization",
      description: "Capture position zero with perfectly crafted answers"
    },
    {
      icon: Mic,
      title: "Voice Search Readiness",
      description: "Optimize for natural language and conversational queries"
    },
    {
      icon: Zap,
      title: "Quick Answer Formatting",
      description: "Structure content for direct, scannable responses"
    },
    {
      icon: Shield,
      title: "FAQ Schema Implementation",
      description: "Maximize eligibility for rich results and answer boxes"
    }
  ]

  const geoMetrics = [
    { metric: "ChatGPT Responses", description: "Appearances in ChatGPT answers" },
    { metric: "Google SGE Snapshots", description: "Inclusion in AI-generated summaries" },
    { metric: "Perplexity Citations", description: "References in Perplexity.ai results" },
    { metric: "Bing Chat References", description: "Mentions in Microsoft's AI chat" }
  ]

  const redditStrategies = [
    { title: "Authentic Community Engagement", description: "Build genuine presence without being promotional" },
    { title: "Valuable Contribution Strategies", description: "Provide real value that naturally mentions your brand" },
    { title: "Subreddit Selection Science", description: "Find the perfect communities for your audience" },
    { title: "Reddit-to-Website Funnels", description: "Convert Reddit traffic into customers" },
    { title: "Reddit Ads Integration", description: "Complement organic with paid strategies" }
  ]

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-primary-50 via-white to-gray-50 overflow-hidden relative">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-96 h-96 bg-purple-300/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-300/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-red-100 to-orange-100 text-red-700 px-4 py-2 rounded-full text-sm font-medium mb-4 animate-pulse">
              <Sparkles className="h-4 w-4" />
              <span>The Future is Here</span>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              The Future of SEO:{' '}
              <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
                GEO & AEO Mastery
              </span>
            </h1>
            
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Preparing for the AI-powered search future while dominating zero-click results today. Be first to market with next-generation SEO strategies.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/free-audit"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-primary-500 to-primary-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-primary-600 hover:to-primary-700 transition-all shadow-lg hover:shadow-xl group"
              >
                <Sparkles className="h-5 w-5" />
                Get Your Free GEO/AEO Audit
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <Link
                href="/demo"
                className="inline-flex items-center gap-2 bg-white text-primary-600 border-2 border-primary-200 px-8 py-4 rounded-lg font-semibold hover:bg-primary-50 transition-all"
              >
                See GEO/AEO in Action
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* GEO Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
                <Brain className="h-4 w-4" />
                <span>Generative Engine Optimization</span>
              </div>
              
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                What is GEO?
              </h2>
              
              <p className="text-lg text-gray-600 mb-6">
                As search engines like Google integrate AI (SGE), ChatGPT gains search capabilities, 
                and Perplexity grows, traditional SEO isn't enough. GEO ensures your brand appears 
                in AI-generated responses across all platforms.
              </p>

              <div className="bg-purple-50 border border-purple-200 rounded-xl p-6 mb-6">
                <h3 className="font-bold text-gray-900 mb-3">Why GEO Matters Now:</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">ChatGPT has 100M+ weekly users searching for answers</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Google's SGE is rolling out to all searches</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Perplexity.ai reached 10M monthly active users</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Microsoft Copilot integrates with all Office products</span>
                  </li>
                </ul>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-6">Our GEO Strategy</h3>
              <div className="space-y-4">
                {geoStrategies.map((strategy, index) => {
                  const Icon = strategy.icon
                  return (
                    <div key={index} className="flex gap-4 items-start">
                      <div className="flex-shrink-0">
                        <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                          <Icon className="h-5 w-5 text-white" />
                        </div>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">{strategy.title}</h4>
                        <p className="text-sm text-gray-600">{strategy.description}</p>
                      </div>
                    </div>
                  )
                })}
              </div>

              <div className="mt-8 p-6 bg-gray-50 rounded-xl">
                <h4 className="font-bold text-gray-900 mb-3">GEO Success Metrics</h4>
                <div className="grid grid-cols-2 gap-4">
                  {geoMetrics.map((item, index) => (
                    <div key={index}>
                      <div className="text-sm font-semibold text-primary-600">{item.metric}</div>
                      <div className="text-xs text-gray-600">{item.description}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AEO Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Our AEO Strategy</h3>
              <div className="space-y-4">
                {aeoStrategies.map((strategy, index) => {
                  const Icon = strategy.icon
                  return (
                    <div key={index} className="flex gap-4 items-start">
                      <div className="flex-shrink-0">
                        <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
                          <Icon className="h-5 w-5 text-white" />
                        </div>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">{strategy.title}</h4>
                        <p className="text-sm text-gray-600">{strategy.description}</p>
                      </div>
                    </div>
                  )
                })}
              </div>

              <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-lg border border-gray-200">
                  <div className="text-3xl font-bold text-primary-600">50%</div>
                  <div className="text-sm text-gray-600">of searches end without a click</div>
                </div>
                <div className="bg-white p-4 rounded-lg border border-gray-200">
                  <div className="text-3xl font-bold text-primary-600">70%</div>
                  <div className="text-sm text-gray-600">of smart speaker answers come from snippets</div>
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
                <MessageSquare className="h-4 w-4" />
                <span>Answer Engine Optimization</span>
              </div>
              
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                What is AEO?
              </h2>
              
              <p className="text-lg text-gray-600 mb-6">
                50% of Google searches end without a click. AEO ensures that when users see 
                answers directly in search results, they see YOUR answers. We optimize for 
                featured snippets, People Also Ask boxes, and voice search results.
              </p>

              <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
                <h3 className="font-bold text-gray-900 mb-3">AEO Success Stories:</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <BarChart3 className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="font-semibold text-gray-900">E-commerce Client:</span>
                      <span className="text-gray-700"> Won 67 featured snippets in 90 days</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <BarChart3 className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="font-semibold text-gray-900">SaaS Company:</span>
                      <span className="text-gray-700"> 89% of voice searches return their content</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <BarChart3 className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="font-semibold text-gray-900">Local Business:</span>
                      <span className="text-gray-700"> Dominates "near me" voice searches</span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reddit SEO Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
              <Users className="h-4 w-4" />
              <span>Reddit SEO Strategy</span>
            </div>
            
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Reddit SEO: The Untapped Goldmine
            </h2>
            
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Google now prioritizes Reddit in search results. We help you leverage this shift 
              with authentic engagement strategies that drive real traffic.
            </p>
          </div>

          <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-2xl p-8 border border-orange-200">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Why Reddit Matters Now</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <TrendingUp className="h-5 w-5 text-orange-500 mt-0.5" />
                    <span className="text-gray-700">Reddit traffic to Google increased 190% in 2024</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <TrendingUp className="h-5 w-5 text-orange-500 mt-0.5" />
                    <span className="text-gray-700">Google actively promotes Reddit in search results</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <TrendingUp className="h-5 w-5 text-orange-500 mt-0.5" />
                    <span className="text-gray-700">430M+ monthly active Reddit users</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <TrendingUp className="h-5 w-5 text-orange-500 mt-0.5" />
                    <span className="text-gray-700">Authentic discussions Google trusts</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Our Reddit Strategy</h3>
                <ul className="space-y-2">
                  {redditStrategies.map((strategy, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <div>
                        <span className="font-semibold text-gray-900">{strategy.title}:</span>
                        <span className="text-gray-700 text-sm"> {strategy.description}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Implementation Timeline */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Your Path to Next-Gen SEO
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our proven timeline for implementing GEO, AEO, and Reddit strategies
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { month: "Month 1", title: "Foundation", tasks: ["GEO audit & setup", "AEO opportunity analysis", "Reddit community research"] },
              { month: "Month 2", title: "Implementation", tasks: ["Structured data deployment", "Featured snippet targeting", "Reddit engagement begins"] },
              { month: "Month 3", title: "Optimization", tasks: ["AI citation building", "Voice search optimization", "Community authority building"] },
              { month: "Month 4+", title: "Domination", tasks: ["Appearing in AI responses", "Winning featured snippets", "Reddit traffic flowing"] }
            ].map((phase, index) => (
              <div key={index} className="relative">
                <div className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-shadow">
                  <div className="text-sm font-semibold text-primary-600 mb-2">{phase.month}</div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">{phase.title}</h3>
                  <ul className="space-y-2">
                    {phase.tasks.map((task, i) => (
                      <li key={i} className="text-sm text-gray-600 flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span>{task}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                {index < 3 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                    <ArrowRight className="h-6 w-6 text-gray-400" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-primary-500 to-electric-500 rounded-2xl p-12 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Ready to Future-Proof Your SEO?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Get ahead of the competition with our cutting-edge GEO and AEO strategies. 
              Be first to market while your competitors are still doing traditional SEO.
            </p>
            
            <div className="bg-white/10 backdrop-blur rounded-xl p-6 mb-8 max-w-2xl mx-auto">
              <h3 className="text-lg font-semibold text-white mb-4">Your Free GEO/AEO Audit Includes:</h3>
              <div className="grid md:grid-cols-2 gap-3 text-left">
                {[
                  "GEO readiness assessment",
                  "AEO opportunity analysis",
                  "Reddit SEO potential",
                  "AI visibility check",
                  "Featured snippet gaps",
                  "Voice search optimization",
                  "Competitor AI analysis",
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
                className="inline-flex items-center gap-2 bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all shadow-lg group"
              >
                <Sparkles className="h-5 w-5" />
                Get Your Free GEO/AEO Audit
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-primary-600 text-white border-2 border-white/20 px-8 py-4 rounded-lg font-semibold hover:bg-primary-700 transition-all"
              >
                <MessageSquare className="h-5 w-5" />
                Talk to a GEO Expert
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}