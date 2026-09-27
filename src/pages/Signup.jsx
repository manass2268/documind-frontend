import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { 
  User, Building, Mail, Phone, Lock, Eye, EyeOff, 
  ArrowRight, Check, FileText, ArrowLeft, MessageSquare, Loader2 
} from "lucide-react";

export default function Signup() {
  const navigate = useNavigate();
  const [accountType, setAccountType] = useState("individual");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const [formData, setFormData] = useState({
    fullName: "", email: "", mobile: "", orgName: "",
    registrationId: "", officialEmail: "", contactNumber: "",
    password: "", confirmPassword: ""
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSignup = (e) => {
    e.preventDefault();
    if (!acceptedTerms) return alert("Please agree to the Terms & Conditions.");
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      navigate("/dashboard");
    }, 1500);
  };

  return (
    <main className="w-full min-h-[calc(100vh-140px)] flex items-center justify-center bg-[#F4F7FB] relative selection:bg-[#0056D2] selection:text-white p-4 overflow-hidden">
      
      {/* BACKGROUND DECORATIVE ORBS */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <motion.div animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }} transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }} className="absolute -top-[10%] -left-[5%] w-[400px] h-[400px] rounded-full bg-[#0056D2]/10 blur-[100px]" />
        <motion.div animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }} transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }} className="absolute top-[40%] -right-[10%] w-[500px] h-[500px] rounded-full bg-[#10B981]/10 blur-[120px]" />
        <motion.div animate={{ scale: [1, 1.15, 1], opacity: [0.3, 0.5, 0.3] }} transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 1 }} className="absolute -bottom-[10%] left-[20%] w-[350px] h-[350px] rounded-full bg-[#F59E0B]/10 blur-[100px]" />
      </div>

      {/* FLOATING BACK BUTTON */}
      <Link to="/" className="absolute top-5 left-5 sm:left-8 z-50 flex items-center gap-2 bg-white/90 backdrop-blur-md px-4 py-2 rounded-full shadow-[0_2px_10px_rgba(0,0,0,0.05)] border border-gray-100 text-[13px] font-bold text-gray-600 hover:text-[#0056D2] hover:shadow-md transition-all group">
        <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform duration-300" />
        <span className="hidden sm:block">Back</span>
      </Link>

      <motion.div 
        initial={{ opacity: 0, scale: 0.95, y: 15 }} 
        animate={{ opacity: 1, scale: 1, y: 0 }} 
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="w-full max-w-[520px] bg-white/80 backdrop-blur-xl rounded-[1.5rem] shadow-[0_10px_50px_rgba(0,0,0,0.08)] border border-white/50 p-6 sm:p-8 z-20 relative"
      >
        <div className="mb-6 text-center sm:text-left">
          <h2 className="text-[26px] font-black text-[#0056D2] leading-tight mb-1 tracking-tight">Create Account</h2>
          <p className="text-[13px] text-gray-500 font-medium">Join DocuMind to start your learning journey.</p>
        </div>

        {/* Enhanced Toggle */}
        <div className="bg-gray-100/80 p-1.5 rounded-xl flex gap-1 mb-6 relative">
          <button type="button" onClick={() => setAccountType('individual')}
            className={`flex-1 flex items-center justify-center gap-2 py-2.5 px-3 rounded-lg text-left transition-all duration-300 z-10 ${accountType === 'individual' ? 'bg-white text-[#0056D2] shadow-sm font-bold' : 'text-gray-500 hover:text-gray-700 font-medium'}`}>
            <User size={16} strokeWidth={accountType === 'individual' ? 2.5 : 2}/>
            <span className="text-[13px]">For Myself</span>
          </button>
          
          <button type="button" onClick={() => setAccountType('organization')}
            className={`flex-1 flex items-center justify-center gap-2 py-2.5 px-3 rounded-lg text-left transition-all duration-300 z-10 ${accountType === 'organization' ? 'bg-white text-[#0056D2] shadow-sm font-bold' : 'text-gray-500 hover:text-gray-700 font-medium'}`}>
            <Building size={16} strokeWidth={accountType === 'organization' ? 2.5 : 2}/>
            <span className="text-[13px]">For Organization</span>
          </button>
        </div>

        <form onSubmit={handleSignup} className="space-y-4">
          
          <AnimatePresence mode="wait">
            <motion.div 
              key={accountType}
              initial={{ opacity: 0, y: 10 }} 
              animate={{ opacity: 1, y: 0 }} 
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="space-y-4"
            >
              {accountType === 'individual' ? (
                <div className="space-y-4">
                  <div>
                    <label className="block text-[12px] font-bold text-[#1E293B] mb-1">Full Name <span className="text-red-500">*</span></label>
                    <div className="relative group">
                      <User size={16} className="absolute left-3 top-2.5 text-gray-400 group-focus-within:text-[#0056D2] transition-colors" />
                      <input type="text" name="fullName" value={formData.fullName} onChange={handleInputChange} required className="w-full pl-9 pr-3 py-2.5 border border-gray-200 rounded-lg text-[13px] bg-white/50 focus:bg-white focus:border-[#0056D2] focus:ring-4 focus:ring-[#0056D2]/10 outline-none transition-all placeholder:text-gray-400" placeholder="Enter your full name" />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[12px] font-bold text-[#1E293B] mb-1">Email <span className="text-red-500">*</span></label>
                      <div className="relative group">
                        <Mail size={16} className="absolute left-3 top-2.5 text-gray-400 group-focus-within:text-[#0056D2] transition-colors" />
                        <input type="email" name="email" value={formData.email} onChange={handleInputChange} required className="w-full pl-9 pr-3 py-2.5 border border-gray-200 rounded-lg text-[13px] bg-white/50 focus:bg-white focus:border-[#0056D2] focus:ring-4 focus:ring-[#0056D2]/10 outline-none transition-all placeholder:text-gray-400" placeholder="Email address" />
                      </div>
                    </div>
                    <div>
                      <label className="block text-[12px] font-bold text-[#1E293B] mb-1">Mobile <span className="text-red-500">*</span></label>
                      <div className="flex group">
                        <div className="flex items-center bg-gray-50 border border-r-0 border-gray-200 rounded-l-lg px-2.5 text-[12px] font-bold text-gray-500">+91</div>
                        <input type="tel" name="mobile" maxLength="10" value={formData.mobile} onChange={handleInputChange} required className="w-full px-3 py-2.5 border border-gray-200 rounded-r-lg text-[13px] bg-white/50 focus:bg-white focus:border-[#0056D2] focus:ring-4 focus:ring-[#0056D2]/10 outline-none transition-all placeholder:text-gray-400" placeholder="10-digit number" />
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[12px] font-bold text-[#1E293B] mb-1">Organization <span className="text-red-500">*</span></label>
                      <div className="relative group">
                        <Building size={16} className="absolute left-3 top-2.5 text-gray-400 group-focus-within:text-[#0056D2] transition-colors" />
                        <input type="text" name="orgName" value={formData.orgName} onChange={handleInputChange} required className="w-full pl-9 pr-3 py-2.5 border border-gray-200 rounded-lg text-[13px] bg-white/50 focus:bg-white focus:border-[#0056D2] focus:ring-4 focus:ring-[#0056D2]/10 outline-none transition-all placeholder:text-gray-400" placeholder="Organization Name" />
                      </div>
                    </div>
                    <div>
                      <label className="block text-[12px] font-bold text-[#1E293B] mb-1">U-DISE / Reg No <span className="text-gray-400 font-normal">(Opt)</span></label>
                      <div className="relative group">
                        <FileText size={16} className="absolute left-3 top-2.5 text-gray-400 group-focus-within:text-[#0056D2] transition-colors" />
                        <input type="text" name="registrationId" value={formData.registrationId} onChange={handleInputChange} className="w-full pl-9 pr-3 py-2.5 border border-gray-200 rounded-lg text-[13px] bg-white/50 focus:bg-white focus:border-[#0056D2] focus:ring-4 focus:ring-[#0056D2]/10 outline-none transition-all placeholder:text-gray-400" placeholder="Registration ID" />
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[12px] font-bold text-[#1E293B] mb-1">Official Email <span className="text-red-500">*</span></label>
                      <div className="relative group">
                        <Mail size={16} className="absolute left-3 top-2.5 text-gray-400 group-focus-within:text-[#0056D2] transition-colors" />
                        <input type="email" name="officialEmail" value={formData.officialEmail} onChange={handleInputChange} required className="w-full pl-9 pr-3 py-2.5 border border-gray-200 rounded-lg text-[13px] bg-white/50 focus:bg-white focus:border-[#0056D2] focus:ring-4 focus:ring-[#0056D2]/10 outline-none transition-all placeholder:text-gray-400" placeholder="org@example.com" />
                      </div>
                    </div>
                    <div>
                      <label className="block text-[12px] font-bold text-[#1E293B] mb-1">Contact <span className="text-red-500">*</span></label>
                      <div className="flex group">
                        <div className="flex items-center bg-gray-50 border border-r-0 border-gray-200 rounded-l-lg px-2.5 text-[12px] font-bold text-gray-500">+91</div>
                        <input type="tel" name="contactNumber" maxLength="10" value={formData.contactNumber} onChange={handleInputChange} required className="w-full px-3 py-2.5 border border-gray-200 rounded-r-lg text-[13px] bg-white/50 focus:bg-white focus:border-[#0056D2] focus:ring-4 focus:ring-[#0056D2]/10 outline-none transition-all placeholder:text-gray-400" placeholder="Phone number" />
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </motion.div>
          </AnimatePresence>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
            <div>
              <label className="block text-[12px] font-bold text-[#1E293B] mb-1">Password <span className="text-red-500">*</span></label>
              <div className="relative group">
                <Lock size={16} className="absolute left-3 top-2.5 text-gray-400 group-focus-within:text-[#0056D2] transition-colors" />
                <input type={showPassword ? "text" : "password"} name="password" value={formData.password} onChange={handleInputChange} required className="w-full pl-9 pr-10 py-2.5 border border-gray-200 rounded-lg text-[13px] bg-white/50 focus:bg-white focus:border-[#0056D2] focus:ring-4 focus:ring-[#0056D2]/10 outline-none transition-all placeholder:text-gray-400" placeholder="Create password" />
                <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-2.5 text-gray-400 hover:text-[#0056D2] transition-colors">
                  {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
            </div>
            <div>
              <label className="block text-[12px] font-bold text-[#1E293B] mb-1">Confirm Password <span className="text-red-500">*</span></label>
              <div className="relative group">
                <Lock size={16} className="absolute left-3 top-2.5 text-gray-400 group-focus-within:text-[#0056D2] transition-colors" />
                <input type={showConfirmPassword ? "text" : "password"} name="confirmPassword" value={formData.confirmPassword} onChange={handleInputChange} required className="w-full pl-9 pr-10 py-2.5 border border-gray-200 rounded-lg text-[13px] bg-white/50 focus:bg-white focus:border-[#0056D2] focus:ring-4 focus:ring-[#0056D2]/10 outline-none transition-all placeholder:text-gray-400" placeholder="Confirm password" />
                <button type="button" onClick={() => setShowConfirmPassword(!showConfirmPassword)} className="absolute right-3 top-2.5 text-gray-400 hover:text-[#0056D2] transition-colors">
                  {showConfirmPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
            </div>
          </div>

          <div className="flex items-start pt-2 pb-1">
            <button type="button" onClick={() => setAcceptedTerms(!acceptedTerms)} className={`mt-0.5 w-[16px] h-[16px] rounded flex items-center justify-center transition-all duration-200 ${acceptedTerms ? 'bg-[#0056D2] border-transparent shadow-sm' : 'border border-gray-300 bg-white hover:border-[#0056D2]'}`}>
              {acceptedTerms && <Check size={10} className="text-white" strokeWidth={4}/>}
            </button>
            <span className="ml-2.5 text-[12px] font-medium text-gray-500 leading-snug">
              I agree to the <Link to="/terms" className="font-bold text-[#0056D2] hover:underline">Terms & Conditions</Link> and <Link to="/privacy" className="font-bold text-[#0056D2] hover:underline">Privacy Policy</Link>.
            </span>
          </div>

          <motion.button whileTap={{ scale: 0.98 }} type="submit" disabled={isLoading} className="w-full bg-[#0056D2] hover:bg-[#0044A8] text-white font-bold text-[14px] py-3 rounded-lg shadow-[0_4px_14px_rgba(0,86,210,0.25)] hover:shadow-[0_6px_20px_rgba(0,86,210,0.3)] transition-all outline-none flex items-center justify-center gap-2 disabled:opacity-70 disabled:hover:shadow-none">
            {isLoading ? <Loader2 size={18} className="animate-spin" /> : <><ArrowRight size={16} /> Create Account</>}
          </motion.button>

          <div className="relative flex items-center justify-center mt-6 mb-4">
            <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-gray-200/80"></div></div>
            <div className="relative bg-white px-4 text-[10px] font-bold text-gray-400 uppercase tracking-widest rounded-full">OR</div>
          </div>

          <div className={`grid gap-3 ${accountType === 'individual' ? 'grid-cols-2' : 'grid-cols-1'}`}>
            <button type="button" className="w-full bg-white border border-gray-200 hover:bg-gray-50 hover:border-gray-300 text-gray-700 font-bold text-[13px] py-2.5 rounded-lg transition-all flex items-center justify-center gap-2 shadow-sm hover:shadow">
              <svg className="w-4 h-4" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
              </svg>
              Google
            </button>
            {accountType === 'individual' && (
              <button type="button" className="w-full bg-white border border-gray-200 hover:bg-gray-50 hover:border-gray-300 text-gray-700 font-bold text-[13px] py-2.5 rounded-lg transition-all flex items-center justify-center gap-2 shadow-sm hover:shadow group">
                <MessageSquare size={16} className="text-gray-400 group-hover:text-[#0056D2] transition-colors" />
                OTP Login
              </button>
            )}
          </div>
        </form>

        <div className="text-center mt-6 pt-5 border-t border-gray-100">
          <p className="text-[13px] font-medium text-gray-500">
            Already have an account? <Link to="/login" className="text-[#0056D2] hover:text-[#003366] hover:underline font-bold inline-flex items-center transition-colors">Login here</Link>
          </p>
        </div>
      </motion.div>
    </main>
  );
}