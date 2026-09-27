import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  Mail, Lock, ShieldCheck, ArrowRight, 
  MessageSquare, ArrowLeft, Loader2 
} from "lucide-react";

export default function ForgotPassword() {
  const [identifier, setIdentifier] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!identifier) return;
    
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
    }, 1500);
  };

  return (
    <main className="w-full min-h-[calc(100vh-140px)] flex items-center justify-center bg-[#F4F7FB] relative selection:bg-[#0056D2] selection:text-white p-4 md:p-8 overflow-hidden">
      
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        {/* Subtle Tricolor/Theme Gradients based on the reference image */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#FF9933] via-white to-[#138808] opacity-80" />
        <motion.div animate={{ opacity: [0.3, 0.5, 0.3] }} transition={{ duration: 8, repeat: Infinity }} className="absolute -top-[20%] -left-[10%] w-[600px] h-[600px] rounded-full bg-[#0056D2]/5 blur-[120px]" />
        <motion.div animate={{ opacity: [0.2, 0.4, 0.2] }} transition={{ duration: 10, repeat: Infinity, delay: 2 }} className="absolute bottom-[0%] right-[0%] w-[500px] h-[500px] rounded-full bg-[#138808]/5 blur-[120px]" />
      </div>

      <div className="w-full max-w-[1100px] grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center z-10 relative">
        
        {/* Left Column: Information & Features */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }} 
          animate={{ opacity: 1, x: 0 }} 
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="hidden lg:flex flex-col pr-8"
        >
          <div className="flex items-center gap-2 mb-4">
            <div className="h-0.5 w-6 bg-gradient-to-r from-[#FF9933] via-gray-300 to-[#138808]"></div>
            <span className="text-[11px] font-bold text-gray-500 tracking-widest uppercase">
              National Learning Support Platform
            </span>
          </div>
          
          <h1 className="text-5xl font-black text-[#0056D2] leading-tight mb-4 tracking-tight">
            Forgot<br />Password?
          </h1>
          
          <p className="text-[15px] text-gray-600 font-medium mb-10 max-w-md leading-relaxed">
            No worries! Enter your registered email address or mobile number and we'll send you a secure link to reset your password.
          </p>

          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="mt-1 bg-blue-100 p-2.5 rounded-full text-[#0056D2]">
                <ShieldCheck size={20} strokeWidth={2.5} />
              </div>
              <div>
                <h3 className="text-[15px] font-bold text-[#1E293B]">Secure Reset Process</h3>
                <p className="text-[13px] text-gray-500 font-medium mt-0.5">Your data remains safe and protected</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="mt-1 bg-green-100 p-2.5 rounded-full text-green-600">
                <Mail size={20} strokeWidth={2.5} />
              </div>
              <div>
                <h3 className="text-[15px] font-bold text-[#1E293B]">Get Reset Link</h3>
                <p className="text-[13px] text-gray-500 font-medium mt-0.5">Receive a secure link on your registered<br/>email or mobile number</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="mt-1 bg-orange-100 p-2.5 rounded-full text-orange-500">
                <Lock size={20} strokeWidth={2.5} />
              </div>
              <div>
                <h3 className="text-[15px] font-bold text-[#1E293B]">Quick and Easy</h3>
                <p className="text-[13px] text-gray-500 font-medium mt-0.5">Reset your password in just a few steps</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Column: Interactive Form Card */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95, y: 20 }} 
          animate={{ opacity: 1, scale: 1, y: 0 }} 
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
          className="w-full max-w-[480px] mx-auto bg-white/95 backdrop-blur-xl rounded-[2rem] shadow-[0_20px_60px_rgba(0,0,0,0.06)] border border-gray-100/50 p-8 sm:p-10 relative overflow-hidden"
        >
          {/* Card Top Accent */}
          <div className="absolute top-0 left-0 right-0 h-1.5 bg-[#0056D2]" />

          {!isSubmitted ? (
            <div className="flex flex-col items-center text-center">
              <div className="bg-[#F0F5FF] w-16 h-16 rounded-full flex items-center justify-center text-[#0056D2] mb-6 shadow-sm border border-blue-100">
                <Lock size={28} strokeWidth={2.5} />
              </div>
              
              <h2 className="text-[24px] font-black text-[#0056D2] mb-2">Forgot Password?</h2>
              <p className="text-[13px] text-gray-500 font-medium mb-8 px-4">
                Enter your registered email address or mobile number to receive a password reset link.
              </p>

              <form onSubmit={handleSubmit} className="w-full space-y-5 text-left">
                <div>
                  <label className="block text-[13px] font-bold text-[#1E293B] mb-1.5">
                    Email Address / Mobile Number <span className="text-red-500">*</span>
                  </label>
                  <div className="relative group">
                    <Mail size={18} className="absolute left-3.5 top-3.5 text-gray-400 group-focus-within:text-[#0056D2] transition-colors" />
                    <input 
                      type="text" 
                      value={identifier} 
                      onChange={(e) => setIdentifier(e.target.value)} 
                      autoComplete="off" 
                      required 
                      className="w-full pl-11 pr-4 py-3 border border-gray-200 rounded-xl text-[14px] font-medium text-gray-900 bg-gray-50 focus:bg-white focus:border-[#0056D2] focus:ring-4 focus:ring-[#0056D2]/10 outline-none transition-all placeholder:text-gray-400" 
                      placeholder="Enter your registered email or mobile number" 
                    />
                  </div>
                </div>

                <motion.button 
                  whileTap={{ scale: 0.98 }} 
                  type="submit" 
                  disabled={isLoading || !identifier} 
                  className="w-full bg-[#0056D2] hover:bg-[#0044A8] text-white font-bold text-[15px] py-3.5 rounded-xl shadow-[0_4px_14px_rgba(0,86,210,0.25)] hover:shadow-[0_6px_20px_rgba(0,86,210,0.3)] transition-all outline-none flex items-center justify-center gap-2 disabled:opacity-70 disabled:hover:shadow-none mt-2"
                >
                  {isLoading ? <Loader2 size={20} className="animate-spin" /> : <>Send Reset Link <ArrowRight size={18} /></>}
                </motion.button>
              </form>

              <div className="relative flex items-center justify-center w-full my-6">
                <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-gray-200"></div></div>
                <div className="relative bg-white px-4 text-[11px] font-bold text-gray-400 uppercase tracking-widest">OR</div>
              </div>

              <button type="button" className="w-full bg-white border-2 border-gray-100 hover:border-[#0056D2]/30 hover:bg-[#F8FAFC] text-[#1E293B] font-bold text-[14px] py-3 rounded-xl transition-all flex items-center justify-center gap-2 group">
                <MessageSquare size={18} className="text-gray-400 group-hover:text-[#0056D2] transition-colors" />
                Get Reset Link via OTP
                <span className="block absolute -bottom-6 text-[11px] text-gray-400 font-normal group-hover:text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity">
                  Receive a verification code on your mobile number
                </span>
              </button>
            </div>
          ) : (
            /* Success State */
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} 
              className="flex flex-col items-center text-center py-6"
            >
              <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center text-green-600 mb-6 shadow-sm">
                <ShieldCheck size={36} strokeWidth={2.5} />
              </div>
              <h2 className="text-[24px] font-black text-gray-900 mb-2">Check Your Inbox!</h2>
              <p className="text-[14px] text-gray-500 font-medium mb-8 px-4 leading-relaxed">
                We've sent a secure password reset link to <br/>
                <strong className="text-gray-800">{identifier}</strong>. <br/>
                Please check your spam folder if you don't see it.
              </p>
              <button 
                onClick={() => setIsSubmitted(false)}
                className="text-[#0056D2] font-bold text-[14px] hover:underline"
              >
                Didn't receive the link? Try again
              </button>
            </motion.div>
          )}

          {/* Back to Login Footer */}
          <div className="mt-8 pt-6 border-t border-gray-100 w-full flex justify-start">
            <Link to="/login" className="flex items-center gap-2 text-[14px] font-bold text-[#0056D2] hover:text-[#0044A8] transition-colors group">
              <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
              Back to Login
            </Link>
          </div>
          
        </motion.div>
      </div>
    </main>
  );
}