import React from "react";
import {
  LayoutDashboard, FileText, BookOpen, TrendingUp, Search, Upload, Sparkles, Users, BarChart3, PieChart, Building2, Globe, Bell
} from "lucide-react";

// ==========================================
// 1. SHARED HEADER COMPONENT
// ==========================================
const Header = ({ role, userName }) => (
  <header className="bg-white border-b border-gray-200 sticky top-0 z-30">
    <div className="bg-[#003B94] text-white text-[11px] font-semibold py-1.5 px-4 md:px-8 flex justify-between">
      <div className="flex items-center gap-2">
        <span className="bg-amber-500 text-slate-900 px-1.5 py-0.5 rounded text-[10px]">GOVT</span>
        <span className="truncate">Ministry of Statistics & Programme Implementation • Government of India</span>
      </div>
      <div className="flex gap-4 hidden sm:flex"><button>English</button><span>|</span><button>हिंदी</button></div>
    </div>
    
    <div className="px-4 md:px-8 py-3 flex items-center justify-between gap-4">
      <div className="flex items-center gap-3 shrink-0">
        <div className="w-10 h-10 rounded-xl bg-[#0056D2] flex items-center justify-center text-white font-black text-xl">D</div>
        <div>
          <h1 className="font-extrabold text-[18px] text-[#0056D2] leading-none">DocuMind</h1>
          <span className="text-[9px] font-bold text-gray-500 uppercase tracking-wide">Learn • Understand • Grow</span>
        </div>
      </div>

      <div className="relative w-full max-w-md hidden lg:block">
        <Search size={16} className="absolute left-3.5 top-2.5 text-gray-400" />
        <input type="text" placeholder="Search documents..." className="w-full pl-10 pr-4 py-2 bg-gray-50 border rounded-xl text-[13px] focus:outline-none focus:border-[#0056D2]" />
      </div>

      <div className="flex items-center gap-4 shrink-0">
        <Bell size={18} className="text-gray-600 cursor-pointer hover:text-gray-900" />
        <div className="flex items-center gap-2 border-l pl-4">
          <div className="w-9 h-9 rounded-full bg-[#0056D2] text-white flex items-center justify-center font-bold">
            {userName.charAt(0)}
          </div>
          <div className="hidden sm:block">
            <h4 className="text-[12px] font-bold whitespace-nowrap">{userName}</h4>
            <p className="text-[10px] text-gray-500">{role === "learner" ? "Learner" : "Institution Admin"}</p>
          </div>
        </div>
      </div>
    </div>
  </header>
);

// ==========================================
// 2. SHARED SIDEBAR COMPONENT
// ==========================================
const Sidebar = ({ role }) => {
  const links = role === "learner" 
    ? [
        { label: "Dashboard", icon: LayoutDashboard, active: true },
        { label: "My Documents", icon: FileText },
        { label: "AI Notes", icon: Sparkles },
        { label: "Learning Paths", icon: BookOpen },
        { label: "Progress", icon: TrendingUp },
      ]
    : [
        { label: "Dashboard", icon: LayoutDashboard, active: true },
        { label: "Manage Users", icon: Users },
        { label: "Institution Library", icon: Building2 },
        { label: "Analytics", icon: BarChart3 },
        { label: "Reports", icon: PieChart },
      ];

  return (
    <aside className="w-60 bg-white border-r p-4 hidden md:flex flex-col justify-between shrink-0 h-[calc(100vh-100px)] sticky top-[100px]">
      <nav className="space-y-1.5">
        {links.map((item, idx) => (
          <button key={idx} className={`w-full flex items-center gap-3 px-4 py-2.5 rounded-xl text-[13px] font-bold transition-colors ${item.active ? "bg-[#0056D2] text-white shadow-md shadow-blue-500/20" : "text-gray-600 hover:bg-gray-100"}`}>
            <item.icon size={18} /> <span>{item.label}</span>
          </button>
        ))}
      </nav>
      <div className="p-4 rounded-2xl bg-blue-50/50 border border-blue-100 text-center">
        <Globe className="w-6 h-6 mx-auto text-[#0056D2] mb-2" />
        <h5 className="text-[11px] font-extrabold text-gray-900">Knowledge for a Stronger India</h5>
      </div>
    </aside>
  );
};

// ==========================================
// 3. MAIN DASHBOARD COMPONENT
// ==========================================
export default function Dashboard() {
  const role = "learner"; // 'learner' ya 'organization'
  const userName = role === "learner" ? "Manas Singh" : "Krishna Group";

  return (
    // 'w-full' use kiya hai taaki parent layout ke hisaab se adjust ho jaye
    <div className="w-full min-h-screen bg-[#F8FAFC] text-[#1E293B] font-sans flex flex-col">
      <Header role={role} userName={userName} />
      
      <div className="flex-1 flex items-start">
        <Sidebar role={role} />
        
        <main className="flex-1 p-4 md:p-6 lg:p-8 overflow-x-hidden">
          <div className="max-w-6xl mx-auto space-y-6">
            
            {/* FIXED BANNER: ab ye overlap nahi karega */}
            <div className="bg-[#0056D2] rounded-2xl p-6 md:p-8 text-white flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 shadow-sm">
              <div className="flex-1">
                <h2 className="text-2xl md:text-3xl font-black mb-2 flex items-center gap-2">
                  Welcome back, {userName} <span className="text-2xl">👋</span>
                </h2>
                <p className="text-blue-100 text-[13px] max-w-xl mb-5 leading-relaxed">
                  Continue your learning journey with DocuMind. Upload documents and get AI summaries instantly.
                </p>
                <button className="bg-white text-[#0056D2] px-5 py-2.5 rounded-xl text-[13px] font-bold flex items-center gap-2 shadow-sm hover:bg-blue-50 transition-colors w-max">
                  <Upload size={16} /> Upload Document
                </button>
              </div>
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 p-4 rounded-xl text-center w-full lg:w-72 shrink-0">
                <p className="text-[12px] italic text-amber-200 font-medium">
                  "Learn Today Build a Smarter India Tomorrow."
                </p>
              </div>
            </div>

            {/* FIXED STATS GRID */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[ 
                { label: "Uploaded", value: "12" }, 
                { label: "Notes", value: "18" }, 
                { label: "Assessments", value: "6" }, 
                { label: "Progress", value: "68%" } 
              ].map((stat, i) => (
                <div key={i} className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm flex flex-col items-start">
                  <h4 className="text-2xl font-black text-gray-900 mb-1">{stat.value}</h4>
                  <p className="text-[12px] text-gray-500 font-semibold">{stat.label}</p>
                </div>
              ))}
            </div>

            {/* BOTTOM SECTIONS */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex flex-col justify-center items-center">
                <h3 className="font-extrabold text-[15px] mb-4 w-full text-left">Learning Progress</h3>
                <div className="text-4xl font-black text-[#0056D2] py-8">68%</div>
              </div>
              <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm lg:col-span-2">
                <h3 className="font-extrabold text-[15px] mb-4">Recent Documents</h3>
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-xl border border-gray-100">
                  <p className="text-[13px] font-semibold text-gray-700">Economic Survey 2024-25.pdf</p>
                  <span className="text-[11px] font-bold text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full">Summarized</span>
                </div>
              </div>
            </div>

          </div>
        </main>
      </div>
    </div>
  );
}