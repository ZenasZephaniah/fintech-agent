"use client";
import { useState } from "react";
import { Loader2, ShieldCheck, Wallet, ArrowRight, Sparkles, AlertCircle, Home, PieChart, History, ScanLine, Send, Landmark, Smartphone, ChevronRight, X } from "lucide-react";

export default function PremiumFintechApp() {
  const [activeTab, setActiveTab] = useState('home');
  const [showInsuranceFlow, setShowInsuranceFlow] = useState(false);
  const [loading, setLoading] = useState(false);
  const [aiAdvice, setAiAdvice] = useState<any>(null);

  const product = { name: "Comprehensive Health Cover", cover: "₹1 Crore", monthlyCost: 1250 };

  const getAiAdvice = async () => {
    setLoading(true);
    // Simulating API call for the SDE Mock Fallback
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setAiAdvice({
      greeting: "Hi Zenas, I noticed you're reviewing this Health Cover.",
      insight: "Based on your transaction history below, you spent ₹5,500 on food delivery this month.",
      contextualMath: "This ₹1,250/mo premium costs less than 3 of your average Swiggy orders.",
      actionableAdvice: "Redirecting a small portion of your dining budget protects you against ₹1 Crore in medical emergencies.",
      aiRecommendedAction: "Secure My Health"
    });
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gray-200 flex justify-center items-center p-4 font-sans">
      {/* Mobile Device Frame */}
      <div className="w-full max-w-[400px] h-[800px] bg-gray-50 rounded-[3rem] shadow-2xl overflow-hidden border-[8px] border-gray-900 flex flex-col relative">
        
        {/* Dynamic Screen Rendering */}
        {!showInsuranceFlow ? (
          /* --- PHONEPE DASHBOARD SCREEN --- */
          <div className="flex-1 flex flex-col h-full overflow-y-auto pb-20">
            {/* Header */}
            <div className="bg-indigo-700 p-6 pt-10 text-white rounded-b-3xl shadow-md">
              <div className="flex justify-between items-center mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center font-bold">Z</div>
                  <div>
                    <p className="text-xs text-indigo-200">Location</p>
                    <p className="text-sm font-semibold flex items-center gap-1">IIT Roorkee <ChevronRight className="w-3 h-3"/></p>
                  </div>
                </div>
                <div className="bg-black/20 p-2 rounded-full"><ScanLine className="w-5 h-5"/></div>
              </div>
              <p className="text-indigo-200 text-sm mt-4">PaySense Wallet Balance</p>
              <h2 className="text-3xl font-black mt-1">₹42,500.00</h2>
            </div>

            {/* Quick Actions */}
            <div className="p-5">
              <div className="bg-white rounded-2xl p-4 shadow-sm grid grid-cols-4 gap-4 text-center">
                <div className="flex flex-col items-center gap-2 cursor-pointer">
                  <div className="bg-indigo-100 p-3 rounded-full text-indigo-600"><ScanLine className="w-6 h-6"/></div>
                  <span className="text-[10px] font-semibold text-gray-700">Scan QR</span>
                </div>
                <div className="flex flex-col items-center gap-2 cursor-pointer">
                  <div className="bg-indigo-100 p-3 rounded-full text-indigo-600"><Send className="w-6 h-6"/></div>
                  <span className="text-[10px] font-semibold text-gray-700">To Contact</span>
                </div>
                <div className="flex flex-col items-center gap-2 cursor-pointer">
                  <div className="bg-indigo-100 p-3 rounded-full text-indigo-600"><Landmark className="w-6 h-6"/></div>
                  <span className="text-[10px] font-semibold text-gray-700">To Bank</span>
                </div>
                <div className="flex flex-col items-center gap-2 cursor-pointer">
                  <div className="bg-indigo-100 p-3 rounded-full text-indigo-600"><Smartphone className="w-6 h-6"/></div>
                  <span className="text-[10px] font-semibold text-gray-700">Recharge</span>
                </div>
              </div>

              {/* GenAI Upsell Banner */}
              <div 
                onClick={() => setShowInsuranceFlow(true)}
                className="mt-6 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-2xl p-5 text-white shadow-lg relative overflow-hidden cursor-pointer transform transition hover:scale-[1.02]"
              >
                <Sparkles className="absolute top-2 right-2 text-white/20 w-16 h-16" />
                <h3 className="font-bold text-lg mb-1">Pre-Approved for Zenas</h3>
                <p className="text-sm text-purple-100 mb-3">₹1 Crore Health Cover @ ₹1250/mo</p>
                <div className="bg-white text-indigo-700 text-xs font-bold py-2 px-4 rounded-full inline-block">Claim Now</div>
              </div>

              {/* Recent Transactions */}
              <h3 className="font-bold text-gray-800 mt-8 mb-4">Recent Transactions</h3>
              <div className="space-y-4 bg-white p-4 rounded-2xl shadow-sm">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center text-orange-600 font-bold">S</div>
                    <div><p className="text-sm font-bold text-gray-800">Swiggy</p><p className="text-xs text-gray-500">2 hours ago</p></div>
                  </div>
                  <span className="font-bold text-gray-800">- ₹450</span>
                </div>
                <div className="flex justify-between items-center border-t border-gray-50 pt-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center text-white font-bold">U</div>
                    <div><p className="text-sm font-bold text-gray-800">Uber Rides</p><p className="text-xs text-gray-500">Yesterday</p></div>
                  </div>
                  <span className="font-bold text-gray-800">- ₹320</span>
                </div>
              </div>
            </div>

            {/* Bottom Nav */}
            <div className="absolute bottom-0 w-full bg-white border-t border-gray-200 p-4 flex justify-around items-center z-20 rounded-b-[2.5rem]">
              <div onClick={()=>setActiveTab('home')} className={`flex flex-col items-center gap-1 cursor-pointer ${activeTab==='home' ? 'text-indigo-600' : 'text-gray-400'}`}><Home className="w-5 h-5"/><span className="text-[10px] font-bold">Home</span></div>
              <div onClick={()=>setActiveTab('wealth')} className={`flex flex-col items-center gap-1 cursor-pointer ${activeTab==='wealth' ? 'text-indigo-600' : 'text-gray-400'}`}><PieChart className="w-5 h-5"/><span className="text-[10px] font-bold">Wealth</span></div>
              <div onClick={()=>setActiveTab('history')} className={`flex flex-col items-center gap-1 cursor-pointer ${activeTab==='history' ? 'text-indigo-600' : 'text-gray-400'}`}><History className="w-5 h-5"/><span className="text-[10px] font-bold">History</span></div>
            </div>
          </div>
        ) : (
          /* --- GEN-AI INSURANCE FLOW SCREEN --- */
          <div className="flex-1 flex flex-col h-full bg-gray-50 animate-in slide-in-from-right-8 duration-300">
            <div className="bg-indigo-600 p-6 pt-10 text-white pb-10 rounded-b-3xl relative">
              <button onClick={() => {setShowInsuranceFlow(false); setAiAdvice(null)}} className="absolute top-10 right-6 bg-white/20 p-2 rounded-full"><X className="w-4 h-4"/></button>
              <h2 className="text-2xl font-bold pr-10">{product.name}</h2>
              <p className="text-3xl font-black mt-3">₹{product.monthlyCost}<span className="text-lg font-normal">/mo</span></p>
            </div>

            <div className="bg-white p-6 -mt-6 rounded-t-3xl flex-1 flex flex-col relative z-10 shadow-lg">
              <div className="space-y-4 mb-6">
                <div className="flex items-center gap-3 text-gray-700"><ShieldCheck className="w-5 h-5 text-green-500" /> Cashless at 5,000+ Hospitals</div>
                <div className="flex items-center gap-3 text-gray-700"><AlertCircle className="w-5 h-5 text-red-400" /> Wait period: 30 days</div>
              </div>

              {!aiAdvice ? (
                <div className="mt-auto space-y-3 pb-6">
                  <button onClick={getAiAdvice} disabled={loading} className="w-full bg-indigo-50 text-indigo-700 font-bold py-4 rounded-2xl flex justify-center items-center gap-2 hover:bg-indigo-100 transition-colors border border-indigo-100">
                    {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : <><Sparkles className="w-5 h-5"/> Should I buy this? Ask AI</>}
                  </button>
                  <button className="w-full bg-indigo-600 text-white font-bold py-4 rounded-2xl shadow-lg">Pay ₹{product.monthlyCost}</button>
                </div>
              ) : (
                <div className="mt-auto bg-indigo-50 p-5 rounded-2xl border border-indigo-100 animate-in slide-in-from-bottom-4 pb-6 mb-6">
                  <div className="flex items-center gap-2 text-indigo-700 font-bold mb-3"><Sparkles className="w-5 h-5" /> AI Financial Assessment</div>
                  <p className="text-sm font-semibold text-gray-800">{aiAdvice.greeting}</p>
                  <div className="my-3 space-y-2">
                    <p className="text-sm text-gray-600 bg-white p-3 rounded-lg border-l-4 border-l-orange-400">{aiAdvice.insight}</p>
                    <p className="text-sm text-gray-600 bg-white p-3 rounded-lg border-l-4 border-l-green-400 font-medium">{aiAdvice.contextualMath}</p>
                  </div>
                  <p className="text-sm text-gray-700 mb-4">{aiAdvice.actionableAdvice}</p>
                  <button className="w-full bg-indigo-600 text-white font-bold py-3.5 rounded-xl shadow-md flex justify-center items-center gap-2">
                    {aiAdvice.aiRecommendedAction} <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}