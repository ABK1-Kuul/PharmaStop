import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Calendar as CalendarIcon, Clock, ChevronRight, X, Sparkles, CheckCircle, ShieldCheck, ArrowRight, Building, Mail, User, Phone, Globe } from "lucide-react";

interface DemoSchedulerProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function DemoScheduler({ isOpen, onClose }: DemoSchedulerProps) {
  const [step, setStep] = useState(1);
  const [selectedDate, setSelectedDate] = useState<number | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    pharmacy: "",
    branches: "1-2",
    phone: "",
    message: ""
  });

  const dates = [
    { dayName: "Mon", dayNum: 15, month: "Jun", status: "Available" },
    { dayName: "Tue", dayNum: 16, month: "Jun", status: "Available" },
    { dayName: "Wed", dayNum: 17, month: "Jun", status: "Available" },
    { dayName: "Thu", dayNum: 18, month: "Jun", status: "Available" },
    { dayName: "Fri", dayNum: 19, month: "Jun", status: "Available" },
  ];

  const timeSlots = ["09:00 AM EAT", "11:00 AM EAT", "02:00 PM EAT", "04:30 PM EAT", "06:00 PM EAT"];

  const handleDateSelect = (dayNum: number) => {
    setSelectedDate(dayNum);
    setSelectedTime(null);
  };

  const isFormValid = formData.name && formData.email && formData.pharmacy && formData.phone;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isFormValid && selectedDate && selectedTime) {
      setStep(3);
    }
  };

  const getSelectedDateString = () => {
    if (!selectedDate) return "";
    const dateObj = dates.find(d => d.dayNum === selectedDate);
    return dateObj ? `${dateObj.dayName}, ${dateObj.month} ${dateObj.dayNum}, 2026` : "";
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-55 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-slate-900/65 backdrop-blur-xs"
            id="scheduler-backdrop"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ type: "spring", duration: 0.4 }}
            className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden z-10"
            id="scheduler-modal"
          >
            {/* Header */}
            <div className="relative border-b border-slate-100 bg-[#F8FAFC] p-6 flex justify-between items-start">
              <div className="text-left">
                <div className="flex items-center gap-2 text-sky-600 font-bold text-xs uppercase mb-1">
                  <span className="w-2 h-2 rounded-full bg-sky-500 animate-pulse animate-slow"></span>
                  Ethiopia Edition Launcher
                </div>
                <h3 className="font-display text-xl font-bold text-slate-900">
                  Request Your Free Demo Call
                </h3>
                <p className="text-slate-500 text-xs mt-1">
                  Coordinated directly by BitLabs Technology PLC (bitlabsbuild.com)
                </p>
              </div>
              <button
                onClick={onClose}
                className="text-slate-400 hover:text-slate-600 p-1.5 rounded-lg hover:bg-slate-100 transition-colors cursor-pointer"
                aria-label="Close"
                id="close-scheduler-btn"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Stepper indicator */}
            <div className="bg-slate-50 px-6 py-2.5 flex items-center gap-3 border-b border-slate-100 text-xs font-semibold text-slate-400">
              <span className={`${step >= 1 ? "text-sky-500 font-bold" : ""}`}>01. Choose Slot</span>
              <ChevronRight className="w-3 h-3 text-slate-300" />
              <span className={`${step >= 2 ? "text-sky-500 font-bold" : ""}`}>02. Pharmacy Info</span>
              <ChevronRight className="w-3 h-3 text-slate-300" />
              <span className={`${step >= 3 ? "text-sky-500 font-bold" : ""}`}>03. Reservation Confirmed</span>
            </div>

            {/* Steps views */}
            <div className="p-6 overflow-y-auto max-h-[65vh]">
              {step === 1 && (
                <div className="space-y-6">
                  <div className="text-left">
                    <span className="text-sm font-bold text-slate-800 block mb-3">
                      Select Your Preferred Date (June 2026)
                    </span>
                    <div className="grid grid-cols-5 gap-2">
                      {dates.map((d) => (
                        <button
                          key={d.dayNum}
                          type="button"
                          onClick={() => handleDateSelect(d.dayNum)}
                          className={`p-3 rounded-xl border-2 text-center transition-all cursor-pointer ${
                            selectedDate === d.dayNum
                              ? "bg-sky-50 border-sky-500 ring-2 ring-sky-100"
                              : "border-slate-200 hover:border-sky-300 hover:bg-slate-50/50"
                          }`}
                          id={`date-btn-${d.dayNum}`}
                        >
                          <span className="text-[10px] font-bold text-slate-450 block uppercase tracking-wider">{d.dayName}</span>
                          <span className="text-xl font-display font-extrabold text-slate-800 block mt-0.5">{d.dayNum}</span>
                          <span className="text-[9px] text-sky-500 font-bold block mt-1">{d.status}</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  {selectedDate && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="space-y-3 text-left"
                    >
                      <span className="text-sm font-bold text-slate-800 block">
                        Available Consultation Times (Ethiopia Local Hours / East Africa Time)
                      </span>
                      <div className="flex flex-wrap gap-2">
                        {timeSlots.map((slot) => (
                          <button
                            key={slot}
                            type="button"
                            onClick={() => setSelectedTime(slot)}
                            className={`px-4 py-2 rounded-lg border-2 text-xs font-bold transition-all flex items-center gap-2 cursor-pointer ${
                              selectedTime === slot
                                ? "bg-sky-500 text-white border-sky-500 shadow-sm"
                                : "bg-white border-slate-200 text-slate-700 hover:border-sky-400"
                            }`}
                            id={`time-btn-${slot.replace(/\s+/g, '-')}`}
                          >
                            <Clock className="w-3.5 h-3.5" />
                            {slot}
                          </button>
                        ))}
                      </div>
                    </motion.div>
                  )}

                  <div className="flex justify-between items-center bg-slate-50 -mx-6 -mb-6 p-6 mt-6 border-t border-slate-200">
                    <span className="text-xs text-slate-500 flex items-center gap-1.5">
                      <ShieldCheck className="w-4 h-4 text-sky-500" strokeWidth={2.5} /> Free Demonstration Service
                    </span>
                    <button
                      type="button"
                      disabled={!selectedDate || !selectedTime}
                      onClick={() => setStep(2)}
                      className={`px-6 py-2.5 rounded-full font-bold text-xs transition-all flex items-center gap-2 ${
                        selectedDate && selectedTime
                          ? "bg-sky-500 hover:bg-sky-600 text-white shadow-md cursor-pointer"
                          : "bg-slate-100 text-slate-400 cursor-not-allowed"
                      }`}
                      id="next-step-btn"
                    >
                      Fill Out Details <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              )}

              {step === 2 && (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="bg-sky-50 border border-sky-100 rounded-xl p-4 flex items-center gap-3 mb-4 text-left">
                    <div className="p-2 rounded-lg bg-sky-100 text-sky-600 shrink-0">
                      <CalendarIcon className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="block font-bold text-xs text-slate-800">Your Appointment Slot:</span>
                      <span className="text-xs text-slate-600 font-semibold font-mono">
                        {getSelectedDateString()} at {selectedTime}
                      </span>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 text-left">
                    <div className="space-y-1">
                      <label htmlFor="name-input" className="text-[10px] font-bold text-slate-700 uppercase block">
                        Your Full Name
                      </label>
                      <div className="relative">
                        <User className="absolute left-2.5 top-2.5 w-4 h-4 text-slate-400" />
                        <input
                          type="text"
                          required
                          id="name-input"
                          placeholder="Dr. Abraham Tolosa / Sister Tigist"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full pl-9 pr-3 py-2 text-xs rounded-lg border border-slate-200 focus:border-sky-500 focus:outline-none transition-all"
                        />
                      </div>
                    </div>

                    <div className="space-y-1">
                      <label htmlFor="email-input" className="text-[10px] font-bold text-slate-700 uppercase block">
                        Email Address
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-2.5 top-2.5 w-4 h-4 text-slate-400" />
                        <input
                          type="email"
                          required
                          id="email-input"
                          placeholder="example@gmail.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full pl-9 pr-3 py-2 text-xs rounded-lg border border-slate-200 focus:border-sky-500 focus:outline-none transition-all"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 text-left">
                    <div className="space-y-1">
                      <label htmlFor="pharmacy-input" className="text-[10px] font-bold text-slate-700 uppercase block">
                        Pharmacy Name / Drugstore
                      </label>
                      <div className="relative">
                        <Building className="absolute left-2.5 top-2.5 w-4 h-4 text-slate-400" />
                        <input
                          type="text"
                          required
                          id="pharmacy-input"
                          placeholder="Bole Hope Pharmacy / Piazza Drugstore"
                          value={formData.pharmacy}
                          onChange={(e) => setFormData({ ...formData, pharmacy: e.target.value })}
                          className="w-full pl-9 pr-3 py-2 text-xs rounded-lg border border-slate-200 focus:border-sky-500 focus:outline-none transition-all"
                        />
                      </div>
                    </div>

                    <div className="space-y-1">
                      <label htmlFor="branches-select" className="text-[10px] font-bold text-slate-700 uppercase block">
                        Number of Active Branches
                      </label>
                      <div className="relative">
                        <Globe className="absolute left-2.5 top-2.5 w-4 h-4 text-slate-400" />
                        <select
                          id="branches-select"
                          value={formData.branches}
                          onChange={(e) => setFormData({ ...formData, branches: e.target.value })}
                          className="w-full pl-9 pr-3 py-2 text-xs bg-white rounded-lg border border-slate-200 focus:border-sky-500 focus:outline-none transition-all"
                        >
                          <option value="1-2">Single Pharmacy (1-2 Branches)</option>
                          <option value="3-5">Local Network (3-5 Branches)</option>
                          <option value="5-10">Medium Group (5-10 Branches)</option>
                          <option value="10+">Enterprise Chain (10+ Outlets)</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-1 text-left">
                    <label htmlFor="phone-input" className="text-[10px] font-bold text-slate-700 uppercase block">
                      Direct Contact Number (Mobile)
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-2.5 top-2.5 w-4 h-4 text-slate-400" />
                      <input
                        type="tel"
                        required
                        id="phone-input"
                        placeholder="e.g. +251 911 000 000"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full pl-9 pr-3 py-2 text-xs rounded-lg border border-slate-200 focus:border-sky-500 focus:outline-none transition-all"
                      />
                    </div>
                  </div>

                  <div className="space-y-1 text-left">
                    <label htmlFor="message-input" className="text-[10px] font-bold text-slate-700 uppercase block">
                      Any questions or specific needs
                    </label>
                    <textarea
                      id="message-input"
                      rows={2}
                      placeholder="e.g., questions about custom receipt layouts, staff training help, or offline desktop setup..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-3 py-2 text-xs rounded-lg border border-slate-200 focus:border-sky-500 focus:outline-none transition-all resize-none font-sans"
                    ></textarea>
                  </div>

                  <div className="flex justify-between items-center bg-slate-50 -mx-6 -mb-6 p-6 mt-6 border-t border-slate-200">
                    <button
                      type="button"
                      onClick={() => setStep(1)}
                      className="text-slate-500 hover:text-slate-800 font-bold text-xs cursor-pointer"
                      id="prev-btn"
                    >
                      Back
                    </button>
                    <button
                      type="submit"
                      disabled={!isFormValid}
                      className={`px-6 py-2.5 rounded-full font-bold text-xs transition-all flex items-center gap-2 ${
                        isFormValid
                          ? "bg-sky-500 hover:bg-sky-600 text-white shadow-md cursor-pointer"
                          : "bg-slate-100 text-slate-400 cursor-not-allowed"
                      }`}
                      id="submit-demo-btn"
                    >
                      Process Appointment <Sparkles className="w-4 h-4" />
                    </button>
                  </div>
                </form>
              )}

              {step === 3 && (
                <div className="text-center py-6 space-y-4">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-emerald-50 text-emerald-600 mb-1">
                    <CheckCircle className="w-7 h-7" strokeWidth={3} />
                  </div>
                  <h4 className="font-display text-xl font-bold text-slate-900">
                    Appointment successfully Reserved!
                  </h4>
                  <p className="text-xs text-slate-600 max-w-md mx-auto leading-relaxed">
                    We have reserved your free demonstration of the PharmaStop desktop application. Coordination details have been sent to <span className="font-mono text-sky-600 font-bold">{formData.email}</span>.
                  </p>

                  <div className="bg-slate-50 rounded-xl p-4 max-w-md mx-auto border border-slate-200 text-left space-y-2.5">
                    <div className="flex justify-between text-xs">
                      <span className="text-slate-400 font-bold">REPRESENTATIVE:</span>
                      <span className="font-semibold text-slate-700">BitLabs Technology PLC</span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span className="text-slate-400 font-bold">HOURS SELECTED:</span>
                      <span className="font-mono font-bold text-slate-700">{getSelectedDateString()} at {selectedTime}</span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span className="text-slate-400 font-bold">PHARMACY OUTLET:</span>
                      <span className="font-semibold text-slate-700">{formData.pharmacy}</span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span className="text-slate-400 font-bold">MEETING MEDIUM:</span>
                      <span className="text-sky-600 font-bold">Video Meeting (Google Meet link attached)</span>
                    </div>
                  </div>

                  <p className="text-[10px] text-slate-400 max-w-xs mx-auto">
                    Emergency/Urgent Setup? Contact support@bitlabsbuild.com for instant installer delivery support.
                  </p>

                  <div className="pt-2">
                    <button
                      type="button"
                      onClick={() => {
                        onClose();
                        setStep(1);
                        setSelectedDate(null);
                        setSelectedTime(null);
                      }}
                      className="px-6 py-2.5 rounded-full bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs transition-all inline-flex items-center gap-2 cursor-pointer active:scale-95"
                      id="dismiss-scheduler-btn"
                    >
                      Return to Welcome Screen
                    </button>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
