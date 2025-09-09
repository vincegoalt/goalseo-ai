const fs = require('fs');
const path = require('path');

// Load location data
const locationData = require('../lib/location-data/location-services.json');

// Generate sitemap entries for all location/service pages
function generateSitemapEntries() {
  const entries = [];
  const baseUrl = 'https://goalseo.ai';
  const currentDate = new Date().toISOString().split('T')[0];
  
  locationData.locations.forEach(location => {
    location.services.forEach(service => {
      entries.push({
        url: `${baseUrl}${service.slug}`,
        lastmod: currentDate,
        changefreq: 'weekly',
        priority: '0.8'
      });
    });
  });
  
  return entries;
}

// Generate XML sitemap
function generateSitemapXML(entries) {
  let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
  xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';
  
  entries.forEach(entry => {
    xml += '  <url>\n';
    xml += `    <loc>${entry.url}</loc>\n`;
    xml += `    <lastmod>${entry.lastmod}</lastmod>\n`;
    xml += `    <changefreq>${entry.changefreq}</changefreq>\n`;
    xml += `    <priority>${entry.priority}</priority>\n`;
    xml += '  </url>\n';
  });
  
  xml += '</urlset>';
  return xml;
}

// Generate sitemap
const entries = generateSitemapEntries();
const sitemapXML = generateSitemapXML(entries);

// Save sitemap
const sitemapPath = path.join(__dirname, '../public/sitemap-locations.xml');
fs.writeFileSync(sitemapPath, sitemapXML);

// Generate a human-readable list of all URLs
const urlList = entries.map(e => e.url).join('\n');
const urlListPath = path.join(__dirname, '../lib/location-data/all-urls.txt');
fs.writeFileSync(urlListPath, urlList);

console.log('Location Sitemap Generated Successfully!');
console.log('=====================================');
console.log(`Total URLs: ${entries.length}`);
console.log(`Sitemap saved to: ${sitemapPath}`);
console.log(`URL list saved to: ${urlListPath}`);

// Generate location index for navigation
const locationIndex = {};
locationData.locations.forEach(location => {
  const services = location.services.map(s => ({
    name: s.service,
    url: s.slug
  }));
  locationIndex[location.name] = services;
});

const indexPath = path.join(__dirname, '../lib/location-data/location-index.json');
fs.writeFileSync(indexPath, JSON.stringify(locationIndex, null, 2));

console.log(`Location index saved to: ${indexPath}`);