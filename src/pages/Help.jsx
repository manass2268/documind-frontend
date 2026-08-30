import React, { useState } from 'react';
import { useOutletContext } from 'react-router-dom';
import { Search, ExternalLink, BookOpen, MessageCircle, FileQuestion, Mail } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Help() {
  const { user } = useOutletContext();
  const [searchQuery, setSearchQuery] = useState("");

  const allResources = [
    { title: "Getting Started Guide", desc: "Learn how to upload files and generate notes", icon: <BookOpen size={20} /> },
    { title: "Supported File Formats", desc: "PDF, DOCX, TXT, and Image limitations", icon: <FileQuestion size={20} /> },
    { title: "Community Discord", desc: "Join other students and share study prompts", icon: <MessageCircle size={20} /> },
    { title: "Resetting Password", desc: "Steps to recover your account securely", icon: <Shield size={20} /> }
  ];

  // 🔴 LIVE SEARCH FILTER
  const filteredResources = allResources.filter(r => 
    r.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
    r.desc.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // 🔴 CONTACT SUPPORT ACTION
  const handleSupportClick = () => {
    window.location.href = `mailto:support@documind.com?subject=Support Request from ${user?.displayName || 'User'}&body=Hi Support Team,%0D%0A%0D%0A`;
  };

  return (
    <div className="flex-1 overflow-y-auto w-full text-gray-100 z-10 p-6 md:p-10 no-scrollbar">
      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl mx-auto">
        <h2 className="text-2xl font-medium text-white mb-8 pb-4 border-b border-white/10">Help & Support</h2>

        <div className="bg-gradient-to-r from-purple-900/30 to-blue-900/20 border border-purple-500/20 rounded-3xl p-8 mb-10 text-center shadow-lg">
          <h3 className="text-xl font-semibold text-white mb-2">How can we help you?</h3>
          <p className="text-sm text-gray-400 mb-6">Search our knowledge base or browse categories below.</p>
          
          <div className="relative max-w-lg mx-auto">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
            <input 
              type="text" 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search for articles..." 
              className="w-full bg-[#1A1A1E]/80 backdrop-blur-md border border-white/10 rounded-full pl-11 pr-4 py-3.5 outline-none focus:border-purple-500/50 text-[15px] text-white shadow-inner transition-colors"
            />
          </div>
        </div>

        <h3 className="text-[13px] font-semibold text-gray-400 uppercase tracking-wider mb-4 px-2">
          {searchQuery ? "Search Results" : "Popular Resources"}
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <AnimatePresence>
            {filteredResources.map((item, idx) => (
              <motion.div 
                key={item.title}
                initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }}
                className="bg-white/[0.02] border border-white/5 p-5 rounded-2xl hover:bg-white/[0.04] hover:border-white/10 transition-all cursor-pointer group flex items-start gap-4"
              >
                <div className="text-purple-400 bg-purple-500/10 p-2.5 rounded-xl">
                  {item.icon}
                </div>
                <div className="flex-1">
                  <h4 className="text-[15px] font-medium text-gray-200 group-hover:text-purple-300 transition-colors flex items-center gap-2">
                    {item.title} <ExternalLink size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </h4>
                  <p className="text-xs text-gray-500 mt-1.5 leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
          {filteredResources.length === 0 && (
            <div className="col-span-2 text-center py-10 text-gray-500">No resources found for "{searchQuery}"</div>
          )}
        </div>
        
        <div className="mt-10 p-6 bg-purple-500/5 border border-purple-500/20 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <h4 className="text-[15px] font-medium text-white flex items-center gap-2"><Mail size={18} className="text-purple-400"/> Still need help?</h4>
            <p className="text-sm text-gray-500 mt-1">Our support team is available Monday to Friday.</p>
          </div>
          <button onClick={handleSupportClick} className="bg-white text-black font-medium px-5 py-2.5 rounded-xl hover:bg-gray-200 transition-colors whitespace-nowrap shadow-md">
            Contact Support
          </button>
        </div>

      </motion.div>
    </div>
  );
}

// Chhoti si missing import idhar theek ki hai (Shield for Reset Password)
import { Shield } from 'lucide-react';