import Link from 'next/link'
import { siteConfig } from '@/config/site'
import { MapPin, Phone, Mail, Facebook, Twitter, Linkedin, Instagram, ArrowRight } from 'lucide-react'

const footerLinks = {
  services: [
    { name: 'Local SEO', href: '/services/local-seo' },
    { name: 'National SEO', href: '/services/national-seo' },
    { name: 'International SEO', href: '/services/international-seo' },
    { name: 'E-commerce SEO', href: '/services/ecommerce-seo' },
    { name: 'Enterprise SEO', href: '/services/enterprise-seo' },
    { name: 'Technical SEO', href: '/services/technical-seo' },
    { name: 'Link Building', href: '/services/link-building' },
  ],
  company: [
    { name: 'About Us', href: '/about' },
    { name: 'Case Studies', href: '/case-studies' },
    { name: 'Blog', href: '/blog' },
    { name: 'Careers', href: '/careers' },
    { name: 'Contact', href: '/contact' },
  ],
  resources: [
    { name: 'Free SEO Audit', href: '/free-audit' },
    { name: 'SEO Tools', href: '/tools' },
    { name: 'SEO Guide', href: '/guide' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'FAQ', href: '/faq' },
  ],
  locations: [
    { name: 'Long Beach', href: '/locations/long-beach' },
    { name: 'Los Angeles', href: '/locations/los-angeles' },
    { name: 'Orange County', href: '/locations/orange-county' },
    { name: 'San Diego', href: '/locations/san-diego' },
    { name: 'View All Locations', href: '/locations' },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-navy text-white">
      {/* CTA Section */}
      <div className="bg-gradient-to-r from-primary-500 to-electric-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="text-3xl font-bold mb-2">Ready to Achieve Your SEO Goals?</h2>
              <p className="text-primary-100">Get your free SEO audit and custom strategy today.</p>
            </div>
            <Link
              href="/free-audit"
              className="inline-flex items-center gap-2 bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold hover:bg-primary-50 transition-all transform hover:scale-105 shadow-xl"
            >
              Get Free Audit
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
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
              AI-powered SEO solutions that deliver measurable results and achieve your business goals.
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

          {/* Locations */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Locations</h3>
            <ul className="space-y-3">
              {footerLinks.locations.map((link) => (
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