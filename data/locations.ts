export interface Location {
  id: string
  slug: string
  city: string
  state: string
  stateAbbr: string
  county?: string
  population?: number
  tier: 1 | 2 | 3
  coordinates?: {
    lat: number
    lng: number
  }
  neighborhoods?: string[]
}

export const locations: Location[] = [
  // Tier 1: Primary Cities
  {
    id: 'orange-county',
    slug: 'orange-county',
    city: 'Orange County',
    state: 'California',
    stateAbbr: 'CA',
    county: 'Orange',
    population: 3186989,
    tier: 1,
    coordinates: { lat: 33.7175, lng: -117.8311 },
    neighborhoods: [
      'Irvine',
      'Anaheim',
      'Santa Ana',
      'Huntington Beach',
      'Newport Beach',
      'Costa Mesa',
      'Mission Viejo',
      'Fullerton'
    ]
  },
  {
    id: 'long-beach',
    slug: 'long-beach',
    city: 'Long Beach',
    state: 'California',
    stateAbbr: 'CA',
    county: 'Los Angeles',
    population: 466742,
    tier: 1,
    coordinates: { lat: 33.7701, lng: -118.1937 },
    neighborhoods: [
      'Belmont Shore',
      'Naples Island',
      'Downtown Long Beach',
      'Bixby Knolls',
      'California Heights',
      'Rose Park',
      'Los Altos',
      'Traffic Circle Area'
    ]
  },
  {
    id: 'los-angeles-county',
    slug: 'los-angeles-county',
    city: 'Los Angeles County',
    state: 'California',
    stateAbbr: 'CA',
    county: 'Los Angeles',
    population: 10014009,
    tier: 1,
    coordinates: { lat: 34.0522, lng: -118.2437 },
    neighborhoods: [
      'Los Angeles',
      'Long Beach',
      'Glendale',
      'Santa Clarita',
      'Lancaster',
      'Palmdale',
      'Pomona',
      'Torrance'
    ]
  },
  {
    id: 'los-angeles',
    slug: 'los-angeles',
    city: 'Los Angeles',
    state: 'California',
    stateAbbr: 'CA',
    county: 'Los Angeles',
    population: 3898747,
    tier: 1,
    coordinates: { lat: 34.0522, lng: -118.2437 },
    neighborhoods: [
      'Downtown LA',
      'Hollywood',
      'Beverly Hills',
      'Santa Monica',
      'Venice',
      'Silver Lake',
      'Echo Park',
      'Los Feliz'
    ]
  },
  {
    id: 'anaheim',
    slug: 'anaheim',
    city: 'Anaheim',
    state: 'California',
    stateAbbr: 'CA',
    county: 'Orange',
    population: 346824,
    tier: 1,
    coordinates: { lat: 33.8366, lng: -117.9143 }
  },
  {
    id: 'santa-ana',
    slug: 'santa-ana',
    city: 'Santa Ana',
    state: 'California',
    stateAbbr: 'CA',
    county: 'Orange',
    population: 310227,
    tier: 1,
    coordinates: { lat: 33.7455, lng: -117.8677 }
  },
  {
    id: 'irvine',
    slug: 'irvine',
    city: 'Irvine',
    state: 'California',
    stateAbbr: 'CA',
    county: 'Orange',
    population: 307670,
    tier: 1,
    coordinates: { lat: 33.6846, lng: -117.8265 }
  },
  {
    id: 'huntington-beach',
    slug: 'huntington-beach',
    city: 'Huntington Beach',
    state: 'California',
    stateAbbr: 'CA',
    county: 'Orange',
    population: 198711,
    tier: 1,
    coordinates: { lat: 33.6595, lng: -117.9988 }
  },
  {
    id: 'newport-beach',
    slug: 'newport-beach',
    city: 'Newport Beach',
    state: 'California',
    stateAbbr: 'CA',
    county: 'Orange',
    population: 85239,
    tier: 1,
    coordinates: { lat: 33.6189, lng: -117.9289 }
  },
  {
    id: 'beverly-hills',
    slug: 'beverly-hills',
    city: 'Beverly Hills',
    state: 'California',
    stateAbbr: 'CA',
    county: 'Los Angeles',
    population: 32701,
    tier: 1,
    coordinates: { lat: 34.0736, lng: -118.4004 }
  },
  {
    id: 'santa-monica',
    slug: 'santa-monica',
    city: 'Santa Monica',
    state: 'California',
    stateAbbr: 'CA',
    county: 'Los Angeles',
    population: 93076,
    tier: 1,
    coordinates: { lat: 34.0195, lng: -118.4912 }
  },
  {
    id: 'pasadena',
    slug: 'pasadena',
    city: 'Pasadena',
    state: 'California',
    stateAbbr: 'CA',
    county: 'Los Angeles',
    population: 138699,
    tier: 1,
    coordinates: { lat: 34.1478, lng: -118.1445 }
  },
  // Regional Coverage
  {
    id: 'san-diego-county',
    slug: 'san-diego-county',
    city: 'San Diego County',
    state: 'California',
    stateAbbr: 'CA',
    county: 'San Diego',
    population: 3338330,
    tier: 1,
    coordinates: { lat: 32.7157, lng: -117.1611 },
    neighborhoods: [
      'San Diego',
      'Chula Vista',
      'Oceanside',
      'Escondido',
      'Carlsbad',
      'Vista',
      'San Marcos',
      'Encinitas'
    ]
  },
  {
    id: 'riverside-county',
    slug: 'riverside-county',
    city: 'Riverside County',
    state: 'California',
    stateAbbr: 'CA',
    county: 'Riverside',
    population: 2470546,
    tier: 1,
    coordinates: { lat: 33.9533, lng: -117.3961 },
    neighborhoods: [
      'Riverside',
      'Moreno Valley',
      'Corona',
      'Murrieta',
      'Temecula',
      'Menifee',
      'Hemet',
      'Perris'
    ]
  },
  {
    id: 'san-bernardino-county',
    slug: 'san-bernardino-county',
    city: 'San Bernardino County',
    state: 'California',
    stateAbbr: 'CA',
    county: 'San Bernardino',
    population: 2180085,
    tier: 1,
    coordinates: { lat: 34.1083, lng: -117.2898 },
    neighborhoods: [
      'San Bernardino',
      'Fontana',
      'Rancho Cucamonga',
      'Ontario',
      'Victorville',
      'Rialto',
      'Hesperia',
      'Chino'
    ]
  },
  // Tier 2: Secondary Cities
  {
    id: 'torrance',
    slug: 'torrance',
    city: 'Torrance',
    state: 'California',
    stateAbbr: 'CA',
    county: 'Los Angeles',
    population: 147067,
    tier: 2,
    coordinates: { lat: 33.8358, lng: -118.3406 }
  },
  {
    id: 'glendale',
    slug: 'glendale',
    city: 'Glendale',
    state: 'California',
    stateAbbr: 'CA',
    county: 'Los Angeles',
    population: 196543,
    tier: 2,
    coordinates: { lat: 34.1425, lng: -118.2551 }
  },
  {
    id: 'burbank',
    slug: 'burbank',
    city: 'Burbank',
    state: 'California',
    stateAbbr: 'CA',
    county: 'Los Angeles',
    population: 107337,
    tier: 2,
    coordinates: { lat: 34.1808, lng: -118.3090 }
  },
  {
    id: 'fullerton',
    slug: 'fullerton',
    city: 'Fullerton',
    state: 'California',
    stateAbbr: 'CA',
    county: 'Orange',
    population: 143617,
    tier: 2,
    coordinates: { lat: 33.8704, lng: -117.9242 }
  },
  {
    id: 'orange',
    slug: 'orange',
    city: 'Orange',
    state: 'California',
    stateAbbr: 'CA',
    county: 'Orange',
    population: 139911,
    tier: 2,
    coordinates: { lat: 33.7878, lng: -117.8531 }
  },
  {
    id: 'costa-mesa',
    slug: 'costa-mesa',
    city: 'Costa Mesa',
    state: 'California',
    stateAbbr: 'CA',
    county: 'Orange',
    population: 111918,
    tier: 2,
    coordinates: { lat: 33.6412, lng: -117.9187 }
  },
  {
    id: 'downey',
    slug: 'downey',
    city: 'Downey',
    state: 'California',
    stateAbbr: 'CA',
    county: 'Los Angeles',
    population: 114355,
    tier: 2,
    coordinates: { lat: 33.9401, lng: -118.1332 }
  },
  {
    id: 'norwalk',
    slug: 'norwalk',
    city: 'Norwalk',
    state: 'California',
    stateAbbr: 'CA',
    county: 'Los Angeles',
    population: 102773,
    tier: 2,
    coordinates: { lat: 33.9022, lng: -118.0817 }
  },
  {
    id: 'cerritos',
    slug: 'cerritos',
    city: 'Cerritos',
    state: 'California',
    stateAbbr: 'CA',
    county: 'Los Angeles',
    population: 49578,
    tier: 2,
    coordinates: { lat: 33.8583, lng: -118.0648 }
  },
  {
    id: 'lakewood',
    slug: 'lakewood',
    city: 'Lakewood',
    state: 'California',
    stateAbbr: 'CA',
    county: 'Los Angeles',
    population: 82496,
    tier: 2,
    coordinates: { lat: 33.8536, lng: -118.1340 }
  },
  // Tier 3: Extended Coverage (sample - add more as needed)
  {
    id: 'carson',
    slug: 'carson',
    city: 'Carson',
    state: 'California',
    stateAbbr: 'CA',
    county: 'Los Angeles',
    population: 95558,
    tier: 3,
    coordinates: { lat: 33.8317, lng: -118.2820 }
  },
  {
    id: 'compton',
    slug: 'compton',
    city: 'Compton',
    state: 'California',
    stateAbbr: 'CA',
    county: 'Los Angeles',
    population: 95740,
    tier: 3,
    coordinates: { lat: 33.8958, lng: -118.2201 }
  },
  {
    id: 'bellflower',
    slug: 'bellflower',
    city: 'Bellflower',
    state: 'California',
    stateAbbr: 'CA',
    county: 'Los Angeles',
    population: 79190,
    tier: 3,
    coordinates: { lat: 33.8817, lng: -118.1170 }
  },
  {
    id: 'signal-hill',
    slug: 'signal-hill',
    city: 'Signal Hill',
    state: 'California',
    stateAbbr: 'CA',
    county: 'Los Angeles',
    population: 11848,
    tier: 3,
    coordinates: { lat: 33.8047, lng: -118.1679 }
  },
  {
    id: 'seal-beach',
    slug: 'seal-beach',
    city: 'Seal Beach',
    state: 'California',
    stateAbbr: 'CA',
    county: 'Orange',
    population: 25242,
    tier: 3,
    coordinates: { lat: 33.7414, lng: -118.1048 }
  },
  {
    id: 'manhattan-beach',
    slug: 'manhattan-beach',
    city: 'Manhattan Beach',
    state: 'California',
    stateAbbr: 'CA',
    county: 'Los Angeles',
    population: 35506,
    tier: 3,
    coordinates: { lat: 33.8847, lng: -118.4109 }
  },
  {
    id: 'hermosa-beach',
    slug: 'hermosa-beach',
    city: 'Hermosa Beach',
    state: 'California',
    stateAbbr: 'CA',
    county: 'Los Angeles',
    population: 19728,
    tier: 3,
    coordinates: { lat: 33.8622, lng: -118.3995 }
  },
  {
    id: 'redondo-beach',
    slug: 'redondo-beach',
    city: 'Redondo Beach',
    state: 'California',
    stateAbbr: 'CA',
    county: 'Los Angeles',
    population: 71576,
    tier: 3,
    coordinates: { lat: 33.8492, lng: -118.3884 }
  },
  {
    id: 'el-segundo',
    slug: 'el-segundo',
    city: 'El Segundo',
    state: 'California',
    stateAbbr: 'CA',
    county: 'Los Angeles',
    population: 17272,
    tier: 3,
    coordinates: { lat: 33.9192, lng: -118.4165 }
  },
  {
    id: 'marina-del-rey',
    slug: 'marina-del-rey',
    city: 'Marina del Rey',
    state: 'California',
    stateAbbr: 'CA',
    county: 'Los Angeles',
    population: 11757,
    tier: 3,
    coordinates: { lat: 33.9803, lng: -118.4517 }
  }
]

export const getLocationBySlug = (slug: string): Location | undefined => {
  return locations.find(location => location.slug === slug)
}

export const getLocationsByTier = (tier: 1 | 2 | 3): Location[] => {
  return locations.filter(location => location.tier === tier)
}

export const getPrimaryLocations = (): Location[] => {
  return getLocationsByTier(1)
}

export const getAllLocationSlugs = (): string[] => {
  return locations.map(location => location.slug)
}

export const generateLocationTitle = (service: string, location: Location): string => {
  return `${service} in ${location.city}, ${location.stateAbbr} | GoalSEO.ai`
}

export const generateLocationDescription = (service: string, location: Location): string => {
  return `Professional ${service.toLowerCase()} services in ${location.city}, ${location.state}. Get 387% average ROI with our AI-powered SEO strategies. Free consultation available.`
}