import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  Phone, Mail, MapPin, HelpCircle, ArrowRight, 
  Clock, ShieldCheck, ExternalLink, Globe, Plus, 
  Lightbulb, Settings, Send, Users
} from "lucide-react";

export default function ContactSupport() {
  const [activeFaq, setActiveFaq] = useState(null);

  // Animations
  const spr = { type: "spring", stiffness: 70, damping: 14 };
  const fadeInUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { ...spr, stiffness: 85, damping: 15 } } };
  const fadeInLeft = { hidden: { opacity: 0, x: -40 }, visible: { opacity: 1, x: 0, transition: spr } };
  const fadeInRight = { hidden: { opacity: 0, x: 40 }, visible: { opacity: 1, x: 0, transition: spr } };
  const stagger = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.1 } } };
  const float = { y: [0, -8, 0], transition: { duration: 6, repeat: Infinity, ease: "easeInOut" } };

  const faqs = [
    "How can I access DocuMind?",
    "Is there any cost to use the platform?",
    "How can I request training for my department?",
    "Where can I find official guidelines and resources?"
  ];

  return (
    <div className="flex flex-col bg-[#F8FAFC] text-[#1E293B] font-sans overflow-x-hidden relative selection:bg-[#0056D2] selection:text-white">
      
      {/* 🟢 BREADCRUMB */}
      <div className="bg-white border-b border-gray-100 relative z-20">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-3 text-[11px] font-bold text-gray-500 whitespace-nowrap">
          <Link className="hover:text-[#0056D2] transition-colors" to="/">Home</Link>
          <span className="mx-2 text-gray-300">&gt;</span>
          <span className="text-[#0056D2]">Contact Us</span>
        </div>
      </div>

      <main id="main-content" className="flex-1">
        
        {/* 🟢 1. HERO SECTION */}
        <section className="relative bg-gradient-to-br from-[#F4F8FB] to-white pt-12 pb-16 lg:pt-20 lg:pb-24 overflow-hidden border-b border-gray-100">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center relative z-10">
            
            {/* Left Content */}
            <motion.div variants={fadeInLeft} initial="hidden" animate="visible" className="flex flex-col z-20">
              <span className="text-gray-500 font-bold text-[11px] uppercase tracking-[0.15em] mb-4 block">
                LET'S CONNECT
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-[60px] font-extrabold text-[#0056D2] mb-2 tracking-tight leading-tight">
                Contact Us
              </h1>
              <h2 className="text-2xl sm:text-[32px] font-bold text-[#1E293B] mb-4">
                We're here to help.
              </h2>
              <p className="text-gray-600 text-[14px] sm:text-[16px] leading-relaxed mb-8 max-w-md font-medium">
                For queries, suggestions, support or collaboration, reach out to us. Together, we can build a stronger, data-driven India.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex items-center gap-3 bg-white p-3 rounded-lg border border-gray-100 shadow-sm flex-1">
                  <div className="bg-green-50 text-green-600 p-2 rounded-full"><Users size={20} /></div>
                  <div>
                    <h4 className="text-xs font-bold text-[#1E293B]">Support</h4>
                    <p className="text-[10px] text-gray-500">For learners, trainers and departments</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 bg-white p-3 rounded-lg border border-gray-100 shadow-sm flex-1">
                  <div className="bg-purple-50 text-purple-600 p-2 rounded-full"><Clock size={20} /></div>
                  <div>
                    <h4 className="text-xs font-bold text-[#1E293B]">Timely Response</h4>
                    <p className="text-[10px] text-gray-500">We usually respond within 1-2 working days</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 bg-white p-3 rounded-lg border border-gray-100 shadow-sm flex-1">
                  <div className="bg-orange-50 text-orange-500 p-2 rounded-full"><ShieldCheck size={20} /></div>
                  <div>
                    <h4 className="text-xs font-bold text-[#1E293B]">Feedback Matters</h4>
                    <p className="text-[10px] text-gray-500">Help us improve DocuMind</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Image Content */}
            <motion.div variants={fadeInRight} initial="hidden" animate="visible" className="relative w-full h-[350px] sm:h-[450px] flex items-center justify-center mt-6 lg:mt-0">
              <div className="absolute top-0 right-0 w-[95%] h-[90%] rounded-2xl shadow-xl z-10 border-4 border-white overflow-hidden group">
                 <img src="https://images.unsplash.com/photo-1587474260584-136574528ed5?q=80&w=1000&auto=format&fit=crop" alt="Sardar Patel Bhawan" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                 <div className="absolute bottom-4 right-4 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded text-white text-[10px] font-bold tracking-wider">
                   SARDAR PATEL BHAWAN
                 </div>
              </div>
              
              <motion.div animate={float} className="absolute top-10 left-[-10px] sm:left-[-20px] bg-white/95 backdrop-blur-md p-4 sm:p-5 shadow-2xl rounded-xl z-30 border border-gray-100 min-w-[160px] text-center">
                <p className="font-semibold text-[#0056D2] text-[15px] sm:text-[17px] font-serif italic leading-tight">
                  People.<br/>Data.<br/>Progress.<br/>
                  <span className="text-[#F59E0B] font-bold not-italic">A Stronger India.</span>
                </p>
              </motion.div>

              <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }} className="absolute bottom-16 right-[-10px] sm:right-[-20px] bg-white/95 backdrop-blur-md p-4 shadow-2xl rounded-xl z-30 border border-gray-100 max-w-[200px] border-l-4 border-blue-500">
                <p className="font-bold text-[#1E293B] text-[11px] sm:text-xs leading-relaxed italic">
                  "Your feedback helps us build a better and more inclusive statistical ecosystem."
                </p>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* 🟢 2. MAIN FORM & INFO GRID */}
        <section className="py-16 bg-white">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
              
              {/* LEFT: Send Message Form */}
              <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                <h3 className="text-2xl font-extrabold text-[#1E293B] mb-2">Send Us a Message</h3>
                <p className="text-gray-500 text-sm mb-8">Fill in the details below and we'll get back to you.</p>
                
                <form className="space-y-5">
                  <div>
                    <label className="block text-xs font-bold text-gray-700 mb-1.5">Full Name <span className="text-red-500">*</span></label>
                    <input type="text" placeholder="Enter your full name" className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-gray-50 text-sm focus:bg-white focus:border-[#0056D2] focus:ring-2 focus:ring-[#0056D2]/20 outline-none transition-all" />
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-bold text-gray-700 mb-1.5">Email Address <span className="text-red-500">*</span></label>
                      <input type="email" placeholder="Enter your email" className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-gray-50 text-sm focus:bg-white focus:border-[#0056D2] focus:ring-2 focus:ring-[#0056D2]/20 outline-none transition-all" />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-gray-700 mb-1.5">Phone Number</label>
                      <input type="tel" placeholder="Enter your phone number" className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-gray-50 text-sm focus:bg-white focus:border-[#0056D2] focus:ring-2 focus:ring-[#0056D2]/20 outline-none transition-all" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-700 mb-1.5">Subject <span className="text-red-500">*</span></label>
                    <select className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-gray-50 text-sm text-gray-600 focus:bg-white focus:border-[#0056D2] focus:ring-2 focus:ring-[#0056D2]/20 outline-none transition-all appearance-none cursor-pointer">
                      <option>Select a subject</option>
                      <option>Platform Support</option>
                      <option>Feedback & Suggestions</option>
                      <option>Training Request</option>
                      <option>Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-700 mb-1.5">Message <span className="text-red-500">*</span></label>
                    <textarea rows="4" placeholder="Type your message here..." className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-gray-50 text-sm focus:bg-white focus:border-[#0056D2] focus:ring-2 focus:ring-[#0056D2]/20 outline-none transition-all resize-none"></textarea>
                    <div className="text-right text-[10px] text-gray-400 mt-1">0/500</div>
                  </div>

                  <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="bg-[#0056D2] hover:bg-blue-700 text-white px-8 py-3.5 rounded-lg text-sm font-bold flex items-center justify-center gap-2 w-full sm:w-auto shadow-md transition-colors">
                    Send Message <Send size={16} />
                  </motion.button>
                </form>
              </motion.div>

              {/* RIGHT: Get in Touch & Map */}
              <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                <h3 className="text-2xl font-extrabold text-[#1E293B] mb-2">Get in Touch</h3>
                <p className="text-gray-500 text-sm mb-8">You can also reach us through the following channels.</p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                  {[
                    { icon: Phone, color: "text-blue-500", bg: "bg-blue-50", title: "Call Us", desc: "+91-11-23344689", sub: "Mon - Fri (9:30 AM - 6:00 PM)" },
                    { icon: Mail, color: "text-blue-500", bg: "bg-blue-50", title: "Email Us", desc: "support-documind@mospi.gov.in", sub: "We usually respond within 1-2 working days", link: true },
                    { icon: MapPin, color: "text-red-500", bg: "bg-red-50", title: "Visit Us", desc: "Sardar Patel Bhavan, Sansad Marg, New Delhi - 110001", linkText: "Get Directions", link: true },
                    { icon: HelpCircle, color: "text-green-500", bg: "bg-green-50", title: "Help & Support", desc: "Frequently asked questions and user support.", linkText: "Visit Help Centre", link: true }
                  ].map((card, i) => (
                    <motion.div key={i} variants={fadeInUp} className="bg-[#F8FAFC] border border-gray-100 p-5 rounded-xl hover:shadow-md transition-shadow group">
                      <div className={`${card.bg} ${card.color} w-10 h-10 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                        <card.icon size={20} />
                      </div>
                      <h4 className="font-bold text-[#1E293B] text-sm mb-1">{card.title}</h4>
                      <p className={`text-[12px] ${card.link && !card.linkText ? 'text-[#0056D2] font-semibold' : 'text-gray-600'} leading-relaxed`}>{card.desc}</p>
                      {card.sub && <p className="text-[10px] text-gray-400 mt-1">{card.sub}</p>}
                      {card.linkText && (
                        <Link to="#" className="inline-flex items-center gap-1 text-[11px] font-bold text-[#0056D2] mt-3 hover:underline">
                          {card.linkText} <ArrowRight size={12} />
                        </Link>
                      )}
                    </motion.div>
                  ))}
                </div>

                {/* Map Box */}
                <motion.div variants={fadeInUp} className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm">
                  <div className="p-4 border-b border-gray-100 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <MapPin size={18} className="text-[#0056D2]" />
                      <div>
                        <h4 className="font-bold text-sm text-[#1E293B]">Our Location</h4>
                        <p className="text-[10px] text-gray-500">Ministry of Statistics & Programme Implementation</p>
                      </div>
                    </div>
                    <button className="text-[11px] font-bold text-[#0056D2] border border-[#0056D2] px-3 py-1.5 rounded hover:bg-blue-50 transition-colors flex items-center gap-1">
                      View on Google Maps <ExternalLink size={12} />
                    </button>
                  </div>
                  <div className="h-[200px] w-full bg-gray-100 relative">
                    <img src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=800&auto=format&fit=crop" alt="Map Location" className="w-full h-full object-cover opacity-80" />
                    <div className="absolute inset-0 bg-[#0056D2]/10 mix-blend-multiply"></div>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-red-500 drop-shadow-md">
                      <MapPin size={32} fill="white" />
                    </div>
                  </div>
                </motion.div>

              </motion.div>
            </div>
          </div>
        </section>

        {/* 🟢 3. SOCIALS & NEWSLETTER */}
        <section className="py-12 bg-[#F4F8FB] border-y border-gray-100">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 bg-white p-6 rounded-xl border border-gray-200 shadow-sm w-full">
              <div>
                <h4 className="font-extrabold text-[#1E293B] text-lg mb-1">Other Ways to Reach Us</h4>
                <p className="text-xs text-gray-500">Connect with us through our official platforms.</p>
              </div>
              <div className="flex items-center gap-4 flex-wrap">
                <a href="#" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
                  <div className="w-8 h-8 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center"><Globe size={16} /></div>
                </a>
                
                {/* 🔵 Custom LinkedIn SVG */}
                <a href="#" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
                  <div className="w-8 h-8 rounded-full bg-[#0A66C2] text-white flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                  </div>
                </a>

                {/* 🔴 Custom YouTube SVG */}
                <a href="#" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
                  <div className="w-8 h-8 rounded-full bg-[#FF0000] text-white flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
                  </div>
                </a>

                {/* ⚫ Custom X/Twitter SVG */}
                <a href="#" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
                  <div className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"/></svg>
                  </div>
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4 bg-white p-6 rounded-xl border border-gray-200 shadow-sm w-full">
              <div className="w-12 h-12 bg-blue-50 text-[#0056D2] rounded-full flex items-center justify-center shrink-0">
                <Mail size={24} />
              </div>
              <div className="flex-1">
                <h4 className="font-extrabold text-[#1E293B] text-base mb-1">Stay Updated</h4>
                <p className="text-[11px] text-gray-500 mb-3">Get the latest updates, training programs and resources directly in your inbox.</p>
                <div className="flex items-center gap-2">
                   <button className="text-[11px] font-bold text-[#0056D2] border border-[#0056D2] px-4 py-2 rounded hover:bg-blue-50 transition-colors flex items-center gap-1">
                     Subscribe Now <ArrowRight size={12} />
                   </button>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* 🟢 4. FAQS & SIDE CARDS */}
        <section className="py-16 bg-white border-b border-gray-100">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-3 gap-12">
            
            {/* Left: FAQs */}
            <div className="lg:col-span-2">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-extrabold text-[#1E293B] mb-1">Frequently Asked Questions</h3>
                  <p className="text-gray-500 text-sm">Find quick answers to common queries.</p>
                </div>
                <Link to="#" className="hidden sm:flex items-center gap-1 text-sm font-bold text-[#0056D2] hover:underline">
                  View All FAQs <ArrowRight size={14} />
                </Link>
              </div>

              <div className="space-y-3">
                {faqs.map((faq, idx) => (
                  <div key={idx} className="border border-gray-200 rounded-lg bg-gray-50 hover:bg-white hover:border-blue-200 transition-colors cursor-pointer p-4 flex items-center justify-between group">
                    <span className="font-semibold text-sm text-[#1E293B] group-hover:text-[#0056D2] transition-colors">{faq}</span>
                    <Plus size={18} className="text-gray-400 group-hover:text-[#0056D2]" />
                  </div>
                ))}
              </div>
              <Link to="#" className="sm:hidden flex items-center gap-1 text-sm font-bold text-[#0056D2] hover:underline mt-4">
                  View All FAQs <ArrowRight size={14} />
              </Link>
            </div>

            {/* Right: Support Cards */}
            <div className="space-y-5">
              <motion.div whileHover={{ y: -3 }} className="bg-[#F0FDF4] border border-green-100 p-5 rounded-xl flex items-start gap-4">
                <div className="bg-white text-green-500 p-2.5 rounded-full shadow-sm shrink-0"><Lightbulb size={24} /></div>
                <div>
                  <h4 className="font-bold text-[#1E293B] text-sm mb-1.5">Have a Suggestion?</h4>
                  <p className="text-xs text-gray-600 mb-3">We're always open to ideas that can make DocuMind better for everyone.</p>
                  <button className="text-[11px] font-bold text-green-700 bg-white border border-green-200 px-3 py-1.5 rounded hover:bg-green-50 transition-colors flex items-center gap-1">
                    Share Your Feedback <ArrowRight size={12} />
                  </button>
                </div>
              </motion.div>

              <motion.div whileHover={{ y: -3 }} className="bg-[#FAF5FF] border border-purple-100 p-5 rounded-xl flex items-start gap-4">
                <div className="bg-white text-purple-500 p-2.5 rounded-full shadow-sm shrink-0"><Settings size={24} /></div>
                <div>
                  <h4 className="font-bold text-[#1E293B] text-sm mb-1.5">Looking for Technical Support?</h4>
                  <p className="text-xs text-gray-600 mb-3">Facing an issue? Our support team is here to help resolve technical queries.</p>
                  <button className="text-[11px] font-bold text-purple-700 bg-white border border-purple-200 px-3 py-1.5 rounded hover:bg-purple-50 transition-colors flex items-center gap-1">
                    Go to Help Centre <ArrowRight size={12} />
                  </button>
                </div>
              </motion.div>
            </div>

          </div>
        </section>

      </main>
    </div>
  );
}