import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Mail, Lock, Eye, EyeOff, User, Building, 
  MessageSquare, ArrowRight, Check, Loader2, Smartphone, KeyRound
} from "lucide-react";

export default function Login() {
  const navigate = useNavigate();
  
  // States
  const [loginType, setLoginType] = useState("individual"); // 'individual' | 'organization'
  const [loginMethod, setLoginMethod] = useState("password"); // 'password' | 'otp' | 'otp_verify'
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  // Form State
  const [formData, setFormData] = useState({
    identifier: "",
    password: "",
    mobile: "",
    otp: ""
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulating API Call
    setTimeout(() => {
      setIsLoading(false);
      console.log("Logged in successfully:", formData, loginType);
      navigate("/dashboard");
    }, 1500);
  };

  const handleSendOTP = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setLoginMethod("otp_verify");
    }, 1200);
  }

  return (
    <main className="w-full flex-grow relative flex items-center justify-center py-16 px-4 sm:px-6 lg:px-8 min-h-[85vh] lg:min-h-[calc(100vh-140px)] overflow-hidden bg-[#F8F9FA] selection:bg-[#0056D2] selection:text-white">
      
      {/* 🟢 TOP SAFFRON WAVE */}
      <div className="absolute top-0 left-0 w-full overflow-hidden pointer-events-none z-0">
        <svg viewBox="0 0 1440 320" className="w-full h-auto opacity-[0.15]">
          <path fill="#FF9933" d="M0,64L80,85.3C160,107,320,150,480,149.3C640,149,800,107,960,106.7C1120,107,1280,149,1360,170.7L1440,192L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path>
        </svg>
      </div>

      {/* 🟢 BOTTOM GREEN WAVE */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden pointer-events-none z-0">
        <svg viewBox="0 0 1440 320" className="w-full h-auto opacity-[0.15]">
          <path fill="#138808" d="M0,192L80,170.7C160,149,320,107,480,106.7C640,107,800,149,960,149.3C1120,149,1280,107,1360,85.3L1440,64L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
        </svg>
      </div>

      {/* 🟢 LEFT & RIGHT MONUMENT SKETCHES */}
      <div 
        className="absolute left-0 top-1/2 -translate-y-1/2 w-[400px] h-[350px] bg-no-repeat bg-left pointer-events-none z-0 mix-blend-multiply opacity-[0.12] grayscale hidden lg:block" 
        style={{ backgroundImage: "url('https://png.pngtree.com/png-vector/20220815/ourmid/pngtree-indian-monuments-line-art-vector-png-image_6110826.png')", backgroundSize: '1000px auto', backgroundPosition: 'left center' }}>
      </div>
      <div 
        className="absolute right-0 top-1/2 -translate-y-1/2 w-[400px] h-[350px] bg-no-repeat bg-right pointer-events-none z-0 mix-blend-multiply opacity-[0.12] grayscale hidden lg:block" 
        style={{ backgroundImage: "url('https://png.pngtree.com/png-vector/20220815/ourmid/pngtree-indian-monuments-line-art-vector-png-image_6110826.png')", backgroundSize: '1000px auto', backgroundPosition: 'right center' }}>
      </div>

      {/* 🟢 LOGIN CARD */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="bg-white/95 backdrop-blur-md w-full max-w-[460px] rounded-[1.5rem] shadow-[0_0_40px_rgba(0,0,0,0.06)] border border-gray-100 p-8 sm:p-10 relative z-20 overflow-hidden"
      >
        
        {/* Loading Overlay (Optional subtle effect) */}
        <AnimatePresence>
          {isLoading && (
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              className="absolute inset-0 bg-white/50 backdrop-blur-[1px] z-50 rounded-[1.5rem] flex items-center justify-center pointer-events-none"
            />
          )}
        </AnimatePresence>

        <div className="text-center mb-8">
          <img src="https://upload.wikimedia.org/wikipedia/commons/5/55/Emblem_of_India.svg" alt="Emblem" className="h-12 w-auto mx-auto mb-4 opacity-90" />
          <h2 className="text-[22px] font-black text-[#0F172A] leading-tight">
            Login to <span className="text-[#0056D2]">DocuMind</span>
          </h2>
          <p className="text-[13px] text-gray-500 font-medium mt-1">
            {loginMethod === 'password' ? 'Access your account to continue' : 'Secure login via OTP'}
          </p>
        </div>

        {/* 🟢 TOGGLE ACCOUNT TYPE */}
        <div className="grid grid-cols-2 gap-3 mb-8">
          <motion.button 
            whileTap={{ scale: 0.97 }}
            type="button"
            onClick={() => setLoginType('individual')}
            className={`flex items-start gap-3 p-3.5 rounded-xl border text-left transition-all duration-200 ${loginType === 'individual' ? 'border-[#0056D2] bg-[#0056D2]/5 ring-1 ring-[#0056D2] shadow-sm' : 'border-gray-200 hover:border-gray-300 bg-white hover:bg-gray-50'}`}
          >
            <div className={`mt-0.5 transition-colors ${loginType === 'individual' ? 'text-[#0056D2]' : 'text-gray-400'}`}>
              <User size={18} strokeWidth={2.5}/>
            </div>
            <div>
              <p className={`text-[12px] font-bold leading-none mb-1 transition-colors ${loginType === 'individual' ? 'text-[#0056D2]' : 'text-gray-700'}`}>For Myself</p>
              <p className="text-[10px] text-gray-500 leading-tight">Students & Learners</p>
            </div>
          </motion.button>

          <motion.button 
            whileTap={{ scale: 0.97 }}
            type="button"
            onClick={() => setLoginType('organization')}
            className={`flex items-start gap-3 p-3.5 rounded-xl border text-left transition-all duration-200 ${loginType === 'organization' ? 'border-[#0056D2] bg-[#0056D2]/5 ring-1 ring-[#0056D2] shadow-sm' : 'border-gray-200 hover:border-gray-300 bg-white hover:bg-gray-50'}`}
          >
            <div className={`mt-0.5 transition-colors ${loginType === 'organization' ? 'text-[#0056D2]' : 'text-gray-400'}`}>
              <Building size={18} strokeWidth={2.5}/>
            </div>
            <div>
              <p className={`text-[12px] font-bold leading-none mb-1 transition-colors ${loginType === 'organization' ? 'text-[#0056D2]' : 'text-gray-700'}`}>For Organization</p>
              <p className="text-[10px] text-gray-500 leading-tight">Institutions & Schools</p>
            </div>
          </motion.button>
        </div>

        {/* 🟢 DYNAMIC FORM AREA */}
        <AnimatePresence mode="wait">
          
          {/* --- PASSWORD LOGIN MODE --- */}
          {loginMethod === 'password' && (
            <motion.form 
              key="password-form"
              initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 20 }} transition={{ duration: 0.3 }}
              onSubmit={handleLogin} 
              className="space-y-5"
            >
              <div>
                <label className="block text-[12px] font-bold text-[#1E293B] mb-1.5">Email Address / Mobile Number</label>
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                    <Mail size={16} className="text-gray-400 group-focus-within:text-[#0056D2] transition-colors" />
                  </div>
                  <input 
                    type="text" 
                    name="identifier"
                    value={formData.identifier}
                    onChange={handleInputChange}
                    required
                    className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg text-[13px] font-medium focus:border-[#0056D2] focus:ring-2 focus:ring-[#0056D2]/20 outline-none transition-all placeholder:text-gray-400"
                    placeholder={loginType === 'individual' ? "Enter your email or mobile" : "Enter organization email"}
                  />
                </div>
              </div>

              <div>
                <div className="flex justify-between items-end mb-1.5">
                  <label className="block text-[12px] font-bold text-[#1E293B]">Password</label>
                  <Link to="/forgot-password" className="text-[12px] font-bold text-[#0056D2] hover:text-[#0044A8] hover:underline transition-colors">Forgot Password?</Link>
                </div>
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                    <Lock size={16} className="text-gray-400 group-focus-within:text-[#0056D2] transition-colors" />
                  </div>
                  <input 
                    type={showPassword ? "text" : "password"} 
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    required
                    className="w-full pl-10 pr-10 py-2.5 border border-gray-300 rounded-lg text-[13px] font-medium focus:border-[#0056D2] focus:ring-2 focus:ring-[#0056D2]/20 outline-none transition-all placeholder:text-gray-400"
                    placeholder="Enter your password"
                  />
                  <button 
                    type="button" 
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-gray-400 hover:text-[#0056D2] focus:outline-none transition-colors"
                  >
                    {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                  </button>
                </div>
              </div>

              <div className="flex items-center pt-1">
                <button 
                  type="button"
                  onClick={() => setRememberMe(!rememberMe)}
                  className={`w-4 h-4 rounded flex items-center justify-center transition-all ${rememberMe ? 'bg-[#0056D2] border-transparent shadow-sm' : 'border border-gray-300 bg-white hover:border-[#0056D2]'}`}
                >
                  {rememberMe && <Check size={12} className="text-white" strokeWidth={4}/>}
                </button>
                <span className="ml-2.5 text-[12px] font-semibold text-gray-600 cursor-pointer select-none" onClick={() => setRememberMe(!rememberMe)}>Remember me</span>
              </div>

              <motion.button 
                whileTap={{ scale: 0.98 }}
                type="submit" 
                disabled={isLoading}
                className="w-full bg-[#0056D2] hover:bg-[#0044A8] text-white font-bold text-[14px] py-2.5 rounded-lg shadow-sm transition-all focus:ring-4 focus:ring-[#0056D2]/30 outline-none flex items-center justify-center gap-2 mt-2 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isLoading ? <Loader2 size={18} className="animate-spin" /> : <><ArrowRight size={16} /> Login to Account</>}
              </motion.button>

              <div className="relative flex items-center justify-center mt-6 mb-4">
                <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-gray-200"></div></div>
                <div className="relative bg-white px-3 text-[11px] font-bold text-gray-400 uppercase tracking-widest">OR</div>
              </div>

              <button 
                type="button" 
                onClick={() => setLoginMethod('otp')}
                className="w-full bg-white border border-gray-300 hover:bg-gray-50 hover:border-[#0056D2]/50 text-gray-700 font-bold text-[13px] py-2.5 rounded-lg transition-all focus:ring-4 focus:ring-gray-100 outline-none flex flex-col items-center justify-center gap-0.5 group"
              >
                <div className="flex items-center gap-2 group-hover:text-[#0056D2] transition-colors">
                  <Smartphone size={16} className="text-[#0056D2]" />
                  <span>Login with OTP</span>
                </div>
                <span className="text-[10px] text-gray-500 font-medium">Get a secure code on your mobile number</span>
              </button>
            </motion.form>
          )}

          {/* --- OTP REQUEST MODE --- */}
          {loginMethod === 'otp' && (
            <motion.form 
              key="otp-form"
              initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.3 }}
              onSubmit={handleSendOTP} 
              className="space-y-5"
            >
              <div>
                <label className="block text-[12px] font-bold text-[#1E293B] mb-1.5">Registered Mobile Number</label>
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                    <span className="text-[13px] font-bold text-gray-500 border-r border-gray-300 pr-2">+91</span>
                  </div>
                  <input 
                    type="tel" 
                    name="mobile"
                    maxLength="10"
                    value={formData.mobile}
                    onChange={handleInputChange}
                    required
                    className="w-full pl-[52px] pr-4 py-2.5 border border-gray-300 rounded-lg text-[13px] font-bold tracking-wide focus:border-[#0056D2] focus:ring-2 focus:ring-[#0056D2]/20 outline-none transition-all placeholder:text-gray-400 placeholder:font-normal"
                    placeholder="Enter 10-digit number"
                  />
                </div>
              </div>

              <motion.button 
                whileTap={{ scale: 0.98 }}
                type="submit" 
                disabled={isLoading || formData.mobile.length < 10}
                className="w-full bg-[#0056D2] hover:bg-[#0044A8] text-white font-bold text-[14px] py-2.5 rounded-lg shadow-sm transition-all focus:ring-4 focus:ring-[#0056D2]/30 outline-none flex items-center justify-center gap-2 mt-4 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? <Loader2 size={18} className="animate-spin" /> : <><MessageSquare size={16} /> Send OTP</>}
              </motion.button>

              <button 
                type="button" 
                onClick={() => setLoginMethod('password')}
                className="w-full text-center text-[12px] font-bold text-gray-500 hover:text-[#0056D2] transition-colors pt-2 flex items-center justify-center gap-1"
              >
                <KeyRound size={14} /> Back to Password Login
              </button>
            </motion.form>
          )}

          {/* --- OTP VERIFY MODE --- */}
          {loginMethod === 'otp_verify' && (
            <motion.form 
              key="otp-verify"
              initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }} transition={{ duration: 0.3 }}
              onSubmit={handleLogin} 
              className="space-y-5 text-center"
            >
              <div className="mb-2">
                <div className="w-12 h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Smartphone size={24} />
                </div>
                <h3 className="text-[16px] font-black text-[#0F172A]">Enter Verification Code</h3>
                <p className="text-[12px] text-gray-500 mt-1">We've sent an OTP to <span className="font-bold text-gray-800">+91 {formData.mobile}</span></p>
              </div>

              <div>
                <input 
                  type="text" 
                  name="otp"
                  maxLength="6"
                  value={formData.otp}
                  onChange={handleInputChange}
                  required
                  className="w-full text-center tracking-[0.5em] py-3 border border-gray-300 rounded-lg text-[18px] font-black focus:border-[#0056D2] focus:ring-2 focus:ring-[#0056D2]/20 outline-none transition-all placeholder:text-gray-300 placeholder:tracking-normal placeholder:text-[13px] placeholder:font-medium"
                  placeholder="Enter 6-digit OTP"
                />
              </div>

              <motion.button 
                whileTap={{ scale: 0.98 }}
                type="submit" 
                disabled={isLoading || formData.otp.length < 6}
                className="w-full bg-[#0056D2] hover:bg-[#0044A8] text-white font-bold text-[14px] py-2.5 rounded-lg shadow-sm transition-all focus:ring-4 focus:ring-[#0056D2]/30 outline-none flex items-center justify-center gap-2 mt-4 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? <Loader2 size={18} className="animate-spin" /> : "Verify & Login"}
              </motion.button>

              <div className="flex items-center justify-between text-[12px] font-bold pt-2 px-1">
                <button type="button" onClick={() => setLoginMethod('otp')} className="text-gray-500 hover:text-gray-800 transition-colors">Change Number</button>
                <button type="button" className="text-[#0056D2] hover:underline transition-colors">Resend OTP</button>
              </div>
            </motion.form>
          )}

        </AnimatePresence>

        {/* Signup Link (Always visible at bottom) */}
        <div className="text-center mt-6 pt-4 border-t border-gray-100">
          <p className="text-[13px] font-medium text-gray-600">
            New user? <Link to="/signup" className="text-[#0056D2] hover:text-[#003366] hover:underline font-black inline-flex items-center gap-1 ml-1 transition-colors">Create an account <ArrowRight size={12}/></Link>
          </p>
        </div>

      </motion.div>
    </main>
  );
}