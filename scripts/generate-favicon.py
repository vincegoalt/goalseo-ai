#!/usr/bin/env python3
"""
Generate favicon files from SVG
Creates ico and multiple PNG sizes for different devices
"""

import os
import subprocess
from pathlib import Path

# Define the paths
project_root = Path('/mnt/c/Users/vince/goalseo')
public_dir = project_root / 'public'
svg_file = public_dir / 'favicon.svg'

# Define the sizes we need
favicon_sizes = {
    'favicon-16x16.png': 16,
    'favicon-32x32.png': 32,
    'favicon-48x48.png': 48,
    'favicon-96x96.png': 96,
    'favicon-192x192.png': 192,
    'favicon-512x512.png': 512,
    'apple-touch-icon.png': 180,
    'android-chrome-192x192.png': 192,
    'android-chrome-512x512.png': 512,
}

def check_dependencies():
    """Check if ImageMagick is installed"""
    try:
        result = subprocess.run(['convert', '--version'], capture_output=True, text=True)
        if result.returncode == 0:
            print("✓ ImageMagick is installed")
            return True
    except FileNotFoundError:
        pass
    
    print("⚠ ImageMagick not found. Trying with Python PIL/Pillow...")
    return False

def generate_with_pillow():
    """Generate favicons using Pillow (Python library)"""
    try:
        from PIL import Image, ImageDraw
        import cairosvg
        import io
        
        print("Generating favicons with Python libraries...")
        
        # Convert SVG to PNG using cairosvg
        for filename, size in favicon_sizes.items():
            output_path = public_dir / filename
            print(f"Creating {filename} ({size}x{size})...")
            
            # Convert SVG to PNG bytes
            png_bytes = cairosvg.svg2png(
                url=str(svg_file),
                output_width=size,
                output_height=size
            )
            
            # Save the PNG
            with open(output_path, 'wb') as f:
                f.write(png_bytes)
        
        # Create ICO file with multiple sizes
        print("Creating favicon.ico...")
        ico_sizes = [16, 32, 48]
        ico_images = []
        
        for size in ico_sizes:
            png_bytes = cairosvg.svg2png(
                url=str(svg_file),
                output_width=size,
                output_height=size
            )
            img = Image.open(io.BytesIO(png_bytes))
            ico_images.append(img)
        
        ico_images[0].save(
            public_dir / 'favicon.ico',
            format='ICO',
            sizes=[(16, 16), (32, 32), (48, 48)]
        )
        
        print("✓ All favicon files generated successfully!")
        return True
        
    except ImportError as e:
        print(f"⚠ Missing Python library: {e}")
        print("Installing required libraries...")
        
        # Try to install required libraries
        subprocess.run(['pip', 'install', 'Pillow', 'cairosvg'], check=True)
        
        # Try again
        return generate_with_pillow()
    except Exception as e:
        print(f"✗ Error generating favicons: {e}")
        return False

def generate_with_imagemagick():
    """Generate favicons using ImageMagick"""
    print("Generating favicons with ImageMagick...")
    
    # Generate PNG files
    for filename, size in favicon_sizes.items():
        output_path = public_dir / filename
        print(f"Creating {filename} ({size}x{size})...")
        
        cmd = [
            'convert',
            '-background', 'none',
            '-resize', f'{size}x{size}',
            str(svg_file),
            str(output_path)
        ]
        
        result = subprocess.run(cmd, capture_output=True, text=True)
        if result.returncode != 0:
            print(f"✗ Error creating {filename}: {result.stderr}")
            return False
    
    # Create ICO file with multiple sizes
    print("Creating favicon.ico...")
    ico_cmd = [
        'convert',
        str(svg_file),
        '-define', 'icon:auto-resize=48,32,16',
        str(public_dir / 'favicon.ico')
    ]
    
    result = subprocess.run(ico_cmd, capture_output=True, text=True)
    if result.returncode != 0:
        print(f"✗ Error creating favicon.ico: {result.stderr}")
        return False
    
    print("✓ All favicon files generated successfully!")
    return True

def create_simple_favicon():
    """Create a simple favicon without external dependencies"""
    print("Creating simple favicon files...")
    
    # Create a basic HTML file that describes the favicon
    # This will at least ensure the SVG favicon works
    svg_content = svg_file.read_text()
    
    # Copy SVG to different names for compatibility
    for name in ['icon.svg', 'logo.svg']:
        output_path = public_dir / name
        output_path.write_text(svg_content)
        print(f"✓ Created {name}")
    
    print("✓ Basic favicon files created. SVG favicon will work in modern browsers.")
    print("  For full compatibility, install ImageMagick or Python PIL/Pillow.")
    return True

def main():
    """Main function"""
    print("🎨 GoalSEO Favicon Generator")
    print("=" * 40)
    
    # Check if SVG exists
    if not svg_file.exists():
        print(f"✗ SVG file not found: {svg_file}")
        return 1
    
    print(f"✓ Found SVG file: {svg_file}")
    
    # Try different methods
    if check_dependencies():
        success = generate_with_imagemagick()
    else:
        success = generate_with_pillow()
    
    if not success:
        print("\nFalling back to simple favicon creation...")
        create_simple_favicon()
    
    print("\n" + "=" * 40)
    print("🎉 Favicon generation complete!")
    
    # Create site.webmanifest if it doesn't exist
    manifest_path = public_dir / 'site.webmanifest'
    if not manifest_path.exists():
        print("\nCreating site.webmanifest...")
        manifest_content = '''{
  "name": "GoalSEO",
  "short_name": "GoalSEO",
  "icons": [
    {
      "src": "/favicon-192x192.png",
      "sizes": "192x192",
      "type": "image/png"
    },
    {
      "src": "/favicon-512x512.png",
      "sizes": "512x512",
      "type": "image/png"
    }
  ],
  "theme_color": "#3B82F6",
  "background_color": "#ffffff",
  "display": "standalone"
}'''
        manifest_path.write_text(manifest_content)
        print("✓ Created site.webmanifest")
    
    return 0

if __name__ == '__main__':
    exit(main())