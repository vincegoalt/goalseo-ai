"use client"

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  ChevronDown, ArrowRight, Sparkles, TrendingUp, Globe,
  BarChart3, Users, Bot, Zap, Search, Target, Shield,
  Code, Database, Gauge, Brain, FileText, Link2,
  ShoppingBag, Palette, Home, Gamepad2, Heart, Pizza,
  Gem, Leaf, Dog, Mountain, Briefcase, X, Menu, Award,
  User, LogOut
} from 'lucide-react'
import { authClient } from "@/lib/auth-client"
import { useRouter } from 'next/navigation'

export default function HeaderNew() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [user, setUser] = useState<any>(null)
  const [loading, setLoading] = useState(true)
  const router = useRouter()
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  
  useEffect(() => {
    const checkAuth = async () => {
      try {
        const session = await authClient.getSession()
        setUser(session.data?.user || null)
      } catch (error) {
        console.error('Auth check failed:', error)
        setUser(null)
      } finally {
        setLoading(false)
      }
    }
    checkAuth()
  }, [])
  
  const handleSignOut = async () => {
    try {
      await authClient.signOut()
      setUser(null)
      router.push('/')
    } catch (error) {
      console.error('Sign out failed:', error)
    }
  }
  
  const solutions = {
    byFeature: [
      { icon: Search, title: 'Product SEO Engine', desc: 'AI-powered descriptions, meta tags & smart alt tags', href: '/features#product-seo' },
      { icon: BarChart3, title: 'Search Insights', desc: 'Google Search Console analytics & keyword tracking', href: '/features#search-insights' },
      { icon: Database, title: 'Smart Collections', desc: 'Trend-based & seasonal collection creation', href: '/features#smart-collections' },
      { icon: Code, title: 'Technical SEO', desc: 'Sitemaps, speed monitoring & error fixes', href: '/features#technical-seo' },
      { icon: Globe, title: 'Competitor Intel', desc: 'Monitor competitor keywords & strategies', href: '/features#competitor-intel' },
      { icon: FileText, title: 'Content Machine', desc: 'Blog posts, guides & internal linking automation', href: '/features#content-machine' },
      { icon: Link2, title: 'Link Building', desc: 'Automated outreach & partnership opportunities', href: '/features#link-building' },
      { icon: Brain, title: 'Translations', desc: 'Multi-language SEO optimization', href: '/features#translations' }
    ],
    byIndustry: [
      { icon: ShoppingBag, title: 'Dropshipping', desc: 'Bulk optimize unlimited SKUs', href: '/industries#dropshipping' },
      { icon: Palette, title: 'Fashion & Apparel', desc: 'Style-aware descriptions', href: '/industries#fashion' },
      { icon: Gem, title: 'Beauty & Cosmetics', desc: 'Ingredient-focused SEO', href: '/industries#beauty' },
      { icon: Code, title: 'Electronics & Tech', desc: 'Spec-optimized content', href: '/industries#electronics' },
      { icon: Home, title: 'Home & Decor', desc: 'Room & style targeting', href: '/industries#home-decor' },
      { icon: Gem, title: 'Jewelry & Accessories', desc: 'Luxury keyword focus', href: '/industries#jewelry' },
      { icon: Heart, title: 'Sports & Fitness', desc: 'Performance keywords', href: '/industries#sports' },
      { icon: Pizza, title: 'Food & Beverage', desc: 'Taste & dietary SEO', href: '/industries#food' },
      { icon: Gamepad2, title: 'Gaming & Hobbies', desc: 'Enthusiast targeting', href: '/industries#gaming' },
      { icon: Dog, title: 'Pet Supplies', desc: 'Pet parent targeting', href: '/industries#pets' },
      { icon: Mountain, title: 'Baby & Kids', desc: 'Parent-focused SEO', href: '/industries#baby-kids' },
      { icon: Leaf, title: 'Eco-Friendly', desc: 'Sustainability keywords', href: '/industries#eco-friendly' }
    ],
    byProblem: [
      { icon: Target, title: 'No Organic Traffic', desc: 'Fix visibility issues & start ranking', href: '/solutions#no-traffic' },
      { icon: Gauge, title: 'No Time for SEO', desc: '24/7 automation handles everything', href: '/solutions#no-time' },
      { icon: Brain, title: "Don't Know SEO", desc: 'We handle everything automatically', href: '/solutions#dont-know-seo' }
    ]
  }
  
  const resources = [
    { title: 'Blog', desc: 'SEO tips and strategies', href: '/blog' },
    { title: 'Case Studies', desc: 'Success stories from customers', href: '/case-studies' },
    { title: 'Free SEO Audit', desc: 'Get your site analyzed instantly', href: '/free-audit' },
    { title: 'ROI Calculator', desc: 'Calculate your potential returns', href: '/tools/roi-calculator' },
    { title: 'Documentation', desc: 'Learn how to use GoalSEO', href: '/docs' },
    { title: 'API Reference', desc: 'Integrate with your tools', href: '/api' }
  ]
  
  const company = [
    { title: 'About Us', desc: 'Our mission and story', href: '/about' },
    { title: 'Careers', desc: "We're hiring!", href: '/careers' },
    { title: 'Partners', desc: 'Become a partner', href: '/partners' },
    { title: 'Contact', desc: 'Get in touch', href: '/contact' }
  ]
  
  return (
    <>
      <header className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-lg shadow-sm' : 'bg-white'
      }`}>
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2.5 group">
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl blur opacity-20 group-hover:opacity-40 transition duration-200"></div>
                <div className="relative">
                  <svg className="h-9 w-9" viewBox="0 0 40 40" fill="none">
                    <rect width="40" height="40" rx="10" fill="url(#logo-gradient)"/>
                    <path d="M20 8L12 20L20 32L28 20L20 8Z" fill="white" fillOpacity="0.9"/>
                    <path d="M20 14L16 20L20 26L24 20L20 14Z" fill="url(#logo-inner)"/>
                    <defs>
                      <linearGradient id="logo-gradient" x1="0" y1="0" x2="40" y2="40">
                        <stop stopColor="#10B981"/>
                        <stop offset="1" stopColor="#059669"/>
                      </linearGradient>
                      <linearGradient id="logo-inner" x1="16" y1="14" x2="24" y2="26">
                        <stop stopColor="#059669"/>
                        <stop offset="1" stopColor="#047857"/>
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
              </div>
              <span className="text-[26px] font-bold tracking-tight">
                <span className="text-gray-900">Goal</span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600">SEO</span>
              </span>
            </Link>
            
            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {/* Why GoalSEO */}
              <div className="relative">
                <button
                  onMouseEnter={() => setActiveDropdown('why')}
                  onMouseLeave={() => setActiveDropdown(null)}
                  className="flex items-center gap-1 px-4 py-2 text-gray-700 hover:text-gray-900 font-medium transition-colors"
                >
                  Why GoalSEO
                  <ChevronDown className={`h-4 w-4 transition-transform ${activeDropdown === 'why' ? 'rotate-180' : ''}`} />
                </button>
              </div>
              
              {/* Solutions */}
              <div className="relative">
                <button
                  onMouseEnter={() => setActiveDropdown('solutions')}
                  onMouseLeave={() => setActiveDropdown(null)}
                  className="flex items-center gap-1 px-4 py-2 text-gray-700 hover:text-gray-900 font-medium transition-colors"
                >
                  Solutions
                  <ChevronDown className={`h-4 w-4 transition-transform ${activeDropdown === 'solutions' ? 'rotate-180' : ''}`} />
                </button>
              </div>
              
              {/* Resources */}
              <div className="relative">
                <button
                  onMouseEnter={() => setActiveDropdown('resources')}
                  onMouseLeave={() => setActiveDropdown(null)}
                  className="flex items-center gap-1 px-4 py-2 text-gray-700 hover:text-gray-900 font-medium transition-colors"
                >
                  Resources
                  <ChevronDown className={`h-4 w-4 transition-transform ${activeDropdown === 'resources' ? 'rotate-180' : ''}`} />
                </button>
              </div>
              
              {/* Pricing */}
              <Link href="/pricing" className="px-4 py-2 text-gray-700 hover:text-gray-900 font-medium transition-colors">
                Pricing
              </Link>
              
              {/* Company */}
              <div className="relative">
                <button
                  onMouseEnter={() => setActiveDropdown('company')}
                  onMouseLeave={() => setActiveDropdown(null)}
                  className="flex items-center gap-1 px-4 py-2 text-gray-700 hover:text-gray-900 font-medium transition-colors"
                >
                  Company
                  <ChevronDown className={`h-4 w-4 transition-transform ${activeDropdown === 'company' ? 'rotate-180' : ''}`} />
                </button>
              </div>
            </div>
            
            {/* CTA Buttons */}
            <div className="hidden lg:flex items-center gap-3">
              {!loading && (
                user ? (
                  <>
                    <Link
                      href="/dashboard"
                      className="px-4 py-2 text-gray-700 hover:text-gray-900 font-medium transition-colors flex items-center gap-2"
                    >
                      <User className="h-4 w-4" />
                      Dashboard
                    </Link>
                    <button
                      onClick={handleSignOut}
                      className="px-4 py-2 text-gray-700 hover:text-gray-900 font-medium transition-colors flex items-center gap-2"
                    >
                      <LogOut className="h-4 w-4" />
                      Sign Out
                    </button>
                  </>
                ) : (
                  <>
                    <Link
                      href="/login"
                      className="px-4 py-2 text-gray-700 hover:text-gray-900 font-medium transition-colors"
                    >
                      Login
                    </Link>
                    <Link
                      href="/signup?plan=growth&trial=true"
                      className="px-6 py-2.5 bg-gradient-to-r from-primary-500 to-electric-500 text-white rounded-full font-semibold hover:from-primary-600 hover:to-electric-600 transition-all shadow-md hover:shadow-lg"
                    >
                      Start Free Trial
                      <ArrowRight className="inline-block ml-2 h-4 w-4" />
                    </Link>
                  </>
                )
              )}
            </div>
            
            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-gray-700 hover:text-gray-900"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </nav>
        
        {/* Desktop Mega Menus */}
        <AnimatePresence>
          {/* Why GoalSEO Dropdown */}
          {activeDropdown === 'why' && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              onMouseEnter={() => setActiveDropdown('why')}
              onMouseLeave={() => setActiveDropdown(null)}
              className="absolute left-0 right-0 bg-white border-t border-gray-100 shadow-xl"
            >
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="grid md:grid-cols-3 gap-8">
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-4">Why Choose AI?</h3>
                    <Link href="/why-ai" className="block p-4 rounded-lg hover:bg-gray-50 transition-colors group">
                      <div className="flex items-start gap-3">
                        <Bot className="h-5 w-5 text-green-500 mt-1" />
                        <div>
                          <div className="font-medium text-gray-900 mb-1">AI vs Agencies</div>
                          <div className="text-sm text-gray-600">10x cheaper, 50x faster, better results</div>
                        </div>
                      </div>
                    </Link>
                    <Link href="/how-it-works" className="block p-4 rounded-lg hover:bg-gray-50 transition-colors group">
                      <div className="flex items-start gap-3">
                        <Zap className="h-5 w-5 text-yellow-500 mt-1" />
                        <div>
                          <div className="font-medium text-gray-900 mb-1">How It Works</div>
                          <div className="text-sm text-gray-600">See our AI in action</div>
                        </div>
                      </div>
                    </Link>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-4">Results</h3>
                    <Link href="/case-studies" className="block p-4 rounded-lg hover:bg-gray-50 transition-colors">
                      <div className="flex items-start gap-3">
                        <TrendingUp className="h-5 w-5 text-blue-500 mt-1" />
                        <div>
                          <div className="font-medium text-gray-900 mb-1">Success Stories</div>
                          <div className="text-sm text-gray-600">387% average traffic increase</div>
                        </div>
                      </div>
                    </Link>
                    <Link href="/roi" className="block p-4 rounded-lg hover:bg-gray-50 transition-colors">
                      <div className="flex items-start gap-3">
                        <BarChart3 className="h-5 w-5 text-purple-500 mt-1" />
                        <div>
                          <div className="font-medium text-gray-900 mb-1">ROI Calculator</div>
                          <div className="text-sm text-gray-600">Calculate your potential returns</div>
                        </div>
                      </div>
                    </Link>
                  </div>
                  
                  <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6">
                    <h3 className="font-semibold text-gray-900 mb-2">Get Started in 60 Seconds</h3>
                    <p className="text-sm text-gray-600 mb-4">Join 10,000+ stores already using AI to dominate search</p>
                    <Link
                      href="/free-audit"
                      className="inline-flex items-center gap-2 bg-gradient-to-r from-green-500 to-emerald-500 text-white px-4 py-2 rounded-lg font-medium hover:from-green-600 hover:to-emerald-600 transition-all"
                    >
                      Get Free Audit
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
          
          {/* Solutions Mega Menu */}
          {activeDropdown === 'solutions' && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              onMouseEnter={() => setActiveDropdown('solutions')}
              onMouseLeave={() => setActiveDropdown(null)}
              className="absolute left-0 right-0 bg-white border-t border-gray-100 shadow-xl"
            >
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="grid lg:grid-cols-3 gap-8">
                  {/* By Feature */}
                  <div>
                    <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-4">
                      🎯 SOLUTIONS BY FEATURE
                    </h3>
                    <div className="grid grid-cols-2 gap-2">
                      {solutions.byFeature.slice(0, 8).map((item) => {
                        const Icon = item.icon
                        return (
                          <Link
                            key={item.title}
                            href={item.href}
                            className="p-3 rounded-lg hover:bg-gray-50 transition-colors group"
                          >
                            <div className="flex items-start gap-3">
                              <div className="p-1.5 bg-green-100 rounded-lg group-hover:bg-green-200 transition-colors">
                                <Icon className="h-4 w-4 text-green-600" />
                              </div>
                              <div>
                                <div className="text-sm font-medium text-gray-900">{item.title}</div>
                                <div className="text-xs text-gray-600 mt-0.5">{item.desc}</div>
                              </div>
                            </div>
                          </Link>
                        )
                      })}
                    </div>
                  </div>
                  
                  {/* By Industry */}
                  <div>
                    <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-4">
                      🛍️ SOLUTIONS BY STORE TYPE
                    </h3>
                    <div className="grid grid-cols-2 gap-2">
                      {solutions.byIndustry.slice(0, 6).map((item) => {
                        const Icon = item.icon
                        return (
                          <Link
                            key={item.title}
                            href={item.href}
                            className="p-3 rounded-lg hover:bg-gray-50 transition-colors group"
                          >
                            <div className="flex items-start gap-3">
                              <div className="p-1.5 bg-blue-100 rounded-lg group-hover:bg-blue-200 transition-colors">
                                <Icon className="h-4 w-4 text-blue-600" />
                              </div>
                              <div>
                                <div className="text-sm font-medium text-gray-900">{item.title}</div>
                                <div className="text-xs text-gray-600 mt-0.5">{item.desc}</div>
                              </div>
                            </div>
                          </Link>
                        )
                      })}
                    </div>
                    <Link
                      href="/industries"
                      className="inline-flex items-center gap-1 text-sm text-green-600 hover:text-green-700 font-medium mt-3"
                    >
                      View all industries
                      <ArrowRight className="h-3 w-3" />
                    </Link>
                  </div>
                  
                  {/* By Problem */}
                  <div>
                    <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-4">
                      🔺 SOLUTIONS BY PROBLEM
                    </h3>
                    <div className="space-y-2">
                      {solutions.byProblem.map((item) => {
                        const Icon = item.icon
                        return (
                          <Link
                            key={item.title}
                            href={item.href}
                            className="block p-4 rounded-lg bg-red-50 hover:bg-red-100 transition-colors group"
                          >
                            <div className="flex items-start gap-3">
                              <div className="p-2 bg-white rounded-lg shadow-sm">
                                <Icon className="h-5 w-5 text-red-500" />
                              </div>
                              <div>
                                <div className="font-medium text-gray-900">{item.title}</div>
                                <div className="text-sm text-gray-600 mt-1">{item.desc}</div>
                              </div>
                            </div>
                          </Link>
                        )
                      })}
                    </div>
                    
                    {/* Free Audit CTA */}
                    <div className="mt-6 p-4 bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg">
                      <div className="text-sm font-semibold text-gray-900 mb-1">
                        📊 Get Your Free SEO Audit
                      </div>
                      <div className="text-xs text-gray-600 mb-3">
                        See exactly what's holding your store back
                      </div>
                      <Link
                        href="/free-audit"
                        className="text-sm text-green-600 hover:text-green-700 font-medium inline-flex items-center gap-1"
                      >
                        Get Early Access
                        <ArrowRight className="h-3 w-3" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
          
          {/* Resources Dropdown */}
          {activeDropdown === 'resources' && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              onMouseEnter={() => setActiveDropdown('resources')}
              onMouseLeave={() => setActiveDropdown(null)}
              className="absolute left-0 right-0 bg-white border-t border-gray-100 shadow-xl"
            >
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="grid lg:grid-cols-3 gap-8">
                  {/* Learning Resources */}
                  <div>
                    <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-4">
                      📚 LEARNING RESOURCES
                    </h3>
                    <div className="space-y-2">
                      <Link
                        href="/blog"
                        className="block p-3 rounded-lg hover:bg-gray-50 transition-colors group"
                      >
                        <div className="flex items-start gap-3">
                          <div className="p-1.5 bg-purple-100 rounded-lg group-hover:bg-purple-200 transition-colors">
                            <FileText className="h-4 w-4 text-purple-600" />
                          </div>
                          <div>
                            <div className="text-sm font-medium text-gray-900">Blog</div>
                            <div className="text-xs text-gray-600 mt-0.5">SEO tips and strategies</div>
                          </div>
                        </div>
                      </Link>
                      <Link
                        href="/case-studies"
                        className="block p-3 rounded-lg hover:bg-gray-50 transition-colors group"
                      >
                        <div className="flex items-start gap-3">
                          <div className="p-1.5 bg-blue-100 rounded-lg group-hover:bg-blue-200 transition-colors">
                            <TrendingUp className="h-4 w-4 text-blue-600" />
                          </div>
                          <div>
                            <div className="text-sm font-medium text-gray-900">Case Studies</div>
                            <div className="text-xs text-gray-600 mt-0.5">Success stories from customers</div>
                          </div>
                        </div>
                      </Link>
                      <Link
                        href="/docs"
                        className="block p-3 rounded-lg hover:bg-gray-50 transition-colors group"
                      >
                        <div className="flex items-start gap-3">
                          <div className="p-1.5 bg-green-100 rounded-lg group-hover:bg-green-200 transition-colors">
                            <FileText className="h-4 w-4 text-green-600" />
                          </div>
                          <div>
                            <div className="text-sm font-medium text-gray-900">Documentation</div>
                            <div className="text-xs text-gray-600 mt-0.5">Learn how to use GoalSEO</div>
                          </div>
                        </div>
                      </Link>
                    </div>
                  </div>
                  
                  {/* Tools & Analytics */}
                  <div>
                    <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-4">
                      🛠️ TOOLS & ANALYTICS
                    </h3>
                    <div className="space-y-2">
                      <Link
                        href="/free-audit"
                        className="block p-3 rounded-lg bg-gradient-to-br from-green-50 to-emerald-50 hover:from-green-100 hover:to-emerald-100 transition-colors group"
                      >
                        <div className="flex items-start gap-3">
                          <div className="p-1.5 bg-white rounded-lg shadow-sm">
                            <Search className="h-4 w-4 text-green-600" />
                          </div>
                          <div>
                            <div className="text-sm font-medium text-gray-900">Free SEO Audit</div>
                            <div className="text-xs text-gray-600 mt-0.5">Get your site analyzed instantly</div>
                          </div>
                        </div>
                      </Link>
                      <Link
                        href="/tools/roi-calculator"
                        className="block p-3 rounded-lg hover:bg-gray-50 transition-colors group"
                      >
                        <div className="flex items-start gap-3">
                          <div className="p-1.5 bg-yellow-100 rounded-lg group-hover:bg-yellow-200 transition-colors">
                            <BarChart3 className="h-4 w-4 text-yellow-600" />
                          </div>
                          <div>
                            <div className="text-sm font-medium text-gray-900">ROI Calculator</div>
                            <div className="text-xs text-gray-600 mt-0.5">Calculate your potential returns</div>
                          </div>
                        </div>
                      </Link>
                      <Link
                        href="/tools/keyword-research"
                        className="block p-3 rounded-lg hover:bg-gray-50 transition-colors group"
                      >
                        <div className="flex items-start gap-3">
                          <div className="p-1.5 bg-orange-100 rounded-lg group-hover:bg-orange-200 transition-colors">
                            <Target className="h-4 w-4 text-orange-600" />
                          </div>
                          <div>
                            <div className="text-sm font-medium text-gray-900">Keyword Research</div>
                            <div className="text-xs text-gray-600 mt-0.5">Find profitable keywords</div>
                          </div>
                        </div>
                      </Link>
                    </div>
                  </div>
                  
                  {/* Developer Resources */}
                  <div>
                    <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-4">
                      👨‍💻 DEVELOPER RESOURCES
                    </h3>
                    <div className="space-y-2">
                      <Link
                        href="/api"
                        className="block p-3 rounded-lg hover:bg-gray-50 transition-colors group"
                      >
                        <div className="flex items-start gap-3">
                          <div className="p-1.5 bg-indigo-100 rounded-lg group-hover:bg-indigo-200 transition-colors">
                            <Code className="h-4 w-4 text-indigo-600" />
                          </div>
                          <div>
                            <div className="text-sm font-medium text-gray-900">API Reference</div>
                            <div className="text-xs text-gray-600 mt-0.5">Integrate with your tools</div>
                          </div>
                        </div>
                      </Link>
                      <Link
                        href="/integrations"
                        className="block p-3 rounded-lg hover:bg-gray-50 transition-colors group"
                      >
                        <div className="flex items-start gap-3">
                          <div className="p-1.5 bg-pink-100 rounded-lg group-hover:bg-pink-200 transition-colors">
                            <Link2 className="h-4 w-4 text-pink-600" />
                          </div>
                          <div>
                            <div className="text-sm font-medium text-gray-900">Integrations</div>
                            <div className="text-xs text-gray-600 mt-0.5">Connect with your stack</div>
                          </div>
                        </div>
                      </Link>
                    </div>
                    
                    {/* Newsletter CTA */}
                    <div className="mt-6 p-4 bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg">
                      <div className="text-sm font-semibold text-gray-900 mb-1">
                        📧 Weekly SEO Tips
                      </div>
                      <div className="text-xs text-gray-600 mb-3">
                        Join 10,000+ marketers getting insights
                      </div>
                      <Link
                        href="/newsletter"
                        className="text-sm text-purple-600 hover:text-purple-700 font-medium inline-flex items-center gap-1"
                      >
                        Subscribe Free
                        <ArrowRight className="h-3 w-3" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
          
          {/* Company Dropdown */}
          {activeDropdown === 'company' && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              onMouseEnter={() => setActiveDropdown('company')}
              onMouseLeave={() => setActiveDropdown(null)}
              className="absolute left-0 right-0 bg-white border-t border-gray-100 shadow-xl"
            >
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="grid lg:grid-cols-3 gap-8">
                  {/* About */}
                  <div>
                    <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-4">
                      🏢 COMPANY
                    </h3>
                    <div className="space-y-2">
                      <Link
                        href="/about"
                        className="block p-3 rounded-lg hover:bg-gray-50 transition-colors group"
                      >
                        <div className="flex items-start gap-3">
                          <div className="p-1.5 bg-blue-100 rounded-lg group-hover:bg-blue-200 transition-colors">
                            <Users className="h-4 w-4 text-blue-600" />
                          </div>
                          <div>
                            <div className="text-sm font-medium text-gray-900">About Us</div>
                            <div className="text-xs text-gray-600 mt-0.5">Our mission and story</div>
                          </div>
                        </div>
                      </Link>
                      <Link
                        href="/team"
                        className="block p-3 rounded-lg hover:bg-gray-50 transition-colors group"
                      >
                        <div className="flex items-start gap-3">
                          <div className="p-1.5 bg-purple-100 rounded-lg group-hover:bg-purple-200 transition-colors">
                            <Award className="h-4 w-4 text-purple-600" />
                          </div>
                          <div>
                            <div className="text-sm font-medium text-gray-900">Our Team</div>
                            <div className="text-xs text-gray-600 mt-0.5">Meet the experts behind GoalSEO</div>
                          </div>
                        </div>
                      </Link>
                      <Link
                        href="/careers"
                        className="block p-3 rounded-lg hover:bg-gray-50 transition-colors group"
                      >
                        <div className="flex items-start gap-3">
                          <div className="p-1.5 bg-green-100 rounded-lg group-hover:bg-green-200 transition-colors">
                            <Briefcase className="h-4 w-4 text-green-600" />
                          </div>
                          <div>
                            <div className="text-sm font-medium text-gray-900">Careers</div>
                            <div className="text-xs text-gray-600 mt-0.5">We're hiring! Join our team</div>
                          </div>
                        </div>
                      </Link>
                    </div>
                  </div>
                  
                  {/* Connect */}
                  <div>
                    <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-4">
                      🤝 CONNECT
                    </h3>
                    <div className="space-y-2">
                      <Link
                        href="/contact"
                        className="block p-3 rounded-lg hover:bg-gray-50 transition-colors group"
                      >
                        <div className="flex items-start gap-3">
                          <div className="p-1.5 bg-yellow-100 rounded-lg group-hover:bg-yellow-200 transition-colors">
                            <Globe className="h-4 w-4 text-yellow-600" />
                          </div>
                          <div>
                            <div className="text-sm font-medium text-gray-900">Contact Us</div>
                            <div className="text-xs text-gray-600 mt-0.5">Get in touch with our team</div>
                          </div>
                        </div>
                      </Link>
                      <Link
                        href="/partners"
                        className="block p-3 rounded-lg hover:bg-gray-50 transition-colors group"
                      >
                        <div className="flex items-start gap-3">
                          <div className="p-1.5 bg-orange-100 rounded-lg group-hover:bg-orange-200 transition-colors">
                            <Users className="h-4 w-4 text-orange-600" />
                          </div>
                          <div>
                            <div className="text-sm font-medium text-gray-900">Partners</div>
                            <div className="text-xs text-gray-600 mt-0.5">Become a GoalSEO partner</div>
                          </div>
                        </div>
                      </Link>
                      <Link
                        href="/press"
                        className="block p-3 rounded-lg hover:bg-gray-50 transition-colors group"
                      >
                        <div className="flex items-start gap-3">
                          <div className="p-1.5 bg-pink-100 rounded-lg group-hover:bg-pink-200 transition-colors">
                            <FileText className="h-4 w-4 text-pink-600" />
                          </div>
                          <div>
                            <div className="text-sm font-medium text-gray-900">Press & Media</div>
                            <div className="text-xs text-gray-600 mt-0.5">News and press resources</div>
                          </div>
                        </div>
                      </Link>
                    </div>
                  </div>
                  
                  {/* Support & Legal */}
                  <div>
                    <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-4">
                      ⚖️ SUPPORT & LEGAL
                    </h3>
                    <div className="space-y-2">
                      <Link
                        href="/support"
                        className="block p-3 rounded-lg hover:bg-gray-50 transition-colors group"
                      >
                        <div className="flex items-start gap-3">
                          <div className="p-1.5 bg-indigo-100 rounded-lg group-hover:bg-indigo-200 transition-colors">
                            <Shield className="h-4 w-4 text-indigo-600" />
                          </div>
                          <div>
                            <div className="text-sm font-medium text-gray-900">Support Center</div>
                            <div className="text-xs text-gray-600 mt-0.5">Get help and answers</div>
                          </div>
                        </div>
                      </Link>
                      <Link
                        href="/privacy"
                        className="block p-3 rounded-lg hover:bg-gray-50 transition-colors group"
                      >
                        <div className="flex items-start gap-3">
                          <div className="p-1.5 bg-gray-100 rounded-lg group-hover:bg-gray-200 transition-colors">
                            <Shield className="h-4 w-4 text-gray-600" />
                          </div>
                          <div>
                            <div className="text-sm font-medium text-gray-900">Privacy Policy</div>
                            <div className="text-xs text-gray-600 mt-0.5">How we protect your data</div>
                          </div>
                        </div>
                      </Link>
                    </div>
                    
                    {/* Awards */}
                    <div className="mt-6 p-4 bg-gradient-to-br from-yellow-50 to-orange-50 rounded-lg">
                      <div className="text-sm font-semibold text-gray-900 mb-1">
                        🏆 Award-Winning AI
                      </div>
                      <div className="text-xs text-gray-600 mb-3">
                        Best SEO Tool 2024 - TechCrunch
                      </div>
                      <Link
                        href="/awards"
                        className="text-sm text-orange-600 hover:text-orange-700 font-medium inline-flex items-center gap-1"
                      >
                        View All Awards
                        <ArrowRight className="h-3 w-3" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
      
      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            <div className="fixed inset-0 bg-black/20" onClick={() => setIsMobileMenuOpen(false)} />
            <div className="fixed right-0 top-0 bottom-0 w-full max-w-sm bg-white shadow-xl">
              <div className="p-6">
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="absolute top-4 right-4 p-2 text-gray-500 hover:text-gray-700"
                >
                  <X className="h-6 w-6" />
                </button>
                
                <nav className="mt-8 space-y-4">
                  <Link 
                    href="/features" 
                    className="block py-2 text-lg font-medium text-gray-900"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Features
                  </Link>
                  <Link 
                    href="/industries" 
                    className="block py-2 text-lg font-medium text-gray-900"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Industries
                  </Link>
                  <Link 
                    href="/pricing" 
                    className="block py-2 text-lg font-medium text-gray-900"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Pricing
                  </Link>
                  <Link 
                    href="/case-studies" 
                    className="block py-2 text-lg font-medium text-gray-900"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Case Studies
                  </Link>
                  <Link 
                    href="/blog" 
                    className="block py-2 text-lg font-medium text-gray-900"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Blog
                  </Link>
                  <Link 
                    href="/about" 
                    className="block py-2 text-lg font-medium text-gray-900"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    About
                  </Link>
                  
                  <div className="pt-4 border-t">
                    {!loading && (
                      user ? (
                        <>
                          <Link
                            href="/dashboard"
                            className="block py-2 text-lg font-medium text-gray-900"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            Dashboard
                          </Link>
                          <button
                            onClick={() => {
                              handleSignOut()
                              setIsMobileMenuOpen(false)
                            }}
                            className="block w-full text-left py-2 text-lg font-medium text-gray-900"
                          >
                            Sign Out
                          </button>
                        </>
                      ) : (
                        <>
                          <Link
                            href="/login"
                            className="block py-2 text-lg font-medium text-gray-900"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            Login
                          </Link>
                          <Link
                            href="/signup?plan=growth&trial=true"
                            className="block mt-4 w-full py-3 bg-gradient-to-r from-primary-500 to-electric-500 text-white text-center rounded-full font-semibold"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            Start Free Trial
                          </Link>
                        </>
                      )
                    )}
                  </div>
                </nav>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}