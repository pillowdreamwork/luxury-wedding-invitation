import { Hero } from './components/Hero';
import { Invitation } from './components/Invitation';
import { DateReveal } from './components/DateReveal';
import { Functions } from './components/Functions';
import { Couple } from './components/Couple';
import { InstagramSection } from './components/Instagram';
import { PreWeddingVideo } from './components/Video';
import { Countdown } from './components/Countdown';
import { ThingsToKnow } from './components/ThingsToKnow';
import { RSVPSection } from './components/RSVP';
import { WishesWall } from './components/Wishes';
import { Footer } from './components/Footer';
import { MusicPlayer } from './components/MusicPlayer';
import { Navbar } from './components/Navbar';

export function App() {
  return (
    <div className="min-h-screen bg-[#F8F0E3] font-sans text-[#291C1A] selection:bg-[#6E1F2E] selection:text-[#FFF9EF] relative">
      {/* Sticky Header Navbar */}
      <Navbar />

      {/* Main Sections Stack */}
      <main>
        {/* Hero Section with Cinematic Temple Portal Split Scroll */}
        <Hero />

        {/* 1. Invitation & Blessing Section */}
        <Invitation />

        {/* 2. Interactive Reveal the Date Section */}
        <DateReveal />

        {/* 3. Deep Maroon Celebrations Section */}
        <Functions />

        {/* 4. Bride & Groom Story Section with Carousel */}
        <Couple />

        {/* 5. Instagram Hashtags Section */}
        <InstagramSection />

        {/* 6. Pre-Wedding Film Teaser Section */}
        <PreWeddingVideo />

        {/* 7. Countdown Timer Section */}
        <Countdown />

        {/* 8. Things to Know Cards */}
        <ThingsToKnow />

        {/* 9. Validated RSVP Flow Section */}
        <RSVPSection />

        {/* 10. Wishes Wall (Saved in localStorage) */}
        <WishesWall />
      </main>

      {/* 11. Ivory Closing Footer */}
      <Footer />

      {/* Floating Shehnai Ambient Music Player */}
      <MusicPlayer />
    </div>
  );
}

export default App;
