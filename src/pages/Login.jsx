import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  Mail, Lock, Eye, EyeOff, User, Building, 
  MessageSquare, ArrowRight, Check
} from "lucide-react";

export default function Login() {
  const navigate = useNavigate();
  const [loginType, setLoginType] = useState("individual");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(true);

  // Form State
  const [formData, setFormData] = useState({
    identifier: "",
    password: ""
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Logging in...", formData, loginType);
    navigate("/dashboard");
  };

  return (
    <main className="w-full flex-grow relative flex items-center justify-center py-16 px-4 sm:px-6 lg:px-8 min-h-[85vh] lg:min-h-[calc(100vh-140px)] overflow-hidden bg-[#F4F7FA] selection:bg-[#0056D2] selection:text-white">
      
      {/* 🟢 TOP TRICOLOR LINE (For MoSPI Theme) */}
      <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-[#FF9933] via-white to-[#138808] z-10 opacity-90"></div>

      {/* 🟢 INDIAN MONUMENT BACKGROUND (Faded Watermark Effect) */}
      <div 
        className="absolute inset-0 z-0 opacity-[0.12] grayscale mix-blend-multiply pointer-events-none bg-center bg-cover bg-no-repeat transition-all duration-1000"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1585084335487-f653d0e28328?q=80&w=2000&auto=format&fit=crop')" }}
      ></div>

      {/* 🟢 GRADIENT OVERLAY (To blend the monument smoothly into the background) */}
      <div className="absolute inset-0 z-0 bg-gradient-to-t from-[#F4F7FA]/20 via-[#F4F7FA]/70 to-[#F4F7FA] pointer-events-none"></div>

      {/* 🟢 SUBTLE TRICOLOR GLOW BEHIND THE CARD */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white rounded-full blur-[120px] pointer-events-none z-0 opacity-60"></div>

      {/* 🟢 LOGIN CARD */}
      <motion.div 
        initial={{ opacity: 0, y: 25, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ type: "spring", stiffness: 90, damping: 15 }}
        className="bg-white/85 backdrop-blur-2xl w-full max-w-[460px] rounded-[2rem] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] border border-white p-8 sm:p-10 relative z-20"
      >
        
        <div className="text-center mb-8">
          <motion.img 
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring" }}
            src="https://upload.wikimedia.org/wikipedia/commons/5/55/Emblem_of_India.svg" 
            alt="Emblem" 
            className="h-12 w-auto mx-auto mb-4 opacity-90 drop-shadow-sm" 
          />
          <h2 className="text-[24px] font-black text-[#0F172A] leading-tight">
            Login to <span className="text-[#0056D2]">DocuMind</span>
          </h2>
          <p className="text-[13px] text-gray-500 font-medium mt-1.5">Access your account to continue</p>
        </div>

        {/* Account Type Toggle */}
        <div className="grid grid-cols-2 gap-3 mb-8">
          <button 
            type="button"
            onClick={() => setLoginType('individual')}
            className={`flex items-start gap-3 p-3.5 rounded-xl border text-left transition-all duration-300 ${loginType === 'individual' ? 'border-[#0056D2] bg-[#0056D2]/5 ring-2 ring-[#0056D2]/20 shadow-sm' : 'border-gray-200 hover:border-gray-300 bg-gray-50/50 hover:bg-gray-50'}`}
          >
            <div className={`mt-0.5 transition-colors ${loginType === 'individual' ? 'text-[#0056D2]' : 'text-gray-400'}`}>
              <User size={18} strokeWidth={2.5}/>
            </div>
            <div>
              <p className={`text-[12px] font-black leading-none mb-1 transition-colors ${loginType === 'individual' ? 'text-[#0056D2]' : 'text-gray-700'}`}>For Myself</p>
              <p className="text-[10px] text-gray-500 leading-tight font-medium">Students & Individuals</p>
            </div>
          </button>

          <button 
            type="button"
            onClick={() => setLoginType('organization')}
            className={`flex items-start gap-3 p-3.5 rounded-xl border text-left transition-all duration-300 ${loginType === 'organization' ? 'border-[#0056D2] bg-[#0056D2]/5 ring-2 ring-[#0056D2]/20 shadow-sm' : 'border-gray-200 hover:border-gray-300 bg-gray-50/50 hover:bg-gray-50'}`}
          >
            <div className={`mt-0.5 transition-colors ${loginType === 'organization' ? 'text-[#0056D2]' : 'text-gray-400'}`}>
              <Building size={18} strokeWidth={2.5}/>
            </div>
            <div>
              <p className={`text-[12px] font-black leading-none mb-1 transition-colors ${loginType === 'organization' ? 'text-[#0056D2]' : 'text-gray-700'}`}>For Organization</p>
              <p className="text-[10px] text-gray-500 leading-tight font-medium">Schools & Institutions</p>
            </div>
          </button>
        </div>

        <form onSubmit={handleLogin} className="space-y-5">
          
          {/* Email / Mobile Field */}
          <div>
            <label className="block text-[12px] font-extrabold text-[#1E293B] mb-2 tracking-wide uppercase">Email Address / Mobile Number</label>
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
                className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl text-[13px] font-medium bg-white/50 focus:bg-white focus:border-[#0056D2] focus:ring-4 focus:ring-[#0056D2]/10 outline-none transition-all placeholder:text-gray-400 shadow-sm"
                placeholder="Enter your email address or mobile number"
              />
            </div>
          </div>

          {/* Password Field */}
          <div>
            <div className="flex justify-between items-end mb-2">
              <label className="block text-[12px] font-extrabold text-[#1E293B] tracking-wide uppercase">Password</label>
              <Link to="/forgot-password" className="text-[11px] font-bold text-[#0056D2] hover:text-blue-700 hover:underline">Forgot Password?</Link>
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
                className="w-full pl-10 pr-10 py-3 border border-gray-200 rounded-xl text-[13px] font-medium bg-white/50 focus:bg-white focus:border-[#0056D2] focus:ring-4 focus:ring-[#0056D2]/10 outline-none transition-all placeholder:text-gray-400 shadow-sm"
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

          {/* Remember Me */}
          <div className="flex items-center pt-1">
            <button 
              type="button"
              onClick={() => setRememberMe(!rememberMe)}
              className={`w-4 h-4 rounded flex items-center justify-center transition-all ${rememberMe ? 'bg-[#0056D2] border-transparent shadow-sm' : 'border border-gray-300 bg-white hover:border-[#0056D2]'}`}
            >
              {rememberMe && <Check size={12} className="text-white" strokeWidth={4}/>}
            </button>
            <span className="ml-2.5 text-[13px] font-semibold text-gray-600 cursor-pointer select-none" onClick={() => setRememberMe(!rememberMe)}>Remember me</span>
          </div>

          {/* Login Button */}
          <motion.button 
            whileHover={{ scale: 1.01, y: -1 }}
            whileTap={{ scale: 0.99 }}
            type="submit" 
            className="w-full bg-gradient-to-r from-[#0056D2] to-[#0044A8] hover:shadow-lg hover:shadow-blue-500/30 text-white font-black text-[14px] py-3.5 rounded-xl transition-all focus:ring-4 focus:ring-[#0056D2]/30 outline-none flex items-center justify-center gap-2 mt-2"
          >
            Login <ArrowRight size={18} />
          </motion.button>

          {/* OR Divider */}
          <div className="relative flex items-center justify-center mt-6 mb-4">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-200"></div>
            </div>
            <div className="relative bg-white px-4 text-[11px] font-black text-gray-400 tracking-widest uppercase">OR</div>
          </div>

          {/* OTP Login */}
          <motion.button 
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.99 }}
            type="button" 
            className="w-full bg-white border border-gray-300 hover:bg-gray-50 hover:border-gray-400 text-gray-700 font-bold text-[13px] py-3 rounded-xl transition-all focus:ring-4 focus:ring-gray-100 outline-none flex flex-col items-center justify-center gap-1 shadow-sm"
          >
            <div className="flex items-center gap-2">
              <MessageSquare size={16} className="text-[#0056D2]" />
              <span>Login with OTP</span>
            </div>
            <span className="text-[10px] text-gray-400 font-semibold">Get a one-time password on your registered mobile number</span>
          </motion.button>

          {/* Signup Link */}
          <div className="text-center mt-8 pt-2">
            <p className="text-[13px] font-semibold text-gray-600">
              New user? <Link to="/signup" className="text-[#0056D2] hover:text-[#003366] hover:underline font-black inline-flex items-center gap-1 ml-1 transition-colors">Create an account <ArrowRight size={14}/></Link>
            </p>
          </div>

        </form>
      </motion.div>
    </main>
  );
}