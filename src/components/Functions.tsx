import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, MapPin, Sparkles, Shirt, ExternalLink } from 'lucide-react';
import { WEDDING_DATA, type EventDetail } from '../data/weddingData';

export const Functions: React.FC = () => {
  return (
    <section 
      id="functions" 
      className="py-24 px-4 sm:px-6 lg:px-8 bg-[#6E1F2E] text-[#FFF9EF] relative overflow-hidden"
      aria-label="The Wedding Celebrations & Events"
    >
      {/* Background Ornate Gold Texture Overlay */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#B5965A_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-[#D4AF37] font-semibold mb-3">
            <Sparkles className="w-4 h-4 text-[#D4AF37]" />
            <span>Sacred Ceremonies</span>
            <Sparkles className="w-4 h-4 text-[#D4AF37]" />
          </div>

          <h2 className="font-serif text-4xl sm:text-6xl font-bold text-[#FFF9EF] tracking-tight mb-4">
            The Celebrations
          </h2>

          <div className="h-0.5 w-24 bg-gradient-to-r from-transparent via-[#B5965A] to-transparent mx-auto my-4" />

          <p className="font-sans text-base sm:text-lg text-[#FFF9EF]/80 font-light max-w-xl mx-auto">
            Join us across three days of music, color, sacred rituals, and royal festivities.
          </p>
        </div>

        {/* Event Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {WEDDING_DATA.events.map((event: EventDetail, idx: number) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              className="bg-[#42131E] border border-[#B5965A]/40 rounded-sm overflow-hidden flex flex-col justify-between shadow-2xl group hover:border-[#D4AF37] transition-all"
            >
              {/* Event Image Banner */}
              <div className="relative h-60 w-full overflow-hidden">
                <img 
                  src={event.image} 
                  alt={event.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter brightness-95"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#42131E] via-transparent to-transparent" />
                <span className="absolute top-4 left-4 px-3 py-1 bg-[#6E1F2E]/90 backdrop-blur-md border border-[#B5965A] text-[#D4AF37] text-xs font-serif font-semibold tracking-wider rounded-sm">
                  Day 0{idx + 1}
                </span>
              </div>

              {/* Event Body Content */}
              <div className="p-6 md:p-8 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-serif text-2xl font-bold text-[#FFF9EF] mb-1">
                    {event.title}
                  </h3>
                  <p className="text-xs uppercase tracking-widest text-[#B5965A] font-medium mb-4">
                    {event.subtitle}
                  </p>

                  <p className="text-xs sm:text-sm text-[#FFF9EF]/80 leading-relaxed mb-6 font-light">
                    {event.description}
                  </p>

                  {/* Details List */}
                  <div className="space-y-3 pt-4 border-t border-[#B5965A]/20 text-xs sm:text-sm text-[#FFF9EF]/90">
                    <div className="flex items-start gap-3">
                      <Calendar className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                      <span>{event.date}</span>
                    </div>

                    <div className="flex items-start gap-3">
                      <Clock className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                      <span>{event.time}</span>
                    </div>

                    <div className="flex items-start gap-3">
                      <MapPin className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                      <div>
                        <p className="font-semibold text-[#FFF9EF]">{event.venue}</p>
                        <p className="text-xs text-[#FFF9EF]/70">{event.location}</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 pt-1">
                      <Shirt className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                      <div className="bg-[#6E1F2E] px-2.5 py-1 rounded border border-[#B5965A]/30 text-xs text-[#F3E5AB]">
                        <span className="font-semibold uppercase tracking-wider block text-[10px] text-[#D4AF37]">Dress Code</span>
                        {event.dressCode}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Event Action Buttons */}
                <div className="mt-8 pt-4 border-t border-[#B5965A]/20 flex flex-col gap-2">
                  <a
                    href={`https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(event.calendarLink.title)}&dates=${event.calendarLink.startDate}/${event.calendarLink.endDate}&details=${encodeURIComponent(event.calendarLink.details)}&location=${encodeURIComponent(event.calendarLink.location)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2.5 px-4 rounded bg-[#B5965A] hover:bg-[#D4AF37] text-[#42131E] font-semibold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-colors"
                  >
                    <Calendar className="w-4 h-4" />
                    <span>Add to Calendar</span>
                  </a>

                  <a
                    href={event.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2 px-4 rounded border border-[#B5965A]/50 hover:bg-[#6E1F2E] text-[#FFF9EF] text-xs font-medium uppercase tracking-wider flex items-center justify-center gap-2 transition-colors"
                  >
                    <ExternalLink className="w-3.5 h-3.5 text-[#D4AF37]" />
                    <span>View Venue Map</span>
                  </a>
                </div>

              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
