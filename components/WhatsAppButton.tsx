import React from 'react';
import { useLocation } from 'react-router-dom';
import { PRODUCTS, CATEGORIES } from '../data/products';
import { buildWhatsAppUrl } from '../lib/whatsapp';
import WhatsAppIcon from './WhatsAppIcon';

/**
 * Floating click-to-WhatsApp button, visible on every page.
 * The pre-filled message adapts to the current page so inquiries
 * arrive with product context ("Rate inquiry: M.S. Rivet Hinges 4 Inch").
 */
const WhatsAppButton: React.FC = () => {
  const location = useLocation();

  const getMessage = (): string => {
    const parts = location.pathname.split('/').filter(Boolean);
    // /products/:categoryId/:productId
    if (parts[0] === 'products' && parts[2]) {
      const product = PRODUCTS.find((p) => p.id === parts[2]);
      if (product) return `Rate inquiry: ${product.name}`;
    }
    // /products/:categoryId
    if (parts[0] === 'products' && parts[1]) {
      const category = CATEGORIES.find((c) => c.id === parts[1]);
      if (category) return `Rate inquiry: ${category.title}`;
    }
    return 'Hello Shree G Hinges, I would like the complete rate list.';
  };

  return (
    <a
      href={buildWhatsAppUrl(getMessage())}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp for rates"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5b] text-white font-semibold pl-3 pr-4 py-3 rounded-full shadow-lg transition-transform hover:scale-105"
    >
      <WhatsAppIcon size={24} />
      <span className="hidden sm:inline">WhatsApp</span>
    </a>
  );
};

export default WhatsAppButton;
