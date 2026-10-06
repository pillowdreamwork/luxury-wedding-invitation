import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Clock } from 'lucide-react';
import { WEDDING_DATA } from '../data/weddingData';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export const Countdown: React.FC = () => {
  const calculateTimeLeft = (): TimeLeft => {
    const targetDate = new Date(WEDDING_DATA.couple.weddingTimestamp).getTime();
    const now = new Date().getTime();
    const difference = targetDate - now;

    if (difference > 0) {
      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    } else {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const timeBlocks = [
    { label: 'Days', value: timeLeft.days },
    { label: 'Hours', value: timeLeft.hours },
    { label: 'Minutes', value: timeLeft.minutes },
    { label: 'Seconds', value: timeLeft.seconds },
  ];

  return (
    <section 
      id="countdown" 
      className="py-20 px-4 bg-[#6E1F2E] text-[#FFF9EF] relative overflow-hidden border-t border-[#B5965A]/40"
      aria-label="Countdown Timer to Royal Wedding"
    >
      {/* Subtle Pattern */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#D4AF37_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        
        <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-[#D4AF37] font-semibold mb-3">
          <Clock className="w-4 h-4" />
          <span>The Grand Countdown</span>
          <Clock className="w-4 h-4" />
        </div>

        <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#FFF9EF] mb-3">
          Counting Down To Forever
        </h2>

        <p className="text-sm sm:text-base text-[#FFF9EF]/80 max-w-md mx-auto mb-12 font-light">
          Until we stand under the sacred mandap on 31 January 2027
        </p>

        {/* Timer Cards Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 max-w-3xl mx-auto">
          {timeBlocks.map((block) => (
            <motion.div
              key={block.label}
              whileHover={{ scale: 1.03 }}
              className="bg-[#42131E] border-2 border-[#B5965A]/50 rounded-sm p-4 sm:p-6 shadow-2xl flex flex-col items-center justify-center relative group"
            >
              {/* Gold Top Accent Line */}
              <div className="absolute top-0 left-1/4 right-1/4 h-1 bg-[#D4AF37]" />

              <span className="font-serif text-4xl sm:text-6xl font-bold text-[#D4AF37] tracking-wider my-1">
                {String(block.value).padStart(2, '0')}
              </span>

              <span className="text-xs uppercase tracking-[0.25em] text-[#FFF9EF]/80 font-medium">
                {block.label}
              </span>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
