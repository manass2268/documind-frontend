import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Play, ShieldCheck, Cpu, BookOpen, Users, ArrowRight, User, BarChart2, RefreshCw, Building2, ArrowUpRight, Check, MonitorPlay, MapPin, Briefcase, Monitor } from "lucide-react";

export default function KnowledgeCentre() {
  const spr = { type: "spring", stiffness: 80, damping: 16 };
  const fadeInUp = { hidden: { opacity: 0, y: 35 }, visible: { opacity: 1, y: 0, transition: { ...spr, stiffness: 85, damping: 15 } } };
  const fadeInLeft = { hidden: { opacity: 0, x: -45 }, visible: { opacity: 1, x: 0, transition: spr } };
  const fadeInRight = { hidden: { opacity: 0, x: 45 }, visible: { opacity: 1, x: 0, transition: spr } };
  const stagger = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.1 } } };

  const steps = [
    { no: "01", icon: User, color: "text-blue-600", bg: "bg-blue-50", badge: "bg-blue-600", title: "Employee Profile", desc: "Set up your profile,\nrole and interests." },
    { no: "02", icon: Briefcase, color: "text-emerald-600", bg: "bg-emerald-50", badge: "bg-emerald-600", title: "Competency\nAssessment", desc: "Assess current skills\nagainst role requirements." },
    { no: "03", icon: BarChart2, color: "text-amber-500", bg: "bg-amber-50", badge: "bg-amber-500", title: "Skill Gap\nAnalysis", desc: "Identify priority areas\nfor improvement." },
    { no: "04", icon: BookOpen, color: "text-purple-600", bg: "bg-purple-50", badge: "bg-purple-600", title: "Personalized\nLearning", desc: "Get curated courses\nand resources." },
    { no: "05", icon: Cpu, color: "text-rose-500", bg: "bg-rose-50", badge: "bg-rose-500", title: "AI\nAssessment", desc: "Evaluate learning\nthrough intelligent tests." },
    { no: "06", icon: RefreshCw, color: "text-teal-600", bg: "bg-teal-50", badge: "bg-teal-600", title: "Continuous\nGrowth", desc: "Track progress and\nget new recommendations." }
  ];

  const stakeholders = [
    { icon: Users, title: "For Employees", items: ["Assess your skills", "Get personalized learning paths", "Track your progress", "Build a future-ready career"], colors: { shadow: "rgba(0,86,210,0.12)", gradient: "from-[#F0F7FF] via-[#FAFCFF]", border: "border-blue-100/90", shape: "bg-blue-100/60", iconWrap: "bg-blue-100/70 text-[#0056D2]", checkWrap: "bg-blue-100 text-[#0056D2]", div: "border-blue-100/60", arrow: "bg-blue-50 group-hover:bg-[#0056D2] text-[#0056D2] group-hover:text-white" } },
    { icon: Building2, title: "For Departments", items: ["Monitor workforce capabilities", "Identify training needs", "Track overall progress", "Make data-driven decisions"], colors: { shadow: "rgba(5,150,105,0.12)", gradient: "from-[#F0FDF4] via-[#F9FEFA]", border: "border-emerald-100/90", shape: "bg-emerald-100/60", iconWrap: "bg-emerald-100/70 text-emerald-600", checkWrap: "bg-emerald-100 text-emerald-600", div: "border-emerald-100/60", arrow: "bg-emerald-50 group-hover:bg-emerald-600 text-emerald-600 group-hover:text-white" } },
    { icon: MonitorPlay, title: "For Trainers", items: ["Create and deliver learning content", "Assign role-based learning", "Track learner performance", "Get AI-powered insights"], colors: { shadow: "rgba(124,58,237,0.12)", gradient: "from-[#FAF5FF] via-[#FCFAFF]", border: "border-purple-100/90", shape: "bg-purple-100/60", iconWrap: "bg-purple-100/70 text-purple-600", checkWrap: "bg-purple-100 text-purple-600", div: "border-purple-100/60", arrow: "bg-purple-50 group-hover:bg-purple-600 text-purple-600 group-hover:text-white" } }
  ];

  return (
    <div className="flex flex-col bg-white text-[#1E293B] font-sans overflow-x-hidden relative selection:bg-[#0056D2] selection:text-white">
      <main id="main-content" className="flex-1">
        
        {/* 🟢 HERO SECTION */}
        <section className="relative bg-gradient-to-br from-[#F4F8FB] via-white to-[#EEF5FC] pt-12 pb-16 lg:pt-20 lg:pb-24 overflow-hidden border-b border-gray-100">
          <motion.div animate={{ scale: [1, 1.15, 1], opacity: [0.35, 0.55, 0.35] }} transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }} className="absolute -top-24 -left-20 w-96 h-96 bg-blue-300/40 rounded-full blur-3xl pointer-events-none" />
          <motion.div animate={{ scale: [1, 1.2, 1], opacity: [0.25, 0.45, 0.25] }} transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }} className="absolute bottom-0 right-[-10%] w-[500px] h-[500px] bg-sky-200/40 rounded-full blur-[130px] pointer-events-none" />
          <div className="absolute inset-0 bg-[radial-gradient(#0056D2_0.8px,transparent_0.8px)] [background-size:24px_24px] opacity-[0.035] pointer-events-none" />

          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center relative z-10">
            <motion.div variants={fadeInLeft} initial="hidden" animate="visible" className="flex flex-col z-20">
              <motion.div whileHover={{ scale: 1.02 }} className="inline-flex items-center gap-2 mb-4 w-max px-3.5 py-1.5 rounded-full bg-amber-50 border border-amber-200/70 shadow-sm">
                <span className="w-2 h-2 rounded-full bg-[#F59E0B] animate-pulse" />
                <span className="text-[#B45309] font-extrabold text-[10px] sm:text-[11px] uppercase tracking-[0.16em]">Together for a Data-Driven India</span>
              </motion.div>
              <h1 className="text-5xl sm:text-6xl lg:text-[74px] font-black text-[#0056D2] mb-2 tracking-tight leading-none drop-shadow-sm">DocuMind</h1>
              
              <div className="text-[17px] sm:text-[21px] font-extrabold text-[#0F172A] mb-5 flex items-center gap-3">
                <span className="hover:text-[#0056D2] transition-colors">Learn</span> <span className="text-gray-300 font-normal">|</span> 
                <span className="hover:text-[#0056D2] transition-colors">Assess</span> <span className="text-gray-300 font-normal">|</span> 
                <span className="text-[#0056D2]">Grow</span>
              </div>
              <p className="text-gray-600 text-[14px] sm:text-[16px] leading-relaxed mb-8 max-w-md font-medium">An integrated, AI-enabled platform to enhance the competencies of India's statistical workforce.</p>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-10">
                <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                  <Link to="/login" className="relative group overflow-hidden bg-gradient-to-r from-[#0056D2] to-[#0047B3] text-white px-8 py-3.5 text-sm font-bold flex items-center justify-center gap-2 rounded-md shadow-[0_10px_25px_-5px_rgba(0,86,210,0.42)] transition-all">
                    <span className="relative z-10 flex items-center gap-2">Access DocuMind <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" /></span>
                    <span className="absolute inset-0 bg-white/15 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                  </Link>
                </motion.div>
                <motion.button whileHover={{ scale: 1.03, backgroundColor: "#F8FAFC" }} whileTap={{ scale: 0.97 }} className="bg-white/90 backdrop-blur-sm text-[#1E293B] border border-gray-300 hover:border-gray-400 px-8 py-3.5 text-sm font-bold transition-all flex items-center justify-center gap-2 rounded-md shadow-sm">
                  <Play size={15} className="text-[#0056D2] fill-[#0056D2]" /> Watch Video
                </motion.button>
              </div>

              <div className="grid grid-cols-3 sm:grid-cols-5 gap-3 pt-6 border-t border-gray-200/70">
                {[{ icon: Building2, text: "Government\nReady" }, { icon: Cpu, text: "AI-Powered\nLearning" }, { icon: BookOpen, text: "Personalized\nGrowth" }, { icon: BarChart2, text: "Data-Driven\nWorkforce" }, { icon: ShieldCheck, text: "Secure &\nScalable" }].map((feat, idx) => (
                  <motion.div key={idx} whileHover={{ y: -4 }} className="flex flex-col items-center text-center gap-2 p-2 rounded-lg transition-colors hover:bg-white/80 cursor-default group">
                    <div className="text-[#0056D2] p-2 rounded-lg bg-blue-50/60 group-hover:bg-[#0056D2] group-hover:text-white group-hover:shadow-md transition-all duration-300"><feat.icon size={22} strokeWidth={1.8} /></div>
                    <span className="text-[10px] sm:text-[11px] font-bold text-gray-600 leading-tight whitespace-pre-line group-hover:text-[#0056D2] transition-colors">{feat.text}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div variants={fadeInRight} initial="hidden" animate="visible" className="relative w-full h-[420px] sm:h-[500px] flex items-center justify-center mt-6 lg:mt-0">
              <motion.div whileHover={{ scale: 1.015 }} className="absolute top-2 right-0 w-[92%] h-[88%] rounded-2xl shadow-[0_25px_60px_-15px_rgba(0,35,80,0.18)] z-10 border-[5px] border-white overflow-hidden group bg-slate-100">
                <img src="https://images.unsplash.com/photo-1587474260584-136574528ed5?q=80&w=1200&auto=format&fit=crop" alt="Sardar Patel Bhawan" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/10 opacity-70 group-hover:opacity-60 transition-opacity" />
                <div className="absolute bottom-4 right-4 bg-black/65 backdrop-blur-md px-3.5 py-1.5 rounded-md border border-white/20 text-white text-[10px] font-bold tracking-[0.12em] shadow-lg">SARDAR PATEL BHAWAN</div>
              </motion.div>
              <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }} className="absolute top-8 -left-2 sm:-left-6 bg-white/95 backdrop-blur-md p-5 shadow-[0_15px_40px_rgba(0,0,0,0.12)] rounded-xl z-30 border border-gray-100/80 min-w-[170px] text-center">
                <p className="font-semibold text-[#0056D2] text-[15px] sm:text-[17px] font-serif italic leading-tight">People.<br/>Data.<br/>Learning.<br/><span className="text-[#F59E0B] font-extrabold not-italic drop-shadow-sm">A Stronger India.</span></p>
                <div className="flex justify-center gap-1 mt-2.5"><span className="w-3 h-0.5 bg-[#FF9933] rounded-full" /><span className="w-3 h-0.5 bg-gray-300 rounded-full" /><span className="w-3 h-0.5 bg-[#138808] rounded-full" /></div>
              </motion.div>
              <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut" }} className="absolute bottom-6 -right-2 sm:-right-6 bg-white/95 backdrop-blur-md p-4 shadow-[0_15px_40px_rgba(0,0,0,0.12)] rounded-xl z-30 border border-gray-100 max-w-[195px] border-l-4 border-[#0056D2]">
                <p className="font-bold text-[#0F172A] text-[11px] sm:text-xs leading-relaxed">Empowering People through Knowledge for a Data-Driven India.</p>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* 🟢 HOW DOCUMIND WORKS */}
        <section className="py-16 lg:py-24 bg-white border-b border-gray-100 relative">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }} className="text-center mb-16">
              <span className="text-[#0056D2] font-bold text-[11px] uppercase tracking-[0.16em] mb-2 inline-block bg-blue-50 px-3 py-1 rounded-full border border-blue-100">HOW DOCUMIND WORKS</span>
              <h2 className="text-2xl sm:text-[32px] font-extrabold text-[#003366] mb-3">A Simple Path to a Stronger Workforce</h2>
              <p className="text-gray-500 text-sm max-w-xl mx-auto">From assessment to continuous learning — enabling growth at every step of the statistical journey.</p>
            </motion.div>

            <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }} className="flex flex-col lg:flex-row items-start justify-between gap-8 lg:gap-3 relative">
              <div className="hidden lg:block absolute top-[44px] left-[7%] right-[7%] h-0.5 bg-gradient-to-r from-blue-100 via-gray-200 to-teal-100 z-0" />
              {steps.map((step, idx) => (
                <motion.div key={idx} variants={fadeInUp} whileHover={{ y: -6 }} className="flex flex-col items-center text-center w-full lg:w-[15.5%] relative z-10 group transition-transform duration-300">
                  <div className={`w-[84px] h-[84px] rounded-full ${step.bg} border-4 border-white shadow-md group-hover:shadow-xl flex items-center justify-center ${step.color} mb-4 group-hover:scale-110 transition-all duration-300 relative ring-2 ring-transparent group-hover:ring-offset-2`}>
                    <step.icon size={30} strokeWidth={1.75} className="group-hover:rotate-6 transition-transform duration-300" />
                    <span className={`absolute -top-1 -right-1 text-[11px] font-black text-white ${step.badge} w-6 h-6 rounded-full flex items-center justify-center shadow-md border-2 border-white`}>{step.no}</span>
                  </div>
                  <h4 className="text-[14px] font-extrabold text-[#0F172A] mb-1.5 leading-tight whitespace-pre-line group-hover:text-[#0056D2] transition-colors">{step.title}</h4>
                  <p className="text-[11px] text-gray-500 font-medium leading-snug px-1 whitespace-pre-line">{step.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* 🟢 STATS BANNER */}
        <section className="py-12 bg-gradient-to-r from-[#F0F5FA] via-[#F6F9FD] to-[#EDF4FB] border-b border-gray-200/80">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
              <div className="lg:w-1/4 text-center lg:text-left border-b lg:border-b-0 lg:border-r border-gray-300/80 pb-6 lg:pb-0 lg:pr-8">
                <span className="text-[10px] font-extrabold text-[#0056D2] uppercase tracking-wider block mb-1">Impact & Scale</span>
                <h3 className="text-xl sm:text-[23px] font-black text-[#0F172A] leading-tight">Building<br/>A Data-Savvy India</h3>
              </div>
              <div className="lg:w-3/4 grid grid-cols-2 md:grid-cols-4 gap-6 w-full">
                {[{ icon: Users, count: "1M+", label: "Government Employees", sub: "(Target)", c: "text-[#0056D2]", b: "bg-blue-50" }, { icon: BookOpen, count: "500+", label: "Learning Resources", sub: "", c: "text-[#0056D2]", b: "bg-blue-50" }, { icon: Monitor, count: "50+", label: "Training Programs", sub: "", c: "text-[#7C3AED]", b: "bg-purple-50" }, { icon: MapPin, count: "28", label: "States & UTs", sub: "", c: "text-[#0056D2]", b: "bg-blue-50" }].map((stat, idx) => (
                  <motion.div key={idx} whileHover={{ y: -3 }} className="flex flex-col sm:flex-row items-center sm:items-start gap-3.5 sm:gap-4 p-3 rounded-xl transition-all hover:bg-white/90 hover:shadow-sm">
                    <div className={`${stat.b} p-2.5 rounded-xl ${stat.c} shadow-sm shrink-0`}><stat.icon size={30} strokeWidth={1.75} /></div>
                    <div className="flex flex-col text-center sm:text-left">
                      <h4 className={`text-2xl sm:text-[29px] font-black ${stat.c} leading-none mb-1 tracking-tight`}>{stat.count}</h4>
                      <p className="text-[11px] sm:text-xs font-semibold text-gray-700 leading-tight">{stat.label} {stat.sub && <><br/><span className="text-gray-400 font-normal">{stat.sub}</span></>}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 🟢 DESIGNED FOR EVERY STAKEHOLDER */}
        <section className="py-16 lg:py-24 bg-white border-b border-gray-100">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
              <motion.div variants={fadeInLeft} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                <h2 className="text-2xl sm:text-[32px] font-black text-[#003366] mb-2 tracking-tight">Designed for Every Stakeholder</h2>
                <p className="text-gray-500 text-sm font-medium">DocuMind supports individuals and institutions across the statistical ecosystem.</p>
              </motion.div>
              <motion.div variants={fadeInRight} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mt-4 md:mt-0">
                <Link to="/features" className="text-[#0056D2] font-bold text-sm flex items-center gap-1.5 hover:gap-2.5 transition-all group bg-blue-50/80 hover:bg-blue-100/70 px-4 py-2 rounded-full border border-blue-100">
                  Explore All Features <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            </div>

            <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
              {stakeholders.map((c, idx) => (
                <motion.div key={idx} variants={fadeInUp} whileHover={{ y: -7, boxShadow: `0 22px 45px -10px ${c.colors.shadow}` }} className={`bg-gradient-to-b ${c.colors.gradient} to-white border ${c.colors.border} p-7 sm:p-8 rounded-2xl shadow-sm transition-all duration-300 group flex flex-col justify-between relative overflow-hidden`}>
                  <div className={`absolute top-0 right-0 w-32 h-32 ${c.colors.shape} rounded-bl-full opacity-60 pointer-events-none group-hover:scale-110 transition-transform duration-500`} />
                  <div className="relative z-10">
                    <div className="flex items-center gap-3.5 mb-6">
                      <div className={`w-12 h-12 rounded-xl ${c.colors.iconWrap} flex items-center justify-center shadow-inner group-hover:scale-105 transition-transform`}><c.icon size={26} strokeWidth={2} /></div>
                      <h3 className="text-xl font-extrabold text-[#0F172A]">{c.title}</h3>
                    </div>
                    <ul className="space-y-3.5 mb-8">
                      {c.items.map((item, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-[13px] text-gray-700 font-medium group-hover:translate-x-0.5 transition-transform">
                          <div className={`p-0.5 rounded-full mt-0.5 shrink-0 ${c.colors.checkWrap}`}><Check size={13} strokeWidth={3} /></div><span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className={`pt-4 border-t ${c.colors.div} flex justify-end relative z-10`}>
                    <div className={`w-8 h-8 rounded-full ${c.colors.arrow} flex items-center justify-center transition-colors shadow-sm`}>
                      <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* 🟢 BOTTOM CTA */}
        <section className="relative py-20 lg:py-24 overflow-hidden bg-[#001f3f] border-b-[4px] border-[#0056D2]">
          <motion.div animate={{ scale: [1, 1.03, 1] }} transition={{ duration: 18, repeat: Infinity, ease: "linear" }} className="absolute bottom-0 left-0 w-full h-full bg-[url('https://images.unsplash.com/photo-1524311583145-d5593bd25029?q=80&w=1400&auto=format&fit=crop')] bg-cover bg-bottom mix-blend-luminosity opacity-25 pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#001f3f] via-[#001f3f]/75 to-[#001f3f]/90 pointer-events-none" />
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col md:flex-row items-center justify-between gap-10">
            <motion.div variants={fadeInLeft} initial="hidden" whileInView="visible" viewport={{ once: true }} className="md:w-3/5 text-center md:text-left">
              <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-black text-white leading-[1.18] mb-4 drop-shadow-md">Be a Part of a Competent<br/>and Future-Ready Workforce</h2>
              <p className="text-blue-100 text-[14px] sm:text-[15px] font-medium max-w-lg mx-auto md:mx-0">Access DocuMind today and contribute to a data-driven India.</p>
            </motion.div>
            <motion.div variants={fadeInRight} initial="hidden" whileInView="visible" viewport={{ once: true }} className="md:w-2/5 flex flex-col sm:flex-row items-center justify-center md:justify-end gap-6 sm:gap-9">
              <div className="text-left border-l-2 border-blue-400/80 pl-4 py-1.5 hidden sm:block">
                <p className="text-slate-200 font-serif italic text-[15px] sm:text-base leading-snug">Better Skills.<br/>Better Decisions.<br/><span className="font-bold text-white not-italic text-base sm:text-lg">A Stronger India.</span></p>
              </div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="w-full sm:w-auto">
                <Link to="/login" className="inline-flex items-center justify-center gap-2 bg-white text-[#003366] hover:bg-slate-50 px-8 py-3.5 rounded-md font-extrabold text-sm transition-all shadow-[0_10px_30px_rgba(0,0,0,0.3)] hover:shadow-[0_15px_35px_rgba(255,255,255,0.2)] group w-full sm:w-auto">
                  Get Started <ArrowUpRight size={18} className="text-[#0056D2] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </section>

      </main>
    </div>
  );
}