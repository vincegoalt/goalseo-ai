"use client"

import { motion } from 'framer-motion'
import Link from 'next/link'
import { 
  Bot, Search, Brain, Zap, FileText, Link2,
  TrendingUp, CheckCircle, ArrowRight, Activity,
  Code, Globe, Users, Target, Shield, Clock,
  BarChart3, Sparkles, Play, Settings
} from 'lucide-react'
import { useState } from 'react'

export default function HowItWorksPage() {
  const [activeStep, setActiveStep] = useState(0)

  const steps = [
    {
      id: 1,
      title: 'SEO Audit',
      icon: Search,
      description: 'Comprehensive analysis of your website and local market',
      details: [
        'Complete technical SEO audit',
        'Local competitor analysis',
        'Keyword opportunity research',
        'Current ranking assessment'
      ],
      time: '24-48 hours'
    },
    {
      id: 2,
      title: 'Custom Strategy',
      icon: Brain,
      description: 'Tailored SEO strategy for your business and market',
      details: [
        'Local keyword targeting',
        'Content roadmap creation',
        'Link building strategy',
        'Technical improvements plan'
      ],
      time: '3-5 days'
    },
    {
      id: 3,
      title: 'Implementation',
      icon: Zap,
      description: 'Our team executes your SEO strategy',
      details: [
        'On-page optimization',
        'Content creation & optimization',
        'Local citation building',
        'Technical SEO fixes'
      ],
      time: 'Ongoing'
    },
    {
      id: 4,
      title: 'Monitor & Optimize',
      icon: Activity,
      description: 'Track results and continuously improve',
      details: [
        'Weekly rank tracking',
        'Monthly performance reports',
        'Strategy adjustments',
        'Conversion optimization'
      ],
      time: 'Continuous'
    }
  ]

  const services = [
    {
      name: 'Local SEO',
      icon: Globe,
      role: 'Dominate local search results',
      tasks: ['Google Business Profile', 'Local citations', 'Review management', 'Local content']
    },
    {
      name: 'Technical SEO',
      icon: Code,
      role: 'Optimize site performance',
      tasks: ['Core Web Vitals', 'Mobile optimization', 'Site architecture', 'Schema markup']
    },
    {
      name: 'Content Marketing',
      icon: FileText,
      role: 'Create engaging content',
      tasks: ['Blog writing', 'Service pages', 'Landing pages', 'Meta descriptions']
    },
    {
      name: 'Link Building',
      icon: Link2,
      role: 'Build authority & trust',
      tasks: ['Local partnerships', 'Guest posting', 'Digital PR', 'Directory submissions']
    },
    {
      name: 'Analytics & Reporting',
      icon: BarChart3,
      role: 'Track and measure success',
      tasks: ['Traffic analysis', 'Conversion tracking', 'Rank monitoring', 'ROI reporting']
    },
    {
      name: 'Strategy Advisor',
      icon: Target,
      role: 'Plans SEO strategies',
      tasks: ['Opportunity identification', 'Priority setting', 'Campaign planning', 'Resource allocation']
    }
  ]

  const timeline = [
    { day: 1, event: 'AI Audit Complete', description: 'Full site analysis and competitor research' },
    { day: 3, event: 'First Optimizations Live', description: 'Meta tags, content, and technical fixes' },
    { day: 7, event: 'Initial Results', description: 'First ranking improvements visible' },
    { day: 14, event: 'Traffic Growth', description: 'Organic traffic starts increasing' },
    { day: 30, event: 'Momentum Building', description: 'Multiple keywords ranking on page 1' },
    { day: 60, event: 'Significant Impact', description: 'Major traffic and conversion gains' },
    { day: 90, event: 'Full Transformation', description: '387% average traffic increase achieved' }
  ]

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-b from-primary-50 via-white to-gray-50 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-96 h-96 bg-primary-300/30 rounded-full mix-blend-multiply filter blur-3xl animate-blob" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-electric-300/30 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary-100 to-electric-100 text-primary-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Settings className="h-4 w-4" />
              <span>How It Works</span>
            </div>

            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              SEO on{' '}
              <span className="bg-gradient-to-r from-primary-500 to-electric-500 bg-clip-text text-transparent">
                Complete Autopilot
              </span>
            </h1>

            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Set it once and watch your rankings soar. Our AI handles everything from 
              strategy to implementation, working 24/7 to grow your organic traffic.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/demo"
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-primary-500 to-primary-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-primary-600 hover:to-primary-700 transition-all shadow-xl"
              >
                <Play className="h-5 w-5" />
                Watch Demo
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                href="/free-audit"
                className="inline-flex items-center justify-center gap-2 bg-white text-primary-600 border-2 border-primary-200 px-8 py-4 rounded-xl font-semibold hover:bg-primary-50 transition-all"
              >
                Start Free Audit
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              4 Steps to SEO Success
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From signup to results in minutes, not months
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Steps List */}
            <div className="space-y-4">
              {steps.map((step, index) => {
                const Icon = step.icon
                return (
                  <motion.button
                    key={index}
                    onClick={() => setActiveStep(index)}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className={`w-full text-left p-6 rounded-xl transition-all ${
                      activeStep === index
                        ? 'bg-gradient-to-r from-primary-50 to-electric-50 border-2 border-primary-300'
                        : 'bg-gray-50 hover:bg-white border-2 border-transparent'
                    }`}
                  >
                    <div className="flex items-start gap-4">
                      <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                        activeStep === index
                          ? 'bg-gradient-to-r from-primary-500 to-electric-500 text-white'
                          : 'bg-white text-gray-600'
                      }`}>
                        <Icon className="h-6 w-6" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <span className="text-sm font-semibold text-primary-600">Step {step.id}</span>
                          <span className="text-xs bg-gray-200 text-gray-600 px-2 py-1 rounded-full">
                            {step.time}
                          </span>
                        </div>
                        <h3 className="text-lg font-bold text-gray-900 mb-1">{step.title}</h3>
                        <p className="text-gray-600">{step.description}</p>
                      </div>
                    </div>
                  </motion.button>
                )
              })}
            </div>

            {/* Active Step Details */}
            <motion.div
              key={activeStep}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-white rounded-2xl shadow-2xl border border-gray-200 p-8"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-r from-primary-500 to-electric-500 rounded-lg flex items-center justify-center text-white">
                  {activeStep + 1}
                </div>
                <h3 className="text-xl font-bold text-gray-900">{steps[activeStep].title}</h3>
              </div>

              <div className="space-y-3">
                {steps[activeStep].details.map((detail, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{detail}</span>
                  </motion.div>
                ))}
              </div>

              <div className="mt-6 p-4 bg-primary-50 rounded-lg">
                <div className="flex items-center gap-2 text-primary-700">
                  <Clock className="h-4 w-4" />
                  <span className="text-sm font-medium">Time: {steps[activeStep].time}</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* AI Agents */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              6 AI Agents Working for You
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Each specialized agent handles different aspects of your SEO
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((agent, index) => {
              const Icon = agent.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-primary-100 to-electric-100 rounded-lg flex items-center justify-center">
                      <Icon className="h-6 w-6 text-primary-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900">{agent.name}</h3>
                      <p className="text-sm text-gray-600">{agent.role}</p>
                    </div>
                  </div>

                  <div className="space-y-2">
                    {agent.tasks.map((task, taskIndex) => (
                      <div key={taskIndex} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-primary-400 rounded-full" />
                        <span className="text-sm text-gray-700">{task}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-4 flex items-center gap-2 text-xs text-green-600">
                    <Activity className="h-3 w-3" />
                    <span>Active 24/7</span>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Your 90-Day Transformation
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See exactly when you'll start seeing results
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary-200 to-electric-200" />

            {/* Timeline Events */}
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`flex items-center gap-8 ${
                    index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                  }`}
                >
                  <div className="flex-1 text-right">
                    {index % 2 === 0 && (
                      <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
                        <div className="text-sm text-primary-600 font-semibold mb-1">Day {item.day}</div>
                        <h3 className="text-lg font-bold text-gray-900 mb-2">{item.event}</h3>
                        <p className="text-sm text-gray-600">{item.description}</p>
                      </div>
                    )}
                  </div>

                  <div className="relative">
                    <div className="w-12 h-12 bg-white rounded-full border-4 border-primary-400 flex items-center justify-center">
                      <CheckCircle className="h-6 w-6 text-primary-600" />
                    </div>
                  </div>

                  <div className="flex-1">
                    {index % 2 === 1 && (
                      <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
                        <div className="text-sm text-primary-600 font-semibold mb-1">Day {item.day}</div>
                        <h3 className="text-lg font-bold text-gray-900 mb-2">{item.event}</h3>
                        <p className="text-sm text-gray-600">{item.description}</p>
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
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
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Ready to Put Your SEO on Autopilot?
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Start your journey to 387% traffic growth today
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/free-audit"
                className="inline-flex items-center justify-center gap-2 bg-white text-primary-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-all shadow-xl"
              >
                <Sparkles className="h-5 w-5" />
                Get Started Free
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                href="/demo"
                className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur text-white border-2 border-white/30 px-8 py-4 rounded-xl font-semibold hover:bg-white/20 transition-all"
              >
                Book a Demo
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}