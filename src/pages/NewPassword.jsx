import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  Lock, ArrowRight, Loader2, EyeOff, Eye, CheckCircle, ShieldAlert 
} from "lucide-react";

export default function NewPassword() {
  const navigate = useNavigate();
  
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newPassword || newPassword !== confirmPassword) return;
    
    setIsLoading(true);
    // Simulate API call to save new password
    setTimeout(() => {
      setIsLoading(false);
      setIsSuccess(true);
      // Success ke 3 second baad login page par redirect
      setTimeout(() => navigate("/login"), 3000); 
    }, 1500);
  };

  return (
    <main className="w-full min-h-[calc(100vh-140px)] flex items-center justify-center bg-[#F4F7FB] relative selection:bg-[#0056D2] selection:text-white p-4 md:p-8 overflow-hidden">
      
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#FF9933] via-white to-[#138808] opacity-80" />
        <motion.div animate={{ opacity: [0.3, 0.5, 0.3] }} transition={{ duration: 8, repeat: Infinity }} className="absolute -top-[20%] -left-[10%] w-[600px] h-[600px] rounded-full bg-[#0056D2]/5 blur-[120px]" />
        <motion.div animate={{ opacity: [0.2, 0.4, 0.2] }} transition={{ duration: 10, repeat: Infinity, delay: 2 }} className="absolute bottom-[0%] right-[0%] w-[500px] h-[500px] rounded-full bg-[#138808]/5 blur-[120px]" />
      </div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.95, y: 20 }} 
        animate={{ opacity: 1, scale: 1, y: 0 }} 
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="w-full max-w-[480px] mx-auto bg-white/95 backdrop-blur-xl rounded-[2rem] shadow-[0_20px_60px_rgba(0,0,0,0.06)] border border-gray-100/50 p-8 sm:p-10 relative overflow-hidden z-10"
      >
        <div className="absolute top-0 left-0 right-0 h-1.5 bg-[#0056D2]" />

        {!isSuccess ? (
          <div className="flex flex-col items-center text-center">
            <div className="bg-[#F0F5FF] w-16 h-16 rounded-full flex items-center justify-center text-[#0056D2] mb-6 shadow-sm border border-blue-100">
              <ShieldAlert size={28} strokeWidth={2.5} />
            </div>
            
            <h2 className="text-[24px] font-black text-[#0056D2] mb-2">Create New Password</h2>
            <p className="text-[13px] text-gray-500 font-medium mb-8 px-2">
              Your new password must be different from previous used passwords.
            </p>

            <form onSubmit={handleSubmit} className="w-full space-y-5 text-left mb-4">
              
              {/* New Password Input */}
              <div>
                <label className="block text-[13px] font-bold text-[#1E293B] mb-1.5">
                  New Password <span className="text-red-500">*</span>
                </label>
                <div className="relative group">
                  <Lock size={18} className="absolute left-3.5 top-3.5 text-gray-400 group-focus-within:text-[#0056D2] transition-colors" />
                  <input 
                    type={showPassword ? "text" : "password"} 
                    value={newPassword} 
                    onChange={(e) => setNewPassword(e.target.value)} 
                    required 
                    className="w-full pl-11 pr-10 py-3 border border-gray-200 rounded-xl text-[14px] font-medium text-gray-900 bg-gray-50 focus:bg-white focus:border-[#0056D2] focus:ring-4 focus:ring-[#0056D2]/10 outline-none transition-all" 
                    placeholder="Enter new password" 
                  />
                  <button 
                    type="button" 
                    onClick={() => setShowPassword(!showPassword)} 
                    className="absolute right-3.5 top-3.5 text-gray-400 hover:text-[#0056D2] transition-colors"
                  >
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
              </div>

              {/* Confirm Password Input  i*/}
              <div>
                <label className="block text-[13px] font-bold text-[#1E293B] mb-1.5">
                  Confirm Password <span className="text-red-500">*</span>
                </label>
                <div className="relative group">
                  <Lock size={18} className="absolute left-3.5 top-3.5 text-gray-400 group-focus-within:text-[#0056D2] transition-colors" />
                  <input 
                    type={showPassword ? "text" : "password"} 
                    value={confirmPassword} 
                    onChange={(e) => setConfirmPassword(e.target.value)} 
                    required 
                    className={`w-full pl-11 pr-4 py-3 border rounded-xl text-[14px] font-medium outline-none transition-all ${
                      confirmPassword && newPassword !== confirmPassword 
                        ? 'border-red-300 bg-red-50 focus:border-red-500 text-red-900 focus:ring-4 focus:ring-red-500/10' 
                        : 'border-gray-200 bg-gray-50 text-gray-900 focus:bg-white focus:border-[#0056D2] focus:ring-4 focus:ring-[#0056D2]/10'
                    }`} 
                    placeholder="Confirm new password" 
                  />
                </div>
                {confirmPassword && newPassword !== confirmPassword && (
                  <p className="text-red-500 text-[11px] font-bold mt-1.5 ml-1">Passwords do not match!</p>
                )}
              </div>

              <motion.button 
                whileTap={{ scale: 0.98 }} 
                type="submit" 
                disabled={isLoading || !newPassword || newPassword !== confirmPassword} 
                className="w-full bg-[#0056D2] hover:bg-[#0044A8] text-white font-bold text-[15px] py-3.5 rounded-xl shadow-[0_4px_14px_rgba(0,86,210,0.25)] hover:shadow-[0_6px_20px_rgba(0,86,210,0.3)] transition-all outline-none flex items-center justify-center gap-2 disabled:opacity-70 disabled:hover:shadow-none mt-2"
              >
                {isLoading ? <Loader2 size={20} className="animate-spin" /> : <>Reset Password <ArrowRight size={18} /></>}
              </motion.button>
            </form>
          </div>
        ) : (
          /* Success Screen */
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} 
            className="flex flex-col items-center text-center py-6 mb-2"
          >
            <div className="bg-green-100 w-24 h-24 rounded-full flex items-center justify-center text-green-600 mb-6 shadow-md border-4 border-white">
              <CheckCircle size={48} strokeWidth={2.5} />
            </div>
            <h2 className="text-[26px] font-black text-gray-900 mb-2">Password Updated!</h2>
            <p className="text-[14px] text-gray-500 font-medium mb-8 leading-relaxed">
              Your password has been successfully reset. <br/>
              We are redirecting you to the login page...
            </p>
            <Loader2 size={24} className="text-[#0056D2] animate-spin" />
          </motion.div>
        )}
      </motion.div>
    </main>
  );
}