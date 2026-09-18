import React, { useState } from "react";
import { Link } from "react-router-dom";
import { 
  Search, ChevronDown, FileText, BarChart2, GraduationCap, 
  BrainCircuit, ChevronRight, User, BookOpen, HelpCircle, 
  Building2, ArrowRight, Volume2, Newspaper, ExternalLink, 
  Database, Network, UploadCloud, Cpu, CheckCircle2, TrendingUp, ShieldCheck
} from "lucide-react";
import Footer from "./Footer";

// Assets
import ashokaLogo from "../assets/ashoka.png";

export default function LandingPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#F4F6F9] text-[#333333] font-sans overflow-x-hidden flex flex-col">
      
      {/* 🟢 1. ACCESSIBILITY TOP BAR (Strict Gov Pattern) */}
      <div className="bg-[#1A202C] border-b border-gray-400 py-1.5 px-4 sm:px-8 text-[11px] sm:text-xs font-medium text-gray-300 flex flex-wrap justify-between items-center z-50 relative">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1 bg-white/10 px-2 py-0.5 rounded-sm">
            <span className="text-[#FF9933] font-bold leading-none">■</span>
            <span className="text-white font-bold leading-none">■</span>
            <span className="text-[#138808] font-bold leading-none">■</span>
          </div>
          <span className="tracking-wide text-gray-200">भारत सरकार | Government of India</span>
        </div>
        
        <div className="hidden md:flex items-center gap-4">
          <a href="#main-content" className="hover:text-white transition-colors">Skip to main content</a>
          <span className="text-gray-600">|</span>
          <button className="hover:text-white transition-colors flex items-center gap-1.5">
            <Volume2 size={14} /> Screen Reader Access
          </button>
          <span className="text-gray-600">|</span>
          <div className="flex items-center gap-1 font-bold">
            <button className="hover:text-white hover:bg-white/20 bg-black/40 px-1.5 py-0.5 rounded-sm transition-colors">A-</button>
            <button className="hover:text-white hover:bg-white/20 bg-black/40 px-1.5 py-0.5 rounded-sm text-white transition-colors">A</button>
            <button className="hover:text-white hover:bg-white/20 bg-black/40 px-1.5 py-0.5 rounded-sm transition-colors">A+</button>
          </div>
          <span className="text-gray-600">|</span>
          <button className="flex items-center gap-1 hover:text-[#003366] font-bold bg-[#EAEAEA] text-black px-2 py-0.5 rounded-sm shadow-inner">
            English <ChevronDown size={12}/>
          </button>
        </div>
      </div>

      {/* 🟢 2. OFFICIAL HEADER */}
      <header className="bg-white shadow-sm relative z-40 border-b border-gray-200">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 py-3 flex justify-between items-center">
          
          <div className="flex items-center gap-4 sm:gap-5">
            <img src={ashokaLogo} alt="National Emblem" className="h-16 sm:h-20 object-contain" />
            <div className="flex flex-col border-l-2 border-gray-300 pl-4 sm:pl-5">
              <span className="text-sm sm:text-lg font-bold text-[#000000] tracking-tight leading-tight font-serif">
                सांख्यिकी एवं कार्यक्रम कार्यान्वयन मंत्रालय
              </span>
              <span className="text-sm sm:text-lg font-bold text-[#003366] tracking-wide leading-tight uppercase mt-0.5">
                Ministry of Statistics & Programme Implementation
              </span>
            </div>
          </div>

          <div className="hidden lg:flex items-center gap-4 bg-[#F8FAFC] px-4 py-2 border border-gray-200 rounded-sm">
            <div className="flex flex-col text-right">
              <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Digital India Initiative</span>
              <span className="text-sm font-extrabold text-[#003366]">Data Intelligence Unit</span>
            </div>
            <div className="w-10 h-10 border border-gray-300 bg-white flex items-center justify-center text-[#003366] rounded-sm">
              <Database size={20} />
            </div>
          </div>

        </div>
      </header>

      {/* 🟢 3. PRIMARY NAVIGATION BAR */}
      <nav className="bg-[#002244] text-white sticky top-0 z-50 border-b-4 border-[#FF9933]">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 flex justify-between items-center h-12">
          
          <div className="hidden lg:flex items-center text-[13px] font-medium h-full">
            <a href="#" className="h-full flex items-center px-4 bg-[#001730] text-white font-bold border-t-2 border-[#FF9933]">Home</a>
            <a href="#" className="h-full flex items-center px-4 hover:bg-[#001730] border-t-2 border-transparent hover:border-gray-400 gap-1 transition-colors">About MoSPI <ChevronDown size={14}/></a>
            <a href="#" className="h-full flex items-center px-4 hover:bg-[#001730] border-t-2 border-transparent hover:border-gray-400 gap-1 transition-colors">DocuMind AI Portal <ChevronDown size={14}/></a>
            <a href="#" className="h-full flex items-center px-4 hover:bg-[#001730] border-t-2 border-transparent hover:border-gray-400 gap-1 transition-colors">Training & Skilling <ChevronDown size={14}/></a>
            <a href="#" className="h-full flex items-center px-4 hover:bg-[#001730] border-t-2 border-transparent hover:border-gray-400 transition-colors">Circulars</a>
            <a href="#" className="h-full flex items-center px-4 hover:bg-[#001730] border-t-2 border-transparent hover:border-gray-400 transition-colors">Contact Us</a>
          </div>

          <div className="flex items-center gap-4 w-full lg:w-auto justify-between lg:justify-end h-full py-2">
            <div className="hidden md:flex items-center bg-white border border-gray-400 overflow-hidden h-8 w-60">
              <input type="text" placeholder="Search MoSPI..." className="w-full h-full px-3 text-xs text-gray-800 outline-none" />
              <button className="h-full px-3 bg-[#E5E7EB] text-[#003366] hover:bg-gray-300 transition-colors"><Search size={14} /></button>
            </div>
            
            <Link to="/login" className="flex items-center gap-2 bg-[#E53E3E] hover:bg-[#C53030] text-white px-5 py-1.5 text-xs font-bold transition-colors uppercase tracking-wide rounded-sm shadow-sm h-8">
              <User size={14} /> Official Login
            </Link>
          </div>
        </div>
      </nav>

      {/* 🟢 4. WHAT'S NEW (Marquee) */}
      <div className="bg-white border-b border-gray-300 flex items-center">
        <div className="bg-[#FF9933] text-white text-xs font-bold px-4 py-2 uppercase whitespace-nowrap flex items-center gap-2 relative z-10">
          <Newspaper size={14} /> What's New
        </div>
        <div className="overflow-hidden whitespace-nowrap w-full flex items-center text-xs text-[#003366] font-medium px-4">
          <marquee behavior="scroll" direction="left" scrollamount="5" className="hover:underline cursor-pointer py-2">
            <span className="mr-12">■ DocuMind AI Engine v2.0 successfully deployed for automated policy extraction.</span>
            <span className="mr-12">■ New intelligent skill-mapping module activated for the official workforce.</span>
            <span className="mr-12">■ Training circular for Level-1 Statistical Officers released via AI Portal.</span>
          </marquee>
        </div>
      </div>

      {/* 🟢 5. STATIC & FORMAL HERO SECTION (With Real Image) */}
      <main id="main-content" className="bg-[#FFFFFF] border-b border-gray-300">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 py-10 md:py-14 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          
          <div className="flex flex-col">
            <div className="inline-block bg-[#F1F5F9] text-[#003366] text-[10px] font-bold px-3 py-1 border border-gray-300 uppercase tracking-widest mb-4 w-max">
              Digital Capacity Building Initiative
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-[#003366] mb-3 tracking-tight font-serif">
              DocuMind AI Portal
            </h1>
            <h2 className="text-lg md:text-xl font-bold text-gray-800 mb-5 leading-snug">
              Transforming Official Documents into Measurable Workforce Capabilities.
            </h2>
            
            <div className="w-16 h-1 bg-[#FF9933] mb-5"></div>

            <p className="text-gray-600 text-sm leading-relaxed mb-8 max-w-lg text-justify font-medium">
              An AI-driven institutional platform designed to execute skill-gap analysis, map role-based competencies, and provide tailored learning recommendations for India's official statistical ecosystem.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4">
              <Link to="/login" className="w-full sm:w-auto bg-[#003366] hover:bg-[#002244] text-white px-6 py-2.5 rounded-sm text-sm font-bold transition-colors flex items-center justify-center gap-2 border-b-2 border-[#001122]">
                Access Platform <ArrowRight size={16} />
              </Link>
              <a href="#" className="w-full sm:w-auto px-6 py-2.5 rounded-sm text-sm font-bold border border-gray-300 text-gray-700 hover:bg-gray-50 transition-colors flex items-center justify-center gap-2 bg-white">
                <BookOpen size={16} /> User Manual
              </a>
            </div>
          </div>

          {/* FORMAL REAL IMAGE BLOCK (NIC Style Banner) */}
          <div className="w-full">
            <div className="bg-white border border-gray-300 p-2 shadow-sm">
              <div className="relative h-[300px] w-full border border-gray-200 overflow-hidden">
                <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop" alt="AI Operations" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-[#003366]/20"></div> {/* Subtle dark tint for official look */}
              </div>
              <div className="bg-[#F8FAFC] border-t border-gray-200 px-4 py-3 flex justify-between items-center text-xs font-bold text-[#003366]">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-green-600"></span> Live AI Engine Status: <span className="text-green-600">Active</span>
                </div>
                <div>System Accuracy: 98.5%</div>
              </div>
            </div>
          </div>

        </div>
      </main>

      {/* 🟢 6. REALISTIC DASHBOARD PREVIEW (Flat Government Style) */}
      <section className="py-12 bg-[#F4F6F9] border-b border-gray-300">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8">
          <div className="mb-6 flex items-center gap-4">
            <h2 className="text-xl font-bold text-[#003366] font-serif">Platform Interface Preview</h2>
            <div className="flex-1 h-px bg-gray-300"></div>
          </div>
          
          <div className="bg-white border border-gray-300 shadow-sm p-3 rounded-sm">
            <div className="bg-[#E5E7EB] border border-gray-300 px-3 py-2 flex items-center gap-2 text-xs font-medium text-gray-600">
              <ShieldCheck size={14} className="text-gray-500" />
              <span>secure.mospi.gov.in / documind / dashboard</span>
            </div>
            <div className="border-x border-b border-gray-300">
              <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop" alt="Gov Dashboard Mockup" className="w-full h-auto max-h-[400px] object-cover object-top opacity-90" />
            </div>
          </div>
        </div>
      </section>

      {/* 🟢 7. CORE AI FUNCTIONAL MODULES (Flat Image Cards) */}
      <section className="py-12 bg-white">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8">
          
          <div className="flex flex-col items-center mb-10 text-center">
            <h3 className="text-2xl font-bold text-[#003366] font-serif">Key Functional Modules</h3>
            <div className="w-16 h-1 bg-[#FF9933] mt-3"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            <div className="bg-white border border-gray-300 shadow-sm rounded-sm overflow-hidden flex flex-col hover:border-[#003366] transition-colors">
              <div className="h-32 border-b border-gray-200 relative">
                <img src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=500&auto=format&fit=crop" className="w-full h-full object-cover" alt="Extraction" />
                <div className="absolute top-2 right-2 bg-white p-1.5 shadow-sm border border-gray-200 text-[#003366] rounded-sm">
                  <Network size={18} />
                </div>
              </div>
              <div className="p-4 flex-1 bg-[#F8FAFC]">
                <h4 className="font-bold text-[#1A202C] text-sm mb-2">Policy Extraction</h4>
                <p className="text-[12px] text-gray-600 leading-relaxed">Automated parsing of heavy PDF manuals into structured knowledge graphs.</p>
              </div>
            </div>

            <div className="bg-white border border-gray-300 shadow-sm rounded-sm overflow-hidden flex flex-col hover:border-[#138808] transition-colors">
              <div className="h-32 border-b border-gray-200 relative">
                <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=500&auto=format&fit=crop" className="w-full h-full object-cover" alt="Analysis" />
                <div className="absolute top-2 right-2 bg-white p-1.5 shadow-sm border border-gray-200 text-[#138808] rounded-sm">
                  <TrendingUp size={18} />
                </div>
              </div>
              <div className="p-4 flex-1 bg-[#F8FAFC]">
                <h4 className="font-bold text-[#1A202C] text-sm mb-2">Skill Gap Analysis</h4>
                <p className="text-[12px] text-gray-600 leading-relaxed">AI-driven evaluation comparing employee skills against role competencies.</p>
              </div>
            </div>

            <div className="bg-white border border-gray-300 shadow-sm rounded-sm overflow-hidden flex flex-col hover:border-[#FF9933] transition-colors">
              <div className="h-32 border-b border-gray-200 relative">
                <img src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=500&auto=format&fit=crop" className="w-full h-full object-cover" alt="Learning" />
                <div className="absolute top-2 right-2 bg-white p-1.5 shadow-sm border border-gray-200 text-[#DD6B20] rounded-sm">
                  <GraduationCap size={18} />
                </div>
              </div>
              <div className="p-4 flex-1 bg-[#F8FAFC]">
                <h4 className="font-bold text-[#1A202C] text-sm mb-2">Adaptive Learning</h4>
                <p className="text-[12px] text-gray-600 leading-relaxed">Customized training pathways automatically generated to bridge skill gaps.</p>
              </div>
            </div>

            <div className="bg-white border border-gray-300 shadow-sm rounded-sm overflow-hidden flex flex-col hover:border-gray-800 transition-colors">
              <div className="h-32 border-b border-gray-200 relative">
                <img src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=500&auto=format&fit=crop" className="w-full h-full object-cover" alt="Assessment" />
                <div className="absolute top-2 right-2 bg-white p-1.5 shadow-sm border border-gray-200 text-gray-800 rounded-sm">
                  <CheckCircle2 size={18} />
                </div>
              </div>
              <div className="p-4 flex-1 bg-[#F8FAFC]">
                <h4 className="font-bold text-[#1A202C] text-sm mb-2">Live Assessment</h4>
                <p className="text-[12px] text-gray-600 leading-relaxed">Real-time generation of MCQs directly from uploaded source documents.</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 🟢 8. ANNOUNCEMENTS & QUICK LINKS (Formal Split) */}
      <section className="py-10 bg-[#F4F6F9] border-t border-gray-300 flex-1">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            
            {/* Circulars */}
            <div className="lg:col-span-2 border border-gray-300 rounded-sm overflow-hidden bg-white shadow-sm">
              <div className="bg-[#003366] px-4 py-2.5 flex justify-between items-center border-b-2 border-[#FF9933]">
                <h3 className="font-bold text-white text-sm">Official Announcements & Circulars</h3>
                <a href="#" className="text-[11px] text-white hover:underline uppercase font-bold tracking-wider">View All</a>
              </div>
              <ul className="divide-y divide-gray-200">
                <li className="p-4 hover:bg-[#F8FAFC] transition-colors flex gap-4 items-start">
                  {/* Formal Document Thumbnail Image */}
                  <div className="w-16 h-16 shrink-0 border border-gray-300 shadow-sm relative p-1 bg-white">
                    <img src="https://images.unsplash.com/photo-1585829365295-ab7cd400c167?q=80&w=150&auto=format&fit=crop" className="w-full h-full object-cover opacity-90" alt="Document" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-[#1A202C] hover:text-[#003366] hover:underline mb-1 cursor-pointer">Notification regarding integration of DocuMind with existing HRMS portals across divisions.</h4>
                    <p className="text-[11px] text-gray-600 flex items-center gap-1.5"><FileText size={12}/> PDF (245 KB) | Published: 18 Sep 2026 <span className="bg-red-500 text-white px-1 py-0.5 text-[9px] font-bold rounded-sm animate-pulse ml-1">NEW</span></p>
                  </div>
                </li>
                <li className="p-4 hover:bg-[#F8FAFC] transition-colors flex gap-4 items-start">
                  <div className="w-16 h-16 shrink-0 border border-gray-300 shadow-sm relative p-1 bg-white">
                    <img src="https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=150&auto=format&fit=crop" className="w-full h-full object-cover opacity-90" alt="Document" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-[#1A202C] hover:text-[#003366] hover:underline mb-1 cursor-pointer">Guidelines for uploading and parsing division-wise training manuals to the AI engine.</h4>
                    <p className="text-[11px] text-gray-600 flex items-center gap-1.5"><FileText size={12}/> PDF (1.2 MB) | Published: 05 Sep 2026</p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Quick Links */}
            <div className="border border-gray-300 rounded-sm overflow-hidden bg-white shadow-sm">
              <div className="bg-[#003366] px-4 py-2.5 border-b-2 border-[#FF9933]">
                <h3 className="font-bold text-white text-sm">Important Links</h3>
              </div>
              <div className="p-2">
                <Link to="/login" className="flex items-center gap-3 p-3 border-b border-gray-200 hover:bg-[#F8FAFC] text-sm font-bold text-[#003366] transition-colors group">
                  <User size={16} className="text-[#FF9933]" /> Official Login Portal 
                  <ChevronRight size={14} className="ml-auto text-gray-400 group-hover:text-[#003366]"/>
                </Link>
                <a href="#" className="flex items-center gap-3 p-3 border-b border-gray-200 hover:bg-[#F8FAFC] text-sm font-medium text-[#4A5568] hover:text-[#003366] transition-colors group">
                  <ExternalLink size={16} className="text-gray-400 group-hover:text-[#003366]" /> MoSPI Official Website 
                  <ChevronRight size={14} className="ml-auto text-gray-400 group-hover:text-[#003366]"/>
                </a>
                <a href="#" className="flex items-center gap-3 p-3 hover:bg-[#F8FAFC] text-sm font-medium text-[#4A5568] hover:text-[#003366] transition-colors group">
                  <HelpCircle size={16} className="text-gray-400 group-hover:text-[#003366]" /> Platform FAQs & Support 
                  <ChevronRight size={14} className="ml-auto text-gray-400 group-hover:text-[#003366]"/>
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 🟢 9. ECOSYSTEM STRIP (Exact Match to screenshot) */}
      <section className="bg-white border-t-2 border-gray-200 py-6">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8">
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16 grayscale opacity-80">
            <div className="text-2xl font-black text-[#555] tracking-tight">iGOT<span className="text-[#888]">Karmayogi</span></div>
            <div className="hidden md:block w-px h-8 bg-gray-300"></div>
            <div className="flex items-center gap-2 font-extrabold text-[#666] text-lg"><Building2 size={24}/> NSSTA</div>
            <div className="hidden md:block w-px h-8 bg-gray-300"></div>
            <div className="font-extrabold text-2xl text-[#666]">Digital <span className="font-light text-[#999]">India</span></div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}