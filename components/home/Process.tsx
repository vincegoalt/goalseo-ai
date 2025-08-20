"use client"

import { motion } from 'framer-motion'
import { Search, Target, Rocket, BarChart3 } from 'lucide-react'

const steps = [
  {
    icon: Search,
    title: 'Audit & Analysis',
    description: 'We conduct a comprehensive SEO audit to identify opportunities and gaps in your current strategy.',
  },
  {
    icon: Target,
    title: 'Strategy Development',
    description: 'Our team creates a custom SEO strategy tailored to your business goals and target audience.',
  },
  {
    icon: Rocket,
    title: 'Implementation',
    description: 'We execute the strategy with precision, optimizing every aspect of your online presence.',
  },
  {
    icon: BarChart3,
    title: 'Monitor & Optimize',
    description: 'Continuous monitoring and optimization ensure sustained growth and maximum ROI.',
  },
]

export default function Process() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Our Proven SEO Process
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A systematic approach that delivers consistent results
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="relative">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-primary-500 to-electric-500 rounded-full text-white mb-4">
                    <Icon className="h-8 w-8" />
                  </div>
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-primary-200 to-electric-200" />
                  )}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}