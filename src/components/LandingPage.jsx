import React from "react";
import { Link } from "react-router-dom";
import { 
  Search, ChevronDown, User, BarChart2, BookOpen, 
  FileText, ArrowRight, Building2, BookMarked, Settings, ChevronRight
} from "lucide-react";
import Footer from "./Footer";

// Assets
import ashokaLogo from "../assets/ashoka.png";
import g20Logo from "../assets/g20 logo.png";
import azadiLogo from "../assets/75yearsINDI Logo.png";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white text-[#333333] font-sans flex flex-col overflow-x-hidden">
      
      {/* 🟢 1. ACCESSIBILITY TOP BAR */}
      <div className="bg-[#F8F9FA] border-b border-gray-200 py-1 px-4 sm:px-8 text-[11px] font-medium text-gray-600 flex flex-wrap justify-between items-center relative z-50">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1 px-1.5 py-0.5">
            <span className="text-[#FF9933] font-bold leading-none">■</span>
            <span className="text-gray-300 font-bold leading-none drop-shadow-sm">■</span>
            <span className="text-[#138808] font-bold leading-none">■</span>
          </div>
          <span className="tracking-wide text-gray-700 font-bold">भारत सरकार <span className="font-normal text-gray-500 mx-1">|</span> Government of India</span>
        </div>
        
        <div className="hidden md:flex items-center gap-4">
          <a href="#main-content" className="hover:text-[#0A4275] transition-colors">Skip to main content</a>
          <span className="text-gray-300">|</span>
          <button className="hover:text-[#0A4275] transition-colors flex items-center gap-1">
            Screen Reader Access
          </button>
          <span className="text-gray-300">|</span>
          <div className="flex items-center gap-1.5 font-bold">
            <button className="px-1.5 hover:text-[#0A4275]">A-</button>
            <button className="px-1.5 text-black hover:text-[#0A4275]">A</button>
            <button className="px-1.5 hover:text-[#0A4275]">A+</button>
          </div>
          <span className="text-gray-300">|</span>
          <button className="flex items-center gap-1 text-black font-bold hover:text-[#0A4275]">
            English <ChevronDown size={12}/>
          </button>
          <span className="text-gray-300">|</span>
          <button className="text-gray-600 hover:text-[#0A4275]">हिंदी</button>
        </div>
      </div>

      {/* 🟢 2. OFFICIAL HEADER */}
      <header className="bg-white py-3 px-4 sm:px-8 relative z-40 border-b border-gray-100">
        <div className="max-w-[1400px] mx-auto flex justify-between items-center">
          
          <div className="flex items-center gap-4">
            <img src={ashokaLogo} alt="Satyameva Jayate" className="h-16 object-contain" />
            <div className="flex flex-col border-l-2 border-gray-300 pl-4">
              <span className="text-lg font-bold text-black tracking-tight font-serif leading-tight">
                सांख्यिकी एवं कार्यक्रम कार्यान्वयन मंत्रालय
              </span>
              <span className="text-sm font-bold text-[#0A4275] tracking-wide mt-0.5 leading-tight">
                Ministry of Statistics & Programme Implementation
              </span>
              <span className="text-[11px] font-medium text-gray-500 mt-0.5">Government of India</span>
            </div>
          </div>

          {/* Right Side Gov Logos */}
          <div className="hidden lg:flex items-center gap-8">
            <div className="flex items-center gap-2">
              <img src={g20Logo} alt="G20 Logo" className="h-15 object-contain" />
            </div>
            <div className="w-px h-10 bg-gray-200"></div>
            <div className="flex items-center gap-2">
              <img src={azadiLogo} alt="Azadi Ka Amrit Mahotsav Logo" className="h-15 object-contain" />
            </div>
          </div>

        </div>
      </header>

      {/* 🟢 3. NAV BAR */}
      <nav className="bg-[#003366] text-white shadow-md relative z-50">
        <div className="max-w-[1400px] mx-auto flex justify-between items-center h-12 px-4 sm:px-8">
          
          <div className="hidden lg:flex items-center h-full text-[13px] font-medium">
            <a href="#" className="h-full flex items-center px-6 hover:bg-[#002244] transition-colors border-b-2 border-transparent hover:border-white">Home</a>
            <a href="#" className="h-full flex items-center px-6 hover:bg-[#002244] transition-colors border-b-2 border-transparent hover:border-white">About Us</a>
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

      {/* 🟢 4. HERO SECTION */}
      <main id="main-content" className="relative bg-gradient-to-r from-[#F4F7F9] to-white border-b border-gray-200">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-8 py-14 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center relative z-10">
          
          <div className="flex flex-col z-20">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-1 h-3 bg-[#0A4275]"></div>
              <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Smart India Hackathon 2026</span>
            </div>

            <h1 className="text-5xl md:text-[56px] font-extrabold text-[#0A4275] mb-2 tracking-tight leading-none">
              DocuMind
            </h1>
            <h2 className="text-xl md:text-2xl font-bold text-[#1E293B] mb-5 leading-snug">
              AI-Powered Competency & Learning <br/>Intelligence Platform
            </h2>
            
            <p className="text-gray-600 text-sm leading-relaxed mb-8 max-w-md font-medium">
              Supporting a skilled and future-ready statistical workforce through competency assessment and personalized learning.
            </p>

            <div className="flex items-center gap-4">
              <Link to="/login" className="bg-[#0056D2] hover:bg-blue-700 text-white px-6 py-2.5 text-sm font-semibold transition-colors flex items-center justify-center gap-2 rounded-sm shadow-sm">
                Access DocuMind <ArrowRight size={16} />
              </Link>
              <button className="bg-white text-[#0A4275] border border-[#0A4275] px-6 py-2.5 text-sm font-semibold hover:bg-blue-50 transition-colors rounded-sm shadow-sm">
                Learn More
              </button>
            </div>
          </div>

          {/* Right Side: Building & Quote */}
          <div className="relative w-full h-[400px] flex items-center justify-center lg:justify-end">
            {/* Real Building Background Image */}
            <div className="absolute inset-0 right-[-100px] bg-[url('https://images.unsplash.com/photo-1587474260584-136574528ed5?q=80&w=1200&auto=format&fit=crop')] bg-cover bg-center [mask-image:linear-gradient(to_left,white_50%,transparent_100%)] opacity-90 z-0"></div>
            
            {/* Quote Box */}
            <div className="relative z-10 bg-white/80 backdrop-blur-sm p-5 border-l border-gray-200 shadow-xl mb-32 mr-auto lg:mr-20">
              <h3 className="text-2xl font-bold text-[#0A4275] mb-2 leading-tight">Data<br/>for a Stronger<br/>India</h3>
              <div className="w-12 h-1 bg-gradient-to-r from-orange-500 via-white to-green-600 rounded-full"></div>
            </div>
          </div>
        </div>
      </main>

      {/* 🟢 5. EXPLORE DOCUMIND (4 Cards Layout) */}
      <section className="py-12 bg-[#F8FAFC]">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-8">
          
          <div className="flex flex-col items-center justify-center mb-10 text-center">
            <h3 className="text-xl font-bold text-[#0A4275] bg-white px-4 py-1 relative z-10">Explore DocuMind</h3>
            <div className="w-32 h-px bg-gray-300 -mt-3.5 z-0"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            
            <div className="bg-white border border-gray-100 shadow-sm rounded-lg p-5 flex items-center justify-between group cursor-pointer hover:shadow-md transition-all hover:border-blue-100">
              <div className="flex items-center gap-4">
                <div className="bg-[#F0F6FA] w-10 h-10 rounded-full flex items-center justify-center text-[#0A4275] group-hover:bg-[#0A4275] group-hover:text-white transition-colors">
                  <User size={18} />
                </div>
                <div>
                  <h4 className="font-bold text-[#333333] text-[13px] mb-0.5 group-hover:text-[#0A4275] transition-colors">For Employees</h4>
                  <p className="text-[11px] text-gray-500 leading-snug">Assess skills, explore<br/>learning resources</p>
                </div>
              </div>
              <ChevronRight size={16} className="text-blue-400 group-hover:translate-x-1 transition-transform" />
            </div>

            <div className="bg-white border border-gray-100 shadow-sm rounded-lg p-5 flex items-center justify-between group cursor-pointer hover:shadow-md transition-all hover:border-blue-100">
              <div className="flex items-center gap-4">
                <div className="bg-[#F0F6FA] w-10 h-10 rounded-full flex items-center justify-center text-[#0A4275] group-hover:bg-[#0A4275] group-hover:text-white transition-colors">
                  <BarChart2 size={18} />
                </div>
                <div>
                  <h4 className="font-bold text-[#333333] text-[13px] mb-0.5 group-hover:text-[#0A4275] transition-colors">For Departments</h4>
                  <p className="text-[11px] text-gray-500 leading-snug">Identify skill gaps<br/>and build capacity</p>
                </div>
              </div>
              <ChevronRight size={16} className="text-blue-400 group-hover:translate-x-1 transition-transform" />
            </div>

            <div className="bg-white border border-gray-100 shadow-sm rounded-lg p-5 flex items-center justify-between group cursor-pointer hover:shadow-md transition-all hover:border-blue-100">
              <div className="flex items-center gap-4">
                <div className="bg-[#F0F6FA] w-10 h-10 rounded-full flex items-center justify-center text-[#0A4275] group-hover:bg-[#0A4275] group-hover:text-white transition-colors">
                  <BookOpen size={18} />
                </div>
                <div>
                  <h4 className="font-bold text-[#333333] text-[13px] mb-0.5 group-hover:text-[#0A4275] transition-colors">Learning Resources</h4>
                  <p className="text-[11px] text-gray-500 leading-snug">Access curated courses<br/>and materials</p>
                </div>
              </div>
              <ChevronRight size={16} className="text-blue-400 group-hover:translate-x-1 transition-transform" />
            </div>

            <div className="bg-white border border-gray-100 shadow-sm rounded-lg p-5 flex items-center justify-between group cursor-pointer hover:shadow-md transition-all hover:border-blue-100">
              <div className="flex items-center gap-4">
                <div className="bg-[#F0F6FA] w-10 h-10 rounded-full flex items-center justify-center text-[#0A4275] group-hover:bg-[#0A4275] group-hover:text-white transition-colors">
                  <FileText size={18} />
                </div>
                <div>
                  <h4 className="font-bold text-[#333333] text-[13px] mb-0.5 group-hover:text-[#0A4275] transition-colors">About the Platform</h4>
                  <p className="text-[11px] text-gray-500 leading-snug">Know more about<br/>DocuMind and its objectives</p>
                </div>
              </div>
              <ChevronRight size={16} className="text-blue-400 group-hover:translate-x-1 transition-transform" />
            </div>

          </div>
        </div>
      </section>

      {/* 🟢 6. ECOSYSTEM STRIP */}
      <section className="py-6 bg-white border-t border-gray-100 shadow-[0_-5px_15px_rgba(0,0,0,0.02)]">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-8 flex flex-col md:flex-row items-center justify-between">
          
          <h4 className="text-sm font-bold text-[#0A4275] mb-4 md:mb-0">Our Government Ecosystem</h4>
          
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center text-orange-500"><Settings size={18}/></div>
              <span className="font-bold text-gray-800 text-sm tracking-tight">iGOT <span className="font-normal text-gray-600">Karmayogi</span></span>
            </div>
            
            <div className="hidden md:block w-px h-8 bg-gray-200"></div>

            <div className="flex items-center gap-2">
              <img src={ashokaLogo} alt="MoSPI" className="h-8 object-contain opacity-70" />
              <span className="font-bold text-[#0A4275] text-sm">MoSPI</span>
            </div>

            <div className="hidden md:block w-px h-8 bg-gray-200"></div>

            <div className="flex items-center gap-2 text-blue-700">
              <BookMarked size={24}/>
              <span className="font-bold text-sm">NSSTA</span>
            </div>

            <div className="hidden md:block w-px h-8 bg-gray-200"></div>

            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-green-100 border border-green-200 flex items-center justify-center font-bold text-green-700 text-xs">DI</div>
              <div className="flex flex-col text-[10px] font-bold text-gray-700 leading-none">
                <span className="text-[#0A4275] text-sm">Digital India</span>
                <span className="font-normal">Power To Empower</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      <Footer />
    </div>
  );
}