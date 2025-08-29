"use client"

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    question: "Is AI content bad for SEO?",
    answer: "No, Google has clearly stated they reward high-quality content regardless of how it's produced. The key is quality, originality, and E-E-A-T signals. We use AI for research and optimization, but every piece of content is human-reviewed and enhanced to ensure it provides genuine value."
  },
  {
    question: "What is Generative Engine Optimization (GEO)?",
    answer: "GEO is optimizing for AI-powered search engines like ChatGPT, Google's SGE, and Perplexity. As these platforms grow, appearing in their responses becomes crucial. We're one of the few agencies already delivering GEO results for our clients."
  },
  {
    question: "How do you handle Answer Engine Optimization (AEO)?",
    answer: "AEO focuses on winning featured snippets, People Also Ask boxes, and voice search results. Our AI analyzes thousands of successful snippets while our experts craft the perfect answers to capture these positions. We've helped clients win 50+ featured snippets on average."
  },
  {
    question: "Do you really save money vs traditional agencies?",
    answer: "Yes. Our AI handles tasks that would require 5-10 agency employees, passing savings to you. Average client saves $3,000-5,000/month while getting better results. We charge $1,500/month for services agencies charge $5,000+ for."
  },
  {
    question: "What makes you different from other AI SEO tools?",
    answer: "We're not just a tool - we're a full-service agency powered by AI. You get human expertise, strategy, and support combined with AI efficiency. Think of us as your SEO team with superpowers."
  },
  {
    question: "How long does it take to see SEO results?",
    answer: "With our AI-enhanced approach, you'll start seeing improvements in 30-60 days, much faster than the traditional 3-6 months. Our AI works 24/7, implementing optimizations continuously rather than in monthly cycles."
  },
  {
    question: "Can you work with my existing team?",
    answer: "Absolutely! We offer consulting services to enhance your in-house team's capabilities with our AI tools and expertise. Many enterprises use us to supercharge their existing SEO efforts."
  },
  {
    question: "Do you work with businesses outside of Long Beach?",
    answer: "Yes! While we're proudly based in Long Beach, CA, we work with clients nationwide and internationally. Our AI-powered approach means we can deliver exceptional results regardless of location."
  },
  {
    question: "What's included in the free GEO/AEO audit?",
    answer: "Our cutting-edge audit includes GEO readiness assessment, AEO opportunities, Reddit SEO potential, traditional SEO analysis, competitor AI visibility, and a custom roadmap for dominating both traditional and AI-powered search."
  },
  {
    question: "How do you ensure content quality with AI?",
    answer: "Every piece of content goes through our rigorous process: AI research and analysis, human writing or heavy editing, expert review for accuracy and E-E-A-T signals, brand voice alignment, and final quality check. The result is content that's both efficient to produce and exceptional in quality."
  }
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