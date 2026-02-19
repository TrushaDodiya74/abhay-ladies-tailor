
import React from 'react';
import a1 from '../src/assets/a1.jpg';
import a2 from '../src/assets/a2.jpg';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-cream-soft">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1 relative">
            <div className="grid grid-cols-2 gap-4">
              <img 
                src={a1}
                className="rounded-lg shadow-md mt-8 h-64 w-full object-cover"
              />
              <img 
                src={a2}
                className="rounded-lg shadow-md h-64 w-full object-cover"
              />
            </div>
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full border border-peach-200 rounded-full scale-110 opacity-50"></div>
          </div>
          
          <div className="order-1 md:order-2 space-y-6">
            <div className="space-y-2">
              <span className="text-peach-400 font-sans text-xs tracking-[0.3em] uppercase font-bold">Our Story</span>
              <h2 className="text-4xl font-serif">Excellence in Custom Stitching</h2>
            </div>
            
            <p className="text-lg leading-relaxed text-espresso/90">
              Abhay Ladies Tailor specializes in custom stitching for women. With years of experience in 
              blouse stitching, suits, and alteration services, we ensure precise measurements, 
              elegant finishing, and customer satisfaction.
            </p>
            
            <p className="text-lg leading-relaxed text-espresso/90">
              Our goal is to enhance your confidence through perfectly stitched outfits. Every piece we create 
              is a testament to our dedication to traditional craftsmanship combined with modern aesthetics.
            </p>
            
            <div className="pt-4 grid grid-cols-2 gap-8">
              <div>
                <span className="block text-3xl font-serif text-peach-400">10k+</span>
                <span className="text-sm font-sans uppercase tracking-widest text-espresso/60">Happy Clients</span>
              </div>
              <div>
                <span className="block text-3xl font-serif text-peach-400">19+</span>
                <span className="text-sm font-sans uppercase tracking-widest text-espresso/60">Years Exp</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
