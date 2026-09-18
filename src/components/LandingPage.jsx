import React, { useState } from "react";
import { Link } from "react-router-dom";
import { 
  Search, ChevronDown, FileText, BarChart2, GraduationCap, 
  BrainCircuit, ChevronRight, User, BookOpen, HelpCircle, Phone, 
  Building2, ArrowRight, Volume2, Newspaper, ExternalLink, Eye, 
  Database, Network
} from "lucide-react";
import Footer from "./Footer";

// Assets
import ashokaLogo from "../assets/ashoka.png";

export default function LandingPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#F4F6F9] text-[#333333] font-sans overflow-x-hidden flex flex-col">
      
      {/* 🟢 1. ACCESSIBILITY TOP BAR (Standard GOI Pattern) */}
      <div className="bg-[#2A2A2A] border-b border-gray-300 py-1 px-4 sm:px-8 text-[11px] sm:text-xs font-medium text-gray-300 flex flex-wrap justify-between items-center z-50 relative">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1 bg-white/10 px-2 py-0.5 rounded">
            <span className="text-[#FF9933] font-bold leading-none">■</span>
            <span className="text-white font-bold leading-none">■</span>
            <span className="text-[#138808] font-bold leading-none">■</span>
          </div>
          <span className="tracking-wide">भारत सरकार | Government of India</span>
        </div>
        
        <div className="hidden md:flex items-center gap-4">
          <a href="#main-content" className="hover:text-white transition-colors flex items-center gap-1">
            Skip to main content
          </a>
          <span className="text-gray-500">|</span>
          <button className="hover:text-white transition-colors flex items-center gap-1" title="Screen Reader Access">
            <Volume2 size={12} /> Screen Reader Access
          </button>
          <span className="text-gray-500">|</span>
          <div className="flex items-center gap-1.5 font-bold">
            <button className="hover:text-white bg-black/30 px-1 rounded" title="Decrease Font Size">A-</button>
            <button className="hover:text-white bg-black/30 px-1 rounded text-white" title="Normal Font Size">A</button>
            <button className="hover:text-white bg-black/30 px-1 rounded" title="Increase Font Size">A+</button>
          </div>
          <span className="text-gray-500">|</span>
          <div className="flex items-center gap-2 bg-[#EAEAEA] text-black px-2 py-0.5 rounded shadow-inner">
            <button className="flex items-center gap-1 hover:text-[#003366] font-bold">English <ChevronDown size={10}/></button>
          </div>
        </div>
      </div>

      {/* 🟢 2. OFFICIAL BILINGUAL HEADER */}
      <header className="bg-white shadow-sm relative z-40">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 py-3 flex justify-between items-center">
          
          <div className="flex items-center gap-3 sm:gap-5">
            <img src={ashokaLogo} alt="National Emblem" className="h-16 sm:h-20 object-contain drop-shadow-sm" />
            <div className="flex flex-col border-l-2 border-[#E5E7EB] pl-3 sm:pl-5">
              <span className="text-sm sm:text-lg font-bold text-[#000000] tracking-tight leading-tight font-serif">
                सांख्यिकी एवं कार्यक्रम कार्यान्वयन मंत्रालय
              </span>
              <span className="text-sm sm:text-lg font-bold text-[#003366] tracking-tight leading-tight uppercase mt-0.5">
                Ministry of Statistics & Programme Implementation
              </span>
            </div>
          </div>

          <div className="hidden lg:flex items-center gap-4">
            <div className="flex flex-col text-right">
              <span className="text-xs font-bold text-gray-500 uppercase tracking-widest">Digital India Initiative</span>
              <span className="text-sm font-extrabold text-[#003366]">Data Intelligence Unit</span>
            </div>
            <div className="w-10 h-10 rounded-full border-2 border-[#003366] flex items-center justify-center text-[#003366]">
              <Database size={20} />
            </div>
          </div>

        </div>
      </header>

      {/* 🟢 3. PRIMARY NAVIGATION BAR */}
      <nav className="bg-[#003366] text-white shadow-lg sticky top-0 z-50 border-b-4 border-[#FF9933]">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 flex justify-between items-center h-12">
          
          <div className="hidden lg:flex items-center gap-1 text-[13px] font-medium h-full">
            <a href="#" className="h-full flex items-center px-4 bg-[#002244] text-white font-bold border-t-4 border-transparent hover:border-[#FF9933] transition-all">Home</a>
            <a href="#" className="h-full flex items-center px-4 hover:bg-[#002244] border-t-4 border-transparent hover:border-[#FF9933] gap-1 transition-all">About MoSPI <ChevronDown size={12}/></a>
            <a href="#" className="h-full flex items-center px-4 hover:bg-[#002244] border-t-4 border-transparent hover:border-[#FF9933] gap-1 transition-all">DocuMind AI Portal <ChevronDown size={12}/></a>
            <a href="#" className="h-full flex items-center px-4 hover:bg-[#002244] border-t-4 border-transparent hover:border-[#FF9933] gap-1 transition-all">Training & Skilling <ChevronDown size={12}/></a>
            <a href="#" className="h-full flex items-center px-4 hover:bg-[#002244] border-t-4 border-transparent hover:border-[#FF9933] transition-all">Circulars</a>
            <a href="#" className="h-full flex items-center px-4 hover:bg-[#002244] border-t-4 border-transparent hover:border-[#FF9933] transition-all">Contact Us</a>
          </div>

          <div className="flex items-center gap-4 w-full lg:w-auto justify-between lg:justify-end h-full">
            {/* Search Box */}
            <div className="hidden md:flex items-center bg-white rounded-sm overflow-hidden h-8 w-56 border border-[#002244]">
              <input type="text" placeholder="Search MoSPI..." className="w-full h-full px-3 text-xs text-gray-800 outline-none" />
              <button className="h-full px-3 bg-[#E5E7EB] text-[#003366] hover:bg-[#D1D5DB] transition-colors"><Search size={14} /></button>
            </div>
            
            {/* Login Button Routes to /login */}
            <Link to="/login" className="flex items-center gap-2 bg-[#E53E3E] hover:bg-[#C53030] text-white px-5 py-1.5 rounded-sm text-xs font-bold transition-colors shadow-sm h-8 uppercase tracking-wide">
              <User size={14} /> Official Login
            </Link>
          </div>
        </div>
      </nav>

      {/* 🟢 4. WHAT'S NEW (Scrolling Ticker) */}
      <div className="bg-white border-b border-gray-300 shadow-sm flex items-center">
        <div className="bg-[#FF9933] text-white text-xs font-bold px-4 py-2 uppercase whitespace-nowrap flex items-center gap-2">
          <Newspaper size={14} /> What's New
        </div>
        <div className="overflow-hidden whitespace-nowrap w-full flex items-center text-xs text-[#003366] font-medium px-4">
          <marquee behavior="scroll" direction="left" scrollamount="5" className="hover:underline cursor-pointer">
            <span className="mr-10">● DocuMind AI Engine v2.0 successfully deployed for automated policy extraction.</span>
            <span className="mr-10">● New intelligent skill-mapping module activated for the official workforce.</span>
            <span className="mr-10">● Training circular for Level-1 Statistical Officers released via AI Portal.</span>
          </marquee>
        </div>
      </div>

      {/* 🟢 5. HERO SECTION */}
      <main id="main-content" className="bg-[#FFFFFF] border-b border-gray-200">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 py-10 md:py-16 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          
          <div className="flex flex-col z-20">
            <div className="inline-block bg-[#EBF8FF] text-[#003366] text-[10px] font-bold px-3 py-1 rounded border border-[#90CDF4] uppercase tracking-wider mb-4 w-max">
              Digital Capacity Building Initiative
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-[#003366] mb-3 tracking-tight font-serif">
              DocuMind AI
            </h1>
            <h2 className="text-lg md:text-xl font-bold text-[#4A5568] mb-6 leading-snug">
              Transforming Official Documents into Measurable Workforce Capabilities.
            </h2>
            
            <p className="text-[#4A5568] text-sm leading-relaxed mb-8 max-w-lg text-justify">
              An AI-driven institutional platform designed to execute skill-gap analysis, map role-based competencies, and provide tailored learning recommendations for India's official statistical ecosystem.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4">
              <Link to="/login" className="w-full sm:w-auto bg-[#003366] hover:bg-[#002244] text-white px-8 py-3 rounded text-sm shadow-md font-bold transition-colors flex items-center justify-center gap-2 border-b-4 border-[#001122]">
                Access AI Platform <ArrowRight size={16} />
              </Link>
              <a href="#" className="w-full sm:w-auto px-8 py-3 rounded text-sm font-bold border border-[#CBD5E0] text-[#4A5568] hover:bg-[#F7FAFC] transition-colors flex items-center justify-center gap-2 bg-white">
                <BookOpen size={16} /> Platform Guidelines
              </a>
            </div>
          </div>

          {/* Graphic Area */}
          <div className="relative w-full h-[300px] md:h-[350px] flex items-center justify-end rounded-xl overflow-hidden border border-gray-200 shadow-sm bg-[#F8FAFC]">
            {/* Subtle architectural / abstract tech background */}
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1587474260584-136574528ed5?q=80&w=1200&auto=format&fit=crop')] bg-cover bg-center grayscale opacity-15 mix-blend-multiply"></div>
            
            <div className="relative z-10 w-full p-8 flex flex-col items-end text-right">
              <div className="bg-white/90 backdrop-blur-sm border-l-4 border-[#FF9933] p-5 shadow-lg rounded-sm max-w-sm">
                <h3 className="text-[#003366] font-bold text-lg mb-2">Empowering Digital India</h3>
                <p className="text-xs text-gray-600 font-medium">Bridging the gap between static knowledge and actionable public service capabilities through Artificial Intelligence.</p>
              </div>
            </div>
          </div>

        </div>
      </main>

      {/* 🟢 6. KEY FUNCTIONALITIES */}
      <section className="py-10 bg-[#F4F6F9]">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8">
          
          <div className="flex flex-col items-center mb-8">
            <h3 className="text-2xl font-bold text-[#003366] font-serif">Core AI Functional Modules</h3>
            <div className="w-16 h-1 bg-[#FF9933] mt-3"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            
            <div className="bg-white border-t-4 border-[#003366] shadow-sm p-6 hover:shadow-lg transition-all group">
              <div className="bg-[#EBF8FF] w-12 h-12 flex items-center justify-center rounded-full text-[#003366] mb-4 group-hover:scale-110 transition-transform">
                <Network size={24} />
              </div>
              <h4 className="font-bold text-[#1A202C] text-sm mb-2">Policy Extraction</h4>
              <p className="text-[12px] text-[#4A5568] leading-relaxed">Automated NLP parsing of PDF manuals, circulars, and frameworks into structured knowledge graphs.</p>
            </div>

            <div className="bg-white border-t-4 border-[#138808] shadow-sm p-6 hover:shadow-lg transition-all group">
              <div className="bg-[#F0FFF4] w-12 h-12 flex items-center justify-center rounded-full text-[#138808] mb-4 group-hover:scale-110 transition-transform">
                <BarChart2 size={24} />
              </div>
              <h4 className="font-bold text-[#1A202C] text-sm mb-2">Skill Gap Analysis</h4>
              <p className="text-[12px] text-[#4A5568] leading-relaxed">AI-driven evaluation comparing current employee skills against mandated role competencies.</p>
            </div>

            <div className="bg-white border-t-4 border-[#FF9933] shadow-sm p-6 hover:shadow-lg transition-all group">
              <div className="bg-[#FFF5F5] w-12 h-12 flex items-center justify-center rounded-full text-[#DD6B20] mb-4 group-hover:scale-110 transition-transform">
                <GraduationCap size={24} />
              </div>
              <h4 className="font-bold text-[#1A202C] text-sm mb-2">Adaptive Learning</h4>
              <p className="text-[12px] text-[#4A5568] leading-relaxed">Generation of customized training pathways to bridge identified institutional skill gaps.</p>
            </div>

            <div className="bg-white border-t-4 border-[#000000] shadow-sm p-6 hover:shadow-lg transition-all group">
              <div className="bg-[#F1F5F9] w-12 h-12 flex items-center justify-center rounded-full text-[#334155] mb-4 group-hover:scale-110 transition-transform">
                <BrainCircuit size={24} />
              </div>
              <h4 className="font-bold text-[#1A202C] text-sm mb-2">Intelligent Assessment</h4>
              <p className="text-[12px] text-[#4A5568] leading-relaxed">Real-time generation of MCQs and evaluation metrics directly from source documents.</p>
            </div>

          </div>
        </div>
      </section>

      {/* 🟢 7. ANNOUNCEMENTS & QUICK LINKS (Classic 2-Column Gov Pattern) */}
      <section className="py-10 bg-white border-t border-gray-200 flex-1">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Tenders / Announcements */}
            <div className="lg:col-span-2 border border-gray-200 rounded-sm overflow-hidden">
              <div className="bg-[#003366] px-4 py-2.5 flex justify-between items-center">
                <h3 className="font-bold text-white text-sm">Official Announcements & Circulars</h3>
                <a href="#" className="text-[10px] text-white hover:text-[#FF9933] uppercase font-bold tracking-wider">View All</a>
              </div>
              <div className="p-0 bg-white">
                <ul className="divide-y divide-gray-100">
                  <li className="p-4 hover:bg-[#F8FAFC] transition-colors flex gap-4 items-start">
                    <div className="bg-[#F1F5F9] text-[#003366] text-center px-3 py-1 rounded-sm border border-gray-200 shrink-0">
                      <span className="block text-lg font-bold">18</span>
                      <span className="block text-[10px] uppercase font-bold">Sep</span>
                    </div>
                    <div>
                      <a href="#" className="text-sm font-semibold text-[#1A202C] hover:text-[#003366] hover:underline">Notification regarding integration of DocuMind with existing HRMS portals.</a>
                      <p className="text-[11px] text-gray-500 mt-1 flex items-center gap-2"><FileText size={12}/> PDF (245 KB) <span className="bg-red-500 text-white px-1 py-0.5 text-[8px] rounded-sm animate-pulse">NEW</span></p>
                    </div>
                  </li>
                  <li className="p-4 hover:bg-[#F8FAFC] transition-colors flex gap-4 items-start">
                    <div className="bg-[#F1F5F9] text-[#003366] text-center px-3 py-1 rounded-sm border border-gray-200 shrink-0">
                      <span className="block text-lg font-bold">05</span>
                      <span className="block text-[10px] uppercase font-bold">Sep</span>
                    </div>
                    <div>
                      <a href="#" className="text-sm font-semibold text-[#1A202C] hover:text-[#003366] hover:underline">Guidelines for uploading division-wise training manuals to the AI engine.</a>
                      <p className="text-[11px] text-gray-500 mt-1 flex items-center gap-2"><FileText size={12}/> PDF (1.2 MB)</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            {/* Quick Links */}
            <div className="border border-gray-200 rounded-sm overflow-hidden bg-[#F8FAFC]">
              <div className="bg-[#003366] px-4 py-2.5">
                <h3 className="font-bold text-white text-sm">Important Links</h3>
              </div>
              <div className="p-2">
                <Link to="/login" className="flex items-center gap-3 p-3 border-b border-gray-200 hover:bg-white text-sm font-medium text-[#003366] transition-colors group">
                  <User size={16} className="text-[#FF9933]" /> Official Login Portal <ChevronRight size={14} className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity"/>
                </Link>
                <a href="#" className="flex items-center gap-3 p-3 border-b border-gray-200 hover:bg-white text-sm font-medium text-[#4A5568] hover:text-[#003366] transition-colors group">
                  <ExternalLink size={16} className="text-gray-400" /> MoSPI Official Website <ChevronRight size={14} className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity"/>
                </a>
                <a href="#" className="flex items-center gap-3 p-3 border-b border-gray-200 hover:bg-white text-sm font-medium text-[#4A5568] hover:text-[#003366] transition-colors group">
                  <HelpCircle size={16} className="text-gray-400" /> Platform FAQs & Support <ChevronRight size={14} className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity"/>
                </a>
                <a href="#" className="flex items-center gap-3 p-3 hover:bg-white text-sm font-medium text-[#4A5568] hover:text-[#003366] transition-colors group">
                  <Eye size={16} className="text-gray-400" /> Transparency & RTI <ChevronRight size={14} className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity"/>
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 🟢 8. ECOSYSTEM STRIP */}
      <section className="bg-white border-t border-gray-300 py-6">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8">
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16 grayscale opacity-70">
            <div className="text-xl font-black text-black">iGOT<span className="text-[#003366]">Karmayogi</span></div>
            <div className="hidden md:block w-px h-6 bg-gray-400"></div>
            <div className="flex items-center gap-2 font-bold text-sm"><Building2 size={20}/> NSSTA</div>
            <div className="hidden md:block w-px h-6 bg-gray-400"></div>
            <div className="font-extrabold text-lg text-black">Digital <span className="font-light">India</span></div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}