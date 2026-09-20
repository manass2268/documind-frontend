import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Eye, Target, Users, BarChart2, BookOpen, Cpu, TrendingUp, UserCheck, Clock, Database, Star, Award, Quote } from "lucide-react";

export default function About() {
  
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
      
      {/* 🔴 HEADER REMOVED: Managed globally by App.jsx */}

      {/* 🟢 BREADCRUMB */}
      <div className="bg-[#F8FAFC] border-b border-gray-200">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-8 py-2 text-[11px] font-semibold text-gray-500">
          <Link to="/" className="hover:text-[#0A4275] transition-colors">Home</Link>
          <span className="mx-2 text-gray-400">&gt;</span>
          <span className="text-[#0A4275]">About Us</span>
        </div>
      </div>

      {/* 🟢 MAIN PAGE CONTENT */}
      <main id="main-content" className="flex-1 bg-white scroll-mt-20">
        
        {/* HERO SECTION */}
        <section className="max-w-[1400px] mx-auto px-4 sm:px-8 py-14 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div variants={fadeInLeft} initial="hidden" whileInView="visible" viewport={{ once: true }} className="flex flex-col z-20">
              <span className="text-[#0056D2] font-bold text-xs uppercase tracking-widest mb-3">About DocuMind</span>
              <h1 className="text-4xl md:text-[44px] font-extrabold text-[#003366] mb-5 tracking-tight leading-tight">Empowering India's <br/>Statistical Workforce</h1>
              <div className="border-l-4 border-[#0056D2] pl-4 mb-6">
                <h2 className="text-[16px] font-bold text-[#0056D2] leading-snug">An AI-driven approach to competency mapping and capacity building.</h2>
              </div>
              <p className="text-gray-600 text-[14px] leading-relaxed font-medium text-justify mb-8 max-w-lg">
                DocuMind is a conceptual prototype developed for the Smart India Hackathon (SIH 2026) to serve as a unified digital platform designed specifically for the Ministry of Statistics and Programme Implementation (MoSPI). It aims to address the evolving skill requirements of the government's statistical ecosystem through AI-enabled competency assessment and personalized learning.
              </p>
              <div className="flex items-center gap-4">
                <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="bg-[#0056D2] hover:bg-blue-700 text-white px-6 py-2.5 text-sm font-semibold transition-colors flex items-center justify-center gap-2 rounded-sm shadow-[0_4px_14px_0_rgba(0,86,210,0.39)]">Our Vision <ArrowRight size={16} /></motion.button>
                <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="bg-white text-[#0A4275] border border-gray-300 px-6 py-2.5 text-sm font-semibold hover:bg-gray-50 transition-colors rounded-sm shadow-sm">How It Works</motion.button>
              </div>
            </motion.div>

            <motion.div variants={fadeInRight} initial="hidden" whileInView="visible" viewport={{ once: true }} className="relative w-full h-[450px] flex items-center justify-center mt-8 lg:mt-0">
              <div className="absolute top-4 right-10 w-2/3 h-full bg-gradient-to-br from-[#EBF3FB] to-[#D6E6F5] rounded-tl-[100px] rounded-br-[100px] z-0"></div>
              <motion.div whileHover={{ scale: 1.02, rotate: 1 }} transition={{ type: "spring", stiffness: 300 }} className="absolute top-0 right-0 w-3/4 h-[320px] bg-[url('https://images.unsplash.com/photo-1587474260584-136574528ed5?q=80&w=800&auto=format&fit=crop')] bg-cover bg-center rounded-lg shadow-xl z-10 border border-white/50"></motion.div>
              <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} className="absolute top-10 left-4 bg-white/90 backdrop-blur-md p-4 shadow-2xl rounded-md z-30 border border-gray-100">
                <p className="font-bold text-[#003366] text-sm leading-snug mb-2">"Better Data<br/>Stronger Policies<br/>A Developed India"</p>
                <div className="flex gap-1"><div className="w-4 h-1 bg-[#FF9933]"></div><div className="w-4 h-1 bg-gray-300"></div><div className="w-4 h-1 bg-[#138808]"></div></div>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05, zIndex: 40 }} transition={{ type: "spring", stiffness: 300 }} className="absolute bottom-8 left-10 w-[60%] h-[220px] bg-[url('https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=800&auto=format&fit=crop')] bg-cover bg-center rounded-lg shadow-[0_20px_50px_rgba(0,0,0,0.3)] z-20 border-4 border-white flex flex-col justify-end overflow-hidden cursor-pointer">
                <div className="bg-gradient-to-t from-black/90 to-transparent p-4 pt-10"><p className="text-white text-xs font-semibold leading-snug w-3/4 drop-shadow-md">Building Capabilities for a Data-Driven India</p></div>
              </motion.div>
              <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }} className="absolute bottom-16 right-[-10px] bg-white/90 backdrop-blur-md p-3 shadow-2xl rounded-md z-30 border border-gray-100">
                <p className="font-bold text-[#003366] text-xs leading-tight mb-1.5">Data<br/>People<br/>Progress</p>
                <div className="flex gap-0.5"><div className="w-3 h-0.5 bg-[#FF9933]"></div><div className="w-3 h-0.5 bg-gray-300"></div><div className="w-3 h-0.5 bg-[#138808]"></div></div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* VISION, MISSION, VALUES */}
        <section className="bg-gradient-to-b from-[#F8FAFC] to-white py-16 border-t border-gray-100 relative overflow-hidden">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} whileHover={{ y: -10, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }} className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 flex flex-col items-start transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-50 to-blue-100 rounded-full flex items-center justify-center text-[#0056D2] mb-5 shadow-inner"><Eye size={24} /></div>
                <h3 className="text-lg font-bold text-[#003366] mb-3">Our Vision</h3>
                <p className="text-sm text-gray-600 leading-relaxed">A skilled, capable and future-ready statistical workforce contributing to a data-driven India.</p>
              </motion.div>
              <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ delay: 0.1 }} whileHover={{ y: -10, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }} className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 flex flex-col items-start transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-50 to-blue-100 rounded-full flex items-center justify-center text-[#0056D2] mb-5 shadow-inner"><Target size={24} /></div>
                <h3 className="text-lg font-bold text-[#003366] mb-3">Our Mission</h3>
                <p className="text-sm text-gray-600 leading-relaxed">To empower government employees with competency-driven learning through AI-enabled insights and accessible resources.</p>
              </motion.div>
              <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ delay: 0.2 }} whileHover={{ y: -10, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }} className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 flex flex-col items-start transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-50 to-blue-100 rounded-full flex items-center justify-center text-[#0056D2] mb-5 shadow-inner"><Users size={24} /></div>
                <h3 className="text-lg font-bold text-[#003366] mb-3">Our Values</h3>
                <ul className="text-sm text-gray-600 leading-relaxed space-y-1.5 list-disc pl-4">
                  <li>People-Centric</li><li>Evidence-Based</li><li>Innovative</li><li>Inclusive</li><li>Committed to Public Good</li>
                </ul>
              </motion.div>
            </div>
          </div>
        </section>

        {/* STRATEGIC OBJECTIVES */}
        <section className="py-16 bg-white">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-8">
            <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-12">
              <h3 className="text-[22px] font-extrabold text-[#003366]">Strategic Objectives</h3>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: BarChart2, title: "Competency Mapping", desc: "Enable role-based assessment across statistical and technical domains." },
                { icon: BookOpen, title: "Skill Gap Analysis", desc: "Identify skill gaps using data-driven insights." },
                { icon: Cpu, title: "AI-Driven Learning", desc: "Provide personalized learning recommendations and resources." },
                { icon: TrendingUp, title: "Continuous Growth", desc: "Support a future-ready and efficient statistical ecosystem." }
              ].map((item, index) => (
                <motion.div key={index} variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ delay: index * 0.1 }} whileHover={{ scale: 1.03, borderColor: "#0056D2" }} className="border border-gray-200 p-6 rounded-lg shadow-sm bg-white hover:shadow-xl transition-all duration-300 cursor-default">
                  <div className="bg-gradient-to-br from-blue-50 to-white border border-blue-100 w-10 h-10 rounded-md flex items-center justify-center text-[#0056D2] mb-4 shadow-sm"><item.icon size={20} /></div>
                  <h4 className="font-bold text-[#1E293B] text-[15px] mb-2">{item.title}</h4>
                  <p className="text-[13px] text-gray-500 leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* OUR IMPACT */}
        <section className="bg-[#F8FAFC] py-10 border-t border-b border-gray-100">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-8">
            <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="flex flex-col lg:flex-row items-center justify-between gap-10">
              <div className="lg:w-1/3">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-1.5 h-6 bg-gradient-to-b from-[#0056D2] to-[#003366] rounded-full"></div>
                  <h3 className="text-[18px] font-bold text-[#003366]">Our Impact (Vision for the Future)</h3>
                </div>
                <p className="text-[13px] text-gray-600 leading-relaxed pl-4">DocuMind aspires to contribute towards a more skilled, data-informed and efficient government workforce.</p>
              </div>
              <div className="lg:w-2/3 flex flex-wrap items-center justify-between gap-6 w-full px-4 lg:px-12">
                {[
                  { icon: UserCheck, text: "Skilled\nWorkforce" },
                  { icon: Clock, text: "Improved\nEfficiency" },
                  { icon: Database, text: "Better\nData Governance" },
                  { icon: Star, text: "Stronger\nPolicy Outcomes" }
                ].map((item, idx) => (
                  <React.Fragment key={idx}>
                    <motion.div whileHover={{ scale: 1.1, color: "#0056D2" }} className="flex flex-col items-center text-center group cursor-default transition-colors duration-300">
                      <item.icon className="text-[#0056D2] mb-2 group-hover:drop-shadow-md transition-all duration-300" size={28} />
                      <span className="text-xs font-semibold text-gray-700 whitespace-pre-line group-hover:text-[#0056D2] transition-colors">{item.text}</span>
                    </motion.div>
                    {idx < 3 && <div className="hidden sm:block w-px h-12 bg-gradient-to-b from-transparent via-gray-300 to-transparent"></div>}
                  </React.Fragment>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* DEVELOPER SECTION */}
        <section className="py-20 bg-white relative">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-8">
            <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="flex flex-col items-center mb-10 text-center">
              <span className="text-[#0056D2] font-bold text-xs uppercase tracking-widest mb-1">Conceptualized & Built By</span>
              <h3 className="text-[24px] font-extrabold text-[#003366]">The Developer</h3>
            </motion.div>
            <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} whileHover={{ boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)" }} className="max-w-4xl mx-auto bg-white border border-gray-200 shadow-xl rounded-xl flex flex-col md:flex-row relative transition-shadow duration-500">
              <div className="md:w-1/3 bg-gradient-to-br from-[#00172D] to-[#003366] p-8 flex flex-col items-center justify-center text-center rounded-t-xl md:rounded-none md:rounded-l-xl z-10 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-5 rounded-full blur-2xl transform translate-x-10 -translate-y-10"></div>
                <motion.div whileHover={{ scale: 1.1, rotate: 5 }} className="w-24 h-24 bg-white/10 border border-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white text-3xl font-black mb-4 shadow-[0_0_15px_rgba(255,255,255,0.1)] transition-transform duration-300">MS</motion.div>
                <h4 className="text-xl font-bold text-white tracking-wide">Manas Singh</h4>
                <p className="text-[#FF9933] text-[10px] font-bold uppercase tracking-widest mt-1">Lead Developer</p>
              </div>
              <div className="md:w-2/3 p-8 lg:pr-[200px] flex flex-col justify-center relative rounded-b-xl md:rounded-none md:rounded-r-xl bg-white">
                <div className="flex items-center gap-2 mb-4">
                  <Award className="text-[#0056D2]" size={18} />
                  <p className="text-sm font-bold text-[#003366]">Smart India Hackathon 2026 Participant</p>
                </div>
                <p className="text-[13px] text-gray-600 leading-relaxed mb-6 font-medium">Passionate about building meaningful, scalable and accessible digital solutions. DocuMind is a step towards leveraging technology for public service and skill development in India's statistical ecosystem.</p>
                <div className="mb-4">
                  <h5 className="text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-2">Core Interests</h5>
                  <div className="flex flex-wrap gap-2">
                    {["Web Development", "AI & Data", "Public Systems", "Open Source"].map((skill, i) => (
                      <motion.span key={i} whileHover={{ scale: 1.05, backgroundColor: "#EBF3FB" }} className="px-3 py-1 bg-[#F8FAFC] border border-gray-200 text-[#0056D2] text-[11px] font-semibold rounded-md shadow-sm transition-colors cursor-default">{skill}</motion.span>
                    ))}
                  </div>
                </div>
                <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: 0.4, duration: 0.5 }} viewport={{ once: true }} whileHover={{ scale: 1.05, y: "-55%" }} className="hidden lg:block absolute right-[-40px] top-1/2 -translate-y-1/2 bg-white border border-gray-100 shadow-[0_10px_40px_rgba(0,0,0,0.1)] p-5 rounded-lg w-[200px] z-20 transition-transform duration-300">
                  <Quote className="text-[#0056D2] opacity-30 mb-2" size={24} />
                  <p className="text-xs text-gray-700 italic leading-relaxed font-medium">"Technology works best when it empowers people."</p>
                  <div className="w-6 h-0.5 bg-gradient-to-r from-[#FF9933] to-[#138808] mt-3 rounded-full"></div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

      </main>

      {/* 🔴 FOOTER REMOVED: Managed globally by App.jsx */}
      
    </div>
  );
}