import React, { useState, useRef, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ShieldCheck, ArrowRight, ArrowLeft, Loader2, CheckCircle } from "lucide-react";

export default function OtpVerify() {
  const navigate = useNavigate();
  const location = useLocation();
  
  // Catch data passed from ForgotPassword screen
  const email = location.state?.email || "";
  const role = location.state?.role || "";
  const userId = location.state?.userId || "";
  
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState("");
  
  const inputRefs = useRef([]);

  // Security Check: If user came directly to this URL, kick them out
  useEffect(() => {
    if (!email) {
      navigate("/forgot-password");
    }
  }, [email, navigate]);

  const handleOtpChange = (index, value) => {
    if (isNaN(value)) return;
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
    setError("");

    // Auto-focus next input
    if (value !== "" && index < 5) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleKeyDown = (index, e) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  const handleResendCode = async () => {
    setError("");
    try {
      const response = await fetch("http://127.0.0.1:8000/api/send-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: email })
      });
      if (response.ok) {
        alert("New OTP has been sent to your email!");
      } else {
        setError("Failed to resend OTP. Please try again.");
      }
    } catch (err) {
      setError("Network error. Cannot reach server.");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const otpValue = otp.join("");
    
    // Only proceed if 6 digits are entered
    if (otpValue.length < 6) return;
    
    setError("");
    setIsLoading(true);
    
    try {
      // 1. Send Verification Request to FastAPI
      const response = await fetch("http://127.0.0.1:8000/api/verify-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: email, otp: otpValue })
      });

      const data = await response.json();

      if (response.ok) {
        // 2. Success! Show animation and redirect to New Password screen
        setIsSuccess(true);
        setTimeout(() => {
          navigate("/new-password", {
            state: { email, role, userId }
          }); 
        }, 1500);
      } else {
        setError(data.detail || "Invalid Verification Code. Please try again.");
        // Clear OTP inputs on failure
        setOtp(["", "", "", "", "", ""]);
        inputRefs.current[0].focus();
      }
    } catch (err) {
      setError("Network error. Cannot verify OTP right now.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="w-full min-h-[calc(100vh-140px)] flex items-center justify-center bg-[#F4F7FB] relative selection:bg-[#0056D2] selection:text-white p-4 md:p-8 overflow-hidden">
      
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#FF9933] via-white to-[#138808] opacity-80" />
      </div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.95, y: 20 }} 
        animate={{ opacity: 1, scale: 1, y: 0 }} 
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="w-full max-w-[500px] mx-auto bg-white/95 backdrop-blur-xl rounded-[2rem] shadow-[0_20px_60px_rgba(0,0,0,0.06)] border border-gray-100/50 p-8 sm:p-10 relative overflow-hidden z-10"
      >
        <div className="absolute top-0 left-0 right-0 h-1.5 bg-[#0056D2]" />

        {!isSuccess ? (
          <div className="flex flex-col items-center text-center">
            <div className="bg-green-50 w-16 h-16 rounded-full flex items-center justify-center text-green-600 mb-6 shadow-sm border border-green-100">
              <ShieldCheck size={28} strokeWidth={2.5} />
            </div>
            
            <h2 className="text-[24px] font-black text-[#0056D2] mb-2">Verify OTP</h2>
            <p className="text-[13px] text-gray-500 font-medium mb-6 px-4 leading-relaxed">
              We have sent a 6-digit verification code to <br />
              <strong className="text-gray-800">{email}</strong>
            </p>

            <AnimatePresence>
              {error && (
                <motion.div 
                  initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}
                  className="mb-4 w-full bg-red-50 border border-red-100 text-red-600 text-[12px] font-bold p-3 rounded-lg text-center"
                >
                  {error}
                </motion.div>
              )}
            </AnimatePresence>

            <form onSubmit={handleSubmit} className="w-full text-left mb-4 mt-2">
              
              {/* OTP Input Boxes */}
              <div className="mb-8">
                <label className="block text-[13px] font-bold text-[#1E293B] mb-3 text-center">
                  Enter Verification Code
                </label>
                <div className="flex justify-between gap-2 sm:gap-3">
                  {otp.map((digit, index) => (
                    <input
                      key={index}
                      type="text"
                      maxLength="1"
                      value={digit}
                      ref={(el) => (inputRefs.current[index] = el)}
                      onChange={(e) => handleOtpChange(index, e.target.value)}
                      onKeyDown={(e) => handleKeyDown(index, e)}
                      className="w-full h-12 text-center text-[18px] font-bold text-gray-900 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:border-[#0056D2] focus:ring-4 focus:ring-[#0056D2]/10 outline-none transition-all"
                    />
                  ))}
                </div>
                <div className="text-right mt-3">
                  <button type="button" onClick={handleResendCode} className="text-[12px] font-bold text-[#0056D2] hover:underline">
                    Resend Code
                  </button>
                </div>
              </div>

              {/* Submit Button */}
              <motion.button 
                whileTap={{ scale: 0.98 }} 
                type="submit" 
                disabled={isLoading || otp.join("").length < 6} 
                className="w-full bg-[#0056D2] hover:bg-[#0044A8] text-white font-bold text-[15px] py-3.5 rounded-xl shadow-[0_4px_14px_rgba(0,86,210,0.25)] hover:shadow-[0_6px_20px_rgba(0,86,210,0.3)] transition-all outline-none flex items-center justify-center gap-2 disabled:opacity-70 disabled:hover:shadow-none"
              >
                {isLoading ? <Loader2 size={20} className="animate-spin" /> : <>Verify OTP <ArrowRight size={18} /></>}
              </motion.button>
            </form>
          </div>
        ) : (
          /* Success State */
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} 
            className="flex flex-col items-center text-center py-6"
          >
            <div className="bg-green-100 w-24 h-24 rounded-full flex items-center justify-center text-green-600 mb-6 shadow-md border-4 border-white">
              <CheckCircle size={48} strokeWidth={2.5} />
            </div>
            <h2 className="text-[26px] font-black text-gray-900 mb-2">OTP Verified!</h2>
            <p className="text-[14px] text-gray-500 font-medium mb-8 leading-relaxed">
              Your code has been verified successfully. <br/>
              Redirecting you to set a new password...
            </p>
            <Loader2 size={24} className="text-[#0056D2] animate-spin" />
          </motion.div>
        )}

        {/* Footer */}
        {!isSuccess && (
          <div className="mt-4 pt-6 border-t border-gray-100 w-full flex justify-start">
            <Link to="/forgot-password" className="flex items-center gap-2 text-[14px] font-bold text-gray-500 hover:text-[#0056D2] transition-colors group">
              <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
              Change Email
            </Link>
          </div>
        )}
      </motion.div>
    </main>
  );
}