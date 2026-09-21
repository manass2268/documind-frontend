import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  Play, ShieldCheck, Cpu, BookOpen, Users, 
  ArrowRight, User, BarChart2, Target, RefreshCw,
  Building2, ArrowUpRight, Check, MonitorPlay, MapPin, Briefcase
} from "lucide-react";

export default function KnowledgeCentre() {
  // Animation Variants
  const fadeInUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } } };
  const fadeInLeft = { hidden: { opacity: 0, x: -40 }, visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } } };
  const fadeInRight = { hidden: { opacity: 0, x: 40 }, visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } } };
  const staggerContainer = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.1 } } };
  const floatEffect = { y: [0, -10, 0], transition: { duration: 6, repeat: Infinity, ease: "easeInOut" } };

  return (
    <div className="flex flex-col bg-white text-[#333333] font-sans overflow-x-hidden relative">
      
      <main id="main-content" className="flex-1">
        
        {/* 🟢 1. HERO SECTION */}
        <section className="relative bg-gradient-to-br from-[#F4F8FB] to-white pt-12 pb-16 lg:pt-20 lg:pb-24 overflow-hidden border-b border-gray-100">
          
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center relative z-10">
            
            {/* Left Content */}
            <motion.div variants={fadeInLeft} initial="hidden" animate="visible" className="flex flex-col z-20">
              <span className="text-[#F59E0B] font-bold text-[11px] uppercase tracking-[0.15em] mb-4 block">
                TOGETHER FOR A DATA-DRIVEN INDIA
              </span>

              <h1 className="text-5xl sm:text-6xl lg:text-[72px] font-extrabold text-[#0056D2] mb-2 tracking-tight leading-none drop-shadow-sm">
                DocuMind
              </h1>
              
              <div className="text-[16px] sm:text-[20px] font-bold text-[#1E293B] mb-6 flex items-center gap-3 flex-wrap">
                <span>Learn</span> <span className="text-gray-300">|</span> 
                <span>Assess</span> <span className="text-gray-300">|</span> 
                <span>Grow</span>
              </div>
              
              <p className="text-gray-600 text-[14px] sm:text-[16px] leading-relaxed mb-8 max-w-md font-medium">
                An integrated, AI-enabled platform to enhance the competencies of India's statistical workforce.
              </p>

              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-10">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="w-full sm:w-auto">
                  <Link to="/login" className="bg-[#0056D2] hover:bg-blue-700 text-white px-8 py-3.5 text-sm font-bold flex items-center justify-center gap-2 rounded shadow-[0_10px_20px_-10px_rgba(0,86,210,0.5)] w-full transition-all">
                    Access DocuMind <ArrowRight size={16} />
                  </Link>
                </motion.div>
                <motion.button whileHover={{ scale: 1.05, backgroundColor: "#F8FAFC" }} whileTap={{ scale: 0.95 }} className="w-full sm:w-auto bg-white text-[#1E293B] border-2 border-gray-200 px-8 py-3 text-sm font-bold transition-all flex items-center justify-center gap-2 rounded hover:border-gray-300">
                  <Play size={16} className="text-[#0056D2] fill-[#0056D2]" /> Watch Video
                </motion.button>
              </div>

              <div className="grid grid-cols-3 sm:grid-cols-5 gap-3 sm:gap-4 pt-6">
                {[
                  { icon: Building2, text: "Government\nReady" }, 
                  { icon: Cpu, text: "AI-Powered\nLearning" },
                  { icon: BookOpen, text: "Personalized\nGrowth" }, 
                  { icon: BarChart2, text: "Data-Driven\nWorkforce" },
                  { icon: ShieldCheck, text: "Secure &\nScalable" }
                ].map((feature, idx) => (
                  <motion.div key={idx} whileHover={{ y: -5 }} className="flex flex-col items-center text-center gap-2 group cursor-default">
                    <div className="text-[#0056D2] group-hover:scale-110 transition-transform">
                      <feature.icon size={28} strokeWidth={1.5} />
                    </div>
                    <span className="text-[10px] font-semibold text-gray-600 leading-tight whitespace-pre-line group-hover:text-[#0056D2] transition-colors">{feature.text}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right Image/Collage Content */}
            <motion.div variants={fadeInRight} initial="hidden" animate="visible" className="relative w-full h-[400px] sm:h-[500px] flex items-center justify-center mt-10 lg:mt-0">
              
              <div className="absolute top-0 right-0 w-[90%] h-[80%] rounded-xl shadow-2xl z-10 border-4 border-white overflow-hidden">
                 {/* Replace with actual Sardar Patel Bhawan image */}
                 <img src="https://images.unsplash.com/photo-1587474260584-136574528ed5?q=80&w=1000&auto=format&fit=crop" alt="Sardar Patel Bhawan" className="w-full h-full object-cover" />
                 <div className="absolute bottom-4 right-4 bg-black/50 backdrop-blur-sm px-3 py-1 rounded text-white/90 text-[10px] font-bold tracking-wider">
                   SARDAR PATEL BHAWAN
                 </div>
              </div>
              
              {/* Floating Card 1 */}
              <motion.div animate={floatEffect} className="absolute top-10 left-[-10px] sm:left-[-20px] bg-white/95 backdrop-blur-md p-5 shadow-2xl rounded-lg z-30 border border-gray-100 max-w-[180px]">
                <p className="font-bold text-[#0056D2] text-sm sm:text-base font-serif italic leading-snug">
                  People.<br/>Data.<br/>Learning.<br/>
                  <span className="text-[#F59E0B]">A Stronger India.</span>
                </p>
              </motion.div>

              {/* Floating Card 2 */}
              <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }} className="absolute bottom-10 right-[-10px] sm:right-[-20px] bg-white/95 backdrop-blur-md p-4 shadow-2xl rounded-lg z-30 border border-gray-100 max-w-[160px] border-l-4 border-[#0056D2]">
                <p className="font-semibold text-[#1E293B] text-[11px] sm:text-xs leading-relaxed">
                  Empowering People through Knowledge for a Data-Driven India.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* 🟢 2. HOW DOCUMIND WORKS (Journey) */}
        <section className="py-16 lg:py-24 bg-white border-b border-gray-100">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-16">
              <span className="text-gray-500 font-bold text-[11px] uppercase tracking-widest mb-2 block">How DocuMind Works</span>
              <h2 className="text-2xl sm:text-[32px] font-extrabold text-[#003366] mb-3">A Simple Path to a Stronger Workforce</h2>
              <p className="text-gray-500 text-sm">From assessment to continuous learning — enabling growth at every step.</p>
            </motion.div>

            <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="flex flex-col lg:flex-row items-start justify-between gap-6 lg:gap-2 relative">
              <div className="hidden lg:block absolute top-[45px] left-[5%] right-[5%] h-px bg-gray-200 border-t border-dashed border-gray-300 z-0"></div>
              {[
                { no: "01", icon: User, color: "text-blue-600", bg: "bg-blue-50", title: "Employee Profile", desc: "Set up your profile,\nrole and interests." },
                { no: "02", icon: Briefcase, color: "text-green-600", bg: "bg-green-50", title: "Competency\nAssessment", desc: "Assess current skills\nagainst role requirements." },
                { no: "03", icon: BarChart2, color: "text-orange-500", bg: "bg-orange-50", title: "Skill Gap\nAnalysis", desc: "Identify priority areas\nfor improvement." },
                { no: "04", icon: BookOpen, color: "text-purple-600", bg: "bg-purple-50", title: "Personalized\nLearning", desc: "Get curated courses\nand resources." },
                { no: "05", icon: Cpu, color: "text-red-500", bg: "bg-red-50", title: "AI\nAssessment", desc: "Evaluate learning\nthrough intelligent tests." },
                { no: "06", icon: RefreshCw, color: "text-teal-500", bg: "bg-teal-50", title: "Continuous\nGrowth", desc: "Track progress and\nget new recommendations." }
              ].map((step, idx) => (
                <motion.div key={idx} variants={fadeInUp} className="flex flex-col items-center text-center w-full lg:w-[15%] relative z-10 group">
                  <div className={`w-16 h-16 rounded-full ${step.bg} border-[3px] border-white shadow-md flex items-center justify-center ${step.color} mb-4 group-hover:scale-110 transition-transform`}>
                    <step.icon size={24} strokeWidth={2} />
                  </div>
                  <span className={`text-[12px] font-black text-white ${step.color.replace('text', 'bg')} w-6 h-6 rounded-full flex items-center justify-center mb-2 shadow-sm absolute top-[-5px] right-[25%]`}>{step.no}</span>
                  <h4 className="text-[14px] font-bold text-[#1E293B] mb-2 leading-tight whitespace-pre-line">{step.title}</h4>
                  <p className="text-[11px] text-gray-500 leading-snug px-2 whitespace-pre-line">{step.desc}</p>
                  {idx !== 5 && <ArrowRight className="hidden lg:block absolute top-[40px] right-[-20px] text-gray-300" size={16}/>}
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* 🟢 3. STATS BANNER (NEW) */}
        <section className="py-12 bg-[#F4F8FB]">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
              
              <div className="lg:w-1/4">
                <h3 className="text-xl sm:text-2xl font-bold text-[#1E293B] leading-tight">
                  Building<br/>A Data-Savvy India
                </h3>
              </div>

              <div className="lg:w-3/4 grid grid-cols-2 md:grid-cols-4 gap-6 w-full">
                {[
                  { icon: Users, count: "1M+", label: "Government Employees", sub: "(Target)", color: "text-blue-500" },
                  { icon: BookOpen, count: "500+", label: "Learning Resources", sub: "", color: "text-blue-500" },
                  { icon: MonitorPlay, count: "50+", label: "Training Programs", sub: "", color: "text-purple-500" },
                  { icon: MapPin, count: "28", label: "States & UTs", sub: "", color: "text-blue-600" }
                ].map((stat, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <stat.icon size={32} strokeWidth={1.5} className={`${stat.color} mt-1`} />
                    <div>
                      <h4 className={`text-2xl sm:text-3xl font-black ${stat.color} leading-none mb-1`}>{stat.count}</h4>
                      <p className="text-[11px] sm:text-xs font-semibold text-gray-600 leading-tight">
                        {stat.label} <br/> {stat.sub && <span className="text-gray-400 font-normal">{stat.sub}</span>}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          </div>
        </section>

        {/* 🟢 4. DESIGNED FOR EVERY STAKEHOLDER (NEW) */}
        <section className="py-16 lg:py-24 bg-white border-b border-gray-100">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
              <motion.div variants={fadeInLeft} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                <h2 className="text-2xl sm:text-[32px] font-extrabold text-[#003366] mb-2">Designed for Every Stakeholder</h2>
                <p className="text-gray-500 text-sm">DocuMind supports individuals and institutions across the statistical ecosystem.</p>
              </motion.div>
              <motion.div variants={fadeInRight} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mt-4 md:mt-0">
                <Link to="/features" className="text-[#0056D2] font-semibold text-sm flex items-center gap-1 hover:gap-2 transition-all hover:underline">
                  Explore All Features <ArrowRight size={14}/>
                </Link>
              </motion.div>
            </div>

            <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-1 md:grid-cols-3 gap-6">
              
              {/* Card 1: Employees */}
              <motion.div variants={fadeInUp} className="bg-[#F8FAFC] border border-gray-200 p-6 sm:p-8 rounded-lg hover:shadow-md transition-shadow group flex flex-col h-full">
                <div className="flex items-center gap-4 mb-6">
                  <div className="text-blue-600"><Users size={40} strokeWidth={1.5} /></div>
                  <h3 className="text-xl font-bold text-[#1E293B]">For Employees</h3>
                </div>
                <ul className="space-y-3 mb-8 flex-grow">
                  {[
                    "Assess your skills", 
                    "Get personalized learning paths", 
                    "Track your progress", 
                    "Build a future-ready career"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-[13px] text-gray-600 font-medium">
                      <Check size={16} className="text-blue-500 shrink-0 mt-0.5" /> {item}
                    </li>
                  ))}
                </ul>
                <ArrowRight size={20} className="text-blue-600 self-end group-hover:translate-x-2 transition-transform" />
              </motion.div>

              {/* Card 2: Departments */}
              <motion.div variants={fadeInUp} className="bg-[#F0FDF4] border border-green-100 p-6 sm:p-8 rounded-lg hover:shadow-md transition-shadow group flex flex-col h-full">
                <div className="flex items-center gap-4 mb-6">
                  <div className="text-green-600"><Building2 size={40} strokeWidth={1.5} /></div>
                  <h3 className="text-xl font-bold text-[#1E293B]">For Departments</h3>
                </div>
                <ul className="space-y-3 mb-8 flex-grow">
                  {[
                    "Monitor workforce capabilities", 
                    "Identify training needs", 
                    "Track overall progress", 
                    "Make data-driven decisions"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-[13px] text-gray-600 font-medium">
                      <Check size={16} className="text-green-500 shrink-0 mt-0.5" /> {item}
                    </li>
                  ))}
                </ul>
                <ArrowRight size={20} className="text-green-600 self-end group-hover:translate-x-2 transition-transform" />
              </motion.div>

              {/* Card 3: Trainers */}
              <motion.div variants={fadeInUp} className="bg-[#FAF5FF] border border-purple-100 p-6 sm:p-8 rounded-lg hover:shadow-md transition-shadow group flex flex-col h-full">
                <div className="flex items-center gap-4 mb-6">
                  <div className="text-purple-600"><MonitorPlay size={40} strokeWidth={1.5} /></div>
                  <h3 className="text-xl font-bold text-[#1E293B]">For Trainers</h3>
                </div>
                <ul className="space-y-3 mb-8 flex-grow">
                  {[
                    "Create and deliver learning content", 
                    "Assign role-based learning", 
                    "Track learner performance", 
                    "Get AI-powered insights"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-[13px] text-gray-600 font-medium">
                      <Check size={16} className="text-purple-500 shrink-0 mt-0.5" /> {item}
                    </li>
                  ))}
                </ul>
                <ArrowRight size={20} className="text-purple-600 self-end group-hover:translate-x-2 transition-transform" />
              </motion.div>

            </motion.div>
          </div>
        </section>

        {/* 🟢 5. BOTTOM CTA SECTION */}
        <section className="relative py-16 lg:py-20 overflow-hidden bg-[#001f3f] border-b-[4px] border-[#0056D2]">
          
          {/* Background Silhouette (People & Flag) */}
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full h-full bg-[url('https://images.unsplash.com/photo-1524311583145-d5593bd25029?q=80&w=1200&auto=format&fit=crop')] bg-cover bg-bottom mix-blend-luminosity opacity-30"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#001f3f] to-transparent opacity-80"></div>
          
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col md:flex-row items-center justify-between gap-10">
            
            <motion.div variants={fadeInLeft} initial="hidden" whileInView="visible" viewport={{ once: true }} className="md:w-1/2 text-center md:text-left">
              <h2 className="text-2xl sm:text-3xl lg:text-[38px] font-extrabold text-white leading-tight mb-4">
                Be a Part of a Competent<br/>and Future-Ready Workforce
              </h2>
              <p className="text-blue-200 text-sm font-medium">
                Access DocuMind today and contribute to a data-driven India.
              </p>
            </motion.div>

            <motion.div variants={fadeInRight} initial="hidden" whileInView="visible" viewport={{ once: true }} className="md:w-1/2 flex flex-col sm:flex-row items-center justify-center md:justify-end gap-6 sm:gap-10">
              <div className="text-left border-l-2 border-blue-400 pl-4">
                <p className="text-gray-300 font-serif italic text-base sm:text-lg leading-snug">
                  Better Skills.<br/>
                  Better Decisions.<br/>
                  <span className="font-bold text-white not-italic">A Stronger India.</span>
                </p>
              </div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link to="/login" className="inline-flex items-center gap-2 bg-white text-[#003366] hover:bg-gray-100 px-8 py-3.5 rounded font-bold text-sm transition-colors shadow-lg">
                  Get Started <ArrowUpRight size={16} />
                </Link>
              </motion.div>
            </motion.div>

          </div>
        </section>

      </main>
    </div>
  );
}