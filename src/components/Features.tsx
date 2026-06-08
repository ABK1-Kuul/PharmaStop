import { useState } from "react";
import { 
  Boxes, BarChart2, Users, MapPin, RefreshCw, Layers, Plus, ShoppingCart, Check 
} from "lucide-react";

export default function Features() {
  // 1. POS state
  const [posCart, setPosCart] = useState<Array<{ name: string; cost: number; qty: number }>>([
    { name: "Amoxicillin Capsules 500mg", cost: 120.00, qty: 1 }
  ]);
  const [isPosCheckingOut, setIsPosCheckingOut] = useState(false);
  const [posReceipt, setPosReceipt] = useState<string | null>(null);

  const addPosItem = () => {
    if (posCart.length < 3) {
      setPosCart([...posCart, { name: "Paracetamol Tablets 500mg", cost: 45.00, qty: 1 }]);
    }
  };

  const handlePosCheckout = () => {
    setIsPosCheckingOut(true);
    setTimeout(() => {
      setIsPosCheckingOut(false);
      setPosReceipt(`REC-${Math.floor(Math.random() * 90000) + 10000}-ETB`);
    }, 900);
  };

  const resetPosCart = () => {
    setPosCart([{ name: "Amoxicillin Capsules 500mg", cost: 120.00, qty: 1 }]);
    setPosReceipt(null);
  };

  const calculateTotal = () => {
    return posCart.reduce((sum, item) => sum + item.cost * item.qty, 0).toFixed(2);
  };

  // 2. Margin Calculator state
  const [wholesaleCost, setWholesaleCost] = useState("35.00");
  const [retailPrice, setRetailPrice] = useState("85.05");
  
  const cost = parseFloat(wholesaleCost) || 0;
  const retail = parseFloat(retailPrice) || 0;
  const netProfit = retail - cost;
  const marginPercent = retail > 0 ? (netProfit / retail) * 100 : 0;

  // 3. Shift tracker state
  const [activeShiftFilter, setActiveShiftFilter] = useState<"day" | "night">("day");

  // 4. Stock routing simulation
  const [routingStep, setRoutingStep] = useState<"idle" | "routing" | "delivered">("idle");
  const [routeBranch, setRouteBranch] = useState("Bole Dispensary");

  const triggerTransferSimulation = (branch: string) => {
    setRouteBranch(branch);
    setRoutingStep("routing");
    setTimeout(() => {
      setRoutingStep("delivered");
    }, 1200);
  };

  return (
    <section className="py-24 bg-slate-50 border-y border-slate-150 relative" id="features">
      {/* Background medical grid lines */}
      <div className="absolute inset-0 medical-grid opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-1.5 bg-sky-50 text-sky-600 text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider border border-sky-100">
            <Layers className="w-3.5 h-3.5" /> How It Works
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-none" id="features-headline">
            Built to Eliminate Pharmacy Losses
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            A simple, high-trust system designed to manage your medicines, track shift handovers, and protect your cash register without any tech confusion.
          </p>
        </div>

        {/* Feature Grid with Interactive Sandbox Cards */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-10">

          {/* MODULE 1: Track Every Cent */}
          <div 
            className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
            id="feature-card-inventory"
          >
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-full bg-sky-50 text-sky-500 flex items-center justify-center border border-sky-100">
                <Boxes className="w-6 h-6" />
              </div>
              <div className="text-left">
                <h3 className="font-display text-xl font-bold text-slate-900">
                  Track Every Cent & Instant Sales
                </h3>
                <p className="text-slate-600 text-sm mt-1">
                  Input prescriptions quickly at the counter. All customer transactions are automatically saved locally with invoice prints in Ethiopian Birr, ensuring your cash drawer exactly matches the report at the end of the day.
                </p>
              </div>

              {/* INTERACTIVE COMPONENT: POS Counter Sandbox */}
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 mt-6 text-left">
                <div className="flex justify-between items-center mb-3">
                  <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 bg-sky-500 rounded-full animate-pulse"></span>
                    Interactive Counter Register Checkout
                  </span>
                  {!posReceipt && (
                    <button 
                      onClick={addPosItem} 
                      disabled={posCart.length >= 2}
                      className="text-[10px] font-bold text-sky-500 hover:text-sky-600 flex items-center gap-0.5 cursor-pointer disabled:opacity-50"
                      id="add-pos-item-btn"
                    >
                      <Plus className="w-3 h-3" /> Add Fast-Moving Drug
                    </button>
                  )}
                </div>

                <div className="space-y-2">
                  {posReceipt ? (
                    <div className="text-center py-4 bg-emerald-50/20 border-2 border-dashed border-emerald-200 rounded-xl">
                      <Check className="w-6 h-6 text-emerald-600 mx-auto mb-1.5" strokeWidth={3} />
                      <span className="text-xs font-bold text-slate-800 block">Sale Registered Locally</span>
                      <span className="text-[9px] font-mono text-slate-400 block mt-0.5">Receipt: {posReceipt}</span>
                      <button 
                        onClick={resetPosCart}
                        className="text-[10.5px] text-sky-500 hover:text-sky-600 underline font-bold mt-2 cursor-pointer"
                        id="reset-pos-btn"
                      >
                        Proceed to Next Transaction
                      </button>
                    </div>
                  ) : (
                    <>
                      {posCart.map((item, idx) => (
                        <div key={idx} className="flex justify-between items-center text-xs bg-white p-2.5 rounded-lg border border-slate-200">
                          <div>
                            <span className="font-bold text-slate-800 block">{item.name}</span>
                            <span className="text-[9px] text-slate-400 font-mono">STOCK SKU-0{idx+4} // 1 UNIT</span>
                          </div>
                          <span className="font-mono font-bold text-slate-600">{item.cost.toFixed(2)} ETB</span>
                        </div>
                      ))}

                      <div className="flex justify-between items-center text-xs font-bold pt-3 border-t border-slate-200 text-slate-600 px-1">
                        <span>TOTAL AMOUNT IN ETB</span>
                        <span className="text-slate-950 font-mono text-xs">{calculateTotal()} ETB</span>
                      </div>

                      <button
                        onClick={handlePosCheckout}
                        disabled={isPosCheckingOut}
                        className="w-full mt-3 py-2 bg-slate-900 text-white rounded-full text-xs font-bold hover:bg-slate-800 transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                        id="process-pos-btn"
                      >
                        {isPosCheckingOut ? (
                          <>
                            <RefreshCw className="w-3.5 h-3.5 animate-spin" /> Recording in Counter Database...
                          </>
                        ) : (
                          <>
                            <ShoppingCart className="w-3.5 h-3.5" /> Pay in ETB & Print Receipt
                          </>
                        )}
                      </button>
                    </>
                  )}
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center text-xs text-slate-400">
              <span className="font-semibold">Saves transaction coordinates offline instantly</span>
            </div>
          </div>

          {/* MODULE 2: Profitability Analytics */}
          <div 
            className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
            id="feature-card-profitability"
          >
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-full bg-sky-50 text-sky-500 flex items-center justify-center border border-sky-100">
                <BarChart2 className="w-6 h-6" />
              </div>
              <div className="text-left">
                <h3 className="font-display text-xl font-bold text-slate-900">
                  Track Profit Margins Instantly
                </h3>
                <p className="text-slate-600 text-sm mt-1">
                  Calculate and track markup margins for brand-name and generic medicines. Spot which medicine brands yield the highest returns, helping you design precise inventory purchase schedules.
                </p>
              </div>

              {/* INTERACTIVE COMPONENT: Margin Calculator Sandbox */}
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 mt-6 text-left">
                <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider block mb-3">
                  Local Medicine Profit Calculator (ETB)
                </span>

                <div className="grid grid-cols-2 gap-3 mb-3">
                  <div className="space-y-1">
                    <label className="text-[9px] font-bold text-slate-500 uppercase">Medicine Buy Cost (ETB)</label>
                    <div className="relative">
                      <input 
                        type="number"
                        value={wholesaleCost}
                        onChange={(e) => setWholesaleCost(e.target.value)}
                        className="w-full bg-white border border-slate-200 rounded-lg px-2.5 py-1.5 text-xs text-slate-700 font-mono focus:border-sky-500 focus:outline-none"
                        placeholder="0.00"
                        id="wholesale-cost-calc"
                      />
                    </div>
                  </div>
                  <div className="space-y-1">
                    <label className="text-[9px] font-bold text-slate-500 uppercase">Sell Price (ETB)</label>
                    <div className="relative">
                      <input 
                        type="number"
                        value={retailPrice}
                        onChange={(e) => setRetailPrice(e.target.value)}
                        className="w-full bg-white border border-slate-200 rounded-lg px-2.5 py-1.5 text-xs text-slate-700 font-mono focus:border-sky-500 focus:outline-none"
                        placeholder="0.00"
                        id="insurance-reclaim-calc"
                      />
                    </div>
                  </div>
                </div>

                {/* Scorecard Output values */}
                <div className="grid grid-cols-2 gap-2 mt-3 bg-white p-3 rounded-lg border border-slate-200">
                  <div className="text-left">
                    <span className="text-[9px] text-slate-400 block font-bold">NET PROFIT:</span>
                    <span className="text-xs font-bold text-slate-800 font-mono">{netProfit.toFixed(2)} ETB</span>
                  </div>
                  <div className="text-right">
                    <span className="text-[9px] text-slate-400 block font-bold">PROFIT MARGIN:</span>
                    <span className={`text-xs font-bold font-mono px-2 py-0.5 rounded-full ${
                      marginPercent > 35 
                        ? "text-emerald-700 bg-emerald-50" 
                        : marginPercent > 15 
                        ? "text-sky-700 bg-sky-50" 
                        : "text-rose-700 bg-rose-50"
                    }`}>
                      {marginPercent.toFixed(1)}%
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-400">
              <span className="flex items-center gap-1 font-semibold">
                <div className={`w-1.5 h-1.5 rounded-full ${marginPercent > 15 ? "bg-emerald-500" : "bg-rose-500"}`} />
                {marginPercent > 15 ? "Healthy Drug Profit Margin" : "Low Margin Alert"}
              </span>
              <span>Calculated locally</span>
            </div>
          </div>

          {/* MODULE 3: Manage Shifts 24/7 */}
          <div 
            className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
            id="feature-card-shifts"
          >
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-full bg-sky-50 text-sky-500 flex items-center justify-center border border-sky-100">
                <Users className="w-6 h-6" />
              </div>
              <div className="text-left">
                <h3 className="font-display text-xl font-bold text-slate-900">
                  Manage Shifts 24/7
                </h3>
                <p className="text-slate-600 text-sm mt-1">
                  Keep your pharmacy open continuously without fear of missing sales logs in between shift changes. Track which employee was active on the desktop register and verify cash handovers.
                </p>
              </div>

              {/* INTERACTIVE COMPONENT: Shift Tracker Sandbox */}
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 mt-6 text-left">
                <div className="flex bg-slate-200/50 p-1 rounded-lg border border-slate-200 gap-0.5 mb-3">
                  <button
                    onClick={() => setActiveShiftFilter("day")}
                    className={`flex-1 py-1.5 text-center font-bold text-[10px] rounded cursor-pointer transition-all ${
                      activeShiftFilter === "day"
                        ? "bg-white text-slate-900 shadow-xs border border-slate-100"
                        : "text-slate-500 hover:text-slate-700"
                    }`}
                    id="shift-day-tab"
                  >
                    Active Day Shift
                  </button>
                  <button
                    onClick={() => setActiveShiftFilter("night")}
                    className={`flex-1 py-1.5 text-center font-bold text-[10px] rounded cursor-pointer transition-all ${
                      activeShiftFilter === "night"
                        ? "bg-white text-slate-900 shadow-xs border border-slate-100"
                        : "text-slate-500 hover:text-slate-700"
                    }`}
                    id="shift-night-tab"
                  >
                    Active Night Shift
                  </button>
                </div>

                <div className="space-y-2">
                  {activeShiftFilter === "day" ? (
                    <>
                      <div className="bg-white p-2 border border-slate-200 rounded-lg flex justify-between items-center text-xs">
                        <span className="font-bold text-slate-800">Dr. Abraham Tolosa, RPh</span>
                        <span className="text-[10px] font-mono font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">
                          ON DUTY
                        </span>
                      </div>
                      <div className="bg-white p-2 border border-slate-200 rounded-lg flex justify-between items-center text-xs">
                        <span className="font-bold text-slate-800">Abebe Kebede (Technician)</span>
                        <span className="text-[10px] font-mono font-bold text-sky-600 bg-sky-50 px-2 py-0.5 rounded-full">
                          LOGGED IN
                        </span>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="bg-white p-2 border border-slate-200 rounded-lg flex justify-between items-center text-xs">
                        <span className="font-bold text-slate-800">Dr. Bethelhem Takele, PharmD</span>
                        <span className="text-[10px] font-mono font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">
                          ON DUTY
                        </span>
                      </div>
                      <div className="bg-white p-2 border border-slate-200 rounded-lg flex justify-between items-center text-xs">
                        <span className="font-bold text-slate-800">Sister Tigist Hailu (Lead Tech)</span>
                        <span className="text-[10px] font-mono font-bold text-sky-600 bg-sky-50 px-2 py-0.5 rounded-full">
                          LOGGED IN
                        </span>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-400">
              <span className="font-semibold">Ensures smooth drawer handover accountability</span>
            </div>
          </div>

          {/* MODULE 4: Stop Stock Theft & Loss */}
          <div 
            className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
            id="feature-card-multibranch"
          >
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-full bg-sky-50 text-sky-500 flex items-center justify-center border border-sky-100">
                <MapPin className="w-6 h-6" />
              </div>
              <div className="text-left">
                <h3 className="font-display text-xl font-bold text-slate-900">
                  Stop Stock Theft & Loss
                </h3>
                <p className="text-slate-600 text-sm mt-1">
                  Keep a precise catalog of your actual shelf counts across different branches. Easily request medicine transfers from well-stocked stations to avoid local stock-out situations.
                </p>
              </div>

              {/* INTERACTIVE COMPONENT: Branch Routing Simulator */}
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 mt-6 text-left">
                <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider block mb-3">
                  Inter-Branch Medicine Transfer Dispatcher
                </span>

                <div className="grid grid-cols-2 gap-2 mb-3">
                  <button
                    onClick={() => triggerTransferSimulation("Bole Dispensary")}
                    className="p-2 border border-slate-200 bg-white hover:border-sky-400 text-slate-700 font-bold rounded-lg text-left text-[11px] transition-all cursor-pointer"
                    id="route-branch-atl"
                  >
                    Send to Bole Branch
                  </button>
                  <button
                    onClick={() => triggerTransferSimulation("Piazza Station")}
                    className="p-2 border border-slate-200 bg-white hover:border-sky-400 text-slate-700 font-bold rounded-lg text-left text-[11px] transition-all cursor-pointer"
                    id="route-branch-den"
                  >
                    Send to Piazza Station
                  </button>
                </div>

                <div className="bg-white p-2.5 rounded-lg border border-slate-200 min-h-[56px] flex flex-col justify-center text-center">
                  {routingStep === "idle" && (
                    <span className="text-slate-400 text-[11px] font-medium italic">
                      Select branch to simulate stock allocation
                    </span>
                  )}
                  {routingStep === "routing" && (
                    <div className="flex items-center gap-2 text-sky-600 justify-center">
                      <RefreshCw className="w-4 h-4 animate-spin" />
                      <span className="font-mono text-[11px] font-bold">Transferring medicine to {routeBranch}...</span>
                    </div>
                  )}
                  {routingStep === "delivered" && (
                    <div className="flex items-center gap-2 text-emerald-600 justify-center">
                      <Check className="w-4 h-4 stroke-[3px]" />
                      <span className="font-mono text-[11px] font-bold">Transfer Approved at {routeBranch}!</span>
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-400">
              <span className="font-semibold">Prevent localized inventory stock-outs</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
