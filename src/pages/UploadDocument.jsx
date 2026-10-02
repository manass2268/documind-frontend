import React, { useState, useEffect, useRef } from "react";
import { 
  LayoutDashboard, Upload, FileText, Sparkles, MessageSquare, BookOpen, 
  CheckSquare, Bookmark, TrendingUp, Settings, Search, Bell, ChevronDown,
  Clock, CheckCircle2, CheckCircle, Menu, X, LogOut, UserCircle, UploadCloud, Loader2, 
  ChevronRight, Home, AlertCircle, Shield
} from "lucide-react";
import ashokaLogo from "../assets/ashoka.png";
import documindLogo from "../assets/logo.png";
import indiaLogo from "../assets/India Logo.png";

// FIREBASE IMPORTS 
import { auth, db } from "../firebase"; 
import { doc, getDoc } from "firebase/firestore";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom"; 

export default function UploadDocument() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const navigate = useNavigate();

  // DYNAMIC USER STATES 
  const [userName, setUserName] = useState("Loading...");
  const [userEmail, setUserEmail] = useState("Loading...");
  const [userInitial, setUserInitial] = useState("");

  // UPLOAD FLOW STATES
  const fileInputRef = useRef(null);
  const [uploadState, setUploadState] = useState("idle");
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [processingProgress, setProcessingProgress] = useState(0);
  
  const [formData, setFormData] = useState({ title: "" });

  const [processSteps, setProcessSteps] = useState([
    { id: 1, text: "Upload complete", status: "pending" },
    { id: 2, text: "Reading document", status: "pending" },
    { id: 3, text: "Extracting text", status: "pending" },
    { id: 4, text: "Preparing content", status: "pending" },
    { id: 5, text: "Finalizing", status: "pending" }
  ]);

  // Firebase Auth Hook
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        setUserEmail(user.email);
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
            setUserInitial("S");
          }
        } catch (error) {
          console.error("Error fetching user data:", error);
        }
      } else {
        navigate("/login");
      }
    });
    return () => unsubscribe();
  }, [navigate]);

  // CHROME BACK BUTTON INTERCEPTOR
  useEffect(() => {
    window.history.pushState(null, null, window.location.pathname);
    const handleBackButton = (e) => {
      e.preventDefault();
      navigate("/dashboard"); 
    };
    window.addEventListener("popstate", handleBackButton);
    return () => {
      window.removeEventListener("popstate", handleBackButton);
    };
  }, [navigate]);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate("/login");
    } catch (error) {
      console.error("Logout Error:", error);
    }
  };

  // UPLOAD HANDLERS
  const handleFileSelect = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedFile(file);
      setFormData({ title: file.name.split('.')[0] });
      setUploadState("selected");
    }
  };

  const handleDragOver = (e) => e.preventDefault();
  const handleDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file) {
      setSelectedFile(file);
      setFormData({ title: file.name.split('.')[0] });
      setUploadState("selected");
    }
  };

  const cancelUpload = () => {
    setSelectedFile(null);
    setUploadState("idle");
    setUploadProgress(0);
  };

  const startUploadFlow = () => {
    setUploadState("uploading");
    let progress = 0;
    const uploadInterval = setInterval(() => {
      progress += 10;
      setUploadProgress(progress);
      if (progress >= 100) {
        clearInterval(uploadInterval);
        startProcessingFlow();
      }
    }, 300);
  };

  const startProcessingFlow = () => {
    setUploadState("processing");
    setTimeout(() => updateProcessStep(1, "completed"), 500);
    setTimeout(() => updateProcessStep(2, "completed"), 1500);
    setTimeout(() => { updateProcessStep(3, "in-progress"); setProcessingProgress(40); }, 2500);
    setTimeout(() => { updateProcessStep(3, "completed"); updateProcessStep(4, "in-progress"); setProcessingProgress(70); }, 4000);
    setTimeout(() => { updateProcessStep(4, "completed"); updateProcessStep(5, "completed"); setProcessingProgress(100); }, 5500);
    setTimeout(() => setUploadState("success"), 6000);
  };

  const updateProcessStep = (id, newStatus) => {
    setProcessSteps(prev => prev.map(step => step.id === id ? { ...step, status: newStatus } : step));
  };

  const handleViewDocument = () => {
    if (selectedFile) {
      const fileUrl = URL.createObjectURL(selectedFile);
      window.open(fileUrl, "_blank");
    } else {
      alert("Document not available for viewing yet.");
    }
  };

  return (
    <div className="h-screen bg-slate-100 text-slate-800 font-sans flex flex-col w-full">
      
      {/* 1. TOP GOVT BAR */}
      <div className="bg-[#F8FAFC] border-b border-gray-200 text-[10px] sm:text-[12px] font-medium py-1.5 px-4 sm:px-8 flex justify-between items-center text-slate-600 shrink-0">
        <div className="flex items-center gap-1.5">
          <img src={indiaLogo} alt="India Logo" className="h-3 sm:h-4 md:h-5 object-contain" />
          <span><span className="hidden sm:inline">Government of India <span className="mx-2 text-slate-300">|</span></span>भारत सरकार</span>
        </div>
        <div className="flex items-center gap-2 sm:gap-4">
          <button className="hover:text-blue-700 transition-colors">English</button><span className="text-slate-300">|</span><button className="hover:text-blue-700 transition-colors">हिंदी</button>
        </div>
      </div>

      {/* 2. MAIN HEADER */}
      <header className="bg-white border-b border-gray-200 py-3 px-4 sm:px-8 flex justify-between items-center shadow-sm shrink-0 z-30">
        <div className="flex items-center gap-3 sm:gap-6 lg:gap-10">
          <button className="lg:hidden text-slate-600 hover:text-blue-600 p-1" onClick={() => setIsSidebarOpen(true)}>
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
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center shadow-sm p-1 sm:p-1.5"><img src={documindLogo} alt="DocuMind Logo" className="h-6 w-8 sm:h-8 sm:w-11 object-contain" /></div>
            <div className="leading-tight">
              <h2 className="font-bold text-[14px] sm:text-[16px] text-[#1E3A8A]">DocuMind</h2>
              <p className="text-[8px] sm:text-[10px] text-slate-500 font-medium mt-0.5 tracking-wide hidden sm:block">Learn • Understand • Grow</p>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-4 sm:gap-8">
          <div className="relative hidden xl:block w-[400px]">
            <Search size={16} className="absolute left-4 top-2.5 text-slate-400" />
            <input type="text" placeholder="Search documents, notes, topics..." className="w-full pl-11 pr-4 py-2 bg-[#F8FAFC] border border-slate-200 rounded-full text-[13px] text-slate-700 placeholder:text-slate-400 focus:outline-none focus:border-blue-500 focus:bg-white transition-all shadow-sm" />
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
              <div className="flex items-center gap-3 cursor-pointer group" onClick={() => setIsProfileDropdownOpen(!isProfileDropdownOpen)}>
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#1E3A8A] text-white flex items-center justify-center font-bold text-xs sm:text-sm shadow-sm group-hover:bg-blue-900 transition-colors">{userInitial || "M"}</div>
                <div className="text-left hidden sm:block leading-tight">
                  <h4 className="text-[13px] sm:text-[14px] font-bold text-slate-900 flex items-center gap-1 group-hover:text-blue-700 transition-colors uppercase">
                    {userName} <ChevronDown size={14} className={`text-slate-400 ml-1 stroke-[2.5px] transition-transform duration-200 ${isProfileDropdownOpen ? 'rotate-180' : ''}`}/>
                  </h4>
                  <p className="text-[11px] sm:text-[12px] text-slate-500 font-medium">Student</p>
                </div>
              </div>

              {isProfileDropdownOpen && (
                <div className="absolute right-0 mt-3 w-48 bg-white rounded-xl shadow-lg border border-gray-100 py-2 z-50">
                  <div className="px-4 py-3 border-b border-gray-100 sm:hidden">
                    <p className="text-[12px] font-bold text-slate-900 uppercase truncate">{userName}</p>
                    <p className="text-[10px] text-slate-500 truncate">{userEmail}</p>
                  </div>
                  <button onClick={() => { setIsProfileDropdownOpen(false); navigate("/settings"); }} className="w-full text-left px-4 py-2.5 text-[13px] font-semibold text-slate-600 hover:bg-slate-50 hover:text-blue-600 flex items-center gap-2 transition-colors border-b border-gray-50"><UserCircle size={16} /> Edit Profile</button>
                  <button onClick={() => { setIsProfileDropdownOpen(false); navigate("/settings"); }} className="w-full text-left px-4 py-2.5 text-[13px] font-semibold text-slate-600 hover:bg-slate-50 hover:text-blue-600 flex items-center gap-2 transition-colors"><Settings size={16} /> Settings</button>
                  <button onClick={handleLogout} className="w-full text-left px-4 py-2.5 text-[13px] font-semibold text-red-600 hover:bg-red-50 flex items-center gap-2 transition-colors"><LogOut size={16} /> Logout</button>
                </div>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* 3. MAIN LAYOUT (SIDEBAR + SCROLLABLE CONTENT) */}
      <div className="flex flex-1 overflow-hidden relative">
        {isSidebarOpen && <div className="fixed inset-0 bg-slate-900/50 z-40 lg:hidden" onClick={() => setIsSidebarOpen(false)} />}
        
        {/* SIDEBAR */}
        <aside className={`fixed inset-y-0 left-0 transform ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"} lg:translate-x-0 lg:static lg:block w-64 bg-white border-r border-gray-200 p-4 flex flex-col justify-between overflow-y-auto shrink-0 shadow-[2px_0_8px_-4px_rgba(0,0,0,0.1)] z-20 transition-transform duration-300 ease-in-out h-full`}>
          <div className="flex-1 flex flex-col min-h-0">
            <div className="flex justify-between items-center mb-6 lg:hidden shrink-0">
              <span className="font-bold text-[#1E3A8A] text-lg">Menu</span>
              <button onClick={() => setIsSidebarOpen(false)} className="text-slate-500 hover:text-red-500 p-1"><X size={20} /></button>
            </div>

            <nav className="space-y-1 flex-1 overflow-y-auto pr-2">
              {[
                { icon: LayoutDashboard, label: "Dashboard", path: "/dashboard", active: false },
                { icon: Upload, label: "Upload Document", path: "/upload", active: true },
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
                  onClick={() => { if(item.path && item.path !== "#") navigate(item.path); }}
                  className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-[13px] font-semibold transition-all ${item.active ? "bg-blue-50 text-blue-700 border border-blue-100" : "text-gray-600 hover:bg-slate-50 hover:text-gray-900"}`}
                >
                  <item.icon size={16} className={item.active ? "text-blue-600" : "text-gray-400"} />
                  {item.label}
                </button>
              ))}
            </nav>
          </div>
          
          <div className="pt-4 border-t border-gray-200 mt-4 space-y-4 shrink-0">
            <div className="space-y-1">
              <button onClick={() => navigate("/settings")} className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-[13px] font-semibold text-gray-600 hover:bg-slate-50 hover:text-gray-900 transition-all"><Settings size={16} className="text-gray-400" /> Settings</button>
              <button onClick={handleLogout} className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-[13px] font-semibold text-red-600 hover:bg-red-50 transition-all group"><LogOut size={16} className="text-red-400 group-hover:text-red-600 transition-colors" /> Logout</button>
            </div>
            <div className="p-4 bg-slate-50 border border-gray-200 rounded-xl text-center shadow-sm">
              <div className="w-10 h-1 bg-gradient-to-r from-orange-400 via-white to-green-500 mx-auto mb-3 border border-gray-200"></div>
              <h5 className="text-[12px] font-bold text-slate-800">Knowledge for<br/>A Stronger, Data-Driven<br/>India</h5>
            </div>
          </div>
        </aside>

        {/* CONTENT AREA (Independent Scrolling) */}
        <main className="flex-1 p-4 sm:p-6 overflow-y-auto w-full pb-12">
          <div className="max-w-4xl mx-auto space-y-6">
            
            {/* Breadcrumbs */}
            <div className="flex items-center gap-2 text-[12px] font-semibold text-slate-500 mb-2">
              <Home size={14} className="cursor-pointer hover:text-blue-600" onClick={() => navigate('/dashboard')} /> 
              <ChevronRight size={14} className="text-slate-300" /> 
              <span className="text-blue-600">Upload Document</span>
            </div>

            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
              <div className="p-5 sm:p-6 border-b border-gray-100">
                <h2 className="text-lg sm:text-xl font-bold text-slate-900">Upload Document</h2>
                <p className="text-[12px] sm:text-[13px] text-gray-500 mt-1">Add a document to your DocuMind workspace. Supported formats: PDF, DOCX, PPTX, TXT, Images.</p>
              </div>

              <div className="p-5 sm:p-8">
                
                {/* STEP 2: IDLE (DRAG & DROP) */}
                {uploadState === "idle" && (
                  <div 
                    onDragOver={handleDragOver} 
                    onDrop={handleDrop}
                    className="border-2 border-dashed border-blue-200 bg-blue-50/50 rounded-xl p-8 sm:p-12 flex flex-col items-center justify-center text-center hover:bg-blue-50 transition-colors"
                  >
                    <div className="w-14 h-14 sm:w-16 sm:h-16 bg-white rounded-full shadow-sm flex items-center justify-center mb-4">
                      <UploadCloud size={28} className="text-blue-600" />
                    </div>
                    <h3 className="text-base sm:text-lg font-bold text-slate-800 mb-2">Drag & Drop your file here</h3>
                    <p className="text-[12px] sm:text-sm text-gray-500 mb-6">or click below to browse from your computer</p>
                    
                    <input 
                      type="file" 
                      ref={fileInputRef} 
                      onChange={handleFileSelect} 
                      className="hidden" 
                      accept="application/pdf, application/msword, application/vnd.openxmlformats-officedocument.wordprocessingml.document, application/vnd.ms-powerpoint, application/vnd.openxmlformats-officedocument.presentationml.presentation, text/plain, image/jpeg, image/png, .pdf, .doc, .docx, .ppt, .pptx, .txt" 
                    />
                    
                    <button onClick={() => fileInputRef.current.click()} className="bg-[#1A365D] text-white px-6 py-2.5 rounded-lg text-[13px] sm:text-[14px] font-semibold hover:bg-blue-900 shadow-sm transition-colors">
                      Browse Files
                    </button>
                    <p className="text-[10px] sm:text-[11px] text-gray-400 mt-4">Maximum file size: 50 MB</p>
                  </div>
                )}

                {/* STEP 3: READY TO UPLOAD */}
                {uploadState === "selected" && (
                  <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
                    <div className="bg-slate-50 border border-gray-200 rounded-xl p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                      <div className="flex items-center gap-4 overflow-hidden">
                        <div className="bg-red-100 text-red-600 p-2.5 rounded-lg border border-red-200 shrink-0"><FileText size={20} /></div>
                        <div className="overflow-hidden">
                          <h4 className="font-bold text-[13px] sm:text-[14px] text-slate-900 truncate">{selectedFile?.name || "Document.pdf"}</h4>
                          <p className="text-[11px] sm:text-[12px] text-gray-500">{(selectedFile?.size / (1024*1024)).toFixed(2) || "2.4"} MB</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3 shrink-0">
                        <button onClick={cancelUpload} className="text-[12px] font-semibold text-gray-500 hover:text-slate-800 px-3 py-1.5 border border-gray-300 rounded-md bg-white">Change File</button>
                        <CheckCircle size={20} className="text-emerald-500" />
                      </div>
                    </div>

                    <div>
                      <h3 className="font-bold text-slate-800 mb-4 text-[14px]">Upload Options</h3>
                      <div className="space-y-1.5">
                        <label className="text-[11px] sm:text-[12px] font-bold text-gray-600">Document Title *</label>
                        <input type="text" value={formData.title} onChange={(e) => setFormData({ title: e.target.value })} className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-[12px] sm:text-[13px] text-slate-800 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 placeholder:text-gray-400" placeholder="Enter a descriptive title for your document..." />
                      </div>
                      <div className="mt-4 flex items-start gap-2 bg-blue-50/50 p-3 rounded-lg border border-blue-100">
                        <Shield size={14} className="text-blue-600 mt-0.5 shrink-0" />
                        <p className="text-[10px] sm:text-[11px] text-slate-600 leading-tight">Your documents are securely encrypted and strictly private to your account. No one else can access them.</p>
                      </div>
                    </div>

                    <div className="flex justify-end gap-3 pt-4 border-t border-gray-100">
                      <button onClick={cancelUpload} className="px-5 py-2.5 text-[12px] sm:text-[13px] font-bold text-gray-600 hover:bg-gray-100 rounded-lg transition-colors">Cancel</button>
                      <button onClick={startUploadFlow} className="px-5 py-2.5 text-[12px] sm:text-[13px] font-bold text-white bg-blue-600 hover:bg-blue-700 rounded-lg shadow-sm transition-colors">Upload Document</button>
                    </div>
                  </div>
                )}

                {/* STEP 4: UPLOADING */}
                {uploadState === "uploading" && (
                  <div className="py-8 max-w-xl mx-auto space-y-8 animate-in fade-in duration-500">
                    <div className="text-center space-y-2">
                      <h3 className="text-lg sm:text-xl font-black text-slate-900">Uploading Document</h3>
                      <p className="text-[12px] sm:text-[13px] text-gray-500">Please wait while we upload your document...</p>
                    </div>
                    <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
                      <div className="flex items-center gap-4 mb-5">
                        <div className="bg-red-100 text-red-600 p-2.5 rounded-lg border border-red-200"><FileText size={20} /></div>
                        <div className="flex-1 overflow-hidden">
                          <h4 className="font-bold text-[13px] sm:text-[14px] text-slate-900 truncate">{selectedFile?.name || "Document.pdf"}</h4>
                        </div>
                        <span className="font-black text-blue-600">{uploadProgress}%</span>
                      </div>
                      <div className="w-full bg-slate-100 rounded-full h-2 overflow-hidden">
                        <div className="bg-blue-600 h-2 rounded-full transition-all duration-300 ease-out" style={{ width: `${uploadProgress}%` }}></div>
                      </div>
                    </div>
                  </div>
                )}

                {/* STEP 5: PROCESSING */}
                {uploadState === "processing" && (
                  <div className="py-8 max-w-xl mx-auto space-y-8 animate-in fade-in duration-500">
                    <div className="text-center space-y-2">
                      <h3 className="text-lg sm:text-xl font-black text-slate-900">Processing Document</h3>
                      <p className="text-[12px] sm:text-[13px] text-gray-500">We are preparing your document for AI analysis.</p>
                    </div>
                    <div className="bg-white border border-gray-200 rounded-xl p-5 sm:p-6 shadow-sm space-y-6">
                      <div className="flex items-center gap-4 pb-5 border-b border-gray-100">
                        <div className="bg-red-100 text-red-600 p-2.5 rounded-lg border border-red-200"><FileText size={20} /></div>
                        <div className="overflow-hidden">
                          <h4 className="font-bold text-[13px] sm:text-[14px] text-slate-900 truncate">{selectedFile?.name || "Document.pdf"}</h4>
                        </div>
                      </div>
                      <div className="space-y-4 px-2">
                        {processSteps.map((step) => (
                          <div key={step.id} className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                              {step.status === "completed" ? <CheckCircle size={16} className="text-emerald-500" /> :
                               step.status === "in-progress" ? <Loader2 size={16} className="text-blue-500 animate-spin" /> :
                               <div className="w-4 h-4 rounded-full border-2 border-gray-200"></div>}
                              <span className={`text-[12px] sm:text-[13px] font-medium ${step.status === 'pending' ? 'text-gray-400' : 'text-slate-800'}`}>{step.text}</span>
                            </div>
                            <span className={`text-[10px] sm:text-[11px] font-bold ${step.status === 'completed' ? 'text-emerald-600' : step.status === 'in-progress' ? 'text-blue-600' : 'text-gray-400'}`}>
                              {step.status === 'completed' ? 'Completed' : step.status === 'in-progress' ? 'In Progress' : 'Pending'}
                            </span>
                          </div>
                        ))}
                      </div>
                      <div className="pt-2">
                         <div className="flex justify-between text-[10px] sm:text-[11px] font-bold text-gray-500 mb-1">
                            <span>Processing...</span> <span>{processingProgress}%</span>
                         </div>
                         <div className="w-full bg-slate-100 rounded-full h-1.5 overflow-hidden">
                           <div className="bg-blue-500 h-1.5 rounded-full transition-all duration-500" style={{ width: `${processingProgress}%` }}></div>
                         </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* STEP 6: SUCCESS */}
                {uploadState === "success" && (
                  <div className="py-10 max-w-sm mx-auto text-center space-y-6 animate-in zoom-in-95 duration-500">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-2 border-4 border-emerald-50">
                      <CheckCircle size={32} className="text-emerald-500" />
                    </div>
                    <div>
                      <h3 className="text-xl sm:text-2xl font-black text-slate-900 mb-2">Processed Successfully!</h3>
                      <p className="text-[12px] sm:text-[13px] text-gray-500">Your document is ready to explore.</p>
                    </div>
                    <div className="bg-slate-50 border border-gray-200 rounded-xl p-4 flex items-center gap-4 text-left">
                      <div className="bg-red-100 text-red-600 p-2 rounded-lg border border-red-200 shrink-0"><FileText size={20} /></div>
                      <div className="overflow-hidden">
                        <h4 className="font-bold text-[13px] sm:text-[14px] text-slate-900 truncate">{selectedFile?.name || "Document.pdf"}</h4>
                      </div>
                    </div>
                    <div className="space-y-3 pt-4">
                      <button 
                        onClick={handleViewDocument}
                        className="w-full bg-blue-600 text-white px-5 py-2.5 sm:py-3 rounded-lg text-[13px] sm:text-[14px] font-bold hover:bg-blue-700 shadow-sm transition-colors"
                      >
                        Open Document →
                      </button>
                      <button onClick={() => navigate('/dashboard')} className="w-full bg-white border border-gray-200 text-gray-700 px-5 py-2.5 sm:py-3 rounded-lg text-[13px] sm:text-[14px] font-bold hover:bg-gray-50 transition-colors">
                        Back to Dashboard
                      </button>
                    </div>
                  </div>
                )}

              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}