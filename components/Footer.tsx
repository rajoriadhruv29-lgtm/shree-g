import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, FileText } from 'lucide-react';
import { useLanguage } from '../LanguageContext';
import { CATEGORIES } from '../data/products';

const Footer: React.FC = () => {
  const { t, language } = useLanguage();

  return (
    <footer className="bg-brand-blue text-white pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-brand-yellow">SHREE G HINGES</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              {t('footer.companyDesc')}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 border-b border-gray-600 pb-2 inline-block">{t('footer.quickLinks')}</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><Link to="/" className="hover:text-brand-yellow transition-colors">{t('nav.home')}</Link></li>
              <li><Link to="/about" className="hover:text-brand-yellow transition-colors">{t('nav.about')}</Link></li>
              <li><Link to="/products" className="hover:text-brand-yellow transition-colors">{t('nav.products')}</Link></li>
              <li><Link to="/blog" className="hover:text-brand-yellow transition-colors">{t('nav.blog')}</Link></li>
              <li><Link to="/contact" className="hover:text-brand-yellow transition-colors">{t('nav.contact')}</Link></li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-lg font-semibold mb-4 border-b border-gray-600 pb-2 inline-block">{t('footer.ourProducts')}</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              {CATEGORIES.map((cat) => (
                <li key={cat.id}>
                  <Link to={`/products/${cat.id}`} className="hover:text-brand-yellow transition-colors">
                    {language === 'hi' && cat.title_hi ? cat.title_hi : cat.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 border-b border-gray-600 pb-2 inline-block">{t('footer.getInTouch')}</h4>
            <ul className="space-y-4 text-sm text-gray-300">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-brand-yellow mt-0.5 flex-shrink-0" />
                <span>242/8, Kailod Hala, SDA Compound,<br />Lasudiya Mori, Dewas Naka,<br />INDORE, Madhya Pradesh, 452010</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone size={18} className="text-brand-yellow flex-shrink-0 mt-1" />
                <div className="flex flex-col">
                   <span>+91 93021 04100</span>
                   <span>+91 88398 03463</span>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-brand-yellow flex-shrink-0" />
                <span>info@shreeghinges.com</span>
              </li>
               <li className="flex items-center gap-3">
                <FileText size={18} className="text-brand-yellow flex-shrink-0" />
                <span>{t('footer.gst')}: 23ABVPR8500Q1ZT</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-10 pt-6 text-center text-xs text-gray-400">
          <p>&copy; {new Date().getFullYear()} Shree G Hinges. {t('footer.rights')}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;