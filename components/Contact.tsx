
import React from 'react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          <div className="space-y-12">
            <div className="space-y-4">
              <h2 className="text-4xl font-serif">Get In Touch</h2>
              <p className="text-lg text-espresso/70 leading-relaxed font-body">
                Ready to get your perfect outfit stitched? Visit our shop or contact us 
                directly for appointments and inquiries.
              </p>
            </div>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="bg-peach-100 p-3 rounded-full text-peach-400">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-sans font-bold text-xs uppercase tracking-widest text-espresso/50">Shop Address</h4>
                  <p className="text-lg font-serif">Near Juna Uatara Angalvali, Kevadra</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-peach-100 p-3 rounded-full text-peach-400">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-sans font-bold text-xs uppercase tracking-widest text-espresso/50">Working Hours</h4>
                  <p className="text-lg font-serif">Mon - Sat: 08:00 AM - 08:00 PM<br/>Sunday: Closed Still 12:00 PM</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-peach-100 p-3 rounded-full text-peach-400">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-sans font-bold text-xs uppercase tracking-widest text-espresso/50">Phone Number</h4>
                  <p className="text-lg font-serif">+91 9879687515</p>
                </div>
              </div>
            </div>

            <div className="pt-4">
              <a
                href="https://wa.me/9879687515"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-[#25D366] text-white px-8 py-4 rounded-full font-sans font-bold uppercase tracking-widest hover:brightness-110 transition-all shadow-lg"
              >
                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.417-.003 6.557-5.338 11.892-11.893 11.892-1.997-.001-3.951-.5-5.688-1.448l-6.305 1.652zm6.599-3.835c1.405.836 2.982 1.277 4.583 1.278 5.003 0 9.071-4.068 9.073-9.074.001-2.427-.943-4.709-2.656-6.422-1.713-1.712-3.996-2.655-6.422-2.656-5.004 0-9.072 4.068-9.074 9.074-.001 1.599.418 3.159 1.211 4.545l-.46 1.683 1.74-.456z"/>
                </svg>
                WhatsApp Us
              </a>
            </div>
          </div>

          <div className="relative h-[500px] rounded-xl overflow-hidden shadow-2xl">

          {/* Background Image */}
            <img 
              src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=1200"
              className="absolute inset-0 w-full h-full object-cover"
              alt="Boutique location"
            />

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>

            {/* Content Card */}
            <div className="absolute inset-0 flex items-center justify-center p-8">
              <div className="bg-white/10 backdrop-blur-md border border-white/20 p-10 rounded-2xl text-center text-white max-w-md shadow-xl">
                
                <h3 className="font-serif text-3xl mb-4 tracking-wide">
                  Visit Our Boutique
                </h3>

                <p className="text-white/80 mb-8 font-body leading-relaxed">
                  Experience personalized tailoring and premium stitching services 
                  crafted just for you.
                </p>

                <a 
                  href="https://maps.app.goo.gl/qKFHdiDutNYdNuUS7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-peach-400 text-black px-8 py-3 rounded-full font-semibold tracking-wider hover:scale-105 transition-all duration-300 shadow-lg"
                >
                  Open in Google Maps
                </a>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
