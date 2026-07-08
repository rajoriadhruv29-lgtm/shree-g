import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { FEATURED_PRODUCTS, CATEGORIES, PRODUCTS } from '../data/products';
import { useLanguage } from '../LanguageContext';
import Seo from '../components/Seo';
import { STATIC_SEO } from '../data/seo';
import HomeCatalogue from '../components/HomeCatalogue';
import { buildWhatsAppUrl } from '../lib/whatsapp';

const Home: React.FC = () => {
  const { t, language } = useLanguage();

  // Flagship hero pulls the first featured SKU dynamically (currently the 4" rivet hinge).
  const flagship = FEATURED_PRODUCTS[0];
  const flagshipCategory = CATEGORIES.find((c) => c.id === flagship.categoryId);
  const mainVariant = flagship.variants[0];
  const flagshipName =
    language === 'hi' && flagship.name_hi ? flagship.name_hi : flagship.name;
  const [heroImgError, setHeroImgError] = useState(false);

  return (
    <div className="flex flex-col min-h-screen">
      <Seo title={STATIC_SEO.home.title} description={STATIC_SEO.home.description} path="/" />

      {/* ============ FLAGSHIP PRODUCT HERO ============ */}
      <div className="bg-gradient-to-b from-slate-50 to-slate-100 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16 flex flex-col lg:flex-row items-center gap-10">
          <div className="flex-1 w-full">
            <p className="font-mono text-xs uppercase tracking-[0.16em] text-brand-yellow mb-4">
              {t('home.flagship')}
            </p>
            {/* Keyword-bearing H1 preserved for SEO ("M.S. Hinges"). */}
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-brand-blue leading-[1.05] tracking-tight mb-5">
              {t('home.heroMergeTitle')}
            </h1>
            <p className="text-lg text-brand-charcoal/80 leading-relaxed max-w-lg mb-7">
              {t('home.heroMergeDesc')}
            </p>
            <div className="flex flex-wrap gap-4 mb-7">
              <a
                href="#catalogue"
                className="bg-brand-blue text-white px-7 py-3.5 rounded-lg font-semibold flex items-center gap-2 hover:bg-brand-blue/90 transition-colors"
              >
                {t('home.browseCatalogue')} <ArrowRight size={18} />
              </a>
              <a
                href={buildWhatsAppUrl(`Rate inquiry: ${flagship.name}`)}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#25D366] text-[#062f16] px-6 py-3.5 rounded-lg font-bold hover:bg-[#1ebe5b] transition-colors"
              >
                {t('home.enquire')}
              </a>
            </div>
            <div className="flex flex-wrap gap-x-6 gap-y-2 font-mono text-xs text-brand-charcoal/70 border-t border-slate-300 pt-4">
              {mainVariant?.itemCode && (
                <span>
                  <b className="text-brand-blue">{mainVariant.itemCode}</b> · {t('home.itemCodeLabel')}
                </span>
              )}
              {mainVariant?.length && mainVariant?.width && (
                <span>{mainVariant.length} × {mainVariant.width}</span>
              )}
              {mainVariant?.thickness && mainVariant.thickness !== '-' && (
                <span>{mainVariant.thickness}</span>
              )}
              {mainVariant?.weight && mainVariant.weight !== '-' && (
                <span>{mainVariant.weight}</span>
              )}
            </div>
          </div>

          <div className="flex-shrink-0 w-full max-w-[400px]">
            <Link
              to={`/products/${flagship.categoryId}/${flagship.id}`}
              className="group relative block aspect-square bg-white border border-slate-200 rounded-2xl shadow-[0_30px_60px_-30px_rgba(11,61,145,0.4)] overflow-hidden"
            >
              <span className="absolute top-4 left-4 w-5 h-5 border-t-2 border-l-2 border-brand-blue/20 z-10" />
              <span className="absolute bottom-4 right-4 w-5 h-5 border-b-2 border-r-2 border-brand-blue/20 z-10" />
              {flagshipCategory && (
                <span className="absolute top-4 right-4 z-10 font-mono text-[11px] bg-brand-yellow text-brand-blue px-3 py-1.5 rounded-full">
                  {flagship.variants.length > 1
                    ? `${flagship.variants.length} ${t('product.variantsCount')}`
                    : (language === 'hi' && flagshipCategory.title_hi ? flagshipCategory.title_hi : flagshipCategory.title).replace(' / Kabja', '')}
                </span>
              )}
              <div className="w-full h-full flex items-center justify-center p-10">
                {!heroImgError ? (
                  <img
                    src={flagship.imageUrl}
                    alt={flagshipName}
                    onError={() => setHeroImgError(true)}
                    className="max-w-full max-h-full object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-500"
                  />
                ) : (
                  <span className="font-heading font-bold text-[110px] text-slate-200">
                    {mainVariant?.size?.replace(' Inch', '"') || ''}
                  </span>
                )}
              </div>
            </Link>
          </div>
        </div>
      </div>

      {/* ============ SEARCHABLE FILTER-RAIL CATALOGUE ============ */}
      <div id="catalogue" className="bg-white scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14">
          <div className="flex flex-wrap items-end justify-between gap-4 mb-6">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.16em] text-brand-yellow mb-2">
                {t('home.catalogueEyebrow')}
              </p>
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-brand-blue">
                {PRODUCTS.length} {t('home.catalogueTitle')}
              </h2>
            </div>
          </div>
        </div>
        <HomeCatalogue />
      </div>

      {/* ============ SHOP THE RANGES ============ */}
      <div className="py-16 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-end justify-between gap-4 mb-8">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.16em] text-brand-yellow mb-2">
                {t('home.rangesEyebrow')}
              </p>
              <h2 className="font-heading text-3xl font-bold text-brand-blue">
                {CATEGORIES.length} {t('home.rangesTitle')}
              </h2>
            </div>
            <Link to="/products" className="text-sm font-semibold text-brand-blue flex items-center gap-1 hover:text-brand-yellow transition-colors">
              {t('home.viewAllProducts')} <ArrowRight size={16} />
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {CATEGORIES.map((category) => {
              const count = PRODUCTS.filter((p) => p.categoryId === category.id).length;
              const title = language === 'hi' && category.title_hi ? category.title_hi : category.title;
              return (
                <Link
                  key={category.id}
                  to={`/products/${category.id}`}
                  className="group border border-slate-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow flex flex-col"
                >
                  <div className="relative aspect-[16/11] bg-slate-100 overflow-hidden">
                    <img
                      src={category.coverImage}
                      alt={title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <span className="absolute top-2.5 right-2.5 font-mono text-[10px] text-brand-blue bg-white rounded-full px-2.5 py-1">
                      {count} {count === 1 ? t('home.productSingular') : t('home.productPlural')}
                    </span>
                  </div>
                  <div className="p-4 flex flex-col gap-1">
                    <h3 className="font-bold text-brand-charcoal group-hover:text-brand-blue transition-colors">
                      {title.replace(' / Kabja', '')}
                    </h3>
                    <span className="text-sm font-semibold text-brand-yellow mt-1 flex items-center gap-1">
                      {t('home.viewRange')} <ArrowRight size={14} />
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>

      {/* ============ NUMBERED ADVANTAGES ============ */}
      <div className="py-14 bg-brand-gray border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { num: '01', title: t('home.adv1Title'), desc: t('home.adv1Desc') },
              { num: '02', title: t('home.adv2Title'), desc: t('home.adv2Desc') },
              { num: '03', title: t('home.adv3Title'), desc: t('home.adv3Desc') },
              { num: '04', title: t('home.adv4Title'), desc: t('home.adv4Desc') },
            ].map((a) => (
              <div key={a.num}>
                <div className="font-heading font-bold text-3xl text-brand-yellow mb-2">{a.num}</div>
                <h3 className="font-heading font-semibold text-lg text-brand-blue mb-2">{a.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ============ BULK WHATSAPP CTA ============ */}
      <div className="py-10 bg-[#F0E7D8] border-t border-[#E7DBC5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="font-heading text-xl md:text-2xl font-bold text-brand-blue">
              {t('home.bulkTitle')}
            </h2>
            <p className="text-sm text-[#6a5a3c] mt-1">{t('home.bulkDesc')}</p>
          </div>
          <a
            href={buildWhatsAppUrl(t('home.bulkWhatsAppMessage'))}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 bg-[#25D366] text-[#062f16] font-bold px-6 py-3.5 rounded-lg hover:bg-[#1ebe5b] transition-colors"
          >
            {t('home.bulkBtn')}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
