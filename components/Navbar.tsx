
import React from 'react';

export const Navbar: React.FC = () => {
  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Imprint', href: '#imprint' },
    { name: 'Private Policy', href: '#private-policy' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
      // Update URL hash without jumping
      window.history.pushState(null, '', href);
    }
  };

  return (
    <nav id="nav" className="bg-white/95 backdrop-blur-md sticky top-0 z-50 border-b border-gray-100 py-6">
      <div className="max-w-7xl mx-auto px-4 flex flex-col items-center gap-4">
        <div className="text-2xl md:text-3xl font-black text-deep-navy uppercase tracking-[0.2em]">
          CREO,MAR <span className="text-brand-blue">Design</span>
        </div>
        <ul className="flex justify-center items-center space-x-6 md:space-x-12">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                onClick={(e) => handleScroll(e, link.href)}
                className="text-gray-500 hover:text-brand-blue transition-colors duration-200 font-bold text-xs md:text-sm uppercase tracking-widest"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};
