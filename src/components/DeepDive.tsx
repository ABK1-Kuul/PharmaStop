import { useState } from "react";
import { 
  Plus, Check, ShoppingCart, Landmark, ArrowRight, Table, FileSpreadsheet, Percent, RefreshCw 
} from "lucide-react";

export default function DeepDive() {
  const [activeTab, setActiveTab] = useState<"pos" | "inventory" | "reports">("pos");
  const [isPaid, setIsPaid] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);

  const triggerPayment = () => {
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      setIsPaid(true);
    }, 1000);
  };

  const resetPayment = () => {
    setIsPaid(false);
  };

  return (
    <section className="py-24 bg-white relative" id="screenshots">
      {/* Subtle diagnostic grids and decorative nodes */}
      <div className="absolute inset-0 medical-grid opacity-30 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-7xl h-full pointer-events-none">
        <div className="absolute bottom-10 left-10 w-80 h-80 rounded-full bg-sky-50/20 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left: Interactive Context & Beautiful Selector Tabs */}
          <div className="lg:col-span-5 text-left space-y-7">
            <div>
              <div className="inline-flex items-center gap-1.5 bg-sky-50 text-sky-600 text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider mb-3 border border-sky-100">
                <Percent className="w-3.5 h-3.5" /> High-Trust Design
              </div>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-none" id="screenshots-headline">
                Take a Look Inside the App
              </h2>
              <p className="text-slate-600 text-base mt-4 leading-relaxed">
                PharmaStop is carefully balanced for local sales desks and owner reports. Toggle between the tabs below to view the actual desktop working screens.
              </p>
            </div>

            {/* Selector Buttons */}
            <div className="space-y-3 bg-slate-50 p-2.5 rounded-2xl border border-slate-200">
              
              {/* Tab 1: Sales / POS */}
              <button
                onClick={() => {
                  setActiveTab("pos");
                  resetPayment();
                }}
                className={`w-full text-left p-4 rounded-xl transition-all cursor-pointer ${
                  activeTab === "pos"
                    ? "bg-white text-slate-900 border border-slate-200 shadow-md ring-1 ring-slate-100"
                    : "text-slate-500 hover:text-slate-900 font-medium"
                }`}
                id="pos-tab-trigger"
              >
                <div className="flex items-center gap-3">
                  <div className={`p-2 rounded-lg ${activeTab === "pos" ? "bg-sky-50 text-sky-500" : "bg-slate-200/50 text-slate-400"}`}>
                    <ShoppingCart className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="font-display font-extrabold text-sm block">1. Counter Sales & Checkout</span>
                    <span className="text-[11px] text-slate-500 block">Fast billing register for clients, calculating local sales taxes in ETB.</span>
                  </div>
                </div>
              </button>

              {/* Tab 2: Inventory */}
              <button
                onClick={() => {
                  setActiveTab("inventory");
                  resetPayment();
                }}
                className={`w-full text-left p-4 rounded-xl transition-all cursor-pointer ${
                  activeTab === "inventory"
                    ? "bg-white text-slate-900 border border-slate-200 shadow-md ring-1 ring-slate-100"
                    : "text-slate-500 hover:text-slate-900 font-medium"
                }`}
                id="inventory-tab-trigger"
              >
                <div className="flex items-center gap-3">
                  <div className={`p-2 rounded-lg ${activeTab === "inventory" ? "bg-sky-50 text-sky-500" : "bg-slate-200/50 text-slate-400"}`}>
                    <Table className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="font-display font-extrabold text-sm block">2. Medicine Storage & Batches</span>
                    <span className="text-[11px] text-slate-500 block">Trace expiry thresholds, batch numbers, and stock on shelf by branch.</span>
                  </div>
                </div>
              </button>

              {/* Tab 3: Reports */}
              <button
                onClick={() => {
                  setActiveTab("reports");
                  resetPayment();
                }}
                className={`w-full text-left p-4 rounded-xl transition-all cursor-pointer ${
                  activeTab === "reports"
                    ? "bg-white text-slate-900 border border-slate-200 shadow-md ring-1 ring-slate-100"
                    : "text-slate-500 hover:text-slate-900 font-medium"
                }`}
                id="reports-tab-trigger"
              >
                <div className="flex items-center gap-3">
                  <div className={`p-2 rounded-lg ${activeTab === "reports" ? "bg-sky-50 text-sky-500" : "bg-slate-200/50 text-slate-400"}`}>
                    <Landmark className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="font-display font-extrabold text-sm block">3. Monthly Profitability Graphs</span>
                    <span className="text-[11px] text-slate-500 block">Compare performance across your Addis branches and make informed plans.</span>
                  </div>
                </div>
              </button>

            </div>

            {/* Local compliance / transparency note */}
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 text-xs space-y-2.5">
              <div className="flex items-start gap-2.5">
                <Check className="w-4 h-4 text-sky-500 shrink-0 mt-0.5" />
                <span>
                  <strong>Safe Local Data Store:</strong> Your register data is written instantly to your computer's local drive so you never lose information even when offline.
                </span>
              </div>
              <div className="flex items-start gap-2.5">
                <Check className="w-4 h-4 text-sky-500 shrink-0 mt-0.5" />
                <span>
                  <strong>Ethical Pricing Assurance:</strong> Pre-programmed medicine price ranges matching regional standards prevents shift mistakes by staff.
                </span>
              </div>
            </div>
          </div>

          {/* Right: High Fidelity macOS / Windows style mockup framing the actual screen view */}
          <div className="lg:col-span-7" id="desktop-window-app-screens">
            <div className="bg-slate-100 border-2 border-slate-300 rounded-2xl p-3 shadow-xl shadow-slate-200">
              
              {/* Window Header */}
              <div className="flex items-center justify-between border-b border-slate-200 pb-2.5 mb-4 px-2">
                <div className="flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <span className="w-3 h-3 rounded-full bg-rose-500 block"></span>
                    <span className="w-3 h-3 rounded-full bg-amber-400 block"></span>
                    <span className="w-3 h-3 rounded-full bg-emerald-500 block"></span>
                  </div>
                  <span className="text-[10px] font-mono font-bold text-slate-500 ml-1.5">
                    {activeTab === "pos" ? "柜台销售柜 (Checkout Counter View) — v1.0" : activeTab === "inventory" ? "药品库存总目 (Medicine Hub View) — v1.0" : "分店利润统计 (Owner Reports View) — v1.0"}
                  </span>
                </div>
                <div className="px-2 py-0.5 rounded bg-white text-[9px] font-mono text-slate-500 border border-slate-200">
                  PharmaStop Workspace
                </div>
              </div>

              {/* SCREEN 1: Sales/POS Screen */}
              {activeTab === "pos" && (
                <div className="space-y-4 animate-fade-in text-left" id="pos-screen-mock">
                  <div className="bg-white p-4 rounded-xl border border-slate-200 space-y-3">
                    <div className="flex justify-between items-center border-b border-slate-100 pb-2">
                      <span className="text-xs font-bold text-slate-800">New Checkout Order</span>
                      <span className="text-[10px] text-slate-400 font-mono">STATION #02</span>
                    </div>

                    {/* Active Cart Item List */}
                    <div className="space-y-2">
                      <div className="flex justify-between items-center bg-slate-50 p-2.5 rounded-lg border border-slate-150 text-xs">
                        <div>
                          <span className="font-bold text-slate-800 block">Metformin Tablets 850mg</span>
                          <span className="text-[9px] text-slate-400 block font-mono">QTY: 10 strips // BATCH: MET-850</span>
                        </div>
                        <span className="font-mono font-bold text-slate-700">280.00 ETB</span>
                      </div>

                      <div className="flex justify-between items-center bg-slate-50 p-2.5 rounded-lg border border-slate-150 text-xs">
                        <div>
                          <span className="font-bold text-slate-800 block">Amoxicillin Capsules 500mg</span>
                          <span className="text-[9px] text-slate-400 block font-mono">QTY: 5 strips // BATCH: AMX-204</span>
                        </div>
                        <span className="font-mono font-bold text-slate-700">480.00 ETB</span>
                      </div>
                    </div>

                    {/* Tax & Total Calculations */}
                    <div className="border-t border-slate-100 pt-3 space-y-1.5 text-xs text-slate-600">
                      <div className="flex justify-between font-medium">
                        <span>Cart Subtotal</span>
                        <span>760.00 ETB</span>
                      </div>
                      <div className="flex justify-between text-slate-400 text-[11px]">
                        <span>Local Ethiopia Sales Tax (15% VAT)</span>
                        <span>114.00 ETB</span>
                      </div>
                      <div className="flex justify-between font-bold text-slate-900 border-t border-slate-100 pt-2 text-sm font-mono">
                        <span>TOTAL AMOUNT:</span>
                        <span>874.00 ETB</span>
                      </div>
                    </div>

                    {/* Action trigger payment button */}
                    <div className="pt-2">
                      {isPaid ? (
                        <div className="bg-emerald-50 border border-emerald-200 text-emerald-800 p-3 rounded-lg flex items-center gap-3">
                          <Check className="w-5 h-5 text-emerald-600 shrink-0" strokeWidth={3} />
                          <div className="text-xs">
                            <span className="font-bold block">Payment of 874.00 ETB Registered Successfully!</span>
                            <span className="text-slate-500 block text-[10px] font-mono mt-0.5">Local drawer opened. Receipt spooling to printer...</span>
                          </div>
                        </div>
                      ) : (
                        <button
                          onClick={triggerPayment}
                          disabled={isProcessing}
                          className="w-full py-3 bg-sky-500 hover:bg-sky-600 text-white font-bold rounded-lg text-xs transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md shadow-sky-500/10 active:scale-95"
                        >
                          {isProcessing ? (
                            <>
                              <RefreshCw className="w-4 h-4 animate-spin" /> Finalizing Ledger records...
                            </>
                          ) : (
                            <>
                              <ShoppingCart className="w-4 h-4" /> Pay 874.00 ETB in Cash
                            </>
                          )}
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              )}

              {/* SCREEN 2: Inventory Hub */}
              {activeTab === "inventory" && (
                <div className="space-y-4 animate-fade-in text-left" id="inventory-screen-mock">
                  <div className="bg-white p-4 rounded-xl border border-slate-200">
                    <div className="flex items-center justify-between pb-2 border-b border-slate-100 mb-3">
                      <span className="text-xs font-bold text-slate-850">Shelf Medicine Storage Catalog</span>
                      <span className="text-[9px] bg-slate-100 text-slate-500 px-2 py-0.5 rounded font-mono">Filtered: All Active Batches</span>
                    </div>

                    <div className="overflow-x-auto">
                      <table className="w-full text-left text-xs border-collapse">
                        <thead>
                          <tr className="border-b border-slate-150 text-[10px] font-semibold text-slate-400">
                            <th className="pb-1 text-left">Medicine Name</th>
                            <th className="pb-1">Batch Code</th>
                            <th className="pb-1">Expiry Date</th>
                            <th className="pb-1">Stock Level</th>
                            <th className="pb-1 text-right">Location Branch</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100 text-[11px] text-slate-700">
                          <tr>
                            <td className="py-2.5 font-bold text-slate-800">Ceftriaxone 1g Injection</td>
                            <td className="py-2.5 font-mono text-slate-500">CEF-501</td>
                            <td className="py-2.5 text-slate-500">May 2028</td>
                            <td className="py-2.5"><span className="px-1.5 py-0.5 rounded bg-slate-100 font-bold text-[10px]">120 vials</span></td>
                            <td className="py-2.5 text-right font-medium text-slate-600">Piazza Station</td>
                          </tr>
                          <tr>
                            <td className="py-2.5 font-bold text-slate-800">Atorvastatin 20mg Tabs</td>
                            <td className="py-2.5 font-mono text-slate-500">ATO-921</td>
                            <td className="py-2.5 text-slate-500">December 2027</td>
                            <td className="py-2.5"><span className="px-1.5 py-0.5 rounded bg-slate-100 font-bold text-[10px]">450 tablets</span></td>
                            <td className="py-2.5 text-right font-medium text-slate-600">Bole Branch</td>
                          </tr>
                          <tr className="bg-rose-50/40">
                            <td className="py-2.5 font-bold text-slate-800 text-rose-800">Salbutamol Inhaler 100mcg</td>
                            <td className="py-2.5 font-mono text-rose-600">SAL-104</td>
                            <td className="py-2.5 text-rose-600">Jan 2027</td>
                            <td className="py-2.5"><span className="px-1.5 py-0.5 rounded bg-rose-100 text-rose-700 font-bold text-[10px]">18 inhalers</span></td>
                            <td className="py-2.5 text-right font-semibold text-rose-700">Megenagna Hub</td>
                          </tr>
                          <tr>
                            <td className="py-2.5 font-bold text-slate-800">Azithromycin 500mg Caps</td>
                            <td className="py-2.5 font-mono text-slate-500">AZI-880</td>
                            <td className="py-2.5 text-slate-500">October 2026</td>
                            <td className="py-2.5"><span className="px-1.5 py-0.5 rounded bg-slate-100 font-bold text-[10px]">95 boxes</span></td>
                            <td className="py-2.5 text-right font-medium text-slate-600">Bole Branch</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              )}

              {/* SCREEN 3: Manager Report */}
              {activeTab === "reports" && (
                <div className="space-y-4 animate-fade-in text-left" id="reports-screen-mock">
                  <div className="bg-white p-4 rounded-xl border border-slate-200">
                    <div className="flex items-center justify-between pb-2 border-b border-slate-100 mb-4">
                      <span className="text-xs font-bold text-slate-800">Profitability by Branch (Last 30 Days)</span>
                      <span className="text-[9px] font-mono text-slate-400">All Metrics Denominated in ETB</span>
                    </div>

                    {/* Highly aesthetic simple custom bar chart container */}
                    <div className="space-y-4 pt-1">
                      
                      {/* Bar 1: Bole Branch */}
                      <div className="space-y-1">
                        <div className="flex justify-between text-xs font-medium">
                          <span className="text-slate-800">Bole Main Branch</span>
                          <span className="font-mono font-bold text-sky-600">425,000 ETB profit</span>
                        </div>
                        <div className="w-full bg-slate-100 h-6 rounded-lg overflow-hidden flex items-center relative">
                          <div className="bg-sky-500 h-full w-[85%] transition-all duration-700" />
                          <span className="absolute left-2.5 text-[9px] text-white font-bold tracking-wider">LEVEL OPTIMAL</span>
                        </div>
                      </div>

                      {/* Bar 2: Megenagna Hub */}
                      <div className="space-y-1">
                        <div className="flex justify-between text-xs font-medium">
                          <span className="text-slate-800">Megenagna Hub</span>
                          <span className="font-mono font-bold text-sky-600 font-semibold">310,000 ETB profit</span>
                        </div>
                        <div className="w-full bg-slate-100 h-6 rounded-lg overflow-hidden flex items-center relative">
                          <div className="bg-sky-400 h-full w-[62%] transition-all duration-700" />
                          <span className="absolute left-2.5 text-[9px] text-white font-bold tracking-wider">THRESHOLD MET</span>
                        </div>
                      </div>

                      {/* Bar 3: Piazza Central Station */}
                      <div className="space-y-1">
                        <div className="flex justify-between text-xs font-medium">
                          <span className="text-slate-800">Piazza Central Station</span>
                          <span className="font-mono font-bold text-sky-600 font-semibold">245,000 ETB profit</span>
                        </div>
                        <div className="w-full bg-slate-100 h-6 rounded-lg overflow-hidden flex items-center relative">
                          <div className="bg-sky-400/80 h-full w-[49%] transition-all duration-700" />
                          <span className="absolute left-2.5 text-[9px] text-white font-bold tracking-wider">THRESHOLD MET</span>
                        </div>
                      </div>

                    </div>

                    <div className="border-t border-slate-100 pt-3 mt-4 flex justify-between items-center text-[10px] font-medium text-slate-400">
                      <span>Total combined regional margin: <strong>28.4%</strong></span>
                      <span className="text-emerald-500">● 100% Audit Verified</span>
                    </div>

                  </div>
                </div>
              )}

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
