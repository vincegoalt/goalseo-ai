import React from 'react'
import { Location } from '@/data/locations'
import { LinkBuildingIcon, AuthorityIcon, TrendingUpIcon, TargetIcon, CheckBadgeIcon } from './ServiceLocationIcons'

interface LinkBuildingBlocksProps {
  location: Location
}

export const LinkBuildingHero: React.FC<LinkBuildingBlocksProps> = ({ location }) => (
  <section className="relative bg-gradient-to-r from-green-600 via-teal-600 to-blue-700 text-white py-24">
    <div className="container mx-auto px-4">
      <div className="max-w-4xl mx-auto text-center">
        <div className="inline-flex items-center bg-emerald-500/20 border border-emerald-300/30 px-6 py-3 rounded-full mb-8">
          <LinkBuildingIcon className="w-6 h-6 text-emerald-300 mr-3" />
          <span className="text-emerald-100 font-semibold">Authority Link Building</span>
        </div>
        <h1 className="text-5xl md:text-7xl font-bold mb-8">
          Premium Link Building in{' '}
          <span className="text-emerald-300">{location.city}</span>
        </h1>
        <p className="text-2xl mb-10 text-green-100">
          Earn high-authority backlinks that boost rankings and domain authority. Our {location.city} outreach team builds relationships with premium publishers.
        </p>
      </div>
    </div>
  </section>
)

export const LinkStrategy: React.FC<LinkBuildingBlocksProps> = ({ location }) => (
  <section className="py-20 bg-white">
    <div className="container mx-auto px-4">
      <h2 className="text-4xl font-bold text-gray-900 mb-6 text-center">
        Strategic Link Acquisition
      </h2>
      {/* Add link strategy content */}
    </div>
  </section>
)

export const AuthorityBuilding: React.FC<LinkBuildingBlocksProps> = ({ location }) => (
  <section className="py-20 bg-gray-50">
    <div className="container mx-auto px-4">
      <h2 className="text-4xl font-bold text-gray-900 mb-6 text-center">
        Domain Authority Building
      </h2>
      {/* Add authority building content */}
    </div>
  </section>
)

export const LocalLinkBuilding: React.FC<LinkBuildingBlocksProps> = ({ location }) => (
  <section className="py-20 bg-white">
    <div className="container mx-auto px-4">
      <h2 className="text-4xl font-bold text-gray-900 mb-6 text-center">
        Local Link Opportunities
      </h2>
      {/* Add local link building content */}
    </div>
  </section>
)

export const LinkMonitoring: React.FC<LinkBuildingBlocksProps> = ({ location }) => (
  <section className="py-20 bg-gray-50">
    <div className="container mx-auto px-4">
      <h2 className="text-4xl font-bold text-gray-900 mb-6 text-center">
        Link Profile Monitoring
      </h2>
      {/* Add monitoring content */}
    </div>
  </section>
)

export const BrandMentions: React.FC<LinkBuildingBlocksProps> = ({ location }) => (
  <section className="py-20 bg-white">
    <div className="container mx-auto px-4">
      <h2 className="text-4xl font-bold text-gray-900 mb-6 text-center">
        Brand Mention Strategy
      </h2>
      {/* Add brand mentions content */}
    </div>
  </section>
)

export const LinkBuildingROI: React.FC<LinkBuildingBlocksProps> = ({ location }) => (
  <section className="py-20 bg-green-900 text-white">
    <div className="container mx-auto px-4">
      <h2 className="text-4xl font-bold mb-6 text-center">
        Link Building ROI Analysis
      </h2>
      {/* Add link building ROI content */}
    </div>
  </section>
)