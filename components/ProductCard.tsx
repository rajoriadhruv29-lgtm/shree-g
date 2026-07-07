import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Settings } from 'lucide-react';
import { Product } from '../types';
import { CATEGORIES } from '../data/products';
import { useLanguage } from '../LanguageContext';
import { buildWhatsAppUrl } from '../lib/whatsapp';
import WhatsAppIcon from './WhatsAppIcon';

const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
  const { t, language } = useLanguage();
  const [imageError, setImageError] = useState(false);

  const category = CATEGORIES.find(c => c.id === product.categoryId);
  const mainSpec = product.variants[0];
  const name = language === 'hi' && product.name_hi ? product.name_hi : product.name;
  const categoryTitle = category ? (language === 'hi' && category.title_hi ? category.title_hi : category.title) : '';
  const detailPath = `/products/${product.categoryId}/${product.id}`;

  return (
    <div className="bg-white rounded-lg shadow-sm hover:shadow-lg transition-all group flex flex-col">
      <Link to={detailPath} className="block p-4 pb-0">
        <div className="relative bg-gray-100 rounded-md aspect-square overflow-hidden flex items-center justify-center">
          <span className="absolute top-1.5 left-1.5 w-3 h-3 border-t-2 border-l-2 border-brand-blue/30" />
          <span className="absolute bottom-1.5 right-1.5 w-3 h-3 border-b-2 border-r-2 border-brand-blue/30" />
          {!imageError ? (
            <img
              src={product.imageUrl}
              alt={name}
              onError={() => setImageError(true)}
              className="max-w-full max-h-full object-contain mix-blend-multiply group-hover:scale-105 transition-transform"
            />
          ) : (
            <div className="flex flex-col items-center gap-2 text-gray-400">
              <Settings size={32} strokeWidth={1.5} />
              <span className="text-[10px] uppercase tracking-wide">{t('home.photoSoon')}</span>
            </div>
          )}
        </div>
      </Link>

      <div className="p-4 flex flex-col flex-1">
        {categoryTitle && (
          <span className="text-[10px] font-bold uppercase tracking-wider text-brand-yellow mb-1">{categoryTitle}</span>
        )}
        <Link to={detailPath}>
          <h3 className="font-bold text-brand-charcoal group-hover:text-brand-blue transition-colors leading-snug">
            {name}
          </h3>
        </Link>

        {mainSpec && (
          <p className="font-mono text-xs text-gray-500 mt-2 tracking-tight">
            {mainSpec.size} &middot; {mainSpec.thickness} &middot; {mainSpec.weight}
          </p>
        )}

        <div className="mt-4 pt-3 border-t border-gray-100 flex items-center gap-2">
          <Link
            to={detailPath}
            className="flex-1 text-center text-xs font-semibold uppercase tracking-wide text-brand-blue border border-brand-blue/30 rounded-md py-2 hover:bg-brand-blue hover:text-white transition-colors"
          >
            {t('home.viewDetails')}
          </Link>
          <a
            href={buildWhatsAppUrl(`Rate inquiry: ${product.name}`)}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`WhatsApp inquiry for ${product.name}`}
            className="flex items-center justify-center w-9 h-9 rounded-md bg-[#25D366] hover:bg-[#1ebe5b] text-white transition-colors flex-shrink-0"
          >
            <WhatsAppIcon size={18} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
