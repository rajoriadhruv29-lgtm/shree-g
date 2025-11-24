import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { PRODUCTS } from '../data/products';
import { ArrowLeft, Download, Share2 } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

const ProductDetail: React.FC = () => {
  const { productId } = useParams<{ productId: string }>();
  const { t, language } = useLanguage();
  const product = PRODUCTS.find(p => p.id === productId);

  if (!product) {
    return <div className="p-12 text-center text-gray-500">{t('product.notFound')}</div>;
  }

  return (
    <div className="min-h-screen bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb / Back */}
        <div className="mb-8 flex justify-between items-center">
          <Link to={`/products/${product.categoryId}`} className="inline-flex items-center text-gray-500 hover:text-brand-blue transition-colors">
            <ArrowLeft size={20} className="mr-2" /> {t('product.backToList')}
          </Link>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
          
          {/* LEFT SIDE: Image */}
          <div className="w-full lg:w-1/2">
            <div className="bg-gray-50 rounded-2xl border border-gray-100 overflow-hidden p-8 flex items-center justify-center shadow-inner">
              <img 
                src={product.imageUrl} 
                alt={product.name} 
                className="w-full h-auto max-h-[500px] object-contain mix-blend-multiply hover:scale-110 transition-transform duration-500"
              />
            </div>
          </div>

          {/* RIGHT SIDE: Details */}
          <div className="w-full lg:w-1/2">
            <h1 className="text-3xl md:text-4xl font-bold text-brand-blue mb-2">
              {language === 'hi' && product.name_hi ? product.name_hi : product.name}
            </h1>
            <div className="h-1 w-20 bg-brand-yellow mb-6"></div>
            
            <p className="text-gray-600 mb-8 text-lg leading-relaxed">
              {language === 'hi' && product.description_hi ? product.description_hi : product.description}
            </p>

            {/* Product Specifications Table */}
            <div className="bg-white border rounded-lg overflow-hidden shadow-sm mb-8">
              <div className="bg-brand-blue px-6 py-3">
                <h3 className="text-white font-semibold">{t('product.specs')}</h3>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left text-sm">
                  <thead>
                    <tr className="bg-gray-100 border-b border-gray-200">
                      {product.variants.length > 1 && <th className="px-4 py-3 font-semibold text-gray-700">{t('product.variant')}</th>}
                      <th className="px-4 py-3 font-semibold text-gray-700">{t('product.itemCode')}</th>
                      <th className="px-4 py-3 font-semibold text-gray-700">{t('product.size')}</th>
                      <th className="px-4 py-3 font-semibold text-gray-700">{t('product.dim')}</th>
                      <th className="px-4 py-3 font-semibold text-gray-700">{t('product.thickness')}</th>
                      <th className="px-4 py-3 font-semibold text-gray-700">{t('product.weight')}</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {product.variants.map((variant, index) => (
                      <tr key={index} className="hover:bg-gray-50 transition-colors">
                        {product.variants.length > 1 && (
                          <td className="px-4 py-4 font-medium text-brand-blue">{variant.variantName}</td>
                        )}
                        <td className="px-4 py-4 text-gray-600">{variant.itemCode || '-'}</td>
                        <td className="px-4 py-4 text-gray-900 font-semibold">{variant.size}</td>
                        <td className="px-4 py-4 text-gray-600">{variant.length} x {variant.width}</td>
                        <td className="px-4 py-4 text-gray-600">{variant.thickness}</td>
                        <td className="px-4 py-4 text-gray-600">{variant.weight}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="flex gap-4">
               <Link to="/contact" className="flex-1 bg-brand-blue text-white text-center py-3 rounded-md font-medium hover:bg-gray-900 transition-colors shadow-md">
                 {t('product.enquire')}
               </Link>
               <button className="flex items-center justify-center w-12 h-12 border border-gray-300 rounded-md hover:bg-gray-50 text-gray-600 hover:text-brand-blue">
                 <Share2 size={20} />
               </button>
               <button className="flex items-center justify-center w-12 h-12 border border-gray-300 rounded-md hover:bg-gray-50 text-gray-600 hover:text-brand-blue">
                 <Download size={20} />
               </button>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;