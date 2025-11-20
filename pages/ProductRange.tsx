import React from 'react';
import { Link } from 'react-router-dom';
import { CATEGORIES } from '../data/products';
import { ArrowRight } from 'lucide-react';

const ProductRange: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-brand-blue mb-4 text-center">Product Range</h1>
        <p className="text-gray-600 text-center max-w-2xl mx-auto mb-16">
          Browse our comprehensive catalogue of high-grade M.S. Hinges and accessories designed for strength and durability.
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
                <h2 className="text-2xl font-bold text-brand-blue mb-3 group-hover:text-brand-yellow transition-colors">{category.title}</h2>
                <p className="text-gray-600 mb-6 text-sm line-clamp-3 flex-1">
                  {category.description}
                </p>
                <div className="flex items-center text-brand-blue font-semibold text-sm uppercase tracking-wide">
                  View Products <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
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