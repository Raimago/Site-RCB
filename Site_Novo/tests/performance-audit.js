const fs = require('fs');
const path = require('path');
const { JSDOM } = require('jsdom');

const files = ['index.html', 'blog.html', 'planejamento-sucessorio.html'];
const rootDir = process.cwd();

console.log('--- Performance Audit Report ---');

files.forEach(file => {
    const filePath = path.join(rootDir, file);
    if (!fs.existsSync(filePath)) return;

    const content = fs.readFileSync(filePath, 'utf8');
    const dom = new JSDOM(content);
    const doc = dom.window.document;

    console.log(`\n📄 File: ${file}`);

    // 1. Image Optimization
    const images = doc.querySelectorAll('img');
    let lazyCount = 0;
    let explicitSizeCount = 0;
    let modernFormatCount = 0;

    images.forEach(img => {
        if (img.getAttribute('loading') === 'lazy') lazyCount++;
        if (img.hasAttribute('width') && img.hasAttribute('height')) explicitSizeCount++;
        if (img.src.endsWith('.webp') || img.src.endsWith('.avif')) modernFormatCount++;
    });

    console.log(`  - Images: ${images.length} total`);
    console.log(`    > Lazy Loaded: ${lazyCount} (${Math.round((lazyCount / images.length) * 100)}%) ${lazyCount === images.length ? '✅' : '⚠️'}`);
    console.log(`    > Explicit Size: ${explicitSizeCount} (${Math.round((explicitSizeCount / images.length) * 100)}%) ${explicitSizeCount === images.length ? '✅' : '⚠️  - Layout Shift Risk'}`);
    console.log(`    > Modern Format (WebP/AVIF): ${modernFormatCount} (${Math.round((modernFormatCount / images.length) * 100)}%) ${modernFormatCount > 0 ? '✅' : '⚠️'}`);

    // Identifty images missing lazy loading (excluding typical LCP candidates like hero images)
    const nonLazy = Array.from(images).filter(img => !img.getAttribute('loading'));
    if (nonLazy.length > 0) {
        console.log(`    ⚠️  Start lazy loading these (unless LCP):`);
        nonLazy.slice(0, 3).forEach(img => console.log(`       - ${img.src}`));
    }

    // 2. Scripts
    const scripts = doc.querySelectorAll('script[src]');
    let deferredCount = 0;
    scripts.forEach(script => {
        if (script.hasAttribute('defer') || script.hasAttribute('async') || script.type === 'module') deferredCount++;
    });
    console.log(`  - Scripts: ${scripts.length} external`);
    console.log(`    > Non-blocking (defer/async): ${deferredCount} ${deferredCount === scripts.length ? '✅' : '⚠️'}`);

    // 3. Viewport (Mobile)
    const viewport = doc.querySelector('meta[name="viewport"]');
    console.log(`  - Mobile Viewport: ${viewport ? '✅ Found' : '❌ Missing'}`);
    if (viewport && !viewport.content.includes('width=device-width')) {
        console.log('    ⚠️  Viewport content should include width=device-width');
    }

    // 4. Resource Hints
    const preconnect = doc.querySelectorAll('link[rel="preconnect"]');
    console.log(`  - Preconnect Links: ${preconnect.length} found`);
});
