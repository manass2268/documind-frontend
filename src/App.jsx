import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

// --- Firebase Imports ---
import { auth } from "./firebase"; 
import { onAuthStateChanged } from "firebase/auth";

// Components
import ScrollToTop from "./components/ScrollToTop";
import LandingPage from "./components/LandingPage";
import LoadingScreen from "./components/LoadingScreen";
import Sidebar from "./components/Sidebar"; 
import ChatInterface from "./components/ChatInterface";
import DashboardLayout from "./components/DashboardLayout"; 
import Footer from "./components/Footer";
import About from "./components/About"; // 🟢 Fixed: Naya About page yahan import kiya

// Pages
import Features from "./pages/Features";
import Pricing from "./pages/Pricing";
import HowItWorks from "./pages/HowItWorks";
import Login from "./pages/Login";
import Signup from "./pages/Signup"; 
import ForgotPassword from "./pages/ForgotPassword"; 
import ContactSupport from "./pages/ContactSupport";
import Dashboard from './pages/Dashboard';
import ChatRoom from "./pages/ChatRoom";

// 🔴 NAYE DASHBOARD PAGES IMPORTS
import Activity from "./pages/Activity";
import Settings from "./pages/Settings";
import Help from "./pages/Help";

function HomeFlow() {
  const [view, setView] = useState("landing"); 
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);

  // Real-time listener ki user logged in hai ya nahi
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setCurrentUser(user);
      } else {
        setCurrentUser(null);
      }
    });
    return () => unsubscribe();
  }, []);

  return (
    <AnimatePresence mode="wait">
      {view === "landing" && (
        <motion.div key="landing" exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.5 }}>
          <LandingPage onStart={() => setView("loading")} />
        </motion.div>
      )}
      {view === "loading" && (
        <LoadingScreen onComplete={() => setView("dashboard")} />
      )}
      {view === "dashboard" && (
        <motion.div key="dashboard" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }} className="flex h-screen w-full relative z-10 overflow-hidden">
          <Sidebar isOpen={isSidebarOpen} closeSidebar={() => setIsSidebarOpen(false)} />
          
          <ChatInterface 
             openSidebar={() => setIsSidebarOpen(true)} 
             userName={currentUser?.displayName || "MANAS singh"} 
          />
          
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <Router>
      <ScrollToTop /> 
      {/* Container background color removed from here so it doesn't mess with Gov light theme */}
      <div className="font-sans overflow-hidden min-h-screen">
        <Routes>
          {/* --- PUBLIC ROUTES --- */}
          <Route path="/" element={<HomeFlow />} />
          <Route path="/about" element={<About />} /> {/* 🟢 Fixed: Naya About route */}
          <Route path="/features" element={<Features />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} /> 
          <Route path="/forgot-password" element={<ForgotPassword />} /> 
          <Route path="/support" element={<ContactSupport />} />
          <Route path="chat/:chatId" element={<ChatRoom />} />
          
          {/* --- 🔴 PRIVATE GATEWAY ROUTES --- */}
          <Route path="/dashboard" element={<DashboardLayout />}>
            <Route index element={<Dashboard />} /> 
            
            {/* NESTED ROUTES JO SIDEBAR SE CONNECTED HAIN */}
            <Route path="activity" element={<Activity />} />
            <Route path="settings" element={<Settings />} />
            <Route path="help" element={<Help />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}