import React, { useState, useEffect, useRef } from 'react';
import { useOutletContext, useNavigate } from 'react-router-dom';
import { 
  Send, FileText, Sparkles, Code, GraduationCap, X, FileUp, Clock, 
  Cloud, MoreHorizontal, ChevronRight, Image as ImageIcon, 
  BookOpen, FileCode, Plus, CheckCircle2, Loader2
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// 🔴 Firebase Imports
import { db } from '../firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

const MenuItem = ({ icon, label, onClick, rightIcon }) => (
  <button onClick={onClick} className="flex items-center justify-between px-3.5 py-3 hover:bg-white/10 rounded-xl transition-colors text-sm text-gray-200 w-full text-left group">
    <div className="flex items-center gap-3">
      <span className="text-purple-400 group-hover:text-purple-300 transition-colors">{icon}</span>
      <span className="font-medium">{label}</span>
    </div>
    {rightIcon && <span className="text-gray-500">{rightIcon}</span>}
  </button>
);

export default function Dashboard() {
  const { user } = useOutletContext();
  const navigate = useNavigate();
  
  const [inputText, setInputText] = useState("");
  const [attachedFile, setAttachedFile] = useState(null);
  const [isAttachMenuOpen, setIsAttachMenuOpen] = useState(false);
  const [isMoreMenuOpen, setIsMoreMenuOpen] = useState(false);
  const [successToast, setSuccessToast] = useState("");
  const [isSending, setIsSending] = useState(false); // 🔴 Loading state for send button
  
  const fileInputRef = useRef(null);
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const hour = currentTime.getHours();
  const greeting = hour < 12 ? "Good morning" : hour < 18 ? "Good afternoon" : "Good evening";
  const formattedDate = currentTime.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' });
  const formattedTime = currentTime.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', hour12: true });

  const suggestions = [
    { 
      title: "Summarize Syllabus", 
      icon: <FileText size={20} className="text-blue-400"/>, 
      desc: "Upload unit notes or AKTU syllabus",
      actionQuery: "Can you summarize these unit notes and give me key bullet points for exams?"
    },
    { 
      title: "Debug Code Snippet", 
      icon: <Code size={20} className="text-green-400"/>, 
      desc: "Analyze C++, Java, or Python code",
      actionQuery: "Please review this code file, find logic errors, and explain how to fix them."
    },
    { 
      title: "Scan Notes & Formulae", 
      icon: <Sparkles size={20} className="text-purple-400"/>, 
      desc: "Extract text from handwritten images",
      actionQuery: "Extract key equations and concepts from these uploaded class notes."
    },
    { 
      title: "Plan Study Schedule", 
      icon: <GraduationCap size={20} className="text-orange-400"/>, 
      desc: "Plan timetable for university exams",
      actionQuery: "Create a 7-day study plan based on this uploaded document for my upcoming exams."
    },
  ];

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setAttachedFile(file.name);
      setIsAttachMenuOpen(false);
      setIsMoreMenuOpen(false);
      showToast(`Successfully loaded: ${file.name}`);
    }
  };

  const triggerFileSelect = (acceptType = "*") => {
    if (fileInputRef.current) {
      fileInputRef.current.accept = acceptType;
      fileInputRef.current.click();
    }
  };

  const showToast = (msg) => {
    setSuccessToast(msg);
    setTimeout(() => setSuccessToast(""), 3500);
  };

  // 🔴 SEND MESSAGE FUNCTION (Creates real database entry)
  const handleSendMessage = async (textToSend = inputText) => {
    if (!textToSend.trim() && !attachedFile) return;
    if (!user) return;

    setIsSending(true);

    try {
      // Determine chat title and type based on input
      let chatTitle = attachedFile ? attachedFile : textToSend.substring(0, 30) + "...";
      let chatType = attachedFile ? (attachedFile.includes('.cpp') || attachedFile.includes('.py') ? 'code' : 'pdf') : 'text';

      // Save to Firebase
      await addDoc(collection(db, "chats"), {
        userId: user.uid,
        title: chatTitle,
        type: chatType,
        lastMessage: textToSend,
        createdAt: serverTimestamp()
      });

      // Clear Inputs and Show Success
      setInputText("");
      setAttachedFile(null);
      showToast("Session started successfully!");
      
    } catch (error) {
      console.error("Error sending message:", error);
      showToast("Failed to start session.");
    } finally {
      setIsSending(false);
    }
  };

  // 🔴 Handle Enter Key Press
  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const containerVariants = { hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.15 } } };
  const itemVariants = { hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } } };

  return (
    <div className="flex-1 flex flex-col h-full relative w-full text-gray-100 z-0 bg-[#0A0A0A] overflow-hidden">
      
      {/* Animated Background Grids */}
      <div className="absolute inset-0 z-[-2] perspective-1000 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ backgroundPosition: ["0px 0px", "0px 40px"] }}
          transition={{ repeat: Infinity, ease: "linear", duration: 2 }}
          className="absolute w-[200%] h-[100%] bottom-[-20%] left-[-50%]"
          style={{
            backgroundImage: "linear-gradient(to right, rgba(147, 51, 234, 0.07) 1px, transparent 1px), linear-gradient(to bottom, rgba(147, 51, 234, 0.07) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
            transform: "rotateX(70deg)",
            WebkitMaskImage: "linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 60%)"
          }}
        />
      </div>

      <motion.div animate={{ y: [0, -30, 0], scale: [1, 1.1, 1], opacity: [0.15, 0.25, 0.15] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }} className="fixed top-[-10%] left-[10%] w-[500px] h-[500px] bg-purple-600 rounded-full blur-[140px] pointer-events-none z-[-1]" />
      <motion.div animate={{ y: [0, 30, 0], scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }} transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }} className="fixed bottom-[10%] right-[5%] w-[600px] h-[600px] bg-cyan-600 rounded-full blur-[150px] pointer-events-none z-[-1]" />

      <AnimatePresence>
        {successToast && (
          <motion.div initial={{ opacity: 0, y: -20, scale: 0.9 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: -20, scale: 0.9 }} className="absolute top-6 left-1/2 -translate-x-1/2 bg-purple-600/90 text-white px-4 py-2.5 rounded-2xl shadow-2xl flex items-center gap-2 z-50 backdrop-blur-md text-sm border border-purple-400/30">
            <CheckCircle2 size={18} className="text-green-300" />
            <span>{successToast}</span>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="flex-1 flex flex-col h-full relative max-w-4xl mx-auto w-full z-10">
        
        <div className="flex-1 flex flex-col justify-center px-4 md:px-8 pb-40 mt-10 overflow-y-auto no-scrollbar" onClick={() => {setIsAttachMenuOpen(false); setIsMoreMenuOpen(false);}}>
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="mb-12">
            
            <div className="flex items-center gap-2 text-purple-400/80 mb-4 text-sm font-medium tracking-wide">
              <Clock size={16} />
              <span>{formattedDate} • {formattedTime}</span>
            </div>

            <h1 className="text-4xl md:text-5xl font-semibold mb-3">
              <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent drop-shadow-sm">
                {greeting}, {user?.displayName?.split(' ')[0] || 'Manas'}
              </span>
            </h1>
            <h2 className="text-3xl md:text-4xl font-medium text-gray-400 drop-shadow-sm">
              What are we studying today?
            </h2>
          </motion.div>

          <motion.div variants={containerVariants} initial="hidden" animate="show" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {suggestions.map((item, i) => (
              <motion.div 
                key={i} 
                variants={itemVariants}
                whileHover={{ y: -8, scale: 1.02, boxShadow: "0 20px 40px -10px rgba(147,51,234,0.3)" }}
                whileTap={{ scale: 0.98 }}
                onClick={() => handleSendMessage(item.actionQuery)} /* 🔴 Card click automatically sends query */
                className="bg-[#1A1A1E]/80 backdrop-blur-xl p-5 rounded-3xl cursor-pointer transition-colors border border-white/5 hover:border-purple-500/50 flex flex-col h-44 justify-between group"
              >
                <div>
                  <p className="text-[15px] font-semibold text-gray-200 group-hover:text-purple-300 transition-colors">{item.title}</p>
                  <p className="text-[13px] text-gray-400 mt-2 leading-relaxed">{item.desc}</p>
                </div>
                <div className="bg-white/5 w-10 h-10 rounded-2xl flex items-center justify-center self-end border border-white/5 group-hover:bg-purple-500/20 group-hover:rotate-6 transition-all duration-300">
                  {item.icon}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* 💬 Bottom Fixed Input Area */}
        <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/90 to-transparent pt-16 pb-8 px-4 md:px-8">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
            className="max-w-3xl mx-auto relative flex flex-col bg-[#1A1A1E]/90 backdrop-blur-3xl border border-white/10 focus-within:border-purple-500/60 focus-within:shadow-[0_0_30px_rgba(147,51,234,0.2)] rounded-3xl p-3 shadow-2xl transition-all"
          >
            
            <AnimatePresence>
              {attachedFile && (
                <motion.div initial={{ opacity: 0, y: 10, scale: 0.95 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }} className="flex items-center gap-2 bg-purple-500/10 border border-purple-500/30 text-sm px-4 py-2 rounded-xl w-max mb-3 ml-1 max-w-xs backdrop-blur-md">
                  <FileUp size={16} className="text-purple-400 flex-shrink-0" />
                  <span className="text-gray-200 font-medium truncate">{attachedFile}</span>
                  <button onClick={() => { setAttachedFile(null); if(fileInputRef.current) fileInputRef.current.value = ""; }} className="ml-2 text-gray-400 hover:text-white transition-colors flex-shrink-0"><X size={14} /></button>
                </motion.div>
              )}
            </AnimatePresence>

            <div className="flex items-end gap-2 relative">
              
              <AnimatePresence>
                {isAttachMenuOpen && (
                  <motion.div initial={{ opacity: 0, y: 10, scale: 0.95 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 10, scale: 0.95 }} className="absolute bottom-16 left-0 bg-[#1A1A1E]/95 border border-white/10 rounded-2xl p-2 shadow-2xl flex flex-col w-[240px] z-50 backdrop-blur-3xl">
                    <MenuItem icon={<FileText size={18} />} label="Upload PDF / Notes" onClick={() => triggerFileSelect(".pdf,.docx,.txt")} />
                    <MenuItem icon={<Cloud size={18} />} label="Google Drive Sync" onClick={() => { showToast("Coming soon!"); setIsAttachMenuOpen(false); }} />
                    <div className="relative" onMouseEnter={() => setIsMoreMenuOpen(true)} onMouseLeave={() => setIsMoreMenuOpen(false)}>
                      <MenuItem icon={<MoreHorizontal size={18} />} label="Academic uploads" rightIcon={<ChevronRight size={16} />} />
                      <AnimatePresence>
                        {isMoreMenuOpen && (
                          <motion.div initial={{ opacity: 0, x: -10, scale: 0.95 }} animate={{ opacity: 1, x: 0, scale: 1 }} exit={{ opacity: 0, x: -10, scale: 0.95 }} transition={{ duration: 0.15 }} className="absolute left-[105%] bottom-0 bg-[#1A1A1E]/95 border border-white/10 rounded-2xl p-2 shadow-2xl flex flex-col w-[220px] backdrop-blur-3xl">
                            <MenuItem icon={<ImageIcon size={18} />} label="Handwritten Notes" onClick={() => triggerFileSelect("image/*")} />
                            <MenuItem icon={<FileCode size={18} />} label="Import Code File" onClick={() => triggerFileSelect(".cpp,.py,.java,.js,.c")} />
                            <MenuItem icon={<BookOpen size={18} />} label="Syllabus Workbook" onClick={() => triggerFileSelect(".pdf")} />
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              <input type="file" ref={fileInputRef} onChange={handleFileChange} className="hidden" />

              <button onClick={() => setIsAttachMenuOpen(!isAttachMenuOpen)} className={`p-2.5 rounded-full transition-all mb-1 ml-1 ${isAttachMenuOpen ? 'bg-purple-500/20 text-purple-400 border border-purple-500/30' : 'text-gray-400 hover:text-white hover:bg-white/10'}`}>
                <Plus size={24} className={isAttachMenuOpen ? "rotate-45 transition-transform" : "transition-transform"} />
              </button>
              
              <textarea 
                rows="1"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                onKeyDown={handleKeyDown} // 🔴 Enables sending with Enter key
                placeholder="Ask about your syllabus, notes, code, or homework..." 
                className="flex-1 bg-transparent px-3 py-3.5 text-white outline-none placeholder-gray-500 text-[15px] resize-none max-h-32 min-h-[44px]"
                style={{ overflowY: inputText.length > 50 ? 'auto' : 'hidden' }}
              />
              
              <button 
                onClick={() => handleSendMessage()}
                disabled={(!inputText.trim() && !attachedFile) || isSending}
                className={`p-3 rounded-full transition-all mb-1 mr-1 shadow-sm ${
                  inputText.trim() || attachedFile 
                    ? 'bg-purple-600 text-white hover:bg-purple-500 hover:scale-105 shadow-[0_0_20px_rgba(147,51,234,0.5)]' 
                    : 'bg-white/5 text-gray-500 cursor-not-allowed'
                }`}
              >
                {isSending ? <Loader2 size={18} className="animate-spin" /> : <Send size={18} className={inputText.trim() || attachedFile ? 'ml-0.5' : ''} />}
              </button>
            </div>
          </motion.div>
          
          <p className="text-center text-[12px] text-gray-500 mt-5 tracking-wide">
            DocuMind AI processes your notes securely for university exam preparation.
          </p>
        </div>
      </div>
    </div>
  );
}