import React from 'react'
import { Location } from '@/data/locations'
import { NationalSEOIcon, ScaleIcon, TrendingUpIcon, TargetIcon, CheckBadgeIcon, RocketIcon } from './ServiceLocationIcons'

interface NationalSEOBlocksProps {
  location: Location
}

export const NationalSEOHero: React.FC<NationalSEOBlocksProps> = ({ location }) => {
  return (
    <section className="relative bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-800 text-white py-24">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-4xl mx-auto">
          <div className="flex justify-center mb-6">
            <div className="bg-white/10 backdrop-blur p-4 rounded-full">
              <NationalSEOIcon className="w-16 h-16 text-pink-400" />
            </div>
          </div>
          <h1 className="text-5xl md:text-7xl font-black mb-8">
            Scale Nationwide from{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-yellow-400">
              {location.city}
            </span>
          </h1>
          <p className="text-2xl mb-10 text-indigo-100">
            Launch powerful national SEO campaigns from our {location.city} office. Dominate competitive keywords across all 50 states.
          </p>
          <button className="bg-gradient-to-r from-pink-500 to-yellow-500 text-white px-10 py-5 rounded-2xl font-bold text-xl">
            Launch National Campaign
          </button>
        </div>
      </div>
    </section>
  )
}

export const NationalMarketReach: React.FC<NationalSEOBlocksProps> = ({ location }) => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-gray-900 mb-6 text-center">
          Nationwide Market Penetration from {location.city}
        </h2>
      </div>
    </section>
  )
}

export const NationalKeywordStrategy: React.FC<NationalSEOBlocksProps> = ({ location }) => {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-indigo-900 to-purple-900 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-6 text-center">
          Advanced National Keyword Intelligence
        </h2>
      </div>
    </section>
  )
}

export const NationalContentHub: React.FC<NationalSEOBlocksProps> = ({ location }) => {
  return (
    <section className="py-20 bg-gradient-to-br from-yellow-50 to-orange-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-gray-900 mb-6 text-center">
          Content That Commands National Authority
        </h2>
      </div>
    </section>
  )
}

export const NationalLinkBuilding: React.FC<NationalSEOBlocksProps> = ({ location }) => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-gray-900 mb-6 text-center">
          National Authority Link Building
        </h2>
      </div>
    </section>
  )
}

export const NationalCompetitorInsights: React.FC<NationalSEOBlocksProps> = ({ location }) => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-gray-900 mb-6 text-center">
          Intelligence-Driven Competitive Advantage
        </h2>
      </div>
    </section>
  )
}

export const NationalROIProjections: React.FC<NationalSEOBlocksProps> = ({ location }) => {
  return (
    <section className="py-20 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-6 text-center">
          National Campaign ROI Projections
        </h2>
      </div>
    </section>
  )
}