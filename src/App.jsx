import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Outlet, useLocation, Navigate } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

// --- Firebase Imports ---
import { auth } from "./firebase"; 
import { onAuthStateChanged } from "firebase/auth";

// Components
import LandingPage from "./components/LandingPage";
import LoadingScreen from "./components/LoadingScreen";
import About from "./components/About"; 
import Sidebar from "./components/Sidebar"; 
import ChatInterface from "./components/ChatInterface";
import DashboardLayout from "./components/DashboardLayout"; 
import Footer from "./components/Footer";
import Header from "./components/Header"; 

// Pages
import Features from "./pages/Features";
import Pricing from "./pages/Pricing";
import HowItWorks from "./pages/HowItWorks";
import Login from "./pages/Login";
import Signup from "./pages/Signup"; 
import ForgotPassword from "./pages/ForgotPassword"; 
import OTPVerify from "./pages/OtpVerify";
import NewPassword from "./pages/NewPassword";
import ContactSupport from "./pages/ContactSupport";
import UploadDocuments from "./pages/UploadDocument";
import ChatWorspace from "./pages/ChatWorkspace";

// Platform Info Pages
import Platform from "./pages/PlatformOverview";
import KnowledgeCenter from "./pages/KnowledgeCentre";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsConditions from "./pages/TermsConditions";

// 🔴 DASHBOARD & SETTINGS PAGES
import MainDashboard from "./pages/MainDashboard"; 
import DashboardSettings from "../src/components/DashboardSettings"; 
import Help from "./pages/Help";

// 🚀 TRAINER LAYOUT & PLACEHOLDERS (New Imports)
import TrainerLayout from "./layouts/TrainerLayout";

const TrainerDashboard = () => <div className="p-6 text-2xl font-bold text-slate-800">Trainer Dashboard View</div>;
const ContentStudio = () => <div className="p-6 text-2xl font-bold text-slate-800">AI Content Studio</div>;
const AiBehavior = () => <div className="p-6 text-2xl font-bold text-slate-800">AI Behavior Control</div>;
const StudentList = () => <div className="p-6 text-2xl font-bold text-slate-800">Student Management</div>;
const Analytics = () => <div className="p-6 text-2xl font-bold text-slate-800">Performance Analytics</div>;

// 🚀 SMART SCROLL TO TOP (Hash Support Ke Saath)
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

// 🚀 MAIN HOME FLOW (Landing -> Loading -> Chat)
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

// 🚀 PUBLIC LAYOUT (Header + Footer ke Saath)
function PublicLayout() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
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
          
          {/* 🚀 FULL SCREEN ANIMATED ROUTE (Landing -> Chat) */}
          <Route path="/" element={<HomeFlow />} />
          
          {/* 🚀 PUBLIC ROUTES (Humesha Header & Footer ke sath) */}
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

          {/* 🚀 STANDALONE PUBLIC ROUTES (Auth Pages - Bina Header/Footer) */}
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} /> 
          <Route path="/forgot-password" element={<ForgotPassword />} /> 
          
          <Route path="/otp-verify" element={<OTPVerify />} />
          <Route path="/new-password" element={<NewPassword />} />
          
          {/* ========================================== */}
          {/* 🔴 PRIVATE LEARNER DASHBOARD ROUTES */}
          {/* ========================================== */}
          <Route path="/dashboard" element={<MainDashboard />} />
          <Route path="/upload" element={<UploadDocuments />} />
          <Route path="/chat" element={<ChatWorspace />} />
          <Route path="/settings" element={<DashboardSettings />} />
          <Route path="/help" element={<Help />} />

          {/* ========================================== */}
          {/* 🚀 TRAINER / TEACHER ROUTES */}
          {/* ========================================== */}
          <Route path="/trainer" element={<TrainerLayout />}>
            {/* Default redirect to dashboard if someone visits /trainer */}
            <Route index element={<Navigate to="/trainer/dashboard" replace />} />
            
            <Route path="dashboard" element={<TrainerDashboard />} />
            <Route path="classes" element={<div className="p-6 text-2xl font-bold text-slate-800">My Classes</div>} />
            <Route path="schedule" element={<div className="p-6 text-2xl font-bold text-slate-800">Schedule</div>} />
            <Route path="content-studio" element={<ContentStudio />} />
            <Route path="ai-behavior" element={<AiBehavior />} />
            <Route path="students" element={<StudentList />} />
            <Route path="assignments" element={<div className="p-6 text-2xl font-bold text-slate-800">Assignments</div>} />
            <Route path="assessments" element={<div className="p-6 text-2xl font-bold text-slate-800">Assessments</div>} />
            <Route path="subjective-grading" element={<div className="p-6 text-2xl font-bold text-slate-800">Subjective Grading</div>} />
            <Route path="analytics" element={<Analytics />} />
            <Route path="reports" element={<div className="p-6 text-2xl font-bold text-slate-800">Reports</div>} />
            <Route path="settings" element={<div className="p-6 text-2xl font-bold text-slate-800">Trainer Settings</div>} />
          </Route>
          
          {/* 404 Fallback */}
          <Route path="*" element={<div className="flex items-center justify-center h-screen text-2xl font-bold text-slate-500">404 - Page Not Found</div>} />
          
        </Routes>
      </div>
    </Router>
  );
}