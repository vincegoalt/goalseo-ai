import React from 'react'
import { Location } from '@/data/locations'
import { EnterpriseSEOIcon, TeamIcon, TrendingUpIcon, TargetIcon, CheckBadgeIcon } from './ServiceLocationIcons'

interface EnterpriseSEOBlocksProps {
  location: Location
}

export const EnterpriseSEOHero: React.FC<EnterpriseSEOBlocksProps> = ({ location }) => (
  <section className="relative bg-gradient-to-r from-slate-800 via-gray-900 to-black text-white py-24">
    <div className="container mx-auto px-4">
      <div className="max-w-4xl mx-auto text-center">
        <div className="inline-flex items-center bg-blue-500/20 border border-blue-300/30 px-6 py-3 rounded-full mb-8">
          <EnterpriseSEOIcon className="w-6 h-6 text-blue-300 mr-3" />
          <span className="text-blue-100 font-semibold">Enterprise SEO Solutions</span>
        </div>
        <h1 className="text-5xl md:text-7xl font-bold mb-8">
          Enterprise SEO at Scale in{' '}
          <span className="text-blue-400">{location.city}</span>
        </h1>
        <p className="text-2xl mb-10 text-gray-300">
          Dedicated enterprise SEO teams and custom solutions for Fortune 500 companies. Our {location.city} enterprise division manages multi-million dollar SEO campaigns with precision.
        </p>
      </div>
    </div>
  </section>
)

export const EnterpriseStrategy: React.FC<EnterpriseSEOBlocksProps> = ({ location }) => (
  <section className="py-20 bg-white">
    <div className="container mx-auto px-4">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-gray-900 mb-6">
          Custom Enterprise Strategies
        </h2>
      </div>
      {/* Add enterprise-specific content blocks */}
    </div>
  </section>
)

export const MultiSiteManagement: React.FC<EnterpriseSEOBlocksProps> = ({ location }) => (
  <section className="py-20 bg-gray-50">
    <div className="container mx-auto px-4">
      <h2 className="text-4xl font-bold text-gray-900 mb-6 text-center">
        Multi-Site SEO Management
      </h2>
      {/* Add multi-site management content */}
    </div>
  </section>
)

export const EnterpriseReporting: React.FC<EnterpriseSEOBlocksProps> = ({ location }) => (
  <section className="py-20 bg-white">
    <div className="container mx-auto px-4">
      <h2 className="text-4xl font-bold text-gray-900 mb-6 text-center">
        Executive-Level Reporting
      </h2>
      {/* Add reporting content */}
    </div>
  </section>
)

export const DedicatedTeam: React.FC<EnterpriseSEOBlocksProps> = ({ location }) => (
  <section className="py-20 bg-gray-50">
    <div className="container mx-auto px-4">
      <h2 className="text-4xl font-bold text-gray-900 mb-6 text-center">
        Dedicated SEO Team
      </h2>
      {/* Add dedicated team content */}
    </div>
  </section>
)

export const EnterpriseIntegrations: React.FC<EnterpriseSEOBlocksProps> = ({ location }) => (
  <section className="py-20 bg-white">
    <div className="container mx-auto px-4">
      <h2 className="text-4xl font-bold text-gray-900 mb-6 text-center">
        Enterprise Integrations
      </h2>
      {/* Add integrations content */}
    </div>
  </section>
)

export const EnterpriseROI: React.FC<EnterpriseSEOBlocksProps> = ({ location }) => (
  <section className="py-20 bg-slate-900 text-white">
    <div className="container mx-auto px-4">
      <h2 className="text-4xl font-bold mb-6 text-center">
        Enterprise ROI Calculator
      </h2>
      {/* Add ROI calculator */}
    </div>
  </section>
)