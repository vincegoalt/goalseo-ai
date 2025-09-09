"use client"

import { motion } from 'framer-motion'
import Link from 'next/link'
import { 
  Newspaper, Download, Calendar, Award,
  ArrowRight, ExternalLink, FileText, Camera,
  Users, TrendingUp, Zap, Globe
} from 'lucide-react'

export default function PressPage() {
  const pressReleases = [
    {
      date: "December 15, 2024",
      title: "GoalSEO.ai Raises $10M Series A to Revolutionize AI-Powered SEO",
      excerpt: "Funding round led by top VC firms to accelerate product development and market expansion.",
      category: "Funding",
      featured: true
    },
    {
      date: "November 28, 2024",
      title: "GoalSEO.ai Launches Advanced AI Content Generation Suite",
      excerpt: "New AI-powered content generation tools help businesses create SEO-optimized content at scale.",
      category: "Product Launch"
    },
    {
      date: "October 10, 2024",
      title: "GoalSEO.ai Named Leader in AI SEO Tools by Industry Report",
      excerpt: "Recognition for innovation in artificial intelligence and search engine optimization technology.",
      category: "Recognition"
    },
    {
      date: "September 5, 2024",
      title: "GoalSEO.ai Achieves 10,000+ Customer Milestone",
      excerpt: "Platform now serves over 10,000 businesses worldwide with 387% average ROI.",
      category: "Milestone"
    }
  ]

  const mediaKitItems = [
    {
      title: "Company Logo Pack",
      description: "High-resolution logos in various formats",
      type: "ZIP",
      size: "2.4 MB"
    },
    {
      title: "Executive Photos",
      description: "Professional headshots of leadership team",
      type: "ZIP",
      size: "15.2 MB"
    },
    {
      title: "Product Screenshots",
      description: "High-quality platform screenshots",
      type: "ZIP",
      size: "8.7 MB"
    },
    {
      title: "Company Fact Sheet",
      description: "Key statistics and company information",
      type: "PDF",
      size: "234 KB"
    }
  ]

  const awards = [
    {
      year: "2024",
      title: "Best AI SEO Platform",
      organization: "SaaS Awards",
      description: "Recognized for innovation in AI-powered SEO technology"
    },
    {
      year: "2024",
      title: "Startup of the Year",
      organization: "TechCrunch Disrupt",
      description: "Winner in the Marketing Technology category"
    },
    {
      year: "2023",
      title: "Rising Star Award",
      organization: "MarTech Breakthrough",
      description: "Outstanding achievement in search marketing innovation"
    }
  ]

  const stats = [
    { number: "10,000+", label: "Active Customers" },
    { number: "387%", label: "Average ROI" },
    { number: "$50M+", label: "Revenue Generated" },
    { number: "95%", label: "Client Retention" }
  ]

  const teamMembers = [
    {
      name: "Vincent Pivard",
      role: "CEO & Co-founder",
      bio: "Former VP of Product at Google Search, 15+ years in AI and search technology",
      image: "/team/sarah-chen.jpg"
    },
    {
      name: "Marcus Rodriguez",
      role: "CTO & Co-founder", 
      bio: "Ex-Tesla AI Engineer, PhD in Machine Learning from Stanford",
      image: "/team/marcus-rodriguez.jpg"
    }
  ]

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-b from-primary-50 via-white to-gray-50 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-96 h-96 bg-primary-300/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-electric-300/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary-100 to-electric-100 text-primary-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Newspaper className="h-4 w-4" />
              <span>Press & Media</span>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              Press &{' '}
              <span className="bg-gradient-to-r from-primary-500 to-electric-500 bg-clip-text text-transparent">
                Media Center
              </span>
            </h1>
            
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Latest news, press releases, and media resources for journalists, 
              investors, and industry analysts covering GoalSEO.ai.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="#press-releases"
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-primary-500 to-primary-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-primary-600 hover:to-primary-700 transition-all"
              >
                Latest News
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                href="#media-kit"
                className="inline-flex items-center justify-center gap-2 bg-white text-primary-600 border-2 border-primary-200 px-8 py-4 rounded-xl font-semibold hover:bg-primary-50 transition-all"
              >
                Download Media Kit
                <Download className="h-5 w-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Company Stats */}
      <section className="py-16 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl font-bold text-primary-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Press Releases */}
      <section id="press-releases" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Latest Press Releases
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Stay updated with GoalSEO.ai company news and announcements
            </p>
          </motion.div>
          
          <div className="space-y-8">
            {pressReleases.map((release, index) => (
              <motion.article
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`p-8 rounded-xl border-2 hover:shadow-xl transition-all ${
                  release.featured 
                    ? 'bg-gradient-to-r from-primary-50 to-electric-50 border-primary-200' 
                    : 'bg-white border-gray-200 hover:border-primary-200'
                }`}
              >
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="text-sm text-gray-500 flex items-center gap-2">
                        <Calendar className="h-4 w-4" />
                        {release.date}
                      </span>
                      <span className="text-xs bg-primary-100 text-primary-700 px-2 py-1 rounded">
                        {release.category}
                      </span>
                      {release.featured && (
                        <span className="text-xs bg-electric-100 text-electric-700 px-2 py-1 rounded">
                          Featured
                        </span>
                      )}
                    </div>
                    
                    <h3 className="text-2xl font-bold text-gray-900 mb-3 hover:text-primary-600 transition-colors">
                      {release.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-4">
                      {release.excerpt}
                    </p>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-2">
                    <Link
                      href={`/press/${index + 1}`}
                      className="inline-flex items-center gap-2 px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
                    >
                      Read Full Release
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Awards & Recognition */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Awards & Recognition
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Industry recognition for innovation and excellence in AI-powered SEO
            </p>
          </motion.div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {awards.map((award, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all"
              >
                <Award className="h-12 w-12 text-primary-600 mb-4" />
                <div className="text-sm text-primary-600 font-semibold mb-2">
                  {award.year}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {award.title}
                </h3>
                <p className="text-primary-600 font-semibold mb-3">
                  {award.organization}
                </p>
                <p className="text-gray-600 text-sm">
                  {award.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Media Kit */}
      <section id="media-kit" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Media Kit & Resources
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Download high-quality assets, logos, and company information for media coverage
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {mediaKitItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-primary-50 to-electric-50 rounded-xl p-6 hover:shadow-lg transition-all"
              >
                <FileText className="h-12 w-12 text-primary-600 mb-4" />
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  {item.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-500">
                    {item.type} • {item.size}
                  </span>
                  <button className="text-primary-600 hover:text-primary-700 transition-colors">
                    <Download className="h-5 w-5" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-gradient-to-r from-primary-500 to-electric-500 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Media Inquiries
          </h2>
          <p className="text-xl mb-8 text-white/90">
            For press inquiries, interviews, or additional information, please contact our media team.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <h3 className="text-xl font-bold mb-2">Press Contact</h3>
              <p className="text-white/90">press@goalseo.ai</p>
              <p className="text-white/90">(562) 682-9403</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <h3 className="text-xl font-bold mb-2">Investor Relations</h3>
              <p className="text-white/90">investors@goalseo.ai</p>
              <p className="text-white/90">(562) 682-9403</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}