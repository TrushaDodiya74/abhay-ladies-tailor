
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-cream-soft border-t border-peach-100 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-2 space-y-6">
            <div className="flex flex-col">
              <span className="font-serif text-3xl font-bold tracking-wider">ABHAY LADIES</span>
              <span className="text-sm uppercase tracking-[0.4em] font-sans text-peach-400">Tailor</span>
            </div>
            <p className="text-espresso/60 max-w-sm font-body leading-relaxed">
              Crafting elegance through precision stitching since 2006. We specialize in custom ladies 
              wear that combines tradition with contemporary style.
            </p>
          </div>

          <div className="space-y-6">
            <h4 className="font-sans font-bold text-xs uppercase tracking-widest text-espresso">Quick Links</h4>
            <ul className="space-y-3 font-sans text-sm text-espresso/60 uppercase tracking-wider">
              <li><a href="#home" className="hover:text-peach-400 transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-peach-400 transition-colors">About Us</a></li>
              <li><a href="#services" className="hover:text-peach-400 transition-colors">Services</a></li>
              <li><a href="#gallery" className="hover:text-peach-400 transition-colors">Gallery</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
