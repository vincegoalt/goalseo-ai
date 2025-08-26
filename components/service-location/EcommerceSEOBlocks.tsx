import React from 'react'
import { Location } from '@/data/locations'
import { EcommerceSEOIcon, ProductIcon, TrendingUpIcon, TargetIcon, CheckBadgeIcon } from './ServiceLocationIcons'

interface EcommerceSEOBlocksProps {
  location: Location
}

export const EcommerceSEOHero: React.FC<EcommerceSEOBlocksProps> = ({ location }) => {
  return (
    <section className="relative bg-gradient-to-br from-orange-500 via-red-500 to-pink-600 text-white py-24">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center bg-yellow-400/20 border border-yellow-300/30 px-4 py-2 rounded-full mb-6">
              <EcommerceSEOIcon className="w-5 h-5 text-yellow-300 mr-2" />
              <span className="text-yellow-200 font-semibold">E-commerce SEO Experts</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-black mb-6">
              Skyrocket Your Online Store Sales in{' '}
              <span className="text-yellow-300">{location.city}</span>
            </h1>
            <p className="text-xl mb-8 text-orange-100">
              Transform your e-commerce store into a sales machine with our proven SEO strategies. Our {location.city} e-commerce specialists have generated over $50M in online revenue.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export const ProductOptimization: React.FC<EcommerceSEOBlocksProps> = ({ location }) => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-gray-900 mb-6 text-center">
          Product Page Optimization That Converts
        </h2>
      </div>
    </section>
  )
}

export const CategoryPageStrategy: React.FC<EcommerceSEOBlocksProps> = ({ location }) => {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 to-orange-900 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-6 text-center">
          Category Pages That Drive Traffic & Sales
        </h2>
      </div>
    </section>
  )
}

export const TechnicalEcommerce: React.FC<EcommerceSEOBlocksProps> = ({ location }) => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-gray-900 mb-6 text-center">
          Technical E-commerce SEO Excellence
        </h2>
      </div>
    </section>
  )
}

export const ConversionOptimization: React.FC<EcommerceSEOBlocksProps> = ({ location }) => {
  return (
    <section className="py-20 bg-gradient-to-br from-yellow-50 to-orange-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-gray-900 mb-6 text-center">
          SEO + Conversion Rate Optimization
        </h2>
      </div>
    </section>
  )
}

export const EcommerceAnalytics: React.FC<EcommerceSEOBlocksProps> = ({ location }) => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-gray-900 mb-6 text-center">
          Advanced E-commerce Analytics & Tracking
        </h2>
      </div>
    </section>
  )
}

export const EcommerceROICalculator: React.FC<EcommerceSEOBlocksProps> = ({ location }) => {
  return (
    <section className="py-20 bg-gradient-to-br from-orange-600 via-red-600 to-pink-700 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-6 text-center">
          E-commerce SEO ROI Calculator
        </h2>
      </div>
    </section>
  )
}