import { useState } from "react";
import { Plus, Minus, HelpCircle } from "lucide-react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "Will this application work if our pharmacy loses internet connection?",
      a: "Yes. PharmaStop is a native desktop application that installs directly on your computers. It operates entirely locally, allowing you to register customer sales, search medicine stock, calculate change, and print receipt bills in ETB even with zero internet. Once connection is restored, cross-branch totals update automatically."
    },
    {
      q: "How long does it take to input our medicine stock list into PharmaStop?",
      a: "Most pharmacies are up and running in just a few hours. The technicians at BitLabs Technology PLC will assist you in loading your complete stock of medications, batch codes, cost prices, and retail markups so that your staff can start checkout immediately."
    },
    {
      q: "Does the app support standard local receipt printers and cash drawers?",
      a: "Yes. Because it is a powerful desktop software, it links directly to your thermal receipt printers (such as Epson or generic USB printers) and electronic cash drawers. Receipts are printed instantly upon register checkout and the drawer splits open automatically."
    },
    {
      q: "Can we track sales and inventory across multiple branches in Ethiopia?",
      a: "Absolutely. PharmaStop makes it incredibly easy to track stock and view performance reports for your Bole, Megenagna, Piazza, or other regional branches. Owners can review consolidated sales totals in ETB and shift reports from one desktop dashboard."
    }
  ];

  return (
    <section className="py-24 bg-slate-50 border-t border-slate-200 relative" id="faq">
      {/* Background medical lines */}
      <div className="absolute inset-0 medical-grid opacity-30 pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative">
        
        {/* Section Header */}
        <div className="text-center mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 bg-sky-50 text-sky-600 text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider border border-sky-150">
            <HelpCircle className="w-3.5 h-3.5" /> Direct Support FAQs
          </div>
          <h3 className="font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight leading-none" id="faq-title">
            Frequently Asked Questions
          </h3>
          <p className="text-slate-500 text-sm">
            Everything pharmacy owners, doctors, and pharmacists need to understand about the PharmaStop desktop release.
          </p>
        </div>

        {/* Accordions */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-xs hover:border-slate-300 transition-colors"
                id={`faq-accordion-item-${idx}`}
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full text-left p-5 sm:p-6 flex justify-between items-center gap-4 focus:outline-none cursor-pointer"
                  id={`faq-btn-${idx}`}
                >
                  <span className="font-sans font-bold text-sm sm:text-base text-slate-800">
                    {faq.q}
                  </span>
                  <div className={`p-1.5 rounded-lg ${isOpen ? "bg-sky-50 text-sky-500" : "bg-slate-50 text-slate-400"} transition-colors shrink-0`}>
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>

                {isOpen && (
                  <div 
                    className="px-5 pb-6 sm:px-6 sm:pb-8 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-4 bg-slate-50/25"
                    id={`faq-content-${idx}`}
                  >
                    <p>{faq.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Sub CTA helper */}
        <div className="text-center mt-12">
          <p className="text-xs text-slate-400 font-medium">
            Have bespoke clinical system criteria? Reach out directly via <span className="text-sky-500 font-semibold font-mono">support@bitlabsbuild.com</span>.
          </p>
        </div>

      </div>
    </section>
  );
}
