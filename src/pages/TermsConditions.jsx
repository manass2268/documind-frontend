import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useSpring } from "framer-motion";
import { 
  FileText, CheckCircle, User, Users, Copyright, 
  AlertTriangle, CreditCard, XCircle, Scale, RefreshCw, 
  Landmark, Mail, ChevronRight, Calendar, Headphones, ArrowRight, ShieldCheck
} from "lucide-react";

export default function TermsConditions() {
  const [activeSection, setActiveSection] = useState(1);
  const [currentDate, setCurrentDate] = useState("");

  // 🟢 Live Scroll Progress Bar
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  useEffect(() => {
    const date = new Date().toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' });
    setCurrentDate(date);
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
    { id: 9, title: "Limitation of Liability", icon: Scale, color: "purple", desc: "DocuMind is provided \"as is\" without warranties of any kind. We are not liable for any indirect, incidental, or consequential damages arising from the use of our Services." },
    { id: 10, title: "Changes to Terms", icon: RefreshCw, color: "emerald", desc: "We may update these Terms from time to time. We will notify you of any significant changes through our website or via email." },
    { id: 11, title: "Governing Law", icon: Landmark, color: "blue", desc: "These Terms are governed by the laws of India. Any disputes shall be subject to the jurisdiction of the courts in New Delhi, India." },
    { id: 12, title: "Contact Us", icon: Mail, color: "pink", desc: "If you have any questions regarding these Terms and Conditions, you can contact us at support.mstech4407@gmail.com." }
  ];

  // 🟢 EXACT SCROLL LOGIC
  const scrollToSection = (e, id) => {
    e.preventDefault();
    setActiveSection(id);
    
    const element = document.getElementById(`term-${id}`);
    if (element) {
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - offset;
  
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
      
      element.classList.add('ring-4', 'ring-blue-400', 'ring-opacity-60', 'scale-[1.02]', 'shadow-2xl', 'z-10');
      setTimeout(() => {
        element.classList.remove('ring-4', 'ring-blue-400', 'ring-opacity-60', 'scale-[1.02]', 'shadow-2xl', 'z-10');
      }, 700);
    }
  };

  // 🟢 Live Scroll Spy
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
      { rootMargin: "-15% 0px -60% 0px" } 
    );

    termsData.forEach((section) => {
      const el = document.getElementById(`term-${section.id}`);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const spr = { type: "spring", stiffness: 100, damping: 15 };
  const fadeInUp = { hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0, transition: spr } };
  const fadeInLeft = { hidden: { opacity: 0, x: -40 }, visible: { opacity: 1, x: 0, transition: spr } };
  const fadeInRight = { hidden: { opacity: 0, x: 40 }, visible: { opacity: 1, x: 0, transition: spr } };
  const staggerContainer = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.1 } } };
  const breatheEffect = { y: [0, -12, 0], rotate: [0, 2, -2, 0], transition: { duration: 6, repeat: Infinity, ease: "easeInOut" } };

  const getColorClasses = (color) => {
    const colors = { blue: "bg-blue-100 text-blue-600 border-blue-200", emerald: "bg-emerald-100 text-emerald-600 border-emerald-200", orange: "bg-orange-100 text-orange-500 border-orange-200", purple: "bg-purple-100 text-purple-600 border-purple-200", red: "bg-red-100 text-red-500 border-red-200", pink: "bg-pink-100 text-pink-500 border-pink-200" };
    return colors[color] || "bg-gray-100 text-gray-600 border-gray-200";
  };
  const getSolidColor = (color) => {
    const colors = { blue: "bg-blue-500", emerald: "bg-emerald-500", orange: "bg-orange-500", purple: "bg-purple-500", red: "bg-red-500", pink: "bg-pink-500" };
    return colors[color] || "bg-gray-500";
  };
  const getHoverGlow = (color) => { 
    const colors = { blue: "hover:shadow-[0_20px_50px_-12px_rgba(37,99,235,0.25)]", emerald: "hover:shadow-[0_20px_50px_-12px_rgba(16,185,129,0.25)]", orange: "hover:shadow-[0_20px_50px_-12px_rgba(249,115,22,0.25)]", purple: "hover:shadow-[0_20px_50px_-12px_rgba(147,51,234,0.25)]", red: "hover:shadow-[0_20px_50px_-12px_rgba(239,68,68,0.25)]", pink: "hover:shadow-[0_20px_50px_-12px_rgba(236,72,153,0.25)]" }; 
    return colors[color] || "hover:shadow-xl"; 
  };

  return (
    <div className="flex flex-col bg-[#F8FAFC] text-[#1E293B] font-sans min-h-screen relative overflow-x-hidden">
      
      {/* 🟢 Scroll Progress Bar */}
      <motion.div style={{ scaleX, transformOrigin: "0% 50%" }} className="fixed top-0 left-0 right-0 h-[5px] bg-gradient-to-r from-blue-400 via-[#0056D2] to-teal-400 z-50 rounded-r-full" />

      {/* 🟢 HERO SECTION */}
      <section className="bg-gradient-to-br from-[#EBF4FF] via-white to-[#F0F7FF] pt-24 pb-20 relative overflow-hidden border-b border-gray-100">
        
        <motion.div animate={{ scale: [1, 1.2, 1], x: [0, 30, 0], opacity: [0.3, 0.6, 0.3] }} transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }} className="absolute -top-20 -left-10 w-[500px] h-[500px] bg-blue-300/30 rounded-full blur-[100px] pointer-events-none" />
        <motion.div animate={{ scale: [1, 1.3, 1], x: [0, -40, 0], opacity: [0.2, 0.5, 0.2] }} transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }} className="absolute top-10 right-[-10%] w-[400px] h-[400px] bg-teal-300/20 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
          
          <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="z-20">
            <motion.div variants={fadeInLeft} className="flex items-center gap-2 mb-5">
              <span className="w-5 h-0.5 bg-gray-400 rounded-full"></span>
              <span className="text-[12px] font-black tracking-widest text-gray-500 uppercase">LEGAL</span>
            </motion.div>
            
            <motion.h1 variants={fadeInLeft} className="text-4xl sm:text-5xl lg:text-[64px] font-black text-[#0F172A] mb-5 leading-[1.05] tracking-tight">
              Terms & <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#003366] to-[#0056D2]">Conditions</span>
            </motion.h1>
            
            <motion.p variants={fadeInLeft} className="text-gray-600 text-sm sm:text-lg leading-relaxed max-w-lg mb-8 font-medium">
              Please read these Terms and Conditions carefully before using DocuMind. By accessing or using our platform, you agree to be bound by these terms.
            </motion.p>
            
            <motion.div variants={fadeInLeft} className="flex flex-wrap items-center gap-3 sm:gap-4 text-[12px] font-bold text-gray-700">
              <motion.div whileHover={{ scale: 1.05 }} className="flex items-center gap-2 bg-white/80 backdrop-blur-sm shadow-md shadow-blue-500/10 px-4 py-2.5 rounded-xl border border-gray-200 cursor-default">
                <Calendar size={16} className="text-[#0056D2]" />
                Last updated: {currentDate}
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} className="flex items-center gap-2 bg-white/80 backdrop-blur-sm shadow-md shadow-blue-500/10 px-4 py-2.5 rounded-xl border border-gray-200 cursor-default">
                <FileText size={16} className="text-[#0056D2]" />
                Version: 2.1
              </motion.div>
            </motion.div>
          </motion.div>

          <motion.div initial="hidden" animate="visible" variants={fadeInRight} className="relative h-[300px] lg:h-[450px] flex items-center justify-center">
            <div className="relative w-full h-full flex items-center justify-center z-10">
               
               {/* 🟢 FIXED: Replaced broken IconScout image with a highly reliable Unsplash Image */}
               <motion.div animate={breatheEffect} whileHover={{ scale: 1.08, rotateY: -10, rotateX: 5 }} transition={{ type: "spring" }} style={{ perspective: 1000 }}>
                 <img 
                    src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=1000&auto=format&fit=crop" 
                    alt="Terms and Conditions Graphic" 
                    className="w-[200px] lg:w-[260px] h-[260px] lg:h-[340px] object-cover rounded-[2rem] drop-shadow-2xl border-4 border-white shadow-[0_30px_60px_rgba(0,30,80,0.3)]" 
                 />
               </motion.div>
               
               <motion.div animate={{ y: [0, -15, 0], rotate: [-6, -10, -6] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }} className="absolute top-8 left-0 sm:left-4 bg-white/90 backdrop-blur-xl p-4 sm:p-5 shadow-2xl rounded-2xl z-30 border border-white/50 w-[180px] text-center border-l-4 border-[#0056D2] group hover:rotate-0 transition-transform">
                 <p className="font-bold text-[#0056D2] text-[15px] sm:text-[17px] font-serif italic leading-tight">
                   Learn Responsibly<br/><span className="not-italic text-[#003366] font-black">Grow Together</span>
                 </p>
               </motion.div>

               <motion.div animate={{ y: [0, 15, 0], rotate: [6, 10, 6] }} transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut", delay: 1 }} className="absolute bottom-16 right-[-20px] sm:right-4 bg-white/90 backdrop-blur-xl p-4 sm:p-5 shadow-2xl rounded-2xl z-30 border border-white/50 w-[180px] text-center border-r-4 border-teal-400 group hover:rotate-0 transition-transform">
                 <ShieldCheck size={24} className="text-teal-500 mx-auto mb-2 opacity-50 group-hover:opacity-100 group-hover:scale-110 transition-all" />
                 <p className="font-bold text-[#1E293B] text-[13px] leading-tight">
                   "A fair and transparent learning space for everyone."
                 </p>
               </motion.div>
            </div>
          </motion.div>

        </div>
      </section>

      {/* 🟢 MAIN CONTENT */}
      <section className="py-12 lg:py-24">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          
          {/* 🔴 LEFT SIDEBAR */}
          <div className="lg:col-span-3 space-y-6 lg:space-y-8">
            <div className="sticky top-12 space-y-6 lg:space-y-8">
              
              <div className="bg-white border border-gray-200/80 p-4 rounded-[1.5rem] shadow-[0_10px_30px_rgba(0,0,0,0.03)]">
                <h3 className="text-[16px] font-black text-[#0F172A] mb-3 px-2">On This Page</h3>
                <div className="space-y-1 relative">
                  {termsData.map((section) => (
                    <a 
                      key={section.id}
                      href={`#term-${section.id}`}
                      onClick={(e) => scrollToSection(e, section.id)}
                      className="w-full relative flex items-center gap-3.5 px-3 py-3 rounded-xl text-[13px] font-bold text-left group z-10 block overflow-hidden"
                    >
                      {activeSection === section.id && (
                        <motion.div layoutId="activeTermBg" className="absolute inset-0 bg-blue-50 border border-blue-100 rounded-xl -z-10" transition={{ type: "spring", stiffness: 300, damping: 30 }} />
                      )}
                      <section.icon size={16} strokeWidth={2.2} className={`relative z-10 shrink-0 transition-transform duration-300 group-hover:scale-110 ${activeSection === section.id ? 'text-[#0056D2]' : 'text-gray-400 group-hover:text-gray-700'}`} />
                      <span className={`relative z-10 truncate transition-colors ${activeSection === section.id ? 'text-[#0056D2]' : 'text-gray-500 group-hover:text-gray-900'}`}>
                        {section.id}. {section.title}
                      </span>
                    </a>
                  ))}
                </div>
              </div>

              <motion.div whileHover={{ y: -5 }} className="bg-gradient-to-br from-[#F8FAFC] to-[#F1F5F9] border border-blue-100 rounded-[1.5rem] p-6 shadow-md text-center group relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-blue-200/40 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700" />
                <div className="w-12 h-12 bg-white text-blue-600 rounded-xl flex items-center justify-center mx-auto mb-3 border border-blue-100 shadow-sm group-hover:scale-110 transition-transform">
                  <Headphones size={22} />
                </div>
                <h4 className="font-black text-[#1E293B] text-sm mb-1 relative z-10">Have any questions?</h4>
                <p className="text-[12px] text-gray-500 mb-5 leading-tight relative z-10">We're here to help you understand our terms.</p>
                <Link to="/contact" className="inline-flex items-center justify-center gap-2 w-full py-2.5 bg-white border border-blue-200 text-[#0056D2] rounded-xl text-[13px] font-black shadow-sm hover:shadow-md hover:bg-blue-50 transition-all relative z-10 group-hover:gap-3">
                  Contact Us <ArrowRight size={16} />
                </Link>
              </motion.div>

              <motion.div whileHover={{ y: -5 }} className="bg-gradient-to-br from-teal-50 to-emerald-100 rounded-[1.5rem] p-6 relative overflow-hidden border border-teal-200 shadow-md group">
                <h4 className="font-black text-[#003366] text-[18px] leading-[1.2] relative z-10 mb-5 group-hover:translate-x-1 transition-transform">
                  Building a <br/> Responsible <br/> Learning Future
                </h4>
                <ul className="space-y-2 text-[12px] font-extrabold text-[#0F172A] relative z-10">
                  <li className="flex items-center gap-2"><ShieldCheck size={16} className="text-teal-600"/> Fair policies.</li>
                  <li className="flex items-center gap-2"><ShieldCheck size={16} className="text-teal-600"/> Inclusive access.</li>
                  <li className="flex items-center gap-2"><ShieldCheck size={16} className="text-teal-600"/> A safer digital India.</li>
                </ul>
                <div className="absolute -bottom-6 -right-6 w-36 h-36 opacity-30 group-hover:rotate-12 group-hover:scale-110 transition-transform duration-500">
                  <img src="https://cdn-icons-png.flaticon.com/512/628/628283.png" alt="Leaves" className="w-full h-full object-contain filter drop-shadow-md" />
                </div>
              </motion.div>

            </div>
          </div>

          {/* 🔴 RIGHT CONTENT CARDS */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer} className="lg:col-span-9 space-y-4 lg:space-y-5 relative">
            {termsData.map((section) => (
              <motion.div 
                id={`term-${section.id}`} 
                key={section.id} 
                variants={fadeInUp}
                whileHover={{ y: -6, scale: 1.01 }}
                onMouseEnter={() => setActiveSection(section.id)} 
                className={`bg-white border ${activeSection === section.id ? 'border-blue-400 ring-1 ring-blue-100 shadow-[0_15px_40px_-10px_rgba(0,86,210,0.12)]' : 'border-gray-200'} p-6 sm:p-7 rounded-[1.5rem] flex items-start gap-4 sm:gap-6 transition-all duration-300 group cursor-default scroll-mt-24 ${getHoverGlow(section.color)}`}
              >
                
                <div className="flex items-center gap-3 shrink-0 pt-1">
                  <div className={`w-8 h-8 rounded-full ${getSolidColor(section.color)} text-white flex items-center justify-center text-[13px] font-black shadow-md group-hover:scale-110 group-hover:rotate-12 transition-transform`}>
                    {section.id}
                  </div>
                  <div className={`w-11 h-11 rounded-xl ${getColorClasses(section.color)} flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform`}>
                    <section.icon size={22} strokeWidth={2} />
                  </div>
                </div>

                <div className="flex-1">
                  <h3 className="text-[18px] font-black text-[#0F172A] mb-2 group-hover:text-[#0056D2] transition-colors">{section.title}</h3>
                  <p className="text-[14px] text-gray-600 leading-relaxed font-medium group-hover:text-gray-800 transition-colors">{section.desc}</p>
                </div>

                <div className="hidden sm:flex shrink-0 pt-2 text-gray-300 group-hover:text-blue-500 group-hover:translate-x-1.5 transition-all">
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