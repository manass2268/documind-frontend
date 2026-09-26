import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Outlet, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

// --- Firebase Imports ---
import { auth } from "./firebase"; 
import { onAuthStateChanged } from "firebase/auth";

// Components
import LandingPage from "./components/LandingPage";
import LoadingScreen from "./components/LoadingScreen";
import Sidebar from "./components/Sidebar"; 
import ChatInterface from "./components/ChatInterface";
import DashboardLayout from "./components/DashboardLayout"; 
import Footer from "./components/Footer";
import About from "./components/About"; 
import Header from "./components/Header"; 

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
import Platform from "./pages/PlatformOverview";
import KnowledgeCenter from "./pages/KnowledgeCentre";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsConditions from "./pages/TermsConditions";

// Dashboard Pages
import Activity from "./pages/Activity";
import Settings from "./pages/Settings";
import Help from "./pages/Help";

// 🟢 SMART SCROLL TO TOP (Hash Support Ke Saath)
const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo({ top: 0, behavior: "instant" });
    } else {
      setTimeout(() => {
        const id = hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    }
  }, [pathname, hash]);

  return null;
};

// 🟢 MAIN HOME FLOW (Landing -> Loading -> Chat)
function HomeFlow() {
  const [view, setView] = useState("landing"); 
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);

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
        <motion.div 
          key="landing" 
          exit={{ opacity: 0, y: -20 }} 
          transition={{ duration: 0.5 }} 
          // FIX: Added Header and Footer specifically for Landing Page here
          className="flex flex-col min-h-screen w-full"
        >
          <Header />
          <main className="flex-1 w-full">
            <LandingPage onStart={() => setView("loading")} />
          </main>
          <Footer />
        </motion.div>
      )}

      {view === "loading" && (
        <LoadingScreen onComplete={() => setView("dashboard")} />
      )}

      {view === "dashboard" && (
        <motion.div 
          key="dashboard" 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ duration: 1 }} 
          // FIX: No Header/Footer here, ensuring full-screen Chat UI
          className="flex h-screen w-full relative z-10 overflow-hidden bg-[#F4F7FA]"
        >
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

// 🟢 PUBLIC LAYOUT (Baaki sabhi informational pages ke liye)
function PublicLayout() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      {/* Ensures content takes full height but doesn't cause horizontal scroll */}
      <div className="flex-1 w-full max-w-[100vw] overflow-x-hidden">
        <Outlet /> 
      </div>
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <ScrollToTop /> 
      <div className="font-sans overflow-x-hidden min-h-screen selection:bg-[#0056D2] selection:text-white">
        <Routes>
          
          {/* 🟢 FULL SCREEN ANIMATED ROUTE (Landing -> Chat) */}
          <Route path="/" element={<HomeFlow />} />
          
          {/* 🟢 PUBLIC ROUTES (Humesha Header & Footer ke sath) */}
          <Route element={<PublicLayout />}>
             <Route path="/about" element={<About />} /> 
             <Route path="/platform" element={<Platform />} />
             <Route path="/features" element={<Features />} />
             <Route path="/pricing" element={<Pricing />} />
             <Route path="/how-it-works" element={<HowItWorks />} />
             <Route path="/support" element={<ContactSupport />} />
             <Route path="/knowledge-center" element={<KnowledgeCenter />} />
             <Route path="/privacy-policy" element={<PrivacyPolicy />} />
             <Route path="/terms-conditions" element={<TermsConditions />} />
          </Route>

          {/* 🟢 STANDALONE PUBLIC ROUTES (Auth Pages - Bina Header/Footer) */}
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} /> 
          <Route path="/forgot-password" element={<ForgotPassword />} /> 
          
          <Route path="chat/:chatId" element={<ChatRoom />} />
          
          {/* --- 🔴 PRIVATE DASHBOARD ROUTES --- */}
          <Route path="/dashboard" element={<DashboardLayout />}>
            <Route index element={<Dashboard />} /> 
            <Route path="activity" element={<Activity />} />
            <Route path="settings" element={<Settings />} />
            <Route path="help" element={<Help />} />
          </Route>
          
        </Routes>
      </div>
    </Router>
  );
}