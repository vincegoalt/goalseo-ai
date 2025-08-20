"use client"

import { motion, useScroll, useTransform } from 'framer-motion'
import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { 
  Bot, Search, Database, Code, FileText, Link as LinkIcon,
  Globe, Languages, TrendingUp, Zap, CheckCircle, ArrowRight,
  Activity, Shield, Clock, BarChart3, Sparkles, Brain,
  Image, Tag, MousePointer, Gauge, AlertCircle, RefreshCw,
  Eye, Target, Calendar, Users, Mail, ChartBar, DollarSign
} from 'lucide-react'

const features = [
  {
    id: 'product-seo',
    category: 'Product SEO Engine',
    icon: Search,
    title: 'Product SEO That Actually Converts',
    description: 'Our AI rewrites every product in your catalog with perfectly optimized content that ranks in search and converts visitors into customers.',
    color: 'primary',
    items: [
      {
        icon: FileText,
        title: 'Product Description Magic',
        description: 'AI rewrites every product description with natural keyword integration, maintaining your brand voice while maximizing search visibility.',
        tags: ['Claude AI', 'Bulk Processing', 'Brand Voice']
      },
      {
        icon: Tag,
        title: 'Perfect Meta Tags',
        description: 'Automatically generates title tags and meta descriptions that are the perfect length, keyword-rich, and designed to maximize click-through rates.',
        tags: ['60-char titles', 'CTR optimized', 'Auto-generated']
      },
      {
        icon: Image,
        title: 'Image SEO Automation',
        description: 'AI analyzes your product images and creates descriptive, keyword-rich alt tags that improve accessibility and image search rankings.',
        tags: ['Image analysis', 'Accessibility', 'Image SEO']
      },
      {
        icon: LinkIcon,
        title: 'URL Structure Optimization',
        description: 'Creates SEO-friendly URLs that are clean, descriptive, and optimized for both search engines and user experience.',
        tags: ['Clean URLs', 'Redirects', 'Canonical tags']
      },
      {
        icon: Code,
        title: 'Schema Markup Generation',
        description: 'Automatically adds structured data markup to your products for rich snippets and better visibility in search results.',
        tags: ['Product schema', 'Review stars', 'Rich snippets']
      },
      {
        icon: Languages,
        title: 'Multi-Language SEO',
        description: 'Expand globally with AI translations that maintain SEO effectiveness and cultural relevance across different markets.',
        tags: ['25+ languages', 'Local keywords', 'Cultural adaptation']
      }
    ]
  },
  {
    id: 'search-insights',
    category: 'Search Insights',
    icon: BarChart3,
    title: 'Deep Search Intelligence',
    description: 'Uncover hidden opportunities with AI-powered search analysis that tells you exactly what your customers are searching for and how to capture them.',
    color: 'electric',
    items: [
      {
        icon: Activity,
        title: 'Search Console Sync',
        description: 'Direct integration with Google Search Console provides real-time insights into your actual search performance and opportunities.',
        tags: ['Live data sync', 'Query analysis', 'CTR tracking']
      },
      {
        icon: Target,
        title: 'Opportunity Finder',
        description: 'AI identifies keywords where you\'re close to page 1 and have the best chance of quick ranking improvements.',
        tags: ['Position 11-20', 'Quick wins', 'Priority scoring']
      },
      {
        icon: TrendingUp,
        title: 'Position 1 Targeting',
        description: 'Focuses optimization efforts on keywords where you can realistically achieve position 1 rankings based on competition analysis.',
        tags: ['Competition scoring', 'Achievable targets', 'Strategy planning']
      },
      {
        icon: Clock,
        title: 'Daily Tracking',
        description: 'Monitor your keyword rankings daily with alerts for significant movements and new page 1 achievements.',
        tags: ['Real-time updates', 'Movement alerts', 'Progress reports']
      }
    ]
  },
  {
    id: 'smart-collections',
    category: 'Smart Collections',
    icon: Database,
    title: 'Intelligent Collection Creation',
    description: 'AI creates targeted collections that capture long-tail keywords and organize your products for maximum discoverability.',
    color: 'success',
    items: [
      {
        icon: TrendingUp,
        title: 'Trend-Based Collections',
        description: 'AI monitors search trends and creates collections that capture emerging demand before your competitors.',
        tags: ['Google Trends', 'Weekly updates', 'First mover']
      },
      {
        icon: Calendar,
        title: 'Seasonal Collections',
        description: 'Automatically generates holiday and seasonal collections weeks in advance to capture early search traffic.',
        tags: ['Holiday calendar', 'Regional events', 'Early launch']
      },
      {
        icon: Brain,
        title: 'Intent-Based Organization',
        description: 'Creates collections based on buyer intent rather than just product type. Captures customers at every stage.',
        tags: ['Budget focused', 'Problem solving', 'Gift categories']
      }
    ]
  },
  {
    id: 'technical-seo',
    category: 'Technical SEO',
    icon: Code,
    title: 'Technical Excellence Behind the Scenes',
    description: 'Automated technical optimizations that keep your store fast, error-free, and perfectly structured for search engines.',
    color: 'accent',
    items: [
      {
        icon: FileText,
        title: 'Smart Sitemaps',
        description: 'Automatically generates and maintains XML sitemaps with intelligent priority scoring based on performance data.',
        tags: ['Auto-generation', 'Priority scoring', 'GSC submission']
      },
      {
        icon: Code,
        title: 'Schema Markup',
        description: 'Rich structured data markup for products, reviews, and pricing to enhance search result appearance.',
        tags: ['Product schema', 'Review stars', 'Rich snippets']
      },
      {
        icon: Gauge,
        title: 'Speed Monitoring',
        description: 'Continuous Core Web Vitals monitoring with automated improvements for mobile and desktop performance.',
        tags: ['Core Web Vitals', 'Mobile first', 'Auto-optimize']
      },
      {
        icon: AlertCircle,
        title: '404 Auto-Fix',
        description: 'Automatically detects and fixes broken links, missing pages, and redirect chains to preserve link equity.',
        tags: ['Error detection', 'Auto redirects', 'Link preservation']
      }
    ]
  },
  {
    id: 'content-machine',
    category: 'Content Machine',
    icon: FileText,
    title: 'AI Content That Drives Traffic',
    description: 'Build topical authority with AI-generated content that drives organic traffic and establishes your store as an industry leader.',
    color: 'warning',
    items: [
      {
        icon: FileText,
        title: 'SEO Blog Posts',
        description: 'Automatically generates comprehensive blog posts targeting long-tail keywords with natural product integration.',
        tags: ['2K-5K words', 'SEO optimized', 'Weekly publishing']
      },
      {
        icon: LinkIcon,
        title: 'Internal Linking',
        description: 'Creates strategic internal links between products, collections, and content to boost domain authority.',
        tags: ['Smart linking', 'Anchor text', 'Link equity']
      },
      {
        icon: Calendar,
        title: 'Content Calendar',
        description: 'AI plans and schedules content publication based on trends, seasonality, and SEO opportunities.',
        tags: ['Smart planning', 'Auto-publish', 'Trend aware']
      }
    ]
  },
  {
    id: 'competitor-intel',
    category: 'Competitor Intel',
    icon: Shield,
    title: 'Stay Ahead of Your Competition',
    description: 'Monitor competitors\' strategies, discover their keywords, and find gaps in their SEO that you can exploit for quick wins.',
    color: 'danger',
    items: [
      {
        icon: Eye,
        title: 'Competitor Tracking',
        description: 'Monitor up to 5 competitors\' SEO strategies, product changes, and content updates in real-time.',
        tags: ['Real-time alerts', 'Strategy analysis', '5 competitors']
      },
      {
        icon: Search,
        title: 'Keyword Discovery',
        description: 'Uncover profitable keywords your competitors rank for that you\'re missing out on.',
        tags: ['Gap analysis', 'Keyword stealing', 'Volume data']
      },
      {
        icon: Activity,
        title: 'Opportunity Alerts',
        description: 'Get instant notifications when competitors lose rankings or make SEO mistakes you can capitalize on.',
        tags: ['Ranking drops', 'Content gaps', 'Quick action']
      },
      {
        icon: Target,
        title: 'Weakness Targeting',
        description: 'AI analyzes competitor weaknesses and creates targeted strategies to outrank them on their vulnerable keywords.',
        tags: ['Weak spot finder', 'Attack strategies', 'Win predictor']
      }
    ]
  },
  {
    id: 'link-building',
    category: 'Link Building',
    icon: LinkIcon,
    title: 'Build Authority Automatically',
    description: 'Automated link building strategies that create high-quality backlinks and boost your domain authority without manual outreach.',
    color: 'indigo',
    items: [
      {
        icon: Shield,
        title: 'Quality Backlinks',
        description: 'AI identifies and secures high-quality, relevant backlink opportunities from authoritative sites in your niche.',
        tags: ['DR 40+ sites', 'Niche relevant', 'White hat only']
      },
      {
        icon: Mail,
        title: 'Auto Outreach',
        description: 'Automated personalized outreach campaigns that build relationships and secure guest posting opportunities.',
        tags: ['Personalized emails', 'Follow-ups', 'CRM tracking']
      },
      {
        icon: LinkIcon,
        title: 'Strategic Internal Links',
        description: 'Creates an optimized internal linking structure that distributes link equity and improves crawlability.',
        tags: ['Link equity flow', 'Anchor variation', 'Silo structure']
      },
      {
        icon: ChartBar,
        title: 'Authority Tracking',
        description: 'Monitor your domain authority growth and track the impact of each new backlink on your rankings.',
        tags: ['DA/DR tracking', 'Link impact', 'ROI metrics']
      }
    ]
  },
  {
    id: 'translations',
    category: 'Translations',
    icon: Globe,
    title: 'Go Global with Multi-Language SEO',
    description: 'Expand into new markets with AI translations that maintain SEO effectiveness and cultural relevance across 25+ languages.',
    color: 'purple',
    items: [
      {
        icon: Languages,
        title: 'Multi-Language SEO',
        description: 'Translate your entire catalog while preserving SEO value with localized keywords and cultural adaptations.',
        tags: ['25+ languages', 'SEO preserved', 'Native quality']
      },
      {
        icon: Globe,
        title: 'Market Localization',
        description: 'Beyond translation - true localization that adapts content for local search behavior and cultural preferences.',
        tags: ['Cultural adaptation', 'Local keywords', 'Market research']
      },
      {
        icon: RefreshCw,
        title: 'Sync Updates',
        description: 'When you update products in your primary language, translations automatically update across all languages.',
        tags: ['Auto-sync', 'Version control', 'Consistency']
      },
      {
        icon: Code,
        title: 'Hreflang Tags',
        description: 'Automatic hreflang implementation ensures search engines show the right language version to the right audience.',
        tags: ['Auto hreflang', 'Geo-targeting', 'No duplicates']
      }
    ]
  }
]

// Animated counter component
function AnimatedCounter({ value, suffix = '' }: { value: number; suffix?: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [])

  useEffect(() => {
    if (isVisible) {
      const duration = 2000
      const steps = 50
      const increment = value / steps
      let current = 0

      const timer = setInterval(() => {
        current += increment
        if (current >= value) {
          setCount(value)
          clearInterval(timer)
        } else {
          setCount(Math.floor(current))
        }
      }, duration / steps)

      return () => clearInterval(timer)
    }
  }, [isVisible, value])

  return (
    <div ref={ref} className="text-4xl font-bold">
      {count.toLocaleString()}{suffix}
    </div>
  )
}

export default function FeaturesPage() {
  const [activeFeature, setActiveFeature] = useState('product-seo')
  const [hoveredCard, setHoveredCard] = useState<string | null>(null)
  const { scrollYProgress } = useScroll()
  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1])

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-b from-gray-50 via-white to-primary-50/20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 -left-20 w-96 h-96 bg-primary-300 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob" />
          <div className="absolute top-40 -right-20 w-96 h-96 bg-electric-300 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000" />
          <div className="absolute -bottom-20 left-1/2 w-96 h-96 bg-accent-300 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-4000" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 mb-6">
              The Features Behind{' '}
              <span className="relative inline-block">
                <AnimatedCounter value={50000} suffix="+" />
                <span className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-primary-500 to-electric-500 rounded-full" />
              </span>
              {' '}#1 Rankings
            </h1>
            
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
              Replace your entire SEO stack with one AI-powered platform. 
              Built specifically for modern businesses, delivering results 24/7.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
              <motion.div 
                className="text-center"
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-3xl font-bold text-primary-600">50+</div>
                <div className="text-sm text-gray-600">SEO Features</div>
              </motion.div>
              <motion.div 
                className="text-center"
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-3xl font-bold text-electric-600">
                  <AnimatedCounter value={8} />
                </div>
                <div className="text-sm text-gray-600">AI Automations</div>
              </motion.div>
              <motion.div 
                className="text-center"
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-3xl font-bold text-success-600">24/7</div>
                <div className="text-sm text-gray-600">Always Working</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Feature Navigation */}
      <section className="sticky top-20 z-40 bg-white/95 backdrop-blur-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-2 overflow-x-auto py-4 scrollbar-hide">
            {features.map((feature) => {
              const Icon = feature.icon
              return (
                <button
                  key={feature.id}
                  onClick={() => {
                    setActiveFeature(feature.id)
                    document.getElementById(feature.id)?.scrollIntoView({ behavior: 'smooth' })
                  }}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium whitespace-nowrap transition-all ${
                    activeFeature === feature.id
                      ? 'bg-gradient-to-r from-primary-500 to-electric-500 text-white shadow-lg'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  <span>{feature.category}</span>
                </button>
              )
            })}
          </div>
        </div>
      </section>

      {/* Features Sections */}
      {features.map((feature, sectionIndex) => {
        const SectionIcon = feature.icon
        return (
          <section
            key={feature.id}
            id={feature.id}
            className={`py-20 ${sectionIndex % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-12"
              >
                <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary-100 to-electric-100 text-primary-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
                  <SectionIcon className="h-4 w-4" />
                  <span>{feature.category}</span>
                </div>
                
                <h2 className="text-4xl font-bold text-gray-900 mb-4">
                  {feature.title}
                </h2>
                
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  {feature.description}
                </p>
              </motion.div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {feature.items.map((item, index) => {
                  const ItemIcon = item.icon
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      onHoverStart={() => setHoveredCard(`${feature.id}-${index}`)}
                      onHoverEnd={() => setHoveredCard(null)}
                      className="relative bg-white rounded-xl p-6 border border-gray-200 hover:border-primary-300 hover:shadow-xl transition-all group"
                    >
                      <div className="mb-4">
                        <div className={`inline-flex p-3 bg-gradient-to-br from-${feature.color}-50 to-${feature.color}-100 rounded-xl group-hover:scale-110 transition-transform`}>
                          <ItemIcon className={`h-6 w-6 text-${feature.color}-500`} />
                        </div>
                      </div>

                      <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
                        {item.title}
                      </h3>
                      
                      <p className="text-gray-600 mb-4">
                        {item.description}
                      </p>

                      <div className="flex flex-wrap gap-2">
                        {item.tags.map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className="text-xs px-2 py-1 bg-gray-100 text-gray-600 rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {hoveredCard === `${feature.id}-${index}` && (
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          className="absolute -top-2 -right-2 bg-gradient-to-r from-primary-500 to-electric-500 text-white text-xs px-2 py-1 rounded-full"
                        >
                          AI Powered
                        </motion.div>
                      )}
                    </motion.div>
                  )
                })}
              </div>

              {/* Interactive Demo for some sections */}
              {feature.id === 'product-seo' && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="mt-12 bg-gradient-to-r from-primary-50 to-electric-50 rounded-2xl p-8"
                >
                  <div className="max-w-4xl mx-auto">
                    <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                      See the Difference AI Makes
                    </h3>
                    
                    <div className="grid md:grid-cols-2 gap-8">
                      <div>
                        <div className="bg-red-50 border-2 border-red-200 rounded-lg p-4 mb-2">
                          <span className="text-sm font-semibold text-red-600">Before</span>
                        </div>
                        <div className="bg-white rounded-lg p-4 border border-gray-200">
                          <h4 className="font-medium text-gray-900 mb-2">Blue T-Shirt</h4>
                          <p className="text-sm text-gray-600">A nice blue t-shirt for sale.</p>
                        </div>
                      </div>
                      
                      <div>
                        <div className="bg-green-50 border-2 border-green-200 rounded-lg p-4 mb-2">
                          <span className="text-sm font-semibold text-green-600">After AI Optimization</span>
                        </div>
                        <div className="bg-white rounded-lg p-4 border border-gray-200">
                          <h4 className="font-medium text-gray-900 mb-2">
                            Premium Blue Cotton T-Shirt | Soft & Breathable | Summer Essential
                          </h4>
                          <p className="text-sm text-gray-600">
                            Experience ultimate comfort with our premium blue cotton t-shirt. 
                            Crafted from 100% organic cotton, this breathable tee features a 
                            classic fit perfect for casual wear. Machine washable, fade-resistant, 
                            and designed to last. Available in S-XXL.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="flex justify-center mt-6">
                      <Link
                        href="/demo"
                        className="inline-flex items-center gap-2 bg-gradient-to-r from-primary-500 to-electric-500 text-white px-6 py-3 rounded-lg font-semibold hover:from-primary-600 hover:to-electric-600 transition-all"
                      >
                        Watch Live Demo
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              )}

              {feature.id === 'search-insights' && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="mt-12"
                >
                  <div className="bg-gray-900 rounded-2xl p-8 text-white">
                    <div className="flex items-center justify-between mb-6">
                      <h3 className="text-xl font-semibold">AI Processing Your Data...</h3>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                        <span className="text-sm text-green-400">LIVE</span>
                      </div>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="text-sm text-gray-400 mb-3">Discovered Keywords</h4>
                        <div className="space-y-2">
                          {['organic cotton t-shirt', 'sustainable fashion', 'eco-friendly clothing'].map((keyword, i) => (
                            <motion.div
                              key={i}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: i * 0.2 }}
                              className="flex items-center gap-2 bg-gray-800 rounded-lg p-3"
                            >
                              <TrendingUp className="h-4 w-4 text-green-400" />
                              <span className="text-sm">{keyword}</span>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="text-sm text-gray-400 mb-3">Optimization Status</h4>
                        <div className="space-y-3">
                          <div>
                            <div className="flex justify-between text-sm mb-1">
                              <span>Products Analyzed</span>
                              <span>847/1,000</span>
                            </div>
                            <div className="bg-gray-800 rounded-full h-2">
                              <motion.div
                                className="bg-gradient-to-r from-primary-400 to-electric-400 h-2 rounded-full"
                                initial={{ width: 0 }}
                                animate={{ width: '84.7%' }}
                                transition={{ duration: 2 }}
                              />
                            </div>
                          </div>
                          <div className="flex items-center gap-2 text-sm text-gray-400">
                            <Activity className="h-4 w-4" />
                            <span>15 products optimized in the last hour</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </div>
          </section>
        )
      })}

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-500 to-electric-500 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-4">
              Ready to Get All These Features?
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Join thousands of businesses already using GoalSEO to dominate their search rankings 
              and drive explosive growth.
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
                href="/pricing"
                className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur text-white border-2 border-white/20 px-8 py-4 rounded-xl font-semibold hover:bg-white/20 transition-all"
              >
                View Pricing
                <DollarSign className="h-5 w-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}