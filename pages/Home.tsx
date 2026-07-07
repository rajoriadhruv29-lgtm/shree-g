import React from 'react';
import { Link } from 'react-router-dom';
import { Truck, ShieldCheck, Settings, Link as LinkIcon, ArrowRight } from 'lucide-react';
import { FEATURED_PRODUCTS } from '../data/products';
import { useLanguage } from '../LanguageContext';
import Seo from '../components/Seo';
import { STATIC_SEO } from '../data/seo';
import ProductCard from '../components/ProductCard';

const Home: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="flex flex-col min-h-screen">
      <Seo title={STATIC_SEO.home.title} description={STATIC_SEO.home.description} path="/" />

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
             poster="/images/home/hero-poster.jpg"
           >
             <source src="/images/home/hero-video.mp4" type="video/mp4" />
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
            <div className="flex flex-wrap gap-4 mb-8">
              <Link to="/products" className="bg-brand-yellow text-brand-blue px-8 py-3 rounded-md font-bold hover:bg-yellow-400 transition-colors flex items-center gap-2 shadow-lg shadow-yellow-900/20">
                {t('home.viewCatalogue')} <ArrowRight size={20} />
              </Link>
              <Link to="/contact" className="border-2 border-white text-white px-8 py-3 rounded-md font-bold hover:bg-white hover:text-brand-blue transition-colors">
                {t('home.contactUs')}
              </Link>
            </div>
            <p className="font-mono text-xs md:text-sm uppercase tracking-[0.15em] text-brand-yellow/90 border-t border-white/20 pt-4">
              {t('home.heroStats')}
            </p>
          </div>
        </div>
      </div>

      {/* Featured Products */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h4 className="text-brand-yellow font-bold uppercase tracking-wider mb-2">{t('home.featuredTitle')}</h4>
            <h2 className="text-3xl md:text-4xl font-bold text-brand-blue">{t('home.featuredHeading')}</h2>
            <div className="w-24 h-1 bg-brand-yellow mx-auto mt-4"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {FEATURED_PRODUCTS.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/products" className="inline-block border-2 border-brand-blue text-brand-blue px-8 py-2 rounded-full font-semibold hover:bg-brand-blue hover:text-white transition-all">
              {t('home.viewAll')}
            </Link>
          </div>
        </div>
      </div>

      {/* Competitive Advantages */}
      <div className="relative py-16 bg-brand-gray overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{
            backgroundImage:
              'repeating-linear-gradient(135deg, #36454F 0, #36454F 1px, transparent 1px, transparent 16px)',
          }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
              <h3 className="text-xl font-bold text-brand-charcoal mb-3">{t('home.adv1Title')}</h3>
              <p className="text-gray-600 text-sm">
                {t('home.adv1Desc')}
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow text-center border-b-4 border-transparent hover:border-brand-yellow">
              <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4 text-brand-blue">
                <LinkIcon size={32} />
              </div>
              <h3 className="text-xl font-bold text-brand-charcoal mb-3">{t('home.adv2Title')}</h3>
              <p className="text-gray-600 text-sm">
                {t('home.adv2Desc')}
              </p>
            </div>

             {/* Card 3 */}
             <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow text-center border-b-4 border-transparent hover:border-brand-yellow">
              <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4 text-brand-blue">
                <ShieldCheck size={32} />
              </div>
              <h3 className="text-xl font-bold text-brand-charcoal mb-3">{t('home.adv3Title')}</h3>
              <p className="text-gray-600 text-sm">
                {t('home.adv3Desc')}
              </p>
            </div>

             {/* Card 4 */}
             <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow text-center border-b-4 border-transparent hover:border-brand-yellow">
              <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4 text-brand-blue">
                <Truck size={32} />
              </div>
              <h3 className="text-xl font-bold text-brand-charcoal mb-3">{t('home.adv4Title')}</h3>
              <p className="text-gray-600 text-sm">
                {t('home.adv4Desc')}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Trust Strip */}
      <div className="py-8 bg-brand-blue text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
            {[t('home.trustYears'), t('home.trustSkus'), t('home.trustDealers'), t('home.trustGst')].map((stat, i) => (
              <span key={i} className="font-mono text-sm uppercase tracking-wide text-gray-200 flex items-center gap-2">
                {i > 0 && <span className="hidden sm:inline text-white/20">|</span>}
                {stat}
              </span>
            ))}
          </div>
          <Link to="/about" className="text-brand-yellow font-semibold text-sm uppercase tracking-wide border-b border-brand-yellow/50 hover:border-brand-yellow flex items-center gap-1 flex-shrink-0">
            {t('home.ourStory')} <ArrowRight size={14} />
          </Link>
        </div>
      </div>

    </div>
  );
};

export default Home;
