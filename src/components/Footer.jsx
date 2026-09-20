import React from 'react';
import { Link } from 'react-router-dom';
import ashokaLogo from "../assets/ashoka.png";

export default function Footer() {
  return (
    <footer className="w-full flex flex-col mt-auto bg-[#0A2540] text-white">
      {/* Main Footer Info */}
      <div className="max-w-[1400px] mx-auto w-full px-4 sm:px-8 py-6 flex flex-col md:flex-row justify-between items-center gap-6">
        
        {/* Left: Ministry Info */}
        <div className="flex items-center gap-4">
          {/* White box hata diya gaya hai, ab sirf raw logo render hoga */}
          <img src={ashokaLogo} alt="Satyameva Jayate" className="h-12 object-contain" />
          
          <div className="flex flex-col">
            <span className="font-bold text-sm tracking-wide">Ministry of Statistics & Programme Implementation</span>
            <span className="text-[11px] text-gray-400">Government of India</span>
          </div>
        </div>

        {/* Right: Policy Links */}
        <div className="flex flex-wrap justify-center items-center gap-3 md:gap-4 text-[12px] text-gray-300">
          <Link to="/about" className="hover:text-white transition-colors">About Us</Link>
          <span className="text-gray-600">|</span>
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <span className="text-gray-600">|</span>
          <a href="#" className="hover:text-white transition-colors">Terms & Conditions</a>
          <span className="text-gray-600">|</span>
          <a href="#" className="hover:text-white transition-colors">Accessibility</a>
          <span className="text-gray-600">|</span>
          <a href="#" className="hover:text-white transition-colors">Sitemap</a>
          <span className="text-gray-600">|</span>
          <a href="#" className="hover:text-white transition-colors">Contact Us</a>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-[#051626] py-3 px-4 sm:px-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-[10px] text-gray-500 gap-2">
        <div>© 2026 DocuMind. All rights reserved.</div>
        <div className="text-right">
          Smart India Hackathon 2026 | Conceptual Prototype — Not an official Government of India website
        </div>
      </div>
    </footer>
  );
}