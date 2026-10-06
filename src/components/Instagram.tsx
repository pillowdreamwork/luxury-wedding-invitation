import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Camera, Copy, Check, Heart, MessageCircle, Send, Bookmark } from 'lucide-react';
import { WEDDING_DATA } from '../data/weddingData';

export const InstagramSection: React.FC = () => {
  const [copiedTag, setCopiedTag] = useState<string | null>(null);

  const handleCopy = (tag: string) => {
    navigator.clipboard.writeText(tag);
    setCopiedTag(tag);
    setTimeout(() => setCopiedTag(null), 2500);
  };

  const samplePosts = [
    {
      id: 1,
      image: '/images/couple-royal.jpg',
      likes: '1.2M',
      caption: 'The golden hour vows in Udaipur 👑✨ #RanbirGotAlia #RanAlia2027'
    },
    {
      id: 2,
      image: '/images/couple-sangeet.jpg',
      likes: '945K',
      caption: 'Dancing under a million stars! 💫💃 #SangeetNight #RanAlia2027'
    },
    {
      id: 3,
      image: '/images/couple-mehndi.jpg',
      likes: '890K',
      caption: 'Sunshine & Henna magic in full bloom 🌿💛 #MehndiCelebrations'
    }
  ];

  return (
    <section 
      id="instagram" 
      className="py-20 px-4 bg-[#FFF9EF] border-y border-[#B5965A]/30 relative overflow-hidden"
      aria-label="Instagram Hashtags & Photo Frame Grid"
    >
      <div className="max-w-5xl mx-auto text-center relative z-10">
        
        {/* Header */}
        <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-[#B5965A] font-semibold mb-3">
          <Camera className="w-4 h-4 text-[#6E1F2E]" />
          <span>Tag Your Moments</span>
          <Camera className="w-4 h-4 text-[#6E1F2E]" />
        </div>

        <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#6E1F2E] mb-3">
          Share The Joy With Us
        </h2>
        
        <p className="text-sm sm:text-base text-[#291C1A]/75 max-w-lg mx-auto mb-8 font-light">
          Use our official wedding hashtags in your posts and stories to feature in our digital memory wall!
        </p>

        {/* Hashtags Buttons Row */}
        <div className="flex flex-wrap justify-center gap-3 mb-14">
          {WEDDING_DATA.couple.hashtags.map((tag: string) => (
            <button
              key={tag}
              onClick={() => handleCopy(tag)}
              className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#6E1F2E] text-[#FFF9EF] text-sm font-semibold tracking-wide border border-[#B5965A] shadow-md hover:bg-[#42131E] transition-all"
            >
              <span className="font-mono text-[#D4AF37]">{tag}</span>
              {copiedTag === tag ? (
                <span className="inline-flex items-center gap-1 text-xs text-green-300">
                  <Check className="w-4 h-4 text-green-400" /> Copied!
                </span>
              ) : (
                <Copy className="w-3.5 h-3.5 text-[#FFF9EF]/70 group-hover:text-white transition-colors" />
              )}
            </button>
          ))}
        </div>

        {/* Instagram Post Card Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
          {samplePosts.map((post) => (
            <motion.div
              key={post.id}
              whileHover={{ y: -6 }}
              className="bg-white border border-[#B5965A]/40 rounded-md overflow-hidden shadow-lg flex flex-col justify-between"
            >
              {/* Insta Header */}
              <div className="p-3.5 flex items-center gap-3 border-b border-gray-100">
                <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#B5965A] to-[#6E1F2E] p-0.5">
                  <img src="/images/ganesha.jpg" alt="Profile" className="w-full h-full rounded-full object-cover" />
                </div>
                <div>
                  <p className="text-xs font-bold text-gray-900 leading-none">ranbir_weds_alia</p>
                  <p className="text-[10px] text-gray-500">The Oberoi Udaivilas</p>
                </div>
              </div>

              {/* Insta Image */}
              <div className="relative aspect-square w-full bg-gray-100 overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.caption} 
                  className="w-full h-full object-cover" 
                  loading="lazy"
                />
              </div>

              {/* Insta Footer */}
              <div className="p-3.5 space-y-2">
                <div className="flex items-center justify-between text-gray-700">
                  <div className="flex items-center gap-3">
                    <Heart className="w-5 h-5 text-red-500 fill-red-500 cursor-pointer" />
                    <MessageCircle className="w-5 h-5 cursor-pointer hover:text-gray-900" />
                    <Send className="w-5 h-5 cursor-pointer hover:text-gray-900" />
                  </div>
                  <Bookmark className="w-5 h-5 cursor-pointer hover:text-gray-900" />
                </div>

                <p className="text-xs font-bold text-gray-900">{post.likes} likes</p>
                <p className="text-xs text-gray-700 line-clamp-2">
                  <span className="font-bold mr-1">ranbir_weds_alia</span>
                  {post.caption}
                </p>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
