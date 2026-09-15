import React, { useState, useEffect, useRef } from 'react';
import { useParams, useOutletContext } from 'react-router-dom';
import { db, functions } from '../firebase';
import { doc, onSnapshot, updateDoc, arrayUnion } from 'firebase/firestore';
import { httpsCallable } from 'firebase/functions';
import { Send, Loader2, Bot, User, Paperclip, GraduationCap } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ChatRoom() {
  const { chatId } = useParams();
  const { user } = useOutletContext();
  const [chatData, setChatData] = useState(null);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [streamedText, setStreamedText] = useState(""); 
  const messagesEndRef = useRef(null);

  // 1. Real-time Firestore Sync
  useEffect(() => {
    const unsubscribe = onSnapshot(doc(db, "chats", chatId), (docSnap) => {
      if (docSnap.exists()) {
        setChatData(docSnap.data());
      }
    });
    return () => unsubscribe();
  }, [chatId]);

  // Auto-scroll
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chatData?.messages, streamedText, isTyping]);

  // 2. Trigger AI Response automatically if last message is from User
  useEffect(() => {
    if (!chatData || !chatData.messages) return;
    const lastMsg = chatData.messages[chatData.messages.length - 1];
    
    // If the last message is from the user, fetch AI response
    if (lastMsg.role === "user" && !isTyping) {
      fetchAIResponse(lastMsg.content, chatData.messages.slice(0, -1));
    }
  }, [chatData]);

  // 3. Securely call Firebase Cloud Function
  const fetchAIResponse = async (userPrompt, history) => {
    setIsTyping(true);
    setStreamedText(""); // Reset typing effect state
    
    try {
      const generateAIResponse = httpsCallable(functions, 'generateAIResponse');
      const result = await generateAIResponse({ prompt: userPrompt, history: history });
      const fullText = result.data.text;

      // 4. Simulate Typing/Streaming Effect on Frontend
      let i = 0;
      const typeWriter = setInterval(async () => {
        setStreamedText((prev) => prev + fullText.charAt(i));
        i++;
        if (i >= fullText.length) {
          clearInterval(typeWriter);
          // Once typing is done, save it permanently to Firestore
          await updateDoc(doc(db, "chats", chatId), {
            messages: arrayUnion({ role: "ai", content: fullText })
          });
          setIsTyping(false);
          setStreamedText("");
        }
      }, 15); // Adjust speed here

    } catch (error) {
      console.error("AI Generation Error:", error);
      await updateDoc(doc(db, "chats", chatId), {
        messages: arrayUnion({ role: "ai", content: "DocuMind encountered an error processing your request." })
      });
      setIsTyping(false);
    }
  };

  const handleSend = async () => {
    if (!input.trim() || isTyping) return;
    const userMsg = input;
    setInput("");
    
    // Save user message to Firestore immediately
    await updateDoc(doc(db, "chats", chatId), {
      messages: arrayUnion({ role: "user", content: userMsg })
    });
  };

  if (!chatData) return <div className="flex-1 flex items-center justify-center h-full bg-[#0A0A0A]"><Loader2 className="animate-spin text-purple-500" size={32}/></div>;

  return (
    <div className="flex flex-col h-full bg-[#0A0A0A] relative z-10 w-full overflow-hidden">
      
      {/* Background Gradients */}
      <div className="absolute top-[-10%] right-[-5%] w-[400px] h-[400px] bg-purple-700/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Header */}
      <div className="h-16 border-b border-white/5 flex items-center px-6 bg-[#0A0A0A]/80 backdrop-blur-md sticky top-0 z-20 justify-between">
        <h2 className="text-gray-200 font-medium truncate max-w-md flex items-center gap-2">
          <GraduationCap size={18} className="text-purple-400" />
          {chatData.title}
        </h2>
        <span className="text-xs text-cyan-400 border border-cyan-500/30 bg-cyan-500/10 px-2 py-1 rounded">AI Teacher Active</span>
      </div>

      {/* Chat Messages Area */}
      <div className="flex-1 overflow-y-auto p-4 md:p-8 space-y-6 scrollbar-hide pb-32">
        {chatData.messages?.map((msg, idx) => (
          <motion.div key={idx} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className={`flex gap-4 max-w-4xl mx-auto ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            
            {msg.role === 'ai' && (
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-600 to-cyan-600 flex items-center justify-center shrink-0 mt-1 shadow-lg border border-white/10">
                <Bot size={18} className="text-white" />
              </div>
            )}
            
            <div className={`px-5 py-3.5 rounded-2xl max-w-[85%] text-[15px] leading-relaxed shadow-sm ${msg.role === 'user' ? 'bg-purple-600 text-white rounded-tr-sm shadow-[0_0_15px_rgba(147,51,234,0.15)]' : 'bg-white/5 border border-white/10 text-gray-200 rounded-tl-sm backdrop-blur-sm'}`}>
              {/* Note: ReactMarkdown can be added here later to render bolding/tables properly */}
              {msg.content}
            </div>

            {msg.role === 'user' && (
              <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center shrink-0 mt-1 border border-white/10">
                <User size={18} className="text-gray-400" />
              </div>
            )}
          </motion.div>
        ))}
        
        {/* Streaming/Typing UI */}
        <AnimatePresence>
          {isTyping && (
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="flex gap-4 max-w-4xl mx-auto justify-start">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-600 to-cyan-600 flex items-center justify-center shrink-0 mt-1 shadow-lg">
                <Bot size={18} className="text-white" />
              </div>
              <div className="px-5 py-3.5 rounded-2xl bg-white/5 border border-white/10 text-gray-200 rounded-tl-sm backdrop-blur-sm max-w-[85%]">
                {streamedText.length > 0 ? (
                  <span className="text-[15px] leading-relaxed">{streamedText}<span className="animate-pulse">|</span></span>
                ) : (
                  <div className="flex items-center gap-2 text-purple-400"><Loader2 size={16} className="animate-spin"/> <span className="text-sm">DocuMind is thinking...</span></div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <div ref={messagesEndRef} />
      </div>

      {/* Input Area */}
      <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/95 to-transparent pt-12 pb-6 px-4 md:px-8">
        <div className="max-w-4xl mx-auto relative flex items-end bg-[#1A1A1E]/90 backdrop-blur-3xl border border-white/10 focus-within:border-purple-500/60 rounded-3xl p-2 shadow-2xl transition-all">
          <button className="p-3 text-gray-400 hover:text-purple-400 hover:bg-white/5 rounded-xl transition-all mb-1 cursor-pointer"><Paperclip size={20} /></button>
          
          <textarea 
            rows="1" 
            value={input} 
            onChange={(e) => setInput(e.target.value)} 
            onKeyDown={(e) => { if(e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); handleSend(); } }} 
            placeholder="Ask a follow-up question..." 
            className="flex-1 bg-transparent px-3 py-3.5 outline-none text-white placeholder-gray-500 text-[15px] resize-none max-h-32 min-h-[44px]" 
          />
          
          <button onClick={handleSend} disabled={!input.trim() || isTyping} className={`p-3 rounded-xl transition-all mb-1 mr-1 ${input.trim() && !isTyping ? 'bg-purple-600 text-white shadow-[0_0_15px_rgba(147,51,234,0.4)] cursor-pointer hover:bg-purple-500' : 'bg-white/5 text-gray-500 cursor-not-allowed'}`}>
            <Send size={18} />
          </button>
        </div>
        <p className="text-center text-[10px] md:text-xs text-gray-500 mt-3 font-medium tracking-wide">AI Teacher Mode active. Ready to explain your documents.</p>
      </div>
    </div>
  );
}