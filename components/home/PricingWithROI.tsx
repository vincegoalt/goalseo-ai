"use client"

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Check, X, ArrowRight, Calculator, TrendingUp, DollarSign,
  Bot, Zap, Shield, Award, Clock, Users, Sparkles, ChevronRight
} from 'lucide-react'
import Link from 'next/link'

interface PricingPlan {
  id: string
  name: string
  description: string
  price: number
  originalPrice?: number
  period: string
  features: string[]
  notIncluded?: string[]
  badge?: string
  color: string
  popular?: boolean
}

const pricingPlans: PricingPlan[] = [
  {
    id: 'starter',
    name: 'Starter',
    description: 'Perfect for small businesses',
    price: 199,
    originalPrice: 299,
    period: 'month',
    color: 'gray',
    features: [
      'Up to 100 pages optimized',
      'Basic AI SEO automation',
      'Weekly performance reports',
      'Keyword tracking (100)',
      'Technical SEO audit',
      'Email support'
    ],
    notIncluded: [
      'Content creation',
      'Link building',
      'Competitor analysis'
    ]
  },
  {
    id: 'growth',
    name: 'Growth Engine',
    description: 'Complete SEO ecosystem with all next-gen services',
    price: 499,
    originalPrice: 999,
    period: 'month',
    color: 'primary',
    popular: true,
    badge: 'INCLUDES GEO & AEO',
    features: [
      '🚀 GEO (Generative Engine Optimization)',
      '🎯 AEO (Answer Engine Optimization)',
      '📱 Reddit SEO Strategy',
      'AI Content Optimization',
      'Unlimited pages optimized',
      'Advanced AI SEO automation',
      'Real-time performance tracking',
      'Unlimited keyword tracking',
      'Smart link building',
      'Competitor intelligence',
      'Technical SEO automation',
      'Priority support',
      'Custom integrations'
    ]
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    description: 'For agencies and multi-site operations',
    price: 0,
    period: 'custom',
    color: 'electric',
    features: [
      'Everything in Growth',
      'Multi-site dashboard',
      'White label options',
      'API access',
      'Dedicated account manager',
      'Custom AI training',
      'Team training included',
      'SLA guarantee',
      'Custom reporting'
    ]
  }
]

export default function PricingWithROI() {
  const [monthlyTraffic, setMonthlyTraffic] = useState(10000)
  const [conversionRate, setConversionRate] = useState(2)
  const [avgOrderValue, setAvgOrderValue] = useState(100)
  const [selectedPlan, setSelectedPlan] = useState('growth')

  // ROI Calculations
  const trafficIncrease = 2.87 // 287% average increase
  const newTraffic = Math.round(monthlyTraffic * trafficIncrease)
  const additionalTraffic = newTraffic - monthlyTraffic
  const monthlyRevenue = Math.round((additionalTraffic * (conversionRate / 100)) * avgOrderValue)
  const yearlyRevenue = monthlyRevenue * 12
  const agencyCost = 3000 // Average agency cost
  const savings = agencyCost - 499 // Growth plan cost
  const totalROI = monthlyRevenue + savings

  return (
    <section className="py-20 bg-gradient-to-b from-white via-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-success-100 to-primary-100 text-success-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <DollarSign className="h-4 w-4" />
            <span>Simple, Transparent Pricing</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Start Free, See Results,{' '}
            <span className="bg-gradient-to-r from-primary-500 to-electric-500 bg-clip-text text-transparent">
              Scale Up
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            No contracts, no setup fees, just pure ROI. Join 500+ companies saving $60k+/year 
            while getting 3x better results.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative ${plan.popular ? 'transform scale-105' : ''}`}
            >
              {plan.badge && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                  <div className="bg-gradient-to-r from-primary-500 to-electric-500 text-white px-4 py-1 rounded-full text-xs font-semibold">
                    {plan.badge}
                  </div>
                </div>
              )}
              
              <div className={`h-full bg-white rounded-2xl shadow-xl border-2 ${
                plan.popular ? 'border-primary-300' : 'border-gray-200'
              } p-6 flex flex-col`}>
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <p className="text-gray-600 text-sm">{plan.description}</p>
                </div>

                <div className="mb-6">
                  {plan.price === 0 ? (
                    <div className="text-3xl font-bold text-gray-900">Custom</div>
                  ) : (
                    <div className="flex items-baseline gap-2">
                      {plan.originalPrice && (
                        <span className="text-2xl text-gray-400 line-through">${plan.originalPrice}</span>
                      )}
                      <span className="text-4xl font-bold text-gray-900">${plan.price}</span>
                      <span className="text-gray-600">/{plan.period}</span>
                    </div>
                  )}
                </div>

                <ul className="space-y-3 mb-6 flex-grow">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-success-500 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-700">{feature}</span>
                    </li>
                  ))}
                  {plan.notIncluded?.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 opacity-50">
                      <X className="h-5 w-5 text-gray-400 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-500">{feature}</span>
                    </li>
                  ))}
                </ul>

                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link
                    href={plan.price === 0 ? '/contact?type=enterprise' : `/signup?plan=${plan.id}&trial=true`}
                    className={`w-full py-3 rounded-xl font-semibold transition-all flex items-center justify-center gap-2 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-primary-500 to-electric-500 text-white hover:from-primary-600 hover:to-electric-600'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {plan.price === 0 ? 'Contact Sales' : 'Start 14-Day Free Trial'}
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </motion.div>

                {plan.popular && (
                  <p className="text-xs text-center text-gray-500 mt-3">
                    14-day money back guarantee
                  </p>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* ROI Calculator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-primary-50 to-electric-50 rounded-2xl p-8 border border-primary-200"
        >
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-gray-900 mb-2 flex items-center justify-center gap-2">
              <Calculator className="h-8 w-8 text-primary-500" />
              Calculate Your GoalSEO ROI
            </h3>
            <p className="text-gray-600">See how much you'll save AND earn with AI-powered SEO</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Inputs */}
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Your current monthly traffic
                </label>
                <div className="relative">
                  <input
                    type="range"
                    min="1000"
                    max="100000"
                    step="1000"
                    value={monthlyTraffic}
                    onChange={(e) => setMonthlyTraffic(Number(e.target.value))}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                  />
                  <div className="mt-2 text-center">
                    <span className="text-2xl font-bold text-primary-600">
                      {monthlyTraffic.toLocaleString()}
                    </span>
                    <span className="text-gray-600 ml-2">visitors/mo</span>
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Current conversion rate
                </label>
                <div className="relative">
                  <input
                    type="range"
                    min="0.5"
                    max="10"
                    step="0.5"
                    value={conversionRate}
                    onChange={(e) => setConversionRate(Number(e.target.value))}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                  />
                  <div className="mt-2 text-center">
                    <span className="text-2xl font-bold text-primary-600">{conversionRate}%</span>
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Average order value
                </label>
                <div className="relative">
                  <input
                    type="range"
                    min="10"
                    max="1000"
                    step="10"
                    value={avgOrderValue}
                    onChange={(e) => setAvgOrderValue(Number(e.target.value))}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                  />
                  <div className="mt-2 text-center">
                    <span className="text-2xl font-bold text-primary-600">
                      ${avgOrderValue}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Results */}
            <div className="bg-white rounded-xl p-6 space-y-4">
              <div className="border-b pb-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-gray-600">New Monthly Traffic</span>
                  <span className="text-2xl font-bold text-gray-900">
                    {newTraffic.toLocaleString()}
                  </span>
                </div>
                <div className="text-sm text-success-600">
                  +{additionalTraffic.toLocaleString()} additional visitors (287% increase)
                </div>
              </div>

              <div className="border-b pb-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-gray-600">Additional Revenue</span>
                  <span className="text-2xl font-bold text-success-600">
                    +${monthlyRevenue.toLocaleString()}/mo
                  </span>
                </div>
                <div className="text-sm text-gray-500">
                  ${yearlyRevenue.toLocaleString()} per year
                </div>
              </div>

              <div className="border-b pb-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-gray-600">vs. Agency Costs</span>
                  <span className="text-2xl font-bold text-primary-600">
                    +${savings.toLocaleString()}/mo
                  </span>
                </div>
                <div className="text-sm text-gray-500">
                  Save ${savings * 12} per year vs $5k/mo agency
                </div>
              </div>

              <div className="bg-gradient-to-r from-success-50 to-primary-50 rounded-lg p-4">
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-gray-900">Total Monthly Impact</span>
                  <span className="text-3xl font-bold bg-gradient-to-r from-success-600 to-primary-600 bg-clip-text text-transparent">
                    ${totalROI.toLocaleString()}
                  </span>
                </div>
                <div className="text-center mt-2">
                  <span className="text-sm text-gray-600">
                    That's{' '}
                    <span className="font-bold text-primary-600">
                      ${(totalROI * 12).toLocaleString()}
                    </span>
                    {' '}per year!
                  </span>
                </div>
              </div>

              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="/signup?plan=growth&trial=true"
                  className="w-full bg-gradient-to-r from-primary-500 to-electric-500 text-white py-3 rounded-xl font-semibold hover:from-primary-600 hover:to-electric-600 transition-all flex items-center justify-center gap-2 mt-4 block"
                >
                  Start Capturing This ROI
                  <Sparkles className="h-5 w-5" />
                </Link>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 flex flex-wrap justify-center items-center gap-8"
        >
          <div className="flex items-center gap-2 text-gray-600">
            <Shield className="h-5 w-5 text-success-500" />
            <span>No contracts required</span>
          </div>
          <div className="flex items-center gap-2 text-gray-600">
            <Clock className="h-5 w-5 text-primary-500" />
            <span>Cancel anytime</span>
          </div>
          <div className="flex items-center gap-2 text-gray-600">
            <Award className="h-5 w-5 text-electric-500" />
            <span>14-day money back</span>
          </div>
          <div className="flex items-center gap-2 text-gray-600">
            <Users className="h-5 w-5 text-accent-500" />
            <span>500+ happy clients</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}