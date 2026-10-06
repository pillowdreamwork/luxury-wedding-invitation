export interface EventDetail {
  id: string;
  title: string;
  subtitle: string;
  date: string;
  time: string;
  venue: string;
  location: string;
  dressCode: string;
  description: string;
  image: string;
  mapUrl: string;
  calendarLink: {
    title: string;
    details: string;
    location: string;
    startDate: string;
    endDate: string;
  };
}

export interface StoryChapter {
  id: string;
  year: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
}

export interface Wish {
  id: string;
  name: string;
  message: string;
  city: string;
  reaction: '❤️' | '💐' | '✨' | '🛕';
  createdAt: string;
}

export const WEDDING_DATA = {
  couple: {
    groom: "Ranbir",
    groomFull: "Ranbir Kapoor",
    bride: "Alia",
    brideFull: "Alia Bhatt",
    heading: "Ranbir weds Alia",
    subheading: "A celebration of love",
    dateText: "31 January 2027",
    weddingTimestamp: "2027-01-31T10:30:00+05:30",
    venueShort: "The Oberoi Udaivilas, Udaipur",
    venueFull: "The Oberoi Udaivilas, Haridasji Ki Magri, Udaipur, Rajasthan 313001",
    hashtags: ["#RanbirGotAlia", "#RanAlia2027", "#UdaipurRoyals"],
  },
  parents: {
    groomParents: "Son of Late Rishi Kapoor & Neetu Kapoor",
    brideParents: "Daughter of Mahesh Bhatt & Soni Razdan",
    blessingQuote: "“With the divine grace of Lord Ganesha and the cherished blessings of our ancestors and parents, we invite you to join us in witnessing our sacred union.”",
  },
  events: [
    {
      id: "mehndi",
      title: "Mehndi Rasm",
      subtitle: "Henna, Music & Sunshine",
      date: "Friday, 29 January 2027",
      time: "03:00 PM Onwards",
      venue: "Courtyard Lawns",
      location: "The Oberoi Udaivilas, Udaipur",
      dressCode: "Vibrant Yellows, Mint Greens & Floral Elegance",
      description: "An afternoon drenched in warm sunshine, traditional dholak beats, intricate henna artistry, and delicious street chaat delicacies.",
      image: "/images/couple-mehndi.jpg",
      mapUrl: "https://maps.google.com/?q=The+Oberoi+Udaivilas+Udaipur",
      calendarLink: {
        title: "Ranbir & Alia Mehndi Rasm",
        details: "Mehndi celebration for Ranbir and Alia's wedding",
        location: "The Oberoi Udaivilas, Udaipur",
        startDate: "20270129T093000Z",
        endDate: "20270129T140000Z"
      }
    },
    {
      id: "sangeet",
      title: "Sangeet & Cocktails",
      subtitle: "A Starry Night of Rhythm & Celebrations",
      date: "Saturday, 30 January 2027",
      time: "07:00 PM Onwards",
      venue: "Royal Lakefront Amphitheatre",
      location: "The Oberoi Udaivilas, Udaipur",
      dressCode: "Glamorous Royal Blue, Velvet & Shimmering Gold",
      description: "An evening featuring unforgettable family dance face-offs, live acoustic performances, signature cocktails, and fireworks over Lake Pichola.",
      image: "/images/couple-sangeet.jpg",
      mapUrl: "https://maps.google.com/?q=The+Oberoi+Udaivilas+Udaipur",
      calendarLink: {
        title: "Ranbir & Alia Sangeet & Cocktail Night",
        details: "Sangeet performance and cocktails for Ranbir and Alia's wedding",
        location: "The Oberoi Udaivilas, Udaipur",
        startDate: "20270130T133000Z",
        endDate: "20270130T190000Z"
      }
    },
    {
      id: "wedding",
      title: "The Royal Pheras & Banquet",
      subtitle: "Seven Sacred Vows of Eternal Union",
      date: "Sunday, 31 January 2027",
      time: "10:30 AM (Baraat & Mandap) | 07:30 PM (Banquet)",
      venue: "Sacred Lake Mandap & Grand Ballroom",
      location: "The Oberoi Udaivilas, Udaipur",
      dressCode: "Heritage Royal Attire (Ivory, Pastel Pink & Royal Gold)",
      description: "Witness the sacred Vedic pheras around the holy fire as the gentle lake breeze carries Vedic chants, followed by a royal feast.",
      image: "/images/couple-royal.jpg",
      mapUrl: "https://maps.google.com/?q=The+Oberoi+Udaivilas+Udaipur",
      calendarLink: {
        title: "Ranbir & Alia Royal Wedding Ceremony",
        details: "Pheras and reception for Ranbir and Alia",
        location: "The Oberoi Udaivilas, Udaipur",
        startDate: "20270131T050000Z",
        endDate: "20270131T180000Z"
      }
    }
  ] as EventDetail[],
  story: [
    {
      id: "ch1",
      year: "2018",
      title: "The First Spark",
      subtitle: "Where two worlds collided",
      description: "A chance script reading session in Mumbai sparked a friendship built on mutual admiration, late night coffee, and shared laughter.",
      image: "/images/couple-mehndi.jpg"
    },
    {
      id: "ch2",
      year: "2024",
      title: "Under The Savannah Stars",
      subtitle: "The magical proposal",
      description: "Against the breathtaking golden sunset of Masai Mara, amidst silence and nature's splendor, Ranbir popped the question with an heirloom ring.",
      image: "/images/couple-sangeet.jpg"
    },
    {
      id: "ch3",
      year: "2027",
      title: "The Eternal Vow",
      subtitle: "A royal beginning in Udaipur",
      description: "Now, surrounded by Lake Pichola's serene waters and the warmth of family and dear friends, we step together into a lifetime of endless joy.",
      image: "/images/couple-royal.jpg"
    }
  ] as StoryChapter[],
  youtubeVideoId: "kJQP7kiw5Fk", // Sample Indian royal wedding trailer ID
  thingsToKnow: [
    {
      icon: "Plane",
      title: "Travel & Airport Transfers",
      subtitle: "Maharana Pratap Airport (UDR)",
      description: "Udaipur Airport is a 45-minute drive from the venue. Private chauffeur pickups and luxury motorboat transfers from City Palace Jetty will be arranged."
    },
    {
      icon: "ThermometerSun",
      title: "Weather & Wardrobe Tip",
      subtitle: "Pleasant Winter Sunshine",
      description: "January in Udaipur brings pleasant 22°C (71°F) sunny days and cool 10°C (50°F) lake breezes at night. We advise carrying a Pashmina or light jacket for evening functions."
    },
    {
      icon: "PhoneCall",
      title: "Wedding Concierge",
      subtitle: "24/7 Guest Care Desk",
      description: "For hotel check-ins, dietary assistance, or local sightseeing tours, please reach out to our guest relation leads: +91 98765 43210 or concierge@ranbirwedsalia.wedding."
    },
    {
      icon: "Gift",
      title: "Blessings Over Gifts",
      subtitle: "Your Presence is Our Present",
      description: "Your gracious presence and warm blessings are the greatest gifts we could ever ask for. Please no physical gifts."
    }
  ],
  musicTrack: {
    title: "Kudmayi / Shehnai Divine Melody",
    artist: "Royal Wedding Ensemble",
    // We can use a reliable copyright-free wedding flute / shehnai audio URL or synthesized Web Audio ambient sound fallback
    audioUrl: "https://cdn.pixabay.com/download/audio/2022/05/27/audio_1808fbf07a.mp3?filename=indian-flute-meditation-112349.mp3"
  }
};
