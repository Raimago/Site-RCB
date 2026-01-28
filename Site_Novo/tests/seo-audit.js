import fs from 'fs';
import path from 'path';
import { JSDOM } from 'jsdom';

const files = ['index.html', 'blog.html', 'planejamento-sucessorio.html'];
const rootDir = process.cwd();

console.log('--- SEO Audit Report ---');

files.forEach(file => {
    const filePath = path.join(rootDir, file);
    if (!fs.existsSync(filePath)) return;

    const content = fs.readFileSync(filePath, 'utf8');
    const dom = new JSDOM(content);
    const doc = dom.window.document;

    console.log(`\n📄 File: ${file}`);

    // 1. Title Tag
    const title = doc.querySelector('title')?.textContent;
    const titleLength = title?.length || 0;
    console.log(`  - Title (${titleLength} chars): ${title ? '✅' : '❌'} "${title || ''}"`);
    if (titleLength < 30 || titleLength > 60) console.log(`    ⚠️  Optimal length is 30-60 chars.`);

    // 2. Meta Description
    const metaDesc = doc.querySelector('meta[name="description"]')?.getAttribute('content');
    const descLength = metaDesc?.length || 0;
    console.log(`  - Meta Description (${descLength} chars): ${metaDesc ? '✅' : '❌'}`);
    if (descLength < 120 || descLength > 160) console.log(`    ⚠️  Optimal length is 120-160 chars.`);

    // 3. H1 Tag
    const h1s = doc.querySelectorAll('h1');
    console.log(`  - H1 Tags: ${h1s.length} found. ${h1s.length === 1 ? '✅' : '❌ (Should be exactly 1)'}`);
    h1s.forEach(h1 => console.log(`    > "${h1.textContent?.trim()}"`));

    // 4. Images Alt Attributes
    const images = doc.querySelectorAll('img');
    const imagesWithoutAlt = Array.from(images).filter(img => !img.hasAttribute('alt') || img.alt.trim() === '');
    console.log(`  - Images: ${images.length} total. Missing Alt: ${imagesWithoutAlt.length} ${imagesWithoutAlt.length === 0 ? '✅' : '❌'}`);
    if (imagesWithoutAlt.length > 0) {
        console.log(`    ⚠️  Images missing alt:`);
        imagesWithoutAlt.slice(0, 3).forEach(img => console.log(`       - src: ${img.src}`));
    }
});

// 5. Technical Files
console.log('\n--- Technical Files ---');
['robots.txt', 'sitemap.xml'].forEach(file => {
    const exists = fs.existsSync(path.join(rootDir, file));
    console.log(`  - ${file}: ${exists ? '✅ Found' : '❌ Missing'}`);
});
