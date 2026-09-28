import React from "react";
import { 
  LayoutDashboard, Upload, FileText, Sparkles, MessageSquare, BookOpen, 
  CheckSquare, Bookmark, TrendingUp, Settings, Search, Bell, ChevronDown,
  Clock, CheckCircle2
} from "lucide-react";
import ashokaLogo from "../assets/ashoka.png";
import documindLogo from "../assets/logo.png";
import indiaLogo from "../assets/India Logo.png";


export default function Dashboard() {
  return (
    <div className="min-h-screen bg-slate-100 text-slate-800 font-sans flex flex-col w-full absolute top-0 left-0 right-0 z-50">
      
      {/* ========================================= */}
      {/* 1. TOP GOVT BAR (Matching Exact Image)    */}
      {/* ========================================= */}
      <div className="bg-[#F8FAFC] border-b border-gray-200 text-[12px] font-medium py-1.5 px-8 flex justify-between items-center text-slate-600">
        <div className="flex items-center gap-1.5">
          <img src={indiaLogo} alt="India Logo" className="h-3 sm:h-4 md:h-5 object-contain" />
          <span>Government of India <span className="mx-2 text-slate-300">|</span> भारत सरकार</span>
        </div>
        <div className="flex items-center gap-4">
          <button className="hover:text-blue-700 transition-colors">English</button>
          <span className="text-slate-300">|</span>
          <button className="hover:text-blue-700 transition-colors">हिंदी</button>
        </div>
      </div>

      {/* ========================================= */}
      {/* 2. MAIN HEADER (Matching Exact Image)     */}
      {/* ========================================= */}
      <header className="bg-white border-b border-gray-200 py-3 px-8 flex justify-between items-center sticky top-0 z-30 shadow-sm">
        
        {/* Left Side: Logos */}
        <div className="flex items-center gap-10">
          {/* MoSPI Section */}
          <div className="flex items-center gap-3">
            <img 
              src={ashokaLogo} 
              alt="Satyameva Jayate" 
              className="h-10 sm:h-11 md:h-12 object-contain" 
            />
            <div className="leading-tight">
              <h1 className="font-black text-[14px] text-[#0F172A]">Ministry of Statistics &</h1>
              <h1 className="font-black text-[14px] text-[#0F172A]">Programme Implementation</h1>
              <p className="text-[11px] text-slate-500 font-medium mt-0.5">Government of India</p>
            </div>
          </div>

          {/* DocuMind Logo Section */}
          <div className="flex items-center gap-3">
            {/* Soft blue rounded square container */}
            <div className="w-10 h-10 bg-[#1D4ED8] rounded-xl flex items-center justify-center shadow-sm p-1.5">
               <img src={documindLogo} alt="DocuMind Logo" className="w-full h-full object-contain brightness-0 invert" />
            </div>
            <div className="leading-tight">
              <h2 className="font-bold text-[16px] text-[#1E3A8A]">DocuMind</h2>
              <p className="text-[10px] text-slate-500 font-medium mt-0.5 tracking-wide">Learn • Understand • Grow</p>
            </div>
          </div>
        </div>

        {/* Right Side: Search & Profile */}
        <div className="flex items-center gap-8">
          {/* Search Bar */}
          <div className="relative hidden lg:block w-[450px]">
            <Search size={16} className="absolute left-4 top-2.5 text-slate-400" />
            <input 
              type="text" 
              placeholder="Search documents, notes, topics, or ask DocuMind..." 
              className="w-full pl-11 pr-4 py-2 bg-[#F8FAFC] border border-slate-200 rounded-full text-[13px] text-slate-700 placeholder:text-slate-400 focus:outline-none focus:border-blue-500 focus:bg-white transition-all shadow-sm"
            />
          </div>
          
          {/* Notification & User Profile */}
          <div className="flex items-center gap-6">
            <button className="text-slate-500 hover:text-blue-600 transition-colors cursor-pointer">
              <Bell size={20} strokeWidth={1.5} />
            </button>
            
            <div className="flex items-center gap-3 cursor-pointer group">
              <div className="w-10 h-10 rounded-full bg-[#1E3A8A] text-white flex items-center justify-center font-bold text-sm shadow-sm group-hover:bg-blue-900 transition-colors">
                M
              </div>
              <div className="text-left hidden sm:block leading-tight">
                <h4 className="text-[14px] font-bold text-slate-900 flex items-center gap-1 group-hover:text-blue-700 transition-colors">
                  Manas Singh <ChevronDown size={14} className="text-slate-400 ml-1 stroke-[2.5px]"/>
                </h4>
                <p className="text-[12px] text-slate-500 font-medium">Student</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* 3. MAIN LAYOUT (SIDEBAR + CONTENT) */}
      <div className="flex flex-1 overflow-hidden">
        
        {/* SIDEBAR */}
        <aside className="w-60 bg-white border-r border-gray-200 p-4 flex flex-col justify-between overflow-y-auto shrink-0 hidden lg:flex shadow-[2px_0_8px_-4px_rgba(0,0,0,0.1)] z-20">
          <nav className="space-y-1">
            {[
              { icon: LayoutDashboard, label: "Dashboard", active: true },
              { icon: Upload, label: "Upload Document" },
              { icon: FileText, label: "My Documents" },
              { icon: Sparkles, label: "AI Notes" },
              { icon: MessageSquare, label: "Ask DocuMind" },
              { icon: BookOpen, label: "Learning Paths" },
              { icon: CheckSquare, label: "Assessments" },
              { icon: Bookmark, label: "Bookmarks" },
              { icon: TrendingUp, label: "My Progress" },
              { icon: Settings, label: "Settings" },
            ].map((item, i) => (
              <button key={i} className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-[13px] font-semibold transition-all ${item.active ? "bg-blue-50 text-blue-700 border border-blue-100" : "text-gray-600 hover:bg-slate-50 hover:text-gray-900"}`}>
                <item.icon size={16} className={item.active ? "text-blue-600" : "text-gray-400"} />
                {item.label}
              </button>
            ))}
          </nav>
          
          <div className="p-4 bg-slate-50 border border-gray-200 rounded-xl text-center mt-6 shadow-sm">
            <div className="w-10 h-1 bg-gradient-to-r from-orange-400 via-white to-green-500 mx-auto mb-3 border border-gray-200"></div>
            <h5 className="text-[12px] font-bold text-slate-800">Knowledge for<br/>A Stronger, Data-Driven<br/>India</h5>
          </div>
        </aside>

        {/* CONTENT AREA */}
        <main className="flex-1 p-6 overflow-y-auto pb-12">
          <div className="max-w-7xl mx-auto space-y-6">
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2 bg-white rounded-2xl border border-gray-200 p-6 flex flex-col justify-between relative overflow-hidden shadow-sm">
                <div className="absolute top-0 right-0 w-1/2 h-full opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
                <div className="relative z-10 w-2/3">
                  <p className="text-gray-500 text-[13px] font-semibold mb-1">Welcome back,</p>
                  <h2 className="text-3xl font-black text-[#1A365D] mb-3">Manas Singh 👋</h2>
                  <p className="text-gray-600 text-[13px] mb-6 leading-relaxed">
                    Continue your learning journey with DocuMind. Upload documents, get AI summaries, take notes and explore government data — all in one secure platform.
                  </p>
                  <div className="flex gap-3">
                    <button className="bg-[#1A365D] text-white px-5 py-2.5 rounded-lg text-[13px] font-semibold flex items-center gap-2 hover:bg-blue-900 transition-colors shadow-sm">
                      Upload Document →
                    </button>
                    <button className="bg-slate-50 text-blue-700 border border-blue-200 px-5 py-2.5 rounded-lg text-[13px] font-semibold flex items-center gap-2 hover:bg-blue-100 transition-colors shadow-sm">
                      <Sparkles size={16} /> Ask DocuMind
                    </button>
                  </div>
                </div>
                <div className="absolute right-6 top-6 bottom-6 w-[28%] bg-slate-50/80 backdrop-blur-md border border-gray-100 p-4 rounded-xl shadow-sm flex flex-col justify-center">
                   <div className="text-4xl text-blue-200 font-serif leading-none mb-2">"</div>
                   <p className="text-[13px] font-semibold text-slate-700 italic">Knowledge empowers people and drives better policies.</p>
                </div>
              </div>

              <div className="bg-white rounded-2xl border border-gray-200 p-5 flex flex-col justify-between shadow-sm">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex gap-3 items-center">
                    <div className="w-12 h-12 rounded-full bg-[#1A365D] text-white flex items-center justify-center font-bold text-xl shadow-inner">M</div>
                    <div>
                      <h3 className="font-bold text-[15px] text-slate-900 leading-tight">Manas Singh</h3>
                      <p className="text-[12px] text-gray-500">BCA Student</p>
                    </div>
                  </div>
                  <span className="bg-blue-50 text-blue-600 text-[10px] font-bold px-2 py-1 rounded-md border border-blue-100">Student</span>
                </div>
                <div className="space-y-3 mb-4 border-t border-gray-100 pt-4">
                  <div className="flex items-center gap-2 text-[12px] text-gray-600">
                    <MessageSquare size={14} className="text-gray-400"/> manassingh2268@gmail.com
                  </div>
                  <div className="flex items-center gap-2 text-[12px] text-gray-600">
                    <span className="text-gray-400">🎓</span> Krishna Institute of Technology
                  </div>
                </div>
                <button className="w-full py-2 bg-slate-50 border border-gray-200 rounded-lg text-[12px] font-semibold text-gray-600 hover:bg-gray-100 transition-colors flex justify-center items-center gap-1.5 shadow-sm">
                  <Settings size={14}/> Edit Profile
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2 grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { val: "12", lbl: "Documents Uploaded", icon: FileText, bg: "bg-blue-50", tc: "text-blue-600", bc: "border-blue-100" },
                  { val: "18", lbl: "Notes Generated", icon: CheckCircle2, bg: "bg-emerald-50", tc: "text-emerald-600", bc: "border-emerald-100" },
                  { val: "6", lbl: "Assessments Taken", icon: CheckSquare, bg: "bg-orange-50", tc: "text-orange-600", bc: "border-orange-100" },
                  { val: "14 hrs", lbl: "Learning Time", icon: Clock, bg: "bg-purple-50", tc: "text-purple-600", bc: "border-purple-100" }
                ].map((s, i) => (
                  <div key={i} className={`bg-white rounded-2xl border ${s.bc} p-4 flex items-center gap-4 shadow-sm hover:shadow-md transition-shadow`}>
                    <div className={`w-10 h-10 rounded-xl ${s.bg} ${s.tc} flex items-center justify-center shrink-0`}>
                      <s.icon size={20} />
                    </div>
                    <div>
                      <h4 className="font-black text-lg text-slate-900 leading-none mb-1">{s.val}</h4>
                      <p className="text-[10px] font-semibold text-gray-500 leading-tight">{s.lbl}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-white rounded-2xl border border-gray-200 p-5 shadow-sm">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="font-bold text-[14px] text-slate-900">Learning Progress</h3>
                  <button className="text-[11px] font-semibold text-blue-600 hover:underline">View Details →</button>
                </div>
                <div className="flex items-center gap-6">
                  <div className="w-20 h-20 rounded-full border-8 border-slate-100 border-t-blue-600 border-r-blue-600 flex items-center justify-center shrink-0 shadow-inner">
                    <div className="text-center">
                      <span className="font-black text-lg text-slate-900 leading-none">68%</span>
                    </div>
                  </div>
                  <div className="flex-1 space-y-2 text-[11px] font-medium text-gray-600">
                    <div className="flex justify-between"><span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-blue-500"></span> Documents</span> <span className="font-bold text-gray-900">12</span></div>
                    <div className="flex justify-between"><span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-emerald-500"></span> Notes</span> <span className="font-bold text-gray-900">18</span></div>
                    <div className="flex justify-between"><span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-orange-500"></span> Assessments</span> <span className="font-bold text-gray-900">6</span></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white rounded-2xl border border-gray-200 p-5 shadow-sm flex flex-col">
                <div className="flex justify-between items-center mb-4 border-b border-gray-100 pb-3">
                  <h3 className="font-bold text-[14px] text-slate-900">Recent Documents</h3>
                  <button className="text-[11px] font-semibold text-blue-600 hover:underline">View All →</button>
                </div>
                <div className="space-y-3 flex-1">
                  {[
                    { n: "Economic Survey 2024-25.pdf", d: "12 Sep 2026", s: "Summarized", c: "text-emerald-700 bg-emerald-50 border-emerald-100" },
                    { n: "MoSPI Annual Report 2023.docx", d: "10 Sep 2026", s: "Notes Ready", c: "text-blue-700 bg-blue-50 border-blue-100" },
                    { n: "Data Collection Methods.pptx", d: "08 Sep 2026", s: "Processing", c: "text-orange-700 bg-orange-50 border-orange-100" }
                  ].map((doc, i) => (
                    <div key={i} className="flex justify-between items-center py-2 px-2 hover:bg-slate-50 rounded-lg transition-colors">
                      <div className="flex gap-3 items-start">
                        <div className="bg-red-50 text-red-500 p-1.5 rounded-lg text-[8px] font-bold mt-0.5 border border-red-100">PDF</div>
                        <div>
                          <p className="text-[12px] font-bold text-slate-800 line-clamp-1">{doc.n}</p>
                          <p className="text-[10px] text-gray-400">Uploaded • {doc.d}</p>
                        </div>
                      </div>
                      <span className={`text-[10px] font-bold px-2.5 py-1 rounded-md border ${doc.c}`}>{doc.s}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white rounded-2xl border border-gray-200 p-5 shadow-sm flex flex-col">
                <div className="flex justify-between items-center mb-4 border-b border-gray-100 pb-3">
                  <h3 className="font-bold text-[14px] text-slate-900">Continue Learning</h3>
                  <button className="text-[11px] font-semibold text-blue-600 hover:underline">View All →</button>
                </div>
                <div className="space-y-4 flex-1 mt-2">
                  {[
                    { t: "Introduction to Official Statistics", p: "60%" },
                    { t: "Data Collection Methods", p: "40%" },
                    { t: "Survey Design and Sampling", p: "20%" },
                  ].map((path, i) => (
                    <div key={i}>
                      <div className="flex justify-between text-[12px] font-bold text-slate-700 mb-1.5">
                        <span className="flex items-center gap-2"><BookOpen size={14} className="text-orange-500"/> {path.t}</span>
                        <span>{path.p}</span>
                      </div>
                      <div className="w-full bg-slate-100 rounded-full h-1.5 shadow-inner">
                        <div className="bg-blue-600 h-1.5 rounded-full" style={{ width: path.p }}></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-col gap-6">
                <div className="bg-white rounded-2xl border border-gray-200 p-5 shadow-sm">
                  <h3 className="font-bold text-[14px] text-slate-900 mb-4 border-b border-gray-100 pb-3">Quick Actions</h3>
                  <div className="grid grid-cols-2 gap-3 mt-2">
                    <button className="bg-blue-50 hover:bg-blue-100 text-blue-700 p-4 rounded-xl text-center transition-colors border border-blue-100 shadow-sm">
                      <Upload size={20} className="mx-auto mb-2"/>
                      <p className="text-[11px] font-bold">Upload Doc</p>
                    </button>
                    <button className="bg-emerald-50 hover:bg-emerald-100 text-emerald-700 p-4 rounded-xl text-center transition-colors border border-emerald-100 shadow-sm">
                      <Sparkles size={20} className="mx-auto mb-2"/>
                      <p className="text-[11px] font-bold">Generate AI</p>
                    </button>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </main>
      </div>
    </div>
  );
}