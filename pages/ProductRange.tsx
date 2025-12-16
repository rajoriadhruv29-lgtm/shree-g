import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { CATEGORIES } from '../data/products';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

const ProductRange: React.FC = () => {
  const { t, language } = useLanguage();

  useEffect(() => {
    document.title = "Our Product Range | Shree G Hinges";
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-brand-blue mb-4 text-center">{t('nav.products')}</h1>
        <p className="text-gray-600 text-center max-w-2xl mx-auto mb-16">
          {language === 'hi' 
            ? "शक्ति और स्थायित्व के लिए डिज़ाइन किए गए उच्च श्रेणी के M.S. कब्जों और एक्सेसरीज के हमारे व्यापक कैटलॉग को ब्राउज़ करें।" 
            : "Browse our comprehensive catalogue of high-grade M.S. Hinges and accessories designed for strength and durability."}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {CATEGORIES.map((category) => (
            <Link 
              key={category.id} 
              to={`/products/${category.id}`}
              className="group bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col"
            >
              <div className="h-56 overflow-hidden bg-gray-200">
                <img 
                  src={category.coverImage} 
                  alt={category.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <h2 className="text-2xl font-bold text-brand-blue mb-3 group-hover:text-brand-yellow transition-colors">
                  {language === 'hi' && category.title_hi ? category.title_hi : category.title}
                </h2>
                <p className="text-gray-600 mb-6 text-sm line-clamp-3 flex-1">
                  {language === 'hi' && category.description_hi ? category.description_hi : category.description}
                </p>
                <div className="flex items-center text-brand-blue font-semibold text-sm uppercase tracking-wide">
                  {t('home.viewProducts')} <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductRange;