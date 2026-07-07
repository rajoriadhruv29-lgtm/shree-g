/**
 * Post-build SEO generator.
 * Runs after `vite build` and produces inside dist/:
 *   1. sitemap.xml  — every route, built from data/products.ts
 *   2. robots.txt
 *   3. Per-route HTML files (e.g. dist/products/rivet-hinges/index.html)
 *      — copies of index.html with route-specific <title>, meta description,
 *      canonical and OG tags injected. Crawlers and WhatsApp/social link
 *      previews get correct metadata without executing JavaScript, and deep
 *      links work on static hosting without redirect rules.
 *
 * Usage: node scripts/generate-seo-files.mjs   (wired into `npm run build`)
 */
import { readFileSync, writeFileSync, mkdirSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');
const DIST = join(ROOT, 'dist');
const SITE_URL = 'https://shreeghinges.com';

// ---- Load product data by parsing the TS file (no TS runtime needed) ----
const dataSrc = readFileSync(join(ROOT, 'data/products.ts'), 'utf8');

function extractObjects(src, marker) {
  // crude but reliable: find `id: '...'` groups after the marker array
  const startIdx = src.indexOf(marker);
  const section = src.slice(startIdx);
  return section;
}

const categoryIds = [...dataSrc.matchAll(/id:\s*'([a-z0-9.-]+)',\s*\n\s*title:\s*'([^']+)'/g)]
  .map((m) => ({ id: m[1], title: m[2] }));

const productMatches = [...dataSrc.matchAll(/id:\s*'([a-z0-9.-]+)',[\s\S]{0,200}?categoryId:\s*'([a-z0-9.-]+)',[\s\S]{0,200}?name:\s*'([^']+)'/g)];
const products = productMatches.map((m) => ({ id: m[1], categoryId: m[2], name: m[3] }));
const categories = categoryIds.filter((c) => products.some((p) => p.categoryId === c.id) || ['rivet-hinges','fabrication-hinges','bolt-hinges','lorry-hinges','t-hinges','butt-hinges','accessories'].includes(c.id));

console.log(`Parsed ${categories.length} categories, ${products.length} products from data/products.ts`);

// ---- Route table with per-route SEO (mirrors data/seo.ts formulas) ----
const routes = [
  {
    path: '/',
    title: 'MS Hinges Manufacturer India | 28+ SKUs | Shree G Hinges',
    description: 'Manufacturer of MS hinges, shutter kunda, teen hole patti & hardware accessories in Indore. 28+ SKUs, factory-direct bulk supply for dealers across India.',
    priority: '1.0',
  },
  {
    path: '/about',
    title: 'About Us | MS Hinge Manufacturer, Indore | Shree G Hinges',
    description: 'Shree G Hinges is a hinge and hardware accessories manufacturer in Indore, MP. One factory, one quality standard across rivet, bolt, T, butt & lorry hinges.',
    priority: '0.6',
  },
  {
    path: '/products',
    title: 'Product Range — MS Hinges & Hardware | Shree G Hinges',
    description: 'Browse our full range: rivet hinges, fabrication hinges, bolt hinges, lorry hinges, T-hinges, butt hinges, shutter kunda, teen hole patti, washers & outers.',
    priority: '0.9',
  },
  {
    path: '/blog',
    title: 'Guides for Hardware Dealers & Fabricators | Shree G Hinges',
    description: 'Practical guides from a hinge manufacturer: gauge selection, stocking advice, MS vs SS, and buying direct from the factory.',
    priority: '0.5',
  },
  {
    path: '/contact',
    title: 'Contact & Bulk Rate Inquiry | Shree G Hinges, Indore',
    description: 'Get dealer rates for MS hinges & hardware accessories. Factory at Dewas Naka, Indore. Call +91 93021 04100 or message us on WhatsApp for the price list.',
    priority: '0.8',
  },
  ...categories.map((c) => ({
    path: `/products/${c.id}`,
    title: `${c.title} Manufacturer & Bulk Supplier | Shree G Hinges`,
    description: `${c.title.replace(' / Kabja', '')} direct from manufacturer — all sizes and weight variants with exact specs. Factory in Indore, bulk supply for hardware dealers and fabricators across India.`,
    priority: '0.8',
  })),
  ...products.map((p) => ({
    path: `/products/${p.categoryId}/${p.id}`,
    title: `${p.name} — Manufacturer Price & Specs | Shree G Hinges`,
    description: `${p.name} direct from manufacturer. Exact specifications, weight variants, bulk supply and dealer rates — WhatsApp for today's price.`,
    priority: '0.7',
  })),
];

// ---- 1. sitemap.xml ----
const today = new Date().toISOString().split('T')[0];
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes
  .map(
    (r) => `  <url>
    <loc>${SITE_URL}${r.path === '/' ? '/' : r.path}</loc>
    <lastmod>${today}</lastmod>
    <priority>${r.priority}</priority>
  </url>`
  )
  .join('\n')}
</urlset>
`;
writeFileSync(join(DIST, 'sitemap.xml'), sitemap);
console.log(`sitemap.xml written (${routes.length} URLs)`);

// ---- 2. robots.txt ----
writeFileSync(
  join(DIST, 'robots.txt'),
  `User-agent: *\nAllow: /\n\nSitemap: ${SITE_URL}/sitemap.xml\n`
);
console.log('robots.txt written');

// ---- 3. Per-route prerendered HTML shells ----
const baseHtml = readFileSync(join(DIST, 'index.html'), 'utf8');

const esc = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/"/g, '&quot;');

function htmlFor(route) {
  const url = `${SITE_URL}${route.path === '/' ? '/' : route.path}`;
  let html = baseHtml;
  html = html.replace(/<title>[\s\S]*?<\/title>/, `<title>${esc(route.title)}</title>`);
  html = html.replace(
    /<meta name="description" content="[^"]*"\s*\/>/,
    `<meta name="description" content="${esc(route.description)}" />`
  );
  html = html.replace(
    /<link rel="canonical" href="[^"]*"\s*\/>/,
    `<link rel="canonical" href="${url}" />`
  );
  html = html.replace(
    /<meta property="og:title" content="[^"]*"\s*\/>/,
    `<meta property="og:title" content="${esc(route.title)}" />`
  );
  html = html.replace(
    /<meta property="og:description" content="[^"]*"\s*\/>/,
    `<meta property="og:description" content="${esc(route.description)}" />`
  );
  html = html.replace(
    /<meta property="og:url" content="[^"]*"\s*\/>/,
    `<meta property="og:url" content="${url}" />`
  );
  return html;
}

let count = 0;
for (const route of routes) {
  if (route.path === '/') {
    writeFileSync(join(DIST, 'index.html'), htmlFor(route));
  } else {
    const dir = join(DIST, route.path.slice(1));
    mkdirSync(dir, { recursive: true });
    writeFileSync(join(dir, 'index.html'), htmlFor(route));
  }
  count++;
}
console.log(`${count} route HTML files written with unique meta tags`);
