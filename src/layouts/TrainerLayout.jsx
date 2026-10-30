import React, { useState, useEffect } from 'react';
import { Outlet, Link, useLocation, useNavigate } from 'react-router-dom';
import { 
  LayoutDashboard, Users, BookOpen, FileText, Bot, 
  ClipboardList, User, Settings, LogOut, Menu, X, Search, Bell, ChevronDown 
} from 'lucide-react';
import { auth } from '../firebase'; 
import { onAuthStateChanged, signOut } from 'firebase/auth';

import DocumindLogo from '../assets/logo.png'; 
import ashokaLogo from '../assets/ashoka.png'; 
import indiaLogo from "../assets/India Logo.png";

export default function TrainerLayout() {
  const location = useLocation();
  const navigate = useNavigate();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [trainerData, setTrainerData] = useState({ name: "Loading...", email: "" });

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setTrainerData({
          name: user.displayName || "MANAS SINGH", 
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
    <div className="flex flex-col h-screen w-full bg-[#F4F7FE] font-sans overflow-hidden">
      
      {/* 🚀 HEADER SECTION */}
      <div className="flex-none z-20 shadow-sm bg-white">
        
        {/* Top Mini Gov Bar - FIXED (Tiranga added) */}
        <div className="bg-gray-50 border-b border-gray-200 px-4 sm:px-8 py-1.5 flex items-center justify-between text-[11px] sm:text-[12px] text-gray-600 font-medium">
          <div className="flex items-center gap-1.5">
                    <img src={indiaLogo} alt="India Logo" className="h-3 sm:h-4 md:h-5 object-contain" />
                    <span>
                      <span className="hidden sm:inline">Government of India <span className="mx-2 text-slate-300">|</span></span>
                      भारत सरकार
                    </span>
                  </div>
          <div className="flex items-center gap-2 text-gray-500">
            <span className="text-gray-800 font-bold cursor-pointer hover:text-blue-600 transition-colors">English</span>
            <span className="text-gray-300">|</span>
            <span className="cursor-pointer hover:text-gray-800 transition-colors">हिंदी</span>
          </div>
        </div>

        {/* Main Header */}
        <header className="px-4 sm:px-8 py-3 flex items-center justify-between border-b border-gray-100">
          <div className="flex items-center gap-2 sm:gap-6">
            <button className="lg:hidden text-gray-500 hover:text-blue-600 p-1" onClick={() => setIsSidebarOpen(true)}>
              <Menu size={24} />
            </button>
            
            <div className="flex items-center gap-4 sm:gap-8">
              {/* Ministry Logo Area (Ashoka) */}
              <div className="hidden sm:flex items-center gap-3 border-r border-gray-200 pr-6">
                 <img src={ashokaLogo} alt="Satyameva Jayate" className="h-8 sm:h-10 md:h-11 object-contain grayscale opacity-90" />
                 <div className="leading-tight">
                   <h1 className="font-black text-[12px] sm:text-[14px] text-gray-800">Ministry of Statistics &<br/>Programme Implementation</h1>
                   <p className="text-[10px] sm:text-[11px] text-gray-500 font-medium mt-0.5">Government of India</p>
                 </div>
              </div>  

              {/* DocuMind Logo Area */}
              <div className="flex items-center gap-3">
                <img src={DocumindLogo} alt="DocuMind" className="w-9 h-9 object-contain" />
                <div className="leading-tight">
                  <h1 className="text-[16px] font-black text-blue-900">DocuMind</h1>
                  <p className="text-[11px] text-gray-500 font-medium">Learn • Understand • Grow</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-4 sm:gap-5">
            <button className="text-gray-400 hover:text-blue-600 transition-colors p-1">
              <Search size={20} />
            </button>
            <button className="relative text-gray-400 hover:text-blue-600 transition-colors p-1">
              <Bell size={20} />
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full border border-white"></span>
            </button>
            
            <div className="flex items-center gap-3 ml-2 cursor-pointer group">
              <div className="w-9 h-9 rounded-full bg-[#1E3A8A] text-white flex items-center justify-center font-bold text-[14px]">
                {trainerData.name.charAt(0).toUpperCase()}
              </div>
              <div className="hidden sm:flex flex-col">
                <p className="text-[12.5px] font-bold text-gray-900 leading-none uppercase">{trainerData.name}</p>
                <p className="text-[11px] text-gray-500 mt-0.5 font-medium">Trainer</p>
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
            className="fixed inset-0 bg-slate-900/40 z-[40] lg:hidden backdrop-blur-sm transition-opacity"
            onClick={() => setIsSidebarOpen(false)}
          />
        )}

        {/* 🚀 SIDEBAR (FIXED: Clean Border, Hidden Scrollbar) */}
        <aside className={`absolute lg:static inset-y-0 left-0 z-[50] w-[250px] h-full bg-white border-r border-gray-200 flex flex-col flex-none transform transition-transform duration-300 ease-in-out shadow-[4px_0_24px_rgba(0,0,0,0.02)] ${isSidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}`}>
          
          <button className="lg:hidden absolute top-4 right-4 text-gray-400 bg-gray-50 hover:bg-gray-100 rounded-full p-1.5 transition-colors" onClick={() => setIsSidebarOpen(false)}>
            <X size={18} />
          </button>

          {/* Sidebar Menu Items (Added 'scrollbar-hide' class) */}
          <div className="flex-1 overflow-y-auto py-5 px-3 space-y-1 mt-6 lg:mt-0 scrollbar-hide">
            {menuItems.map((item, idx) => {
              const isActive = location.pathname === item.path || location.pathname.startsWith(`${item.path}/`);
              return (
                <Link 
                  key={idx} 
                  to={item.path}
                  onClick={() => setIsSidebarOpen(false)}
                  className={`flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-200 ${isActive ? 'bg-blue-50 text-blue-600 font-bold' : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900 font-medium text-[13px]'}`}
                >
                  <item.icon size={18} strokeWidth={isActive ? 2.5 : 2} className={isActive ? "text-blue-600" : "text-gray-400"} />
                  {item.label}
                </Link>
              );
            })}
          </div>

          {/* Settings & Logout Fixed at Bottom */}
          <div className="flex-none px-3 py-4 space-y-1 bg-white border-t border-gray-100">
            <Link to="/trainer/settings" className="flex items-center gap-3 px-3 py-2.5 text-gray-600 hover:bg-gray-50 hover:text-gray-900 font-medium text-[13px] transition-colors rounded-lg">
              <Settings size={18} className="text-gray-400" /> Settings
            </Link>
            <button onClick={handleLogout} className="w-full flex items-center gap-3 px-3 py-2.5 text-red-500 hover:bg-red-50 font-bold text-[13px] transition-colors rounded-lg">
              <LogOut size={18} /> Logout
            </button>
          </div>
        </aside>

        {/* 🚀 MAIN CONTENT AREA (Outlets render here) */}
        <main className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8 w-full scroll-smooth">
          <Outlet />
        </main>

      </div>
      <style dangerouslySetInnerHTML={{__html: `
        .scrollbar-hide::-webkit-scrollbar {
            display: none;
        }
        .scrollbar-hide {
            -ms-overflow-style: none;
            scrollbar-width: none;
        }
      `}} />
    </div>
  );
}