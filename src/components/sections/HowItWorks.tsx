"use client";

import { motion } from "framer-motion";
import { Phone, ClipboardList, Rocket } from "lucide-react";
import SectionLabel from "@/components/ui/SectionLabel";

const CALENDLY = "https://calendly.com/quotadoctor/30min";

const steps = [
  {
    number: "01",
    icon: Phone,
    title: "Free Strategy Call",
    description:
      "We learn about your business, your challenges, and where you're losing leads. 15-30 minutes. No pitch, no pressure. Just an honest conversation about where you stand.",
    id: "step-strategy-call",
  },
  {
    number: "02",
    icon: ClipboardList,
    title: "Custom Game Plan",
    description:
      "We show you exactly where you're leaking revenue and which solutions will have the biggest impact fastest. You'll see the numbers and the math before you spend a dollar.",
    id: "step-game-plan",
  },
  {
    number: "03",
    icon: Rocket,
    title: "We Handle Everything",
    description:
      "Our team builds and manages your entire system. You focus on running your business. We focus on making sure no lead ever slips through the cracks again.",
    id: "step-handle-everything",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-white py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <SectionLabel>HOW IT WORKS</SectionLabel>
          </motion.div>
          <motion.h2
            className="text-[28px] md:text-[40px] font-bold text-[#0A2F4C] leading-tight mt-1"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
          >
            Up and Running in 3 Simple Steps.
          </motion.h2>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 relative">
          {/* Connector line on desktop */}
          <div className="hidden md:block absolute top-16 left-[calc(16.66%+48px)] right-[calc(16.66%+48px)] h-[2px] border-t-2 border-dashed border-[#E5EAF0] z-0" />

          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.id}
                id={step.id}
                className="relative z-10 flex flex-col items-center text-center"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: idx * 0.15, ease: "easeOut" }}
              >
                {/* Step number watermark */}
                <div className="relative mb-5">
                  <span className="absolute -top-4 -left-4 text-[80px] font-bold text-[#0A2F4C]/[0.04] leading-none select-none pointer-events-none">
                    {step.number}
                  </span>
                  {/* Icon circle */}
                  <div className="relative w-[72px] h-[72px] rounded-2xl bg-[#F7F9FB] border border-[#E5EAF0] flex items-center justify-center shadow-sm">
                    <Icon size={28} className="text-[#4AACDE]" />
                  </div>
                </div>

                <h3 className="text-xl font-semibold text-[#0A2F4C] mb-3">
                  {step.title}
                </h3>
                <p className="text-[#6B7280] text-sm leading-relaxed max-w-xs">
                  {step.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <motion.div
          className="mt-14 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <a
            href={CALENDLY}
            target="_blank"
            rel="noopener noreferrer"
            id="how-it-works-cta"
            className="inline-flex items-center gap-2 bg-[#4AACDE] hover:bg-[#3A9CCC] text-white font-semibold px-8 py-4 rounded-lg text-lg transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-0.5"
          >
            Book Your Free Strategy Call →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
