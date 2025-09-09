const fs = require('fs');
const path = require('path');

// Read and parse CSV file
const csvFile = '/mnt/c/Users/vince/Downloads/SEO_Page_Matrix_with_Slugs___Metadata.csv';
const csvContent = fs.readFileSync(csvFile, 'utf-8');
const lines = csvContent.split('\n').filter(line => line.trim());

// Parse CSV headers and data
const headers = lines[0].split(',');
const data = [];

for (let i = 1; i < lines.length; i++) {
  const values = lines[i].match(/(".*?"|[^,]+)/g) || [];
  const row = {};
  
  headers.forEach((header, index) => {
    let value = values[index] || '';
    // Remove quotes if present
    value = value.replace(/^"|"$/g, '');
    row[header] = value;
  });
  
  if (row.Service && row['City/Neighborhood']) {
    data.push(row);
  }
}

// Group data by location and service
const locationMap = {};
const serviceMap = {};

data.forEach(item => {
  const location = item['City/Neighborhood'];
  const service = item.Service;
  
  // Group by location
  if (!locationMap[location]) {
    locationMap[location] = [];
  }
  locationMap[location].push(item);
  
  // Group by service
  if (!serviceMap[service]) {
    serviceMap[service] = [];
  }
  serviceMap[service].push(item);
});

// Extract unique locations and services
const locations = Object.keys(locationMap).sort();
const services = Object.keys(serviceMap).sort();

// Generate location data configuration
const locationData = {
  locations: locations.map(loc => ({
    name: loc,
    slug: loc.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, ''),
    services: locationMap[loc].map(item => ({
      service: item.Service,
      slug: item['URL Slug'],
      metaTitle: item['Meta Title'],
      metaDescription: item['Meta Description']
    }))
  })),
  services: services.map(srv => ({
    name: srv,
    locations: serviceMap[srv].map(item => ({
      location: item['City/Neighborhood'],
      slug: item['URL Slug'],
      metaTitle: item['Meta Title'],
      metaDescription: item['Meta Description']
    }))
  })),
  totalPages: data.length
};

// Save configuration data
const outputDir = path.join(__dirname, '../lib/location-data');
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

fs.writeFileSync(
  path.join(outputDir, 'location-services.json'),
  JSON.stringify(locationData, null, 2)
);

// Generate TypeScript types
const tsTypes = `export interface LocationService {
  service: string;
  slug: string;
  metaTitle: string;
  metaDescription: string;
}

export interface ServiceLocation {
  location: string;
  slug: string;
  metaTitle: string;
  metaDescription: string;
}

export interface Location {
  name: string;
  slug: string;
  services: LocationService[];
}

export interface Service {
  name: string;
  locations: ServiceLocation[];
}

export interface LocationData {
  locations: Location[];
  services: Service[];
  totalPages: number;
}
`;

fs.writeFileSync(
  path.join(outputDir, 'types.ts'),
  tsTypes
);

// Generate summary
console.log('Location Data Parsed Successfully!');
console.log('================================');
console.log(`Total Pages: ${data.length}`);
console.log(`Unique Locations: ${locations.length}`);
console.log(`Unique Services: ${services.length}`);
console.log('\nLocations:', locations.join(', '));
console.log('\nServices:', services.join(', '));
console.log('\nData saved to:', outputDir);