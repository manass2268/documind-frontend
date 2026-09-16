import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { 
  Brain, Play, ShieldCheck, Globe, Layers, RefreshCcw, FileCheck, Activity, 
  Briefcase, Database, Target, Users, CheckCircle2, ChevronRight, FileText,
  Lock, Search, ArrowRight, FileUp, AlertCircle, User, Landmark, CircleDashed, Book, Menu, X, BarChart 
} from "lucide-react";
import Footer from "./Footer";

import ashokaLogo from "../assets/ashoka.png";
import sihLogo from "../assets/SIH.png";

export default function LandingPage({ onStart }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const stagger = { hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.1 } } };
  const fadeInUp = { hidden: { opacity: 0, y: 15 }, show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 250, damping: 25 } } };

  return (
    <div className="min-h-screen bg-[#05050A] text-white font-sans overflow-x-hidden relative w-full selection:bg-purple-500/30">
      
      {/* Ambient Background Glows */}
      <div className="absolute top-[-10%] left-[-10%] w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-purple-700/15 rounded-full blur-[100px] sm:blur-[120px] pointer-events-none" />
      <div className="absolute top-[40%] right-[-10%] w-[400px] sm:w-[600px] h-[400px] sm:h-[600px] bg-cyan-700/10 rounded-full blur-[120px] sm:blur-[150px] pointer-events-none" />

      {/* 🟢 1. NAVBAR - EXACT MATCH WITH PROVIDED IMAGE */}
      <motion.nav initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} className="flex items-center justify-between px-4 sm:px-6 md:px-8 py-4 max-w-[1400px] mx-auto relative z-50">
        <div className="flex items-center gap-2 sm:gap-3">
          <Brain className="text-purple-500" size={26} strokeWidth={2} />
          <div className="flex flex-col">
            <span className="text-lg font-bold tracking-wide leading-none">DocuMind</span>
            <span className="hidden sm:block text-[9px] text-gray-400 font-medium tracking-widest mt-1 uppercase">From Knowledge to Capability.</span>
          </div>
        </div>
        
        <div className="hidden lg:flex items-center gap-6 text-sm font-medium text-gray-300">
          <Link to="/" className="text-white transition-colors">Home</Link>
          <span className="cursor-not-allowed hover:text-white transition-colors" title="Coming soon">How It Works</span>
          <span className="cursor-not-allowed hover:text-white transition-colors" title="Coming soon">Impact</span>
          <span className="cursor-not-allowed hover:text-white transition-colors" title="Coming soon">Resources</span>
        </div>

        {/* Navbar Right Side Fixed */}
        <div className="hidden lg:flex items-center gap-5">
          <Search size={18} className="text-gray-400 hover:text-white cursor-not-allowed transition-colors" />
          
          <div className="h-6 w-px bg-white/10 mx-1"></div> {/* Subtle Divider */}
          
          <div className="flex items-center gap-3 pr-2">
            <img src={sihLogo} alt="SIH LOGO" className="h-9 object-contain" />
            <div className="flex flex-col">
              <span className="text-[13px] font-bold text-white tracking-wider leading-none">SIH 2026</span>
              <span className="text-[10px] text-blue-400 font-mono tracking-widest mt-1">SIH26101</span>
            </div>
          </div>
          
          <Link to="/login" className="text-sm font-medium text-white hover:bg-white/5 transition-colors border border-white/20 bg-transparent px-5 py-2 rounded-lg ml-2">
            Login
          </Link>
          
          <button onClick={onStart} className="bg-purple-600 hover:bg-purple-700 text-white px-5 py-2 rounded-lg text-sm font-semibold transition-all flex items-center gap-2">
            Get Started <ArrowRight size={16} />
          </button>
        </div>

        <button className="lg:hidden text-white p-1" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </motion.nav>

      {/* 🔴 Mobile Menu Fixed */}
      {isMenuOpen && (
        <div className="lg:hidden absolute top-[70px] left-0 w-full bg-[#05050A]/95 backdrop-blur-3xl border-b border-white/10 p-6 flex flex-col gap-5 z-40 shadow-2xl">
          <Link to="/" className="text-base font-medium text-white px-2">Home</Link>
          <span className="text-base font-medium text-gray-500 cursor-not-allowed px-2">How It Works</span>
          <span className="text-base font-medium text-gray-500 cursor-not-allowed px-2">Impact</span>
          
          <div className="h-px w-full bg-white/10 my-2"></div>
          
          <div className="flex items-center gap-3 px-2 mb-2">
            <img src={sihLogo} alt="SIH LOGO" className="h-8 object-contain" />
            <div className="flex flex-col">
              <span className="text-sm font-bold text-white tracking-wider leading-none">SIH 2026</span>
              <span className="text-[10px] text-blue-400 font-mono tracking-widest mt-1">SIH26101</span>
            </div>
          </div>

          <Link to="/login" className="text-base font-medium text-white border border-white/20 bg-transparent px-4 py-3 rounded-xl text-center mt-2">Login</Link>
          <button onClick={() => { setIsMenuOpen(false); onStart(); }} className="bg-purple-600 text-white px-5 py-3 rounded-xl font-semibold w-full text-center flex items-center justify-center gap-2 shadow-[0_0_15px_rgba(147,51,234,0.3)]">
            Get Started <ArrowRight size={16} />
          </button>
        </div>
      )}

      {/* 🟢 2. HERO SECTION */}
      <main className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 pt-6 sm:pt-10 md:pt-12 pb-10 md:pb-12 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 relative z-10 items-center">
        <motion.div variants={stagger} initial="hidden" animate="show" className="flex flex-col justify-center text-center lg:text-left items-center lg:items-start z-20">
          <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 text-gray-400 text-[10px] font-medium tracking-wide w-max mb-6 bg-white/5">
            SIH26101 • Smart India Hackathon 2026
          </motion.div>
          <motion.h1 variants={fadeInUp} className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-[1.15] tracking-tight mb-5">
            Empowering<br className="hidden lg:block"/>
            Government Capability<br className="hidden lg:block"/>
            Through <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">Knowledge.</span>
          </motion.h1>
          <motion.p variants={fadeInUp} className="text-gray-300 text-sm sm:text-base max-w-lg mb-8 leading-relaxed mx-auto lg:mx-0">
            DocuMind transforms government documents and training content into measurable competencies, personalized learning paths and actionable insights.
          </motion.p>
          <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row items-center gap-3 mb-8 w-full sm:w-auto px-4 sm:px-0">
            <button onClick={onStart} className="w-full sm:w-auto bg-purple-600 hover:bg-purple-700 text-white px-6 py-3.5 rounded-xl font-medium transition-all flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(147,51,234,0.4)]">
              Explore DocuMind <ArrowRight size={16} />
            </button>
            <button disabled className="w-full sm:w-auto px-6 py-3.5 rounded-xl font-medium border border-white/10 text-white bg-transparent cursor-not-allowed flex items-center justify-center gap-2">
              <div className="w-5 h-5 rounded-full bg-purple-500/20 flex items-center justify-center"><Play size={10} fill="currentColor" className="text-purple-400" /></div> Watch Demo
            </button>
          </motion.div>
          
          <motion.div variants={fadeInUp} className="flex flex-wrap justify-center lg:justify-start gap-x-6 gap-y-3 text-[11px] font-medium text-gray-400">
            <span className="flex items-center gap-1.5"><ShieldCheck size={14} className="text-purple-400"/> Secure & Private</span>
            <span className="flex items-center gap-1.5"><Brain size={14} className="text-purple-400"/> AI-Powered</span>
            <span className="flex items-center gap-1.5"><Globe size={14} className="text-purple-400"/> Multi-Language</span>
            <span className="flex items-center gap-1.5"><Layers size={14} className="text-cyan-400"/> Integration-Ready</span>
          </motion.div>
        </motion.div>

        {/* Hero Right Image Mockup */}
        <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2, duration: 0.6 }} className="relative w-full h-[450px] lg:h-[500px] rounded-3xl overflow-hidden lg:ml-4 border border-white/10">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1587474260584-136574528ed5?q=80&w=1200&auto=format&fit=crop')] bg-cover bg-center" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#05050A] via-[#05050A]/60 to-[#05050A]/30 mix-blend-multiply" />
          <div className="absolute inset-0 bg-blue-900/20 backdrop-blur-[1px]" />
          
          <div className="absolute inset-0 flex flex-col items-center justify-center p-4 lg:p-6 origin-center">
            
            <div className="w-full max-w-[360px] sm:max-w-[380px] bg-[#0A0A10]/95 backdrop-blur-xl border border-white/10 rounded-2xl p-4 shadow-2xl z-10 lg:ml-auto">
              <div className="flex justify-between items-start mb-3">
                <div className="flex items-center gap-2.5">
                  <div className="bg-red-500/20 p-2 rounded-lg text-red-400"><FileText size={20} /></div>
                  <div className="w-[140px] sm:w-auto overflow-hidden">
                    <h4 className="text-[12px] sm:text-[13px] font-bold text-white tracking-wide truncate">Data_Quality_Framework.pdf</h4>
                    <p className="text-[10px] text-gray-500 font-medium">Government Document</p>
                  </div>
                </div>
                <div className="flex items-center gap-1 bg-emerald-500/10 px-2 py-1 rounded-full border border-emerald-500/20 shrink-0">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                  <span className="text-[9px] text-emerald-400 font-medium">Processing</span>
                </div>
              </div>

              <div className="flex items-center gap-3 mb-4">
                <div className="flex-1 bg-white/5 h-1.5 rounded-full overflow-hidden">
                  <div className="w-[78%] bg-blue-500 h-full rounded-full shadow-[0_0_10px_#3b82f6]"></div>
                </div>
                <span className="text-[11px] font-bold text-white">78%</span>
              </div>

              <div className="space-y-2 mb-4">
                <div className="flex items-center gap-2 text-[10px] sm:text-[11px] text-gray-300"><CheckCircle2 size={14} className="text-emerald-400 shrink-0"/> Extracting Key Concepts</div>
                <div className="flex items-center gap-2 text-[10px] sm:text-[11px] text-gray-300"><CheckCircle2 size={14} className="text-emerald-400 shrink-0"/> Mapping Competencies</div>
                <div className="flex items-center gap-2 text-[10px] sm:text-[11px] text-gray-300"><CheckCircle2 size={14} className="text-emerald-400 shrink-0"/> Identifying Skill Gaps</div>
                <div className="flex items-center gap-2 text-[10px] sm:text-[11px] text-gray-500"><CircleDashed size={14} className="text-gray-500 animate-spin shrink-0"/> Generating Recommendations...</div>
              </div>

              <div className="border-t border-white/10 pt-3">
                <span className="text-[10px] text-gray-400 font-medium mb-1.5 block">Recommended Learning</span>
                <div className="bg-[#1A1A24] border border-white/5 rounded-xl p-2.5 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="bg-purple-600/20 p-1.5 rounded-lg text-purple-400"><Book size={14}/></div>
                    <span className="text-[10px] sm:text-[11px] font-semibold text-white">Data Quality Fundamentals</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute bottom-6 right-6 text-right hidden md:block">
              <p className="font-serif italic text-white/80 text-base leading-tight">Better Data.<br/>Better Decisions.<br/>A Stronger India.</p>
              <div className="w-full h-[2px] bg-gradient-to-r from-orange-500 via-white to-green-500 mt-1.5"></div>
            </div>
          </div>
        </motion.div>
      </main>

      {/* 🟢 3. TRUST STRIP */}
      <div className="border-y border-white/10 bg-[#0A0A0F] py-6 relative z-10">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6 items-center">
            
            <div className="sm:col-span-2 md:col-span-1 flex items-center gap-3 md:border-r border-white/10 pb-4 md:pb-0 justify-center md:justify-start border-b sm:border-b-0 border-white/10">
              <div className="w-10 h-10 border border-white/10 rounded-full flex items-center justify-center shrink-0 bg-white/5">
                <img src={ashokaLogo} alt="Emblem" className="h-5 object-contain opacity-90 drop-shadow-md" />
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] text-gray-500">Designed for India's</span>
                <span className="text-[12px] font-bold text-white tracking-wide">Statistical Workforce</span>
              </div>
            </div>

            <div className="flex items-center gap-3 justify-center md:justify-start">
              <User size={18} className="text-purple-500 shrink-0"/>
              <div className="flex flex-col text-[11px] font-medium text-gray-400"><span>Role-Based</span><span className="text-gray-300">Competency</span></div>
            </div>
            <div className="flex items-center gap-3 justify-center md:justify-start">
              <Lock size={18} className="text-purple-500 shrink-0"/>
              <div className="flex flex-col text-[11px] font-medium text-gray-400"><span>Secure</span><span className="text-gray-300">Data Handling</span></div>
            </div>
            <div className="flex items-center gap-3 justify-center md:justify-start">
              <BarChart size={18} className="text-purple-500 shrink-0"/>
              <div className="flex flex-col text-[11px] font-medium text-gray-400"><span>Continuous</span><span className="text-gray-300">Learning</span></div>
            </div>
            <div className="flex items-center gap-3 justify-center md:justify-start">
              <Layers size={18} className="text-purple-500 shrink-0"/>
              <div className="flex flex-col text-[11px] font-medium text-gray-400"><span>API-Ready</span><span className="text-gray-300">Integration</span></div>
            </div>
          </div>
        </div>
      </div>

      {/* 🟢 4. CORE CONCEPT LOOP */}
      <section className="py-16 relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8">
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold mb-3">From Documents to <span className="text-purple-400">Competencies</span></h2>
          <p className="text-gray-400 text-sm">One continuous intelligence loop for learning and workforce development.</p>
        </div>
        <div className="flex flex-row md:flex-wrap items-center justify-start md:justify-center gap-2 sm:gap-3 overflow-x-auto md:overflow-visible no-scrollbar pb-6 md:pb-0 snap-x w-full px-2">
          {[
            { num: "01", label: "Understand" }, { num: "02", label: "Assess" }, { num: "03", label: "Find Gaps" },
            { num: "04", label: "Recommend" }, { num: "05", label: "Learn" }, { num: "06", label: "Measure" }, { num: "07", label: "Improve" }
          ].map((item, i, arr) => (
            <React.Fragment key={i}>
              <div className="flex flex-col items-center gap-2 min-w-[70px] sm:min-w-[80px] snap-center shrink-0">
                <div className="w-10 h-10 rounded-xl bg-[#0B0B14] border border-white/10 flex items-center justify-center text-white font-mono font-bold text-sm shadow-lg relative group">
                  {item.num}
                </div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400 text-center">{item.label}</span>
              </div>
              {i < arr.length - 1 && <ArrowRight className="hidden md:block text-purple-500/30 shrink-0" size={16} />}
            </React.Fragment>
          ))}
        </div>
      </section>

      {/* 🟢 5. CORE FEATURES */}
      <section className="py-16 bg-[#0A0A0F] border-y border-white/5 relative z-10">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8">
          <div className="mb-10 text-center md:text-left">
            <h2 className="text-2xl sm:text-3xl font-bold mb-3">AI-Powered <span className="text-cyan-400">Competency Intelligence</span></h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            <div className="bg-[#05050A] border border-white/10 p-6 rounded-2xl">
              <FileText size={24} className="text-cyan-400 mb-4"/>
              <h3 className="text-base font-bold mb-2">Document Intelligence</h3>
              <p className="text-gray-400 text-sm leading-relaxed">Extract structured knowledge from government policies, operational manuals, and raw training material.</p>
            </div>
            <div className="bg-[#05050A] border border-white/10 p-6 rounded-2xl">
              <Activity size={24} className="text-purple-400 mb-4"/>
              <h3 className="text-base font-bold mb-2">Skill-Gap Analysis</h3>
              <p className="text-gray-400 text-sm leading-relaxed">Identify precise gaps between current capability and the required competencies for specific official roles.</p>
            </div>
            <div className="bg-[#05050A] border border-white/10 p-6 rounded-2xl">
              <Target size={24} className="text-emerald-400 mb-4"/>
              <h3 className="text-base font-bold mb-2">Personalized Learning</h3>
              <p className="text-gray-400 text-sm leading-relaxed">Recommend targeted learning paths based on role, competency gaps, and organizational priorities.</p>
            </div>
            <div className="bg-[#05050A] border border-white/10 p-6 rounded-2xl sm:col-span-2 lg:col-span-1">
              <CheckCircle2 size={24} className="text-blue-400 mb-4"/>
              <h3 className="text-base font-bold mb-2">Intelligent Assessment</h3>
              <p className="text-gray-400 text-sm leading-relaxed">Generate competency-mapped assessments and adaptive quizzes directly from uploaded source material.</p>
            </div>
            <div className="bg-[#05050A] border border-white/10 p-6 rounded-2xl sm:col-span-2 lg:col-span-2 relative overflow-hidden">
              <RefreshCcw size={24} className="text-yellow-400 mb-4 relative z-10"/>
              <h3 className="text-base font-bold mb-2 relative z-10">Continuous Competency Update</h3>
              <p className="text-gray-400 text-sm leading-relaxed max-w-xl relative z-10">Use ongoing learning and assessment outcomes to continuously update and refine official competency profiles in real-time.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 🟢 6. REAL PRODUCT WORKFLOW */}
      <section className="py-16 max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="text-center lg:text-left">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">From Document to <span className="text-purple-400">Learning</span></h2>
            <p className="text-gray-400 text-sm leading-relaxed mb-8 max-w-lg mx-auto lg:mx-0">
              Upload a government document and let DocuMind extract knowledge, map competencies, identify gaps, and recommend personalized learning.
            </p>
            <button disabled className="inline-flex items-center justify-center gap-2 text-gray-500 font-medium bg-white/5 border border-white/10 px-6 py-3 rounded-xl text-sm cursor-not-allowed">
              Explore the Workflow <ArrowRight size={16} />
            </button>
          </div>

          <div className="bg-[#0B0B14] border border-white/10 rounded-2xl p-5 sm:p-6 shadow-2xl font-mono text-sm relative mx-auto w-full max-w-lg lg:max-w-none">
            <div className="mb-5 border-b border-white/10 pb-5">
              <div className="text-[10px] text-gray-500 uppercase tracking-widest mb-3">Input Document</div>
              <div className="flex items-center gap-3 bg-[#13131A] p-3 rounded-lg border border-white/5">
                <FileUp size={16} className="text-purple-400 shrink-0" />
                <span className="text-white font-sans font-medium text-xs sm:text-sm truncate">Data Quality Framework.pdf</span>
              </div>
            </div>
            <div className="mb-5 border-b border-white/10 pb-5">
               <div className="flex justify-between items-center mb-3 text-[10px] text-gray-500 uppercase tracking-widest">
                 <span>Processing Engine</span>
                 <span className="text-emerald-400">Complete</span>
               </div>
               <div className="space-y-2 text-xs text-gray-400">
                 <div className="flex items-center gap-2"><CheckCircle2 size={14} className="text-emerald-400"/> Extracting Key Concepts</div>
                 <div className="flex items-center gap-2"><CheckCircle2 size={14} className="text-emerald-400"/> Mapping Competencies</div>
                 <div className="flex items-center gap-2"><CheckCircle2 size={14} className="text-emerald-400"/> Identifying Skill Gaps</div>
               </div>
            </div>
            <div>
              <div className="text-[10px] text-gray-500 uppercase tracking-widest mb-3 flex items-center gap-2"><Brain size={14} className="text-cyan-400"/> AI Insights</div>
              <div className="grid grid-cols-2 gap-3 mb-4">
                <div className="bg-[#13131A] p-3 rounded-lg border border-white/5">
                  <div className="text-[9px] text-gray-500 mb-2">KEY CONCEPTS</div>
                  <div className="text-[11px] text-gray-300 font-sans leading-relaxed">• Data Quality<br/>• Validation Rules</div>
                </div>
                <div className="bg-[#13131A] p-3 rounded-lg border border-white/5">
                  <div className="text-[9px] text-gray-500 mb-2">MAPPED COMPETENCIES</div>
                  <div className="text-[11px] text-purple-300 font-sans leading-relaxed">• Frameworks<br/>• Standards</div>
                </div>
              </div>
              <div className="bg-emerald-500/10 border border-emerald-500/20 p-3 rounded-lg">
                <div className="text-[10px] text-emerald-400 uppercase mb-1">Recommended Learning</div>
                <div className="text-sm font-sans font-semibold text-white">Data Quality Fundamentals</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 🟢 7. PERSONALIZED INTELLIGENCE */}
      <section className="py-16 bg-[#0A0A0F] border-y border-white/5 relative z-10">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold mb-3">Learning Should Change <span className="text-cyan-400">With the Learner.</span></h2>
          </div>
          <div className="max-w-2xl mx-auto bg-[#05050A] border border-white/10 p-6 sm:p-8 rounded-3xl shadow-xl">
            <div className="flex justify-between items-center border-b border-white/10 pb-5 mb-5">
              <div>
                <div className="text-[10px] text-gray-500 font-bold uppercase tracking-widest mb-1">Role</div>
                <div className="text-sm sm:text-base font-bold text-white flex items-center gap-2"><Briefcase size={16} className="text-purple-400"/> Statistical Officer</div>
              </div>
              <div className="px-3 py-1 bg-red-500/10 border border-red-500/20 rounded-lg text-[10px] sm:text-xs font-bold text-red-400 flex items-center gap-1.5">
                <AlertCircle size={12}/> GAP DETECTED
              </div>
            </div>
            <div className="flex justify-between items-center gap-2 sm:gap-4 mb-6 text-center sm:text-left">
              <div className="flex-1">
                <div className="text-[10px] text-gray-500 font-bold uppercase tracking-widest mb-1">Current</div>
                <div className="text-2xl sm:text-3xl font-bold text-white mb-1">55%</div>
                <div className="text-[10px] sm:text-xs text-gray-400">Data Quality</div>
              </div>
              <div className="flex-1">
                <div className="text-[10px] text-gray-500 font-bold uppercase tracking-widest mb-1">Required</div>
                <div className="text-2xl sm:text-3xl font-bold text-gray-300 mb-1">80%</div>
                <div className="text-[10px] sm:text-xs text-gray-400">Target</div>
              </div>
              <div className="flex-1">
                <div className="text-[10px] text-cyan-500 font-bold uppercase tracking-widest mb-1">Gap</div>
                <div className="text-2xl sm:text-3xl font-bold text-cyan-400 mb-1">25%</div>
                <div className="text-[10px] sm:text-xs text-gray-400">To Improve</div>
              </div>
            </div>
            <div className="bg-[#0B0B14] border border-white/5 rounded-2xl p-4 sm:p-5">
              <div className="text-[10px] text-purple-400 font-bold uppercase tracking-widest mb-3 flex items-center gap-2"><Brain size={14}/> AI Path</div>
              <div className="space-y-2.5">
                <div className="flex items-center gap-3 bg-white/5 px-3 sm:px-4 py-2 sm:py-3 rounded-xl border border-white/5">
                  <div className="bg-white/10 w-5 h-5 sm:w-6 sm:h-6 rounded flex items-center justify-center text-[10px] sm:text-xs font-bold text-gray-300 shrink-0">1</div>
                  <span className="text-xs sm:text-sm font-medium text-white truncate">Data Quality Fundamentals</span>
                </div>
                <div className="flex items-center gap-3 bg-white/5 px-3 sm:px-4 py-2 sm:py-3 rounded-xl border border-white/5">
                  <div className="bg-white/10 w-5 h-5 sm:w-6 sm:h-6 rounded flex items-center justify-center text-[10px] sm:text-xs font-bold text-gray-300 shrink-0">2</div>
                  <span className="text-xs sm:text-sm font-medium text-white truncate">Quality Frameworks Overview</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 🟢 8. CONTINUOUS LEARNING */}
      <section className="py-12 sm:py-16 relative z-10 max-w-[800px] mx-auto px-4 sm:px-6 md:px-8 text-center border-b border-white/5">
        <h2 className="text-xl sm:text-2xl font-bold mb-3">Learning Doesn't End With a Course.</h2>
        <div className="flex flex-wrap justify-center items-center gap-2 sm:gap-3 mt-8 font-mono text-[10px] sm:text-xs font-bold text-gray-300 uppercase tracking-widest">
          <span className="bg-white/5 px-3 py-1.5 rounded-lg border border-white/10">Assess</span> <ArrowRight size={12} className="text-purple-500/50" />
          <span className="bg-white/5 px-3 py-1.5 rounded-lg border border-white/10">Learn</span> <ArrowRight size={12} className="text-purple-500/50" />
          <span className="bg-white/5 px-3 py-1.5 rounded-lg border border-white/10">Measure</span> <ArrowRight size={12} className="text-purple-500/50" />
          <span className="bg-purple-500/20 text-purple-400 px-3 py-1.5 rounded-lg border border-purple-500/30">Update</span>
        </div>
      </section>

      {/* 🟢 9. IMPACT */}
      <section className="py-16 max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 relative z-10">
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold mb-3">From Individual Learning to <span className="text-purple-400">Workforce Readiness</span></h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          <div className="bg-[#0B0B14] border border-white/10 p-6 rounded-2xl">
            <h4 className="text-base font-bold text-white mb-3 flex items-center gap-2"><User className="text-purple-400" size={18}/> Individual</h4>
            <ul className="text-sm text-gray-400 font-medium leading-relaxed space-y-1"><li>• Personalized paths</li><li>• Skill-gap visibility</li></ul>
          </div>
          <div className="bg-[#0B0B14] border border-white/10 p-6 rounded-2xl">
            <h4 className="text-base font-bold text-white mb-3 flex items-center gap-2"><Users className="text-cyan-400" size={18}/> Team</h4>
            <ul className="text-sm text-gray-400 font-medium leading-relaxed space-y-1"><li>• Cohort insights</li><li>• Targeted training</li></ul>
          </div>
          <div className="bg-[#0B0B14] border border-white/10 p-6 rounded-2xl">
            <h4 className="text-base font-bold text-white mb-3 flex items-center gap-2"><Briefcase className="text-emerald-400" size={18}/> Organization</h4>
            <ul className="text-sm text-gray-400 font-medium leading-relaxed space-y-1"><li>• Macro skill gaps</li><li>• Competency analytics</li></ul>
          </div>
        </div>
      </section>

      {/* 🟢 10. SIH / GOV CONTEXT WITH ASHOKA STAMBH */}
      <section className="pt-8 pb-16 sm:pb-20 px-4 sm:px-6 relative z-10">
        <div className="max-w-[700px] mx-auto bg-gradient-to-b from-[#0B0B14] to-[#05050A] border border-white/10 rounded-3xl p-8 sm:p-10 text-center relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-500 via-white to-green-500 opacity-80"></div>
          
          <div className="flex justify-center mb-6 sm:mb-8">
            <img src={ashokaLogo} alt="Satyameva Jayate" className="h-20 sm:h-24 opacity-90 drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]" />
          </div>

          <h3 className="text-xl sm:text-2xl font-bold mb-3">Built for a Skilled, Data-Ready Public Workforce</h3>
          <p className="text-gray-400 text-sm leading-relaxed mb-8 max-w-lg mx-auto">
            DocuMind is designed around role-based competency development, continuous learning, and measurable workforce capability.
          </p>
          <div className="inline-flex flex-col items-center justify-center">
            <span className="text-[10px] text-gray-500 font-bold uppercase tracking-widest mb-2">Project Context</span>
            <span className="bg-white/5 border border-white/10 px-4 py-2 rounded-lg text-[11px] font-bold text-gray-300 tracking-wider">
              Smart India Hackathon 2026 • SIH26101
            </span>
          </div>
        </div>
      </section>

      {/* 🟢 11. FINAL CTA */}
      <section className="py-16 sm:py-20 relative z-10 border-t border-white/5 bg-[#0B0B14]">
        <div className="max-w-[800px] mx-auto px-6 text-center relative">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">From Knowledge to <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">Capability.</span></h2>
          <button onClick={onStart} className="mt-6 bg-white text-black hover:bg-gray-200 px-8 py-3.5 rounded-xl font-bold text-sm sm:text-base transition-all shadow-[0_0_30px_rgba(255,255,255,0.2)]">
            Explore DocuMind →
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
}