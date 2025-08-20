"use client"

import { motion } from 'framer-motion'
import Link from 'next/link'
import { 
  Calendar, Clock, User, ArrowRight, TrendingUp, 
  BookOpen, Zap, Search, Filter, ChevronRight
} from 'lucide-react'
import { useState } from 'react'

const categories = [
  'All Posts',
  'SEO Strategy',
  'AI & Technology',
  'Case Studies',
  'Industry News',
  'Tips & Tutorials'
]

const blogPosts = [
  {
    id: '1',
    title: 'How AI is Revolutionizing SEO in 2025: The Complete Guide',
    excerpt: 'Discover how artificial intelligence is transforming search engine optimization and why traditional SEO agencies are becoming obsolete.',
    category: 'AI & Technology',
    author: 'Vincent Chen',
    date: '2025-01-15',
    readTime: '8 min read',
    featured: true,
    image: '🤖'
  },
  {
    id: '2',
    title: '10X Your E-commerce Traffic: Shopify SEO Secrets Revealed',
    excerpt: 'Learn the exact strategies we used to help a Shopify store increase organic traffic by 423% in just 6 months.',
    category: 'Case Studies',
    author: 'Sarah Martinez',
    date: '2025-01-12',
    readTime: '12 min read',
    featured: true,
    image: '🛍️'
  },
  {
    id: '3',
    title: 'Local SEO Domination: Rank #1 in Your City',
    excerpt: 'The ultimate guide to dominating local search results and attracting customers in your area with proven strategies.',
    category: 'SEO Strategy',
    author: 'Michael Park',
    date: '2025-01-10',
    readTime: '10 min read',
    image: '📍'
  },
  {
    id: '4',
    title: 'Content Velocity: How to Publish 100+ SEO Articles Monthly',
    excerpt: 'Our AI-powered content strategy that helps businesses scale content production without sacrificing quality.',
    category: 'Tips & Tutorials',
    author: 'Emily Zhang',
    date: '2025-01-08',
    readTime: '7 min read',
    image: '✍️'
  },
  {
    id: '5',
    title: "The Death of Traditional SEO Agencies: What's Next?",
    excerpt: 'Why paying $5,000/month for Excel reports is over and how AI is democratizing enterprise SEO.',
    category: 'Industry News',
    author: 'Vincent Chen',
    date: '2025-01-05',
    readTime: '6 min read',
    image: '💀'
  },
  {
    id: '6',
    title: 'Technical SEO Audit Checklist: 127 Points to Check',
    excerpt: 'The comprehensive technical SEO audit checklist our AI uses to identify and fix ranking issues.',
    category: 'SEO Strategy',
    author: 'David Thompson',
    date: '2025-01-03',
    readTime: '15 min read',
    image: '🔧'
  },
  {
    id: '7',
    title: 'Link Building in 2025: Quality Over Quantity',
    excerpt: 'How our AI identifies and secures high-authority backlinks that actually move the needle.',
    category: 'SEO Strategy',
    author: 'Lisa Anderson',
    date: '2024-12-28',
    readTime: '9 min read',
    image: '🔗'
  },
  {
    id: '8',
    title: 'SaaS SEO: From 0 to 10,000 Organic Visitors',
    excerpt: 'The exact playbook we use to help SaaS companies build predictable organic growth engines.',
    category: 'Case Studies',
    author: 'Sarah Martinez',
    date: '2024-12-25',
    readTime: '11 min read',
    image: '🚀'
  },
  {
    id: '9',
    title: 'Voice Search Optimization: The Next Frontier',
    excerpt: 'How to optimize for voice search and capture the growing market of voice-activated searches.',
    category: 'AI & Technology',
    author: 'Emily Zhang',
    date: '2024-12-22',
    readTime: '8 min read',
    image: '🎤'
  }
]

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState('All Posts')
  
  const filteredPosts = selectedCategory === 'All Posts' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory)

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
              <BookOpen className="h-4 w-4" />
              <span>GoalSEO Blog</span>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              SEO Insights from the{' '}
              <span className="bg-gradient-to-r from-primary-500 to-electric-500 bg-clip-text text-transparent">
                AI Frontier
              </span>
            </h1>
            
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Cutting-edge SEO strategies, AI innovations, and proven tactics to help you dominate search results. 
              No fluff, just actionable insights that drive real results.
            </p>

            {/* Newsletter Signup */}
            <div className="max-w-md mx-auto">
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Enter your email for weekly insights"
                  className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:border-primary-500 focus:outline-none"
                />
                <button className="bg-gradient-to-r from-primary-500 to-primary-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-primary-600 hover:to-primary-700 transition-all">
                  Subscribe
                </button>
              </div>
              <p className="text-xs text-gray-500 mt-2">
                Join 10,000+ marketers getting weekly SEO insights
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 overflow-x-auto">
            <Filter className="h-5 w-5 text-gray-500 flex-shrink-0" />
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all ${
                  selectedCategory === category
                    ? 'bg-primary-500 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      {selectedCategory === 'All Posts' && (
        <section className="py-12 bg-gradient-to-b from-white to-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Featured Articles</h2>
            <div className="grid lg:grid-cols-2 gap-8">
              {blogPosts.filter(post => post.featured).map((post, index) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden hover:shadow-xl transition-all group"
                >
                  <div className="p-8">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="text-5xl">{post.image}</div>
                      <div>
                        <div className="text-sm text-primary-600 font-medium">{post.category}</div>
                        <div className="flex items-center gap-3 text-xs text-gray-500 mt-1">
                          <span className="flex items-center gap-1">
                            <Calendar className="h-3 w-3" />
                            {new Date(post.date).toLocaleDateString()}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="h-3 w-3" />
                            {post.readTime}
                          </span>
                        </div>
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">
                      {post.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-4">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <User className="h-4 w-4 text-gray-400" />
                        <span className="text-sm text-gray-600">{post.author}</span>
                      </div>
                      <Link
                        href={`/blog/${post.id}`}
                        className="text-primary-600 hover:text-primary-700 font-medium flex items-center gap-1 group"
                      >
                        Read More
                        <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* All Posts Grid */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">
            {selectedCategory === 'All Posts' ? 'Recent Articles' : selectedCategory}
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.filter(post => selectedCategory !== 'All Posts' || !post.featured).map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-white rounded-xl p-6 border border-gray-200 hover:border-primary-300 hover:shadow-lg transition-all group"
              >
                <div className="mb-4">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-3xl">{post.image}</span>
                    <span className="text-xs text-primary-600 font-medium bg-primary-50 px-2 py-1 rounded">
                      {post.category}
                    </span>
                  </div>
                  
                  <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
                    {post.title}
                  </h3>
                  
                  <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <div className="flex items-center gap-3">
                      <span className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        {new Date(post.date).toLocaleDateString()}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {post.readTime}
                      </span>
                    </div>
                  </div>
                </div>
                
                <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                  <span className="text-sm text-gray-600">{post.author}</span>
                  <Link
                    href={`/blog/${post.id}`}
                    className="text-primary-600 hover:text-primary-700 text-sm font-medium flex items-center gap-1"
                  >
                    Read
                    <ChevronRight className="h-3 w-3" />
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <button className="inline-flex items-center gap-2 bg-white text-primary-600 border-2 border-primary-200 px-8 py-3 rounded-xl font-semibold hover:bg-primary-50 transition-all">
              Load More Articles
              <ArrowRight className="h-4 w-4" />
            </button>
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
            <h2 className="text-3xl font-bold mb-4">
              Ready to Implement These Strategies?
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Let our AI handle your SEO while you focus on growing your business
            </p>
            <Link
              href="/free-audit"
              className="inline-flex items-center justify-center gap-2 bg-white text-primary-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-all shadow-xl"
            >
              Get Your Free AI Audit
              <Zap className="h-5 w-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}