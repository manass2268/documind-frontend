import React, { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { LogOut } from "lucide-react";
import { auth, db } from "../firebase"; 
import { collection, query, onSnapshot } from "firebase/firestore";
import { signOut } from "firebase/auth";

export default function DashboardLayout() {
  const [chatsData, setChatsData] = useState([]);
  const user = auth.currentUser;
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) return;
    const q = query(collection(db, "users", user.uid, "chats"));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const chats = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));

      // FIXED: Guard against null server timestamps to prevent sorting crashes
      const getMillis = (timestamp) => timestamp?.toMillis ? timestamp.toMillis() : Date.now();
      chats.sort((a, b) => getMillis(b.createdAt) - getMillis(a.createdAt));

      setChatsData(chats);
    });
    return () => unsubscribe();
  }, [user]);

  const handleLogout = async () => {
    await signOut(auth);
    navigate("/login");
  };

  return (
    <div className="flex h-screen bg-[#05050A] text-white">
      {/* Inline Sidebar */}
      <aside className="w-64 border-r border-gray-800 p-4 flex flex-col">
        <div className="flex-1">
           <h2 className="text-gray-400 text-sm font-semibold mb-4">Recent Sessions</h2>
           {chatsData.map(chat => (
             <div key={chat.id} className="p-2 hover:bg-gray-800 rounded cursor-pointer">
               {chat.title || "New Session"}
             </div>
           ))}
        </div>

        {/* FIXED: Removed nested interactive elements. Outer wrapper is now a div. */}
        <div className="mt-auto pt-4 border-t border-gray-800 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-purple-600 flex items-center justify-center font-bold">
              {user?.displayName?.charAt(0)?.toUpperCase() || "M"}
            </div>
            <div className="text-sm">
              <p className="font-medium">{user?.displayName || "MANAS singh"}</p>
            </div>
          </div>
          
          <button
            onClick={handleLogout}
            className="p-2 text-gray-400 hover:text-white hover:bg-gray-800 rounded-lg transition-colors"
            title="Logout"
          >
            <LogOut size={16} />
          </button>
        </div>
      </aside>

      {/* Main Canvas */}
      <main className="flex-1 overflow-y-auto relative">
        {/* FIXED: Passing down the active user to nested route components */}
        <Outlet context={{ user }} />
      </main>
    </div>
  );
}