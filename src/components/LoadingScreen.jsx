import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Brain, FileText, MessageSquare, HelpCircle, File } from "lucide-react";

export default function LoadingScreen({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [statusText, setStatusText] = useState("Understanding your content...");

  useEffect(() => {
    const duration = 7000; // 7 seconds (matching video length)
    const intervalTime = 50;
    const steps = duration / intervalTime;
    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      const currentProgress = Math.min((currentStep / steps) * 100, 100);
      setProgress(currentProgress);

      if (currentProgress < 30) setStatusText("Understanding your content...");
      else if (currentProgress < 60) setStatusText("Let's make this simple.");
      else if (currentProgress < 95) setStatusText("Preparing your learning experience...");
      else setStatusText("Ready to Learn Smarter.");

      if (currentProgress >= 100) {
        clearInterval(timer);
        setTimeout(onComplete, 800);
      }
    }, intervalTime);
    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <motion.div
      key="loading-screen"
      exit={{ opacity: 0, scale: 1.1, filter: "blur(10px)" }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="fixed inset-0 bg-[#05050A] flex flex-col items-center justify-center z-50 overflow-hidden"
    >
      {/* Deep Space Background / Particles Simulation */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/20 via-[#05050A] to-[#05050A]"></div>
      
      {/* --- Center 3D Hologram Effect --- */}
      <div className="relative flex flex-col items-center justify-center h-64 w-full max-w-md mb-12">
        
        {/* Orbital Rings */}
        <motion.div 
          animate={{ rotate: 360 }} 
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute w-72 h-72 rounded-full border border-white/5 flex items-center justify-center"
        >
          {/* Orbiting Icons */}
          <div className="absolute -top-4 bg-[#0B0B14] p-2 rounded border border-white/10 text-red-400 text-xs font-bold shadow-[0_0_10px_rgba(248,113,113,0.3)]"><FileText size={16} /></div>
          <div className="absolute -bottom-4 bg-[#0B0B14] p-2 rounded border border-white/10 text-blue-400 text-xs font-bold shadow-[0_0_10px_rgba(96,165,250,0.3)]"><File size={16} /></div>
          <div className="absolute -left-4 bg-[#0B0B14] p-2 rounded border border-white/10 text-green-400 text-xs font-bold shadow-[0_0_10px_rgba(74,222,128,0.3)]"><FileText size={16} /></div>
          <div className="absolute -right-4 bg-[#0B0B14] p-2 rounded border border-white/10 text-orange-400 text-xs font-bold shadow-[0_0_10px_rgba(251,146,60,0.3)]"><File size={16} /></div>
        </motion.div>

        {/* Floating Chat Bubbles (from video) */}
        <motion.div animate={{ y: [-10, 10, -10], opacity: [0.5, 1, 0.5] }} transition={{ duration: 4, repeat: Infinity }} className="absolute top-10 right-10 text-gray-400 backdrop-blur-md bg-white/5 border border-white/10 p-2 rounded-xl">
          <HelpCircle size={18} />
        </motion.div>
        <motion.div animate={{ y: [10, -10, 10], opacity: [0.5, 1, 0.5] }} transition={{ duration: 5, repeat: Infinity }} className="absolute bottom-16 left-10 text-purple-400 backdrop-blur-md bg-white/5 border border-white/10 p-2 rounded-xl">
          <MessageSquare size={18} />
        </motion.div>

        {/* Brain Element */}
        <motion.div 
          animate={{ scale: [1, 1.05, 1], filter: ["drop-shadow(0px 0px 15px #8B5CF6)", "drop-shadow(0px 0px 35px #c084fc)", "drop-shadow(0px 0px 15px #8B5CF6)"] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          className="text-purple-400 z-10"
        >
          <Brain size={100} strokeWidth={1} />
        </motion.div>

        {/* Holographic Base (The glowing circle below the brain) */}
        <div className="absolute bottom-4 w-48 h-12 rounded-[100%] border border-cyan-500/40 bg-cyan-500/5 shadow-[0_0_30px_rgba(6,182,212,0.3)] flex items-center justify-center z-0 scale-x-150">
          <motion.div animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }} transition={{ duration: 2, repeat: Infinity }} className="w-full h-full rounded-[100%] border border-cyan-400/50" />
        </div>
      </div>

      {/* --- Text & Progress Bar --- */}
      <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="flex flex-col items-center z-10 w-full max-w-md px-8">
        <h1 className="text-4xl font-bold tracking-tight mb-2">
          <span className="text-white">Docu</span>
          <span className="text-purple-400">Mind</span>
        </h1>
        <p className="text-gray-400 text-sm mb-10 tracking-wide text-center">
          Your AI Teacher. Any Document. Any Language.
        </p>

        {/* Dynamic Status Text */}
        <p className="text-cyan-400 text-xs font-medium tracking-widest uppercase mb-4 h-4">
          {statusText}
        </p>

        {/* Loading Bar with Percentage */}
        <div className="w-full flex items-center gap-4">
          <div className="flex-1 h-1.5 bg-white/10 rounded-full overflow-hidden relative backdrop-blur-sm">
            <motion.div
              className="absolute top-0 left-0 h-full bg-gradient-to-r from-purple-500 via-cyan-400 to-purple-500 shadow-[0_0_10px_rgba(6,182,212,0.5)]"
              style={{ width: `${progress}%` }}
            />
          </div>
          <div className="text-white font-mono text-xs w-8 text-right font-bold">
            {Math.floor(progress)}%
          </div>
        </div>
      </motion.div>

    </motion.div>
  );
}