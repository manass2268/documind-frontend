import React from 'react';
import { Outlet } from 'react-router-dom';
// import TrainerSidebar from '../components/TrainerSidebar';
// import TrainerHeader from '../components/TrainerHeader';

export default function TrainerLayout() {
  return (
    <div className="flex h-screen w-full bg-slate-50 font-sans overflow-hidden">
      {/* 1. Left Sidebar (Fixed) */}
      {/* <TrainerSidebar /> */}
      <div className="w-[260px] bg-[#0B132B] text-white shrink-0 hidden md:block">
        Sidebar Placeholder
      </div>

      {/* 2. Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0 relative h-full">
        {/* Top Header (Fixed) */}
        {/* <TrainerHeader /> */}
        <header className="h-14 bg-white border-b border-slate-200 shrink-0 z-10">
          Header Placeholder
        </header>

        {/* 3. Dynamic Pages (Dashboard, Analytics, Studio, etc.) */}
        <main className="flex-1 overflow-y-auto custom-scrollbar relative">
          {/* Outlet is where the nested routes will render */}
          <Outlet />
        </main>
      </div>
    </div>
  );
}