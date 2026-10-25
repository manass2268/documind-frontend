import React, { useState, useEffect } from 'react';
import { Outlet, Link, useLocation, useNavigate } from 'react-router-dom';
import { 
  LayoutDashboard, Users, BookOpen, FileText, Bot, 
  ClipboardList, User, Settings, LogOut, Menu, X, Search, Bell, ChevronDown 
} from 'lucide-react';
import { auth } from '../firebase'; 
import { onAuthStateChanged, signOut } from 'firebase/auth';

import DocumindLogo from '../assets/logo.png'; 
import GovLogo from '../assets/logo.png'; // Ministry/Gov logo yahan lagana

export default function TrainerLayout() {
  const location = useLocation();
  const navigate = useNavigate();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [trainerData, setTrainerData] = useState({ name: "Loading...", email: "" });

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setTrainerData({
          name: user.displayName || "MANAS SINGH", // Fallback name
          email: user.email || "trainer@kiot.edu.in"
        });
      } else {
        navigate("/login"); 
      }
    });
    return () => unsubscribe();
  }, [navigate]);

  const handleLogout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error("Logout Error:", error);
    } finally {
      navigate("/login"); 
    }
  };

  // Tumhare trainer items, image ki theme par styled
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
    // 🚀 MASTER CONTAINER (Strictly 100vh)
    <div className="flex flex-col h-screen w-full bg-[#F8FAFC] font-sans overflow-hidden">
      
      {/* 🚀 HEADER SECTION */}
      <div className="flex-none z-20 shadow-sm bg-white">
        
        {/* Top Mini Gov Bar - Perfect SIH Style */}
        <div className="bg-gray-50 border-b border-gray-200 px-4 sm:px-8 py-1.5 flex items-center justify-between text-[11px] sm:text-[12px] text-gray-600 font-medium">
          <div className="flex items-center gap-2">
            <span className="text-[14px]">🇮🇳</span>
            <span>Government of India</span>
            <span className="text-gray-300">|</span>
            <span>भारत सरकार</span>
          </div>
          <div className="flex items-center gap-2 text-gray-500">
            <span className="text-gray-800 font-bold cursor-pointer">English</span>
            <span className="text-gray-300">|</span>
            <span className="cursor-pointer hover:text-gray-800">हिंदी</span>
          </div>
        </div>

        {/* Main Header */}
        <header className="px-4 sm:px-8 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2 sm:gap-6">
            <button className="lg:hidden text-gray-500 hover:text-blue-600" onClick={() => setIsSidebarOpen(true)}>
              <Menu size={24} />
            </button>
            
            <div className="flex items-center gap-4 sm:gap-8">
              {/* Ministry Logo Area */}
              <div className="hidden sm:flex items-center gap-3 border-r border-gray-200 pr-6">
                <img src={GovLogo} alt="Gov Logo" className="w-10 h-12 object-contain grayscale opacity-80" />
                <div className="leading-tight">
                  <h2 className="text-[14px] font-black text-[#0F172A]">Ministry of Statistics &<br/>Programme Implementation</h2>
                  <p className="text-[10px] text-gray-500">Government of India</p>
                </div>
              </div>

              {/* DocuMind Logo Area */}
              <div className="flex items-center gap-3">
                <img src={DocumindLogo} alt="DocuMind" className="w-10 h-10 object-contain" />
                <div className="leading-tight">
                  <h1 className="text-[16px] font-black text-blue-900">DocuMind</h1>
                  <p className="text-[11px] text-gray-500 font-medium">Learn • Understand • Grow</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-4 sm:gap-5">
            <button className="text-gray-400 hover:text-blue-600 transition-colors">
              <Search size={20} />
            </button>
            <button className="relative text-gray-400 hover:text-blue-600 transition-colors">
              <Bell size={20} />
              <span className="absolute -top-0.5 -right-0.5 w-2 h-2 bg-red-500 rounded-full border border-white"></span>
            </button>
            
            <div className="flex items-center gap-3 ml-2 cursor-pointer group">
              <div className="w-10 h-10 rounded-full bg-[#1E3A8A] text-white flex items-center justify-center font-bold text-[16px]">
                {trainerData.name.charAt(0).toUpperCase()}
              </div>
              <div className="hidden sm:flex flex-col">
                <p className="text-[13px] font-bold text-gray-900 leading-none uppercase">{trainerData.name}</p>
                <p className="text-[11px] text-gray-500 mt-1 font-medium">Trainer</p>
              </div>
              <ChevronDown size={16} className="text-gray-400 hidden sm:block group-hover:text-gray-600" />
            </div>
          </div>
        </header>
      </div>

      {/* 🚀 BOTTOM LAYOUT */}
      <div className="flex-1 flex overflow-hidden relative min-h-0">
        
        {/* Mobile Sidebar Overlay */}
        {isSidebarOpen && (
          <div 
            className="fixed inset-0 bg-slate-900/40 z-[40] lg:hidden backdrop-blur-sm"
            onClick={() => setIsSidebarOpen(false)}
          />
        )}

        {/* 🚀 SIDEBAR (Exact image matching UI with thick black border) */}
        <aside className={`absolute lg:static inset-y-0 left-0 z-[50] w-[260px] h-full bg-white border-r-[4px] border-[#0F172A] flex flex-col flex-none transform transition-transform duration-300 ease-in-out ${isSidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}`}>
          
          <button className="lg:hidden absolute top-4 right-4 text-gray-400 bg-gray-100 rounded-full p-1" onClick={() => setIsSidebarOpen(false)}>
            <X size={20} />
          </button>

          {/* Sidebar Menu Items */}
          <div className="flex-1 overflow-y-auto py-6 px-4 space-y-1 mt-8 lg:mt-0 custom-scrollbar">
            {menuItems.map((item, idx) => {
              const isActive = location.pathname === item.path || location.pathname.startsWith(`${item.path}/`);
              return (
                <Link 
                  key={idx} 
                  to={item.path}
                  onClick={() => setIsSidebarOpen(false)}
                  className={`flex items-center gap-4 px-4 py-2.5 rounded-lg transition-all duration-200 ${isActive ? 'bg-blue-50 text-blue-600 font-bold' : 'text-gray-500 hover:bg-gray-50 hover:text-gray-800 font-medium text-[14px]'}`}
                >
                  <item.icon size={20} strokeWidth={isActive ? 2.5 : 2} className={isActive ? "text-blue-600" : "text-gray-400"} />
                  {item.label}
                </Link>
              );
            })}
          </div>

          {/* Settings & Logout Fixed at Bottom */}
          <div className="flex-none px-4 py-4 space-y-1 bg-white">
            <Link to="/trainer/settings" className="flex items-center gap-4 px-4 py-2.5 text-gray-500 hover:bg-gray-50 hover:text-gray-800 font-medium text-[14px] transition-colors rounded-lg">
              <Settings size={20} className="text-gray-400" /> Settings
            </Link>
            <button onClick={handleLogout} className="w-full flex items-center gap-4 px-4 py-2.5 text-red-500 hover:bg-red-50 font-bold text-[14px] transition-colors rounded-lg">
              <LogOut size={20} /> Logout
            </button>
          </div>
        </aside>

        {/* 🚀 MAIN CONTENT AREA (Outlets render here) */}
        <main className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8 w-full bg-[#F4F7FE]">
          <Outlet />
        </main>

      </div>
    </div>
  );
}