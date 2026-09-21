import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  Play, ShieldCheck, Cpu, BookOpen, Users, 
  ArrowRight, User, BarChart2, Target, CheckCircle, RefreshCw,
  Building2, GraduationCap, ArrowUpRight, Quote 
} from "lucide-react";

export default function PlatformOverview() {
  // Premium Animation Variants
  const fadeInUp = { hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } } };
  const fadeInLeft = { hidden: { opacity: 0, x: -50 }, visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" } } };
  const fadeInRight = { hidden: { opacity: 0, x: 50 }, visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" } } };
  const staggerContainer = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.15 } } };
  const floatEffect = { y: [0, -12, 0], transition: { duration: 5, repeat: Infinity, ease: "easeInOut" } };

  return (
    <div className="flex flex-col bg-white text-[#333333] font-sans overflow-x-hidden relative">
      
      {/* 🟢 BREADCRUMB */}
      <div className="bg-white border-b border-gray-100 relative z-20">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-3 text-[11px] font-semibold text-gray-500 whitespace-nowrap">
          <Link className="hover:text-[#0056D2] transition-colors" to="/">Home</Link>
          <span className="mx-2 text-gray-300">&gt;</span>
          <span className="text-[#0056D2]">Platform Overview</span>
        </div>
      </div>

      <main id="main-content" className="flex-1">
        
        {/* 🟢 1. HERO SECTION */}
        <section className="relative bg-gradient-to-br from-[#F4F8FB] to-white pt-10 pb-16 lg:pt-16 lg:pb-24 overflow-hidden border-b border-gray-100">
          
          <motion.div animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }} transition={{ duration: 8, repeat: Infinity }} className="absolute top-[-10%] left-[-5%] w-[400px] h-[400px] bg-blue-200 rounded-full blur-[120px] pointer-events-none"></motion.div>
          <motion.div animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }} transition={{ duration: 10, repeat: Infinity }} className="absolute bottom-[-10%] right-[-5%] w-[500px] h-[500px] bg-indigo-200 rounded-full blur-[150px] pointer-events-none"></motion.div>

          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center relative z-10">
            
            <motion.div variants={fadeInLeft} initial="hidden" animate="visible" className="flex flex-col z-20">
              <motion.div whileHover={{ scale: 1.05 }} className="flex items-center gap-2 mb-4 w-max cursor-default">
                <div className="w-1 h-4 bg-[#0056D2] rounded-full"></div>
                <span className="text-[11px] font-bold text-[#0056D2] uppercase tracking-widest bg-blue-50/80 backdrop-blur-sm border border-blue-100 px-3 py-1 rounded-full shadow-sm">Platform Overview</span>
              </motion.div>

              <h1 className="text-4xl sm:text-5xl lg:text-[64px] font-extrabold text-[#003366] mb-3 tracking-tight leading-tight drop-shadow-sm">DocuMind Platform</h1>
              
              <div className="text-[15px] sm:text-[18px] font-bold text-[#1E293B] mb-5 flex items-center gap-3 flex-wrap">
                <span className="hover:text-[#0056D2] transition-colors cursor-default">Assess</span> <span className="text-gray-300">|</span> 
                <span className="hover:text-[#0056D2] transition-colors cursor-default">Learn</span> <span className="text-gray-300">|</span> 
                <span className="hover:text-[#0056D2] transition-colors cursor-default">Grow</span> <span className="text-gray-300">|</span> 
                <span className="text-[#0056D2]">Serve Better</span>
              </div>
              
              <p className="text-gray-600 text-[14px] sm:text-[16px] leading-relaxed mb-8 max-w-lg font-medium">An integrated, AI-enabled platform to assess, analyze and enhance the competencies of India's statistical workforce.</p>

              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-10">
                <motion.div whileHover={{ scale: 1.05, boxShadow: "0 15px 30px -5px rgba(0,86,210,0.4)" }} whileTap={{ scale: 0.95 }} className="w-full sm:w-auto">
                  <Link className="bg-gradient-to-r from-[#0056D2] to-[#0044A8] text-white px-7 py-3.5 text-sm font-semibold flex items-center justify-center gap-2 rounded-lg w-full group" to="/login">
                    Explore Platform <ArrowRight className="group-hover:translate-x-1 transition-transform" size={16}/>
                  </Link>
                </motion.div>
                <motion.button whileHover={{ scale: 1.05, backgroundColor: "#F8FAFC" }} whileTap={{ scale: 0.95 }} className="w-full sm:w-auto bg-white/80 backdrop-blur-md text-[#1E293B] border border-gray-200 px-7 py-3.5 text-sm font-semibold transition-all flex items-center justify-center gap-2 rounded-lg shadow-sm hover:border-gray-300">
                  <Play className="text-[#0056D2] fill-[#0056D2]" size={16}/> Watch Video
                </motion.button>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 pt-6 border-t border-gray-200/60">
                {[
                  { icon: ShieldCheck, text: "Secure &\nGovt. Ready" }, { icon: Cpu, text: "AI-Powered\nInsights" },
                  { icon: BookOpen, text: "Personalized\nLearning" }, { icon: Users, text: "Future-Ready\nWorkforce" }
                ].map((feature, idx) => (
                  <motion.div key={idx} whileHover={{ y: -5 }} className="flex flex-col gap-2 group cursor-default">
                    <div className="w-10 h-10 rounded-lg bg-white shadow-sm border border-gray-100 text-[#0056D2] flex items-center justify-center group-hover:bg-[#0056D2] group-hover:text-white group-hover:shadow-md transition-all duration-300">
                      <feature.icon size={18} />
                    </div>
                    <span className="text-[11px] font-bold text-gray-700 leading-tight whitespace-pre-line group-hover:text-[#0056D2] transition-colors">{feature.text}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div variants={fadeInRight} initial="hidden" animate="visible" className="relative w-full h-[400px] sm:h-[500px] lg:h-[600px] flex items-center justify-center mt-10 lg:mt-0">
              <motion.div animate={floatEffect} className="absolute top-0 left-0 lg:left-[-40px] z-30 transform rotate-[-5deg] bg-transparent">
                <p className="text-[#003366] text-xl font-serif italic font-bold leading-tight drop-shadow-lg">Building<br/>A Smarter<br/>Statistical<br/>Workforce<br/><span className="text-[#0056D2]">for a Stronger India</span></p>
              </motion.div>
              
              <div className="absolute top-10 right-0 w-[85%] h-[65%] rounded-2xl shadow-2xl z-10 border-4 border-white overflow-hidden">
                 <img src="https://images.unsplash.com/photo-1587474260584-136574528ed5?q=80&w=1000&auto=format&fit=crop" alt="Government Building" className="w-full h-full object-cover transition-transform duration-700 hover:scale-105 brightness-110" />
              </div>
              
              <motion.div animate={{ y: [-8, 8, -8] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }} className="absolute bottom-10 left-5 w-[85%] sm:w-[75%] h-auto bg-white/95 backdrop-blur-xl rounded-xl shadow-[0_30px_60px_-15px_rgba(0,0,0,0.4)] z-20 border-b-[12px] border-gray-300 flex flex-col overflow-hidden ring-1 ring-black/5">
                <div className="w-full h-3 bg-gray-100 border-b border-gray-200 flex items-center px-3 gap-1.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-red-400"></div><div className="w-1.5 h-1.5 rounded-full bg-yellow-400"></div><div className="w-1.5 h-1.5 rounded-full bg-green-400"></div>
                </div>
                <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop" alt="Dashboard" className="w-full h-[180px] sm:h-[220px] object-cover brightness-105" />
              </motion.div>
              
              <motion.div animate={{ y: [0, 15, 0] }} transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }} className="absolute top-1/2 right-[-10px] sm:right-[-20px] bg-white/90 backdrop-blur-md p-4 shadow-2xl rounded-lg z-30 border border-gray-100 max-w-[130px]">
                <p className="font-bold text-[#003366] text-sm leading-snug mb-1">Data.<br/>People.<br/>Progress.</p>
                <p className="text-[9px] text-gray-500 font-medium">For a Viksit Bharat.</p>
                <div className="flex gap-1 mt-2"><div className="w-3 h-0.5 bg-[#FF9933]"></div><div className="w-3 h-0.5 bg-gray-300"></div><div className="w-3 h-0.5 bg-[#138808]"></div></div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* 🟢 2. HOW DOCUMIND WORKS (Journey) */}
        <section className="py-16 lg:py-24 bg-white border-b border-gray-100">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} className="text-center mb-16">
              <span className="text-blue-600 font-bold text-[11px] uppercase tracking-widest mb-2 block bg-blue-50 w-max mx-auto px-3 py-1 rounded-full">How DocuMind Works</span>
              <h2 className="text-2xl sm:text-[32px] font-extrabold text-[#003366] mb-3">A Continuous Journey of Growth</h2>
              <p className="text-gray-500 text-sm">From understanding current capabilities to enabling continuous development.</p>
            </motion.div>

            <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} className="flex flex-col lg:flex-row items-start justify-between gap-6 lg:gap-2 relative">
              <div className="hidden lg:block absolute top-[45px] left-[5%] right-[5%] h-0.5 bg-gradient-to-r from-blue-100 via-gray-300 to-teal-100 z-0"></div>
              {[
                { no: "01", icon: User, color: "text-blue-600", border: "border-blue-200", shadow: "hover:shadow-blue-200", bg: "bg-blue-50", title: "Employee Profile", desc: "Set up your profile, role and interests." },
                { no: "02", icon: BarChart2, color: "text-indigo-600", border: "border-indigo-200", shadow: "hover:shadow-indigo-200", bg: "bg-indigo-50", title: "Competency\nAssessment", desc: "Assess current skills against role." },
                { no: "03", icon: Target, color: "text-orange-600", border: "border-orange-200", shadow: "hover:shadow-orange-200", bg: "bg-orange-50", title: "Skill Gap\nAnalysis", desc: "Identify priority areas for improvement." },
                { no: "04", icon: BookOpen, color: "text-green-600", border: "border-green-200", shadow: "hover:shadow-green-200", bg: "bg-green-50", title: "Personalized\nLearning", desc: "Get curated courses and resources." },
                { no: "05", icon: Cpu, color: "text-purple-600", border: "border-purple-200", shadow: "hover:shadow-purple-200", bg: "bg-purple-50", title: "AI\nAssessment", desc: "Evaluate learning intelligently." },
                { no: "06", icon: RefreshCw, color: "text-teal-600", border: "border-teal-200", shadow: "hover:shadow-teal-200", bg: "bg-teal-50", title: "Continuous\nUpdate", desc: "Track progress and enhance competencies." }
              ].map((step, idx) => (
                <motion.div key={idx} variants={fadeInUp} whileHover={{ y: -8 }} className="flex flex-col items-center text-center w-full lg:w-[15%] relative z-10 group cursor-default">
                  <div className={`w-16 h-16 rounded-full ${step.bg} border-2 border-white shadow-lg ${step.shadow} flex items-center justify-center ${step.color} mb-4 transition-all duration-300 group-hover:scale-110 group-hover:bg-white ring-4 ring-transparent group-hover:ring-${step.border.split('-')[1]}-100`}>
                    <step.icon size={24} />
                  </div>
                  <span className={`text-[13px] font-black ${step.color} mb-2 bg-white px-2 py-0.5 rounded-md shadow-sm border ${step.border}`}>{step.no}</span>
                  <h4 className="text-[14px] font-bold text-[#1E293B] mb-2 leading-tight whitespace-pre-line group-hover:text-[#0056D2] transition-colors">{step.title}</h4>
                  <p className="text-[11px] text-gray-500 leading-snug px-2">{step.desc}</p>
                  {idx !== 5 && <ArrowRight className="lg:hidden text-gray-300 mt-6" size={20}/>}
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* 🟢 3. KEY FEATURES */}
        <section className="py-16 lg:py-24 bg-[#F8FAFC] border-b border-gray-100 relative overflow-hidden">
          <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#0056D2_1px,transparent_1px)] [background-size:16px_16px]"></div>
          
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
              <motion.div variants={fadeInLeft} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                <span className="text-gray-500 font-bold text-[11px] uppercase tracking-widest mb-2 block">Key Features</span>
                <h2 className="text-2xl sm:text-[32px] font-extrabold text-[#003366]">Intelligent. Simple. Impactful.</h2>
              </motion.div>
              <motion.div variants={fadeInRight} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mt-4 md:mt-0">
                <Link className="text-[#0056D2] font-semibold text-sm flex items-center gap-1 hover:gap-2 transition-all hover:underline bg-blue-50 px-4 py-2 rounded-full" to="/features">
                  Explore All Features <ArrowRight size={14}/>
                </Link>
              </motion.div>
            </div>

            <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 items-stretch">
              {[
                { icon: ShieldCheck, color: "text-blue-600", border: "border-t-blue-500", bg: "bg-blue-50/50", title: "Competency Assessment", desc: "Role-based skill assessment aligned with government frameworks." },
                { icon: Target, color: "text-orange-500", border: "border-t-orange-500", bg: "bg-orange-50/50", title: "Skill Gap Analysis", desc: "AI-driven insights to identify priority areas for learning and development." },
                { icon: BookOpen, color: "text-green-600", border: "border-t-green-500", bg: "bg-green-50/50", title: "Personalized Learning", desc: "Curated content pathways and recommendations tailored to individual needs." },
                { icon: Cpu, color: "text-purple-600", border: "border-t-purple-500", bg: "bg-purple-50/50", title: "AI-Powered Assessment", desc: "Adaptive and intelligent evaluations with real-time feedback." }
              ].map((feat, idx) => (
                <motion.div key={idx} variants={fadeInUp} whileHover={{ y: -10, boxShadow: "0 25px 50px -12px rgba(0,0,0,0.1)" }} className={`bg-white/80 backdrop-blur-md p-6 rounded-xl shadow-sm border border-gray-100 border-t-4 ${feat.border} flex flex-col h-full transition-all duration-300 group`}>
                  <div className={`w-12 h-12 rounded-xl ${feat.bg} ${feat.color} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform`}>
                    <feat.icon size={22} />
                  </div>
                  <h4 className="font-bold text-[#1E293B] text-[15px] mb-3 group-hover:text-[#003366] transition-colors">{feat.title}</h4>
                  <p className="text-[12px] text-gray-500 leading-relaxed mb-6 flex-grow">{feat.desc}</p>
                  <Link className={`text-[12px] ${feat.color} flex font-bold gap-1 group-hover:gap-2 items-center mt-auto transition-all w-max`} to="/features">
                    Learn More <ArrowRight size={12}/>
                  </Link>
                </motion.div>
              ))}

              <motion.div variants={fadeInUp} whileHover={{ scale: 1.02 }} className="bg-gradient-to-br from-[#003366] to-[#0056D2] p-8 rounded-xl shadow-lg border border-blue-800 flex flex-col justify-center h-full relative overflow-hidden group">
                <div className="absolute top-[-20%] right-[-20%] w-40 h-40 bg-white opacity-5 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700"></div>
                <Quote className="text-white/20 mb-4" size={40}/>
                <p className="text-white font-serif italic font-semibold text-lg leading-snug mb-6 relative z-10">"Empowered people build a stronger statistical system."</p>
                <div className="w-8 h-0.5 bg-orange-400 mb-3"></div>
                <span className="text-xs font-bold text-blue-100 tracking-wide">MoSPI</span>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* 🟢 4. WHO CAN USE DOCUMIND? */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <motion.div variants={fadeInLeft} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} className="lg:col-span-5">
              <span className="text-[#0056D2] font-bold text-[11px] uppercase tracking-widest mb-2 block">Who Can Use DocuMind?</span>
              <h2 className="text-3xl sm:text-[36px] font-extrabold text-[#003366] leading-tight mb-5">For Every Stakeholder<br/>in the Statistical Ecosystem</h2>
              <p className="text-gray-600 text-sm leading-relaxed mb-6">DocuMind is designed to support all individuals and institutions contributing to India's statistical ecosystem.</p>
            </motion.div>
            
            <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-5">
              {[
                { icon: User, title: "Employees", desc: "Assess skills, learn and grow in your career." },
                { icon: Building2, title: "Departments", desc: "Manage workforce capabilities and track progress." },
                { icon: GraduationCap, title: "Trainers", desc: "Create and deliver targeted learning content." }
              ].map((stake, idx) => (
                <motion.div key={idx} variants={fadeInUp} whileHover={{ y: -5, borderColor: "#0056D2" }} className="bg-white border border-gray-200 p-6 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 group flex flex-col justify-between cursor-pointer">
                  <div>
                    <div className="w-12 h-12 rounded-lg bg-gray-50 flex items-center justify-center text-[#0056D2] mb-5 group-hover:bg-[#0056D2] group-hover:text-white transition-colors">
                      <stake.icon size={24} strokeWidth={1.5} />
                    </div>
                    <h4 className="font-bold text-[#1E293B] text-[16px] mb-2">{stake.title}</h4>
                    <p className="text-[12px] text-gray-500 leading-relaxed mb-4">{stake.desc}</p>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center self-end mt-auto group-hover:bg-blue-50 transition-colors">
                    <ArrowRight className="text-gray-400 group-hover:text-[#0056D2]" size={14}/>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* 🟢 5. BOTTOM CTA SECTION (Updated Outline & Gradient) */}
        <section className="relative py-20 lg:py-28 overflow-hidden bg-[#061e38] border-b-[4px] border-[#0056D2]">
          
          {/* Background Monument Image (Natural colors, no mix-blend filters) */}
          <div className="absolute inset-0 bg-[url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDk_DNvoklccuACDlPaJczI8p06yV9BGNAiYDgoPa-9Q&s=10')] bg-cover bg-right sm:bg-center"></div>
          
          {/* Gradient Overlay: Solid blue on the left, fading to completely transparent on the right */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#061e38] via-[#061e38]/90 to-transparent"></div>
          
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col md:flex-row items-center justify-between gap-10">
            
            {/* Left Side */}
            <motion.div variants={fadeInLeft} initial="hidden" whileInView="visible" viewport={{ once: true }} className="md:w-2/3 flex flex-col items-start text-left">
              <span className="text-[#F59E0B] font-bold text-[11px] uppercase tracking-[0.2em] mb-4 block drop-shadow-md">
                Together for a Data-Driven India
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-extrabold text-white leading-[1.15] mb-6 drop-shadow-lg">
                Let's Build a Future-Ready<br/>Statistical Workforce
              </h2>
              <p className="text-gray-200 text-[14px] sm:text-[15px] mb-8 font-medium drop-shadow-md">
                Access DocuMind and be a part of India's growth story.
              </p>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="w-max">
                <Link className="inline-flex items-center gap-2 bg-white text-[#003300] hover:bg-gray-100 px-6 py-3 rounded font-bold text-sm transition-colors shadow-lg" to="/login">
                  Access DocuMind <ArrowUpRight className="text-[#0056D2]" size={16}/>
                </Link>
              </motion.div>
            </motion.div>

            {/* Right Side Quote */}
            <motion.div variants={fadeInRight} initial="hidden" whileInView="visible" viewport={{ once: true }} className="md:w-1/3 flex justify-start md:justify-end">
              <motion.div whileHover={{ scale: 1.02 }} className="border-l-[3px] border-[#4b5563] pl-5 py-4 bg-[#0c243c]/80 backdrop-blur-md rounded-r-xl border-y border-r border-white/10 shadow-2xl max-w-sm">
                <p className="text-gray-100 font-serif italic text-lg sm:text-[22px] font-medium leading-[1.5]">
                  Better Skills.<br/>
                  Better Decisions.<br/>
                  <span className="font-bold text-[#F59E0B] not-italic text-[20px] sm:text-[24px]">A Stronger India.</span>
                </p>
              </motion.div>
            </motion.div>
          </div>
        </section>

      </main>
    </div>
  );
}