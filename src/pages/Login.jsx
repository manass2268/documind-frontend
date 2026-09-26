import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  Mail, Lock, Eye, EyeOff, User, Building, 
  MessageSquare, ArrowRight, Check
} from "lucide-react";

export default function Login() {
  const navigate = useNavigate();
  const [loginType, setLoginType] = useState("individual"); // 'individual' | 'organization'
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(true);

  // Form State
  const [formData, setFormData] = useState({
    identifier: "",
    password: ""
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    // Dummy login logic
    console.log("Logging in...", formData, loginType);
    navigate("/dashboard");
  };

  return (
    <div className="flex flex-col min-h-screen font-sans bg-[#F4F7FA] relative selection:bg-[#0056D2] selection:text-white">
      
      {/* 🟢 TOP ACCESSIBILITY BAR */}
      <div className="bg-[#F8F9FA] border-b border-gray-200 py-1.5 hidden md:block z-20 relative">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center text-[11px] font-semibold text-gray-700">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5">
              <img src="https://upload.wikimedia.org/wikipedia/en/thumb/4/41/Flag_of_India.svg/320px-Flag_of_India.svg.png" alt="India Flag" className="w-4 h-2.5 object-cover border border-gray-300" />
              Government of India <span className="text-gray-400 mx-1">|</span> भारत सरकार
            </span>
          </div>
          <div className="flex items-center gap-4 divide-x divide-gray-300">
            <span className="pr-4 hover:text-[#0056D2] cursor-pointer transition-colors">Skip to Main Content</span>
            <span className="px-4 hover:text-[#0056D2] cursor-pointer transition-colors">Screen Reader Access</span>
            <div className="px-4 flex items-center gap-2">
              <button className="hover:text-black">A-</button>
              <button className="hover:text-black font-bold">A</button>
              <button className="hover:text-black">A+</button>
            </div>
            <div className="pl-4 flex items-center gap-2">
              <select className="bg-transparent border-none outline-none cursor-pointer hover:text-[#0056D2]">
                <option>English</option>
                <option>हिन्दी</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* 🟢 HEADER */}
      <header className="bg-white shadow-sm z-20 relative">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          
          <Link to="/" className="flex items-center gap-3">
             <img src="https://upload.wikimedia.org/wikipedia/commons/5/55/Emblem_of_India.svg" alt="Satyameva Jayate" className="h-12 w-auto" />
             <div className="flex flex-col">
               <span className="text-[#003366] font-bold text-[15px] leading-tight">Ministry of Statistics & <br/> Programme Implementation</span>
               <span className="text-gray-500 text-[11px] font-semibold uppercase tracking-wider mt-0.5">Government of India</span>
             </div>
          </Link>

          <nav className="hidden md:flex items-center gap-8 text-[13px] font-bold text-gray-700">
            <Link to="/" className="hover:text-[#0056D2] transition-colors">Home</Link>
            <Link to="/about" className="hover:text-[#0056D2] transition-colors">About</Link>
            <Link to="/knowledge-center" className="hover:text-[#0056D2] transition-colors">Resources</Link>
            <Link to="/support" className="hover:text-[#0056D2] transition-colors">Help & Support</Link>
            <Link to="/contact" className="hover:text-[#0056D2] transition-colors">Contact Us</Link>
          </nav>
        </div>
        {/* Tricolor Strip */}
        <div className="h-1.5 w-full flex">
          <div className="w-1/3 bg-[#FF9933] h-full"></div>
          <div className="w-1/3 bg-white h-full border-b border-gray-200"></div>
          <div className="w-1/3 bg-[#138808] h-full"></div>
        </div>
      </header>

      {/* 🟢 MAIN LOGIN AREA WITH BACKGROUND */}
      <main className="flex-1 relative flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 z-10 min-h-[600px] overflow-hidden">
        
        {/* Abstract Tricolor Background Waves */}
        <div className="absolute inset-0 pointer-events-none opacity-20">
           <svg viewBox="0 0 1440 320" className="absolute top-0 w-full h-auto">
             <path fill="#FF9933" fillOpacity="1" d="M0,96L48,112C96,128,192,160,288,154.7C384,149,480,107,576,96C672,85,768,107,864,133.3C960,160,1056,192,1152,192C1248,192,1344,160,1392,144L1440,128L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
           </svg>
        </div>
        <div className="absolute inset-0 pointer-events-none opacity-10">
           <svg viewBox="0 0 1440 320" className="absolute bottom-0 w-full h-auto">
             <path fill="#138808" fillOpacity="1" d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,208C1248,171,1344,117,1392,90.7L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
           </svg>
        </div>

        {/* Heritage Buildings Line Art Background (Subtle) */}
        <div className="absolute bottom-0 left-0 right-0 h-[250px] bg-[url('https://png.pngtree.com/png-vector/20220815/ourmid/pngtree-indian-monuments-line-art-vector-png-image_6110826.png')] bg-repeat-x bg-bottom opacity-[0.07] pointer-events-none mix-blend-multiply" style={{ backgroundSize: '800px auto' }}></div>

        {/* 🟢 LOGIN CARD */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white/95 backdrop-blur-xl w-full max-w-[460px] rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-gray-100 p-8 relative z-20"
        >
          
          <div className="text-center mb-8">
            <img src="https://upload.wikimedia.org/wikipedia/commons/5/55/Emblem_of_India.svg" alt="Emblem" className="h-10 w-auto mx-auto mb-3 opacity-90" />
            <h2 className="text-[22px] font-black text-[#0F172A] leading-tight">
              Login to <span className="text-[#0056D2]">DocuMind</span>
            </h2>
            <p className="text-[13px] text-gray-500 font-medium mt-1">Access your account to continue</p>
          </div>

          {/* Account Type Toggle */}
          <div className="grid grid-cols-2 gap-3 mb-8">
            <button 
              type="button"
              onClick={() => setLoginType('individual')}
              className={`flex items-start gap-2.5 p-3 rounded-lg border text-left transition-all ${loginType === 'individual' ? 'border-[#0056D2] bg-[#0056D2]/5 ring-1 ring-[#0056D2]/20' : 'border-gray-200 hover:border-gray-300 bg-gray-50'}`}
            >
              <div className={`mt-0.5 ${loginType === 'individual' ? 'text-[#0056D2]' : 'text-gray-400'}`}>
                <User size={18} strokeWidth={2.5}/>
              </div>
              <div>
                <p className={`text-[12px] font-bold leading-none mb-1 ${loginType === 'individual' ? 'text-[#0056D2]' : 'text-gray-700'}`}>For Myself</p>
                <p className="text-[10px] text-gray-500 leading-tight">Students & Individual Learners</p>
              </div>
            </button>

            <button 
              type="button"
              onClick={() => setLoginType('organization')}
              className={`flex items-start gap-2.5 p-3 rounded-lg border text-left transition-all ${loginType === 'organization' ? 'border-[#0056D2] bg-[#0056D2]/5 ring-1 ring-[#0056D2]/20' : 'border-gray-200 hover:border-gray-300 bg-gray-50'}`}
            >
              <div className={`mt-0.5 ${loginType === 'organization' ? 'text-[#0056D2]' : 'text-gray-400'}`}>
                <Building size={18} strokeWidth={2.5}/>
              </div>
              <div>
                <p className={`text-[12px] font-bold leading-none mb-1 ${loginType === 'organization' ? 'text-[#0056D2]' : 'text-gray-700'}`}>For Organization</p>
                <p className="text-[10px] text-gray-500 leading-tight">Schools, Colleges & Institutions</p>
              </div>
            </button>
          </div>

          <form onSubmit={handleLogin} className="space-y-5">
            
            {/* Email Field */}
            <div>
              <label className="block text-[12px] font-bold text-[#1E293B] mb-1.5">Email Address / Mobile Number</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                  <Mail size={16} className="text-gray-400" />
                </div>
                <input 
                  type="text" 
                  name="identifier"
                  value={formData.identifier}
                  onChange={handleInputChange}
                  required
                  className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg text-[13px] focus:border-[#0056D2] focus:ring-2 focus:ring-[#0056D2]/20 outline-none transition-all placeholder:text-gray-400"
                  placeholder="Enter your email address or mobile number"
                />
              </div>
            </div>

            {/* Password Field */}
            <div>
              <div className="flex justify-between items-end mb-1.5">
                <label className="block text-[12px] font-bold text-[#1E293B]">Password</label>
                <Link to="/forgot-password" className="text-[11px] font-bold text-[#0056D2] hover:underline">Forgot Password?</Link>
              </div>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                  <Lock size={16} className="text-gray-400" />
                </div>
                <input 
                  type={showPassword ? "text" : "password"} 
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  required
                  className="w-full pl-10 pr-10 py-2.5 border border-gray-300 rounded-lg text-[13px] focus:border-[#0056D2] focus:ring-2 focus:ring-[#0056D2]/20 outline-none transition-all placeholder:text-gray-400"
                  placeholder="Enter your password"
                />
                <button 
                  type="button" 
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-gray-400 hover:text-gray-600 focus:outline-none"
                >
                  {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
            </div>

            {/* Remember Me */}
            <div className="flex items-center">
              <button 
                type="button"
                onClick={() => setRememberMe(!rememberMe)}
                className={`w-4 h-4 rounded border flex items-center justify-center transition-colors ${rememberMe ? 'bg-[#0056D2] border-[#0056D2]' : 'border-gray-300 bg-white'}`}
              >
                {rememberMe && <Check size={12} className="text-white" strokeWidth={3}/>}
              </button>
              <span className="ml-2 text-[12px] font-semibold text-gray-600 cursor-pointer select-none" onClick={() => setRememberMe(!rememberMe)}>Remember me</span>
            </div>

            {/* Login Button */}
            <button 
              type="submit" 
              className="w-full bg-[#0056D2] hover:bg-[#0044A8] text-white font-bold text-[14px] py-2.5 rounded-lg shadow-sm transition-colors focus:ring-4 focus:ring-[#0056D2]/30 outline-none flex items-center justify-center gap-2"
            >
              Login <ArrowRight size={16} />
            </button>

            {/* OR Divider */}
            <div className="relative flex items-center justify-center mt-6 mb-4">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-200"></div>
              </div>
              <div className="relative bg-white px-3 text-[11px] font-bold text-gray-400">OR</div>
            </div>

            {/* OTP Login */}
            <button 
              type="button" 
              className="w-full bg-white border border-gray-300 hover:bg-gray-50 text-gray-700 font-bold text-[13px] py-2.5 rounded-lg transition-colors focus:ring-4 focus:ring-gray-100 outline-none flex flex-col items-center justify-center gap-0.5"
            >
              <div className="flex items-center gap-2">
                <MessageSquare size={16} className="text-[#0056D2]" />
                <span>Login with OTP</span>
              </div>
              <span className="text-[10px] text-gray-400 font-medium">Get a one-time password on your registered mobile number</span>
            </button>

            {/* Signup Link */}
            <div className="text-center mt-6 pt-4">
              <p className="text-[12px] font-semibold text-gray-600">
                New user? <Link to="/signup" className="text-[#0056D2] hover:underline font-bold inline-flex items-center gap-1">Create an account <ArrowRight size={12}/></Link>
              </p>
            </div>

          </form>
        </motion.div>
      </main>

      {/* 🟢 FOOTER */}
      <footer className="bg-[#002244] text-white py-10 z-20 relative border-t-[4px] border-[#FF9933]">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12">
          
          <div className="md:col-span-4 flex gap-4">
            <img src="https://upload.wikimedia.org/wikipedia/commons/5/55/Emblem_of_India.svg" alt="Emblem" className="h-14 w-auto brightness-0 invert opacity-90" />
            <div>
              <h3 className="text-[14px] font-bold leading-tight mb-1">Ministry of Statistics &<br/>Programme Implementation</h3>
              <p className="text-[11px] text-gray-400 font-semibold uppercase tracking-wider">Government of India</p>
            </div>
          </div>

          <div className="md:col-span-2">
            <h4 className="text-[12px] font-bold uppercase tracking-wider text-gray-400 mb-3">Quick Links</h4>
            <ul className="space-y-2 text-[13px] font-medium text-gray-300">
              <li><Link to="/" className="hover:text-white transition-colors flex items-center gap-2"><ChevronRight size={12}/> Home</Link></li>
              <li><Link to="/about" className="hover:text-white transition-colors flex items-center gap-2"><ChevronRight size={12}/> About Us</Link></li>
              <li><Link to="/knowledge-center" className="hover:text-white transition-colors flex items-center gap-2"><ChevronRight size={12}/> Resources</Link></li>
              <li><Link to="/support" className="hover:text-white transition-colors flex items-center gap-2"><ChevronRight size={12}/> Help & Support</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors flex items-center gap-2"><ChevronRight size={12}/> Contact Us</Link></li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <h4 className="text-[12px] font-bold uppercase tracking-wider text-gray-400 mb-3">Policies</h4>
            <ul className="space-y-2 text-[13px] font-medium text-gray-300">
              <li><Link to="/privacy-policy" className="hover:text-white transition-colors flex items-center gap-2"><ChevronRight size={12}/> Privacy Policy</Link></li>
              <li><Link to="/terms-conditions" className="hover:text-white transition-colors flex items-center gap-2"><ChevronRight size={12}/> Terms & Conditions</Link></li>
              <li><a href="#" className="hover:text-white transition-colors flex items-center gap-2"><ChevronRight size={12}/> Cookie Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors flex items-center gap-2"><ChevronRight size={12}/> Accessibility Statement</a></li>
              <li><a href="#" className="hover:text-white transition-colors flex items-center gap-2"><ChevronRight size={12}/> Disclaimer</a></li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <h4 className="text-[12px] font-bold uppercase tracking-wider text-gray-400 mb-3">Need Help?</h4>
            <ul className="space-y-3 text-[13px] font-medium text-gray-300">
              <li className="flex items-start gap-3">
                <Mail size={16} className="text-gray-400 shrink-0 mt-0.5" />
                <a href="mailto:support-documind@nic.in" className="hover:text-white transition-colors">support-documind@nic.in</a>
              </li>
              <li className="flex items-start gap-3">
                <Phone size={16} className="text-gray-400 shrink-0 mt-0.5" />
                <div>
                  <p>1800-123-4567</p>
                  <p className="text-[11px] text-gray-400 mt-0.5">(Mon - Fri, 9:00 AM - 6:00 PM)</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-gray-400 shrink-0 mt-0.5" />
                <p>New Delhi, India</p>
              </li>
            </ul>
          </div>

        </div>
      </footer>

    </div>
  );
}

// Need to import missing icons for footer
import { ChevronRight, Phone, MapPin } from "lucide-react";