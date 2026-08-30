import React, { useEffect, useState } from 'react';
import { Outlet, useNavigate, useLocation, Link } from 'react-router-dom';
import { auth, db } from '../firebase'; 
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { collection, query, where, onSnapshot, addDoc, serverTimestamp } from 'firebase/firestore'; 
import { 
  Menu, Plus, MessageSquare, MoreVertical, 
  Settings, HelpCircle, History, LogOut, Code, FileText, Loader2 
} from 'lucide-react';
import { motion } from 'framer-motion';

export default function DashboardLayout() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [activeChat, setActiveChat] = useState(null);
  
  // Real-Time Chats State
  const [recentChats, setRecentChats] = useState([]);
  const [isLoadingChats, setIsLoadingChats] = useState(true);

  // Global Auth Guard
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) setUser(currentUser);
      else navigate('/login');
    });
    return () => unsubscribe();
  }, [navigate]);

  // REAL-TIME FIRESTORE SYNC
  useEffect(() => {
    if (!user) return;

    const q = query(collection(db, "chats"), where("userId", "==", user.uid));
    
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const chatsData = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      
      chatsData.sort((a, b) => (b.createdAt?.toMillis() || 0) - (a.createdAt?.toMillis() || 0));
      
      setRecentChats(chatsData);
      setIsLoadingChats(false);
    });

    return () => unsubscribe(); 
  }, [user]);

  // CREATE NEW CHAT FUNCTION 
  const createNewSession = async () => {
    if (!user) return;
    try {
      await addDoc(collection(db, "chats"), {
        userId: user.uid,
        title: "New Study Session",
        type: "text",
        createdAt: serverTimestamp()
      });
      navigate('/dashboard');
      setActiveChat(null);
    } catch (error) {
      console.error("Error creating chat:", error);
    }
  };

  if (!user) return <div className="min-h-screen bg-[#0A0A0A] text-white flex items-center justify-center">Loading Workspace...</div>;

  const displayName = user.displayName || 'Manas Singh';
  const userInitials = displayName.split(' ').map(n => n[0]).join('').toUpperCase().substring(0, 2);

  const bottomLinks = [
    { name: 'Activity', path: '/dashboard/activity', icon: <History size={20} /> },
    { name: 'Help', path: '/dashboard/help', icon: <HelpCircle size={20} /> },
    { name: 'Settings', path: '/dashboard/settings', icon: <Settings size={20} /> },
  ];

  const getChatIcon = (type) => {
    if (type === 'code') return <Code size={16} />;
    if (type === 'pdf') return <FileText size={16} />;
    return <MessageSquare size={16} />;
  };

  return (
    <div className="flex h-screen bg-[#0A0A0A] text-gray-100 font-sans overflow-hidden z-0">
      
      {/* ⬅️ SIDEBAR */}
      <motion.aside 
        initial={false}
        animate={{ width: isCollapsed ? 72 : 280 }}
        className="bg-[#131316]/80 backdrop-blur-3xl hidden md:flex flex-col border-r border-white/5 h-screen relative z-20 shadow-[4px_0_24px_rgba(0,0,0,0.5)]"
      >
        
        <div className="p-4 flex items-center h-[72px]">
          <button onClick={() => setIsCollapsed(!isCollapsed)} className="p-2 hover:bg-white/10 rounded-full transition-colors text-gray-400 hover:text-white">
            <Menu size={24} />
          </button>
        </div>

        <div className="px-3 mt-2">
          <button 
            onClick={createNewSession}
            className={`flex items-center gap-3 bg-white/5 hover:bg-purple-500/20 border border-white/10 hover:border-purple-500/30 rounded-full transition-all text-gray-200 h-11 shadow-sm ${isCollapsed ? 'w-11 justify-center p-0 mx-auto' : 'w-full px-4'}`}
          >
            <Plus size={20} className="flex-shrink-0 text-purple-400" />
            {!isCollapsed && <span className="text-[15px] font-medium whitespace-nowrap">New session</span>}
          </button>
        </div>

        <div className={`flex-1 overflow-y-auto mt-8 px-3 transition-opacity duration-300 ${isCollapsed ? 'opacity-0 invisible' : 'opacity-100 visible'}`}>
          <p className="text-[11px] font-bold text-gray-500 mb-3 px-3 uppercase tracking-widest">Recent Chats</p>
          
          {isLoadingChats ? (
            <div className="flex justify-center py-4">
              <Loader2 size={20} className="text-purple-500 animate-spin" />
            </div>
          ) : recentChats.length === 0 ? (
            <div className="px-3 py-4 text-xs text-gray-500 text-center bg-white/5 rounded-xl border border-white/5">
              No recent sessions. Start a new one!
            </div>
          ) : (
            <div className="space-y-1">
              {recentChats.map((chat) => (
                <button 
                  key={chat.id}
                  onClick={() => setActiveChat(chat.id)}
                  className={`flex items-center justify-between w-full p-2.5 rounded-xl text-sm text-left transition-all group ${activeChat === chat.id ? 'bg-purple-500/15 text-purple-300 border border-purple-500/20' : 'text-gray-400 hover:bg-white/5 hover:text-gray-200 border border-transparent'}`}
                >
                  <div className="flex items-center gap-3 overflow-hidden">
                    <span className={`flex-shrink-0 ${activeChat === chat.id ? 'text-purple-400' : 'text-gray-500 group-hover:text-gray-400'}`}>
                      {getChatIcon(chat.type)}
                    </span>
                    <span className="truncate pr-2 font-medium">{chat.title}</span>
                  </div>
                  <MoreVertical size={14} className="text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0 hover:text-white" />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Bottom Profile Section */}
        <div className="p-3 flex flex-col gap-1 border-t border-white/5 mt-auto bg-[#0A0A0A]/20">
          {bottomLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link key={link.name} to={link.path} className={`flex items-center gap-3 p-2.5 rounded-xl transition-all ${isCollapsed ? 'justify-center w-11 mx-auto' : 'w-full'} ${isActive ? 'bg-white/10 text-white shadow-sm' : 'text-gray-400 hover:bg-white/5 hover:text-gray-200'}`} title={isCollapsed ? link.name : ""}>
                <span className="flex-shrink-0">{link.icon}</span>
                {!isCollapsed && <span className="text-sm font-medium">{link.name}</span>}
              </Link>
            );
          })}

          <div className={`mt-3 pt-3 border-t border-white/5 ${isCollapsed ? 'flex justify-center' : ''}`}>
            <button className={`flex items-center gap-3 p-2 hover:bg-white/5 rounded-xl transition-colors group w-full ${isCollapsed ? 'justify-center w-11' : 'justify-between'}`}>
              <div className="flex items-center gap-3 overflow-hidden">
                {user.photoURL ? (
                  <img src={user.photoURL} alt="Profile" className="w-9 h-9 rounded-full object-cover border border-white/10 flex-shrink-0" />
                ) : (
                  <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-purple-600 to-cyan-500 flex items-center justify-center text-white font-bold text-sm shadow-md flex-shrink-0">
                    {userInitials}
                  </div>
                )}
                {!isCollapsed && (
                  <div className="flex flex-col items-start truncate">
                    <span className="text-[14px] font-semibold text-gray-200 group-hover:text-white transition-colors truncate w-[140px] text-left">{displayName}</span>
                    <span className="text-[11px] text-gray-500 truncate w-[140px] text-left">{user.email}</span>
                  </div>
                )}
              </div>
              {!isCollapsed && (
                <div onClick={(e) => { e.preventDefault(); e.stopPropagation(); signOut(auth); }} className="p-2 text-gray-500 hover:text-red-400 hover:bg-red-500/10 rounded-lg opacity-0 group-hover:opacity-100 transition-all flex-shrink-0" title="Logout">
                  <LogOut size={16} />
                </div>
              )}
            </button>
          </div>
        </div>
      </motion.aside>

      {/* 🎯 MAIN CONTENT AREA */}
      <main className="flex-1 flex flex-col h-screen relative z-10">
        <Outlet context={{ user }} /> 
      </main>

    </div>
  );
}