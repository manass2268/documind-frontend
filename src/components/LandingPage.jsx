import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { User, BarChart2, BookOpen, FileText, ArrowRight, Settings, BookMarked, ChevronRight } from "lucide-react";

// Assets
import ashokaLogo from "../assets/ashoka.png";

export default function LandingPage() {
  
  // Animation Variants
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
      
      {/* 🔴 HEADER REMOVED: It is now handled globally in App.jsx (PublicLayout) */}

      <main id="main-content" className="relative bg-gradient-to-r from-[#F4F7F9] to-white border-b border-gray-200 overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-8 py-14 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center relative z-10">
          
          <motion.div variants={fadeInLeft} initial="hidden" animate="visible" className="flex flex-col z-20">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-1 h-3 bg-[#0A4275]"></div>
              <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Smart India Hackathon 2026</span>
            </div>

            <h1 className="text-5xl md:text-[56px] font-extrabold text-[#0A4275] mb-2 tracking-tight leading-none">
              DocuMind
            </h1>
            <h2 className="text-xl md:text-2xl font-bold text-[#1E293B] mb-5 leading-snug">
              AI-Powered Competency & Learning <br/>Intelligence Platform
            </h2>
            
            <p className="text-gray-600 text-sm leading-relaxed mb-8 max-w-md font-medium">
              Supporting a skilled and future-ready statistical workforce through competency assessment and personalized learning.
            </p>

            <div className="flex items-center gap-4">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link to="/login" className="bg-[#0056D2] hover:bg-blue-700 text-white px-6 py-2.5 text-sm font-semibold transition-colors flex items-center justify-center gap-2 rounded-sm shadow-[0_4px_14px_0_rgba(0,86,210,0.39)]">
                  Access DocuMind <ArrowRight size={16} />
                </Link>
              </motion.div>
              <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="bg-white text-[#0A4275] border border-[#0A4275] px-6 py-2.5 text-sm font-semibold hover:bg-blue-50 transition-colors rounded-sm shadow-sm">
                Learn More
              </motion.button>
            </div>
          </motion.div>

          {/* Right Side: Building & Quote */}
          <motion.div variants={fadeInRight} initial="hidden" animate="visible" className="relative w-full h-[400px] flex items-center justify-center lg:justify-end">
            <div className="absolute inset-0 right-[-100px] bg-[url('https://images.unsplash.com/photo-1587474260584-136574528ed5?q=80&w=1200&auto=format&fit=crop')] bg-cover bg-center [mask-image:linear-gradient(to_left,white_50%,transparent_100%)] opacity-90 z-0"></div>
            
            <motion.div 
              animate={{ y: [0, -10, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} 
              className="relative z-10 bg-white/80 backdrop-blur-sm p-5 border-l border-gray-200 shadow-xl mb-32 mr-auto lg:mr-20"
            >
              <h3 className="text-2xl font-bold text-[#0A4275] mb-2 leading-tight">Data<br/>for a Stronger<br/>India</h3>
              <div className="w-12 h-1 bg-gradient-to-r from-orange-500 via-white to-green-600 rounded-full"></div>
            </motion.div>
          </motion.div>
        </div>
      </main>

      {/* 🟢 EXPLORE DOCUMIND (4 Cards Layout) */}
      <section className="py-16 bg-[#F8FAFC]">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-8">
          
          <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="flex flex-col items-center justify-center mb-12 text-center">
            <h3 className="text-xl font-bold text-[#0A4275] bg-[#F8FAFC] px-4 py-1 relative z-10">Explore DocuMind</h3>
            <div className="w-32 h-px bg-gray-300 -mt-3.5 z-0"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: User, title: "For Employees", desc: "Assess skills, explore learning resources", link: "/login" },
              { icon: BarChart2, title: "For Departments", desc: "Identify skill gaps and build capacity", link: "/login" },
              { icon: BookOpen, title: "Learning Resources", desc: "Access curated courses and materials", link: "/login" },
              { icon: FileText, title: "About the Platform", desc: "Know more about DocuMind and its objectives", link: "/about" }
            ].map((item, idx) => (
              <motion.div key={idx} variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ delay: idx * 0.1 }}>
                <Link to={item.link} className="bg-white border border-gray-100 shadow-sm rounded-lg p-5 flex items-center justify-between group cursor-pointer hover:shadow-md transition-all hover:border-blue-100 block">
                  <div className="flex items-center gap-4">
                    <div className="bg-gradient-to-br from-blue-50 to-white w-10 h-10 rounded-full flex items-center justify-center text-[#0A4275] group-hover:bg-[#0A4275] group-hover:text-white transition-all shadow-inner">
                      <item.icon size={18} />
                    </div>
                    <div>
                      <h4 className="font-bold text-[#333333] text-[13px] mb-0.5 group-hover:text-[#0A4275] transition-colors">{item.title}</h4>
                      <p className="text-[11px] text-gray-500 leading-snug">{item.desc}</p>
                    </div>
                  </div>
                  <ChevronRight size={16} className="text-blue-400 group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 🟢 ECOSYSTEM STRIP */}
      <section className="py-6 bg-white border-t border-gray-100 shadow-[0_-5px_15px_rgba(0,0,0,0.02)]">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-8 flex flex-col md:flex-row items-center justify-between">
          
          <h4 className="text-sm font-bold text-[#0A4275] mb-4 md:mb-0">Our Government Ecosystem</h4>
          
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
            <motion.div whileHover={{ scale: 1.1 }} className="flex items-center gap-2 cursor-pointer">
              <div className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center text-orange-500"><Settings size={18}/></div>
              <span className="font-bold text-gray-800 text-sm tracking-tight">iGOT <span className="font-normal text-gray-600">Karmayogi</span></span>
            </motion.div>
            
            <div className="hidden md:block w-px h-8 bg-gray-200"></div>

            <motion.div whileHover={{ scale: 1.1 }} className="flex items-center gap-2 cursor-pointer">
              <img src={ashokaLogo} alt="MoSPI" className="h-8 object-contain opacity-70" />
              <span className="font-bold text-[#0A4275] text-sm">MoSPI</span>
            </motion.div>

            <div className="hidden md:block w-px h-8 bg-gray-200"></div>

            <motion.div whileHover={{ scale: 1.1 }} className="flex items-center gap-2 text-blue-700 cursor-pointer">
              <BookMarked size={24}/>
              <span className="font-bold text-sm">NSSTA</span>
            </motion.div>

            <div className="hidden md:block w-px h-8 bg-gray-200"></div>

            <motion.div whileHover={{ scale: 1.1 }} className="flex items-center gap-2 cursor-pointer">
              <div className="w-8 h-8 rounded-full bg-green-100 border border-green-200 flex items-center justify-center font-bold text-green-700 text-xs shadow-sm">DI</div>
              <div className="flex flex-col text-[10px] font-bold text-gray-700 leading-none">
                <span className="text-[#0A4275] text-sm">Digital India</span>
                <span className="font-normal">Power To Empower</span>
              </div>
            </motion.div>
          </div>

        </div>
      </section>

      {/* 🔴 FOOTER REMOVED: It is now handled globally in App.jsx (PublicLayout) */}
      
    </div>
  );
}