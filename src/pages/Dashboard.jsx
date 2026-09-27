import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  LayoutDashboard,
  BookOpen,
  Trophy,
  Users,
  Calendar,
  Bell,
  Search,
  Settings,
  LogOut,
  Clock,
  ArrowUpRight,
  Sparkles,
  Plus,
  ChevronRight,
  GraduationCap,
  Flame,
  ShieldCheck,
  CheckCircle2,
  FileText,
  TrendingUp,
  MessageSquare
} from "lucide-react";

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState("dashboard");

  // Sample data for stats
  const stats = [
    { title: "Active Projects", value: "04", change: "+1 this week", icon: BookOpen, color: "text-blue-600", bg: "bg-blue-50" },
    { title: "Hackathons Entered", value: "02", change: "1 Upcoming", icon: Trophy, color: "text-amber-600", bg: "bg-amber-50" },
    { title: "Mentorship Hours", value: "18 hrs", change: "Top 5% Learner", icon: Users, color: "text-emerald-600", bg: "bg-emerald-50" },
    { title: "Submissions Done", value: "12", change: "100% Verified", icon: ShieldCheck, color: "text-indigo-600", bg: "bg-indigo-50" },
  ];

  // Sample ongoing projects
  const activeProjects = [
    {
      id: 1,
      title: "Indian Railway Reservation System",
      category: "C Programming & Data Handling",
      progress: 85,
      dueDate: "Oct 15, 2026",
      status: "In Review",
      statusBg: "bg-amber-100 text-amber-800",
      tags: ["C Language", "File Systems", "Structures"]
    },
    {
      id: 2,
      title: "PennyDrop - Finance & Expense Tracker",
      category: "Android Application",
      progress: 60,
      dueDate: "Nov 02, 2026",
      status: "In Progress",
      statusBg: "bg-blue-100 text-blue-800",
      tags: ["Kotlin", "Jetpack Compose", "Room DB"]
    },
    {
      id: 3,
      title: "Streamify - Watch Party Platform",
      category: "Full Stack Web App",
      progress: 40,
      dueDate: "Nov 20, 2026",
      status: "In Progress",
      statusBg: "bg-blue-100 text-blue-800",
      tags: ["React", "Socket.IO", "Tailwind CSS"]
    }
  ];

  // Sample announcements / events
  const upcomingEvents = [
    {
      id: 1,
      title: "Smart India Hackathon 2026 Pitching",
      date: "Tomorrow, 10:00 AM",
      type: "Hackathon",
      typeBg: "bg-amber-50 text-amber-700 border-amber-200"
    },
    {
      id: 2,
      title: "OOPs Concepts in C++ Review Session",
      date: "Oct 02, 02:00 PM",
      type: "Academic",
      typeBg: "bg-blue-50 text-blue-700 border-blue-200"
    },
    {
      id: 3,
      title: "AI & Cloud Integration Workshop",
      date: "Oct 08, 11:30 AM",
      type: "Webinar",
      typeBg: "bg-emerald-50 text-emerald-700 border-emerald-200"
    }
  ];

  return (
    <div className="min-h-screen bg-[#F4F7FB] flex flex-col lg:flex-row text-[#1E293B] font-sans selection:bg-[#0056D2] selection:text-white">
      
      {/* SIDEBAR */}
      <aside className="w-full lg:w-72 bg-white border-r border-gray-200/80 p-5 flex flex-col justify-between shrink-0">
        <div>
          {/* Logo & Portal Branding */}
          <div className="flex items-center gap-3 px-2 py-3 mb-8 border-b border-gray-100">
            <div className="w-10 h-10 rounded-xl bg-[#0056D2] flex items-center justify-center text-white font-black text-xl shadow-md shadow-blue-500/20">
              S
            </div>
            <div>
              <h2 className="font-extrabold text-[16px] text-gray-900 tracking-tight leading-none">
                SIH Support Portal
              </h2>
              <span className="text-[11px] font-semibold text-gray-400 tracking-wider uppercase">
                Student Edition
              </span>
            </div>
          </div>

          {/* Navigation Links */}
          <nav className="space-y-1.5">
            {[
              { id: "dashboard", label: "Dashboard", icon: LayoutDashboard },
              { id: "projects", label: "My Projects", icon: BookOpen, badge: "3" },
              { id: "hackathons", label: "Hackathons & SIH", icon: Trophy, badge: "New" },
              { id: "mentorship", label: "Mentorship", icon: Users },
              { id: "schedules", label: "Events & Calendar", icon: Calendar },
              { id: "settings", label: "Settings", icon: Settings },
            ].map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`w-full flex items-center justify-between px-4 py-3 rounded-xl text-[14px] font-bold transition-all duration-200 ${
                    isActive
                      ? "bg-[#0056D2] text-white shadow-lg shadow-[#0056D2]/20"
                      : "text-gray-600 hover:bg-gray-100/80 hover:text-gray-900"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <Icon size={19} strokeWidth={isActive ? 2.5 : 2} />
                    <span>{item.label}</span>
                  </div>
                  {item.badge && (
                    <span
                      className={`text-[11px] font-extrabold px-2 py-0.5 rounded-full ${
                        isActive
                          ? "bg-white/20 text-white"
                          : "bg-blue-50 text-[#0056D2]"
                      }`}
                    >
                      {item.badge}
                    </span>
                  )}
                </button>
              );
            })}
          </nav>
        </div>

        {/* Sidebar Footer / User Quick Info */}
        <div className="pt-6 border-t border-gray-100 mt-6">
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50/50 p-4 rounded-2xl border border-blue-100/60 mb-4">
            <div className="flex items-center gap-2 text-amber-600 mb-1">
              <Flame size={16} fill="currentColor" />
              <span className="text-[12px] font-bold">12 Days Streak!</span>
            </div>
            <p className="text-[12px] text-gray-600 font-medium leading-relaxed">
              Keep building daily to unlock the National Innovation Badge.
            </p>
          </div>

          <Link
            to="/login"
            className="flex items-center gap-3 px-4 py-3 rounded-xl text-[14px] font-bold text-red-600 hover:bg-red-50 transition-colors w-full"
          >
            <LogOut size={18} />
            <span>Logout</span>
          </Link>
        </div>
      </aside>

      {/* MAIN CONTENT AREA */}
      <div className="flex-1 flex flex-col min-w-0 overflow-y-auto">
        
        {/* TOP HEADER */}
        <header className="bg-white/80 backdrop-blur-md border-b border-gray-200/80 sticky top-0 z-20 px-6 py-4 flex items-center justify-between gap-4">
          
          {/* Search Bar */}
          <div className="relative w-full max-w-md hidden sm:block">
            <Search size={18} className="absolute left-3.5 top-3 text-gray-400" />
            <input
              type="text"
              placeholder="Search problem statements, projects, mentors..."
              className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-[13px] font-medium text-gray-900 focus:bg-white focus:border-[#0056D2] focus:ring-4 focus:ring-[#0056D2]/10 outline-none transition-all"
            />
          </div>

          {/* Right Controls */}
          <div className="flex items-center gap-3 ml-auto">
            {/* Notification Bell */}
            <button className="p-2.5 rounded-xl border border-gray-200 bg-gray-50 hover:bg-white text-gray-600 hover:text-[#0056D2] relative transition-colors">
              <Bell size={18} />
              <span className="absolute top-2 right-2 w-2 h-2 rounded-full bg-red-500 ring-2 ring-white" />
            </button>

            {/* User Profile Dropdown / Card */}
            <div className="flex items-center gap-3 pl-3 border-l border-gray-200">
              <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#0056D2] to-indigo-500 text-white font-bold flex items-center justify-center shadow-md text-sm border-2 border-white">
                MS
              </div>
              <div className="hidden md:block text-left">
                <h4 className="text-[13px] font-extrabold text-gray-900 leading-tight">
                  Manas Singh
                </h4>
                <p className="text-[11px] font-semibold text-gray-500">
                  BCA Student • KIOT
                </p>
              </div>
            </div>
          </div>
        </header>

        {/* DASHBOARD BODY */}
        <main className="p-6 md:p-8 space-y-8 max-w-[1400px] mx-auto w-full">
          
          {/* WELCOME BANNER */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-gradient-to-r from-[#0056D2] via-[#0044A8] to-indigo-900 rounded-[2rem] p-6 sm:p-8 text-white relative overflow-hidden shadow-xl shadow-blue-900/10"
          >
            {/* Background Decorative Accent */}
            <div className="absolute right-0 top-0 bottom-0 w-1/2 pointer-events-none opacity-20 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-amber-300 via-emerald-400 to-transparent" />

            <div className="relative z-10 max-w-2xl">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-3.5 py-1.5 rounded-full text-[12px] font-bold text-amber-300 border border-white/15 mb-4">
                <Sparkles size={14} />
                <span>Smart India Hackathon 2026 Portal</span>
              </div>
              <h1 className="text-2xl sm:text-4xl font-black tracking-tight mb-2">
                Welcome back, Manas! 👋
              </h1>
              <p className="text-blue-100 text-[14px] font-medium leading-relaxed mb-6">
                You have 2 project milestones due this week. Review your current progress and track mentor feedbacks directly from your dashboard.
              </p>

              <div className="flex flex-wrap items-center gap-3">
                <button className="bg-white hover:bg-gray-100 text-[#0056D2] px-5 py-2.5 rounded-xl text-[13px] font-extrabold shadow-md transition-all flex items-center gap-2 active:scale-95">
                  <Plus size={16} strokeWidth={3} />
                  Submit New Project
                </button>
                <button className="bg-white/10 hover:bg-white/20 text-white border border-white/20 px-5 py-2.5 rounded-xl text-[13px] font-bold transition-all flex items-center gap-2 backdrop-blur-sm">
                  View Problem Statements
                  <ArrowUpRight size={16} />
                </button>
              </div>
            </div>
          </motion.div>

          {/* METRICS / STATS GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {stats.map((stat, idx) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  className="bg-white p-5 rounded-2xl border border-gray-200/80 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className={`p-3 rounded-xl ${stat.bg} ${stat.color}`}>
                      <Icon size={22} strokeWidth={2.5} />
                    </div>
                    <span className="text-[11px] font-extrabold px-2.5 py-1 bg-gray-100 text-gray-600 rounded-full">
                      {stat.change}
                    </span>
                  </div>
                  <h3 className="text-2xl font-black text-gray-900 tracking-tight">
                    {stat.value}
                  </h3>
                  <p className="text-[13px] font-semibold text-gray-500 mt-0.5">
                    {stat.title}
                  </p>
                </motion.div>
              );
            })}
          </div>

          {/* TWO COLUMN CONTENT SECTION */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* LEFT 2 COLUMNS: Ongoing Projects */}
            <div className="lg:col-span-2 space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-lg font-black text-gray-900 tracking-tight">
                    Active Projects & Modules
                  </h2>
                  <p className="text-[12px] font-medium text-gray-500">
                    Track your current software & academic deployments
                  </p>
                </div>
                <button className="text-[13px] font-bold text-[#0056D2] hover:underline flex items-center gap-1">
                  View All <ChevronRight size={16} />
                </button>
              </div>

              {/* Projects List */}
              <div className="space-y-4">
                {activeProjects.map((project) => (
                  <motion.div
                    key={project.id}
                    whileHover={{ y: -2 }}
                    className="bg-white p-5 rounded-2xl border border-gray-200/80 shadow-sm transition-all"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-3">
                      <div>
                        <span className="text-[11px] font-bold text-gray-400 uppercase tracking-wider">
                          {project.category}
                        </span>
                        <h3 className="text-[16px] font-extrabold text-gray-900 tracking-tight">
                          {project.title}
                        </h3>
                      </div>
                      <span className={`self-start sm:self-auto text-[11px] font-extrabold px-3 py-1 rounded-full ${project.statusBg}`}>
                        {project.status}
                      </span>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag, i) => (
                        <span key={i} className="text-[11px] font-semibold bg-gray-100 text-gray-600 px-2.5 py-0.5 rounded-md">
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Progress Bar & Footer */}
                    <div className="pt-3 border-t border-gray-100 flex items-center justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex justify-between text-[12px] font-bold mb-1">
                          <span className="text-gray-500">Completion</span>
                          <span className="text-[#0056D2]">{project.progress}%</span>
                        </div>
                        <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-[#0056D2] rounded-full transition-all duration-500"
                            style={{ width: `${project.progress}%` }}
                          />
                        </div>
                      </div>

                      <div className="flex items-center gap-1 text-[12px] font-bold text-gray-500 shrink-0">
                        <Clock size={14} className="text-gray-400" />
                        <span>{project.dueDate}</span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* RIGHT COLUMN: Upcoming Events & Quick Feed */}
            <div className="space-y-6">
              
              {/* Upcoming Events Box */}
              <div className="bg-white p-6 rounded-2xl border border-gray-200/80 shadow-sm">
                <div className="flex items-center justify-between mb-5">
                  <h3 className="text-[16px] font-black text-gray-900 tracking-tight flex items-center gap-2">
                    <Calendar size={18} className="text-[#0056D2]" />
                    Upcoming Schedule
                  </h3>
                  <span className="text-[11px] font-bold bg-blue-50 text-[#0056D2] px-2.5 py-1 rounded-full">
                    3 Sessions
                  </span>
                </div>

                <div className="space-y-4">
                  {upcomingEvents.map((evt) => (
                    <div key={evt.id} className="p-3.5 rounded-xl bg-gray-50 hover:bg-gray-100/70 transition-colors border border-gray-100">
                      <div className="flex items-center justify-between mb-1.5">
                        <span className={`text-[10px] font-extrabold px-2 py-0.5 rounded border ${evt.typeBg}`}>
                          {evt.type}
                        </span>
                        <span className="text-[11px] font-bold text-gray-400">
                          {evt.date}
                        </span>
                      </div>
                      <h4 className="text-[13px] font-extrabold text-gray-800 leading-snug">
                        {evt.title}
                      </h4>
                    </div>
                  ))}
                </div>

                <button className="w-full mt-5 py-2.5 border border-gray-200 text-gray-700 hover:text-[#0056D2] hover:border-[#0056D2] rounded-xl text-[13px] font-extrabold transition-all">
                  Open Full Calendar
                </button>
              </div>

              {/* Quick Academic Notice Banner */}
              <div className="bg-gradient-to-br from-slate-900 to-slate-800 text-white p-6 rounded-2xl shadow-lg relative overflow-hidden">
                <div className="flex items-center gap-2 text-amber-400 text-[12px] font-extrabold mb-2">
                  <TrendingUp size={16} />
                  <span>AKTU Curriculum Update</span>
                </div>
                <h3 className="text-[15px] font-extrabold mb-2 leading-snug">
                  BCA 3rd Semester OOPs in C++ Presentation Deck Ready
                </h3>
                <p className="text-[12px] text-gray-300 font-medium mb-4 leading-relaxed">
                  Download the latest slide deck with practical code examples & inheritance diagrams.
                </p>
                <button className="bg-white text-slate-900 hover:bg-gray-100 px-4 py-2 rounded-xl text-[12px] font-black transition-colors flex items-center gap-2">
                  <FileText size={15} />
                  Download Deck
                </button>
              </div>

            </div>

          </div>

        </main>
      </div>

    </div>
  );
}