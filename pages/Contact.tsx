import React from 'react';
import { Phone, Mail, MapPin, Clock, FileText } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

const Contact: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-brand-blue mb-4">{t('contact.title')}</h1>
          <p className="text-gray-600">{t('contact.subtitle')}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Contact Info Card */}
          <div className="lg:col-span-1 bg-brand-blue text-white rounded-xl p-8 shadow-lg h-fit">
            <h3 className="text-2xl font-bold mb-6 text-brand-yellow">{t('contact.infoTitle')}</h3>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <MapPin className="mt-1 text-brand-yellow" />
                <div>
                  <p className="font-semibold">{t('footer.factoryAddress')}</p>
                  <p className="text-gray-300 text-sm mt-1">
                    242/8, Kailod Hala, SDA Compound,<br />
                    Lasudiya Mori, Dewas Naka,<br />
                    INDORE, Madhya Pradesh, 452010
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Phone className="text-brand-yellow mt-1" />
                <div>
                  <p className="font-semibold">{t('footer.phone')}</p>
                  <p className="text-gray-300 text-sm mt-1">+91 93021 04100</p>
                  <p className="text-gray-300 text-sm">+91 88398 03463</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <Mail className="text-brand-yellow" />
                <div>
                  <p className="font-semibold">{t('footer.email')}</p>
                  <p className="text-gray-300 text-sm mt-1">sales@shreehinges.com</p>
                </div>
              </div>
              
               <div className="flex items-center gap-4">
                <FileText className="text-brand-yellow" />
                <div>
                  <p className="font-semibold">{t('footer.gst')}</p>
                  <p className="text-gray-300 text-sm mt-1">23ABVPR8500Q1ZT</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Clock className="mt-1 text-brand-yellow" />
                <div>
                  <p className="font-semibold">{t('footer.workingHours')}</p>
                  <p className="text-gray-300 text-sm mt-1 whitespace-pre-line">
                    {t('footer.workingHoursVal')}
                    <br />
                    {t('footer.sundayClosed')}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2 bg-white rounded-xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">{t('contact.formTitle')}</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">{t('contact.nameLabel')}</label>
                  <input type="text" id="name" className="w-full rounded-md border-gray-300 border p-3 focus:border-brand-blue focus:ring-brand-blue outline-none transition-colors" placeholder={t('contact.placeholderName')} />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">{t('contact.emailLabel')}</label>
                  <input type="email" id="email" className="w-full rounded-md border-gray-300 border p-3 focus:border-brand-blue focus:ring-brand-blue outline-none transition-colors" placeholder="john@example.com" />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">{t('contact.subjectLabel')}</label>
                <input type="text" id="subject" className="w-full rounded-md border-gray-300 border p-3 focus:border-brand-blue focus:ring-brand-blue outline-none transition-colors" placeholder={t('contact.placeholderSubject')} />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">{t('contact.messageLabel')}</label>
                <textarea id="message" rows={4} className="w-full rounded-md border-gray-300 border p-3 focus:border-brand-blue focus:ring-brand-blue outline-none transition-colors" placeholder={t('contact.placeholderMessage')}></textarea>
              </div>

              <button type="button" className="bg-brand-yellow text-brand-blue font-bold py-3 px-8 rounded-md hover:bg-yellow-400 transition-colors shadow-md w-full md:w-auto">
                {t('contact.sendButton')}
              </button>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;