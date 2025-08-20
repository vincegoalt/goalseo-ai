"use client"

import { motion } from 'framer-motion'
import Link from 'next/link'
import { 
  ShoppingCart, Building, Heart, GraduationCap, Home, Car, 
  Plane, UtensilsCrossed, Dumbbell, Palette, Briefcase, Cpu,
  ArrowRight, TrendingUp, Users, Target, Award, Zap
} from 'lucide-react'

const industries = [
  {
    id: 'ecommerce',
    name: 'E-commerce & Retail',
    icon: ShoppingCart,
    description: 'Dominate online shopping searches and boost conversion rates',
    stats: { traffic: '+423%', revenue: '+$2.4M/year', roi: '827%' },
    features: [
      'Product page optimization at scale',
      'Category and collection SEO',
      'Shopping feed optimization',
      'Voice search optimization',
      'Mobile commerce optimization'
    ],
    caseStudy: 'Fashion retailer increased organic revenue by 423% in 6 months'
  },
  {
    id: 'real-estate',
    name: 'Real Estate',
    icon: Home,
    description: 'Capture high-intent property searches in your market',
    stats: { traffic: '+312%', leads: '+847/mo', roi: '612%' },
    features: [
      'Local market domination',
      'Property listing optimization',
      'Neighborhood content strategy',
      'Virtual tour SEO',
      'MLS integration'
    ],
    caseStudy: 'Real estate agency generated 847 qualified leads per month'
  },
  {
    id: 'healthcare',
    name: 'Healthcare & Medical',
    icon: Heart,
    description: 'Build trust and attract patients searching for care',
    stats: { traffic: '+289%', appointments: '+145/mo', roi: '534%' },
    features: [
      'Medical content authority',
      'Local practice SEO',
      'Condition & treatment pages',
      'E-A-T optimization',
      'HIPAA-compliant strategies'
    ],
    caseStudy: 'Medical practice increased new patient appointments by 145/month'
  },
  {
    id: 'saas-tech',
    name: 'SaaS & Technology',
    icon: Cpu,
    description: 'Capture software searches and drive trial signups',
    stats: { traffic: '+567%', trials: '+234/mo', roi: '923%' },
    features: [
      'Feature page optimization',
      'Competitor comparison pages',
      'Integration content',
      'Developer documentation SEO',
      'App marketplace optimization'
    ],
    caseStudy: 'SaaS company increased trial signups by 234/month'
  },
  {
    id: 'professional-services',
    name: 'Professional Services',
    icon: Briefcase,
    description: 'Establish authority and attract high-value clients',
    stats: { traffic: '+198%', leads: '+67/mo', roi: '445%' },
    features: [
      'Service page optimization',
      'Thought leadership content',
      'Case study SEO',
      'Local service SEO',
      'Industry expertise pages'
    ],
    caseStudy: 'Law firm generated 67 qualified leads per month'
  },
  {
    id: 'education',
    name: 'Education & E-learning',
    icon: GraduationCap,
    description: 'Attract students and learners searching for courses',
    stats: { traffic: '+445%', enrollments: '+156/mo', roi: '678%' },
    features: [
      'Course page optimization',
      'Program comparison content',
      'Student resource SEO',
      'Video lesson optimization',
      'Certification page SEO'
    ],
    caseStudy: 'Online academy increased enrollments by 156/month'
  },
  {
    id: 'hospitality',
    name: 'Hospitality & Travel',
    icon: Plane,
    description: 'Capture travel searches and boost direct bookings',
    stats: { traffic: '+356%', bookings: '+423/mo', roi: '734%' },
    features: [
      'Destination content strategy',
      'Booking page optimization',
      'Local attraction SEO',
      'Review optimization',
      'Seasonal campaign automation'
    ],
    caseStudy: 'Hotel chain increased direct bookings by 423/month'
  },
  {
    id: 'food-beverage',
    name: 'Food & Beverage',
    icon: UtensilsCrossed,
    description: 'Dominate local food searches and delivery queries',
    stats: { traffic: '+267%', orders: '+189/day', roi: '456%' },
    features: [
      'Menu optimization',
      'Local restaurant SEO',
      'Recipe content strategy',
      'Delivery platform optimization',
      'Seasonal menu SEO'
    ],
    caseStudy: 'Restaurant chain increased online orders by 189/day'
  },
  {
    id: 'fitness-wellness',
    name: 'Fitness & Wellness',
    icon: Dumbbell,
    description: 'Attract health-conscious customers searching for solutions',
    stats: { traffic: '+378%', members: '+234/mo', roi: '567%' },
    features: [
      'Class schedule optimization',
      'Trainer profile SEO',
      'Workout content strategy',
      'Supplement SEO',
      'Local gym optimization'
    ],
    caseStudy: 'Fitness studio gained 234 new members per month'
  },
  {
    id: 'home-services',
    name: 'Home Services',
    icon: Home,
    description: 'Capture emergency and planned service searches',
    stats: { traffic: '+234%', calls: '+567/mo', roi: '423%' },
    features: [
      'Service area pages',
      'Emergency SEO strategy',
      'Seasonal service content',
      'Cost calculator SEO',
      'Review generation'
    ],
    caseStudy: 'HVAC company increased service calls by 567/month'
  },
  {
    id: 'automotive',
    name: 'Automotive',
    icon: Car,
    description: 'Drive traffic for dealerships and auto services',
    stats: { traffic: '+345%', leads: '+123/mo', roi: '534%' },
    features: [
      'Inventory page optimization',
      'Model comparison content',
      'Service center SEO',
      'Parts catalog optimization',
      'Finance calculator SEO'
    ],
    caseStudy: 'Auto dealership generated 123 qualified leads per month'
  },
  {
    id: 'creative-agencies',
    name: 'Creative & Design',
    icon: Palette,
    description: 'Showcase portfolio and attract ideal clients',
    stats: { traffic: '+289%', projects: '+45/mo', roi: '456%' },
    features: [
      'Portfolio optimization',
      'Case study SEO',
      'Service package pages',
      'Industry-specific content',
      'Award & recognition SEO'
    ],
    caseStudy: 'Design agency landed 45 new projects per month'
  }
]

export default function IndustriesPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-b from-primary-50 via-white to-gray-50 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob" />
          <div className="absolute top-40 right-10 w-72 h-72 bg-electric-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary-100 to-electric-100 text-primary-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
              <Zap className="h-4 w-4" />
              <span>Industry-Specific AI SEO Solutions</span>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              SEO That Speaks{' '}
              <span className="bg-gradient-to-r from-primary-500 to-electric-500 bg-clip-text text-transparent">
                Your Industry's Language
              </span>
            </h1>
            
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Our AI is trained on industry-specific data, understanding the unique keywords, 
              customer behavior, and ranking factors that drive success in your market.
            </p>

            <div className="flex flex-wrap justify-center gap-8 text-center">
              <div className="flex flex-col items-center">
                <div className="text-3xl font-bold text-primary-600">12+</div>
                <div className="text-sm text-gray-600">Industries Served</div>
              </div>
              <div className="flex flex-col items-center">
                <div className="text-3xl font-bold text-electric-600">500+</div>
                <div className="text-sm text-gray-600">Active Clients</div>
              </div>
              <div className="flex flex-col items-center">
                <div className="text-3xl font-bold text-success-600">387%</div>
                <div className="text-sm text-gray-600">Avg. Traffic Growth</div>
              </div>
              <div className="flex flex-col items-center">
                <div className="text-3xl font-bold text-accent-600">$127M</div>
                <div className="text-sm text-gray-600">Revenue Generated</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => {
              const Icon = industry.icon
              return (
                <motion.div
                  key={industry.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="group relative bg-white rounded-2xl border border-gray-200 p-6 hover:border-primary-300 hover:shadow-xl transition-all"
                >
                  {/* Icon */}
                  <div className="mb-4">
                    <div className="inline-flex p-3 bg-gradient-to-br from-primary-50 to-electric-50 rounded-xl group-hover:from-primary-100 group-hover:to-electric-100 transition-colors">
                      <Icon className="h-8 w-8 text-primary-500" />
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
                    {industry.name}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    {industry.description}
                  </p>

                  {/* Stats */}
                  <div className="flex gap-4 mb-4">
                    <div className="text-center">
                      <div className="text-lg font-bold text-primary-600">{industry.stats.traffic}</div>
                      <div className="text-xs text-gray-500">Traffic</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-success-600">{industry.stats.roi}</div>
                      <div className="text-xs text-gray-500">ROI</div>
                    </div>
                  </div>

                  {/* Features */}
                  <ul className="space-y-2 mb-4">
                    {industry.features.slice(0, 3).map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary-400 mt-1.5 flex-shrink-0" />
                        <span className="text-xs text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Case Study */}
                  <div className="pt-4 border-t border-gray-100">
                    <div className="flex items-center gap-1 text-xs text-success-600 mb-2">
                      <Award className="h-3 w-3" />
                      <span className="font-medium">Success Story</span>
                    </div>
                    <p className="text-xs text-gray-600 italic">
                      "{industry.caseStudy}"
                    </p>
                  </div>

                  {/* CTA */}
                  <Link
                    href={`/industries/${industry.id}`}
                    className="absolute inset-0 rounded-2xl"
                  >
                    <span className="sr-only">Learn more about {industry.name} SEO</span>
                  </Link>
                  <div className="relative mt-4">
                    <button className="text-primary-600 hover:text-primary-700 text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                      Learn More
                      <ArrowRight className="h-4 w-4" />
                    </button>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-50 to-electric-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Don't See Your Industry?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Our AI adapts to any industry. Get a custom SEO strategy tailored to your unique market.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/free-audit"
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-primary-500 to-primary-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-primary-600 hover:to-primary-700 transition-all shadow-xl"
              >
                Get Industry-Specific Audit
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-white text-primary-600 border-2 border-primary-200 px-8 py-4 rounded-xl font-semibold hover:bg-primary-50 transition-all"
              >
                Talk to an Expert
                <Users className="h-5 w-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}