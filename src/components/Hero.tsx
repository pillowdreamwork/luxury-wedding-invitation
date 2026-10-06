import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import { ChevronDown, Sparkles } from 'lucide-react';
import { WEDDING_DATA } from '../data/weddingData';

export const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  // Scroll progress for the hero container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  // Transform values linked to natural scroll
  // Text fades out quickly as scroll starts
  const textOpacity = useTransform(scrollYProgress, [0, 0.35], [1, 0]);
  const textY = useTransform(scrollYProgress, [0, 0.35], [0, -60]);

  // Temple portal scale & split opening doors
  const templeScale = useTransform(scrollYProgress, [0, 0.8], [1, 2.2]);
  
  // Left door moves left (-120%), Right door moves right (+120%)
  const leftDoorX = useTransform(scrollYProgress, [0.2, 0.85], ['0%', '-120%']);
  const rightDoorX = useTransform(scrollYProgress, [0.2, 0.85], ['0%', '120%']);

  // Soft warm glow through the center opening
  const glowOpacity = useTransform(scrollYProgress, [0.25, 0.7, 0.95], [0, 1, 0.3]);
  const glowScale = useTransform(scrollYProgress, [0.25, 0.8], [0.4, 2.5]);

  // Overall hero container fade out at the very end of scroll transition
  const heroOpacity = useTransform(scrollYProgress, [0.8, 1], [1, 0]);

  return (
    <div 
      ref={containerRef}
      className="relative h-[220vh] w-full bg-[#5BA4E6]"
      aria-label="Hero Indian Temple Portal Invitation"
    >
      {/* Sticky Fullscreen Canvas Viewport */}
      <motion.div 
        style={{ opacity: heroOpacity }}
        className="sticky top-0 h-screen w-full overflow-hidden flex flex-col justify-between items-center bg-gradient-to-b from-[#3B82C4] via-[#5CA3E6] to-[#88BEF2]"
      >
        {/* Soft floating clouds background layer */}
        <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
          <div className="absolute top-10 -left-20 w-96 h-40 bg-white/20 rounded-full blur-3xl animate-float" />
          <div className="absolute top-32 right-[-50px] w-[500px] h-48 bg-white/25 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
          <div className="absolute top-1/3 left-1/4 w-[600px] h-56 bg-white/15 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }} />
        </div>

        {/* Top Header Text Content */}
        <motion.div 
          style={{ 
            opacity: shouldReduceMotion ? 1 : textOpacity,
            y: shouldReduceMotion ? 0 : textY 
          }}
          className="relative z-20 pt-16 md:pt-20 px-4 text-center max-w-4xl mx-auto flex flex-col items-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/30 text-white text-xs md:text-sm font-medium tracking-[0.25em] uppercase mb-4 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-[#F3E5AB]" />
            <span>{WEDDING_DATA.couple.subheading}</span>
            <Sparkles className="w-3.5 h-3.5 text-[#F3E5AB]" />
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-normal text-white drop-shadow-md tracking-wide leading-tight my-2">
            {WEDDING_DATA.couple.heading}
          </h1>

          <div className="h-0.5 w-24 bg-gradient-to-r from-transparent via-white/80 to-transparent my-3" />

          <p className="font-sans text-white/95 text-lg md:text-2xl font-light tracking-widest uppercase drop-shadow-sm">
            {WEDDING_DATA.couple.dateText}
          </p>

          <p className="text-white/80 text-sm md:text-base font-light italic mt-2">
            {WEDDING_DATA.couple.venueShort}
          </p>
        </motion.div>

        {/* Central Warm Golden Portal Glow (Appears as doors split) */}
        <motion.div
          style={{
            opacity: shouldReduceMotion ? 0 : glowOpacity,
            scale: shouldReduceMotion ? 1 : glowScale
          }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-radial from-[#FFF7D6] via-[#F8F0E3] to-transparent blur-2xl z-10 pointer-events-none"
        />

        {/* Temple Gopuram Artwork & Portal Door Transition */}
        <div className="relative z-10 w-full max-w-xl md:max-w-2xl h-[52vh] md:h-[62vh] flex items-end justify-center pointer-events-none pb-0">
          {shouldReduceMotion ? (
            /* Static Temple for prefers-reduced-motion */
            <div className="w-full h-full flex items-end justify-center drop-shadow-2xl">
              <img 
                src="/images/temple.jpg" 
                alt="Majestic Indian Temple Gopuram" 
                className="max-h-full object-contain mix-blend-multiply filter contrast-125"
              />
            </div>
          ) : (
            /* Animated Splitting Temple Gopuram Doors */
            <motion.div 
              style={{ scale: templeScale }}
              className="relative w-full h-full flex items-end justify-center origin-bottom drop-shadow-2xl"
            >
              {/* Left Door Half of Temple Gopuram */}
              <motion.div 
                style={{ 
                  x: leftDoorX,
                  clipPath: 'inset(0 50% 0 0)' 
                }}
                className="absolute inset-0 w-full h-full flex items-end justify-center"
              >
                <img 
                  src="/images/temple.jpg" 
                  alt="South Indian Temple Gopuram Left Portal" 
                  className="max-h-full object-contain filter contrast-110"
                />
              </motion.div>

              {/* Right Door Half of Temple Gopuram */}
              <motion.div 
                style={{ 
                  x: rightDoorX,
                  clipPath: 'inset(0 0 0 50%)' 
                }}
                className="absolute inset-0 w-full h-full flex items-end justify-center"
              >
                <img 
                  src="/images/temple.jpg" 
                  alt="South Indian Temple Gopuram Right Portal" 
                  className="max-h-full object-contain filter contrast-110"
                />
              </motion.div>
            </motion.div>
          )}
        </div>

        {/* Scroll Cue at Bottom */}
        <motion.div 
          style={{ opacity: textOpacity }}
          className="relative z-20 pb-8 flex flex-col items-center gap-1.5 text-white/90 cursor-pointer"
          onClick={() => {
            window.scrollTo({
              top: window.innerHeight * 0.9,
              behavior: 'smooth'
            });
          }}
        >
          <span className="text-xs uppercase tracking-[0.3em] font-medium drop-shadow-sm">
            Scroll to explore
          </span>
          <ChevronDown className="w-5 h-5 animate-bounce text-white/90" />
        </motion.div>

      </motion.div>
    </div>
  );
};
