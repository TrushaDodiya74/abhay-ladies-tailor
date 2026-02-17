
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Gallery from './components/Gallery';
import Reviews from './components/Reviews';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AIStyleAssistant from './components/AIStyleAssistant';

const App: React.FC = () => {
  return (
    <div className="font-body text-espresso selection:bg-peach-200">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Gallery />
        <AIStyleAssistant />
        <Reviews />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
