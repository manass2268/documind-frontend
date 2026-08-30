import React, { useState, useEffect } from 'react';
import { useOutletContext } from 'react-router-dom';
import { MessageSquare, FileText, Code, Trash2, Search, Loader2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { db } from '../firebase';
import { collection, query, where, onSnapshot, doc, deleteDoc } from 'firebase/firestore';

export default function Activity() {
  const { user } = useOutletContext();
  const [activities, setActivities] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");

  // 🔴 REAL-TIME FIRESTORE FETCHING
  useEffect(() => {
    if (!user) return;
    const q = query(collection(db, "chats"), where("userId", "==", user.uid));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const data = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      // Sort by newest first
      data.sort((a, b) => (b.createdAt?.toMillis() || 0) - (a.createdAt?.toMillis() || 0));
      setActivities(data);
      setLoading(false);
    });
    return () => unsubscribe();
  }, [user]);

  // 🔴 DELETE CHAT FROM DATABASE
  const handleDelete = async (id, e) => {
    e.stopPropagation();
    try {
      await deleteDoc(doc(db, "chats", id));
    } catch (error) {
      console.error("Error deleting chat:", error);
    }
  };

  // Icon Helper
  const getIcon = (type) => {
    if (type === 'code') return <Code size={18} className="text-green-400" />;
    if (type === 'pdf') return <FileText size={18} className="text-blue-400" />;
    return <MessageSquare size={18} className="text-purple-400" />;
  };

  // Grouping logic (Today, Yesterday, Older)
  const groupActivities = (data) => {
    const grouped = { "Today": [], "Yesterday": [], "Older": [] };
    const today = new Date();
    const yesterday = new Date(today);
    yesterday.setDate(yesterday.getDate() - 1);

    data.forEach(item => {
      if (!item.createdAt) return;
      const date = item.createdAt.toDate();
      const timeStr = date.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', hour12: true });
      const activityItem = { ...item, timeStr };

      if (date.toDateString() === today.toDateString()) grouped["Today"].push(activityItem);
      else if (date.toDateString() === yesterday.toDateString()) grouped["Yesterday"].push(activityItem);
      else grouped["Older"].push({ ...activityItem, timeStr: date.toLocaleDateString() });
    });
    return grouped;
  };

  const filteredActivities = activities.filter(a => a.title.toLowerCase().includes(searchQuery.toLowerCase()));
  const groupedData = groupActivities(filteredActivities);

  return (
    <div className="flex-1 overflow-y-auto w-full text-gray-100 z-10 p-6 md:p-10 no-scrollbar">
      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl mx-auto">
        
        {/* Header & Search */}
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 pb-4 border-b border-white/10 gap-4">
          <h2 className="text-2xl font-medium text-white">Activity History</h2>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" size={16} />
            <input 
              type="text" 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search past activity..." 
              className="bg-white/5 border border-white/10 rounded-xl pl-9 pr-4 py-2 outline-none focus:border-purple-500/50 text-sm text-white w-full md:w-64 transition-colors"
            />
          </div>
        </div>

        {/* Content */}
        {loading ? (
          <div className="flex justify-center py-20"><Loader2 size={32} className="text-purple-500 animate-spin" /></div>
        ) : activities.length === 0 ? (
          <div className="text-center py-20 text-gray-500">No activity found. Create a new session to get started!</div>
        ) : (
          <div className="space-y-8">
            {Object.keys(groupedData).map((dateGroup) => (
              groupedData[dateGroup].length > 0 && (
                <div key={dateGroup}>
                  <h3 className="text-xs font-semibold text-gray-500 mb-3 px-2 uppercase tracking-wider">{dateGroup}</h3>
                  <div className="space-y-1">
                    <AnimatePresence>
                      {groupedData[dateGroup].map((item) => (
                        <motion.div 
                          key={item.id}
                          initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }}
                          className="flex items-center justify-between p-3.5 hover:bg-white/[0.04] rounded-xl transition-colors cursor-pointer group border border-transparent hover:border-white/5"
                        >
                          <div className="flex items-center gap-4 overflow-hidden">
                            <div className="bg-white/5 p-2 rounded-lg border border-white/5 flex-shrink-0">
                              {getIcon(item.type)}
                            </div>
                            <span className="text-[15px] text-gray-200 group-hover:text-white transition-colors truncate">{item.title}</span>
                          </div>
                          <div className="flex items-center gap-4 flex-shrink-0">
                            <span className="text-xs text-gray-500">{item.timeStr}</span>
                            {/* 🔴 Real-time Delete Button */}
                            <button onClick={(e) => handleDelete(item.id, e)} className="text-gray-600 hover:text-red-400 opacity-0 group-hover:opacity-100 transition-all p-1">
                              <Trash2 size={16} />
                            </button>
                          </div>
                        </motion.div>
                      ))}
                    </AnimatePresence>
                  </div>
                </div>
              )
            ))}
          </div>
        )}
      </motion.div>
    </div>
  );
}