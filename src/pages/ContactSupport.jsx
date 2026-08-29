import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Brain, ArrowLeft, Mail, Bug, MessageSquare, Send, Loader2, CheckCircle2 } from "lucide-react";
import Footer from "../components/Footer";

export default function ContactSupport() {
  const [ticketType, setTicketType] = useState("support");
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    // Fake API delay for hackathon demo
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-[#05050A] text-white font-sans overflow-x-hidden flex flex-col">
      <div className="absolute top-[10%] left-[-10%] w-[500px] h-[500px] bg-purple-700/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[-10%] w-[500px] h-[500px] bg-cyan-700/15 rounded-full blur-[120px] pointer-events-none" />

      {/* Navbar */}
      <nav className="flex items-center justify-between px-6 md:px-8 py-6 max-w-[1600px] mx-auto w-full relative z-10 border-b border-white/5">
        <Link to="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
          <Brain className="text-purple-500" size={28} />
          <span className="text-xl font-bold tracking-wide">DocuMind</span>
        </Link>
        <Link to="/" className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors">
          <ArrowLeft size={16} /> <span className="hidden sm:inline">Back to Home</span>
        </Link>
      </nav>

      <main className="flex-1 max-w-[1200px] mx-auto px-6 md:px-8 py-16 md:py-20 w-full relative z-10">
        
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">How can we <span className="text-purple-400">help you?</span></h1>
          <p className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto">
            Report bugs, request features, or get help with your account. We're here for you.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
          
          {/* Left Column: Direct Contact Info */}
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 }} className="lg:col-span-2 space-y-8">
            <div className="bg-[#0B0B14] border border-white/10 p-8 rounded-3xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-purple-600/10 rounded-full blur-[40px]" />
              <h3 className="text-xl font-bold mb-2">Direct Support</h3>
              <p className="text-gray-400 text-sm mb-6">Need immediate assistance? Drop us an email and our team will get back to you within 24 hours.</p>
              
              <div className="flex items-center gap-4 bg-white/5 border border-white/10 p-4 rounded-xl">
                <div className="p-3 bg-purple-500/20 rounded-lg text-purple-400">
                  <Mail size={20} />
                </div>
                <div className="overflow-hidden">
                  <div className="text-xs text-gray-500 uppercase font-semibold tracking-wider mb-1">Email Us</div>
                  <a href="mailto:support.mstech4407@gmail.com" className="text-sm md:text-base font-medium hover:text-purple-400 transition-colors truncate block">
                    support.mstech4407@gmail.com
                  </a>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-[#0B0B14] border border-white/10 p-6 rounded-2xl text-center">
                <div className="text-3xl font-bold text-white mb-1">24<span className="text-lg text-purple-400">h</span></div>
                <div className="text-xs text-gray-400 font-medium">Avg. Response Time</div>
              </div>
              <div className="bg-[#0B0B14] border border-white/10 p-6 rounded-2xl text-center">
                <div className="text-3xl font-bold text-white mb-1">99<span className="text-lg text-cyan-400">%</span></div>
                <div className="text-xs text-gray-400 font-medium">Resolution Rate</div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Support Form */}
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }} className="lg:col-span-3">
            <div className="bg-[#0B0B14] border border-white/10 p-8 rounded-3xl shadow-2xl">
              
              {!isSubmitted ? (
                <>
                  <div className="flex flex-wrap gap-2 mb-8 p-1 bg-white/5 rounded-xl border border-white/5 inline-flex w-full md:w-auto">
                    <button onClick={() => setTicketType("support")} className={`flex-1 md:flex-none flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium transition-all ${ticketType === "support" ? "bg-purple-600 text-white shadow-lg" : "text-gray-400 hover:text-white hover:bg-white/5"}`}>
                      <Mail size={16} /> Support
                    </button>
                    <button onClick={() => setTicketType("bug")} className={`flex-1 md:flex-none flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium transition-all ${ticketType === "bug" ? "bg-red-500/20 text-red-400 border border-red-500/30" : "text-gray-400 hover:text-white hover:bg-white/5"}`}>
                      <Bug size={16} /> Report Bug
                    </button>
                    <button onClick={() => setTicketType("feedback")} className={`flex-1 md:flex-none flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium transition-all ${ticketType === "feedback" ? "bg-cyan-500/20 text-cyan-400 border border-cyan-500/30" : "text-gray-400 hover:text-white hover:bg-white/5"}`}>
                      <MessageSquare size={16} /> Feedback
                    </button>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div>
                        <label className="text-xs font-medium text-gray-400 mb-1.5 block">Full Name</label>
                        <input type="text" placeholder="Manas Singh" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-purple-500/50 text-sm transition-colors" required />
                      </div>
                      <div>
                        <label className="text-xs font-medium text-gray-400 mb-1.5 block">Email Address</label>
                        <input type="email" placeholder="manas@example.com" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-purple-500/50 text-sm transition-colors" required />
                      </div>
                    </div>
                    
                    <div>
                      <label className="text-xs font-medium text-gray-400 mb-1.5 block">Subject</label>
                      <input type="text" placeholder={ticketType === "bug" ? "App crashes on PDF upload" : "Need help with Pro Plan"} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-purple-500/50 text-sm transition-colors" required />
                    </div>

                    <div>
                      <label className="text-xs font-medium text-gray-400 mb-1.5 block">Message Details</label>
                      <textarea rows="4" placeholder="Please describe your issue or feedback in detail..." className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-purple-500/50 text-sm transition-colors resize-none" required></textarea>
                    </div>

                    <button type="submit" disabled={isLoading} className="w-full bg-gradient-to-r from-purple-600 to-violet-600 hover:opacity-90 text-white font-medium py-3.5 rounded-xl transition-all shadow-[0_0_20px_rgba(147,51,234,0.3)] mt-2 flex justify-center items-center gap-2">
                      {isLoading ? <><Loader2 size={18} className="animate-spin" /> Sending...</> : <><Send size={18} /> Submit Ticket</>}
                    </button>
                  </form>
                </>
              ) : (
                <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-12">
                  <div className="flex justify-center mb-6">
                    <div className="p-4 bg-emerald-500/20 rounded-full border border-emerald-500/30">
                      <CheckCircle2 size={48} className="text-emerald-400" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Message Sent Successfully!</h3>
                  <p className="text-gray-400 text-sm mb-8 max-w-sm mx-auto">
                    Thank you for reaching out, Manas. Our support team will review your {ticketType} and respond to your email shortly.
                  </p>
                  <button onClick={() => setIsSubmitted(false)} className="bg-white/5 hover:bg-white/10 border border-white/10 text-white font-medium px-6 py-2.5 rounded-xl transition-colors">
                    Send Another Message
                  </button>
                </motion.div>
              )}

            </div>
          </motion.div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}