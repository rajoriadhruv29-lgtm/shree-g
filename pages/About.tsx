import React, { useEffect } from 'react';
import { useLanguage } from '../LanguageContext';

const About: React.FC = () => {
  const { t } = useLanguage();

  useEffect(() => {
    document.title = "About Us | Shree G Hinges";
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-brand-blue mb-4">{t('about.title')}</h1>
          <p className="text-gray-600 max-w-3xl mx-auto">
            {t('about.subtitle')}
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-8 lg:p-16 flex flex-col justify-center">
              <h3 className="text-2xl font-bold text-brand-blue mb-6">{t('about.whoWeAre')}</h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                {t('about.whoWeAreDesc1')}
              </p>
              <p className="text-gray-700 mb-6 leading-relaxed">
                {t('about.whoWeAreDesc2')}
              </p>
              <div className="bg-brand-yellow/10 p-6 rounded-lg border-l-4 border-brand-yellow">
                <h4 className="font-bold text-brand-blue mb-2">{t('about.missionTitle')}</h4>
                <p className="text-sm text-gray-700">
                  {t('about.missionDesc')}
                </p>
              </div>
            </div>
            <div className="bg-gray-200 h-64 lg:h-auto relative">
              <img 
                src="https://images.unsplash.com/photo-1600607686527-6fb886090705?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                alt="Hinge on a door" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        <div className="mt-16">
          <h2 className="text-2xl font-bold text-brand-blue mb-8 text-center">{t('about.whyChooseUs')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow border-t-4 border-brand-yellow">
              <h3 className="font-bold text-lg mb-2">{t('about.expTitle')}</h3>
              <p className="text-gray-600 text-sm">{t('about.expDesc')}</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow border-t-4 border-brand-blue">
              <h3 className="font-bold text-lg mb-2">{t('about.innTitle')}</h3>
              <p className="text-gray-600 text-sm">{t('about.innDesc')}</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow border-t-4 border-brand-yellow">
              <h3 className="font-bold text-lg mb-2">{t('about.relTitle')}</h3>
              <p className="text-gray-600 text-sm">{t('about.relDesc')}</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default About;