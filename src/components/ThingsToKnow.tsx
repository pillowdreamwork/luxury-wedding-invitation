import React from 'react';
import { motion } from 'framer-motion';
import { Plane, ThermometerSun, PhoneCall, Gift, Info, Sparkles } from 'lucide-react';
import { WEDDING_DATA } from '../data/weddingData';

export const ThingsToKnow: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Plane': return <Plane className="w-6 h-6 text-[#6E1F2E]" />;
      case 'ThermometerSun': return <ThermometerSun className="w-6 h-6 text-[#6E1F2E]" />;
      case 'PhoneCall': return <PhoneCall className="w-6 h-6 text-[#6E1F2E]" />;
      case 'Gift': return <Gift className="w-6 h-6 text-[#6E1F2E]" />;
      default: return <Info className="w-6 h-6 text-[#6E1F2E]" />;
    }
  };

  return (
    <section 
      id="things-to-know" 
      className="py-24 px-4 sm:px-6 lg:px-8 bg-[#FFF9EF] relative overflow-hidden"
      aria-label="Things to Know & Travel Information"
    >
      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-[#B5965A] font-semibold mb-3">
            <Sparkles className="w-4 h-4 text-[#B5965A]" />
            <span>Essential Details</span>
            <Sparkles className="w-4 h-4 text-[#B5965A]" />
          </div>

          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-[#6E1F2E] tracking-tight mb-4">
            Things To Know
          </h2>

          <div className="h-0.5 w-24 bg-[#B5965A] mx-auto my-4" />

          <p className="font-sans text-base sm:text-lg text-[#291C1A]/80 font-light max-w-xl mx-auto">
            Everything you need to plan your trip to Udaipur for our royal celebration.
          </p>
        </div>

        {/* Info Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {WEDDING_DATA.thingsToKnow.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="bg-[#F8F0E3] border border-[#B5965A]/40 rounded-sm p-8 shadow-md hover:shadow-xl hover:border-[#B5965A] transition-all flex items-start gap-6 group"
            >
              <div className="p-3.5 rounded-full bg-[#FFF9EF] border border-[#B5965A]/50 shadow-sm shrink-0 group-hover:scale-110 transition-transform">
                {getIcon(item.icon)}
              </div>

              <div>
                <span className="text-xs uppercase tracking-widest text-[#B5965A] font-semibold block mb-1">
                  {item.subtitle}
                </span>
                <h3 className="font-serif text-2xl font-bold text-[#6E1F2E] mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-[#291C1A]/80 leading-relaxed font-light">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
