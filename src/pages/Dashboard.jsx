import React from "react";
import {
  LayoutDashboard, FileText, BookOpen, CheckSquare, Bookmark, TrendingUp, MessageSquare, Settings, Bell, Search, Upload, Sparkles, Users, GraduationCap, BarChart3, PieChart, CheckCircle2, Building2, Globe, LogOut
} from "lucide-react";

// ==========================================
// 1. SHARED HEADER COMPONENT
// ==========================================
const Header = ({ role, userName }) => (
  <header className="bg-white border-b border-gray-200 sticky top-0 z-30 shadow-sm">
    <div className="bg-[#003B94] text-white text-[11px] font-semibold py-1 px-8 flex justify-between">
      <div className="flex items-center gap-2">
        <span className="bg-amber-500 text-slate-900 px-1.5 py-0.5 rounded text-[10px]">GOVT</span>
        <span>Ministry of Statistics & Programme Implementation • Government of India</span>
      </div>
      <div className="flex gap-4"><button>English</button><span>|</span><button>हिंदी</button></div>
    </div>
    <div className="px-8 py-3 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#0056D2] to-cyan-500 flex items-center justify-center text-white font-black text-xl">D</div>
        <div>
          <h1 className="font-extrabold text-[18px] text-[#0056D2] leading-none">DocuMind</h1>
          <span className="text-[10px] font-bold text-gray-500 uppercase">Learn • Understand • Grow</span>
        </div>
      </div>
      <div className="relative w-full max-w-md hidden md:block">
        <Search size={16} className="absolute left-3.5 top-3 text-gray-400" />
        <input type="text" placeholder="Search documents..." className="w-full pl-10 pr-4 py-2 bg-gray-50 border rounded-xl text-[13px]" />
      </div>
      <div className="flex items-center gap-4">
        <Bell size={18} className="text-gray-600" />
        <div className="flex items-center gap-2 border-l pl-4">
          <div className="w-9 h-9 rounded-full bg-[#0056D2] text-white flex items-center justify-center font-bold">
            {userName.charAt(0)}
          </div>
          <div>
            <h4 className="text-[12px] font-bold">{userName}</h4>
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
  const learnerLinks = [
    { label: "Dashboard", icon: LayoutDashboard, active: true },
    { label: "My Documents", icon: FileText },
    { label: "AI Notes", icon: Sparkles },
    { label: "Learning Paths", icon: BookOpen },
    { label: "Progress", icon: TrendingUp },
  ];
  
  const orgLinks = [
    { label: "Dashboard", icon: LayoutDashboard, active: true },
    { label: "Manage Users", icon: Users },
    { label: "Institution Library", icon: Building2 },
    { label: "Analytics", icon: BarChart3 },
    { label: "Reports", icon: PieChart },
  ];

  const links = role === "learner" ? learnerLinks : orgLinks;

  return (
    <aside className="w-64 bg-white border-r p-4 hidden lg:flex flex-col justify-between shrink-0">
      <nav className="space-y-2">
        {links.map((item, idx) => (
          <button key={idx} className={`w-full flex items-center gap-3 px-3 py-2 rounded-xl text-[13px] font-bold ${item.active ? "bg-[#0056D2] text-white" : "text-gray-600 hover:bg-gray-100"}`}>
            <item.icon size={18} /> <span>{item.label}</span>
          </button>
        ))}
      </nav>
      <div className="p-4 rounded-2xl bg-blue-50 text-center">
        <Globe className="w-8 h-8 mx-auto text-[#0056D2] mb-2" />
        <h5 className="text-[12px] font-extrabold text-gray-900">Knowledge for a Stronger India</h5>
      </div>
    </aside>
  );
};

// ==========================================
// 3. LEARNER VIEW (Individual Dashboard)
// ==========================================
const LearnerView = ({ userName }) => (
  <div className="space-y-6">
    <div className="bg-[#0056D2] rounded-2xl p-6 text-white flex justify-between items-center shadow-lg">
      <div>
        <h2 className="text-2xl font-black mb-2">Welcome back, {userName} 👋</h2>
        <p className="text-blue-100 text-[13px] max-w-lg mb-4">Continue your learning journey with DocuMind. Upload documents and get AI summaries.</p>
        <button className="bg-white text-[#0056D2] px-4 py-2 rounded-xl text-[13px] font-bold flex items-center gap-2"><Upload size={16}/> Upload Document</button>
      </div>
      <div className="bg-white/10 p-4 rounded-xl text-center hidden md:block">
        <p className="text-[12px] italic text-amber-200">"Learn Today Build a Smarter India Tomorrow."</p>
      </div>
    </div>

    {/* Shortened Stats Grid */}
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {[ { l: "Uploaded", v: "12" }, { l: "Notes", v: "18" }, { l: "Assessments", v: "6" }, { l: "Progress", v: "68%" } ].map((s, i) => (
        <div key={i} className="bg-white p-4 rounded-xl border shadow-sm">
          <h4 className="text-xl font-black">{s.v}</h4>
          <p className="text-[11px] text-gray-500 font-bold">{s.l}</p>
        </div>
      ))}
    </div>

    {/* Modular Content Sections */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="bg-white p-5 rounded-2xl border shadow-sm">
        <h3 className="font-extrabold text-[15px] mb-4">Learning Progress</h3>
        <div className="flex justify-center text-2xl font-black text-[#0056D2]">68%</div>
      </div>
      <div className="bg-white p-5 rounded-2xl border shadow-sm md:col-span-2">
        <h3 className="font-extrabold text-[15px] mb-4">Recent Documents</h3>
        <p className="text-[12px] text-gray-500">Economic Survey 2024-25.pdf - <span className="text-emerald-500 font-bold">Summarized</span></p>
      </div>
    </div>
  </div>
);

// ==========================================
// 4. ORGANIZATION VIEW (Institution Dashboard)
// ==========================================
const OrganizationView = ({ userName }) => (
  <div className="space-y-6">
    <div className="bg-slate-900 rounded-2xl p-6 text-white flex justify-between items-center shadow-lg">
      <div>
        <h2 className="text-2xl font-black mb-2">Welcome, {userName}</h2>
        <p className="text-blue-100 text-[13px] max-w-lg mb-4">Manage learning resources, track student progress, and create paths.</p>
        <button className="bg-white text-[#0056D2] px-4 py-2 rounded-xl text-[13px] font-bold flex items-center gap-2"><Users size={16}/> Manage Users</button>
      </div>
      <div className="bg-white/10 p-4 rounded-xl flex items-center gap-3 hidden md:flex">
        <Users size={24} className="text-amber-300" />
        <div><h3 className="text-2xl font-black">248</h3><p className="text-[11px] text-gray-300">Total Users</p></div>
      </div>
    </div>

    {/* Shortened Stats Grid */}
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {[ { l: "Users", v: "248" }, { l: "Students", v: "186" }, { l: "Faculty", v: "32" }, { l: "Documents", v: "126" } ].map((s, i) => (
        <div key={i} className="bg-white p-4 rounded-xl border shadow-sm">
          <h4 className="text-xl font-black">{s.v}</h4>
          <p className="text-[11px] text-gray-500 font-bold">{s.l}</p>
        </div>
      ))}
    </div>

    <div className="bg-white p-5 rounded-2xl border shadow-sm">
        <h3 className="font-extrabold text-[15px] mb-4">Institution Activity</h3>
        <p className="text-[12px] text-gray-500">New user registered - <span className="text-blue-500 font-bold">2 hours ago</span></p>
    </div>
  </div>
);

// ==========================================
// 5. MAIN DASHBOARD CONTROLLER
// ==========================================
export default function Dashboard() {
  // Runtime pe check karega user role
  const role = localStorage.getItem("userRole") || "learner"; 
  
  const userName = role === "learner" 
    ? "Manas Singh" 
    : "Krishna Group of Institutions";

  return (
    <div className="min-h-screen bg-[#F4F7FB] text-[#1E293B] font-sans flex flex-col">
      <Header role={role} userName={userName} />
      
      <div className="flex-1 flex overflow-hidden">
        <Sidebar role={role} />
        
        <main className="flex-1 overflow-y-auto p-6">
          {role === "learner" ? (
            <LearnerView userName={userName} />
          ) : (
            <OrganizationView userName={userName} />
          )}
        </main>
      </div>
    </div>
  );
}