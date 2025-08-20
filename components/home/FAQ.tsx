"use client"

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    question: "How long does it take to see SEO results?",
    answer: "Typically, you'll start seeing improvements in 3-6 months, with significant results in 6-12 months. However, some quick wins can be achieved within the first month."
  },
  {
    question: "What makes GoalSEO different from other agencies?",
    answer: "We combine AI-powered technology with proven SEO strategies, offer transparent reporting, guarantee results, and provide dedicated account management with 24/7 support."
  },
  {
    question: "Do you work with businesses outside of California?",
    answer: "Yes! While we're based in Long Beach, CA, we work with clients nationwide and internationally, providing the same high-quality service regardless of location."
  },
  {
    question: "What's included in the free SEO audit?",
    answer: "Our comprehensive audit includes technical SEO analysis, competitor research, keyword opportunities, content gaps, backlink profile review, and a custom strategy roadmap."
  },
  {
    question: "Can you guarantee first page rankings?",
    answer: "While no one can guarantee specific rankings, we guarantee significant improvements in your organic visibility, traffic, and ROI. Our average client sees a 387% ROI."
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="py-20 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600">
            Get answers to common questions about our SEO services
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-lg overflow-hidden"
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