import React, { useState, useEffect } from 'react';
import { Users, BookOpen, FileText, CheckCircle, Calendar, Sparkles, Loader2 } from 'lucide-react';
import { auth } from '../firebase';

export default function TrainerDashboard() {
  const [isLoading, setIsLoading] = useState(true);
  const [userName, setUserName] = useState("");
  
  const [dashboardData, setDashboardData] = useState({
    stats: { students: 0, subjects: 0, docs: 0, pending: 0 },
    classes: []
  });

  useEffect(() => {
    // 1. Get Firebase User
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUserName(user.displayName?.split(" ")[0] || "Trainer");
        fetchDashboardData(user);
      } else {
        setIsLoading(false);
      }
    });

    // 2. Fetch Data from Backend
    const fetchDashboardData = async (user) => {
      try {
        const response = await fetch(`http://127.0.0.1:8000/api/trainer/dashboard/${user.uid}`);
        if (response.ok) {
          const result = await response.json();
          if (result.status === "success") {
            setDashboardData(result.data);
          }
        } else {
          // Fallback Dummy Data if API fails or backend is not connected yet
          setDashboardData({
            stats: { students: 120, subjects: 4, docs: 15, pending: 8 },
            classes: [
              { title: 'Database Management', sub: 'BCA 2nd Year (Section A)', count: 45 },
              { title: 'Python Programming', sub: 'BCA 2nd Year (Section A)', count: 45 },
            ]
          });
        }
      } catch (error) {
        console.error("API Fetch Error:", error);
        // Fallback Dummy Data
        setDashboardData({
          stats: { students: 120, subjects: 4, docs: 15, pending: 8 },
          classes: [
            { title: 'Database Management', sub: 'BCA 2nd Year (Section A)', count: 45 },
            { title: 'Python Programming', sub: 'BCA 2nd Year (Section A)', count: 45 },
          ]
        });
      } finally {
        setIsLoading(false);
      }
    };

    return () => unsubscribe();
  }, []);

  if (isLoading) {
    return (
      <div className="w-full h-[70vh] flex flex-col items-center justify-center text-blue-600">
        <Loader2 size={40} className="animate-spin mb-4" />
        <p className="font-bold text-gray-500 animate-pulse">Loading your workspace...</p>
      </div>
    );
  }

  return (
    <div className="max-w-[1400px] mx-auto space-y-6 pb-10 w-full animate-in fade-in duration-500">
      
      {/* 🚀 Header Section */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 bg-white p-5 sm:p-6 rounded-2xl border border-gray-100 shadow-sm w-full">
        <div>
          <h1 className="text-[22px] sm:text-[26px] font-black text-[#0F172A] flex items-center gap-2">
            Welcome back, Prof. {userName}! <span className="text-2xl">👋</span>
          </h1>
          <p className="text-gray-500 text-[13px] sm:text-[14px] mt-1 font-medium">Here's what's happening in your classes today.</p>
        </div>
        <div className="flex items-center gap-4 sm:text-right w-full sm:w-auto justify-between sm:justify-end">
          <div className="hidden sm:block">
            <p className="text-[13px] font-bold text-gray-800">
              {new Date().toLocaleDateString('en-GB', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric'})}
            </p>
            <p className="text-[11px] text-gray-500 font-medium">KIOT • CSD</p>
          </div>
          <div className="bg-blue-50 text-blue-600 px-4 py-2 rounded-full text-[12px] font-bold border border-blue-100 whitespace-nowrap">
            Teacher Panel
          </div>
        </div>
      </div>

      {/* 🚀 Stats Cards */}
      <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 gap-4 w-full">
        {[
          { title: 'Total Students', count: dashboardData.stats.students, icon: Users, color: 'blue', bg: 'bg-blue-50', text: 'text-blue-600' },
          { title: 'Subjects Assigned', count: dashboardData.stats.subjects, icon: BookOpen, color: 'green', bg: 'bg-green-50', text: 'text-green-600' },
          { title: 'Documents Shared', count: dashboardData.stats.docs, icon: FileText, color: 'orange', bg: 'bg-orange-50', text: 'text-orange-500' },
          { title: 'Pending Eval', count: dashboardData.stats.pending, icon: CheckCircle, color: 'purple', bg: 'bg-purple-50', text: 'text-purple-600' },
        ].map((stat, idx) => (
          <div key={idx} className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm flex flex-col justify-between hover:shadow-md transition-all group w-full">
            <div className="flex justify-between items-start">
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${stat.bg} ${stat.text}`}>
                <stat.icon size={24} />
              </div>
              <h2 className="text-[24px] sm:text-[28px] font-black text-gray-800 leading-none">{stat.count}</h2>
            </div>
            <div className="mt-4 flex items-end justify-between">
              <p className="text-[12px] sm:text-[13px] font-bold text-gray-500">{stat.title}</p>
            </div>
          </div>
        ))}
      </div>

      {/* 🚀 Middle Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 w-full">
        
        {/* Schedule */}
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 sm:p-6 flex flex-col w-full overflow-hidden">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-[15px] font-bold text-gray-800 flex items-center gap-2"><Calendar size={18} className="text-gray-400"/> Today's Schedule</h3>
          </div>
          <div className="relative border-l-2 border-gray-100 ml-3 space-y-6 flex-1">
            {[
              { time: '10:00 AM', title: 'DBMS (BCA 2nd)', desc: 'Theory • Room 203', color: 'bg-blue-500' },
              { time: '12:00 PM', title: 'Python Programming', desc: 'Lab Session', color: 'bg-green-500' },
            ].map((event, idx) => (
              <div key={idx} className="relative pl-5 sm:pl-6">
                <span className={`absolute -left-[9px] top-1 w-4 h-4 rounded-full border-4 border-white ${event.color}`}></span>
                <p className="text-[11px] font-bold text-gray-400 mb-0.5">{event.time}</p>
                <div>
                  <h4 className="text-[13px] sm:text-[14px] font-bold text-gray-800 truncate">{event.title}</h4>
                  <p className="text-[11px] sm:text-[12px] text-gray-500 font-medium truncate">{event.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Classes Info */}
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 sm:p-6 w-full">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-[15px] font-bold text-gray-800 flex items-center gap-2"><Users size={18} className="text-gray-400"/> Active Classes</h3>
          </div>
          <div className="space-y-3">
            {dashboardData.classes.map((cls, idx) => (
              <div key={idx} className="bg-gray-50 rounded-xl p-4 flex items-center justify-between border border-gray-100 hover:border-blue-200 transition-colors cursor-pointer w-full">
                <div className="flex items-center gap-3 overflow-hidden">
                  <div className="w-10 h-10 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center flex-shrink-0"><Users size={20}/></div>
                  <div className="truncate">
                    <h4 className="text-[13px] sm:text-[14px] font-bold text-gray-800 truncate">{cls.title}</h4>
                    <p className="text-[11px] text-gray-500 truncate">{cls.sub}</p>
                  </div>
                </div>
                <span className="text-[10px] sm:text-[11px] font-bold text-blue-600 bg-blue-50 px-2 py-1 rounded-md whitespace-nowrap">{cls.count} Std</span>
              </div>
            ))}
          </div>
        </div>

        {/* AI Actions */}
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 sm:p-6 bg-gradient-to-br from-white to-blue-50/30 w-full">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-[15px] font-bold text-gray-800 flex items-center gap-2">
              <Sparkles size={18} className="text-blue-500"/> AI Actions
            </h3>
          </div>
          <div className="space-y-2">
            {[
              { text: 'Generate Subject Quiz', icon: Sparkles, color: 'text-orange-500' },
              { text: 'Analyze Student PDF', icon: FileText, color: 'text-green-500' },
            ].map((prompt, idx) => (
              <button key={idx} className="w-full bg-white border border-gray-200 hover:border-blue-300 hover:shadow-sm p-3 rounded-xl flex items-center gap-3 text-left transition-all group">
                <prompt.icon size={16} className={`${prompt.color} group-hover:scale-110 transition-transform flex-shrink-0`} />
                <span className="text-[12px] sm:text-[13px] font-semibold text-gray-700 group-hover:text-blue-600 truncate">{prompt.text}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}