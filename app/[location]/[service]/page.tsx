import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import locationData from '@/lib/location-data/location-services.json'
import LocationServicePageEnhanced from '@/components/LocationServicePageEnhanced'

interface PageProps {
  params: {
    location: string
    service: string
  }
}

// Generate static params for all location/service combinations
export async function generateStaticParams() {
  const params: { location: string; service: string }[] = []
  
  locationData.locations.forEach(location => {
    location.services.forEach(service => {
      // Extract location and service from the URL slug
      const slugParts = service.slug.split('/')
      if (slugParts.length >= 2) {
        params.push({
          location: slugParts[1], // location part
          service: slugParts[2]   // service part
        })
      }
    })
  })
  
  return params
}

// Generate metadata for each page
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { location, service } = params
  
  // Find the matching page data
  const locationObj = locationData.locations.find(loc => 
    loc.slug === location || 
    loc.name.toLowerCase().replace(/\s+/g, '-') === location
  )
  
  if (!locationObj) {
    return {
      title: 'Page Not Found',
      description: 'The requested page could not be found.'
    }
  }
  
  const serviceObj = locationObj.services.find(srv => 
    srv.slug === `/${location}/${service}`
  )
  
  if (!serviceObj) {
    return {
      title: 'Page Not Found',
      description: 'The requested page could not be found.'
    }
  }
  
  return {
    title: serviceObj.metaTitle,
    description: serviceObj.metaDescription,
    openGraph: {
      title: serviceObj.metaTitle,
      description: serviceObj.metaDescription,
      type: 'website',
      url: `https://goalseo.ai${serviceObj.slug}`,
    },
    twitter: {
      card: 'summary_large_image',
      title: serviceObj.metaTitle,
      description: serviceObj.metaDescription,
    },
    alternates: {
      canonical: `https://goalseo.ai${serviceObj.slug}`,
    }
  }
}

export default function Page({ params }: PageProps) {
  const { location, service } = params
  
  // Find the matching page data
  const locationObj = locationData.locations.find(loc => 
    loc.slug === location || 
    loc.name.toLowerCase().replace(/\s+/g, '-') === location
  )
  
  if (!locationObj) {
    notFound()
  }
  
  const serviceObj = locationObj.services.find(srv => 
    srv.slug === `/${location}/${service}`
  )
  
  if (!serviceObj) {
    notFound()
  }
  
  // Map service name to proper display name
  const serviceDisplayNames: Record<string, string> = {
    'plumbers-seo': 'Plumbers',
    'electricians-seo': 'Electricians',
    'hvac-seo': 'HVAC',
    'roofing-seo': 'Roofing',
    'attorneys-seo': 'Attorneys',
    'dentists-seo': 'Dentists',
    'real-estate-seo': 'Real Estate',
    'restaurants-seo': 'Restaurants',
    'auto-services-seo': 'Auto Services',
    'gyms-seo': 'Gyms',
    'salons-seo': 'Salons',
    'cpas-seo': 'CPAs'
  }
  
  return (
    <LocationServicePageEnhanced
      location={locationObj.name}
      service={serviceDisplayNames[service] || serviceObj.service}
      metaTitle={serviceObj.metaTitle}
      metaDescription={serviceObj.metaDescription}
      slug={serviceObj.slug}
    />
  )
}