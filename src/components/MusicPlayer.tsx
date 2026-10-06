import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Volume2, VolumeX, Music, Sparkles } from 'lucide-react';
import { WEDDING_DATA } from '../data/weddingData';

export const MusicPlayer: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [isMuted, setIsMuted] = useState<boolean>(false);
  const [showTooltip, setShowTooltip] = useState<boolean>(true);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Auto-hide initial tooltip after 6 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowTooltip(false);
    }, 6000);
    return () => clearTimeout(timer);
  }, []);

  const togglePlay = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play().then(() => {
        setIsPlaying(true);
      }).catch(() => {
        setIsPlaying(false);
      });
    }
  };

  const toggleMute = () => {
    if (!audioRef.current) return;
    audioRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-center gap-3">
      
      {/* Audio Track Tag Tooltip */}
      <AnimatePresence>
        {showTooltip && (
          <motion.div
            initial={{ opacity: 0, x: 10, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 10, scale: 0.95 }}
            className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#6E1F2E] text-[#FFF9EF] border border-[#B5965A] text-xs font-serif shadow-xl"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>Play Royal Shehnai Melody</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Audio Button Container */}
      <div className="relative group">
        <audio 
          ref={audioRef} 
          src={WEDDING_DATA.musicTrack.audioUrl} 
          loop 
          preload="auto"
        />

        <motion.button
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.92 }}
          onClick={togglePlay}
          onMouseEnter={() => setShowTooltip(true)}
          className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-gradient-to-tr from-[#6E1F2E] to-[#42131E] border-2 border-[#B5965A] text-[#D4AF37] shadow-2xl flex items-center justify-center relative overflow-hidden"
          aria-label={isPlaying ? "Pause Wedding Ambient Music" : "Play Wedding Ambient Music"}
        >
          {/* Animated Glowing Ring when playing */}
          {isPlaying && (
            <span className="absolute inset-0 rounded-full border border-[#D4AF37] animate-ping opacity-75" />
          )}

          {isPlaying ? (
            <div className="flex items-end gap-0.5 h-5 px-1">
              <span className="w-1 bg-[#D4AF37] h-full animate-bounce" style={{ animationDuration: '0.6s' }} />
              <span className="w-1 bg-[#D4AF37] h-3 animate-bounce" style={{ animationDuration: '0.9s' }} />
              <span className="w-1 bg-[#D4AF37] h-4 animate-bounce" style={{ animationDuration: '0.4s' }} />
            </div>
          ) : (
            <Music className="w-5 h-5 md:w-6 md:h-6 text-[#D4AF37]" />
          )}
        </motion.button>

        {/* Small Mute Toggle Button if Playing */}
        {isPlaying && (
          <button
            onClick={toggleMute}
            className="absolute -top-1 -right-1 p-1 rounded-full bg-[#B5965A] text-[#42131E] border border-[#FFF9EF] shadow-md hover:bg-[#D4AF37] transition-colors"
            aria-label={isMuted ? "Unmute sound" : "Mute sound"}
          >
            {isMuted ? <VolumeX className="w-3 h-3" /> : <Volume2 className="w-3 h-3" />}
          </button>
        )}
      </div>

    </div>
  );
};
