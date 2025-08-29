"use client"

import { useEffect, useState } from 'react'
import { Award, MapPin, Star, TrendingUp, Users, Shield } from 'lucide-react'

export default function TrustSignals() {
  const [counts, setCounts] = useState({
    experience: 0,
    successStories: 0,
    keywords: 0
  })

  useEffect(() => {
    const interval = setInterval(() => {
      setCounts(prev => ({
        experience: Math.min(prev.experience + 1, 10),
        successStories: Math.min(prev.successStories + 25, 500),
        keywords: Math.min(prev.keywords + 500, 10000)
      }))
    }, 50)

    const timeout = setTimeout(() => clearInterval(interval), 3000)
    return () => {
      clearInterval(interval)
      clearTimeout(timeout)
    }
  }, [])

  const partners = [
    { 
      name: 'Google Premier Partner',
      logo: (
        <div className="flex items-center gap-2">
          <svg className="h-8 w-8" viewBox="0 0 48 48" fill="none">
            <path d="M44.5 24.5C44.5 23.04 44.38 21.64 44.16 20.28H24V28.28H35.22C34.71 30.92 33.21 33.13 30.98 34.57V40.08H38.01C42.17 36.28 44.5 30.78 44.5 24.5Z" fill="#4285F4"/>
            <path d="M24 45.5C30.15 45.5 35.3 43.52 38.01 40.08L30.98 34.57C28.99 35.97 26.42 36.82 24 36.82C18.06 36.82 12.99 33.02 11.36 27.83H4.08V33.54C7.66 40.63 15.29 45.5 24 45.5Z" fill="#34A853"/>
            <path d="M11.36 27.83C10.85 26.43 10.56 24.92 10.56 23.37C10.56 21.82 10.85 20.31 11.36 18.91V13.2H4.08C2.31 16.71 1.5 20.86 1.5 24C1.5 28.14 2.31 32.29 4.08 35.8L11.36 27.83Z" fill="#FBBC04"/>
            <path d="M24 10.18C26.69 10.18 29.09 11.06 31.02 12.77L38.17 5.62C35.29 2.97 30.14 0.5 24 0.5C15.29 0.5 7.66 5.37 4.08 12.46L11.36 18.91C12.99 13.72 18.06 10.18 24 10.18Z" fill="#EA4335"/>
          </svg>
          <span className="text-gray-700 font-medium text-sm">Premier Partner</span>
        </div>
      )
    },
    { 
      name: 'Shopify Plus Partner',
      logo: (
        <div className="flex items-center gap-2">
          <svg className="h-8 w-8" viewBox="0 0 48 48" fill="none">
            <path d="M40.6 11.9C40.6 11.7 40.4 11.6 40.3 11.6C40.2 11.6 37.5 11.5 37.5 11.5C37.5 11.5 35.2 9.3 35 9.1C34.8 8.9 34.4 9 34.2 9.1C34.2 9.1 33.7 9.2 32.9 9.5C32.7 8.7 32.3 7.8 31.7 7C30.3 4.7 28.3 3.5 26 3.5C25.8 3.5 25.6 3.5 25.4 3.5C25.3 3.3 25.1 3.2 25 3C24 2.1 22.7 1.7 21.3 1.7C16.8 1.7 14.6 7.3 13.9 10.2C11.8 10.8 10.3 11.3 10.1 11.3C9.2 11.6 9.2 11.6 9 12.5C8.9 13.2 6 38.5 6 38.5L32.4 43.5L44 40.9C44 40.9 40.6 12.1 40.6 11.9ZM31.5 10C30.5 10.3 29.4 10.6 28.2 11C28.2 10.8 28.2 10.6 28.2 10.3C28.2 8.6 28 7.2 27.6 6.1C29.7 6.4 30.8 8.7 31.5 10ZM26 6.2C26.5 7.3 26.7 8.8 26.7 10.6C26.7 10.8 26.7 10.9 26.7 11.1C24.4 11.7 21.9 12.4 19.5 13.1C20.3 10.5 22.2 7.1 26 6.2ZM21.5 3.2C22.1 3.2 22.6 3.4 23.1 3.7C18.8 5.6 16.5 10.8 15.8 13.8C13.8 14.4 12 14.9 10.3 15.4C11.3 12.1 14.1 3.2 21.5 3.2Z" fill="#5E8E3E"/>
            <path d="M40.3 11.6C40.2 11.6 37.5 11.5 37.5 11.5C37.5 11.5 35.2 9.3 35 9.1C34.9 9 34.8 9 34.7 9V43.5L44 40.9C44 40.9 40.6 12.1 40.6 11.9C40.6 11.7 40.4 11.6 40.3 11.6Z" fill="#5E8E3E"/>
            <path d="M26 18.8L24.5 24.5C24.5 24.5 23.2 23.8 21.5 23.8C19 23.8 18.9 25.3 18.9 25.7C18.9 27.7 24.3 28.5 24.3 33.5C24.3 37.4 21.6 39.8 18 39.8C13.7 39.8 11.5 37.2 11.5 37.2L12.7 33.5C12.7 33.5 15 35.6 16.9 35.6C18.1 35.6 18.6 34.7 18.6 33.9C18.6 31.3 14 31.2 14 26.5C14 22.5 16.8 18.7 22.3 18.7C24.5 18.7 26 18.8 26 18.8Z" fill="white"/>
          </svg>
          <span className="text-gray-700 font-medium text-sm">Plus Partner</span>
        </div>
      )
    }
  ]

  const stats = [
    { icon: Award, value: counts.experience + "+", label: "Years Experience", color: "text-blue-600" },
    { icon: Users, value: counts.successStories + "+", label: "Success Stories", color: "text-green-600" },
    { icon: MapPin, value: "Long Beach", label: "CA Based", color: "text-purple-600" },
    { icon: Shield, value: "A+", label: "BBB Rating", color: "text-red-600" },
    { icon: TrendingUp, value: counts.keywords.toLocaleString() + "+", label: "Keywords #1", color: "text-indigo-600" },
    { icon: Star, value: "4.9/5", label: "Client Rating", color: "text-yellow-600" }
  ]

  const mediaLogos = [
    { name: "Search Engine Journal", abbreviated: "SEJ" },
    { name: "Moz", abbreviated: "Moz" },
    { name: "Search Engine Land", abbreviated: "SEL" }
  ]

  return (
    <section className="py-12 bg-gradient-to-b from-gray-50 to-white border-y border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Stats Bar */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-10">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <div key={index} className="flex flex-col items-center p-3 bg-white rounded-lg shadow-sm border border-gray-100">
                <Icon className={`h-5 w-5 ${stat.color} mb-2`} />
                <div className="text-xl font-bold text-gray-900">{stat.value}</div>
                <div className="text-xs text-gray-600">{stat.label}</div>
              </div>
            )
          })}
        </div>

        {/* Partner Badges */}
        <div className="flex flex-wrap justify-center items-center gap-8 mb-10">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="flex items-center opacity-70 hover:opacity-100 transition-all duration-200 transform hover:scale-105"
            >
              {partner.logo}
            </div>
          ))}
          
          {/* Additional certifications */}
          <div className="flex items-center gap-2 text-gray-700">
            <Shield className="h-8 w-8 text-blue-600" />
            <span className="font-medium text-sm">SOC 2 Compliant</span>
          </div>
          
          <div className="flex items-center gap-2 text-gray-700">
            <Award className="h-8 w-8 text-green-600" />
            <span className="font-medium text-sm">ISO Certified</span>
          </div>
        </div>

        {/* Featured In Section */}
        <div className="text-center">
          <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">
            Featured In
          </p>
          <div className="flex justify-center items-center gap-8">
            {mediaLogos.map((media, index) => (
              <div key={index} className="text-gray-400 hover:text-gray-600 transition-colors">
                <span className="text-lg font-bold">{media.abbreviated}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}