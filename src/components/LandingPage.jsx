import React, { useState } from "react";
import { Link } from "react-router-dom";
import { 
  Search, ChevronDown, FileText, BarChart2, GraduationCap, 
  BrainCircuit, ChevronRight, User, BookOpen, HelpCircle, Phone, 
  Building2, ArrowRight, Volume2, Newspaper, ExternalLink, Eye, 
  Database, Network, UploadCloud, Cpu, CheckCircle2, TrendingUp, ShieldCheck
} from "lucide-react";
import Footer from "./Footer";

// Assets
import ashokaLogo from "../assets/ashoka.png";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[#F8FAFC] text-[#333333] font-sans overflow-x-hidden flex flex-col selection:bg-[#003366] selection:text-white">
      
      {/* 🟢 1. ACCESSIBILITY TOP BAR */}
      <div className="bg-[#1E293B] border-b border-gray-700 py-1.5 px-4 sm:px-8 text-[11px] sm:text-xs font-medium text-gray-300 flex flex-wrap justify-between items-center z-50 relative">
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

          <div className="hidden lg:flex items-center gap-4 bg-[#F0F4F8] px-4 py-2 rounded-xl border border-blue-100 shadow-inner">
            <div className="flex flex-col text-right">
              <span className="text-[11px] font-bold text-gray-500 uppercase tracking-widest">Digital India Initiative</span>
              <span className="text-sm font-extrabold bg-gradient-to-r from-[#003366] to-blue-600 bg-clip-text text-transparent">
                Data Intelligence Unit
              </span>
            </div>
            <div className="w-12 h-12 rounded-full bg-white shadow-sm border border-blue-100 flex items-center justify-center text-[#003366]">
              <Database size={24} />
            </div>
          </div>

        </div>
      </header>

      {/* 🟢 3. PRIMARY NAVIGATION BAR */}
      <nav className="bg-gradient-to-r from-[#002244] via-[#003366] to-[#002244] text-white shadow-lg sticky top-0 z-50 border-b-4 border-[#FF9933]">
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
            <div className="hidden md:flex items-center bg-white/10 rounded-md overflow-hidden h-9 w-64 border border-white/20 focus-within:bg-white focus-within:border-white transition-all group">
              <input type="text" placeholder="Search MoSPI..." className="w-full h-full px-3 text-sm text-gray-800 outline-none bg-transparent group-focus-within:bg-white placeholder-gray-300 group-focus-within:placeholder-gray-500" />
              <button className="h-full px-4 text-white group-focus-within:text-[#003366] hover:bg-white/20 group-focus-within:hover:bg-gray-100 transition-colors"><Search size={16} /></button>
            </div>
            
            <Link to="/login" className="flex items-center gap-2 bg-[#E53E3E] hover:bg-red-700 text-white px-6 py-2 rounded text-xs font-bold transition-all shadow-md shadow-red-900/50 hover:shadow-lg hover:-translate-y-0.5 uppercase tracking-wider">
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

      {/* 🟢 5. DYNAMIC HERO SECTION */}
      <main id="main-content" className="relative bg-white border-b border-gray-200 overflow-hidden">
        {/* Abstract Background Elements */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-blue-100 via-white to-transparent opacity-50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-orange-50 via-white to-transparent opacity-60 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3"></div>

        <div className="relative max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 py-16 md:py-24 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <div className="flex flex-col z-20">
            <div className="inline-flex items-center gap-2 bg-[#F0F7FF] text-[#003366] text-xs font-bold px-4 py-1.5 rounded-full border border-blue-200 uppercase tracking-widest mb-6 w-max shadow-sm hover:shadow-md transition-shadow">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#003366]"></span>
              </span>
              Digital Capacity Building Initiative
            </div>
            
            <h1 className="text-5xl md:text-6xl font-extrabold text-[#003366] mb-4 tracking-tight font-serif leading-tight">
              Docu<span className="text-[#FF9933]">Mind</span> AI
            </h1>
            <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-6 leading-snug">
              Transforming Official Documents into <br/>
              <span className="bg-gradient-to-r from-[#003366] to-blue-500 bg-clip-text text-transparent">Measurable Workforce Capabilities.</span>
            </h2>
            
            <p className="text-gray-600 text-base leading-relaxed mb-10 max-w-lg text-justify font-medium">
              An AI-driven institutional platform designed to execute skill-gap analysis, map role-based competencies, and provide tailored learning recommendations for India's official statistical ecosystem.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4">
              <Link to="/login" className="w-full sm:w-auto bg-[#003366] hover:bg-[#001f3f] text-white px-8 py-3.5 rounded-lg text-sm shadow-lg shadow-blue-900/20 font-bold transition-all hover:-translate-y-1 flex items-center justify-center gap-2">
                Access AI Platform <ArrowRight size={18} />
              </Link>
              <a href="#" className="w-full sm:w-auto px-8 py-3.5 rounded-lg text-sm font-bold border-2 border-gray-200 text-gray-700 hover:border-[#003366] hover:text-[#003366] hover:bg-blue-50 transition-all flex items-center justify-center gap-2">
                <BookOpen size={18} /> Platform Guidelines
              </a>
            </div>
          </div>

          {/* Graphic Area with Floating Animation */}
          <div className="relative w-full h-[350px] md:h-[450px] flex items-center justify-end rounded-2xl overflow-hidden border border-gray-100 shadow-2xl bg-gradient-to-tr from-[#F8FAFC] to-white group">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1587474260584-136574528ed5?q=80&w=1200&auto=format&fit=crop')] bg-cover bg-center grayscale opacity-10 mix-blend-multiply transition-transform duration-1000 group-hover:scale-105"></div>
            
            {/* Floating Glassmorphism Card */}
            <div className="relative z-10 p-8 flex flex-col items-end text-right w-full animate-[bounce_4s_infinite]">
              <div className="bg-white/80 backdrop-blur-md border-l-4 border-[#FF9933] p-6 shadow-xl rounded-xl max-w-sm border-t border-r border-b border-white/50">
                <div className="bg-[#EBF8FF] w-12 h-12 flex items-center justify-center rounded-full text-[#003366] mb-4 ml-auto">
                  <BrainCircuit size={24} />
                </div>
                <h3 className="text-[#003366] font-extrabold text-xl mb-2">Empowering Digital India</h3>
                <p className="text-sm text-gray-600 font-semibold leading-relaxed">Bridging the gap between static knowledge and actionable public service capabilities through Artificial Intelligence.</p>
              </div>
            </div>
          </div>

        </div>
      </main>

      {/* 🟢 6. NEW: IMPACT STATISTICS */}
      <section className="py-12 bg-[#003366] text-white border-b-4 border-[#FF9933] relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-white/20">
            <div className="flex flex-col items-center justify-center hover:-translate-y-1 transition-transform">
              <span className="text-4xl md:text-5xl font-black mb-2 text-[#FF9933]">10K+</span>
              <span className="text-xs md:text-sm font-medium uppercase tracking-wider text-blue-200">Policies Parsed</span>
            </div>
            <div className="flex flex-col items-center justify-center hover:-translate-y-1 transition-transform">
              <span className="text-4xl md:text-5xl font-black mb-2 text-white">50+</span>
              <span className="text-xs md:text-sm font-medium uppercase tracking-wider text-blue-200">Ministries Covered</span>
            </div>
            <div className="flex flex-col items-center justify-center hover:-translate-y-1 transition-transform">
              <span className="text-4xl md:text-5xl font-black mb-2 text-[#138808]">98%</span>
              <span className="text-xs md:text-sm font-medium uppercase tracking-wider text-blue-200">AI Accuracy</span>
            </div>
            <div className="flex flex-col items-center justify-center hover:-translate-y-1 transition-transform">
              <span className="text-4xl md:text-5xl font-black mb-2 text-white">1M+</span>
              <span className="text-xs md:text-sm font-medium uppercase tracking-wider text-blue-200">Workforce Mapped</span>
            </div>
          </div>
        </div>
      </section>

      {/* 🟢 7. NEW: HOW IT WORKS (Workflow) */}
      <section className="py-16 bg-white border-b border-gray-100">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8">
          
          <div className="text-center mb-12">
            <h3 className="text-sm font-bold text-[#FF9933] uppercase tracking-widest mb-2">The Architecture</h3>
            <h2 className="text-3xl font-extrabold text-[#003366] font-serif">Intelligent Workflow Engine</h2>
            <div className="w-20 h-1.5 bg-gradient-to-r from-[#003366] to-[#FF9933] mx-auto mt-4 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {/* Connecting Line for Desktop */}
            <div className="hidden md:block absolute top-1/2 left-[15%] right-[15%] h-0.5 bg-gradient-to-r from-gray-200 via-blue-200 to-gray-200 -translate-y-1/2 z-0"></div>

            {/* Step 1 */}
            <div className="relative z-10 flex flex-col items-center text-center group">
              <div className="w-20 h-20 bg-white rounded-2xl shadow-lg border border-gray-100 flex items-center justify-center text-[#003366] mb-6 group-hover:bg-[#003366] group-hover:text-white transition-all duration-300 group-hover:-translate-y-2 group-hover:shadow-xl">
                <UploadCloud size={36} />
              </div>
              <h4 className="text-lg font-bold text-gray-800 mb-2">1. Data Ingestion</h4>
              <p className="text-sm text-gray-500 px-4">Upload official PDF manuals, guidelines, and circulars securely into the MoSPI cloud.</p>
            </div>

            {/* Step 2 */}
            <div className="relative z-10 flex flex-col items-center text-center group">
              <div className="w-20 h-20 bg-white rounded-2xl shadow-lg border border-gray-100 flex items-center justify-center text-[#FF9933] mb-6 group-hover:bg-[#FF9933] group-hover:text-white transition-all duration-300 group-hover:-translate-y-2 group-hover:shadow-xl">
                <Cpu size={36} />
              </div>
              <h4 className="text-lg font-bold text-gray-800 mb-2">2. AI Processing</h4>
              <p className="text-sm text-gray-500 px-4">NLP engine automatically extracts competencies, roles, and generates Knowledge Graphs.</p>
            </div>

            {/* Step 3 */}
            <div className="relative z-10 flex flex-col items-center text-center group">
              <div className="w-20 h-20 bg-white rounded-2xl shadow-lg border border-gray-100 flex items-center justify-center text-[#138808] mb-6 group-hover:bg-[#138808] group-hover:text-white transition-all duration-300 group-hover:-translate-y-2 group-hover:shadow-xl">
                <ShieldCheck size={36} />
              </div>
              <h4 className="text-lg font-bold text-gray-800 mb-2">3. Actionable Mapping</h4>
              <p className="text-sm text-gray-500 px-4">Instant skill-gap reports and personalized learning recommendations are deployed.</p>
            </div>
          </div>

        </div>
      </section>

      {/* 🟢 8. CORE FUNCTIONAL MODULES (Upgraded Cards) */}
      <section className="py-16 bg-[#F8FAFC]">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8">
          
          <div className="flex flex-col items-center mb-12">
            <h3 className="text-3xl font-extrabold text-[#003366] font-serif">Core AI Functional Modules</h3>
            <div className="w-20 h-1.5 bg-[#FF9933] mx-auto mt-4 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Card 1 */}
            <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-8 hover:shadow-2xl hover:shadow-blue-900/10 transition-all duration-300 group relative overflow-hidden flex flex-col">
              <div className="absolute top-0 left-0 w-full h-1 bg-[#003366] transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
              <div className="bg-blue-50 w-14 h-14 flex items-center justify-center rounded-xl text-[#003366] mb-6 group-hover:scale-110 group-hover:bg-[#003366] group-hover:text-white transition-all duration-300">
                <Network size={28} />
              </div>
              <h4 className="font-extrabold text-gray-900 text-lg mb-3">Policy Extraction</h4>
              <p className="text-sm text-gray-500 leading-relaxed font-medium">Automated NLP parsing of PDF manuals, circulars, and frameworks into structured knowledge graphs.</p>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-8 hover:shadow-2xl hover:shadow-green-900/10 transition-all duration-300 group relative overflow-hidden flex flex-col">
              <div className="absolute top-0 left-0 w-full h-1 bg-[#138808] transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
              <div className="bg-green-50 w-14 h-14 flex items-center justify-center rounded-xl text-[#138808] mb-6 group-hover:scale-110 group-hover:bg-[#138808] group-hover:text-white transition-all duration-300">
                <TrendingUp size={28} />
              </div>
              <h4 className="font-extrabold text-gray-900 text-lg mb-3">Skill Gap Analysis</h4>
              <p className="text-sm text-gray-500 leading-relaxed font-medium">AI-driven evaluation comparing current employee skills against mandated role competencies.</p>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-8 hover:shadow-2xl hover:shadow-orange-900/10 transition-all duration-300 group relative overflow-hidden flex flex-col">
              <div className="absolute top-0 left-0 w-full h-1 bg-[#FF9933] transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
              <div className="bg-orange-50 w-14 h-14 flex items-center justify-center rounded-xl text-[#DD6B20] mb-6 group-hover:scale-110 group-hover:bg-[#FF9933] group-hover:text-white transition-all duration-300">
                <GraduationCap size={28} />
              </div>
              <h4 className="font-extrabold text-gray-900 text-lg mb-3">Adaptive Learning</h4>
              <p className="text-sm text-gray-500 leading-relaxed font-medium">Generation of customized training pathways to bridge identified institutional skill gaps.</p>
            </div>

            {/* Card 4 */}
            <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-8 hover:shadow-2xl hover:shadow-gray-900/10 transition-all duration-300 group relative overflow-hidden flex flex-col">
              <div className="absolute top-0 left-0 w-full h-1 bg-gray-800 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
              <div className="bg-gray-100 w-14 h-14 flex items-center justify-center rounded-xl text-gray-700 mb-6 group-hover:scale-110 group-hover:bg-gray-800 group-hover:text-white transition-all duration-300">
                <CheckCircle2 size={28} />
              </div>
              <h4 className="font-extrabold text-gray-900 text-lg mb-3">Intelligent Assessment</h4>
              <p className="text-sm text-gray-500 leading-relaxed font-medium">Real-time generation of MCQs and evaluation metrics directly from source documents.</p>
            </div>

          </div>
        </div>
      </section>

      {/* 🟢 9. ANNOUNCEMENTS & QUICK LINKS */}
      <section className="py-12 bg-white border-t border-gray-200 flex-1">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            
            {/* Circulars */}
            <div className="lg:col-span-2 border border-gray-200 rounded-lg overflow-hidden shadow-sm">
              <div className="bg-[#003366] px-5 py-3.5 flex justify-between items-center">
                <h3 className="font-bold text-white text-base">Official Announcements & Circulars</h3>
                <a href="#" className="text-xs text-blue-200 hover:text-white uppercase font-bold tracking-wider transition-colors">View All</a>
              </div>
              <div className="bg-white">
                <ul className="divide-y divide-gray-100">
                  <li className="p-5 hover:bg-blue-50 transition-colors flex gap-5 items-start group cursor-pointer">
                    <div className="bg-blue-50 text-[#003366] text-center px-4 py-2 rounded-md border border-blue-100 shrink-0 group-hover:bg-[#003366] group-hover:text-white transition-colors">
                      <span className="block text-xl font-black">18</span>
                      <span className="block text-xs uppercase font-bold tracking-wider">Sep</span>
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-gray-900 group-hover:text-[#003366] transition-colors mb-1">Notification regarding integration of DocuMind with existing HRMS portals.</h4>
                      <p className="text-xs text-gray-500 flex items-center gap-2 font-medium"><FileText size={14}/> PDF (245 KB) <span className="bg-red-500 text-white px-1.5 py-0.5 text-[9px] rounded-sm animate-pulse">NEW</span></p>
                    </div>
                  </li>
                  <li className="p-5 hover:bg-blue-50 transition-colors flex gap-5 items-start group cursor-pointer">
                    <div className="bg-blue-50 text-[#003366] text-center px-4 py-2 rounded-md border border-blue-100 shrink-0 group-hover:bg-[#003366] group-hover:text-white transition-colors">
                      <span className="block text-xl font-black">05</span>
                      <span className="block text-xs uppercase font-bold tracking-wider">Sep</span>
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-gray-900 group-hover:text-[#003366] transition-colors mb-1">Guidelines for uploading division-wise training manuals to the AI engine.</h4>
                      <p className="text-xs text-gray-500 flex items-center gap-2 font-medium"><FileText size={14}/> PDF (1.2 MB)</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            {/* Quick Links */}
            <div className="border border-gray-200 rounded-lg overflow-hidden shadow-sm bg-gray-50">
              <div className="bg-[#003366] px-5 py-3.5">
                <h3 className="font-bold text-white text-base">Important Links</h3>
              </div>
              <div className="p-3">
                <Link to="/login" className="flex items-center gap-4 p-4 border-b border-gray-200 hover:bg-white rounded-t-md text-sm font-bold text-[#003366] transition-colors group shadow-sm hover:shadow-md">
                  <div className="bg-orange-100 p-2 rounded text-[#FF9933]"><User size={18} /></div>
                  Official Login Portal 
                  <ChevronRight size={16} className="ml-auto transform group-hover:translate-x-1 transition-transform"/>
                </Link>
                <a href="#" className="flex items-center gap-4 p-4 border-b border-gray-200 hover:bg-white text-sm font-semibold text-gray-700 hover:text-[#003366] transition-colors group">
                  <div className="bg-gray-100 p-2 rounded text-gray-500 group-hover:bg-blue-50 group-hover:text-[#003366] transition-colors"><ExternalLink size={18} /></div>
                  MoSPI Official Website 
                  <ChevronRight size={16} className="ml-auto opacity-0 group-hover:opacity-100 transform group-hover:translate-x-1 transition-all"/>
                </a>
                <a href="#" className="flex items-center gap-4 p-4 border-b border-gray-200 hover:bg-white text-sm font-semibold text-gray-700 hover:text-[#003366] transition-colors group">
                  <div className="bg-gray-100 p-2 rounded text-gray-500 group-hover:bg-blue-50 group-hover:text-[#003366] transition-colors"><HelpCircle size={18} /></div>
                  Platform FAQs & Support 
                  <ChevronRight size={16} className="ml-auto opacity-0 group-hover:opacity-100 transform group-hover:translate-x-1 transition-all"/>
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 🟢 10. ECOSYSTEM STRIP */}
      <section className="bg-white border-t border-gray-200 py-8">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8">
          <div className="flex flex-wrap items-center justify-center gap-10 md:gap-20 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-700">
            <div className="text-2xl font-black text-gray-800 tracking-tight">iGOT<span className="text-[#003366]">Karmayogi</span></div>
            <div className="hidden md:block w-px h-8 bg-gray-300"></div>
            <div className="flex items-center gap-2 font-extrabold text-gray-800 text-lg"><Building2 size={24} className="text-[#003366]"/> NSSTA</div>
            <div className="hidden md:block w-px h-8 bg-gray-300"></div>
            <div className="font-extrabold text-2xl text-gray-800">Digital <span className="font-light text-[#FF9933]">India</span></div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}