import Script from 'next/script'
import { siteConfig } from '@/config/site'

export default function LocalBusinessSchema() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://goalseo.ai/#business",
    "name": "GoalSEO.ai",
    "alternateName": "GoalSEO Long Beach",
    "description": "Long Beach's #1 AI-Powered SEO Agency. We help local businesses dominate search results with proven SEO strategies. Serving Long Beach, Belmont Shore, Signal Hill, Lakewood and surrounding areas.",
    "url": "https://goalseo.ai",
    "telephone": "+15626829403",
    "email": "info@goalseo.ai",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "5318 E. 2nd St",
      "addressLocality": "Long Beach",
      "addressRegion": "CA",
      "postalCode": "90803",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 33.7594,
      "longitude": -118.1396
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "09:00",
        "closes": "18:00"
      }
    ],
    "sameAs": [
      "https://twitter.com/goalseo",
      "https://linkedin.com/company/goalseo",
      "https://facebook.com/goalseo",
      "https://instagram.com/goalseo"
    ],
    "logo": {
      "@type": "ImageObject",
      "url": "https://goalseo.ai/logo.png",
      "width": 512,
      "height": 512
    },
    "image": "https://goalseo.ai/og-image.png",
    "priceRange": "$$",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "127",
      "bestRating": "5",
      "worstRating": "1"
    },
    "areaServed": [
      {
        "@type": "City",
        "name": "Long Beach",
        "containedInPlace": {
          "@type": "State",
          "name": "California"
        }
      },
      {
        "@type": "City",
        "name": "Belmont Shore"
      },
      {
        "@type": "City",
        "name": "Signal Hill"
      },
      {
        "@type": "City",
        "name": "Lakewood"
      },
      {
        "@type": "City",
        "name": "Seal Beach"
      },
      {
        "@type": "City",
        "name": "Torrance"
      },
      {
        "@type": "City",
        "name": "San Pedro"
      },
      {
        "@type": "City",
        "name": "Carson"
      }
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "SEO Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Local SEO",
            "description": "Dominate local search results in Long Beach and surrounding areas"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "GEO (Generative Engine Optimization)",
            "description": "Optimize for AI-powered search engines and chatbots"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "AEO (Answer Engine Optimization)",
            "description": "Rank in featured snippets and voice search results"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Technical SEO",
            "description": "Site speed, crawlability, and technical excellence"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "WordPress SEO",
            "description": "Complete WordPress optimization and performance"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Shopify SEO",
            "description": "E-commerce optimization for maximum visibility"
          }
        }
      ]
    },
    "founder": {
      "@type": "Person",
      "name": "Vincent Pivard",
      "jobTitle": "CEO & Founder"
    },
    "foundingDate": "2020",
    "numberOfEmployees": {
      "@type": "QuantitativeValue",
      "minValue": 10,
      "maxValue": 50
    }
  }

  // Organization schema for additional context
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": "https://goalseo.ai/#organization",
    "name": "GoalSEO.ai",
    "url": "https://goalseo.ai",
    "logo": "https://goalseo.ai/logo.png",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+1-562-682-9403",
      "contactType": "sales",
      "contactOption": "TollFree",
      "areaServed": "US",
      "availableLanguage": ["en", "es"]
    },
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "5318 E. 2nd St",
      "addressLocality": "Long Beach",
      "addressRegion": "CA",
      "postalCode": "90803",
      "addressCountry": "US"
    }
  }

  // BreadcrumbList for homepage
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://goalseo.ai"
      }
    ]
  }

  return (
    <>
      <Script
        id="local-business-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schemaData)
        }}
      />
      <Script
        id="organization-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema)
        }}
      />
      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema)
        }}
      />
    </>
  )
}