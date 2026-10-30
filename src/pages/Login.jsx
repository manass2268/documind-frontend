import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Mail, Lock, Eye, EyeOff, User, BookOpen, Shield,
  ArrowRight, Check, Loader2, ChevronDown, ShieldCheck, ShieldAlert
} from "lucide-react";
import DocumindLogo from "../assets/logo.png";

import { auth, googleProvider, db } from "../firebase"; 
import { signInWithEmailAndPassword, signInWithPopup, onAuthStateChanged, signOut, updatePassword } from "firebase/auth";
import { doc, getDoc, updateDoc, collection, collectionGroup, query, where, getDocs } from "firebase/firestore"; 

export default function Login() {
  const navigate = useNavigate();
  
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(true);
  
  const [isLoading, setIsLoading] = useState(false);
  const [isGoogleLoading, setIsGoogleLoading] = useState(false); 
  const [error, setError] = useState(""); 

  const [formData, setFormData] = useState({
    role: "learner", 
    identifier: "",
    password: ""
  });

  // --- FIRST TIME SETUP (SECURITY) STATES ---
  const [showSetupModal, setShowSetupModal] = useState(false);
  const [setupStep, setSetupStep] = useState(1); 
  const [setupEmail, setSetupEmail] = useState('');
  const [otp, setOtp] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [setupLoading, setSetupLoading] = useState(false);
  const [setupError, setSetupError] = useState('');
  const [setupSuccess, setSetupSuccess] = useState(''); 
  
  const [loggedInUserId, setLoggedInUserId] = useState('');

  // 🚀 FIXED: Disabled aggressive auto-redirect to prevent forcing into /dashboard
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      // Temporarily disabled so it doesn't interrupt the manual login flow
    });
    return () => unsubscribe();
  }, [navigate, showSetupModal, isGoogleLoading, isLoading]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (error) setError(""); 
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);
    
    try {
      let finalLoginId = formData.identifier.trim();
      
      // ==========================================
      // 🎓 LEARNER LOGIN LOGIC (SUB-COLLECTION SEARCH)
      // ==========================================
      if (formData.role === "learner") {
        // Query all enrolled_list sub-collections across all batches/courses
        const q = query(collectionGroup(db, "enrolled_list"));
        const querySnapshot = await getDocs(q);
        
        const studentDoc = querySnapshot.docs.find(
          docSnap => docSnap.id === finalLoginId || docSnap.data().rollNumber === finalLoginId
        );

        if (!studentDoc) {
          setError("User Id not found in database. Please contact Admin.");
          setIsLoading(false);
          return; 
        }

        const studentData = studentDoc.data();
        
        // Save the exact Firestore document path for future updates
        sessionStorage.setItem("studentPath", studentDoc.ref.path);

        if (studentData.isFirstLogin === true || studentData.isFirstLogin === undefined) {
          setIsLoading(false);
          setLoggedInUserId(finalLoginId);
          setShowSetupModal(true);
          setSetupStep(1);
          
          const tempLoginId = `${finalLoginId}@student.documind.com`;
          await signInWithEmailAndPassword(auth, tempLoginId, formData.password);
          return; 
        }
        finalLoginId = `${finalLoginId}@student.documind.com`;
      }

      // ==========================================
      // 🚀 TRAINER LOGIN LOGIC
      // ==========================================
      if (formData.role === "trainer") {
        if (!finalLoginId.includes("@")) {
          finalLoginId = `${finalLoginId}@documind.local`;
        }
      }

      // 1. FIREBASE AUTHENTICATION
      const userCredential = await signInWithEmailAndPassword(auth, finalLoginId, formData.password);
      const firebaseUser = userCredential.user;

      // 2. POSTGRESQL BACKEND VERIFICATION
      const response = await fetch("http://127.0.0.1:8000/api/auth/sync", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firebase_uid: firebaseUser.uid,
          email: firebaseUser.email,
          name: firebaseUser.displayName || `DocuMind ${formData.role}`,
          role: formData.role
        })
      });

      const backendData = await response.json();

      if (response.ok && backendData.status === "success") {
        setIsLoading(false);
        
        // 🚀 BYPASS: Navigating strictly based on UI Dropdown selection
        if (formData.role === "trainer") {
          navigate("/trainer/dashboard");
        } else if (formData.role === "admin") {
          navigate("/admin/dashboard");
        } else {
          navigate("/dashboard");
        }
      } else {
        setError("Backend verification failed. Account inactive or not found.");
        await signOut(auth);
        setIsLoading(false);
      }
      
    } catch (err) {
      console.error("Login Error:", err.code);
      if (err.code === 'auth/invalid-credential' || err.code === 'auth/user-not-found' || err.code === 'auth/wrong-password') {
        setError("Invalid Credentials. Please try again.");
      } else {
        setError("Login failed. Please check your connection.");
      }
      setIsLoading(false);
    }
  };

  const handleGoogleLogin = async () => {
    setError("");
    setIsGoogleLoading(true);
    
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const userEmail = result.user.email;

      let targetCollection = "students";
      if (formData.role === "trainer") targetCollection = "teachers";
      if (formData.role === "admin") targetCollection = "admins";

      const q = query(collection(db, targetCollection), where("email", "==", userEmail));
      const querySnapshot = await getDocs(q);

      if (querySnapshot.empty) {
        await signOut(auth); 
        setError(`Access Denied: ${userEmail} is not linked to any account. Please login with your User ID first to set up your email.`);
        setIsGoogleLoading(false);
        return;
      }

      setIsGoogleLoading(false);
      
      if (formData.role === "trainer") {
        navigate("/trainer/dashboard");
      } else {
        navigate("/dashboard");
      }
      
    } catch (err) {
      console.error("Google Login Error:", err.code);
      setError("Google Sign-In failed. Please try again.");
      setIsGoogleLoading(false);
    }
  };

  // --- SETUP FLOW HANDLERS ---
  const handleSendOTP = async (e) => {
    e.preventDefault();
    if(!setupEmail) return;
    setSetupLoading(true);
    setSetupError('');
    setSetupSuccess('');
    
    try {
      const response = await fetch("http://127.0.0.1:8000/api/send-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: setupEmail })
      });

      const data = await response.json();

      if (response.ok) {
        setSetupStep(2); 
        setSetupSuccess(`OTP sent to ${setupEmail}`);
      } else {
        setSetupError(data.detail || "Failed to send OTP.");
      }
    } catch (err) {
      setSetupError("Network error. Please make sure backend is running.");
    } finally {
      setSetupLoading(false);
    }
  };

  const handleVerifyOTP = async (e) => {
    e.preventDefault();
    if(otp.length < 4) return;
    setSetupLoading(true);
    setSetupError('');
    setSetupSuccess('');
    
    try {
      const response = await fetch("http://127.0.0.1:8000/api/verify-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: setupEmail, otp: otp })
      });

      const data = await response.json();

      if (response.ok) {
        setSetupStep(3); 
        setSetupSuccess('Email successfully verified!');
      } else {
        setSetupError(data.detail || "Invalid Verification Code. Please try again.");
      }
    } catch (err) {
      setSetupError("Network error. Cannot verify OTP right now.");
    } finally {
      setSetupLoading(false);
    }
  };

  const handleCompleteSetup = async (e) => {
    e.preventDefault();
    
    if(newPassword !== confirmPassword) {
      setSetupError("Passwords do not match!");
      return;
    }
    if(newPassword.length < 6) {
      setSetupError("Password must be at least 6 characters long.");
      return;
    }
    if(newPassword === formData.password) {
      setSetupError("New password must be different from the default password.");
      return;
    }

    setSetupLoading(true);
    setSetupError('');

    try {
      const user = auth.currentUser;
      if (!user) {
        throw new Error("User session lost. Please reload the page and try again.");
      }

      await updatePassword(user, newPassword);

      // Retrieve the exact student sub-collection path saved during login lookup
      const studentPath = sessionStorage.getItem("studentPath");
      if (studentPath) {
        const studentRef = doc(db, studentPath);
        await updateDoc(studentRef, {
          email: setupEmail,
          isFirstLogin: false
        });
      }

      setShowSetupModal(false);
      navigate('/dashboard'); 
      
    } catch (err) {
      console.error("Setup Completion Error:", err);
      if (err.code === 'auth/requires-recent-login') {
        setSetupError("Security timeout. Please refresh and login again to change password.");
      } else {
        setSetupError(err.message || "Failed to update profile. Please try again.");
      }
    } finally {
      setSetupLoading(false);
    }
  };

  return (
    <main className="w-full flex-grow relative flex items-center justify-center py-16 px-4 sm:px-6 lg:px-8 min-h-[85vh] lg:min-h-[calc(100vh-140px)] overflow-hidden bg-[#F8F9FA] selection:bg-[#0056D2] selection:text-white">
      
      <div className="absolute top-0 left-0 w-full overflow-hidden pointer-events-none z-0">
        <svg viewBox="0 0 1440 320" className="w-full h-auto opacity-[0.15]">
          <path fill="#FF9933" d="M0,64L80,85.3C160,107,320,150,480,149.3C640,149,800,107,960,106.7C1120,107,1280,149,1360,170.7L1440,192L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path>
        </svg>
      </div>

      <div className="absolute bottom-0 left-0 w-full overflow-hidden pointer-events-none z-0">
        <svg viewBox="0 0 1440 320" className="w-full h-auto opacity-[0.15]">
          <path fill="#138808" d="M0,192L80,170.7C160,149,320,107,480,106.7C640,107,800,149,960,149.3C1120,149,1280,107,1360,85.3L1440,64L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
        </svg>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="bg-white/95 backdrop-blur-md w-full max-w-[460px] rounded-[1.5rem] shadow-[0_0_40px_rgba(0,0,0,0.06)] border border-gray-100 p-8 sm:p-10 relative z-20 overflow-hidden"
      >
        
        <AnimatePresence>
          {(isLoading || isGoogleLoading) && (
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              className="absolute inset-0 bg-white/50 backdrop-blur-[1px] z-50 rounded-[1.5rem] flex items-center justify-center pointer-events-none"
            />
          )}
        </AnimatePresence>

        <div className="text-center mb-8">
          <img src={DocumindLogo} alt="DocuMind Logo" className="mx-auto w-16 h-16 object-contain mb-3" />
          <h2 className="text-[22px] font-black text-[#0F172A] leading-tight">
            Login to <span className="text-[#0056D2]">DocuMind</span>
          </h2>
          <p className="text-[13px] text-gray-500 font-medium mt-1">
            Access your account to continue
          </p>
        </div>

        <AnimatePresence>
          {error && (
            <motion.div 
              initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}
              className="mb-6 bg-red-50 border border-red-100 text-red-600 text-[12px] font-bold p-3 rounded-lg text-center"
            >
              {error}
            </motion.div>
          )}
        </AnimatePresence>

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

        <motion.form 
          initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.3 }}
          onSubmit={handleLogin} 
          className="space-y-5"
        >
          <div>
            <label className="block text-[12px] font-bold text-[#1E293B] mb-1.5">
              {formData.role === 'learner' ? "User ID" : "User ID / Email Address"}
            </label>
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
                className="w-full pl-10 pr-4 py-2.5 bg-white border border-gray-300 rounded-lg text-[13px] font-medium text-gray-900 focus:border-[#0056D2] focus:ring-2 focus:ring-[#0056D2]/20 outline-none transition-all placeholder:text-gray-400"
                placeholder={
                  formData.role === 'learner' ? "e.g. 2503511790001" : 
                  formData.role === 'admin' ? "admin@institute.edu" : "trainer01 or teacher@institute.edu"
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
                className="w-full pl-10 pr-10 py-2.5 bg-white border border-gray-300 rounded-lg text-[13px] font-medium text-gray-900 focus:border-[#0056D2] focus:ring-2 focus:ring-[#0056D2]/20 outline-none transition-all placeholder:text-gray-400"
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
        </motion.form>
      </motion.div>

      {/* ========================================================= */}
      {/* 🚀 FIRST TIME SETUP MODAL (PRIMARY EMAIL & PASSWORD) 🚀 */}
      {/* ========================================================= */}
      {showSetupModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white w-full max-w-[400px] rounded-[24px] shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200 border border-gray-100">
            
            <div className="px-8 pt-8 pb-4 relative text-center border-b border-gray-50">
              <div className="mx-auto w-14 h-14 bg-[#0056D2]/10 rounded-2xl flex items-center justify-center mb-4 border border-[#0056D2]/20">
                <ShieldCheck size={28} className="text-[#0056D2]" />
              </div>
              <h2 className="text-[20px] font-black text-[#0F172A] leading-tight">Complete Your Profile</h2>
              <p className="text-[13px] text-gray-500 font-medium mt-1">Please link your primary email and set a new password to continue.</p>
            </div>

            <div className="p-8 bg-gray-50/50">
              <div className="flex gap-2 mb-6 justify-center">
                <div className={`h-1.5 rounded-full flex-1 transition-colors ${setupStep >= 1 ? 'bg-[#0056D2]' : 'bg-gray-200'}`}></div>
                <div className={`h-1.5 rounded-full flex-1 transition-colors ${setupStep >= 2 ? 'bg-[#0056D2]' : 'bg-gray-200'}`}></div>
                <div className={`h-1.5 rounded-full flex-1 transition-colors ${setupStep >= 3 ? 'bg-[#0056D2]' : 'bg-gray-200'}`}></div>
              </div>

              {setupError && (
                <div className="mb-4 p-3 bg-red-50 border border-red-100 rounded-lg text-red-600 text-[12px] font-semibold text-center">
                  {setupError}
                </div>
              )}
              {setupSuccess && (
                <div className="mb-4 p-3 bg-emerald-50 border border-emerald-100 rounded-lg text-emerald-600 text-[12px] font-semibold text-center flex items-center justify-center gap-2">
                  <Check size={16} /> {setupSuccess}
                </div>
              )}

              {setupStep === 1 && (
                <form onSubmit={handleSendOTP} className="space-y-4 animate-in slide-in-from-right-4 duration-300">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[12px] font-bold text-[#1E293B]">Link Primary Email <span className="text-red-500">*</span></label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                        <Mail size={16} className="text-gray-400" />
                      </div>
                      <input 
                        type="email" 
                        required
                        placeholder="e.g. student@college.edu" 
                        value={setupEmail}
                        onChange={(e) => setSetupEmail(e.target.value)}
                        className="w-full pl-10 pr-4 py-2.5 bg-white border border-gray-300 rounded-lg text-[13px] font-medium text-gray-900 focus:border-[#0056D2] focus:ring-2 focus:ring-[#0056D2]/20 outline-none transition-all placeholder:text-gray-400"
                      />
                    </div>
                  </div>
                  <button type="submit" disabled={setupLoading} className="w-full bg-[#0056D2] hover:bg-[#0044A8] text-white font-bold text-[13px] py-2.5 rounded-lg shadow-sm transition-all flex items-center justify-center mt-2 disabled:opacity-70">
                    {setupLoading ? <Loader2 size={16} className="animate-spin" /> : "Verify Email"}
                  </button>
                </form>
              )}

              {setupStep === 2 && (
                <form onSubmit={handleVerifyOTP} className="space-y-4 animate-in slide-in-from-right-4 duration-300">
                  <div className="flex flex-col gap-2">
                    <label className="text-[13px] font-bold text-[#1E293B] text-center">Enter Verification Code</label>
                    <p className="text-[12px] text-gray-500 mb-2 text-center leading-relaxed">We sent a 6-digit code to <br/><span className="font-bold text-gray-700">{setupEmail}</span></p>
                    <input 
                      type="text" 
                      required
                      maxLength={6}
                      placeholder="6-digit OTP" 
                      value={otp}
                      onChange={(e) => setOtp(e.target.value)}
                      className="w-full bg-white border border-gray-300 text-gray-900 text-[16px] font-bold tracking-[0.3em] py-3 px-4 text-center rounded-lg focus:border-[#0056D2] focus:ring-2 focus:ring-[#0056D2]/20 outline-none transition-all placeholder:text-gray-300 placeholder:tracking-normal placeholder:font-normal"
                    />
                  </div>
                  <button type="submit" disabled={setupLoading} className="w-full bg-[#0056D2] hover:bg-[#0044A8] text-white font-bold text-[13px] py-2.5 rounded-lg shadow-sm transition-all flex items-center justify-center mt-2 disabled:opacity-70">
                    {setupLoading ? <Loader2 size={16} className="animate-spin" /> : "Verify OTP"}
                  </button>
                  <button type="button" onClick={() => {setSetupStep(1); setSetupSuccess(''); setSetupError('');}} className="w-full text-center text-[12px] font-semibold text-gray-500 hover:text-[#0056D2] mt-2 transition-colors">← Change Email</button>
                </form>
              )}

              {setupStep === 3 && (
                <form onSubmit={handleCompleteSetup} className="space-y-4 animate-in slide-in-from-right-4 duration-300">
                  <div className="flex flex-col gap-4">
                    <div className="flex flex-col gap-1.5">
                       <label className="text-[12px] font-bold text-[#1E293B]">Create New Password <span className="text-red-500">*</span></label>
                       <div className="relative">
                         <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                           <Lock size={16} className="text-gray-400" />
                         </div>
                         <input 
                           type="password" 
                           required
                           placeholder="Enter new secure password" 
                           value={newPassword}
                           onChange={(e) => setNewPassword(e.target.value)}
                           className="w-full pl-10 pr-4 py-2.5 bg-white border border-gray-300 rounded-lg text-[13px] font-medium text-gray-900 focus:border-[#0056D2] focus:ring-2 focus:ring-[#0056D2]/20 outline-none transition-all placeholder:text-gray-400"
                         />
                       </div>
                    </div>
                    <div className="flex flex-col gap-1.5">
                       <label className="text-[12px] font-bold text-[#1E293B]">Confirm Password <span className="text-red-500">*</span></label>
                       <div className="relative">
                         <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                           <Lock size={16} className="text-gray-400" />
                         </div>
                         <input 
                           type="password" 
                           required
                           placeholder="Type password again" 
                           value={confirmPassword}
                           onChange={(e) => setConfirmPassword(e.target.value)}
                           className="w-full pl-10 pr-4 py-2.5 bg-white border border-gray-300 rounded-lg text-[13px] font-medium text-gray-900 focus:border-[#0056D2] focus:ring-2 focus:ring-[#0056D2]/20 outline-none transition-all placeholder:text-gray-400"
                         />
                       </div>
                    </div>
                  </div>
                  <button type="submit" disabled={setupLoading} className="w-full bg-[#138808] hover:bg-green-700 text-white font-bold text-[13px] py-2.5 rounded-lg shadow-sm transition-all flex items-center justify-center mt-4 disabled:opacity-70">
                    {setupLoading ? <Loader2 size={16} className="animate-spin" /> : "Complete Account Setup"}
                  </button>
                </form>
              )}

            </div>
          </div>
        </div>
      )}

    </main>
  );
}