import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';
import { Calendar, Sparkles, Lock, Unlock } from 'lucide-react';
import { WEDDING_DATA } from '../data/weddingData';

export const DateReveal: React.FC = () => {
  const [isRevealed, setIsRevealed] = useState<boolean>(false);

  const handleReveal = () => {
    if (!isRevealed) {
      setIsRevealed(true);
      // Trigger golden confetti burst
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#B5965A', '#D4AF37', '#6E1F2E', '#F3E5AB']
        });
      } catch {
        // Fallback silently if confetti library fails
      }
    }
  };

  return (
    <section 
      id="date-reveal"
      className="py-20 px-4 bg-[#FFF9EF] border-y border-[#B5965A]/30 relative overflow-hidden"
      aria-label="Interactive Reveal the Date"
    >
      <div className="max-w-3xl mx-auto text-center relative z-10">
        <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#B5965A] font-semibold mb-3">
          <Sparkles className="w-4 h-4" />
          <span>Save The Royal Date</span>
          <Sparkles className="w-4 h-4" />
        </div>

        <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#6E1F2E] mb-4">
          A Date Written in the Stars
        </h2>
        <p className="text-sm sm:text-base text-[#291C1A]/75 max-w-lg mx-auto mb-10">
          Tap the royal wax seal below to unseal our official wedding date card.
        </p>

        {/* Envelope Container */}
        <div className="relative max-w-lg mx-auto aspect-[4/3] bg-[#6E1F2E] rounded-lg shadow-2xl border-2 border-[#B5965A] p-6 flex flex-col justify-center items-center overflow-hidden">
          
          {/* Subtle Golden Damask Pattern overlay */}
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#D4AF37_1px,transparent_1px)] [background-size:12px_12px] pointer-events-none" />

          <AnimatePresence mode="wait">
            {!isRevealed ? (
              /* Sealed Royal Envelope State */
              <motion.div 
                key="sealed"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9, rotateY: 90 }}
                transition={{ duration: 0.5 }}
                className="relative z-10 flex flex-col items-center justify-center cursor-pointer group"
                onClick={handleReveal}
              >
                {/* Monogram Royal Wax Seal */}
                <motion.div 
                  whileHover={{ scale: 1.08 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-24 h-24 md:w-28 md:h-28 rounded-full bg-gradient-to-tr from-[#B5965A] via-[#D4AF37] to-[#F3E5AB] p-1 shadow-2xl flex items-center justify-center border-4 border-[#6E1F2E]"
                >
                  <div className="w-full h-full rounded-full bg-[#6E1F2E] flex flex-col items-center justify-center p-2 text-center border border-[#D4AF37]/50">
                    <span className="font-display text-lg md:text-xl text-[#D4AF37] font-bold">R & A</span>
                    <span className="text-[10px] tracking-widest text-[#FFF9EF] uppercase font-light">2027</span>
                  </div>
                </motion.div>

                <div className="mt-6 flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#B5965A] text-[#FFF9EF] text-xs md:text-sm font-semibold tracking-wider uppercase shadow-lg group-hover:bg-[#D4AF37] transition-colors">
                  <Lock className="w-4 h-4 text-[#FFF9EF]" />
                  <span>Tap to Unseal Invitation</span>
                </div>
              </motion.div>
            ) : (
              /* Revealed Gold Embossed Date Card */
              <motion.div 
                key="revealed"
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.6, type: "spring" }}
                className="w-full h-full bg-[#FFF9EF] rounded-md p-6 border-2 border-[#B5965A] flex flex-col items-center justify-between text-center relative z-10 shadow-inner"
              >
                <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#B5965A] font-bold">
                  <Unlock className="w-4 h-4 text-[#6E1F2E]" />
                  <span>Officially Unveiled</span>
                </div>

                <div className="my-auto py-2">
                  <span className="text-xs uppercase tracking-[0.3em] font-semibold text-[#6E1F2E] block mb-1">
                    Sunday
                  </span>
                  <h3 className="font-serif text-5xl md:text-6xl font-bold text-[#6E1F2E]">
                    31
                  </h3>
                  <p className="font-serif text-xl md:text-2xl font-medium text-[#B5965A] uppercase tracking-widest mt-1">
                    January 2027
                  </p>
                  <p className="text-xs text-[#291C1A]/70 mt-2 italic">
                    Udaipur, Rajasthan • India
                  </p>
                </div>

                <div className="flex items-center gap-3">
                  <a
                    href={`https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(WEDDING_DATA.couple.heading)}&dates=20270131T050000Z/20270131T180000Z&details=${encodeURIComponent('Royal Wedding Ceremony of Ranbir and Alia in Udaipur')}&location=${encodeURIComponent(WEDDING_DATA.couple.venueFull)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-sm bg-[#6E1F2E] text-[#FFF9EF] text-xs font-semibold uppercase tracking-wider hover:bg-[#42131E] transition-colors"
                  >
                    <Calendar className="w-3.5 h-3.5 text-[#D4AF37]" />
                    <span>Add to Google Calendar</span>
                  </a>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
