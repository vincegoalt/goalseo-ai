"use client"

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { Service } from '@/data/services'

interface ServiceFAQProps {
  service: Service
}

export default function ServiceFAQ({ service }: ServiceFAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqs = [
    {
      question: `How long does it take to see results from ${service.title}?`,
      answer: "Typically, you'll start seeing improvements within 3-6 months, with significant results in 6-12 months. Quick wins can often be achieved within the first month."
    },
    {
      question: `What makes your ${service.title} different?`,
      answer: "We combine AI-powered technology with proven strategies, provide transparent reporting, guarantee results, and offer dedicated account management with 24/7 support."
    },
    {
      question: `Can you guarantee specific rankings?`,
      answer: "While we can't guarantee specific rankings, we guarantee significant improvements in your organic visibility, traffic, and ROI. Our average client sees a 387% ROI."
    },
    {
      question: `What's included in the monthly reporting?`,
      answer: "Comprehensive reports include keyword rankings, traffic analytics, conversion tracking, competitor analysis, and clear recommendations for ongoing improvements."
    },
    {
      question: `Do you require a long-term contract?`,
      answer: "We offer flexible month-to-month agreements because we're confident in our results. Most clients stay with us for years due to the ROI we deliver."
    }
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600">
            Common questions about our {service.title}
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-lg overflow-hidden"
            >
              <button
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-semibold text-gray-900">{faq.question}</span>
                <ChevronDown
                  className={`h-5 w-5 text-gray-500 transition-transform ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {openIndex === index && (
                <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
                  <p className="text-gray-700">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}