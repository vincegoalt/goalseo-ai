"use client"

import { motion } from 'framer-motion'
import Link from 'next/link'
import { 
  Code, Database, Zap, Shield, Globe, 
  ArrowRight, CheckCircle, Terminal, Server,
  Lock, Cloud, Activity, Sparkles
} from 'lucide-react'

export default function APIPage() {
  const endpoints = [
    { method: 'GET', path: '/api/keywords', desc: 'Retrieve keyword rankings' },
    { method: 'POST', path: '/api/content', desc: 'Generate SEO content' },
    { method: 'GET', path: '/api/analytics', desc: 'Get traffic analytics' },
    { method: 'PUT', path: '/api/optimize', desc: 'Optimize existing content' },
    { method: 'GET', path: '/api/competitors', desc: 'Analyze competitors' },
    { method: 'POST', path: '/api/audit', desc: 'Run SEO audit' }
  ]
  
  const features = [
    { icon: Zap, title: 'Lightning Fast', desc: '< 100ms response time' },
    { icon: Shield, title: '99.9% Uptime', desc: 'Enterprise reliability' },
    { icon: Lock, title: 'Secure', desc: 'OAuth 2.0 & API keys' },
    { icon: Globe, title: 'Global CDN', desc: 'Worldwide coverage' }
  ]
  
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-96 h-96 bg-primary-500/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-electric-500/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Terminal className="h-4 w-4" />
              <span>Developer API</span>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Powerful SEO API
            </h1>
            
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Integrate GoalSEO's AI-powered SEO capabilities directly into your applications. 
              Full RESTful API with comprehensive documentation.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/docs/api"
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-primary-500 to-primary-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-primary-600 hover:to-primary-700 transition-all"
              >
                View Documentation
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur text-white border border-white/30 px-8 py-4 rounded-xl font-semibold hover:bg-white/20 transition-all"
              >
                Get API Key
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* Code Example */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Simple Integration
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Get started in minutes with our comprehensive SDKs and libraries for all major programming languages.
              </p>
              
              <div className="space-y-4">
                {['Node.js', 'Python', 'PHP', 'Ruby', 'Go', 'Java'].map((lang) => (
                  <div key={lang} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span className="text-gray-700">{lang} SDK Available</span>
                  </div>
                ))}
              </div>
              
              <Link
                href="/docs/sdks"
                className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 font-semibold mt-6"
              >
                View all SDKs
                <ArrowRight className="h-5 w-5" />
              </Link>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gray-900 rounded-xl p-6 text-white font-mono text-sm overflow-x-auto"
            >
              <div className="text-gray-400 mb-4"># Quick Start Example</div>
              <pre className="text-green-400">
{`const GoalSEO = require('@goalseo/sdk');

const client = new GoalSEO({
  apiKey: 'your-api-key'
});

// Get keyword rankings
const rankings = await client.keywords.getRankings({
  domain: 'example.com',
  keywords: ['seo tools', 'keyword research']
});

// Generate SEO content
const content = await client.content.generate({
  topic: 'Best SEO Strategies 2024',
  keywords: ['seo', 'optimization'],
  length: 1500
});

console.log(content);`}
              </pre>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Endpoints */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              API Endpoints
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Full REST API with comprehensive endpoints for all SEO operations
            </p>
          </motion.div>
          
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="divide-y divide-gray-200">
              {endpoints.map((endpoint, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="p-6 hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <span className={`px-3 py-1 rounded text-sm font-semibold ${
                        endpoint.method === 'GET' ? 'bg-blue-100 text-blue-700' :
                        endpoint.method === 'POST' ? 'bg-green-100 text-green-700' :
                        'bg-yellow-100 text-yellow-700'
                      }`}>
                        {endpoint.method}
                      </span>
                      <code className="text-gray-800 font-mono">{endpoint.path}</code>
                    </div>
                    <span className="text-gray-600">{endpoint.desc}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Features */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon
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
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.desc}</p>
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
            Ready to Build?
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Start integrating GoalSEO's powerful AI into your applications today
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 bg-white text-primary-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-all shadow-xl"
          >
            Get Your API Key
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}