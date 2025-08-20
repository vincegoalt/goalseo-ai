"use client"

import { motion } from 'framer-motion'
import Link from 'next/link'
import { 
  Briefcase, MapPin, Clock, DollarSign,
  ArrowRight, CheckCircle, Heart, Zap,
  Users, Globe, Award, Sparkles
} from 'lucide-react'

export default function CareersPage() {
  const positions = [
    {
      title: 'Senior AI Engineer',
      department: 'Engineering',
      location: 'Remote / San Francisco',
      type: 'Full-time',
      salary: '$180k - $250k',
      description: 'Build next-gen AI models for SEO optimization'
    },
    {
      title: 'Product Designer',
      department: 'Design',
      location: 'Remote / New York',
      type: 'Full-time',
      salary: '$130k - $180k',
      description: 'Design intuitive interfaces for complex AI tools'
    },
    {
      title: 'Customer Success Manager',
      department: 'Customer Success',
      location: 'Remote',
      type: 'Full-time',
      salary: '$90k - $120k',
      description: 'Help customers achieve their SEO goals'
    },
    {
      title: 'SEO Content Strategist',
      department: 'Marketing',
      location: 'Remote',
      type: 'Full-time',
      salary: '$80k - $110k',
      description: 'Create content that ranks and converts'
    },
    {
      title: 'DevOps Engineer',
      department: 'Engineering',
      location: 'Remote / Austin',
      type: 'Full-time',
      salary: '$150k - $200k',
      description: 'Scale our infrastructure to millions of users'
    },
    {
      title: 'Data Scientist',
      department: 'AI/ML',
      location: 'Remote / Seattle',
      type: 'Full-time',
      salary: '$160k - $220k',
      description: 'Analyze SEO data and improve AI models'
    }
  ]
  
  const benefits = [
    { icon: Heart, title: 'Health & Wellness', desc: '100% coverage for you and family' },
    { icon: Globe, title: 'Remote First', desc: 'Work from anywhere in the world' },
    { icon: DollarSign, title: 'Equity', desc: 'Own a piece of the company' },
    { icon: Users, title: 'Team Retreats', desc: 'Quarterly in-person gatherings' },
    { icon: Award, title: 'Learning Budget', desc: '$5,000/year for growth' },
    { icon: Clock, title: 'Flexible Hours', desc: 'Work when you\'re most productive' }
  ]
  
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-b from-primary-50 via-white to-gray-50 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-96 h-96 bg-primary-300/30 rounded-full mix-blend-multiply filter blur-3xl animate-blob" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-electric-300/30 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary-100 to-electric-100 text-primary-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Briefcase className="h-4 w-4" />
              <span>Careers</span>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              Build the Future of{' '}
              <span className="bg-gradient-to-r from-primary-500 to-electric-500 bg-clip-text text-transparent">
                SEO with AI
              </span>
            </h1>
            
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Join our mission to democratize SEO and help millions of businesses 
              succeed online with cutting-edge AI technology.
            </p>
            
            <Link
              href="#positions"
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-primary-500 to-primary-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-primary-600 hover:to-primary-700 transition-all"
            >
              View Open Positions
              <ArrowRight className="h-5 w-5" />
            </Link>
          </motion.div>
        </div>
      </section>
      
      {/* Why Join Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Join GoalSEO?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Be part of something bigger than yourself
            </p>
          </motion.div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Cutting-Edge Technology',
                desc: 'Work with the latest AI and machine learning technologies. Shape the future of SEO.',
                icon: Zap
              },
              {
                title: 'Impact at Scale',
                desc: 'Your work will help millions of businesses grow and succeed online.',
                icon: Globe
              },
              {
                title: 'Growth & Learning',
                desc: 'Continuous learning opportunities with top experts in AI and SEO.',
                icon: Award
              }
            ].map((item, index) => {
              const Icon = item.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-gradient-to-br from-primary-50 to-electric-50 rounded-xl p-8"
                >
                  <Icon className="h-12 w-12 text-primary-600 mb-4" />
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>
      
      {/* Open Positions */}
      <section id="positions" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Open Positions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Find your next opportunity with us
            </p>
          </motion.div>
          
          <div className="space-y-6">
            {positions.map((position, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all"
              >
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{position.title}</h3>
                    <p className="text-gray-600 mb-3">{position.description}</p>
                    <div className="flex flex-wrap gap-4 text-sm">
                      <span className="flex items-center gap-1 text-gray-500">
                        <Briefcase className="h-4 w-4" />
                        {position.department}
                      </span>
                      <span className="flex items-center gap-1 text-gray-500">
                        <MapPin className="h-4 w-4" />
                        {position.location}
                      </span>
                      <span className="flex items-center gap-1 text-gray-500">
                        <Clock className="h-4 w-4" />
                        {position.type}
                      </span>
                      <span className="flex items-center gap-1 text-gray-500">
                        <DollarSign className="h-4 w-4" />
                        {position.salary}
                      </span>
                    </div>
                  </div>
                  <Link
                    href={`/careers/apply?position=${encodeURIComponent(position.title)}`}
                    className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-primary-500 to-primary-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-primary-600 hover:to-primary-700 transition-all whitespace-nowrap"
                  >
                    Apply Now
                    <ArrowRight className="h-5 w-5" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Benefits */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Benefits & Perks
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We take care of our team
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex gap-4"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-primary-100 to-electric-100 rounded-lg flex items-center justify-center">
                    <Icon className="h-6 w-6 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">{benefit.title}</h3>
                    <p className="text-gray-600">{benefit.desc}</p>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>
      
      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-primary-500 to-electric-500 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Don't See Your Role?
          </h2>
          <p className="text-xl mb-8 text-white/90">
            We're always looking for exceptional talent. Send us your resume!
          </p>
          <a
            href="mailto:careers@goalseo.ai"
            className="inline-flex items-center justify-center gap-2 bg-white text-primary-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-all shadow-xl"
          >
            Send Your Resume
            <ArrowRight className="h-5 w-5" />
          </a>
        </div>
      </section>
    </div>
  )
}