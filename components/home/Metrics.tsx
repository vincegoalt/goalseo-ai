"use client"

import { useEffect, useRef, useState } from 'react'
import CountUp from 'react-countup'
import { useInView } from 'react-intersection-observer'
import { TrendingUp, Users, Award, Zap } from 'lucide-react'
import { metrics } from '@/config/site'

const metricsData = [
  {
    icon: Users,
    value: 500,
    suffix: '+',
    label: 'Happy Clients',
    color: 'text-primary-500',
    bgColor: 'bg-primary-50',
  },
  {
    icon: TrendingUp,
    value: 387,
    suffix: '%',
    label: 'Average ROI',
    color: 'text-success-500',
    bgColor: 'bg-success-50',
  },
  {
    icon: Award,
    value: 50000,
    suffix: '+',
    label: 'Rankings Improved',
    color: 'text-electric-500',
    bgColor: 'bg-electric-50',
  },
  {
    icon: Zap,
    value: 98,
    suffix: '%',
    label: 'Client Satisfaction',
    color: 'text-accent-500',
    bgColor: 'bg-accent-50',
  },
]

export default function Metrics() {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  })

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Results That Speak for{' '}
            <span className="bg-gradient-to-r from-primary-500 to-electric-500 bg-clip-text text-transparent">
              Themselves
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We don't just promise results - we deliver them. Our track record demonstrates 
            consistent success across all industries.
          </p>
        </div>

        <div ref={ref} className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {metricsData.map((metric, index) => {
            const Icon = metric.icon
            return (
              <div
                key={index}
                className="text-center group hover:scale-105 transition-transform duration-300"
              >
                <div className={`inline-flex items-center justify-center w-16 h-16 ${metric.bgColor} rounded-2xl mb-4 group-hover:scale-110 transition-transform`}>
                  <Icon className={`h-8 w-8 ${metric.color}`} />
                </div>
                <div className="text-4xl font-bold text-gray-900 mb-2">
                  {inView && (
                    <CountUp
                      end={metric.value}
                      duration={2.5}
                      separator=","
                      suffix={metric.suffix}
                    />
                  )}
                </div>
                <p className="text-gray-600 font-medium">{metric.label}</p>
              </div>
            )
          })}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600">
            Trusted by industry leaders and growing businesses across California
          </p>
        </div>
      </div>
    </section>
  )
}