import React from "react";
import { Brain, Plus, FileText, Settings, X, Mail, HelpCircle } from "lucide-react"; // <-- Mail, HelpCircle add kiya

export default function Sidebar({ isOpen, closeSidebar }) {
  return (
    <>
      {isOpen && (
        <div className="md:hidden fixed inset-0 bg-black/60 z-40 backdrop-blur-sm" onClick={closeSidebar} />
      )}
      <div className={`
        fixed md:static inset-y-0 left-0 z-50 w-72 h-full backdrop-blur-xl bg-[#0A0A0F]/95 md:bg-[#0A0A0F]/80 border-r border-white/10 p-5 flex flex-col shadow-2xl transition-transform duration-300 ease-in-out
        ${isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}
      `}>
        <button className="md:hidden absolute top-5 right-5 text-gray-400 hover:text-white" onClick={closeSidebar}>
          <X size={24} />
        </button>

        <div className="flex items-center gap-3 mb-8 px-2">
          <div className="p-2 bg-gradient-to-br from-purple-500/20 to-cyan-500/20 rounded-xl border border-white/5">
            <Brain className="text-purple-400" size={24} />
          </div>
          <span className="text-xl font-bold tracking-wide text-white">DocuMind</span>
        </div>
        
        <button className="w-full flex items-center gap-2 px-4 py-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl transition-all mb-8 text-sm font-medium text-white group cursor-pointer">
          <Plus size={18} className="text-cyan-400 group-hover:rotate-90 transition-transform duration-300" />
          New Chat
          <span className="ml-auto text-xs text-gray-500 border border-gray-700 px-1.5 py-0.5 rounded hidden md:block">⌘K</span>
        </button>

        <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3 px-2">Recent Documents</div>
        <div className="flex-1 overflow-y-auto space-y-1 -mx-2 px-2">
          {[
            { title: "React Architecture.pdf", time: "2h ago" },
            { title: "Q3 Financial Report", time: "Yesterday" },
            { title: "BCA Semester Syllabus", time: "3 days ago" }
          ].map((doc, i) => (
            <div key={i} className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/5 cursor-pointer transition-colors group">
              <FileText size={16} className="text-gray-400 group-hover:text-purple-400 transition-colors" />
              <div className="flex-1 truncate">
                <div className="text-sm text-gray-300 group-hover:text-white transition-colors truncate">{doc.title}</div>
                <div className="text-xs text-gray-600">{doc.time}</div>
              </div>
            </div>
          ))}
        </div>

        {/* --- BOTTOM SECTION (Support + Profile) --- */}
        <div className="mt-auto pt-4 border-t border-white/10 space-y-2">
          
          {/* New Support Button */}
          <a href="mailto:support.mstech4407@gmail.com" className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-white/5 cursor-pointer transition-colors text-gray-400 hover:text-white group">
            <div className="p-1.5 bg-purple-500/10 rounded-lg group-hover:bg-purple-500/20 transition-colors">
              <HelpCircle size={16} className="text-purple-400" />
            </div>
            <span className="text-sm font-medium">Contact Support</span>
          </a>

          {/* User Profile */}
          <div className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-white/5 cursor-pointer transition-colors text-white">
            <div className="h-10 w-10 rounded-full bg-gradient-to-tr from-purple-600 to-cyan-600 flex items-center justify-center text-sm font-bold shadow-lg">MS</div>
            <div className="flex-1">
              <div className="text-sm font-medium">Manas Singh</div>
              <div className="text-[10px] text-cyan-400 border border-cyan-500/30 bg-cyan-500/10 px-1.5 py-0.5 rounded inline-block mt-0.5">Pro Plan</div>
            </div>
            <Settings size={18} className="text-gray-400 hover:text-white" />
          </div>

        </div>
      </div>
    </>
  );
}