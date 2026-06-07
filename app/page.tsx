"use client";
import { useState } from "react";
import { Loader2, ShieldCheck, Wallet, ArrowRight, Sparkles, AlertCircle, Home, PieChart, History, ScanLine, Send, Landmark, Smartphone, ChevronRight, X, User, Bell, MapPin, Lightbulb, TrendingUp, Zap, CreditCard } from "lucide-react";

export default function PhonePeCloneApp() {
  const [activeTab, setActiveTab] = useState('home');
  const [activeAiContext, setActiveAiContext] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [aiResponse, setAiResponse] = useState<any>(null);

  // VAST MOCK LOGIC ENGINE: Simulating a highly intelligent AI without API keys
  const generateDynamicAIResponse = async (context: string) => {
    setLoading(true);
    setActiveAiContext(context);
    setAiResponse(null);
    
    // Simulate network delay for realism
    await new Promise((resolve) => setTimeout(resolve, 1800));

    const insights: Record<string, any> = {
      'insurance': {
        title: "Health Cover Assessment",
        greeting: "Hi Zenas. Reviewing the ₹1 Crore Health Cover (₹1,250/mo)?",
        insight: "I analyzed your last 30 days of UPI spends. You spent ₹5,800 on Swiggy and Zomato.",
        contextualMath: "This premium equals just 3 average food delivery orders.",
        actionableAdvice: "Cutting junk food by 10% fully funds a ₹1 Crore safety net for your family.",
        btnText: "Proceed to Buy"
      },
      'mutual_fund': {
        title: "Wealth Generation Plan",
        greeting: "Looking to start a Mutual Fund SIP?",
        insight: "Your wallet balance is ₹42,500, but it's earning 0% interest.",
        contextualMath: "If you move just ₹5,000/mo into an Index Fund, historically it could grow to ₹8.2 Lakhs in 10 years.",
        actionableAdvice: "Beat inflation without changing your lifestyle.",
        btnText: "Start ₹5000 SIP"
      },
      'qr_scan': {
        title: "Smart Spending Alert",
        greeting: "Paying ₹850 at 'Starbucks Coffee'?",
        insight: "You've already spent ₹3,200 on cafes this month (15% above your usual).",
        contextualMath: "This ₹850 could pay for 2 weeks of your term life insurance.",
        actionableAdvice: "You have ₹200 in PhonePe cashback. Apply it to this transaction to stay on budget?",
        btnText: "Apply Cashback & Pay"
      }
    };

    setAiResponse(insights[context]);
    setLoading(false);
  };

  const closeAiModal = () => {
    setActiveAiContext(null);
    setAiResponse(null);
  };

  return (
    <div className="min-h-screen bg-gray-300 flex justify-center items-center p-4 font-sans">
      {/* Mobile Device Frame */}
      <div className="w-full max-w-[400px] h-[800px] bg-[#f5f5f5] rounded-[3rem] shadow-2xl overflow-hidden border-[8px] border-gray-900 flex flex-col relative">
        
        {/* --- EXACT PHONEPE HEADER --- */}
        <div className="bg-[#5f259f] p-4 pt-8 pb-12 text-white relative shadow-md z-10">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center overflow-hidden border border-white/30">
                <User className="w-6 h-6 text-white" />
              </div>
              <div className="leading-tight">
                <p className="text-xs font-bold flex items-center gap-1 opacity-90">Add Address <ChevronRight className="w-3 h-3"/></p>
                <p className="text-[10px] opacity-75">IIT Roorkee, Uttarakhand...</p>
              </div>
            </div>
            <div className="flex gap-4">
              <ScanLine className="w-6 h-6 cursor-pointer hover:text-purple-200" onClick={() => generateDynamicAIResponse('qr_scan')} />
              <Bell className="w-6 h-6" />
            </div>
          </div>
        </div>

        {/* --- MAIN SCROLLABLE CONTENT --- */}
        <div className="flex-1 overflow-y-auto -mt-6 z-20 pb-24 px-3 space-y-3">
          
          {/* Transfer Money Section */}
          <div className="bg-white rounded-xl shadow-sm p-4">
            <h3 className="font-bold text-gray-800 text-sm mb-4">Transfer Money</h3>
            <div className="grid grid-cols-4 gap-2">
              <div className="flex flex-col items-center gap-2 cursor-pointer">
                <div className="bg-[#5f259f] p-3 rounded-2xl text-white shadow-sm"><User className="w-6 h-6"/></div>
                <span className="text-[11px] font-semibold text-gray-700 text-center leading-tight">To Mobile<br/>Number</span>
              </div>
              <div className="flex flex-col items-center gap-2 cursor-pointer">
                <div className="bg-[#5f259f] p-3 rounded-2xl text-white shadow-sm"><Landmark className="w-6 h-6"/></div>
                <span className="text-[11px] font-semibold text-gray-700 text-center leading-tight">To Bank/<br/>UPI ID</span>
              </div>
              <div className="flex flex-col items-center gap-2 cursor-pointer">
                <div className="bg-[#5f259f] p-3 rounded-2xl text-white shadow-sm"><Send className="w-6 h-6"/></div>
                <span className="text-[11px] font-semibold text-gray-700 text-center leading-tight">To Self<br/>Account</span>
              </div>
              <div className="flex flex-col items-center gap-2 cursor-pointer">
                <div className="bg-[#5f259f] p-3 rounded-2xl text-white shadow-sm"><Landmark className="w-6 h-6"/></div>
                <span className="text-[11px] font-semibold text-gray-700 text-center leading-tight">Check<br/>Balance</span>
              </div>
            </div>
          </div>

          {/* THE GEN-AI PRODUCT PLACEMENT (PhonePe Sponsored Style) */}
          <div className="bg-gradient-to-r from-[#1a1a2e] to-[#16213e] rounded-xl shadow-md p-4 relative overflow-hidden">
            <Sparkles className="absolute -right-2 -top-2 w-20 h-20 text-blue-500/20 animate-pulse" />
            <div className="flex items-center gap-2 mb-2">
              <span className="bg-blue-600 text-white text-[10px] font-black px-2 py-0.5 rounded uppercase tracking-wider">PaySense AI</span>
              <span className="text-blue-200 text-xs font-semibold">Your Financial Co-Pilot</span>
            </div>
            <h3 className="text-white font-bold text-sm mb-1">Stop leaving money idle.</h3>
            <p className="text-gray-400 text-xs mb-4">Let AI translate your daily UPI spends into a personalized wealth strategy.</p>
            <div className="flex gap-2">
              <button onClick={() => generateDynamicAIResponse('insurance')} className="bg-white text-gray-900 text-xs font-bold py-2 px-3 rounded-lg flex items-center gap-1 shadow-sm">
                <ShieldCheck className="w-4 h-4 text-green-600"/> Analyze Insurance
              </button>
              <button onClick={() => generateDynamicAIResponse('mutual_fund')} className="bg-blue-600 text-white text-xs font-bold py-2 px-3 rounded-lg flex items-center gap-1 shadow-sm">
                <TrendingUp className="w-4 h-4"/> Build Wealth
              </button>
            </div>
          </div>

          {/* Recharge & Pay Bills Section */}
          <div className="bg-white rounded-xl shadow-sm p-4">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-bold text-gray-800 text-sm">Recharge & Pay Bills</h3>
              <span className="bg-gray-100 text-gray-600 text-[10px] font-bold px-2 py-1 rounded-full">My Bills</span>
            </div>
            <div className="grid grid-cols-4 gap-y-5 gap-x-2">
              <div className="flex flex-col items-center gap-2 cursor-pointer">
                <Smartphone className="w-7 h-7 text-[#5f259f]"/>
                <span className="text-[11px] font-semibold text-gray-700 text-center">Mobile<br/>Recharge</span>
              </div>
              <div className="flex flex-col items-center gap-2 cursor-pointer">
                <Zap className="w-7 h-7 text-yellow-500"/>
                <span className="text-[11px] font-semibold text-gray-700 text-center">Electricity</span>
              </div>
              <div className="flex flex-col items-center gap-2 cursor-pointer">
                <CreditCard className="w-7 h-7 text-blue-500"/>
                <span className="text-[11px] font-semibold text-gray-700 text-center">Credit Card<br/>Payment</span>
              </div>
              <div className="flex flex-col items-center gap-2 cursor-pointer">
                <Home className="w-7 h-7 text-orange-500"/>
                <span className="text-[11px] font-semibold text-gray-700 text-center">Rent<br/>Payment</span>
              </div>
            </div>
          </div>
        </div>

        {/* --- PHONEPE BOTTOM NAV --- */}
        <div className="absolute bottom-0 w-full bg-white border-t border-gray-200 px-6 py-3 flex justify-between items-center z-30 rounded-b-[2.5rem]">
          <div className="flex flex-col items-center gap-1 text-[#5f259f]"><Home className="w-6 h-6"/><span className="text-[10px] font-bold">Home</span></div>
          <div className="flex flex-col items-center gap-1 text-gray-400 hover:text-gray-600"><ScanLine className="w-6 h-6"/><span className="text-[10px] font-bold">Stores</span></div>
          <div className="flex flex-col items-center gap-1 text-gray-400 hover:text-gray-600"><ShieldCheck className="w-6 h-6"/><span className="text-[10px] font-bold">Insurance</span></div>
          <div className="flex flex-col items-center gap-1 text-gray-400 hover:text-gray-600"><PieChart className="w-6 h-6"/><span className="text-[10px] font-bold">Wealth</span></div>
          <div className="flex flex-col items-center gap-1 text-gray-400 hover:text-gray-600"><History className="w-6 h-6"/><span className="text-[10px] font-bold">History</span></div>
        </div>

        {/* ======================================================== */}
        {/* THE AI AGENT SLIDE-UP MODAL (DORAEMON GADGET) */}
        {/* ======================================================== */}
        <div className={`absolute bottom-0 left-0 w-full bg-white z-50 rounded-t-3xl shadow-[0_-10px_40px_rgba(0,0,0,0.2)] transition-transform duration-500 ease-in-out ${activeAiContext ? 'translate-y-0' : 'translate-y-[100%]'}`} style={{ height: '85%' }}>
          {activeAiContext && (
            <div className="flex flex-col h-full p-6 pt-2">
              <div className="w-12 h-1.5 bg-gray-200 rounded-full mx-auto mb-4"></div>
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-bold flex items-center gap-2 text-indigo-900">
                  <Sparkles className="w-6 h-6 text-indigo-600" /> PaySense AI
                </h2>
                <button onClick={closeAiModal} className="bg-gray-100 p-2 rounded-full text-gray-600 hover:bg-gray-200"><X className="w-5 h-5"/></button>
              </div>

              {loading ? (
                <div className="flex-1 flex flex-col items-center justify-center space-y-4">
                  <div className="relative">
                    <Loader2 className="w-12 h-12 animate-spin text-[#5f259f]" />
                    <Sparkles className="w-5 h-5 text-yellow-500 absolute -top-2 -right-2 animate-pulse" />
                  </div>
                  <p className="text-gray-500 font-semibold text-sm animate-pulse">Analyzing UPI History & Correlating Context...</p>
                </div>
              ) : aiResponse ? (
                <div className="flex-1 flex flex-col animate-in fade-in duration-500">
                  <h3 className="text-lg font-bold text-gray-800 mb-4 bg-indigo-50 p-3 rounded-xl border border-indigo-100">{aiResponse.title}</h3>
                  <p className="text-sm font-bold text-gray-800 mb-4">{aiResponse.greeting}</p>
                  
                  <div className="space-y-3 mb-6 flex-1">
                    <div className="bg-orange-50 p-4 rounded-2xl border-l-4 border-orange-400">
                      <div className="flex items-center gap-2 text-orange-800 font-bold text-xs mb-1 uppercase tracking-wider"><History className="w-4 h-4"/> Spending Insight</div>
                      <p className="text-sm text-gray-700">{aiResponse.insight}</p>
                    </div>
                    
                    <div className="bg-green-50 p-4 rounded-2xl border-l-4 border-green-500">
                      <div className="flex items-center gap-2 text-green-800 font-bold text-xs mb-1 uppercase tracking-wider"><Lightbulb className="w-4 h-4"/> AI Translation</div>
                      <p className="text-sm text-gray-800 font-medium">{aiResponse.contextualMath}</p>
                    </div>

                    <p className="text-sm text-gray-600 px-2 italic">"{aiResponse.actionableAdvice}"</p>
                  </div>

                  <button className="w-full bg-[#5f259f] text-white font-bold py-4 rounded-2xl shadow-lg flex justify-center items-center gap-2 hover:bg-indigo-800 transition-colors">
                    {aiResponse.btnText} <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              ) : null}
            </div>
          )}
        </div>

      </div>
    </div>
  );
}