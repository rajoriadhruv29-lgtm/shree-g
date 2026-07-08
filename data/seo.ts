import { Product, Category } from '../types';

/**
 * Central SEO copy for the site.
 * Static pages get fixed titles/descriptions.
 * Category and product pages are generated from data so every
 * page has a unique, keyword-targeted title and meta description.
 */

export const STATIC_SEO = {
  home: {
    title: 'MS Hinges Manufacturer India | 28+ SKUs | Shree G Hinges',
    description:
      'Manufacturer of MS hinges, katori, shutter kunda, teen hole patti & hardware accessories in Indore. 28+ SKUs, factory-direct bulk supply for dealers across India.',
  },
  about: {
    title: 'About Us | MS Hinge Manufacturer, Indore | Shree G Hinges',
    description:
      'Shree G Hinges is a hinge and hardware accessories manufacturer in Indore, MP. One factory, one quality standard across rivet, bolt, T, butt & lorry hinges.',
  },
  products: {
    title: 'Product Range — MS Hinges & Hardware | Shree G Hinges',
    description:
      'Browse our full range: rivet hinges, fabrication hinges, bolt hinges, lorry hinges, T-hinges, butt hinges, MS katori, shutter kunda, teen hole patti & washers.',
  },
  blog: {
    title: 'Guides for Hardware Dealers & Fabricators | Shree G Hinges',
    description:
      'Practical guides from a hinge manufacturer: gauge selection, stocking advice, MS vs SS, and buying direct from the factory.',
  },
  contact: {
    title: 'Contact & Bulk Rate Inquiry | Shree G Hinges, Indore',
    description:
      'Get dealer rates for MS hinges & hardware accessories. Factory at Dewas Naka, Indore. Call +91 93021 04100 or message us on WhatsApp for the price list.',
  },
};

/** Category page: "Rivet Hinges / Kabja Manufacturer & Bulk Supplier | Shree G Hinges" */
export function categorySeo(category: Category) {
  const cleanTitle = category.title.replace(' / Kabja', '');
  return {
    title: `${category.title} Manufacturer & Bulk Supplier | Shree G Hinges`,
    description:
      `${cleanTitle} direct from manufacturer — all sizes and weight variants with exact specs. ` +
      `Factory in Indore, bulk supply for hardware dealers and fabricators across India.`,
  };
}

/** Product page: unique title + spec-rich description generated from variant data. */
export function productSeo(product: Product) {
  const v = product.variants[0];
  const specBits: string[] = [];
  if (v?.thickness && v.thickness !== '-') specBits.push(`${v.thickness} thickness`);
  if (v?.weight && v.weight !== '-') specBits.push(`${v.weight} weight`);
  const variantNote =
    product.variants.length > 1 ? `${product.variants.length} variants. ` : '';

  return {
    title: `${product.name} — Manufacturer Price & Specs | Shree G Hinges`,
    description: (
      `${product.name} direct from manufacturer. ${variantNote}` +
      (specBits.length ? `Specs: ${specBits.join(', ')}. ` : '') +
      `Bulk supply, dealer rates — WhatsApp for today's price.`
    ).slice(0, 158),
  };
}

/** JSON-LD Product schema for product detail pages. */
export function productJsonLd(product: Product, siteUrl: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    description: product.description,
    image: (product.images && product.images.length > 0
      ? product.images
      : [product.imageUrl]
    ).map((img) => `${siteUrl}${img}`),
    brand: { '@type': 'Brand', name: 'Shree G Hinges' },
    manufacturer: {
      '@type': 'Organization',
      name: 'Shree G Hinges',
      '@id': `${siteUrl}/#org`,
    },
    url: `${siteUrl}/products/${product.categoryId}/${product.id}`,
    ...(product.variants[0]?.itemCode
      ? { sku: product.variants[0].itemCode, mpn: product.variants[0].itemCode }
      : {}),
    additionalProperty: product.variants.flatMap((v, i) => {
      const prefix =
        product.variants.length > 1 ? `${v.variantName || `Variant ${i + 1}`} ` : '';
      return [
        v.size && { '@type': 'PropertyValue', name: `${prefix}Size`, value: v.size },
        v.thickness && { '@type': 'PropertyValue', name: `${prefix}Thickness`, value: v.thickness },
        v.weight && { '@type': 'PropertyValue', name: `${prefix}Weight`, value: v.weight },
      ].filter(Boolean);
    }),
  };
}

/** JSON-LD BreadcrumbList for product pages. */
export function breadcrumbJsonLd(
  siteUrl: string,
  crumbs: { name: string; path: string }[]
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: crumbs.map((c, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: c.name,
      item: `${siteUrl}${c.path}`,
    })),
  };
}
