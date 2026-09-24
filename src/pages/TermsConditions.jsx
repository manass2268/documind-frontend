import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useSpring, AnimatePresence } from "framer-motion";
import { 
  FileText, CheckCircle, User, Users, Copyright, 
  AlertTriangle, CreditCard, XCircle, Scale, RefreshCw, 
  Landmark, Mail, ChevronRight, Calendar, Headphones, 
  ArrowRight, ShieldCheck, Link2, Check, ArrowUp, Clock, Scale as ScaleIcon
} from "lucide-react";

export default function TermsConditions() {
  const [activeSection, setActiveSection] = useState(1);
  const [currentDate, setCurrentDate] = useState("");
  const [copiedId, setCopiedId] = useState(null);
  const [showTopBtn, setShowTopBtn] = useState(false);

  // 🟢 Live Scroll Progress Bar
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  useEffect(() => {
    const date = new Date().toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' });
    setCurrentDate(date);

    const handleScroll = () => {
      setShowTopBtn(window.scrollY > 500);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const termsData = [
    { id: 1, title: "Introduction", icon: FileText, color: "blue", desc: "These Terms and Conditions govern your access to and use of the DocuMind platform, including our website, application, and related services (collectively, the \"Services\")." },
    { id: 2, title: "Acceptance of Terms", icon: CheckCircle, color: "emerald", desc: "By accessing or using DocuMind, you agree to be bound by these Terms and Conditions, our Privacy Policy, and any other policies referenced herein." },
    { id: 3, title: "Use of Services", icon: User, color: "orange", desc: "DocuMind provides an AI-powered learning platform for educational purposes. You agree to use our Services only for lawful and educational purposes." },
    { id: 4, title: "User Accounts", icon: Users, color: "purple", desc: "To access certain features, you may need to create an account. You are responsible for maintaining the confidentiality of your account credentials." },
    { id: 5, title: "Content & Intellectual Property", icon: Copyright, color: "red", desc: "All content on DocuMind, including text, graphics, logos, software, and AI-generated insights, is the property of DocuMind or its licensors and is protected by copyright and other laws." },
    { id: 6, title: "Acceptable Use Policy", icon: AlertTriangle, color: "blue", desc: "You agree not to misuse our Services, including but not limited to, attempting to hack, reverse engineer, distribute harmful content, or use the platform for illegal activities." },
    { id: 7, title: "Payments & Subscriptions", icon: CreditCard, color: "emerald", desc: "Certain features may require a paid subscription. All payments are processed securely through our trusted payment partners. Fees are non-refundable except as stated in our refund policy." },
    { id: 8, title: "Termination", icon: XCircle, color: "orange", desc: "We reserve the right to suspend or terminate your account if you violate these Terms or engage in harmful or illegal activities." },
    { id: 9, title: "Limitation of Liability", icon: ScaleIcon, color: "purple", desc: "DocuMind is provided \"as is\" without warranties of any kind. We are not liable for any indirect, incidental, or consequential damages arising from the use of our Services." },
    { id: 10, title: "Changes to Terms", icon: RefreshCw, color: "emerald", desc: "We may update these Terms from time to time. We will notify you of any significant changes through our website or via email." },
    { id: 11, title: "Governing Law", icon: Landmark, color: "blue", desc: "These Terms are governed by the laws of India. Any disputes shall be subject to the jurisdiction of the courts in New Delhi, India." },
    { id: 12, title: "Contact Us", icon: Mail, color: "pink", desc: "If you have any questions regarding these Terms and Conditions, you can contact us at support-documind@mospi.gov.in." }
  ];

  // 🟢 Copy Link Logic
  const handleCopy = (id) => {
    const url = `${window.location.origin}${window.location.pathname}#term-${id}`;
    navigator.clipboard.writeText(url);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (e, id) => {
    e.preventDefault();
    setActiveSection(id);
    const element = document.getElementById(`term-${id}`);
    if (element) {
      const offset = 120;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - offset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
      
      element.classList.add('ring-4', 'ring-[#0056D2]', 'ring-opacity-40', 'scale-[1.015]', 'shadow-2xl', 'z-10', 'border-[#0056D2]');
      setTimeout(() => {
        element.classList.remove('ring-4', 'ring-[#0056D2]', 'ring-opacity-40', 'scale-[1.015]', 'shadow-2xl', 'z-10', 'border-[#0056D2]');
      }, 700);
    }
  };

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
      { rootMargin: "-20% 0px -60% 0px" } 
    );
    termsData.forEach((section) => {
      const el = document.getElementById(`term-${section.id}`);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  // 🟢 Animations & Dynamic Colors
  const spr = { type: "spring", stiffness: 90, damping: 15 };
  const fadeInUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: spr } };
  const staggerContainer = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.05 } } };
  const breatheEffect = { y: [0, -10, 0], rotate: [0, 2, -2, 0], transition: { duration: 6, repeat: Infinity, ease: "easeInOut" } };

  const getBadgeColor = (color) => {
    const colors = { blue: "bg-blue-100/80 text-blue-700", emerald: "bg-emerald-100/80 text-emerald-700", orange: "bg-orange-100/80 text-orange-600", purple: "bg-purple-100/80 text-purple-700", red: "bg-red-100/80 text-red-600", pink: "bg-pink-100/80 text-pink-600" };
    return colors[color] || "bg-gray-100/80 text-gray-700";
  };
  const getGlowColor = (color) => { 
    const colors = { blue: "hover:shadow-[0_20px_40px_-15px_rgba(37,99,235,0.25)] hover:border-blue-300", emerald: "hover:shadow-[0_20px_40px_-15px_rgba(16,185,129,0.25)] hover:border-emerald-300", orange: "hover:shadow-[0_20px_40px_-15px_rgba(249,115,22,0.25)] hover:border-orange-300", purple: "hover:shadow-[0_20px_40px_-15px_rgba(147,51,234,0.25)] hover:border-purple-300", red: "hover:shadow-[0_20px_40px_-15px_rgba(239,68,68,0.25)] hover:border-red-300", pink: "hover:shadow-[0_20px_40px_-15px_rgba(236,72,153,0.25)] hover:border-pink-300" }; 
    return colors[color] || "hover:shadow-xl hover:border-gray-300"; 
  };

  return (
    <div className="flex flex-col bg-[#F4F7FA] text-[#1E293B] font-sans min-h-screen relative overflow-x-hidden selection:bg-[#0056D2] selection:text-white">
      
      {/* 🟢 TOP SCROLL PROGRESS */}
      <motion.div style={{ scaleX, transformOrigin: "0% 50%" }} className="fixed top-0 left-0 right-0 h-[4px] bg-gradient-to-r from-teal-400 via-[#0056D2] to-indigo-600 z-[100] rounded-r-full" />

      {/* 🟢 GLASSMORPHIC HERO SECTION */}
      <section className="bg-gradient-to-br from-[#E2F0FF] via-[#F4F7FA] to-[#E9F3FC] pt-24 pb-20 relative overflow-hidden border-b border-gray-200/60">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        
        {/* Dynamic Orbs */}
        <motion.div animate={{ scale: [1, 1.2, 1], x: [0, 40, 0], opacity: [0.4, 0.7, 0.4] }} transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }} className="absolute -top-32 -left-20 w-[600px] h-[600px] bg-[#0056D2]/10 rounded-full blur-[140px] pointer-events-none" />
        <motion.div animate={{ scale: [1, 1.3, 1], x: [0, -50, 0], opacity: [0.3, 0.6, 0.3] }} transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }} className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-teal-400/15 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
          
          <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="z-20 relative">
            {/* Glassmorphic Panel */}
            <div className="bg-white/40 backdrop-blur-2xl border border-white/60 p-8 sm:p-10 rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.03)] relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/40 rounded-full blur-2xl" />
              
              <motion.div variants={fadeInUp} className="flex items-center gap-2.5 mb-6">
                <span className="flex h-3 w-3 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-[#0056D2]"></span>
                </span>
                <span className="text-[12px] font-black tracking-widest text-[#0056D2] uppercase bg-[#0056D2]/10 px-3 py-1 rounded-full">Legal Document</span>
              </motion.div>
              
              <motion.h1 variants={fadeInUp} className="text-5xl sm:text-6xl lg:text-[72px] font-black text-[#0F172A] mb-5 leading-[1.02] tracking-tight">
                Terms & <br/><span className="bg-clip-text text-transparent bg-gradient-to-r from-[#003366] via-[#0056D2] to-blue-500">Conditions</span>
              </motion.h1>
              
              <motion.p variants={fadeInUp} className="text-gray-600 text-[16px] sm:text-[18px] leading-relaxed max-w-lg mb-8 font-medium">
                Please read these terms carefully. By accessing or using DocuMind, you agree to build a secure, ethical, and collaborative learning environment.
              </motion.p>
              
              <motion.div variants={fadeInUp} className="flex flex-wrap items-center gap-3 sm:gap-4 text-[13px] font-bold text-[#1E293B]">
                <div className="flex items-center gap-2 bg-white/70 shadow-sm px-4 py-2.5 rounded-xl border border-white/80">
                  <Calendar size={16} className="text-[#0056D2]" /> {currentDate}
                </div>
                <div className="flex items-center gap-2 bg-white/70 shadow-sm px-4 py-2.5 rounded-xl border border-white/80">
                  <Clock size={16} className="text-teal-600" /> 5 min read
                </div>
              </motion.div>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }} className="relative h-[350px] lg:h-[500px] flex items-center justify-center">
             <motion.div animate={breatheEffect} whileHover={{ scale: 1.05, rotateY: -10, rotateX: 5 }} transition={{ type: "spring" }} style={{ perspective: 1000 }} className="z-10">
               <img 
                  src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=1000&auto=format&fit=crop" 
                  alt="Terms and Conditions" 
                  className="w-[240px] lg:w-[320px] h-[300px] lg:h-[400px] object-cover rounded-[2.5rem] drop-shadow-2xl border-[8px] border-white/90 shadow-[0_40px_80px_rgba(0,40,100,0.2)]" 
               />
             </motion.div>
             
             {/* Floating UI Elements */}
             <motion.div animate={{ y: [0, -15, 0], rotate: [-6, -10, -6] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }} className="absolute top-12 left-0 sm:left-4 bg-white/95 backdrop-blur-2xl p-5 shadow-2xl rounded-2xl z-30 border border-white/60 w-[200px] border-l-4 border-[#0056D2]">
               <p className="font-bold text-[#0056D2] text-[16px] sm:text-[18px] font-serif italic leading-tight">Learn Responsibly<br/><span className="not-italic text-[#003366] font-black">Grow Together</span></p>
             </motion.div>

             <motion.div animate={{ y: [0, 15, 0], rotate: [6, 10, 6] }} transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut", delay: 1 }} className="absolute bottom-16 right-[-10px] sm:right-0 bg-white/95 backdrop-blur-2xl p-5 shadow-2xl rounded-2xl z-30 border border-white/60 w-[200px] text-center border-r-4 border-teal-400">
               <ShieldCheck size={26} className="text-teal-500 mx-auto mb-2 opacity-80" />
               <p className="font-bold text-[#1E293B] text-[14px] leading-tight">"A fair and transparent learning space."</p>
             </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 🟢 MAIN CONTENT */}
      <section className="py-16 lg:py-24 relative">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
          
          {/* 🔴 LEFT SIDEBAR (TIMELINE / STEPPER NAV) */}
          <div className="lg:col-span-3 space-y-8">
            <div className="sticky top-12 space-y-8">
              
              <div className="bg-white border border-gray-200/60 p-6 rounded-[2rem] shadow-[0_10px_40px_rgba(0,0,0,0.04)] relative overflow-hidden">
                <h3 className="text-[17px] font-black text-[#0F172A] mb-6">On This Page</h3>
                
                {/* Vertical Timeline Line */}
                <div className="absolute left-[38px] top-[70px] bottom-[30px] w-0.5 bg-gray-100 rounded-full" />

                <div className="space-y-4 relative">
                  {termsData.map((section) => (
                    <a 
                      key={section.id}
                      href={`#term-${section.id}`}
                      onClick={(e) => scrollToSection(e, section.id)}
                      className="relative flex items-center gap-4 text-left group"
                    >
                      {/* Stepper Dot */}
                      <div className="relative z-10 flex items-center justify-center w-8 h-8 rounded-full bg-white border-2 transition-all duration-300 ease-out shrink-0
                        {activeSection === section.id ? 'border-[#0056D2] shadow-[0_0_15px_rgba(0,86,210,0.3)] scale-110' : 'border-gray-200 group-hover:border-gray-400'}"
                        style={{ borderColor: activeSection === section.id ? '#0056D2' : '' }}
                      >
                        {activeSection === section.id ? (
                           <motion.div layoutId="activeDot" className="w-2.5 h-2.5 bg-[#0056D2] rounded-full" />
                        ) : (
                           <div className="w-1.5 h-1.5 bg-gray-300 rounded-full group-hover:bg-gray-400 transition-colors" />
                        )}
                      </div>

                      <span className={`text-[14px] font-bold truncate transition-colors duration-300 ${activeSection === section.id ? 'text-[#0056D2]' : 'text-gray-500 group-hover:text-[#0F172A]'}`}>
                        {section.title}
                      </span>
                    </a>
                  ))}
                </div>
              </div>

              {/* Action Cards */}
              <motion.div whileHover={{ y: -5 }} className="bg-gradient-to-br from-[#003366] to-[#0056D2] rounded-[2rem] p-7 text-center shadow-xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700" />
                <div className="w-14 h-14 bg-white/10 backdrop-blur-md text-white rounded-2xl flex items-center justify-center mx-auto mb-4 border border-white/20 group-hover:scale-110 transition-transform">
                  <Headphones size={24} />
                </div>
                <h4 className="font-black text-white text-[16px] mb-1.5 relative z-10">Have any questions?</h4>
                <p className="text-[13px] text-blue-100 mb-6 relative z-10">We're here to help you understand our terms.</p>
                <Link to="/contact" className="inline-flex items-center justify-center gap-2 w-full py-3.5 bg-white text-[#0056D2] rounded-xl text-[14px] font-black shadow-md hover:shadow-xl hover:bg-gray-50 transition-all relative z-10">
                  Contact Support <ArrowRight size={16} />
                </Link>
              </motion.div>

            </div>
          </div>

          {/* 🔴 RIGHT CONTENT CARDS (PREMIUM DOCUMENT STYLE) */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer} className="lg:col-span-9 space-y-6 lg:space-y-8 relative">
            {termsData.map((section) => (
              <motion.div 
                id={`term-${section.id}`} 
                key={section.id} 
                variants={fadeInUp}
                whileHover={{ y: -4, scale: 1.005 }}
                onMouseEnter={() => setActiveSection(section.id)} 
                className={`bg-white border ${activeSection === section.id ? 'border-[#0056D2] ring-1 ring-[#0056D2]/20 shadow-[0_15px_40px_-10px_rgba(0,86,210,0.15)] -translate-y-1' : 'border-gray-200/80'} p-8 sm:p-10 rounded-[2rem] flex flex-col items-start transition-all duration-300 group cursor-default scroll-mt-28 ${getGlowColor(section.color)} relative overflow-hidden`}
              >
                {/* Subtle Background Pattern on Hover */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:12px_12px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

                <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 w-full relative z-10 mb-5">
                  <div className={`w-14 h-14 rounded-2xl ${getBadgeColor(section.color)} flex items-center justify-center shrink-0 border border-white shadow-sm group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500`}>
                    <section.icon size={26} strokeWidth={2.2} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-1">
                      <span className="text-[12px] font-black text-gray-400 bg-gray-50 border border-gray-100 px-2 py-0.5 rounded-md">SECTION {section.id < 10 ? `0${section.id}` : section.id}</span>
                    </div>
                    <h3 className="text-[22px] font-black text-[#0F172A] group-hover:text-[#0056D2] transition-colors">{section.title}</h3>
                  </div>
                  
                  {/* Premium Copy Link Button */}
                  <button 
                    onClick={() => handleCopy(section.id)}
                    className="hidden sm:flex shrink-0 w-10 h-10 rounded-full bg-gray-50 border border-gray-200 items-center justify-center text-gray-500 hover:bg-[#0056D2] hover:border-[#0056D2] hover:text-white hover:scale-110 hover:shadow-lg hover:shadow-blue-500/30 transition-all"
                    title="Copy link to section"
                  >
                    {copiedId === section.id ? <Check size={18} strokeWidth={2.5} /> : <Link2 size={18} strokeWidth={2} />}
                  </button>
                </div>

                <div className="w-full h-px bg-gray-100 mb-5 group-hover:bg-gray-200 transition-colors"></div>

                <p className="text-[15px] text-gray-600 leading-relaxed font-medium relative z-10 group-hover:text-gray-800 transition-colors w-full">
                  {section.desc}
                </p>

              </motion.div>
            ))}
          </motion.div>

        </div>
      </section>

      {/* 🟢 PREMIUM FLOATING BACK TO TOP BUTTON */}
      <AnimatePresence>
        {showTopBtn && (
          <motion.button
            initial={{ opacity: 0, scale: 0.5, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.5, y: 30 }}
            whileHover={{ scale: 1.15, y: -5 }}
            whileTap={{ scale: 0.9 }}
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 w-14 h-14 bg-[#0F172A] text-white rounded-full flex items-center justify-center shadow-[0_15px_30px_rgba(15,23,42,0.4)] z-50 border-2 border-white/20 hover:bg-[#0056D2] transition-colors duration-300"
            title="Scroll to top"
          >
            <ArrowUp size={26} strokeWidth={2.5} />
          </motion.button>
        )}
      </AnimatePresence>

    </div>
  );
}