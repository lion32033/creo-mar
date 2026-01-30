
import React from 'react';

export const About: React.FC = () => {
  return (
    <section id="about" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 scroll-mt-28">
      <div className="bg-brand-gradient rounded-[2rem] p-8 md:p-16 shadow-2xl shadow-deep-navy/20 relative overflow-hidden group">
        <div className="absolute -right-20 -top-20 w-64 h-64 bg-primary-cyan opacity-10 rounded-full blur-3xl group-hover:opacity-20 transition-opacity"></div>
        <div className="absolute -left-20 -bottom-20 w-80 h-80 bg-light-blue opacity-10 rounded-full blur-3xl group-hover:opacity-20 transition-opacity"></div>
        
        <div className="relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold text-primary-cyan mb-8 border-l-8 border-primary-cyan pl-6 tracking-tight">
            About Creo-Mar
          </h2>
          <p className="text-lg md:text-2xl text-white leading-relaxed font-light">
            Our design agency specializes in the intersection of aesthetics and function. 
            We develop <span className="font-semibold text-primary-cyan">graphic design, branding strategies, modern websites</span> and <span className="font-semibold text-primary-cyan">mobile applications</span> with a focus on user experience (UX) and technical precision.
          </p>
        </div>
      </div>
    </section>
  );
};
