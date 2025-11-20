import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { PRODUCTS } from '../data/products';
import { ArrowLeft, Download, Share2 } from 'lucide-react';

const ProductDetail: React.FC = () => {
  const { productId } = useParams<{ productId: string }>();
  const product = PRODUCTS.find(p => p.id === productId);

  if (!product) {
    return <div className="p-12 text-center text-gray-500">Product not found</div>;
  }

  return (
    <div className="min-h-screen bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb / Back */}
        <div className="mb-8 flex justify-between items-center">
          <Link to={`/products/${product.categoryId}`} className="inline-flex items-center text-gray-500 hover:text-brand-blue transition-colors">
            <ArrowLeft size={20} className="mr-2" /> Back to List
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
            <div className="mt-6 grid grid-cols-4 gap-4">
               {/* Placeholder thumbnails for effect */}
               {[1, 2, 3].map((i) => (
                 <div key={i} className="bg-gray-50 border rounded-lg p-2 cursor-pointer opacity-60 hover:opacity-100">
                    <img src={product.imageUrl} className="w-full h-full object-contain" alt="thumb"/>
                 </div>
               ))}
            </div>
          </div>

          {/* RIGHT SIDE: Details */}
          <div className="w-full lg:w-1/2">
            <h1 className="text-3xl md:text-4xl font-bold text-brand-blue mb-2">{product.name}</h1>
            <div className="h-1 w-20 bg-brand-yellow mb-6"></div>
            
            <p className="text-gray-600 mb-8 text-lg leading-relaxed">
              {product.description}
            </p>

            {/* Product Specifications Table */}
            <div className="bg-white border rounded-lg overflow-hidden shadow-sm mb-8">
              <div className="bg-brand-blue px-6 py-3">
                <h3 className="text-white font-semibold">Product Specifications</h3>
              </div>
              <table className="w-full text-left">
                <tbody className="divide-y divide-gray-100">
                  <tr className="hover:bg-gray-50 transition-colors">
                    <th className="px-6 py-4 text-sm font-medium text-gray-500 bg-gray-50/50 w-1/3">Item Code</th>
                    <td className="px-6 py-4 text-sm text-gray-900 font-semibold">{product.specs.itemCode}</td>
                  </tr>
                  <tr className="hover:bg-gray-50 transition-colors">
                    <th className="px-6 py-4 text-sm font-medium text-gray-500 bg-gray-50/50">Size (Inches/Type)</th>
                    <td className="px-6 py-4 text-sm text-gray-900">{product.specs.size}</td>
                  </tr>
                  <tr className="hover:bg-gray-50 transition-colors">
                    <th className="px-6 py-4 text-sm font-medium text-gray-500 bg-gray-50/50">Length</th>
                    <td className="px-6 py-4 text-sm text-gray-900">{product.specs.length}</td>
                  </tr>
                  <tr className="hover:bg-gray-50 transition-colors">
                    <th className="px-6 py-4 text-sm font-medium text-gray-500 bg-gray-50/50">Width</th>
                    <td className="px-6 py-4 text-sm text-gray-900">{product.specs.width}</td>
                  </tr>
                  <tr className="hover:bg-gray-50 transition-colors">
                    <th className="px-6 py-4 text-sm font-medium text-gray-500 bg-gray-50/50">Thickness</th>
                    <td className="px-6 py-4 text-sm text-gray-900">{product.specs.thickness}</td>
                  </tr>
                  <tr className="hover:bg-gray-50 transition-colors">
                    <th className="px-6 py-4 text-sm font-medium text-gray-500 bg-gray-50/50">Weight (per pair)</th>
                    <td className="px-6 py-4 text-sm text-gray-900">{product.specs.weight}</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="flex gap-4">
               <Link to="/contact" className="flex-1 bg-brand-blue text-white text-center py-3 rounded-md font-medium hover:bg-gray-900 transition-colors shadow-md">
                 Enquire Now
               </Link>
               <button className="flex items-center justify-center w-12 h-12 border border-gray-300 rounded-md hover:bg-gray-50 text-gray-600">
                 <Share2 size={20} />
               </button>
               <button className="flex items-center justify-center w-12 h-12 border border-gray-300 rounded-md hover:bg-gray-50 text-gray-600">
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