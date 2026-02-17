
import React, { useState } from 'react';

const galleryItems = [
  { id: 1, title: 'Royal Bridal Blouse Design', category: 'Blouse', url: '/images/img1.JPG' },
  { id: 2, title: 'Contemporary Designer Sleeve', category: 'Sleeve', url: '/images/img3.JPG' },
  { id: 3, title: 'Office Wear Straight Kurti', category: 'Kurti', url: '/images/img4.JPG' },
  { id: 4, title: 'Designer Front Neck Detail', category: 'Blouse', url: '/images/img6.JPG' },
  { id: 5, title: 'Designer Frill Sleeve Style', category: 'Sleeve', url: '/images/img7.JPG' },
  { id: 6, title: 'Elegant Floral Kurti Stitching', category: 'Kurti', url: '/images/img5.JPG' },
];

const Gallery: React.FC = () => {
  const [filter, setFilter] = useState('All');
  const categories = ['All', 'Blouse', 'Sleeve', 'Kurti'];

  const filteredItems = filter === 'All' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === filter);

  return (
    <section id="gallery" className="py-24 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-12">
          <span className="text-peach-400 font-sans text-xs tracking-[0.3em] uppercase font-bold">Portfolio</span>
          <h2 className="text-4xl font-serif">Real Customer Work</h2>
          <p className="text-espresso/60 font-body max-w-xl mx-auto">
            Take a look at some of the custom designs we've recently stitched for our lovely clients.
          </p>
        </div>

        <div className="flex justify-center flex-wrap gap-4 mb-12">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2 font-sans text-xs uppercase tracking-widest transition-all ${filter === cat ? 'bg-peach-accent text-espresso shadow-md' : 'bg-transparent text-espresso/60 hover:text-peach-400'}`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map(item => (
            <div key={item.id} className="relative overflow-hidden group aspect-square rounded-sm shadow-sm border border-peach-100">
              <img 
                src={item.url} 
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-espresso/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-6 text-center">
                <div className="text-cream space-y-2 transform translate-y-4 group-hover:translate-y-0 transition-transform">
                  <p className="text-xs uppercase tracking-widest font-sans font-bold">{item.category}</p>
                  <p className="text-xl font-serif">{item.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
