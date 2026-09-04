import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { Brain, ArrowLeft, Eye, EyeOff, Loader2 } from "lucide-react";

// --- Firebase Imports ---
import { auth, db } from "../firebase";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";

export default function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      // 1. Create User in Firebase Auth
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // 2. Update Profile Name
      await updateProfile(user, { displayName: name });

      // 3. Save User Data in Firestore (Data Collection)
      await setDoc(doc(db, "users", user.uid), {
        uid: user.uid,
        name: name,
        email: email,
        createdAt: new Date().toISOString(),
        plan: "Free"
      });

      setIsLoading(false);
      navigate("/"); // Dashboard par bhej do
    } catch (err) {
      setIsLoading(false);
      setError(err.message); // Agar password weak ho ya email exist karta ho
    }
  };

  return (
    <div className="min-h-screen bg-[#05050A] text-white font-sans flex flex-col relative overflow-hidden">
      {/* ... (Background Orbs and Top Nav code remains exactly the same) ... */}
      <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-purple-700/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-20%] left-[-10%] w-[600px] h-[600px] bg-cyan-700/15 rounded-full blur-[120px] pointer-events-none" />

      <div className="p-6 md:p-8 absolute top-0 left-0 w-full z-50">
        <Link to="/" className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors cursor-pointer relative z-50">
          <ArrowLeft size={16} /> Back to Home
        </Link>
      </div>

      <div className="flex-1 flex items-center justify-center relative z-10 p-4 mt-12 md:mt-0">
        <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="bg-[#0B0B14]/80 backdrop-blur-xl border border-white/10 p-6 md:p-10 rounded-3xl w-full max-w-md shadow-2xl">
          
          <div className="flex justify-center mb-6">
            <div className="p-3 bg-purple-500/10 rounded-2xl border border-purple-500/20"><Brain className="text-purple-400" size={32} /></div>
          </div>
          <h2 className="text-2xl font-bold text-center mb-2">Create an account</h2>
          <p className="text-gray-400 text-center text-sm mb-6">Join DocuMind and learn smarter</p>

          {/* Error Message Display */}
          {error && <div className="mb-4 p-3 bg-red-500/10 border border-red-500/20 text-red-400 text-xs rounded-xl text-center">{error}</div>}

          <form onSubmit={handleSignup} className="space-y-4">
            <div>
              <label className="text-xs font-medium text-gray-400 mb-1 block">Full Name</label>
              <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Your Name" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-purple-500/50 text-sm transition-colors" required />
            </div>
            <div>
              <label className="text-xs font-medium text-gray-400 mb-1 block">Email Address</label>
              <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="yourmail@example.com" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-purple-500/50 text-sm transition-colors" required />
            </div>
            <div>
              <label className="text-xs font-medium text-gray-400 mb-1 block">Password</label>
              <div className="relative">
                <input type={showPassword ? "text" : "password"} value={password} onChange={(e) => setPassword(e.target.value)} placeholder="••••••••" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 pr-10 outline-none focus:border-purple-500/50 text-sm transition-colors" required minLength="6" />
                <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white transition-colors">
                  {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
            </div>
            <button type="submit" disabled={isLoading} className="w-full bg-purple-600 hover:bg-purple-700 text-white font-medium py-3 rounded-xl transition-colors shadow-[0_0_15px_rgba(147,51,234,0.3)] mt-2 flex justify-center items-center gap-2">
              {isLoading ? <><Loader2 size={18} className="animate-spin" /> Creating account...</> : "Sign Up"}
            </button>
          </form>

          <div className="mt-6 flex items-center justify-center gap-2 text-xs md:text-sm">
            <span className="text-gray-500">Already have an account?</span>
            <Link to="/login" className="text-purple-400 hover:text-purple-300 font-medium transition-colors">Log in</Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}