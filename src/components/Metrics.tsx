import { CheckCircle, Award, Landmark, RefreshCw } from "lucide-react";

export default function Metrics() {
  const stats = [
    {
      metric: "100%",
      label: "Offline-Capable Desktop App",
      details: "Does not require internet to input prescription billing, scan medicine containers, or prints receipts.",
      subText: "Your local pharmacy workstations operate 24/7 without interruption."
    },
    {
      metric: "Matched",
      label: "Multi-Branch Balance",
      details: "Maintains absolute balance across your Bole, Megenagna, and Piazza pharmacies automatically.",
      subText: "Tally inventories on hand to prevent stock-outs during shifts."
    },
    {
      metric: "Exact Birr",
      label: "Tracks Every Cent in ETB",
      details: "Monitors daily sales down to the precise Ethiopian Birr so that registers balance perfectly.",
      subText: "Guards against shift cash leakages and checkout mistakes."
    }
  ];

  return (
    <section className="bg-slate-50 text-slate-900 border-t border-slate-200 relative py-16 sm:py-20 overflow-hidden" id="analytics">
      {/* Background medical light paths */}
      <div className="absolute inset-0 opacity-40 pointer-events-none medical-grid" />
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-80 h-80 rounded-full bg-sky-50 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-slate-200 text-xs font-bold text-sky-600 uppercase tracking-wider shadow-xs">
            <Award className="w-3.5 h-3.5" /> Core Local Integrity
          </span>
          <h3 className="font-display text-2xl sm:text-3xl font-extrabold tracking-tight mt-3 text-slate-900" id="metrics-title">
            Optimized for Ethiopia's Pharmacy Standards
          </h3>
          <p className="text-slate-600 text-sm sm:text-base mt-2">
            Engineered keeping in mind local power realities and multiple shifts to help pharmacy owners secure their business.
          </p>
        </div>

        {/* Dynamic Metric Grid in Light Mode */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12 divide-y md:divide-y-0 md:divide-x divide-slate-200">
          {stats.map((stat, i) => (
            <div 
              key={i} 
              className={`pt-6 md:pt-0 ${i > 0 ? "md:pl-8 lg:pl-12" : ""} text-left space-y-3`}
              id={`metric-item-${i}`}
            >
              <div className="flex items-baseline gap-2">
                <span className="font-display text-4xl sm:text-5xl lg:text-5xl font-extrabold tracking-tight text-sky-500">
                  {stat.metric}
                </span>
                <span className="h-2.5 w-2.5 rounded-full bg-sky-400 mb-1 animate-pulse"></span>
              </div>
              <div className="space-y-1">
                <span className="font-display font-bold text-sm sm:text-base text-slate-800 block">
                  {stat.label}
                </span>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  {stat.details}
                </p>
                <span className="text-[10px] font-sans font-semibold text-slate-400 block mt-1">
                  {stat.subText}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
