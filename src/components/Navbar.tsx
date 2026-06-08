import { useState, useEffect } from "react";
import { Menu, X, Shield, Activity, BarChart2 } from "lucide-react";

interface NavbarProps {
  onOpenScheduler: () => void;
}

export default function Navbar({ onOpenScheduler }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Features", href: "#features" },
    { name: "App Screenshots", href: "#screenshots" },
    { name: "FAQs", href: "#faq" }
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md border-b border-slate-100/80 shadow-sm"
          : "bg-transparent border-b border-transparent"
      }`}
      id="main-header"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          
          {/* Brand Logo - Customized medical + chart emblem */}
          <a
            href="#"
            className="flex items-center gap-2.5 group hover:opacity-95 transition-opacity"
            id="navbar-logo-link"
          >
            <div className="relative flex items-center justify-center w-9 h-9 rounded-lg bg-sky-500 text-white shadow-lg shadow-sky-200">
              <div className="flex flex-col items-center rotate-[-35deg] gap-[0.5px] select-none">
                <div className="w-[11px] h-[11px] bg-white rounded-t-full animate-pill-top shadow-xs" />
                <div className="w-[11px] h-[11px] bg-sky-200 rounded-b-full animate-pill-bottom shadow-xs" />
              </div>
            </div>
            <div>
              <span className="font-display text-lg font-bold tracking-tight text-slate-900 block leading-tight">
                Pharma<span className="text-sky-500">Stop</span>
              </span>
              <span className="text-[9px] text-slate-400 font-mono tracking-wider block font-medium -mt-0.5">
                BY BITLABS TECHNOLOGY PLC
              </span>
            </div>
          </a>

          {/* Desktop Links */}
          <nav className="hidden md:flex items-center gap-8" id="desktop-nav">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-slate-600 hover:text-sky-500 transition-colors relative py-2 after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-0 after:h-0.5 after:bg-sky-500 after:transition-all hover:after:w-4"
                id={`nav-link-${link.name.toLowerCase()}`}
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Action CTA */}
          <div className="hidden md:flex items-center gap-4">
            <span className="text-xs text-slate-400 font-medium hidden lg:inline-block">
              Ethiopian Pharmacy Standard
            </span>
            <button
              onClick={onOpenScheduler}
              className="px-6 py-2.5 bg-sky-500 hover:bg-sky-600 text-white rounded-full text-sm font-semibold transition-all shadow-md active:scale-95 shadow-sky-100 cursor-pointer"
              id="navbar-demo-cta"
            >
              Request Free Demo
            </button>
          </div>

          {/* Mobile Menu Icon */}
          <div className="flex md:hidden items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg text-slate-500 hover:text-slate-900 hover:bg-slate-50 transition-colors focus:outline-none"
              aria-label="Toggle navigation menu"
              id="mobile-menu-toggle"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-slate-100 shadow-xl" id="mobile-nav-panel">
          <div className="px-4 pt-2 pb-6 space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-3 py-2.5 rounded-lg text-base font-semibold text-slate-700 hover:text-slate-900 hover:bg-slate-50 transition-colors"
                id={`mobile-nav-link-${link.name.toLowerCase()}`}
              >
                {link.name}
              </a>
            ))}
            <div className="pt-4 border-t border-slate-100 flex flex-col gap-3">
              <span className="text-center text-xs text-slate-400 font-medium">
                Modern Pharmacy Platform by BitLabs Technology PLC
              </span>
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onOpenScheduler();
                }}
                className="w-full text-center py-3 bg-sky-500 hover:bg-sky-600 text-white rounded-full text-sm font-semibold transition-all shadow-md active:scale-95 shadow-sky-100 cursor-pointer"
                id="mobile-navbar-demo-cta"
              >
                Request Free Demo
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
