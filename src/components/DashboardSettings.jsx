import React, { useState, useEffect } from "react";
import { MessageSquare, Settings as SettingsIcon, ArrowLeft } from "lucide-react";
import { auth, db } from "../firebase"; 
import { doc, getDoc } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";

export default function Settings() {
  const navigate = useNavigate();
  const [userName, setUserName] = useState("Loading...");
  const [userEmail, setUserEmail] = useState("Loading...");
  const [userInitial, setUserInitial] = useState("");

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

  return (
    <div className="min-h-screen bg-slate-100 font-sans p-6">
      <div className="max-w-2xl mx-auto space-y-6">
        
        {/* Back Button */}
        <button 
          onClick={() => navigate("/dashboard")}
          className="flex items-center gap-2 text-sm font-semibold text-slate-500 hover:text-blue-600 transition-colors"
        >
          <ArrowLeft size={16} /> Back to Dashboard
        </button>

        <h2 className="text-2xl font-bold text-[#1A365D]">Account Settings</h2>
        
        {/* PROFILE CARD (Moved from Dashboard) */}
        <div className="bg-white rounded-2xl border border-gray-200 p-6 flex flex-col justify-between shadow-sm">
          <div className="flex justify-between items-start mb-6">
            <div className="flex gap-4 items-center">
              <div className="w-16 h-16 rounded-full bg-[#1A365D] text-white flex items-center justify-center font-bold text-2xl shadow-inner">
                {userInitial || "M"}
              </div>
              <div className="overflow-hidden">
                <h3 className="font-bold text-xl text-slate-900 leading-tight truncate uppercase">{userName}</h3>
                <p className="text-sm text-gray-500 mt-0.5">BCA Student</p>
              </div>
            </div>
            <span className="bg-blue-50 text-blue-600 text-[11px] font-bold px-3 py-1.5 rounded-md border border-blue-100 shrink-0">Student</span>
          </div>
          <div className="space-y-4 mb-6 border-t border-gray-100 pt-6">
            <div className="flex items-center gap-3 text-sm text-gray-600">
              <MessageSquare size={16} className="text-gray-400 shrink-0"/> <span className="font-medium">{userEmail}</span>
            </div>
            <div className="flex items-center gap-3 text-sm text-gray-600">
              <span className="text-gray-400 shrink-0 text-lg">🎓</span> <span className="font-medium">Krishna Institute of Technology</span>
            </div>
          </div>
          <button className="w-full py-3 bg-slate-50 border border-gray-200 rounded-lg text-sm font-semibold text-gray-600 hover:bg-gray-100 transition-colors flex justify-center items-center gap-2 shadow-sm">
            <SettingsIcon size={16}/> Edit Profile
          </button>
        </div>

      </div>
    </div>
  );
}