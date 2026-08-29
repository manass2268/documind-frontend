import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Brain, ArrowLeft, Loader2, CheckCircle2 } from "lucide-react";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSent, setIsSent] = useState(false); // Success state

  const handleReset = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setIsSent(true); // Show success message
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-[#05050A] text-white font-sans flex flex-col relative overflow-hidden">
      <div className="absolute top-[20%] left-[20%] w-[500px] h-[500px] bg-purple-700/20 rounded-full blur-[120px] pointer-events-none" />

      <div className="p-6 md:p-8 absolute top-0 left-0 w-full z-50">
        <Link to="/login" className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors cursor-pointer relative z-50">
          <ArrowLeft size={16} /> Back to Login
        </Link>
      </div>

      <div className="flex-1 flex items-center justify-center relative z-10 p-4 mt-12 md:mt-0">
        <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="bg-[#0B0B14]/80 backdrop-blur-xl border border-white/10 p-6 md:p-10 rounded-3xl w-full max-w-md shadow-2xl">
          
          <div className="flex justify-center mb-6">
            <div className="p-3 bg-purple-500/10 rounded-2xl border border-purple-500/20"><Brain className="text-purple-400" size={32} /></div>
          </div>
          
          {!isSent ? (
            <>
              <h2 className="text-2xl font-bold text-center mb-2">Reset Password</h2>
              <p className="text-gray-400 text-center text-sm mb-8">Enter your email and we'll send you a link to reset your password.</p>

              <form onSubmit={handleReset} className="space-y-4">
                <div>
                  <label className="text-xs font-medium text-gray-400 mb-1 block">Email Address</label>
                  <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="yourmail@example.com" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-purple-500/50 text-sm transition-colors" required />
                </div>
                <button type="submit" disabled={isLoading} className="w-full bg-purple-600 hover:bg-purple-700 text-white font-medium py-3 rounded-xl transition-colors shadow-[0_0_15px_rgba(147,51,234,0.3)] mt-4 flex justify-center items-center gap-2">
                  {isLoading ? <><Loader2 size={18} className="animate-spin" /> Sending...</> : "Send Reset Link"}
                </button>
              </form>
            </>
          ) : (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center">
              <div className="flex justify-center mb-4">
                <CheckCircle2 size={48} className="text-emerald-400" />
              </div>
              <h2 className="text-2xl font-bold mb-2">Check your email</h2>
              <p className="text-gray-400 text-sm mb-8">We've sent a password reset link to <br/><strong className="text-white">{email}</strong></p>
              <Link to="/login">
                <button className="w-full bg-white/5 hover:bg-white/10 border border-white/10 text-white font-medium py-3 rounded-xl transition-colors">
                  Return to Login
                </button>
              </Link>
            </motion.div>
          )}

        </motion.div>
      </div>
    </div>
  );
}