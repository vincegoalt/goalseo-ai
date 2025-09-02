const fs = require('fs');
const path = require('path');

// List of all service pages to update
const servicePages = [
  'plumbers',
  'hvac', 
  'electricians',
  'restaurants',
  'real-estate',
  'attorneys',
  'dentists',
  'cpas',
  'gyms',
  'salons',
  'auto-services',
  'roofing'
];

// Function to update pricing in a file
function updatePricing(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Replace all package pricing with "Starting at $499/month"
  // Pattern 1: $X,XXX - $XX,XXX format
  content = content.replace(/\$[\d,]+ - \$[\d,]+/g, 'Starting at $499/month');
  
  // Pattern 2: Update package descriptions
  content = content.replace(/Package:\s*\$[\d,]+ - \$[\d,]+/g, 'Investment: Starting at $499/month');
  
  // Pattern 3: Update any specific package names with prices
  content = content.replace(/(Digital|SEO|Marketing|Complete|Authority|Package|Investment):\s*\$[\d,]+ - \$[\d,]+/g, '$1: Starting at $499/month');
  
  // Pattern 4: Update the package box content - replace full pricing with simplified
  content = content.replace(
    /<p className="text-3xl font-bold text-[\w-]+ mb-2">\$[\d,]+ - \$[\d,]+<\/p>/g,
    '<p className="text-3xl font-bold text-blue-600 mb-2">Starting at $499/month</p>'
  );
  
  // Update package descriptions to be more generic
  content = content.replace(
    /<p className="text-gray-700">\n\s+[\w\s]+ website \+ [\w\s]+ \+ [\w\s]+\n\s+<\/p>/g,
    '<p className="text-gray-700">\n              Custom solutions tailored to your business\n            </p>'
  );
  
  // Update the ROI text
  content = content.replace(
    /\([\d]+ [\w\s]+ pays for everything\)/g,
    '(Investment pays for itself quickly)'
  );
  
  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`Updated: ${filePath}`);
}

// Update all service pages
servicePages.forEach(service => {
  const filePath = path.join(__dirname, '..', 'app', 'services', 'local', service, 'page.tsx');
  if (fs.existsSync(filePath)) {
    updatePricing(filePath);
  } else {
    console.log(`File not found: ${filePath}`);
  }
});

console.log('All service pages updated with new pricing!');