import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, X, ArrowLeft, 
  Users, Sparkles
} from 'lucide-react';
import { Link } from 'react-router-dom';

import sanidhyaPhoto from '../assets/team/sanidhya.png';
import hamdaanPhoto from '../assets/team/hamdaan.png';
import ismitPhoto from '../assets/team/ismit.png';
import piyushPhoto from '../assets/team/piyush.png';
import amitPhoto from '../assets/team/amit.png';
import vishnudathPhoto from '../assets/team/vishnu.png';
import siddhanthPhoto from '../assets/team/siddhanth.png';

const teamMembers = [
  {
    id: 1,
    name: 'Sanidhya Verma',
    role: "AI, DevOps & Other People's Problems",
    description:
      'AI, deployement, blah blah....also the Founder',
    isFounder: true,
    color: 'from-emerald-400 to-green-600',
    photo: sanidhyaPhoto,
    tag: 'Founder',
  },
  {
    id: 2,
    name: 'Piyush Patel',
    role: 'Main Backend guy',
    description:
      'API/Backend lead, takes an annoying amount of time to deliver a simple service but gets the work done.',
    color: 'from-orange-400 to-red-600',
    photo: piyushPhoto,
    tag: 'Backend',
  },
  {
    id: 3,
    name: 'Hamdaan Sarfaraz',
    role: 'Server & "Why Is It Down?" guy',
    description:
      'not sure what this guy does, something grafana...prometheus..whatever.',
    color: 'from-blue-400 to-cyan-600',
    photo: hamdaanPhoto,
    tag: 'Infrastructure',
  },
  {
    id: 4,
    name: 'Vishnudath Pillai',
    role: 'Security guy',
    description:
      'Good with DevSecOps and the server hardware was his (a fkn 10 year old laptop), so no choice.',
    color: 'from-red-400 to-rose-600',
    photo: vishnudathPhoto,
    tag: 'Security',
  },
  {
    id: 5,
    name: 'Sidharth Renjith',
    role: 'Network & Systems guy',
    description:
      'Looks over the entire networking part, only person in the team who listens and gets shit done on time.',
    color: 'from-indigo-400 to-purple-600',
    photo: siddhanthPhoto,
    tag: 'Networking',
  },
  {
    id: 6,
    name: 'Amit Venkat',
    role: 'Inferior Backend guy',
    description:
      'This guy writes code, pushes, the whole pipeline breaks...but knows shit though.',
    color: 'from-yellow-400 to-orange-600',
    photo: amitPhoto,
    tag: 'Backend',
  },
  {
    id: 7,
    name: 'Ismit Tripathy',
    role: 'Flutter guy',
    description:
      'Made the whole mobile app himself, gets excited over small things, speaking of small things.......',
    color: 'from-purple-400 to-pink-600',
    photo: ismitPhoto,
    tag: 'Mobile',
  },
];

// Duplicate team members for infinite scroll effect
const infiniteMembers = [...teamMembers, ...teamMembers, ...teamMembers];

const TeamCard = ({ member }) => {
  const [imageError, setImageError] = useState(false);

  return (
    <div className="flex-shrink-0 w-[260px] sm:w-[280px] md:w-[320px] px-2 sm:px-3">
      <div className={`
        relative rounded-2xl p-5 sm:p-6
        h-[380px] sm:h-[400px]
        flex flex-col
        bg-[#151B23] border transition-colors duration-300
        border-[#26303D] hover:border-[#22C55E]/30 hover:shadow-xl hover:shadow-[#22C55E]/5
      `}>
        <div className="absolute inset-0 rounded-2xl transition-opacity duration-300 opacity-0 hover:opacity-100 bg-gradient-to-br from-[#22C55E]/5 to-transparent" />

        <div className="relative z-10 h-full flex flex-col">
          {/* Tag - Positioned above photo */}
          <div className="flex justify-center mb-3 sm:mb-4">
            <div className="flex items-center gap-1.5 bg-[#22C55E]/10 border border-[#22C55E]/20 px-3 py-1 rounded-full">
              <span className="text-[10px] sm:text-xs text-[#22C55E] font-medium">
                {member.isFounder ? '★ FOUNDER' : member.tag}
              </span>
            </div>
          </div>

          <div className="flex-1 flex flex-col items-center">
            <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-2xl flex items-center justify-center bg-gradient-to-br ${member.color} shadow-lg overflow-hidden">
              {member.photo && !imageError ? (
                <img 
                  src={member.photo} 
                  alt={member.name}
                  className="w-full h-full object-cover"
                  onError={() => setImageError(true)}
                />
              ) : (
                <span className="text-2xl sm:text-3xl font-bold text-white select-none">
                  {member.name.split(' ').map(w => w[0]).join('').toUpperCase().slice(0, 2)}
                </span>
              )}
            </div>

            <h3 className="text-center text-base sm:text-lg font-bold text-[#F8FAFC] tracking-tight mt-3 sm:mt-4">
              {member.name}
            </h3>
            
            <p className="text-center text-xs sm:text-sm font-medium text-[#22C55E] mt-1 mb-2 sm:mb-3">
              {member.role}
            </p>

            <p className="text-center text-xs sm:text-sm text-[#94A3B8] leading-relaxed px-1 line-clamp-3 sm:line-clamp-none">
              {member.description}
            </p>
          </div>

          <div className="mt-3 sm:mt-4 h-0.5 w-12 sm:w-16 mx-auto rounded-full bg-[#26303D] relative overflow-hidden flex-shrink-0">
            <div className="absolute inset-0 bg-gradient-to-r from-[#22C55E] to-emerald-400" />
          </div>
        </div>
      </div>
    </div>
  );
};

const MastheadPage = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const scrollContainerRef = useRef(null);
  const animationRef = useRef(null);
  const isPausedRef = useRef(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    // Increased scroll speed
    const scrollSpeed = 1;

    const autoScroll = () => {
      if (container && !isPausedRef.current) {
        const maxScroll = container.scrollWidth - container.clientWidth;
        const currentScroll = container.scrollLeft;

        // Use a smaller reset threshold for smoother loop
        if (currentScroll >= maxScroll - 2) {
          container.scrollLeft = 0;
        } else {
          container.scrollLeft = currentScroll + scrollSpeed;
        }
      }
      animationRef.current = requestAnimationFrame(autoScroll);
    };

    animationRef.current = requestAnimationFrame(autoScroll);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  // Pause on touch so mobile users can actually scroll manually
  const handleTouchStart = () => {
    isPausedRef.current = true;
  };
  const handleTouchEnd = () => {
    // Small delay before resuming so momentum scroll isn't interrupted
    setTimeout(() => {
      isPausedRef.current = false;
    }, 800);
  };

  return (
    <div className="min-h-screen bg-[#0B0F14] text-[#F8FAFC] font-sans overflow-x-hidden">
      <nav className={`fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 md:px-12 py-3 sm:py-4 flex items-center justify-between transition-all duration-300 ${
        scrolled ? 'bg-[#0B0F14]/95 backdrop-blur-xl shadow-[0_1px_0_0_rgba(38,48,61,0.3)]' : 'bg-transparent'
      }`}>
        <Link to="/" className="flex items-center gap-2 sm:gap-3 group" onClick={() => window.scrollTo(0, 0)}>
          <div className="p-1 sm:p-1.5 rounded-full bg-[#22C55E]/10 group-hover:bg-[#22C55E]/20 transition-colors">
            <ArrowLeft className="w-3 h-3 sm:w-4 sm:h-4 text-[#94A3B8] group-hover:text-[#22C55E] transition-colors" />
          </div>
          <span className="text-xs sm:text-sm font-medium text-[#94A3B8] group-hover:text-white transition-colors">Back</span>
        </Link>
        <button className="md:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors" onClick={() => setIsNavOpen(!isNavOpen)}>
          {isNavOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      <AnimatePresence>
        {isNavOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="fixed top-16 left-0 right-0 bottom-0 bg-[#0B0F14]/95 backdrop-blur-md z-40 flex flex-col items-center justify-center gap-6 text-xl"
          >
            <Link to="/" onClick={() => { setIsNavOpen(false); window.scrollTo(0, 0); }} className="hover:text-[#22C55E] transition-colors">Home</Link>
          </motion.div>
        )}
      </AnimatePresence>

      <section className="relative pt-28 sm:pt-32 md:pt-44 px-4 sm:px-6 md:px-12 max-w-7xl mx-auto">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-[#22C55E]/5 rounded-full blur-3xl" />
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-[#22C55E]/5 rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#22C55E]/[0.02] rounded-full blur-3xl" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative z-10 text-center max-w-4xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 bg-[#22C55E]/10 text-[#22C55E] px-3 sm:px-5 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6 border border-[#22C55E]/20">
            <Users className="w-3 h-3 sm:w-4 sm:h-4" />
            <span>MEET THE TEAM</span>
            <Sparkles className="w-2 h-2 sm:w-3 sm:h-3" />
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold tracking-tight leading-[1.1] mb-4 sm:mb-6">
            Built by people who{' '}
            <span className="bg-gradient-to-r from-[#22C55E] to-emerald-400 bg-clip-text text-transparent">
              care
            </span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-[#94A3B8] max-w-2xl mx-auto leading-relaxed px-2 sm:px-0">
            A passionate team of engineers, designers and problem solvers 
            building the future of student collaboration.
          </p>

          <div className="flex items-center justify-center gap-3 mt-6 sm:mt-8">
            <div className="flex -space-x-2">
              {teamMembers.slice(0, 4).map((member, i) => (
                <div key={i} className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-gradient-to-br from-[#22C55E]/30 to-[#22C55E]/10 border-2 border-[#0B0F14] flex items-center justify-center text-[8px] sm:text-[10px] font-bold text-[#94A3B8]">
                  {member.name.split(' ').map(w => w[0]).join('').toUpperCase().slice(0, 2)}
                </div>
              ))}
              <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-[#22C55E]/10 border-2 border-[#0B0F14] flex items-center justify-center text-[8px] sm:text-[10px] font-bold text-[#94A3B8]">
                +{teamMembers.length - 4}
              </div>
            </div>
            <span className="text-xs sm:text-sm text-[#94A3B8]">{teamMembers.length} members</span>
          </div>
        </motion.div>
      </section>

      {/* Auto-Scrolling Team Section */}
      <section className="px-4 sm:px-6 md:px-12 max-w-7xl mx-auto mt-12 sm:mt-16 pb-32">
        <div className="relative">
          {/* Scroll Container */}
          <div
            ref={scrollContainerRef}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
            className="flex overflow-x-auto gap-2 sm:gap-4 pb-4 sm:pb-6 scroll-smooth hide-scrollbar"
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
              WebkitOverflowScrolling: 'touch',
              touchAction: 'pan-x',
            }}
          >
            <style>{`
              .hide-scrollbar::-webkit-scrollbar {
                display: none;
              }
            `}</style>
            
            {infiniteMembers.map((member, index) => (
              <motion.div
                key={`${member.id}-${index}`}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.03, duration: 0.3 }}
                className="flex-shrink-0"
              >
                <TeamCard member={member} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <footer className="border-t border-[#26303D] px-4 sm:px-6 md:px-12 py-6 sm:py-8 text-[#94A3B8] text-xs sm:text-sm flex flex-wrap justify-between items-center max-w-7xl mx-auto">
        <div className="flex items-center gap-3 sm:gap-4">
          <span className="text-white font-semibold">justAsk</span>
          <span>·</span>
          <span>Made with ❤️ by the JustAsk Team...hope you like it</span>
        </div>
        <div className="flex gap-4 sm:gap-6 mt-3 sm:mt-0">
          <Link to="/" className="hover:text-white transition-colors" onClick={() => window.scrollTo(0, 0)}>Home</Link>
        </div>
      </footer>
    </div>
  );
};

export default MastheadPage;