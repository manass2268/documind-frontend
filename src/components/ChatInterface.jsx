import React from "react";
import { motion } from "framer-motion";
import { Upload, ChevronRight, Sparkles, MessageSquare, Zap, Paperclip, FileText } from "lucide-react";

export default function ChatInterface() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } }
  };

  return (
    <div className="flex-1 flex flex-col relative h-full">
      {/* Top Navigation */}
      <div className="h-16 border-b border-white/5 flex items-center justify-between px-8 backdrop-blur-md">
        <div className="text-sm text-gray-400 flex items-center gap-2">
          <span>Dashboard</span>
          <ChevronRight size={14} className="text-gray-600" />
          <span className="text-gray-200">New Session</span>
        </div>
        <button className="text-sm px-4 py-1.5 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full transition-colors flex items-center gap-2 cursor-pointer text-white">
          <Upload size={14} /> Upload Knowledge
        </button>
      </div>

      {/* Center Content */}
      <div className="flex-1 overflow-y-auto flex flex-col items-center justify-center p-8 pb-32">
        <motion.div variants={containerVariants} initial="hidden" animate="show" className="w-full max-w-3xl flex flex-col items-center">
          <motion.div variants={itemVariants} className="p-3 bg-purple-500/10 border border-purple-500/20 rounded-2xl mb-6">
            <Sparkles className="text-purple-400" size={28} />
          </motion.div>
          
          <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-bold mb-4 tracking-tight text-center text-white">
            Welcome back, <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">Manas</span>
          </motion.h2>
          
          <motion.p variants={itemVariants} className="text-gray-400 text-lg mb-12 text-center max-w-xl">
            What would you like to explore today? Upload a new document or pick a suggested action to get started.
          </motion.p>
          
          <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full mb-12">
            {[
              { icon: <FileText size={20}/>, title: "Summarize Document", desc: "Get a 1-page summary of any lengthy PDF", color: "purple" },
              { icon: <MessageSquare size={20}/>, title: "Chat with Notes", desc: "Ask specific questions from your study material", color: "cyan" },
              { icon: <Zap size={20}/>, title: "Generate Quiz", desc: "Create flashcards & MCQs instantly", color: "violet" }
            ].map((card, idx) => (
              <div key={idx} className="p-5 rounded-2xl border border-white/5 bg-white/5 hover:bg-white/10 hover:border-white/20 transition-all cursor-pointer group backdrop-blur-sm relative overflow-hidden">
                <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-${card.color}-500/0 via-${card.color}-500/50 to-${card.color}-500/0 opacity-0 group-hover:opacity-100 transition-opacity`} />
                <div className={`mb-4 text-${card.color}-400 bg-${card.color}-500/10 w-10 h-10 rounded-lg flex items-center justify-center`}>
                  {card.icon}
                </div>
                <h3 className="font-semibold text-gray-200 mb-1">{card.title}</h3>
                <p className="text-sm text-gray-500">{card.desc}</p>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Glowing Bottom Input */}
      <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-[#05050A] via-[#05050A]/90 to-transparent pt-20">
        <div className="max-w-3xl mx-auto relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-3xl blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200" />
          <div className="relative flex items-center bg-[#0F0F16] border border-white/10 rounded-2xl p-2 shadow-2xl">
            <button className="p-3 text-gray-400 hover:text-white hover:bg-white/5 rounded-xl transition-colors cursor-pointer">
              <Paperclip size={20} />
            </button>
            <input 
              type="text" 
              className="flex-1 bg-transparent py-3 px-4 outline-none text-white placeholder-gray-500" 
              placeholder="Ask anything about your documents, or type '/' for commands..." 
            />
            <button className="p-3 bg-white text-black hover:bg-gray-200 rounded-xl transition-colors flex items-center justify-center cursor-pointer shadow-[0_0_15px_rgba(255,255,255,0.2)]">
              <Zap size={20} className="fill-black" />
            </button>
          </div>
          <div className="text-center mt-3 text-xs text-gray-600 font-medium tracking-wide">
            DocuMind AI can make mistakes. Consider verifying important information.
          </div>
        </div>
      </div>
    </div>
  );
}