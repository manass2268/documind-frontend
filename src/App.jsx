import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

// Components
import ScrollToTop from "./components/ScrollToTop";
import LandingPage from "./components/LandingPage";
import LoadingScreen from "./components/LoadingScreen";
import Sidebar from "./components/Sidebar";
import ChatInterface from "./components/ChatInterface";

// Pages
import Features from "./pages/Features";
import Pricing from "./pages/Pricing";
import HowItWorks from "./pages/HowItWorks";
import AboutUs from "./pages/AboutUs";
import Login from "./pages/Login";
import Signup from "./pages/Signup"; // <-- Imported Signup
import ForgotPassword from "./pages/ForgotPassword"; // <-- Imported Forgot Password
import ContactSupport from "./pages/ContactSupport";
function HomeFlow() {
  const [view, setView] = useState("landing"); 
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

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
          <ChatInterface openSidebar={() => setIsSidebarOpen(true)} />
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <Router>
      <ScrollToTop /> 
      <div className="font-sans overflow-hidden bg-[#05050A] min-h-screen text-white">
        <Routes>
          <Route path="/" element={<HomeFlow />} />
          <Route path="/features" element={<Features />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} /> {/* <-- Added Signup Route */}
          <Route path="/forgot-password" element={<ForgotPassword />} /> {/* <-- Added Forgot Password Route */}
          <Route path="/support" element={<ContactSupport />} />
        </Routes>
      </div>
    </Router>
  );
}