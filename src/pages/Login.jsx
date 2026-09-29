import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Mail, Lock, Eye, EyeOff, User, BookOpen, Shield,
  ArrowRight, Check, Loader2, ChevronDown
} from "lucide-react";
import DocumindLogo from "../assets/logo.png";

// 🔥 Firebase Imports
import { auth, googleProvider } from "../firebase"; 
import { signInWithEmailAndPassword, signInWithPopup, onAuthStateChanged } from "firebase/auth";

export default function Login() {
  const navigate = useNavigate();
  
  // States
  const [loginType, setLoginType] = useState("individual"); // 'individual' | 'organization'
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(true);
  
  const [isLoading, setIsLoading] = useState(false);
  const [isGoogleLoading, setIsGoogleLoading] = useState(false); 
  const [error, setError] = useState(""); 

  // Form State (OTP aur Mobile hata diya gaya hai)
  const [formData, setFormData] = useState({
    role: "learner", // Default role
    identifier: "",
    password: ""
  });

  // 🔥 1. Real-Time Session Check
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        navigate("/dashboard");
      }
    });
    return () => unsubscribe();
  }, [navigate]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (error) setError(""); 
  };

  // 🔥 2. Firebase Email/Password Login
  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);
    
    try {
      console.log("Logging in as:", formData.role); 
      await signInWithEmailAndPassword(auth, formData.identifier, formData.password);
      // Successful login par onAuthStateChanged automatically redirect kar dega
    } catch (err) {
      console.error("Login Error:", err.code);
      if (err.code === 'auth/invalid-credential' || err.code === 'auth/user-not-found' || err.code === 'auth/wrong-password') {
        setError("Invalid email or password. Please try again.");
      } else {
        setError("Login failed. Please check your connection.");
      }
      setIsLoading(false);
    }
  };

  // 🔥 3. Firebase Google Login
  const handleGoogleLogin = async () => {
    setError("");
    setIsGoogleLoading(true);
    try {
      console.log("Logging in with Google as:", formData.role);
      await signInWithPopup(auth, googleProvider);
    } catch (err) {
      console.error("Google Login Error:", err.code);
      setError("Google Sign-In failed. Please try again.");
      setIsGoogleLoading(false);
    }
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
        
        {/* Loading Overlay */}
        <AnimatePresence>
          {(isLoading || isGoogleLoading) && (
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              className="absolute inset-0 bg-white/50 backdrop-blur-[1px] z-50 rounded-[1.5rem] flex items-center justify-center pointer-events-none"
            />
          )}
        </AnimatePresence>

        <div className="text-center mb-6">
          <img src={DocumindLogo} alt="DocuMind Logo" className="mx-auto w-16 h-16 object-contain mb-3" />
          <h2 className="text-[22px] font-black text-[#0F172A] leading-tight">
            Login to <span className="text-[#0056D2]">DocuMind</span>
          </h2>
          <p className="text-[13px] text-gray-500 font-medium mt-1">
            Access your account to continue
          </p>
        </div>

        {/* 🔥 DYNAMIC ERROR MESSAGE */}
        <AnimatePresence>
          {error && (
            <motion.div 
              initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}
              className="mb-5 bg-red-50 border border-red-100 text-red-600 text-[12px] font-bold p-3 rounded-lg text-center"
            >
              {error}
            </motion.div>
          )}
        </AnimatePresence>

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

        {/* 🟢 ROLE SELECTOR DROPDOWN */}
        <div className="mb-6">
          <label className="block text-[12px] font-bold text-[#1E293B] mb-1.5">Select Your Role</label>
          <div className="relative group">
            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
              {formData.role === 'learner' && <User size={16} className="text-gray-400 group-focus-within:text-[#0056D2] transition-colors" />}
              {formData.role === 'trainer' && <BookOpen size={16} className="text-gray-400 group-focus-within:text-[#0056D2] transition-colors" />}
              {formData.role === 'admin' && <Shield size={16} className="text-gray-400 group-focus-within:text-[#0056D2] transition-colors" />}
            </div>
            <select
              name="role"
              value={formData.role}
              onChange={handleInputChange}
              className="w-full pl-10 pr-10 py-2.5 border border-gray-300 rounded-lg text-[13px] font-bold text-gray-700 focus:border-[#0056D2] focus:ring-2 focus:ring-[#0056D2]/20 outline-none transition-all appearance-none bg-white cursor-pointer hover:border-gray-400 shadow-sm"
            >
              <option value="learner">Learner (Student)</option>
              <option value="trainer">Trainer (Teacher)</option>
              <option value="admin">Administrator</option>
            </select>
            <div className="absolute inset-y-0 right-0 pr-3.5 flex items-center pointer-events-none">
              <ChevronDown size={14} className="text-gray-400" />
            </div>
          </div>
        </div>

        {/* --- PASSWORD LOGIN FORM --- */}
        <motion.form 
          initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.3 }}
          onSubmit={handleLogin} 
          className="space-y-5"
        >
          <div>
            <label className="block text-[12px] font-bold text-[#1E293B] mb-1.5">Email Address / User ID</label>
            <div className="relative group">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                <Mail size={16} className="text-gray-400 group-focus-within:text-[#0056D2] transition-colors" />
              </div>
              <input 
                type="email" 
                name="identifier"
                value={formData.identifier}
                onChange={handleInputChange}
                required
                className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg text-[13px] font-medium focus:border-[#0056D2] focus:ring-2 focus:ring-[#0056D2]/20 outline-none transition-all placeholder:text-gray-400"
                placeholder={
                  formData.role === 'admin' ? "admin@documind.com" : 
                  formData.role === 'trainer' ? "teacher@institute.edu" : "student@example.com"
                }
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
            disabled={isLoading || isGoogleLoading}
            className="w-full bg-[#0056D2] hover:bg-[#0044A8] text-white font-bold text-[14px] py-2.5 rounded-lg shadow-sm transition-all focus:ring-4 focus:ring-[#0056D2]/30 outline-none flex items-center justify-center gap-2 mt-2 disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {isLoading ? <Loader2 size={18} className="animate-spin" /> : <><ArrowRight size={16} /> Login to Account</>}
          </motion.button>

          <div className="relative flex items-center justify-center mt-6 mb-4">
            <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-gray-200"></div></div>
            <div className="relative bg-white px-3 text-[11px] font-bold text-gray-400 uppercase tracking-widest">OR</div>
          </div>

          {/* 🟢 GOOGLE LOGIN BUTTON */}
          <button 
            type="button" 
            onClick={handleGoogleLogin}
            disabled={isLoading || isGoogleLoading}
            className="w-full bg-white border border-gray-300 hover:bg-gray-50 text-gray-700 font-bold text-[13px] py-2.5 rounded-lg transition-all focus:ring-4 focus:ring-gray-100 outline-none flex items-center justify-center gap-3 shadow-sm disabled:opacity-70"
          >
            {isGoogleLoading ? <Loader2 size={18} className="animate-spin text-gray-500" /> : (
              <>
                <svg className="w-4 h-4" viewBox="0 0 24 24">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                </svg>
                Continue with Google
              </>
            )}
          </button>

        </motion.form>

        {/* Signup Link */}
        <div className="text-center mt-6 pt-4 border-t border-gray-100">
          <p className="text-[13px] font-medium text-gray-600">
            New user? <Link to="/signup" className="text-[#0056D2] hover:text-[#003366] hover:underline font-black inline-flex items-center gap-1 ml-1 transition-colors">Create an account <ArrowRight size={12}/></Link>
          </p>
        </div>

      </motion.div>
    </main>
  );
}