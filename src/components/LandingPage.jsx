import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { User, BarChart2, BookOpen, FileText, ArrowRight, Settings, BookMarked, ChevronRight } from "lucide-react";
import ashokaLogo from "../assets/ashoka.png";

export default function LandingPage() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };
  const fadeInLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };
  const fadeInRight = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <div className="flex flex-col bg-white text-[#333333] font-sans overflow-x-hidden relative">
      
      {/* 🟢 RESPONSIVE HERO SECTION */}
      <main id="main-content" className="relative bg-gradient-to-r from-[#F4F7F9] to-white border-b border-gray-200 overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-center relative z-10">
          
          {/* Left Text Side */}
          <motion.div variants={fadeInLeft} initial="hidden" animate="visible" className="flex flex-col z-20 text-center lg:text-left items-center lg:items-start pt-4 lg:pt-0">
            <div className="flex items-center gap-2 mb-3 lg:mb-4">
              <div className="w-1 h-3 bg-[#0A4275]"></div>
              <span className="text-[10px] sm:text-[11px] font-bold text-gray-500 uppercase tracking-widest">Smart India Hackathon 2026</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[56px] font-extrabold text-[#0A4275] mb-2 sm:mb-3 tracking-tight leading-none">
              DocuMind
            </h1>
            <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-[#1E293B] mb-4 sm:mb-5 leading-snug">
              AI-Powered Competency & <br className="hidden sm:block lg:hidden xl:block"/>Learning Intelligence
            </h2>
            
            <p className="text-gray-600 text-xs sm:text-sm leading-relaxed mb-6 lg:mb-8 max-w-md font-medium px-2 sm:px-0">
              Supporting a skilled and future-ready statistical workforce through competency assessment and personalized learning.
            </p>

            <div className="flex flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4 w-full sm:w-auto">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="w-1/2 sm:w-auto">
                <Link to="/login" className="bg-[#0056D2] hover:bg-blue-700 text-white px-4 sm:px-6 py-2.5 sm:py-3 text-[11px] sm:text-sm font-semibold transition-colors flex items-center justify-center gap-1.5 sm:gap-2 rounded-sm shadow-[0_4px_14px_0_rgba(0,86,210,0.39)] w-full">
                  Access DocuMind <ArrowRight size={14} className="sm:w-4 sm:h-4" />
                </Link>
              </motion.div>
              <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="w-1/2 sm:w-auto bg-white text-[#0A4275] border border-[#0A4275] px-4 sm:px-6 py-2.5 sm:py-3 text-[11px] sm:text-sm font-semibold hover:bg-blue-50 transition-colors rounded-sm shadow-sm">
                Learn More
              </motion.button>
            </div>
          </motion.div>

          {/* Right Image Side (Scaled for Mobile) */}
          <motion.div variants={fadeInRight} initial="hidden" animate="visible" className="relative w-full h-[250px] sm:h-[300px] lg:h-[400px] flex items-center justify-center lg:justify-end mt-4 lg:mt-0">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1587474260584-136574528ed5?q=80&w=1200&auto=format&fit=crop')] bg-cover bg-center [mask-image:linear-gradient(to_top,white_10%,transparent_100%)] lg:[mask-image:linear-gradient(to_left,white_50%,transparent_100%)] opacity-80 lg:opacity-90 z-0 rounded-lg lg:rounded-none lg:right-[-100px]"></div>
            
            <motion.div 
              animate={{ y: [0, -5, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} 
              className="relative z-10 bg-white/90 backdrop-blur-md p-3 sm:p-5 border-l-2 border-[#0A4275] shadow-xl mt-auto mb-4 lg:mb-32 mx-auto lg:mr-20 lg:ml-0"
            >
              <h3 className="text-sm sm:text-xl lg:text-2xl font-bold text-[#0A4275] mb-1 sm:mb-2 leading-tight">Data<br/>for a Stronger<br/>India</h3>
              <div className="w-8 sm:w-12 h-0.5 sm:h-1 bg-gradient-to-r from-orange-500 via-white to-green-600 rounded-full"></div>
            </motion.div>
          </motion.div>
        </div>
      </main>

      {/* 🟢 RESPONSIVE EXPLORE CARDS */}
      <section className="py-12 sm:py-16 bg-[#F8FAFC]">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          
          <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="flex flex-col items-center justify-center mb-8 sm:mb-12 text-center">
            <h3 className="text-lg sm:text-xl font-bold text-[#0A4275] bg-[#F8FAFC] px-4 py-1 relative z-10">Explore DocuMind</h3>
            <div className="w-24 sm:w-32 h-px bg-gray-300 -mt-3.5 z-0"></div>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {[
              { icon: User, title: "For Employees", desc: "Assess skills, explore resources", link: "/login" },
              { icon: BarChart2, title: "For Departments", desc: "Identify gaps, build capacity", link: "/login" },
              { icon: BookOpen, title: "Learning Resources", desc: "Access curated courses", link: "/login" },
              { icon: FileText, title: "About Platform", desc: "Know DocuMind's objectives", link: "/about" }
            ].map((item, idx) => (
              <motion.div key={idx} variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ delay: idx * 0.1 }}>
                <Link to={item.link} className="bg-white border border-gray-100 shadow-sm rounded-lg p-4 sm:p-5 flex items-center justify-between group cursor-pointer hover:shadow-md transition-all hover:border-blue-100 block">
                  <div className="flex items-center gap-3 sm:gap-4">
                    <div className="bg-gradient-to-br from-blue-50 to-white w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center text-[#0A4275] group-hover:bg-[#0A4275] group-hover:text-white transition-all shadow-inner shrink-0">
                      <item.icon size={16} className="sm:w-[18px] sm:h-[18px]" />
                    </div>
                    <div>
                      <h4 className="font-bold text-[#333333] text-[12px] sm:text-[13px] mb-0.5 group-hover:text-[#0A4275] transition-colors">{item.title}</h4>
                      <p className="text-[10px] sm:text-[11px] text-gray-500 leading-snug">{item.desc}</p>
                    </div>
                  </div>
                  <ChevronRight size={14} className="text-blue-400 group-hover:translate-x-1 transition-transform sm:w-4 sm:h-4 shrink-0" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 🟢 RESPONSIVE ECOSYSTEM STRIP */}
      <section className="py-4 sm:py-6 bg-white border-t border-gray-100 shadow-[0_-5px_15px_rgba(0,0,0,0.02)]">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-between gap-4 lg:gap-0">
          
          <h4 className="text-[11px] sm:text-sm font-bold text-[#0A4275] uppercase tracking-wider lg:normal-case lg:tracking-normal text-center lg:text-left">Our Government Ecosystem</h4>
          
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 lg:gap-16">
            <motion.div whileHover={{ scale: 1.05 }} className="flex items-center gap-1.5 sm:gap-2 cursor-pointer">
              <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-orange-100 flex items-center justify-center text-orange-500"><Settings size={14} className="sm:w-[18px] sm:h-[18px]"/></div>
              <span className="font-bold text-gray-800 text-[11px] sm:text-sm tracking-tight">iGOT <span className="font-normal text-gray-600 hidden sm:inline">Karmayogi</span></span>
            </motion.div>
            
            <div className="hidden sm:block w-px h-6 sm:h-8 bg-gray-200"></div>

            <motion.div whileHover={{ scale: 1.05 }} className="flex items-center gap-1.5 sm:gap-2 cursor-pointer">
              <img src={ashokaLogo} alt="MoSPI" className="h-6 sm:h-8 object-contain opacity-70" />
              <span className="font-bold text-[#0A4275] text-[11px] sm:text-sm">MoSPI</span>
            </motion.div>

            <div className="hidden sm:block w-px h-6 sm:h-8 bg-gray-200"></div>

            <motion.div whileHover={{ scale: 1.05 }} className="flex items-center gap-1.5 sm:gap-2 text-blue-700 cursor-pointer">
              <BookMarked size={18} className="sm:w-6 sm:h-6"/>
              <span className="font-bold text-[11px] sm:text-sm">NSSTA</span>
            </motion.div>

            <div className="hidden sm:block w-px h-6 sm:h-8 bg-gray-200"></div>

            <motion.div whileHover={{ scale: 1.05 }} className="flex items-center gap-1.5 sm:gap-2 cursor-pointer">
              <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-green-100 border border-green-200 flex items-center justify-center font-bold text-green-700 text-[9px] sm:text-xs shadow-sm">DI</div>
              <div className="hidden sm:flex flex-col text-[10px] font-bold text-gray-700 leading-none">
                <span className="text-[#0A4275] text-xs sm:text-sm">Digital India</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}