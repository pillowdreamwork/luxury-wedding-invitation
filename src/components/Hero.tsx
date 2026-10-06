import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import { ChevronDown, Sparkles } from 'lucide-react';
import { WEDDING_DATA } from '../data/weddingData';

export const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  // Scroll progress tracked across the hero section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  // Typography fades out smoothly as scroll begins
  const textOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
  const textY = useTransform(scrollYProgress, [0, 0.3], [0, -80]);

  // Temple portal scale: grows larger (1.0 -> 2.5) as if walking into it
  const templeScale = useTransform(scrollYProgress, [0, 0.85], [1, 2.5]);
  
  // Left half opens outward left (-140%), Right half opens outward right (+140%)
  const leftDoorX = useTransform(scrollYProgress, [0.15, 0.85], ['0%', '-140%']);
  const rightDoorX = useTransform(scrollYProgress, [0.15, 0.85], ['0%', '140%']);

  // Soft warm golden glow through the center opening
  const glowOpacity = useTransform(scrollYProgress, [0.2, 0.75, 0.95], [0, 1, 0.2]);
  const glowScale = useTransform(scrollYProgress, [0.2, 0.85], [0.3, 2.8]);

  // Fade out hero background at end of portal transition
  const heroOpacity = useTransform(scrollYProgress, [0.8, 1], [1, 0]);

  return (
    <div 
      ref={containerRef}
      className="relative h-[250vh] w-full bg-[#2B86D6]"
      aria-label="Hero South Indian Temple Portal Invitation"
    >
      {/* Sticky Fullscreen Viewport */}
      <motion.div 
        style={{ opacity: heroOpacity }}
        className="sticky top-0 h-screen w-full overflow-hidden flex flex-col justify-between items-center bg-gradient-to-b from-[#1C71BF] via-[#358BE0] to-[#5BA5EC]"
      >
        {/* Layered soft floating clouds in sky background */}
        <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
          <div className="absolute top-8 left-[-100px] w-[450px] h-44 bg-white/20 rounded-full blur-3xl animate-float" />
          <div className="absolute top-28 right-[-80px] w-[550px] h-52 bg-white/25 rounded-full blur-3xl animate-float" style={{ animationDelay: '2.5s' }} />
          <div className="absolute top-1/3 left-1/3 w-[650px] h-60 bg-white/15 rounded-full blur-3xl animate-float" style={{ animationDelay: '4.5s' }} />
        </div>

        {/* Top Header Typography Content */}
        <motion.div 
          style={{ 
            opacity: shouldReduceMotion ? 1 : textOpacity,
            y: shouldReduceMotion ? 0 : textY 
          }}
          className="relative z-20 pt-14 md:pt-20 px-4 text-center max-w-4xl mx-auto flex flex-col items-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/30 text-white text-xs md:text-sm font-medium tracking-[0.25em] uppercase mb-4 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-[#F3E5AB]" />
            <span>{WEDDING_DATA.couple.subheading}</span>
            <Sparkles className="w-3.5 h-3.5 text-[#F3E5AB]" />
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-normal text-white drop-shadow-lg tracking-wide leading-tight my-2">
            {WEDDING_DATA.couple.heading}
          </h1>

          <div className="h-0.5 w-28 bg-gradient-to-r from-transparent via-white/90 to-transparent my-3" />

          <p className="font-sans text-white/95 text-lg md:text-2xl font-light tracking-widest uppercase drop-shadow-md">
            {WEDDING_DATA.couple.dateText}
          </p>

          <p className="text-white/85 text-xs md:text-sm font-light italic mt-2 tracking-wider">
            {WEDDING_DATA.couple.venueShort}
          </p>
        </motion.div>

        {/* Warm Golden Center Portal Glow (revealed as doors split) */}
        <motion.div
          style={{
            opacity: shouldReduceMotion ? 0 : glowOpacity,
            scale: shouldReduceMotion ? 1 : glowScale
          }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] rounded-full bg-radial from-[#FFF5CE] via-[#F8F0E3] to-transparent blur-3xl z-10 pointer-events-none"
        />

        {/* Temple Gopuram Artwork & Opening Portal Doors */}
        <div className="relative z-10 w-full max-w-lg md:max-w-2xl h-[56vh] md:h-[66vh] flex items-end justify-center pointer-events-none pb-0">
          {shouldReduceMotion ? (
            /* Static Temple for prefers-reduced-motion */
            <div className="w-full h-full flex items-end justify-center drop-shadow-2xl">
              <img 
                src="/images/temple.jpg" 
                alt="Majestic South Indian Temple Gopuram" 
                className="max-h-full object-contain filter contrast-105"
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
                  className="max-h-full object-contain filter contrast-105"
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
                  className="max-h-full object-contain filter contrast-105"
                />
              </motion.div>
            </motion.div>
          )}
        </div>

        {/* Scroll Cue at Bottom */}
        <motion.div 
          style={{ opacity: textOpacity }}
          className="relative z-20 pb-8 flex flex-col items-center gap-1.5 text-white/95 cursor-pointer"
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
          <ChevronDown className="w-5 h-5 animate-bounce text-white/95" />
        </motion.div>

      </motion.div>
    </div>
  );
};
