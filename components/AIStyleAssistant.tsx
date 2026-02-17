
import React, { useState } from 'react';
import { GoogleGenAI } from "@google/genai";
import.meta.env.VITE_API_KEY;

const AIStyleAssistant: React.FC = () => {
  const [prompt, setPrompt] = useState('');
  const [response, setResponse] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const getStyleAdvice = async () => {
    if (!prompt.trim()) return;
    setIsLoading(true);
    try {
      const ai = new GoogleGenAI({ apiKey: import.meta.env.VITE_API_KEY });
      const result = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: `You are an expert ladies' fashion consultant at 'Abhay Ladies Tailor'. A customer asks: "${prompt}". Provide a brief, elegant, and professional style advice (max 100 words) focusing on stitching, fabric choice, and modern trends. Use a polite and helpful tone.`,
        config: {
          temperature: 0.7,
        }
      });
      setResponse(result.text || "Sorry, I couldn't generate advice right now. Please try again.");
    } catch (error) {
      console.error(error);
      setResponse("Our stylist is currently busy. Please contact us via WhatsApp for direct consultation!");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="style-assistant" className="py-24 bg-espresso text-cream relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute top-10 left-10 w-64 h-64 bg-peach-300 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-peach-200 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <span className="text-peach-200 font-sans text-xs tracking-[0.3em] uppercase font-bold mb-4 block">Smart Feature</span>
        <h2 className="text-4xl font-serif mb-6">AI Style Consultant</h2>
        <p className="text-cream/70 mb-10 font-body">
          Not sure what design suits your fabric? Ask our AI assistant for professional styling tips 
          tailored to current trends.
        </p>

        <div className="bg-white/10 p-6 rounded-lg backdrop-blur-md border border-white/20">
          <div className="flex flex-col md:flex-row gap-4">
            <input
              type="text"
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder="e.g. Which blouse neck design is best for a heavy silk saree?"
              className="flex-1 bg-white/5 border border-white/20 rounded-md px-4 py-3 text-cream placeholder:text-cream/30 focus:outline-none focus:ring-2 focus:ring-peach-200"
            />
            <button
              onClick={getStyleAdvice}
              disabled={isLoading}
              className="bg-peach-accent text-espresso px-8 py-3 rounded-md font-sans font-bold uppercase tracking-widest hover:bg-peach-200 transition-all disabled:opacity-50"
            >
              {isLoading ? 'Consulting...' : 'Get Advice'}
            </button>
          </div>

          {response && (
            <div className="mt-8 p-6 bg-white/5 border-l-4 border-peach-accent text-left animate-fadeIn">
              <p className="font-serif italic text-lg leading-relaxed">{response}</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default AIStyleAssistant;
