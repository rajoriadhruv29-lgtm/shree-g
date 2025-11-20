import React from 'react';
import { Link } from 'react-router-dom';
import { Truck, ShieldCheck, Settings, Link as LinkIcon, ArrowRight } from 'lucide-react';
import { CATEGORIES } from '../data/products';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      
      {/* Hero Section with Video Background */}
      <div className="relative bg-brand-blue text-white overflow-hidden h-[600px]">
        {/* Video Background */}
        <div className="absolute inset-0 w-full h-full">
           <div className="absolute inset-0 bg-brand-blue/70 z-10"></div> {/* Overlay for text readability */}
           <video 
             autoPlay 
             loop 
             muted 
             playsInline
             className="w-full h-full object-cover"
             poster="https://images.unsplash.com/photo-1565514020176-db61a3380a60?ixlib=rb-4.0.3"
           >
             {/* Using a stock industrial video (Metal machining/Sparks) */}
             <source src="https://videos.pexels.com/video-files/5825052/5825052-uhd_2560_1440_24fps.mp4" type="video/mp4" />
             Your browser does not support the video tag.
           </video>
        </div>

        {/* Hero Content */}
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 leading-tight">
              Precision Engineered <br />
              <span className="text-brand-yellow">M.S. Hinges</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-200 mb-8 leading-relaxed">
              We are a specialized manufacturer providing high-quality rivet, bolt, and door hinges. Built for strength, designed for longevity in every fold.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/products" className="bg-brand-yellow text-brand-blue px-8 py-3 rounded-md font-bold hover:bg-yellow-400 transition-colors flex items-center gap-2 shadow-lg shadow-yellow-900/20">
                View Catalogue <ArrowRight size={20} />
              </Link>
              <Link to="/contact" className="border-2 border-white text-white px-8 py-3 rounded-md font-bold hover:bg-white hover:text-brand-blue transition-colors">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* About Teaser */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2">
              <h4 className="text-brand-yellow font-bold uppercase tracking-wider mb-2">About Us</h4>
              <h2 className="text-3xl md:text-4xl font-bold text-brand-blue mb-6">Trusted Name in Hinge Manufacturing</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                We are a specialized manufacturer of M.S. Hinges, focused on providing high-quality products. With a strong emphasis on quality, efficiency, and customer satisfaction, we have established ourselves as a trusted partner in the hardware sector.
              </p>
              <Link to="/about" className="text-brand-blue font-semibold border-b-2 border-brand-yellow pb-1 hover:text-gray-900">
                Read More About Our Journey
              </Link>
            </div>
            <div className="md:w-1/2 relative">
               {/* Replaced generic factory image with metal/manufacturing focused image */}
               <div className="absolute -inset-4 bg-brand-yellow/20 rounded-lg transform rotate-2"></div>
               <img 
                src="https://images.unsplash.com/photo-1625559686853-046970e220b1?q=80&w=1000&auto=format&fit=crop" 
                alt="Metal Sheets and Hinge Material" 
                className="relative rounded-lg shadow-xl w-full object-cover h-[400px]"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Competitive Advantages (From Image 2) */}
      <div className="py-16 bg-brand-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-brand-blue uppercase">Our Competitive Advantages</h2>
            <div className="w-24 h-1 bg-brand-yellow mx-auto mt-4"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Card 1 */}
            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow text-center border-b-4 border-transparent hover:border-brand-yellow">
              <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4 text-brand-blue">
                <Settings size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Quality Raw Materials</h3>
              <p className="text-gray-600 text-sm">
                We use top-grade mild steel from trusted suppliers, ensuring our hinges are strong and long-lasting.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow text-center border-b-4 border-transparent hover:border-brand-yellow">
              <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4 text-brand-blue">
                <LinkIcon size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Efficient Supply Chain</h3>
              <p className="text-gray-600 text-sm">
                Our streamlined supply chain allows us to quickly source materials, reducing lead times and enhancing efficiency.
              </p>
            </div>

             {/* Card 3 */}
             <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow text-center border-b-4 border-transparent hover:border-brand-yellow">
              <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4 text-brand-blue">
                <ShieldCheck size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Strong Quality Control</h3>
              <p className="text-gray-600 text-sm">
                We maintain strict quality checks at every production stage, ensuring our hinges meet high industry standards.
              </p>
            </div>

             {/* Card 4 */}
             <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow text-center border-b-4 border-transparent hover:border-brand-yellow">
              <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4 text-brand-blue">
                <Truck size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Timely Delivery</h3>
              <p className="text-gray-600 text-sm">
                We prioritize meeting deadlines, ensuring our customers receive their orders on time without compromising quality.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Product Range Preview */}
      <div className="py-16 bg-white">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <h2 className="text-3xl font-bold text-brand-blue mb-10 text-center">Explore Our Range</h2>
           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
             {CATEGORIES.slice(0, 3).map(cat => (
               <Link key={cat.id} to={`/products/${cat.id}`} className="group relative overflow-hidden rounded-lg shadow-lg h-64">
                 <img src={cat.coverImage} alt={cat.title} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110" />
                 <div className="absolute inset-0 bg-gradient-to-t from-brand-blue/90 to-transparent flex flex-col justify-end p-6">
                   <h3 className="text-white text-xl font-bold mb-1">{cat.title}</h3>
                   <span className="text-brand-yellow text-sm font-medium group-hover:underline flex items-center gap-1">View Products <ArrowRight size={14}/></span>
                 </div>
               </Link>
             ))}
           </div>
           <div className="text-center mt-10">
             <Link to="/products" className="inline-block border-2 border-brand-blue text-brand-blue px-8 py-2 rounded-full font-semibold hover:bg-brand-blue hover:text-white transition-all">
               View All Products
             </Link>
           </div>
         </div>
      </div>

    </div>
  );
};

export default Home;