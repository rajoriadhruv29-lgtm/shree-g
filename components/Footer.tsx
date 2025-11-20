import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, FileText } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-blue text-white pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-brand-yellow">SHREE HINGES</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Specialized manufacturer of M.S. Hinges, focused on providing high-quality products. Established as a trusted name in the hinge manufacturing sector.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 border-b border-gray-600 pb-2 inline-block">Quick Links</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><Link to="/" className="hover:text-brand-yellow transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-brand-yellow transition-colors">About Us</Link></li>
              <li><Link to="/products" className="hover:text-brand-yellow transition-colors">Product Range</Link></li>
              <li><Link to="/blog" className="hover:text-brand-yellow transition-colors">Blog</Link></li>
              <li><Link to="/contact" className="hover:text-brand-yellow transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-lg font-semibold mb-4 border-b border-gray-600 pb-2 inline-block">Our Products</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><Link to="/products/rivet-hinges" className="hover:text-brand-yellow transition-colors">Rivet Hinges</Link></li>
              <li><Link to="/products/bolt-hinges" className="hover:text-brand-yellow transition-colors">Bolt Hinges</Link></li>
              <li><Link to="/products/door-hinges" className="hover:text-brand-yellow transition-colors">Door Hinges</Link></li>
              <li><Link to="/products/t-hinges" className="hover:text-brand-yellow transition-colors">T-Hinges</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 border-b border-gray-600 pb-2 inline-block">Get in Touch</h4>
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
                <span>info@shreehinges.com</span>
              </li>
               <li className="flex items-center gap-3">
                <FileText size={18} className="text-brand-yellow flex-shrink-0" />
                <span>GST: 23ABVPR8500Q1ZT</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-10 pt-6 text-center text-xs text-gray-400">
          <p>&copy; {new Date().getFullYear()} Shree Hinges. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;