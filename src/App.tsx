/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import DeepDive from "./components/DeepDive";
import Metrics from "./components/Metrics";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import DemoScheduler from "./components/DemoScheduler";

export default function App() {
  const [isSchedulerOpen, setIsSchedulerOpen] = useState(false);

  const handleOpenScheduler = () => {
    setIsSchedulerOpen(true);
  };

  const handleCloseScheduler = () => {
    setIsSchedulerOpen(false);
  };

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-teal-100 selection:text-teal-900 antialiased relative">
      {/* Sticky Light Navigation Bar */}
      <Navbar onOpenScheduler={handleOpenScheduler} />

      {/* Main Content Sections */}
      <main>
        {/* Clinically Polished Hero & Dashboard Mockup Segment */}
        <Hero onOpenScheduler={handleOpenScheduler} />

        {/* Interactive Features Grid with Live Calculators, shift monitors & POS */}
        <Features />

        {/* Split-screen HQ Vs Floor Tabbed Switcher Deep Dive */}
        <DeepDive />

        {/* High-Impact Enterprise Metrics bar */}
        <Metrics />

        {/* Consultation FAQs Interactive Accordion */}
        <FAQ />
      </main>

      {/* Conversion Banner & Trademark Clinical Links footer */}
      <Footer onOpenScheduler={handleOpenScheduler} />

      {/* High-Converting Executive Scheduler Overlay Modal */}
      <DemoScheduler isOpen={isSchedulerOpen} onClose={handleCloseScheduler} />
    </div>
  );
}
