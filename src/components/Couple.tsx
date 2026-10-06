import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Heart } from 'lucide-react';
import { WEDDING_DATA } from '../data/weddingData';
import { Carousel } from './Carousel';

export const Couple: React.FC = () => {
  return (
    <section 
      id="couple" 
      className="py-24 px-4 sm:px-6 lg:px-8 bg-[#F8F0E3] relative overflow-hidden"
      aria-label="Bride and Groom Love Story"
    >
      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-[#B5965A] font-semibold mb-3">
            <Sparkles className="w-4 h-4 text-[#B5965A]" />
            <span>Two Souls, One Destiny</span>
            <Sparkles className="w-4 h-4 text-[#B5965A]" />
          </div>

          <h2 className="font-serif text-4xl sm:text-6xl font-bold text-[#6E1F2E] tracking-tight mb-4">
            The Bride & Groom
          </h2>

          <div className="h-0.5 w-24 bg-[#B5965A] mx-auto my-4" />

          <p className="font-sans text-base sm:text-lg text-[#291C1A]/80 font-light max-w-xl mx-auto">
            A journey of laughter, unconditional support, shared dreams, and timeless devotion.
          </p>
        </div>

        {/* Bride & Groom Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          
          {/* Groom Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-[#FFF9EF] border border-[#B5965A]/40 rounded-sm p-8 shadow-lg flex flex-col items-center text-center relative group"
          >
            <div className="w-36 h-36 md:w-44 md:h-44 rounded-full p-1 border-2 border-[#B5965A] overflow-hidden mb-6 shadow-md">
              <img 
                src="/images/couple-royal.jpg" 
                alt={WEDDING_DATA.couple.groomFull}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 object-top"
              />
            </div>
            <span className="text-xs uppercase tracking-[0.25em] text-[#B5965A] font-semibold mb-1">The Groom</span>
            <h3 className="font-serif text-3xl font-bold text-[#6E1F2E] mb-2">{WEDDING_DATA.couple.groomFull}</h3>
            <p className="text-xs italic text-[#291C1A]/70 mb-4">{WEDDING_DATA.parents.groomParents}</p>
            <p className="text-sm text-[#291C1A]/80 leading-relaxed font-light">
              "In Alia, I found my calm, my anchor, and my infinite joy. Every moment with her feels like coming home."
            </p>
          </motion.div>

          {/* Bride Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-[#FFF9EF] border border-[#B5965A]/40 rounded-sm p-8 shadow-lg flex flex-col items-center text-center relative group"
          >
            <div className="w-36 h-36 md:w-44 md:h-44 rounded-full p-1 border-2 border-[#B5965A] overflow-hidden mb-6 shadow-md">
              <img 
                src="/images/couple-sangeet.jpg" 
                alt={WEDDING_DATA.couple.brideFull}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 object-top"
              />
            </div>
            <span className="text-xs uppercase tracking-[0.25em] text-[#B5965A] font-semibold mb-1">The Bride</span>
            <h3 className="font-serif text-3xl font-bold text-[#6E1F2E] mb-2">{WEDDING_DATA.couple.brideFull}</h3>
            <p className="text-xs italic text-[#291C1A]/70 mb-4">{WEDDING_DATA.parents.brideParents}</p>
            <p className="text-sm text-[#291C1A]/80 leading-relaxed font-light">
              "Ranbir is my safe haven, my best friend, and my greatest strength. Building our life together is my favorite adventure."
            </p>
          </motion.div>

        </div>

        {/* Story Carousel */}
        <div className="mt-12">
          <div className="text-center mb-8">
            <h3 className="font-serif text-2xl md:text-3xl font-bold text-[#6E1F2E] inline-flex items-center gap-2">
              <Heart className="w-5 h-5 text-[#B5965A] fill-[#B5965A]" />
              <span>Our Love Story Chapters</span>
              <Heart className="w-5 h-5 text-[#B5965A] fill-[#B5965A]" />
            </h3>
          </div>
          <Carousel items={WEDDING_DATA.story} />
        </div>

      </div>
    </section>
  );
};
