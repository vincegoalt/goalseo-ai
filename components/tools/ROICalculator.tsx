"use client"

import { useState } from 'react'
import { Calculator, TrendingUp, DollarSign, Users, Target, Info } from 'lucide-react'

interface ROIInputs {
  monthlyTraffic: number
  conversionRate: number
  averageOrderValue: number
  currentRanking: number
  targetRanking: number
  monthlyInvestment: number
}

interface ROIResults {
  currentRevenue: number
  projectedRevenue: number
  monthlyROI: number
  annualROI: number
  roiPercentage: number
  paybackPeriod: number
  additionalTraffic: number
  additionalConversions: number
}

export default function ROICalculator() {
  const [inputs, setInputs] = useState<ROIInputs>({
    monthlyTraffic: 1000,
    conversionRate: 2,
    averageOrderValue: 150,
    currentRanking: 15,
    targetRanking: 3,
    monthlyInvestment: 2500,
  })

  const [showResults, setShowResults] = useState(false)

  // Calculate estimated traffic multiplier based on ranking improvement
  const calculateTrafficMultiplier = (currentRank: number, targetRank: number): number => {
    // Simplified CTR curve based on industry averages
    const getCTR = (rank: number): number => {
      if (rank <= 1) return 0.35
      if (rank <= 3) return 0.15
      if (rank <= 5) return 0.08
      if (rank <= 10) return 0.03
      if (rank <= 20) return 0.01
      return 0.005
    }

    const currentCTR = getCTR(currentRank)
    const targetCTR = getCTR(targetRank)
    
    return targetCTR / currentCTR
  }

  const calculateROI = (): ROIResults => {
    const trafficMultiplier = calculateTrafficMultiplier(inputs.currentRanking, inputs.targetRanking)
    const projectedTraffic = inputs.monthlyTraffic * trafficMultiplier
    const additionalTraffic = projectedTraffic - inputs.monthlyTraffic

    const currentConversions = (inputs.monthlyTraffic * inputs.conversionRate) / 100
    const projectedConversions = (projectedTraffic * inputs.conversionRate) / 100
    const additionalConversions = projectedConversions - currentConversions

    const currentRevenue = currentConversions * inputs.averageOrderValue
    const projectedRevenue = projectedConversions * inputs.averageOrderValue
    const monthlyROI = projectedRevenue - currentRevenue - inputs.monthlyInvestment
    const annualROI = monthlyROI * 12

    const roiPercentage = ((monthlyROI / inputs.monthlyInvestment) * 100)
    const paybackPeriod = inputs.monthlyInvestment / (projectedRevenue - currentRevenue)

    return {
      currentRevenue,
      projectedRevenue,
      monthlyROI,
      annualROI,
      roiPercentage,
      paybackPeriod,
      additionalTraffic,
      additionalConversions,
    }
  }

  const handleCalculate = (e: React.FormEvent) => {
    e.preventDefault()
    setShowResults(true)
  }

  const results = showResults ? calculateROI() : null

  const formatCurrency = (value: number): string => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value)
  }

  const formatNumber = (value: number): string => {
    return new Intl.NumberFormat('en-US', {
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value)
  }

  return (
    <div>
      {/* Calculator Form */}
      <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-3 bg-gradient-to-r from-primary-500 to-electric-500 rounded-xl">
            <Calculator className="h-6 w-6 text-white" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900">Calculate Your SEO ROI</h2>
        </div>

        <form onSubmit={handleCalculate} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            {/* Current Performance */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Current Monthly Traffic
                <span className="ml-2 text-gray-400 font-normal">(visitors)</span>
              </label>
              <input
                type="number"
                value={inputs.monthlyTraffic}
                onChange={(e) => setInputs({ ...inputs, monthlyTraffic: Number(e.target.value) })}
                min="0"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Conversion Rate
                <span className="ml-2 text-gray-400 font-normal">(%)</span>
              </label>
              <input
                type="number"
                value={inputs.conversionRate}
                onChange={(e) => setInputs({ ...inputs, conversionRate: Number(e.target.value) })}
                min="0"
                max="100"
                step="0.1"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Average Order Value
                <span className="ml-2 text-gray-400 font-normal">($)</span>
              </label>
              <input
                type="number"
                value={inputs.averageOrderValue}
                onChange={(e) => setInputs({ ...inputs, averageOrderValue: Number(e.target.value) })}
                min="0"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
              />
            </div>

            {/* SEO Goals */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Current Average Ranking
                <span className="ml-2 text-gray-400 font-normal">(position)</span>
              </label>
              <select
                value={inputs.currentRanking}
                onChange={(e) => setInputs({ ...inputs, currentRanking: Number(e.target.value) })}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
              >
                <option value="20">11-20</option>
                <option value="15">6-10</option>
                <option value="8">4-5</option>
                <option value="3">2-3</option>
                <option value="1">1</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Target Ranking
                <span className="ml-2 text-gray-400 font-normal">(goal)</span>
              </label>
              <select
                value={inputs.targetRanking}
                onChange={(e) => setInputs({ ...inputs, targetRanking: Number(e.target.value) })}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
              >
                <option value="8">4-5</option>
                <option value="3">2-3</option>
                <option value="1">1</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Monthly SEO Investment
                <span className="ml-2 text-gray-400 font-normal">($)</span>
              </label>
              <input
                type="number"
                value={inputs.monthlyInvestment}
                onChange={(e) => setInputs({ ...inputs, monthlyInvestment: Number(e.target.value) })}
                min="0"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-primary-500 to-electric-500 text-white py-4 rounded-lg font-semibold hover:from-primary-600 hover:to-electric-600 transition-all transform hover:scale-[1.02]"
          >
            Calculate ROI
          </button>
        </form>
      </div>

      {/* Results */}
      {showResults && results && (
        <div className="mt-8 space-y-8">
          {/* ROI Summary */}
          <div className="bg-gradient-to-br from-primary-50 via-white to-electric-50 rounded-2xl p-8 border border-primary-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Your Projected ROI</h3>
            
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="flex items-center gap-2 mb-2">
                  <DollarSign className="h-5 w-5 text-primary-500" />
                  <span className="text-sm font-medium text-gray-600">Monthly ROI</span>
                </div>
                <div className={`text-3xl font-bold ${results.monthlyROI >= 0 ? 'text-success-600' : 'text-red-600'}`}>
                  {formatCurrency(results.monthlyROI)}
                </div>
                <div className={`text-sm mt-1 ${results.roiPercentage >= 0 ? 'text-success-600' : 'text-red-600'}`}>
                  {results.roiPercentage >= 0 ? '+' : ''}{results.roiPercentage.toFixed(0)}% return
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="flex items-center gap-2 mb-2">
                  <TrendingUp className="h-5 w-5 text-electric-500" />
                  <span className="text-sm font-medium text-gray-600">Annual ROI</span>
                </div>
                <div className="text-3xl font-bold text-success-600">
                  {formatCurrency(results.annualROI)}
                </div>
                <div className="text-sm text-gray-600 mt-1">
                  12-month projection
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="flex items-center gap-2 mb-2">
                  <Target className="h-5 w-5 text-purple-500" />
                  <span className="text-sm font-medium text-gray-600">Payback Period</span>
                </div>
                <div className="text-3xl font-bold text-gray-900">
                  {results.paybackPeriod.toFixed(1)}
                </div>
                <div className="text-sm text-gray-600 mt-1">
                  months to break even
                </div>
              </div>
            </div>

            {/* Traffic & Revenue Breakdown */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl p-6">
                <h4 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                  <Users className="h-5 w-5 text-primary-500" />
                  Traffic & Conversions
                </h4>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Additional Monthly Traffic</span>
                    <span className="font-semibold text-gray-900">+{formatNumber(results.additionalTraffic)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Additional Conversions</span>
                    <span className="font-semibold text-gray-900">+{results.additionalConversions.toFixed(0)}</span>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6">
                <h4 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                  <DollarSign className="h-5 w-5 text-success-500" />
                  Revenue Impact
                </h4>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Current Revenue</span>
                    <span className="font-semibold text-gray-900">{formatCurrency(results.currentRevenue)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Projected Revenue</span>
                    <span className="font-semibold text-success-600">{formatCurrency(results.projectedRevenue)}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Info Box */}
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
            <div className="flex gap-3">
              <Info className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
              <div className="text-sm text-blue-900">
                <p className="font-semibold mb-2">How we calculate your ROI:</p>
                <ul className="space-y-1 text-blue-800">
                  <li>• Traffic projections based on average CTR improvements by ranking position</li>
                  <li>• Revenue calculated using your conversion rate and average order value</li>
                  <li>• ROI factors in your monthly SEO investment</li>
                  <li>• Results typically seen within 3-6 months of consistent SEO efforts</li>
                </ul>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="bg-gradient-to-r from-primary-500 to-electric-500 rounded-2xl p-8 text-center text-white">
            <h3 className="text-2xl font-bold mb-4">Ready to Achieve These Results?</h3>
            <p className="text-white/90 mb-6 max-w-2xl mx-auto">
              Our proven SEO strategies have helped businesses achieve an average 387% ROI. 
              Let's discuss how we can help you reach your revenue goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all transform hover:scale-105"
              >
                Get Started Today
              </a>
              <a
                href="tel:562-682-9403"
                className="inline-flex items-center justify-center gap-2 bg-transparent text-white border-2 border-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-all"
              >
                Call (562) 682-9403
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}