import React from 'react'
import { Location } from '@/data/locations'
import { InternationalSEOIcon, LanguageIcon, TrendingUpIcon, TargetIcon, CheckBadgeIcon } from './ServiceLocationIcons'

interface InternationalSEOBlocksProps {
  location: Location
}

export const InternationalSEOHero: React.FC<InternationalSEOBlocksProps> = ({ location }) => {
  return (
    <section className="relative bg-gradient-to-r from-emerald-600 via-teal-700 to-cyan-800 text-white py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center bg-cyan-500/20 border border-cyan-300/30 px-6 py-3 rounded-full mb-8">
            <InternationalSEOIcon className="w-6 h-6 text-cyan-300 mr-3" />
            <span className="text-cyan-100 font-semibold">Global SEO Expansion</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold mb-8">
            Expand Globally from{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-emerald-300">
              {location.city}
            </span>
          </h1>
          <p className="text-2xl mb-10 text-emerald-100">
            Break into international markets with multilingual SEO strategies. Our {location.city} global expansion team helps you rank in 50+ countries.
          </p>
        </div>
      </div>
    </section>
  )
}

export const GlobalMarketEntry: React.FC<InternationalSEOBlocksProps> = ({ location }) => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-gray-900 mb-6 text-center">
          Strategic Global Market Entry from {location.city}
        </h2>
      </div>
    </section>
  )
}

export const MultiLanguageOptimization: React.FC<InternationalSEOBlocksProps> = ({ location }) => {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 to-gray-800 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-6 text-center">
          Native-Level Multilingual SEO
        </h2>
      </div>
    </section>
  )
}

export const HrefLangImplementation: React.FC<InternationalSEOBlocksProps> = ({ location }) => {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-gray-900 mb-6 text-center">
          Hreflang Mastery for Global Rankings
        </h2>
      </div>
    </section>
  )
}

export const InternationalTechnicalSEO: React.FC<InternationalSEOBlocksProps> = ({ location }) => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-gray-900 mb-6 text-center">
          Global Technical SEO Excellence
        </h2>
      </div>
    </section>
  )
}

export const GlobalCompetitorAnalysis: React.FC<InternationalSEOBlocksProps> = ({ location }) => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-gray-900 mb-6 text-center">
          International Competitive Intelligence
        </h2>
      </div>
    </section>
  )
}

export const InternationalROICalculator: React.FC<InternationalSEOBlocksProps> = ({ location }) => {
  return (
    <section className="py-20 bg-gradient-to-br from-emerald-900 via-teal-900 to-cyan-900 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-6 text-center">
          Global Expansion ROI Calculator
        </h2>
      </div>
    </section>
  )
}