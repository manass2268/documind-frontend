import React from 'react';
import { Link } from 'react-router-dom';
import { Brain, Shield, Mail, FileText } from 'lucide-react';
import ashokaLogo from "../assets/ashoka.png";
import sihLogo from "../assets/SIH.png";

export default function Footer() {
  return (
    <footer className="bg-[#05050A] border-t border-white/10 pt-16 pb-8 relative z-10 font-sans">
      <div className="max-w-[1400px] mx-auto px-6 md:px-8">
        
        {/* 🟢 Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 mb-16">
          
          {/* Column 1: Brand Section */}
          <div className="lg:col-span-4 flex flex-col items-start">
            <div className="flex items-center gap-3 mb-4">
              <Brain className="text-purple-500" size={32} strokeWidth={2} />
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-white leading-none tracking-wide">DocuMind</span>
                <span className="text-[10px] text-gray-400 font-medium tracking-widest mt-1 uppercase">From Knowledge to Capability.</span>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm mb-6">
              An AI-powered Competency & Learning Intelligence Platform. Transforming government documents into measurable capability for a future-ready workforce.
            </p>
            <div className="flex items-center gap-3 text-sm font-medium text-gray-400 bg-white/5 px-4 py-2.5 rounded-xl border border-white/10 hover:bg-white/10 transition-colors">
              <Mail size={16} className="text-purple-400" />
              <a href="mailto:support.mstech4407@gmail.com" className="hover:text-white transition-colors">support.mstech4407@gmail.com</a>
            </div>
          </div>

          {/* Column 2: Platform Links */}
          <div className="lg:col-span-2 lg:ml-8">
            <h4 className="text-white font-semibold mb-6 tracking-wide">Platform</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><Link to="/" className="hover:text-purple-400 transition-colors">Home</Link></li>
              <li><span className="cursor-not-allowed hover:text-white transition-colors" title="Coming soon">How it Works</span></li>
              <li><span className="cursor-not-allowed hover:text-white transition-colors" title="Coming soon">Features</span></li>
              <li><span className="cursor-not-allowed hover:text-white transition-colors" title="Coming soon">Impact</span></li>
            </ul>
          </div>

          {/* Column 3: Legal & Support */}
          <div className="lg:col-span-2">
            <h4 className="text-white font-semibold mb-6 tracking-wide">Legal & Support</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li className="flex items-center gap-2">
                <Shield size={14} className="text-gray-500"/> 
                <Link to="/" className="hover:text-purple-400 transition-colors">Security</Link>
              </li>
              <li className="flex items-center gap-2">
                <FileText size={14} className="text-gray-500"/> 
                <Link to="/" className="hover:text-purple-400 transition-colors">Privacy Policy</Link>
              </li>
              <li className="flex items-center gap-2">
                <FileText size={14} className="text-gray-500"/> 
                <Link to="/" className="hover:text-purple-400 transition-colors">Terms of Service</Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Official SIH / Ministry Context */}
          <div className="lg:col-span-4 lg:pl-8 lg:border-l border-white/10">
            <h4 className="text-white font-semibold mb-6 tracking-wide">Project Context</h4>
            
            <div className="bg-[#0B0B14] border border-white/10 rounded-2xl p-5 shadow-lg">
              
              {/* Ministry Logo & Name */}
              <div className="flex items-center gap-3 mb-4">
                <img src={ashokaLogo} alt="Emblem" className="h-10 w-auto object-contain opacity-90 drop-shadow-md shrink-0" />
                <div className="flex flex-col text-xs text-gray-400 leading-snug">
                  <span className="font-semibold text-gray-200">Ministry of Statistics &</span>
                  <span>Programme Implementation</span>
                  <span>Government of India</span>
                </div>
              </div>
              
              <div className="h-px w-full bg-white/10 mb-4"></div>
              
              {/* SIH Logo & Badge */}
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full overflow-hidden flex items-center justify-center shrink-0">
                  <img src={sihLogo} alt="SIH Logo" className="w-full h-full object-contain" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs font-bold text-white tracking-wider">Smart India Hackathon 2026</span>
                  <span className="text-[10px] text-purple-400 font-mono tracking-widest mt-0.5">Problem: SIH26101</span>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* 🟢 Bottom Footer Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-xs text-gray-500 font-medium">© 2026 DocuMind. Designed for SIH 2026.</p>
          
          <div className="flex flex-col items-center gap-2">
            <span className="text-[10px] font-bold text-gray-400 tracking-widest uppercase">For a Skilled, Data-Ready India</span>
            <div className="w-16 h-1 bg-gradient-to-r from-orange-500 via-white to-green-500 rounded-full"></div>
          </div>
        </div>

      </div>
    </footer>
  );
}