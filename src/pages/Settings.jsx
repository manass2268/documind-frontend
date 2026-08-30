import React, { useState } from 'react';
import { useOutletContext } from 'react-router-dom';
import { User, Bell, Shield, Monitor, Database, LogOut, Check, X } from 'lucide-react';
import { motion } from 'framer-motion';
import { auth } from '../firebase';
import { signOut, updateProfile, deleteUser } from 'firebase/auth';

export default function Settings() {
  const { user } = useOutletContext();
  const [isEditingName, setIsEditingName] = useState(false);
  const [newName, setNewName] = useState(user?.displayName || "");

  // 🔴 UPDATE REAL NAME IN FIREBASE
  const handleSaveName = async () => {
    try {
      if (auth.currentUser && newName.trim()) {
        await updateProfile(auth.currentUser, { displayName: newName });
        setIsEditingName(false);
        window.location.reload(); // Refresh to reflect changes globally
      }
    } catch (error) {
      console.error("Error updating name:", error);
    }
  };

  // 🔴 REAL DELETE ACCOUNT FUNCTION
  const handleDeleteAccount = async () => {
    const confirmDelete = window.confirm("Are you sure you want to permanently delete your account? This action cannot be undone.");
    if (confirmDelete && auth.currentUser) {
      try {
        await deleteUser(auth.currentUser);
        // Automatically redirects to login via onAuthStateChanged
      } catch (error) {
        alert("For security reasons, please log out and log back in before deleting your account.");
      }
    }
  };

  return (
    <div className="flex-1 overflow-y-auto w-full text-gray-100 z-10 p-6 md:p-10 no-scrollbar">
      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl mx-auto">
        <h2 className="text-2xl font-medium text-white mb-8 pb-4 border-b border-white/10">Settings</h2>

        <div className="space-y-8">
          
          {/* Account Section */}
          <div>
            <h3 className="text-[13px] font-semibold text-gray-400 uppercase tracking-wider mb-3 px-2">Account</h3>
            <div className="bg-white/[0.02] border border-white/5 rounded-2xl overflow-hidden">
              
              {/* Editable Name Field */}
              <div className="flex items-center justify-between p-4 border-b border-white/5">
                <div className="flex items-center gap-4">
                  <User size={18} className="text-gray-400" />
                  {isEditingName ? (
                    <input 
                      type="text" value={newName} onChange={(e) => setNewName(e.target.value)} autoFocus
                      className="bg-[#2A2A2E] text-white text-sm px-3 py-1 rounded outline-none border border-purple-500/50"
                    />
                  ) : (
                    <span className="text-[15px] font-medium text-gray-200">Profile Name</span>
                  )}
                </div>
                <div>
                  {isEditingName ? (
                    <div className="flex gap-2">
                      <button onClick={handleSaveName} className="p-1.5 bg-green-500/20 text-green-400 rounded-lg hover:bg-green-500/30"><Check size={16}/></button>
                      <button onClick={() => setIsEditingName(false)} className="p-1.5 bg-red-500/20 text-red-400 rounded-lg hover:bg-red-500/30"><X size={16}/></button>
                    </div>
                  ) : (
                    <div className="flex items-center gap-4">
                      <span className="text-sm text-gray-500">{user?.displayName || "Not set"}</span>
                      <button onClick={() => setIsEditingName(true)} className="text-sm font-medium px-3 py-1.5 rounded-lg bg-white/10 text-gray-300 hover:bg-white/20 transition-colors">Edit</button>
                    </div>
                  )}
                </div>
              </div>

              {/* Email (Read Only) */}
              <div className="flex items-center justify-between p-4 border-b border-white/5">
                <div className="flex items-center gap-4">
                  <Shield size={18} className="text-gray-400" />
                  <span className="text-[15px] font-medium text-gray-200">Email address</span>
                </div>
                <span className="text-sm text-gray-500">{user?.email}</span>
              </div>

              <div className="flex items-center justify-between p-4">
                <div className="flex items-center gap-4">
                  <Monitor size={18} className="text-gray-400" />
                  <span className="text-[15px] font-medium text-gray-200">Subscription plan</span>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-sm text-purple-400 bg-purple-500/10 px-2 py-1 rounded-md">Free Tier</span>
                  <button className="text-sm font-medium px-3 py-1.5 rounded-lg bg-white/10 text-gray-300 hover:bg-white/20">Upgrade</button>
                </div>
              </div>
            </div>
          </div>

          {/* App Settings */}
          <div>
            <h3 className="text-[13px] font-semibold text-gray-400 uppercase tracking-wider mb-3 px-2">App Settings</h3>
            <div className="bg-white/[0.02] border border-white/5 rounded-2xl overflow-hidden">
              <div className="flex items-center justify-between p-4 border-b border-white/5">
                <div className="flex items-center gap-4"><Monitor size={18} className="text-gray-400" /><span className="text-[15px] font-medium text-gray-200">Theme</span></div>
                <span className="text-sm text-gray-500">System default</span>
              </div>
              <div className="flex items-center justify-between p-4">
                <div className="flex items-center gap-4"><Bell size={18} className="text-gray-400" /><span className="text-[15px] font-medium text-gray-200">Notifications</span></div>
                <button className="w-10 h-5 bg-purple-500 rounded-full relative"><div className="w-4 h-4 bg-white rounded-full absolute right-0.5 top-0.5"></div></button>
              </div>
            </div>
          </div>

          {/* Danger Zone */}
          <div>
            <h3 className="text-[13px] font-semibold text-red-400/80 uppercase tracking-wider mb-3 px-2">Danger Zone</h3>
            <div className="bg-white/[0.02] border border-white/5 rounded-2xl overflow-hidden">
              <div className="flex items-center justify-between p-4">
                <div className="flex items-center gap-4">
                  <Database size={18} className="text-red-400" />
                  <span className="text-[15px] font-medium text-red-400">Delete account</span>
                </div>
                <button onClick={handleDeleteAccount} className="text-sm font-medium px-4 py-2 rounded-lg bg-red-500/10 text-red-400 hover:bg-red-500/20 transition-colors">
                  Permanently Delete
                </button>
              </div>
            </div>
          </div>

        </div>

        <div className="mt-10 pt-6 border-t border-white/10">
          <button onClick={() => signOut(auth)} className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors px-2 font-medium">
            <LogOut size={18} />
            Sign out of DocuMind
          </button>
        </div>
      </motion.div>
    </div>
  );
}