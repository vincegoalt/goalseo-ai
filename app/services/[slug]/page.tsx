import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { services, getServiceBySlug } from '@/data/services'
import ServiceHero from '@/components/services/ServiceHero'
import ServiceFeatures from '@/components/services/ServiceFeatures'
import ServiceBenefits from '@/components/services/ServiceBenefits'
import ServiceProcess from '@/components/services/ServiceProcess'
import ServiceFAQ from '@/components/services/ServiceFAQ'
import ServiceCTA from '@/components/services/ServiceCTA'
import RelatedServices from '@/components/services/RelatedServices'

interface ServicePageProps {
  params: {
    slug: string
  }
}

export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }))
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const service = getServiceBySlug(params.slug)
  
  if (!service) {
    return {
      title: 'Service Not Found',
    }
  }

  return {
    title: `${service.title} | Professional SEO Services`,
    description: service.description,
    openGraph: {
      title: `${service.title} | GoalSEO.ai`,
      description: service.description,
      type: 'website',
    },
  }
}

export default function ServicePage({ params }: ServicePageProps) {
  const service = getServiceBySlug(params.slug)

  if (!service) {
    notFound()
  }

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.title,
    description: service.description,
    provider: {
      '@type': 'Organization',
      name: 'GoalSEO.ai',
      url: 'https://goalseo.ai',
    },
    areaServed: {
      '@type': 'State',
      name: 'California',
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: service.title,
      itemListElement: service.features.map((feature, index) => ({
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: feature,
        },
        position: index + 1,
      })),
    },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="pt-20">
        <ServiceHero service={service} />
        <ServiceFeatures service={service} />
        <ServiceBenefits service={service} />
        <ServiceProcess />
        <ServiceFAQ service={service} />
        <RelatedServices currentService={service} />
        <ServiceCTA service={service} />
      </div>
    </>
  )
}