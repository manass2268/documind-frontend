import React, { useState, useEffect } from 'react';
import { Outlet, Link, useLocation, useNavigate } from 'react-router-dom';
import { 
  LayoutDashboard, Users, BookOpen, FileText, Bot, 
  ClipboardList, User, Settings, Search, Bell, Menu, Building2, X, LogOut
} from 'lucide-react';
// Apna logo path check kar lena
import DocumindLogo from '../assets/logo.png'; 
import { auth } from '../firebase'; 
import { onAuthStateChanged, signOut } from 'firebase/auth';

export default function TrainerLayout() {
  const location = useLocation();
  const navigate = useNavigate();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [trainerData, setTrainerData] = useState({ name: "Loading...", email: "" });

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setTrainerData({
          name: user.displayName || "DocuMind Trainer",
          email: user.email || "trainer@documind.local"
        });
      } else {
        navigate("/"); 
      }
    });
    return () => unsubscribe();
  }, [navigate]);

  const handleLogout = async () => {
    await signOut(auth);
    navigate("/");
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
    <div className="flex h-screen bg-[#F4F7FE] font-sans overflow-hidden">
      
      {/* Mobile Overlay */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-slate-900/50 z-40 lg:hidden backdrop-blur-sm"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside className={`fixed lg:static top-0 left-0 h-full w-[260px] bg-[#1E293B] text-slate-300 flex flex-col shadow-2xl z-50 transform transition-transform duration-300 ease-in-out ${isSidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}`}>
        <div className="flex items-center justify-between px-6 py-6 border-b border-slate-700/50">
          <div className="flex items-center gap-3">
            <img src={DocumindLogo} alt="Logo" className="w-9 h-9 object-contain" />
            <div>
              <h1 className="text-white text-[18px] font-black leading-tight">DocuMind</h1>
              <p className="text-[10px] text-slate-400 font-semibold tracking-wider">Trainer Panel</p>
            </div>
          </div>
          <button className="lg:hidden text-slate-400 hover:text-white" onClick={() => setIsSidebarOpen(false)}>
            <X size={20} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto py-6 px-4 space-y-1">
          {menuItems.map((item, idx) => {
            const isActive = location.pathname === item.path || location.pathname.startsWith(`${item.path}/`);
            return (
              <Link 
                key={idx} 
                to={item.path}
                onClick={() => setIsSidebarOpen(false)}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 ${isActive ? 'bg-[#3B82F6] text-white font-bold shadow-lg shadow-blue-500/20' : 'hover:bg-slate-800 hover:text-white font-medium text-[14px]'}`}
              >
                <item.icon size={18} className={isActive ? "text-white" : "text-slate-400"} />
                {item.label}
              </Link>
            );
          })}
        </div>

        <div className="p-4 border-t border-slate-700/50 space-y-1">
          <button onClick={handleLogout} className="w-full flex items-center gap-3 px-4 py-2.5 rounded-xl hover:bg-red-500/10 hover:text-red-400 font-medium text-[14px] transition-all">
            <LogOut size={18} /> Logout
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col h-screen overflow-hidden w-full">
        {/* Topbar */}
        <header className="h-[76px] bg-white border-b border-gray-100 flex items-center justify-between px-4 sm:px-8 flex-shrink-0 z-10 w-full">
          <div className="flex items-center gap-4 flex-1">
            <button className="text-gray-500 hover:text-blue-600 lg:hidden bg-gray-50 p-2 rounded-lg" onClick={() => setIsSidebarOpen(true)}>
              <Menu size={24} />
            </button>
            <div className="relative w-full max-w-md hidden md:block">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
              <input type="text" placeholder="Search classes, students..." className="w-full pl-10 pr-16 py-2.5 bg-gray-50 border border-gray-200 rounded-full text-[13px] outline-none" />
            </div>
          </div>
          <div className="flex items-center gap-4 sm:gap-6">
            <button className="relative text-gray-400 hover:text-blue-600 bg-gray-50 p-2 rounded-full hidden sm:block">
              <Bell size={20} />
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
            </button>
            <div className="h-8 w-[1px] bg-gray-200 hidden sm:block"></div>
            <div className="flex items-center gap-3">
              <div className="text-right hidden sm:block">
                <p className="text-[13px] font-bold text-gray-800 leading-tight">{trainerData.name}</p>
                <p className="text-[11px] text-gray-500 truncate max-w-[120px]">{trainerData.email}</p>
              </div>
              <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-[16px] shadow-md border-2 border-white">
                {trainerData.name.charAt(0).toUpperCase()}
              </div>
            </div>
          </div>
        </header>

        {/* Page Content Outlet */}
        <main className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8 relative w-full">
          <Outlet />
        </main>
      </div>
    </div>
  );
}