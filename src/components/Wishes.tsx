import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, Send, MessageSquareHeart } from 'lucide-react';
import type { Wish } from '../data/weddingData';

const INITIAL_WISHES: Wish[] = [
  {
    id: 'w1',
    name: 'Karan Johar',
    city: 'Mumbai',
    message: 'My dearest Ranbir & Alia, watching your beautiful love story blossom into this sacred union is the greatest joy. May your home always ring with laughter, light, and endless love! 🥂✨',
    reaction: '❤️',
    createdAt: '2 hours ago'
  },
  {
    id: 'w2',
    name: 'Deepika & Ranveer',
    city: 'Mumbai',
    message: 'Wishing you both a lifetime of adventures, boundless happiness, and eternal togetherness under Udaipur stars! Warmest hugs & love! 💖',
    reaction: '✨',
    createdAt: '5 hours ago'
  },
  {
    id: 'w3',
    name: 'Ayan Mukerji',
    city: 'Mumbai',
    message: 'To two of my favorite humans in the universe. May your bond grow stronger with each passing sunrise. Can’t wait for the celebrations! 🛕✨',
    reaction: '🛕',
    createdAt: '1 day ago'
  }
];

export const WishesWall: React.FC = () => {
  const [wishes, setWishes] = useState<Wish[]>([]);
  const [name, setName] = useState('');
  const [city, setCity] = useState('');
  const [message, setMessage] = useState('');
  const [reaction, setReaction] = useState<'❤️' | '💐' | '✨' | '🛕'>('❤️');
  const [isPosting, setIsPosting] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem('wedding_wishes');
    if (stored) {
      try {
        setWishes(JSON.parse(stored));
      } catch {
        setWishes(INITIAL_WISHES);
      }
    } else {
      setWishes(INITIAL_WISHES);
      localStorage.setItem('wedding_wishes', JSON.stringify(INITIAL_WISHES));
    }
  }, []);

  const handlePostWish = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !message.trim()) return;

    setIsPosting(true);
    const newWish: Wish = {
      id: Date.now().toString(),
      name: name.trim(),
      city: city.trim() || 'Wellwisher',
      message: message.trim(),
      reaction,
      createdAt: 'Just now'
    };

    const updated = [newWish, ...wishes];
    setWishes(updated);
    localStorage.setItem('wedding_wishes', JSON.stringify(updated));

    setName('');
    setCity('');
    setMessage('');
    setIsPosting(false);
  };

  return (
    <section 
      id="wishes" 
      className="py-24 px-4 sm:px-6 lg:px-8 bg-[#FFF9EF] relative overflow-hidden"
      aria-label="Guest Blessings Wall"
    >
      <div className="max-w-5xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-[#B5965A] font-semibold mb-3">
            <MessageSquareHeart className="w-4 h-4 text-[#6E1F2E]" />
            <span>Digital Blessing Book</span>
            <MessageSquareHeart className="w-4 h-4 text-[#6E1F2E]" />
          </div>

          <h2 className="font-serif text-4xl sm:text-6xl font-bold text-[#6E1F2E] tracking-tight mb-4">
            The Wishes Wall
          </h2>

          <div className="h-0.5 w-24 bg-[#B5965A] mx-auto my-4" />

          <p className="font-sans text-base sm:text-lg text-[#291C1A]/80 font-light max-w-xl mx-auto">
            Leave your heartfelt blessings and warm wishes for Ranbir and Alia.
          </p>
        </div>

        {/* Wish Input Form */}
        <div className="bg-[#F8F0E3] border-2 border-[#B5965A]/40 rounded-sm p-6 sm:p-8 shadow-xl max-w-2xl mx-auto mb-16">
          <h3 className="font-serif text-2xl font-bold text-[#6E1F2E] mb-6 text-center">
            Write Your Blessing Card
          </h3>

          <form onSubmit={handlePostWish} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-xs uppercase tracking-wider text-[#291C1A] font-semibold block mb-1">
                  Your Name *
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Suhana & Aryan"
                  className="w-full px-4 py-2.5 rounded bg-[#FFF9EF] border border-[#B5965A]/50 text-sm text-[#291C1A] focus:outline-none focus:ring-1 focus:ring-[#6E1F2E]"
                />
              </div>

              <div>
                <label className="text-xs uppercase tracking-wider text-[#291C1A] font-semibold block mb-1">
                  Your City / Relation
                </label>
                <input
                  type="text"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  placeholder="e.g. London / College Friend"
                  className="w-full px-4 py-2.5 rounded bg-[#FFF9EF] border border-[#B5965A]/50 text-sm text-[#291C1A] focus:outline-none focus:ring-1 focus:ring-[#6E1F2E]"
                />
              </div>
            </div>

            <div>
              <label className="text-xs uppercase tracking-wider text-[#291C1A] font-semibold block mb-1">
                Choose Blessing Emblem
              </label>
              <div className="flex gap-3">
                {(['❤️', '💐', '✨', '🛕'] as const).map((symbol) => (
                  <button
                    key={symbol}
                    type="button"
                    onClick={() => setReaction(symbol)}
                    className={`w-11 h-11 rounded-full text-lg flex items-center justify-center border transition-transform ${
                      reaction === symbol
                        ? 'bg-[#6E1F2E] border-[#B5965A] scale-110 shadow-md'
                        : 'bg-[#FFF9EF] border-[#B5965A]/40 hover:bg-[#EADBC8]'
                    }`}
                  >
                    {symbol}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="text-xs uppercase tracking-wider text-[#291C1A] font-semibold block mb-1">
                Blessing Message *
              </label>
              <textarea
                required
                rows={3}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="May love & togetherness light up your journey forever..."
                className="w-full px-4 py-2.5 rounded bg-[#FFF9EF] border border-[#B5965A]/50 text-sm text-[#291C1A] focus:outline-none focus:ring-1 focus:ring-[#6E1F2E]"
              />
            </div>

            <button
              type="submit"
              disabled={isPosting}
              className="w-full py-3 rounded bg-[#6E1F2E] text-[#FFF9EF] font-semibold text-xs uppercase tracking-widest hover:bg-[#42131E] shadow-md border border-[#B5965A] flex items-center justify-center gap-2 transition-all"
            >
              <Send className="w-4 h-4 text-[#D4AF37]" />
              <span>Post Blessing on Wall</span>
            </button>
          </form>
        </div>

        {/* Wishes List Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {wishes.map((wish) => (
              <motion.div
                key={wish.id}
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.4 }}
                className="bg-[#FFF9EF] border border-[#B5965A]/40 rounded-sm p-6 shadow-md flex flex-col justify-between relative group hover:border-[#B5965A] transition-colors"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-serif text-lg font-bold text-[#6E1F2E]">
                        {wish.name}
                      </h4>
                      <p className="text-[11px] uppercase tracking-wider text-[#B5965A] font-medium">
                        {wish.city}
                      </p>
                    </div>
                    <span className="text-xl p-2 rounded-full bg-[#F8F0E3] border border-[#B5965A]/30">
                      {wish.reaction}
                    </span>
                  </div>

                  <p className="text-sm text-[#291C1A]/85 italic leading-relaxed font-light">
                    "{wish.message}"
                  </p>
                </div>

                <div className="mt-6 pt-3 border-t border-[#B5965A]/20 flex items-center justify-between text-[10px] text-[#291C1A]/60">
                  <span>{wish.createdAt}</span>
                  <span className="text-[#6E1F2E] font-medium flex items-center gap-1">
                    <Heart className="w-3 h-3 text-[#6E1F2E] fill-[#6E1F2E]" /> Blessed
                  </span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
};
