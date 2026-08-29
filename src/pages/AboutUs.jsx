import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Brain, ArrowLeft, Users, Target, Zap } from "lucide-react";
import Footer from "../components/Footer";

export default function AboutUs() {
  return (
    <div className="min-h-screen bg-[#05050A] text-white font-sans overflow-x-hidden flex flex-col">
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-purple-700/20 rounded-full blur-[120px] pointer-events-none" />
      <nav className="flex items-center justify-between px-6 md:px-8 py-6 max-w-[1600px] mx-auto w-full relative z-10 border-b border-white/5">
        <Link to="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity"><Brain className="text-purple-500" size={28} /><span className="text-xl font-bold tracking-wide">DocuMind</span></Link>
        <Link to="/" className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors"><ArrowLeft size={16} /> <span className="hidden sm:inline">Back to Home</span></Link>
      </nav>
      <main className="flex-1 max-w-[1200px] mx-auto px-6 md:px-8 py-16 md:py-20 w-full relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">Built for the <span className="text-purple-400">Future of Learning</span></h1>
          <p className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">DocuMind was created with a single mission: to make complex study materials accessible, interactive, and easy to understand for everyone.</p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="bg-[#0B0B14] border border-white/10 p-8 rounded-2xl"><Target className="text-cyan-400 mb-6" size={32} /><h3 className="text-xl font-bold mb-3">Our Mission</h3><p className="text-gray-400 text-sm md:text-base">To democratize education by turning any static document into an interactive, personalized AI teacher.</p></motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="bg-[#0B0B14] border border-white/10 p-8 rounded-2xl"><Zap className="text-purple-400 mb-6" size={32} /><h3 className="text-xl font-bold mb-3">The Technology</h3><p className="text-gray-400 text-sm md:text-base">Powered by cutting-edge LLMs and vector databases to ensure hyper-accurate, context-aware answers.</p></motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="bg-[#0B0B14] border border-white/10 p-8 rounded-2xl"><Users className="text-emerald-400 mb-6" size={32} /><h3 className="text-xl font-bold mb-3">The Team</h3><p className="text-gray-400 text-sm md:text-base">Developed by passionate builders aiming to solve real-world problems in the student and research community.</p></motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
}