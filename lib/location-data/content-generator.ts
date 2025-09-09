import { locationDetails } from './location-details'
import { serviceDetails } from './service-details'

// Generate unique opening paragraphs based on location and service
export function generateOpeningParagraph(location: string, service: string): string {
  const locationData = locationDetails[location.toLowerCase().replace(/\s+/g, '-')]
  const serviceData = serviceDetails[service.toLowerCase().replace(/\s+/g, '-')]
  
  if (!locationData || !serviceData) {
    return `Looking for professional ${service} SEO services in ${location}? GoalSEO helps ${service.toLowerCase()} businesses dominate local search results and attract more customers.`
  }

  const templates = [
    `With a population of ${locationData.population} and ${locationData.businessCount} local businesses, ${locationData.name} presents unique opportunities for ${serviceData.name.toLowerCase()} to capture online visibility. Our specialized SEO strategies help you stand out near ${locationData.landmarks[0]} and throughout the ${locationData.neighborhoods[0]} area.`,
    
    `${locationData.name}'s ${locationData.characteristics[0].toLowerCase()} makes it ideal for ${serviceData.name.toLowerCase()} seeking to expand their digital presence. Serving ${locationData.demographics.primary.toLowerCase()} and ${locationData.demographics.secondary.toLowerCase()}, we understand the local market dynamics that drive success.`,
    
    `Located ${locationData.distance} from Long Beach, ${locationData.name} businesses face unique challenges including ${locationData.localChallenges[0].toLowerCase()}. Our proven SEO strategies help ${serviceData.name.toLowerCase()} overcome these obstacles and capture their share of the ${serviceData.averageTicket} average service value market.`,
    
    `In ${locationData.name}, where ${serviceData.painPoints[0].toLowerCase()}, having a strong online presence is crucial. We specialize in helping ${serviceData.name.toLowerCase()} near ${locationData.landmarks.slice(0, 2).join(' and ')} achieve top rankings for searches like "${serviceData.keywords[0]}" and "${serviceData.keywords[1]}".`,
    
    `The ${locationData.county} County market demands specialized SEO strategies for ${serviceData.name.toLowerCase()}. With median incomes around ${locationData.medianIncome} and ${locationData.characteristics[1].toLowerCase()}, ${locationData.name} offers significant growth potential for businesses ready to invest in their digital presence.`
  ]
  
  // Select template based on hash of location + service for consistency
  const hash = (location + service).split('').reduce((a, b) => a + b.charCodeAt(0), 0)
  return templates[hash % templates.length]
}

// Generate unique benefits section
export function generateLocalBenefits(location: string, service: string): string[] {
  const locationData = locationDetails[location.toLowerCase().replace(/\s+/g, '-')]
  const serviceData = serviceDetails[service.toLowerCase().replace(/\s+/g, '-')]
  
  if (!locationData || !serviceData) {
    return [
      `Increase visibility in ${location} search results`,
      `Attract more ${service.toLowerCase()} customers`,
      `Build local reputation and trust`,
      `Outrank competitors in your area`
    ]
  }
  
  return [
    `Capture ${locationData.demographics.primary.toLowerCase()} searching for ${serviceData.keywords[0]}`,
    `Stand out among ${locationData.businessCount} local businesses in ${locationData.name}`,
    `Leverage ${locationData.characteristics[0].toLowerCase()} to attract ${serviceData.frequency} customers`,
    `Build trust with ${locationData.name} residents through authentic local presence`,
    `Target high-value services with ${serviceData.averageTicket} average tickets`,
    `Overcome "${locationData.localChallenges[0].toLowerCase()}" through strategic SEO positioning`
  ]
}

// Generate testimonials based on location and service
export function generateTestimonials(location: string, service: string): Array<{
  name: string
  business: string
  text: string
  rating: number
}> {
  const locationData = locationDetails[location.toLowerCase().replace(/\s+/g, '-')]
  const serviceData = serviceDetails[service.toLowerCase().replace(/\s+/g, '-')]
  
  if (!locationData || !serviceData) {
    return [{
      name: 'John Smith',
      business: `${service} Pro`,
      text: `GoalSEO transformed our online presence in ${location}. We're now ranking #1 for our main keywords!`,
      rating: 5
    }]
  }
  
  const firstNames = ['Michael', 'Jennifer', 'David', 'Sarah', 'Robert', 'Lisa', 'James', 'Maria', 'William', 'Patricia']
  const lastNames = ['Johnson', 'Williams', 'Brown', 'Jones', 'Garcia', 'Miller', 'Davis', 'Rodriguez', 'Martinez', 'Anderson']
  
  const templates = [
    {
      text: `After struggling with ${serviceData.challenges[0].toLowerCase()}, GoalSEO helped us rank #1 for "${serviceData.keywords[0]}" in ${locationData.name}. Our ${serviceData.metrics[0]} increased by 150% in just 3 months!`,
      businessSuffix: 'Services'
    },
    {
      text: `Working with GoalSEO was a game-changer for our ${serviceData.name.toLowerCase()} business near ${locationData.landmarks[0]}. We now dominate local searches and our ${serviceData.frequency} customers find us easily online.`,
      businessSuffix: 'Professionals'
    },
    {
      text: `The team understood the unique challenges of ${locationData.characteristics[0].toLowerCase()} and created a perfect SEO strategy. We've seen our ${serviceData.averageTicket} average tickets increase as we attract better qualified leads.`,
      businessSuffix: 'Experts'
    }
  ]
  
  return templates.map((template, index) => {
    const hash = (location + service + index).split('').reduce((a, b) => a + b.charCodeAt(0), 0)
    return {
      name: `${firstNames[hash % firstNames.length]} ${lastNames[(hash + index) % lastNames.length]}`,
      business: `${locationData.name} ${serviceData.name} ${template.businessSuffix}`,
      text: template.text,
      rating: 5
    }
  })
}

// Generate local insights section
export function generateLocalInsights(location: string, service: string): {
  title: string
  content: string
}[] {
  const locationData = locationDetails[location.toLowerCase().replace(/\s+/g, '-')]
  const serviceData = serviceDetails[service.toLowerCase().replace(/\s+/g, '-')]
  
  if (!locationData || !serviceData) {
    return [{
      title: `Why ${service} Need SEO in ${location}`,
      content: `Local competition is fierce. Stand out with proven SEO strategies.`
    }]
  }
  
  return [
    {
      title: `Understanding ${locationData.name}'s Market`,
      content: `With ${locationData.population} residents and a median income of ${locationData.medianIncome}, ${locationData.name} offers substantial opportunities for ${serviceData.name.toLowerCase()}. The area's ${locationData.characteristics.slice(0, 2).join(' and ').toLowerCase()} create unique demand patterns, especially during ${serviceData.seasonality.toLowerCase()}.`
    },
    {
      title: `Competing Near ${locationData.landmarks[0]}`,
      content: `The ${locationData.neighborhoods[0]} area sees high search volume for "${serviceData.keywords[0]}" and related terms. With ${serviceData.competitionLevel.toLowerCase()} competition, strategic SEO focusing on ${serviceData.strategies[0].toLowerCase()} and ${serviceData.strategies[1].toLowerCase()} is essential for visibility.`
    },
    {
      title: `Targeting ${locationData.demographics.primary}`,
      content: `Your primary audience of ${locationData.demographics.primary.toLowerCase()} searches differently than generic users. They value ${serviceData.benefits[0].toLowerCase()} and respond well to ${serviceData.strategies[2].toLowerCase()}. Our local SEO approach addresses these specific needs.`
    }
  ]
}

// Generate service-specific SEO strategies
export function generateSEOStrategies(location: string, service: string): {
  strategy: string
  description: string
  impact: string
}[] {
  const locationData = locationDetails[location.toLowerCase().replace(/\s+/g, '-')]
  const serviceData = serviceDetails[service.toLowerCase().replace(/\s+/g, '-')]
  
  if (!locationData || !serviceData) {
    return [{
      strategy: 'Local SEO Optimization',
      description: 'Improve local search visibility',
      impact: 'Increase local traffic by 200%'
    }]
  }
  
  return serviceData.strategies.slice(0, 4).map((strategy, index) => ({
    strategy: strategy,
    description: `Specifically tailored for ${locationData.name}'s ${locationData.characteristics[index % locationData.characteristics.length].toLowerCase()} market`,
    impact: `Target ${serviceData.metrics[index % serviceData.metrics.length]} improvement`
  }))
}

// Generate FAQ questions based on location and service
export function generateFAQs(location: string, service: string): {
  question: string
  answer: string
}[] {
  const locationData = locationDetails[location.toLowerCase().replace(/\s+/g, '-')]
  const serviceData = serviceDetails[service.toLowerCase().replace(/\s+/g, '-')]
  
  if (!locationData || !serviceData) {
    return [{
      question: `How can SEO help my ${service} business in ${location}?`,
      answer: `SEO improves your visibility in local search results, helping potential customers find you when searching for ${service.toLowerCase()} services in ${location}.`
    }]
  }
  
  return [
    {
      question: `What makes ${locationData.name} unique for ${serviceData.name.toLowerCase()} SEO?`,
      answer: `${locationData.name}'s ${locationData.characteristics[0].toLowerCase()} and ${locationData.demographics.primary.toLowerCase()} demographic create specific search patterns. With ${locationData.businessCount} local businesses and ${serviceData.competitionLevel.toLowerCase()} competition, targeted local SEO strategies focusing on ${serviceData.keywords.slice(0, 2).join(' and ')} are essential.`
    },
    {
      question: `How long does it take to rank for "${serviceData.keywords[0]}" in ${locationData.name}?`,
      answer: `Typically, with our proven strategies including ${serviceData.strategies[0].toLowerCase()} and ${serviceData.strategies[1].toLowerCase()}, ${serviceData.name.toLowerCase()} in ${locationData.name} see significant improvements within 3-6 months. Factors include current competition near ${locationData.landmarks[0]} and your existing online presence.`
    },
    {
      question: `What's the ROI of SEO for ${serviceData.name.toLowerCase()} in ${locationData.name}?`,
      answer: `With average service values of ${serviceData.averageTicket} and ${serviceData.frequency} customer patterns, even modest ranking improvements can generate substantial returns. Our clients typically see ${serviceData.metrics[0]} increase by 150-300% within the first year.`
    },
    {
      question: `How do you handle ${locationData.localChallenges[0].toLowerCase()} in ${locationData.name}?`,
      answer: `We've developed specific strategies for ${locationData.name}'s challenges. By focusing on ${serviceData.benefits[0].toLowerCase()} and leveraging the area's ${locationData.characteristics[1].toLowerCase()}, we help ${serviceData.name.toLowerCase()} overcome local obstacles and capture their target market of ${locationData.demographics.primary.toLowerCase()}.`
    }
  ]
}

// Generate a unique meta description
export function generateMetaDescription(location: string, service: string): string {
  const locationData = locationDetails[location.toLowerCase().replace(/\s+/g, '-')]
  const serviceData = serviceDetails[service.toLowerCase().replace(/\s+/g, '-')]
  
  if (!locationData || !serviceData) {
    return `Expert ${service} SEO services in ${location}. Increase visibility, attract more customers, and dominate local search results. Free consultation available.`
  }
  
  const templates = [
    `${serviceData.name} SEO in ${locationData.name} near ${locationData.landmarks[0]}. Target ${locationData.demographics.primary.toLowerCase()} with proven strategies. ${serviceData.benefits[0]}. Call (562) 682-9403.`,
    
    `Dominate ${locationData.name} searches for ${serviceData.keywords[0]}. Specialized SEO for ${serviceData.name.toLowerCase()} serving ${locationData.neighborhoods.slice(0, 2).join(', ')}. ${serviceData.averageTicket} average value services.`,
    
    `${locationData.businessCount} businesses compete in ${locationData.name}. Stand out with expert ${serviceData.name.toLowerCase()} SEO. ${serviceData.strategies[0]} and ${serviceData.metrics[0]} optimization.`,
    
    `Professional ${serviceData.name} SEO for ${locationData.name}'s ${locationData.characteristics[0].toLowerCase()} market. Overcome ${locationData.localChallenges[0].toLowerCase()}. Free audit: (562) 682-9403.`,
    
    `${serviceData.competitionLevel} competition in ${locationData.name}? We help ${serviceData.name.toLowerCase()} rank #1 for ${serviceData.keywords.slice(0, 2).join(', ')}. Serving ${locationData.county} County.`
  ]
  
  const hash = (location + service).split('').reduce((a, b) => a + b.charCodeAt(0), 0)
  return templates[hash % templates.length].substring(0, 160) // Ensure within meta description limits
}