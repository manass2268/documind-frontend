import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Brain, ArrowLeft, UploadCloud, Cpu, GraduationCap } from "lucide-react";
import Footer from "../components/Footer";

export default function HowItWorks() {
  const steps = [
    { icon: <UploadCloud size={32} md:size={40} />, title: "1. Upload Material", desc: "Drag and drop your PDFs, lecture slides, or scanned notes into DocuMind. We support multiple formats natively." },
    { icon: <Cpu size={32} md:size={40} />, title: "2. AI Processing", desc: "Our advanced models instantly parse the text, understand context, and structure the data into a smart knowledge graph." },
    { icon: <GraduationCap size={32} md:size={40} />, title: "3. Start Learning", desc: "Ask questions, generate flashcards, or switch on Teacher Mode for step-by-step blackboard-style explanations." }
  ];

  return (
    <div className="min-h-screen bg-[#05050A] text-white font-sans overflow-x-hidden flex flex-col">
      <div className="absolute top-[20%] left-[-10%] w-[500px] h-[500px] bg-cyan-700/15 rounded-full blur-[150px] pointer-events-none" />
      <nav className="flex items-center justify-between px-6 md:px-8 py-6 max-w-[1600px] mx-auto w-full relative z-10 border-b border-white/5">
        <Link to="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity"><Brain className="text-purple-500" size={28} /><span className="text-xl font-bold tracking-wide">DocuMind</span></Link>
        <Link to="/" className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors"><ArrowLeft size={16} /> <span className="hidden sm:inline">Back to Home</span></Link>
      </nav>
      <main className="flex-1 max-w-[1200px] mx-auto px-6 md:px-8 py-16 md:py-20 w-full relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16 md:mb-20">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">How it <span className="text-cyan-400">Works</span></h1>
          <p className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto">From upload to understanding in seconds.</p>
        </motion.div>
        <div className="space-y-12 md:space-y-16 max-w-4xl mx-auto mb-20 relative">
          <div className="absolute left-[39px] top-10 bottom-10 w-0.5 bg-gradient-to-b from-purple-500 via-cyan-500 to-transparent hidden md:block"></div>
          {steps.map((step, i) => (
            <motion.div key={i} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="flex flex-col md:flex-row gap-6 md:gap-8 items-start relative">
              <div className="bg-[#0B0B14] border border-white/20 w-16 h-16 md:w-20 md:h-20 rounded-2xl flex items-center justify-center text-white shrink-0 shadow-[0_0_20px_rgba(255,255,255,0.05)] relative z-10">{step.icon}</div>
              <div className="pt-2 md:pt-4">
                <h3 className="text-xl md:text-2xl font-bold mb-2 md:mb-3">{step.title}</h3>
                <p className="text-gray-400 text-sm md:text-lg leading-relaxed">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}