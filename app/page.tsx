import HeroUltra from '@/components/home/HeroUltra'
import AIFeaturesShowcase from '@/components/home/AIFeaturesShowcase'
import LiveSEOAnalyzer from '@/components/home/LiveSEOAnalyzer'
import ComparisonAdvanced from '@/components/home/ComparisonAdvanced'
import PricingWithROI from '@/components/home/PricingWithROI'
import Services from '@/components/home/Services'
import Metrics from '@/components/home/Metrics'
import Process from '@/components/home/Process'
import TestimonialsUltra from '@/components/home/TestimonialsUltra'
import FAQ from '@/components/home/FAQ'
import CTA from '@/components/home/CTA'
import TrustSignals from '@/components/home/TrustSignals'
import Industries from '@/components/home/Industries'

export default function HomePage() {
  return (
    <div className="pt-20">
      <HeroUltra />
      <TrustSignals />
      <AIFeaturesShowcase />
      <LiveSEOAnalyzer />
      <ComparisonAdvanced />
      <PricingWithROI />
      <Metrics />
      <Services />
      <Process />
      <Industries />
      <TestimonialsUltra />
      <FAQ />
      <CTA />
    </div>
  )
}