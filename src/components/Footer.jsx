import React from 'react';

export default function Footer() {
  return (
    <footer className="w-full flex flex-col mt-auto">
      {/* Policy Links Strip */}
      <div className="bg-[#0A1D36] border-t-[4px] border-[#F28C28] py-3 px-4 text-[13px] text-gray-300 flex justify-center items-center flex-wrap gap-4 sm:gap-6">
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

      {/* Main Footer Info */}
      <div className="bg-[#0A1D36] py-6 px-4 sm:px-8 border-t border-white/10">
        <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col gap-2 text-[13px] text-gray-300 text-center md:text-left">
            <p>This platform is designed, developed and hosted as an AI-driven digital public good.</p>
            <p>Content owned and updated by <strong className="text-white">Ministry of Statistics & Programme Implementation, Government of India</strong>.</p>
          </div>
          
          <div className="flex items-center gap-3">
            <span className="text-white font-bold text-sm mr-2">Follow Us:</span>
            <a href="#" className="w-8 h-8 rounded-full border border-gray-500 flex items-center justify-center text-white hover:bg-blue-600 hover:border-blue-600 transition-colors">
              <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
            </a>
            <a href="#" className="w-8 h-8 rounded-full border border-gray-500 flex items-center justify-center text-white hover:bg-blue-400 hover:border-blue-400 transition-colors">
              <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
            </a>
            <a href="#" className="w-8 h-8 rounded-full border border-gray-500 flex items-center justify-center text-white hover:bg-red-600 hover:border-red-600 transition-colors">
              <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.94 2c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z"></path><polygon fill="#0A1D36" points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Stats */}
      <div className="bg-[#051124] py-3 text-center text-[11px] text-gray-500 border-t border-white/5">
        Last Updated: 18 September 2026 | Visitors: <span className="font-mono text-gray-400 font-bold ml-1">0 2 4 5 1 9 8</span>
      </div>
    </footer>
  );
} 