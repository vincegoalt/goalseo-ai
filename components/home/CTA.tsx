import Link from 'next/link'
import { ArrowRight, Zap } from 'lucide-react'

export default function CTA() {
  return (
    <section className="py-20 bg-gradient-to-r from-primary-500 to-electric-500">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 bg-white/20 text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
          <Zap className="h-4 w-4" />
          <span>Limited Time Offer - Free SEO Audit ($500 Value)</span>
        </div>
        
        <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
          Ready to Dominate Your Market?
        </h2>
        
        <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
          Join 500+ businesses that have achieved their SEO goals with our AI-powered strategies. 
          Get your free audit and custom roadmap today.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/free-audit"
            className="inline-flex items-center justify-center gap-2 bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all transform hover:scale-105 shadow-xl"
          >
            Get Free SEO Audit
            <ArrowRight className="h-5 w-5" />
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 bg-transparent text-white border-2 border-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-all"
          >
            Schedule a Call
          </Link>
        </div>
        
        <p className="mt-6 text-white/80 text-sm">
          No credit card required • Results in 30 days or money back
        </p>
      </div>
    </section>
  )
}