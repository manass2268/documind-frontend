import React, { useState, useEffect } from 'react';
import { Outlet, Link, useLocation, useNavigate } from 'react-router-dom';
import { 
  LayoutDashboard, Users, BookOpen, FileText, Bot, 
  ClipboardList, User, Search, Bell, Menu, X, LogOut, ChevronDown, Sparkles
} from 'lucide-react';
import DocumindLogo from '../assets/logo.png'; 
import { auth } from '../firebase'; 
import { onAuthStateChanged, signOut } from 'firebase/auth';

export default function TrainerLayout() {
  const location = useLocation();
  const navigate = useNavigate();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [trainerData, setTrainerData] = useState({ name: "Loading...", email: "" });

  // 🚀 Fetch User & Handle Header Scroll Effect
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);

    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setTrainerData({
          name: user.displayName || "Prof. Trainer",
          email: user.email || "trainer@kiot.edu.in"
        });
      } else {
       
        navigate("/login"); 
      }
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      unsubscribe();
    };
  }, [navigate]);

  // 🚀 FAIL-SAFE LOGOUT ROUTING TO LOGIN PAGE
  const handleLogout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error("Logout Error:", error);
    } finally {
  
      navigate("/login"); 
    }
  };

  const menuItems = [
    { icon: LayoutDashboard, label: 'Dashboard', path: '/trainer/dashboard' },
    { icon: Users, label: 'My Classes', path: '/trainer/classes' },
    { icon: User, label: 'Students', path: '/trainer/students' },
    { icon: BookOpen, label: 'Subjects', path: '/trainer/subjects' },
    { icon: FileText, label: 'Documents', path: '/trainer/documents' },
    { icon: Bot, label: 'AI Assistant', path: '/trainer/ai' },
    { icon: ClipboardList, label: 'Assignments', path: '/trainer/assignments' },
  ];

  return (
    <div className="flex h-screen bg-[#F8FAFC] font-sans overflow-hidden selection:bg-blue-500/30">
      
      {/* 📱 MOBILE OVERLAY (Glassmorphism) */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-slate-900/40 z-[60] lg:hidden backdrop-blur-sm transition-opacity duration-300"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* 🚀 SIDEBAR (Premium Dark Theme) */}
      <aside className={`fixed lg:static top-0 left-0 h-full w-[280px] bg-[#0B1121] text-slate-300 flex flex-col shadow-2xl z-[70] transform transition-transform duration-300 ease-in-out ${isSidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}`}>
        
        {/* Logo Section */}
        <div className="flex items-center justify-between px-6 py-6 border-b border-white/5 bg-white/5">
          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="absolute inset-0 bg-blue-500 rounded-full blur-md opacity-50"></div>
              <img src={DocumindLogo} alt="Logo" className="w-10 h-10 object-contain relative z-10" />
            </div>
            <div>
              <h1 className="text-white text-[20px] font-black tracking-tight leading-tight">Docu<span className="text-blue-500">Mind</span></h1>
              <p className="text-[11px] text-blue-400 font-bold tracking-widest uppercase mt-0.5 flex items-center gap-1">
                <Sparkles size={10} /> Educator
              </p>
            </div>
          </div>
          <button className="lg:hidden text-slate-400 hover:text-white bg-white/10 p-1.5 rounded-lg transition-colors" onClick={() => setIsSidebarOpen(false)}>
            <X size={20} />
          </button>
        </div>

        {/* Navigation Links */}
        <div className="flex-1 overflow-y-auto py-6 px-4 space-y-1.5 custom-scrollbar">
          <p className="px-4 text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-3">Main Menu</p>
          {menuItems.map((item, idx) => {
            const isActive = location.pathname === item.path || location.pathname.startsWith(`${item.path}/`);
            return (
              <Link 
                key={idx} 
                to={item.path}
                onClick={() => setIsSidebarOpen(false)}
                className={`flex items-center gap-3 px-4 py-3.5 rounded-xl transition-all duration-300 relative group ${isActive ? 'bg-gradient-to-r from-blue-600 to-blue-500 text-white font-bold shadow-[0_0_20px_rgba(59,130,246,0.3)]' : 'hover:bg-white/5 hover:text-white font-medium text-[14px] text-slate-400'}`}
              >
                {isActive && <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-white rounded-r-full shadow-[0_0_10px_white]"></div>}
                <item.icon size={18} className={`${isActive ? "text-white" : "text-slate-400 group-hover:scale-110"} transition-transform duration-300`} />
                {item.label}
              </Link>
            );
          })}
        </div>

        {/* Logout Section */}
        <div className="p-4 border-t border-white/5 bg-gradient-to-t from-slate-900 to-transparent">
          <button 
            onClick={handleLogout} 
            className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-white/5 hover:bg-red-500/20 text-slate-300 hover:text-red-400 font-bold text-[14px] transition-all duration-300 border border-transparent hover:border-red-500/30 group"
          >
            <LogOut size={18} className="group-hover:-translate-x-1 transition-transform" /> 
            Secure Logout
          </button>
        </div>
      </aside>

      {/* 🚀 MAIN CONTENT AREA */}
      <div className="flex-1 flex flex-col h-screen overflow-hidden w-full relative">
        
        {/* Dynamic Header (Topbar) */}
        <header className={`h-[76px] flex items-center justify-between px-4 sm:px-8 flex-shrink-0 z-10 w-full transition-all duration-300 ${scrolled ? 'bg-white/80 backdrop-blur-md shadow-sm border-b border-gray-200/50' : 'bg-transparent'}`}>
          
          <div className="flex items-center gap-4 flex-1">
            <button className="text-gray-600 hover:text-blue-600 lg:hidden bg-white shadow-sm border border-gray-100 p-2.5 rounded-xl transition-all active:scale-95" onClick={() => setIsSidebarOpen(true)}>
              <Menu size={22} />
            </button>
            
            {/* Search Bar */}
            <div className="relative w-full max-w-md hidden sm:block group">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-blue-500 transition-colors" size={18} />
              <input 
                type="text" 
                placeholder="Search classes, students, or documents..." 
                className="w-full pl-11 pr-4 py-2.5 bg-white border border-gray-200 rounded-full text-[13px] outline-none focus:border-blue-400 focus:ring-4 focus:ring-blue-500/10 transition-all shadow-sm" 
              />
            </div>
          </div>

          <div className="flex items-center gap-3 sm:gap-6">
            <button className="relative text-gray-400 hover:text-blue-600 bg-white shadow-sm border border-gray-100 p-2.5 rounded-full transition-all hover:shadow-md active:scale-95">
              <Bell size={20} />
              <span className="absolute top-0 right-0 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-white animate-pulse"></span>
            </button>
            
            <div className="h-8 w-[1px] bg-gray-200 hidden sm:block"></div>
            
            {/* Interactive Profile Badge */}
            <div className="flex items-center gap-3 bg-white pl-2 pr-4 py-1.5 rounded-full border border-gray-200 shadow-sm cursor-pointer hover:shadow-md hover:border-blue-200 transition-all">
              <div className="w-9 h-9 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 text-white flex items-center justify-center font-bold text-[15px] shadow-inner">
                {trainerData.name.charAt(0).toUpperCase()}
              </div>
              <div className="hidden md:block text-left">
                <p className="text-[13px] font-bold text-gray-800 leading-none">{trainerData.name}</p>
                <p className="text-[11px] text-gray-500 mt-1 truncate max-w-[120px]">{trainerData.email}</p>
              </div>
              <ChevronDown size={16} className="text-gray-400 hidden md:block" />
            </div>
          </div>
        </header>

        {/* 🚀 PAGE CONTENT (Outlet) */}
        <main className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8 relative w-full scroll-smooth">
          <Outlet />
        </main>

      </div>
    </div>
  );
}