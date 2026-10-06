import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, X, Film } from 'lucide-react';
import { WEDDING_DATA } from '../data/weddingData';

export const PreWeddingVideo: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  return (
    <section 
      id="video" 
      className="py-24 px-4 bg-[#F8F0E3] relative overflow-hidden"
      aria-label="Pre-Wedding Cinematic Video Teaser"
    >
      <div className="max-w-4xl mx-auto text-center relative z-10">
        
        {/* Section Title */}
        <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-[#B5965A] font-semibold mb-3">
          <Film className="w-4 h-4 text-[#6E1F2E]" />
          <span>Cinematic Trailer</span>
          <Film className="w-4 h-4 text-[#6E1F2E]" />
        </div>

        <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#6E1F2E] mb-3">
          Our Pre-Wedding Film
        </h2>
        
        <p className="text-sm sm:text-base text-[#291C1A]/75 max-w-lg mx-auto mb-10 font-light">
          A glimpse into the laughter, romantic journeys, and magical moments before our big day.
        </p>

        {/* Video Thumbnail Frame */}
        <div className="relative aspect-video w-full max-w-3xl mx-auto rounded-sm overflow-hidden border-2 border-[#B5965A] shadow-2xl group cursor-pointer bg-[#291C1A]">
          <img 
            src="/images/couple-royal.jpg" 
            alt="Pre Wedding Video Cover" 
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter brightness-90"
            loading="lazy"
          />

          {/* Dark Overlay with Gold Glow */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#6E1F2E]/80 via-black/30 to-transparent flex flex-col items-center justify-center p-6" />

          {/* Play Button Icon */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsPlaying(true)}
            className="absolute z-20 w-20 h-20 md:w-24 md:h-24 rounded-full bg-gradient-to-tr from-[#B5965A] via-[#D4AF37] to-[#F3E5AB] p-1 shadow-2xl flex items-center justify-center border-2 border-[#FFF9EF]"
            aria-label="Play Pre-Wedding Video"
          >
            <div className="w-full h-full rounded-full bg-[#6E1F2E] flex items-center justify-center pl-1.5 hover:bg-[#42131E] transition-colors">
              <Play className="w-8 h-8 md:w-10 md:h-10 text-[#D4AF37] fill-[#D4AF37]" />
            </div>
          </motion.button>

          {/* Caption Tag */}
          <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-[#FFF9EF] z-10 text-xs sm:text-sm font-serif">
            <span>Udaipur Pre-Wedding Teaser</span>
            <span className="text-[#D4AF37] tracking-widest uppercase">HD 4K</span>
          </div>
        </div>

      </div>

      {/* Embedded Video Modal */}
      <AnimatePresence>
        {isPlaying && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
            onClick={() => setIsPlaying(false)}
          >
            <div 
              className="relative w-full max-w-4xl aspect-video bg-black rounded-lg overflow-hidden border border-[#B5965A] shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setIsPlaying(false)}
                className="absolute top-4 right-4 z-10 p-2.5 rounded-full bg-[#6E1F2E] text-[#FFF9EF] hover:bg-[#42131E] transition-colors shadow-lg border border-[#B5965A]"
                aria-label="Close Video"
              >
                <X className="w-6 h-6" />
              </button>

              <iframe
                src={`https://www.youtube-nocookie.com/embed/${WEDDING_DATA.youtubeVideoId}?autoplay=1&rel=0`}
                title="Ranbir & Alia Pre-Wedding Video"
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
};
