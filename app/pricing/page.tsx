import PricingWithROI from '@/components/home/PricingWithROI'
import Comparison from '@/components/home/Comparison'
import FAQ from '@/components/home/FAQ'
import CTA from '@/components/home/CTA'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Pricing - GoalSEO AI | Simple, Transparent SEO Pricing',
  description: 'No contracts, no setup fees, just pure ROI. Save $60k+/year while getting 3x better results than traditional agencies. See our pricing and calculate your ROI.',
}

export default function PricingPage() {
  return (
    <div className="pt-20">
      <PricingWithROI />
      <Comparison />
      <FAQ />
      <CTA />
    </div>
  )
}