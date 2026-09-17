import React from 'react';
import { Link } from 'react-router-dom';
import ashokaLogo from "../assets/ashoka.png";

export default function Footer() {
  return (
    <footer className="bg-[#102A43] text-white font-sans border-t-[4px] border-[#0A192F]">
      <div className="max-w-[1400px] mx-auto px-6 md:px-8 py-8">
        
        {/* Main Footer Row */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          
          {/* Left: Ministry Info */}
          <div className="flex items-center gap-3">
            <img src={ashokaLogo} alt="Satyameva Jayate" className="h-12 opacity-90 drop-shadow-md brightness-0 invert" />
            <div className="flex flex-col text-xs leading-tight">
              <span className="font-semibold tracking-wide">Ministry of Statistics & Programme Implementation</span>
              <span className="text-gray-400">Government of India</span>
            </div>
          </div>
          
          {/* Center: Quick Links */}
          <div className="flex flex-wrap justify-center gap-4 text-xs font-medium text-gray-300">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <span className="text-gray-500">|</span>
            <span className="cursor-not-allowed hover:text-white transition-colors">About</span>
            <span className="text-gray-500">|</span>
            <span className="cursor-not-allowed hover:text-white transition-colors">Contact</span>
            <span className="text-gray-500">|</span>
            <span className="cursor-not-allowed hover:text-white transition-colors">Privacy Policy</span>
            <span className="text-gray-500">|</span>
            <span className="cursor-not-allowed hover:text-white transition-colors">Terms</span>
          </div>

          {/* Right: Digital India Logo (Placeholder text if image not available) */}
          <div className="flex items-center gap-2">
            <div className="flex flex-col items-end">
              <span className="text-sm font-bold text-white tracking-wider">Digital India</span>
              <span className="text-[9px] text-gray-400">Power To Empower</span>
            </div>
            {/* If you have the Digital India logo, use an img tag here instead of the text above */}
            <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center bg-white/10">
              <span className="text-[10px]">DI</span>
            </div>
          </div>
          
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-6 pt-4 text-center">
          <p className="text-[11px] text-gray-400">
            © 2026 DocuMind. All rights reserved. <span className="mx-2">|</span> A SIH26101 Initiative
          </p>
        </div>

      </div>
    </footer>
  );
}