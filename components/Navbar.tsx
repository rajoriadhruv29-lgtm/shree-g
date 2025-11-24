import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Globe } from 'lucide-react';
import { CATEGORIES } from '../data/products';
import { useLanguage } from '../LanguageContext';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const location = useLocation();
  const { language, setLanguage, t } = useLanguage();

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
    setDropdownOpen(false);
  }, [location]);

  const navLinkClass = "text-gray-700 hover:text-brand-blue font-medium transition-colors px-3 py-2";
  const activeLinkClass = "text-brand-blue font-bold";

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-24">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center gap-3">
              <div className="h-20 w-auto flex items-center justify-center">
                 {/* 
                    INSTRUCTIONS: 
                    Place your logo file in: public/images/logo.png 
                 */}
                 <img 
                   src="/images/logo.png" 
                   alt="Shree G Hinges" 
                   className="h-full w-auto object-contain hover:scale-105 transition-transform duration-300"
                   onError={(e) => {
                     // Fallback if image is missing
                     e.currentTarget.style.display = 'none';
                     e.currentTarget.nextElementSibling?.classList.remove('hidden');
                   }}
                 />
                 {/* Fallback text if logo image is missing */}
                 <span className="hidden text-2xl font-bold text-brand-blue">SHREE G</span>
              </div>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/" className={`${navLinkClass} ${location.pathname === '/' ? activeLinkClass : ''}`}>{t('nav.home')}</Link>
            <Link to="/about" className={`${navLinkClass} ${location.pathname === '/about' ? activeLinkClass : ''}`}>{t('nav.about')}</Link>
            
            {/* Dropdown */}
            <div 
              className="relative group"
              onMouseEnter={() => setDropdownOpen(true)}
              onMouseLeave={() => setDropdownOpen(false)}
            >
              <button className={`${navLinkClass} flex items-center gap-1 outline-none`}>
                {t('nav.products')} <ChevronDown size={16} />
              </button>
              
              {/* Dropdown Menu */}
              <div className={`absolute left-0 mt-0 w-56 bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 transition-all duration-200 ${dropdownOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'}`}>
                <div className="py-1">
                  <Link to="/products" className="block px-4 py-2 text-sm text-gray-700 hover:bg-brand-gray hover:text-brand-blue border-b border-gray-100">{t('nav.allProducts')}</Link>
                  {CATEGORIES.map((cat) => (
                    <Link 
                      key={cat.id}
                      to={`/products/${cat.id}`} 
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-brand-gray hover:text-brand-blue"
                    >
                      {language === 'hi' && cat.title_hi ? cat.title_hi : cat.title}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <Link to="/blog" className={`${navLinkClass} ${location.pathname === '/blog' ? activeLinkClass : ''}`}>{t('nav.blog')}</Link>
            <Link to="/contact" className="bg-brand-blue text-white px-5 py-2 rounded-full font-medium hover:bg-gray-900 transition-all shadow-md border border-transparent hover:border-brand-yellow">{t('nav.contact')}</Link>
            
            {/* Language Switcher */}
            <button 
              onClick={() => setLanguage(language === 'en' ? 'hi' : 'en')}
              className="ml-2 p-2 text-gray-600 hover:text-brand-blue flex items-center gap-1"
              title={language === 'en' ? 'Switch to Hindi' : 'Switch to English'}
            >
              <Globe size={18} />
              <span className="text-sm font-bold">{language === 'en' ? 'HI' : 'EN'}</span>
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden gap-4">
             {/* Mobile Lang Switcher */}
             <button 
              onClick={() => setLanguage(language === 'en' ? 'hi' : 'en')}
              className="p-2 text-gray-600 hover:text-brand-blue flex items-center gap-1"
            >
              <span className="text-sm font-bold">{language === 'en' ? 'HI' : 'EN'}</span>
            </button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-brand-blue focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-brand-blue hover:bg-gray-50">{t('nav.home')}</Link>
            <Link to="/about" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-brand-blue hover:bg-gray-50">{t('nav.about')}</Link>
            
            <div className="pl-3 border-l-4 border-brand-blue ml-3 my-2">
              <div className="px-3 py-2 text-sm font-bold text-gray-500 uppercase">{t('nav.products')}</div>
              {CATEGORIES.map((cat) => (
                 <Link 
                   key={cat.id}
                   to={`/products/${cat.id}`} 
                   className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-brand-blue hover:bg-gray-50"
                 >
                   {language === 'hi' && cat.title_hi ? cat.title_hi : cat.title}
                 </Link>
              ))}
            </div>

            <Link to="/blog" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-brand-blue hover:bg-gray-50">{t('nav.blog')}</Link>
            <Link to="/contact" className="block px-3 py-2 rounded-md text-base font-medium text-white bg-brand-blue mt-4 text-center">{t('nav.contact')}</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;