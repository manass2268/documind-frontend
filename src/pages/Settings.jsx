import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { User, Bell, Shield, Monitor, Database, LogOut, Check, X, Loader2, ArrowLeft } from 'lucide-react';
import { motion } from 'framer-motion';
import { auth, db } from '../firebase';
import { signOut, updateProfile, deleteUser, onAuthStateChanged } from 'firebase/auth';
import { doc, getDoc, updateDoc, collection, query, where, getDocs, deleteDoc } from 'firebase/firestore';

export default function Settings() {
  const navigate = useNavigate();
  
  const [currentUser, setCurrentUser] = useState(null);
  const [userId, setUserId] = useState("");
  const [profileName, setProfileName] = useState("Loading...");
  const [userEmail, setUserEmail] = useState("Loading...");
  
  const [isEditingName, setIsEditingName] = useState(false);
  const [newName, setNewName] = useState("");
  const [isSaving, setIsSaving] = useState(false);

  // 🚀 FETCH REAL-TIME USER DATA FROM FIRESTORE 🚀
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        setCurrentUser(user);
        setUserEmail(user.email);
        
        try {
          let fetchedName = user.displayName || "Student";
          let actualId = "";

          // ==========================================
          // CASE 1: Normal Login (User ID)
          // ==========================================
          if (user.email.includes("@student.documind.com")) {
            actualId = user.email.split('@')[0];
            const docRef = doc(db, "students", actualId);
            const docSnap = await getDoc(docRef);
            
            if (docSnap.exists() && docSnap.data().name) {
              fetchedName = docSnap.data().name;
            }
          } 
          // ==========================================
          // CASE 2: Google Login (Search by email)
          // ==========================================
          else {
            const q = query(collection(db, "students"), where("email", "==", user.email));
            const querySnapshot = await getDocs(q);
            
            if (!querySnapshot.empty) {
              const studentData = querySnapshot.docs[0].data();
              actualId = querySnapshot.docs[0].id; // Roll Number
              if (studentData.name) {
                fetchedName = studentData.name;
              }
            }
          }

          setProfileName(fetchedName);
          setNewName(fetchedName);
          setUserId(actualId);

        } catch (error) {
          console.error("Error fetching profile details:", error);
          setProfileName("Student");
        }
      } else {
        navigate("/login");
      }
    });

    return () => unsubscribe();
  }, [navigate]);

  // 🔴 UPDATE REAL NAME IN FIREBASE AUTH & FIRESTORE
  const handleSaveName = async () => {
    if (!currentUser || !newName.trim() || newName.trim() === profileName) {
      setIsEditingName(false);
      return;
    }

    setIsSaving(true);
    try {
      // 1. Update Firebase Auth Profile
      await updateProfile(currentUser, { displayName: newName.trim() });
      
      // 2. Update Firestore Database
      if (userId) {
        const userRef = doc(db, "students", userId);
        await updateDoc(userRef, { name: newName.trim() });
      }

      // 3. Update UI instantly
      setProfileName(newName.trim());
      setIsEditingName(false);
      
    } catch (error) {
      console.error("Error updating name:", error);
      alert("Failed to update name. Please try again.");
    } finally {
      setIsSaving(false);
    }
  };

  // 🔴 REAL DELETE ACCOUNT FUNCTION
  const handleDeleteAccount = async () => {
    const confirmDelete = window.confirm("Are you sure you want to permanently delete your account? This action will remove all your data and cannot be undone.");
    
    if (confirmDelete && currentUser) {
      try {
        if (userId) {
          await deleteDoc(doc(db, "students", userId));
        }
        await deleteUser(currentUser);
      } catch (error) {
        console.error("Delete Error:", error);
        if (error.code === 'auth/requires-recent-login') {
          alert("For security reasons, please log out and log back in before deleting your account.");
        } else {
          alert("Failed to delete account. Please contact support.");
        }
      }
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

  return (
    <div className="flex-1 overflow-y-auto w-full bg-[#F4F7FB] text-slate-800 z-10 p-4 sm:p-6 md:p-10 selection:bg-blue-600 selection:text-white h-screen">
      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl mx-auto pb-20">
        
        {/* Back Button */}
        <div className="mb-6">
          <button onClick={() => navigate('/dashboard')} className="flex items-center gap-2 text-[14px] font-bold text-gray-500 hover:text-blue-600 transition-colors group">
            <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" /> 
            Back to Dashboard
          </button>
        </div>

        <h2 className="text-2xl font-black text-[#1A365D] mb-8 pb-4 border-b border-gray-200">Account Settings</h2>

        <div className="space-y-8">
          
          {/* Profile Details Section */}
          <div>
            <h3 className="text-[13px] font-bold text-gray-500 uppercase tracking-wider mb-3 px-2">Profile Details</h3>
            <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm">
              
              {/* Editable Name Field */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between p-4 sm:p-5 border-b border-gray-100 gap-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#1E3A8A] text-white flex items-center justify-center font-bold text-lg shrink-0 shadow-sm">
                    {profileName !== "Loading..." ? profileName.charAt(0).toUpperCase() : "S"}
                  </div>
                  <div>
                    <span className="text-[14px] font-bold text-slate-900 block mb-1">Full Name</span>
                    {isEditingName ? (
                      <input 
                        type="text" 
                        value={newName} 
                        onChange={(e) => setNewName(e.target.value)} 
                        autoFocus
                        className="bg-gray-50 text-slate-900 text-sm px-3 py-1.5 rounded-lg outline-none border border-blue-300 focus:ring-2 focus:ring-blue-100 w-full max-w-[200px]"
                      />
                    ) : (
                      <span className="text-[13px] text-gray-500 font-bold uppercase tracking-wide">{profileName}</span>
                    )}
                  </div>
                </div>
                <div>
                  {isEditingName ? (
                    <div className="flex gap-2">
                      <button onClick={handleSaveName} disabled={isSaving} className="p-2 bg-emerald-50 text-emerald-600 rounded-lg hover:bg-emerald-100 transition-colors">
                        {isSaving ? <Loader2 size={16} className="animate-spin" /> : <Check size={16} strokeWidth={3}/>}
                      </button>
                      <button onClick={() => {setIsEditingName(false); setNewName(profileName);}} disabled={isSaving} className="p-2 bg-red-50 text-red-500 rounded-lg hover:bg-red-100 transition-colors">
                        <X size={16} strokeWidth={3}/>
                      </button>
                    </div>
                  ) : (
                    <button onClick={() => setIsEditingName(true)} className="text-sm font-bold px-4 py-2 rounded-lg bg-gray-50 text-slate-700 border border-gray-200 hover:bg-gray-100 transition-colors shadow-sm">
                      Edit Profile
                    </button>
                  )}
                </div>
              </div>

              {/* Email (Read Only) */}
              <div className="flex items-center justify-between p-4 sm:p-5 border-b border-gray-100">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                    <Shield size={20} />
                  </div>
                  <div>
                    <span className="text-[14px] font-bold text-slate-900 block mb-1">Email Address</span>
                    <span className="text-[13px] text-gray-500 font-medium">{userEmail}</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center justify-between p-4 sm:p-5 gap-4">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-purple-50 text-purple-600 flex items-center justify-center shrink-0">
                    <Monitor size={20} />
                  </div>
                  <div>
                    <span className="text-[14px] font-bold text-slate-900 block mb-1">Subscription Plan</span>
                    <span className="text-[11px] font-bold text-purple-600 bg-purple-100 px-2.5 py-1 rounded-md">Free Tier</span>
                  </div>
                </div>
                <div>
                  <button className="text-sm font-bold px-4 py-2 rounded-lg bg-slate-900 text-white hover:bg-slate-800 transition-colors shadow-sm w-full sm:w-auto">
                    Upgrade Plan
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* App Settings */}
          <div>
            <h3 className="text-[13px] font-bold text-gray-500 uppercase tracking-wider mb-3 px-2">App Settings</h3>
            <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm">
              <div className="flex items-center justify-between p-4 sm:p-5 border-b border-gray-100">
                <div className="flex items-center gap-3">
                  <Monitor size={18} className="text-gray-400" />
                  <span className="text-[14px] font-bold text-slate-800">Theme Preference</span>
                </div>
                <span className="text-[12px] font-bold text-gray-500 bg-gray-100 px-3 py-1 rounded-lg">System Default</span>
              </div>
              <div className="flex items-center justify-between p-4 sm:p-5">
                <div className="flex items-center gap-3">
                  <Bell size={18} className="text-gray-400" />
                  <span className="text-[14px] font-bold text-slate-800">Email Notifications</span>
                </div>
                <button className="w-11 h-6 bg-emerald-500 rounded-full relative transition-colors shadow-inner">
                  <div className="w-4 h-4 bg-white rounded-full absolute right-1 top-1 shadow-sm"></div>
                </button>
              </div>
            </div>
          </div>

          {/* Danger Zone */}
          <div>
            <h3 className="text-[13px] font-bold text-red-500 uppercase tracking-wider mb-3 px-2">Danger Zone</h3>
            <div className="bg-white border border-red-200 rounded-2xl overflow-hidden shadow-sm">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between p-4 sm:p-5 gap-4">
                <div className="flex items-center gap-3">
                  <Database size={18} className="text-red-500" />
                  <div>
                    <span className="text-[14px] font-bold text-red-600 block">Delete Account</span>
                    <span className="text-[11px] text-gray-500 font-medium">Permanently remove your data and files.</span>
                  </div>
                </div>
                <button onClick={handleDeleteAccount} className="text-[13px] font-bold px-4 py-2.5 rounded-lg bg-red-50 text-red-600 border border-red-100 hover:bg-red-500 hover:text-white transition-colors w-full sm:w-auto shadow-sm">
                  Delete Account
                </button>
              </div>
            </div>
          </div>

        </div>

        <div className="mt-10 pt-6 border-t border-gray-200 mb-10">
          <button onClick={handleLogout} className="flex items-center gap-3 text-gray-500 hover:text-red-600 transition-colors px-2 font-bold text-[14px] group">
            <LogOut size={18} className="group-hover:-translate-x-1 transition-transform" />
            Sign out of DocuMind
          </button>
        </div>
      </motion.div>
    </div>
  );
}