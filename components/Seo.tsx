import { useEffect } from 'react';

const SITE_URL = 'https://shreeghinges.com';
const SITE_NAME = 'Shree G Hinges';

interface SeoProps {
  title: string;
  description: string;
  path: string;           // e.g. '/products/rivet-hinges'
  image?: string;         // absolute or site-relative
  jsonLd?: object | object[];
}

function setMeta(attr: 'name' | 'property', key: string, content: string) {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

function setCanonical(url: string) {
  let el = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
  if (!el) {
    el = document.createElement('link');
    el.setAttribute('rel', 'canonical');
    document.head.appendChild(el);
  }
  el.setAttribute('href', url);
}

function setJsonLd(id: string, data: object | object[]) {
  let el = document.getElementById(id) as HTMLScriptElement | null;
  if (!el) {
    el = document.createElement('script');
    el.type = 'application/ld+json';
    el.id = id;
    document.head.appendChild(el);
  }
  el.textContent = JSON.stringify(data);
}

function removeJsonLd(id: string) {
  document.getElementById(id)?.remove();
}

/**
 * Per-page SEO manager. Dependency-free (no react-helmet).
 * Sets document title, meta description, canonical URL, and Open Graph tags.
 * Optionally injects page-specific JSON-LD structured data.
 */
const Seo: React.FC<SeoProps> = ({ title, description, path, image, jsonLd }) => {
  useEffect(() => {
    const url = `${SITE_URL}${path}`;
    const img = image
      ? (image.startsWith('http') ? image : `${SITE_URL}${image}`)
      : `${SITE_URL}/images/home/logo.png`;

    document.title = title;
    setMeta('name', 'description', description);
    setCanonical(url);
    setMeta('property', 'og:title', title);
    setMeta('property', 'og:description', description);
    setMeta('property', 'og:url', url);
    setMeta('property', 'og:image', img);
    setMeta('property', 'og:type', 'website');
    setMeta('property', 'og:site_name', SITE_NAME);
    setMeta('name', 'twitter:card', 'summary_large_image');

    if (jsonLd) {
      setJsonLd('page-jsonld', jsonLd);
    } else {
      removeJsonLd('page-jsonld');
    }

    return () => removeJsonLd('page-jsonld');
  }, [title, description, path, image, jsonLd]);

  return null;
};

export default Seo;
export { SITE_URL, SITE_NAME };
