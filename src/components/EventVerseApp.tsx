import React, { useState } from 'react';
import { BrandLogo } from './BrandLogo.tsx';
import { 
  Calendar, 
  MapPin, 
  Users, 
  Search, 
  Filter, 
  Sparkles, 
  ArrowRight, 
  Lock, 
  CheckCircle, 
  AlertTriangle,
  X
} from 'lucide-react';

interface EventItem {
  id: string;
  title: string;
  category: 'Hackathon' | 'Workshop' | 'Tech Talk' | 'Open Source';
  date: string;
  time: string;
  venue: string;
  description: string;
  capacity: number;
  registeredCount: number;
  speakers: string[];
}

const SAMPLE_EVENTS: EventItem[] = [
  {
    id: 'ev-1',
    title: 'TinkerHack SBCE 2026: 24-Hour Campus Hackathon',
    category: 'Hackathon',
    date: 'Nov 14, 2026',
    time: '9:00 AM - 9:00 AM IST',
    venue: 'SBCE Central Computing Center, Alappuzha',
    description:
      'The flagship 24-hour hackathon by TinkerHub SBCE bringing together students, developers, and designers to solve regional and open source challenges.',
    capacity: 120,
    registeredCount: 88,
    speakers: ['TinkerHub Mentors Team', 'Community Alumni Leaders'],
  },
  {
    id: 'ev-2',
    title: 'Modern Cloud & Container Architecture Workshop',
    category: 'Workshop',
    date: 'Nov 20, 2026',
    time: '2:00 PM - 5:30 PM IST',
    venue: 'Seminar Hall 2, SBCE Campus',
    description:
      'Hands-on masterclass covering production containerization, microservices, and serverless architectures tailored for budding student architects.',
    capacity: 60,
    registeredCount: 54,
    speakers: ['DevOps Leads', 'SBCE Tech Club'],
  },
  {
    id: 'ev-3',
    title: 'Building Production AI Systems with Next-Gen Models',
    category: 'Tech Talk',
    date: 'Nov 27, 2026',
    time: '4:00 PM - 6:00 PM IST',
    venue: 'Auditorium & Virtual Stream',
    description:
      'Interactive session on LLM system architecture, latency management, prompt engineering, and structured outputs for practical applications.',
    capacity: 200,
    registeredCount: 172,
    speakers: ['Industry AI Engineers', 'TinkerHub Core'],
  },
  {
    id: 'ev-4',
    title: 'Open Source Saturday: TinkerHub Git & Kernel Sprint',
    category: 'Open Source',
    date: 'Dec 05, 2026',
    time: '10:00 AM - 4:00 PM IST',
    venue: 'TinkerSpace Lab, SBCE',
    description:
      'A community-driven contribution sprint focused on git fluency, first pull requests to open source repositories, and peer code reviews.',
    capacity: 50,
    registeredCount: 45,
    speakers: ['Campus Tech Fellows'],
  },
];

interface EventVerseAppProps {
  onReturnToMaintenance: () => void;
}

export const EventVerseApp: React.FC<EventVerseAppProps> = ({ onReturnToMaintenance }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedEvent, setSelectedEvent] = useState<EventItem | null>(null);
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [authType, setAuthType] = useState<'signin' | 'register'>('signin');

  const filteredEvents = SAMPLE_EVENTS.filter((event) => {
    const matchesCategory = selectedCategory === 'All' || event.category === selectedCategory;
    const matchesSearch =
      event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      event.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-[#080808] text-white flex flex-col font-sans selection:bg-[#FF2D2D]/30">
      {/* Top Banner indicating Reversible Preview state */}
      <div className="bg-[#171717] border-b border-[rgba(255,45,45,0.3)] px-4 py-2 text-xs flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-[#A3A3A3]">
            <strong className="text-white">Normal Application View</strong> (EventVerse for TinkerHub SBCE)
          </span>
        </div>
        <button
          onClick={onReturnToMaintenance}
          className="px-3 py-1 bg-[#FF2D2D] hover:bg-[#B91C1C] text-white text-xs font-semibold rounded-md transition-colors"
        >
          Return to Maintenance Screen
        </button>
      </div>

      {/* Header */}
      <header className="border-b border-white/10 bg-[#0d0d0d]/90 backdrop-blur sticky top-0 z-30">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <BrandLogo size="md" showSubtitle={true} />

          <nav className="hidden md:flex items-center gap-6 text-sm text-[#A3A3A3]">
            <a href="#events" className="hover:text-white transition-colors">
              Discover Events
            </a>
            <a href="#about" className="hover:text-white transition-colors">
              About TinkerHub
            </a>
            <a href="#chapter" className="hover:text-white transition-colors">
              SBCE Chapter
            </a>
          </nav>

          <div className="flex items-center gap-3">
            <button
              onClick={() => {
                setAuthType('signin');
                setShowAuthModal(true);
              }}
              className="px-4 py-2 text-xs font-medium text-white hover:text-white/80 transition-colors"
            >
              Sign In
            </button>
            <button
              onClick={() => {
                setAuthType('register');
                setShowAuthModal(true);
              }}
              className="px-4 py-2 text-xs font-semibold text-white bg-[#FF2D2D] hover:bg-[#B91C1C] rounded-lg transition-colors shadow-[0_0_15px_rgba(255,45,45,0.2)]"
            >
              Register
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-16 px-6 max-w-7xl mx-auto w-full">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#171717] border border-[rgba(255,45,45,0.2)] text-xs text-[#FF2D2D] mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>TinkerHub SBCE Campus Chapter</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white mb-4">
            Discover, Learn, & Build with <span className="text-[#FF2D2D]">EventVerse</span>
          </h1>
          <p className="text-base sm:text-lg text-[#A3A3A3] leading-relaxed mb-6">
            Connecting student innovators, developers, and tech creators across Sri Buddha College of Engineering through hands-on hackathons, technical workshops, and peer communities.
          </p>
        </div>
      </section>

      {/* Events Discovery & Filters */}
      <section id="events" className="py-8 px-6 max-w-7xl mx-auto w-full flex-1">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          {/* Categories */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0">
            {['All', 'Hackathon', 'Workshop', 'Tech Talk', 'Open Source'].map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap ${
                  selectedCategory === cat
                    ? 'bg-[#FF2D2D] text-white shadow-sm'
                    : 'bg-[#171717] text-[#A3A3A3] hover:text-white border border-white/5'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search bar */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-[#A3A3A3] absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search SBCE events..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#171717] border border-white/10 rounded-xl pl-9 pr-4 py-2 text-xs text-white placeholder-[#A3A3A3] focus:outline-none focus:border-[#FF2D2D] transition-colors"
            />
          </div>
        </div>

        {/* Event Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredEvents.map((event) => (
            <div
              key={event.id}
              className="glass-card rounded-2xl p-6 flex flex-col justify-between hover:border-[rgba(255,45,45,0.4)] transition-all group"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-medium text-[#FF2D2D] bg-[#FF2D2D]/10 px-2.5 py-0.5 rounded border border-[#FF2D2D]/20">
                    {event.category}
                  </span>
                  <span className="text-xs text-[#A3A3A3] flex items-center gap-1">
                    <Users className="w-3.5 h-3.5" />
                    {event.registeredCount}/{event.capacity} Enrolled
                  </span>
                </div>

                <h2 className="text-xl font-bold text-white mb-2 group-hover:text-[#FF2D2D] transition-colors">
                  {event.title}
                </h2>
                <p className="text-xs sm:text-sm text-[#A3A3A3] line-clamp-2 mb-4 leading-relaxed">
                  {event.description}
                </p>

                <div className="space-y-1.5 text-xs text-[#A3A3A3] border-t border-white/5 pt-3">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-3.5 h-3.5 text-[#FF2D2D]/70" />
                    <span>{event.date} · {event.time}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-3.5 h-3.5 text-[#FF2D2D]/70" />
                    <span>{event.venue}</span>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between">
                <span className="text-xs text-[#A3A3A3]">
                  Host: <strong className="text-white">TinkerHub SBCE</strong>
                </span>
                <button
                  onClick={() => setSelectedEvent(event)}
                  className="inline-flex items-center gap-1 text-xs font-semibold text-white bg-[#1a1a1a] hover:bg-[#FF2D2D] px-3.5 py-2 rounded-lg border border-white/10 hover:border-[#FF2D2D] transition-all cursor-pointer"
                >
                  <span>View Details</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Event Details Modal */}
      {selectedEvent && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in">
          <div className="relative w-full max-w-xl bg-[#111111] border border-[rgba(255,45,45,0.3)] rounded-2xl p-6 sm:p-8 shadow-2xl">
            <button
              onClick={() => setSelectedEvent(null)}
              className="absolute top-5 right-5 text-[#A3A3A3] hover:text-white p-1 rounded-lg hover:bg-[#1f1f1f]"
            >
              <X className="w-5 h-5" />
            </button>

            <span className="text-xs font-medium text-[#FF2D2D] bg-[#FF2D2D]/10 px-2.5 py-0.5 rounded border border-[#FF2D2D]/20 mb-3 inline-block">
              {selectedEvent.category}
            </span>

            <h3 className="text-2xl font-bold text-white mb-2">{selectedEvent.title}</h3>
            <p className="text-sm text-[#A3A3A3] mb-6 leading-relaxed">
              {selectedEvent.description}
            </p>

            <div className="p-4 rounded-xl bg-[#171717] border border-white/5 space-y-2 text-xs mb-6">
              <div className="flex items-center gap-2 text-white">
                <Calendar className="w-4 h-4 text-[#FF2D2D]" />
                <span>{selectedEvent.date} ({selectedEvent.time})</span>
              </div>
              <div className="flex items-center gap-2 text-[#A3A3A3]">
                <MapPin className="w-4 h-4 text-[#FF2D2D]" />
                <span>{selectedEvent.venue}</span>
              </div>
              <div className="flex items-center gap-2 text-[#A3A3A3]">
                <Users className="w-4 h-4 text-[#FF2D2D]" />
                <span>Mentors: {selectedEvent.speakers.join(', ')}</span>
              </div>
            </div>

            {/* Backend notice explaining safe protection */}
            <div className="p-3 rounded-lg bg-[#1a1414] border border-[#FF2D2D]/30 flex items-start gap-2.5 mb-6 text-xs text-[#A3A3A3]">
              <AlertTriangle className="w-4 h-4 text-[#FF2D2D] shrink-0 mt-0.5" />
              <span>
                Backend registration requests are safeguarded. In production maintenance mode, this entire view is replaced by the maintenance screen to prevent broken submission states.
              </span>
            </div>

            <div className="flex items-center justify-end gap-3">
              <button
                onClick={() => setSelectedEvent(null)}
                className="px-4 py-2 text-xs text-[#A3A3A3] hover:text-white"
              >
                Close
              </button>
              <button
                onClick={() => {
                  alert("Notice: Registration submission is halted because the Supabase backend is currently under maintenance.");
                }}
                className="px-5 py-2.5 rounded-xl bg-[#FF2D2D] hover:bg-[#B91C1C] text-white text-xs font-semibold transition-colors"
              >
                Register For Event
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Auth Modal */}
      {showAuthModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in">
          <div className="relative w-full max-w-md bg-[#111111] border border-[rgba(255,45,45,0.3)] rounded-2xl p-6 sm:p-8 shadow-2xl">
            <button
              onClick={() => setShowAuthModal(false)}
              className="absolute top-5 right-5 text-[#A3A3A3] hover:text-white p-1 rounded-lg hover:bg-[#1f1f1f]"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2 mb-2">
              <Lock className="w-4 h-4 text-[#FF2D2D]" />
              <h3 className="text-xl font-bold text-white">
                {authType === 'signin' ? 'Sign In to EventVerse' : 'Create an Account'}
              </h3>
            </div>
            <p className="text-xs text-[#A3A3A3] mb-5">
              TinkerHub SBCE community portal authentication.
            </p>

            <div className="p-3.5 rounded-lg bg-[#1a1414] border border-[#FF2D2D]/30 flex items-start gap-2.5 mb-5 text-xs text-[#A3A3A3]">
              <AlertTriangle className="w-4 h-4 text-[#FF2D2D] shrink-0 mt-0.5" />
              <span>
                Authentication uses Supabase Auth. While maintenance mode is active, this modal is prevented from receiving live user credentials to prevent failed network requests.
              </span>
            </div>

            <div className="space-y-3 mb-5">
              <div>
                <label className="block text-xs text-[#A3A3A3] mb-1">Email</label>
                <input
                  type="email"
                  disabled
                  placeholder="student@sbce.ac.in"
                  className="w-full bg-[#171717] border border-white/10 rounded-lg px-3 py-2 text-xs text-white/50 cursor-not-allowed"
                />
              </div>
              <div>
                <label className="block text-xs text-[#A3A3A3] mb-1">Password</label>
                <input
                  type="password"
                  disabled
                  placeholder="••••••••••••"
                  className="w-full bg-[#171717] border border-white/10 rounded-lg px-3 py-2 text-xs text-white/50 cursor-not-allowed"
                />
              </div>
            </div>

            <button
              onClick={() => setShowAuthModal(false)}
              className="w-full py-2.5 rounded-xl bg-[#202020] text-white/70 hover:text-white text-xs font-semibold border border-white/10 transition-colors"
            >
              Dismiss
            </button>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="border-t border-white/10 py-6 px-6 text-xs text-[#A3A3A3] mt-auto">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <span>© 2026 EventVerse · TinkerHub SBCE</span>
          <span>Connecting technology enthusiasts at Sri Buddha College of Engineering</span>
        </div>
      </footer>
    </div>
  );
};
