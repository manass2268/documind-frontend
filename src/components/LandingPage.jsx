import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Brain, Play, ShieldCheck, Wifi, Globe, Zap, Plus, GraduationCap, Languages, Bell, Camera, Menu, X } from "lucide-react";
import Footer from "./Footer";

export default function LandingPage({ onStart }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const stagger = { hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.3 } } };
  const fadeInUp = { hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 250, damping: 25 } } };

  return (
    <div className="min-h-screen bg-[#05050A] text-white font-sans overflow-x-hidden relative">
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-purple-700/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-[20%] right-[-10%] w-[600px] h-[600px] bg-indigo-700/15 rounded-full blur-[150px] pointer-events-none" />

      {/* Navbar */}
      <motion.nav initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5, duration: 0.8 }} className="flex items-center justify-between px-6 md:px-8 py-6 max-w-[1600px] mx-auto relative z-50">
        <div className="flex items-center gap-2">
          <Brain className="text-purple-500" size={28} />
          <span className="text-xl font-bold tracking-wide">DocuMind</span>
        </div>
        
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-300">
          <Link to="/features" className="hover:text-white transition-colors">Features</Link>
          <Link to="/how-it-works" className="hover:text-white transition-colors">How It Works</Link>
          <Link to="/pricing" className="hover:text-white transition-colors">Pricing</Link>
        </div>

        <div className="hidden md:flex items-center gap-4">
          <Link to="/login" className="text-sm font-medium hover:text-purple-400 transition-colors">Login</Link>
          <button onClick={onStart} className="bg-purple-600 hover:bg-purple-700 text-white px-5 py-2.5 rounded-lg text-sm font-medium transition-all shadow-[0_0_20px_rgba(147,51,234,0.3)]">
            Get Started Free
          </button>
        </div>

        <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </motion.nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-[80px] left-0 w-full bg-[#05050A]/95 backdrop-blur-2xl border-b border-white/10 p-6 flex flex-col gap-6 z-40 shadow-2xl">
          <Link to="/features" className="text-lg font-medium text-gray-300" onClick={() => setIsMenuOpen(false)}>Features</Link>
          <Link to="/how-it-works" className="text-lg font-medium text-gray-300" onClick={() => setIsMenuOpen(false)}>How It Works</Link>
          <Link to="/pricing" className="text-lg font-medium text-gray-300" onClick={() => setIsMenuOpen(false)}>Pricing</Link>
          <div className="h-px w-full bg-white/10 my-2"></div>
          <Link to="/login" className="text-lg font-medium text-purple-400" onClick={() => setIsMenuOpen(false)}>Login</Link>
          <button onClick={() => { setIsMenuOpen(false); onStart(); }} className="bg-purple-600 text-white px-5 py-3 rounded-xl font-medium w-full text-center">
            Get Started Free
          </button>
        </div>
      )}

      {/* Hero */}
      <main className="max-w-[1600px] mx-auto px-6 md:px-8 pt-8 md:pt-12 pb-24 grid grid-cols-1 lg:grid-cols-2 gap-16 relative z-10">
        <motion.div variants={stagger} initial="hidden" animate="show" className="flex flex-col justify-center">
          <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-medium w-max mb-6">
            <Zap size={16} /> AI-Powered Study Assistant
          </motion.div>
          <motion.h1 variants={fadeInUp} className="text-4xl md:text-5xl lg:text-7xl font-bold leading-[1.1] tracking-tight mb-6">
            Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-600">AI Teacher.</span><br/>
            Any Document.<br/>
            Any <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-600">Language.</span>
          </motion.h1>
          <motion.p variants={fadeInUp} className="text-gray-400 text-base md:text-lg max-w-xl mb-10 leading-relaxed">
            DocuMind turns PDFs and lectures into interactive lessons. Get step-by-step explanations, solve assignments, set reminders, and learn in your own language.
          </motion.p>
          <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-4 mb-12">
            <button onClick={onStart} className="bg-gradient-to-r from-purple-600 to-violet-600 hover:opacity-90 text-white px-8 py-4 rounded-xl font-medium transition-all shadow-[0_0_30px_rgba(147,51,234,0.4)] flex items-center justify-center gap-2">
              Start Learning Now <Play size={18} fill="currentColor" />
            </button>
            <Link to="/how-it-works" className="px-8 py-4 rounded-xl font-medium border border-white/10 hover:bg-white/5 transition-all flex items-center justify-center gap-2">
              <Play size={18} /> See How It Works
            </Link>
          </motion.div>
          <motion.div variants={fadeInUp} className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm font-medium text-gray-300">
            <div className="flex flex-col gap-1"><span className="flex items-center gap-2 text-emerald-400"><ShieldCheck size={16}/> 100% Private</span></div>
            <div className="flex flex-col gap-1"><span className="flex items-center gap-2 text-yellow-400"><Wifi size={16}/> Works Offline</span></div>
            <div className="flex flex-col gap-1"><span className="flex items-center gap-2 text-blue-400"><Globe size={16}/> Multi-language</span></div>
          </motion.div>
        </motion.div>

        {/* Mockup */}
        <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.6, duration: 0.8 }} className="relative rounded-2xl bg-[#0B0B14] border border-white/10 shadow-[0_0_50px_rgba(147,51,234,0.15)] flex overflow-hidden lg:aspect-auto h-[500px] md:h-auto">
          <div className="w-48 bg-[#07070B] border-r border-white/5 p-4 flex flex-col hidden md:flex">
            <div className="flex items-center gap-2 mb-6"><Brain className="text-purple-500" size={20} /><span className="font-bold text-sm">DocuMind</span></div>
            <button className="w-full bg-purple-600/20 text-purple-400 border border-purple-500/30 rounded-lg py-2 text-xs font-semibold flex items-center justify-center gap-1 mb-6"><Plus size={14} /> New Chat</button>
            <div className="text-[10px] text-gray-500 uppercase font-bold mb-2">Today</div>
            <div className="text-xs text-gray-300 bg-white/5 p-2 rounded mb-4">💬 Bhai budget kya hai?</div>
          </div>
          <div className="flex-1 flex flex-col bg-[#0A0A10] relative">
            <div className="h-12 border-b border-white/5 flex items-center px-4"><span className="text-xs font-medium flex items-center gap-2 text-gray-300"><GraduationCap size={14} className="text-purple-400" /> Teacher Mode</span></div>
            <div className="flex-1 p-4 overflow-y-auto flex flex-col gap-4">
              <div className="self-end bg-purple-600 text-white text-xs px-4 py-2 rounded-2xl rounded-tr-sm max-w-[80%]">Bhai budget kya hai?</div>
              <div className="self-start text-xs text-gray-300 max-w-[90%] leading-relaxed">Budget ek financial plan hota hai jo batata hai ki expected income aur expenses kya honge. Chalo ise asaan shabdon me samajhte hain. 👇</div>
              <div className="bg-[#12121A] border border-emerald-500/20 rounded-xl p-4 w-full shadow-lg">
                <div className="flex items-center gap-2 text-emerald-400 text-xs mb-3 font-medium"><GraduationCap size={14} /> Blackboard Style Explanation</div>
                <div className="font-mono text-gray-300 text-xs space-y-2 leading-loose">
                  <div><span className="text-purple-400">Budget</span> = Income - Expenses</div>
                  <div>• <span className="text-cyan-400">Income:</span> Jo paise aap kamate ho</div>
                </div>
              </div>
            </div>
            <div className="p-4 border-t border-white/5">
              <div className="bg-[#151520] rounded-xl flex items-center p-2 border border-white/10">
                <input type="text" placeholder="Ask anything..." className="bg-transparent flex-1 outline-none text-xs px-2 text-white" />
                <button className="bg-purple-600 p-1.5 rounded-lg"><Zap size={14} fill="currentColor" className="text-white" /></button>
              </div>
            </div>
          </div>
        </motion.div>
      </main>

      <motion.section initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-[1600px] mx-auto px-6 md:px-8 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {[ { title: "Teacher Mode", desc: "Step-by-step lessons.", icon: <GraduationCap size={24}/> }, { title: "Auto Language", desc: "Hinglish, Hindi or English.", icon: <Languages size={24}/> }, { title: "Auto Memory", desc: "Remembers context.", icon: <Brain size={24}/> }, { title: "Reminders", desc: "Set study goals.", icon: <Bell size={24}/> }, { title: "Voice & Camera", desc: "Ask via voice/photos.", icon: <Camera size={24}/> }, { title: "Works Offline", desc: "PWA + Offline mode.", icon: <Wifi size={24}/> } ].map((feature, i) => (
            <div key={i} className="bg-[#0B0B14]/80 backdrop-blur-md border border-purple-500/20 rounded-2xl p-5 hover:bg-purple-900/10 hover:border-purple-500/50 transition-all cursor-pointer group">
              <div className="text-purple-400 mb-3 group-hover:scale-110 transition-transform duration-300">{feature.icon}</div>
              <h3 className="font-semibold text-sm text-gray-200 mb-1">{feature.title}</h3>
              <p className="text-xs text-gray-500">{feature.desc}</p>
            </div>
          ))}
        </div>
      </motion.section>
      <Footer />
    </div>
  );
}