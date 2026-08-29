import React from 'react';
import { Link } from 'react-router-dom';
import { Brain, Send, Mail, MapPin, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#05050A] pt-20 pb-8 relative z-10">
      <div className="max-w-[1600px] mx-auto px-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between bg-white/5 border border-white/10 rounded-2xl p-8 mb-16 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-purple-600/10 rounded-full blur-[80px] pointer-events-none" />
          <div className="mb-6 md:mb-0 relative z-10">
            <h3 className="text-2xl font-bold text-white mb-2">Join the DocuMind Community</h3>
            <p className="text-gray-400 text-sm max-w-md">Get weekly study hacks, AI updates, and exclusive early access.</p>
          </div>
          <div className="w-full md:w-auto relative z-10">
            <div className="flex items-center bg-[#0B0B14] border border-white/10 rounded-xl p-1.5 focus-within:border-purple-500/50 transition-colors w-full md:w-[350px]">
              <Mail size={18} className="text-gray-500 ml-3 shrink-0" />
              <input type="email" placeholder="Enter your email" className="bg-transparent px-3 py-2 outline-none text-sm text-white flex-1 min-w-0" />
              <button className="bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded-lg transition-colors flex items-center gap-2 text-sm font-medium shrink-0">
                Subscribe <Send size={14} />
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-6 gap-8 lg:gap-12 mb-16">
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <Brain className="text-purple-500" size={28} />
              <span className="text-2xl font-bold text-white">DocuMind</span>
            </div>
            <p className="text-gray-400 text-sm mb-8 max-w-sm">Your intelligent AI study partner. Transform complex documents into interactive learning experiences.</p>
            <div className="space-y-3 text-sm text-gray-400">
              
              {/* --- YAHAN ACTUAL SUPPORT EMAIL ADD KIYA HAI --- */}
              <div className="flex items-center gap-3">
                <Mail size={16} className="text-purple-400 shrink-0" />
                <a href="mailto:support.mstech4407@gmail.com" className="truncate hover:text-white transition-colors cursor-pointer">
                  support.mstech4407@gmail.com
                </a>
              </div>
              
              <div className="flex items-center gap-3"><Phone size={16} className="text-purple-400 shrink-0" /><span>+91 1800-DOCU-AI</span></div>
              <div className="flex items-center gap-3"><MapPin size={16} className="text-purple-400 shrink-0" /><span>Kanpur, Uttar Pradesh</span></div>
            </div>
          </div>
          
          <div className="col-span-1">
            <h4 className="text-white font-semibold mb-6">Product</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><Link to="/features" className="hover:text-purple-400 transition-colors">Features</Link></li>
              <li><Link to="/how-it-works" className="hover:text-purple-400 transition-colors">How it Works</Link></li>
              <li><Link to="/pricing" className="hover:text-purple-400 transition-colors">Pricing</Link></li>
              <li><Link to="/features" className="hover:text-purple-400 transition-colors">Changelog</Link></li>
            </ul>
          </div>

          <div className="col-span-1">
            <h4 className="text-white font-semibold mb-6">Company</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><Link to="/about" className="hover:text-purple-400 transition-colors">About Us</Link></li>
              <li><Link to="/about" className="hover:text-purple-400 transition-colors">Careers</Link></li>
              <li><Link to="/about" className="hover:text-purple-400 transition-colors">Blog</Link></li>
              {/* --- CONTACT LINK KO BHI MAILTO PE SET KIYA HAI --- */}
              <li><Link to="/support" className="hover:text-purple-400 transition-colors">Support</Link></li>
            </ul>
          </div>

          <div className="col-span-1">
            <h4 className="text-white font-semibold mb-6">Legal</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><Link to="/" className="hover:text-purple-400 transition-colors">Privacy Policy</Link></li>
              <li><Link to="/" className="hover:text-purple-400 transition-colors">Terms of Service</Link></li>
              <li><Link to="/" className="hover:text-purple-400 transition-colors">Security</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
          <p>© 2026 DocuMind Inc. All rights reserved.</p>
          <div className="flex items-center gap-2 bg-white/5 border border-white/10 px-3 py-1.5 rounded-full">
            <span className="relative flex h-2 w-2"><span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span><span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span></span>
            <span className="font-medium text-gray-300">Systems operational</span>
          </div>
        </div>
      </div>
    </footer>
  );
}