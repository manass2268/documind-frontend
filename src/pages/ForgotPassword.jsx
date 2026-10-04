import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, ShieldCheck, ArrowRight, ArrowLeft, Loader2, KeyRound, User, BookOpen, Shield, ChevronDown } from "lucide-react";

import { db } from "../firebase";
import { doc, getDoc, collection, query, where, getDocs } from "firebase/firestore";

export default function ForgotPassword() {
  const [role, setRole] = useState("learner");
  const [identifier, setIdentifier] = useState(""); // Can be User ID or Email
  
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!identifier) return;
    
    setError("");
    setIsLoading(true);
    
    try {
      let targetEmail = "";
      let targetUserId = "";

      // ==========================================
      // 🚀 SCENARIO 1: ROLE IS LEARNER (USER ID)
      // ==========================================
      if (role === "learner") {
        const studentRef = doc(db, "students", identifier.trim());
        const studentSnap = await getDoc(studentRef);

        if (!studentSnap.exists()) {
          setError("User ID not found. Please check your User ID and try again.");
          setIsLoading(false);
          return;
        }

        const studentData = studentSnap.data();
        
        if (studentData.isFirstLogin === true || !studentData.email) {
          setError("Account Setup Incomplete. You haven't linked a primary email yet. Please Login with your User ID and default password first.");
          setIsLoading(false);
          return;
        }

        // Setup the details for the OTP API
        targetEmail = studentData.email;
        targetUserId = identifier.trim();
      } 
      // ==========================================
      // 🚀 SCENARIO 2: ROLE IS ADMIN/TRAINER (EMAIL)
      // ==========================================
      else {
        const targetCollection = role === "admin" ? "admins" : "teachers";
        const q = query(collection(db, targetCollection), where("email", "==", identifier.trim()));
        const querySnapshot = await getDocs(q);

        if (querySnapshot.empty) {
          setError(`No ${role} account found with this email address.`);
          setIsLoading(false);
          return;
        }

        targetEmail = identifier.trim();
        targetUserId = querySnapshot.docs[0].id;
      }

      // ==========================================
      // 🚀 SEND OTP TO THE DISCOVERED EMAIL
      // ==========================================
      const response = await fetch("http://127.0.0.1:8000/api/send-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: targetEmail })
      });

      const data = await response.json();

      if (response.ok) {
        // Success! Redirect to Verify page
        navigate("/otp-verify", { 
          state: { 
            email: targetEmail,
            role: role,
            userId: targetUserId 
          } 
        });
      } else {
        setError(data.detail || "Failed to send OTP. Please try again.");
      }

    } catch (err) {
      console.error("Forgot Password Error:", err);
      setError("Network error. Cannot reach the server.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="w-full min-h-[calc(100vh-140px)] flex items-center justify-center bg-[#F4F7FB] relative selection:bg-[#0056D2] selection:text-white p-4 md:p-8 overflow-hidden">
      
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#FF9933] via-white to-[#138808] opacity-80" />
        <motion.div animate={{ opacity: [0.3, 0.5, 0.3] }} transition={{ duration: 8, repeat: Infinity }} className="absolute -top-[20%] -left-[10%] w-[600px] h-[600px] rounded-full bg-[#0056D2]/5 blur-[120px]" />
        <motion.div animate={{ opacity: [0.2, 0.4, 0.2] }} transition={{ duration: 10, repeat: Infinity, delay: 2 }} className="absolute bottom-[0%] right-[0%] w-[500px] h-[500px] rounded-full bg-[#138808]/5 blur-[120px]" />
      </div>

      <div className="w-full max-w-[1100px] grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center z-10 relative">
        
        {/* Left Column */}
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
            Don't worry! Enter your details and we will send you a 6-digit verification code (OTP) to your registered primary email.
          </p>

          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="mt-1 bg-blue-100 p-2.5 rounded-full text-[#0056D2]">
                <ShieldCheck size={20} strokeWidth={2.5} />
              </div>
              <div>
                <h3 className="text-[15px] font-bold text-[#1E293B]">Secure OTP Process</h3>
                <p className="text-[13px] text-gray-500 font-medium mt-0.5">Your account remains safe with 2-step verification.</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="mt-1 bg-green-100 p-2.5 rounded-full text-green-600">
                <KeyRound size={20} strokeWidth={2.5} />
              </div>
              <div>
                <h3 className="text-[15px] font-bold text-[#1E293B]">Instant Verification</h3>
                <p className="text-[13px] text-gray-500 font-medium mt-0.5">Get a verification code instantly on your linked email.</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Column */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95, y: 20 }} 
          animate={{ opacity: 1, scale: 1, y: 0 }} 
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
          className="w-full max-w-[480px] mx-auto bg-white/95 backdrop-blur-xl rounded-[2rem] shadow-[0_20px_60px_rgba(0,0,0,0.06)] border border-gray-100/50 p-8 sm:p-10 relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 right-0 h-1.5 bg-[#0056D2]" />

          <div className="flex flex-col items-center text-center">
            <div className="bg-[#F0F5FF] w-16 h-16 rounded-full flex items-center justify-center text-[#0056D2] mb-6 shadow-sm border border-blue-100">
              <KeyRound size={28} strokeWidth={2.5} />
            </div>
            
            <h2 className="text-[24px] font-black text-[#0056D2] mb-2">Reset Password</h2>
            <p className="text-[13px] text-gray-500 font-medium mb-6 px-4">
              Please select your role and enter your details to receive an OTP.
            </p>

            <AnimatePresence>
              {error && (
                <motion.div 
                  initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}
                  className="mb-6 w-full bg-red-50 border border-red-100 text-red-600 text-[12px] font-bold p-3 rounded-lg text-center"
                >
                  {error}
                </motion.div>
              )}
            </AnimatePresence>

            <form onSubmit={handleSubmit} className="w-full space-y-6 text-left mb-4">
              
              {/* Role Selection */}
              <div>
                <label className="block text-[13px] font-bold text-[#1E293B] mb-1.5">Select Your Role</label>
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                    {role === 'learner' && <User size={16} className="text-gray-400 group-focus-within:text-[#0056D2]" />}
                    {role === 'trainer' && <BookOpen size={16} className="text-gray-400 group-focus-within:text-[#0056D2]" />}
                    {role === 'admin' && <Shield size={16} className="text-gray-400 group-focus-within:text-[#0056D2]" />}
                  </div>
                  <select
                    value={role}
                    onChange={(e) => {setRole(e.target.value); setError(""); setIdentifier("");}}
                    className="w-full pl-10 pr-10 py-3 border border-gray-200 rounded-xl text-[14px] font-bold text-gray-700 bg-gray-50 focus:bg-white focus:border-[#0056D2] focus:ring-4 focus:ring-[#0056D2]/10 outline-none transition-all appearance-none cursor-pointer"
                  >
                    <option value="learner">Learner (Student)</option>
                    <option value="trainer">Trainer (Teacher)</option>
                    <option value="admin">Administrator</option>
                  </select>
                  <div className="absolute inset-y-0 right-0 pr-3.5 flex items-center pointer-events-none">
                    <ChevronDown size={16} className="text-gray-400" />
                  </div>
                </div>
              </div>

              {/* Identifier Input */}
              <div>
                <label className="block text-[13px] font-bold text-[#1E293B] mb-1.5">
                  {role === 'learner' ? "User ID (Roll Number)" : "Registered Email Address"} <span className="text-red-500">*</span>
                </label>
                <div className="relative group">
                  <Mail size={18} className="absolute left-3.5 top-3.5 text-gray-400 group-focus-within:text-[#0056D2] transition-colors" />
                  <input 
                    type={role === 'learner' ? "text" : "email"}
                    value={identifier} 
                    onChange={(e) => {setIdentifier(e.target.value); setError("");}} 
                    autoComplete="off" 
                    required 
                    className="w-full pl-11 pr-4 py-3 border border-gray-200 rounded-xl text-[14px] font-medium text-gray-900 bg-gray-50 focus:bg-white focus:border-[#0056D2] focus:ring-4 focus:ring-[#0056D2]/10 outline-none transition-all placeholder:text-gray-400" 
                    placeholder={role === 'learner' ? "e.g. 2503511790001" : "Enter your email"} 
                  />
                </div>
              </div>

              <motion.button 
                whileTap={{ scale: 0.98 }} 
                type="submit" 
                disabled={isLoading || !identifier} 
                className="w-full bg-[#0056D2] hover:bg-[#0044A8] text-white font-bold text-[15px] py-3.5 rounded-xl shadow-[0_4px_14px_rgba(0,86,210,0.25)] hover:shadow-[0_6px_20px_rgba(0,86,210,0.3)] transition-all outline-none flex items-center justify-center gap-2 disabled:opacity-70 disabled:hover:shadow-none"
              >
                {isLoading ? <Loader2 size={20} className="animate-spin" /> : <>Get OTP <ArrowRight size={18} /></>}
              </motion.button>
            </form>
          </div>

          <div className="mt-4 pt-6 border-t border-gray-100 w-full flex justify-start">
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