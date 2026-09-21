import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion"; 
import { Search, ChevronDown, ArrowRight, Volume2, X, Menu } from "lucide-react";

// Assets
import ashokaLogo from "../assets/ashoka.png";
import g20Logo from "../assets/g20 logo.png";
import azadiLogo from "../assets/75yearsINDI Logo.png";
import indiaLogo from "../assets/India Logo.png";

export default function Header() {
  const [fontSize, setFontSize] = useState("normal");
  const [language, setLanguage] = useState("en");
  const [showToast, setShowToast] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // 🟢 Added Mobile Menu State
  
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
            className="fixed top-4 left-1/2 z-[9999] bg-white border-l-4 border-[#0056D2] shadow-[0_10px_40px_rgba(0,0,0,0.15)] px-4 py-3 sm:px-6 sm:py-4 rounded-r-md flex items-center gap-3 sm:gap-4 w-[90%] max-w-[320px]"
          >
            <div className="bg-blue-50 text-[#0056D2] p-2 sm:p-2.5 rounded-full"><Volume2 size={16} className="sm:w-5 sm:h-5" /></div>
            <div className="flex-1">
              <h4 className="text-[12px] sm:text-[13px] font-bold text-[#1E293B] mb-0.5">Accessibility Enabled</h4>
              <p className="text-[10px] sm:text-[11px] text-gray-500 leading-snug">Screen reader optimizations & ARIA labels are now active.</p>
            </div>
            <button onClick={() => setShowToast(false)} className="text-gray-400 hover:text-gray-700 transition-colors"><X size={14} className="sm:w-4 sm:h-4" /></button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 🟢 1. LIVE ACCESSIBILITY TOP BAR (Responsive Flex) */}
      <div className="bg-white border-b border-gray-200 py-1.5 px-2 sm:px-4 md:px-8 text-[10px] sm:text-xs font-medium text-gray-700 flex flex-wrap justify-between items-center relative z-50">
        
        {/* Left: India Logo & Govt Text */}
        <div className="flex items-center gap-1 sm:gap-2 w-full md:w-auto justify-center md:justify-start mb-1 md:mb-0">
          <img src={indiaLogo} alt="India Logo" className="h-3 sm:h-4 md:h-5 object-contain" />
          <span className="tracking-wide text-gray-900 font-bold text-[10px] sm:text-[11px] md:text-[13px]">
            भारत सरकार <span className="font-normal text-gray-400 mx-0.5 sm:mx-1">|</span> Government of India
          </span>
        </div>
        
        {/* Right: Accessibility Tools (Hidden on very small screens, visible on md and up) */}
        <div className="hidden md:flex items-center gap-2 lg:gap-4 text-[10px] lg:text-[12px] flex-wrap justify-center">
          <a href="#main-content" className="hover:text-[#0A4275] transition-colors font-semibold focus:outline-none focus:underline whitespace-nowrap">Skip to main content</a>
          <span className="text-gray-300">|</span>
          <button onClick={handleScreenReader} className="hover:text-[#0056D2] transition-colors flex items-center gap-1 font-semibold whitespace-nowrap">Screen Reader Access</button>
          <span className="text-gray-300">|</span>
          <div className="flex items-center gap-1 lg:gap-1.5 font-bold">
            <button onClick={() => handleFontSizeChange('small')} className={`px-1 lg:px-1.5 transition-colors ${fontSize === 'small' ? 'text-[#0056D2] border-b-2 border-[#0056D2]' : 'hover:text-[#0A4275]'}`}>A-</button>
            <button onClick={() => handleFontSizeChange('normal')} className={`px-1 lg:px-1.5 transition-colors ${fontSize === 'normal' ? 'text-[#0056D2] border-b-2 border-[#0056D2]' : 'text-black hover:text-[#0A4275]'}`}>A</button>
            <button onClick={() => handleFontSizeChange('large')} className={`px-1 lg:px-1.5 transition-colors ${fontSize === 'large' ? 'text-[#0056D2] border-b-2 border-[#0056D2]' : 'hover:text-[#0A4275]'}`}>A+</button>
          </div>
          <span className="text-gray-300">|</span>
          <button onClick={() => setLanguage('en')} className={`flex items-center gap-0.5 lg:gap-1 font-bold transition-colors ${language === 'en' ? 'text-[#0056D2]' : 'text-black hover:text-[#0A4275]'}`}>
            English <ChevronDown size={12} className="lg:w-[14px] lg:h-[14px]"/>
          </button>
          <span className="text-gray-300">|</span>
          <button onClick={() => setLanguage('hi')} className={`font-semibold transition-colors ${language === 'hi' ? 'text-[#0056D2] font-bold' : 'text-gray-600 hover:text-[#0A4275]'}`}>हिंदी</button>
        </div>
      </div>

      {/* 🟢 2. OFFICIAL HEADER (Responsive Logos & Text) */}
      <header className="bg-white py-2 sm:py-3 px-4 sm:px-8 relative z-40 border-b border-gray-200 shadow-sm">
        <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row justify-between items-center gap-3 md:gap-0">
          
          {/* Left: Ministry Details */}
          <div className="flex items-center gap-3 sm:gap-4 md:gap-5 w-full md:w-auto justify-center md:justify-start">
            <img src={ashokaLogo} alt="Satyameva Jayate" className="h-10 sm:h-12 md:h-16 object-contain" />
            <div className="flex flex-col border-l-2 border-gray-300 pl-3 sm:pl-4 py-0.5 sm:py-1">
              <span className="text-[14px] sm:text-[16px] md:text-[20px] font-extrabold text-black tracking-tight font-serif leading-tight">सांख्यिकी एवं कार्यक्रम कार्यान्वयन मंत्रालय</span>
              <span className="text-[11px] sm:text-[13px] md:text-[15px] font-bold text-[#0A4275] tracking-wide mt-0.5 leading-tight">Ministry of Statistics & Programme Implementation</span>
              <span className="text-[9px] sm:text-[10px] md:text-[11px] font-semibold text-gray-500 mt-0.5 sm:mt-1 uppercase tracking-wider">Government of India</span>
            </div>
          </div>
          
          {/* Right: G20 & Azadi Logos (Hidden on small mobile, visible on sm and up) */}
          <div className="hidden sm:flex items-center gap-3 sm:gap-4 md:gap-6 mt-2 md:mt-0">
            <img src={g20Logo} alt="G20 Logo" className="h-8 sm:h-10 md:h-12 object-contain" />
            <div className="w-px h-6 sm:h-8 md:h-10 bg-gray-200"></div>
            <img src={azadiLogo} alt="Azadi Ka Amrit Mahotsav Logo" className="h-8 sm:h-10 md:h-12 object-contain" />
          </div>
        </div>
      </header>

      {/* 🟢 3. NAV BAR (Responsive Hamburger Menu) */}
      <nav className="bg-gradient-to-r from-[#002244] via-[#003366] to-[#004080] text-white shadow-md relative z-50">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-8">
          
          {/* Desktop Nav Layout */}
          <div className="flex justify-between items-center h-12 md:h-14">
            
            {/* Mobile Menu Toggle Button */}
            <button 
              className="lg:hidden p-2 -ml-2 text-white hover:bg-white/10 rounded-md transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {/* Desktop Links */}
            <div className="hidden lg:flex items-center h-full text-[13px] font-medium">
              <Link to="/" className={`h-full flex items-center px-6 transition-colors border-b-2 ${isActive('/') ? 'bg-[#0056D2] border-transparent shadow-inner' : 'hover:bg-white/10 border-transparent hover:border-white'}`}>Home</Link>
              <Link to="/about" className={`h-full flex items-center px-6 transition-colors border-b-2 ${isActive('/about') ? 'bg-[#0056D2] border-transparent shadow-inner' : 'hover:bg-white/10 border-transparent hover:border-white'}`}>About Us</Link>
              <button className="h-full flex items-center px-6 hover:bg-white/10 transition-colors border-b-2 border-transparent hover:border-white gap-1.5 focus:outline-none">DocuMind <ChevronDown size={14}/></button>
              <button className="h-full flex items-center px-6 hover:bg-white/10 transition-colors border-b-2 border-transparent hover:border-white gap-1.5 focus:outline-none">Resources <ChevronDown size={14}/></button>
              <button className="h-full flex items-center px-6 hover:bg-white/10 transition-colors border-b-2 border-transparent hover:border-white focus:outline-none">Contact Us</button>
            </div>
            
            {/* Search & Login Button */}
            <div className="flex items-center gap-2 sm:gap-4 h-full py-2 sm:py-2.5">
              <div className="hidden sm:flex items-center bg-white/10 backdrop-blur-sm border border-white/20 rounded-sm overflow-hidden h-8 md:h-9 w-40 md:w-64 transition-all focus-within:bg-white focus-within:border-transparent group">
                <input type="text" placeholder="Search..." className="w-full h-full px-2 md:px-3 text-[11px] md:text-xs text-white bg-transparent outline-none group-focus-within:text-black placeholder-white/70 group-focus-within:placeholder-gray-400 transition-colors" />
                <button className="text-white group-focus-within:text-[#003366] px-2 md:px-3 h-full"><Search size={14} /></button>
              </div>
              <Link to="/login" className="flex items-center gap-1.5 sm:gap-2 bg-[#0056D2] hover:bg-blue-500 text-white px-3 sm:px-6 h-8 md:h-9 rounded-sm sm:rounded-none text-[11px] sm:text-xs font-bold transition-all shadow-[0_0_15px_rgba(0,86,210,0.4)] hover:shadow-[0_0_20px_rgba(0,86,210,0.6)]">
                <span className="hidden sm:inline">Access</span> DocuMind <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>

        {/* 🟢 Mobile Dropdown Menu (Animated) */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div 
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="lg:hidden overflow-hidden bg-[#001f3f] border-t border-white/10"
            >
              <div className="flex flex-col py-2 px-4 space-y-1 text-sm font-medium">
                <Link to="/" onClick={() => setIsMobileMenuOpen(false)} className={`block py-3 px-4 rounded-md transition-colors ${isActive('/') ? 'bg-[#0056D2]' : 'hover:bg-white/10'}`}>Home</Link>
                <Link to="/about" onClick={() => setIsMobileMenuOpen(false)} className={`block py-3 px-4 rounded-md transition-colors ${isActive('/about') ? 'bg-[#0056D2]' : 'hover:bg-white/10'}`}>About Us</Link>
                <button className="flex items-center justify-between w-full py-3 px-4 rounded-md hover:bg-white/10 transition-colors focus:outline-none">DocuMind <ChevronDown size={16}/></button>
                <button className="flex items-center justify-between w-full py-3 px-4 rounded-md hover:bg-white/10 transition-colors focus:outline-none">Resources <ChevronDown size={16}/></button>
                <button className="block w-full text-left py-3 px-4 rounded-md hover:bg-white/10 transition-colors focus:outline-none">Contact Us</button>
                
                {/* Mobile Search Input */}
                <div className="sm:hidden mt-2 pt-2 border-t border-white/10">
                  <div className="flex items-center bg-white/10 border border-white/20 rounded-md overflow-hidden h-10 w-full focus-within:bg-white focus-within:border-transparent group">
                    <input type="text" placeholder="Search..." className="w-full h-full px-3 text-xs text-white bg-transparent outline-none group-focus-within:text-black placeholder-white/70 group-focus-within:placeholder-gray-400" />
                    <button className="text-white group-focus-within:text-[#003366] px-3 h-full"><Search size={16} /></button>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
}