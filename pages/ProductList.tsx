import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { PRODUCTS, CATEGORIES } from '../data/products';
import { ArrowLeft } from 'lucide-react';

const ProductList: React.FC = () => {
  const { categoryId } = useParams<{ categoryId: string }>();
  
  const category = CATEGORIES.find(c => c.id === categoryId);
  const products = PRODUCTS.filter(p => p.categoryId === categoryId);

  if (!category) {
    return <div className="p-12 text-center text-gray-500">Category not found</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <Link to="/products" className="inline-flex items-center text-gray-500 hover:text-brand-blue mb-4">
            <ArrowLeft size={16} className="mr-2" /> Back to Categories
          </Link>
          <h1 className="text-3xl font-bold text-brand-blue">{category.title}</h1>
          <p className="text-gray-600 mt-2">{category.description}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <Link 
              key={product.id} 
              to={`/products/${categoryId}/${product.id}`}
              className="bg-white rounded-lg shadow-sm hover:shadow-md transition-all p-4 group"
            >
              <div className="bg-gray-100 rounded-md aspect-square overflow-hidden mb-4 p-4 flex items-center justify-center">
                <img 
                  src={product.imageUrl} 
                  alt={product.name} 
                  className="max-w-full max-h-full object-contain mix-blend-multiply group-hover:scale-105 transition-transform"
                />
              </div>
              <h3 className="font-bold text-gray-900 group-hover:text-brand-blue">{product.name}</h3>
              <p className="text-xs text-gray-500 mt-1">Code: {product.specs.itemCode}</p>
              <div className="mt-3 text-sm font-medium text-brand-yellow">View Specs &rarr;</div>
            </Link>
          ))}
        </div>

        {products.length === 0 && (
          <div className="text-center py-20 bg-white rounded-lg border-2 border-dashed border-gray-200">
            <p className="text-gray-500">No products available in this category yet.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductList;