"use client";

import { motion } from "framer-motion";
import { PhoneCall, DollarSign, Search, CalendarDays } from "lucide-react";
import SectionLabel from "@/components/ui/SectionLabel";

const features = [
  {
    icon: PhoneCall,
    iconColor: "#1B7A2B",
    headline: "Never Miss Another Lead",
    body: "24/7 call answering, web chat, SMS, and missed-call text-back. When a customer reaches out, someone is always there — instantly. Powered by our MissNoCalls system.",
    id: "feature-never-miss",
  },
  {
    icon: DollarSign,
    iconColor: "#4AACDE",
    headline: "Cut Overhead By Up To 90%",
    body: "Replace $110K+ in annual payroll with one system under $12K/year. No hiring, no training, no sick days, no turnover. Just consistent, reliable performance around the clock.",
    id: "feature-cut-overhead",
  },
  {
    icon: Search,
    iconColor: "#4AACDE",
    headline: "Get Found Online",
    body: "SEO, Google Business Profile optimization, directory listings, reputation management, and social media — all managed. When someone in your area searches for what you do, they find you first.",
    id: "feature-get-found",
  },
  {
    icon: CalendarDays,
    iconColor: "#4AACDE",
    headline: "Fill Your Calendar",
    body: "Database reactivation campaigns bring past customers back. Paid ads bring new ones in. Speed-to-lead follow-up makes sure every inquiry turns into a booked appointment.",
    id: "feature-fill-calendar",
  },
];

export default function WhyQuotaDoctor() {
  return (
    <section className="bg-[#F7F9FB] py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <SectionLabel>WHY QUOTADOCTOR</SectionLabel>
          </motion.div>
          <motion.h2
            className="text-[28px] md:text-[40px] font-bold text-[#0A2F4C] leading-tight mt-1"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
          >
            The Smartest Hire You&apos;ll Ever Make.
          </motion.h2>
        </div>

        {/* 2×2 Feature grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {features.map((f, idx) => {
            const Icon = f.icon;
            return (
              <motion.div
                key={f.id}
                id={f.id}
                className="bg-white rounded-xl border border-[#E5EAF0] shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-200 p-7"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: idx * 0.1, ease: "easeOut" }}
              >
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center mb-4"
                  style={{ backgroundColor: `${f.iconColor}15` }}
                >
                  <Icon size={20} style={{ color: f.iconColor }} />
                </div>
                <h3 className="text-lg font-semibold text-[#0A2F4C] mb-2">
                  {f.headline}
                </h3>
                <p className="text-[#6B7280] text-sm leading-relaxed">{f.body}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
