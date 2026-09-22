import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useSpring } from "framer-motion";
import { 
  ShieldCheck, FileText, UserCircle, Settings, Share2, 
  Lock, User, Cookie, Users, RefreshCw, Mail, MessageSquare, 
  ChevronRight, Calendar, ArrowRight, ShieldAlert
} from "lucide-react";

export default function PrivacyPolicy() {
  const [activeSection, setActiveSection] = useState(1);
  const [currentDate, setCurrentDate] = useState("");

  // 🟢 Scroll Progress Bar Animation
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  useEffect(() => {
    // Setting a live date string
    const date = new Date().toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' });
    setCurrentDate(date);
  }, []);

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

  // 🟢 Smooth Scroll Function with Offset
  const scrollToSection = (id) => {
    setActiveSection(id);
    const element = document.getElementById(`section-${id}`);
    if (element) {
      // 100px offset so it doesn't stick exactly to the top edge
      const y = element.getBoundingClientRect().top + window.scrollY - 120;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  // 🟢 Scroll Spy (Automatically update active section on scroll)
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = Number(entry.target.id.split('-')[1]);
            setActiveSection(id);
          }
        });
      },
      { rootMargin: "-20% 0px -60% 0px" } // Triggers when element is in the middle of viewport
    );

    policySections.forEach((section) => {
      const el = document.getElementById(`section-${section.id}`);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  // Dynamic Animation Variants
  const spr = { type: "spring", stiffness: 100, damping: 15 };
  const fadeInUp = { hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0, transition: spr } };
  const fadeInLeft = { hidden: { opacity: 0, x: -40 }, visible: { opacity: 1, x: 0, transition: spr } };
  const fadeInRight = { hidden: { opacity: 0, x: 40 }, visible: { opacity: 1, x: 0, transition: spr } };
  const staggerContainer = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } } };
  
  const breatheEffect = { y: [0, -12, 0], rotate: [0, 2, -2, 0], transition: { duration: 6, repeat: Infinity, ease: "easeInOut" } };

  const getColorClasses = (color) => {
    const colors = { blue: "bg-blue-100 text-blue-600 border-blue-200", emerald: "bg-emerald-100 text-emerald-600 border-emerald-200", orange: "bg-orange-100 text-orange-500 border-orange-200", purple: "bg-purple-100 text-purple-600 border-purple-200", red: "bg-red-100 text-red-500 border-red-200", amber: "bg-amber-100 text-amber-500 border-amber-200", teal: "bg-teal-100 text-teal-500 border-teal-200", pink: "bg-pink-100 text-pink-500 border-pink-200" };
    return colors[color] || "bg-gray-100 text-gray-600 border-gray-200";
  };
  const getBulletColor = (color) => { const colors = { blue: "bg-blue-500", emerald: "bg-emerald-500", orange: "bg-orange-500", purple: "bg-purple-500", red: "bg-red-500", amber: "bg-amber-500", teal: "bg-teal-500", pink: "bg-pink-500" }; return colors[color] || "bg-gray-500"; };
  const getHoverGlow = (color) => { const colors = { blue: "hover:shadow-[0_20px_50px_-12px_rgba(37,99,235,0.25)]", emerald: "hover:shadow-[0_20px_50px_-12px_rgba(16,185,129,0.25)]", orange: "hover:shadow-[0_20px_50px_-12px_rgba(249,115,22,0.25)]", purple: "hover:shadow-[0_20px_50px_-12px_rgba(147,51,234,0.25)]", red: "hover:shadow-[0_20px_50px_-12px_rgba(239,68,68,0.25)]", amber: "hover:shadow-[0_20px_50px_-12px_rgba(245,158,11,0.25)]", teal: "hover:shadow-[0_20px_50px_-12px_rgba(20,184,166,0.25)]", pink: "hover:shadow-[0_20px_50px_-12px_rgba(236,72,153,0.25)]" }; return colors[color] || "hover:shadow-xl"; };

  return (
    <div className="flex flex-col bg-[#F8FAFC] text-[#1E293B] font-sans min-h-screen relative overflow-hidden">
      
      {/* 🟢 Live Reading Progress Bar */}
      <motion.div style={{ scaleX, transformOrigin: "0% 50%" }} className="fixed top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-blue-400 via-[#0056D2] to-purple-500 z-50 rounded-r-full" />

      {/* 🟢 HERO SECTION WITH AMBIENT PARTICLES */}
      <section className="bg-gradient-to-br from-[#EBF4FF] via-white to-[#F0F7FF] pt-20 pb-24 relative overflow-hidden border-b border-gray-100">
        
        {/* Animated Background Orbs */}
        <motion.div animate={{ scale: [1, 1.2, 1], x: [0, 30, 0], opacity: [0.3, 0.6, 0.3] }} transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }} className="absolute -top-20 -left-10 w-[500px] h-[500px] bg-blue-300/30 rounded-full blur-[100px] pointer-events-none" />
        <motion.div animate={{ scale: [1, 1.3, 1], x: [0, -40, 0], opacity: [0.2, 0.5, 0.2] }} transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }} className="absolute top-10 right-[-10%] w-[400px] h-[400px] bg-indigo-300/30 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] mix-blend-multiply pointer-events-none" />

        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
          
          <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="z-20">
            <motion.div variants={fadeInLeft} className="flex items-center gap-2.5 mb-5 bg-white/60 backdrop-blur-sm w-max px-3.5 py-1.5 rounded-full border border-orange-200 shadow-sm">
              <span className="w-2.5 h-2.5 bg-orange-500 rounded-full animate-ping"></span>
              <span className="w-2.5 h-2.5 bg-orange-500 rounded-full absolute"></span>
              <span className="text-[11px] font-black tracking-[0.2em] text-orange-600 uppercase pl-2">Privacy Policy</span>
            </motion.div>
            
            <motion.h1 variants={fadeInLeft} className="text-4xl sm:text-5xl lg:text-[64px] font-black text-[#0F172A] mb-5 leading-[1.05] tracking-tight">
              Your Privacy <br/> <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#003366] to-[#0056D2]">Matters to Us</span>
            </motion.h1>
            
            <motion.p variants={fadeInLeft} className="text-gray-600 text-sm sm:text-lg leading-relaxed max-w-lg mb-8 font-medium">
              At DocuMind, we believe that great learning begins with trust. This Privacy Policy explains how we collect, use, protect, and respect your information.
            </motion.p>
            
            <motion.div variants={fadeInLeft} whileHover={{ scale: 1.05 }} className="inline-flex items-center gap-2.5 text-[12px] font-bold text-gray-700 bg-white shadow-md shadow-blue-500/10 w-max px-4 py-2.5 rounded-xl border border-gray-200 transition-transform cursor-default">
              <div className="bg-blue-100 p-1.5 rounded-md"><Calendar size={16} className="text-[#0056D2]" /></div>
              Last updated: {currentDate}
            </motion.div>
          </motion.div>

          <motion.div initial="hidden" animate="visible" variants={fadeInRight} className="relative h-[350px] lg:h-[450px] flex items-center justify-center">
            
            <div className="relative w-full h-full flex items-center justify-center z-10">
               <motion.div animate={breatheEffect} whileHover={{ scale: 1.08, rotateY: 10, rotateX: -5 }} transition={{ type: "spring" }} style={{ perspective: 1000 }}>
                 <img src="https://images.unsplash.com/photo-1587474260584-136574528ed5?q=80&w=1000&auto=format&fit=crop" alt="Privacy Shield" className="w-[200px] lg:w-[260px] h-[260px] lg:h-[340px] object-cover rounded-[2rem] drop-shadow-2xl border-4 border-white shadow-[0_30px_60px_rgba(0,30,80,0.3)]" />
               </motion.div>
               
               <motion.div animate={{ y: [0, -15, 0], rotate: [8, 12, 8] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }} className="absolute top-12 right-[-10px] sm:right-4 bg-white/90 backdrop-blur-xl p-4 sm:p-5 shadow-2xl rounded-2xl z-30 border border-white/50 w-[180px] text-center border-l-4 border-orange-400 group hover:rotate-0 transition-transform">
                 <ShieldAlert size={24} className="text-orange-400 mx-auto mb-2 opacity-50 group-hover:opacity-100 group-hover:scale-110 transition-all" />
                 <p className="font-bold text-[#0056D2] text-[15px] sm:text-[16px] font-serif italic leading-tight">Your Data<br/>Your Control<br/><span className="not-italic text-orange-500 font-black">Our Responsibility</span></p>
               </motion.div>
               
               <motion.div animate={{ y: [0, 15, 0], rotate: [-8, -12, -8] }} transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut", delay: 1 }} className="absolute bottom-12 left-[-10px] sm:left-4 bg-white/90 backdrop-blur-xl p-4 sm:p-5 shadow-2xl rounded-2xl z-30 border border-white/50 w-[180px] text-center border-r-4 border-emerald-400 group hover:rotate-0 transition-transform">
                 <Lock size={24} className="text-emerald-500 mx-auto mb-2 opacity-50 group-hover:opacity-100 group-hover:scale-110 transition-all" />
                 <p className="font-bold text-[#0056D2] text-[15px] sm:text-[16px] font-serif italic leading-tight">Learn Privately<br/><span className="not-italic text-emerald-600 font-black">Progress Confidently</span></p>
               </motion.div>
            </div>
            
          </motion.div>
        </div>
      </section>

      {/* 🟢 MAIN CONTENT (Sidebar + Dynamic Policy Cards) */}
      <section className="py-16 lg:py-24">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* 🔴 LEFT SIDEBAR (Live Sliding Indicator) */}
          <div className="lg:col-span-3 space-y-8">
            <div className="sticky top-24 space-y-8"> {/* Adjusted top for stickiness */}
              
              {/* Navigation Menu */}
              <div className="bg-white border border-gray-200/80 p-3 rounded-[1.5rem] shadow-[0_10px_30px_rgba(0,0,0,0.03)] space-y-1 relative">
                {policySections.map((section) => (
                  <button 
                    key={section.id}
                    onClick={() => scrollToSection(section.id)}
                    className="w-full relative flex items-center gap-3.5 px-4 py-3.5 rounded-xl text-[13px] font-bold text-left group z-10"
                  >
                    {/* Sliding Background Magic */}
                    {activeSection === section.id && (
                      <motion.div layoutId="activeSidebarBg" className="absolute inset-0 bg-blue-50/80 border border-blue-100 rounded-xl -z-10" transition={{ type: "spring", stiffness: 300, damping: 30 }} />
                    )}
                    
                    <section.icon size={18} strokeWidth={2.2} className={`relative z-10 transition-transform duration-300 group-hover:scale-110 ${activeSection === section.id ? 'text-[#0056D2]' : 'text-gray-400 group-hover:text-gray-700'}`} />
                    <span className={`relative z-10 transition-colors ${activeSection === section.id ? 'text-[#0056D2]' : 'text-gray-500 group-hover:text-gray-900'}`}>
                      {section.title}
                    </span>
                  </button>
                ))}
              </div>

              {/* Action Box */}
              <motion.div whileHover={{ y: -5 }} className="bg-gradient-to-br from-[#0056D2] to-blue-700 rounded-2xl p-6 text-center shadow-lg relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700" />
                <div className="w-12 h-12 bg-white/20 backdrop-blur-sm text-white rounded-xl flex items-center justify-center mx-auto mb-4 border border-white/20 shadow-inner group-hover:scale-110 transition-transform">
                  <MessageSquare size={22} />
                </div>
                <h4 className="font-black text-white text-base mb-1 relative z-10">Still have questions?</h4>
                <p className="text-xs text-blue-100 mb-5 relative z-10">We're here to help you.</p>
                <Link to="/contact" className="inline-flex items-center justify-center gap-2 w-full py-3 bg-white text-[#0056D2] rounded-xl text-[13px] font-black shadow-md hover:shadow-xl hover:bg-gray-50 transition-all relative z-10 group-hover:gap-3">
                  Contact Us <ArrowRight size={16} />
                </Link>
              </motion.div>
            </div>
          </div>

          {/* 🔴 RIGHT CONTENT CARDS (ID Added for Scrolling) */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer} className="lg:col-span-9 space-y-6">
            {policySections.map((section) => (
              <motion.div 
                id={`section-${section.id}`} // <--- THIS ID MAKES SCROLLING WORK
                key={section.id} 
                variants={fadeInUp}
                whileHover={{ y: -8, scale: 1.01 }}
                onMouseEnter={() => setActiveSection(section.id)} // For manual hover sync
                className={`bg-white border ${activeSection === section.id ? 'border-blue-300 ring-2 ring-blue-50' : 'border-gray-200'} p-7 sm:p-9 rounded-[2rem] flex flex-col md:flex-row items-start gap-6 md:gap-8 transition-all duration-300 group ${getHoverGlow(section.color)} cursor-default scroll-mt-24`}
              >
                
                {/* Icon & Number with Spin on Hover */}
                <div className="flex items-center gap-4 md:w-[15%] shrink-0">
                  <div className={`w-[88px] h-[88px] rounded-2xl ${getColorClasses(section.color)} border-[3px] border-white shadow-md flex items-center justify-center shrink-0 relative transition-transform duration-500 group-hover:rotate-6 group-hover:rounded-[2rem]`}>
                    <section.icon size={32} strokeWidth={2} className="group-hover:scale-110 transition-transform duration-300" />
                    <motion.span whileHover={{ scale: 1.2, rotate: 10 }} className={`absolute -top-3 -right-3 text-[12px] font-black text-white ${getBulletColor(section.color)} w-8 h-8 rounded-full flex items-center justify-center shadow-lg border-[3px] border-white cursor-help`}>
                      {section.num}
                    </motion.span>
                  </div>
                </div>

                {/* Content Section */}
                <div className="flex-1">
                  <h3 className="text-[20px] font-black text-[#0F172A] mb-3 leading-tight group-hover:text-[#0056D2] transition-colors">{section.title}</h3>
                  <p className="text-[14px] text-gray-600 leading-relaxed font-medium mb-4 whitespace-pre-line group-hover:text-gray-800 transition-colors">{section.desc}</p>
                  
                  {section.bullets && (
                    <div className="space-y-3 mt-4 bg-slate-50/80 p-5 rounded-2xl border border-slate-100 group-hover:bg-blue-50/30 group-hover:border-blue-100/50 transition-colors">
                      {section.bullets.map((bullet, i) => (
                        <div key={i} className="flex items-start gap-3 group/bullet">
                          <div className={`p-1 rounded-full ${getBulletColor(section.color)} shrink-0 mt-0.5 group-hover/bullet:scale-125 transition-transform shadow-sm`}>
                            <ShieldCheck size={10} className="text-white" />
                          </div>
                          <span className="text-[13px] text-gray-700 font-semibold group-hover/bullet:translate-x-1 group-hover/bullet:text-[#0F172A] transition-all">{bullet}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Action Arrow */}
                <div className="hidden sm:flex shrink-0 w-10 h-10 rounded-full bg-gray-50 items-center justify-center text-gray-400 group-hover:bg-blue-50 group-hover:text-[#0056D2] group-hover:translate-x-2 transition-all">
                  <ChevronRight size={20} strokeWidth={2.5} />
                </div>

              </motion.div>
            ))}
          </motion.div>

        </div>
      </section>

    </div>
  );
}