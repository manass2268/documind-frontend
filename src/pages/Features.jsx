import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Brain, ArrowLeft, Zap, GraduationCap, Globe } from "lucide-react";
import Footer from "../components/Footer";

export default function Features() {
  return (
    <div className="min-h-screen bg-[#05050A] text-white font-sans overflow-x-hidden flex flex-col">
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-purple-700/20 rounded-full blur-[120px] pointer-events-none" />
      <nav className="flex items-center justify-between px-6 md:px-8 py-6 max-w-[1600px] mx-auto w-full relative z-10 border-b border-white/5">
        <Link to="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity"><Brain className="text-purple-500" size={28} /><span className="text-xl font-bold tracking-wide">DocuMind</span></Link>
        <Link to="/" className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors"><ArrowLeft size={16} /> <span className="hidden sm:inline">Back to Home</span></Link>
      </nav>
      <main className="flex-1 max-w-[1200px] mx-auto px-6 md:px-8 py-16 md:py-20 w-full relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">Powerful <span className="text-purple-400">Features</span></h1>
          <p className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto">Everything you need to master your syllabus in record time.</p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {[
            { icon: <GraduationCap size={32}/>, title: "Teacher Mode", desc: "AI explains concepts step-by-step like a real professor with blackboard examples." },
            { icon: <Globe size={32}/>, title: "Multi-Language", desc: "Upload English PDFs and learn in Hindi, Hinglish, or any regional language instantly." },
            { icon: <Zap size={32}/>, title: "Instant Summaries", desc: "Convert 100-page documents into 2-page quick revision notes in seconds." }
          ].map((item, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} className="bg-[#0B0B14] border border-white/10 p-8 rounded-2xl hover:border-purple-500/50 transition-colors">
              <div className="text-purple-400 mb-6 bg-purple-500/10 w-16 h-16 rounded-xl flex items-center justify-center">{item.icon}</div>
              <h3 className="text-xl font-bold mb-3">{item.title}</h3>
              <p className="text-gray-400 leading-relaxed text-sm md:text-base">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}