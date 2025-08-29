"use client"

import { motion } from 'framer-motion'
import Link from 'next/link'
import { 
  TrendingUp, Users, DollarSign, Target, Award, Clock,
  ArrowRight, CheckCircle, BarChart3, Zap, ShoppingCart,
  Building, Heart, Home, Briefcase, Star, Globe, Brain,
  Coffee, Scale, MapPin, Sparkles
} from 'lucide-react'
import Image from 'next/image'

const industries = [
  { name: 'E-commerce', count: 127, icon: ShoppingCart },
  { name: 'SaaS', count: 89, icon: Globe },
  { name: 'Healthcare', count: 76, icon: Heart },
  { name: 'Real Estate', count: 64, icon: Home },
  { name: 'Legal', count: 52, icon: Scale },
  { name: 'Restaurant', count: 45, icon: Coffee }
]

const caseStudies = [
  {
    id: 'shopify-fashion',
    company: 'LuxeFashion Co.',
    industry: 'E-commerce Fashion',
    logo: '👗',
    challenge: 'Struggling with 90% paid traffic dependency and declining margins',
    solution: 'Implemented AI-powered product SEO, automated content creation, and smart collection optimization',
    results: {
      traffic: { value: '+423%', label: 'Organic Traffic' },
      revenue: { value: '+$2.4M', label: 'Annual Revenue' },
      roi: { value: '827%', label: 'ROI' },
      time: { value: '6 months', label: 'Time to Results' }
    },
    metrics: [
      { label: 'Product Pages Optimized', value: '12,847' },
      { label: 'Keywords Ranking Page 1', value: '3,234' },
      { label: 'Conversion Rate Increase', value: '+67%' },
      { label: 'Cost Per Acquisition', value: '-78%' }
    ],
    testimonial: {
      quote: "GoalSEO's AI transformed our entire SEO strategy. We went from relying on expensive ads to dominating organic search in just 6 months.",
      author: 'Sarah Chen',
      role: 'CMO, LuxeFashion Co.'
    },
    featured: true
  },
  {
    id: 'local-medical',
    company: 'CityHealth Medical Group',
    industry: 'Healthcare',
    logo: '🏥',
    challenge: 'Low online visibility for 12 clinic locations across the metro area',
    solution: 'Local SEO domination strategy with AI-optimized location pages and medical content authority building',
    results: {
      traffic: { value: '+289%', label: 'Local Traffic' },
      appointments: { value: '+847', label: 'Monthly Appointments' },
      roi: { value: '534%', label: 'ROI' },
      time: { value: '4 months', label: 'Time to Results' }
    },
    metrics: [
      { label: 'Google My Business Views', value: '+456%' },
      { label: 'Phone Calls', value: '+234/day' },
      { label: 'Direction Requests', value: '+189/day' },
      { label: 'New Patient Value', value: '$3,400' }
    ],
    testimonial: {
      quote: "The AI understands medical SEO compliance while still driving incredible results. Our appointment bookings have never been higher.",
      author: 'Dr. Michael Torres',
      role: 'Managing Partner'
    }
  },
  {
    id: 'saas-startup',
    company: 'CloudFlow Analytics',
    industry: 'SaaS Technology',
    logo: '💻',
    challenge: 'Competing against established players with 10x the marketing budget',
    solution: 'AI-driven content strategy targeting long-tail keywords and competitor gaps',
    results: {
      traffic: { value: '+567%', label: 'Organic Traffic' },
      trials: { value: '+234', label: 'Monthly Trials' },
      roi: { value: '923%', label: 'ROI' },
      time: { value: '5 months', label: 'Time to Results' }
    },
    metrics: [
      { label: 'Blog Posts Published', value: '127' },
      { label: 'Feature Snippets Won', value: '89' },
      { label: 'Trial-to-Paid Rate', value: '34%' },
      { label: 'Customer Lifetime Value', value: '$24,000' }
    ],
    testimonial: {
      quote: "GoalSEO helped us compete with giants. Their AI found opportunities our competitors missed, and we captured them all.",
      author: 'James Liu',
      role: 'Founder & CEO'
    }
  },
  {
    id: 'real-estate',
    company: 'Premier Properties Group',
    industry: 'Real Estate',
    logo: '🏡',
    challenge: 'Losing market share to online-first competitors',
    solution: 'Comprehensive property listing optimization and neighborhood content strategy',
    results: {
      traffic: { value: '+312%', label: 'Search Traffic' },
      leads: { value: '+156', label: 'Qualified Leads/mo' },
      roi: { value: '612%', label: 'ROI' },
      time: { value: '3 months', label: 'Time to Results' }
    },
    metrics: [
      { label: 'Property Listings Optimized', value: '3,456' },
      { label: 'Neighborhood Pages Created', value: '234' },
      { label: 'Average Deal Size', value: '$485,000' },
      { label: 'Lead Quality Score', value: '+82%' }
    ],
    testimonial: {
      quote: "The neighborhood content strategy was genius. We now rank #1 for every local real estate search that matters.",
      author: 'Amanda Richardson',
      role: 'VP of Digital Marketing'
    }
  },
  {
    id: 'law-firm',
    company: 'Sterling & Associates',
    industry: 'Legal Services',
    logo: '⚖️',
    challenge: 'Expensive PPC campaigns with declining conversion rates',
    solution: 'Authority content creation and practice area page optimization',
    results: {
      traffic: { value: '+198%', label: 'Organic Traffic' },
      cases: { value: '+67', label: 'Cases/month' },
      roi: { value: '445%', label: 'ROI' },
      time: { value: '4 months', label: 'Time to Results' }
    },
    metrics: [
      { label: 'Practice Area Pages', value: '45' },
      { label: 'Legal Guides Published', value: '127' },
      { label: 'Average Case Value', value: '$15,000' },
      { label: 'Cost Per Lead', value: '-67%' }
    ],
    testimonial: {
      quote: "We cut our marketing spend by 60% while tripling our case intake. The ROI is absolutely incredible.",
      author: 'Robert Sterling',
      role: 'Managing Partner'
    }
  },
  {
    id: 'fitness-chain',
    company: 'FitLife Studios',
    industry: 'Fitness & Wellness',
    logo: '💪',
    challenge: 'Low local visibility for 28 studio locations nationwide',
    solution: 'Multi-location SEO with class schedule optimization and trainer profiles',
    results: {
      traffic: { value: '+378%', label: 'Local Searches' },
      members: { value: '+234', label: 'New Members/mo' },
      roi: { value: '567%', label: 'ROI' },
      time: { value: '5 months', label: 'Time to Results' }
    },
    metrics: [
      { label: 'Location Pages Optimized', value: '28' },
      { label: 'Class Pages Created', value: '156' },
      { label: 'Member Lifetime Value', value: '$2,400' },
      { label: 'Retention Rate Increase', value: '+23%' }
    ],
    testimonial: {
      quote: "Every location saw dramatic growth. The AI perfectly optimized each studio for its local market.",
      author: 'Jennifer Park',
      role: 'Director of Growth'
    }
  }
]

export default function CaseStudiesPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-b from-primary-50 via-white to-gray-50 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-success-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob" />
          <div className="absolute top-40 right-10 w-72 h-72 bg-primary-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-success-100 to-primary-100 text-success-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
              <Award className="h-4 w-4" />
              <span>Real Results from Real Clients</span>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              <span className="bg-gradient-to-r from-success-500 to-primary-500 bg-clip-text text-transparent">
                387% Average ROI
              </span>
              {' '}Speaks for Itself
            </h1>
            
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              See how businesses like yours transformed their online presence with AI-powered SEO 
              that delivers measurable results in months, not years.
            </p>

            {/* Summary Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
              <div className="bg-white rounded-xl p-4 border border-gray-200">
                <div className="text-2xl font-bold text-primary-600">500+</div>
                <div className="text-sm text-gray-600">Success Stories</div>
              </div>
              <div className="bg-white rounded-xl p-4 border border-gray-200">
                <div className="text-2xl font-bold text-success-600">$127M</div>
                <div className="text-sm text-gray-600">Revenue Generated</div>
              </div>
              <div className="bg-white rounded-xl p-4 border border-gray-200">
                <div className="text-2xl font-bold text-electric-600">3-6 mo</div>
                <div className="text-sm text-gray-600">Avg. Time to ROI</div>
              </div>
              <div className="bg-white rounded-xl p-4 border border-gray-200">
                <div className="text-2xl font-bold text-accent-600">4.9/5</div>
                <div className="text-sm text-gray-600">Client Satisfaction</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Case Study */}
      {caseStudies.filter(cs => cs.featured).map((study) => (
        <section key={study.id} className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-primary-50 to-electric-50 rounded-3xl p-8 lg:p-12"
            >
              <div className="flex items-center gap-2 mb-6">
                <div className="bg-warning-100 text-warning-700 px-3 py-1 rounded-full text-sm font-medium">
                  Featured Success Story
                </div>
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-warning-400 text-warning-400" />
                  ))}
                </div>
              </div>

              <div className="grid lg:grid-cols-2 gap-12">
                <div>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="text-5xl">{study.logo}</div>
                    <div>
                      <h2 className="text-2xl font-bold text-gray-900">{study.company}</h2>
                      <p className="text-gray-600">{study.industry}</p>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">The Challenge</h3>
                      <p className="text-gray-600">{study.challenge}</p>
                    </div>

                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Our Solution</h3>
                      <p className="text-gray-600">{study.solution}</p>
                    </div>

                    <div className="bg-white rounded-xl p-6 border border-primary-200">
                      <p className="text-gray-700 italic mb-4">"{study.testimonial.quote}"</p>
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-gradient-to-br from-primary-400 to-electric-400 rounded-full" />
                        <div>
                          <div className="font-semibold text-gray-900">{study.testimonial.author}</div>
                          <div className="text-sm text-gray-600">{study.testimonial.role}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  {/* Main Results */}
                  <div className="grid grid-cols-2 gap-4 mb-8">
                    <div className="bg-white rounded-xl p-6 text-center border border-gray-200">
                      <div className="text-3xl font-bold text-primary-600">{study.results.traffic.value}</div>
                      <div className="text-sm text-gray-600">{study.results.traffic.label}</div>
                    </div>
                    <div className="bg-white rounded-xl p-6 text-center border border-gray-200">
                      <div className="text-3xl font-bold text-success-600">
                        {(study.results as any).revenue?.value || 
                         (study.results as any).appointments?.value || 
                         (study.results as any).trials?.value || 
                         (study.results as any).leads?.value || 
                         (study.results as any).cases?.value || 
                         (study.results as any).members?.value || 
                         (study.results as any).sales?.value}
                      </div>
                      <div className="text-sm text-gray-600">
                        {(study.results as any).revenue?.label || 
                         (study.results as any).appointments?.label || 
                         (study.results as any).trials?.label || 
                         (study.results as any).leads?.label || 
                         (study.results as any).cases?.label || 
                         (study.results as any).members?.label || 
                         (study.results as any).sales?.label}
                      </div>
                    </div>
                    <div className="bg-white rounded-xl p-6 text-center border border-gray-200">
                      <div className="text-3xl font-bold text-electric-600">{study.results.roi.value}</div>
                      <div className="text-sm text-gray-600">{study.results.roi.label}</div>
                    </div>
                    <div className="bg-white rounded-xl p-6 text-center border border-gray-200">
                      <div className="text-3xl font-bold text-accent-600">{study.results.time.value}</div>
                      <div className="text-sm text-gray-600">{study.results.time.label}</div>
                    </div>
                  </div>

                  {/* Detailed Metrics */}
                  <div className="bg-white rounded-xl p-6 space-y-4">
                    <h4 className="font-semibold text-gray-900">Key Metrics</h4>
                    {study.metrics.map((metric, idx) => (
                      <div key={idx} className="flex justify-between items-center">
                        <span className="text-gray-600">{metric.label}</span>
                        <span className="font-semibold text-gray-900">{metric.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      ))}

      {/* Other Case Studies Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">More Success Stories</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.filter(cs => !cs.featured).map((study, index) => (
              <motion.div
                key={study.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 border border-gray-200 hover:border-primary-300 hover:shadow-xl transition-all"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="text-3xl">{study.logo}</div>
                  <div>
                    <h3 className="font-bold text-gray-900">{study.company}</h3>
                    <p className="text-sm text-gray-600">{study.industry}</p>
                  </div>
                </div>

                <p className="text-sm text-gray-600 mb-4">{study.challenge}</p>

                <div className="grid grid-cols-2 gap-3 mb-4">
                  <div className="text-center p-3 bg-gray-50 rounded-lg">
                    <div className="text-xl font-bold text-primary-600">{study.results.traffic.value}</div>
                    <div className="text-xs text-gray-600">Traffic</div>
                  </div>
                  <div className="text-center p-3 bg-gray-50 rounded-lg">
                    <div className="text-xl font-bold text-success-600">{study.results.roi.value}</div>
                    <div className="text-xs text-gray-600">ROI</div>
                  </div>
                </div>

                <div className="border-t pt-4">
                  <p className="text-sm text-gray-700 italic mb-3">
                    "{study.testimonial.quote}"
                  </p>
                  <div className="text-xs text-gray-600">
                    — {study.testimonial.author}, {study.testimonial.role}
                  </div>
                </div>

                <button className="mt-4 w-full text-primary-600 hover:text-primary-700 text-sm font-medium flex items-center justify-center gap-1 group">
                  View Full Case Study
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Breakdown */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Success Across Every Industry</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our AI-powered SEO strategies are customized for your specific industry challenges and opportunities
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-4">
            {industries.map((industry, index) => {
              const Icon = industry.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Link
                    href={`/industries/${industry.name.toLowerCase().replace(' ', '-')}`}
                    className="block bg-gray-50 rounded-xl p-6 text-center hover:bg-primary-50 hover:border-primary-200 border border-gray-200 transition-all group"
                  >
                    <Icon className="h-8 w-8 mx-auto mb-3 text-gray-600 group-hover:text-primary-600 transition-colors" />
                    <div className="font-semibold text-gray-900">{industry.name}</div>
                    <div className="text-sm text-gray-600">{industry.count} clients</div>
                  </Link>
                </motion.div>
              )
            })}
          </div>
          
          <div className="text-center mt-8">
            <Link
              href="/industries"
              className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 font-semibold"
            >
              View All Industries
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* How We Deliver Results */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Proven Process</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Every success story follows our battle-tested methodology
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: 1, title: "AI Analysis", desc: "10,000+ ranking factors analyzed in minutes", icon: Brain },
              { step: 2, title: "Strategy", desc: "Custom roadmap based on your industry & goals", icon: Target },
              { step: 3, title: "Execution", desc: "AI + human experts implement at scale", icon: Zap },
              { step: 4, title: "Results", desc: "Measurable ROI in 3-6 months guaranteed", icon: TrendingUp }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative"
              >
                <div className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-shadow">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-10 h-10 bg-gradient-to-r from-primary-500 to-electric-500 rounded-full flex items-center justify-center text-white font-bold">
                      {item.step}
                    </div>
                    <item.icon className="h-6 w-6 text-primary-500" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </div>
                {index < 3 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                    <ArrowRight className="h-6 w-6 text-gray-400" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Location Focus */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-blue-500 to-indigo-500 rounded-3xl p-8 lg:p-12 text-white">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <MapPin className="h-5 w-5" />
                  <span className="font-semibold">Long Beach, California</span>
                </div>
                <h2 className="text-3xl font-bold mb-4">
                  Local Expertise. Global Results.
                </h2>
                <p className="text-white/90 mb-6">
                  Based in Long Beach, we've helped local businesses dominate their markets while also serving 
                  clients nationwide. Our local roots give us unique insights into competitive markets.
                </p>
                <Link
                  href="/local-seo-long-beach"
                  className="inline-flex items-center gap-2 bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all"
                >
                  Learn About Local SEO
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/10 backdrop-blur rounded-xl p-6">
                  <div className="text-3xl font-bold">127</div>
                  <div className="text-sm">Long Beach Businesses</div>
                </div>
                <div className="bg-white/10 backdrop-blur rounded-xl p-6">
                  <div className="text-3xl font-bold">500+</div>
                  <div className="text-sm">National Clients</div>
                </div>
                <div className="bg-white/10 backdrop-blur rounded-xl p-6">
                  <div className="text-3xl font-bold">#1</div>
                  <div className="text-sm">Rankings Achieved</div>
                </div>
                <div className="bg-white/10 backdrop-blur rounded-xl p-6">
                  <div className="text-3xl font-bold">24/7</div>
                  <div className="text-sm">AI Monitoring</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-500 to-electric-500 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Sparkles className="h-4 w-4" />
              <span>Limited Spots Available</span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Ready to Be Our Next Success Story?
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Join 500+ businesses achieving extraordinary results with AI-powered SEO
            </p>
            
            <div className="bg-white/10 backdrop-blur rounded-xl p-6 mb-8 max-w-2xl mx-auto">
              <h3 className="text-lg font-semibold mb-4">Your Free Audit Includes:</h3>
              <div className="grid md:grid-cols-2 gap-3 text-left">
                {[
                  "Competitor analysis report",
                  "10,000+ ranking factors scan",
                  "Custom strategy roadmap",
                  "ROI projection calculator",
                  "Technical SEO audit",
                  "Content gap analysis",
                  "Link profile review",
                  "30-minute strategy call"
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-2 text-white/90">
                    <CheckCircle className="h-4 w-4 text-white/70 flex-shrink-0" />
                    <span className="text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/free-audit"
                className="inline-flex items-center justify-center gap-2 bg-white text-primary-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-all shadow-xl"
              >
                Get Your Free Audit
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur text-white border-2 border-white/20 px-8 py-4 rounded-xl font-semibold hover:bg-white/20 transition-all"
              >
                Schedule a Call
                <Users className="h-5 w-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}