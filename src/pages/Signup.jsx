import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { 
  User, Building, Mail, Phone, Lock, Eye, EyeOff, 
  ArrowRight, Check, BookOpen, Globe, Building2, 
  ShieldCheck, ArrowLeft, MessageSquare, Loader2
} from "lucide-react";

export default function Signup() {
  const navigate = useNavigate();
  const [accountType, setAccountType] = useState("individual");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    mobile: "",
    password: "",
    confirmPassword: ""
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSignup = (e) => {
    e.preventDefault();
    if (!acceptedTerms) {
      alert("Please agree to the Terms & Conditions.");
      return;
    }
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      navigate("/dashboard");
    }, 1500);
  };

  const features = [
    {
      icon: <BookOpen size={20} className="text-white" />,
      bg: "bg-[#3B82F6]", // Blue
      title: "Access Learning Resources",
      desc: "Notes, reports, PDFs and more"
    },
    {
      icon: <Globe size={20} className="text-white" />,
      bg: "bg-[#10B981]", // Green
      title: "Learn Anytime, Anywhere",
      desc: "For students, teachers and learners"
    },
    {
      icon: <Building2 size={20} className="text-white" />,
      bg: "bg-[#F59E0B]", // Orange
      title: "For Organizations",
      desc: "Schools, colleges and government institutions"
    },
    {
      icon: <ShieldCheck size={20} className="text-white" />,
      bg: "bg-[#8B5CF6]", // Purple
      title: "Secure & Trusted",
      desc: "Your data is safe and private"
    }
  ];

  return (
    <main className="w-full flex-grow relative flex bg-[#F8F9FA] selection:bg-[#0056D2] selection:text-white min-h-[calc(100vh-140px)]">
      
      {/* 🟢 FLOATING BACK BUTTON */}
      <Link 
        to="/" 
        className="absolute top-6 left-4 sm:left-8 z-50 flex items-center gap-2 bg-white/80 backdrop-blur-md px-3.5 py-2 rounded-full shadow-sm border border-gray-200 text-[13px] font-bold text-gray-600 hover:text-[#0056D2] hover:bg-white hover:shadow-md transition-all group"
      >
        <ArrowLeft size={16} className="group-hover:-translate-x-0.5 transition-transform" />
        <span className="hidden sm:block">Back</span>
      </Link>

      <div className="w-full max-w-7xl mx-auto flex flex-col lg:flex-row">
        
        {/* ================= LEFT SECTION (CONTENT & BRANDING) ================= */}
        <div className="relative w-full lg:w-1/2 p-8 lg:p-16 flex flex-col justify-center overflow-hidden">
          
          {/* Background Elements (Waves & Building) */}
          <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0">
            {/* Tricolor Waves - Soft */}
            <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-br from-[#FF9933]/10 to-transparent"></div>
            <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-tr from-[#138808]/10 to-transparent"></div>
            
            {/* Building Sketch/Image */}
            <div 
              className="absolute bottom-0 left-0 w-full h-[60%] bg-no-repeat bg-bottom opacity-40 mix-blend-multiply grayscale"
              style={{ 
                backgroundImage: "url('https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Rashtrapati_Bhavan_Front_View.jpg/1024px-Rashtrapati_Bhavan_Front_View.jpg')",
                backgroundSize: 'cover',
                backgroundPosition: 'center bottom'
              }}
            >
              {/* Fade out top of image */}
              <div className="absolute inset-0 bg-gradient-to-b from-[#F8F9FA] via-transparent to-transparent"></div>
            </div>
          </div>

          {/* Content */}
          <div className="relative z-10 max-w-md mt-10 lg:mt-0">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}
              className="text-4xl lg:text-[42px] font-black text-[#0F172A] leading-[1.1] mb-4"
            >
              Be a Part of <br/>
              <span className="text-[#0056D2]">DocuMind</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.1 }}
              className="text-[15px] text-gray-600 font-medium leading-relaxed mb-10 pr-4"
            >
              Create your account to access curated learning resources, analyze data and explore government documents — all in one secure platform.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.2 }}
              className="space-y-6 mb-12"
            >
              {features.map((item, idx) => (
                <div key={idx} className="flex items-start gap-4">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 shadow-sm ${item.bg}`}>
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-[14px] font-bold text-[#0F172A] mb-0.5">{item.title}</h3>
                    <p className="text-[12px] text-gray-500 font-medium">{item.desc}</p>
                  </div>
                </div>
              ))}
            </motion.div>

            {/* Quote Box */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.4, delay: 0.3 }}
              className="bg-white/70 backdrop-blur-md border border-gray-200 rounded-xl p-4 shadow-sm relative inline-block"
            >
              <div className="absolute top-2 left-2 text-4xl text-gray-300 font-serif leading-none opacity-50">"</div>
              <p className="text-[13px] font-bold text-gray-700 italic relative z-10 pl-4 pr-2">
                Empowering learners with data and knowledge for a stronger, more informed India.
              </p>
            </motion.div>
          </div>
        </div>

        {/* ================= RIGHT SECTION (FORM) ================= */}
        <div className="w-full lg:w-1/2 flex items-center justify-center p-4 sm:p-8 relative z-20">
          <motion.div 
            initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.4, delay: 0.2 }}
            className="w-full max-w-[520px] bg-white rounded-[1.5rem] shadow-[0_8px_40px_rgba(0,0,0,0.08)] border border-gray-100 p-6 sm:p-10"
          >
            <div className="mb-6 text-center sm:text-left">
              <h2 className="text-[24px] font-black text-[#0056D2] leading-tight mb-1">Create an Account</h2>
              <p className="text-[13px] text-gray-500 font-medium">Join DocuMind to start your learning journey.</p>
            </div>

            {/* Account Type Toggle */}
            <div className="grid grid-cols-2 gap-3 mb-6">
              <button 
                type="button" onClick={() => setAccountType('individual')}
                className={`flex items-start gap-3 p-3.5 rounded-xl border text-left transition-all duration-200 ${accountType === 'individual' ? 'border-[#0056D2] bg-[#0056D2]/5 ring-1 ring-[#0056D2]' : 'border-gray-200 hover:border-gray-300'}`}
              >
                <User size={18} className={`mt-0.5 ${accountType === 'individual' ? 'text-[#0056D2]' : 'text-gray-400'}`} strokeWidth={2.5}/>
                <div>
                  <p className={`text-[12px] font-bold leading-none mb-1 ${accountType === 'individual' ? 'text-[#0056D2]' : 'text-gray-700'}`}>For Myself</p>
                  <p className="text-[10px] text-gray-500 leading-tight">Students & Individual Learners</p>
                </div>
              </button>

              <button 
                type="button" onClick={() => setAccountType('organization')}
                className={`flex items-start gap-3 p-3.5 rounded-xl border text-left transition-all duration-200 ${accountType === 'organization' ? 'border-[#0056D2] bg-[#0056D2]/5 ring-1 ring-[#0056D2]' : 'border-gray-200 hover:border-gray-300'}`}
              >
                <Building size={18} className={`mt-0.5 ${accountType === 'organization' ? 'text-[#0056D2]' : 'text-gray-400'}`} strokeWidth={2.5}/>
                <div>
                  <p className={`text-[12px] font-bold leading-none mb-1 ${accountType === 'organization' ? 'text-[#0056D2]' : 'text-gray-700'}`}>For Organization</p>
                  <p className="text-[10px] text-gray-500 leading-tight">Schools, Colleges & Institutions</p>
                </div>
              </button>
            </div>

            <form onSubmit={handleSignup} className="space-y-4">
              
              {/* Full Name */}
              <div>
                <label className="block text-[12px] font-bold text-[#1E293B] mb-1">Full Name <span className="text-red-500">*</span></label>
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <User size={16} className="text-gray-400 group-focus-within:text-[#0056D2]" />
                  </div>
                  <input type="text" name="fullName" value={formData.fullName} onChange={handleInputChange} required
                    className="w-full pl-9 pr-4 py-2 border border-gray-300 rounded-lg text-[13px] font-medium focus:border-[#0056D2] focus:ring-1 focus:ring-[#0056D2] outline-none transition-all placeholder:text-gray-400"
                    placeholder="Enter your full name"
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label className="block text-[12px] font-bold text-[#1E293B] mb-1">Email Address <span className="text-red-500">*</span></label>
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Mail size={16} className="text-gray-400 group-focus-within:text-[#0056D2]" />
                  </div>
                  <input type="email" name="email" value={formData.email} onChange={handleInputChange} required
                    className="w-full pl-9 pr-4 py-2 border border-gray-300 rounded-lg text-[13px] font-medium focus:border-[#0056D2] focus:ring-1 focus:ring-[#0056D2] outline-none transition-all placeholder:text-gray-400"
                    placeholder="Enter your email address"
                  />
                </div>
              </div>

              {/* Mobile Number */}
              <div>
                <label className="block text-[12px] font-bold text-[#1E293B] mb-1">Mobile Number <span className="text-red-500">*</span></label>
                <div className="relative group flex">
                  <div className="flex items-center justify-center bg-gray-50 border border-r-0 border-gray-300 rounded-l-lg px-3 text-[13px] font-bold text-gray-600">
                    <Phone size={14} className="mr-1.5 text-gray-400"/> +91
                  </div>
                  <input type="tel" name="mobile" maxLength="10" value={formData.mobile} onChange={handleInputChange} required
                    className="w-full px-3 py-2 border border-gray-300 rounded-r-lg text-[13px] font-medium focus:border-[#0056D2] focus:ring-1 focus:ring-[#0056D2] outline-none transition-all placeholder:text-gray-400"
                    placeholder="Enter your 10-digit mobile number"
                  />
                </div>
              </div>

              {/* Passwords Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[12px] font-bold text-[#1E293B] mb-1">Password <span className="text-red-500">*</span></label>
                  <div className="relative group">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Lock size={16} className="text-gray-400 group-focus-within:text-[#0056D2]" />
                    </div>
                    <input type={showPassword ? "text" : "password"} name="password" value={formData.password} onChange={handleInputChange} required
                      className="w-full pl-9 pr-9 py-2 border border-gray-300 rounded-lg text-[13px] font-medium focus:border-[#0056D2] focus:ring-1 focus:ring-[#0056D2] outline-none transition-all placeholder:text-gray-400"
                      placeholder="Create password"
                    />
                    <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute inset-y-0 right-0 pr-2.5 flex items-center text-gray-400 hover:text-[#0056D2]">
                      {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                    </button>
                  </div>
                </div>

                <div>
                  <label className="block text-[12px] font-bold text-[#1E293B] mb-1">Confirm Password <span className="text-red-500">*</span></label>
                  <div className="relative group">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Lock size={16} className="text-gray-400 group-focus-within:text-[#0056D2]" />
                    </div>
                    <input type={showConfirmPassword ? "text" : "password"} name="confirmPassword" value={formData.confirmPassword} onChange={handleInputChange} required
                      className="w-full pl-9 pr-9 py-2 border border-gray-300 rounded-lg text-[13px] font-medium focus:border-[#0056D2] focus:ring-1 focus:ring-[#0056D2] outline-none transition-all placeholder:text-gray-400"
                      placeholder="Confirm password"
                    />
                    <button type="button" onClick={() => setShowConfirmPassword(!showConfirmPassword)} className="absolute inset-y-0 right-0 pr-2.5 flex items-center text-gray-400 hover:text-[#0056D2]">
                      {showConfirmPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                    </button>
                  </div>
                </div>
              </div>
              <p className="text-[10px] text-gray-500 mt-[-4px]">Use at least 8 characters with a mix of letters, numbers and symbols.</p>

              {/* T&C Checkbox */}
              <div className="flex items-start pt-2">
                <button 
                  type="button" onClick={() => setAcceptedTerms(!acceptedTerms)}
                  className={`mt-0.5 min-w-[16px] h-4 rounded flex items-center justify-center transition-all ${acceptedTerms ? 'bg-[#0056D2] border-transparent' : 'border border-gray-300 bg-white hover:border-[#0056D2]'}`}
                >
                  {acceptedTerms && <Check size={12} className="text-white" strokeWidth={4}/>}
                </button>
                <span className="ml-2.5 text-[12px] font-medium text-gray-600">
                  I agree to the <Link to="/terms" className="font-bold text-[#0056D2] hover:underline">Terms & Conditions</Link> and <Link to="/privacy" className="font-bold text-[#0056D2] hover:underline">Privacy Policy</Link> of DocuMind.
                </span>
              </div>

              {/* Submit Button */}
              <motion.button 
                whileTap={{ scale: 0.98 }} type="submit" disabled={isLoading}
                className="w-full bg-[#0056D2] hover:bg-[#0044A8] text-white font-bold text-[14px] py-2.5 rounded-lg shadow-sm transition-all focus:ring-4 focus:ring-[#0056D2]/30 outline-none flex items-center justify-center gap-2 mt-4 disabled:opacity-70"
              >
                {isLoading ? <Loader2 size={18} className="animate-spin" /> : <><ArrowRight size={16} /> Create Account</>}
              </motion.button>

              <div className="relative flex items-center justify-center mt-5 mb-3">
                <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-gray-200"></div></div>
                <div className="relative bg-white px-3 text-[11px] font-bold text-gray-400 uppercase tracking-widest">OR</div>
              </div>

              {/* OTP Register */}
              <button 
                type="button" 
                className="w-full bg-white border border-gray-300 hover:bg-gray-50 hover:border-[#0056D2]/50 text-gray-700 font-bold text-[13px] py-2.5 rounded-lg transition-all focus:ring-4 focus:ring-gray-100 outline-none flex flex-col items-center justify-center gap-0.5 group"
              >
                <div className="flex items-center gap-2 group-hover:text-[#0056D2] transition-colors">
                  <MessageSquare size={16} className="text-[#0056D2]" />
                  <span>Register with OTP</span>
                </div>
                <span className="text-[10px] text-gray-500 font-medium">Get started using your mobile number</span>
              </button>

            </form>

            <div className="text-center mt-6 pt-4 border-t border-gray-100">
              <p className="text-[13px] font-medium text-gray-600">
                Already have an account? <Link to="/login" className="text-[#0056D2] hover:text-[#003366] hover:underline font-black inline-flex items-center transition-colors">Login here</Link>
              </p>
            </div>

          </motion.div>
        </div>
      </div>
    </main>
  );
}