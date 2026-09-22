import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  ShieldCheck, FileText, UserCircle, Settings, Share2, 
  Lock, User, Cookie, Users, RefreshCw, Mail, MessageSquare, 
  ChevronRight, Calendar, ArrowRight
} from "lucide-react";

export default function PrivacyPolicy() {
  const [activeSection, setActiveSection] = useState(1);

  // 🟢 Enhanced Animation Variants (Not Forgotten)
  const spr = { type: "spring", stiffness: 80, damping: 15 };
  const fadeInUp = { hidden: { opacity: 0, y: 35 }, visible: { opacity: 1, y: 0, transition: spr } };
  const fadeInLeft = { hidden: { opacity: 0, x: -45 }, visible: { opacity: 1, x: 0, transition: spr } };
  const fadeInRight = { hidden: { opacity: 0, x: 45 }, visible: { opacity: 1, x: 0, transition: spr } };
  const staggerContainer = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.1 } } };
  const floatEffect = { y: [0, -10, 0], transition: { duration: 6, repeat: Infinity, ease: "easeInOut" } };

  const policySections = [
    { id: 1, num: "01", title: "Introduction", icon: FileText, color: "blue", desc: "Welcome to DocuMind. This Privacy Policy explains how we collect, use, store, and safeguard your personal information when you access or use our website, application, and related services." },
    { id: 2, num: "02", title: "Information We Collect", icon: UserCircle, color: "emerald", desc: "We may collect certain information to provide and improve our services, such as:", bullets: ["Personal information (e.g., name, email address, when you register)", "Usage information (e.g., pages visited, features used, learning progress)", "Device information (e.g., IP address, browser type, device type)", "Content you upload (e.g., documents, notes, for learning assistance)"] },
    { id: 3, num: "03", title: "How We Use Information", icon: Settings, color: "orange", desc: "We use the information we collect to:", bullets: ["Provide and improve our services", "Personalize your learning experience", "Respond to your queries and support requests", "Analyze usage and improve performance", "Ensure security and prevent misuse"] },
    { id: 4, num: "04", title: "Data Sharing & Disclosure", icon: Share2, color: "purple", desc: "We do not sell your personal information. We may share information only:", bullets: ["With trusted service providers (e.g., hosting, analytics)", "To comply with legal obligations", "To protect the rights, safety, and integrity of DocuMind and its users"] },
    { id: 5, num: "05", title: "Data Security", icon: Lock, color: "red", desc: "We implement industry-standard security measures to protect your information, including encryption, secure servers, and regular security audits." },
    { id: 6, num: "06", title: "Your Rights", icon: User, color: "blue", desc: "You have the right to access, correct, or delete your personal information. You can also manage your communication preferences through your account settings." },
    { id: 7, num: "07", title: "Cookies & Tracking", icon: Cookie, color: "amber", desc: "We use cookies and similar technologies to enhance your experience, analyze usage, and remember your preferences. You can manage cookies through your browser settings." },
    { id: 8, num: "08", title: "Children's Privacy", icon: Users, color: "teal", desc: "DocuMind is not intended for children under the age of 13. We do not knowingly collect personal information from children." },
    { id: 9, num: "09", title: "Changes to This Policy", icon: RefreshCw, color: "pink", desc: "We may update this Privacy Policy from time to time. We will notify you of any significant changes through our website or via email." }
  ];

  const getColorClasses = (color) => {
    const colors = { blue: "bg-blue-100/70 text-blue-600 border-blue-200/60", emerald: "bg-emerald-100/70 text-emerald-600 border-emerald-200/60", orange: "bg-orange-100/70 text-orange-500 border-orange-200/60", purple: "bg-purple-100/70 text-purple-600 border-purple-200/60", red: "bg-red-100/70 text-red-500 border-red-200/60", amber: "bg-amber-100/70 text-amber-500 border-amber-200/60", teal: "bg-teal-100/70 text-teal-500 border-teal-200/60", pink: "bg-pink-100/70 text-pink-500 border-pink-200/60" };
    return colors[color] || "bg-gray-100/70 text-gray-600";
  };
  const getBulletColor = (color) => { const colors = { blue: "bg-blue-500", emerald: "bg-emerald-500", orange: "bg-orange-500", purple: "bg-purple-500", red: "bg-red-500", amber: "bg-amber-500", teal: "bg-teal-500", pink: "bg-pink-500" }; return colors[color] || "bg-gray-500"; };
  const getHoverGlowColor = (color) => { const colors = { blue: "hover:shadow-[0_20px_60px_-15px_rgba(37,99,235,0.12)]", emerald: "hover:shadow-[0_20px_60px_-15px_rgba(5,150,105,0.12)]", orange: "hover:shadow-[0_20px_60px_-15px_rgba(249,115,22,0.12)]", purple: "hover:shadow-[0_20px_60px_-15px_rgba(147,51,234,0.12)]", red: "hover:shadow-[0_20px_60px_-15px_rgba(239,68,68,0.12)]", amber: "hover:shadow-[0_20px_60px_-15px_rgba(245,158,11,0.12)]", teal: "hover:shadow-[0_20px_60px_-15px_rgba(20,184,166,0.12)]", pink: "hover:shadow-[0_20px_60px_-15px_rgba(236,72,153,0.12)]" }; return colors[color] || ""; };

  return (
    <div className="flex flex-col bg-[#F9FAFC] text-[#1E293B] font-sans min-h-screen Selection:bg-[#0056D2] Selection:text-white">
      
      {/* 🟢 HERO SECTION WITH AMBIENT LIGHTS */}
      <section className="bg-gradient-to-br from-[#EEF6FF] via-white to-[#EEF5FC] pt-16 pb-20 relative overflow-hidden border-b border-gray-100/80">
        
        {/* Floating Glowing Orbs */}
        <motion.div animate={{ scale: [1, 1.15, 1], opacity: [0.35, 0.55, 0.35] }} transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }} className="absolute -top-24 -left-20 w-96 h-96 bg-blue-300/40 rounded-full blur-3xl pointer-events-none" />
        <motion.div animate={{ scale: [1, 1.2, 1], opacity: [0.25, 0.45, 0.25] }} transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }} className="absolute bottom-0 right-[-10%] w-[500px] h-[500px] bg-sky-200/40 rounded-full blur-[130px] pointer-events-none" />

        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center relative z-10">
          
          <motion.div initial="hidden" animate="visible" variants={fadeInLeft} className="z-20">
            <div className="inline-flex items-center gap-2 mb-4 bg-orange-50 w-max px-3 py-1 rounded-full border border-orange-200 shadow-sm">
              <span className="w-6 h-0.5 bg-orange-400 rounded-full animate-pulse"></span>
              <span className="text-[11px] font-bold tracking-widest text-gray-600 uppercase">PRIVACY POLICY</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#0F172A] mb-4 leading-[1.1] tracking-tight">
              Your Privacy <br/> Matters to Us
            </h1>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed max-w-lg mb-8 font-medium">
              At DocuMind, we believe that great learning begins with trust. This Privacy Policy explains how we collect, use, protect, and respect your information, ensuring that your learning experience is both secure and private.
            </p>
            <div className="inline-flex items-center gap-2.5 text-[12px] font-bold text-gray-600 bg-white backdrop-blur-sm w-max px-4 py-2 rounded-lg border border-gray-200 shadow-md">
              <Calendar size={15} className="text-blue-500" />
              Last updated: 15 September 2026
            </div>
          </motion.div>

          <motion.div initial="hidden" animate="visible" variants={fadeInRight} className="relative h-[300px] lg:h-[420px] flex items-center justify-center">
            
            <div className="relative w-full h-full flex items-center justify-center z-10">
               {/* Shield with lifting glow */}
               <motion.div whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 100, damping: 10 }}>
                 <img src="https://images.unsplash.com/photo-1587474260584-136574528ed5?q=80&w=1000&auto=format&fit=crop" alt="Privacy Shield" className="w-[180px] lg:w-[240px] h-[240px] lg:h-[300px] object-cover rounded-3xl drop-shadow-2xl opacity-95 border-4 border-white shadow-2xl" />
               </motion.div>
               
               {/* Animated Floating Text cards (Not Forgotten) */}
               <motion.div animate={floatEffect} className="absolute top-10 right-0 transform rotate-[10deg] bg-white backdrop-blur-xl p-4 sm:p-5 shadow-2xl rounded-2xl z-30 border border-gray-100/80 w-[170px] text-center border-l-4 border-orange-400 hover:rotate-0 transition-transform">
                 <p className="font-semibold text-[#0056D2] text-[15px] sm:text-[17px] font-serif italic leading-tight">
                   Your Data<br/>Your Control<br/>Our Responsibility
                 </p>
               </motion.div>
               
               <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }} className="absolute bottom-10 left-0 transform -rotate-[10deg] bg-white backdrop-blur-xl p-4 sm:p-5 shadow-2xl rounded-2xl z-30 border border-gray-100 w-[170px] text-center border-l-4 border-green-400 hover:rotate-0 transition-transform">
                 <p className="font-semibold text-[#0056D2] text-[15px] sm:text-[17px] font-serif italic leading-tight">
                   Learn<br/>Privately<br/>Progress<br/>Confidently
                 </p>
               </motion.div>
               
            </div>
            
          </motion.div>
        </div>
      </section>

      {/* 🟢 MAIN CONTENT (Sidebar + Policy Cards) */}
      <section className="py-16 lg:py-24">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* 🔴 LEFT SIDEBAR (Dynamic Sticky Layout) */}
          <div className="lg:col-span-3 space-y-8">
            <div className="sticky top-8 space-y-8">
              
              {/* Navigation Menu (Polished active states) */}
              <div className="bg-white border border-gray-200 p-2.5 rounded-2xl shadow-sm space-y-1.5 relative overflow-hidden">
                {policySections.map((section) => (
                  <button 
                    key={section.id}
                    onClick={() => setActiveSection(section.id)}
                    className={`w-full group flex items-center gap-3.5 px-4 py-3 rounded-xl text-[13px] font-bold transition-all ${activeSection === section.id ? 'bg-blue-50 text-[#0056D2]' : 'text-gray-500 hover:bg-gray-100 hover:text-gray-950'}`}
                  >
                    <section.icon size={17} strokeWidth={2.2} className={`${activeSection === section.id ? 'text-[#0056D2]' : 'text-gray-400'} group-hover:rotate-6 transition-transform`} />
                    {section.title}
                  </button>
                ))}
                <div className="pt-2">
                  <Link to="/contact" className="w-full flex items-center gap-3.5 px-4 py-3 rounded-xl text-[13px] font-bold text-gray-500 hover:bg-gray-100 hover:text-gray-950 transition-colors">
                    <Mail size={17} strokeWidth={2.2} className="text-gray-400" />
                    Contact Us
                  </Link>
                </div>
              </div>

              {/* Still have questions Box (Updated Button & Interaction) */}
              <div className="bg-white border border-gray-200 rounded-2xl p-6 text-center shadow-sm hover:shadow-lg transition-all border-l-4 border-blue-400">
                <div className="w-10 h-10 bg-blue-50 text-blue-500 rounded-xl flex items-center justify-center mx-auto mb-4 border border-blue-100/60 shadow-inner">
                  <MessageSquare size={20} />
                </div>
                <h4 className="font-bold text-[#1E293B] text-sm mb-1">Still have questions?</h4>
                <p className="text-xs text-gray-500 mb-5 max-w-[140px] mx-auto leading-tight">We're here to help you understand our policies.</p>
                <Link to="/contact" className="inline-flex items-center justify-center gap-1.5 w-full py-2.5 bg-[#0056D2] text-white rounded-lg text-[12px] font-bold shadow-md hover:bg-blue-700 hover:shadow-lg transition-all">
                  Contact Us <ArrowRight size={14} />
                </Link>
              </div>

              {/* Quote Box (Subtle Glow on Hover) */}
              <div className="bg-[#F4F9FF] rounded-2xl p-6 relative overflow-hidden border border-gray-100 shadow-inner hover:shadow-lg transition-shadow group">
                <p className="text-[#003366] font-serif italic text-[15px] font-bold leading-snug relative z-10 mb-3 group-hover:translate-x-1 transition-transform">
                  "A safer learning space for a brighter tomorrow."
                </p>
                <p className="text-xs text-gray-500 font-semibold relative z-10">— Team DocuMind</p>
                
                {/* Decorative leaves */}
                <div className="absolute -bottom-4 -right-4 w-24 h-24 text-emerald-500/20 group-hover:rotate-6 group-hover:scale-105 transition-transform">
                  <svg viewBox="0 0 24 24" fill="currentColor"><path d="M17,8C8,10,5.9,16.17,3.82,21.34L5.71,22L6.66,19.7C7.14,19.87,7.64,20,8,20C19,20,22,3,22,3C21,5,14,5.25,9,6.25C4,7.25,7.05,10.67,6,12C9,10,13,8,17,8Z"/></svg>
                </div>
              </div>

            </div>
          </div>

          {/* 🔴 RIGHT CONTENT CARDS (Dynamic Staggered Glow Effects - Not Forgotten) */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }} variants={staggerContainer} className="lg:col-span-9 space-y-4">
            {policySections.map((section) => (
              <motion.div 
                key={section.id} 
                variants={fadeInUp} 
                className={`bg-white border ${activeSection === section.id ? 'border-blue-200' : 'border-gray-200/80'} p-7 sm:p-9 rounded-2xl shadow-sm flex flex-col md:flex-row items-start gap-5 md:gap-8 transition-all duration-300 group ${getHoverGlowColor(section.color)} ${activeSection === section.id ? 'shadow-[0_25px_60px_-15px_rgba(0,86,210,0.12)] -translate-y-1' : ''}`}
                onMouseEnter={() => setActiveSection(section.id)}
              >
                
                {/* Icon & Number (Left) - (Number added overlapping the circle) */}
                <div className="flex items-center gap-4 md:w-[15%] shrink-0">
                  <div className={`w-[84px] h-[84px] rounded-full ${getColorClasses(section.color)} border-4 border-white shadow-md flex items-center justify-center shrink-0 shadow-sm relative group-hover:scale-110 transition-transform`}>
                    <section.icon size={30} strokeWidth={1.75} className="group-hover:rotate-6 transition-transform"/>
                    {/* Number Badge overlapping */}
                    <span className={`absolute -top-1 -right-1 text-[11px] font-black text-white ${getBulletColor(section.color)} w-6 h-6 rounded-full flex items-center justify-center shadow-sm`}>
                      {section.num}
                    </span>
                  </div>
                </div>

                {/* Content (Middle) - Polished typography */}
                <div className="flex-1">
                  <h3 className="text-[17px] font-black text-[#0F172A] mb-2 leading-tight group-hover:text-[#0056D2] transition-colors">{section.title}</h3>
                  <p className="text-[13px] text-gray-700 leading-relaxed font-medium mb-4 whitespace-pre-line">{section.desc}</p>
                  
                  {section.bullets && (
                    <ul className="space-y-2.5 mt-2 bg-slate-50 p-4 rounded-xl border border-slate-100">
                      {section.bullets.map((bullet, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-[13px] text-gray-600 font-medium group-hover:translate-x-0.5 transition-transform" style={{transitionDelay: `${i*30}ms`}}>
                          <span className={`w-1.5 h-1.5 rounded-full ${getBulletColor(section.color)} shrink-0 mt-1.5`}></span>
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

                {/* Chevron (Right) - (Interaction added) */}
                <div className="hidden sm:flex shrink-0 w-8 h-8 items-center justify-center text-gray-300 group-hover:text-blue-500 group-hover:translate-x-1.5 transition-all">
                  <ChevronRight size={19} strokeWidth={2.5} />
                </div>

              </motion.div>
            ))}
          </motion.div>

        </div>
      </section>

    </div>
  );
}