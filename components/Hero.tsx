
import React from 'react';

export const Hero: React.FC = () => {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.getElementById('imprint');
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
      window.history.pushState(null, '', '#imprint');
    }
  };

  return (
    <article id="about" className="wrapper style1">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">
          <div className="w-full md:w-5/12">
            <div className="relative group">
              {/* Decorative gradient glow */}
              <div className="absolute -inset-1 bg-gradient-to-r from-brand-blue to-primary-cyan rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
              {/* New image: Professional workspace showing app design on a phone, no faces */}
              <img 
                src="https://images.unsplash.com/photo-1551650975-87deedd944c3?q=80&w=1974&auto=format&fit=crop" 
                alt="Modern App Design Mockup" 
                className="relative rounded-2xl shadow-2xl w-full object-cover aspect-square md:aspect-[4/5] bg-gray-100"
              />
            </div>
          </div>
          <div className="w-full md:w-7/12 text-center md:text-left">
            <header className="mb-8">
              <h1 className="text-5xl lg:text-7xl font-extrabold text-deep-navy leading-tight tracking-tighter mb-6">
                Hi. We are <span className="text-brand-blue">CREO,MAR Design</span>.
              </h1>
            </header>
            <p className="text-xl md:text-2xl text-gray-500 font-medium leading-relaxed mb-10">
              We are a <span className="text-deep-navy font-bold">digital design studio</span> focused on creating seamless mobile experiences and powerful brand identities. 
              Our approach merges high-end aesthetics with technical precision.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start">
              <a 
                href="#imprint" 
                onClick={handleScroll}
                className="scrolly-btn w-full sm:w-auto text-center cursor-pointer"
              >
                Learn about what we do
              </a>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};
