import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, X, Github, ArrowLeft, 
  Shield, Code, Smartphone, 
  Server, Network, Users, 
  Sparkles, ArrowRight
} from 'lucide-react';
import { Link } from 'react-router-dom';

const teamMembers = [
  {
    id: 1,
    name: 'Sanidhya Verma',
    role: 'Founder / Platform Architect / AI',
    description: 'Founder of justAsk, responsible for the overall platform architecture, product direction, and AI systems.',
    isFounder: true,
    color: 'from-emerald-400 to-green-600',
  },
  {
    id: 2,
    name: 'Hamdaan Sarfaraz',
    role: 'Infrastructure & Platform Engineer',
    description: 'Designing and managing justAsk\'s infrastructure, deployment, and monitoring systems with Prometheus, Grafana, and Terraform. Building the foundation that keeps the platform reliable, scalable, and production-ready.',
    color: 'from-blue-400 to-cyan-600',
  },
  {
    id: 3,
    name: 'Ismit Tripathy',
    role: 'Mobile App Engineer',
    description: 'Responsible for the Flutter mobile application and the mobile experience of justAsk.',
    color: 'from-purple-400 to-pink-600',
  },
  {
    id: 4,
    name: 'Piyush Patel',
    role: 'Backend Engineer',
    description: 'Responsible for backend development and API implementation.',
    color: 'from-orange-400 to-red-600',
  },
  {
    id: 5,
    name: 'Amit Venkat',
    role: 'Backend Engineer',
    description: 'Responsible for backend development and API implementation.',
    color: 'from-yellow-400 to-orange-600',
  },
  {
    id: 6,
    name: 'Vishnudath Pillai',
    role: 'Networking & Security',
    description: 'Responsible for networking infrastructure, connectivity, deployment networking, and security.',
    color: 'from-red-400 to-rose-600',
  },
  {
    id: 7,
    name: 'Siddhanth Renjit',
    role: 'Networking & Security',
    description: 'Responsible for networking infrastructure, security, and network-level architecture.',
    color: 'from-indigo-400 to-purple-600',
  },
];

const TeamCard = ({ member, index }) => {
  const [isHovered, setIsHovered] = useState(false);

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
        relative rounded-2xl p-6
        h-[340px]
        flex flex-col
        bg-[#151B23] border transition-all duration-400
        ${member.isFounder 
            ? 'border-[#22C55E]/30 shadow-lg shadow-[#22C55E]/5' 
            : 'border-[#26303D] hover:border-[#22C55E]/20'
        }
        ${isHovered ? 'transform -translate-y-1.5' : ''}
      `}>
        <div className="relative z-10 h-full flex flex-col">
          {/* Avatar - Same size for everyone */}
          <motion.div 
            className="relative"
            animate={isHovered ? { y: -4 } : { y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className={`
              relative w-20 h-20 rounded-2xl flex items-center justify-center
              bg-gradient-to-br ${member.color}
              shadow-lg mx-auto mb-4
            `}>
              <span className="text-2xl font-bold text-white select-none">
                {member.name.split(' ').map(w => w[0]).join('').toUpperCase().slice(0, 2)}
              </span>
            </div>
            {member.isFounder && (
              <div className="absolute -top-1 -right-1 w-5 h-5 bg-[#22C55E] rounded-full flex items-center justify-center shadow-md">
                <span className="text-[10px] font-bold text-[#0B0F14]">★</span>
              </div>
            )}
          </motion.div>

          {/* Name - Same size for everyone */}
          <h3 className="text-center text-lg font-bold text-[#F8FAFC] tracking-tight">
            {member.name}
          </h3>
          
          {/* Role */}
          <p className="text-center text-sm font-medium text-[#22C55E] mt-1 mb-3">
            {member.role}
          </p>

          {/* Description - Same max length handling */}
          <p className="text-center text-sm text-[#94A3B8] leading-relaxed">
            {member.description}
          </p>

          {/* Decorative line - Same for everyone */}
          <div className="mt-4 h-0.5 w-12 mx-auto rounded-full bg-[#26303D] relative overflow-hidden">
            <motion.div 
              className="absolute inset-0 bg-[#22C55E]"
              initial={{ x: '-100%' }}
              animate={{ x: isHovered ? '0%' : '-100%' }}
              transition={{ duration: 0.4 }}
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

  return (
    <div className="min-h-screen bg-[#0B0F14] text-[#F8FAFC] font-sans overflow-x-hidden">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 px-6 md:px-12 py-4 flex items-center justify-between transition-all duration-300 ${
        scrolled ? 'bg-[#0B0F14]/95 backdrop-blur-xl shadow-[0_1px_0_0_rgba(38,48,61,0.3)]' : 'bg-transparent'
      }`}>
        <Link to="/" className="flex items-center gap-3 group">
          <ArrowLeft className="w-4 h-4 text-[#94A3B8] group-hover:text-[#22C55E] transition-colors" />
          <span className="text-sm font-medium text-[#94A3B8] group-hover:text-white transition-colors">Back</span>
        </Link>
        <div className="flex items-center gap-3">
          <a href="https://github.com/sugaredcookie/justAsk" className="text-[#94A3B8] hover:text-white transition-colors p-2">
            <Github size={20} />
          </a>
          <button className="md:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors" onClick={() => setIsNavOpen(!isNavOpen)}>
            {isNavOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile nav */}
      <AnimatePresence>
        {isNavOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="fixed top-16 left-0 right-0 bottom-0 bg-[#0B0F14]/95 backdrop-blur-md z-40 flex flex-col items-center justify-center gap-6 text-xl"
          >
            <Link to="/" onClick={() => setIsNavOpen(false)} className="hover:text-[#22C55E] transition-colors">Home</Link>
            <a href="https://github.com/sugaredcookie/justAsk" onClick={() => setIsNavOpen(false)} className="hover:text-[#22C55E] transition-colors">GitHub</a>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section className="relative pt-32 md:pt-40 px-6 md:px-12 max-w-7xl mx-auto">
        {/* Background decoration */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-[#22C55E]/5 rounded-full blur-3xl" />
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-[#22C55E]/5 rounded-full blur-3xl" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative z-10 text-center max-w-3xl mx-auto"
        >
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 bg-[#22C55E]/10 text-[#22C55E] px-4 py-1.5 rounded-full text-sm font-medium mb-6 border border-[#22C55E]/20">
            <Users className="w-4 h-4" />
            <span>THE PEOPLE BEHIND JUSTASK</span>
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-[1.1] mb-4">
            Built by people who{' '}
            <span className="text-[#22C55E]">care</span>
          </h1>

          <p className="text-lg text-[#94A3B8] max-w-2xl mx-auto leading-relaxed">
            A multidisciplinary team across product, AI, backend, mobile, 
            infrastructure, networking and security, dedicated to solving 
            real problems for students.
          </p>
        </motion.div>
      </section>

      {/* Team Grid */}
      <section className="px-6 md:px-12 max-w-7xl mx-auto mt-16 pb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {teamMembers.map((member, index) => (
            <TeamCard key={member.id} member={member} index={index} />
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 md:px-12 max-w-4xl mx-auto pb-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative rounded-3xl bg-[#151B23] border border-[#26303D] p-10 text-center"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[#22C55E]/5 to-emerald-500/5 rounded-3xl" />
          
          <div className="relative z-10 h-full flex flex-col">
            <h3 className="text-2xl md:text-3xl font-bold text-[#F8FAFC] mb-3">
              Join the team
            </h3>
            <p className="text-[#94A3B8] max-w-xl mx-auto">
              We're always looking for passionate students who want to build the future of education.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mt-6">
              <a 
                href="https://github.com/sugaredcookie/justAsk" 
                className="inline-flex items-center gap-2 bg-[#22C55E] hover:bg-[#16A34A] text-white px-6 py-3 rounded-full font-medium transition-colors shadow-lg shadow-[#22C55E]/20"
              >
                <Github size={18} />
                View on GitHub
                <ArrowRight size={16} />
              </a>
              <Link 
                to="/" 
                className="inline-flex items-center gap-2 border border-[#26303D] hover:border-[#94A3B8] px-6 py-3 rounded-full font-medium transition-colors"
              >
                Explore justAsk
              </Link>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#26303D] px-6 md:px-12 py-8 text-[#94A3B8] text-sm flex flex-wrap justify-between items-center max-w-7xl mx-auto">
        <div className="flex items-center gap-4">
          <span className="text-white font-semibold">justAsk</span>
          <span>·</span>
          <span>Made with ❤️ by the JustAsk Team</span>
        </div>
        <div className="flex gap-6 mt-4 md:mt-0">
          <a href="https://github.com/sugaredcookie/justAsk" className="hover:text-white transition-colors">GitHub</a>
          <Link to="/" className="hover:text-white transition-colors">Home</Link>
        </div>
      </footer>
    </div>
  );
};

export default MastheadPage;