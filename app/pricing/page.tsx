import SimplePricing from '@/components/home/SimplePricing'
import FAQ from '@/components/home/FAQ'
import CTA from '@/components/home/CTA'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Pricing - GoalSEO.ai | SEO Services Starting at $499/month',
  description: 'Simple, transparent pricing. SEO services starting at $499/month. Custom websites from $1,997. No contracts, no setup fees, just results.',
}

export default function PricingPage() {
  return (
    <div className="pt-20">
      <SimplePricing />
      <FAQ />
      <CTA />
    </div>
  )
}