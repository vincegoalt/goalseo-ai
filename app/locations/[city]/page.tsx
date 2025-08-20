import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { locations, getLocationBySlug } from '@/data/locations'
import LocationHero from '@/components/locations/LocationHero'
import LocationServices from '@/components/locations/LocationServices'
import LocationTestimonials from '@/components/locations/LocationTestimonials'
import LocationCTA from '@/components/locations/LocationCTA'
import LocalSchema from '@/components/locations/LocalSchema'

interface LocationPageProps {
  params: {
    city: string
  }
}

export async function generateStaticParams() {
  return locations.map((location) => ({
    city: location.slug,
  }))
}

export async function generateMetadata({ params }: LocationPageProps): Promise<Metadata> {
  const location = getLocationBySlug(params.city)
  
  if (!location) {
    return {
      title: 'Location Not Found',
    }
  }

  return {
    title: `SEO Services in ${location.city}, ${location.stateAbbr} | GoalSEO.ai`,
    description: `Professional SEO services in ${location.city}, ${location.state}. Local SEO, national campaigns, and e-commerce optimization with 387% average ROI. Free consultation.`,
    openGraph: {
      title: `SEO Services in ${location.city} | GoalSEO.ai`,
      description: `Top-rated SEO agency serving ${location.city} and surrounding areas. Get more traffic, leads, and sales with our proven strategies.`,
      type: 'website',
    },
  }
}

export default function LocationPage({ params }: LocationPageProps) {
  const location = getLocationBySlug(params.city)

  if (!location) {
    notFound()
  }

  return (
    <>
      <LocalSchema location={location} />
      <div className="pt-20">
        <LocationHero location={location} />
        <LocationServices location={location} />
        <LocationTestimonials location={location} />
        <LocationCTA location={location} />
      </div>
    </>
  )
}