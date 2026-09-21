import React, { useState } from "react";
import { Link } from "react-router-dom";
import { 
  MapPin, Phone, Mail, Building, FileText, 
  CheckCircle, AlertCircle, Info, ExternalLink
} from "lucide-react";

export default function ContactSupport() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    category: "General Query",
    message: ""
  });
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div className="flex flex-col bg-[#F9FAFB] text-[#333333] font-sans min-h-screen">
      
      {/* 🟢 BREADCRUMB (Official Style) */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-2.5 text-[12px] font-medium text-gray-600 flex items-center gap-2">
          <Link to="/" className="text-[#0056D2] hover:underline">Home</Link>
          <span>/</span>
          <span className="text-gray-800">Contact Us</span>
        </div>
      </div>

      {/* 🟢 OFFICIAL HEADER BANNER */}
      <section className="bg-[#003366] border-b-[4px] border-[#FF9933] relative">
        {/* Subtle background texture for depth without being flashy */}
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 relative z-10">
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-2">Contact Us</h1>
          <p className="text-blue-100 text-sm sm:text-base max-w-2xl">
            Ministry of Statistics and Programme Implementation (MoSPI) <br className="hidden sm:block"/>
            DocuMind AI Competency & Learning Intelligence Platform
          </p>
        </div>
      </section>

      <main className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-10 w-full flex-1">
        
        {/* 🟢 TRICOLOR ACCENT LINE */}
        <div className="flex w-full h-1 mb-8">
          <div className="w-1/3 h-full bg-[#FF9933]"></div>
          <div className="w-1/3 h-full bg-white border-y border-gray-200"></div>
          <div className="w-1/3 h-full bg-[#138808]"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* 🟢 LEFT COLUMN: CONTACT DETAILS & NODAL OFFICER */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Main Office Address */}
            <div className="bg-white border border-gray-300 shadow-sm rounded-sm overflow-hidden">
              <div className="bg-gray-100 border-b border-gray-300 px-4 py-3">
                <h2 className="text-[15px] font-bold text-[#003366] flex items-center gap-2">
                  <Building size={18} /> Head Office Details
                </h2>
              </div>
              <div className="p-4 space-y-4 text-sm">
                <div className="flex items-start gap-3">
                  <MapPin size={18} className="text-[#0056D2] shrink-0 mt-0.5" />
                  <p className="text-gray-700 leading-relaxed">
                    <strong>Ministry of Statistics & Programme Implementation</strong><br/>
                    Kanpur, Uttar Pradesh - 208012, India.
                  </p>
                </div>
                
                <div className="flex items-start gap-3">
                  <Mail size={18} className="text-[#0056D2] shrink-0 mt-0.5" />
                    <p className="text-gray-700">
                  <strong>Email:</strong><br/>
                  <a href="mailto:support.mstech4407@gmail.com" className="text-[#0056D2] hover:text-[#003366] hover:underline transition-colors font-medium break-all">support.mstech4407@gmail.com</a></p>
                  </div>
              </div>
            </div>

            {/* Grievance / Nodal Officer (Adds authentic gov feel) */}
            <div className="bg-white border border-gray-300 shadow-sm rounded-sm overflow-hidden">
              <div className="bg-[#E6F0FA] border-b border-[#B3D4F5] px-4 py-3">
                <h2 className="text-[15px] font-bold text-[#003366] flex items-center gap-2">
                  <AlertCircle size={18} /> Grievance Redressal
                </h2>
              </div>
              <div className="p-4 text-sm text-gray-700">
                <p className="mb-3">For any unresolved queries or technical escalations, please contact the Nodal Officer:</p>
                <div className="bg-gray-50 p-3 border border-gray-200 rounded-sm">
                  <p className="font-bold text-[#333333]">Shri. [Name Placeholder]</p>
                  <p className="text-xs mb-1">Director (IT) & Nodal Officer - DocuMind</p>
                  <a href="mailto:manassingh1509@gmail.com" className="text-[#0056D2] hover:text-[#003366] hover:underline transition-colors font-medium">
                    manassingh1509@gmail.com
                  </a>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="bg-white border border-gray-300 shadow-sm rounded-sm overflow-hidden h-[250px] relative">
  {/* Real-time Google Map Embed */}
  <iframe
    src="https://maps.google.com/maps?q=Kanpur,%20Uttar%20Pradesh,%20India&t=&z=12&ie=UTF8&iwloc=&output=embed"
    width="100%"
    height="100%"
    style={{ border: 0 }}
    allowFullScreen=""
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
    title="Kanpur Location Map"
    className="w-full h-full"
  ></iframe>
  
  {/* Floating Link Button */}
  <div className="absolute bottom-2 left-2 bg-white/95 backdrop-blur-sm px-2 py-1 text-[10px] border border-gray-200 font-medium shadow-sm rounded-sm">
    <a 
      href="https://www.google.com/maps/place/Kanpur,+Uttar+Pradesh,+India/" 
      target="_blank" 
      rel="noopener noreferrer" 
      className="text-[#0056D2] flex items-center gap-1 hover:underline"
    >
      Open in Google Maps <ExternalLink size={10}/>
    </a>
  </div>
</div>

          </div>

          {/* 🟢 RIGHT COLUMN: QUERY / FEEDBACK FORM */}
          <div className="lg:col-span-8">
            <div className="bg-white border border-gray-300 shadow-sm rounded-sm overflow-hidden">
              
              <div className="bg-[#003366] px-6 py-4">
                <h2 className="text-lg font-bold text-white flex items-center gap-2">
                  <FileText size={20} /> Submit Feedback / Query
                </h2>
                <p className="text-[12px] text-blue-200 mt-1">Please fill out the form below. Fields marked with an asterisk (*) are mandatory.</p>
              </div>

              <div className="p-6 sm:p-8">
                {submitted ? (
                  <div className="bg-[#EDF7ED] border border-[#C5E1A5] p-6 rounded-sm text-center">
                    <CheckCircle className="text-[#2E7D32] mx-auto mb-3" size={40} />
                    <h3 className="text-lg font-bold text-[#1B5E20] mb-2">Request Submitted Successfully</h3>
                    <p className="text-sm text-gray-700">Your query has been registered. A reference number has been sent to your email. Our team will contact you shortly.</p>
                    <button onClick={() => setSubmitted(false)} className="mt-6 text-sm font-semibold text-[#0056D2] hover:underline">Submit another query</button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-[13px] font-bold text-gray-800 mb-1.5">Full Name <span className="text-red-500">*</span></label>
                        <input 
                          type="text" 
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="w-full px-3 py-2.5 border border-gray-300 rounded-sm text-sm focus:border-[#0056D2] focus:ring-1 focus:ring-[#0056D2] outline-none transition-colors"
                          placeholder="Enter your full name"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-[13px] font-bold text-gray-800 mb-1.5">Email Address <span className="text-red-500">*</span></label>
                        <input 
                          type="email" 
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="w-full px-3 py-2.5 border border-gray-300 rounded-sm text-sm focus:border-[#0056D2] focus:ring-1 focus:ring-[#0056D2] outline-none transition-colors"
                          placeholder="Enter active email address"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-[13px] font-bold text-gray-800 mb-1.5">Mobile Number</label>
                        <input 
                          type="tel" 
                          name="mobile"
                          value={formData.mobile}
                          onChange={handleInputChange}
                          className="w-full px-3 py-2.5 border border-gray-300 rounded-sm text-sm focus:border-[#0056D2] focus:ring-1 focus:ring-[#0056D2] outline-none transition-colors"
                          placeholder="10-digit mobile number"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-[13px] font-bold text-gray-800 mb-1.5">Category <span className="text-red-500">*</span></label>
                        <select 
                          name="category"
                          value={formData.category}
                          onChange={handleInputChange}
                          className="w-full px-3 py-2.5 border border-gray-300 rounded-sm text-sm focus:border-[#0056D2] focus:ring-1 focus:ring-[#0056D2] outline-none transition-colors bg-white cursor-pointer"
                        >
                          <option>General Query</option>
                          <option>Technical Issue / Bug</option>
                          <option>Platform Onboarding</option>
                          <option>Content / Course Feedback</option>
                          <option>Grievance</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-[13px] font-bold text-gray-800 mb-1.5">Message / Description <span className="text-red-500">*</span></label>
                      <textarea 
                        rows="6" 
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        className="w-full px-3 py-2.5 border border-gray-300 rounded-sm text-sm focus:border-[#0056D2] focus:ring-1 focus:ring-[#0056D2] outline-none transition-colors resize-none"
                        placeholder="Please describe your query or feedback in detail..."
                      />
                      <p className="text-[11px] text-gray-500 mt-1 flex items-center gap-1">
                        <Info size={12}/> Please do not share sensitive personal information (like passwords) in this form.
                      </p>
                    </div>

                    {/* Standard Government Portal Note & Submit */}
                    <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-gray-200">
                      <p className="text-[11px] text-gray-500 text-center sm:text-left max-w-xs">
                        By submitting this form, you agree to the Terms of Use and Privacy Policy of the MoSPI portal.
                      </p>
                      <button 
                        type="submit" 
                        className="w-full sm:w-auto bg-[#0056D2] hover:bg-[#0044A8] text-white font-bold text-[13px] px-8 py-3 rounded-sm shadow-sm transition-colors focus:ring-2 focus:ring-offset-2 focus:ring-[#0056D2] outline-none uppercase tracking-wide"
                      >
                        Submit Form
                      </button>
                    </div>

                  </form>
                )}
              </div>
            </div>
            
            {/* Helpful Note Below Form */}
            <div className="mt-6 bg-[#FEF3C7] border border-[#FDE68A] p-4 rounded-sm flex items-start gap-3">
               <Info size={20} className="text-[#D97706] shrink-0 mt-0.5" />
               <p className="text-[12px] text-[#92400E] leading-relaxed">
                 <strong>Note:</strong> For urgent technical support regarding DocuMind platform access, please ensure you select "Technical Issue / Bug" from the Category dropdown so your ticket can be routed to the IT Support desk immediately.
               </p>
            </div>

          </div>

        </div>
      </main>
    </div>
  );
}