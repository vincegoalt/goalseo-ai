import Link from 'next/link'
import { siteConfig } from '@/config/site'
import { MapPin, Phone, Mail, Facebook, Twitter, Linkedin, Instagram, ArrowRight, Award, Shield, CheckCircle, Star } from 'lucide-react'

const footerLinks = {
  services: [
    { name: 'GEO (Generative Engine Optimization)', href: '/future-of-seo' },
    { name: 'AEO (Answer Engine Optimization)', href: '/future-of-seo' },
    { name: 'Local SEO Long Beach', href: '/local-seo-long-beach' },
    { name: 'WordPress SEO', href: '/wordpress-seo-masters' },
    { name: 'Shopify SEO', href: '/shopify-seo-experts' },
    { name: 'Technical SEO', href: '/services/technical-seo' },
    { name: 'Link Building', href: '/services/link-building' },
  ],
  locations: [
    { name: 'SEO Services by Location', href: '/services-by-location' },
    { name: 'Belmont Shore', href: '/belmont-shore/plumbers-seo' },
    { name: 'Signal Hill', href: '/signal-hill/electricians-seo' },
    { name: 'Lakewood', href: '/lakewood/hvac-seo' },
    { name: 'Seal Beach', href: '/seal-beach/attorneys-seo' },
    { name: 'Torrance', href: '/torrance/dentists-seo' },
    { name: 'View All Locations →', href: '/services-by-location' },
  ],
  industries: [
    { name: 'E-commerce', href: '/industries/e-commerce' },
    { name: 'SaaS', href: '/industries/saas' },
    { name: 'Healthcare', href: '/industries/healthcare' },
    { name: 'Real Estate', href: '/industries/real-estate' },
    { name: 'Legal', href: '/industries/legal' },
    { name: 'Restaurant', href: '/industries/restaurant' },
  ],
  company: [
    { name: 'How We Use AI', href: '/how-we-use-ai' },
    { name: 'Meet the Team', href: '/team' },
    { name: 'About Us', href: '/about' },
    { name: 'Case Studies', href: '/case-studies' },
    { name: 'Contact', href: '/contact' },
  ],
  resources: [
    { name: 'Free SEO Audit', href: '/free-audit' },
    { name: 'SEO Tools', href: '/tools' },
    { name: 'ROI Calculator', href: '/tools/roi-calculator' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'Blog', href: '/blog' },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-navy text-white">
      {/* Trust Signals Bar */}
      <div className="bg-gray-900 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-wrap justify-center items-center gap-8 text-sm">
            <div className="flex items-center gap-2">
              <Award className="h-5 w-5 text-yellow-500" />
              <span className="text-gray-400">10+ Years Experience</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="h-5 w-5 text-blue-500" />
              <span className="text-gray-400">BBB A+ Rating</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-green-500" />
              <span className="text-gray-400">500+ Success Stories</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="h-5 w-5 text-yellow-500" />
              <span className="text-gray-400">4.9/5 Client Rating</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="h-5 w-5 text-red-500" />
              <span className="text-gray-400">Long Beach, CA Based</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-6">
              <div className="flex items-center gap-2">
                <div className="bg-white/10 rounded-lg p-2">
                  <svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <span className="text-xl font-bold">GoalSEO.ai</span>
              </div>
            </Link>
            <p className="text-gray-400 mb-6">
              AI-enhanced human expertise. Masters of GEO, AEO, and traditional SEO. Based in Long Beach, serving nationwide.
            </p>
            <div className="space-y-3">
              <a href={`tel:${siteConfig.phone}`} className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors">
                <Phone className="h-4 w-4" />
                <span>{siteConfig.phone}</span>
              </a>
              <a href={`mailto:${siteConfig.email}`} className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors">
                <Mail className="h-4 w-4" />
                <span>{siteConfig.email}</span>
              </a>
              <div className="flex items-start gap-3 text-gray-400">
                <MapPin className="h-4 w-4 mt-1 flex-shrink-0" />
                <span>
                  {siteConfig.address.street}<br />
                  {siteConfig.address.city}, {siteConfig.address.state} {siteConfig.address.zip}
                </span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Services</h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-400 hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Locations */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Locations</h3>
            <ul className="space-y-3">
              {footerLinks.locations.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className={`text-gray-400 hover:text-white transition-colors ${link.name.includes('→') ? 'font-semibold text-blue-400 hover:text-blue-300' : ''}`}>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-400 hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Resources</h3>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-400 hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Industries</h3>
            <ul className="space-y-3">
              {footerLinks.industries.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-400 hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-6">
              <p className="text-gray-400 text-sm">
                © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
              </p>
              <div className="flex items-center gap-4">
                <Link href="/privacy" className="text-gray-400 hover:text-white text-sm transition-colors">
                  Privacy Policy
                </Link>
                <Link href="/terms" className="text-gray-400 hover:text-white text-sm transition-colors">
                  Terms of Service
                </Link>
              </div>
            </div>
            
            {/* Social Links */}
            <div className="flex items-center gap-4">
              <a href={siteConfig.social.facebook} className="text-gray-400 hover:text-white transition-colors" aria-label="Facebook">
                <Facebook className="h-5 w-5" />
              </a>
              <a href={siteConfig.social.twitter} className="text-gray-400 hover:text-white transition-colors" aria-label="Twitter">
                <Twitter className="h-5 w-5" />
              </a>
              <a href={siteConfig.social.linkedin} className="text-gray-400 hover:text-white transition-colors" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href={siteConfig.social.instagram} className="text-gray-400 hover:text-white transition-colors" aria-label="Instagram">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}