import React from 'react';
import { motion } from 'framer-motion';
import { WEDDING_DATA } from '../data/weddingData';

export const Invitation: React.FC = () => {
  return (
    <section 
      id="invitation" 
      className="relative py-24 px-4 sm:px-6 lg:px-8 bg-[#F8F0E3] overflow-hidden"
      aria-label="Royal Invitation & Blessings"
    >
      {/* Background Indian Floral Pattern Decorative Overlay */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#6E1F2E_1px,transparent_1px)] [background-size:16px_16px]" />

      <div className="max-w-4xl mx-auto relative">
        {/* Main Luxury Invitation Card Frame */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="bg-[#FFF9EF] border-2 border-[#B5965A]/40 rounded-sm p-8 sm:p-12 md:p-16 shadow-xl relative text-center"
        >
          {/* Ornate Corner Accents */}
          <div className="absolute top-3 left-3 w-8 h-8 border-t-2 border-l-2 border-[#B5965A]" />
          <div className="absolute top-3 right-3 w-8 h-8 border-t-2 border-r-2 border-[#B5965A]" />
          <div className="absolute bottom-3 left-3 w-8 h-8 border-b-2 border-l-2 border-[#B5965A]" />
          <div className="absolute bottom-3 right-3 w-8 h-8 border-b-2 border-r-2 border-[#B5965A]" />

          {/* Ganesha Blessing Emblem */}
          <div className="flex flex-col items-center justify-center mb-8">
            <div className="relative w-28 h-28 md:w-36 md:h-36 mb-4">
              <div className="absolute inset-0 rounded-full bg-[#B5965A]/15 blur-lg animate-pulse" />
              <img 
                src="/images/ganesha.jpg" 
                alt="Lord Ganesha Motif"
                className="w-full h-full object-contain rounded-full border-2 border-[#B5965A]/50 p-1 shadow-md relative z-10"
              />
            </div>
            <p className="font-serif text-lg md:text-xl font-semibold text-[#6E1F2E] tracking-widest uppercase">
              ॥ श्री गणेशाय नमः ॥
            </p>
            <p className="text-xs tracking-widest text-[#B5965A] uppercase mt-1">
              Shree Ganeshaya Namah
            </p>
          </div>

          {/* Family Blessings Quote */}
          <p className="font-serif italic text-base md:text-lg text-[#291C1A]/80 max-w-2xl mx-auto leading-relaxed mb-10">
            {WEDDING_DATA.parents.blessingQuote}
          </p>

          {/* Family Names Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10 border-y border-[#B5965A]/30 py-8">
            <div className="space-y-1">
              <span className="text-xs uppercase tracking-widest text-[#B5965A] font-semibold">Groom's Side</span>
              <h3 className="font-serif text-xl md:text-2xl font-bold text-[#6E1F2E]">
                {WEDDING_DATA.parents.groomParents}
              </h3>
              <p className="text-sm text-[#291C1A]/70 italic">Cordially request your esteemed presence</p>
            </div>

            <div className="space-y-1">
              <span className="text-xs uppercase tracking-widest text-[#B5965A] font-semibold">Bride's Side</span>
              <h3 className="font-serif text-xl md:text-2xl font-bold text-[#6E1F2E]">
                {WEDDING_DATA.parents.brideParents}
              </h3>
              <p className="text-sm text-[#291C1A]/70 italic">Solicit the honour of your blessings</p>
            </div>
          </div>

          {/* Formal Invitation Text */}
          <p className="text-xs sm:text-sm uppercase tracking-[0.3em] font-medium text-[#B5965A] mb-4">
            At the wedding ceremony of their beloved children
          </p>

          {/* Couple Names Highlight */}
          <div className="my-6">
            <h2 className="font-serif text-4xl sm:text-6xl md:text-7xl font-bold text-[#6E1F2E] tracking-tight">
              {WEDDING_DATA.couple.groom}
            </h2>
            <span className="font-serif italic text-2xl sm:text-3xl text-[#B5965A] my-2 block">
              &
            </span>
            <h2 className="font-serif text-4xl sm:text-6xl md:text-7xl font-bold text-[#6E1F2E] tracking-tight">
              {WEDDING_DATA.couple.bride}
            </h2>
          </div>

          {/* Date & Destination Banner */}
          <div className="mt-10 inline-block bg-[#6E1F2E] text-[#FFF9EF] px-8 py-4 rounded-sm border border-[#B5965A] shadow-md">
            <p className="font-serif text-lg md:text-xl font-semibold tracking-wider">
              {WEDDING_DATA.couple.dateText}
            </p>
            <p className="text-xs md:text-sm tracking-widest uppercase text-[#D4AF37] mt-1 font-light">
              {WEDDING_DATA.couple.venueShort}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
