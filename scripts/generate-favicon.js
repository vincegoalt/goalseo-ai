#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const publicDir = path.join(__dirname, '..', 'public');

// Create a simple favicon.ico by encoding the SVG
console.log('🎨 Generating favicon files for GoalSEO...');

// Read the SVG file
const svgPath = path.join(publicDir, 'favicon.svg');
const svgContent = fs.readFileSync(svgPath, 'utf8');

// Create different size SVGs for different purposes
const sizes = {
  'icon-16.svg': 16,
  'icon-32.svg': 32,
  'icon-180.svg': 180, // Apple touch icon size
  'icon-192.svg': 192, // Android chrome
  'icon-512.svg': 512, // Android chrome large
};

// Generate sized SVGs
Object.entries(sizes).forEach(([filename, size]) => {
  // Modify SVG viewBox and dimensions
  const modifiedSvg = svgContent
    .replace('width="32"', `width="${size}"`)
    .replace('height="32"', `height="${size}"`);
  
  const outputPath = path.join(publicDir, filename);
  fs.writeFileSync(outputPath, modifiedSvg);
  console.log(`✓ Created ${filename} (${size}x${size})`);
});

// Create site.webmanifest
const manifest = {
  name: "GoalSEO - Long Beach SEO Agency",
  short_name: "GoalSEO",
  description: "Long Beach's premier SEO agency serving Southern California businesses",
  start_url: "/",
  display: "standalone",
  theme_color: "#3B82F6",
  background_color: "#ffffff",
  icons: [
    {
      src: "/favicon.svg",
      sizes: "any",
      type: "image/svg+xml"
    },
    {
      src: "/icon-192.svg",
      sizes: "192x192",
      type: "image/svg+xml"
    },
    {
      src: "/icon-512.svg",
      sizes: "512x512",
      type: "image/svg+xml"
    }
  ]
};

const manifestPath = path.join(publicDir, 'site.webmanifest');
fs.writeFileSync(manifestPath, JSON.stringify(manifest, null, 2));
console.log('✓ Created site.webmanifest');

// Create a base64 encoded favicon for the ICO file
// This is a workaround since we can't easily convert SVG to ICO in pure Node.js
const faviconHtml = `<!DOCTYPE html>
<html>
<head>
  <link rel="icon" type="image/svg+xml" href="/favicon.svg">
  <link rel="alternate icon" href="/favicon.ico">
  <link rel="apple-touch-icon" href="/icon-180.svg">
  <link rel="manifest" href="/site.webmanifest">
</head>
</html>`;

// Update the HTML meta tags info file
const metaTagsInfo = `<!-- Favicon Meta Tags -->
<!-- Place these in the <head> section of your HTML -->

<!-- Primary Meta Tags -->
<link rel="icon" type="image/svg+xml" href="/favicon.svg">
<link rel="alternate icon" href="/favicon.ico">

<!-- Apple Touch Icon -->
<link rel="apple-touch-icon" href="/icon-180.svg">

<!-- Android & PWA -->
<link rel="manifest" href="/site.webmanifest">

<!-- Theme Colors -->
<meta name="theme-color" content="#3B82F6">
<meta name="msapplication-TileColor" content="#3B82F6">

<!-- Additional Sizes -->
<link rel="icon" type="image/svg+xml" sizes="16x16" href="/icon-16.svg">
<link rel="icon" type="image/svg+xml" sizes="32x32" href="/icon-32.svg">
`;

const metaPath = path.join(publicDir, 'favicon-meta-tags.html');
fs.writeFileSync(metaPath, metaTagsInfo);
console.log('✓ Created favicon-meta-tags.html with implementation instructions');

console.log('\n✅ Favicon generation complete!');
console.log('\nℹ️  SVG favicons are supported by all modern browsers.');
console.log('   The favicon.svg will be used as the primary icon.');
console.log('\n📝 Check favicon-meta-tags.html for implementation instructions.');