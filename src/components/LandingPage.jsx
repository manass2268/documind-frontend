import React from "react";
import { Link } from "react-router-dom";
import { 
  Search, ChevronDown, FileText, BarChart2, GraduationCap, 
  BrainCircuit, ChevronRight, User, BookOpen, HelpCircle, Phone, 
  Building2, ArrowRight, Volume2, Database
} from "lucide-react";
import Footer from "./Footer";

// Assets
import ashokaLogo from "../assets/ashoka.png";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white text-[#333333] font-sans flex flex-col">
      
      {/* 🟢 1. ACCESSIBILITY TOP BAR (From Image 5) */}
      <div className="bg-[#242A33] border-b border-gray-700 py-1.5 px-4 sm:px-8 text-[11px] font-medium text-gray-300 flex flex-wrap justify-between items-center relative z-50">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1 bg-white/10 px-1.5 py-0.5 rounded">
            <span className="text-[#FF9933] font-bold leading-none">■</span>
            <span className="text-white font-bold leading-none">■</span>
            <span className="text-[#138808] font-bold leading-none">■</span>
          </div>
          <span className="tracking-wide ml-1">भारत सरकार | Government of India</span>
        </div>
        
        <div className="hidden md:flex items-center gap-4">
          <a href="#main-content" className="hover:text-white transition-colors">Skip to main content</a>
          <span className="text-gray-600">|</span>
          <button className="hover:text-white transition-colors flex items-center gap-1">
            <Volume2 size={12} /> Screen Reader Access
          </button>
          <span className="text-gray-600">|</span>
          <div className="flex items-center gap-1.5 font-bold">
            <button className="bg-black/50 px-1.5 rounded hover:text-white">A-</button>
            <button className="bg-black/50 px-1.5 rounded text-white hover:text-white">A</button>
            <button className="bg-black/50 px-1.5 rounded hover:text-white">A+</button>
          </div>
          <span className="text-gray-600">|</span>
          <button className="flex items-center gap-1 bg-white text-black px-2 py-0.5 rounded-sm shadow-sm font-bold">
            English <ChevronDown size={10}/>
          </button>
        </div>
      </div>

      {/* 🟢 2. OFFICIAL HEADER (Exact Match Image 5) */}
      <header className="bg-white py-4 px-4 sm:px-8 relative z-40">
        <div className="max-w-[1400px] mx-auto flex justify-between items-center">
          
          <div className="flex items-center gap-4">
            <img src={ashokaLogo} alt="Satyameva Jayate" className="h-16 sm:h-20 object-contain" />
            <div className="flex flex-col border-l-[3px] border-[#E2E8F0] pl-4">
              <span className="text-xl sm:text-2xl font-bold text-black tracking-tight font-serif leading-tight">
                सांख्यिकी एवं कार्यक्रम कार्यान्वयन मंत्रालय
              </span>
              <span className="text-base sm:text-[19px] font-bold text-[#0A4275] uppercase tracking-wide mt-1 leading-tight">
                MINISTRY OF STATISTICS & PROGRAMME IMPLEMENTATION
              </span>
            </div>
          </div>

          {/* Right Side Digital India Badge (Image 5) */}
          <div className="hidden lg:flex items-center gap-4 bg-[#F4F7F9] px-4 py-2.5 rounded-lg border border-gray-200">
            <div className="flex flex-col text-right">
              <span className="text-[11px] font-bold text-gray-500 tracking-wider">DIGITAL INDIA INITIATIVE</span>
              <span className="text-base font-extrabold text-[#0A4275]">Data Intelligence Unit</span>
            </div>
            <div className="w-11 h-11 bg-white border border-gray-200 rounded-full flex items-center justify-center text-[#0A4275] shadow-sm">
              <Database size={20} />
            </div>
          </div>

        </div>
      </header>

      {/* 🟢 3. NAV BAR (Exact Match Image 5) */}
      <nav className="bg-[#0A2540] text-white shadow-md relative z-50">
        <div className="max-w-[1400px] mx-auto flex justify-between items-center h-[52px] px-4 sm:px-8">
          
          <div className="hidden lg:flex items-center h-full text-[13px] font-semibold">
            <a href="#" className="h-full flex items-center px-6 hover:bg-[#113559] transition-colors border-b-[3px] border-orange-500 bg-[#113559]">Home</a>
            <a href="#" className="h-full flex items-center px-6 hover:bg-[#113559] transition-colors gap-1.5">About MoSPI <ChevronDown size={14}/></a>
            <a href="#" className="h-full flex items-center px-6 hover:bg-[#113559] transition-colors gap-1.5">DocuMind AI Portal <ChevronDown size={14}/></a>
            <a href="#" className="h-full flex items-center px-6 hover:bg-[#113559] transition-colors gap-1.5">Training & Skilling <ChevronDown size={14}/></a>
            <a href="#" className="h-full flex items-center px-6 hover:bg-[#113559] transition-colors">Circulars</a>
            <a href="#" className="h-full flex items-center px-6 hover:bg-[#113559] transition-colors">Contact Us</a>
          </div>

          <div className="flex items-center gap-4 h-full py-2">
            <div className="hidden md:flex items-center bg-[#113559] border border-gray-500 rounded-sm overflow-hidden h-8 w-56 px-3">
              <input type="text" placeholder="Search MoSPI..." className="w-full h-full text-xs text-white bg-transparent outline-none placeholder-gray-400" />
              <button className="text-gray-300 hover:text-white"><Search size={14} /></button>
            </div>
            
            <Link to="/login" className="flex items-center gap-2 bg-[#EF4444] hover:bg-[#DC2626] text-white px-5 h-full rounded text-xs font-bold transition-colors shadow-sm uppercase tracking-wide">
              <User size={14} /> Official Login
            </Link>
          </div>
        </div>
      </nav>

      {/* 🟢 4. HERO SECTION (Exact Match Image 1) */}
      <main id="main-content" className="bg-[#F8FBFC] border-b border-gray-200 flex-1">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-8 py-16 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          
          <div className="flex flex-col z-20">
            <h1 className="text-[52px] font-bold text-[#0A4275] mb-2 tracking-tight">DocuMind</h1>
            <h2 className="text-[22px] font-bold text-[#1E293B] mb-5 leading-snug">
              AI-Powered Competency & Learning Intelligence Platform
            </h2>
            
            <div className="w-16 h-[5px] bg-gradient-to-r from-orange-500 via-white to-green-600 mb-6 rounded-full"></div>
            
            <p className="text-gray-600 text-[15px] leading-relaxed mb-8 max-w-lg font-medium">
              Personalized skill assessment, skill-gap analysis and learning recommendations for India's official statistical workforce.
            </p>

            <Link to="/login" className="w-max bg-[#0A4275] hover:bg-[#073055] text-white px-6 py-2.5 rounded shadow-sm font-semibold transition-colors flex items-center justify-center gap-2">
              Access DocuMind <ArrowRight size={16} />
            </Link>
          </div>

          <div className="relative w-full h-[350px] flex items-center justify-end">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1587474260584-136574528ed5?q=80&w=1200&auto=format&fit=crop')] bg-cover bg-center grayscale opacity-15 mix-blend-multiply [mask-image:linear-gradient(to_bottom,white_30%,transparent_100%)]"></div>
            
            <div className="relative z-10 text-right pr-4 md:pr-10 mb-16">
              <h3 className="text-[28px] font-bold text-[#0A4275] mb-2 leading-tight">"Data for Development,<br/>People for Progress"</h3>
              <p className="text-gray-500 text-[13px] font-semibold leading-relaxed">Empowering a skilled statistical<br/>workforce for a Viksit Bharat.</p>
            </div>
          </div>

        </div>
      </main>

      {/* 🟢 5. KEY SERVICES (Exact Match Image 1) */}
      <section className="py-12 bg-white border-b border-gray-100">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-8">
          
          <div className="flex flex-col items-center mb-10">
            <h3 className="text-[22px] font-bold text-[#0A4275]">Key Services</h3>
            <div className="w-12 h-1 bg-[#0A4275] mt-2 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            <div className="bg-white border border-gray-100 shadow-sm rounded-lg p-5 flex items-start gap-4">
              <div className="bg-[#F0F6FA] p-2.5 rounded text-[#0A4275]"><FileText size={22} /></div>
              <div>
                <h4 className="font-bold text-[#333333] text-[13px] mb-1">Competency Assessment</h4>
                <p className="text-[11px] text-gray-500 leading-snug">Assess role-based competencies for statistical and technical domains.</p>
              </div>
            </div>

            <div className="bg-white border border-gray-100 shadow-sm rounded-lg p-5 flex items-start gap-4">
              <div className="bg-[#F0F6FA] p-2.5 rounded text-[#0A4275]"><BarChart2 size={22} /></div>
              <div>
                <h4 className="font-bold text-[#333333] text-[13px] mb-1">Skill Gap Analysis</h4>
                <p className="text-[11px] text-gray-500 leading-snug">Identify skill gaps and prioritize learning needs accurately.</p>
              </div>
            </div>

            <div className="bg-white border border-gray-100 shadow-sm rounded-lg p-5 flex items-start gap-4">
              <div className="bg-[#F0F6FA] p-2.5 rounded text-[#0A4275]"><GraduationCap size={22} /></div>
              <div>
                <h4 className="font-bold text-[#333333] text-[13px] mb-1">Personalized Learning</h4>
                <p className="text-[11px] text-gray-500 leading-snug">Get role-specific learning recommendations automatically.</p>
              </div>
            </div>

            <div className="bg-white border border-gray-100 shadow-sm rounded-lg p-5 flex items-start gap-4">
              <div className="bg-[#F0F6FA] p-2.5 rounded text-[#0A4275]"><BrainCircuit size={22} /></div>
              <div>
                <h4 className="font-bold text-[#333333] text-[13px] mb-1">AI Assessment</h4>
                <p className="text-[11px] text-gray-500 leading-snug">Practice with intelligent assessments and track your progress.</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 🟢 6. LATEST UPDATES & QUICK LINKS (Exact Match Image 1) */}
      <section className="py-12 bg-white">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            
            {/* Latest Updates */}
            <div className="lg:col-span-2 bg-[#F4F8FA] rounded-md border border-gray-200 overflow-hidden flex flex-col">
              <div className="bg-[#E9F0F5] px-5 py-3 border-b border-gray-200 flex justify-between items-center">
                <h3 className="font-bold text-[#0A4275] text-sm">Latest Updates</h3>
                <a href="#" className="text-[11px] font-semibold text-[#0A4275] hover:underline flex items-center">View All <ChevronRight size={12}/></a>
              </div>
              <div className="p-5 flex-1 flex flex-col justify-center space-y-4">
                <div className="flex items-start gap-4">
                  <span className="text-[11px] text-gray-500 font-medium shrink-0 w-20">12 Sep 2026</span>
                  <div className="w-px h-4 bg-gray-300 mt-0.5 shrink-0"></div>
                  <p className="text-xs text-[#333] font-medium leading-relaxed">
                    DocuMind shortlisted for Smart India Hackathon 2026 (SIH26101) <span className="inline-block bg-[#E53E3E] text-white text-[9px] font-bold px-1.5 py-0.5 rounded ml-1 animate-pulse">New</span>
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <span className="text-[11px] text-gray-500 font-medium shrink-0 w-20">05 Sep 2026</span>
                  <div className="w-px h-4 bg-gray-300 mt-0.5 shrink-0"></div>
                  <p className="text-xs text-[#555] leading-relaxed cursor-pointer hover:text-[#0A4275]">
                    New learning resources on Data Quality Frameworks added.
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <span className="text-[11px] text-gray-500 font-medium shrink-0 w-20">28 Aug 2026</span>
                  <div className="w-px h-4 bg-gray-300 mt-0.5 shrink-0"></div>
                  <p className="text-xs text-[#555] leading-relaxed cursor-pointer hover:text-[#0A4275]">
                    Guidelines for participation and demo submission released.
                  </p>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="bg-[#F4F8FA] rounded-md border border-gray-200 overflow-hidden flex flex-col">
              <div className="bg-[#E9F0F5] px-5 py-3 border-b border-gray-200">
                <h3 className="font-bold text-[#0A4275] text-sm">Quick Links</h3>
              </div>
              <div className="p-3 flex-1">
                <ul className="space-y-1">
                  <li>
                    <Link to="/login" className="flex items-center justify-between p-2 hover:bg-white rounded transition-colors group">
                      <div className="flex items-center gap-3 text-xs font-semibold text-[#333] group-hover:text-[#0A4275]">
                        <User size={14} className="text-[#0A4275]"/> Login to DocuMind
                      </div>
                      <ChevronRight size={14} className="text-gray-400 group-hover:text-[#0A4275]"/>
                    </Link>
                  </li>
                  <li>
                    <a href="#" className="flex items-center justify-between p-2 hover:bg-white rounded transition-colors group">
                      <div className="flex items-center gap-3 text-xs font-medium text-[#444] group-hover:text-[#0A4275]">
                        <BookOpen size={14} className="text-[#0A4275]"/> User Guide / Documentation
                      </div>
                      <ChevronRight size={14} className="text-gray-400 group-hover:text-[#0A4275]"/>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="flex items-center justify-between p-2 hover:bg-white rounded transition-colors group">
                      <div className="flex items-center gap-3 text-xs font-medium text-[#444] group-hover:text-[#0A4275]">
                        <HelpCircle size={14} className="text-[#0A4275]"/> FAQs
                      </div>
                      <ChevronRight size={14} className="text-gray-400 group-hover:text-[#0A4275]"/>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="flex items-center justify-between p-2 hover:bg-white rounded transition-colors group">
                      <div className="flex items-center gap-3 text-xs font-medium text-[#444] group-hover:text-[#0A4275]">
                        <Phone size={14} className="text-[#0A4275]"/> Contact Us
                      </div>
                      <ChevronRight size={14} className="text-gray-400 group-hover:text-[#0A4275]"/>
                    </a>
                  </li>
                </ul>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 🟢 7. ECOSYSTEM STRIP (Exact Match Image 6 styling in content) */}
      <section className="py-8 bg-white border-t border-gray-100">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-8">
          <div className="flex flex-wrap items-center justify-center gap-10 md:gap-24 grayscale opacity-70">
            <div className="text-[26px] font-black text-gray-700 tracking-tight">iGOT<span className="text-gray-400">Karmayogi</span></div>
            <div className="hidden md:block w-px h-10 bg-gray-200"></div>
            <div className="flex items-center gap-2 font-extrabold text-gray-500 text-xl"><Building2 size={24}/> NSSTA</div>
            <div className="hidden md:block w-px h-10 bg-gray-200"></div>
            <div className="font-extrabold text-[26px] text-gray-500">Digital <span className="font-light text-gray-400">India</span></div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}