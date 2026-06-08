import { ShieldCheck, Mail, ArrowRight, Building2, HelpCircle } from "lucide-react";

interface FooterProps {
  onOpenScheduler: () => void;
}

export default function Footer({ onOpenScheduler }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-slate-200 relative overflow-hidden animate-fade-in" id="footer-section">
      {/* Background medical grid lines */}
      <div className="absolute inset-0 medical-grid opacity-30 pointer-events-none" />

      {/* CTA Conversion Block */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative">
        <div className="relative bg-[#F8FAFC] text-slate-900 rounded-3xl p-8 sm:p-12 md:p-16 overflow-hidden border-2 border-sky-100 shadow-xl">
          {/* Decorative clinical light shapes */}
          <div className="absolute inset-0 bg-radial-at-t from-sky-500/5 via-transparent to-transparent pointer-events-none" />
          
          <div className="relative grid md:grid-cols-12 gap-8 md:gap-12 items-center text-left">
            <div className="md:col-span-8 text-left space-y-4">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-100 border border-sky-200 text-xs font-bold text-sky-600 uppercase tracking-wider">
                <ShieldCheck className="w-3.5 h-3.5 text-sky-500" /> SECURE DESKTOP APPLICATION DEMO
              </span>
              <h3 className="font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-slate-900 leading-tight">
                Ready to transform your pharmacy management? Get a personalized demo from BitLabs Technology PLC.
              </h3>
              <p className="text-slate-600 text-sm sm:text-base max-w-2xl leading-relaxed">
                Our technicians will help you configure the desktop software on your pharmacy laptops. See how easy it is to trace expiry dates, balance registers, and monitor shifts.
              </p>
            </div>
            
            <div className="md:col-span-4 text-left md:text-right">
              <button
                type="button"
                onClick={onOpenScheduler}
                className="inline-flex items-center gap-2 px-8 py-4 bg-sky-500 hover:bg-sky-650 active:scale-95 text-white font-bold text-sm rounded-full transition-all shadow-lg shadow-sky-150 group cursor-pointer"
                id="footer-demo-trigger"
              >
                Request Free Demo
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>

        {/* B2B Footer Columns */}
        <div className="mt-16 sm:mt-20 pt-12 border-t border-slate-200 grid grid-cols-2 md:grid-cols-4 gap-8 text-left">
          <div className="space-y-4 col-span-2 md:col-span-1">
            <div className="flex items-center gap-2">
              <div className="flex flex-col items-center rotate-[-35deg] gap-[0.5px] select-none shrink-0">
                <div className="w-[4.5px] h-[4.5px] bg-sky-500 rounded-t-full" />
                <div className="w-[4.5px] h-[4.5px] bg-sky-300 rounded-b-full" />
              </div>
              <span className="font-display text-base font-extrabold tracking-tight text-slate-900">
                PharmaStop
              </span>
            </div>
            <p className="text-slate-500 text-xs leading-relaxed max-w-xs">
              Reliable offline-first Pharmacy Management Desktop Application developed by BitLabs Technology PLC (bitlabsbuild.com). Formulated specifically for multi-branch pharmacies and 24/7 shifts in Ethiopia.
            </p>
            <div className="flex gap-2 text-slate-400 text-xs">
              <Building2 className="w-4 h-4" />
              <span className="font-semibold text-[10px]">BitLabs Technology PLC</span>
            </div>
          </div>

          <div>
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-4">
              Product Modules
            </span>
            <ul className="space-y-2.5 text-xs text-slate-500 font-bold">
              <li><a href="#features" className="hover:text-sky-500 transition-colors">Smart Inventory POS</a></li>
              <li><a href="#features" className="hover:text-sky-500 transition-colors">Profitability Audits</a></li>
              <li><a href="#features" className="hover:text-sky-500 transition-colors">Rotating Shift Roster</a></li>
              <li><a href="#screenshots" className="hover:text-sky-500 transition-colors">App Showcase Screens</a></li>
            </ul>
          </div>

          <div>
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-4">
              Local Standards
            </span>
            <ul className="space-y-2.5 text-xs text-slate-500 font-bold">
              <li className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></span> 100% Offline-Capable</li>
              <li className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></span> Tax Calculations in Birr</li>
              <li className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></span> Loss Leak Prevention</li>
              <li className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></span> USB Thermal Receipt support</li>
            </ul>
          </div>

          <div>
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-4">
              Corporate Trust
            </span>
            <ul className="space-y-2.5 text-xs text-slate-500 font-bold">
              <li><a href="https://bitlabsbuild.com" target="_blank" rel="noopener noreferrer" className="hover:text-sky-500 transition-colors flex items-center gap-1">bitlabsbuild.com <ArrowRight className="w-3 h-3 text-slate-400" /></a></li>
              <li><a href="#faq" className="hover:text-sky-500 transition-colors">Consultation Q&A</a></li>
              <li><span className="text-slate-400 font-normal">Contact: support@bitlabsbuild.com</span></li>
            </ul>
          </div>
        </div>

        {/* Legal Disclaimer Row */}
        <div className="mt-12 pt-8 border-t border-slate-200 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-slate-400">
          <div className="flex gap-4">
            <span>&copy; {currentYear} PharmaStop Desktop. Released by BitLabs Technology PLC. All rights reserved.</span>
          </div>
          <div className="flex gap-6 font-semibold">
            <span className="hover:text-slate-600 cursor-pointer">PRIVACY ASSURANCE</span>
            <span className="hover:text-slate-600 cursor-pointer">LOCAL SECURITY</span>
            <span className="hover:text-slate-600 cursor-pointer">TERMS OF USE</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
