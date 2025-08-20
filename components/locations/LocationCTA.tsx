import Link from 'next/link'
import { ArrowRight, MapPin } from 'lucide-react'
import { Location } from '@/data/locations'
import { siteConfig } from '@/config/site'

interface LocationCTAProps {
  location: Location
}

export default function LocationCTA({ location }: LocationCTAProps) {
  return (
    <section className="py-20 bg-gradient-to-r from-primary-500 to-electric-500">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 bg-white/20 text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
          <MapPin className="h-4 w-4" />
          <span>Serving {location.city} & Surrounding Areas</span>
        </div>
        
        <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
          Ready to Dominate {location.city} Search Results?
        </h2>
        
        <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
          Get your free SEO audit and see exactly how we can help your {location.city} business 
          achieve top rankings and drive more customers.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <Link
            href="/free-audit"
            className="inline-flex items-center justify-center gap-2 bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all transform hover:scale-105 shadow-xl"
          >
            Get Free {location.city} SEO Audit
            <ArrowRight className="h-5 w-5" />
          </Link>
          <a
            href={`tel:${siteConfig.phone.replace(/\D/g, '')}`}
            className="inline-flex items-center justify-center gap-2 bg-transparent text-white border-2 border-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-all"
          >
            Call {siteConfig.phone}
          </a>
        </div>
        
        <p className="text-white/80 text-sm">
          Free consultation • No contracts • 100% money-back guarantee
        </p>
        
        <div className="mt-8 pt-8 border-t border-white/20">
          <p className="text-white/80 text-sm">
            Our office: {siteConfig.address.street}, {siteConfig.address.city}, {siteConfig.address.state} {siteConfig.address.zip}
          </p>
        </div>
      </div>
    </section>
  )
}