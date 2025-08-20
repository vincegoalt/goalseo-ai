import Link from 'next/link'
import { ArrowRight, Phone } from 'lucide-react'
import { Service } from '@/data/services'
import { siteConfig } from '@/config/site'

interface ServiceCTAProps {
  service: Service
}

export default function ServiceCTA({ service }: ServiceCTAProps) {
  return (
    <section className="py-20 bg-gradient-to-r from-primary-500 to-electric-500">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
          Ready to Get Started with {service.title}?
        </h2>
        
        <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
          Join 500+ businesses achieving their SEO goals. Get your free audit and custom strategy today.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all transform hover:scale-105 shadow-xl"
          >
            Start Your Campaign
            <ArrowRight className="h-5 w-5" />
          </Link>
          <a
            href={`tel:${siteConfig.phone.replace(/\D/g, '')}`}
            className="inline-flex items-center justify-center gap-2 bg-transparent text-white border-2 border-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-all"
          >
            <Phone className="h-5 w-5" />
            Call {siteConfig.phone}
          </a>
        </div>
        
        <p className="text-white/80 text-sm">
          Free consultation • No contracts • 100% money-back guarantee
        </p>
      </div>
    </section>
  )
}