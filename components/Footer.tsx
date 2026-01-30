
import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-gray-100 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0">
          <div className="text-center md:text-left">
            <a href="#" className="text-2xl font-black text-deep-navy tracking-tighter hover:text-brand-blue transition-colors">
              CREO-MAR
            </a>
            <p className="mt-2 text-gray-400 text-sm font-medium">Branding & Apps Development</p>
          </div>
          
          <nav className="flex flex-wrap justify-center gap-x-8 gap-y-4">
            <a href="#about" className="text-gray-400 hover:text-brand-blue text-sm font-semibold transition-colors uppercase tracking-wider">About Us</a>
            <a href="#kontakt" className="text-gray-400 hover:text-brand-blue text-sm font-semibold transition-colors uppercase tracking-wider">Contact</a>
            <a href="#impressum" className="text-gray-400 hover:text-brand-blue text-sm font-semibold transition-colors uppercase tracking-wider">Legal Notice</a>
            <a href="#datenschutz" className="text-gray-400 hover:text-brand-blue text-sm font-semibold transition-colors uppercase tracking-wider">Privacy</a>
          </nav>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-50 text-center">
          <p className="text-gray-400 text-xs font-bold tracking-widest uppercase">
            &copy; {new Date().getFullYear()} Creo-Mar Branding & Apps Development. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
