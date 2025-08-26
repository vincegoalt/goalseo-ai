import React from 'react'
import { Location } from '@/data/locations'
import { LocalSEOIcon, LocalBusinessIcon, TrendingUpIcon, TargetIcon, CheckBadgeIcon } from './ServiceLocationIcons'

interface LocalSEOBlocksProps {
  location: Location
}

// Hero Block
export const LocalSEOHero: React.FC<LocalSEOBlocksProps> = ({ location }) => {
  return (
    <section className="bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-800 text-white py-20">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <div className="max-w-2xl">
            <div className="flex items-center mb-4">
              <LocalSEOIcon className="w-12 h-12 text-yellow-400 mr-4" />
              <span className="bg-yellow-400 text-gray-900 px-3 py-1 rounded-full text-sm font-semibold">
                Local SEO Experts
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Local SEO Services in{' '}
              <span className="text-yellow-400">{location.city}, {location.stateAbbr}</span>
            </h1>
            <p className="text-xl mb-8 text-blue-100">
              Dominate local search results in {location.city}. Get more customers walking through your doors with our proven local SEO strategies that deliver 387% average ROI.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-yellow-400 text-gray-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-yellow-300 transition-colors">
                Get Free Local SEO Audit
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-gray-900 transition-colors">
                Call Now: (562) 682-9403
              </button>
            </div>
          </div>
          <div className="hidden lg:block">
            <div className="relative">
              <div className="w-80 h-80 bg-white/10 rounded-full flex items-center justify-center">
                <LocalBusinessIcon className="w-40 h-40 text-yellow-400" />
              </div>
              <div className="absolute -top-4 -right-4 bg-yellow-400 text-gray-900 px-4 py-2 rounded-lg font-bold">
                #1 in {location.city}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// Local Market Insights Block
export const LocalMarketInsights: React.FC<LocalSEOBlocksProps> = ({ location }) => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            {location.city} Local Search Market Insights
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Understanding the local search landscape in {location.city} is crucial for your business success.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white p-6 rounded-xl shadow-lg text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <TrendingUpIcon className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">{location.population?.toLocaleString()}</h3>
            <p className="text-gray-600">Local Population</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <LocalBusinessIcon className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">{location.businessStats?.totalBusinesses?.toLocaleString()}</h3>
            <p className="text-gray-600">Total Businesses</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg text-center">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <TargetIcon className="w-8 h-8 text-purple-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">{location.businessStats?.growthRate}</h3>
            <p className="text-gray-600">Business Growth Rate</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg text-center">
            <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckBadgeIcon className="w-8 h-8 text-yellow-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">85%</h3>
            <p className="text-gray-600">Mobile Local Searches</p>
          </div>
        </div>
      </div>
    </section>
  )
}

// Local Industry Focus Block
export const LocalIndustryFocus: React.FC<LocalSEOBlocksProps> = ({ location }) => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Local SEO for {location.city} Industries
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We specialize in local SEO for the key industries driving {location.city}'s economy.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {location.industries?.slice(0, 6).map((industry, index) => (
            <div key={index} className="group hover:shadow-xl transition-shadow duration-300 border border-gray-200 rounded-xl p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mr-4">
                  <LocalBusinessIcon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">{industry}</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Specialized local SEO strategies for {industry.toLowerCase()} businesses in {location.city}.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-sm text-gray-600">
                  <CheckBadgeIcon className="w-4 h-4 text-green-500 mr-2" />
                  Industry-specific keyword targeting
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <CheckBadgeIcon className="w-4 h-4 text-green-500 mr-2" />
                  Local competitor analysis
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <CheckBadgeIcon className="w-4 h-4 text-green-500 mr-2" />
                  Specialized citation building
                </li>
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Simplified blocks for remaining components
export const NeighborhoodCoverage: React.FC<LocalSEOBlocksProps> = ({ location }) => {
  return (
    <section className="py-16 bg-gradient-to-r from-gray-900 to-gray-800 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">Serving All {location.city} Neighborhoods</h2>
          <p className="text-xl text-gray-300">Local SEO coverage across {location.city}</p>
        </div>
      </div>
    </section>
  )
}

export const LocalCitationsBlock: React.FC<LocalSEOBlocksProps> = ({ location }) => {
  return (
    <section className="py-16 bg-blue-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
          Local Citations for {location.city}
        </h2>
      </div>
    </section>
  )
}

export const LocalCompetitorAnalysis: React.FC<LocalSEOBlocksProps> = ({ location }) => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
          Stay Ahead of {location.city} Competitors
        </h2>
      </div>
    </section>
  )
}

export const LocalSEOROICalculator: React.FC<LocalSEOBlocksProps> = ({ location }) => {
  return (
    <section className="py-16 bg-gradient-to-r from-green-600 to-blue-600 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6 text-center">
          Calculate Your {location.city} Local SEO ROI
        </h2>
      </div>
    </section>
  )
}