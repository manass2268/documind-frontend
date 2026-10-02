import React, { useState } from "react";
import { 
  Menu, Search, Plus, MessageSquare, FileText, ChevronLeft, 
  Send, Sparkles, BookOpen, CheckSquare, Paperclip
} from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import documindLogo from "../assets/logo.png";

export default function ChatWorkspace() {
  const navigate = useNavigate();
  const location = useLocation();
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [inputMessage, setInputMessage] = useState("");

  // Uploaded document ka naam state se lenge ya default rakhenge
  const documentName = location.state?.documentName || "Statistical_Sampling.pdf";

  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: "ai",
      text: "I've analyzed your document. What would you like to know?",
      isWelcome: true
    }
  ]);

  const recentChats = [
    { id: 1, title: documentName, active: true },
    { id: 2, title: "Annual Report 2025", active: false },
    { id: 3, title: "Data Quality Framework", active: false },
    { id: 4, title: "Research Paper CS101", active: false },
  ];

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!inputMessage.trim()) return;

    // User Message
    const newUserMsg = { id: Date.now(), sender: "user", text: inputMessage };
    
    // AI Dummy Response with Citation
    const newAiMsg = { 
      id: Date.now() + 1, 
      sender: "ai", 
      text: "Stratified sampling is a method of sampling from a population which can be partitioned into subpopulations. This approach ensures that every segment of the population is adequately represented.",
      citation: `📄 ${documentName} — Page 12`
    };

    setMessages([...messages, newUserMsg, newAiMsg]);
    setInputMessage("");
  };

  return (
    <div className="flex h-screen bg-[#F8FAFC] font-sans overflow-hidden">
      
      {/* --- LEFT SIDEBAR (CHAT HISTORY) --- */}
      <aside className={`${isSidebarOpen ? 'w-64' : 'w-0'} transition-all duration-300 flex-shrink-0 bg-[#0F172A] text-white flex flex-col border-r border-slate-800 overflow-hidden relative z-20`}>
        <div className="p-4 border-b border-slate-800 flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center p-1 shrink-0">
             <img src={documindLogo} alt="Logo" className="w-full object-contain" />
          </div>
          <span className="font-bold text-[15px] truncate">DocuMind</span>
        </div>

        <div className="p-3">
          <button onClick={() => navigate('/upload')} className="w-full flex items-center gap-2 px-3 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-[13px] font-semibold transition-colors">
            <Plus size={16} /> New Chat
          </button>
        </div>

        <div className="flex-1 overflow-y-auto custom-scrollbar p-3 pt-0">
          <p className="text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-2 px-2">Recent Chats</p>
          <div className="space-y-1">
            {recentChats.map((chat) => (
              <button 
                key={chat.id}
                className={`w-full flex items-center gap-2.5 px-3 py-2.5 rounded-lg text-[13px] text-left transition-colors ${chat.active ? 'bg-slate-800 text-white' : 'text-slate-400 hover:bg-slate-800/50 hover:text-slate-200'}`}
              >
                <FileText size={14} className="shrink-0" />
                <span className="truncate">{chat.title}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="p-4 border-t border-slate-800">
           <button onClick={() => navigate('/dashboard')} className="flex items-center gap-2 text-[13px] font-medium text-slate-400 hover:text-white transition-colors">
             <ChevronLeft size={16} /> Back to Dashboard
           </button>
        </div>
      </aside>

      {/* --- MAIN CHAT AREA --- */}
      <main className="flex-1 flex flex-col min-w-0 bg-white relative">
        
        {/* TOP HEADER: Active Document Context */}
        <header className="h-14 border-b border-gray-200 flex items-center justify-between px-4 sm:px-6 shrink-0 bg-white z-10">
          <div className="flex items-center gap-4">
            <button onClick={() => setIsSidebarOpen(!isSidebarOpen)} className="text-slate-500 hover:text-slate-800 hidden sm:block">
              <Menu size={20} />
            </button>
            <div className="flex items-center gap-2 border border-blue-100 bg-blue-50/50 px-3 py-1.5 rounded-lg">
               <FileText size={14} className="text-blue-600" />
               <span className="text-[13px] font-semibold text-slate-800 truncate max-w-[200px] sm:max-w-md">{documentName}</span>
               <span className="flex items-center gap-1 ml-2 text-[10px] font-bold text-emerald-600 uppercase bg-emerald-100 px-1.5 py-0.5 rounded">
                 <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></div> Ready
               </span>
            </div>
          </div>
          <div className="flex items-center gap-3">
             <button className="text-slate-400 hover:text-blue-600 transition-colors"><Search size={18} /></button>
          </div>
        </header>

        {/* CHAT MESSAGES */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 custom-scrollbar scroll-smooth">
          <div className="max-w-3xl mx-auto space-y-6 pb-20">
            
            {messages.map((msg) => (
              <div key={msg.id} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                
                {/* AI MESSAGE */}
                {msg.sender === 'ai' && (
                  <div className="flex gap-4 max-w-[85%]">
                    <div className="w-8 h-8 rounded-full bg-[#1E3A8A] flex items-center justify-center shrink-0 shadow-sm">
                      <Sparkles size={14} className="text-white" />
                    </div>
                    <div className="space-y-2">
                      <div className="text-[14px] text-slate-800 leading-relaxed bg-slate-50 border border-slate-100 p-4 rounded-2xl rounded-tl-sm">
                        {msg.text}
                      </div>
                      
                      {/* Source Citation */}
                      {msg.citation && (
                        <div className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-blue-50 border border-blue-100 text-blue-700 rounded-md text-[11px] font-semibold cursor-pointer hover:bg-blue-100 transition-colors">
                           {msg.citation}
                        </div>
                      )}

                      {/* Welcome Action Chips */}
                      {msg.isWelcome && (
                        <div className="flex flex-wrap gap-2 mt-3 pt-2">
                          <button className="px-3 py-1.5 border border-slate-200 bg-white text-slate-600 rounded-lg text-[12px] font-semibold hover:bg-slate-50 transition-colors">Summarize</button>
                          <button className="px-3 py-1.5 border border-slate-200 bg-white text-slate-600 rounded-lg text-[12px] font-semibold hover:bg-slate-50 transition-colors">Key Concepts</button>
                          <button className="px-3 py-1.5 border border-slate-200 bg-white text-slate-600 rounded-lg text-[12px] font-semibold hover:bg-slate-50 transition-colors flex items-center gap-1"><BookOpen size={12}/> Generate Notes</button>
                          <button className="px-3 py-1.5 border border-slate-200 bg-white text-slate-600 rounded-lg text-[12px] font-semibold hover:bg-slate-50 transition-colors flex items-center gap-1"><CheckSquare size={12}/> Create Quiz</button>
                        </div>
                      )}
                    </div>
                  </div>
                )}

                {/* USER MESSAGE */}
                {msg.sender === 'user' && (
                  <div className="flex gap-4 max-w-[85%] flex-row-reverse">
                    <div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center shrink-0">
                      <span className="text-[12px] font-bold text-slate-600">You</span>
                    </div>
                    <div className="text-[14px] text-white leading-relaxed bg-blue-600 p-4 rounded-2xl rounded-tr-sm shadow-sm">
                      {msg.text}
                    </div>
                  </div>
                )}

              </div>
            ))}

          </div>
        </div>

        {/* INPUT AREA */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-white via-white to-transparent pt-6 pb-6 px-4 sm:px-6">
           <div className="max-w-3xl mx-auto">
             <form onSubmit={handleSendMessage} className="relative flex items-end gap-2 bg-white border border-slate-300 shadow-lg shadow-slate-200/50 rounded-2xl overflow-hidden focus-within:border-blue-500 focus-within:ring-1 focus-within:ring-blue-500 transition-all pl-3 pr-2 py-2">
               
               <button type="button" className="p-2 text-slate-400 hover:text-blue-600 transition-colors shrink-0 mb-1">
                 <Paperclip size={20} />
               </button>
               
               <textarea 
                 rows="1"
                 placeholder="Ask anything about this document..."
                 value={inputMessage}
                 onChange={(e) => setInputMessage(e.target.value)}
                 onKeyDown={(e) => { if(e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); handleSendMessage(e); } }}
                 className="flex-1 max-h-32 bg-transparent text-[14px] text-slate-800 placeholder:text-slate-400 resize-none outline-none py-2.5 custom-scrollbar"
               />
               
               <button 
                 type="submit" 
                 disabled={!inputMessage.trim()}
                 className={`p-2.5 rounded-xl shrink-0 mb-0.5 transition-colors ${inputMessage.trim() ? 'bg-blue-600 text-white shadow-sm hover:bg-blue-700' : 'bg-slate-100 text-slate-400 cursor-not-allowed'}`}
               >
                 <Send size={18} className={inputMessage.trim() ? 'ml-0.5' : ''} />
               </button>
             </form>
             <p className="text-[10px] text-center text-slate-400 mt-2 font-medium">DocuMind can make mistakes. Verify important information with the source document.</p>
           </div>
        </div>

      </main>
    </div>
  );
}