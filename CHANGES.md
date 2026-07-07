# SEO Implementation — Changelog (July 2026)

## What was changed

### 1. `index.html` — fixed and enriched
- **Removed the AI Studio importmap** that loaded React 19 from a CDN while the build used React 18 (conflict risk)
- Added default meta description, canonical URL, Open Graph tags, Twitter card
- Added Organization JSON-LD schema (name, Indore address, phone, email)

### 2. New: `components/Seo.tsx`
Dependency-free per-page SEO manager. Sets title, meta description, canonical, and OG tags on every route change. Also injects page-specific JSON-LD.

### 3. New: `data/seo.ts`
Central SEO copy: fixed titles/descriptions for static pages + generator functions that build unique, keyword-targeted titles and descriptions for every category and product page from your existing product data. Also generates Product schema and BreadcrumbList schema.

### 4. All 7 pages updated
Home, About, Blog, Contact, ProductRange, ProductList, ProductDetail now use the `<Seo>` component. Product detail pages additionally emit Product + Breadcrumb structured data (eligible for rich results in Google).

### 5. New: `components/WhatsAppButton.tsx`
Floating WhatsApp button on every page. Pre-filled message adapts to context:
- On a product page → "Rate inquiry: M.S. Rivet Hinges 3 Inch"
- On a category page → "Rate inquiry: Rivet Hinges / Kabja"
- Elsewhere → asks for the complete rate list
**⚠️ Number is set to +91 93021 04100 (from your Contact page). If WhatsApp runs on the other number, edit `WHATSAPP_NUMBER` at the top of this file.**

### 6. New: `scripts/generate-seo-files.mjs` (runs automatically on build)
After every `npm run build`, this generates inside `dist/`:
- **sitemap.xml** — all 33 URLs (5 static + 7 category + 21 product pages)
- **robots.txt** — pointing Google to the sitemap
- **Per-route HTML files** — each route gets its own `index.html` with the correct title/meta/canonical baked in. Google and WhatsApp link previews see correct metadata WITHOUT executing JavaScript, and deep links work on static hosting without redirect rules.

## How to deploy

```bash
npm install        # once
npm run build      # builds + generates all SEO files
```

Upload the entire `dist/` folder to your hosting. If using Netlify/Vercel/GitHub Pages, point the deploy at `dist/`.

## After deploying — do these once

1. Google Search Console → Sitemaps → submit `https://shreeghinges.com/sitemap.xml`
2. Test one product URL in Google's Rich Results Test (search "rich results test") — it should detect Product schema
3. Send yourself a product page link on WhatsApp — the preview should now show the product title

## Domain note
All URLs are set to `https://shreeghinges.com`. Your contact email says `shreehinges.com` (no g). If the real domain differs, change `SITE_URL` in TWO places: `components/Seo.tsx` and `scripts/generate-seo-files.mjs`.

## Not changed (intentionally)
- Design, layout, colors, content — untouched
- Hindi/English language toggle — works as before
- Tailwind CDN setup — works, but consider proper Tailwind install later for speed
