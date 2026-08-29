import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Brain, ArrowLeft, CheckCircle2 } from "lucide-react";
import Footer from "../components/Footer";

export default function Pricing() {
  return (
    <div className="min-h-screen bg-[#05050A] text-white font-sans overflow-x-hidden flex flex-col">
      <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-purple-700/20 rounded-full blur-[120px] pointer-events-none" />
      <nav className="flex items-center justify-between px-6 md:px-8 py-6 max-w-[1600px] mx-auto w-full relative z-10 border-b border-white/5">
        <Link to="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity"><Brain className="text-purple-500" size={28} /><span className="text-xl font-bold tracking-wide">DocuMind</span></Link>
        <Link to="/" className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors"><ArrowLeft size={16} /> <span className="hidden sm:inline">Back to Home</span></Link>
      </nav>
      <main className="flex-1 max-w-[1200px] mx-auto px-6 md:px-8 py-16 md:py-20 w-full relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">Simple, transparent <span className="text-purple-400">Pricing</span></h1>
          <p className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto">Start for free, upgrade when you need more power.</p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20 items-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="bg-[#0B0B14] border border-white/10 p-8 rounded-3xl">
            <h3 className="text-xl font-semibold mb-2">Basic</h3>
            <div className="text-4xl font-bold mb-6">Free</div>
            <ul className="space-y-4 mb-8 text-gray-400 text-sm">
              <li className="flex gap-3"><CheckCircle2 size={18} className="text-gray-500 shrink-0"/> 5 Documents per month</li>
              <li className="flex gap-3"><CheckCircle2 size={18} className="text-gray-500 shrink-0"/> Up to 10 pages per PDF</li>
              <li className="flex gap-3"><CheckCircle2 size={18} className="text-gray-500 shrink-0"/> Standard AI Models</li>
            </ul>
            <button className="w-full py-3 rounded-xl border border-white/10 hover:bg-white/5 transition-colors font-medium">Get Started</button>
          </motion.div>
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2 }} className="bg-gradient-to-b from-purple-900/20 to-[#0B0B14] border border-purple-500/50 p-8 rounded-3xl relative shadow-[0_0_30px_rgba(147,51,234,0.2)] md:scale-105 my-4 md:my-0">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-purple-500 to-cyan-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider whitespace-nowrap">Most Popular</div>
            <h3 className="text-xl font-semibold mb-2 text-purple-400">Pro Student</h3>
            <div className="text-4xl font-bold mb-6">₹199<span className="text-lg text-gray-500 font-normal">/mo</span></div>
            <ul className="space-y-4 mb-8 text-gray-300 text-sm">
              <li className="flex gap-3"><CheckCircle2 size={18} className="text-purple-400 shrink-0"/> Unlimited Documents</li>
              <li className="flex gap-3"><CheckCircle2 size={18} className="text-purple-400 shrink-0"/> Up to 500 pages per PDF</li>
              <li className="flex gap-3"><CheckCircle2 size={18} className="text-purple-400 shrink-0"/> Advanced Teacher Mode</li>
            </ul>
            <button className="w-full py-3 rounded-xl bg-purple-600 hover:bg-purple-700 transition-colors font-medium shadow-[0_0_15px_rgba(147,51,234,0.4)]">Upgrade to Pro</button>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="bg-[#0B0B14] border border-white/10 p-8 rounded-3xl">
            <h3 className="text-xl font-semibold mb-2">Ultimate</h3>
            <div className="text-4xl font-bold mb-6">₹499<span className="text-lg text-gray-500 font-normal">/mo</span></div>
            <ul className="space-y-4 mb-8 text-gray-400 text-sm">
              <li className="flex gap-3"><CheckCircle2 size={18} className="text-cyan-400 shrink-0"/> Everything in Pro</li>
              <li className="flex gap-3"><CheckCircle2 size={18} className="text-cyan-400 shrink-0"/> API Access</li>
              <li className="flex gap-3"><CheckCircle2 size={18} className="text-cyan-400 shrink-0"/> Priority Support</li>
            </ul>
            <button className="w-full py-3 rounded-xl border border-white/10 hover:bg-white/5 transition-colors font-medium">Contact Sales</button>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
}