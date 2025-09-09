import { Metadata } from 'next'
import HeroLocal from '@/components/home/HeroLocal'
import LocalTestimonials from '@/components/home/LocalTestimonials'
import LocalServices from '@/components/home/LocalServices'
import LiveSEOAnalyzer from '@/components/home/LiveSEOAnalyzer'
import ComparisonAdvanced from '@/components/home/ComparisonAdvanced'
import SimplePricing from '@/components/home/SimplePricing'
import Services from '@/components/home/Services'
import Metrics from '@/components/home/Metrics'
import Process from '@/components/home/Process'
import TestimonialsUltra from '@/components/home/TestimonialsUltra'
import FAQ from '@/components/home/FAQ'
import CTA from '@/components/home/CTA'
import TrustSignals from '@/components/home/TrustSignals'
import LocalBusinessSchema from '@/components/LocalBusinessSchema'

export const metadata: Metadata = {
  title: 'Long Beach SEO Agency | #1 SEO Company in Long Beach, CA - GoalSEO.ai',
  description: 'Long Beach SEO Agency - #1 Local SEO Services in Long Beach, CA. Serving Belmont Shore, Signal Hill, Lakewood & 35+ Cities. Get More Customers with AI-Powered SEO. Free Audit Call (562) 682-9403',
  keywords: ['Long Beach SEO', 'SEO agency Long Beach', 'SEO company Long Beach CA', 'local SEO Long Beach', 'SEO services near me', 'Belmont Shore SEO', 'Signal Hill SEO', 'Lakewood SEO', '90803 SEO'],
  openGraph: {
    title: 'Long Beach SEO Agency | #1 SEO Company - GoalSEO.ai',
    description: 'Long Beach premier AI-powered SEO agency. Get more customers with proven local SEO strategies. Serving Long Beach, Belmont Shore, Signal Hill, Lakewood & surrounding areas.',
    url: 'https://goalseo.ai',
    siteName: 'GoalSEO.ai',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Long Beach SEO Agency | #1 SEO Company - GoalSEO.ai',
    description: 'Long Beach premier AI-powered SEO agency. Get more customers with proven local SEO strategies.',
  },
  alternates: {
    canonical: 'https://goalseo.ai',
  },
  other: {
    'geo.region': 'US-CA',
    'geo.placename': 'Long Beach',
    'geo.position': '33.7594;-118.1396',
    'ICBM': '33.7594, -118.1396',
  }
}

export default function HomePage() {
  return (
    <>
      <LocalBusinessSchema />
      <div className="pt-20">
        <HeroLocal />
      <TrustSignals />
      <LocalServices />
      <LiveSEOAnalyzer />
      <ComparisonAdvanced />
      <SimplePricing />
      <Metrics />
      <Services />
      <Process />
      <TestimonialsUltra />
      <FAQ />
      <CTA />
      </div>
    </>
  )
}