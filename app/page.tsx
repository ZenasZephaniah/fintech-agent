"use client";
import { useState, useRef, useEffect } from "react";
import { Loader2, ShieldCheck, ArrowRight, Sparkles, AlertCircle, Home, PieChart, History, ScanLine, Send, Landmark, Smartphone, User, Bell, TrendingUp, Zap, CreditCard, MessageSquare, Store, ChevronRight } from "lucide-react";

export default function PhonePeFinalApp() {
  const [activeTab, setActiveTab] = useState('home');
  const [activeAiContext, setActiveAiContext] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [aiResponse, setAiResponse] = useState<any>(null);
  
  // Dedicated Chat Tab State
  const [chatMessages, setChatMessages] = useState<{role: string, text: string}[]>([
    { role: 'ai', text: 'Hi Zenas! I am your PaySense AI. I can analyze your UPI spends to help you build wealth. What would you like to explore today?' }
  ]);
  const [chatInput, setChatInput] = useState('');
  const chatEndRef = useRef<HTMLDivElement>(null);

  // Auto-scroll chat
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [chatMessages]);

  const generateDynamicAIResponse = async (context: string) => {
    setLoading(true);
    setActiveAiContext(context);
    setAiResponse(null);
    await new Promise((resolve) => setTimeout(resolve, 1500));

    const insights: Record<string, any> = {
      'insurance': {
        title: "Health Cover Assessment",
        greeting: "Reviewing the ₹1 Crore Health Cover (₹1,250/mo)?",
        insight: "Based on your UPI history, you spent ₹5,500 on Swiggy this month.",
        contextualMath: "This premium equals just 3 average food delivery orders.",
        actionableAdvice: "Cutting junk food slightly fully funds a ₹1 Crore safety net.",
        btnText: "Secure My Health"
      },
      'mutual_fund': {
        title: "Wealth Generation Plan",
        greeting: "Looking to start a Mutual Fund SIP?",
        insight: "Your wallet balance is ₹42,500, but earning 0% interest.",
        contextualMath: "Moving ₹5,000/mo into an Index Fund could grow to ₹8.2L in 10 yrs.",
        actionableAdvice: "Beat inflation without changing your lifestyle.",
        btnText: "Start ₹5000 SIP"
      }
    };

    setAiResponse(insights[context]);
    setLoading(false);
  };

  const handleChatSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!chatInput.trim()) return;
    
    setChatMessages(prev => [...prev, { role: 'user', text: chatInput }]);
    const userInput = chatInput;
    setChatInput('');
    
    setTimeout(() => {
      setChatMessages(prev => [...prev, { 
        role: 'ai', 
        text: `Based on your recent UPI history, I see you've been spending heavily on dining. Instead of "${userInput}", I highly recommend redirecting ₹1,000 this month into an emergency Liquid Fund. Should I set that up for you in one click?` 
      }]);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gray-300 flex justify-center items-center p-4 font-sans">
      <div className="w-full max-w-[400px] h-[800px] bg-[#f5f5f5] rounded-[3rem] shadow-2xl overflow-hidden border-[8px] border-gray-900 flex flex-col relative">
        
        {/* EXACT PHONEPE HEADER (Updated with Name & Benefits) */}
        <div className="bg-[#5f259f] p-4 pt-8 pb-10 text-white relative shadow-md z-10">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center overflow-hidden border border-white/30 font-bold text-lg">
                Z
              </div>
              <div className="leading-tight">
                <h1 className="text-sm font-bold opacity-90 flex items-center gap-1">Hi, Zenas <ChevronRight className="w-4 h-4"/></h1>
                <p className="text-[10px] opacity-80 text-purple-200">Unlock your premium financial benefits</p>
              </div>
            </div>
            <div className="flex gap-3">
              <ScanLine className="w-6 h-6 cursor-pointer hover:text-purple-200" />
              <Bell className="w-6 h-6" />
            </div>
          </div>

          {/* Floating AI Search Bar */}
          <div 
            onClick={() => setActiveTab('ai')}
            className="mt-6 bg-white rounded-full py-3 px-4 flex items-center gap-3 text-gray-500 shadow-lg cursor-pointer transform transition hover:scale-[1.02]"
          >
            <Sparkles className="w-5 h-5 text-[#5f259f]" />
            <span className="text-sm font-medium">Ask PaySense AI anything...</span>
          </div>
        </div>

        {/* --- MAIN SCROLLABLE CONTENT (Dynamic based on tabs) --- */}
        <div className="flex-1 overflow-y-auto z-20 pb-24 relative">
          
          {/* HOME TAB */}
          {activeTab === 'home' && (
            <div className="p-3 space-y-3 mt-2 animate-in fade-in">
              <div className="bg-white rounded-xl shadow-sm p-4">
                <h3 className="font-bold text-gray-800 text-sm mb-4">Transfer Money</h3>
                <div className="grid grid-cols-4 gap-2">
                  <div className="flex flex-col items-center gap-2"><div className="bg-[#5f259f] p-3 rounded-2xl text-white"><User className="w-6 h-6"/></div><span className="text-[11px] font-semibold text-gray-700 text-center">To Mobile</span></div>
                  <div className="flex flex-col items-center gap-2"><div className="bg-[#5f259f] p-3 rounded-2xl text-white"><Landmark className="w-6 h-6"/></div><span className="text-[11px] font-semibold text-gray-700 text-center">To Bank</span></div>
                  <div className="flex flex-col items-center gap-2"><div className="bg-[#5f259f] p-3 rounded-2xl text-white"><Send className="w-6 h-6"/></div><span className="text-[11px] font-semibold text-gray-700 text-center">To Self</span></div>
                  <div className="flex flex-col items-center gap-2"><div className="bg-[#5f259f] p-3 rounded-2xl text-white"><Landmark className="w-6 h-6"/></div><span className="text-[11px] font-semibold text-gray-700 text-center">Balance</span></div>
                </div>
              </div>

              {/* GenAI Product Placement */}
              <div className="bg-gradient-to-r from-[#1a1a2e] to-[#16213e] rounded-xl shadow-md p-4 relative overflow-hidden">
                <Sparkles className="absolute -right-2 -top-2 w-20 h-20 text-blue-500/20 animate-pulse" />
                <div className="flex items-center gap-2 mb-2">
                  <span className="bg-blue-600 text-white text-[10px] font-black px-2 py-0.5 rounded uppercase tracking-wider">PaySense AI</span>
                </div>
                <h3 className="text-white font-bold text-sm mb-1">Stop leaving money idle.</h3>
                <p className="text-gray-400 text-xs mb-4">Let AI translate your daily UPI spends into a wealth strategy.</p>
                <div className="flex gap-2">
                  <button onClick={() => generateDynamicAIResponse('insurance')} className="bg-white text-gray-900 text-xs font-bold py-2 px-3 rounded-lg flex items-center gap-1"><ShieldCheck className="w-4 h-4 text-green-600"/> Analyze Insurance</button>
                  <button onClick={() => generateDynamicAIResponse('mutual_fund')} className="bg-blue-600 text-white text-xs font-bold py-2 px-3 rounded-lg flex items-center gap-1"><TrendingUp className="w-4 h-4"/> Build Wealth</button>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-sm p-4">
                <h3 className="font-bold text-gray-800 text-sm mb-4">Recharge & Pay Bills</h3>
                <div className="grid grid-cols-4 gap-y-5 gap-x-2">
                  <div className="flex flex-col items-center gap-2"><Smartphone className="w-7 h-7 text-[#5f259f]"/><span className="text-[11px] font-semibold text-gray-700 text-center">Mobile</span></div>
                  <div className="flex flex-col items-center gap-2"><Zap className="w-7 h-7 text-yellow-500"/><span className="text-[11px] font-semibold text-gray-700 text-center">Electricity</span></div>
                  <div className="flex flex-col items-center gap-2"><CreditCard className="w-7 h-7 text-blue-500"/><span className="text-[11px] font-semibold text-gray-700 text-center">Credit Card</span></div>
                  <div className="flex flex-col items-center gap-2"><Home className="w-7 h-7 text-orange-500"/><span className="text-[11px] font-semibold text-gray-700 text-center">Rent</span></div>
                </div>
              </div>
            </div>
          )}

          {/* DEDICATED AI CHAT TAB */}
          {activeTab === 'ai' && (
            <div className="flex flex-col h-full bg-gray-50 animate-in slide-in-from-bottom-4">
              <div className="flex-1 overflow-y-auto p-4 space-y-4 pb-32">
                <div className="flex justify-center mb-6">
                  <div className="bg-purple-100 text-[#5f259f] text-[10px] font-bold px-3 py-1 rounded-full flex items-center gap-1">
                    <ShieldCheck className="w-3 h-3"/> Bank-Grade AI Encryption
                  </div>
                </div>
                {chatMessages.map((msg, idx) => (
                  <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                    <div className={`max-w-[80%] p-3 rounded-2xl text-sm ${msg.role === 'user' ? 'bg-[#5f259f] text-white rounded-br-none' : 'bg-white shadow-sm border border-gray-100 text-gray-800 rounded-bl-none'}`}>
                      {msg.role === 'ai' && <Sparkles className="w-4 h-4 text-purple-500 mb-1 inline-block mr-1"/>}
                      {msg.text}
                    </div>
                  </div>
                ))}
                <div ref={chatEndRef} />
              </div>
              <div className="absolute bottom-0 w-full bg-white border-t p-4 z-40">
                <form onSubmit={handleChatSubmit} className="flex gap-2">
                  <input type="text" value={chatInput} onChange={(e) => setChatInput(e.target.value)} placeholder="E.g., How much did I spend on food?" className="flex-1 bg-gray-100 rounded-full px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#5f259f]"/>
                  <button type="submit" className="bg-[#5f259f] text-white p-3 rounded-full hover:bg-purple-800"><Send className="w-5 h-5"/></button>
                </form>
              </div>
            </div>
          )}

          {/* OTHER STATIC TABS */}
          {['stores', 'wealth', 'history'].includes(activeTab) && (
            <div className="h-full flex flex-col items-center justify-center text-gray-400 p-8 text-center animate-in fade-in">
              <Loader2 className="w-12 h-12 mb-4 animate-spin opacity-20" />
              <h2 className="text-xl font-bold text-gray-700 capitalize">{activeTab} Dashboard</h2>
              <p className="text-sm mt-2">Syncing your latest UPI data securely...</p>
            </div>
          )}
        </div>

        {/* --- DYNAMIC BOTTOM NAV --- */}
        <div className="absolute bottom-0 w-full bg-white border-t border-gray-200 px-6 py-3 flex justify-between items-center z-50 rounded-b-[2.5rem]">
          <div onClick={()=>setActiveTab('home')} className={`flex flex-col items-center gap-1 cursor-pointer transition-colors ${activeTab === 'home' ? 'text-[#5f259f]' : 'text-gray-400'}`}><Home className="w-6 h-6"/><span className="text-[10px] font-bold">Home</span></div>
          <div onClick={()=>setActiveTab('stores')} className={`flex flex-col items-center gap-1 cursor-pointer transition-colors ${activeTab === 'stores' ? 'text-[#5f259f]' : 'text-gray-400'}`}><Store className="w-6 h-6"/><span className="text-[10px] font-bold">Stores</span></div>
          
          {/* AI Center Button */}
          <div onClick={()=>setActiveTab('ai')} className="flex flex-col items-center cursor-pointer -mt-6 relative">
            <div className={`p-4 rounded-full shadow-lg ${activeTab === 'ai' ? 'bg-[#5f259f] text-white' : 'bg-gradient-to-r from-purple-500 to-indigo-600 text-white'} animate-bounce-slight`}>
              <Sparkles className="w-6 h-6"/>
            </div>
            <span className={`text-[10px] font-black mt-1 ${activeTab === 'ai' ? 'text-[#5f259f]' : 'text-gray-600'}`}>PaySense AI</span>
          </div>

          <div onClick={()=>setActiveTab('wealth')} className={`flex flex-col items-center gap-1 cursor-pointer transition-colors ${activeTab === 'wealth' ? 'text-[#5f259f]' : 'text-gray-400'}`}><PieChart className="w-6 h-6"/><span className="text-[10px] font-bold">Wealth</span></div>
          <div onClick={()=>setActiveTab('history')} className={`flex flex-col items-center gap-1 cursor-pointer transition-colors ${activeTab === 'history' ? 'text-[#5f259f]' : 'text-gray-400'}`}><History className="w-6 h-6"/><span className="text-[10px] font-bold">History</span></div>
        </div>

        {/* --- DORAEMON OVERLAY MODAL (For Homepage Buttons) --- */}
        <div className={`absolute bottom-0 left-0 w-full bg-white z-[60] rounded-t-3xl shadow-[0_-10px_40px_rgba(0,0,0,0.3)] transition-transform duration-500 ease-in-out ${activeAiContext ? 'translate-y-0' : 'translate-y-[100%]'}`} style={{ height: '85%' }}>
          {activeAiContext && (
            <div className="flex flex-col h-full p-6 pt-2">
              <div className="w-12 h-1.5 bg-gray-200 rounded-full mx-auto mb-4"></div>
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-bold flex items-center gap-2 text-indigo-900"><Sparkles className="w-6 h-6 text-indigo-600" /> PaySense AI</h2>
                <button onClick={() => setActiveAiContext(null)} className="bg-gray-100 p-2 rounded-full text-gray-600"><X className="w-5 h-5"/></button>
              </div>

              {loading ? (
                <div className="flex-1 flex flex-col items-center justify-center space-y-4">
                  <Loader2 className="w-12 h-12 animate-spin text-[#5f259f]" />
                  <p className="text-gray-500 font-semibold text-sm animate-pulse">Correlating UPI Context...</p>
                </div>
              ) : aiResponse && (
                <div className="flex-1 flex flex-col animate-in fade-in duration-500">
                  <h3 className="text-lg font-bold text-gray-800 mb-4 bg-indigo-50 p-3 rounded-xl border border-indigo-100">{aiResponse.title}</h3>
                  <p className="text-sm font-bold text-gray-800 mb-4">{aiResponse.greeting}</p>
                  <div className="space-y-3 mb-6 flex-1">
                    <div className="bg-orange-50 p-4 rounded-2xl border-l-4 border-orange-400"><p className="text-sm text-gray-700">{aiResponse.insight}</p></div>
                    <div className="bg-green-50 p-4 rounded-2xl border-l-4 border-green-500"><p className="text-sm text-gray-800 font-medium">{aiResponse.contextualMath}</p></div>
                    <p className="text-sm text-gray-600 px-2 italic">"{aiResponse.actionableAdvice}"</p>
                  </div>
                  <button onClick={() => setActiveAiContext(null)} className="w-full bg-[#5f259f] text-white font-bold py-4 rounded-2xl shadow-lg flex justify-center items-center gap-2">
                    {aiResponse.btnText} <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              )}
            </div>
          )}
        </div>

      </div>
    </div>
  );
}