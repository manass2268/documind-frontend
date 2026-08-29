import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { Brain, ArrowLeft, Eye, EyeOff, Loader2 } from "lucide-react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      navigate("/"); 
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-[#05050A] text-white font-sans flex flex-col relative overflow-hidden">
      <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] bg-purple-700/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] bg-cyan-700/15 rounded-full blur-[120px] pointer-events-none" />

      <div className="p-6 md:p-8 absolute top-0 left-0 w-full z-50">
        <Link to="/" className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors cursor-pointer relative z-50">
          <ArrowLeft size={16} /> Back to Home
        </Link>
      </div>

      <div className="flex-1 flex items-center justify-center relative z-10 p-4 mt-12 md:mt-0">
        <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="bg-[#0B0B14]/80 backdrop-blur-xl border border-white/10 p-6 md:p-10 rounded-3xl w-full max-w-md shadow-2xl">
          
          <div className="flex justify-center mb-8">
            <div className="p-3 bg-purple-500/10 rounded-2xl border border-purple-500/20"><Brain className="text-purple-400" size={32} /></div>
          </div>
          <h2 className="text-2xl font-bold text-center mb-2">Welcome back</h2>
          <p className="text-gray-400 text-center text-sm mb-8">Sign in to your DocuMind account</p>

          <button type="button" className="w-full flex items-center justify-center gap-3 bg-[#131314] hover:bg-white/5 border border-white/10 text-white font-medium py-3 rounded-xl transition-all mb-6">
            <svg className="w-5 h-5" viewBox="0 0 24 24">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
            </svg>
            Continue with Google
          </button>

          <div className="flex items-center mb-6">
            <div className="flex-1 border-t border-white/10"></div>
            <span className="px-3 text-[10px] md:text-xs text-gray-500 uppercase tracking-wider font-medium">Or continue with email</span>
            <div className="flex-1 border-t border-white/10"></div>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="text-xs font-medium text-gray-400 mb-1 block">Email Address</label>
              <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="manas@example.com" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-purple-500/50 text-sm transition-colors" required />
            </div>
            <div>
              <div className="flex items-center justify-between mb-1">
                <label className="text-xs font-medium text-gray-400 block">Password</label>
                {/* --- FORGOT PASSWORD LINK --- */}
                <Link to="/forgot-password" className="text-[10px] md:text-xs text-purple-400 hover:text-purple-300 transition-colors">Forgot password?</Link>
              </div>
              <div className="relative">
                <input type={showPassword ? "text" : "password"} value={password} onChange={(e) => setPassword(e.target.value)} placeholder="••••••••" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 pr-10 outline-none focus:border-purple-500/50 text-sm transition-colors" required />
                <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white transition-colors">
                  {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
            </div>
            <button type="submit" disabled={isLoading} className="w-full bg-purple-600 hover:bg-purple-700 text-white font-medium py-3 rounded-xl transition-colors shadow-[0_0_15px_rgba(147,51,234,0.3)] mt-2 flex justify-center items-center gap-2">
              {isLoading ? <><Loader2 size={18} className="animate-spin" /> Signing in...</> : "Sign In"}
            </button>
          </form>

          <div className="mt-6 flex items-center justify-center gap-2 text-xs md:text-sm">
            <span className="text-gray-500">Don't have an account?</span>
            {/* --- SIGN UP LINK --- */}
            <Link to="/signup" className="text-purple-400 hover:text-purple-300 font-medium transition-colors">Sign up for free</Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}