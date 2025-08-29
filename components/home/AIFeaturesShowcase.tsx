"use client"

import { motion } from 'framer-motion'
import { 
  Brain, Search, BarChart3, Globe, Database, Zap, 
  Users, Link2, Edit3, MessageSquare, TrendingUp, Award,
  CheckCircle, ArrowRight, Sparkles, HandshakeIcon
} from 'lucide-react'
import Link from 'next/link'

export default function AIFeaturesShowcase() {
  const aiCapabilities = [
    {
      icon: BarChart3,
      title: "Analyzes 10,000+ ranking factors 24/7",
      description: "Continuous monitoring and analysis of all ranking signals"
    },
    {
      icon: Search,
      title: "Monitors competitors in real-time",
      description: "Instant alerts when competitors make moves"
    },
    {
      icon: Database,
      title: "Identifies content gaps instantly",
      description: "Discovers opportunities faster than any human could"
    },
    {
      icon: TrendingUp,
      title: "Tracks algorithm changes",
      description: "Adapts strategies immediately to ranking updates"
    },
    {
      icon: Globe,
      title: "Processes millions of keywords",
      description: "Analyzes search volume, difficulty, and intent at scale"
    },
    {
      icon: Zap,
      title: "Automates technical audits",
      description: "Continuous scanning for technical SEO issues"
    }
  ]

  const humanExpertise = [
    {
      icon: Edit3,
      title: "Craft compelling, E-E-A-T compliant content",
      description: "Original, authoritative content that resonates with readers"
    },
    {
      icon: Link2,
      title: "Build genuine relationships for links",
      description: "Real outreach and partnerships that last"
    },
    {
      icon: Brain,
      title: "Create custom strategies for your industry",
      description: "Tailored approaches based on deep industry knowledge"
    },
    {
      icon: MessageSquare,
      title: "Ensure brand voice consistency",
      description: "Maintain your unique tone across all content"
    },
    {
      icon: Award,
      title: "Navigate complex Google updates",
      description: "Expert interpretation and strategic adjustments"
    },
    {
      icon: HandshakeIcon,
      title: "Provide strategic business insights",
      description: "Connect SEO to your broader business goals"
    }
  ]

  return (
    <section className="py-20 bg-gradient-to-b from-white via-gray-50 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary-100 to-electric-100 text-primary-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Sparkles className="h-4 w-4" />
            <span>Why Choose GoalSEO</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            AI-Enhanced Human Expertise: The Perfect Formula
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We combine the processing power of AI with the creativity, strategy, and relationship-building that only humans can provide.
          </p>
        </motion.div>

        {/* Two Column Comparison */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {/* AI Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-100"
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 bg-blue-500 rounded-xl">
                <Brain className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">What AI Does Best</h3>
            </div>
            
            <div className="space-y-4">
              {aiCapabilities.map((capability, index) => {
                const Icon = capability.icon
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    className="flex gap-4 items-start"
                  >
                    <div className="flex-shrink-0 mt-1">
                      <Icon className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900 mb-1">
                        {capability.title}
                      </div>
                      <div className="text-sm text-gray-600">
                        {capability.description}
                      </div>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>

          {/* Human Column */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 border border-green-100"
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 bg-green-500 rounded-xl">
                <Users className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">What Our Experts Do Best</h3>
            </div>
            
            <div className="space-y-4">
              {humanExpertise.map((expertise, index) => {
                const Icon = expertise.icon
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    className="flex gap-4 items-start"
                  >
                    <div className="flex-shrink-0 mt-1">
                      <Icon className="h-5 w-5 text-green-600" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900 mb-1">
                        {expertise.title}
                      </div>
                      <div className="text-sm text-gray-600">
                        {expertise.description}
                      </div>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-primary-50 to-electric-50 rounded-2xl p-8 border border-primary-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Get the Best of Both Worlds
            </h3>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Our unique approach combines AI efficiency with human creativity to deliver results that pure AI tools or traditional agencies can't match.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/free-audit"
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-primary-500 to-primary-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-primary-600 hover:to-primary-700 transition-all shadow-lg hover:shadow-xl group"
              >
                <Sparkles className="h-5 w-5" />
                Get Your Free AI + Human Audit
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <Link
                href="/how-we-use-ai"
                className="inline-flex items-center justify-center gap-2 bg-white text-primary-600 border-2 border-primary-200 px-8 py-4 rounded-xl font-semibold hover:bg-primary-50 transition-all"
              >
                Learn More About Our Approach
              </Link>
            </div>
            
            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center justify-center gap-6 mt-8 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-500" />
                <span>No contracts required</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-500" />
                <span>387% average ROI</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-500" />
                <span>Results in 30-60 days</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-500" />
                <span>Money-back guarantee</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}