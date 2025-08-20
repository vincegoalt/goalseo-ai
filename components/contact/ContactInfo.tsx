import { Phone, Mail, MapPin, Clock, MessageCircle, Award } from 'lucide-react'
import { siteConfig } from '@/config/site'

export default function ContactInfo() {
  return (
    <div className="space-y-6">
      {/* Quick Contact */}
      <div className="bg-gradient-to-br from-primary-50 to-electric-50 rounded-xl p-6">
        <h3 className="text-lg font-bold text-gray-900 mb-4">Quick Contact</h3>
        
        <div className="space-y-4">
          <a
            href={`tel:${siteConfig.phone.replace(/\D/g, '')}`}
            className="flex items-center gap-3 text-gray-700 hover:text-primary-600 transition-colors"
          >
            <Phone className="h-5 w-5 text-primary-500" />
            <span>{siteConfig.phone}</span>
          </a>
          
          <a
            href={`mailto:${siteConfig.email}`}
            className="flex items-center gap-3 text-gray-700 hover:text-primary-600 transition-colors"
          >
            <Mail className="h-5 w-5 text-primary-500" />
            <span>{siteConfig.email}</span>
          </a>
          
          <div className="flex items-start gap-3 text-gray-700">
            <MapPin className="h-5 w-5 text-primary-500 mt-0.5" />
            <div>
              <p>{siteConfig.address.street}</p>
              <p>{siteConfig.address.city}, {siteConfig.address.state} {siteConfig.address.zip}</p>
            </div>
          </div>
          
          <div className="flex items-center gap-3 text-gray-700">
            <Clock className="h-5 w-5 text-primary-500" />
            <span>Mon-Fri: 9:00 AM - 6:00 PM PST</span>
          </div>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
        <h3 className="text-lg font-bold text-gray-900 mb-4">Why Choose GoalSEO?</h3>
        
        <div className="space-y-3">
          <div className="flex items-start gap-3">
            <Award className="h-5 w-5 text-success-500 flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-gray-900">387% Average ROI</p>
              <p className="text-sm text-gray-600">Proven results across 500+ clients</p>
            </div>
          </div>
          
          <div className="flex items-start gap-3">
            <MessageCircle className="h-5 w-5 text-success-500 flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-gray-900">24/7 Support</p>
              <p className="text-sm text-gray-600">Dedicated account management</p>
            </div>
          </div>
          
          <div className="flex items-start gap-3">
            <Award className="h-5 w-5 text-success-500 flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-gray-900">No Contracts</p>
              <p className="text-sm text-gray-600">Month-to-month flexibility</p>
            </div>
          </div>
        </div>
      </div>

      {/* Response Time */}
      <div className="bg-success-50 rounded-xl p-6 text-center">
        <p className="text-success-700 font-semibold mb-2">
          ⚡ Average Response Time
        </p>
        <p className="text-3xl font-bold text-success-600">Under 2 Hours</p>
        <p className="text-sm text-success-600 mt-2">During business hours</p>
      </div>
    </div>
  )
}