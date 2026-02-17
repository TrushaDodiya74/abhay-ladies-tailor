
import React from 'react';
import { Service } from '../types';

const services: Service[] = [
  {
    id: '1',
    title: 'Designer Blouse Stitching',
    description: 'Custom back designs, padding, and exquisite embroidery for your special sarees.',
    icon: '✂️'
  },
  {
    id: '2',
    title: 'Salwar Suit Stitching',
    description: 'Perfectly tailored Anarkalis, Palazzos, and Punjabi suits for daily and festive wear.',
    icon: '👗'
  },
  {
    id: '4',
    title: 'Kurti Stitching',
    description: 'Modern and comfort-focused kurti designs for college, office, and casual outings.',
    icon: '🧥'
  },
  {
    id: '5',
    title: 'Dress Alteration',
    description: 'Resizing and fitting adjustments to make your existing clothes fit like a dream.',
    icon: '🧵'
  },
  {
    id: '6',
    title: 'Custom Design Orders',
    description: 'Have a specific design in mind? We bring your fashion sketches to life.',
    icon: '🎨'
  },
  {
  id: '7',
  title: 'Saree Fall & Pico',
  description: 'Professional saree fall stitching and pico finishing for a clean, elegant, and long-lasting drape.',
  icon: '🪡'
  }
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <span className="text-peach-400 font-sans text-xs tracking-[0.3em] uppercase font-bold">What We Offer</span>
          <h2 className="text-4xl font-serif">Tailoring Services</h2>
          <div className="w-24 h-px bg-peach-300 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div 
              key={service.id} 
              className="p-8 bg-cream border border-peach-100 rounded-sm hover:shadow-xl hover:-translate-y-1 transition-all group"
            >
              <div className="text-4xl mb-6 group-hover:scale-110 transition-transform inline-block">
                {service.icon}
              </div>
              <h3 className="text-xl font-serif mb-3">{service.title}</h3>
              <p className="text-espresso/70 leading-relaxed font-body">
                {service.description}
              </p>
              <div className="mt-6 pt-6 border-t border-peach-100 flex items-center text-peach-400 font-sans text-xs uppercase tracking-widest font-bold">
                Book Now
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
