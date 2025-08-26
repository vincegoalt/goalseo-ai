import React from 'react'
import { Location } from '@/data/locations'
import { TechnicalSEOIcon, SpeedIcon, TrendingUpIcon, TargetIcon, CheckBadgeIcon } from './ServiceLocationIcons'

interface TechnicalSEOBlocksProps {
  location: Location
}

export const TechnicalSEOHero: React.FC<TechnicalSEOBlocksProps> = ({ location }) => (
  <section className="relative bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-800 text-white py-24">
    <div className="container mx-auto px-4">
      <div className="max-w-4xl mx-auto text-center">
        <div className="inline-flex items-center bg-cyan-500/20 border border-cyan-300/30 px-6 py-3 rounded-full mb-8">
          <TechnicalSEOIcon className="w-6 h-6 text-cyan-300 mr-3" />
          <span className="text-cyan-100 font-semibold">Technical SEO Specialists</span>
        </div>
        <h1 className="text-5xl md:text-7xl font-bold mb-8">
          Technical SEO Excellence in{' '}
          <span className="text-cyan-300">{location.city}</span>
        </h1>
        <p className="text-2xl mb-10 text-purple-100">
          Fix technical issues that prevent your website from ranking. Our {location.city} technical team resolves complex SEO problems with precision.
        </p>
      </div>
    </div>
  </section>
)

export const TechnicalAudit: React.FC<TechnicalSEOBlocksProps> = ({ location }) => (
  <section className="py-20 bg-white">
    <div className="container mx-auto px-4">
      <h2 className="text-4xl font-bold text-gray-900 mb-6 text-center">
        Comprehensive Technical Audit
      </h2>
      {/* Add technical audit content */}
    </div>
  </section>
)

export const CoreWebVitals: React.FC<TechnicalSEOBlocksProps> = ({ location }) => (
  <section className="py-20 bg-gray-50">
    <div className="container mx-auto px-4">
      <h2 className="text-4xl font-bold text-gray-900 mb-6 text-center">
        Core Web Vitals Optimization
      </h2>
      {/* Add core web vitals content */}
    </div>
  </section>
)

export const CrawlOptimization: React.FC<TechnicalSEOBlocksProps> = ({ location }) => (
  <section className="py-20 bg-white">
    <div className="container mx-auto px-4">
      <h2 className="text-4xl font-bold text-gray-900 mb-6 text-center">
        Crawl Budget Optimization
      </h2>
      {/* Add crawl optimization content */}
    </div>
  </section>
)

export const StructuredData: React.FC<TechnicalSEOBlocksProps> = ({ location }) => (
  <section className="py-20 bg-gray-50">
    <div className="container mx-auto px-4">
      <h2 className="text-4xl font-bold text-gray-900 mb-6 text-center">
        Schema Markup Implementation
      </h2>
      {/* Add structured data content */}
    </div>
  </section>
)

export const TechnicalMonitoring: React.FC<TechnicalSEOBlocksProps> = ({ location }) => (
  <section className="py-20 bg-white">
    <div className="container mx-auto px-4">
      <h2 className="text-4xl font-bold text-gray-900 mb-6 text-center">
        Continuous Technical Monitoring
      </h2>
      {/* Add monitoring content */}
    </div>
  </section>
)

export const TechnicalROI: React.FC<TechnicalSEOBlocksProps> = ({ location }) => (
  <section className="py-20 bg-purple-900 text-white">
    <div className="container mx-auto px-4">
      <h2 className="text-4xl font-bold mb-6 text-center">
        Technical SEO ROI Impact
      </h2>
      {/* Add technical ROI content */}
    </div>
  </section>
)