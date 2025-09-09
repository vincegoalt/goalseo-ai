export interface ServiceDetails {
  name: string
  slug: string
  keywords: string[]
  painPoints: string[]
  benefits: string[]
  strategies: string[]
  metrics: string[]
  challenges: string[]
  averageTicket: string
  frequency: string
  seasonality: string
  competitionLevel: string
  customerLifetime: string
}

export const serviceDetails: Record<string, ServiceDetails> = {
  'plumbers': {
    name: 'Plumbers',
    slug: 'plumbers',
    keywords: [
      'emergency plumber near me',
      '24 hour plumber',
      'leak repair',
      'drain cleaning',
      'water heater repair',
      'pipe repair',
      'toilet repair',
      'sewer line repair',
      'plumbing contractor',
      'licensed plumber'
    ],
    painPoints: [
      'Emergency calls need immediate visibility',
      'High competition from national chains',
      'Seasonal fluctuations in business',
      'Building trust for in-home services',
      'Price shopping by customers'
    ],
    benefits: [
      'Capture emergency searches 24/7',
      'Build reputation through reviews',
      'Showcase certifications and licenses',
      'Highlight response times',
      'Feature before/after work photos'
    ],
    strategies: [
      'Emergency service page optimization',
      'Google My Business optimization',
      'Review generation campaigns',
      'Local citation building',
      'Service area page creation',
      'Schema markup for services',
      'Mobile-first optimization',
      'Call tracking implementation'
    ],
    metrics: [
      'Emergency call volume',
      'Average response time bookings',
      'Review rating improvement',
      'Cost per acquisition',
      'Booking conversion rate'
    ],
    challenges: [
      'Competing with HomeAdvisor/Angi',
      'Managing after-hours visibility',
      'Handling negative reviews',
      'Seasonal demand changes'
    ],
    averageTicket: '$150-$500',
    frequency: 'As needed/Emergency',
    seasonality: 'Winter peak (pipe issues)',
    competitionLevel: 'Very High',
    customerLifetime: '5-10 years'
  },
  'electricians': {
    name: 'Electricians',
    slug: 'electricians',
    keywords: [
      'electrician near me',
      'emergency electrician',
      'electrical repair',
      'panel upgrade',
      'outlet installation',
      'lighting installation',
      'electrical inspection',
      'commercial electrician',
      'residential electrician',
      'licensed electrician'
    ],
    painPoints: [
      'Safety concerns need addressing',
      'Complex services need explanation',
      'Commercial vs residential targeting',
      'Permit and code compliance visibility',
      'Emergency service competition'
    ],
    benefits: [
      'Highlight safety certifications',
      'Showcase complex project galleries',
      'Target commercial contracts',
      'Feature energy-saving solutions',
      'Emphasize code compliance'
    ],
    strategies: [
      'Safety-focused content marketing',
      'Commercial landing pages',
      'EV charger installation pages',
      'Smart home integration content',
      'Energy audit offerings',
      'Video testimonials',
      'Technical blog content',
      'Partnership with contractors'
    ],
    metrics: [
      'Commercial lead quality',
      'Residential service calls',
      'Average project value',
      'Repeat customer rate',
      'Safety certification CTR'
    ],
    challenges: [
      'Explaining technical services',
      'Competing on safety vs price',
      'Commercial decision-maker targeting',
      'Seasonal construction cycles'
    ],
    averageTicket: '$200-$1,000',
    frequency: 'Project-based',
    seasonality: 'Summer peak (AC/construction)',
    competitionLevel: 'High',
    customerLifetime: '7-15 years'
  },
  'hvac': {
    name: 'HVAC',
    slug: 'hvac',
    keywords: [
      'AC repair near me',
      'heating repair',
      'HVAC service',
      'air conditioning installation',
      'furnace repair',
      'duct cleaning',
      'HVAC maintenance',
      'emergency HVAC',
      'HVAC contractor',
      'heat pump installation'
    ],
    painPoints: [
      'Extreme seasonal demand swings',
      'High-ticket service trust building',
      'Maintenance plan promotion',
      'Energy efficiency education',
      'Brand vs independent competition'
    ],
    benefits: [
      'Capture seasonal surge searches',
      'Promote maintenance agreements',
      'Highlight energy savings',
      'Feature financing options',
      'Showcase brand certifications'
    ],
    strategies: [
      'Seasonal campaign planning',
      'Maintenance plan landing pages',
      'Energy calculator tools',
      'Financing page optimization',
      'Brand partnership pages',
      'Emergency service optimization',
      'Comfort advisor positioning',
      'Indoor air quality content'
    ],
    metrics: [
      'Maintenance agreement signups',
      'Emergency call conversion',
      'Average installation value',
      'Seasonal traffic patterns',
      'Finance application rate'
    ],
    challenges: [
      'Managing seasonal peaks',
      'Competing with big brands',
      'Educating on maintenance value',
      'High customer acquisition cost'
    ],
    averageTicket: '$300-$8,000',
    frequency: 'Seasonal/Annual',
    seasonality: 'Summer/Winter peaks',
    competitionLevel: 'Very High',
    customerLifetime: '10-20 years'
  },
  'roofing': {
    name: 'Roofing',
    slug: 'roofing',
    keywords: [
      'roof repair near me',
      'roof replacement',
      'roofing contractor',
      'roof inspection',
      'emergency roof repair',
      'roof leak repair',
      'shingle replacement',
      'commercial roofing',
      'flat roof repair',
      'storm damage repair'
    ],
    painPoints: [
      'Storm-chaser competition',
      'Insurance claim assistance',
      'High-value decision trust',
      'Seasonal weather dependency',
      'Material cost fluctuations'
    ],
    benefits: [
      'Storm damage rapid response',
      'Insurance claim expertise',
      'Warranty highlighting',
      'Drone inspection showcasing',
      'Financing options promotion'
    ],
    strategies: [
      'Storm damage landing pages',
      'Insurance assistance content',
      'Drone inspection marketing',
      'Before/after galleries',
      'Warranty comparison pages',
      'Material education content',
      'Commercial portfolio showcasing',
      'Preventive maintenance programs'
    ],
    metrics: [
      'Storm response leads',
      'Insurance approval rate',
      'Commercial contract value',
      'Inspection conversion rate',
      'Warranty registration rate'
    ],
    challenges: [
      'Weather-dependent scheduling',
      'Storm-chaser reputation',
      'Insurance company relations',
      'Material cost volatility'
    ],
    averageTicket: '$500-$15,000',
    frequency: '15-20 years',
    seasonality: 'Spring/Fall peak',
    competitionLevel: 'High',
    customerLifetime: '15-25 years'
  },
  'attorneys': {
    name: 'Attorneys',
    slug: 'attorneys',
    keywords: [
      'lawyer near me',
      'personal injury attorney',
      'divorce lawyer',
      'criminal defense attorney',
      'estate planning lawyer',
      'bankruptcy attorney',
      'immigration lawyer',
      'family law attorney',
      'free consultation',
      'best attorney'
    ],
    painPoints: [
      'Practice area competition',
      'Trust and credibility building',
      'Case result showcasing',
      'Consultation conversion',
      'Bar association compliance'
    ],
    benefits: [
      'Practice area dominance',
      'Case results highlighting',
      'Attorney profile optimization',
      'Free consultation promotion',
      'Client testimonial featuring'
    ],
    strategies: [
      'Practice area page depth',
      'Attorney bio optimization',
      'Case results showcasing',
      'FAQ schema implementation',
      'Legal content marketing',
      'Video consultation offers',
      'Chat implementation',
      'Referral network building'
    ],
    metrics: [
      'Consultation requests',
      'Practice area rankings',
      'Case inquiry quality',
      'Content engagement time',
      'Referral source tracking'
    ],
    challenges: [
      'Bar association ad rules',
      'Competing with legal directories',
      'Confidentiality constraints',
      'High PPC costs'
    ],
    averageTicket: '$1,500-$10,000+',
    frequency: 'As needed',
    seasonality: 'Varies by practice',
    competitionLevel: 'Very High',
    customerLifetime: 'Case-based'
  },
  'dentists': {
    name: 'Dentists',
    slug: 'dentists',
    keywords: [
      'dentist near me',
      'emergency dentist',
      'teeth cleaning',
      'dental implants',
      'cosmetic dentist',
      'pediatric dentist',
      'teeth whitening',
      'root canal',
      'dental crown',
      'invisalign provider'
    ],
    painPoints: [
      'Dental anxiety addressing',
      'Insurance acceptance visibility',
      'Cosmetic vs general balance',
      'New patient acquisition',
      'Appointment scheduling ease'
    ],
    benefits: [
      'New patient special promotion',
      'Insurance acceptance listing',
      'Comfort amenity highlighting',
      'Technology showcase',
      'Smile gallery featuring'
    ],
    strategies: [
      'Service line optimization',
      'Insurance page creation',
      'Patient comfort content',
      'Smile gallery development',
      'Online scheduling integration',
      'Video testimonials',
      'Pediatric/family focus',
      'Emergency dental pages'
    ],
    metrics: [
      'New patient appointments',
      'Insurance verification rate',
      'Cosmetic consultation requests',
      'Online booking rate',
      'Patient retention rate'
    ],
    challenges: [
      'Insurance network competition',
      'Corporate dental competition',
      'High patient acquisition cost',
      'Review management needs'
    ],
    averageTicket: '$150-$5,000',
    frequency: 'Bi-annual+',
    seasonality: 'Year-end (insurance)',
    competitionLevel: 'High',
    customerLifetime: '10-20 years'
  },
  'real-estate': {
    name: 'Real Estate',
    slug: 'real-estate',
    keywords: [
      'real estate agent near me',
      'homes for sale',
      'realtor',
      'buying agent',
      'selling agent',
      'property management',
      'real estate broker',
      'luxury real estate',
      'first time home buyer',
      'real estate investor'
    ],
    painPoints: [
      'MLS/Zillow competition',
      'Agent vs brokerage visibility',
      'Market condition adaptation',
      'Lead quality issues',
      'Commission pressure'
    ],
    benefits: [
      'Local market expertise',
      'Neighborhood specialization',
      'Buyer/seller resources',
      'Virtual tour capabilities',
      'Market report authority'
    ],
    strategies: [
      'Neighborhood pages creation',
      'Market report content',
      'Virtual tour optimization',
      'IDX integration',
      'Buyer/seller guides',
      'Email capture tools',
      'Social proof highlighting',
      'Video marketing emphasis'
    ],
    metrics: [
      'Lead generation quality',
      'Listing appointment rate',
      'Buyer consultation rate',
      'Email list growth',
      'Property page engagement'
    ],
    challenges: [
      'Portal site dominance',
      'Market volatility impact',
      'Lead nurturing complexity',
      'Team vs individual branding'
    ],
    averageTicket: '$10,000-$50,000 (commission)',
    frequency: '5-7 years',
    seasonality: 'Spring/Summer peak',
    competitionLevel: 'Extreme',
    customerLifetime: '5-10 years'
  },
  'restaurants': {
    name: 'Restaurants',
    slug: 'restaurants',
    keywords: [
      'restaurant near me',
      'best restaurants',
      'food delivery',
      'takeout near me',
      'dining',
      'breakfast lunch dinner',
      'happy hour',
      'catering services',
      'private dining',
      'restaurant reservations'
    ],
    painPoints: [
      'Review platform dependence',
      'Delivery app fees',
      'Menu visibility online',
      'Special events promotion',
      'Competition saturation'
    ],
    benefits: [
      'Direct ordering increase',
      'Event booking optimization',
      'Menu SEO enhancement',
      'Review response showcase',
      'Special promotion featuring'
    ],
    strategies: [
      'Menu schema markup',
      'Review platform optimization',
      'Direct ordering setup',
      'Event space marketing',
      'Catering service pages',
      'Happy hour promotion',
      'Photo optimization',
      'Local food blogger outreach'
    ],
    metrics: [
      'Direct order percentage',
      'Reservation conversion',
      'Catering inquiry rate',
      'Review rating average',
      'Website to visit rate'
    ],
    challenges: [
      'Third-party app dependence',
      'Review management burden',
      'Margin pressure',
      'Staff turnover impact'
    ],
    averageTicket: '$15-$150',
    frequency: 'Weekly/Monthly',
    seasonality: 'Holiday peaks',
    competitionLevel: 'Very High',
    customerLifetime: '2-5 years'
  },
  'auto-services': {
    name: 'Auto Services',
    slug: 'auto-services',
    keywords: [
      'auto repair near me',
      'oil change',
      'brake repair',
      'tire shop',
      'transmission repair',
      'auto body shop',
      'car inspection',
      'mechanic near me',
      'automotive service',
      'car maintenance'
    ],
    painPoints: [
      'Dealership competition',
      'Price transparency demands',
      'Trust building needs',
      'Warranty concerns',
      'Chain store competition'
    ],
    benefits: [
      'Transparent pricing display',
      'Warranty guarantee highlighting',
      'Certification showcasing',
      'Shuttle service promotion',
      'Appointment scheduling ease'
    ],
    strategies: [
      'Service pricing pages',
      'Make/model targeting',
      'Warranty information pages',
      'Maintenance schedule content',
      'Certification highlighting',
      'Customer shuttle promotion',
      'Fleet service targeting',
      'Seasonal service campaigns'
    ],
    metrics: [
      'Service appointment bookings',
      'Average repair order value',
      'Customer retention rate',
      'Fleet account acquisition',
      'Warranty registration rate'
    ],
    challenges: [
      'Dealership service competition',
      'Parts pricing transparency',
      'Technical expertise proof',
      'Customer education needs'
    ],
    averageTicket: '$100-$2,000',
    frequency: 'Quarterly/Annual',
    seasonality: 'Pre-summer/winter',
    competitionLevel: 'High',
    customerLifetime: '3-7 years'
  },
  'gyms': {
    name: 'Gyms',
    slug: 'gyms',
    keywords: [
      'gym near me',
      'fitness center',
      'personal training',
      'yoga classes',
      'crossfit gym',
      '24 hour gym',
      'gym membership',
      'fitness classes',
      'workout facility',
      'health club'
    ],
    painPoints: [
      'Membership retention issues',
      'Seasonal signup patterns',
      'Class scheduling visibility',
      'Competition from chains',
      'Home fitness competition'
    ],
    benefits: [
      'Free trial optimization',
      'Class schedule SEO',
      'Trainer profile featuring',
      'Member success stories',
      'Virtual tour offering'
    ],
    strategies: [
      'Free trial landing pages',
      'Class schedule optimization',
      'Trainer bio pages',
      'Success story content',
      'Virtual gym tours',
      'Membership comparison tables',
      'New Year campaign planning',
      'Corporate wellness targeting'
    ],
    metrics: [
      'Trial membership conversion',
      'Class booking rate',
      'Member retention rate',
      'Personal training signups',
      'Corporate account acquisition'
    ],
    challenges: [
      'January surge management',
      'Big box gym competition',
      'Boutique fitness trends',
      'Retention after 3 months'
    ],
    averageTicket: '$30-$150/month',
    frequency: 'Monthly membership',
    seasonality: 'January peak',
    competitionLevel: 'High',
    customerLifetime: '1-3 years'
  },
  'salons': {
    name: 'Salons',
    slug: 'salons',
    keywords: [
      'hair salon near me',
      'beauty salon',
      'haircut near me',
      'hair color',
      'nail salon',
      'spa services',
      'makeup artist',
      'eyebrow threading',
      'hair stylist',
      'salon appointment'
    ],
    painPoints: [
      'Stylist retention/promotion',
      'Appointment booking ease',
      'Service menu complexity',
      'Instagram competition',
      'Price point justification'
    ],
    benefits: [
      'Online booking convenience',
      'Stylist portfolio showcasing',
      'Before/after galleries',
      'Service menu clarity',
      'Special occasion packages'
    ],
    strategies: [
      'Stylist profile pages',
      'Service menu optimization',
      'Before/after galleries',
      'Online booking integration',
      'Instagram integration',
      'Bridal/event packages',
      'Loyalty program promotion',
      'Product line featuring'
    ],
    metrics: [
      'Online booking rate',
      'New client acquisition',
      'Service upsell rate',
      'Stylist booking rate',
      'Product sales percentage'
    ],
    challenges: [
      'Stylist as independent brands',
      'Social media time demands',
      'Walk-in vs appointment balance',
      'Product inventory costs'
    ],
    averageTicket: '$50-$300',
    frequency: 'Monthly/Bi-monthly',
    seasonality: 'Wedding/holiday season',
    competitionLevel: 'High',
    customerLifetime: '2-10 years'
  },
  'cpas': {
    name: 'CPAs',
    slug: 'cpas',
    keywords: [
      'CPA near me',
      'tax preparation',
      'accountant',
      'tax accountant',
      'bookkeeping services',
      'business accounting',
      'tax planning',
      'financial statements',
      'payroll services',
      'audit services'
    ],
    painPoints: [
      'Tax season surge management',
      'Year-round visibility needs',
      'Software competition (TurboTax)',
      'Trust and credential building',
      'Service differentiation'
    ],
    benefits: [
      'Year-round tax planning',
      'Business service expansion',
      'Expertise demonstration',
      'Client portal offering',
      'Industry specialization'
    ],
    strategies: [
      'Tax planning content',
      'Business service pages',
      'Industry specialization pages',
      'Tax calculator tools',
      'Client portal promotion',
      'Webinar/education content',
      'Referral program development',
      'Year-round engagement tactics'
    ],
    metrics: [
      'Off-season engagement',
      'Business client acquisition',
      'Tax return volume',
      'Advisory service upsell',
      'Client retention rate'
    ],
    challenges: [
      'DIY software competition',
      'Seasonal revenue concentration',
      'Credential differentiation',
      'Price vs value perception'
    ],
    averageTicket: '$500-$5,000',
    frequency: 'Annual+',
    seasonality: 'Tax season peak',
    competitionLevel: 'Medium-High',
    customerLifetime: '5-15 years'
  }
}