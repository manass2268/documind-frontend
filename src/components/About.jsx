import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Eye, Target, Users, BarChart2, BookOpen, Cpu, TrendingUp, UserCheck, Clock, Database, Star, Award, Quote } from "lucide-react";

export default function About() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };
  const fadeInLeft = {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };
  const fadeInRight = {
    hidden: { opacity: 0, x: 30 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };

  return (
    <div className="flex flex-col bg-white text-[#333333] font-sans overflow-x-hidden relative">
      
      {/* 🟢 BREADCRUMB */}
      <div className="bg-[#F8FAFC] border-b border-gray-200">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-2 text-[10px] sm:text-[11px] font-semibold text-gray-500 whitespace-nowrap overflow-x-auto scrollbar-hide">
          <Link to="/" className="hover:text-[#0A4275] transition-colors">Home</Link>
          <span className="mx-1.5 sm:mx-2 text-gray-400">&gt;</span>
          <span className="text-[#0A4275]">About Us</span>
        </div>
      </div>

      <main id="main-content" className="flex-1 bg-white scroll-mt-20">
        
        {/* 🟢 HERO SECTION */}
        <section className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            
            <motion.div variants={fadeInLeft} initial="hidden" whileInView="visible" viewport={{ once: true }} className="flex flex-col z-20 order-2 lg:order-1 mt-6 lg:mt-0">
              <span className="text-[#0056D2] font-bold text-[10px] sm:text-xs uppercase tracking-widest mb-2 sm:mb-3">About DocuMind</span>
              <h1 className="text-3xl sm:text-4xl md:text-[44px] font-extrabold text-[#003366] mb-4 sm:mb-5 tracking-tight leading-tight">
                Empowering India's <br className="hidden sm:block"/>Statistical Workforce
              </h1>
              <div className="border-l-4 border-[#0056D2] pl-3 sm:pl-4 mb-4 sm:mb-6">
                <h2 className="text-[14px] sm:text-[16px] font-bold text-[#0056D2] leading-snug">An AI-driven approach to competency mapping and capacity building.</h2>
              </div>
              <p className="text-gray-600 text-[13px] sm:text-[14px] leading-relaxed font-medium text-justify mb-6 sm:mb-8 max-w-lg">
                DocuMind is a conceptual prototype developed for the Smart India Hackathon (SIH 2026) to serve as a unified digital platform designed specifically for the Ministry of Statistics and Programme Implementation (MoSPI). It aims to address the evolving skill requirements of the government's statistical ecosystem through AI-enabled competency assessment and personalized learning.
              </p>
              <div className="flex items-center gap-3 sm:gap-4 flex-wrap sm:flex-nowrap">
                <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="w-full sm:w-auto bg-[#0056D2] hover:bg-blue-700 text-white px-5 sm:px-6 py-2.5 text-xs sm:text-sm font-semibold transition-colors flex items-center justify-center gap-2 rounded-sm shadow-[0_4px_14px_0_rgba(0,86,210,0.39)]">
                  Our Vision <ArrowRight size={14} className="sm:w-4 sm:h-4" />
                </motion.button>
                <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="w-full sm:w-auto bg-white text-[#0A4275] border border-gray-300 px-5 sm:px-6 py-2.5 text-xs sm:text-sm font-semibold hover:bg-gray-50 transition-colors rounded-sm shadow-sm">
                  How It Works
                </motion.button>
              </div>
            </motion.div>

            {/* Collage Container Mobile Fix */}
            <motion.div variants={fadeInRight} initial="hidden" whileInView="visible" viewport={{ once: true }} className="relative w-full h-[280px] sm:h-[400px] lg:h-[450px] flex items-center justify-center mt-4 lg:mt-0 order-1 lg:order-2">
              <div className="absolute top-0 right-0 sm:top-4 sm:right-10 w-[80%] sm:w-2/3 h-[90%] sm:h-full bg-gradient-to-br from-[#EBF3FB] to-[#D6E6F5] rounded-tl-[60px] sm:rounded-tl-[100px] rounded-br-[60px] sm:rounded-br-[100px] z-0"></div>
              
              <motion.div whileHover={{ scale: 1.02, rotate: 1 }} className="absolute top-0 right-0 sm:right-4 lg:right-0 w-[80%] sm:w-3/4 h-[180px] sm:h-[280px] lg:h-[320px] bg-[url('https://images.unsplash.com/photo-1587474260584-136574528ed5?q=80&w=800&auto=format&fit=crop')] bg-cover bg-center rounded-lg shadow-xl z-10 border border-white/50"></motion.div>
              
              <motion.div animate={{ y: [0, -5, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} className="absolute top-4 sm:top-10 left-0 sm:left-4 bg-white/90 backdrop-blur-md p-2 sm:p-4 shadow-2xl rounded-md z-30 border border-gray-100 max-w-[140px] sm:max-w-none">
                <p className="font-bold text-[#003366] text-[10px] sm:text-sm leading-tight sm:leading-snug mb-1 sm:mb-2">"Better Data<br/>Stronger Policies<br/>A Developed India"</p>
                <div className="flex gap-1"><div className="w-2 sm:w-4 h-0.5 sm:h-1 bg-[#FF9933]"></div><div className="w-2 sm:w-4 h-0.5 sm:h-1 bg-gray-300"></div><div className="w-2 sm:w-4 h-0.5 sm:h-1 bg-[#138808]"></div></div>
              </motion.div>
              
              <motion.div whileHover={{ scale: 1.05, zIndex: 40 }} className="absolute bottom-4 sm:bottom-8 left-4 sm:left-10 w-[70%] sm:w-[60%] h-[120px] sm:h-[200px] lg:h-[220px] bg-[url('https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=800&auto=format&fit=crop')] bg-cover bg-center rounded-lg shadow-[0_20px_50px_rgba(0,0,0,0.3)] z-20 border-2 sm:border-4 border-white flex flex-col justify-end overflow-hidden cursor-pointer">
                <div className="bg-gradient-to-t from-black/90 to-transparent p-2 sm:p-4 pt-6 sm:pt-10">
                  <p className="text-white text-[9px] sm:text-xs font-semibold leading-tight sm:leading-snug w-full sm:w-3/4 drop-shadow-md">Building Capabilities for a Data-Driven India</p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* 🟢 VISION, MISSION, VALUES */}
        <section className="bg-gradient-to-b from-[#F8FAFC] to-white py-12 sm:py-16 border-t border-gray-100 relative overflow-hidden">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
              {[
                { icon: Eye, title: "Our Vision", desc: "A skilled, capable and future-ready statistical workforce contributing to a data-driven India." },
                { icon: Target, title: "Our Mission", desc: "To empower government employees with competency-driven learning through AI-enabled insights and accessible resources." }
              ].map((item, idx) => (
                <motion.div key={idx} variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ delay: idx * 0.1 }} whileHover={{ y: -5 }} className="bg-white p-6 sm:p-8 rounded-xl shadow-sm border border-gray-100 flex flex-col items-start transition-all duration-300">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-blue-50 to-blue-100 rounded-full flex items-center justify-center text-[#0056D2] mb-4 sm:mb-5 shadow-inner shrink-0">
                    <item.icon size={20} className="sm:w-6 sm:h-6" />
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-[#003366] mb-2 sm:mb-3">{item.title}</h3>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}

              <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ delay: 0.2 }} whileHover={{ y: -5 }} className="bg-white p-6 sm:p-8 rounded-xl shadow-sm border border-gray-100 flex flex-col items-start transition-all duration-300">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-blue-50 to-blue-100 rounded-full flex items-center justify-center text-[#0056D2] mb-4 sm:mb-5 shadow-inner shrink-0"><Users size={20} className="sm:w-6 sm:h-6" /></div>
                <h3 className="text-base sm:text-lg font-bold text-[#003366] mb-2 sm:mb-3">Our Values</h3>
                <ul className="text-xs sm:text-sm text-gray-600 leading-relaxed space-y-1 sm:space-y-1.5 list-disc pl-4">
                  <li>People-Centric</li><li>Evidence-Based</li><li>Innovative</li><li>Inclusive</li><li>Committed to Public Good</li>
                </ul>
              </motion.div>
            </div>
          </div>
        </section>

        {/* 🟢 STRATEGIC OBJECTIVES */}
        <section className="py-12 sm:py-16 bg-white">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-8 sm:mb-12">
              <h3 className="text-xl sm:text-[22px] font-extrabold text-[#003366]">Strategic Objectives</h3>
            </motion.div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {[
                { icon: BarChart2, title: "Competency Mapping", desc: "Enable role-based assessment across domains." },
                { icon: BookOpen, title: "Skill Gap Analysis", desc: "Identify gaps using data-driven insights." },
                { icon: Cpu, title: "AI-Driven Learning", desc: "Provide personalized recommendations." },
                { icon: TrendingUp, title: "Continuous Growth", desc: "Support an efficient statistical ecosystem." }
              ].map((item, index) => (
                <motion.div key={index} variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ delay: index * 0.1 }} className="border border-gray-200 p-5 sm:p-6 rounded-lg shadow-sm bg-white hover:shadow-md transition-shadow">
                  <div className="bg-gradient-to-br from-blue-50 to-white border border-blue-100 w-8 h-8 sm:w-10 sm:h-10 rounded-md flex items-center justify-center text-[#0056D2] mb-3 sm:mb-4 shadow-sm shrink-0">
                    <item.icon size={16} className="sm:w-5 sm:h-5" />
                  </div>
                  <h4 className="font-bold text-[#1E293B] text-[13px] sm:text-[15px] mb-1.5 sm:mb-2">{item.title}</h4>
                  <p className="text-[11px] sm:text-[13px] text-gray-500 leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 🟢 OUR IMPACT */}
        <section className="bg-[#F8FAFC] py-8 sm:py-10 border-t border-b border-gray-100">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-10">
              <div className="lg:w-1/3 text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start gap-2 sm:gap-3 mb-2 sm:mb-3">
                  <div className="hidden lg:block w-1.5 h-6 bg-gradient-to-b from-[#0056D2] to-[#003366] rounded-full"></div>
                  <h3 className="text-base sm:text-[18px] font-bold text-[#003366]">Our Impact (Vision for Future)</h3>
                </div>
                <p className="text-[11px] sm:text-[13px] text-gray-600 leading-relaxed lg:pl-4 max-w-md mx-auto lg:mx-0">DocuMind aspires to contribute towards a more skilled, data-informed and efficient government workforce.</p>
              </div>
              
              <div className="lg:w-2/3 grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-4 w-full">
                {[
                  { icon: UserCheck, text: "Skilled\nWorkforce" },
                  { icon: Clock, text: "Improved\nEfficiency" },
                  { icon: Database, text: "Better Data\nGovernance" },
                  { icon: Star, text: "Stronger\nPolicy Outcomes" }
                ].map((item, idx) => (
                  <div key={idx} className="flex flex-col items-center text-center">
                    <item.icon className="text-[#0056D2] mb-1.5 sm:mb-2 w-6 h-6 sm:w-7 sm:h-7" />
                    <span className="text-[10px] sm:text-xs font-semibold text-gray-700 whitespace-pre-line">{item.text}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* 🟢 DEVELOPER SECTION (Mobile Flow Fixed) */}
        <section className="py-12 sm:py-20 bg-white relative">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="flex flex-col items-center mb-8 sm:mb-10 text-center">
              <span className="text-[#0056D2] font-bold text-[10px] sm:text-xs uppercase tracking-widest mb-1">Conceptualized & Built By</span>
              <h3 className="text-xl sm:text-[24px] font-extrabold text-[#003366]">The Developer</h3>
            </motion.div>
            
            <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="max-w-4xl mx-auto bg-white border border-gray-200 shadow-xl rounded-xl flex flex-col md:flex-row relative overflow-hidden">
              
              {/* Left Dark Block */}
              <div className="w-full md:w-1/3 bg-gradient-to-br from-[#00172D] to-[#003366] p-6 sm:p-8 flex flex-col items-center justify-center text-center relative">
                <div className="absolute top-0 right-0 w-24 h-24 sm:w-32 sm:h-32 bg-white opacity-5 rounded-full blur-2xl transform translate-x-10 -translate-y-10"></div>
                <div className="w-20 h-20 sm:w-24 sm:h-24 bg-white/10 border border-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white text-2xl sm:text-3xl font-black mb-3 sm:mb-4 shadow-[0_0_15px_rgba(255,255,255,0.1)]">MS</div>
                <h4 className="text-lg sm:text-xl font-bold text-white tracking-wide">Manas Singh</h4>
                <p className="text-[#FF9933] text-[9px] sm:text-[10px] font-bold uppercase tracking-widest mt-1">Lead Developer</p>
              </div>
              
              {/* Right Content */}
              <div className="w-full md:w-2/3 p-6 sm:p-8 lg:pr-[200px] flex flex-col justify-center relative bg-white">
                <div className="flex items-center gap-1.5 sm:gap-2 mb-3 sm:mb-4">
                  <Award className="text-[#0056D2] w-4 h-4 sm:w-[18px] sm:h-[18px]" />
                  <p className="text-xs sm:text-sm font-bold text-[#003366]">Smart India Hackathon 2026 Participant</p>
                </div>
                <p className="text-[11px] sm:text-[13px] text-gray-600 leading-relaxed mb-5 sm:mb-6 font-medium">Passionate about building meaningful, scalable and accessible digital solutions. DocuMind is a step towards leveraging technology for public service and skill development in India's statistical ecosystem.</p>
                
                <div className="mb-2 sm:mb-4">
                  <h5 className="text-[9px] sm:text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-1.5 sm:mb-2">Core Interests</h5>
                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    {["Web Development", "AI & Data", "Public Systems", "Open Source"].map((skill, i) => (
                      <span key={i} className="px-2 sm:px-3 py-1 bg-[#F8FAFC] border border-gray-200 text-[#0056D2] text-[9px] sm:text-[11px] font-semibold rounded-md">{skill}</span>
                    ))}
                  </div>
                </div>

                {/* Floating Quote Box (Hidden on mobile, block on Desktop) */}
                <div className="hidden lg:block absolute right-[-40px] top-1/2 -translate-y-1/2 bg-white border border-gray-100 shadow-[0_10px_40px_rgba(0,0,0,0.1)] p-5 rounded-lg w-[200px] z-20">
                  <Quote className="text-[#0056D2] opacity-30 mb-2" size={24} />
                  <p className="text-xs text-gray-700 italic leading-relaxed font-medium">"Technology works best when it empowers people."</p>
                  <div className="w-6 h-0.5 bg-gradient-to-r from-[#FF9933] to-[#138808] mt-3 rounded-full"></div>
                </div>
              </div>

            </motion.div>
          </div>
        </section>

      </main>
    </div>
  );
}