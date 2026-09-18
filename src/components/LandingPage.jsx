import React, { useState } from "react";
import { Link } from "react-router-dom";
import { 
  Search, ChevronDown, FileText, BarChart2, GraduationCap, 
  BrainCircuit, ChevronRight, User, BookOpen, HelpCircle, 
  Building2, ArrowRight, Volume2, Newspaper, ExternalLink, 
  Database, Network, UploadCloud, Cpu, CheckCircle2, TrendingUp, ShieldCheck, PlayCircle
} from "lucide-react";
import Footer from "./Footer";

// Assets
import ashokaLogo from "../assets/ashoka.png";

export default function LandingPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#F4F6F9] text-[#333333] font-sans overflow-x-hidden flex flex-col selection:bg-[#FF9933] selection:text-white">
      
      {/* 🟢 1. ACCESSIBILITY TOP BAR */}
      <div className="bg-[#1A202C] border-b border-gray-700 py-1.5 px-4 sm:px-8 text-[11px] sm:text-xs font-medium text-gray-300 flex flex-wrap justify-between items-center z-50 relative shadow-sm">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1 bg-white/10 px-2 py-0.5 rounded backdrop-blur-sm">
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
            <button className="hover:text-white hover:bg-white/20 bg-black/40 px-1.5 py-0.5 rounded transition-colors">A-</button>
            <button className="hover:text-white hover:bg-white/20 bg-black/40 px-1.5 py-0.5 rounded text-white transition-colors">A</button>
            <button className="hover:text-white hover:bg-white/20 bg-black/40 px-1.5 py-0.5 rounded transition-colors">A+</button>
          </div>
          <span className="text-gray-600">|</span>
          <button className="flex items-center gap-1 hover:text-[#003366] font-bold bg-white text-black px-2 py-0.5 rounded shadow-sm">
            English <ChevronDown size={12}/>
          </button>
        </div>
      </div>

      {/* 🟢 2. OFFICIAL HEADER */}
      <header className="bg-white shadow-sm relative z-40">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 py-4 flex justify-between items-center">
          
          <div className="flex items-center gap-4 sm:gap-6">
            <img src={ashokaLogo} alt="National Emblem" className="h-16 sm:h-20 object-contain drop-shadow-md hover:scale-105 transition-transform duration-500" />
            <div className="flex flex-col border-l-2 border-gray-200 pl-4 sm:pl-6">
              <span className="text-sm sm:text-xl font-bold text-[#000000] tracking-tight leading-tight font-serif">
                सांख्यिकी एवं कार्यक्रम कार्यान्वयन मंत्रालय
              </span>
              <span className="text-sm sm:text-lg font-bold text-[#003366] tracking-wide leading-tight uppercase mt-1">
                Ministry of Statistics & Programme Implementation
              </span>
            </div>
          </div>

          <div className="hidden lg:flex items-center gap-4 bg-[#F8FAFC] px-4 py-2 rounded-xl border border-gray-100 shadow-inner">
            <div className="flex flex-col text-right">
              <span className="text-[11px] font-bold text-gray-500 uppercase tracking-widest">Digital India Initiative</span>
              <span className="text-sm font-extrabold text-[#003366]">Data Intelligence Unit</span>
            </div>
            <div className="w-12 h-12 rounded-full bg-white shadow-sm border border-gray-200 flex items-center justify-center text-[#003366]">
              <Database size={24} />
            </div>
          </div>

        </div>
      </header>

      {/* 🟢 3. PRIMARY NAVIGATION BAR */}
      <nav className="bg-[#002244] text-white shadow-lg sticky top-0 z-50 border-b-4 border-[#FF9933]">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 flex justify-between items-center h-14">
          
          <div className="hidden lg:flex items-center text-[13px] font-medium h-full">
            <a href="#" className="h-full flex items-center px-5 bg-white/10 text-white font-bold border-b-4 border-[#FF9933] transition-all">Home</a>
            <a href="#" className="h-full flex items-center px-5 hover:bg-white/10 border-b-4 border-transparent hover:border-white/50 gap-1.5 transition-all">About MoSPI <ChevronDown size={14}/></a>
            <a href="#" className="h-full flex items-center px-5 hover:bg-white/10 border-b-4 border-transparent hover:border-white/50 gap-1.5 transition-all">DocuMind AI Portal <ChevronDown size={14}/></a>
            <a href="#" className="h-full flex items-center px-5 hover:bg-white/10 border-b-4 border-transparent hover:border-white/50 gap-1.5 transition-all">Training & Skilling <ChevronDown size={14}/></a>
            <a href="#" className="h-full flex items-center px-5 hover:bg-white/10 border-b-4 border-transparent hover:border-white/50 transition-all">Circulars</a>
            <a href="#" className="h-full flex items-center px-5 hover:bg-white/10 border-b-4 border-transparent hover:border-white/50 transition-all">Contact Us</a>
          </div>

          <div className="flex items-center gap-5 w-full lg:w-auto justify-between lg:justify-end h-full py-2">
            <div className="hidden md:flex items-center bg-[#001730] rounded-md overflow-hidden h-9 w-64 border border-[#003366] focus-within:border-gray-400 transition-all group">
              <input type="text" placeholder="Search MoSPI..." className="w-full h-full px-3 text-sm text-white outline-none bg-transparent placeholder-gray-400" />
              <button className="h-full px-4 text-gray-400 hover:text-white transition-colors"><Search size={16} /></button>
            </div>
            
            <Link to="/login" className="flex items-center gap-2 bg-[#E53E3E] hover:bg-red-600 text-white px-6 py-2 rounded text-xs font-bold transition-all shadow-md shadow-red-900/50 hover:shadow-lg uppercase tracking-wider">
              <User size={16} /> Official Login
            </Link>
          </div>
        </div>
      </nav>

      {/* 🟢 4. WHAT'S NEW (Marquee) */}
      <div className="bg-white border-b border-gray-200 shadow-sm flex items-center">
        <div className="bg-[#FF9933] text-white text-xs font-bold px-5 py-2.5 uppercase whitespace-nowrap flex items-center gap-2 relative z-10 shadow-[5px_0_10px_rgba(0,0,0,0.1)]">
          <Newspaper size={16} /> What's New
        </div>
        <div className="overflow-hidden whitespace-nowrap w-full flex items-center text-xs text-[#003366] font-medium px-4">
          <marquee behavior="scroll" direction="left" scrollamount="6" className="hover:underline cursor-pointer py-2.5">
            <span className="mr-12">🚀 DocuMind AI Engine v2.0 successfully deployed for automated policy extraction.</span>
            <span className="mr-12">📄 New intelligent skill-mapping module activated for the official workforce.</span>
            <span className="mr-12">🎓 Training circular for Level-1 Statistical Officers released via AI Portal.</span>
          </marquee>
        </div>
      </div>

      {/* 🟢 5. DYNAMIC REAL-IMAGE HERO SECTION */}
      <main id="main-content" className="relative bg-[#FFFFFF] border-b border-gray-200 overflow-hidden">
        <div className="relative max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 py-12 md:py-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <div className="flex flex-col z-20 pr-0 lg:pr-10">
            <div className="inline-flex items-center gap-2 bg-[#EBF8FF] text-[#003366] text-xs font-bold px-4 py-1.5 rounded-full border border-blue-200 uppercase tracking-widest mb-6 w-max shadow-sm">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#003366]"></span>
              </span>
              Next-Gen Capacity Building
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#003366] mb-4 tracking-tight font-serif leading-tight">
              Docu<span className="text-[#FF9933]">Mind</span> AI
            </h1>
            <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-6 leading-snug">
              Transforming Official Documents into <br/>
              <span className="text-[#138808]">Measurable Workforce Capabilities.</span>
            </h2>
            
            <p className="text-gray-600 text-base leading-relaxed mb-8 max-w-lg font-medium">
              An AI-driven institutional platform designed to execute skill-gap analysis, map role-based competencies, and provide tailored learning recommendations for India's official statistical ecosystem.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4">
              <Link to="/login" className="w-full sm:w-auto bg-[#003366] hover:bg-[#001f3f] text-white px-8 py-3.5 rounded-lg text-sm shadow-xl shadow-blue-900/20 font-bold transition-all hover:-translate-y-1 flex items-center justify-center gap-2">
                Launch AI Platform <ArrowRight size={18} />
              </Link>
              <button className="w-full sm:w-auto px-8 py-3.5 rounded-lg text-sm font-bold border-2 border-gray-200 text-gray-700 hover:border-[#003366] hover:text-[#003366] transition-all flex items-center justify-center gap-2 group">
                <PlayCircle size={18} className="group-hover:text-[#FF9933] transition-colors" /> Watch Demo
              </button>
            </div>
          </div>

          {/* REAL IMAGE VISUALIZATION */}
          <div className="relative w-full h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-2xl group border-[6px] border-white">
            {/* Real Unsplash Image (Office/Data center concept) */}
            <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop" alt="AI Data Dashboard" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            
            {/* Gradient Overlay to make text pop */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#001730] via-[#003366]/40 to-transparent"></div>
            
            {/* Floating UI Elements (Makes it Zinda!) */}
            <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end">
              <div className="bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-xl shadow-2xl text-white max-w-[200px] animate-[bounce_4s_infinite]">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-gray-300">Live Analysis</span>
                </div>
                <h3 className="text-xl font-bold">98.5%</h3>
                <p className="text-xs text-gray-300">Data Extraction Accuracy</p>
              </div>

              <div className="bg-white/90 backdrop-blur-md border-l-4 border-[#FF9933] p-5 shadow-2xl rounded-xl max-w-[220px] hover:-translate-y-2 transition-transform duration-300 cursor-pointer">
                <div className="bg-[#EBF8FF] w-10 h-10 flex items-center justify-center rounded-full text-[#003366] mb-3">
                  <BrainCircuit size={20} />
                </div>
                <h3 className="text-[#003366] font-extrabold text-sm mb-1">Knowledge Graph</h3>
                <p className="text-[11px] text-gray-600 font-semibold leading-relaxed">Mapping roles to training modules instantly.</p>
              </div>
            </div>
          </div>

        </div>
      </main>

      {/* 🟢 6. NEW: AI PLATFORM PREVIEW (Full Width Image Section) */}
      <section className="py-16 bg-[#001730] relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 relative z-10 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white font-serif mb-4">A Glimpse into the Future of Governance</h2>
          <p className="text-blue-200 text-sm md:text-base max-w-2xl mx-auto mb-10">Experience a unified dashboard that converts heavy government PDFs into interactive learning pathways and competency scores.</p>
          
          {/* Mockup Container with Real Image */}
          <div className="relative mx-auto max-w-5xl rounded-t-2xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] border-t-[8px] border-l-[8px] border-r-[8px] border-gray-800 bg-gray-900 group">
            {/* Fake Browser Mac/Windows Header */}
            <div className="bg-gray-800 px-4 py-3 flex items-center gap-2 border-b border-gray-700">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
              <div className="ml-4 bg-gray-700 text-xs text-gray-400 px-4 py-1 rounded-md w-full max-w-sm flex items-center gap-2">
                <ShieldCheck size={12}/> secure.mospi.gov.in/documind
              </div>
            </div>
            {/* Real Dashboard Image */}
            <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop" alt="Dashboard Interface" className="w-full h-auto opacity-80 group-hover:opacity-100 transition-opacity duration-500 mix-blend-luminosity hover:mix-blend-normal" />
            
            {/* Gradient Fade out at bottom to blend with next section */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#001730] to-transparent"></div>
          </div>
        </div>
      </section>

      {/* 🟢 7. CORE AI FUNCTIONAL MODULES (With Image Cards) */}
      <section className="py-20 bg-white border-t border-gray-200">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8">
          
          <div className="flex flex-col items-center mb-12 text-center">
            <h3 className="text-3xl md:text-4xl font-extrabold text-[#003366] font-serif">Intelligent Processing Modules</h3>
            <div className="w-24 h-1.5 bg-gradient-to-r from-[#003366] to-[#FF9933] mx-auto mt-5 rounded-full"></div>
            <p className="text-gray-500 mt-4 max-w-xl text-sm">Powered by advanced NLP and Machine Learning to streamline government workflows.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            <div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden hover:-translate-y-2 transition-transform duration-300 group">
              <div className="h-32 overflow-hidden relative">
                <img src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=500&auto=format&fit=crop" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt="Extraction" />
                <div className="absolute inset-0 bg-[#003366]/60"></div>
                <Network size={32} className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white" />
              </div>
              <div className="p-6">
                <h4 className="font-extrabold text-gray-900 text-lg mb-2">Policy Extraction</h4>
                <p className="text-sm text-gray-500 leading-relaxed font-medium">Automated parsing of heavy PDF manuals into structured knowledge graphs.</p>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden hover:-translate-y-2 transition-transform duration-300 group">
              <div className="h-32 overflow-hidden relative">
                <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=500&auto=format&fit=crop" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt="Analysis" />
                <div className="absolute inset-0 bg-[#138808]/60"></div>
                <TrendingUp size={32} className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white" />
              </div>
              <div className="p-6">
                <h4 className="font-extrabold text-gray-900 text-lg mb-2">Skill Gap Analysis</h4>
                <p className="text-sm text-gray-500 leading-relaxed font-medium">AI-driven evaluation comparing employee skills against role competencies.</p>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden hover:-translate-y-2 transition-transform duration-300 group">
              <div className="h-32 overflow-hidden relative">
                <img src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=500&auto=format&fit=crop" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt="Learning" />
                <div className="absolute inset-0 bg-[#FF9933]/70"></div>
                <GraduationCap size={32} className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white" />
              </div>
              <div className="p-6">
                <h4 className="font-extrabold text-gray-900 text-lg mb-2">Adaptive Learning</h4>
                <p className="text-sm text-gray-500 leading-relaxed font-medium">Customized training pathways automatically generated to bridge skill gaps.</p>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden hover:-translate-y-2 transition-transform duration-300 group">
              <div className="h-32 overflow-hidden relative">
                <img src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=500&auto=format&fit=crop" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt="Assessment" />
                <div className="absolute inset-0 bg-gray-800/60"></div>
                <CheckCircle2 size={32} className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white" />
              </div>
              <div className="p-6">
                <h4 className="font-extrabold text-gray-900 text-lg mb-2">Live Assessment</h4>
                <p className="text-sm text-gray-500 leading-relaxed font-medium">Real-time generation of MCQs directly from uploaded source documents.</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 🟢 8. REALISTIC NEWS & QUICK LINKS */}
      <section className="py-12 bg-[#F8FAFC] border-t border-gray-200 flex-1">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            
            {/* Circulars (Now with Image Thumbnails) */}
            <div className="lg:col-span-2 border border-gray-200 rounded-lg overflow-hidden shadow-sm bg-white">
              <div className="bg-[#003366] px-5 py-3.5 flex justify-between items-center">
                <h3 className="font-bold text-white text-base">Latest Circulars & Notifications</h3>
                <a href="#" className="text-xs text-blue-200 hover:text-white uppercase font-bold tracking-wider transition-colors">View All</a>
              </div>
              <ul className="divide-y divide-gray-100">
                <li className="p-5 hover:bg-blue-50 transition-colors flex gap-5 items-start group cursor-pointer">
                  {/* Real Document Thumbnail Image */}
                  <div className="w-20 h-20 shrink-0 rounded-md overflow-hidden border border-gray-200 shadow-sm relative">
                    <img src="https://images.unsplash.com/photo-1585829365295-ab7cd400c167?q=80&w=150&auto=format&fit=crop" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" alt="News" />
                    <div className="absolute bottom-0 left-0 right-0 bg-[#003366]/90 text-white text-[10px] font-bold text-center py-0.5">18 SEP</div>
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-gray-900 group-hover:text-[#003366] transition-colors mb-1.5 leading-snug">Notification regarding integration of DocuMind with existing HRMS portals across divisions.</h4>
                    <p className="text-xs text-gray-500 flex items-center gap-2 font-medium"><FileText size={14} className="text-red-500"/> PDF Download (245 KB) <span className="bg-red-500 text-white px-1.5 py-0.5 text-[9px] rounded-sm animate-pulse">NEW</span></p>
                  </div>
                </li>
                <li className="p-5 hover:bg-blue-50 transition-colors flex gap-5 items-start group cursor-pointer">
                  <div className="w-20 h-20 shrink-0 rounded-md overflow-hidden border border-gray-200 shadow-sm relative">
                    <img src="https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=150&auto=format&fit=crop" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" alt="News" />
                    <div className="absolute bottom-0 left-0 right-0 bg-gray-800/90 text-white text-[10px] font-bold text-center py-0.5">05 SEP</div>
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-gray-900 group-hover:text-[#003366] transition-colors mb-1.5 leading-snug">Guidelines for uploading and parsing division-wise training manuals to the AI engine.</h4>
                    <p className="text-xs text-gray-500 flex items-center gap-2 font-medium"><FileText size={14} className="text-red-500"/> PDF Download (1.2 MB)</p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Quick Links */}
            <div className="border border-gray-200 rounded-lg overflow-hidden shadow-sm bg-white">
              <div className="bg-[#003366] px-5 py-3.5">
                <h3 className="font-bold text-white text-base">Important Links</h3>
              </div>
              <div className="p-3">
                <Link to="/login" className="flex items-center gap-4 p-4 border-b border-gray-100 hover:bg-blue-50 rounded-t-md text-sm font-bold text-[#003366] transition-colors group shadow-sm hover:shadow-md">
                  <div className="bg-orange-100 p-2 rounded text-[#FF9933]"><User size={18} /></div>
                  Official Login Portal 
                  <ChevronRight size={16} className="ml-auto transform group-hover:translate-x-1 transition-transform"/>
                </Link>
                <a href="#" className="flex items-center gap-4 p-4 border-b border-gray-100 hover:bg-gray-50 text-sm font-semibold text-gray-700 hover:text-[#003366] transition-colors group">
                  <div className="bg-gray-100 p-2 rounded text-gray-500 group-hover:bg-blue-100 group-hover:text-[#003366] transition-colors"><ExternalLink size={18} /></div>
                  MoSPI Official Website 
                  <ChevronRight size={16} className="ml-auto opacity-0 group-hover:opacity-100 transform group-hover:translate-x-1 transition-all"/>
                </a>
                <a href="#" className="flex items-center gap-4 p-4 hover:bg-gray-50 text-sm font-semibold text-gray-700 hover:text-[#003366] transition-colors group">
                  <div className="bg-gray-100 p-2 rounded text-gray-500 group-hover:bg-blue-100 group-hover:text-[#003366] transition-colors"><HelpCircle size={18} /></div>
                  Platform FAQs & Support 
                  <ChevronRight size={16} className="ml-auto opacity-0 group-hover:opacity-100 transform group-hover:translate-x-1 transition-all"/>
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 🟢 9. ECOSYSTEM STRIP (Aligned with user screenshot) */}
      <section className="bg-white border-t-2 border-gray-200 py-8">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8">
          <div className="flex flex-wrap items-center justify-center gap-10 md:gap-24 grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-700">
            <div className="text-3xl font-black text-gray-600 tracking-tight">iGOT<span className="text-gray-400">Karmayogi</span></div>
            <div className="hidden md:block w-px h-10 bg-gray-300"></div>
            <div className="flex items-center gap-2 font-extrabold text-gray-500 text-xl"><Building2 size={28}/> NSSTA</div>
            <div className="hidden md:block w-px h-10 bg-gray-300"></div>
            <div className="font-extrabold text-3xl text-gray-500">Digital <span className="font-light text-gray-400">India</span></div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}