"use client";

import { motion } from "framer-motion";
import SectionLabel from "@/components/ui/SectionLabel";
import { CheckCircle2 } from "lucide-react";

const CALENDLY = "https://calendly.com/quotadoctor/30min";

const trustItems = [
  "24/7 AI Workforce",
  "Setup in Days, Not Months",
  "Cancel Anytime",
  "No Long-Term Contracts",
];

export default function Hero() {
  return (
    <section className="relative bg-white overflow-hidden pt-28 pb-20 md:pt-36 md:pb-28">
      {/* Subtle radial gradient background */}
      <div
        className="absolute top-0 right-0 w-[600px] h-[600px] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at top right, rgba(74,172,222,0.08) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center max-w-4xl mx-auto">
          {/* Pill label */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <SectionLabel>Trusted by Small Business Owners Across the U.S.</SectionLabel>
          </motion.div>

          {/* H1 */}
          <motion.h1
            className="text-[38px] md:text-[56px] font-bold text-[#0A2F4C] leading-[1.1] tracking-tight mt-4"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          >
            Stop Losing Jobs to
            <br />
            <motion.span
              className="text-[#0A2F4C]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
            >
              Missed Calls.
            </motion.span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            className="mt-6 text-lg md:text-xl text-[#6B7280] max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5, ease: "easeOut" }}
          >
            We give small businesses a 24/7 team that answers every call, captures
            every lead, and runs your marketing — for less than one part-time hire.
          </motion.p>

          {/* Italic tagline */}
          <motion.p
            className="mt-3 text-[#4AACDE] font-medium italic text-base md:text-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.65, ease: "easeOut" }}
          >
            One system. Every channel. No missed revenue.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.75, ease: "easeOut" }}
          >
            <a
              href={CALENDLY}
              target="_blank"
              rel="noopener noreferrer"
              id="hero-cta-primary"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#4AACDE] hover:bg-[#3A9CCC] text-white font-semibold px-8 py-4 rounded-lg text-lg transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-0.5"
            >
              Book Your Free Strategy Call →
            </a>
            <a
              href="#how-it-works"
              id="hero-cta-secondary"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 border-2 border-[#0A2F4C] text-[#0A2F4C] hover:bg-[#0A2F4C] hover:text-white font-semibold px-8 py-4 rounded-lg text-lg transition-all duration-200"
            >
              See How It Works
            </a>
          </motion.div>
        </div>

        {/* Trust bar */}
        <motion.div
          className="mt-14 flex flex-wrap items-center justify-center gap-3 md:gap-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.9 }}
        >
          {trustItems.map((item, idx) => (
            <div key={item} className="flex items-center">
              <div className="flex items-center gap-1.5 text-[#6B7280] text-sm font-medium px-3">
                <CheckCircle2 size={14} className="text-[#4AACDE] shrink-0" />
                <span>{item}</span>
              </div>
              {idx < trustItems.length - 1 && (
                <span className="hidden md:block text-[#E5EAF0] select-none">·</span>
              )}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
