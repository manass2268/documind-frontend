import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { 
  Upload, ChevronRight, Sparkles, MessageSquare, Zap, 
  Paperclip, FileText, ArrowLeft, Menu, FileUp, Mic, CornerDownLeft 
} from "lucide-react";

// YAHAN CHANGE KIYA HAI: userName prop add kiya
export default function ChatInterface({ openSidebar, userName = "Student" }) {
  const containerVariants = { hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.1 } } };
  const itemVariants = { hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } } };

  return (
    <div className="flex-1 flex flex-col relative h-full w-full bg-[#05050A] overflow-hidden">
      
      <div className="absolute inset-0 z-0 opacity-[0.15]" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '32px 32px' }} />
      <motion.div animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }} transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }} className="absolute top-[10%] left-[20%] w-[400px] h-[400px] bg-purple-600/20 rounded-full blur-[120px] z-0 pointer-events-none" />
      <motion.div animate={{ scale: [1, 1.5, 1], opacity: [0.2, 0.4, 0.2] }} transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }} className="absolute bottom-[20%] right-[10%] w-[500px] h-[500px] bg-cyan-600/15 rounded-full blur-[150px] z-0 pointer-events-none" />

      <div className="h-16 border-b border-white/5 flex items-center justify-between px-4 md:px-8 relative z-20 bg-[#05050A]/50 backdrop-blur-xl">
        <div className="flex items-center gap-3">
          <button className="text-gray-300 hover:text-white p-2 hover:bg-white/5 rounded-lg transition-colors cursor-pointer" onClick={openSidebar}>
            <Menu size={22} />
          </button>
          <Link to="/" className="hidden md:flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors">
            <ArrowLeft size={16} /> Home
          </Link>
          <ChevronRight size={14} className="hidden md:block text-gray-600" />
          <div className="flex items-center gap-2">
            <span className="relative flex h-2 w-2"><span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span><span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span></span>
            <span className="text-gray-200 text-sm font-medium tracking-wide">Workspace Ready</span>
          </div>
        </div>
        <button className="text-xs md:text-sm px-4 py-2 bg-gradient-to-r from-purple-600/20 to-cyan-600/20 hover:from-purple-600/40 hover:to-cyan-600/40 border border-purple-500/30 rounded-full transition-all flex items-center gap-2 text-purple-300 hover:text-white shadow-[0_0_15px_rgba(168,85,247,0.15)] cursor-pointer">
          <Upload size={14} /> <span className="hidden sm:block font-medium">Upload PDF</span><span className="sm:hidden font-medium">Upload</span>
        </button>
      </div>

      <div className="flex-1 overflow-y-auto flex flex-col items-center pt-12 md:pt-20 px-4 md:px-8 pb-40 relative z-10 scrollbar-hide">
        <motion.div variants={containerVariants} initial="hidden" animate="show" className="w-full max-w-4xl flex flex-col items-center">
          
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-gray-300 text-xs font-medium mb-8 backdrop-blur-md">
            <Sparkles size={14} className="text-yellow-400" /> AI Powered Study Environment
          </motion.div>

          {/* YAHAN CHANGE KIYA HAI: Hardcoded naam ki jagah dynamic variable lagaya hai */}
          <motion.h2 variants={itemVariants} className="text-4xl md:text-6xl font-bold mb-4 tracking-tight text-center text-white">
            Hello, <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-fuchsia-400 to-cyan-400 animate-gradient-x">{userName}</span>
          </motion.h2>
          
          <motion.p variants={itemVariants} className="text-gray-400 text-base md:text-lg mb-12 text-center max-w-2xl leading-relaxed">
            I'm your personal AI tutor. Drop a syllabus, a research paper, or lecture notes below, and let's start learning together.
          </motion.p>

          <motion.div variants={itemVariants} className="w-full max-w-2xl mb-12">
            <div className="group relative w-full rounded-3xl border-2 border-dashed border-white/10 hover:border-purple-500/50 bg-white/[0.02] hover:bg-purple-500/[0.02] transition-all duration-300 p-10 flex flex-col items-center justify-center cursor-pointer overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-b from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="h-16 w-16 mb-4 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:scale-110 group-hover:bg-purple-500/20 group-hover:text-purple-400 transition-all duration-300 shadow-xl">
                <FileUp size={32} className="text-gray-400 group-hover:text-purple-400 transition-colors" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Drag & drop your documents here</h3>
              <p className="text-sm text-gray-500 mb-6 text-center">Supports PDF, DOCX, PPTX, and TXT up to 50MB</p>
              <button className="px-6 py-2.5 bg-white/10 hover:bg-white/20 text-white text-sm font-medium rounded-xl border border-white/10 transition-colors">
                Browse Files
              </button>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-full">
            {[
              { icon: <FileText size={20}/>, title: "Summarize Notes", desc: "Get a quick 1-page overview", color: "purple" },
              { icon: <MessageSquare size={20}/>, title: "Chat with PDF", desc: "Ask direct questions to your file", color: "cyan" },
              { icon: <Zap size={20}/>, title: "Generate Quiz", desc: "Test your knowledge instantly", color: "fuchsia" }
            ].map((card, idx) => (
              <div key={idx} className="p-5 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition-all duration-300 cursor-pointer group backdrop-blur-xl relative overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-1">
                <div className={`absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-${card.color}-500/0 via-${card.color}-500 to-${card.color}-500/0 opacity-0 group-hover:opacity-100 transition-opacity`} />
                <div className="flex items-center gap-4 mb-3">
                  <div className={`text-${card.color}-400 bg-${card.color}-500/10 p-2.5 rounded-xl border border-${card.color}-500/20 group-hover:scale-110 transition-transform duration-300`}>
                    {card.icon}
                  </div>
                  <h3 className="font-semibold text-gray-200 text-sm">{card.title}</h3>
                </div>
                <p className="text-xs text-gray-500 leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </motion.div>

        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 w-full p-4 md:p-8 bg-gradient-to-t from-[#05050A] via-[#05050A]/95 to-transparent pt-32 z-30 pointer-events-none">
        <div className="max-w-3xl mx-auto relative group pointer-events-auto">
          <div className="absolute -inset-1.5 bg-gradient-to-r from-purple-600 via-fuchsia-600 to-cyan-600 rounded-3xl blur-[14px] opacity-20 group-hover:opacity-40 transition duration-500" />
          <div className="relative flex items-center bg-[#0B0B14]/90 backdrop-blur-2xl border border-white/15 rounded-2xl p-2 shadow-2xl focus-within:border-purple-500/50 transition-colors">
            <button className="p-3 text-gray-400 hover:text-purple-400 hover:bg-purple-500/10 rounded-xl transition-all cursor-pointer">
              <Paperclip size={20} />
            </button>
            <input type="text" className="flex-1 bg-transparent py-3 px-2 outline-none text-white placeholder-gray-500 text-sm md:text-base font-medium" placeholder="Ask anything or type '/' for commands..." />
            <div className="flex items-center gap-2 pr-1">
              <button className="p-3 text-gray-400 hover:text-cyan-400 hover:bg-cyan-500/10 rounded-xl transition-all cursor-pointer hidden sm:block">
                <Mic size={20} />
              </button>
              <button className="px-4 py-2.5 bg-white text-black hover:bg-gray-200 rounded-xl transition-all flex items-center justify-center cursor-pointer shadow-[0_0_15px_rgba(255,255,255,0.2)] gap-2 group/btn">
                <span className="font-semibold text-sm hidden sm:block">Send</span>
                <CornerDownLeft size={16} className="text-gray-600 group-hover/btn:text-black transition-colors" />
              </button>
            </div>
          </div>
          <div className="flex items-center justify-between mt-3 px-2">
            <div className="text-[10px] md:text-xs text-gray-500 font-medium tracking-wide">DocuMind AI can make mistakes. Verify important facts.</div>
            <div className="hidden md:flex items-center gap-2 text-[10px] text-gray-600 font-medium">Press <kbd className="px-1.5 py-0.5 rounded border border-gray-700 bg-gray-800/50">Enter ↵</kbd> to send</div>
          </div>
        </div>
      </div>
    </div>
  );
}