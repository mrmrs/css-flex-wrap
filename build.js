const fs = require('fs');
const path = require('path');
const { transform } = require('lightningcss');

const srcFile = path.join(__dirname, 'src', 'css-flex-wrap.css');
const distDir = path.join(__dirname, 'dist');

// Read source
const source = fs.readFileSync(srcFile, 'utf8');

// Ensure dist directory exists
if (!fs.existsSync(distDir)) {
  fs.mkdirSync(distDir, { recursive: true });
}

// Unminified — just normalize formatting
const { code: unminified } = transform({
  filename: 'css-flex-wrap.css',
  code: Buffer.from(source),
  minify: false,
});

fs.writeFileSync(path.join(distDir, 'css-flex-wrap.css'), unminified);

// Minified
const { code: minified } = transform({
  filename: 'css-flex-wrap.css',
  code: Buffer.from(source),
  minify: true,
});

fs.writeFileSync(path.join(distDir, 'css-flex-wrap.min.css'), minified);

console.log('Build complete:');
console.log(`  dist/css-flex-wrap.css     ${unminified.length} bytes`);
console.log(`  dist/css-flex-wrap.min.css ${minified.length} bytes`);
