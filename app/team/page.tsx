"use client"

import { motion } from 'framer-motion'
import Link from 'next/link'
import { 
  Award, Briefcase, GraduationCap, Star, Globe, Code,
  TrendingUp, Users, ArrowRight, Brain, Bot, Shield,
  Linkedin, Twitter, MessageSquare, Sparkles, CheckCircle
} from 'lucide-react'

export default function TeamPage() {
  const team = [
    {
      name: "Vincent Chen",
      role: "Founder & CEO",
      bio: "10+ years in SEO with a focus on technical innovation. Former Director of SEO at a Fortune 500 company. Speaker at SMX, Pubcon, and BrightonSEO.",
      specialties: ["E-commerce SEO", "Technical SEO", "GEO Strategy"],
      certifications: ["Google Partner", "Shopify Plus Partner"],
      linkedin: "#",
      twitter: "#"
    },
    {
      name: "Sarah Chen",
      role: "Head of Content Strategy",
      bio: "8+ years in content marketing and SEO. Published in Search Engine Journal, Moz, and Search Engine Land. Expert in E-E-A-T optimization.",
      specialties: ["Content Strategy", "GEO", "AEO"],
      certifications: ["Content Marketing Institute", "HubSpot Content Marketing"],
      linkedin: "#",
      twitter: "#"
    },
    {
      name: "Mike Rodriguez",
      role: "Technical SEO Lead",
      bio: "Full-stack developer turned SEO specialist. Expert in JavaScript SEO, Core Web Vitals, and enterprise technical implementations.",
      specialties: ["JavaScript SEO", "Core Web Vitals", "Site Architecture"],
      certifications: ["Google Cloud Certified", "AWS Solutions Architect"],
      linkedin: "#",
      twitter: "#"
    },
    {
      name: "Emily Thompson",
      role: "Link Building Director",
      bio: "7+ years building relationships and earning high-quality links. Developed proprietary outreach strategies that achieve 73% success rates.",
      specialties: ["Digital PR", "Outreach", "Relationship Building"],
      certifications: ["PRSA Certified", "Google Analytics"],
      linkedin: "#",
      twitter: "#"
    },
    {
      name: "David Park",
      role: "Local SEO Specialist",
      bio: "Long Beach native with 6+ years helping local businesses dominate search. Expert in Google Business Profile optimization and local link building.",
      specialties: ["Local SEO", "GMB Optimization", "Citation Building"],
      certifications: ["Google My Business Product Expert", "Moz Local Certified"],
      linkedin: "#",
      twitter: "#"
    },
    {
      name: "GOAL",
      role: "AI Team Lead",
      bio: "Our proprietary AI system that processes 1M+ keywords daily, monitors 10,000+ ranking factors, and never stops learning. Works alongside our human team 24/7.",
      specialties: ["Data Analysis", "Pattern Recognition", "Predictive Analytics"],
      certifications: ["Always Learning", "Never Sleeping"],
      isAI: true
    }
  ]

  const stats = [
    { label: "Combined Years Experience", value: "50+", icon: Award },
    { label: "Certifications", value: "25+", icon: GraduationCap },
    { label: "Conference Speaking", value: "100+", icon: MessageSquare },
    { label: "Published Articles", value: "500+", icon: TrendingUp }
  ]

  const humanExpertise = [
    { icon: Brain, title: "Strategic Thinking", desc: "Understanding your business goals and creating custom strategies that align SEO with your broader objectives." },
    { icon: Users, title: "Relationship Building", desc: "Creating genuine partnerships for link building and fostering relationships that machines simply cannot replicate." },
    { icon: Sparkles, title: "Creative Innovation", desc: "Developing unique content angles and creative campaigns that stand out in crowded markets." }
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
            <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full text-sm font-medium mb-6 border border-gray-200">
              <Users className="h-4 w-4 text-primary-500" />
              <span className="text-gray-700">Meet the Team</span>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              The Experts Behind{' '}
              <span className="bg-gradient-to-r from-primary-500 to-electric-500 bg-clip-text text-transparent">
                the AI
              </span>
            </h1>
            
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
              While AI handles the data, our team brings the strategy, creativity, and expertise that delivers real results.
            </p>

            {/* Team Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {stats.map((stat, index) => {
                const Icon = stat.icon
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm hover:shadow-lg transition-shadow"
                  >
                    <Icon className="h-8 w-8 text-primary-500 mb-3 mx-auto" />
                    <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </motion.div>
                )
              })}
            </div>
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
                className={`bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all ${
                  member.isAI ? 'border-2 border-primary-200 bg-gradient-to-br from-primary-50 to-electric-50' : ''
                }`}
              >
                {/* Image Placeholder */}
                <div className="h-64 bg-gradient-to-br from-gray-200 to-gray-300 relative">
                  {member.isAI ? (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Bot className="h-24 w-24 text-primary-500" />
                    </div>
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Users className="h-24 w-24 text-gray-400" />
                    </div>
                  )}
                  {member.isAI && (
                    <div className="absolute top-4 right-4 bg-primary-500 text-white px-3 py-1 rounded-full text-sm font-semibold animate-pulse">
                      AI System
                    </div>
                  )}
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-primary-600 font-medium mb-4">{member.role}</p>
                  
                  <p className="text-gray-600 text-sm mb-4">{member.bio}</p>

                  {/* Specialties */}
                  <div className="mb-4">
                    <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
                      Specializes In
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {member.specialties.map((specialty, i) => (
                        <span 
                          key={i} 
                          className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full"
                        >
                          {specialty}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Certifications */}
                  <div className="mb-4">
                    <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
                      Certifications
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {member.certifications.map((cert, i) => (
                        <span 
                          key={i} 
                          className="text-xs bg-primary-50 text-primary-700 px-2 py-1 rounded-full"
                        >
                          {cert}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Social Links */}
                  {!member.isAI && (
                    <div className="flex gap-3 pt-4 border-t border-gray-200">
                      <a 
                        href={member.linkedin} 
                        className="text-gray-400 hover:text-primary-600 transition-colors"
                        aria-label="LinkedIn"
                      >
                        <Linkedin className="h-5 w-5" />
                      </a>
                      <a 
                        href={member.twitter} 
                        className="text-gray-400 hover:text-primary-600 transition-colors"
                        aria-label="Twitter"
                      >
                        <Twitter className="h-5 w-5" />
                      </a>
                    </div>
                  )}

                  {member.isAI && (
                    <div className="flex items-center gap-2 pt-4 border-t border-gray-200">
                      <div className="flex items-center gap-1">
                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                        <span className="text-sm text-gray-600">Active 24/7</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Brain className="h-4 w-4 text-primary-500" />
                        <span className="text-sm text-gray-600">Always Learning</span>
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Human Expertise Matters */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Why Human Expertise Matters
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              AI is powerful, but these are the things only humans can bring to your SEO strategy
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {humanExpertise.map((item, index) => {
              const Icon = item.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-shadow"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-electric-500 rounded-xl flex items-center justify-center text-white mb-4">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>
      
      {/* Our Process */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              How We Work Together
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our team collaborates seamlessly with AI to deliver exceptional results
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: 1, title: "Strategy", desc: "Humans define goals and strategy", icon: Brain },
              { step: 2, title: "Analysis", desc: "AI processes data and finds patterns", icon: Bot },
              { step: 3, title: "Creation", desc: "Humans craft content and campaigns", icon: Users },
              { step: 4, title: "Optimization", desc: "AI monitors and optimizes 24/7", icon: TrendingUp }
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
                  <div className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2">
                    <ArrowRight className="h-6 w-6 text-gray-400" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-500 to-electric-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Ready to Work with Real Experts?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Our team is ready to combine their expertise with AI power to transform your SEO results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/free-audit"
                className="inline-flex items-center gap-2 bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all shadow-lg"
              >
                <Sparkles className="h-5 w-5" />
                Get Your Free Audit
                <ArrowRight className="h-5 w-5" />
              </Link>
              
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-primary-600 text-white border-2 border-white/20 px-8 py-4 rounded-lg font-semibold hover:bg-primary-700 transition-all"
              >
                <MessageSquare className="h-5 w-5" />
                Talk to an Expert
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}