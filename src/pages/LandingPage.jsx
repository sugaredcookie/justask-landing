import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Menu, X, Download,
  GraduationCap, Briefcase, Heart,
  MessageCircle, Calendar, Check,
  Smartphone, Apple
} from 'lucide-react';

const categories = [
  {
    title: 'Skill Exchange',
    icon: <GraduationCap className="w-6 h-6 text-[#22C55E]" />,
    examples: [
      'I know React, you know Flutter. Seems useful.',
      'Teach Guitar ↔ Learn Singing (badly)',
      'You know Calculus? Unfortunately, someone needs you.'
    ]
  },
  {
    title: 'Work & Earn',
    icon: <Briefcase className="w-6 h-6 text-[#22C55E]" />,
    examples: [
      'Poster Design · someone\'s probably paying for it',
      "Small freelance jobs (no, not your assignment..but who's gonna stop you.)",
      'Coding Help · debugging someone else\'s mess',
      'Video Editing · cuts, memes, whatever',
      'Resume Reviews · lie better, professionally'
    ]
  },
  {
    title: 'Volunteer',
    icon: <Heart className="w-6 h-6 text-[#22C55E]" />,
    examples: [
      'Help a junior survive college',
      'Interview Mentoring · pretend you know things',
      'Peer Learning · teach, learn, repeat',
      'College Events · someone has to do it'
    ]
  }
];

const seasonalEvents = [
  'Hackathon Team Formation', 'Placement Preparation', 'Internship Season',
  'Exam Discussions', 'College Fest Volunteers', 'Fresher Guidance'
];

const plannedFeatures = [
  'Student Profiles', 'Ratings', 'Reviews', 'University Verification',
  'AI Recommendations', 'Notifications', 'Saved Posts', 'AI Moderation',
  'Admin Dashboard', 'Search', 'Filters', 'Tags'
];

export default function LandingPage() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) setIsNavOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const fadeUp = {
    initial: { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  return (
    <div className="min-h-screen bg-[#0B0F14] text-[#F8FAFC] font-sans overflow-x-hidden">
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 px-6 md:px-12 py-4 flex items-center justify-between transition-all duration-300 ${
          scrolled 
            ? 'bg-[#0B0F14]/95 backdrop-blur-xl shadow-[0_1px_0_0_rgba(38,48,61,0.3)]' 
            : 'bg-transparent'
        }`}
      >
        <div className="flex items-center gap-2">
          <span className="text-2xl font-bold tracking-tight text-white">justAsk</span>
          <span className="hidden md:inline text-xs font-medium text-[#22C55E] bg-[#22C55E]/10 px-2 py-0.5 rounded-full">we need a logo</span>
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-[#94A3B8]">
          <a href="#features" className="hover:text-white transition-colors">Features</a>
          <a href="#categories" className="hover:text-white transition-colors">Categories</a>
          <Link to="/masthead" className="hover:text-white transition-colors">Team</Link>
          <a href="#download" className="bg-[#22C55E] hover:bg-[#16A34A] text-white px-5 py-2.5 rounded-full text-sm font-medium transition-colors shadow-lg shadow-[#22C55E]/20">Download</a>
        </div>
        <button className="md:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors" onClick={() => setIsNavOpen(!isNavOpen)}>
          {isNavOpen ? <X size={28} /> : <Menu size={28} />}
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
            <a href="#features" onClick={() => setIsNavOpen(false)} className="hover:text-[#22C55E] transition-colors">Features</a>
            <a href="#categories" onClick={() => setIsNavOpen(false)} className="hover:text-[#22C55E] transition-colors">Categories</a>
            <Link to="/masthead" onClick={() => setIsNavOpen(false)} className="hover:text-[#22C55E] transition-colors">Team</Link>
            <a href="#download" onClick={() => setIsNavOpen(false)} className="bg-[#22C55E] hover:bg-[#16A34A] px-8 py-3 rounded-full transition-colors">Download</a>
          </motion.div>
        )}
      </AnimatePresence>

      <section className="pt-32 md:pt-44 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.1]">
              Students helping <br className="hidden md:block" />
              <span className="text-[#22C55E]">Students.</span>
            </h1>
            <p className="mt-6 text-lg md:text-xl text-[#94A3B8] max-w-lg leading-relaxed">
              Students need help with random shit all the time. Finding someone who can actually help is the annoying part. So we built justAsk.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#download" className="bg-[#26303D] text-[#94A3B8] px-8 py-4 rounded-full font-medium flex items-center gap-2 cursor-not-allowed opacity-60">
                <Smartphone size={20} /> Android <br /> (Coming soon)
              </a>
              <a href="#download" className="bg-[#26303D] text-[#94A3B8] px-8 py-4 rounded-full font-medium flex items-center gap-2 cursor-not-allowed opacity-60">
                <Apple size={20} /> iOS <br /> (Coming soon...<br />couldn't find the apple logo)
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="bg-[#151B23] rounded-2xl border border-[#26303D] p-5 shadow-2xl w-full max-w-md mx-auto lg:ml-auto"
          >
            <div className="flex items-center gap-3 border-b border-[#26303D] pb-3 mb-4">
              <div className="w-3 h-3 rounded-full bg-[#22C55E]"></div>
              <span className="text-sm font-medium text-[#94A3B8]">Feed · justAsk</span>
            </div>
            <div className="space-y-4">
              {[
                { icon: <GraduationCap size={18} />, title: 'Skill Exchange', desc: 'Teach Flutter ↔ Learn React' },
                { icon: <Briefcase size={18} />, title: 'Work & Earn', desc: 'Poster Design · someone\'s probably paying for it' },
                { icon: <Heart size={18} />, title: 'Volunteer', desc: 'Interview Mentoring · 3 spots' }
              ].map((item, idx) => (
                <div key={idx} className="bg-[#0B0F14]/80 rounded-xl p-4 border border-[#26303D]/60 flex items-start gap-3 hover:border-[#22C55E]/40 transition-colors">
                  <div className="bg-[#22C55E]/10 p-2 rounded-lg text-[#22C55E] flex-shrink-0">{item.icon}</div>
                  <div>
                    <div className="font-medium text-[#F8FAFC]">{item.title}</div>
                    <div className="text-sm text-[#94A3B8]">{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-4 text-xs text-[#94A3B8] flex items-center gap-4 border-t border-[#26303D] pt-3">
              <span>✨ 12 requests</span>
              <span>💬 8 chats</span>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="px-6 md:px-12 max-w-4xl mx-auto mt-24 text-center">
        <motion.div {...fadeUp}>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight leading-tight">
            Built for university students,<br />beyond academics.
          </h2>
          <p className="mt-4 text-[#94A3B8] text-lg max-w-2xl mx-auto leading-relaxed">
            justAsk is where students help each other not fail. Find someone who actually knows the thing you're stuck on, or make a few bucks doing something you're actually good at. No LinkedIn energy, just people helping people not lose their fucking minds.
          </p>
        </motion.div>
      </section>

      <section id="categories" className="px-6 md:px-12 max-w-6xl mx-auto mt-28">
        <h3 className="text-3xl font-bold mb-12 tracking-tight">Categories</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((cat, idx) => (
            <motion.div
              key={idx}
              {...fadeUp}
              transition={{ delay: idx * 0.1 }}
              className="bg-[#151B23] rounded-2xl p-8 border border-[#26303D]"
            >
              <div className="bg-[#22C55E]/10 w-12 h-12 rounded-xl flex items-center justify-center mb-5">{cat.icon}</div>
              <h4 className="text-2xl font-semibold text-[#F8FAFC]">{cat.title}</h4>
              <ul className="mt-4 space-y-2 text-[#94A3B8] text-sm">
                {cat.examples.map((ex, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="text-[#22C55E]">•</span> {ex}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="px-6 md:px-12 max-w-6xl mx-auto mt-28">
        <h3 className="text-3xl font-bold mb-6 tracking-tight">Seasonal Events</h3>
        <p className="text-[#94A3B8] mb-8">Appear during relevant periods — hackathons, placement prep, and more.</p>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {seasonalEvents.map((ev, i) => (
            <motion.div
              key={i}
              {...fadeUp}
              transition={{ delay: i * 0.05 }}
              className="bg-[#151B23] border border-[#26303D] rounded-xl px-5 py-4 flex items-center gap-3 hover:border-[#22C55E]/30 transition-colors"
            >
              <Calendar size={18} className="text-[#22C55E] flex-shrink-0" />
              <span className="font-medium text-[#F8FAFC]">{ev}</span>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="px-6 md:px-12 max-w-6xl mx-auto mt-28 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
          <div className="bg-[#151B23] rounded-2xl border border-[#26303D] p-5 shadow-xl">
            <div className="flex items-center gap-3 border-b border-[#26303D] pb-3">
              <div className="bg-[#22C55E]/20 p-1.5 rounded-full">
                <MessageCircle size={18} className="text-[#22C55E]" />
              </div>
              <span className="font-medium text-[#F8FAFC]">Direct Message</span>
              <span className="ml-auto text-xs bg-[#22C55E]/10 text-[#22C55E] px-2 py-0.5 rounded-full">negotiation</span>
            </div>
            <div className="mt-4 space-y-3">
              <div className="bg-[#0B0F14] rounded-xl p-3 border border-[#26303D]/50">
                <span className="text-sm text-[#F8FAFC]">Sanidhya: “I can help with Flutter, looking for React mentor.”</span>
              </div>
              <div className="bg-[#0B0F14] rounded-xl p-3 border border-[#26303D]/50 ml-6">
                <span className="text-sm text-[#F8FAFC]">Piyush: “Let's trade! I need Flutter, I know React.”</span>
              </div>
              <div className="bg-[#22C55E]/10 rounded-xl p-3 border border-[#22C55E]/20">
                <span className="text-sm text-[#22C55E]">Collaboration started</span>
              </div>
            </div>
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
          <h3 className="text-3xl font-bold text-[#F8FAFC]">Private conversations, <br />real outcomes.</h3>
          <p className="mt-4 text-[#94A3B8] text-lg leading-relaxed">
            DM people, figure out the details, and get stuff done. Whether it's a skill swap or a quick paid gig, it all starts with a message.
          </p>
        </motion.div>
      </section>

      <section className="px-6 md:px-12 max-w-6xl mx-auto mt-28">
        <h3 className="text-3xl font-bold mb-8 tracking-tight">Planned Features</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {plannedFeatures.map((f, i) => (
            <div key={i} className="bg-[#151B23] border border-[#26303D] rounded-xl px-4 py-3 flex items-center gap-2 text-sm hover:border-[#22C55E]/30 transition-colors">
              <Check size={14} className="text-[#22C55E] flex-shrink-0" />
              <span className="text-[#F8FAFC]">{f}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="px-6 md:px-12 max-w-4xl mx-auto mt-32 text-center">
        <motion.div {...fadeUp}>
          <h2 className="text-4xl md:text-6xl font-bold leading-tight tracking-tight">
            A place where students can <span className="text-[#22C55E]">learn, earn, help</span> and figure stuff out together.
          </h2>
        </motion.div>
      </section>

      <section id="download" className="px-6 md:px-12 max-w-4xl mx-auto mt-32 mb-20">
        <div className="bg-[#151B23] border border-[#26303D] rounded-3xl p-12 text-center shadow-2xl">
          <div className="mb-4">
            <div className="inline-flex items-center gap-2 bg-[#22C55E]/10 text-[#22C55E] px-4 py-1.5 rounded-full text-sm font-medium">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#22C55E] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#22C55E]"></span>
              </span>
              Under Development
            </div>
          </div>
          <h3 className="text-3xl md:text-5xl font-bold text-[#F8FAFC]">Something great is coming</h3>
          <p className="text-[#94A3B8] mt-4 max-w-lg mx-auto">
            We're building the student collaboration platform we wish existed. Stay tuned for the launch!
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <button 
              disabled
              className="bg-[#26303D] text-[#94A3B8] px-8 py-4 rounded-full font-medium flex items-center gap-2 cursor-not-allowed opacity-60"
            >
              <Smartphone size={20} /> Android (Coming Soon)
            </button>
            <button 
              disabled
              className="bg-[#26303D] text-[#94A3B8] px-8 py-4 rounded-full font-medium flex items-center gap-2 cursor-not-allowed opacity-60"
            >
              <Apple size={20} /> iOS (Coming Soon)
            </button>
          </div>
          <p className="text-xs text-[#94A3B8] mt-6">
            We'll notify you when the apps are ready. Stay tuned for updates!
          </p>
        </div>
      </section>

      <footer className="border-t border-[#26303D] px-6 md:px-12 py-10 text-[#94A3B8] text-sm flex flex-wrap justify-between items-center max-w-7xl mx-auto">
        <div className="flex items-center gap-4">
          <span className="text-white font-semibold">justAsk</span>
          <span>·</span>
          <span>Made with ❤️ by the justAsk Team...hope you like it</span>
        </div>
        <div className="flex gap-6 mt-4 md:mt-0">
          <Link to="/masthead" className="hover:text-white transition-colors">Team</Link>
        </div>
      </footer>
    </div>
  );
}