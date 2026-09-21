// src/pages/PlatformOverview.jsx
import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  Play, ShieldCheck, Cpu, BookOpen, Users, 
  ArrowRight, User, BarChart2, Target, CheckCircle, RefreshCw,
  Building2, GraduationCap, ArrowUpRight
} from "lucide-react";

export default function PlatformOverview() {
  const fadeInUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } } };
  const fadeInLeft = { hidden: { opacity: 0, x: -40 }, visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } } };
  const fadeInRight = { hidden: { opacity: 0, x: 40 }, visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } } };
  const staggerContainer = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.1 } } };

  return (
    <div className="flex flex-col bg-white text-[#333333] font-sans overflow-x-hidden relative">
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-3 text-[11px] font-semibold text-gray-500 whitespace-nowrap">
          <Link to="/" className="hover:text-[#0056D2] transition-colors">Home</Link>
          <span className="mx-2 text-gray-300">&gt;</span>
          <span className="text-[#0056D2]">Platform Overview</span>
        </div>
      </div>

      <main id="main-content" className="flex-1">
        
        {/* HERO SECTION */}
        <section className="relative bg-gradient-to-br from-[#F4F8FB] to-white pt-10 pb-16 lg:pt-16 lg:pb-24 overflow-hidden border-b border-gray-100">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center relative z-10">
            <motion.div variants={fadeInLeft} initial="hidden" animate="visible" className="flex flex-col z-20">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-1 h-4 bg-[#0056D2] rounded-full"></div>
                <span className="text-[11px] font-bold text-[#0056D2] uppercase tracking-widest bg-blue-50 px-3 py-1 rounded-full">Platform Overview</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-[64px] font-extrabold text-[#003366] mb-3 tracking-tight leading-tight">DocuMind Platform</h1>
              <div className="text-[15px] sm:text-[18px] font-bold text-[#1E293B] mb-5 flex items-center gap-3 flex-wrap">
                <span>Assess</span> <span className="text-gray-300">|</span> <span>Learn</span> <span className="text-gray-300">|</span> <span>Grow</span> <span className="text-gray-300">|</span> <span className="text-[#0056D2]">Serve Better</span>
              </div>
              <p className="text-gray-600 text-[14px] sm:text-[16px] leading-relaxed mb-8 max-w-lg font-medium">An integrated, AI-enabled platform to assess, analyze and enhance the competencies of India's statistical workforce.</p>
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-10">
                <Link to="/login" className="w-full sm:w-auto bg-[#0056D2] hover:bg-blue-700 text-white px-7 py-3 text-sm font-semibold transition-colors flex items-center justify-center gap-2 rounded-md shadow-[0_8px_20px_rgba(0,86,210,0.25)]">Explore Platform <ArrowRight size={16} /></Link>
                <button className="w-full sm:w-auto bg-white text-[#1E293B] border border-gray-200 hover:border-gray-300 px-7 py-3 text-sm font-semibold transition-all flex items-center justify-center gap-2 rounded-md shadow-sm hover:shadow">
                  <Play size={16} className="text-[#0056D2] fill-[#0056D2]" /> Watch Video
                </button>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 pt-6 border-t border-gray-200">
                {[
                  { icon: ShieldCheck, text: "Secure &\nGovt. Ready" }, { icon: Cpu, text: "AI-Powered\nInsights" },
                  { icon: BookOpen, text: "Personalized\nLearning" }, { icon: Users, text: "Future-Ready\nWorkforce" }
                ].map((feature, idx) => (
                  <div key={idx} className="flex flex-col gap-2 group cursor-default">
                    <div className="w-8 h-8 rounded-md bg-[#E8F0FE] text-[#0056D2] flex items-center justify-center group-hover:bg-[#0056D2] group-hover:text-white transition-colors"><feature.icon size={16} /></div>
                    <span className="text-[11px] font-semibold text-gray-700 leading-tight whitespace-pre-line">{feature.text}</span>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div variants={fadeInRight} initial="hidden" animate="visible" className="relative w-full h-[400px] sm:h-[500px] lg:h-[600px] flex items-center justify-center mt-10 lg:mt-0">
              <div className="absolute top-10 right-0 w-[80%] h-[80%] bg-gradient-to-br from-[#E8F0FE] to-[#D6E6F5] rounded-full blur-3xl opacity-60 z-0"></div>
              <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }} className="absolute top-0 left-0 lg:left-[-40px] z-30 transform rotate-[-5deg] bg-transparent">
                <p className="text-[#003366] text-xl font-serif italic font-bold leading-tight drop-shadow-md">Building<br/>A Smarter<br/>Statistical<br/>Workforce<br/><span className="text-[#0056D2]">for a Stronger India</span></p>
              </motion.div>
              <div className="absolute top-10 right-0 w-[85%] h-[65%] bg-[url('https://images.unsplash.com/photo-1587474260584-136574528ed5?q=80&w=800&auto=format&fit=crop')] bg-cover bg-center rounded-2xl shadow-xl z-10 border-4 border-white/80"></div>
              <motion.div whileHover={{ scale: 1.02 }} className="absolute bottom-10 left-5 w-[85%] sm:w-[75%] h-auto bg-white rounded-xl shadow-[0_25px_50px_-12px_rgba(0,0,0,0.3)] z-20 border-b-[12px] border-gray-300 flex flex-col overflow-hidden">
                <div className="w-full h-3 bg-gray-100 border-b border-gray-200 flex items-center px-3 gap-1.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-red-400"></div><div className="w-1.5 h-1.5 rounded-full bg-yellow-400"></div><div className="w-1.5 h-1.5 rounded-full bg-green-400"></div>
                </div>
                <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop" alt="Dashboard" className="w-full h-[180px] sm:h-[220px] object-cover opacity-90" />
              </motion.div>
              <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }} className="absolute top-1/2 right-[-10px] sm:right-[-20px] bg-white p-4 shadow-2xl rounded-lg z-30 border border-gray-100 max-w-[130px]">
                <p className="font-bold text-[#003366] text-sm leading-snug mb-1">Data.<br/>People.<br/>Progress.</p>
                <p className="text-[9px] text-gray-500 font-medium">For a Viksit Bharat.</p>
                <div className="flex gap-1 mt-2"><div className="w-3 h-0.5 bg-[#FF9933]"></div><div className="w-3 h-0.5 bg-gray-300"></div><div className="w-3 h-0.5 bg-[#138808]"></div></div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* HOW DOCUMIND WORKS (Journey) */}
        <section className="py-16 lg:py-24 bg-white border-b border-gray-100">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-16">
              <span className="text-gray-500 font-bold text-[11px] uppercase tracking-widest mb-2 block">How DocuMind Works</span>
              <h2 className="text-2xl sm:text-[32px] font-extrabold text-[#003366] mb-3">A Continuous Journey of Growth</h2>
              <p className="text-gray-500 text-sm">From understanding current capabilities to enabling continuous development.</p>
            </motion.div>

            <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="flex flex-col lg:flex-row items-start justify-between gap-6 lg:gap-2 relative">
              <div className="hidden lg:block absolute top-[45px] left-[5%] right-[5%] h-px bg-gray-200 border-t border-dashed border-gray-300 z-0"></div>
              {[
                { no: "01", icon: User, color: "text-blue-600", bg: "bg-blue-50", title: "Employee Profile", desc: "Set up your profile, role and interests." },
                { no: "02", icon: BarChart2, color: "text-indigo-600", bg: "bg-indigo-50", title: "Competency\nAssessment", desc: "Assess current skills against role requirements." },
                { no: "03", icon: Target, color: "text-orange-600", bg: "bg-orange-50", title: "Skill Gap\nAnalysis", desc: "Identify priority areas for improvement." },
                { no: "04", icon: BookOpen, color: "text-green-600", bg: "bg-green-50", title: "Personalized\nLearning", desc: "Get curated courses and resources." },
                { no: "05", icon: Cpu, color: "text-purple-600", bg: "bg-purple-50", title: "AI\nAssessment", desc: "Evaluate learning through intelligent tests." },
                { no: "06", icon: RefreshCw, color: "text-teal-600", bg: "bg-teal-50", title: "Continuous\nUpdate", desc: "Track progress and enhance competencies." }
              ].map((step, idx) => (
                <motion.div key={idx} variants={fadeInUp} className="flex flex-col items-center text-center w-full lg:w-[15%] relative z-10 group">
                  <div className={`w-16 h-16 rounded-full ${step.bg} border-2 border-white shadow-md flex items-center justify-center ${step.color} mb-4 group-hover:scale-110 transition-transform`}><step.icon size={24} /></div>
                  <span className={`text-[13px] font-black ${step.color} mb-2`}>{step.no}</span>
                  <h4 className="text-[14px] font-bold text-[#1E293B] mb-2 leading-tight whitespace-pre-line">{step.title}</h4>
                  <p className="text-[11px] text-gray-500 leading-snug px-2">{step.desc}</p>
                  {idx !== 5 && <ArrowRight className="lg:hidden text-gray-300 mt-6" size={20} />}
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* KEY FEATURES */}
        <section className="py-16 lg:py-24 bg-[#F8FAFC] border-b border-gray-100">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
              <motion.div variants={fadeInLeft} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                <span className="text-gray-500 font-bold text-[11px] uppercase tracking-widest mb-2 block">Key Features</span>
                <h2 className="text-2xl sm:text-[32px] font-extrabold text-[#003366]">Intelligent. Simple. Impactful.</h2>
              </motion.div>
              <motion.div variants={fadeInRight} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mt-4 md:mt-0">
                <Link to="/features" className="text-[#0056D2] font-semibold text-sm flex items-center gap-1 hover:underline">Explore All Features <ArrowRight size={14} /></Link>
              </motion.div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 items-stretch">
              {[
                { icon: ShieldCheck, color: "text-blue-600", border: "border-t-blue-600", bg: "bg-blue-50", title: "Competency Assessment", desc: "Role-based skill assessment aligned with government frameworks." },
                { icon: Target, color: "text-orange-500", border: "border-t-orange-500", bg: "bg-orange-50", title: "Skill Gap Analysis", desc: "AI-driven insights to identify priority areas for learning and development." },
                { icon: BookOpen, color: "text-green-600", border: "border-t-green-600", bg: "bg-green-50", title: "Personalized Learning", desc: "Curated content pathways and recommendations tailored to individual needs." },
                { icon: Cpu, color: "text-purple-600", border: "border-t-purple-600", bg: "bg-purple-50", title: "AI-Powered Assessment", desc: "Adaptive and intelligent evaluations with real-time feedback." }
              ].map((feat, idx) => (
                <motion.div key={idx} variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ delay: idx * 0.1 }} className={`bg-white p-6 rounded-lg shadow-sm border border-gray-100 border-t-4 ${feat.border} flex flex-col h-full hover:shadow-md transition-shadow`}>
                  <div className={`w-10 h-10 rounded-full ${feat.bg} ${feat.color} flex items-center justify-center mb-5`}><feat.icon size={20} /></div>
                  <h4 className="font-bold text-[#1E293B] text-[15px] mb-3">{feat.title}</h4>
                  <p className="text-[12px] text-gray-500 leading-relaxed mb-6 flex-grow">{feat.desc}</p>
                  <Link to="/features" className={`text-[12px] font-bold ${feat.color} flex items-center gap-1 hover:gap-2 transition-all mt-auto`}>Learn More <ArrowRight size={12} /></Link>
                </motion.div>
              ))}
              <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ delay: 0.4 }} className="bg-gradient-to-br from-[#F4F8FB] to-white p-8 rounded-lg border border-gray-200 flex flex-col justify-center h-full">
                <Quote className="text-[#0056D2] opacity-20 mb-4" size={40} />
                <p className="text-[#003366] font-serif italic font-semibold text-lg leading-snug mb-6">"Empowered people build a stronger statistical system."</p>
                <div className="w-8 h-0.5 bg-[#0056D2] mb-3"></div><span className="text-xs font-bold text-gray-600">MoSPI</span>
              </motion.div>
            </div>
          </div>
        </section>

        {/* WHO CAN USE DOCUMIND? */}
        <section className="py-16 lg:py-20 bg-white">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <motion.div variants={fadeInLeft} initial="hidden" whileInView="visible" viewport={{ once: true }} className="lg:col-span-5">
              <span className="text-gray-500 font-bold text-[11px] uppercase tracking-widest mb-2 block">Who Can Use DocuMind?</span>
              <h2 className="text-3xl sm:text-[36px] font-extrabold text-[#003366] leading-tight mb-5">For Every Stakeholder<br/>in the Statistical Ecosystem</h2>
              <p className="text-gray-600 text-sm leading-relaxed mb-6">DocuMind is designed to support all individuals and institutions contributing to India's statistical ecosystem.</p>
            </motion.div>
            <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { icon: User, title: "Employees", desc: "Assess skills, learn and grow in your career." },
                { icon: Building2, title: "Departments", desc: "Manage workforce capabilities and track progress." },
                { icon: GraduationCap, title: "Trainers", desc: "Create and deliver targeted learning content." }
              ].map((stake, idx) => (
                <motion.div key={idx} variants={fadeInUp} className="bg-white border border-gray-200 p-5 rounded-lg shadow-sm hover:shadow-md hover:border-[#0056D2] transition-all group flex flex-col justify-between">
                  <div>
                    <div className="text-[#0056D2] mb-4 group-hover:scale-110 transition-transform origin-left"><stake.icon size={28} strokeWidth={1.5} /></div>
                    <h4 className="font-bold text-[#1E293B] text-[15px] mb-2">{stake.title}</h4>
                    <p className="text-[11px] text-gray-500 leading-relaxed mb-4">{stake.desc}</p>
                  </div>
                  <ArrowRight size={16} className="text-gray-300 group-hover:text-[#0056D2] self-end mt-auto transition-colors" />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* BOTTOM CTA SECTION */}
        <section className="relative py-20 lg:py-28 bg-[#001f3f] overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1596423735880-5f2a689b903e?q=80&w=1200&auto=format&fit=crop')] bg-cover bg-center mix-blend-overlay opacity-20"></div>
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col md:flex-row items-center justify-between gap-10">
            <motion.div variants={fadeInLeft} initial="hidden" whileInView="visible" viewport={{ once: true }} className="md:w-2/3">
              <span className="text-blue-300 font-bold text-[10px] uppercase tracking-widest mb-3 block">Together for a Data-Driven India</span>
              <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-white leading-tight mb-5">Let's Build a Future-Ready<br/>Statistical Workforce</h2>
              <p className="text-blue-100 text-sm mb-8 font-medium">Access DocuMind and be a part of India's growth story.</p>
              <Link to="/login" className="inline-flex items-center gap-2 bg-white text-[#003366] hover:bg-blue-50 px-8 py-3.5 rounded-md font-bold text-sm transition-colors shadow-lg">Access DocuMind <ArrowUpRight size={16} /></Link>
            </motion.div>
            <motion.div variants={fadeInRight} initial="hidden" whileInView="visible" viewport={{ once: true }} className="md:w-1/3 flex justify-start md:justify-end">
              <div className="border-l-4 border-[#FF9933] pl-5 py-2 bg-black/20 backdrop-blur-sm rounded-r-lg">
                <p className="text-white font-serif italic text-lg sm:text-xl font-medium leading-snug">Better Skills.<br/>Better Decisions.<br/><span className="font-bold text-[#FF9933]">A Stronger India.</span></p>
              </div>
            </motion.div>
          </div>
        </section>

      </main>
    </div>
  );
}