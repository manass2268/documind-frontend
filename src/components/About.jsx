import React from "react";
import { Link } from "react-router-dom";
import { 
  Search, ChevronDown, User, ArrowRight, 
  Users, BarChart2, BookOpen, TrendingUp 
} from "lucide-react";
import Footer from "./Footer";

// Assets
import ashokaLogo from "../assets/ashoka.png";
import g20Logo from "../assets/g20 logo.png";
import azadiLogo from "../assets/75yearsINDI Logo.png";
import indiaLogo from "../assets/India Logo.png";

export default function About() {
  return (
    <div className="min-h-screen bg-white text-[#333333] font-sans flex flex-col overflow-x-hidden">
      
      {/* 🟢 1. ACCESSIBILITY TOP BAR */}
      <div className="bg-white border-b border-gray-200 py-1.5 px-4 sm:px-8 text-xs font-medium text-gray-700 flex flex-wrap justify-between items-center relative z-50">
        <div className="flex items-center gap-3">
          <img src={indiaLogo} alt="India Logo" className="h-5 object-contain" />
          <span className="tracking-wide text-gray-900 font-bold text-[13px]">भारत सरकार <span className="font-normal text-gray-400 mx-1">|</span> Government of India</span>
        </div>
        
        <div className="hidden md:flex items-center gap-4 text-[12px]">
          <a href="#main-content" className="hover:text-[#0A4275] transition-colors font-semibold">Skip to main content</a>
          <span className="text-gray-300">|</span>
          <button className="hover:text-[#0A4275] transition-colors flex items-center gap-1 font-semibold">
            Screen Reader Access
          </button>
          <span className="text-gray-300">|</span>
          <div className="flex items-center gap-1.5 font-bold">
            <button className="px-1.5 hover:text-[#0A4275] text-sm">A-</button>
            <button className="px-1.5 text-black hover:text-[#0A4275] text-sm">A</button>
            <button className="px-1.5 hover:text-[#0A4275] text-sm">A+</button>
          </div>
          <span className="text-gray-300">|</span>
          <button className="flex items-center gap-1 text-black font-bold hover:text-[#0A4275]">
            English <ChevronDown size={14}/>
          </button>
          <span className="text-gray-300">|</span>
          <button className="text-gray-600 hover:text-[#0A4275] font-semibold">हिंदी</button>
        </div>
      </div>

      {/* 🟢 2. OFFICIAL HEADER */}
      <header className="bg-white py-2 px-4 sm:px-8 relative z-40 border-b border-gray-200">
        <div className="max-w-[1400px] mx-auto flex justify-between items-center">
          
          <div className="flex items-center gap-5">
            <img src={ashokaLogo} alt="Satyameva Jayate" className="h-16 object-contain" />
            <div className="flex flex-col border-l-2 border-gray-300 pl-4 py-1">
              <span className="text-[20px] font-extrabold text-black tracking-tight font-serif leading-tight">
                सांख्यिकी एवं कार्यक्रम कार्यान्वयन मंत्रालय
              </span>
              <span className="text-[15px] font-bold text-[#0A4275] tracking-wide mt-0.5 leading-tight">
                Ministry of Statistics & Programme Implementation
              </span>
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
      <nav className="bg-[#003366] text-white shadow-sm relative z-50">
        <div className="max-w-[1400px] mx-auto flex justify-between items-center h-12 px-4 sm:px-8">
          
          <div className="hidden lg:flex items-center h-full text-[13px] font-medium">
            <Link to="/" className="h-full flex items-center px-6 hover:bg-[#002244] transition-colors border-b-2 border-transparent hover:border-white">Home</Link>
            {/* Active Link Highlighted */}
            <Link to="/about" className="h-full flex items-center px-6 bg-[#0056D2] border-b-2 border-transparent transition-colors">About Us</Link>
            <a href="#" className="h-full flex items-center px-6 hover:bg-[#002244] transition-colors border-b-2 border-transparent hover:border-white gap-1.5">DocuMind <ChevronDown size={14}/></a>
            <a href="#" className="h-full flex items-center px-6 hover:bg-[#002244] transition-colors border-b-2 border-transparent hover:border-white gap-1.5">Resources <ChevronDown size={14}/></a>
            <a href="#" className="h-full flex items-center px-6 hover:bg-[#002244] transition-colors border-b-2 border-transparent hover:border-white">Contact Us</a>
          </div>

          <div className="flex items-center gap-4 h-full py-2">
            <div className="hidden md:flex items-center bg-white rounded-sm overflow-hidden h-8 w-64">
              <input type="text" placeholder="Search..." className="w-full h-full px-3 text-xs text-black outline-none" />
              <button className="text-[#003366] px-3 hover:bg-gray-100 h-full"><Search size={14} /></button>
            </div>
            
            <Link to="/login" className="flex items-center gap-2 bg-[#0056D2] hover:bg-blue-700 text-white px-6 h-full text-xs font-bold transition-colors">
              Access DocuMind <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </nav>

      {/* 🟢 4. BREADCRUMB */}
      <div className="bg-[#F8FAFC] border-b border-gray-200">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-8 py-2 text-[11px] font-semibold text-gray-500">
          <Link to="/" className="hover:text-[#0A4275] transition-colors">Home</Link>
          <span className="mx-2">&gt;</span>
          <span className="text-[#0A4275]">About Us</span>
        </div>
      </div>

      <main id="main-content" className="flex-1 bg-white">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-8 py-10">
          
          {/* 🟢 5. ABOUT HERO SECTION */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="flex flex-col z-20">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-1 h-3.5 bg-[#0056D2]"></div>
                <span className="text-[12px] font-extrabold text-[#0056D2] tracking-widest uppercase">About Us</span>
              </div>

              <h1 className="text-4xl md:text-5xl font-extrabold text-[#0056D2] mb-4 tracking-tight leading-none">
                About DocuMind
              </h1>
              <h2 className="text-[17px] font-bold text-[#0A4275] mb-5 leading-snug">
                Enabling a Skilled and Data-Driven Workforce for a Stronger India
              </h2>
              
              <p className="text-gray-600 text-[14px] leading-relaxed font-medium text-justify">
                DocuMind is an AI-powered competency and learning intelligence platform designed for India's official statistical ecosystem. It supports employees in assessing their competencies, identifying skill gaps and accessing relevant learning resources for continuous professional growth.
              </p>
            </div>

            {/* Right Side: Building & Quote */}
            <div className="relative w-full h-[320px] flex items-center justify-center lg:justify-end bg-[#F4F7F9] rounded-sm overflow-hidden">
              <div className="absolute inset-0 right-0 bg-[url('https://images.unsplash.com/photo-1587474260584-136574528ed5?q=80&w=1200&auto=format&fit=crop')] bg-cover bg-center [mask-image:linear-gradient(to_left,white_40%,transparent_100%)] opacity-90 z-0"></div>
              
              {/* Quote Box */}
              <div className="relative z-10 bg-white/90 backdrop-blur-sm p-5 shadow-sm mb-20 mr-auto lg:mr-32 border border-gray-100">
                <h3 className="text-xl font-bold text-[#0A4275] mb-2 leading-tight">Data<br/>for a Stronger<br/>India</h3>
                <div className="w-10 h-1 bg-gradient-to-r from-orange-500 via-white to-green-600 rounded-full"></div>
              </div>
            </div>
          </div>

          {/* 🟢 6. OUR OBJECTIVE */}
          <div className="mb-16">
            <h3 className="text-[20px] font-bold text-[#0A4275]">Our Objective</h3>
            <div className="w-12 h-1 bg-[#0A4275] mt-1.5 mb-6 rounded-full"></div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
              
              {/* Card 1 */}
              <div className="bg-[#F8FAFC] border border-gray-100 p-5 rounded-md flex items-start gap-4">
                <div className="bg-[#E9F0F5] p-2.5 rounded-md text-[#0056D2] shrink-0">
                  <Users size={22} />
                </div>
                <div>
                  <h4 className="font-bold text-[#1E293B] text-[13px] mb-1">Build Competencies</h4>
                  <p className="text-[12px] text-gray-500 leading-snug">Strengthen role-based competencies across the statistical workforce.</p>
                </div>
              </div>

              {/* Card 2 */}
              <div className="bg-[#F8FAFC] border border-gray-100 p-5 rounded-md flex items-start gap-4">
                <div className="bg-[#E9F0F5] p-2.5 rounded-md text-[#0056D2] shrink-0">
                  <BarChart2 size={22} />
                </div>
                <div>
                  <h4 className="font-bold text-[#1E293B] text-[13px] mb-1">Identify Skill Gaps</h4>
                  <p className="text-[12px] text-gray-500 leading-snug">Use data-driven insights to identify learning needs.</p>
                </div>
              </div>

              {/* Card 3 */}
              <div className="bg-[#F8FAFC] border border-gray-100 p-5 rounded-md flex items-start gap-4">
                <div className="bg-[#E9F0F5] p-2.5 rounded-md text-[#0056D2] shrink-0">
                  <BookOpen size={22} />
                </div>
                <div>
                  <h4 className="font-bold text-[#1E293B] text-[13px] mb-1">Enable Learning</h4>
                  <p className="text-[12px] text-gray-500 leading-snug">Provide personalized learning recommendations and resources.</p>
                </div>
              </div>

              {/* Card 4 */}
              <div className="bg-[#F8FAFC] border border-gray-100 p-5 rounded-md flex items-start gap-4">
                <div className="bg-[#E9F0F5] p-2.5 rounded-md text-[#0056D2] shrink-0">
                  <TrendingUp size={22} />
                </div>
                <div>
                  <h4 className="font-bold text-[#1E293B] text-[13px] mb-1">Support Growth</h4>
                  <p className="text-[12px] text-gray-500 leading-snug">Help build a future-ready and efficient statistical ecosystem.</p>
                </div>
              </div>

            </div>
          </div>

          {/* 🟢 7. VISION & MISSION */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            
            {/* Vision */}
            <div>
              <h3 className="text-[20px] font-bold text-[#0A4275]">Our Vision</h3>
              <div className="w-12 h-1 bg-[#0A4275] mt-1.5 mb-6 rounded-full"></div>
              
              <div className="bg-[#F4F8FA] border border-[#E2E8F0] p-8 h-[140px] flex items-center justify-center text-center rounded-sm">
                <p className="text-[14px] font-medium text-[#1E293B] leading-relaxed italic">
                  "A skilled, capable and future-ready statistical workforce contributing to a data-driven India."
                </p>
              </div>
            </div>

            {/* Mission */}
            <div>
              <h3 className="text-[20px] font-bold text-[#0A4275]">Our Mission</h3>
              <div className="w-12 h-1 bg-[#0A4275] mt-1.5 mb-6 rounded-full"></div>
              
              <div className="bg-[#F0FDF4] border border-[#DCFCE7] p-8 h-[140px] flex items-center justify-center text-center rounded-sm">
                <p className="text-[14px] font-medium text-[#1E293B] leading-relaxed">
                  To empower government employees with competency-driven learning through AI-enabled insights and accessible resources.
                </p>
              </div>
            </div>

          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}