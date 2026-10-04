import React, { useState, useEffect } from "react";
import { 
  LayoutDashboard, Upload, FileText, Sparkles, MessageSquare, BookOpen, 
  CheckSquare, Bookmark, TrendingUp, Settings, Search, Bell, ChevronDown,
  Clock, CheckCircle2, Menu, X, LogOut, UserCircle
} from "lucide-react";
import ashokaLogo from "../assets/ashoka.png";
import documindLogo from "../assets/logo.png";
import indiaLogo from "../assets/India Logo.png";

// FIREBASE IMPORTS 
import { auth, db } from "../firebase"; 
import { doc, getDoc, collection, query, where, orderBy, limit, getDocs } from "firebase/firestore";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom"; 

export default function Dashboard() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const navigate = useNavigate();

  const [userName, setUserName] = useState("Loading...");
  const [userEmail, setUserEmail] = useState("Loading...");
  const [userInitial, setUserInitial] = useState("");
  const [userId, setUserId] = useState("");

  const [recentDocs, setRecentDocs] = useState([]);
  const [learningPaths, setLearningPaths] = useState([]);
  const [stats, setStats] = useState({ docs: 0, notes: 0, assessments: 0 });
  const [isDataLoading, setIsDataLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        setUserEmail(user.email);
        const rollNo = user.email.split('@')[0];
        setUserId(rollNo);

        try {
          const docRef = doc(db, "students", rollNo);
          const docSnap = await getDoc(docRef);

          if (docSnap.exists()) {
            const fetchedName = docSnap.data().name;
            setUserName(fetchedName);
            setUserInitial(fetchedName.charAt(0).toUpperCase());
            fetchDashboardData(rollNo);
          } else {
            setUserName("Student");
            setUserInitial("S");
            setIsDataLoading(false);
          }
        } catch (error) {
          console.error("Error fetching user data:", error);
          setUserName("Student");
          setUserInitial("S");
          setIsDataLoading(false);
        }
      } else {
        navigate("/login");
      }
    });

    return () => unsubscribe();
  }, [navigate]);

  const fetchDashboardData = async (uid) => {
    try {
      setIsDataLoading(true);
      
      const docsRef = collection(db, "documents");
      const qDocs = query(docsRef, where("userId", "==", uid), orderBy("createdAt", "desc"), limit(3));
      const docsSnap = await getDocs(qDocs);
      
      let fetchedDocs = [];
      docsSnap.forEach((doc) => {
        fetchedDocs.push({ id: doc.id, ...doc.data() });
      });
      setRecentDocs(fetchedDocs);
      setStats(prev => ({ ...prev, docs: docsSnap.size })); 

      const pathsRef = collection(db, "learningPaths");
      const qPaths = query(pathsRef, where("userId", "==", uid), orderBy("lastAccessed", "desc"), limit(3));
      const pathsSnap = await getDocs(qPaths);
      
      let fetchedPaths = [];
      pathsSnap.forEach((doc) => {
        fetchedPaths.push({ id: doc.id, ...doc.data() });
      });
      setLearningPaths(fetchedPaths);

    } catch (error) {
      console.error("Error fetching dashboard content:", error);
    } finally {
      setIsDataLoading(false);
    }
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate("/login");
    } catch (error) {
      console.error("Logout Error:", error);
    }
  };

  const formatDate = (timestamp) => {
    if (!timestamp) return "Just now";
    const date = timestamp.toDate ? timestamp.toDate() : new Date(timestamp);
    return date.toLocaleDateString("en-US", { day: '2-digit', month: 'short', year: 'numeric' });
  };

  // ==========================================
  // 🚀 DYNAMIC PROGRESS CALCULATION 🚀
  // ==========================================
  const totalActivities = (stats.docs || 0) + (stats.notes || 0) + (stats.assessments || 0);
  // Calculates real percentage based on user activity. Defaults to 0 if no activity.
  const progressPercentage = totalActivities === 0 ? 0 : Math.min(100, totalActivities * 15); 
  
  // SVG Circle Math for smooth dynamic filling
  const radius = 32;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (progressPercentage / 100) * circumference;

  return (
    <div className="h-screen w-full bg-slate-100 text-slate-800 font-sans flex flex-col overflow-hidden selection:bg-[#0056D2] selection:text-white">
      
      {/* 1. TOP GOVT BAR */}
      <div className="bg-[#F8FAFC] border-b border-gray-200 text-[10px] sm:text-[12px] font-medium py-1.5 px-4 sm:px-8 flex justify-between items-center text-slate-600 shrink-0 z-50">
        <div className="flex items-center gap-1.5">
          <img src={indiaLogo} alt="India Logo" className="h-3 sm:h-4 md:h-5 object-contain" />
          <span>
            <span className="hidden sm:inline">Government of India <span className="mx-2 text-slate-300">|</span></span>
            भारत सरकार
          </span>
        </div>
        <div className="flex items-center gap-2 sm:gap-4">
          <button className="hover:text-blue-700 transition-colors">English</button>
          <span className="text-slate-300">|</span>
          <button className="hover:text-blue-700 transition-colors">हिंदी</button>
        </div>
      </div>

      {/* 2. MAIN HEADER */}
      <header className="bg-white border-b border-gray-200 py-3 px-4 sm:px-8 flex justify-between items-center shrink-0 z-40 shadow-sm relative">
        <div className="flex items-center gap-3 sm:gap-6 lg:gap-10">
          <button className="lg:hidden text-slate-600 hover:text-blue-600 p-1" onClick={() => setIsSidebarOpen(true)}>
            <Menu size={24} />
          </button>
          <div className="flex items-center gap-2 sm:gap-3 hidden md:flex">
            <img src={ashokaLogo} alt="Satyameva Jayate" className="h-8 sm:h-10 md:h-12 object-contain" />
            <div className="leading-tight">
              <h1 className="font-black text-[12px] sm:text-[14px] text-[#0F172A]">Ministry of Statistics &</h1>
              <h1 className="font-black text-[12px] sm:text-[14px] text-[#0F172A]">Programme Implementation</h1>
              <p className="text-[10px] sm:text-[11px] text-slate-500 font-medium mt-0.5">Government of India</p>
            </div>
          </div>
          <div className="flex items-center gap-2 sm:gap-3">
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center shadow-sm p-1 sm:p-1.5">
               <img src={documindLogo} alt="DocuMind Logo" className="h-6 w-8 sm:h-8 sm:w-11 object-contain" />
            </div>
            <div className="leading-tight">
              <h2 className="font-bold text-[14px] sm:text-[16px] text-[#1E3A8A]">DocuMind</h2>
              <p className="text-[8px] sm:text-[10px] text-slate-500 font-medium mt-0.5 tracking-wide hidden sm:block">Learn • Understand • Grow</p>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-4 sm:gap-8">
          <div className="relative hidden xl:block w-[350px]">
            <Search size={16} className="absolute left-4 top-2.5 text-slate-400" />
            <input type="text" placeholder="Search documents, notes, topics..." className="w-full pl-11 pr-4 py-2 bg-[#F8FAFC] border border-slate-200 rounded-full text-[13px] text-slate-700 placeholder:text-slate-400 focus:outline-none focus:border-blue-500 focus:bg-white transition-all shadow-sm"/>
          </div>
          <div className="flex items-center gap-4 sm:gap-6">
            <button className="text-slate-500 hover:text-blue-600 transition-colors cursor-pointer hidden sm:block xl:hidden">
              <Search size={20} strokeWidth={1.5} />
            </button>
            <button className="text-slate-500 hover:text-blue-600 transition-colors cursor-pointer relative">
              <Bell size={20} strokeWidth={1.5} />
              <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>
            
            <div className="relative">
              <div className="flex items-center gap-3 cursor-pointer group" onClick={() => setIsProfileDropdownOpen(!isProfileDropdownOpen)}>
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#1E3A8A] text-white flex items-center justify-center font-bold text-xs sm:text-sm shadow-sm group-hover:bg-blue-900 transition-colors">
                  {userInitial}
                </div>
                <div className="text-left hidden sm:block leading-tight">
                  <h4 className="text-[13px] sm:text-[14px] font-bold text-slate-900 flex items-center gap-1 group-hover:text-blue-700 transition-colors uppercase">
                    {userName}
                    <ChevronDown size={14} className={`text-slate-400 ml-1 stroke-[2.5px] transition-transform duration-200 ${isProfileDropdownOpen ? 'rotate-180' : ''}`}/>
                  </h4>
                  <p className="text-[11px] sm:text-[12px] text-slate-500 font-medium">Learner</p>
                </div>
              </div>

              {isProfileDropdownOpen && (
                <div className="absolute right-0 mt-3 w-48 bg-white rounded-xl shadow-lg border border-gray-100 py-2 z-50">
                  <div className="px-4 py-3 border-b border-gray-100 sm:hidden">
                    <p className="text-[12px] font-bold text-slate-900 uppercase truncate">{userName}</p>
                    <p className="text-[10px] text-slate-500 truncate">{userEmail}</p>
                  </div>
                  <button onClick={() => { setIsProfileDropdownOpen(false); navigate("/settings"); }} className="w-full text-left px-4 py-2.5 text-[13px] font-semibold text-slate-600 hover:bg-slate-50 hover:text-blue-600 flex items-center gap-2 transition-colors border-b border-gray-50">
                    <UserCircle size={16} /> Edit Profile
                  </button>
                  <button onClick={() => { setIsProfileDropdownOpen(false); navigate("/settings"); }} className="w-full text-left px-4 py-2.5 text-[13px] font-semibold text-slate-600 hover:bg-slate-50 hover:text-blue-600 flex items-center gap-2 transition-colors">
                    <Settings size={16} /> Settings
                  </button>
                  <button onClick={handleLogout} className="w-full text-left px-4 py-2.5 text-[13px] font-semibold text-red-600 hover:bg-red-50 flex items-center gap-2 transition-colors">
                    <LogOut size={16} /> Logout
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* 3. MAIN LAYOUT */}
      <div className="flex flex-1 overflow-hidden relative">
        {isSidebarOpen && <div className="fixed inset-0 bg-slate-900/50 z-40 lg:hidden" onClick={() => setIsSidebarOpen(false)}/>}

        <aside className={`absolute inset-y-0 left-0 transform ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"} lg:translate-x-0 lg:static lg:block w-64 bg-white border-r border-gray-200 p-4 flex flex-col justify-between overflow-y-auto shrink-0 shadow-[2px_0_8px_-4px_rgba(0,0,0,0.1)] z-50 transition-transform duration-300 ease-in-out`}>
          <div className="flex-1 flex flex-col min-h-0">
            <div className="flex justify-between items-center mb-6 lg:hidden shrink-0">
              <span className="font-bold text-[#1E3A8A] text-lg">Menu</span>
              <button onClick={() => setIsSidebarOpen(false)} className="text-slate-500 hover:text-red-500 p-1"><X size={20} /></button>
            </div>
            <nav className="space-y-1 flex-1 overflow-y-auto pr-2">
              {[
                { icon: LayoutDashboard, label: "Dashboard", path: "/dashboard", active: true },
                { icon: Upload, label: "Upload Document", path: "/upload", active: false },
                { icon: FileText, label: "My Documents", path: "#", active: false },
                { icon: Sparkles, label: "AI Notes", path: "#", active: false },
                { icon: MessageSquare, label: "Ask DocuMind", path: "/chat", active: false },
                { icon: BookOpen, label: "Learning Paths", path: "#", active: false },
                { icon: CheckSquare, label: "Assessments", path: "#", active: false },
                { icon: Bookmark, label: "Bookmarks", path: "#", active: false },
                { icon: TrendingUp, label: "My Progress", path: "#", active: false },
              ].map((item, i) => (
                <button key={i} onClick={() => { if (item.path && item.path !== "#") { navigate(item.path); setIsSidebarOpen(false); } }}
                  className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-[13px] font-semibold transition-all ${item.active ? "bg-blue-50 text-blue-700 border border-blue-100" : "text-gray-600 hover:bg-slate-50 hover:text-gray-900"}`}>
                  <item.icon size={16} className={item.active ? "text-blue-600" : "text-gray-400"} />{item.label}
                </button>
              ))}
            </nav>
          </div>
          <div className="pt-4 border-t border-gray-200 mt-4 space-y-4 shrink-0">
            <div className="space-y-1">
              <button onClick={() => navigate("/settings")} className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-[13px] font-semibold text-gray-600 hover:bg-slate-50 hover:text-gray-900 transition-all"><Settings size={16} className="text-gray-400" />Settings</button>
              <button onClick={handleLogout} className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-[13px] font-semibold text-red-600 hover:bg-red-50 transition-all group"><LogOut size={16} className="text-red-400 group-hover:text-red-600 transition-colors" />Logout</button>
            </div>
            <div className="p-4 bg-slate-50 border border-gray-200 rounded-xl text-center shadow-sm">
              <div className="w-10 h-1 bg-gradient-to-r from-orange-400 via-white to-green-500 mx-auto mb-3 border border-gray-200"></div>
              <h5 className="text-[12px] font-bold text-slate-800">Knowledge for<br/>A Stronger, Data-Driven<br/>India</h5>
            </div>
          </div>
        </aside>

        <main className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8 w-full pb-20">
          <div className="max-w-7xl mx-auto space-y-6">
            
            <div className="w-full bg-white rounded-2xl border border-gray-200 p-5 sm:p-6 flex flex-col justify-between relative overflow-hidden shadow-sm">
              <div className="absolute top-0 right-0 w-full md:w-1/2 h-full opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
              <div className="relative z-10 w-full md:w-2/3">
                <p className="text-gray-500 text-[12px] sm:text-[13px] font-semibold mb-1">Welcome back,</p>
                <h2 className="text-2xl sm:text-3xl font-black text-[#1A365D] mb-3 uppercase">{userName} 👋</h2>
                <p className="text-gray-600 text-[12px] sm:text-[13px] mb-6 leading-relaxed max-w-2xl">Continue your learning journey with DocuMind. Upload documents, get AI summaries, take notes and explore government data — all in one secure platform.</p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <button onClick={() => navigate('/upload')} className="bg-[#1A365D] justify-center text-white px-5 py-2.5 rounded-lg text-[13px] font-semibold flex items-center gap-2 hover:bg-blue-900 transition-colors shadow-sm">Upload Document →</button> 
                  <button onClick={() => navigate('/chat')} className="flex justify-center items-center gap-2 px-5 py-2.5 bg-blue-50 text-blue-700 rounded-lg text-[13px] font-semibold border border-blue-100 hover:bg-blue-100 transition-colors"><Sparkles size={16} /> Ask DocuMind</button>
                </div>
              </div>
              <div className="hidden md:flex absolute right-6 top-6 bottom-6 w-[28%] bg-slate-50/80 backdrop-blur-md border border-gray-100 p-4 rounded-xl shadow-sm flex-col justify-center">
                 <div className="text-4xl text-blue-200 font-serif leading-none mb-2">"</div>
                 <p className="text-[13px] font-semibold text-slate-700 italic">Knowledge empowers people and drives better policies.</p>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
              
              <div className="lg:col-span-2 grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
                {[
                  { val: stats.docs || "0", lbl: "Documents", icon: FileText, bg: "bg-blue-50", tc: "text-blue-600", bc: "border-blue-100" },
                  { val: stats.notes || "0", lbl: "Notes Gen", icon: CheckCircle2, bg: "bg-emerald-50", tc: "text-emerald-600", bc: "border-emerald-100" },
                  { val: stats.assessments || "0", lbl: "Assessments", icon: CheckSquare, bg: "bg-orange-50", tc: "text-orange-600", bc: "border-orange-100" },
                  { val: "0h", lbl: "Learning Time", icon: Clock, bg: "bg-purple-50", tc: "text-purple-600", bc: "border-purple-100" }
                ].map((s, i) => (
                  <div key={i} className={`bg-white rounded-2xl border ${s.bc} p-3 sm:p-4 flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 shadow-sm hover:shadow-md transition-shadow`}>
                    <div className={`w-8 h-8 sm:w-10 sm:h-10 rounded-xl ${s.bg} ${s.tc} flex items-center justify-center shrink-0`}>
                      <s.icon size={18} className="sm:w-5 sm:h-5" />
                    </div>
                    <div>
                      <h4 className="font-black text-base sm:text-lg text-slate-900 leading-none mb-1">{s.val}</h4>
                      <p className="text-[9px] sm:text-[10px] font-semibold text-gray-500 leading-tight">{s.lbl}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* 🚀 REAL-TIME PROGRESS CARD (SVG FIXED) 🚀 */}
              <div className="bg-white rounded-2xl border border-gray-200 p-5 shadow-sm">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="font-bold text-[14px] text-slate-900">Learning Progress</h3>
                  <button className="text-[11px] font-semibold text-blue-600 hover:underline">View Details →</button>
                </div>
                <div className="flex items-center gap-4 sm:gap-6">
                  
                  {/* Dynamic SVG Circle */}
                  <div className="relative w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center shrink-0">
                    <svg className="transform -rotate-90 w-full h-full" viewBox="0 0 80 80">
                      {/* Gray Background Track */}
                      <circle cx="40" cy="40" r={radius} stroke="currentColor" strokeWidth="8" fill="transparent" className="text-slate-100" />
                      {/* Blue Progress Bar */}
                      <circle cx="40" cy="40" r={radius} stroke="currentColor" strokeWidth="8" fill="transparent" 
                              strokeDasharray={circumference} strokeDashoffset={strokeDashoffset} 
                              className="text-blue-600 transition-all duration-1000 ease-out" strokeLinecap="round" />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="font-black text-base sm:text-lg text-slate-900 leading-none">{progressPercentage}%</span>
                    </div>
                  </div>

                  <div className="flex-1 space-y-2 text-[10px] sm:text-[11px] font-medium text-gray-600">
                    <div className="flex justify-between"><span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-blue-500"></span> Documents</span> <span className="font-bold text-gray-900">{stats.docs || 0}</span></div>
                    <div className="flex justify-between"><span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-emerald-500"></span> Notes</span> <span className="font-bold text-gray-900">{stats.notes || 0}</span></div>
                    <div className="flex justify-between"><span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-orange-500"></span> Assessments</span> <span className="font-bold text-gray-900">{stats.assessments || 0}</span></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6">
              <div className="bg-white rounded-2xl border border-gray-200 p-5 shadow-sm flex flex-col">
                <div className="flex justify-between items-center mb-4 border-b border-gray-100 pb-3">
                  <h3 className="font-bold text-[14px] text-slate-900">Recent Documents</h3>
                  <button className="text-[11px] font-semibold text-blue-600 hover:underline">View All →</button>
                </div>
                <div className="space-y-3 flex-1 overflow-y-auto pr-1">
                  {isDataLoading ? (
                    <div className="flex items-center justify-center h-full text-sm text-gray-400">Loading...</div>
                  ) : recentDocs.length > 0 ? (
                    recentDocs.map((doc, i) => (
                      <div key={i} className="flex justify-between items-center py-2 px-1 sm:px-2 hover:bg-slate-50 rounded-lg transition-colors gap-2 cursor-pointer">
                        <div className="flex gap-2 sm:gap-3 items-start overflow-hidden">
                          <div className={`bg-red-50 text-red-500 p-1.5 rounded-lg text-[8px] font-bold mt-0.5 border border-red-100 shrink-0 uppercase`}>{doc.fileType?.substring(0,3) || "DOC"}</div>
                          <div className="min-w-0">
                            <p className="text-[11px] sm:text-[12px] font-bold text-slate-800 truncate">{doc.fileName || "Untitled Document"}</p>
                            <p className="text-[9px] sm:text-[10px] text-gray-400">Uploaded • {formatDate(doc.createdAt)}</p>
                          </div>
                        </div>
                        <span className={`text-[9px] sm:text-[10px] font-bold px-2 py-1 rounded-md border shrink-0 ${doc.status === 'processed' ? 'text-emerald-700 bg-emerald-50 border-emerald-100' : 'text-orange-700 bg-orange-50 border-orange-100'}`}>
                          {doc.status === 'processed' ? 'Summarized' : 'Processing'}
                        </span>
                      </div>
                    ))
                  ) : (
                    <div className="flex flex-col items-center justify-center h-full text-center mt-6">
                      <FileText size={24} className="text-gray-300 mb-2" />
                      <p className="text-[12px] text-gray-500 font-medium">No documents uploaded yet.</p>
                    </div>
                  )}
                </div>
              </div>

              <div className="bg-white rounded-2xl border border-gray-200 p-5 shadow-sm flex flex-col">
                <div className="flex justify-between items-center mb-4 border-b border-gray-100 pb-3">
                  <h3 className="font-bold text-[14px] text-slate-900">Continue Learning</h3>
                  <button className="text-[11px] font-semibold text-blue-600 hover:underline">View All →</button>
                </div>
                <div className="space-y-4 flex-1 mt-2 overflow-y-auto pr-1">
                  {isDataLoading ? (
                    <div className="flex items-center justify-center h-full text-sm text-gray-400">Loading...</div>
                  ) : learningPaths.length > 0 ? (
                    learningPaths.map((path, i) => (
                      <div key={i} className="cursor-pointer hover:bg-slate-50 p-1.5 -mx-1.5 rounded-lg transition-colors">
                        <div className="flex justify-between text-[11px] sm:text-[12px] font-bold text-slate-700 mb-1.5">
                          <span className="flex items-center gap-2 truncate pr-2"><BookOpen size={14} className="text-orange-500 shrink-0"/> <span className="truncate">{path.title || "Untitled Topic"}</span></span>
                          <span className="shrink-0">{path.progress || 0}%</span>
                        </div>
                        <div className="w-full bg-slate-100 rounded-full h-1.5 shadow-inner">
                          <div className="bg-blue-600 h-1.5 rounded-full" style={{ width: `${path.progress || 0}%` }}></div>
                        </div>
                      </div>
                    ))
                  ) : (
                     <div className="flex flex-col items-center justify-center h-full text-center mt-6">
                      <TrendingUp size={24} className="text-gray-300 mb-2" />
                      <p className="text-[12px] text-gray-500 font-medium">No learning paths started.</p>
                    </div>
                  )}
                </div>
              </div>

              <div className="flex flex-col gap-4 sm:gap-6 sm:col-span-2 xl:col-span-1">
                <div className="bg-white rounded-2xl border border-gray-200 p-5 shadow-sm">
                  <h3 className="font-bold text-[14px] text-slate-900 mb-4 border-b border-gray-100 pb-3">Quick Actions</h3>
                  <div className="grid grid-cols-2 gap-3 mt-2">
                    <button onClick={() => navigate('/upload')} className="bg-blue-50 hover:bg-blue-100 text-blue-700 p-3 sm:p-4 rounded-xl text-center transition-colors border border-blue-100 shadow-sm">
                      <Upload size={18} className="mx-auto mb-2 sm:w-5 sm:h-5"/>
                      <p className="text-[10px] sm:text-[11px] font-bold">Upload Doc</p>
                    </button>
                    <button onClick={() => navigate('/chat')} className="bg-emerald-50 hover:bg-emerald-100 text-emerald-700 p-3 sm:p-4 rounded-xl text-center transition-colors border border-emerald-100 shadow-sm">
                      <Sparkles size={18} className="mx-auto mb-2 sm:w-5 sm:h-5"/>
                      <p className="text-[10px] sm:text-[11px] font-bold">Generate AI</p>
                    </button>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </main>
      </div>
    </div>
  );
}