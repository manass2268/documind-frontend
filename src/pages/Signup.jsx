import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  User, Building, Mail, Lock, Eye, EyeOff, 
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
    <main className="w-full min-h-[calc(100vh-140px)] flex items-center justify-center bg-[#F8F9FA] relative selection:bg-[#0056D2] selection:text-white p-4">
      
      {/* FLOATING BACK BUTTON */}
      <Link to="/" className="absolute top-4 left-4 sm:left-6 z-50 flex items-center gap-2 bg-white/80 backdrop-blur-md px-3 py-1.5 rounded-full shadow-sm border border-gray-200 text-[12px] font-bold text-gray-600 hover:text-[#0056D2] hover:bg-white hover:shadow-md transition-all group">
        <ArrowLeft size={14} className="group-hover:-translate-x-0.5 transition-transform" />
        <span className="hidden sm:block">Back</span>
      </Link>

      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} 
        className="w-full max-w-[500px] bg-white rounded-2xl shadow-[0_4px_30px_rgba(0,0,0,0.06)] border border-gray-100 p-6 z-20"
      >
        <div className="mb-4 text-center sm:text-left">
          <h2 className="text-[22px] font-black text-[#0056D2] leading-tight">Create Account</h2>
          <p className="text-[12px] text-gray-500 font-medium">Join DocuMind to start your learning journey.</p>
        </div>

        {/* Toggle */}
        <div className="grid grid-cols-2 gap-2 mb-4">
          <button type="button" onClick={() => setAccountType('individual')}
            className={`flex items-center gap-2.5 p-2.5 rounded-lg border text-left transition-all ${accountType === 'individual' ? 'border-[#0056D2] bg-[#0056D2]/5 ring-1 ring-[#0056D2]' : 'border-gray-200 hover:border-gray-300'}`}>
            <User size={16} className={accountType === 'individual' ? 'text-[#0056D2]' : 'text-gray-400'} strokeWidth={2.5}/>
            <div>
              <p className={`text-[12px] font-bold leading-none mb-0.5 ${accountType === 'individual' ? 'text-[#0056D2]' : 'text-gray-700'}`}>For Myself</p>
              <p className="text-[9px] text-gray-500 leading-tight">Students & Learners</p>
            </div>
          </button>
          <button type="button" onClick={() => setAccountType('organization')}
            className={`flex items-center gap-2.5 p-2.5 rounded-lg border text-left transition-all ${accountType === 'organization' ? 'border-[#0056D2] bg-[#0056D2]/5 ring-1 ring-[#0056D2]' : 'border-gray-200 hover:border-gray-300'}`}>
            <Building size={16} className={accountType === 'organization' ? 'text-[#0056D2]' : 'text-gray-400'} strokeWidth={2.5}/>
            <div>
              <p className={`text-[12px] font-bold leading-none mb-0.5 ${accountType === 'organization' ? 'text-[#0056D2]' : 'text-gray-700'}`}>For Organization</p>
              <p className="text-[9px] text-gray-500 leading-tight">Schools & Institutions</p>
            </div>
          </button>
        </div>

        <form onSubmit={handleSignup} className="space-y-3">
          
          {accountType === 'individual' ? (
            <>
              <div>
                <label className="block text-[11px] font-bold text-[#1E293B] mb-0.5">Full Name <span className="text-red-500">*</span></label>
                <div className="relative">
                  <User size={14} className="absolute left-2.5 top-2.5 text-gray-400" />
                  <input type="text" name="fullName" value={formData.fullName} onChange={handleInputChange} required className="w-full pl-8 pr-3 py-2 border border-gray-300 rounded-md text-[12px] focus:border-[#0056D2] focus:ring-1 focus:ring-[#0056D2] outline-none" placeholder="Enter full name" />
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-bold text-[#1E293B] mb-0.5">Email <span className="text-red-500">*</span></label>
                  <div className="relative">
                    <Mail size={14} className="absolute left-2.5 top-2.5 text-gray-400" />
                    <input type="email" name="email" value={formData.email} onChange={handleInputChange} required className="w-full pl-8 pr-3 py-2 border border-gray-300 rounded-md text-[12px] focus:border-[#0056D2] focus:ring-1 focus:ring-[#0056D2] outline-none" placeholder="Email address" />
                  </div>
                </div>
                <div>
                  <label className="block text-[11px] font-bold text-[#1E293B] mb-0.5">Mobile <span className="text-red-500">*</span></label>
                  <div className="flex">
                    <div className="flex items-center bg-gray-50 border border-r-0 border-gray-300 rounded-l-md px-2 text-[11px] font-bold text-gray-600">+91</div>
                    <input type="tel" name="mobile" maxLength="10" value={formData.mobile} onChange={handleInputChange} required className="w-full px-2 py-2 border border-gray-300 rounded-r-md text-[12px] focus:border-[#0056D2] focus:ring-1 focus:ring-[#0056D2] outline-none" placeholder="10-digit number" />
                  </div>
                </div>
              </div>
            </>
          ) : (
            <>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-bold text-[#1E293B] mb-0.5">Organization <span className="text-red-500">*</span></label>
                  <div className="relative">
                    <Building size={14} className="absolute left-2.5 top-2.5 text-gray-400" />
                    <input type="text" name="orgName" value={formData.orgName} onChange={handleInputChange} required className="w-full pl-8 pr-3 py-2 border border-gray-300 rounded-md text-[12px] focus:border-[#0056D2] focus:ring-1 focus:ring-[#0056D2] outline-none" placeholder="Org Name" />
                  </div>
                </div>
                <div>
                  <label className="block text-[11px] font-bold text-[#1E293B] mb-0.5">U-DISE / Reg No <span className="text-gray-400 font-normal">(Opt)</span></label>
                  <div className="relative">
                    <FileText size={14} className="absolute left-2.5 top-2.5 text-gray-400" />
                    <input type="text" name="registrationId" value={formData.registrationId} onChange={handleInputChange} className="w-full pl-8 pr-3 py-2 border border-gray-300 rounded-md text-[12px] focus:border-[#0056D2] focus:ring-1 focus:ring-[#0056D2] outline-none" placeholder="Reg ID" />
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-bold text-[#1E293B] mb-0.5">Official Email <span className="text-red-500">*</span></label>
                  <div className="relative">
                    <Mail size={14} className="absolute left-2.5 top-2.5 text-gray-400" />
                    <input type="email" name="officialEmail" value={formData.officialEmail} onChange={handleInputChange} required className="w-full pl-8 pr-3 py-2 border border-gray-300 rounded-md text-[12px] focus:border-[#0056D2] focus:ring-1 focus:ring-[#0056D2] outline-none" placeholder="org@example.com" />
                  </div>
                </div>
                <div>
                  <label className="block text-[11px] font-bold text-[#1E293B] mb-0.5">Contact <span className="text-red-500">*</span></label>
                  <div className="flex">
                    <div className="flex items-center bg-gray-50 border border-r-0 border-gray-300 rounded-l-md px-2 text-[11px] font-bold text-gray-600">+91</div>
                    <input type="tel" name="contactNumber" maxLength="10" value={formData.contactNumber} onChange={handleInputChange} required className="w-full px-2 py-2 border border-gray-300 rounded-r-md text-[12px] focus:border-[#0056D2] focus:ring-1 focus:ring-[#0056D2] outline-none" placeholder="Phone number" />
                  </div>
                </div>
              </div>
            </>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-[11px] font-bold text-[#1E293B] mb-0.5">Password <span className="text-red-500">*</span></label>
              <div className="relative">
                <Lock size={14} className="absolute left-2.5 top-2.5 text-gray-400" />
                <input type={showPassword ? "text" : "password"} name="password" value={formData.password} onChange={handleInputChange} required className="w-full pl-8 pr-8 py-2 border border-gray-300 rounded-md text-[12px] focus:border-[#0056D2] focus:ring-1 focus:ring-[#0056D2] outline-none" placeholder="Password" />
                <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-2.5 top-2.5 text-gray-400 hover:text-[#0056D2]">
                  {showPassword ? <EyeOff size={14} /> : <Eye size={14} />}
                </button>
              </div>
            </div>
            <div>
              <label className="block text-[11px] font-bold text-[#1E293B] mb-0.5">Confirm <span className="text-red-500">*</span></label>
              <div className="relative">
                <Lock size={14} className="absolute left-2.5 top-2.5 text-gray-400" />
                <input type={showConfirmPassword ? "text" : "password"} name="confirmPassword" value={formData.confirmPassword} onChange={handleInputChange} required className="w-full pl-8 pr-8 py-2 border border-gray-300 rounded-md text-[12px] focus:border-[#0056D2] focus:ring-1 focus:ring-[#0056D2] outline-none" placeholder="Confirm" />
                <button type="button" onClick={() => setShowConfirmPassword(!showConfirmPassword)} className="absolute right-2.5 top-2.5 text-gray-400 hover:text-[#0056D2]">
                  {showConfirmPassword ? <EyeOff size={14} /> : <Eye size={14} />}
                </button>
              </div>
            </div>
          </div>

          <div className="flex items-start pt-1">
            <button type="button" onClick={() => setAcceptedTerms(!acceptedTerms)} className={`mt-0.5 min-w-[14px] h-3.5 rounded flex items-center justify-center transition-all ${acceptedTerms ? 'bg-[#0056D2] border-transparent' : 'border border-gray-300 bg-white'}`}>
              {acceptedTerms && <Check size={10} className="text-white" strokeWidth={4}/>}
            </button>
            <span className="ml-2 text-[11px] font-medium text-gray-600 leading-tight">
              I agree to the <Link to="/terms" className="font-bold text-[#0056D2] hover:underline">Terms</Link> & <Link to="/privacy" className="font-bold text-[#0056D2] hover:underline">Privacy Policy</Link>.
            </span>
          </div>

          <motion.button whileTap={{ scale: 0.98 }} type="submit" disabled={isLoading} className="w-full bg-[#0056D2] hover:bg-[#0044A8] text-white font-bold text-[13px] py-2 rounded-md shadow-sm transition-all outline-none flex items-center justify-center gap-2 mt-2 disabled:opacity-70">
            {isLoading ? <Loader2 size={16} className="animate-spin" /> : <><ArrowRight size={14} /> Create Account</>}
          </motion.button>

          <div className="relative flex items-center justify-center my-4">
            <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-gray-200"></div></div>
            <div className="relative bg-white px-2 text-[10px] font-bold text-gray-400 uppercase">OR</div>
          </div>

          <div className={`grid gap-2 ${accountType === 'individual' ? 'grid-cols-2' : 'grid-cols-1'}`}>
            <button type="button" className="w-full bg-white border border-gray-300 hover:bg-gray-50 text-gray-700 font-bold text-[12px] py-2 rounded-md transition-all flex items-center justify-center gap-2">
              <svg className="w-3.5 h-3.5" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
              </svg>
              Google
            </button>
            {accountType === 'individual' && (
              <button type="button" className="w-full bg-white border border-gray-300 hover:bg-gray-50 text-gray-700 font-bold text-[12px] py-2 rounded-md transition-all flex items-center justify-center gap-2">
                <MessageSquare size={14} className="text-[#0056D2]" />
                OTP Login
              </button>
            )}
          </div>
        </form>

        <div className="text-center mt-4 pt-3 border-t border-gray-100">
          <p className="text-[12px] font-medium text-gray-600">
            Already have an account? <Link to="/login" className="text-[#0056D2] hover:underline font-black">Login here</Link>
          </p>
        </div>
      </motion.div>
    </main>
  );
}