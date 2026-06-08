import { useState } from "react";
import { 
  ArrowRight, 
  LayoutDashboard, 
  ShoppingCart, 
  Boxes, 
  Clock, 
  Network, 
  BarChart2, 
  Wifi, 
  TrendingUp, 
  Check, 
  AlertTriangle 
} from "lucide-react";

interface HeroProps {
  onOpenScheduler: () => void;
}

export default function Hero({ onOpenScheduler }: HeroProps) {
  // Interaction state inside desktop mockup
  const [salesGoal, setSalesGoal] = useState(48250.0);
  const [completeF12Status, setCompleteF12Status] = useState<"idle" | "success">("idle");
  const [selectedSidebar, setSelectedSidebar] = useState("dashboard");

  // Handle [F12] complete sale simulation
  const handleF12Checkout = () => {
    if (completeF12Status === "idle") {
      setCompleteF12Status("success");
      setSalesGoal(49030.0); // 48,250 + 780
    } else {
      setCompleteF12Status("idle");
      setSalesGoal(48250.0);
    }
  };

  return (
    <section className="relative pt-24 pb-20 md:pt-32 md:pb-28 bg-white overflow-hidden animate-fade-in text-[#0F172A]" id="hero">
      {/* Soft blue-gray details & clinical grid aesthetic */}
      <div className="absolute inset-0 bg-[#F8FAFC]/60 pointer-events-none" />
      <div className="absolute inset-0 medical-grid opacity-50 pointer-events-none" />
      
      {/* Soft glowing ambient backing balls for high-trust premium depth (Light theme only) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full pointer-events-none">
        <div className="absolute top-1/4 -left-16 w-96 h-96 rounded-full bg-sky-150/40 blur-3xl animate-pulse" />
        <div className="absolute top-1/3 -right-20 w-[450px] h-[450px] rounded-full bg-teal-50/50 blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Side: Value-Driven High-Converting Copy */}
          <div className="lg:col-span-5 text-left space-y-7 z-10">
            {/* Trust Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-slate-200 text-xs font-semibold text-slate-700 shadow-sm">
              <span className="text-base leading-none">🇪🇹</span>
              <span>Built for Ethiopian Pharmacies • Denominated in ETB</span>
            </div>

            {/* Headline */}
            <h1 className="font-display text-4xl sm:text-5xl lg:text-5xl xl:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.08]" id="hero-headline">
              Take Absolute Control <br />
              <span className="text-teal-600 bg-gradient-to-r from-teal-600 to-sky-600 bg-clip-text text-transparent">
                of Your Multi-Branch
              </span> <br />
              Pharmacy
            </h1>

            {/* Subheadline (Clean, professional, devoid of dev jigsaw words) */}
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-xl" id="hero-subheadline">
              Stop stock leaks, track 24/7 shifts, and watch your margins grow. PharmaStop is a lightning-fast, offline-capable desktop application built specifically for pharmacy owners in Ethiopia.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3.5 pt-2">
              <button
                onClick={onOpenScheduler}
                className="px-8 py-4 bg-teal-600 hover:bg-teal-700 hover:shadow-lg hover:shadow-teal-100 transition-all active:scale-95 text-white font-bold text-sm rounded-full flex items-center justify-center gap-2 group cursor-pointer"
                id="hero-request-demo"
              >
                Book a Free Live Demo
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <a
                href="#features"
                className="px-6 py-4 border border-slate-200 bg-white hover:bg-slate-50 transition-all active:scale-95 text-slate-700 font-bold text-sm rounded-full text-center hover:border-slate-300 flex items-center justify-center gap-1.5 cursor-pointer"
                id="hero-explore-features"
              >
                Explore Desktop Features
              </a>
            </div>

            {/* Client proof badges */}
            <div className="pt-6 border-t border-slate-200 grid grid-cols-3 gap-4">
              <div>
                <span className="block text-2xl font-extrabold text-slate-900 leading-none">100%</span>
                <span className="text-[11px] text-slate-500 font-bold mt-1 block">Local Offline Core</span>
              </div>
              <div>
                <span className="block text-2xl font-extrabold text-slate-900 leading-none">Any</span>
                <span className="text-[11px] text-slate-500 font-bold mt-1 block">Receipt Printer</span>
              </div>
              <div>
                <span className="block text-2xl font-extrabold text-[#0D9488] leading-none">Zero</span>
                <span className="text-[11px] text-slate-500 font-bold mt-1 block">Shift Pilferage</span>
              </div>
            </div>
          </div>

          {/* Right Side: Re-designed High-Fidelity Desktop App UI Shell (The Showstopper) */}
          <div className="lg:col-span-7" id="dashboard-mockup-wrapper">
            <div className="relative bg-[#FFFFFF] rounded-2xl border border-slate-300 shadow-2xl overflow-hidden">
              
              {/* Native OS Desktop Window Header controls (Mac-style) */}
              <div className="flex items-center justify-between bg-slate-100/90 border-b border-slate-200 pb-2.5 pt-3 px-4">
                <div className="flex items-center gap-2">
                  <div className="flex gap-1.5 shrink-0">
                    <span className="w-3.5 h-3.5 rounded-full bg-[#FF5F56] border border-[#E0443E] block"></span>
                    <span className="w-3.5 h-3.5 rounded-full bg-[#FFBD2E] border border-[#DEA123] block"></span>
                    <span className="w-3.5 h-3.5 rounded-full bg-[#27C93F] border border-[#1AAB29] block"></span>
                  </div>
                  <span className="text-[10px] font-mono font-bold text-slate-400 block ml-3 tracking-tight">
                    PharmaStop — Local Node Active
                  </span>
                </div>
                <div className="text-[10px] font-mono font-bold text-slate-550 select-none bg-white py-0.5 px-3 rounded-full border border-slate-200/80">
                  PharmaStop v1.2.4 (Enterprise Desktop App)
                </div>
                <div className="w-16"></div> {/* spacer */}
              </div>

              {/* Main Window Body: Flex for Sidebar Navigation + Workspace Area */}
              <div className="flex min-h-[460px] bg-slate-50">
                
                {/* 2.1 Sidebar Navigation (Left) in ultra-soft slate-blue */}
                <div className="w-44 bg-slate-100 border-r border-slate-200 p-3 flex flex-col justify-between shrink-0 select-none text-left">
                  <div className="space-y-4">
                    <div className="px-2 py-1 text-[10px] font-bold text-slate-400 tracking-wider uppercase">
                      Menu Sections
                    </div>
                    
                    <nav className="space-y-1">
                      {[
                        { id: "dashboard", label: "Dashboard", icon: LayoutDashboard },
                        { id: "pos", label: "POS Cashier", icon: ShoppingCart },
                        { id: "inventory", label: "Smart Inventory", icon: Boxes },
                        { id: "shifts", label: "Rotating Shifts", icon: Clock },
                        { id: "branches", label: "Multi-Branch Hub", icon: Network },
                        { id: "reports", label: "Financial Reports", icon: BarChart2 },
                      ].map((item) => {
                        const Icon = item.icon;
                        const isActive = selectedSidebar === item.id;
                        return (
                          <button
                            key={item.id}
                            type="button"
                            onClick={() => setSelectedSidebar(item.id)}
                            className={`w-full flex items-center gap-2 px-2.5 py-2 text-xs rounded-lg transition-colors font-bold text-left ${
                              isActive
                                ? "bg-teal-50 text-teal-700 border border-teal-100/50"
                                : "text-slate-600 hover:bg-slate-200/60"
                            }`}
                            id={`sidebar-item-${item.id}`}
                          >
                            <Icon className={`w-3.5 h-3.5 ${isActive ? "text-teal-600" : "text-slate-450"}`} />
                            <span className="truncate">{item.label}</span>
                          </button>
                        );
                      })}
                    </nav>
                  </div>

                  {/* System Integrity footer inside app */}
                  <div className="p-1 px-2.5 bg-white border border-slate-200 rounded-lg space-y-1">
                    <div className="flex items-center gap-1.5">
                      <div className="w-1.5 h-1.5 bg-teal-500 rounded-full animate-ping"></div>
                      <span className="text-[8.5px] font-bold text-teal-700">Database Live</span>
                    </div>
                    <span className="text-[8px] text-slate-400 font-mono block">Node: Central-AA</span>
                  </div>
                </div>

                {/* 2.2 Main Workspace (Right) */}
                <div className="flex-1 p-4 flex flex-col justify-between space-y-4">
                  
                  {/* Workspace Header Bar */}
                  <div className="flex items-center justify-between pb-2.5 border-b border-slate-200">
                    <div className="text-left">
                      <span className="text-[9px] text-slate-450 uppercase font-extrabold tracking-wider block">Currently Active Terminal</span>
                      <h4 className="text-xs font-extrabold text-slate-800">
                        Addis Ababa - Central Branch (Online)
                      </h4>
                    </div>
                    <div className="flex items-center gap-2 bg-teal-50 border border-teal-150 px-2 py-1 rounded-full text-[9px] font-bold text-teal-700">
                      <Wifi className="w-3 h-3 text-teal-600" />
                      <span>Sync Active</span>
                    </div>
                  </div>

                  {/* Row of 3 Interactive-Looking Metric Cards */}
                  <div className="grid grid-cols-3 gap-2.5 text-left">
                    
                    {/* Metric 1 - Today's Sales */}
                    <div className="bg-white p-3 rounded-xl border border-slate-200 shadow-xs">
                      <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest block">
                        Today's Sales
                      </span>
                      <div className="mt-1 flex items-baseline justify-between overflow-hidden">
                        <span className="text-slate-900 font-mono font-black text-xs sm:text-sm">
                          {salesGoal.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })} ETB
                        </span>
                      </div>
                      <span className="inline-flex mt-1 items-center px-1 rounded bg-teal-50 text-teal-700 text-[8px] font-bold">
                        +12.4% vs yesterday
                      </span>
                    </div>

                    {/* Metric 2 - Active Shifts */}
                    <div className="bg-white p-3 rounded-xl border border-slate-200 shadow-xs">
                      <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest block">
                        Active Shifts
                      </span>
                      <div className="mt-1">
                        <span className="text-slate-900 font-extrabold text-xs sm:text-xs">
                          Shift B (3 Active)
                        </span>
                      </div>
                      <span className="inline-flex mt-1 items-center px-1 rounded bg-amber-50 text-amber-700 text-[8px] font-bold">
                        24/7 Mode On
                      </span>
                    </div>

                    {/* Metric 3 - Critical Alerts */}
                    <div className="bg-white p-3 rounded-xl border border-rose-250 shadow-xs">
                      <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest block">
                        Critical Alerts
                      </span>
                      <div className="mt-1 flex items-center gap-1">
                        <AlertTriangle className="w-3 h-3 text-rose-500 shrink-0" />
                        <span className="text-rose-700 font-extrabold text-[11px] truncate">
                          4 Low / 2 Expire
                        </span>
                      </div>
                      <span className="inline-flex mt-1 items-center px-1 rounded bg-rose-50 text-rose-700 text-[8px] font-bold">
                        Action Required
                      </span>
                    </div>

                  </div>

                  {/* Two Column Layout inside Desktop Space */}
                  <div className="grid grid-cols-12 gap-3 flex-1 items-stretch">
                    
                    {/* Left Mini-Widget: Interactive Quick POS Cart */}
                    <div className="col-span-7 bg-white p-3 rounded-xl border border-slate-200 flex flex-col justify-between text-left shadow-xs">
                      <div>
                        <div className="flex items-center justify-between border-b border-slate-100 pb-1.5 mb-2">
                          <span className="text-[9px] font-bold text-slate-400 uppercase tracking-wider">
                            Interactive Register Checkout
                          </span>
                          <span className="text-[8px] text-teal-600 bg-teal-50 px-1 font-mono font-bold rounded">
                            PRESCRIPTION CHECK
                          </span>
                        </div>

                        {/* List of drugs on checkout desk */}
                        <div className="space-y-1 text-xs">
                          <div className="flex justify-between items-center py-1 bg-slate-50/50 px-1.5 rounded border border-slate-100">
                            <div>
                              <span className="font-bold text-slate-800 text-[10.5px]">Amoxicillin 500mg</span>
                              <span className="block text-[8px] text-slate-400 font-mono">Qty: 2 • BATCH-AX2</span>
                            </div>
                            <span className="font-mono font-extrabold text-slate-600 text-[11px]">350.00 ETB</span>
                          </div>

                          <div className="flex justify-between items-center py-1 bg-slate-50/50 px-1.5 rounded border border-slate-100">
                            <div>
                              <span className="font-bold text-slate-800 text-[10.5px]">Paracetamol 500mg</span>
                              <span className="block text-[8px] text-slate-400 font-mono">Qty: 1 • BATCH-PA8</span>
                            </div>
                            <span className="font-mono font-extrabold text-slate-600 text-[11px]">80.00 ETB</span>
                          </div>
                        </div>
                      </div>

                      {/* Total and F12 Button */}
                      <div className="pt-2 border-t border-slate-100 space-y-2">
                        <div className="flex justify-between items-center text-[10.5px] font-bold text-slate-600 px-1">
                          <span>TOTAL TO PAY:</span>
                          <span className="font-mono text-xs text-slate-900 font-black">780.00 ETB</span>
                        </div>

                        {completeF12Status === "success" ? (
                          <button
                            type="button"
                            onClick={handleF12Checkout}
                            className="w-full py-2 bg-emerald-500 hover:bg-emerald-600 text-white font-extrabold rounded-lg text-[10px] transition-all flex items-center justify-center gap-1 active:scale-95 cursor-pointer"
                          >
                            <Check className="w-3.5 h-3.5" /> Sale Confirmed locally! (Reset)
                          </button>
                        ) : (
                          <button
                            type="button"
                            onClick={handleF12Checkout}
                            className="w-full py-2 bg-[#0D9488] hover:bg-[#0F766E] text-white font-extrabold rounded-lg text-[10px] transition-all flex items-center justify-center gap-1 active:scale-95 cursor-pointer shadow-xs"
                            id="f12-checkout-trigger"
                          >
                            <span>[F12] Complete Sale</span>
                          </button>
                        )}
                      </div>
                    </div>

                    {/* Right Mini-Widget: Beautiful Profitability mini-line chart over 7 days */}
                    <div className="col-span-5 bg-white p-3 rounded-xl border border-slate-200 flex flex-col justify-between text-left shadow-xs">
                      <div>
                        <div className="flex justify-between items-center border-b border-slate-100 pb-1.5 mb-2">
                          <span className="text-[9px] font-bold text-slate-400 uppercase tracking-wider">
                            Weekly Profit Trend
                          </span>
                          <TrendingUp className="w-3.5 h-3.5 text-teal-500 shrink-0" />
                        </div>
                        <span className="text-[9px] text-slate-500 block font-bold leading-tight">
                          Denominated in Ethiopian Birr
                        </span>
                      </div>

                      {/* Line graph design */}
                      <div className="h-16 w-full relative my-1">
                        <svg className="w-full h-full overflow-visible" viewBox="0 0 100 50" preserveAspectRatio="none">
                          <defs>
                            <linearGradient id="neonGlow" x1="0" y1="0" x2="0" y2="1">
                              <stop offset="0%" stopColor="#0D9488" stopOpacity="0.2" />
                              <stop offset="100%" stopColor="#0D9488" stopOpacity="0" />
                            </linearGradient>
                          </defs>
                          <line x1="0" y1="10" x2="100" y2="10" stroke="#f1f5f9" strokeWidth="0.5" />
                          <line x1="0" y1="25" x2="100" y2="25" stroke="#f1f5f9" strokeWidth="0.5" />
                          <line x1="0" y1="40" x2="100" y2="40" stroke="#f1f5f9" strokeWidth="0.5" />
                          <path
                            d="M 5,45 Q 25,30 45,35 Q 70,15 95,8 L 95,50 L 5,50 Z"
                            fill="url(#neonGlow)"
                          />
                          <path
                            d="M 5,45 Q 25,30 45,35 Q 70,15 95,8"
                            fill="none"
                            stroke="#0D9488"
                            strokeWidth="2"
                            strokeLinecap="round"
                          />
                          <circle cx="95" cy="8" r="2.5" fill="#0D9488" />
                        </svg>
                      </div>

                      <div className="flex items-center justify-between text-[8px] font-semibold text-slate-400 border-t border-slate-100 pt-1.5">
                        <span className="text-teal-600 font-extrabold">28.4% Net Margins</span>
                        <span>Mon - Sun</span>
                      </div>
                    </div>

                  </div>

                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
