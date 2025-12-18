#!/usr/bin/env node

const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const sourceFile = path.join(__dirname, '../src/Assets/Images/app-icon-master.png');

// iOS icon sizes (width x height @ scale)
const iosIcons = [
  { size: 40, filename: 'Icon-20x20@2x.png' },
  { size: 60, filename: 'Icon-20x20@3x.png' },
  { size: 58, filename: 'Icon-29x29@2x.png' },
  { size: 87, filename: 'Icon-29x29@3x.png' },
  { size: 80, filename: 'Icon-40x40@2x.png' },
  { size: 120, filename: 'Icon-40x40@3x.png' },
  { size: 120, filename: 'Icon-60x60@2x.png' },
  { size: 180, filename: 'Icon-60x60@3x.png' },
  { size: 1024, filename: 'Icon-1024x1024@1x.png' },
];

// Android icon sizes by density
const androidIcons = [
  { density: 'mdpi', size: 48, prefix: 'ic_launcher' },
  { density: 'hdpi', size: 72, prefix: 'ic_launcher' },
  { density: 'xhdpi', size: 96, prefix: 'ic_launcher' },
  { density: 'xxhdpi', size: 144, prefix: 'ic_launcher' },
  { density: 'xxxhdpi', size: 192, prefix: 'ic_launcher' },
];

async function generateIcons() {
  try {
    console.log('🎨 Starting icon generation from custom design...\n');

    // Generate iOS icons
    console.log('📱 Generating iOS app icons...');
    const iosPath = path.join(__dirname, '../ios/CLI_TODO_APP/Images.xcassets/AppIcon.appiconset');
    
    if (!fs.existsSync(iosPath)) {
      fs.mkdirSync(iosPath, { recursive: true });
    }

    for (const icon of iosIcons) {
      const outputPath = path.join(iosPath, icon.filename);
      await sharp(sourceFile)
        .resize(icon.size, icon.size, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
        .png()
        .toFile(outputPath);
      console.log(`  ✓ ${icon.filename} (${icon.size}x${icon.size})`);
    }

    // Generate Android icons
    console.log('\n🤖 Generating Android launcher icons...');
    
    for (const icon of androidIcons) {
      const mipmapPath = path.join(__dirname, `../android/app/src/main/res/mipmap-${icon.density}`);
      
      if (!fs.existsSync(mipmapPath)) {
        fs.mkdirSync(mipmapPath, { recursive: true });
      }

      // Square icon
      const squareOutputPath = path.join(mipmapPath, `${icon.prefix}.png`);
      await sharp(sourceFile)
        .resize(icon.size, icon.size, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
        .png()
        .toFile(squareOutputPath);
      console.log(`  ✓ mipmap-${icon.density}/${icon.prefix}.png (${icon.size}x${icon.size})`);

      // Rounded icon
      const roundedOutputPath = path.join(mipmapPath, `${icon.prefix}_round.png`);
      await sharp(sourceFile)
        .resize(icon.size, icon.size, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
        .png()
        .toFile(roundedOutputPath);
      console.log(`  ✓ mipmap-${icon.density}/${icon.prefix}_round.png (${icon.size}x${icon.size})`);
    }

    console.log('\n✅ Icon generation complete!\n');
    console.log('Generated:');
    console.log('  • 9 iOS app icons');
    console.log('  • 10 Android launcher icons (5 densities × 2 variants)');
    console.log('\nYou can now build and run your app!');

  } catch (error) {
    console.error('❌ Error generating icons:', error);
    process.exit(1);
  }
}

generateIcons();
