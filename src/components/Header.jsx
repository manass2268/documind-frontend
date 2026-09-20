import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion"; 
import { Search, ChevronDown, ArrowRight, Volume2, X } from "lucide-react";

// Assets
import ashokaLogo from "../assets/ashoka.png";
import g20Logo from "../assets/g20 logo.png";
import azadiLogo from "../assets/75yearsINDI Logo.png";
import indiaLogo from "../assets/India Logo.png";

export default function Header() {
  const [fontSize, setFontSize] = useState("normal");
  const [language, setLanguage] = useState("en");
  const [showToast, setShowToast] = useState(false);
  
  const location = useLocation();
  const isActive = (path) => location.pathname === path;

  const handleFontSizeChange = (size) => {
    setFontSize(size);
    if (size === "small") document.documentElement.style.fontSize = "90%";
    else if (size === "large") document.documentElement.style.fontSize = "110%";
    else document.documentElement.style.fontSize = "100%";
  };

  const handleScreenReader = () => {
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3500);
  };

  return (
    <>
      {/* 🟢 CUSTOM TOAST NOTIFICATION */}
      <AnimatePresence>
        {showToast && (
          <motion.div 
            initial={{ opacity: 0, y: -50, x: "-50%" }} 
            animate={{ opacity: 1, y: 20, x: "-50%" }} 
            exit={{ opacity: 0, y: -50, x: "-50%" }}
            className="fixed top-0 left-1/2 z-[9999] bg-white border-l-4 border-[#0056D2] shadow-[0_10px_40px_rgba(0,0,0,0.15)] px-6 py-4 rounded-r-md flex items-center gap-4 min-w-[320px]"
          >
            <div className="bg-blue-50 text-[#0056D2] p-2.5 rounded-full"><Volume2 size={20} /></div>
            <div className="flex-1">
              <h4 className="text-[13px] font-bold text-[#1E293B] mb-0.5">Accessibility Enabled</h4>
              <p className="text-[11px] text-gray-500 leading-snug">Screen reader optimizations & ARIA labels are now active.</p>
            </div>
            <button onClick={() => setShowToast(false)} className="text-gray-400 hover:text-gray-700 transition-colors"><X size={16} /></button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 🟢 1. LIVE ACCESSIBILITY TOP BAR */}
      <div className="bg-white border-b border-gray-200 py-1.5 px-4 sm:px-8 text-xs font-medium text-gray-700 flex flex-wrap justify-between items-center relative z-50">
        <div className="flex items-center gap-3">
          <img src={indiaLogo} alt="India Logo" className="h-5 object-contain" />
          <span className="tracking-wide text-gray-900 font-bold text-[13px]">भारत सरकार <span className="font-normal text-gray-400 mx-1">|</span> Government of India</span>
        </div>
        
        <div className="hidden md:flex items-center gap-4 text-[12px]">
          <a href="#main-content" className="hover:text-[#0A4275] transition-colors font-semibold focus:outline-none focus:underline">Skip to main content</a>
          <span className="text-gray-300">|</span>
          
          <button onClick={handleScreenReader} className="hover:text-[#0056D2] transition-colors flex items-center gap-1 font-semibold">Screen Reader Access</button>
          <span className="text-gray-300">|</span>
          
          <div className="flex items-center gap-1.5 font-bold">
            <button onClick={() => handleFontSizeChange('small')} className={`px-1.5 transition-colors ${fontSize === 'small' ? 'text-[#0056D2] border-b-2 border-[#0056D2]' : 'hover:text-[#0A4275]'}`}>A-</button>
            <button onClick={() => handleFontSizeChange('normal')} className={`px-1.5 transition-colors ${fontSize === 'normal' ? 'text-[#0056D2] border-b-2 border-[#0056D2]' : 'text-black hover:text-[#0A4275]'}`}>A</button>
            <button onClick={() => handleFontSizeChange('large')} className={`px-1.5 transition-colors ${fontSize === 'large' ? 'text-[#0056D2] border-b-2 border-[#0056D2]' : 'hover:text-[#0A4275]'}`}>A+</button>
          </div>
          <span className="text-gray-300">|</span>
          
          <button onClick={() => setLanguage('en')} className={`flex items-center gap-1 font-bold transition-colors ${language === 'en' ? 'text-[#0056D2]' : 'text-black hover:text-[#0A4275]'}`}>English <ChevronDown size={14}/></button>
          <span className="text-gray-300">|</span>
          <button onClick={() => setLanguage('hi')} className={`font-semibold transition-colors ${language === 'hi' ? 'text-[#0056D2] font-bold' : 'text-gray-600 hover:text-[#0A4275]'}`}>हिंदी</button>
        </div>
      </div>

      {/* 🟢 2. OFFICIAL HEADER */}
      <header className="bg-white py-2 px-4 sm:px-8 relative z-40 border-b border-gray-200 shadow-sm">
        <div className="max-w-[1400px] mx-auto flex justify-between items-center">
          <div className="flex items-center gap-5">
            <img src={ashokaLogo} alt="Satyameva Jayate" className="h-16 object-contain" />
            <div className="flex flex-col border-l-2 border-gray-300 pl-4 py-1">
              <span className="text-[20px] font-extrabold text-black tracking-tight font-serif leading-tight">सांख्यिकी एवं कार्यक्रम कार्यान्वयन मंत्रालय</span>
              <span className="text-[15px] font-bold text-[#0A4275] tracking-wide mt-0.5 leading-tight">Ministry of Statistics & Programme Implementation</span>
              <span className="text-[11px] font-semibold text-gray-500 mt-1 uppercase tracking-wider">Government of India</span>
            </div>
          </div>
          <div className="hidden lg:flex items-center gap-6">
            <img src={g20Logo} alt="G20 Logo" className="h-12 object-contain" />
            <div className="w-px h-10 bg-gray-200"></div>
            <img src={azadiLogo} alt="Azadi Ka Amrit Mahotsav Logo" className="h-12 object-contain" />
          </div>
        </div>
      </header>

      {/* 🟢 3. NAV BAR */}
      <nav className="bg-gradient-to-r from-[#002244] via-[#003366] to-[#004080] text-white shadow-md relative z-50">
        <div className="max-w-[1400px] mx-auto flex justify-between items-center h-12 px-4 sm:px-8">
          <div className="hidden lg:flex items-center h-full text-[13px] font-medium">
            <Link to="/" className={`h-full flex items-center px-6 transition-colors border-b-2 ${isActive('/') ? 'bg-[#0056D2] border-transparent shadow-inner' : 'hover:bg-white/10 border-transparent hover:border-white'}`}>Home</Link>
            <Link to="/about" className={`h-full flex items-center px-6 transition-colors border-b-2 ${isActive('/about') ? 'bg-[#0056D2] border-transparent shadow-inner' : 'hover:bg-white/10 border-transparent hover:border-white'}`}>About Us</Link>
            <a href="#" className="h-full flex items-center px-6 hover:bg-white/10 transition-colors border-b-2 border-transparent hover:border-white gap-1.5">DocuMind <ChevronDown size={14}/></a>
            <a href="#" className="h-full flex items-center px-6 hover:bg-white/10 transition-colors border-b-2 border-transparent hover:border-white gap-1.5">Resources <ChevronDown size={14}/></a>
            <a href="#" className="h-full flex items-center px-6 hover:bg-white/10 transition-colors border-b-2 border-transparent hover:border-white">Contact Us</a>
          </div>
          <div className="flex items-center gap-4 h-full py-2">
            <div className="hidden md:flex items-center bg-white/10 backdrop-blur-sm border border-white/20 rounded-sm overflow-hidden h-8 w-64 transition-all focus-within:bg-white focus-within:border-transparent group">
              <input type="text" placeholder="Search..." className="w-full h-full px-3 text-xs text-white bg-transparent outline-none group-focus-within:text-black placeholder-white/70 group-focus-within:placeholder-gray-400 transition-colors" />
              <button className="text-white group-focus-within:text-[#003366] px-3 h-full"><Search size={14} /></button>
            </div>
            <Link to="/login" className="flex items-center gap-2 bg-[#0056D2] hover:bg-blue-500 text-white px-6 h-full text-xs font-bold transition-all shadow-[0_0_15px_rgba(0,86,210,0.4)] hover:shadow-[0_0_20px_rgba(0,86,210,0.6)]">
              Access DocuMind <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}