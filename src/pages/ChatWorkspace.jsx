import React, { useState, useEffect } from "react";
import { 
  Menu, Search, Plus, FileText, ChevronLeft, ChevronRight, 
  Send, Sparkles, BookOpen, CheckSquare, Paperclip, View, 
  Download, MoreHorizontal, Settings, Bell, ChevronDown, UserCircle, LogOut,
  Image as ImageIcon, ZoomIn, ZoomOut, Maximize,
  Home, Bookmark, MessageSquare, Users, Star, LayoutTemplate,
  ThumbsUp, ThumbsDown, Copy, Compass, UploadCloud 
} from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";

// FIREBASE IMPORTS (Added Real-time DB functions)
import { auth, db } from "../firebase"; 
import { doc, getDoc, collection, query, orderBy, onSnapshot, addDoc, updateDoc, serverTimestamp } from "firebase/firestore";
import { onAuthStateChanged, signOut } from "firebase/auth";

import documindLogo from "../assets/logo.png";

export default function ChatWorkspace() {
  const navigate = useNavigate();
  const location = useLocation();

  // --- USER STATES ---
  const [userName, setUserName] = useState("Loading...");
  const [userEmail, setUserEmail] = useState("");
  const [userInitial, setUserInitial] = useState("L"); 
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);

  // --- WORKSPACE STATES ---
  const [inputMessage, setInputMessage] = useState("");
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(true);
  
  // Real-time Chat History States
  const [recentChats, setRecentChats] = useState([]);
  const [chatId, setChatId] = useState(null); // Current active chat ID

  // Gets document name from Upload flow
  const initialDocName = location.state?.documentName || "";
  const docSize = location.state?.fileSize ? (location.state.fileSize / (1024*1024)).toFixed(1) : "12.4";

  // NEW CHAT STATE: Agar upload se aaye hain toh active, warna New Chat
  const [isNewChat, setIsNewChat] = useState(!initialDocName);
  const [documentName, setDocumentName] = useState(initialDocName);

  const [messages, setMessages] = useState(
    initialDocName ? [
      {
        id: 1,
        sender: "ai",
        text: `Hi! I've analyzed your document "${initialDocName}".\nYou can ask me anything about this document. Here are some suggestions to get started:`,
        isWelcome: true,
        time: new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})
      }
    ] : []
  );

  // 🚀 REAL-TIME AUTH & FIRESTORE FETCH 🚀
  useEffect(() => {
    let unsubscribeChats; // Real-time listener ko clear karne ke liye

    const unsubscribeAuth = onAuthStateChanged(auth, async (user) => {
      if (user) {
        setUserEmail(user.email);
        const rollNo = user.email.split('@')[0];
        try {
          // 1. Fetch Profile Name
          const docRef = doc(db, "students", rollNo);
          const docSnap = await getDoc(docRef);
          if (docSnap.exists()) {
            const fetchedName = docSnap.data().name;
            setUserName(fetchedName);
            setUserInitial(fetchedName.charAt(0).toUpperCase());
          } else {
            setUserName("Learner");
            setUserInitial("L");
          }

          // 2. Fetch REAL-TIME Chat History
          const chatsRef = collection(db, "students", rollNo, "chats");
          // Order by latest updated chat
          const q = query(chatsRef, orderBy("updatedAt", "desc"));
          
          unsubscribeChats = onSnapshot(q, (snapshot) => {
            const fetchedChats = snapshot.docs.map(doc => {
              const data = doc.data();
              let timeString = "Just now";
              
              // Formatting Firebase Timestamp beautifully
              if (data.updatedAt) {
                const date = data.updatedAt.toDate();
                const today = new Date();
                if (date.toDateString() === today.toDateString()) {
                  timeString = date.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'}); // e.g. "10:30 AM"
                } else {
                  timeString = date.toLocaleDateString([], { month: 'short', day: 'numeric' }); // e.g. "Oct 2"
                }
              }

              return {
                id: doc.id,
                title: data.title || "New Chat",
                type: data.type || "Chat",
                time: timeString,
              };
            });
            setRecentChats(fetchedChats);
          });

        } catch (error) {
          console.error(error);
          setUserName("Learner");
        }
      } else {
        navigate("/login");
      }
    });

    return () => {
      unsubscribeAuth();
      if (unsubscribeChats) unsubscribeChats(); // Memory leak roko
    };
  }, [navigate]);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate("/login");
    } catch (error) {
      console.error(error);
    }
  };

  // TRIGGER NEW CHAT
  const handleNewChat = () => {
    setIsNewChat(true);
    setDocumentName("");
    setMessages([]);
    setChatId(null); // Reset current chat ID
  };

  // SWITCH BETWEEN REAL CHATS
  const loadChat = (chat) => {
    setChatId(chat.id);
    setDocumentName(chat.title);
    setIsNewChat(false);
    
    // Future update: Yahan us specific chat ke subcollection se messages fetch honge.
    // Abhi ke liye context set kar rahe hain:
    setMessages([{
      id: Date.now(),
      sender: "ai",
      text: `Loaded previous conversation for "${chat.title}". How can I help you today?`,
      time: new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})
    }]);
  };

  // SEND MESSAGE & SAVE TO DB
  const handleSendMessage = async (e, customText = null) => {
    if (e) e.preventDefault();
    const textToSend = customText || inputMessage;
    if (!textToSend.trim()) return;

    if (isNewChat) setIsNewChat(false);

    const timeString = new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
    const newUserMsg = { id: Date.now(), sender: "user", text: textToSend, time: timeString };
    
    // AI Dummy Response
    const newAiMsg = { 
      id: Date.now() + 1, 
      sender: "ai", 
      text: documentName 
        ? "Based on the document context, this ensures high representation of sub-groups, reducing error."
        : "I can help you with that! If you have a specific document in mind, feel free to upload it.",
      citation: documentName ? `📄 ${documentName}  Page 14 >` : null,
      time: timeString
    };

    setMessages(prev => [...prev, newUserMsg, newAiMsg]);
    setInputMessage("");

    // 🚀 CREATE OR UPDATE CHAT IN FIREBASE REAL-TIME DB 🚀
    if (userEmail) {
      const rollNo = userEmail.split('@')[0];
      const chatsRef = collection(db, "students", rollNo, "chats");
      
      try {
        if (!chatId) {
          // Pehli baar message bheja -> Nayi chat banao
          const newChatRef = await addDoc(chatsRef, {
            title: documentName || textToSend.substring(0, 25) + "...", // Context ka naam ya user ke sawal ka pehla hissa
            type: documentName ? "PDF" : "Chat",
            updatedAt: serverTimestamp(),
            createdAt: serverTimestamp()
          });
          setChatId(newChatRef.id);
        } else {
          // Chat pehle se exist karti hai -> Bas uska Timestamp update karo taaki wo top par aa jaye
          const chatDocRef = doc(db, "students", rollNo, "chats", chatId);
          await updateDoc(chatDocRef, {
            updatedAt: serverTimestamp()
          });
        }
      } catch (error) {
        console.error("Error saving chat history:", error);
      }
    }
  };

  return (
    <div className="flex h-screen bg-white font-sans overflow-hidden">
      
      {/* 1. LEFT SIDEBAR (Dark Theme - Full Height) */}
      <aside className={`${isSidebarExpanded ? 'w-[260px]' : 'w-[68px] items-center'} transition-all duration-300 bg-[#0B132B] text-slate-300 flex flex-col shrink-0 h-full relative z-40`}>
        
        {/* Top Logo Area inside Sidebar */}
        <div className={`h-16 flex items-center ${isSidebarExpanded ? 'px-5 justify-between' : 'justify-center w-full'} shrink-0`}>
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => navigate('/dashboard')}>
            <div className="w-7 h-7 rounded-md flex items-center justify-center bg-white/10 p-1">
              <img src={documindLogo} alt="Logo" className="w-full h-full object-contain" />
            </div>
            {isSidebarExpanded && <h2 className="font-bold text-[15px] text-white tracking-wide">DocuMind</h2>}
          </div>
          {isSidebarExpanded && (
            <button onClick={() => setIsSidebarExpanded(false)} className="text-slate-400 hover:text-white transition-colors">
              <Menu size={18} />
            </button>
          )}
        </div>

        <div className="p-3 w-full flex justify-center mt-2">
          {isSidebarExpanded ? (
            <button onClick={handleNewChat} className="w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white py-2.5 rounded-full text-[13px] font-bold shadow-md transition-colors">
              <Plus size={16} /> New Chat
            </button>
          ) : (
            <button onClick={handleNewChat} className="w-10 h-10 flex items-center justify-center bg-blue-600 hover:bg-blue-500 text-white rounded-full shadow-md transition-colors" title="New Chat">
              <Plus size={20} />
            </button>
          )}
        </div>
        
        <nav className={`px-3 space-y-1 mb-6 mt-4 w-full ${!isSidebarExpanded && 'flex flex-col items-center'}`}>
          <button onClick={() => navigate('/dashboard')} className={`flex items-center gap-3 px-3 py-2 text-[13px] font-medium hover:bg-white/10 hover:text-white rounded-lg transition-colors ${!isSidebarExpanded ? 'justify-center w-10 h-10 p-0' : 'w-full'}`} title={!isSidebarExpanded ? 'Home' : ''}>
            <Home size={18}/> {isSidebarExpanded && <span>Home</span>}
          </button>
          <button onClick={() => navigate('/upload')} className={`flex items-center gap-3 px-3 py-2 text-[13px] font-medium hover:bg-white/10 hover:text-white rounded-lg transition-colors ${!isSidebarExpanded ? 'justify-center w-10 h-10 p-0' : 'w-full'}`} title={!isSidebarExpanded ? 'Upload' : ''}>
            <UploadCloud size={18}/> {isSidebarExpanded && <span>Upload Document</span>}
          </button>
          <button className={`flex items-center gap-3 px-3 py-2 text-[13px] font-medium hover:bg-white/10 hover:text-white rounded-lg transition-colors ${!isSidebarExpanded ? 'justify-center w-10 h-10 p-0' : 'w-full'}`} title={!isSidebarExpanded ? 'My Documents' : ''}>
            <FileText size={18}/> {isSidebarExpanded && <span>My Documents</span>}
          </button>
        </nav>

        {/* 🚀 REAL-TIME CHATS LIST RENDERER 🚀 */}
        <div className="flex-1 overflow-y-auto px-3 w-full custom-scrollbar">
          {isSidebarExpanded && (
            <div className="flex items-center justify-between px-3 mb-2">
              <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Recent Chats</span>
            </div>
          )}
          <div className={`space-y-1 ${!isSidebarExpanded && 'flex flex-col items-center'}`}>
            
            {recentChats.length === 0 && isSidebarExpanded && (
              <p className="text-[11px] text-slate-500 px-3 mt-4 text-center">No chats yet</p>
            )}

            {recentChats.map((chat) => (
              <div 
                key={chat.id} 
                onClick={() => loadChat(chat)}
                className={`cursor-pointer transition-colors ${chatId === chat.id ? 'bg-[#1C274A] text-white shadow-inner' : 'hover:bg-white/5 border border-transparent text-slate-400'} ${!isSidebarExpanded ? 'p-2 rounded-full w-10 h-10 flex justify-center items-center' : 'p-2.5 rounded-xl'}`} 
                title={!isSidebarExpanded ? chat.title : ''}
              >
                <div className={`flex items-center ${isSidebarExpanded ? 'gap-3' : 'justify-center w-full'}`}>
                  <MessageSquare size={16} className={`${chatId === chat.id ? "text-blue-400" : "text-slate-500"}`} />
                  {isSidebarExpanded && (
                    <div className="overflow-hidden flex-1">
                      <h5 className={`text-[12px] font-medium truncate ${chatId === chat.id ? 'text-white' : 'text-slate-300'}`}>{chat.title}</h5>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Profile Settings in Sidebar */}
        <div className="p-4 w-full mt-auto mb-2">
          {isSidebarExpanded ? (
            <div className="flex items-center gap-3 bg-white/5 p-2 rounded-xl border border-white/10 cursor-pointer hover:bg-white/10 transition-colors">
              <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-xs">
                {userInitial}
              </div>
              <div className="overflow-hidden flex-1">
                <h4 className="text-[12px] font-bold text-white truncate">{userName}</h4>
                <p className="text-[10px] text-slate-400 truncate">Learner</p>
              </div>
              <Settings size={14} className="text-slate-400" />
            </div>
          ) : (
            <div className="flex justify-center">
              <div className="w-9 h-9 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-xs cursor-pointer hover:ring-2 ring-white/20 transition-all">
                {userInitial}
              </div>
            </div>
          )}
        </div>
      </aside>

      {/* 2. MAIN CHAT INTERFACE */}
      <main className="flex-1 flex flex-col min-w-0 relative border-r border-gray-200 h-full overflow-hidden bg-white">
        
        {/* Minimal Top Bar (Inside Main Area) */}
        <header className="h-14 px-4 sm:px-6 flex items-center justify-between shrink-0 bg-transparent absolute top-0 left-0 right-0 z-10">
          <div className="flex items-center gap-3">
            {!isSidebarExpanded && (
              <button onClick={() => setIsSidebarExpanded(true)} className="p-2 text-slate-500 hover:bg-slate-100 rounded-full transition-colors">
                <Menu size={20} />
              </button>
            )}
            <button className="flex items-center gap-1.5 px-3 py-1.5 text-[12px] font-bold text-slate-600 hover:bg-slate-100 rounded-lg transition-colors">
              DocuMind 1.5 <ChevronDown size={14} />
            </button>
          </div>

          <div className="flex items-center gap-2">
             <button className="flex items-center gap-2 px-3 py-1.5 text-[12px] font-semibold bg-blue-50 text-blue-600 rounded-full hover:bg-blue-100 transition-colors hidden sm:flex">
               <Sparkles size={14} /> Upgrade
             </button>
             <div className="relative group cursor-pointer ml-2">
                <div className="w-8 h-8 rounded-full bg-slate-200 text-slate-700 flex items-center justify-center font-bold text-xs border border-slate-300">
                  {userInitial}
                </div>
             </div>
          </div>
        </header>

        {/* ------------------------------------------------------------------ */}
        {/* VIEW 1: NEW CHAT (EMPTY STATE) */}
        {/* ------------------------------------------------------------------ */}
        {isNewChat && (
          <div className="flex-1 flex flex-col items-center justify-center p-6 mt-10 overflow-y-auto custom-scrollbar">
            <div className="max-w-3xl w-full flex flex-col items-center text-center space-y-8">
              
              <div className="space-y-2">
                <h1 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent pb-1">
                  Hello, {userName.split(' ')[0]}
                </h1>
                <p className="text-xl sm:text-2xl font-medium text-slate-400">
                  What do you want to learn today?
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full max-w-2xl mt-8">
                <div onClick={() => navigate('/upload')} className="bg-slate-50 border border-slate-100 p-4 rounded-2xl hover:bg-slate-100 cursor-pointer transition-colors text-left group">
                  <UploadCloud size={20} className="text-blue-500 mb-3" />
                  <p className="text-[13px] font-medium text-slate-700 group-hover:text-blue-700">Upload a document to analyze and generate smart notes</p>
                </div>
                <div className="bg-slate-50 border border-slate-100 p-4 rounded-2xl hover:bg-slate-100 cursor-pointer transition-colors text-left group">
                  <Compass size={20} className="text-emerald-500 mb-3" />
                  <p className="text-[13px] font-medium text-slate-700 group-hover:text-emerald-700">Explore learning paths based on your syllabus</p>
                </div>
                <div className="bg-slate-50 border border-slate-100 p-4 rounded-2xl hover:bg-slate-100 cursor-pointer transition-colors text-left group">
                  <CheckSquare size={20} className="text-orange-500 mb-3" />
                  <p className="text-[13px] font-medium text-slate-700 group-hover:text-orange-700">Test your knowledge with an AI-generated quiz</p>
                </div>
                <div className="bg-slate-50 border border-slate-100 p-4 rounded-2xl hover:bg-slate-100 cursor-pointer transition-colors text-left group">
                  <MessageSquare size={20} className="text-purple-500 mb-3" />
                  <p className="text-[13px] font-medium text-slate-700 group-hover:text-purple-700">Ask a general question about any academic topic</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ------------------------------------------------------------------ */}
        {/* VIEW 2: ACTIVE CHAT (DOCUMENT CONTEXT) */}
        {/* ------------------------------------------------------------------ */}
        {!isNewChat && (
          <div className="flex-1 flex flex-col h-full mt-14 overflow-hidden">
            
            {/* Document Context Header - Appears inside chat */}
            {documentName && (
              <div className="px-4 py-3 mx-4 sm:mx-8 bg-[#F8FAFC] border border-blue-100 rounded-2xl flex items-center justify-between shrink-0 mb-4 shadow-sm">
                <div className="flex items-center gap-3 overflow-hidden">
                  <div className="bg-red-50 text-red-600 p-2 rounded-lg shrink-0"><FileText size={16}/></div>
                  <div className="overflow-hidden">
                    <h3 className="font-bold text-[13px] text-slate-900 truncate">{documentName}</h3>
                    <div className="flex items-center gap-2 text-[10px] text-slate-500 mt-0.5 font-medium uppercase tracking-wider">
                      <span>PDF</span> <span>•</span> <span>{docSize} MB</span>
                      <span className="flex items-center gap-1 text-emerald-600 font-bold ml-1"><div className="w-1 h-1 bg-emerald-500 rounded-full"></div> Ready</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2 shrink-0">
                  <button className="flex items-center gap-1.5 px-3 py-1.5 text-[11px] font-bold text-blue-600 bg-white border border-blue-200 rounded-lg hover:bg-blue-50 transition-colors shadow-sm">
                    <View size={14}/> View
                  </button>
                </div>
              </div>
            )}

            {/* Chat Messages Area */}
            <div className="flex-1 overflow-y-auto px-4 sm:px-8 custom-scrollbar">
              <div className="max-w-3xl mx-auto space-y-8 pb-32">
                
                {messages.map((msg) => (
                  <div key={msg.id} className={`flex gap-4 ${msg.sender === 'user' ? 'flex-row-reverse' : ''}`}>
                    
                    {/* Avatar */}
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 mt-1 shadow-sm ${msg.sender === 'user' ? 'bg-[#1E3A8A] text-white' : 'bg-transparent'}`}>
                      {msg.sender === 'user' ? (
                        <span className="text-[12px] font-bold">{userInitial}</span>
                      ) : (
                        <div className="w-full h-full bg-blue-50 rounded-full border border-blue-100 flex items-center justify-center">
                           <img src={documindLogo} alt="AI" className="w-5 h-5 object-contain" />
                        </div>
                      )}
                    </div>

                    {/* Message Content */}
                    <div className={`flex flex-col gap-2 w-full max-w-[85%] ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}>
                      
                      <div className={`text-[14px] leading-relaxed relative ${msg.sender === 'user' ? 'bg-[#F4F4F5] text-slate-800 px-5 py-3 rounded-2xl shadow-sm' : 'bg-transparent text-slate-800 px-1 py-1 w-full'}`}>
                        {msg.text.split('\n').map((line, i) => <p key={i} className={i > 0 ? 'mt-3' : ''}>{line}</p>)}
                        
                        {/* AI Grid Actions inside the welcome bubble */}
                        {msg.isWelcome && documentName && (
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-5">
                            {[
                              { icon: FileText, title: "Summarize this document", desc: "Get a concise overview" },
                              { icon: Sparkles, title: "Key concepts", desc: "Important topics & terms" },
                              { icon: BookOpen, title: "Generate notes", desc: "Study-ready notes" },
                              { icon: CheckSquare, title: "Create a quiz", desc: "Test your understanding" }
                            ].map((action, i) => (
                              <button 
                                key={i} 
                                onClick={() => handleSendMessage(null, action.title)}
                                className="flex items-start gap-3 p-3 bg-white border border-gray-200 rounded-xl hover:bg-slate-50 hover:border-slate-300 text-left transition-all group shadow-sm"
                              >
                                <div className="text-blue-600 mt-0.5"><action.icon size={18} strokeWidth={1.5}/></div>
                                <div>
                                  <h5 className="text-[12px] font-bold text-slate-900 group-hover:text-blue-700">{action.title}</h5>
                                  <p className="text-[11px] text-slate-500 mt-0.5">{action.desc}</p>
                                </div>
                              </button>
                            ))}
                          </div>
                        )}

                        {/* AI Citation */}
                        {msg.citation && (
                          <div className="mt-4">
                             <div className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-red-50 border border-red-100 text-red-700 rounded-lg text-[12px] font-bold cursor-pointer hover:bg-red-100 transition-colors">
                              <FileText size={14} /> {msg.citation}
                            </div>
                          </div>
                        )}
                      </div>
                      
                      {/* Actions Row */}
                      {msg.sender === 'ai' && !msg.isWelcome && (
                        <div className="flex items-center gap-1 px-1">
                          <button className="p-1.5 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-md transition-colors"><ThumbsUp size={14}/></button>
                          <button className="p-1.5 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-md transition-colors"><ThumbsDown size={14}/></button>
                          <button className="p-1.5 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-md transition-colors ml-1"><Copy size={14}/></button>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ------------------------------------------------------------------ */}
        {/* COMMON INPUT AREA (Stays at the bottom) */}
        {/* ------------------------------------------------------------------ */}
        <div className="absolute bottom-0 left-0 right-0 bg-white px-4 sm:px-8 py-5 border-t border-transparent bg-gradient-to-t from-white via-white to-white/80 z-20">
          <div className="max-w-3xl mx-auto">
            <form onSubmit={(e) => handleSendMessage(e)} className="relative flex items-end gap-2 bg-[#F4F4F5] rounded-[24px] p-2 focus-within:bg-white focus-within:shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07)] focus-within:ring-1 focus-within:ring-slate-200 transition-all">
              
              <button type="button" className="p-3 text-slate-400 hover:text-slate-700 shrink-0 mb-0.5 rounded-full hover:bg-slate-200 transition-colors">
                <Plus size={20} />
              </button>
              
              <textarea 
                rows="1"
                placeholder={isNewChat ? "Ask DocuMind..." : "Ask anything about this document..."}
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyDown={(e) => { if(e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); handleSendMessage(e); } }}
                className="flex-1 max-h-32 bg-transparent text-[14px] text-slate-800 placeholder:text-slate-500 resize-none outline-none py-3.5 px-2 custom-scrollbar"
              />
              
              <div className="flex items-center gap-1 shrink-0 mb-1 mr-1">
                <button 
                  type="submit" 
                  disabled={!inputMessage.trim()}
                  className={`p-3 rounded-full ml-1 transition-all flex items-center justify-center ${inputMessage.trim() ? 'bg-slate-900 text-white shadow-sm hover:bg-slate-800' : 'bg-transparent text-slate-300 cursor-not-allowed'}`}
                >
                  <Send size={18} className={inputMessage.trim() ? 'ml-0.5' : ''} />
                </button>
              </div>
            </form>
            <p className="text-center text-[10px] text-slate-400 mt-3 font-medium">DocuMind can make mistakes. Verify important information with the source document.</p>
          </div>
        </div>
      </main>
    </div>
  );
}