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

  const policySections = [
    {
      id: 1,
      num: "01",
      title: "Introduction",
      icon: FileText,
      color: "blue",
      desc: "Welcome to DocuMind. This Privacy Policy explains how we collect, use, store, and safeguard your personal information when you access or use our website, application, and related services."
    },
    {
      id: 2,
      num: "02",
      title: "Information We Collect",
      icon: UserCircle,
      color: "emerald",
      desc: "We may collect certain information to provide and improve our services, such as:",
      bullets: [
        "Personal information (e.g., name, email address, when you register)",
        "Usage information (e.g., pages visited, features used, learning progress)",
        "Device information (e.g., IP address, browser type, device type)",
        "Content you upload (e.g., documents, notes, for learning assistance)"
      ]
    },
    {
      id: 3,
      num: "03",
      title: "How We Use Information",
      icon: Settings,
      color: "orange",
      desc: "We use the information we collect to:",
      bullets: [
        "Provide and improve our services",
        "Personalize your learning experience",
        "Respond to your queries and support requests",
        "Analyze usage and improve performance",
        "Ensure security and prevent misuse"
      ]
    },
    {
      id: 4,
      num: "04",
      title: "Data Sharing & Disclosure",
      icon: Share2,
      color: "purple",
      desc: "We do not sell your personal information. We may share information only:",
      bullets: [
        "With trusted service providers (e.g., hosting, analytics)",
        "To comply with legal obligations",
        "To protect the rights, safety, and integrity of DocuMind and its users"
      ]
    },
    {
      id: 5,
      num: "05",
      title: "Data Security",
      icon: Lock,
      color: "red",
      desc: "We implement industry-standard security measures to protect your information, including encryption, secure servers, and regular security audits."
    },
    {
      id: 6,
      num: "06",
      title: "Your Rights",
      icon: User,
      color: "blue",
      desc: "You have the right to access, correct, or delete your personal information. You can also manage your communication preferences through your account settings."
    },
    {
      id: 7,
      num: "07",
      title: "Cookies & Tracking",
      icon: Cookie,
      color: "amber",
      desc: "We use cookies and similar technologies to enhance your experience, analyze usage, and remember your preferences. You can manage cookies through your browser settings."
    },
    {
      id: 8,
      num: "08",
      title: "Children's Privacy",
      icon: Users,
      color: "teal",
      desc: "DocuMind is not intended for children under the age of 13. We do not knowingly collect personal information from children."
    },
    {
      id: 9,
      num: "09",
      title: "Changes to This Policy",
      icon: RefreshCw,
      color: "pink",
      desc: "We may update this Privacy Policy from time to time. We will notify you of any significant changes through our website or via email."
    }
  ];

  // Helper for dynamic colors
  const getColorClasses = (color) => {
    const colors = {
      blue: "bg-blue-100 text-blue-600",
      emerald: "bg-emerald-100 text-emerald-600",
      orange: "bg-orange-100 text-orange-500",
      purple: "bg-purple-100 text-purple-600",
      red: "bg-red-100 text-red-500",
      amber: "bg-amber-100 text-amber-500",
      teal: "bg-teal-100 text-teal-500",
      pink: "bg-pink-100 text-pink-500",
    };
    return colors[color] || "bg-gray-100 text-gray-600";
  };

  const getNumberColor = (color) => {
    const colors = {
      blue: "text-blue-600", emerald: "text-emerald-600", orange: "text-orange-500",
      purple: "text-purple-600", red: "text-red-500", amber: "text-amber-500",
      teal: "text-teal-500", pink: "text-pink-500",
    };
    return colors[color] || "text-gray-600";
  };

  const getBulletColor = (color) => {
    const colors = {
      blue: "bg-blue-500", emerald: "bg-emerald-500", orange: "bg-orange-500",
      purple: "bg-purple-500", red: "bg-red-500", amber: "bg-amber-500",
      teal: "bg-teal-500", pink: "bg-pink-500",
    };
    return colors[color] || "bg-gray-500";
  };

  return (
    <div className="flex flex-col bg-[#F8FAFC] text-[#1E293B] font-sans min-h-screen">
      
      {/* 🟢 HERO SECTION */}
      <section className="bg-gradient-to-br from-[#EBF4FF] to-white pt-16 pb-20 relative overflow-hidden border-b border-gray-100">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center relative z-10">
          
          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
            <div className="flex items-center gap-2 mb-4">
              <span className="w-6 h-0.5 bg-orange-400"></span>
              <span className="text-[11px] font-bold tracking-widest text-gray-600 uppercase">PRIVACY POLICY</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#0F172A] mb-4 leading-[1.1] tracking-tight">
              Your Privacy <br/> Matters to Us
            </h1>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed max-w-md mb-6 font-medium">
              At DocuMind, we believe that great learning begins with trust. This Privacy Policy explains how we collect, use, protect, and respect your information.
            </p>
            <div className="flex items-center gap-2 text-[12px] font-semibold text-gray-500 bg-white/60 w-max px-3 py-1.5 rounded-md border border-gray-200">
              <Calendar size={14} className="text-blue-500" />
              Last updated: 15 September 2026
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }} className="relative h-[300px] lg:h-[400px] flex items-center justify-center">
            {/* 3D Shield Graphic Placeholder */}
            <div className="relative w-full h-full max-w-[400px] flex items-center justify-center">
               <img src="https://cdn-icons-png.flaticon.com/512/2913/2913520.png" alt="Privacy Shield" className="w-[200px] lg:w-[250px] object-contain drop-shadow-2xl opacity-90" />
               
               {/* Floating Text 1 */}
               <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 5, repeat: Infinity }} className="absolute top-10 right-0 transform rotate-12 text-[#0056D2] font-serif italic font-bold text-lg leading-tight text-center">
                 Your Data<br/>Your Control<br/>Our Responsibility
               </motion.div>

               {/* Floating Text 2 */}
               <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 6, repeat: Infinity }} className="absolute bottom-10 left-0 transform -rotate-12 text-[#0056D2] font-serif italic font-bold text-lg leading-tight text-center">
                 Learn<br/>Privately<br/>Progress<br/>Confidently
               </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 🟢 MAIN CONTENT (Sidebar + Policy Cards) */}
      <section className="py-12 lg:py-20">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* 🔴 LEFT SIDEBAR */}
          <div className="lg:col-span-3 space-y-8">
            {/* Sticky Container */}
            <div className="sticky top-8 space-y-8">
              
              {/* Navigation Menu */}
              <div className="space-y-1">
                {policySections.map((section) => (
                  <button 
                    key={section.id}
                    onClick={() => setActiveSection(section.id)}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-[13px] font-bold transition-colors ${activeSection === section.id ? 'bg-blue-50 text-[#0056D2]' : 'text-gray-500 hover:bg-gray-100 hover:text-gray-800'}`}
                  >
                    <section.icon size={16} className={activeSection === section.id ? 'text-[#0056D2]' : 'text-gray-400'} />
                    {section.title}
                  </button>
                ))}
                <div className="pt-2">
                  <Link to="/contact" className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-[13px] font-bold text-gray-500 hover:bg-gray-100 hover:text-gray-800 transition-colors">
                    <Mail size={16} className="text-gray-400" />
                    Contact Us
                  </Link>
                </div>
              </div>

              {/* Still have questions Box */}
              <div className="bg-white border border-gray-200 rounded-xl p-5 text-center shadow-sm">
                <div className="w-10 h-10 bg-blue-50 text-blue-500 rounded-full flex items-center justify-center mx-auto mb-3">
                  <MessageSquare size={18} />
                </div>
                <h4 className="font-bold text-[#1E293B] text-sm mb-1">Still have questions?</h4>
                <p className="text-xs text-gray-500 mb-4">We're here to help you.</p>
                <Link to="/contact" className="inline-flex items-center justify-center gap-1.5 w-full py-2 border border-blue-200 text-blue-600 rounded-lg text-[12px] font-bold hover:bg-blue-50 transition-colors">
                  Contact Us <ArrowRight size={14} />
                </Link>
              </div>

              {/* Quote Box */}
              <div className="bg-[#F0F7FF] rounded-xl p-6 relative overflow-hidden">
                <p className="text-[#003366] font-serif italic text-[15px] font-bold leading-snug relative z-10 mb-3">
                  "A safer learning space for a brighter tomorrow."
                </p>
                <p className="text-xs text-gray-500 font-semibold relative z-10">— Team DocuMind</p>
                
                {/* Decorative leaves */}
                <div className="absolute -bottom-4 -right-4 w-24 h-24 text-emerald-500/20">
                  <svg viewBox="0 0 24 24" fill="currentColor"><path d="M17,8C8,10,5.9,16.17,3.82,21.34L5.71,22L6.66,19.7C7.14,19.87,7.64,20,8,20C19,20,22,3,22,3C21,5,14,5.25,9,6.25C4,7.25,7.05,10.67,6,12C9,10,13,8,17,8Z"/></svg>
                </div>
              </div>

            </div>
          </div>

          {/* 🔴 RIGHT CONTENT CARDS */}
          <div className="lg:col-span-9 space-y-4">
            {policySections.map((section) => (
              <motion.div 
                key={section.id} 
                initial={{ opacity: 0, y: 15 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                viewport={{ once: true }}
                className={`bg-white border ${activeSection === section.id ? 'border-blue-200 shadow-md ring-1 ring-blue-50' : 'border-gray-200 shadow-sm'} p-6 sm:p-8 rounded-xl flex flex-col sm:flex-row items-start gap-4 sm:gap-6 transition-all duration-300 hover:shadow-md cursor-default group`}
                onMouseEnter={() => setActiveSection(section.id)}
              >
                
                {/* Icon & Number (Left) */}
                <div className="flex items-center gap-4 sm:w-[15%] shrink-0">
                  <div className={`w-12 h-12 rounded-full ${getColorClasses(section.color)} flex items-center justify-center shrink-0 shadow-sm`}>
                    <section.icon size={22} strokeWidth={1.5} />
                  </div>
                  <span className={`text-[13px] font-black ${getNumberColor(section.color)}`}>{section.num}</span>
                </div>

                {/* Content (Middle) */}
                <div className="flex-1">
                  <h3 className="text-lg font-extrabold text-[#1E293B] mb-2">{section.title}</h3>
                  <p className="text-[13px] text-gray-600 leading-relaxed font-medium mb-3">{section.desc}</p>
                  
                  {section.bullets && (
                    <ul className="space-y-2 mt-2">
                      {section.bullets.map((bullet, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-[13px] text-gray-600 font-medium">
                          <span className={`w-1.5 h-1.5 rounded-full ${getBulletColor(section.color)} shrink-0 mt-1.5`}></span>
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

                {/* Chevron (Right) */}
                <div className="hidden sm:flex shrink-0 w-8 h-8 items-center justify-center text-gray-300 group-hover:text-blue-500 transition-colors">
                  <ChevronRight size={18} />
                </div>

              </motion.div>
            ))}
          </div>

        </div>
      </section>

    </div>
  );
}