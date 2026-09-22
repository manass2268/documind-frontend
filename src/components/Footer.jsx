import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, ExternalLink, ShieldCheck, Scale, Globe } from 'lucide-react';

import ashokaLogo from "../assets/ashoka.png";

export default function Footer() {
  return (
    <footer className="bg-[#0A192F] text-gray-300 font-sans border-t-4 border-[#0056D2]">
      
      <div className="max-w-[1400px] mx-auto px-4 sm:px-8 py-10 lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          
          <div className="flex flex-col">
            <div className="flex items-center gap-3 mb-4">
              <div className="flex items-center justify-center">
                <img src={ashokaLogo} alt="Satyameva Jayate" className="h-10 sm:h-12 object-contain filter invert brightness-100" />
              </div>
              <div className="flex flex-col leading-tight">
                <span className="text-white font-bold text-sm sm:text-base">Ministry of Statistics & <br/>Programme Implementation</span>
                <span className="text-[10px] sm:text-xs text-gray-400 mt-1">Government of India</span>
              </div>
            </div>
            <p className="text-xs sm:text-sm text-gray-400 leading-relaxed mb-6 font-medium">
              Empowering India's statistical ecosystem through data-driven capacity building and AI-enabled competency mapping.
            </p>
            <div className="flex flex-col space-y-3 text-xs sm:text-sm">
              <div className="flex items-start gap-3">
                <MapPin className="text-[#4DA8DA] shrink-0 mt-0.5" size={16} />
                <span className="text-gray-400 hover:text-white transition-colors cursor-pointer">Kanpur <br/>Uttar Pradesh - 208012</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="text-[#4DA8DA] shrink-0" size={16} />
                <span className="text-gray-400 hover:text-white transition-colors cursor-pointer">+91-11-23344689</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="text-[#4DA8DA] shrink-0" size={16} />
                <span className="text-gray-400 hover:text-white transition-colors cursor-pointer">support-documind@mospi.gov.in</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-white font-bold text-base sm:text-lg mb-4 sm:mb-6 flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-[#4DA8DA] rounded-full"></div> Quick Links
            </h3>
            <ul className="space-y-2.5 sm:space-y-3 text-xs sm:text-sm">
              <li><Link to="/" className="hover:text-[#4DA8DA] hover:translate-x-1 inline-block transition-transform">Home</Link></li>
              <li><Link to="/about" className="hover:text-[#4DA8DA] hover:translate-x-1 inline-block transition-transform">About DocuMind</Link></li>
              <li><Link to="/platform" className="hover:text-[#4DA8DA] hover:translate-x-1 inline-block transition-transform">Platform Features</Link></li>
              <li><Link to="/login" className="hover:text-[#4DA8DA] hover:translate-x-1 inline-block transition-transform">Employee Login</Link></li>
              <li><Link to="/support" className="hover:text-[#4DA8DA] hover:translate-x-1 inline-block transition-transform">Help & Support</Link></li>
              <li><a href="#" className="hover:text-[#4DA8DA] hover:translate-x-1 inline-block transition-transform">Sitemap</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold text-base sm:text-lg mb-4 sm:mb-6 flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-[#4DA8DA] rounded-full"></div> External Portals
            </h3>
            <ul className="space-y-2.5 sm:space-y-3 text-xs sm:text-sm">
              <li><a href="https://www.mospi.gov.in" target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-[#4DA8DA] transition-colors group">MoSPI Official Website <ExternalLink size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" /></a></li>
              <li><a href="https://www.india.gov.in" target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-[#4DA8DA] transition-colors group">National Portal of India <ExternalLink size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" /></a></li>
              <li><a href="https://igotkarmayogi.gov.in" target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-[#4DA8DA] transition-colors group">iGOT Karmayogi <ExternalLink size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" /></a></li>
              <li><a href="https://digitalindia.gov.in" target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-[#4DA8DA] transition-colors group">Digital India <ExternalLink size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" /></a></li>
              <li><a href="https://data.gov.in" target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-[#4DA8DA] transition-colors group">Open Data Gateway <ExternalLink size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" /></a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold text-base sm:text-lg mb-4 sm:mb-6 flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-[#4DA8DA] rounded-full"></div> Policies & Legal
            </h3>
            <ul className="space-y-2.5 sm:space-y-3 text-xs sm:text-sm mb-6">
              <li><a href="/privacy-policy" className="flex items-center gap-2 hover:text-white transition-colors"><ShieldCheck size={14} className="text-gray-400"/> Privacy Policy</a></li>
              <li><a href="#" className="flex items-center gap-2 hover:text-white transition-colors"><Scale size={14} className="text-gray-400"/> Terms & Conditions</a></li>
              <li><a href="#" className="flex items-center gap-2 hover:text-white transition-colors"><Globe size={14} className="text-gray-400"/> Accessibility Statement</a></li>
            </ul>
            
            <div className="bg-[#112240] p-3 rounded-md border border-gray-700">
              <p className="text-[10px] sm:text-[11px] text-gray-400 leading-tight">
                Website Content Managed by <strong>MoSPI</strong>. Designed, Developed and Hosted by <strong>National Informatics Centre (NIC)</strong>.
              </p>
            </div>
          </div>
          
        </div>
      </div>

      <div className="bg-[#060D1A] border-t border-gray-800">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-8 py-4 sm:py-5 flex flex-col md:flex-row items-center justify-between gap-3 text-center md:text-left">
          <p className="text-[11px] sm:text-xs text-gray-400">
            © {new Date().getFullYear()} <strong>DocuMind</strong>. All rights reserved. 
            <span className="hidden sm:inline text-gray-600 mx-2">|</span> 
            <span className="block sm:inline mt-1 sm:mt-0">Ministry of Statistics & Programme Implementation</span>
          </p>
          <div className="text-[9px] sm:text-[10px] text-gray-500 font-medium">
            Smart India Hackathon 2026 | Conceptual Prototype — Not an official Government of India website.
          </div>
        </div>
      </div>
      
    </footer>
  );
}