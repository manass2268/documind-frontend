import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-[#0A1D36] text-[#D1D5DB] font-sans text-xs border-t-[5px] border-[#FF9933] mt-auto">
      
      {/* Footer Top - Policy Links */}
      <div className="bg-[#051324] py-4">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 flex flex-wrap justify-center items-center gap-4 sm:gap-6 text-[11px] sm:text-xs">
          <a href="#" className="hover:text-white transition-colors">Website Policies</a>
          <span className="text-gray-600">|</span>
          <a href="#" className="hover:text-white transition-colors">Help</a>
          <span className="text-gray-600">|</span>
          <a href="#" className="hover:text-white transition-colors">Contact Us</a>
          <span className="text-gray-600">|</span>
          <a href="#" className="hover:text-white transition-colors">Feedback</a>
          <span className="text-gray-600">|</span>
          <a href="#" className="hover:text-white transition-colors">Web Information Manager</a>
          <span className="text-gray-600">|</span>
          <a href="#" className="hover:text-white transition-colors">Disclaimer</a>
        </div>
      </div>

      {/* Footer Main Content */}
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 py-8 flex flex-col md:flex-row justify-between items-center gap-8 text-center md:text-left">
        
        <div className="flex flex-col gap-2 max-w-2xl">
          <p className="leading-relaxed">
            This platform is designed, developed and hosted as an AI-driven digital public good.
          </p>
          <p className="leading-relaxed">
            Content owned and updated by <strong className="text-white">Ministry of Statistics & Programme Implementation, Government of India</strong>.
          </p>
        </div>

        {/* Social Media & Logos */}
        <div className="flex flex-col items-center md:items-end gap-4">
          <div className="flex items-center gap-3">
            <span className="font-semibold text-white mr-2">Follow Us:</span>
            {/* Custom Safe SVGs for Socials */}
            <a href="#" className="bg-[#1A365D] p-2 rounded-full hover:bg-blue-500 transition-colors text-white" aria-label="Facebook">
              <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
            </a>
            <a href="#" className="bg-[#1A365D] p-2 rounded-full hover:bg-blue-400 transition-colors text-white" aria-label="Twitter">
              <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
            </a>
            <a href="#" className="bg-[#1A365D] p-2 rounded-full hover:bg-red-600 transition-colors text-white" aria-label="YouTube">
              <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.94 2c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z"></path><polygon fill="#0A1D36" points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg>
            </a>
          </div>
        </div>

      </div>

      <div className="bg-[#030B14] py-3 text-center text-[10px] text-gray-500 border-t border-white/5">
        Last Updated: 18 September 2026 | Visitors: <span className="font-mono text-gray-300">0 2 4 5 1 9 8</span>
      </div>
    </footer>
  );
}