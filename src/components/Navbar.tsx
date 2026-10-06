import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight * 0.8) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Blessings', href: '#invitation' },
    { name: 'Reveal Date', href: '#date-reveal' },
    { name: 'Events', href: '#functions' },
    { name: 'Story', href: '#couple' },
    { name: 'Film', href: '#video' },
    { name: 'Travel', href: '#things-to-know' },
    { name: 'RSVP', href: '#rsvp' },
    { name: 'Wishes', href: '#wishes' },
  ];

  return (
    <AnimatePresence>
      {isScrolled && (
        <motion.header
          initial={{ y: -80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -80, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed top-0 left-0 right-0 z-40 bg-[#FFF9EF]/90 backdrop-blur-md border-b border-[#B5965A]/30 shadow-md py-3 px-4 sm:px-8"
        >
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            
            {/* Logo Monogram */}
            <a href="#" className="flex items-center gap-2 text-[#6E1F2E]">
              <span className="font-display font-bold text-lg md:text-xl tracking-wider">R & A</span>
              <span className="hidden sm:inline-block h-3 w-px bg-[#B5965A]" />
              <span className="hidden sm:inline-block font-serif text-xs italic text-[#B5965A]">31 Jan 2027</span>
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-6 text-xs uppercase tracking-widest text-[#291C1A] font-semibold">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="hover:text-[#6E1F2E] transition-colors py-1 relative group"
                >
                  {link.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#6E1F2E] group-hover:w-full transition-all" />
                </a>
              ))}
            </nav>

            {/* RSVP CTA & Mobile Hamburger */}
            <div className="flex items-center gap-3">
              <a
                href="#rsvp"
                className="px-4 py-1.5 rounded bg-[#6E1F2E] text-[#FFF9EF] text-xs font-semibold uppercase tracking-wider shadow hover:bg-[#42131E] transition-colors border border-[#B5965A]"
              >
                RSVP Now
              </a>

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 rounded text-[#6E1F2E] hover:bg-[#F8F0E3]"
                aria-label="Toggle Navigation Menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>

          </div>

          {/* Mobile Dropdown Menu */}
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden border-t border-[#B5965A]/30 mt-3 pt-4 pb-6 bg-[#FFF9EF] px-4 space-y-3"
            >
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block py-2 text-sm font-semibold text-[#6E1F2E] hover:text-[#B5965A] tracking-wider uppercase"
                >
                  {link.name}
                </a>
              ))}
            </motion.div>
          )}

        </motion.header>
      )}
    </AnimatePresence>
  );
};
