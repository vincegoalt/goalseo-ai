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

export default function HomePage() {
  return (
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
  )
}