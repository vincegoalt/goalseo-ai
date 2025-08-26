"use client"

import { motion } from 'framer-motion'
import Link from 'next/link'
import { 
  Target, Gauge, Brain, TrendingUp, Clock, AlertCircle,
  CheckCircle, ArrowRight, BarChart3, Users, Shield,
  Zap, Activity, Globe, Search, FileText, DollarSign
} from 'lucide-react'

const problems = [
  {
    id: 'no-traffic',
    icon: Target,
    title: 'No Organic Traffic',
    subtitle: "Invisible in Search Results?",
    description: "Your competitors are stealing your customers because they rank and you don't",
    symptoms: [
      'Page 3+ rankings for important keywords',
      'Less than 100 organic visitors per month',
      'Competitors outranking you everywhere',
      'Zero visibility for product searches'
    ],
    solution: {
      title: 'AI-Powered Visibility Boost',
      description: 'Our AI analyzes your entire catalog and creates an optimization strategy that gets you ranking in 30 days.',
      features: [
        'Complete product catalog rewrite',
        'Strategic keyword targeting',
        'Technical SEO fixes',
        'Competitor gap analysis'
      ],
      results: [
        { metric: '387%', label: 'Average traffic increase' },
        { metric: '47', label: 'Days to page 1' },
        { metric: '12x', label: 'ROI in 6 months' }
      ]
    }
  },
  {
    id: 'no-time',
    icon: Clock,
    title: 'No Time for SEO',
    subtitle: "Too Busy Running Your Business?",
    description: "You know SEO is important but you're already working 60+ hours a week",
    symptoms: [
      'Haven\'t updated meta tags in months',
      'Blog gathering dust',
      'No time for keyword research',
      'Can\'t keep up with Google updates'
    ],
    solution: {
      title: '24/7 Automated SEO Team',
      description: 'Set it once and let AI handle everything. Like having a full SEO team that never sleeps.',
      features: [
        'Fully automated optimization',
        'Self-updating content',
        'Auto-publishes blog posts',
        'Handles all technical SEO'
      ],
      results: [
        { metric: '0', label: 'Hours needed from you' },
        { metric: '24/7', label: 'Always optimizing' },
        { metric: '$60k', label: 'Saved vs agency' }
      ]
    }
  },
  {
    id: 'dont-know-seo',
    icon: Brain,
    title: "Don't Know SEO",
    subtitle: "SEO Feels Like Rocket Science?",
    description: "You're an expert at your business, not search algorithms",
    symptoms: [
      'Don\'t know what keywords to target',
      'Confused by technical SEO',
      'Not sure if you\'re doing it right',
      'Overwhelmed by conflicting advice'
    ],
    solution: {
      title: 'AI Does Everything For You',
      description: 'No SEO knowledge needed. Our AI handles everything automatically based on proven strategies.',
      features: [
        'AI picks perfect keywords',
        'Writes all content for you',
        'Fixes technical issues',
        'Explains everything simply'
      ],
      results: [
        { metric: 'Zero', label: 'SEO knowledge needed' },
        { metric: '10min', label: 'Setup time' },
        { metric: '50,000+', label: 'Rankings improved' }
      ]
    }
  }
]

const comparison = [
  {
    category: 'Traditional SEO Agency',
    items: [
      { feature: 'Monthly cost', value: '$5,000-15,000', negative: true },
      { feature: 'Setup time', value: '3-6 months', negative: true },
      { feature: 'Results timeline', value: '6-12 months', negative: true },
      { feature: 'Reporting', value: 'Monthly calls', negative: true },
      { feature: 'Availability', value: 'Business hours', negative: true },
      { feature: 'Scalability', value: 'Limited by team size', negative: true }
    ]
  },
  {
    category: 'GoalSEO AI',
    items: [
      { feature: 'Monthly cost', value: '$299-799', positive: true },
      { feature: 'Setup time', value: '10 minutes', positive: true },
      { feature: 'Results timeline', value: '30 days', positive: true },
      { feature: 'Reporting', value: 'Real-time dashboard', positive: true },
      { feature: 'Availability', value: '24/7 automation', positive: true },
      { feature: 'Scalability', value: 'Unlimited products', positive: true }
    ]
  }
]

export default function SolutionsPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Your SEO Problems,{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-electric-500">
                Solved by AI
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Whatever's holding you back from dominating search results, 
              our AI has the solution. No expertise needed, no time required.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Problems & Solutions */}
      {problems.map((problem, index) => {
        const Icon = problem.icon
        return (
          <section
            key={problem.id}
            id={problem.id}
            className={`py-20 ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Problem Side */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}
                >
                  <div className="inline-flex items-center gap-2 bg-red-100 text-red-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
                    <AlertCircle className="h-4 w-4" />
                    The Problem
                  </div>
                  
                  <h2 className="text-4xl font-bold text-gray-900 mb-2">
                    {problem.title}
                  </h2>
                  <p className="text-xl text-gray-600 mb-4">
                    {problem.subtitle}
                  </p>
                  <p className="text-lg text-gray-700 mb-6">
                    {problem.description}
                  </p>

                  <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                    <h3 className="font-semibold text-gray-900 mb-4">
                      Sound Familiar?
                    </h3>
                    <ul className="space-y-3">
                      {problem.symptoms.map((symptom, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 bg-red-400 rounded-full mt-2" />
                          <span className="text-gray-700">{symptom}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>

                {/* Solution Side */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}
                >
                  <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
                    <CheckCircle className="h-4 w-4" />
                    The Solution
                  </div>
                  
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">
                    {problem.solution.title}
                  </h3>
                  <p className="text-lg text-gray-600 mb-6">
                    {problem.solution.description}
                  </p>

                  <div className="bg-gradient-to-br from-primary-50 to-electric-50 rounded-lg p-6 mb-6">
                    <h4 className="font-semibold text-gray-900 mb-4">
                      What You Get:
                    </h4>
                    <ul className="space-y-3">
                      {problem.solution.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <CheckCircle className="h-5 w-5 text-primary-500 mt-0.5" />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Results */}
                  <div className="grid grid-cols-3 gap-4">
                    {problem.solution.results.map((result, i) => (
                      <div key={i} className="text-center">
                        <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-electric-500">
                          {result.metric}
                        </div>
                        <div className="text-sm text-gray-600">{result.label}</div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </div>
          </section>
        )
      })}

      {/* Comparison Section */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why AI Beats Traditional SEO
            </h2>
            <p className="text-xl text-gray-600">
              See why businesses are switching from expensive agencies to AI-powered SEO
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {comparison.map((option, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`rounded-xl p-6 ${
                  index === 0 
                    ? 'bg-gray-100 border-2 border-gray-300' 
                    : 'bg-gradient-to-br from-primary-50 to-electric-50 border-2 border-primary-300'
                }`}
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  {option.category}
                </h3>
                <ul className="space-y-4">
                  {option.items.map((item, i) => (
                    <li key={i} className="flex justify-between items-center">
                      <span className="text-gray-600">{item.feature}</span>
                      <span className={`font-semibold ${
                        item.positive ? 'text-green-600' : 
                        item.negative ? 'text-red-600' : 'text-gray-900'
                      }`}>
                        {item.value}
                      </span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-500 to-electric-500 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-4">
              Stop Struggling, Start Ranking
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Join 10,000+ businesses that solved their SEO problems with AI
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/free-audit"
                className="inline-flex items-center justify-center gap-2 bg-white text-primary-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-all shadow-xl"
              >
                Get Your Free AI Audit
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                href="/demo"
                className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur text-white border-2 border-white/20 px-8 py-4 rounded-xl font-semibold hover:bg-white/20 transition-all"
              >
                Watch 5-Min Demo
                <Activity className="h-5 w-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}