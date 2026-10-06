import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Heart } from 'lucide-react';
import type { StoryChapter } from '../data/weddingData';

interface CarouselProps {
  items: StoryChapter[];
}

export const Carousel: React.FC<CarouselProps> = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % items.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + items.length) % items.length);
  };

  const currentItem = items[currentIndex];

  return (
    <div className="relative max-w-4xl mx-auto bg-[#FFF9EF] border-2 border-[#B5965A]/40 rounded-sm p-6 sm:p-10 shadow-xl overflow-hidden">
      {/* Decorative Ornate Corners */}
      <div className="absolute top-2 left-2 w-6 h-6 border-t-2 border-l-2 border-[#B5965A]" />
      <div className="absolute top-2 right-2 w-6 h-6 border-t-2 border-r-2 border-[#B5965A]" />
      <div className="absolute bottom-2 left-2 w-6 h-6 border-b-2 border-l-2 border-[#B5965A]" />
      <div className="absolute bottom-2 right-2 w-6 h-6 border-b-2 border-r-2 border-[#B5965A]" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        
        {/* Carousel Image Slide */}
        <div className="relative h-72 sm:h-96 w-full rounded overflow-hidden border border-[#B5965A]/30 shadow-md">
          <AnimatePresence mode="wait">
            <motion.img
              key={currentItem.id}
              src={currentItem.image}
              alt={currentItem.title}
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.5 }}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </AnimatePresence>

          <div className="absolute top-3 left-3 bg-[#6E1F2E] text-[#D4AF37] px-3 py-1 rounded text-xs font-serif font-bold shadow-md">
            Chapter {currentIndex + 1} • {currentItem.year}
          </div>
        </div>

        {/* Carousel Content Slide */}
        <div className="flex flex-col justify-between h-full py-2">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentItem.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4 }}
              className="space-y-3"
            >
              <span className="text-xs uppercase tracking-[0.25em] text-[#B5965A] font-semibold flex items-center gap-1.5">
                <Heart className="w-3.5 h-3.5 fill-[#6E1F2E] text-[#6E1F2E]" />
                {currentItem.subtitle}
              </span>

              <h3 className="font-serif text-3xl sm:text-4xl font-bold text-[#6E1F2E]">
                {currentItem.title}
              </h3>

              <div className="h-0.5 w-16 bg-[#B5965A]" />

              <p className="text-sm sm:text-base text-[#291C1A]/80 leading-relaxed font-light">
                {currentItem.description}
              </p>
            </motion.div>
          </AnimatePresence>

          {/* Controls & Indicator Dots */}
          <div className="flex items-center justify-between mt-8 pt-6 border-t border-[#B5965A]/20">
            {/* Dots */}
            <div className="flex items-center gap-2">
              {items.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-2.5 rounded-full transition-all ${
                    idx === currentIndex 
                      ? 'w-8 bg-[#6E1F2E]' 
                      : 'w-2.5 bg-[#B5965A]/40 hover:bg-[#B5965A]'
                  }`}
                  aria-label={`Go to story slide ${idx + 1}`}
                />
              ))}
            </div>

            {/* Prev / Next Arrows */}
            <div className="flex items-center gap-2">
              <button
                onClick={prevSlide}
                className="p-2.5 rounded-full border border-[#B5965A] text-[#6E1F2E] hover:bg-[#6E1F2E] hover:text-[#FFF9EF] transition-colors"
                aria-label="Previous story slide"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextSlide}
                className="p-2.5 rounded-full border border-[#B5965A] text-[#6E1F2E] hover:bg-[#6E1F2E] hover:text-[#FFF9EF] transition-colors"
                aria-label="Next story slide"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
