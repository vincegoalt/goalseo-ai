import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { locations, getLocationBySlug } from '@/data/locations'
import { services, getServiceBySlug } from '@/data/services'
import { LocalSEOHero, LocalMarketInsights, LocalIndustryFocus, NeighborhoodCoverage, LocalCitationsBlock, LocalCompetitorAnalysis, LocalSEOROICalculator } from '@/components/service-location/LocalSEOBlocks'
import { NationalSEOHero, NationalMarketReach, NationalKeywordStrategy, NationalContentHub, NationalLinkBuilding, NationalCompetitorInsights, NationalROIProjections } from '@/components/service-location/NationalSEOBlocks'
import { InternationalSEOHero, GlobalMarketEntry, MultiLanguageOptimization, HrefLangImplementation, InternationalTechnicalSEO, GlobalCompetitorAnalysis, InternationalROICalculator } from '@/components/service-location/InternationalSEOBlocks'
import { EcommerceSEOHero, ProductOptimization, CategoryPageStrategy, TechnicalEcommerce, ConversionOptimization, EcommerceAnalytics, EcommerceROICalculator } from '@/components/service-location/EcommerceSEOBlocks'
import { EnterpriseSEOHero, EnterpriseStrategy, MultiSiteManagement, EnterpriseReporting, DedicatedTeam, EnterpriseIntegrations, EnterpriseROI } from '@/components/service-location/EnterpriseSEOBlocks'
import { TechnicalSEOHero, TechnicalAudit, CoreWebVitals, CrawlOptimization, StructuredData, TechnicalMonitoring, TechnicalROI } from '@/components/service-location/TechnicalSEOBlocks'
import { LinkBuildingHero, LinkStrategy, AuthorityBuilding, LocalLinkBuilding, LinkMonitoring, BrandMentions, LinkBuildingROI } from '@/components/service-location/LinkBuildingBlocks'
import LocationCTA from '@/components/locations/LocationCTA'

interface ServiceLocationPageProps {
  params: {
    city: string
    service: string
  }
}

const targetKeywords = {
  'local-seo': [
    'SEO services pricing',
    'hire SEO agency',
    'SEO services near me',
    'affordable SEO packages',
    'best SEO services',
    'top SEO agencies 2025',
    'local SEO company'
  ],
  'national-seo': [
    'national SEO services',
    'enterprise SEO agency',
    'nationwide SEO campaigns',
    'SEO services pricing',
    'hire SEO agency',
    'best SEO services',
    'top SEO agencies 2025'
  ],
  'international-seo': [
    'international SEO services',
    'global SEO agency',
    'multilingual SEO',
    'hreflang implementation',
    'SEO services pricing',
    'hire SEO agency',
    'best SEO services'
  ],
  'ecommerce-seo': [
    'ecommerce SEO services',
    'online store optimization',
    'product page SEO',
    'Shopify SEO agency',
    'SEO services pricing',
    'hire SEO agency',
    'best SEO services'
  ],
  'enterprise-seo': [
    'enterprise SEO services',
    'large scale SEO',
    'corporate SEO agency',
    'multi-site SEO',
    'SEO services pricing',
    'hire SEO agency',
    'best SEO services'
  ],
  'technical-seo': [
    'technical SEO services',
    'website speed optimization',
    'core web vitals',
    'technical SEO audit',
    'SEO services pricing',
    'hire SEO agency',
    'best SEO services'
  ],
  'link-building': [
    'link building services',
    'backlink building agency',
    'authority link building',
    'guest posting services',
    'SEO services pricing',
    'hire SEO agency',
    'best SEO services'
  ]
}

export async function generateStaticParams() {
  const params = []
  
  for (const location of locations) {
    for (const service of services) {
      // Only generate for core services
      if (['local-seo', 'national-seo', 'international-seo', 'ecommerce-seo', 'enterprise-seo', 'technical-seo', 'link-building'].includes(service.slug)) {
        params.push({
          city: location.slug,
          service: service.slug,
        })
      }
    }
  }
  
  return params
}

export async function generateMetadata({ params }: ServiceLocationPageProps): Promise<Metadata> {
  const location = getLocationBySlug(params.city)
  const service = getServiceBySlug(params.service)
  
  if (!location || !service) {
    return {
      title: 'Service Not Found',
    }
  }

  const keywords = targetKeywords[service.slug as keyof typeof targetKeywords] || []
  const locationKeywords = keywords.map(keyword => 
    keyword.includes('[City]') 
      ? keyword.replace('[City]', location.city)
      : `${keyword} ${location.city}`
  )

  return {
    title: `${service.title} in ${location.city}, ${location.stateAbbr} | GoalSEO.ai - 387% ROI`,
    description: `Professional ${service.title.toLowerCase()} services in ${location.city}, ${location.state}. Get 387% average ROI with our AI-powered SEO strategies. Serving ${location.neighborhoods?.join(', ')}. Free consultation available.`,
    keywords: [...locationKeywords, `${location.city} SEO company`, `${service.slug} ${location.city}`, `${location.city} digital marketing`].join(', '),
    openGraph: {
      title: `${service.title} in ${location.city} | GoalSEO.ai`,
      description: `Top-rated ${service.title.toLowerCase()} agency serving ${location.city} and surrounding areas. Get more traffic, leads, and sales with our proven strategies.`,
      type: 'website',
      locale: 'en_US',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${service.title} in ${location.city} | GoalSEO.ai`,
      description: `Professional ${service.title.toLowerCase()} services in ${location.city}. 387% average ROI guaranteed.`,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  }
}

export default function ServiceLocationPage({ params }: ServiceLocationPageProps) {
  const location = getLocationBySlug(params.city)
  const service = getServiceBySlug(params.service)

  if (!location || !service) {
    notFound()
  }

  // JSON-LD structured data
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: `${service.title} in ${location.city}`,
    description: `Professional ${service.title.toLowerCase()} services in ${location.city}, ${location.state}. Get 387% average ROI with our AI-powered SEO strategies.`,
    provider: {
      '@type': 'Organization',
      name: 'GoalSEO.ai',
      url: 'https://goalseo.ai',
      logo: 'https://goalseo.ai/goalseologo.png',
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: '+1-555-123-4567',
        contactType: 'customer service',
        areaServed: location.state,
        availableLanguage: 'English'
      }
    },
    areaServed: {
      '@type': 'City',
      name: location.city,
      containedInPlace: {
        '@type': 'State',
        name: location.state,
        containedInPlace: {
          '@type': 'Country',
          name: 'United States'
        }
      }
    },
    serviceType: service.title,
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: `${service.title} Services`,
      itemListElement: service.features.map((feature, index) => ({
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: feature,
        },
        position: index + 1,
      })),
    },
    geo: location.coordinates ? {
      '@type': 'GeoCoordinates',
      latitude: location.coordinates.lat,
      longitude: location.coordinates.lng
    } : undefined,
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '2847',
      bestRating: '5',
      worstRating: '1'
    },
    offers: {
      '@type': 'Offer',
      priceCurrency: 'USD',
      price: service.price?.starting || '997',
      priceSpecification: {
        '@type': 'UnitPriceSpecification',
        price: service.price?.starting || '997',
        priceCurrency: 'USD',
        referenceQuantity: {
          '@type': 'QuantitativeValue',
          value: '1',
          unitCode: 'MON'
        }
      }
    }
  }

  const renderServiceBlocks = () => {
    switch (service.slug) {
      case 'local-seo':
        return (
          <>
            <LocalSEOHero location={location} />
            <LocalMarketInsights location={location} />
            <LocalIndustryFocus location={location} />
            <NeighborhoodCoverage location={location} />
            <LocalCitationsBlock location={location} />
            <LocalCompetitorAnalysis location={location} />
            <LocalSEOROICalculator location={location} />
          </>
        )
      case 'national-seo':
        return (
          <>
            <NationalSEOHero location={location} />
            <NationalMarketReach location={location} />
            <NationalKeywordStrategy location={location} />
            <NationalContentHub location={location} />
            <NationalLinkBuilding location={location} />
            <NationalCompetitorInsights location={location} />
            <NationalROIProjections location={location} />
          </>
        )
      case 'international-seo':
        return (
          <>
            <InternationalSEOHero location={location} />
            <GlobalMarketEntry location={location} />
            <MultiLanguageOptimization location={location} />
            <HrefLangImplementation location={location} />
            <InternationalTechnicalSEO location={location} />
            <GlobalCompetitorAnalysis location={location} />
            <InternationalROICalculator location={location} />
          </>
        )
      case 'ecommerce-seo':
        return (
          <>
            <EcommerceSEOHero location={location} />
            <ProductOptimization location={location} />
            <CategoryPageStrategy location={location} />
            <TechnicalEcommerce location={location} />
            <ConversionOptimization location={location} />
            <EcommerceAnalytics location={location} />
            <EcommerceROICalculator location={location} />
          </>
        )
      case 'enterprise-seo':
        return (
          <>
            <EnterpriseSEOHero location={location} />
            <EnterpriseStrategy location={location} />
            <MultiSiteManagement location={location} />
            <EnterpriseReporting location={location} />
            <DedicatedTeam location={location} />
            <EnterpriseIntegrations location={location} />
            <EnterpriseROI location={location} />
          </>
        )
      case 'technical-seo':
        return (
          <>
            <TechnicalSEOHero location={location} />
            <TechnicalAudit location={location} />
            <CoreWebVitals location={location} />
            <CrawlOptimization location={location} />
            <StructuredData location={location} />
            <TechnicalMonitoring location={location} />
            <TechnicalROI location={location} />
          </>
        )
      case 'link-building':
        return (
          <>
            <LinkBuildingHero location={location} />
            <LinkStrategy location={location} />
            <AuthorityBuilding location={location} />
            <LocalLinkBuilding location={location} />
            <LinkMonitoring location={location} />
            <BrandMentions location={location} />
            <LinkBuildingROI location={location} />
          </>
        )
      default:
        return null
    }
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="pt-20">
        {renderServiceBlocks()}
        <LocationCTA location={location} />
      </div>
    </>
  )
}