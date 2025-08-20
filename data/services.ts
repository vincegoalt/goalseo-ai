export interface Service {
  id: string
  slug: string
  title: string
  shortDescription: string
  description: string
  icon: string
  features: string[]
  benefits: string[]
  price?: {
    starting: number
    currency: string
    period: string
  }
  category: 'core' | 'technical' | 'specialized' | 'development' | 'marketing'
}

export const services: Service[] = [
  // Core SEO Services
  {
    id: 'local-seo',
    slug: 'local-seo',
    title: 'Local SEO Domination',
    shortDescription: 'Dominate local search results and attract customers in your area',
    description: 'Our Local SEO Domination package ensures your business appears at the top of local search results. We optimize your Google Business Profile, build local citations, and create location-specific content that drives foot traffic and calls.',
    icon: 'MapPin',
    features: [
      'Google Business Profile Optimization',
      'Local Citation Building',
      'Review Management Strategy',
      'Local Link Building',
      'Location Page Creation',
      'NAP Consistency Audit',
      'Local Schema Markup',
      'Mobile Optimization'
    ],
    benefits: [
      'Increase local visibility by 250%',
      'Appear in Google\'s Local Pack',
      'Drive more foot traffic',
      'Increase phone calls by 180%'
    ],
    category: 'core'
  },
  {
    id: 'national-seo',
    slug: 'national-seo',
    title: 'National SEO Campaigns',
    shortDescription: 'Scale your visibility across the entire country',
    description: 'Expand your reach nationwide with our comprehensive National SEO strategies. We target high-volume keywords, build authoritative backlinks, and create content that ranks across all major markets.',
    icon: 'Globe',
    features: [
      'National Keyword Research',
      'Content Strategy Development',
      'Authority Link Building',
      'Competitor Analysis',
      'Technical SEO Audit',
      'Content Creation & Optimization',
      'Performance Tracking',
      'Monthly Reporting'
    ],
    benefits: [
      'Rank for competitive national keywords',
      'Increase organic traffic by 400%',
      'Build domain authority',
      'Outrank national competitors'
    ],
    category: 'core'
  },
  {
    id: 'ecommerce-seo',
    slug: 'ecommerce-seo',
    title: 'E-commerce SEO',
    shortDescription: 'Boost your online store\'s visibility and sales',
    description: 'Specialized SEO strategies for e-commerce platforms including Shopify, WooCommerce, and custom solutions. We optimize product pages, implement structured data, and improve site architecture for maximum conversions.',
    icon: 'ShoppingCart',
    features: [
      'Product Page Optimization',
      'Category Page Enhancement',
      'Schema Markup Implementation',
      'Site Speed Optimization',
      'Mobile Commerce Optimization',
      'Faceted Navigation Solutions',
      'Product Feed Optimization',
      'Conversion Rate Optimization'
    ],
    benefits: [
      'Increase organic revenue by 350%',
      'Improve product visibility',
      'Reduce cart abandonment',
      'Scale to thousands of products'
    ],
    category: 'specialized'
  },
  {
    id: 'enterprise-seo',
    slug: 'enterprise-seo',
    title: 'Enterprise SEO Solutions',
    shortDescription: 'Comprehensive SEO for large-scale organizations',
    description: 'Enterprise-grade SEO solutions designed for large organizations with complex needs. We provide dedicated teams, custom strategies, and advanced reporting to drive measurable results at scale.',
    icon: 'Building',
    features: [
      'Dedicated SEO Team',
      'Custom Strategy Development',
      'Multi-site Management',
      'International SEO',
      'Advanced Analytics & Reporting',
      'API Integration',
      'Workflow Automation',
      'Executive Dashboards'
    ],
    benefits: [
      'Scale SEO across multiple properties',
      'Dedicated account management',
      'Custom solutions for complex needs',
      'Enterprise-grade reporting'
    ],
    category: 'core'
  },
  {
    id: 'technical-seo',
    slug: 'technical-seo',
    title: 'Technical SEO Audit & Implementation',
    shortDescription: 'Fix technical issues that are holding you back',
    description: 'Comprehensive technical SEO audits and implementation to ensure your website meets all search engine requirements. We identify and fix crawlability issues, improve site speed, and optimize your technical foundation.',
    icon: 'Code',
    features: [
      'Complete Technical Audit',
      'Core Web Vitals Optimization',
      'JavaScript SEO Solutions',
      'Mobile-First Indexing',
      'XML Sitemap Optimization',
      'Robots.txt Configuration',
      'Canonicalization Strategy',
      'Server & Hosting Optimization'
    ],
    benefits: [
      'Fix technical issues blocking rankings',
      'Improve crawl efficiency',
      'Enhance user experience',
      'Future-proof your website'
    ],
    category: 'technical'
  },
  {
    id: 'content-seo',
    slug: 'content-seo',
    title: 'AI-Powered Content SEO',
    shortDescription: 'Create content that ranks and converts',
    description: 'Leverage AI technology to create high-quality, SEO-optimized content at scale. Our content strategies are data-driven and designed to capture featured snippets and drive organic growth.',
    icon: 'FileText',
    features: [
      'AI Content Generation',
      'Content Gap Analysis',
      'Topic Cluster Strategy',
      'Featured Snippet Optimization',
      'Content Refresh Programs',
      'Semantic SEO Implementation',
      'Content Distribution',
      'Performance Tracking'
    ],
    benefits: [
      'Produce 10x more content',
      'Capture featured snippets',
      'Build topical authority',
      'Increase engagement by 200%'
    ],
    category: 'marketing'
  },
  {
    id: 'link-building',
    slug: 'link-building',
    title: 'Authority Link Building',
    shortDescription: 'Build high-quality backlinks that boost rankings',
    description: 'Strategic link building campaigns that earn high-authority backlinks from relevant sources. We focus on quality over quantity to build your domain authority and improve rankings.',
    icon: 'Link',
    features: [
      'Competitor Backlink Analysis',
      'Outreach Campaigns',
      'Guest Posting',
      'Digital PR',
      'Resource Link Building',
      'Broken Link Recovery',
      'Brand Mentions',
      'Link Monitoring & Reporting'
    ],
    benefits: [
      'Increase domain authority',
      'Earn high-quality backlinks',
      'Improve keyword rankings',
      'Build brand credibility'
    ],
    category: 'core'
  },
  {
    id: 'shopify-seo',
    slug: 'shopify-seo',
    title: 'Shopify Plus SEO',
    shortDescription: 'Specialized SEO for Shopify and Shopify Plus stores',
    description: 'Expert Shopify SEO services tailored for the platform\'s unique requirements. As a Shopify Plus Partner, we understand how to maximize your store\'s organic potential.',
    icon: 'Store',
    features: [
      'Shopify Technical Audit',
      'Theme Optimization',
      'App Performance Review',
      'Collection Page Optimization',
      'Product Schema Implementation',
      'Speed Optimization',
      'Shopify Plus Features',
      'International SEO Setup'
    ],
    benefits: [
      'Shopify-specific optimization',
      'Increase organic sales by 400%',
      'Reduce reliance on paid ads',
      'Scale with your growth'
    ],
    category: 'specialized'
  },
  {
    id: 'seo-consulting',
    slug: 'seo-consulting',
    title: 'SEO Consulting & Strategy',
    shortDescription: 'Expert guidance for your in-house team',
    description: 'Strategic SEO consulting to guide your in-house team to success. We provide training, strategy development, and ongoing support to build your internal SEO capabilities.',
    icon: 'Users',
    features: [
      'Strategic Planning',
      'Team Training',
      'Process Development',
      'Tool Selection & Setup',
      'Monthly Strategy Calls',
      'Priority Support',
      'Documentation & SOPs',
      'Performance Reviews'
    ],
    benefits: [
      'Build in-house SEO expertise',
      'Develop sustainable processes',
      'Get expert guidance',
      'Reduce long-term costs'
    ],
    category: 'core'
  },
  {
    id: 'penalty-recovery',
    slug: 'penalty-recovery',
    title: 'Google Penalty Recovery',
    shortDescription: '24-hour emergency recovery from Google penalties',
    description: 'Rapid response team for Google penalty recovery. We diagnose the issue, create a recovery plan, and work to restore your rankings as quickly as possible.',
    icon: 'AlertTriangle',
    features: [
      '24-Hour Response Time',
      'Penalty Diagnosis',
      'Disavow File Creation',
      'Content Audit & Cleanup',
      'Link Audit & Removal',
      'Reconsideration Requests',
      'Recovery Monitoring',
      'Prevention Strategy'
    ],
    benefits: [
      'Rapid penalty recovery',
      'Restore lost traffic',
      'Prevent future penalties',
      'Expert crisis management'
    ],
    category: 'specialized'
  }
]

export const getServiceBySlug = (slug: string): Service | undefined => {
  return services.find(service => service.slug === slug)
}

export const getServicesByCategory = (category: Service['category']): Service[] => {
  return services.filter(service => service.category === category)
}