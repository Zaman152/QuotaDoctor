"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Phone, Briefcase, Wrench, LifeBuoy, ArrowRight } from "lucide-react";
import MagneticButton from "@/components/ui/MagneticButton";

const CALENDLY = "https://calendly.com/quotadoctor/30min";

const employees = [
  {
    id: "custom-ai",
    role: "Custom AI Employees",
    tagline: "Tailored to your workflow",
    description:
      "Build AI employees that work like you — only faster. Tailored to your workflows, clients, and business. From intake to invoice, we build it for you.",
    Icon: Wrench,
    accent: "#0A2F4C",
    accentRgb: "10, 47, 76",
    badge: "Custom Built",
  },
  {
    id: "ai-receptionist",
    role: "AI Receptionist",
    tagline: "Book appointments 24/7",
    description:
      "Answers instantly, books appointments, and increases profit margins by 15% or more. Never sleeps, never calls in sick. Works across phone, SMS, web chat, and email.",
    Icon: Phone,
    accent: "#4AACDE",
    accentRgb: "74, 172, 222",
    badge: "Most Popular",
  },
  {
    id: "ai-sales-rep",
    role: "AI Sales Rep",
    tagline: "Fill your calendar automatically",
    description:
      "Qualifies every inquiry and books high-value meetings automatically. Handles objections and fills your calendar — instantly, around the clock.",
    Icon: Briefcase,
    accent: "#8B5CF6",
    accentRgb: "139, 92, 246",
    badge: null,
  },
  {
    id: "ai-support-agent",
    role: "AI Support Agent",
    tagline: "Empathetic resolutions instantly",
    description:
      "Instant, resolution-first support. Resolves issues, captures leads, and keeps customers happy — all 24/7 without you lifting a finger.",
    Icon: LifeBuoy,
    accent: "#06B6D4",
    accentRgb: "6, 182, 212",
    badge: null,
  },
];

export default function MeetYourTeam() {
  return (
    <section id="meet-your-team" className="py-32 relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-[-10%] w-[40vw] h-[40vw] rounded-full bg-[#4AACDE]/5 blur-[120px]" />
        <div className="absolute bottom-10 right-[-10%] w-[35vw] h-[35vw] rounded-full bg-[#8B5CF6]/5 blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        
        {/* Section header */}
        <div className="text-center mb-20 md:mb-24">
          <motion.p
            className="text-[#4AACDE] font-semibold tracking-[0.25em] uppercase text-xs mb-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, type: "spring", bounce: 0.5 }}
          >
            The Automated Office
          </motion.p>
          <motion.h2
            className="text-[clamp(2.5rem,5vw,4.5rem)] font-black text-[#0A2F4C] leading-[1.05] tracking-tighter uppercase"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, type: "spring", bounce: 0.5, delay: 0.1 }}
          >
            MEET THE <br className="hidden md:block" />
            <span className="font-playfair italic font-medium capitalize text-[#4AACDE] tracking-normal">Dream Team.</span>
          </motion.h2>
          <motion.p
            className="mt-6 md:mt-8 text-[#6B7280] text-base md:text-lg lg:text-xl font-medium max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, delay: 0.2, type: "spring", bounce: 0.4 }}
          >
            Instead of hiring five different people, you get one perfect AI team that does it all for a fraction of the cost. Working effortlessly 24/7.
          </motion.p>
        </div>

        {/* Elevated Liquid Glass Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-16">
          {employees.map((emp, idx) => (
            <motion.div
              key={emp.id}
              className="glass-card rounded-[2.5rem] p-8 lg:p-10 relative flex flex-col group overflow-hidden"
              initial={{ opacity: 0, y: 80, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{
                duration: 0.8,
                delay: idx * 0.1,
                type: "spring",
                bounce: 0.4
              }}
            >
              {/* Dynamic Aura */}
              <div 
                className="absolute -top-16 -right-16 w-48 h-48 rounded-full blur-[80px] opacity-15 pointer-events-none group-hover:scale-150 group-hover:opacity-30 transition-all duration-700" 
                style={{ background: emp.accent }}
              />

              {emp.badge && (
                <span
                  className="absolute top-6 right-6 text-xs font-bold px-3 py-1.5 rounded-full text-white shadow-sm"
                  style={{ background: emp.accent }}
                >
                  {emp.badge}
                </span>
              )}

              {/* Icon Container */}
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 shadow-[inset_0_1px_1px_rgba(255,255,255,0.4)] transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3"
                style={{ 
                  background: `rgba(${emp.accentRgb}, 0.12)`,
                  border: `1px solid rgba(${emp.accentRgb}, 0.2)`
                }}
              >
                <emp.Icon className="w-6 h-6" style={{ color: emp.accent }} />
              </div>

              <div className="flex flex-col flex-1">
                <h3 className="text-2xl md:text-3xl font-black text-[#0A2F4C] tracking-tight mb-2">
                  {emp.role}
                </h3>
                <p className="text-xs font-bold uppercase tracking-wider mb-4" style={{ color: emp.accent }}>
                  {emp.tagline}
                </p>
                <p className="text-[0.95rem] md:text-base text-[#6B7280] font-medium leading-relaxed flex-1">
                  {emp.description}
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-black/[0.04]">
                <Link
                  href="/ai-workforce"
                  className="text-sm font-bold text-[#0A2F4C] hover:text-[#4AACDE] transition-colors flex items-center gap-2 group/link"
                >
                  View Details
                  <span className="w-6 h-6 rounded-full bg-[#0A2F4C]/5 flex items-center justify-center group-hover/link:bg-[#4AACDE]/10 transition-colors">
                    <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-0.5 transition-transform" />
                  </span>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All AI Workforce CTA */}
        <motion.div
          className="flex justify-center mb-24"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Link
            href="/ai-workforce"
            className="inline-flex items-center gap-3 text-[#0A2F4C] font-semibold text-lg hover:text-[#4AACDE] transition-colors group"
          >
            See the entire AI Workforce
            <span className="w-8 h-8 rounded-full bg-white/60 shadow-sm border border-black/5 flex items-center justify-center group-hover:bg-white group-hover:scale-110 transition-all">
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </span>
          </Link>
        </motion.div>

        {/* Callout bar */}
        <motion.div
          className="glass-card-dark rounded-[3rem] p-10 md:p-16 text-center shadow-2xl relative overflow-hidden"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, type: "spring", bounce: 0.5 }}
        >
          <div className="absolute -left-32 top-0 w-64 h-64 bg-white rounded-full blur-[100px] opacity-10 pointer-events-none" />
          <div className="absolute -right-32 bottom-0 w-64 h-64 bg-[#4AACDE] rounded-full blur-[100px] opacity-20 pointer-events-none" />
          
          <p className="text-[#0A2F4C] font-black uppercase text-[clamp(1.5rem,4vw,2.5rem)] tracking-tighter mb-10 leading-tight relative z-10">
            AN ENTIRE OFFICE STAFF. <br />
            <span className="font-playfair italic font-medium capitalize text-[#4AACDE] tracking-normal">One Easy Price.</span>
          </p>
          
          <div className="flex justify-center relative z-10">
            <MagneticButton>
              <a
                href={CALENDLY}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-white text-[#0A2F4C] font-black px-8 py-4 rounded-full text-lg md:text-xl transition-all shadow-[0_8px_30px_rgba(0,0,0,0.12)] hover:shadow-[0_8px_30px_rgba(74,172,222,0.3)] hover:scale-105"
              >
                Launch Your Team
                <ArrowRight className="w-5 h-5 text-[#4AACDE]" />
              </a>
            </MagneticButton>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
