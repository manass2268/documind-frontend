import React from 'react';
import { Link } from 'react-router-dom';
import { Brain, Landmark } from 'lucide-react';
import ashokaLogo from "../assets/ashoka.png";
export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#05050A] pt-12 pb-6 relative z-10">
      <div className="max-w-[1400px] mx-auto px-6 md:px-8">
        
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 mb-12">
          {/* Logo & Tagline */}
          <div className="flex items-center gap-3">
            <Brain className="text-purple-500" size={32} />
            <div className="flex flex-col">
              <span className="text-xl font-bold text-white leading-none">DocuMind</span>
              <span className="text-[10px] text-gray-400 font-medium tracking-widest mt-1 uppercase">From Knowledge to Capability.</span>
            </div>
          </div>
          
          {/* Links */}
          <div className="flex flex-wrap items-center gap-6 md:gap-10 text-sm font-medium text-gray-400">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <span className="cursor-not-allowed hover:text-white transition-colors" title="Coming soon">How It Works</span>
            <span className="cursor-not-allowed hover:text-white transition-colors" title="Coming soon">Impact</span>
            <span className="cursor-not-allowed hover:text-white transition-colors" title="Coming soon">Resources</span>
          </div>

          {/* Ministry & SIH Context */}
          <div className="flex items-center gap-6 md:border-l border-white/10 md:pl-6">
            <div className="flex items-center gap-3">
              <img src={ashokaLogo} alt="Emblem" className="h-5 object-contain opacity-90 drop-shadow-md" />
              <div className="flex flex-col text-xs text-gray-400">

                <span className="font-semibold text-gray-300">Ministry of Statistics &</span>
                <span>Programme Implementation</span>
                <span>Government of India</span>
              </div>
            </div>
            <div className="h-10 w-px bg-white/10 hidden md:block"></div>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-orange-500 via-white to-green-500 p-[1px]">
                <div className="w-full h-full bg-[#05050A] rounded-full flex items-center justify-center">
                  <Brain size={14} className="text-white"/>
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-bold text-white tracking-wider">SIH 2026</span>
                <span className="text-[10px] text-gray-400 font-mono tracking-widest">SIH26101</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
          <p>© 2026 DocuMind. All rights reserved.</p>
          <div className="flex gap-6">
            <Link to="/" className="hover:text-white transition-colors">Privacy</Link>
            <Link to="/" className="hover:text-white transition-colors">Terms</Link>
            <Link to="/support" className="hover:text-white transition-colors">Contact</Link>
          </div>
          <div className="flex items-center gap-3">
            <span className="font-medium text-gray-400 hidden sm:block">For a Skilled, Sustainable and Developed India</span>
            <div className="w-12 h-1 bg-gradient-to-r from-orange-500 via-white to-green-500 rounded-full"></div>
          </div>
        </div>

      </div>
    </footer>
  );
}