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
import { doc, getDoc } from "firebase/firestore";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom"; 

export default function Dashboard() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const navigate = useNavigate();

  // DYNAMIC USER STATES
  const [userName, setUserName] = useState("Loading...");
  const [userEmail, setUserEmail] = useState("Loading...");
  const [userInitial, setUserInitial] = useState("");

  useEffect(() => {
    // Check if user is logged in
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        setUserEmail(user.email);
        
        // Extract Roll Number
        const rollNo = user.email.split('@')[0];

        try {
          const docRef = doc(db, "students", rollNo);
          const docSnap = await getDoc(docRef);

          if (docSnap.exists()) {
            const fetchedName = docSnap.data().name;
            setUserName(fetchedName);
            setUserInitial(fetchedName.charAt(0).toUpperCase());
          } else {
            setUserName("Student");
            setUserInitial("L");
          }
        } catch (error) {
          console.error("Error fetching user data:", error);
          setUserName("Student");
          setUserInitial("L");
        }
      } else {
        navigate("/login");
      }
    });

    return () => unsubscribe();
  }, [navigate]);

  // LOGOUT FUNCTION
  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate("/login");
    } catch (error) {
      console.error("Logout Error:", error);
    }
  };

  return (
    <div className="min-h-screen bg-slate-100 text-slate-800 font-sans flex flex-col w-full absolute top-0 left-0 right-0 z-50">
      
      {/* 1. TOP GOVT BAR */}
      <div className="bg-[#F8FAFC] border-b border-gray-200 text-[10px] sm:text-[12px] font-medium py-1.5 px-4 sm:px-8 flex justify-between items-center text-slate-600">
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
      <header className="bg-white border-b border-gray-200 py-3 px-4 sm:px-8 flex justify-between items-center sticky top-0 z-30 shadow-sm">
        
        <div className="flex items-center gap-3 sm:gap-6 lg:gap-10">
          <button 
            className="lg:hidden text-slate-600 hover:text-blue-600 p-1"
            onClick={() => setIsSidebarOpen(true)}
          >
            <Menu size={24} />
          </button>

          <div className="flex items-center gap-2 sm:gap-3">
            <img src={ashokaLogo} alt="Satyameva Jayate" className="h-8 sm:h-10 md:h-12 object-contain" />
            <div className="leading-tight hidden md:block">
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
          <div className="relative hidden xl:block w-[400px]">
            <Search size={16} className="absolute left-4 top-2.5 text-slate-400" />
            <input 
              type="text" 
              placeholder="Search documents, notes, topics..." 
              className="w-full pl-11 pr-4 py-2 bg-[#F8FAFC] border border-slate-200 rounded-full text-[13px] text-slate-700 placeholder:text-slate-400 focus:outline-none focus:border-blue-500 focus:bg-white transition-all shadow-sm"
            />
          </div>
          
          <div className="flex items-center gap-4 sm:gap-6">
            <button className="text-slate-500 hover:text-blue-600 transition-colors cursor-pointer hidden sm:block">
              <Search size={20} strokeWidth={1.5} className="xl:hidden" />
            </button>
            <button className="text-slate-500 hover:text-blue-600 transition-colors cursor-pointer">
              <Bell size={20} strokeWidth={1.5} />
            </button>
            
            {/* PROFILE DROPDOWN */}
            <div className="relative">
              <div 
                className="flex items-center gap-3 cursor-pointer group"
                onClick={() => setIsProfileDropdownOpen(!isProfileDropdownOpen)}
              >
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#1E3A8A] text-white flex items-center justify-center font-bold text-xs sm:text-sm shadow-sm group-hover:bg-blue-900 transition-colors">
                  {userInitial || "L"}
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
                  
                  {/* Mobile Only Details */}
                  <div className="px-4 py-3 border-b border-gray-100 sm:hidden">
                    <p className="text-[12px] font-bold text-slate-900 uppercase truncate">{userName}</p>
                    <p className="text-[10px] text-slate-500 truncate">{userEmail}</p>
                  </div>
                  
                  {/* Edit Profile Button */}
                  <button 
                    onClick={() => {
                      setIsProfileDropdownOpen(false);
                      navigate("/settings");
                    }}
                    className="w-full text-left px-4 py-2.5 text-[13px] font-semibold text-slate-600 hover:bg-slate-50 hover:text-blue-600 flex items-center gap-2 transition-colors border-b border-gray-50"
                  >
                    <UserCircle size={16} /> Edit Profile
                  </button>

                  {/* Settings Button */}
                  <button 
                    onClick={() => {
                      setIsProfileDropdownOpen(false);
                      navigate("/settings");
                    }}
                    className="w-full text-left px-4 py-2.5 text-[13px] font-semibold text-slate-600 hover:bg-slate-50 hover:text-blue-600 flex items-center gap-2 transition-colors"
                  >
                    <Settings size={16} /> Settings
                  </button>

                  {/* Logout Button */}
                  <button 
                    onClick={handleLogout}
                    className="w-full text-left px-4 py-2.5 text-[13px] font-semibold text-red-600 hover:bg-red-50 flex items-center gap-2 transition-colors"
                  >
                    <LogOut size={16} /> Logout
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* 3. MAIN LAYOUT (SIDEBAR + CONTENT) */}
      <div className="flex flex-1 overflow-hidden relative">
        
        {isSidebarOpen && (
          <div 
            className="fixed inset-0 bg-slate-900/50 z-40 lg:hidden"
            onClick={() => setIsSidebarOpen(false)}
          />
        )}

        {/* SIDEBAR WITH LOGOUT/SETTINGS SECTION */}
        <aside className={`fixed inset-y-0 left-0 transform ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"} lg:translate-x-0 lg:static lg:block w-64 bg-white border-r border-gray-200 p-4 flex flex-col justify-between overflow-y-auto shrink-0 shadow-[2px_0_8px_-4px_rgba(0,0,0,0.1)] z-50 transition-transform duration-300 ease-in-out h-full`}>
          
          {/* Top Menu Section */}
          <div className="flex-1 flex flex-col min-h-0">
            <div className="flex justify-between items-center mb-6 lg:hidden shrink-0">
              <span className="font-bold text-[#1E3A8A] text-lg">Menu</span>
              <button onClick={() => setIsSidebarOpen(false)} className="text-slate-500 hover:text-red-500 p-1">
                <X size={20} />
              </button>
            </div>

            <nav className="space-y-1 flex-1 overflow-y-auto pr-2">
              {[
                { icon: LayoutDashboard, label: "Dashboard", path: "/dashboard", active: true },
                { icon: Upload, label: "Upload Document", path: "/upload", active: false },
                { icon: FileText, label: "My Documents", path: "#", active: false },
                { icon: Sparkles, label: "AI Notes", path: "#", active: false },
                { icon: MessageSquare, label: "Ask DocuMind", path: "#", active: false },
                { icon: BookOpen, label: "Learning Paths", path: "#", active: false },
                { icon: CheckSquare, label: "Assessments", path: "#", active: false },
                { icon: Bookmark, label: "Bookmarks", path: "#", active: false },
                { icon: TrendingUp, label: "My Progress", path: "#", active: false },
              ].map((item, i) => (
                <button 
                  key={i} 
                  onClick={() => {
                    
                    if (item.path && item.path !== "#") {
                      navigate(item.path);
                    }
                  }}
                  className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-[13px] font-semibold transition-all ${item.active ? "bg-blue-50 text-blue-700 border border-blue-100" : "text-gray-600 hover:bg-slate-50 hover:text-gray-900"}`}
                >
                  <item.icon size={16} className={item.active ? "text-blue-600" : "text-gray-400"} />
                  {item.label}
                </button>
              ))}
            </nav>
          </div>
          
          {/* Bottom Settings & Logout Section */}
          <div className="pt-4 border-t border-gray-200 mt-4 space-y-4 shrink-0">
            <div className="space-y-1">
              <button 
                onClick={() => navigate("/settings")} 
                className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-[13px] font-semibold text-gray-600 hover:bg-slate-50 hover:text-gray-900 transition-all"
              >
                <Settings size={16} className="text-gray-400" />
                Settings
              </button>
              <button 
                onClick={handleLogout}
                className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-[13px] font-semibold text-red-600 hover:bg-red-50 transition-all group"
              >
                <LogOut size={16} className="text-red-400 group-hover:text-red-600 transition-colors" />
                Logout
              </button>
            </div>

            <div className="p-4 bg-slate-50 border border-gray-200 rounded-xl text-center shadow-sm">
              <div className="w-10 h-1 bg-gradient-to-r from-orange-400 via-white to-green-500 mx-auto mb-3 border border-gray-200"></div>
              <h5 className="text-[12px] font-bold text-slate-800">Knowledge for<br/>A Stronger, Data-Driven<br/>India</h5>
            </div>
          </div>

        </aside>

        <main className="flex-1 p-4 sm:p-6 overflow-y-auto pb-12 w-full">
          <div className="max-w-7xl mx-auto space-y-6">
            
            {/* FULL WIDTH WELCOME CARD (REVERTED TO WHITE/CLEAN DESIGN) */}
            <div className="w-full bg-white rounded-2xl border border-gray-200 p-5 sm:p-6 flex flex-col justify-between relative overflow-hidden shadow-sm">
              <div className="absolute top-0 right-0 w-full md:w-1/2 h-full opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
              <div className="relative z-10 w-full md:w-2/3">
                <p className="text-gray-500 text-[12px] sm:text-[13px] font-semibold mb-1">Welcome back,</p>
                <h2 className="text-2xl sm:text-3xl font-black text-[#1A365D] mb-3 uppercase">{userName} 👋</h2>
                <p className="text-gray-600 text-[12px] sm:text-[13px] mb-6 leading-relaxed">
                  Continue your learning journey with DocuMind. Upload documents, get AI summaries, take notes and explore government data — all in one secure platform.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <button onClick={() => navigate('/upload')} className="bg-[#1A365D] justify-center text-white px-5 py-2.5 rounded-lg text-[13px] font-semibold flex items-center gap-2 hover:bg-blue-900 transition-colors shadow-sm">
                    Upload Document →
                  </button> 
                  <button className="bg-slate-50 justify-center text-blue-700 border border-blue-200 px-5 py-2.5 rounded-lg text-[13px] font-semibold flex items-center gap-2 hover:bg-blue-100 transition-colors shadow-sm">
                    <Sparkles size={16} /> Ask DocuMind
                  </button>
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
                  { val: "12", lbl: "Documents", icon: FileText, bg: "bg-blue-50", tc: "text-blue-600", bc: "border-blue-100" },
                  { val: "18", lbl: "Notes Gen", icon: CheckCircle2, bg: "bg-emerald-50", tc: "text-emerald-600", bc: "border-emerald-100" },
                  { val: "6", lbl: "Assessments", icon: CheckSquare, bg: "bg-orange-50", tc: "text-orange-600", bc: "border-orange-100" },
                  { val: "14h", lbl: "Learning Time", icon: Clock, bg: "bg-purple-50", tc: "text-purple-600", bc: "border-purple-100" }
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

              <div className="bg-white rounded-2xl border border-gray-200 p-5 shadow-sm">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="font-bold text-[14px] text-slate-900">Learning Progress</h3>
                  <button className="text-[11px] font-semibold text-blue-600 hover:underline">View Details →</button>
                </div>
                <div className="flex items-center gap-4 sm:gap-6">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full border-8 border-slate-100 border-t-blue-600 border-r-blue-600 flex items-center justify-center shrink-0 shadow-inner">
                    <div className="text-center">
                      <span className="font-black text-base sm:text-lg text-slate-900 leading-none">68%</span>
                    </div>
                  </div>
                  <div className="flex-1 space-y-2 text-[10px] sm:text-[11px] font-medium text-gray-600">
                    <div className="flex justify-between"><span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-blue-500"></span> Documents</span> <span className="font-bold text-gray-900">12</span></div>
                    <div className="flex justify-between"><span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-emerald-500"></span> Notes</span> <span className="font-bold text-gray-900">18</span></div>
                    <div className="flex justify-between"><span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-orange-500"></span> Assessments</span> <span className="font-bold text-gray-900">6</span></div>
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
                <div className="space-y-3 flex-1">
                  {[
                    { n: "Economic Survey 2024-25.pdf", d: "12 Sep 2026", s: "Summarized", c: "text-emerald-700 bg-emerald-50 border-emerald-100" },
                    { n: "MoSPI Annual Report 2023.docx", d: "10 Sep 2026", s: "Notes Ready", c: "text-blue-700 bg-blue-50 border-blue-100" },
                    { n: "Data Collection Methods.pptx", d: "08 Sep 2026", s: "Processing", c: "text-orange-700 bg-orange-50 border-orange-100" }
                  ].map((doc, i) => (
                    <div key={i} className="flex justify-between items-center py-2 px-1 sm:px-2 hover:bg-slate-50 rounded-lg transition-colors gap-2">
                      <div className="flex gap-2 sm:gap-3 items-start overflow-hidden">
                        <div className="bg-red-50 text-red-500 p-1.5 rounded-lg text-[8px] font-bold mt-0.5 border border-red-100 shrink-0">PDF</div>
                        <div className="min-w-0">
                          <p className="text-[11px] sm:text-[12px] font-bold text-slate-800 truncate">{doc.n}</p>
                          <p className="text-[9px] sm:text-[10px] text-gray-400">Uploaded • {doc.d}</p>
                        </div>
                      </div>
                      <span className={`text-[9px] sm:text-[10px] font-bold px-2 py-1 rounded-md border shrink-0 ${doc.c}`}>{doc.s}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white rounded-2xl border border-gray-200 p-5 shadow-sm flex flex-col">
                <div className="flex justify-between items-center mb-4 border-b border-gray-100 pb-3">
                  <h3 className="font-bold text-[14px] text-slate-900">Continue Learning</h3>
                  <button className="text-[11px] font-semibold text-blue-600 hover:underline">View All →</button>
                </div>
                <div className="space-y-4 flex-1 mt-2">
                  {[
                    { t: "Introduction to Official Statistics", p: "60%" },
                    { t: "Data Collection Methods", p: "40%" },
                    { t: "Survey Design and Sampling", p: "20%" },
                  ].map((path, i) => (
                    <div key={i}>
                      <div className="flex justify-between text-[11px] sm:text-[12px] font-bold text-slate-700 mb-1.5">
                        <span className="flex items-center gap-2 truncate pr-2"><BookOpen size={14} className="text-orange-500 shrink-0"/> <span className="truncate">{path.t}</span></span>
                        <span className="shrink-0">{path.p}</span>
                      </div>
                      <div className="w-full bg-slate-100 rounded-full h-1.5 shadow-inner">
                        <div className="bg-blue-600 h-1.5 rounded-full" style={{ width: path.p }}></div>
                      </div>
                    </div>
                  ))}
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
                    <button className="bg-emerald-50 hover:bg-emerald-100 text-emerald-700 p-3 sm:p-4 rounded-xl text-center transition-colors border border-emerald-100 shadow-sm">
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