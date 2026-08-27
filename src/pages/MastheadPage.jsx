import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, X, ArrowLeft, 
  Users, Sparkles, ArrowRight
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
    role: 'Platform Architect / AI & DevOps',
    description:
      'Founder of justAsk, responsible for platform architecture, DevOps, product direction and AI systems.',
    isFounder: true,
    color: 'from-emerald-400 to-green-600',
    photo: sanidhyaPhoto,
    tag: 'Founder',
  },
  {
    id: 2,
    name: 'Piyush Patel',
    role: 'Backend Engineer / API Lead',
    description:
      'Leading backend architecture, API development and core service implementation.',
    color: 'from-orange-400 to-red-600',
    photo: piyushPhoto,
    tag: 'Backend',
  },
  {
    id: 3,
    name: 'Hamdaan Sarfaraz',
    role: 'Infrastructure & Platform Engineer',
    description:
      'Managing infrastructure, deployment, monitoring and platform reliability.',
    color: 'from-blue-400 to-cyan-600',
    photo: hamdaanPhoto,
    tag: 'Infrastructure',
  },
  {
    id: 4,
    name: 'Vishnudath Pillai',
    role: 'DevSecOps Engineer',
    description:
      'Responsible for infrastructure security and DevSecOps practices.',
    color: 'from-red-400 to-rose-600',
    photo: vishnudathPhoto,
    tag: 'Security',
  },
  {
    id: 5,
    name: 'Sidharth Renjith',
    role: 'Network & Systems Engineer',
    description:
      'Responsible for network architecture, connectivity, and systems infrastructure.',
    color: 'from-indigo-400 to-purple-600',
    photo: siddhanthPhoto,
    tag: 'Networking',
  },
  {
    id: 6,
    name: 'Amit Venkat',
    role: 'Backend Engineer',
    description:
      'Developing backend services, APIs, database management and platform functionality.',
    color: 'from-yellow-400 to-orange-600',
    photo: amitPhoto,
    tag: 'Backend',
  },
  {
    id: 7,
    name: 'Ismit Tripathy',
    role: 'Mobile App Engineer',
    description:
      'Responsible for the Flutter mobile application and the mobile experience of justAsk.',
    color: 'from-purple-400 to-pink-600',
    photo: ismitPhoto,
    tag: 'Mobile',
  },
];

const TeamCard = ({ member, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [imageError, setImageError] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.06, duration: 0.5, ease: "easeOut" }}
      className="group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={`
        relative rounded-2xl p-7
        h-[380px]
        flex flex-col
        bg-[#151B23] border transition-all duration-500
        border-[#26303D] hover:border-[#22C55E]/30 hover:shadow-xl hover:shadow-[#22C55E]/5
        ${isHovered ? 'transform -translate-y-2' : ''}
      `}>
        <div className={`
          absolute inset-0 rounded-2xl transition-opacity duration-500
          ${isHovered ? 'opacity-100' : 'opacity-0'}
          bg-gradient-to-br from-[#22C55E]/5 to-transparent
        `} />

        <div className="relative z-10 h-full flex flex-col">
          {/* Tag - positioned with consistent spacing from top */}
          <div className="absolute top-3 right-3 flex items-center gap-1.5 bg-[#22C55E]/10 border border-[#22C55E]/20 px-2.5 py-1 rounded-full">
            <span className="text-[10px] text-[#22C55E] font-medium">
              {member.isFounder ? '★ FOUNDER' : member.tag}
            </span>
          </div>

          {/* Avatar with consistent spacing */}
          <div className="flex-1 flex flex-col items-center justify-center">
            <motion.div 
              className="relative"
              animate={isHovered ? { y: -6, scale: 1.05 } : { y: 0, scale: 1 }}
              transition={{ duration: 0.3 }}
            >
              <div className={`
                relative w-24 h-24 rounded-2xl flex items-center justify-center
                bg-gradient-to-br ${member.color}
                shadow-lg overflow-hidden
              `}>
                {member.photo && !imageError ? (
                  <img 
                    src={member.photo} 
                    alt={member.name}
                    className="w-full h-full object-cover"
                    onError={() => setImageError(true)}
                  />
                ) : (
                  <span className="text-3xl font-bold text-white select-none">
                    {member.name.split(' ').map(w => w[0]).join('').toUpperCase().slice(0, 2)}
                  </span>
                )}
              </div>
            </motion.div>

            <h3 className="text-center text-lg font-bold text-[#F8FAFC] tracking-tight group-hover:text-[#22C55E] transition-colors duration-300 mt-4">
              {member.name}
            </h3>
            
            <p className="text-center text-sm font-medium text-[#22C55E] mt-1 mb-3">
              {member.role}
            </p>

            <p className="text-center text-sm text-[#94A3B8] leading-relaxed px-1">
              {member.description}
            </p>
          </div>

          <div className="mt-4 h-0.5 w-16 mx-auto rounded-full bg-[#26303D] relative overflow-hidden flex-shrink-0">
            <motion.div 
              className="absolute inset-0 bg-gradient-to-r from-[#22C55E] to-emerald-400"
              initial={{ x: '-100%' }}
              animate={{ x: isHovered ? '0%' : '-100%' }}
              transition={{ duration: 0.5 }}
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const MastheadPage = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#0B0F14] text-[#F8FAFC] font-sans overflow-x-hidden">
      <nav className={`fixed top-0 left-0 right-0 z-50 px-6 md:px-12 py-4 flex items-center justify-between transition-all duration-300 ${
        scrolled ? 'bg-[#0B0F14]/95 backdrop-blur-xl shadow-[0_1px_0_0_rgba(38,48,61,0.3)]' : 'bg-transparent'
      }`}>
        <Link to="/" className="flex items-center gap-3 group" onClick={() => window.scrollTo(0, 0)}>
          <div className="p-1.5 rounded-full bg-[#22C55E]/10 group-hover:bg-[#22C55E]/20 transition-colors">
            <ArrowLeft className="w-4 h-4 text-[#94A3B8] group-hover:text-[#22C55E] transition-colors" />
          </div>
          <span className="text-sm font-medium text-[#94A3B8] group-hover:text-white transition-colors">Back to Home</span>
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

      <section className="relative pt-32 md:pt-44 px-6 md:px-12 max-w-7xl mx-auto">
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
          <div className="inline-flex items-center gap-2 bg-[#22C55E]/10 text-[#22C55E] px-5 py-2 rounded-full text-sm font-medium mb-6 border border-[#22C55E]/20">
            <Users className="w-4 h-4" />
            <span>MEET THE TEAM</span>
            <Sparkles className="w-3 h-3" />
          </div>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.1] mb-6">
            Built by people who{' '}
            <span className="bg-gradient-to-r from-[#22C55E] to-emerald-400 bg-clip-text text-transparent">
              care
            </span>
          </h1>

          <p className="text-lg md:text-xl text-[#94A3B8] max-w-2xl mx-auto leading-relaxed">
            A passionate team of engineers, designers and problem solvers 
            building the future of student collaboration.
          </p>

          <div className="flex items-center justify-center gap-3 mt-8">
            <div className="flex -space-x-2">
              {teamMembers.slice(0, 4).map((member, i) => (
                <div key={i} className="w-8 h-8 rounded-full bg-gradient-to-br from-[#22C55E]/30 to-[#22C55E]/10 border-2 border-[#0B0F14] flex items-center justify-center text-[10px] font-bold text-[#94A3B8]">
                  {member.name.split(' ').map(w => w[0]).join('').toUpperCase().slice(0, 2)}
                </div>
              ))}
              <div className="w-8 h-8 rounded-full bg-[#22C55E]/10 border-2 border-[#0B0F14] flex items-center justify-center text-[10px] font-bold text-[#94A3B8]">
                +{teamMembers.length - 4}
              </div>
            </div>
            <span className="text-sm text-[#94A3B8]">{teamMembers.length} members</span>
          </div>
        </motion.div>
      </section>

      <section className="px-6 md:px-12 max-w-7xl mx-auto mt-16 pb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {teamMembers.slice(0, 6).map((member, index) => (
            <TeamCard key={member.id} member={member} index={index} />
          ))}
          <div className="md:col-start-2 lg:col-start-2">
            <TeamCard member={teamMembers[6]} index={6} />
          </div>
        </div>
      </section>

      <footer className="border-t border-[#26303D] px-6 md:px-12 py-8 text-[#94A3B8] text-sm flex flex-wrap justify-between items-center max-w-7xl mx-auto">
        <div className="flex items-center gap-4">
          <span className="text-white font-semibold">justAsk</span>
          <span>·</span>
          <span>Made with ❤️ by the JustAsk Team</span>
        </div>
        <div className="flex gap-6 mt-4 md:mt-0">
          <Link to="/" className="hover:text-white transition-colors" onClick={() => window.scrollTo(0, 0)}>Home</Link>
        </div>
      </footer>
    </div>
  );
};

export default MastheadPage;