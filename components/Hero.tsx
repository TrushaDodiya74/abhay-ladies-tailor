
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-peach-100 opacity-30 -z-10 rounded-l-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-8 animate-fadeInLeft">
          <div className="space-y-2">
            <h2 className="text-peach-400 font-sans text-sm tracking-[0.4em] uppercase font-bold">Boutique Tailoring</h2>
            <h1 className="text-5xl md:text-7xl font-serif leading-tight">
              Abhay Ladies Tailor
              <span className="block italic text-peach-300 mt-2 text-4xl md:text-5xl">Perfect Fit. Elegant Style.</span>
            </h1>
          </div>
          
          <p className="text-lg text-espresso/80 max-w-lg leading-relaxed font-body">
            Welcome to Abhay Ladies Tailor, your trusted destination for high-quality ladies stitching services. 
            We provide perfect fitting, modern designs, and affordable tailoring solutions for every occasion.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <a
              href="#contact"
              className="bg-peach-accent text-espresso px-8 py-4 rounded-sm font-sans text-sm uppercase tracking-widest font-bold hover:bg-peach-200 transition-all shadow-md transform hover:-translate-y-1"
            >
              Book Now
            </a>
            <a
              href="#services"
              className="border border-peach-300 text-espresso px-8 py-4 rounded-sm font-sans text-sm uppercase tracking-widest font-bold hover:bg-peach-100 transition-all transform hover:-translate-y-1"
            >
              View Services
            </a>
          </div>
        </div>
        
        <div className="relative animate-fadeInRight hidden md:block">
          <div className="aspect-[4/5] rounded-t-full overflow-hidden shadow-2xl border-8 border-cream">
            <img 
              src="images\home.jpg"
              alt="Authentic Ladies Tailoring Work"
              className="w-full h-full object-cover"
            />
          </div>
          {/* Decorative floating elements */}
          <div className="absolute -bottom-6 -left-6 bg-cream p-6 shadow-xl rounded-sm border border-peach-100">
            <p className="font-serif text-2xl italic">Trusted Stitching</p>
            <p className="text-xs font-sans uppercase tracking-widest text-peach-400 mt-1">Since 2006</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
