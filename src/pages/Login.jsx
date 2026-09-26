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

      {/* 🟢 LEFT SIDE MONUMENT SKETCH */}
      <div 
        className="absolute left-0 top-1/2 -translate-y-1/2 w-[400px] h-[350px] bg-no-repeat bg-left pointer-events-none z-0 mix-blend-multiply opacity-[0.12] grayscale hidden lg:block" 
        style={{ 
          backgroundImage: "url('https://png.pngtree.com/png-vector/20220815/ourmid/pngtree-indian-monuments-line-art-vector-png-image_6110826.png')",
          backgroundSize: '1000px auto',
          backgroundPosition: 'left center'
        }}>
      </div>

      {/* 🟢 RIGHT SIDE MONUMENT SKETCH */}
      <div 
        className="absolute right-0 top-1/2 -translate-y-1/2 w-[400px] h-[350px] bg-no-repeat bg-right pointer-events-none z-0 mix-blend-multiply opacity-[0.12] grayscale hidden lg:block" 
        style={{ 
          backgroundImage: "url('https://png.pngtree.com/png-vector/20220815/ourmid/pngtree-indian-monuments-line-art-vector-png-image_6110826.png')",
          backgroundSize: '1000px auto',
          backgroundPosition: 'right center'
        }}>
      </div>

      {/* 🟢 LOGIN CARD */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="bg-white/95 backdrop-blur-md w-full max-w-[460px] rounded-[1.5rem] shadow-[0_0_40px_rgba(0,0,0,0.06)] border border-gray-100 p-8 sm:p-10 relative z-20"
      >
        
        <div className="text-center mb-8">
          <img 
            src="https://upload.wikimedia.org/wikipedia/commons/5/55/Emblem_of_India.svg" 
            alt="Emblem" 
            className="h-12 w-auto mx-auto mb-4 opacity-90" 
          />
          <h2 className="text-[22px] font-black text-[#0F172A] leading-tight">
            Login to <span className="text-[#0056D2]">DocuMind</span>
          </h2>
          <p className="text-[13px] text-gray-500 font-medium mt-1">Access your account to continue</p>
        </div>

        {/* Account Type Toggle */}
        <div className="grid grid-cols-2 gap-3 mb-8">
          <button 
            type="button"
            onClick={() => setLoginType('individual')}
            className={`flex items-start gap-3 p-3.5 rounded-xl border text-left transition-all duration-200 ${loginType === 'individual' ? 'border-[#0056D2] bg-[#0056D2]/5 ring-1 ring-[#0056D2]' : 'border-gray-200 hover:border-gray-300 bg-white'}`}
          >
            <div className={`mt-0.5 transition-colors ${loginType === 'individual' ? 'text-[#0056D2]' : 'text-gray-400'}`}>
              <User size={18} strokeWidth={2.5}/>
            </div>
            <div>
              <p className={`text-[12px] font-bold leading-none mb-1 transition-colors ${loginType === 'individual' ? 'text-[#0056D2]' : 'text-gray-700'}`}>For Myself</p>
              <p className="text-[10px] text-gray-500 leading-tight">Students & Individual Learners</p>
            </div>
          </button>

          <button 
            type="button"
            onClick={() => setLoginType('organization')}
            className={`flex items-start gap-3 p-3.5 rounded-xl border text-left transition-all duration-200 ${loginType === 'organization' ? 'border-[#0056D2] bg-[#0056D2]/5 ring-1 ring-[#0056D2]' : 'border-gray-200 hover:border-gray-300 bg-white'}`}
          >
            <div className={`mt-0.5 transition-colors ${loginType === 'organization' ? 'text-[#0056D2]' : 'text-gray-400'}`}>
              <Building size={18} strokeWidth={2.5}/>
            </div>
            <div>
              <p className={`text-[12px] font-bold leading-none mb-1 transition-colors ${loginType === 'organization' ? 'text-[#0056D2]' : 'text-gray-700'}`}>For Organization</p>
              <p className="text-[10px] text-gray-500 leading-tight">Schools, Colleges & Institutions</p>
            </div>
          </button>
        </div>

        <form onSubmit={handleLogin} className="space-y-5">
          
          {/* Email / Mobile Field */}
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
                className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg text-[13px] font-medium focus:border-[#0056D2] focus:ring-1 focus:ring-[#0056D2] outline-none transition-all placeholder:text-gray-400"
                placeholder="Enter your email address or mobile number"
              />
            </div>
          </div>

          {/* Password Field */}
          <div>
            <div className="flex justify-between items-end mb-1.5">
              <label className="block text-[12px] font-bold text-[#1E293B]">Password</label>
              <Link to="/forgot-password" className="text-[12px] font-bold text-[#0056D2] hover:text-[#0044A8] hover:underline">Forgot Password?</Link>
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
                className="w-full pl-10 pr-10 py-2.5 border border-gray-300 rounded-lg text-[13px] font-medium focus:border-[#0056D2] focus:ring-1 focus:ring-[#0056D2] outline-none transition-all placeholder:text-gray-400"
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
              className={`w-4 h-4 rounded flex items-center justify-center transition-all ${rememberMe ? 'bg-[#0056D2] border-transparent' : 'border border-gray-300 bg-white hover:border-[#0056D2]'}`}
            >
              {rememberMe && <Check size={12} className="text-white" strokeWidth={4}/>}
            </button>
            <span className="ml-2.5 text-[12px] font-semibold text-gray-600 cursor-pointer select-none" onClick={() => setRememberMe(!rememberMe)}>Remember me</span>
          </div>

          {/* Login Button */}
          <button 
            type="submit" 
            className="w-full bg-[#0056D2] hover:bg-[#0044A8] text-white font-bold text-[14px] py-2.5 rounded-lg transition-colors focus:ring-2 focus:ring-offset-1 focus:ring-[#0056D2] outline-none flex items-center justify-center gap-2 mt-2"
          >
            Login <ArrowRight size={16} />
          </button>

          {/* OR Divider */}
          <div className="relative flex items-center justify-center mt-6 mb-4">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-200"></div>
            </div>
            <div className="relative bg-white px-3 text-[12px] font-semibold text-gray-400 uppercase">OR</div>
          </div>

          {/* OTP Login */}
          <button 
            type="button" 
            className="w-full bg-white border border-gray-300 hover:bg-gray-50 text-gray-700 font-bold text-[13px] py-2.5 rounded-lg transition-colors focus:ring-2 focus:ring-offset-1 focus:ring-gray-200 outline-none flex flex-col items-center justify-center gap-0.5"
          >
            <div className="flex items-center gap-2">
              <MessageSquare size={16} className="text-[#0056D2]" />
              <span>Login with OTP</span>
            </div>
            <span className="text-[10px] text-gray-500 font-medium">Get a one-time password on your registered mobile number</span>
          </button>

          {/* Signup Link */}
          <div className="text-center mt-6 pt-2">
            <p className="text-[13px] font-medium text-gray-600">
              New user? <Link to="/signup" className="text-[#0056D2] hover:text-[#003366] hover:underline font-bold inline-flex items-center gap-1 ml-1 transition-colors">Create an account <ArrowRight size={12}/></Link>
            </p>
          </div>

        </form>
      </motion.div>
    </main>
  );
}