"use client"

import { motion } from 'framer-motion'
import Link from 'next/link'
import { 
  Globe, Languages, MapPin, TrendingUp, Users, Target,
  CheckCircle2, ArrowRight, BarChart3, Zap, Clock,
  DollarSign, Shield, Award, ChevronRight, Globe2,
  Building2, Search, Sparkles, Flag
} from 'lucide-react'
import { useState } from 'react'

const languages = [
  { 
    code: 'es', 
    name: 'Spanish', 
    native: 'Español',
    speakers: '559M',
    markets: 'Spain, Latin America, USA Hispanic',
    flag: '🇪🇸'
  },
  { 
    code: 'fr', 
    name: 'French', 
    native: 'Français',
    speakers: '280M',
    markets: 'France, Canada, Africa, Belgium',
    flag: '🇫🇷'
  },
  { 
    code: 'de', 
    name: 'German', 
    native: 'Deutsch',
    speakers: '130M',
    markets: 'Germany, Austria, Switzerland',
    flag: '🇩🇪'
  },
  { 
    code: 'ru', 
    name: 'Russian', 
    native: 'Русский',
    speakers: '258M',
    markets: 'Russia, CIS, Eastern Europe',
    flag: '🇷🇺'
  },
  { 
    code: 'ar', 
    name: 'Arabic', 
    native: 'العربية',
    speakers: '422M',
    markets: 'Middle East, North Africa',
    flag: '🇸🇦'
  },
  { 
    code: 'zh', 
    name: 'Chinese', 
    native: '中文',
    speakers: '1.3B',
    markets: 'China, Taiwan, Singapore',
    flag: '🇨🇳'
  }
]

const caseStudies = [
  {
    company: 'TechSaaS Pro',
    industry: 'Software',
    results: {
      languages: '12 languages',
      traffic: '+847% international traffic',
      revenue: '$2.3M new revenue',
      markets: '28 new markets'
    }
  },
  {
    company: 'GlobalStore',
    industry: 'E-commerce',
    results: {
      languages: '8 languages',
      traffic: '+523% organic growth',
      revenue: '$5.7M international sales',
      markets: '45 countries'
    }
  },
  {
    company: 'EduPlatform',
    industry: 'Education',
    results: {
      languages: '6 languages',
      traffic: '+692% global reach',
      revenue: '$1.8M new subscriptions',
      markets: '32 new regions'
    }
  }
]

export default function InternationalSEOPage() {
  const [selectedLanguage, setSelectedLanguage] = useState(languages[0])

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-b from-primary-50 via-white to-gray-50 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob" />
          <div className="absolute top-40 right-10 w-72 h-72 bg-electric-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000" />
          <div className="absolute -bottom-20 left-1/2 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary-100 to-electric-100 text-primary-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Globe2 className="h-4 w-4" />
              <span>International SEO Services</span>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              Go Global with{' '}
              <span className="bg-gradient-to-r from-primary-500 to-electric-500 bg-clip-text text-transparent">
                Multilingual SEO
              </span>
            </h1>
            
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Dominate search results in Spanish, French, German, Russian, Arabic, and Chinese markets. 
              Our AI-powered international SEO opens doors to 3.5 billion new customers worldwide.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/free-audit"
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-primary-500 to-primary-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-primary-600 hover:to-primary-700 transition-all shadow-xl"
              >
                Get International SEO Audit
                <Globe className="h-5 w-5" />
              </Link>
              <Link
                href="/demo"
                className="inline-flex items-center justify-center gap-2 bg-white text-gray-700 border-2 border-gray-300 px-8 py-4 rounded-xl font-semibold hover:border-primary-500 hover:text-primary-600 transition-all"
              >
                See Global Results
                <TrendingUp className="h-5 w-5" />
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="mt-12 flex items-center justify-center gap-8 text-gray-600">
              <div className="flex items-center gap-2">
                <Languages className="h-5 w-5 text-primary-500" />
                <span className="text-sm">50+ Languages</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-5 w-5 text-primary-500" />
                <span className="text-sm">180+ Countries</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="h-5 w-5 text-primary-500" />
                <span className="text-sm">500+ Global Clients</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Global Market Opportunity */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Your Market is 
              <span className="text-primary-600"> 95% Untapped</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Only 25% of internet users speak English. By ignoring international SEO, 
              you're missing 75% of your potential market.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-primary-50 to-white rounded-xl p-6 border border-primary-100"
            >
              <div className="text-4xl font-bold text-primary-600 mb-2">$15T</div>
              <div className="text-gray-900 font-semibold mb-1">Global E-commerce Market</div>
              <div className="text-gray-600 text-sm">Non-English markets growing 2x faster</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-gradient-to-br from-electric-50 to-white rounded-xl p-6 border border-electric-100"
            >
              <div className="text-4xl font-bold text-electric-600 mb-2">3.5B</div>
              <div className="text-gray-900 font-semibold mb-1">Non-English Speakers</div>
              <div className="text-gray-600 text-sm">Searching in their native language daily</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-gradient-to-br from-purple-50 to-white rounded-xl p-6 border border-purple-100"
            >
              <div className="text-4xl font-bold text-purple-600 mb-2">72%</div>
              <div className="text-gray-900 font-semibold mb-1">Prefer Native Language</div>
              <div className="text-gray-600 text-sm">Won't buy from English-only sites</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Language Markets */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Target Markets by Language
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Each language opens doors to massive, underserved markets with less competition 
              and higher conversion rates.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            {languages.map((lang, index) => (
              <motion.div
                key={lang.code}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                onClick={() => setSelectedLanguage(lang)}
                className={`bg-white rounded-xl p-6 border-2 cursor-pointer transition-all ${
                  selectedLanguage.code === lang.code
                    ? 'border-primary-500 shadow-xl'
                    : 'border-gray-200 hover:border-primary-300 hover:shadow-lg'
                }`}
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <div className="text-3xl mb-2">{lang.flag}</div>
                    <h3 className="text-xl font-bold text-gray-900">{lang.name}</h3>
                    <p className="text-lg text-gray-600">{lang.native}</p>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-primary-600">{lang.speakers}</div>
                    <div className="text-sm text-gray-500">speakers</div>
                  </div>
                </div>
                
                <div className="pt-4 border-t">
                  <div className="text-sm text-gray-600 mb-2">
                    <strong className="text-gray-900">Key Markets:</strong>
                  </div>
                  <div className="text-sm text-gray-700">{lang.markets}</div>
                </div>
                
                {selectedLanguage.code === lang.code && (
                  <div className="mt-4 pt-4 border-t">
                    <div className="flex items-center gap-2 text-primary-600">
                      <CheckCircle2 className="h-4 w-4" />
                      <span className="text-sm font-medium">Selected Market</span>
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              International SEO Done Right
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our proven process ensures your content ranks in every target market while 
              maintaining cultural relevance and local search intent.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-electric-500 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                1
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Market Research</h3>
              <p className="text-gray-600">
                Analyze search behavior, competition, and opportunities in each target language
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-electric-500 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                2
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Native Optimization</h3>
              <p className="text-gray-600">
                Create culturally relevant content with native speakers and local SEO experts
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-electric-500 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                3
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Technical Setup</h3>
              <p className="text-gray-600">
                Implement hreflang tags, geo-targeting, and international site structure
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-electric-500 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                4
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Local Authority</h3>
              <p className="text-gray-600">
                Build regional backlinks and establish presence in local search engines
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Complete International SEO Solution
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to dominate global search results
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-6 shadow-lg border border-gray-100"
            >
              <Languages className="h-12 w-12 text-primary-500 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Native Content Creation</h3>
              <p className="text-gray-600 mb-4">
                AI-powered content in 50+ languages with cultural nuances and local idioms
              </p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5" />
                  <span>Native speaker quality</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5" />
                  <span>Cultural adaptation</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5" />
                  <span>Local keyword research</span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white rounded-xl p-6 shadow-lg border border-gray-100"
            >
              <Search className="h-12 w-12 text-primary-500 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Regional Search Engines</h3>
              <p className="text-gray-600 mb-4">
                Optimize for Baidu, Yandex, Naver, and other regional search leaders
              </p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5" />
                  <span>Baidu SEO (China)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5" />
                  <span>Yandex SEO (Russia)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5" />
                  <span>Local platform optimization</span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-xl p-6 shadow-lg border border-gray-100"
            >
              <Globe className="h-12 w-12 text-primary-500 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Technical International SEO</h3>
              <p className="text-gray-600 mb-4">
                Proper hreflang implementation, geo-targeting, and international architecture
              </p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5" />
                  <span>Hreflang tag setup</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5" />
                  <span>ccTLD/subdomain strategy</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5" />
                  <span>International sitemaps</span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-white rounded-xl p-6 shadow-lg border border-gray-100"
            >
              <MapPin className="h-12 w-12 text-primary-500 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Local Link Building</h3>
              <p className="text-gray-600 mb-4">
                Build authority in each target market with regional backlinks
              </p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5" />
                  <span>Local media outreach</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5" />
                  <span>Regional directories</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5" />
                  <span>Country-specific citations</span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="bg-white rounded-xl p-6 shadow-lg border border-gray-100"
            >
              <BarChart3 className="h-12 w-12 text-primary-500 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Multilingual Analytics</h3>
              <p className="text-gray-600 mb-4">
                Track performance across all markets with unified reporting
              </p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5" />
                  <span>Country-specific tracking</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5" />
                  <span>Language performance</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5" />
                  <span>ROI by market</span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="bg-white rounded-xl p-6 shadow-lg border border-gray-100"
            >
              <Users className="h-12 w-12 text-primary-500 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Cultural Optimization</h3>
              <p className="text-gray-600 mb-4">
                Adapt your message for maximum impact in each culture
              </p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5" />
                  <span>Cultural consultation</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5" />
                  <span>Local UX preferences</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5" />
                  <span>Regional compliance</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Global Success Stories
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See how businesses expanded internationally with our multilingual SEO
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <motion.div
                key={study.company}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-6 border border-gray-200"
              >
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{study.company}</h3>
                    <p className="text-gray-600">{study.industry}</p>
                  </div>
                  <Award className="h-8 w-8 text-electric-500" />
                </div>
                
                <div className="space-y-3">
                  <div className="flex justify-between items-center py-2 border-b">
                    <span className="text-gray-600">Languages</span>
                    <span className="font-bold text-gray-900">{study.results.languages}</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b">
                    <span className="text-gray-600">Traffic Growth</span>
                    <span className="font-bold text-primary-600">{study.results.traffic}</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b">
                    <span className="text-gray-600">Revenue Impact</span>
                    <span className="font-bold text-green-600">{study.results.revenue}</span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="text-gray-600">New Markets</span>
                    <span className="font-bold text-gray-900">{study.results.markets}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              International SEO Pricing
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Scalable solutions for global expansion
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-8 border border-gray-200"
            >
              <div className="text-center mb-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Regional</h3>
                <p className="text-gray-600 mb-4">1-3 Languages</p>
                <div className="text-4xl font-bold text-gray-900">
                  $1,499<span className="text-lg font-normal text-gray-600">/mo</span>
                </div>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5" />
                  <span>Up to 3 languages</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5" />
                  <span>50 pages per language</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5" />
                  <span>Basic hreflang setup</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5" />
                  <span>Monthly reporting</span>
                </li>
              </ul>
              <Link
                href="/get-started?plan=regional"
                className="block text-center bg-gray-900 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors"
              >
                Get Started
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-gradient-to-br from-primary-50 to-white rounded-xl p-8 border-2 border-primary-500 shadow-xl relative"
            >
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-primary-500 to-electric-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                Most Popular
              </div>
              <div className="text-center mb-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Global</h3>
                <p className="text-gray-600 mb-4">4-10 Languages</p>
                <div className="text-4xl font-bold text-primary-600">
                  $2,999<span className="text-lg font-normal text-gray-600">/mo</span>
                </div>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5" />
                  <span>Up to 10 languages</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5" />
                  <span>200 pages per language</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5" />
                  <span>Advanced technical setup</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5" />
                  <span>Regional link building</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5" />
                  <span>Weekly reporting</span>
                </li>
              </ul>
              <Link
                href="/get-started?plan=global"
                className="block text-center bg-gradient-to-r from-primary-500 to-primary-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-primary-600 hover:to-primary-700 transition-all shadow-lg"
              >
                Get Started
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-xl p-8 border border-gray-200"
            >
              <div className="text-center mb-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Enterprise</h3>
                <p className="text-gray-600 mb-4">Unlimited Languages</p>
                <div className="text-4xl font-bold text-gray-900">
                  Custom
                </div>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5" />
                  <span>Unlimited languages</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5" />
                  <span>Unlimited pages</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5" />
                  <span>Dedicated team</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5" />
                  <span>Custom integrations</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5" />
                  <span>Real-time reporting</span>
                </li>
              </ul>
              <Link
                href="/contact-sales"
                className="block text-center bg-gray-900 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors"
              >
                Contact Sales
              </Link>
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
            <h2 className="text-3xl lg:text-5xl font-bold mb-6">
              Ready to Go Global?
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Start reaching billions of new customers in their native language. 
              Get your free international SEO audit and expansion strategy.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Link
                href="/free-audit"
                className="inline-flex items-center justify-center gap-2 bg-white text-primary-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-all shadow-xl"
              >
                Get International Audit
                <Globe className="h-5 w-5" />
              </Link>
              <Link
                href="/demo"
                className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur text-white border-2 border-white/20 px-8 py-4 rounded-xl font-semibold hover:bg-white/20 transition-all"
              >
                Schedule Demo
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-white/80">
              <div>
                <div className="text-3xl font-bold text-white">50+</div>
                <div className="text-sm">Languages</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white">180+</div>
                <div className="text-sm">Countries</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white">500%</div>
                <div className="text-sm">Avg. Growth</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white">30</div>
                <div className="text-sm">Days to Results</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}