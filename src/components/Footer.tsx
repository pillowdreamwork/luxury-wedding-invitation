import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUp, Heart, Sparkles } from 'lucide-react';
import { WEDDING_DATA } from '../data/weddingData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer 
      className="bg-[#FFF9EF] text-[#291C1A] border-t-2 border-[#B5965A]/40 pt-16 pb-12 px-4 relative overflow-hidden text-center"
      aria-label="Closing Footer"
    >
      <div className="max-w-4xl mx-auto relative z-10">
        
        {/* Monogram Seal */}
        <div className="w-16 h-16 rounded-full bg-[#6E1F2E] border-2 border-[#B5965A] text-[#D4AF37] font-display font-bold text-xl flex items-center justify-center mx-auto mb-6 shadow-md">
          R & A
        </div>

        {/* Heading */}
        <h3 className="font-serif text-3xl sm:text-4xl font-bold text-[#6E1F2E] mb-2">
          {WEDDING_DATA.couple.heading}
        </h3>
        
        <p className="font-sans text-sm uppercase tracking-[0.25em] text-[#B5965A] font-semibold mb-6">
          {WEDDING_DATA.couple.dateText} • {WEDDING_DATA.couple.venueShort}
        </p>

        {/* Gratitude Message */}
        <p className="font-serif italic text-base text-[#291C1A]/80 max-w-xl mx-auto leading-relaxed mb-8">
          "We cannot wait to celebrate this glorious milestone of love, joy, and togetherness with each and every one of you in Udaipur."
        </p>

        {/* Decorative Divider */}
        <div className="flex items-center justify-center gap-3 my-8">
          <div className="h-0.5 w-16 bg-[#B5965A]/40" />
          <Sparkles className="w-4 h-4 text-[#B5965A]" />
          <div className="h-0.5 w-16 bg-[#B5965A]/40" />
        </div>

        {/* Quick Nav Links */}
        <nav className="flex flex-wrap justify-center gap-6 text-xs uppercase tracking-widest text-[#6E1F2E] font-semibold mb-10">
          <a href="#invitation" className="hover:text-[#B5965A] transition-colors">Invitation</a>
          <a href="#date-reveal" className="hover:text-[#B5965A] transition-colors">Date Unseal</a>
          <a href="#functions" className="hover:text-[#B5965A] transition-colors">Celebrations</a>
          <a href="#couple" className="hover:text-[#B5965A] transition-colors">Love Story</a>
          <a href="#video" className="hover:text-[#B5965A] transition-colors">Pre-Wedding Film</a>
          <a href="#rsvp" className="hover:text-[#B5965A] transition-colors">RSVP</a>
          <a href="#wishes" className="hover:text-[#B5965A] transition-colors">Wishes Wall</a>
        </nav>

        {/* Back to Top */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={scrollToTop}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#B5965A] bg-[#F8F0E3] text-[#6E1F2E] text-xs font-semibold uppercase tracking-wider shadow-sm hover:bg-[#6E1F2E] hover:text-[#FFF9EF] transition-colors mb-8"
        >
          <ArrowUp className="w-4 h-4" />
          <span>Back To Top</span>
        </motion.button>

        {/* Copyright */}
        <p className="text-[11px] text-[#291C1A]/60 flex items-center justify-center gap-1">
          <span>Crafted with</span>
          <Heart className="w-3 h-3 text-[#6E1F2E] fill-[#6E1F2E]" />
          <span>for Ranbir & Alia's Royal Wedding • 2027</span>
        </p>

      </div>
    </footer>
  );
};
