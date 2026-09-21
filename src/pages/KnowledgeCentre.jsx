import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Play, ShieldCheck, Cpu, BookOpen, Users, ArrowRight, User, BarChart2, RefreshCw, Building2, ArrowUpRight, Check, MonitorPlay, MapPin, Briefcase, Monitor } from "lucide-react";

export default function KnowledgeCentre() {
  const spr = { type: "spring", stiffness: 70, damping: 14 };
  const fadeInUp = { hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0, transition: { ...spr, stiffness: 85, damping: 15 } } };
  const fadeInLeft = { hidden: { opacity: 0, x: -50 }, visible: { opacity: 1, x: 0, transition: spr } };
  const fadeInRight = { hidden: { opacity: 0, x: 50 }, visible: { opacity: 1, x: 0, transition: spr } };
  const stagger = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.1 } } };

  const steps = [
    { no: "01", icon: User, color: "text-[#0056D2]", bg: "bg-blue-50/80", border: "border-blue-200", title: "Employee Profile", desc: "Set up your profile,\nrole and interests." },
    { no: "02", icon: Briefcase, color: "text-emerald-600", bg: "bg-emerald-50/80", border: "border-emerald-200", title: "Competency\nAssessment", desc: "Assess current skills\nagainst role requirements." },
    { no: "03", icon: BarChart2, color: "text-amber-500", bg: "bg-amber-50/80", border: "border-amber-200", title: "Skill Gap\nAnalysis", desc: "Identify priority areas\nfor improvement." },
    { no: "04", icon: BookOpen, color: "text-purple-600", bg: "bg-purple-50/80", border: "border-purple-200", title: "Personalized\nLearning", desc: "Get curated courses\nand resources." },
    { no: "05", icon: Cpu, color: "text-rose-500", bg: "bg-rose-50/80", border: "border-rose-200", title: "AI\nAssessment", desc: "Evaluate learning\nthrough intelligent tests." },
    { no: "06", icon: RefreshCw, color: "text-teal-600", bg: "bg-teal-50/80", border: "border-teal-200", title: "Continuous\nGrowth", desc: "Track progress and\nget new recommendations." }
  ];

  const stakeholders = [
    { icon: Users, title: "For Employees", items: ["Assess your skills", "Get personalized learning paths", "Track your progress", "Build a future-ready career"], theme: { light: "bg-blue-50", dark: "bg-[#0056D2]", text: "text-[#0056D2]", glow: "rgba(0,86,210,0.25)" } },
    { icon: Building2, title: "For Departments", items: ["Monitor workforce capabilities", "Identify training needs", "Track overall progress", "Make data-driven decisions"], theme: { light: "bg-emerald-50", dark: "bg-emerald-500", text: "text-emerald-600", glow: "rgba(16,185,129,0.25)" } },
    { icon: MonitorPlay, title: "For Trainers", items: ["Create and deliver learning content", "Assign role-based learning", "Track learner performance", "Get AI-powered insights"], theme: { light: "bg-purple-50", dark: "bg-purple-500", text: "text-purple-600", glow: "rgba(139,92,246,0.25)" } }
  ];

  return (
    <div className="flex flex-col bg-[#F8FAFC] text-[#1E293B] font-sans overflow-x-hidden relative selection:bg-[#0056D2] selection:text-white">
      <main id="main-content" className="flex-1">
        
        {/* 🟢 HERO SECTION (Glassmorphism & Rich Gradients) */}
        <section className="relative pt-12 pb-20 lg:pt-24 lg:pb-32 overflow-hidden border-b border-white/40">
          {/* Animated Mesh Gradients */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#F0F7FF] via-[#F8FAFC] to-[#EBF4FF] z-0" />
          <motion.div animate={{ scale: [1, 1.2, 1], x: [0, 50, 0], opacity: [0.4, 0.6, 0.4] }} transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }} className="absolute -top-40 -left-20 w-[600px] h-[600px] bg-blue-400/20 rounded-full blur-[120px] mix-blend-multiply" />
          <motion.div animate={{ scale: [1, 1.3, 1], x: [0, -50, 0], opacity: [0.3, 0.5, 0.3] }} transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }} className="absolute top-20 -right-20 w-[500px] h-[500px] bg-purple-300/20 rounded-full blur-[120px] mix-blend-multiply" />
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-soft-light" />

          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-10 items-center relative z-10">
            <motion.div variants={fadeInLeft} initial="hidden" animate="visible" className="flex flex-col z-20">
              <motion.div whileHover={{ scale: 1.05 }} className="inline-flex items-center gap-2.5 mb-6 w-max px-4 py-1.5 rounded-full bg-white/60 backdrop-blur-md border border-white/80 shadow-[0_4px_15px_rgba(0,0,0,0.05)]">
                <span className="w-2.5 h-2.5 rounded-full bg-gradient-to-r from-orange-400 to-amber-500 animate-pulse shadow-[0_0_10px_rgba(245,158,11,0.6)]" />
                <span className="text-[#B45309] font-black text-[10px] sm:text-[11px] uppercase tracking-[0.2em]">Together for a Data-Driven India</span>
              </motion.div>
              
              <h1 className="text-5xl sm:text-6xl lg:text-[76px] font-black mb-4 tracking-tight leading-[1.05]">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#003366] via-[#0056D2] to-[#0077FF] drop-shadow-sm">DocuMind</span>
              </h1>
              
              <div className="text-[18px] sm:text-[22px] font-extrabold text-[#334155] mb-6 flex items-center gap-3.5">
                <span className="hover:text-[#0056D2] transition-colors cursor-pointer">Learn</span> 
                <span className="w-1.5 h-1.5 rounded-full bg-gray-300" /> 
                <span className="hover:text-[#0056D2] transition-colors cursor-pointer">Assess</span> 
                <span className="w-1.5 h-1.5 rounded-full bg-gray-300" /> 
                <span className="text-[#0056D2]">Grow</span>
              </div>
              
              <p className="text-gray-600 text-[15px] sm:text-[17px] leading-relaxed mb-10 max-w-lg font-medium">An integrated, AI-enabled platform designed with modern technology to enhance the competencies of India's statistical workforce.</p>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-5 mb-10">
                <motion.div whileHover={{ scale: 1.04, y: -2 }} whileTap={{ scale: 0.96 }}>
                  <Link to="/login" className="relative overflow-hidden bg-gradient-to-r from-[#0056D2] to-[#003B99] text-white px-8 py-4 text-[15px] font-bold flex items-center justify-center gap-2 rounded-xl shadow-[0_15px_30px_-10px_rgba(0,86,210,0.6)] transition-all">
                    <span className="relative z-10 flex items-center gap-2">Access DocuMind <ArrowRight size={18} /></span>
                    <div className="absolute inset-0 bg-white/20 hover:scale-110 transition-transform duration-500 rounded-xl" />
                  </Link>
                </motion.div>
                <motion.button whileHover={{ scale: 1.04, y: -2, backgroundColor: "#ffffff" }} whileTap={{ scale: 0.96 }} className="bg-white/70 backdrop-blur-xl text-[#0F172A] border border-white px-8 py-4 text-[15px] font-bold transition-all flex items-center justify-center gap-2 rounded-xl shadow-[0_10px_25px_-5px_rgba(0,0,0,0.05)]">
                  <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center"><Play size={12} className="text-[#0056D2] fill-[#0056D2]" /></div> Watch Video
                </motion.button>
              </div>

              <div className="grid grid-cols-3 sm:grid-cols-5 gap-4 pt-6 border-t border-gray-200/50">
                {[{ icon: Building2, text: "Government\nReady" }, { icon: Cpu, text: "AI-Powered\nLearning" }, { icon: BookOpen, text: "Personalized\nGrowth" }, { icon: BarChart2, text: "Data-Driven\nWorkforce" }, { icon: ShieldCheck, text: "Secure &\nScalable" }].map((feat, idx) => (
                  <motion.div key={idx} whileHover={{ y: -5, scale: 1.05 }} className="flex flex-col items-center text-center gap-2.5 p-3 rounded-xl bg-white/40 backdrop-blur-sm border border-white/60 shadow-sm cursor-default group transition-all duration-300 hover:shadow-md hover:bg-white">
                    <div className="text-[#0056D2]"><feat.icon size={24} strokeWidth={2} className="drop-shadow-sm group-hover:stroke-[#003366] transition-colors" /></div>
                    <span className="text-[10px] sm:text-[11px] font-extrabold text-gray-700 leading-tight whitespace-pre-line group-hover:text-[#0056D2] transition-colors">{feat.text}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div variants={fadeInRight} initial="hidden" animate="visible" className="relative w-full h-[450px] sm:h-[550px] flex items-center justify-center mt-8 lg:mt-0">
              <motion.div whileHover={{ scale: 1.02, rotateY: -5, rotateX: 5 }} transition={{ type: "spring", stiffness: 100 }} style={{ perspective: 1000 }} className="absolute top-0 right-0 w-[90%] h-[90%] rounded-3xl shadow-[0_30px_60px_-15px_rgba(0,40,90,0.3)] z-10 border-[8px] border-white/90 overflow-hidden group">
                <img src="https://images.unsplash.com/photo-1587474260584-136574528ed5?q=80&w=1200&auto=format&fit=crop" alt="Sardar Patel Bhawan" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#00172D]/90 via-transparent to-transparent opacity-80" />
                <div className="absolute bottom-5 right-5 bg-white/10 backdrop-blur-xl px-4 py-2 rounded-lg border border-white/20 text-white text-[11px] font-black tracking-[0.15em] shadow-xl">INDIA GATE    </div>
              </motion.div>
              <motion.div animate={{ y: [0, -12, 0] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }} className="absolute top-10 -left-6 bg-white/90 backdrop-blur-2xl p-6 shadow-[0_20px_50px_rgba(0,0,0,0.15)] rounded-2xl z-30 border border-white min-w-[200px] text-center">
                <p className="font-extrabold text-[#003366] text-[16px] sm:text-[18px] font-serif italic leading-[1.3]">People.<br/>Data.<br/>Learning.<br/><span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-amber-600 not-italic drop-shadow-sm">A Stronger India.</span></p>
                <div className="flex justify-center gap-1.5 mt-3"><span className="w-4 h-1 bg-[#FF9933] rounded-full shadow-sm" /><span className="w-4 h-1 bg-gray-300 rounded-full shadow-sm" /><span className="w-4 h-1 bg-[#138808] rounded-full shadow-sm" /></div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* 🟢 HOW DOCUMIND WORKS (Glowing Steps) */}
        <section className="py-20 lg:py-28 bg-white relative">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} className="text-center mb-20">
              <span className="text-[#0056D2] font-black text-[12px] uppercase tracking-[0.2em] mb-3 inline-block bg-blue-50 px-4 py-1.5 rounded-full border border-blue-100 shadow-sm">How It Works</span>
              <h2 className="text-3xl sm:text-[40px] font-black text-[#0F172A] mb-4 tracking-tight">A Simple Path to a Stronger Workforce</h2>
            </motion.div>

            <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} className="flex flex-col lg:flex-row items-start justify-between gap-10 lg:gap-4 relative">
              <div className="hidden lg:block absolute top-[45px] left-[8%] right-[8%] h-[3px] bg-gradient-to-r from-blue-100 via-purple-100 to-emerald-100 z-0 rounded-full" />
              {steps.map((step, idx) => (
                <motion.div key={idx} variants={fadeInUp} whileHover={{ y: -10 }} className="flex flex-col items-center text-center w-full lg:w-[15.5%] relative z-10 group">
                  <div className={`w-[90px] h-[90px] rounded-2xl ${step.bg} backdrop-blur-md border-2 ${step.border} shadow-lg flex items-center justify-center ${step.color} mb-5 group-hover:scale-110 transition-all duration-300 relative group-hover:shadow-[0_15px_30px_rgba(0,0,0,0.1)] group-hover:rounded-full`}>
                    <step.icon size={34} strokeWidth={1.5} className="group-hover:scale-110 transition-transform duration-300 drop-shadow-sm" />
                    <span className={`absolute -top-3 -right-3 text-[12px] font-black text-white ${step.badge} w-8 h-8 rounded-full flex items-center justify-center shadow-lg border-[3px] border-white`}>{step.no}</span>
                  </div>
                  <h4 className="text-[15px] font-black text-[#1E293B] mb-2 leading-tight whitespace-pre-line group-hover:text-[#0056D2] transition-colors">{step.title}</h4>
                  <p className="text-[12px] text-gray-500 font-medium leading-relaxed px-1 whitespace-pre-line">{step.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* 🟢 PREMIUM STATS BANNER (Dark Floating Strip) */}
        <section className="py-12 bg-white px-4 sm:px-6 lg:px-8">
          <div className="max-w-[1300px] mx-auto bg-gradient-to-r from-[#00172D] via-[#003366] to-[#00172D] rounded-3xl shadow-[0_25px_50px_-12px_rgba(0,35,80,0.4)] p-8 sm:p-12 relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay" />
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-[100px] pointer-events-none" />
            
            <div className="flex flex-col lg:flex-row items-center justify-between gap-10 relative z-10">
              <div className="lg:w-1/3 text-center lg:text-left border-b lg:border-b-0 lg:border-r border-white/20 pb-8 lg:pb-0 lg:pr-10">
                <span className="text-[11px] font-black text-blue-300 uppercase tracking-[0.2em] block mb-2">Impact & Scale</span>
                <h3 className="text-2xl sm:text-[32px] font-black text-white leading-tight drop-shadow-md">Building<br/>A Data-Savvy India</h3>
              </div>
              <div className="lg:w-2/3 grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8 w-full">
                {[{ icon: Users, count: "1M+", label: "Govt. Employees" }, { icon: BookOpen, count: "500+", label: "Learning Resources" }, { icon: Monitor, count: "50+", label: "Training Programs" }, { icon: MapPin, count: "28", label: "States & UTs" }].map((stat, idx) => (
                  <motion.div key={idx} whileHover={{ y: -5, scale: 1.05 }} className="flex flex-col items-center sm:items-start text-center sm:text-left group cursor-default">
                    <div className="bg-white/10 p-3 rounded-xl text-blue-300 mb-4 group-hover:bg-blue-500 group-hover:text-white transition-colors shadow-inner backdrop-blur-sm"><stat.icon size={26} strokeWidth={2} /></div>
                    <h4 className="text-3xl sm:text-[36px] font-black text-white leading-none mb-2 tracking-tight drop-shadow-md">{stat.count}</h4>
                    <p className="text-[12px] sm:text-[13px] font-semibold text-blue-100/80 leading-tight">{stat.label}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 🟢 DESIGNED FOR EVERY STAKEHOLDER (Glowing Cards) */}
        <section className="py-20 lg:py-28 bg-[#F8FAFC]">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-14">
              <motion.div variants={fadeInLeft} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                <h2 className="text-3xl sm:text-[40px] font-black text-[#0F172A] mb-3 tracking-tight">Designed for Every Stakeholder</h2>
                <p className="text-gray-500 text-base font-medium">DocuMind supports individuals and institutions across the statistical ecosystem.</p>
              </motion.div>
              <motion.div variants={fadeInRight} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mt-6 md:mt-0">
                <Link to="/features" className="text-[#0056D2] font-black text-sm flex items-center gap-2 hover:gap-3 transition-all group bg-white hover:bg-blue-50 px-6 py-3 rounded-xl shadow-sm border border-gray-200">
                  Explore All Features <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            </div>

            <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {stakeholders.map((c, idx) => (
                <motion.div key={idx} variants={fadeInUp} whileHover={{ y: -12, scale: 1.02 }} className="bg-white border border-gray-100 p-8 sm:p-10 rounded-3xl shadow-[0_10px_30px_rgba(0,0,0,0.04)] hover:shadow-[0_25px_50px_-12px_var(--glow)] transition-all duration-300 group flex flex-col justify-between relative overflow-hidden" style={{ '--glow': c.theme.glow }}>
                  {/* Internal Glow Effect */}
                  <div className={`absolute -top-20 -right-20 w-48 h-48 rounded-full ${c.theme.dark} opacity-[0.08] blur-3xl pointer-events-none group-hover:opacity-[0.15] transition-opacity duration-500`} />
                  
                  <div className="relative z-10">
                    <div className="flex items-center gap-4 mb-8">
                      <div className={`w-14 h-14 rounded-2xl ${c.theme.light} ${c.theme.text} flex items-center justify-center shadow-inner group-hover:rotate-6 transition-transform`}><c.icon size={28} strokeWidth={2} /></div>
                      <h3 className="text-[22px] font-black text-[#0F172A]">{c.title}</h3>
                    </div>
                    <ul className="space-y-4 mb-10">
                      {c.items.map((item, i) => (
                        <li key={i} className="flex items-start gap-3 text-[14px] text-gray-600 font-bold group-hover:translate-x-1 transition-transform" style={{ transitionDelay: `${i * 50}ms` }}>
                          <div className={`p-1 rounded-full mt-0.5 shrink-0 ${c.theme.dark} text-white shadow-sm`}><Check size={12} strokeWidth={4} /></div><span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="pt-6 border-t border-gray-100 flex justify-end relative z-10">
                    <div className={`w-10 h-10 rounded-xl ${c.theme.light} group-hover:${c.theme.dark} ${c.theme.text} group-hover:text-white flex items-center justify-center transition-colors shadow-sm`}>
                      <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* 🟢 BOTTOM CTA (Neon Glowing Aesthetics) */}
        <section className="relative py-24 lg:py-32 overflow-hidden bg-[#001224] border-b-[6px] border-[#0056D2]">
          <motion.div animate={{ scale: [1, 1.05, 1], opacity: [0.3, 0.4, 0.3] }} transition={{ duration: 15, repeat: Infinity, ease: "linear" }} className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1524311583145-d5593bd25029?q=80&w=1400&auto=format&fit=crop')] bg-cover bg-center mix-blend-luminosity pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#001224] via-[#001224]/80 to-[#001224]/90 pointer-events-none" />
          
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
            <motion.div variants={fadeInLeft} initial="hidden" whileInView="visible" viewport={{ once: true }} className="md:w-3/5 text-center md:text-left">
              <h2 className="text-4xl sm:text-5xl lg:text-[50px] font-black text-white leading-[1.1] mb-6 drop-shadow-lg tracking-tight">Be a Part of a Competent<br/><span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300">and Future-Ready Workforce</span></h2>
              <p className="text-blue-100/80 text-[16px] sm:text-[18px] font-medium max-w-lg mx-auto md:mx-0">Access DocuMind today and contribute to a data-driven India.</p>
            </motion.div>
            
            <motion.div variants={fadeInRight} initial="hidden" whileInView="visible" viewport={{ once: true }} className="md:w-2/5 flex flex-col sm:flex-row items-center justify-center md:justify-end gap-8">
              <div className="text-left border-l-4 border-[#0056D2] pl-5 py-2 hidden sm:block bg-white/5 backdrop-blur-sm rounded-r-xl pr-6">
                <p className="text-slate-200 font-serif italic text-[16px] sm:text-[18px] leading-snug">Better Skills.<br/>Better Decisions.<br/><span className="font-extrabold text-[#F59E0B] not-italic text-xl">A Stronger India.</span></p>
              </div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="w-full sm:w-auto">
                <Link to="/login" className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-white to-blue-50 text-[#003366] hover:text-[#0056D2] px-8 py-4 rounded-xl font-black text-base transition-all shadow-[0_0_30px_rgba(255,255,255,0.2)] hover:shadow-[0_0_40px_rgba(0,86,210,0.5)] group w-full sm:w-auto">
                  Get Started <ArrowUpRight size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </section>

      </main>
    </div>
  );
}