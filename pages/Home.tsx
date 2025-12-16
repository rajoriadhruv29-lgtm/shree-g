import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Truck, ShieldCheck, Settings, Link as LinkIcon, ArrowRight } from 'lucide-react';
import { CATEGORIES } from '../data/products';
import { useLanguage } from '../LanguageContext';

const Home: React.FC = () => {
  const { t, language } = useLanguage();

  useEffect(() => {
    document.title = "Home | Shree G Hinges - Specialized Manufacturer";
  }, []);

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
             // INSTRUCTION: Add 'hero-poster.jpg' to public/images/home/
             poster="/images/home/hero-poster.jpg"
           >
             <source src="https://videos.pexels.com/video-files/5825052/5825052-uhd_2560_1440_24fps.mp4" type="video/mp4" />
           </video>
        </div>

        {/* Hero Content */}
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 leading-tight">
              {t('home.heroTitle')} <br />
              <span className="text-brand-yellow">{t('home.heroSubtitle')}</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-200 mb-8 leading-relaxed">
              {t('home.heroDesc')}
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/products" className="bg-brand-yellow text-brand-blue px-8 py-3 rounded-md font-bold hover:bg-yellow-400 transition-colors flex items-center gap-2 shadow-lg shadow-yellow-900/20">
                {t('home.viewCatalogue')} <ArrowRight size={20} />
              </Link>
              <Link to="/contact" className="border-2 border-white text-white px-8 py-3 rounded-md font-bold hover:bg-white hover:text-brand-blue transition-colors">
                {t('home.contactUs')}
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
              <h4 className="text-brand-yellow font-bold uppercase tracking-wider mb-2">{t('home.aboutTeaserTitle')}</h4>
              <h2 className="text-3xl md:text-4xl font-bold text-brand-blue mb-6">{t('home.aboutTeaserHeading')}</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {t('home.aboutTeaserDesc')}
              </p>
              <Link to="/about" className="text-brand-blue font-semibold border-b-2 border-brand-yellow pb-1 hover:text-gray-900">
                {t('home.readMore')}
              </Link>
            </div>
            <div className="md:w-1/2 relative">
               <div className="absolute -inset-4 bg-brand-yellow/20 rounded-lg transform rotate-2"></div>
               {/* 
                  INSTRUCTION: Add 'about-us.jpg' to public/images/home/ 
               */}
               <img 
                src="/images/home/about-us.jpg" 
                alt="Shree Hinges Manufacturing" 
                className="relative rounded-lg shadow-xl w-full object-cover h-[400px]"
                onError={(e) => {
                  // Fallback image if local file is missing
                  e.currentTarget.src = 'https://images.unsplash.com/photo-1625559686853-046970e220b1?q=80&w=1000&auto=format&fit=crop';
                }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Competitive Advantages */}
      <div className="py-16 bg-brand-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-brand-blue uppercase">{t('home.advantagesTitle')}</h2>
            <div className="w-24 h-1 bg-brand-yellow mx-auto mt-4"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Card 1 */}
            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow text-center border-b-4 border-transparent hover:border-brand-yellow">
              <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4 text-brand-blue">
                <Settings size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">{t('home.adv1Title')}</h3>
              <p className="text-gray-600 text-sm">
                {t('home.adv1Desc')}
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow text-center border-b-4 border-transparent hover:border-brand-yellow">
              <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4 text-brand-blue">
                <LinkIcon size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">{t('home.adv2Title')}</h3>
              <p className="text-gray-600 text-sm">
                {t('home.adv2Desc')}
              </p>
            </div>

             {/* Card 3 */}
             <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow text-center border-b-4 border-transparent hover:border-brand-yellow">
              <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4 text-brand-blue">
                <ShieldCheck size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">{t('home.adv3Title')}</h3>
              <p className="text-gray-600 text-sm">
                {t('home.adv3Desc')}
              </p>
            </div>

             {/* Card 4 */}
             <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow text-center border-b-4 border-transparent hover:border-brand-yellow">
              <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4 text-brand-blue">
                <Truck size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">{t('home.adv4Title')}</h3>
              <p className="text-gray-600 text-sm">
                {t('home.adv4Desc')}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Product Range Preview */}
      <div className="py-16 bg-white">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <h2 className="text-3xl font-bold text-brand-blue mb-10 text-center">{t('home.exploreRange')}</h2>
           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
             {CATEGORIES.slice(0, 3).map(cat => (
               <Link key={cat.id} to={`/products/${cat.id}`} className="group relative overflow-hidden rounded-lg shadow-lg h-64">
                 <img src={cat.coverImage} alt={cat.title} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110" />
                 <div className="absolute inset-0 bg-gradient-to-t from-brand-blue/90 to-transparent flex flex-col justify-end p-6">
                   <h3 className="text-white text-xl font-bold mb-1">{language === 'hi' && cat.title_hi ? cat.title_hi : cat.title}</h3>
                   <span className="text-brand-yellow text-sm font-medium group-hover:underline flex items-center gap-1">{t('home.viewProducts')} <ArrowRight size={14}/></span>
                 </div>
               </Link>
             ))}
           </div>
           <div className="text-center mt-10">
             <Link to="/products" className="inline-block border-2 border-brand-blue text-brand-blue px-8 py-2 rounded-full font-semibold hover:bg-brand-blue hover:text-white transition-all">
               {t('home.viewAll')}
             </Link>
           </div>
         </div>
      </div>

    </div>
  );
};

export default Home;