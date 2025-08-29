import { Metadata } from 'next'
import Link from 'next/link'
import { 
  Brain, Users, CheckCircle, Sparkles, Shield, Award,
  BarChart3, Search, Edit3, MessageSquare, TrendingUp,
  Database, Zap, Link2, Activity, Code, Target,
  ArrowRight, Bot, Gauge
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'How We Use AI: Full Transparency | GoalSEO.ai',
  description: 'Learn exactly how GoalSEO.ai combines AI technology with human expertise to deliver superior SEO results. Full transparency on our AI-human workflow.',
}

export default function HowWeUseAIPage() {
  const aiHandles = [
    { icon: BarChart3, title: "Data Analysis", description: "Processing millions of search results" },
    { icon: Search, title: "Pattern Recognition", description: "Identifying ranking opportunities" },
    { icon: Activity, title: "Monitoring", description: "24/7 competitor and ranking tracking" },
    { icon: Code, title: "Technical Audits", description: "Site speed, crawlability, indexation" },
    { icon: Database, title: "Keyword Research", description: "Analyzing search volumes and trends" },
    { icon: TrendingUp, title: "Predictive Analytics", description: "Forecasting algorithm changes" }
  ]

  const humansHandle = [
    { icon: Edit3, title: "Content Creation", description: "Every piece is human-written or edited" },
    { icon: Brain, title: "Strategy", description: "Custom plans based on business goals" },
    { icon: Shield, title: "Quality Control", description: "All AI suggestions reviewed by experts" },
    { icon: Link2, title: "Relationship Building", description: "Real outreach for link building" },
    { icon: MessageSquare, title: "Client Communication", description: "Personal account management" },
    { icon: Sparkles, title: "Creative Campaigns", description: "Unique angles AI can't conceive" }
  ]

  const contentProcess = [
    { step: 1, title: "AI analyzes top-ranking content", description: "Identifies patterns, gaps, and opportunities" },
    { step: 2, title: "Human expert creates outline", description: "Structures content for maximum impact" },
    { step: 3, title: "Writer crafts original content", description: "Creates unique, valuable content" },
    { step: 4, title: "AI checks optimization", description: "Ensures technical SEO perfection" },
    { step: 5, title: "Human editor ensures quality", description: "Refines for readability and accuracy" },
    { step: 6, title: "Expert adds E-E-A-T signals", description: "Incorporates expertise and authority" },
    { step: 7, title: "Final human review before publishing", description: "Quality assurance and brand alignment" }
  ]

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-primary-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full text-sm font-medium mb-4 border border-gray-200">
              <Shield className="h-4 w-4 text-green-500" />
              <span className="text-gray-700">Full Transparency</span>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              How We Use AI: Full Transparency
            </h1>
            
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              AI is our tool, not our replacement. Here's exactly how we blend technology with expertise.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/free-audit"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-primary-500 to-primary-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-primary-600 hover:to-primary-700 transition-all shadow-lg hover:shadow-xl"
              >
                <Sparkles className="h-5 w-5" />
                Get Your Free AI + Human Audit
                <ArrowRight className="h-5 w-5" />
              </Link>
              
              <Link
                href="/team"
                className="inline-flex items-center gap-2 bg-white text-primary-600 border-2 border-primary-200 px-8 py-4 rounded-lg font-semibold hover:bg-primary-50 transition-all"
              >
                <Users className="h-5 w-5" />
                Meet Our Human Experts
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* AI vs Human Tasks */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* What AI Handles */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-100">
              <div className="flex items-center gap-3 mb-8">
                <div className="p-3 bg-blue-500 rounded-xl">
                  <Bot className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">What AI Handles</h2>
              </div>
              
              <div className="space-y-6">
                {aiHandles.map((item, index) => {
                  const Icon = item.icon
                  return (
                    <div key={index} className="flex gap-4">
                      <div className="flex-shrink-0">
                        <div className="p-2 bg-white rounded-lg">
                          <Icon className="h-5 w-5 text-blue-600" />
                        </div>
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-1">{item.title}</h3>
                        <p className="text-gray-600">{item.description}</p>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* What Humans Handle */}
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 border border-green-100">
              <div className="flex items-center gap-3 mb-8">
                <div className="p-3 bg-green-500 rounded-xl">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">What Humans Handle</h2>
              </div>
              
              <div className="space-y-6">
                {humansHandle.map((item, index) => {
                  const Icon = item.icon
                  return (
                    <div key={index} className="flex gap-4">
                      <div className="flex-shrink-0">
                        <div className="p-2 bg-white rounded-lg">
                          <Icon className="h-5 w-5 text-green-600" />
                        </div>
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-1">{item.title}</h3>
                        <p className="text-gray-600">{item.description}</p>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Process */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Content Process
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Every piece of content goes through our rigorous 7-step process combining AI efficiency with human excellence.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {contentProcess.map((item) => (
              <div key={item.step} className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 bg-gradient-to-r from-primary-500 to-electric-500 rounded-full flex items-center justify-center text-white font-bold">
                      {item.step}
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-sm text-gray-600">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Google's Stance */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-primary-50 to-electric-50 rounded-2xl p-12 border border-primary-100">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full text-sm font-medium mb-6 border border-gray-200">
                <svg className="h-5 w-5" viewBox="0 0 48 48" fill="none">
                  <path d="M44.5 24.5C44.5 23.04 44.38 21.64 44.16 20.28H24V28.28H35.22C34.71 30.92 33.21 33.13 30.98 34.57V40.08H38.01C42.17 36.28 44.5 30.78 44.5 24.5Z" fill="#4285F4"/>
                  <path d="M24 45.5C30.15 45.5 35.3 43.52 38.01 40.08L30.98 34.57C28.99 35.97 26.42 36.82 24 36.82C18.06 36.82 12.99 33.02 11.36 27.83H4.08V33.54C7.66 40.63 15.29 45.5 24 45.5Z" fill="#34A853"/>
                  <path d="M11.36 27.83C10.85 26.43 10.56 24.92 10.56 23.37C10.56 21.82 10.85 20.31 11.36 18.91V13.2H4.08C2.31 16.71 1.5 20.86 1.5 24C1.5 28.14 2.31 32.29 4.08 35.8L11.36 27.83Z" fill="#FBBC04"/>
                  <path d="M24 10.18C26.69 10.18 29.09 11.06 31.02 12.77L38.17 5.62C35.29 2.97 30.14 0.5 24 0.5C15.29 0.5 7.66 5.37 4.08 12.46L11.36 18.91C12.99 13.72 18.06 10.18 24 10.18Z" fill="#EA4335"/>
                </svg>
                <span className="text-gray-700">Google's Official Stance</span>
              </div>
              
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Google's Stance on AI Content
              </h2>
              
              <blockquote className="text-lg text-gray-700 italic mb-6">
                "Our focus is on the quality of content, rather than how content is produced. We've long had helpful content systems to reward content that provides a satisfying experience, while our spam-fighting systems work to ensure we're not rewarding content made with the primary purpose of gaming search rankings."
              </blockquote>
              
              <p className="text-sm text-gray-600">
                — Google Search Central Documentation
              </p>
              
              <div className="mt-8 grid md:grid-cols-3 gap-4">
                <div className="bg-white rounded-lg p-4 border border-gray-200">
                  <CheckCircle className="h-5 w-5 text-green-500 mb-2" />
                  <h4 className="font-semibold text-gray-900 mb-1">Quality Matters</h4>
                  <p className="text-sm text-gray-600">Not the production method</p>
                </div>
                <div className="bg-white rounded-lg p-4 border border-gray-200">
                  <CheckCircle className="h-5 w-5 text-green-500 mb-2" />
                  <h4 className="font-semibold text-gray-900 mb-1">E-E-A-T Focus</h4>
                  <p className="text-sm text-gray-600">Experience, Expertise, Authority, Trust</p>
                </div>
                <div className="bg-white rounded-lg p-4 border border-gray-200">
                  <CheckCircle className="h-5 w-5 text-green-500 mb-2" />
                  <h4 className="font-semibold text-gray-900 mb-1">User Value</h4>
                  <p className="text-sm text-gray-600">Content must help users</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Study */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Case Study: AI + Human Success
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              How our combination outperformed pure AI and pure human approaches
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="grid lg:grid-cols-3">
              {/* Pure AI Approach */}
              <div className="p-8 border-b lg:border-b-0 lg:border-r border-gray-200">
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-100 rounded-full mb-4">
                    <Bot className="h-8 w-8 text-gray-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Pure AI Approach</h3>
                  <div className="space-y-3 text-left">
                    <div className="flex items-center gap-2">
                      <span className="text-red-500">✗</span>
                      <span className="text-gray-600">Generic content</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-red-500">✗</span>
                      <span className="text-gray-600">No brand voice</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-red-500">✗</span>
                      <span className="text-gray-600">Poor link building</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-red-500">✗</span>
                      <span className="text-gray-600">Limited strategy</span>
                    </div>
                  </div>
                  <div className="mt-6 pt-6 border-t border-gray-200">
                    <div className="text-3xl font-bold text-red-600">+47%</div>
                    <div className="text-sm text-gray-600">Traffic increase</div>
                  </div>
                </div>
              </div>

              {/* Pure Human Approach */}
              <div className="p-8 border-b lg:border-b-0 lg:border-r border-gray-200">
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-100 rounded-full mb-4">
                    <Users className="h-8 w-8 text-gray-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Pure Human Approach</h3>
                  <div className="space-y-3 text-left">
                    <div className="flex items-center gap-2">
                      <span className="text-yellow-500">⚬</span>
                      <span className="text-gray-600">Slow production</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-yellow-500">⚬</span>
                      <span className="text-gray-600">High costs</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-yellow-500">⚬</span>
                      <span className="text-gray-600">Limited analysis</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-yellow-500">⚬</span>
                      <span className="text-gray-600">Manual tracking</span>
                    </div>
                  </div>
                  <div className="mt-6 pt-6 border-t border-gray-200">
                    <div className="text-3xl font-bold text-yellow-600">+112%</div>
                    <div className="text-sm text-gray-600">Traffic increase</div>
                  </div>
                </div>
              </div>

              {/* Our AI + Human Approach */}
              <div className="p-8 bg-gradient-to-br from-primary-50 to-electric-50">
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-primary-500 to-electric-500 rounded-full mb-4">
                    <Sparkles className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Our AI + Human Approach</h3>
                  <div className="space-y-3 text-left">
                    <div className="flex items-center gap-2">
                      <span className="text-green-500">✓</span>
                      <span className="text-gray-600">Fast & quality</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-green-500">✓</span>
                      <span className="text-gray-600">Brand aligned</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-green-500">✓</span>
                      <span className="text-gray-600">Strategic links</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-green-500">✓</span>
                      <span className="text-gray-600">24/7 optimization</span>
                    </div>
                  </div>
                  <div className="mt-6 pt-6 border-t border-primary-200">
                    <div className="text-3xl font-bold text-green-600">+387%</div>
                    <div className="text-sm text-gray-600">Traffic increase</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-primary-500 to-electric-500 rounded-2xl p-12 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Ready for AI-Enhanced SEO with Human Excellence?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Experience the perfect blend of AI efficiency and human expertise. Get your free audit today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/free-audit"
                className="inline-flex items-center gap-2 bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all shadow-lg"
              >
                <Sparkles className="h-5 w-5" />
                Get Your Free Audit
                <ArrowRight className="h-5 w-5" />
              </Link>
              
              <Link
                href="/demo"
                className="inline-flex items-center gap-2 bg-primary-600 text-white border-2 border-white/20 px-8 py-4 rounded-lg font-semibold hover:bg-primary-700 transition-all"
              >
                <Activity className="h-5 w-5" />
                Watch Live Demo
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}