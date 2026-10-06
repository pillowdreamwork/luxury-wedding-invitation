import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';
import { CheckCircle2, XCircle, Send, Sparkles, Check } from 'lucide-react';
import { WEDDING_DATA } from '../data/weddingData';

export const RSVPSection: React.FC = () => {
  const [attending, setAttending] = useState<'yes' | 'no'>('yes');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [guestsCount, setGuestsCount] = useState(1);
  const [dietary, setDietary] = useState('Vegetarian');
  const [selectedEvents, setSelectedEvents] = useState<string[]>(['mehndi', 'sangeet', 'wedding']);
  const [note, setNote] = useState('');
  
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const toggleEvent = (eventId: string) => {
    setSelectedEvents(prev => 
      prev.includes(eventId) ? prev.filter(id => id !== eventId) : [...prev, eventId]
    );
  };

  const validate = () => {
    const newErrors: { [key: string]: string } = {};
    if (!name.trim()) newErrors.name = 'Full name is required';
    if (!email.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!phone.trim()) newErrors.phone = 'Phone number is required';
    if (attending === 'yes' && selectedEvents.length === 0) {
      newErrors.events = 'Please select at least one ceremony to attend';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    const rsvpData = {
      id: Date.now().toString(),
      name,
      email,
      phone,
      attending,
      guestsCount: attending === 'yes' ? guestsCount : 0,
      dietary,
      selectedEvents: attending === 'yes' ? selectedEvents : [],
      note,
      submittedAt: new Date().toISOString()
    };

    // Save to localStorage
    const existing = JSON.parse(localStorage.getItem('wedding_rsvp') || '[]');
    localStorage.setItem('wedding_rsvp', JSON.stringify([rsvpData, ...existing]));

    setIsSubmitted(true);

    if (attending === 'yes') {
      try {
        confetti({
          particleCount: 100,
          spread: 80,
          origin: { y: 0.6 },
          colors: ['#B5965A', '#6E1F2E', '#D4AF37']
        });
      } catch {
        // Fallback
      }
    }
  };

  return (
    <section 
      id="rsvp" 
      className="py-24 px-4 sm:px-6 lg:px-8 bg-[#F8F0E3] relative overflow-hidden"
      aria-label="RSVP Form"
    >
      <div className="max-w-3xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-[#B5965A] font-semibold mb-3">
            <Sparkles className="w-4 h-4 text-[#B5965A]" />
            <span>Response Requested</span>
            <Sparkles className="w-4 h-4 text-[#B5965A]" />
          </div>

          <h2 className="font-serif text-4xl sm:text-6xl font-bold text-[#6E1F2E] tracking-tight mb-4">
            Kindly RSVP
          </h2>

          <div className="h-0.5 w-24 bg-[#B5965A] mx-auto my-4" />

          <p className="font-sans text-base text-[#291C1A]/80 font-light max-w-md mx-auto">
            Please respond by 31 December 2026 to help us make comfortable arrangements for you.
          </p>
        </div>

        {/* Card Form */}
        <div className="bg-[#FFF9EF] border-2 border-[#B5965A]/40 rounded-sm p-8 sm:p-12 shadow-2xl relative">
          
          <AnimatePresence mode="wait">
            {isSubmitted ? (
              /* Success Confirmation */
              <motion.div 
                key="success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12 space-y-6"
              >
                <div className="w-20 h-20 rounded-full bg-[#6E1F2E] text-[#D4AF37] mx-auto flex items-center justify-center border-2 border-[#B5965A] shadow-lg">
                  <CheckCircle2 className="w-10 h-10" />
                </div>

                <h3 className="font-serif text-3xl font-bold text-[#6E1F2E]">
                  {attending === 'yes' ? 'Thank You for Confirming!' : 'We Will Miss You!'}
                </h3>

                <p className="text-sm sm:text-base text-[#291C1A]/80 max-w-md mx-auto leading-relaxed">
                  {attending === 'yes' 
                    ? `We are overjoyed that you will be joining us in Udaipur! A confirmation email has been logged for ${name}.` 
                    : `Thank you for letting us know, ${name}. Your warm wishes mean the world to us.`}
                </p>

                <button
                  onClick={() => {
                    setIsSubmitted(false);
                    setName('');
                    setEmail('');
                    setPhone('');
                  }}
                  className="px-6 py-2.5 rounded bg-[#6E1F2E] text-[#FFF9EF] text-xs font-semibold uppercase tracking-wider hover:bg-[#42131E] transition-colors"
                >
                  Submit Another Response
                </button>
              </motion.div>
            ) : (
              /* RSVP Form */
              <form onSubmit={handleSubmit} className="space-y-8" noValidate>
                
                {/* Attending Toggle */}
                <div className="space-y-3">
                  <label className="text-xs uppercase tracking-widest text-[#B5965A] font-bold block text-center">
                    Will You Be Attending?
                  </label>
                  <div className="grid grid-cols-2 gap-4">
                    <button
                      type="button"
                      onClick={() => setAttending('yes')}
                      className={`py-3.5 px-4 rounded border text-sm font-semibold flex items-center justify-center gap-2 transition-all ${
                        attending === 'yes'
                          ? 'bg-[#6E1F2E] text-[#FFF9EF] border-[#B5965A] shadow-md'
                          : 'bg-[#F8F0E3] text-[#291C1A] border-[#B5965A]/40 hover:bg-[#EADBC8]'
                      }`}
                    >
                      <CheckCircle2 className={`w-4 h-4 ${attending === 'yes' ? 'text-[#D4AF37]' : 'text-gray-400'}`} />
                      <span>Joyfully Accept</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => setAttending('no')}
                      className={`py-3.5 px-4 rounded border text-sm font-semibold flex items-center justify-center gap-2 transition-all ${
                        attending === 'no'
                          ? 'bg-[#6E1F2E] text-[#FFF9EF] border-[#B5965A] shadow-md'
                          : 'bg-[#F8F0E3] text-[#291C1A] border-[#B5965A]/40 hover:bg-[#EADBC8]'
                      }`}
                    >
                      <XCircle className={`w-4 h-4 ${attending === 'no' ? 'text-[#D4AF37]' : 'text-gray-400'}`} />
                      <span>Regretfully Decline</span>
                    </button>
                  </div>
                </div>

                {/* Personal Information */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="text-xs uppercase tracking-wider text-[#291C1A] font-semibold block mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Maharani Gayatri Devi"
                      className={`w-full px-4 py-3 rounded bg-[#F8F0E3] border text-sm text-[#291C1A] focus:outline-none focus:ring-1 focus:ring-[#6E1F2E] ${
                        errors.name ? 'border-red-500' : 'border-[#B5965A]/50'
                      }`}
                    />
                    {errors.name && <p className="text-xs text-red-600 mt-1">{errors.name}</p>}
                  </div>

                  <div>
                    <label className="text-xs uppercase tracking-wider text-[#291C1A] font-semibold block mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="name@example.com"
                      className={`w-full px-4 py-3 rounded bg-[#F8F0E3] border text-sm text-[#291C1A] focus:outline-none focus:ring-1 focus:ring-[#6E1F2E] ${
                        errors.email ? 'border-red-500' : 'border-[#B5965A]/50'
                      }`}
                    />
                    {errors.email && <p className="text-xs text-red-600 mt-1">{errors.email}</p>}
                  </div>
                </div>

                {/* Phone & Number of Guests */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="text-xs uppercase tracking-wider text-[#291C1A] font-semibold block mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+91 98765 43210"
                      className={`w-full px-4 py-3 rounded bg-[#F8F0E3] border text-sm text-[#291C1A] focus:outline-none focus:ring-1 focus:ring-[#6E1F2E] ${
                        errors.phone ? 'border-red-500' : 'border-[#B5965A]/50'
                      }`}
                    />
                    {errors.phone && <p className="text-xs text-red-600 mt-1">{errors.phone}</p>}
                  </div>

                  {attending === 'yes' && (
                    <div>
                      <label className="text-xs uppercase tracking-wider text-[#291C1A] font-semibold block mb-1">
                        Total Guests Attending
                      </label>
                      <select
                        value={guestsCount}
                        onChange={(e) => setGuestsCount(Number(e.target.value))}
                        className="w-full px-4 py-3 rounded bg-[#F8F0E3] border border-[#B5965A]/50 text-sm text-[#291C1A] focus:outline-none focus:ring-1 focus:ring-[#6E1F2E]"
                      >
                        {[1, 2, 3, 4, 5].map((n) => (
                          <option key={n} value={n}>{n} {n === 1 ? 'Guest' : 'Guests'}</option>
                        ))}
                      </select>
                    </div>
                  )}
                </div>

                {attending === 'yes' && (
                  <>
                    {/* Events Selection Checkboxes */}
                    <div className="space-y-3 pt-2">
                      <label className="text-xs uppercase tracking-wider text-[#291C1A] font-semibold block">
                        Which Ceremonies Will You Join Us For? *
                      </label>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                        {WEDDING_DATA.events.map((ev) => (
                          <button
                            type="button"
                            key={ev.id}
                            onClick={() => toggleEvent(ev.id)}
                            className={`p-3 rounded border text-xs font-semibold flex items-center justify-between transition-all ${
                              selectedEvents.includes(ev.id)
                                ? 'bg-[#6E1F2E] text-[#FFF9EF] border-[#B5965A]'
                                : 'bg-[#F8F0E3] text-[#291C1A] border-[#B5965A]/40'
                            }`}
                          >
                            <span>{ev.title}</span>
                            {selectedEvents.includes(ev.id) && <Check className="w-4 h-4 text-[#D4AF37]" />}
                          </button>
                        ))}
                      </div>
                      {errors.events && <p className="text-xs text-red-600">{errors.events}</p>}
                    </div>

                    {/* Dietary Preference */}
                    <div>
                      <label className="text-xs uppercase tracking-wider text-[#291C1A] font-semibold block mb-2">
                        Dietary Preference
                      </label>
                      <div className="flex flex-wrap gap-3">
                        {['Pure Vegetarian', 'Jain Pure Veg', 'Multi-Cuisine & International'].map((pref) => (
                          <button
                            type="button"
                            key={pref}
                            onClick={() => setDietary(pref)}
                            className={`px-4 py-2 rounded text-xs font-medium border transition-colors ${
                              dietary === pref
                                ? 'bg-[#B5965A] text-[#42131E] border-[#6E1F2E] font-bold'
                                : 'bg-[#F8F0E3] text-[#291C1A] border-[#B5965A]/40'
                            }`}
                          >
                            {pref}
                          </button>
                        ))}
                      </div>
                    </div>
                  </>
                )}

                {/* Note / Blessings Message */}
                <div>
                  <label className="text-xs uppercase tracking-wider text-[#291C1A] font-semibold block mb-1">
                    Special Message or Travel Notes (Optional)
                  </label>
                  <textarea
                    rows={3}
                    value={note}
                    onChange={(e) => setNote(e.target.value)}
                    placeholder="Share any song requests, travel notes, or warm wishes..."
                    className="w-full px-4 py-3 rounded bg-[#F8F0E3] border border-[#B5965A]/50 text-sm text-[#291C1A] focus:outline-none focus:ring-1 focus:ring-[#6E1F2E]"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full py-4 rounded bg-[#6E1F2E] text-[#FFF9EF] font-serif text-lg font-semibold tracking-wider hover:bg-[#42131E] shadow-xl border border-[#B5965A] flex items-center justify-center gap-2 transition-all group"
                >
                  <Send className="w-5 h-5 text-[#D4AF37] group-hover:translate-x-1 transition-transform" />
                  <span>Send Royal RSVP</span>
                </button>

              </form>
            )}
          </AnimatePresence>

        </div>
      </div>
    </section>
  );
};
