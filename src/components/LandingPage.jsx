import React, { useState } from "react";
import { Link } from "react-router-dom";
import { 
  Menu, X, BookOpen, BarChart2, TrendingUp, Users, 
  FileText, Activity, Target, ArrowRight 
} from "lucide-react";
import Footer from "./Footer";

// Assets
import ashokaLogo from "../assets/ashoka.png";
import sihLogo from "../assets/SIH.png";

export default function LandingPage({ onStart }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white text-[#1E293B] font-sans overflow-x-hidden relative w-full">
      
      {/* 🟢 1. ACCESSIBILITY TOP BAR */}
      <div className="bg-[#F8F9FA] border-b border-gray-200 py-1.5 px-4 sm:px-8 text-[11px] font-medium text-gray-600 flex justify-end gap-6 hidden sm:flex">
        <a href="#main-content" className="hover:text-[#0B3B60] transition-colors">Skip to main content</a>
        <div className="flex gap-2 border-l border-gray-300 pl-4">
          <span className="cursor-pointer hover:text-black">A-</span>
          <span className="cursor-pointer hover:text-black font-bold">A</span>
          <span className="cursor-pointer hover:text-black">A+</span>
        </div>
        <div className="border-l border-gray-300 pl-4 cursor-pointer hover:text-[#0B3B60]">
          English ▾
        </div>
      </div>

      {/* 🟢 2. OFFICIAL LOGO HEADER */}
      <header className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 py-4 sm:py-6 flex justify-between items-center">
        {/* Left: Ministry */}
        <div className="flex items-center gap-4">
          <img src={ashokaLogo} alt="Satyameva Jayate" className="h-12 sm:h-16 object-contain" />
          <div className="flex flex-col text-[#0B2545]">
            <span className="text-sm sm:text-base font-bold tracking-tight leading-tight">Ministry of Statistics & Programme Implementation</span>
            <span className="text-[11px] sm:text-xs text-gray-600">Government of India</span>
          </div>
        </div>

        {/* Right: SIH Logo */}
        <div className="hidden md:flex items-center gap-3 text-right">
          <img src={sihLogo} alt="Smart India Hackathon" className="h-12 sm:h-14 object-contain" />
          <div className="flex flex-col">
            <span className="text-sm font-bold text-[#0B2545] leading-tight">Smart India<br/>Hackathon 2026</span>
            <span className="text-[9px] text-gray-500 uppercase tracking-widest mt-0.5">Innovation for a Vikasit Bharat</span>
          </div>
        </div>
      </header>

      {/* 🟢 3. MAIN NAVBAR */}
      <nav className="border-y border-gray-200 bg-white sticky top-0 z-50 shadow-sm">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 flex justify-between items-center h-[60px]">
          
          <div className="hidden lg:flex items-center gap-8 text-sm font-medium text-gray-700 h-full">
            <Link to="/" className="text-[#0B3B60] border-b-2 border-[#0B3B60] h-full flex items-center px-1 font-bold">Home</Link>
            <span className="cursor-not-allowed hover:text-[#0B3B60] transition-colors px-1" title="Coming soon">About</span>
            <span className="cursor-not-allowed hover:text-[#0B3B60] transition-colors px-1" title="Coming soon">Key Features</span>
            <span className="cursor-not-allowed hover:text-[#0B3B60] transition-colors px-1" title="Coming soon">How It Works</span>
            <span className="cursor-not-allowed hover:text-[#0B3B60] transition-colors px-1" title="Coming soon">Impact</span>
            <span className="cursor-not-allowed hover:text-[#0B3B60] transition-colors px-1" title="Coming soon">Contact</span>
          </div>

          <div className="hidden lg:flex items-center">
            <Link to="/login" className="bg-[#0A2540] hover:bg-[#113A63] text-white px-8 py-2.5 rounded text-sm font-semibold transition-colors shadow-md">
              Login
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button className="lg:hidden text-[#0B2545] p-2 ml-auto" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Nav Dropdown */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white border-b border-gray-200 p-4 flex flex-col gap-4 shadow-lg absolute w-full left-0">
            <Link to="/" className="text-sm font-bold text-[#0B3B60] border-b border-gray-100 pb-2">Home</Link>
            <Link to="/login" className="text-sm font-medium text-gray-700 border-b border-gray-100 pb-2">Login</Link>
            <button onClick={() => { setIsMenuOpen(false); onStart(); }} className="bg-[#0A2540] text-white px-5 py-2.5 rounded text-sm font-semibold w-full text-center">
              Get Started
            </button>
          </div>
        )}
      </nav>

      {/* 🟢 4. HERO SECTION */}
      <main id="main-content" className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 py-12 md:py-20 grid grid-cols-1 lg:grid-cols-12 gap-12 relative items-center">
        
        {/* Left Content */}
        <div className="lg:col-span-5 flex flex-col z-20">
          <h1 className="text-5xl md:text-6xl font-extrabold text-[#0B2545] mb-2 tracking-tight">DocuMind</h1>
          <h2 className="text-xl md:text-2xl font-bold text-[#0B2545] mb-6 leading-snug">
            AI-Powered Competency & Learning Intelligence Platform
          </h2>
          
          <div className="w-16 h-1 bg-[#0A2540] mb-6"></div>

          <h3 className="text-[#0B3B60] text-lg font-semibold italic mb-3">From Knowledge to Capability.</h3>
          
          <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-8 max-w-md">
            DocuMind transforms government documents and training content into measurable competencies, personalized learning paths and actionable insights — helping strengthen India's Official Statistical System.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4">
            <button onClick={onStart} className="w-full sm:w-auto bg-[#0A2540] hover:bg-[#113A63] text-white px-8 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2 shadow-md">
              Get Started <ArrowRight size={16} />
            </button>
            <button disabled className="w-full sm:w-auto px-8 py-3 rounded-lg font-semibold border-2 border-gray-300 text-gray-600 cursor-not-allowed">
              Learn More
            </button>
          </div>
        </div>

        {/* Right Content (Building Graphic & Floating Card) */}
        <div className="lg:col-span-7 relative w-full h-[400px] md:h-[500px] flex items-center justify-center">
          
          {/* Faded Building Silhouette Graphic (Simulated via placeholder/gradient if exact image isn't available) */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-40 mix-blend-multiply">
            <div className="w-[120%] h-[120%] bg-[url('https://images.unsplash.com/photo-1587474260584-136574528ed5?q=80&w=1200&auto=format&fit=crop')] bg-cover bg-center grayscale opacity-30 mask-image:linear-gradient(to_bottom,white_20%,transparent_100%)]"></div>
          </div>

          {/* Floating Flag & Text */}
          <div className="absolute top-10 right-10 transform rotate-[-10deg] flex flex-col items-center opacity-80 hidden md:flex z-10">
            <span className="text-xl font-serif italic text-gray-500">Skilled Officials</span>
            <span className="text-xl font-serif italic text-gray-500 ml-6">Stronger India</span>
            <div className="w-16 h-1 bg-gradient-to-r from-orange-500 via-white to-green-500 mt-2 ml-10"></div>
          </div>

          {/* The White Floating Card (Icons Strip) */}
          <div className="absolute bottom-10 w-full max-w-[550px] bg-white rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.08)] border border-gray-100 p-6 z-20">
            <div className="grid grid-cols-4 divide-x divide-gray-100 text-center">
              
              <div className="flex flex-col items-center gap-3 px-2">
                <div className="text-[#0B3B60]"><BookOpen size={28} strokeWidth={1.5} /></div>
                <span className="text-xs font-semibold text-gray-700">Learn</span>
              </div>
              
              <div className="flex flex-col items-center gap-3 px-2">
                <div className="text-[#0B3B60]"><BarChart2 size={28} strokeWidth={1.5} /></div>
                <span className="text-xs font-semibold text-gray-700">Assess</span>
              </div>
              
              <div className="flex flex-col items-center gap-3 px-2">
                <div className="text-[#0B3B60]"><TrendingUp size={28} strokeWidth={1.5} /></div>
                <span className="text-xs font-semibold text-gray-700">Grow</span>
              </div>
              
              <div className="flex flex-col items-center gap-3 px-2">
                <div className="text-[#0B3B60]"><Users size={28} strokeWidth={1.5} /></div>
                <span className="text-xs font-semibold text-gray-700">Serve Better</span>
              </div>

            </div>
          </div>

        </div>
      </main>

      {/* 🟢 5. BOTTOM FEATURES BAR */}
      <div className="bg-[#F8F9FA] border-t border-gray-200 mt-8 py-10 w-full">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          <div className="flex gap-4">
            <div className="text-[#0B3B60] shrink-0 pt-1"><FileText size={24} /></div>
            <div>
              <h4 className="text-sm font-bold text-[#0B2545] mb-1">Document Intelligence</h4>
              <p className="text-[11px] text-gray-600 leading-relaxed">Convert policy documents, manuals and training content into structured knowledge.</p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="text-[#0B3B60] shrink-0 pt-1"><Activity size={24} /></div>
            <div>
              <h4 className="text-sm font-bold text-[#0B2545] mb-1">Skill-Gap Analysis</h4>
              <p className="text-[11px] text-gray-600 leading-relaxed">Identify competency gaps for role-based development and targeted learning.</p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="text-[#0B3B60] shrink-0 pt-1"><Target size={24} /></div>
            <div>
              <h4 className="text-sm font-bold text-[#0B2545] mb-1">Personalized Learning</h4>
              <p className="text-[11px] text-gray-600 leading-relaxed">Get AI-driven, role-specific learning recommendations mapped directly to your gaps.</p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="text-[#0B3B60] shrink-0 pt-1"><Users size={24} /></div>
            <div>
              <h4 className="text-sm font-bold text-[#0B2545] mb-1">Workforce Insights</h4>
              <p className="text-[11px] text-gray-600 leading-relaxed">Build a stronger, future-ready statistical workforce with real-time analytics.</p>
            </div>
          </div>

        </div>
      </div>

      <Footer />
    </div>
  );
}