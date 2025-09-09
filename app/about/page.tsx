"use client"

import { motion } from 'framer-motion'
import Link from 'next/link'
import { 
  Users, Target, Award, Zap, Brain, Shield, Globe,
  ArrowRight, CheckCircle, Star, TrendingUp, Bot,
  Heart, Sparkles, Building, Calendar
} from 'lucide-react'

const values = [
  {
    icon: Target,
    title: 'Local SEO Expertise',
    description: 'Deep knowledge of Long Beach and Southern California markets with proven local ranking strategies.'
  },
  {
    icon: Users,
    title: 'Client Success',
    description: 'Your success is our success. We work as an extension of your team, not just a vendor.'
  },
  {
    icon: Shield,
    title: 'White-Hat Only',
    description: 'We use only Google-approved tactics that build sustainable, long-term rankings.'
  },
  {
    icon: TrendingUp,
    title: 'Results Driven',
    description: 'Every strategy is data-driven and ROI-focused. We measure success by your growth.'
  },
  {
    icon: Globe,
    title: 'Full-Service SEO',
    description: 'From technical SEO to content marketing and link building - we handle everything.'
  },
  {
    icon: Heart,
    title: 'Community Focused',
    description: 'Proud to serve Long Beach businesses since 2020. Your local success is our mission.'
  }
]

const milestones = [
  { year: '2020', event: 'GoalSEO founded in Long Beach to serve local businesses' },
  { year: '2021', event: 'Expanded to serve all of Southern California, 50+ clients' },
  { year: '2022', event: 'Reached 200 clients, specialized in 12 industry verticals' },
  { year: '2023', event: 'Opened Belmont Shore office, serving 35+ local cities' },
  { year: '2024', event: 'Achieved 500+ clients across California' },
  { year: '2025', event: 'Leading Long Beach SEO agency with 387% average client ROI' }
]

const team = [
  {
    name: 'Vincent Pivard',
    role: 'President & CEO',
    bio: 'Former Google engineer with 15+ years in SEO and AI',
    avatar: '👨‍💼'
  },
  {
    name: 'Sarah Martinez',
    role: 'Chief AI Officer',
    bio: 'PhD in Machine Learning, architect of our AI SEO engine',
    avatar: '👩‍💻'
  },
  {
    name: 'Michael Park',
    role: 'VP of Client Success',
    bio: '10+ years helping brands dominate search results',
    avatar: '👨‍💼'
  },
  {
    name: 'Emily Zhang',
    role: 'Head of SEO Strategy',
    bio: 'Former SEO lead at Fortune 500 companies',
    avatar: '👩‍💼'
  },
  {
    name: 'David Thompson',
    role: 'Director of Engineering',
    bio: 'Building scalable AI systems for SEO automation',
    avatar: '👨‍💻'
  },
  {
    name: 'Lisa Anderson',
    role: 'VP of Growth',
    bio: 'Scaling successful companies from startup to enterprise',
    avatar: '👩‍💼'
  }
]

export default function AboutPage() {
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
              <Building className="h-4 w-4" />
              <span>Long Beach SEO Agency</span>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              Long Beach's Premier{' '}
              <span className="bg-gradient-to-r from-primary-500 to-electric-500 bg-clip-text text-transparent">
                SEO Agency
              </span>
            </h1>
            
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
              GoalSEO is Long Beach's leading SEO agency, specializing in local search optimization 
              for businesses across Southern California. We combine deep local market knowledge with 
              proven SEO strategies to deliver exceptional results at affordable prices.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <div className="text-3xl font-bold text-primary-600">500+</div>
                <div className="text-sm text-gray-600">Active Clients</div>
              </div>
              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <div className="text-3xl font-bold text-success-600">$127M</div>
                <div className="text-sm text-gray-600">Revenue Generated</div>
              </div>
              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <div className="text-3xl font-bold text-electric-600">387%</div>
                <div className="text-sm text-gray-600">Average ROI</div>
              </div>
              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <div className="text-3xl font-bold text-accent-600">35+</div>
                <div className="text-sm text-gray-600">Cities Served</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
              
              <div className="space-y-4 text-gray-600">
                <p>
                  In 2020, our founder Vincent Pivard established GoalSEO in Long Beach with a vision: 
                  provide enterprise-level SEO services to local businesses at affordable prices. After years 
                  in the industry, he saw too many businesses struggling with overpriced agencies.
                </p>
                <p>
                  We started by focusing on Long Beach businesses, understanding the unique challenges and 
                  opportunities of our local market. Our first client, a Belmont Shore restaurant, saw a 
                  312% traffic increase in 3 months. Word spread quickly throughout the community.
                </p>
                <p>
                  Today, GoalSEO serves over 500 businesses across 35+ cities in Southern California, from 
                  local shops in Signal Hill to growing brands in Lakewood. We've generated over $127M in 
                  revenue for our clients through strategic SEO that actually works.
                </p>
                <p className="font-semibold text-gray-900">
                  We're not just another SEO agency. We're your local Long Beach partners committed to 
                  helping businesses dominate search results and grow their customer base.
                </p>
              </div>

              <div className="mt-8">
                <Link
                  href="/case-studies"
                  className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 font-medium"
                >
                  Read Our Success Stories
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-primary-50 to-electric-50 rounded-2xl p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Our Journey</h3>
                <div className="space-y-4">
                  {milestones.map((milestone, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex gap-4"
                    >
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center border-2 border-primary-300">
                          <Calendar className="h-5 w-5 text-primary-600" />
                        </div>
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900">{milestone.year}</div>
                        <div className="text-sm text-gray-600">{milestone.event}</div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These principles guide everything we do, from product development to client relationships.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-xl p-6 border border-gray-200 hover:border-primary-300 hover:shadow-lg transition-all"
                >
                  <div className="inline-flex p-3 bg-gradient-to-br from-primary-50 to-electric-50 rounded-xl mb-4">
                    <Icon className="h-6 w-6 text-primary-500" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A diverse team of SEO experts, AI engineers, and growth specialists working to revolutionize digital marketing.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-6xl mb-4">{member.avatar}</div>
                <h3 className="text-lg font-semibold text-gray-900">{member.name}</h3>
                <p className="text-primary-600 text-sm mb-2">{member.role}</p>
                <p className="text-gray-600 text-sm">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gradient-to-b from-primary-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Businesses Choose GoalSEO
            </h2>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-6 border border-gray-200"
            >
              <div className="text-primary-600 font-semibold mb-4">vs. Traditional Agencies</div>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-success-500 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-700">6X cheaper ($499 vs $3,000/mo)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-success-500 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-700">Results in days, not months</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-success-500 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-700">No contracts or lock-ins</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-success-500 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-700">24/7 optimization vs 9-5</span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white rounded-xl p-6 border border-gray-200"
            >
              <div className="text-primary-600 font-semibold mb-4">vs. DIY Tools</div>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-success-500 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-700">Fully automated, no manual work</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-success-500 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-700">Industry-specific AI strategies</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-success-500 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-700">Expert support included</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-success-500 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-700">Proven 387% average ROI</span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-xl p-6 border border-gray-200"
            >
              <div className="text-primary-600 font-semibold mb-4">Our Guarantee</div>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <Star className="h-5 w-5 text-warning-500 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-700">14-day money-back guarantee</span>
                </li>
                <li className="flex items-start gap-2">
                  <Star className="h-5 w-5 text-warning-500 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-700">No setup fees or hidden costs</span>
                </li>
                <li className="flex items-start gap-2">
                  <Star className="h-5 w-5 text-warning-500 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-700">Cancel anytime, no questions</span>
                </li>
                <li className="flex items-start gap-2">
                  <Star className="h-5 w-5 text-warning-500 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-700">White-glove onboarding</span>
                </li>
              </ul>
            </motion.div>
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
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Ready to Dominate Local Search?
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Join 500+ Southern California businesses ranking #1 in their markets
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/free-audit"
                className="inline-flex items-center justify-center gap-2 bg-white text-primary-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-all shadow-xl"
              >
                Get Free AI Audit
                <Sparkles className="h-5 w-5" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur text-white border-2 border-white/20 px-8 py-4 rounded-xl font-semibold hover:bg-white/20 transition-all"
              >
                Talk to Our Team
                <Users className="h-5 w-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}