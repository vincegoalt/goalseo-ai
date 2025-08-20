"use client"

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { 
  Users, Brain, Award, Globe, Linkedin,
  Twitter, Github, ArrowRight, Sparkles
} from 'lucide-react'

export default function TeamPage() {
  const team = [
    {
      name: 'Sarah Chen',
      role: 'CEO & Co-Founder',
      bio: 'Former Google AI researcher with 15+ years in SEO and machine learning.',
      image: '/team/sarah.jpg',
      linkedin: '#',
      twitter: '#'
    },
    {
      name: 'Michael Rodriguez',
      role: 'CTO & Co-Founder',
      bio: 'Built SEO systems at Amazon. Expert in large-scale AI infrastructure.',
      image: '/team/michael.jpg',
      linkedin: '#',
      github: '#'
    },
    {
      name: 'Emily Watson',
      role: 'Head of AI',
      bio: 'PhD in NLP from MIT. Published 30+ papers on semantic search.',
      image: '/team/emily.jpg',
      linkedin: '#',
      twitter: '#'
    },
    {
      name: 'David Park',
      role: 'VP of Engineering',
      bio: 'Previously at Meta. Scaled systems to billions of queries.',
      image: '/team/david.jpg',
      linkedin: '#',
      github: '#'
    },
    {
      name: 'Lisa Thompson',
      role: 'Head of Customer Success',
      bio: '10+ years helping businesses grow with SEO. Your success is our mission.',
      image: '/team/lisa.jpg',
      linkedin: '#',
      twitter: '#'
    },
    {
      name: 'James Kumar',
      role: 'Head of Product',
      bio: 'Product leader from Shopify. Obsessed with user experience.',
      image: '/team/james.jpg',
      linkedin: '#',
      twitter: '#'
    }
  ]
  
  const values = [
    { icon: Brain, title: 'Innovation First', desc: 'Pushing boundaries with AI' },
    { icon: Users, title: 'Customer Obsessed', desc: 'Your success drives us' },
    { icon: Award, title: 'Excellence Always', desc: 'Never settle for good enough' },
    { icon: Globe, title: 'Global Impact', desc: 'Helping businesses worldwide' }
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
              <Users className="h-4 w-4" />
              <span>Our Team</span>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              Meet the{' '}
              <span className="bg-gradient-to-r from-primary-500 to-electric-500 bg-clip-text text-transparent">
                Innovators
              </span>
            </h1>
            
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're a team of AI researchers, SEO experts, and engineers on a mission 
              to democratize SEO with artificial intelligence.
            </p>
          </motion.div>
        </div>
      </section>
      
      {/* Team Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all"
              >
                <div className="aspect-square bg-gradient-to-br from-primary-100 to-electric-100 relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Users className="h-20 w-20 text-primary-300" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-primary-600 font-semibold mb-3">{member.role}</p>
                  <p className="text-gray-600 mb-4">{member.bio}</p>
                  <div className="flex gap-3">
                    {member.linkedin && (
                      <a href={member.linkedin} className="text-gray-400 hover:text-primary-600 transition-colors">
                        <Linkedin className="h-5 w-5" />
                      </a>
                    )}
                    {member.twitter && (
                      <a href={member.twitter} className="text-gray-400 hover:text-primary-600 transition-colors">
                        <Twitter className="h-5 w-5" />
                      </a>
                    )}
                    {member.github && (
                      <a href={member.github} className="text-gray-400 hover:text-primary-600 transition-colors">
                        <Github className="h-5 w-5" />
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              What drives us every day to build better SEO solutions
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-primary-100 to-electric-100 rounded-xl mb-4">
                    <Icon className="h-8 w-8 text-primary-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{value.title}</h3>
                  <p className="text-gray-600">{value.desc}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>
      
      {/* Stats */}
      <section className="py-20 bg-gradient-to-r from-primary-500 to-electric-500 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { value: '50+', label: 'Team Members' },
              { value: '10K+', label: 'Happy Customers' },
              { value: '5B+', label: 'Keywords Tracked' },
              { value: '99.9%', label: 'Uptime' }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="text-4xl font-bold mb-2">{stat.value}</div>
                <div className="text-white/80">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Join Us CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Join Our Mission
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              We're always looking for talented people who share our vision
            </p>
            <Link
              href="/careers"
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-primary-500 to-primary-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-primary-600 hover:to-primary-700 transition-all"
            >
              View Open Positions
              <ArrowRight className="h-5 w-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}