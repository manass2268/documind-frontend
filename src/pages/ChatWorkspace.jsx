import React, { useState, useEffect, useRef } from "react";
import { 
  Menu, Search, Plus, FileText, ChevronLeft, ChevronRight, 
  Send, Sparkles, BookOpen, CheckSquare, Paperclip, View, 
  Download, MoreHorizontal, Settings, Bell, ChevronDown, UserCircle, LogOut,
  Image as ImageIcon, ZoomIn, ZoomOut, Maximize,
  Home, Bookmark, MessageSquare, Users, Star, LayoutTemplate,
  ThumbsUp, ThumbsDown, Copy, Compass, UploadCloud,
  Mic, Link as LinkIcon, HardDrive, X,
  MoreVertical, Pin, Trash2, Edit2, Share2, BookPlus
} from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";

// FIREBASE IMPORTS
import { auth, db } from "../firebase"; 
import { doc, getDoc, collection, query, orderBy, onSnapshot, addDoc, updateDoc, serverTimestamp, deleteDoc } from "firebase/firestore";
import { onAuthStateChanged, signOut } from "firebase/auth";

import documindLogo from "../assets/logo.png";

export default function ChatWorkspace() {
  const navigate = useNavigate();
  const location = useLocation();

  // --- USER STATES ---
  const [userName, setUserName] = useState("Loading...");
  const [userEmail, setUserEmail] = useState("");
  const [userInitial, setUserInitial] = useState("M"); 

  // --- WORKSPACE STATES ---
  const [inputMessage, setInputMessage] = useState("");
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(true);
  
  // Attachment Menu & Voice States
  const [isAttachmentMenuOpen, setIsAttachmentMenuOpen] = useState(false);
  const [isRecording, setIsRecording] = useState(false);
  const chatFileInputRef = useRef(null);
  const [chatAttachments, setChatAttachments] = useState([]);

  // --- AI LOADING & STREAMING STATES ---
  const [isAiTyping, setIsAiTyping] = useState(false); 
  const [isAiStreaming, setIsAiStreaming] = useState(false); 
  const [streamingText, setStreamingText] = useState(""); 
  const messagesEndRef = useRef(null);

  // --- REAL-TIME CHAT HISTORY STATES ---
  const [recentChats, setRecentChats] = useState([]);
  const [chatId, setChatId] = useState(null); 
  const [activeMenuId, setActiveMenuId] = useState(null); 
  
  // --- VECTOR DB STATE ---
  const [activeDocumentId, setActiveDocumentId] = useState(null);

  // Upload Navigation Setup
  const initialDocName = location.state?.documentName || "";
  const docSize = location.state?.fileSize ? (location.state.fileSize / (1024*1024)).toFixed(1) : "12.4";

  const [isNewChat, setIsNewChat] = useState(!initialDocName);
  const [documentName, setDocumentName] = useState(initialDocName);
  const [messages, setMessages] = useState([]);

  // Auto-scroll function
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isAiTyping, streamingText]); 

  // Mock Voice Recording Effect
  useEffect(() => {
    let timer;
    if (isRecording) {
      timer = setTimeout(() => {
        setInputMessage("What is the main conclusion of this document?");
        setIsRecording(false);
      }, 3000);
    }
    return () => clearTimeout(timer);
  }, [isRecording]);

  // Auth & Sidebar Data Listener
  useEffect(() => {
    let unsubscribeChats; 
    const unsubscribeAuth = onAuthStateChanged(auth, async (user) => {
      if (user) {
        setUserEmail(user.email);
        const rollNo = user.email.split('@')[0];
        try {
          // Fetch User Profile
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

          // Fetch Recent Chats
          const chatsRef = collection(db, "students", rollNo, "chats");
          const q = query(chatsRef, orderBy("updatedAt", "desc"));
          
          unsubscribeChats = onSnapshot(q, (snapshot) => {
            const fetchedChats = snapshot.docs.map(doc => {
              const data = doc.data();
              let timeString = "Just now";
              if (data.updatedAt) {
                const date = data.updatedAt.toDate();
                const today = new Date();
                if (date.toDateString() === today.toDateString()) {
                  timeString = date.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'}); 
                } else {
                  timeString = date.toLocaleDateString([], { month: 'short', day: 'numeric' }); 
                }
              }
              return { 
                id: doc.id, 
                title: data.title || "New Chat", 
                type: data.type || "Chat", 
                documentId: data.documentId || null,
                time: timeString,
                isPinned: data.isPinned || false
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
      if (unsubscribeChats) unsubscribeChats(); 
    };
  }, [navigate]);

  // Active Chat Message Listener
  useEffect(() => {
    let unsubscribeMessages;
    if (userEmail && chatId) {
      const rollNo = userEmail.split('@')[0];
      const messagesRef = collection(db, "students", rollNo, "chats", chatId, "messages");
      const q = query(messagesRef, orderBy("createdAt", "asc"));
      
      unsubscribeMessages = onSnapshot(q, (snapshot) => {
        const fetchedMessages = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setMessages(fetchedMessages);
      });
    } else if (!chatId && initialDocName) {
        setMessages([{
          id: 1, sender: "ai",
          text: `Hi! I've analyzed your document "${initialDocName}".\nYou can ask me anything about this document.`,
          isWelcome: true,
          time: new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})
        }]);
    } else {
        setMessages([]);
    }

    return () => {
      if (unsubscribeMessages) unsubscribeMessages();
    };
  }, [chatId, userEmail, initialDocName]);

  const handleLogout = async () => {
    try { await signOut(auth); navigate("/login"); } catch (error) { console.error(error); }
  };

  const handleNewChat = () => {
    setIsNewChat(true); 
    setDocumentName(""); 
    setChatId(null); 
    setActiveDocumentId(null); 
    setChatAttachments([]); 
  };

  const loadChat = (chat) => {
    setChatId(chat.id); 
    setDocumentName(chat.title); 
    setActiveDocumentId(chat.documentId || null); 
    setIsNewChat(false); 
    setActiveMenuId(null); 
  };

  const handleDeleteChat = async (e, id) => {
    e.stopPropagation(); 
    if (userEmail) {
      const rollNo = userEmail.split('@')[0];
      try {
        await deleteDoc(doc(db, "students", rollNo, "chats", id));
        if (chatId === id) handleNewChat(); 
        setActiveMenuId(null);
      } catch (error) { console.error("Error deleting chat:", error); }
    }
  };

  const handleTogglePin = async (e, id, currentStatus) => {
    e.stopPropagation();
    if (userEmail) {
      const rollNo = userEmail.split('@')[0];
      try {
        await updateDoc(doc(db, "students", rollNo, "chats", id), { isPinned: !currentStatus });
        setActiveMenuId(null);
      } catch (error) { console.error("Error pinning chat:", error); }
    }
  };

  const handleChatFileSelect = (e) => {
    const files = Array.from(e.target.files);
    if (files.length > 0) setChatAttachments((prev) => [...prev, ...files]);
    e.target.value = null; 
    setIsAttachmentMenuOpen(false); 
  };

  const removeAttachment = (indexToRemove) => {
    setChatAttachments(chatAttachments.filter((_, idx) => idx !== indexToRemove));
  };

  // ==========================================
  // 🚀 MAIN SEND MESSAGE HANDLER (STREAMING + RAG)
  // ==========================================
  const handleSendMessage = async (e, customText = null) => {
    if (e) e.preventDefault();
    const textToSend = customText || inputMessage;
    const hasAttachments = chatAttachments.length > 0;
    
    if (!textToSend.trim() && !hasAttachments) return;

    if (isNewChat) setIsNewChat(false);
    
    setInputMessage(""); 
    setIsAttachmentMenuOpen(false); 

    if (userEmail) {
      const rollNo = userEmail.split('@')[0];
      const chatsRef = collection(db, "students", rollNo, "chats");
      
      let currentChatId = chatId;
      let currentDocId = activeDocumentId;
      const timeString = new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
      
      try {
        // 1. Create/Update Firebase Chat Document
        if (!currentChatId) {
          const newChatRef = await addDoc(chatsRef, {
            title: documentName || textToSend.substring(0, 25) + "...", 
            type: documentName ? "PDF" : "Chat",
            isPinned: false, 
            updatedAt: serverTimestamp(), 
            createdAt: serverTimestamp()
          });
          currentChatId = newChatRef.id;
          setChatId(currentChatId); 
        } else {
          await updateDoc(doc(db, "students", rollNo, "chats", currentChatId), { updatedAt: serverTimestamp() });
        }

        // 2. Save User Message to UI instantly
        let messageText = textToSend;
        if (hasAttachments && !textToSend) messageText = `Sent ${chatAttachments.length} attachment(s)`;

        await addDoc(collection(db, "students", rollNo, "chats", currentChatId, "messages"), {
          sender: "user", text: messageText, attachments: chatAttachments.map(f => f.name), 
          time: timeString, createdAt: serverTimestamp()
        });

        const currentAttachments = [...chatAttachments];
        setChatAttachments([]);
        
        // 3. Start AI Loading State
        setIsAiTyping(true); 
        setStreamingText(""); 
        
        let combinedQuery = textToSend;

        // 4. PROCESS ATTACHMENTS (Images or Vector DB PDFs)
        if (hasAttachments) {
          for (const file of currentAttachments) {
            const formData = new FormData();
            const isPdf = file.type === "application/pdf";
            formData.append(isPdf ? "file" : "image", file);
            
            const endpoint = isPdf 
              ? "http://127.0.0.1:8000/api/upload-pdf" 
              : "http://127.0.0.1:8000/api/process-image";

            try {
              const uploadRes = await fetch(endpoint, {
                method: "POST",
                body: formData,
              });
              
              if (uploadRes.ok) {
                const data = await uploadRes.json();
                
                if (isPdf) {
                  currentDocId = data.document_id;
                  setActiveDocumentId(currentDocId);
                  
                  // Save Document ID to chat for future reference
                  await updateDoc(doc(db, "students", rollNo, "chats", currentChatId), { 
                      documentId: currentDocId, type: "PDF", title: file.name
                  });
                  setDocumentName(file.name);
                } else {
                  // For images, append extracted text directly to the query
                  combinedQuery = `Image Content:\n${data.extracted_text}\n\nUser Question: ${textToSend}`;
                }
              } else {
                console.error("File processing error");
              }
            } catch (err) {
              console.error("Failed to upload file:", err);
            }
          }
        }
        
        // 5. FETCH STREAMING DATA FROM FASTAPI
        try {
          const response = await fetch("http://127.0.0.1:8000/api/chat", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ 
                query: combinedQuery || "Please analyze the uploaded document.",
                document_id: currentDocId 
            }) 
          });

          if (!response.ok) throw new Error("Backend API failed");
          
          setIsAiTyping(false); // Hide 3 dots
          setIsAiStreaming(true); // Start Typewriter

          const reader = response.body.getReader();
          const decoder = new TextDecoder("utf-8");
          let finalAiText = "";

          while (true) {
            const { done, value } = await reader.read();
            if (done) break;
            
            const chunk = decoder.decode(value, { stream: true });
            finalAiText += chunk;
            setStreamingText(finalAiText);
          }

          // 6. Save COMPLETE response to Firebase
          await addDoc(collection(db, "students", rollNo, "chats", currentChatId, "messages"), {
            sender: "ai",
            text: finalAiText,
            time: new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'}),
            createdAt: serverTimestamp()
          });

          setIsAiStreaming(false);
          setStreamingText("");

        } catch (backendError) {
          setIsAiTyping(false);
          setIsAiStreaming(false);
          await addDoc(collection(db, "students", rollNo, "chats", currentChatId, "messages"), {
            sender: "ai", text: "⚠ Server Error: Could not connect to  the Server.",
            time: new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'}), createdAt: serverTimestamp()
          });
        }
      } catch (error) { console.error("Error:", error); }
    }
  };

  const isSendDisabled = !inputMessage.trim() && chatAttachments.length === 0;
  const pinnedChats = recentChats.filter(chat => chat.isPinned);
  const unpinnedChats = recentChats.filter(chat => !chat.isPinned);

  return (
    <div className="flex h-screen bg-white font-sans overflow-hidden">
      
      {activeMenuId && (
        <div className="fixed inset-0 z-40" onClick={() => setActiveMenuId(null)}></div>
      )}

      {/* ========================================================== */}
      {/* 1. LEFT SIDEBAR */}
      {/* ========================================================== */}
      <aside className={`${isSidebarExpanded ? 'w-[260px]' : 'w-[68px] items-center'} transition-all duration-300 bg-[#0B132B] text-slate-300 flex flex-col shrink-0 h-full relative z-40`}>
        
        {/* Logo Section */}
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

        {/* New Chat Button */}
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
        
        {/* Navigation Links */}
        <nav className={`px-3 space-y-1 mb-6 mt-4 w-full ${!isSidebarExpanded && 'flex flex-col items-center'}`}>
          <button onClick={() => navigate('/dashboard')} className={`flex items-center gap-3 px-3 py-2 text-[13px] font-medium hover:bg-white/10 hover:text-white rounded-lg transition-colors ${!isSidebarExpanded ? 'justify-center w-10 h-10 p-0' : 'w-full'}`} title={!isSidebarExpanded ? 'Home' : ''}>
            <Home size={18} /> {isSidebarExpanded && <span>Home</span>}
          </button>
          <button onClick={() => navigate('/upload')} className={`flex items-center gap-3 px-3 py-2 text-[13px] font-medium hover:bg-white/10 hover:text-white rounded-lg transition-colors ${!isSidebarExpanded ? 'justify-center w-10 h-10 p-0' : 'w-full'}`} title={!isSidebarExpanded ? 'Upload' : ''}>
            <UploadCloud size={18} /> {isSidebarExpanded && <span>Upload Document</span>}
          </button>
          <button className={`flex items-center gap-3 px-3 py-2 text-[13px] font-medium hover:bg-white/10 hover:text-white rounded-lg transition-colors ${!isSidebarExpanded ? 'justify-center w-10 h-10 p-0' : 'w-full'}`} title={!isSidebarExpanded ? 'My Documents' : ''}>
            <FileText size={18} /> {isSidebarExpanded && <span>My Documents</span>}
          </button>
        </nav>

        {/* Chats History List */}
        <div className="flex-1 overflow-y-auto px-3 w-full custom-scrollbar pb-4">
          
          {/* Pinned Chats */}
          {pinnedChats.length > 0 && (
            <div className="mb-4">
              {isSidebarExpanded && <span className="text-[11px] font-bold text-slate-500 px-3 mb-2 block uppercase tracking-widest">Pinned</span>}
              <div className={`space-y-1 ${!isSidebarExpanded && 'flex flex-col items-center'}`}>
                {pinnedChats.map((chat) => (
                  <div key={chat.id} className="relative group">
                    <div onClick={() => loadChat(chat)} className={`cursor-pointer transition-colors flex items-center justify-between ${chatId === chat.id ? 'bg-[#1C274A] text-white shadow-inner' : 'hover:bg-white/5 border border-transparent text-slate-300'} ${!isSidebarExpanded ? 'p-2 rounded-full w-10 h-10 flex justify-center items-center mx-auto' : 'p-2.5 rounded-xl'}`}>
                      <div className={`flex items-center ${isSidebarExpanded ? 'gap-3' : 'justify-center w-full'} overflow-hidden`}>
                        <MessageSquare className={`${chatId === chat.id ? "text-blue-400" : "text-slate-500"} shrink-0`} size={16} />
                        {isSidebarExpanded && (
                          <div className="overflow-hidden flex-1 pr-6">
                            <h5 className={`text-[12px] font-medium truncate ${chatId === chat.id ? 'text-white' : 'text-slate-300'}`}>{chat.title}</h5>
                          </div>
                        )}
                      </div>
                    </div>
                    {isSidebarExpanded && (
                      <button onClick={(e) => { e.stopPropagation(); setActiveMenuId(activeMenuId === chat.id ? null : chat.id); }} className={`absolute right-2 top-1/2 -translate-y-1/2 p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-700 transition-all ${activeMenuId === chat.id ? 'opacity-100 bg-slate-700 text-white' : 'opacity-0 group-hover:opacity-100'}`}>
                        <MoreVertical size={14} />
                      </button>
                    )}
                    {activeMenuId === chat.id && isSidebarExpanded && (
                      <div className="absolute right-2 top-10 w-48 bg-[#1E293B] border border-slate-700 rounded-xl shadow-2xl py-1.5 z-[100] animate-in fade-in zoom-in duration-150 text-slate-300">
                        <button className="w-full flex items-center gap-3 px-4 py-2 text-[12px] hover:bg-white/10 transition-colors" onClick={(e) => { e.stopPropagation(); setActiveMenuId(null); }}><Share2 size={14} /> Share conversation</button>
                        <button className="w-full flex items-center gap-3 px-4 py-2 text-[12px] hover:bg-white/10 transition-colors" onClick={(e) => handleTogglePin(e, chat.id, chat.isPinned)}><Pin className={chat.isPinned ? "fill-current" : ""} size={14} /> {chat.isPinned ? "Unpin" : "Pin"}</button>
                        <button className="w-full flex items-center gap-3 px-4 py-2 text-[12px] hover:bg-white/10 transition-colors" onClick={(e) => { e.stopPropagation(); setActiveMenuId(null); }}><Edit2 size={14} /> Rename</button>
                        <button className="w-full flex items-center gap-3 px-4 py-2 text-[12px] hover:bg-white/10 transition-colors" onClick={(e) => { e.stopPropagation(); setActiveMenuId(null); }}><BookPlus size={14} /> Add to notebook</button>
                        <div className="border-t border-slate-700 my-1"></div>
                        <button className="w-full flex items-center gap-3 px-4 py-2 text-[12px] text-red-400 hover:bg-red-500/10 hover:text-red-300 transition-colors" onClick={(e) => handleDeleteChat(e, chat.id)}><Trash2 size={14} /> Delete</button>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Recent Chats */}
          {isSidebarExpanded && <span className="text-[11px] font-bold text-slate-500 px-3 mb-2 block uppercase tracking-widest">Recent Chats</span>}
          <div className={`space-y-1 ${!isSidebarExpanded && 'flex flex-col items-center'}`}>
            {unpinnedChats.map((chat) => (
              <div key={chat.id} className="relative group">
                <div onClick={() => loadChat(chat)} className={`cursor-pointer transition-colors flex items-center justify-between ${chatId === chat.id ? 'bg-[#1C274A] text-white shadow-inner' : 'hover:bg-white/5 border border-transparent text-slate-300'} ${!isSidebarExpanded ? 'p-2 rounded-full w-10 h-10 flex justify-center items-center mx-auto' : 'p-2.5 rounded-xl'}`}>
                  <div className={`flex items-center ${isSidebarExpanded ? 'gap-3' : 'justify-center w-full'} overflow-hidden`}>
                    <MessageSquare className={`${chatId === chat.id ? "text-blue-400" : "text-slate-500"} shrink-0`} size={16} />
                    {isSidebarExpanded && (
                      <div className="overflow-hidden flex-1 pr-6">
                        <h5 className={`text-[12px] font-medium truncate ${chatId === chat.id ? 'text-white' : 'text-slate-300'}`}>{chat.title}</h5>
                      </div>
                    )}
                  </div>
                </div>
                {isSidebarExpanded && (
                  <button onClick={(e) => { e.stopPropagation(); setActiveMenuId(activeMenuId === chat.id ? null : chat.id); }} className={`absolute right-2 top-1/2 -translate-y-1/2 p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-700 transition-all ${activeMenuId === chat.id ? 'opacity-100 bg-slate-700 text-white' : 'opacity-0 group-hover:opacity-100'}`}>
                    <MoreVertical size={14} />
                  </button>
                )}
                {activeMenuId === chat.id && isSidebarExpanded && (
                  <div className="absolute right-2 top-10 w-48 bg-[#1E293B] border border-slate-700 rounded-xl shadow-2xl py-1.5 z-[100] animate-in fade-in zoom-in duration-150 text-slate-300">
                    <button className="w-full flex items-center gap-3 px-4 py-2 text-[12px] hover:bg-white/10 transition-colors" onClick={(e) => { e.stopPropagation(); setActiveMenuId(null); }}><Share2 size={14} /> Share conversation</button>
                    <button className="w-full flex items-center gap-3 px-4 py-2 text-[12px] hover:bg-white/10 transition-colors" onClick={(e) => handleTogglePin(e, chat.id, chat.isPinned)}><Pin className={chat.isPinned ? "fill-current" : ""} size={14} /> {chat.isPinned ? "Unpin" : "Pin"}</button>
                    <button className="w-full flex items-center gap-3 px-4 py-2 text-[12px] hover:bg-white/10 transition-colors" onClick={(e) => { e.stopPropagation(); setActiveMenuId(null); }}><Edit2 size={14} /> Rename</button>
                    <button className="w-full flex items-center gap-3 px-4 py-2 text-[12px] hover:bg-white/10 transition-colors" onClick={(e) => { e.stopPropagation(); setActiveMenuId(null); }}><BookPlus size={14} /> Add to notebook</button>
                    <div className="border-t border-slate-700 my-1"></div>
                    <button className="w-full flex items-center gap-3 px-4 py-2 text-[12px] text-red-400 hover:bg-red-500/10 hover:text-red-300 transition-colors" onClick={(e) => handleDeleteChat(e, chat.id)}><Trash2 size={14} /> Delete</button>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* User Profile Bar */}
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
              <Settings className="text-slate-400" size={14} />
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

      {/* ========================================================== */}
      {/* 2. MAIN CHAT INTERFACE */}
      {/* ========================================================== */}
      <main className="flex-1 flex flex-col min-w-0 relative border-r border-gray-200 h-full overflow-hidden bg-white">
        
        {/* Top Header */}
        <header className="h-14 px-4 sm:px-6 flex items-center justify-between shrink-0 bg-transparent absolute top-0 left-0 right-0 z-10 pointer-events-none">
          <div className="flex items-center gap-3 pointer-events-auto">
            {!isSidebarExpanded && (
              <button onClick={() => setIsSidebarExpanded(true)} className="p-2 text-slate-500 hover:bg-slate-100 rounded-full transition-colors mt-2">
                <Menu size={20} />
              </button>
            )}
            <button className="flex items-center gap-1.5 px-3 py-1.5 text-[12px] font-bold text-slate-600 hover:bg-slate-100 rounded-lg transition-colors mt-2">
              DocuMind-AI <ChevronDown size={14} />
            </button>
          </div>
          <div className="flex items-center gap-2 pointer-events-auto mt-2">
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

        {/* View 1: New Empty Chat (Greeting + 4 Cards) */}
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
                <div onClick={() => { chatFileInputRef.current.click() }} className="bg-slate-50 border border-slate-100 p-4 rounded-2xl hover:bg-slate-100 cursor-pointer transition-colors text-left group">
                  <UploadCloud className="text-blue-500 mb-3" size={20} />
                  <p className="text-[13px] font-medium text-slate-700 group-hover:text-blue-700">Upload a PDF to analyze and generate smart notes</p>
                </div>
                <div className="bg-slate-50 border border-slate-100 p-4 rounded-2xl hover:bg-slate-100 cursor-pointer transition-colors text-left group">
                  <Compass className="text-emerald-500 mb-3" size={20} />
                  <p className="text-[13px] font-medium text-slate-700 group-hover:text-emerald-700">Explore learning paths based on your syllabus</p>
                </div>
                <div className="bg-slate-50 border border-slate-100 p-4 rounded-2xl hover:bg-slate-100 cursor-pointer transition-colors text-left group">
                  <CheckSquare className="text-orange-500 mb-3" size={20} />
                  <p className="text-[13px] font-medium text-slate-700 group-hover:text-orange-700">Test your knowledge with an AI-generated quiz</p>
                </div>
                <div className="bg-slate-50 border border-slate-100 p-4 rounded-2xl hover:bg-slate-100 cursor-pointer transition-colors text-left group">
                  <MessageSquare className="text-purple-500 mb-3" size={20} />
                  <p className="text-[13px] font-medium text-slate-700 group-hover:text-purple-700">Ask a general question about any academic topic</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* View 2: Active Chat History */}
        {!isNewChat && (
          <div className="flex-1 flex flex-col h-full mt-14 overflow-hidden">
            
            {/* The Document Banner has been completely removed from here! */}

            <div className="flex-1 overflow-y-auto px-4 sm:px-8 custom-scrollbar pt-4">
              <div className="max-w-3xl mx-auto space-y-8 pb-32">
                
                {/* Messages Loop */}
                {messages.map((msg) => (
                  <div key={msg.id} className={`flex gap-4 ${msg.sender === 'user' ? 'flex-row-reverse' : ''}`}>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 mt-1 shadow-sm ${msg.sender === 'user' ? 'bg-[#1E3A8A] text-white' : 'bg-transparent'}`}>
                      {msg.sender === 'user' ? (
                        <span className="text-[12px] font-bold">{userInitial}</span>
                      ) : (
                        <div className="w-full h-full bg-blue-50 rounded-full border border-blue-100 flex items-center justify-center">
                           <img src={documindLogo} alt="AI" className="w-5 h-5 object-contain" />
                        </div>
                      )}
                    </div>
                    
                    <div className={`flex flex-col gap-2 w-full max-w-[85%] ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}>
                      <div className={`text-[14px] leading-relaxed relative ${msg.sender === 'user' ? 'bg-[#F4F4F5] text-slate-800 px-5 py-3 rounded-2xl shadow-sm' : 'bg-transparent text-slate-800 px-1 py-1 w-full'}`}>
                        
                        {/* Show file attachments if sent */}
                        {msg.attachments && msg.attachments.length > 0 && (
                           <div className="flex flex-wrap gap-2 mb-2">
                             {msg.attachments.map((fileName, idx) => (
                               <div key={idx} className="flex items-center gap-2 bg-white border border-slate-200 px-3 py-2 rounded-xl shadow-sm">
                                 <FileText className="text-blue-500" size={16} />
                                 <span className="text-[12px] font-medium text-slate-700 truncate max-w-[150px]">{fileName}</span>
                               </div>
                             ))}
                           </div>
                        )}
                        
                        {/* Text formatting */}
                        {msg.text && msg.text.split('\n').map((line, i) => <p key={i} className={i > 0 ? 'mt-3' : ''}>{line}</p>)}
                      </div>
                      
                      {/* AI Action Buttons */}
                      {msg.sender === 'ai' && !msg.isWelcome && (
                        <div className="flex items-center gap-1 px-1">
                          <button className="p-1.5 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-md transition-colors"><ThumbsUp size={14} /></button>
                          <button className="p-1.5 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-md transition-colors"><ThumbsDown size={14} /></button>
                          <button className="p-1.5 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-md transition-colors ml-1"><Copy size={14} /></button>
                        </div>
                      )}
                    </div>
                  </div>
                ))}

                {/* 🚀 AI CONNECTION INDICATOR (3-dots) */}
                {isAiTyping && (
                  <div className="flex gap-4">
                    <div className="w-8 h-8 rounded-full flex items-center justify-center shrink-0 mt-1 shadow-sm bg-transparent">
                      <div className="w-full h-full bg-blue-50 rounded-full border border-blue-100 flex items-center justify-center">
                         <img src={documindLogo} alt="AI" className="w-5 h-5 object-contain animate-pulse" />
                      </div>
                    </div>
                    <div className="flex flex-col gap-2 w-full max-w-[85%] items-start">
                      <div className="bg-transparent text-slate-800 px-3 py-3 w-full">
                        <div className="flex space-x-1.5 items-center mt-2">
                          <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce"></div>
                          <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                          <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                
                {/* 🚀 AI REAL-TIME STREAMING BUBBLE */}
                {isAiStreaming && (
                  <div className="flex gap-4">
                    <div className="w-8 h-8 rounded-full flex items-center justify-center shrink-0 mt-1 shadow-sm bg-transparent">
                      <div className="w-full h-full bg-blue-50 rounded-full border border-blue-100 flex items-center justify-center">
                         <img src={documindLogo} alt="AI" className="w-5 h-5 object-contain" />
                      </div>
                    </div>
                    <div className="flex flex-col gap-2 w-full max-w-[85%] items-start">
                      <div className="text-[14px] leading-relaxed relative bg-transparent text-slate-800 px-1 py-1 w-full">
                        {streamingText.split('\n').map((line, i, arr) => (
                          <p key={i} className={i > 0 ? 'mt-3' : ''}>
                            {line}
                            {i === arr.length - 1 && (
                              <span className="inline-block w-1.5 h-3.5 ml-1 bg-blue-500 animate-pulse align-middle"></span>
                            )}
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
                
                {/* Auto-scroll target */}
                <div ref={messagesEndRef} />
              </div>
            </div>
          </div>
        )}

        {/* ========================================================== */}
        {/* 3. BOTTOM INPUT AREA */}
        {/* ========================================================== */}
        <div className="absolute bottom-0 left-0 right-0 bg-white px-4 sm:px-8 py-5 border-t border-transparent bg-gradient-to-t from-white via-white to-white/80 z-20 pointer-events-none">
          <div className="max-w-3xl mx-auto relative pointer-events-auto">
            
            {/* Attachment Dropdown Menu */}
            {isAttachmentMenuOpen && (
              <div className="absolute bottom-[80px] left-0 bg-white border border-slate-200 shadow-xl rounded-2xl p-2 w-56 z-50 animate-in slide-in-from-bottom-2 fade-in duration-200">
                <button 
                  onClick={() => { chatFileInputRef.current.click(); }}
                  className="w-full flex items-center gap-3 px-3 py-2.5 text-[13px] font-semibold text-slate-700 hover:bg-blue-50 hover:text-blue-700 rounded-xl transition-colors"
                >
                  <UploadCloud size={18} className="text-blue-500" /> Upload from computer
                </button>
                <button className="w-full flex items-center gap-3 px-3 py-2.5 text-[13px] font-semibold text-slate-700 hover:bg-emerald-50 hover:text-emerald-700 rounded-xl transition-colors">
                  <HardDrive size={18} className="text-emerald-500" /> Add from Google Drive
                </button>
                <button className="w-full flex items-center gap-3 px-3 py-2.5 text-[13px] font-semibold text-slate-700 hover:bg-orange-50 hover:text-orange-700 rounded-xl transition-colors">
                  <LinkIcon size={18} className="text-orange-500" /> Add a Link
                </button>
                <button className="w-full flex items-center gap-3 px-3 py-2.5 text-[13px] font-semibold text-slate-700 hover:bg-purple-50 hover:text-purple-700 rounded-xl transition-colors">
                  <ImageIcon size={18} className="text-purple-500" /> Upload Image
                </button>
              </div>
            )}

            <input 
              type="file" 
              ref={chatFileInputRef} 
              onChange={handleChatFileSelect} 
              className="hidden" 
              multiple
            />

            <form onSubmit={(e) => handleSendMessage(e)} className={`relative flex flex-col bg-[#F4F4F5] rounded-[24px] p-2 focus-within:bg-white focus-within:shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07)] focus-within:ring-1 focus-within:ring-slate-200 transition-all ${isAttachmentMenuOpen ? 'ring-1 ring-slate-200 bg-white' : ''}`}>
              
              {/* Attachment Pills UI */}
              {chatAttachments.length > 0 && (
                <div className="flex flex-wrap gap-2 px-2 pt-2 pb-1">
                  {chatAttachments.map((file, idx) => (
                    <div key={idx} className="flex items-center gap-2 bg-white border border-slate-200 px-3 py-1.5 rounded-lg shadow-sm">
                      <FileText size={14} className="text-blue-500 shrink-0" />
                      <span className="text-[11px] font-bold text-slate-700 max-w-[120px] truncate">{file.name}</span>
                      <X size={14} className="text-slate-400 hover:text-red-500 cursor-pointer shrink-0 ml-1" onClick={() => removeAttachment(idx)} />
                    </div>
                  ))}
                </div>
              )}

              <div className="flex items-end gap-2 w-full">
                {/* Plus Button */}
                <button 
                  type="button" 
                  onClick={() => setIsAttachmentMenuOpen(!isAttachmentMenuOpen)}
                  className={`p-3 shrink-0 mb-0.5 rounded-full transition-all ${isAttachmentMenuOpen ? 'bg-slate-200 text-slate-800 rotate-45' : 'text-slate-400 hover:text-slate-700 hover:bg-slate-200'}`}
                >
                  <Plus size={20} />
                </button>
                
                {/* Input Textarea */}
                <textarea 
                  rows="1"
                  placeholder={isRecording ? "Listening..." : (isNewChat ? "Ask DocuMind..." : "Ask anything about this document...")}
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  onKeyDown={(e) => { if(e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); handleSendMessage(e); } }}
                  className={`flex-1 max-h-32 bg-transparent text-[14px] resize-none outline-none py-3.5 px-2 custom-scrollbar transition-colors ${isRecording ? 'text-red-500 placeholder:text-red-400 font-medium' : 'text-slate-800 placeholder:text-slate-500'}`}
                />
                
                <div className="flex items-center gap-1 shrink-0 mb-1 mr-1">
                  {/* Mic Button */}
                  <button 
                    type="button" 
                    onClick={() => setIsRecording(!isRecording)}
                    className={`p-2.5 rounded-full transition-all flex items-center justify-center ${isRecording ? 'bg-red-50 text-red-500 animate-pulse' : 'text-slate-400 hover:text-slate-700 hover:bg-slate-200'}`}
                    title="Voice Input"
                  >
                    <Mic size={18} />
                  </button>

                  {/* Send Button */}
                  <button 
                    type="submit" 
                    disabled={isSendDisabled}
                    className={`p-3 rounded-full ml-1 transition-all flex items-center justify-center ${!isSendDisabled ? 'bg-slate-900 text-white shadow-sm hover:bg-slate-800 scale-100' : 'bg-transparent text-slate-300 cursor-not-allowed scale-95'}`}
                  >
                    <Send className={!isSendDisabled ? 'ml-0.5' : ''} size={18} />
                  </button>
                </div>
              </div>
            </form>
            
            <p className="text-center text-[10px] text-slate-400 mt-3 font-medium">DocuMind can make mistakes. Verify important information with the source document.</p>
          </div>
        </div>
      </main>
    </div>
  );
}