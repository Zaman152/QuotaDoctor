"use client";

import { motion } from "framer-motion";
import {
  Phone,
  Star,
  Share2,
  MessageSquare,
  TrendingUp,
  LayoutDashboard,
} from "lucide-react";
import SectionLabel from "@/components/ui/SectionLabel";

const CALENDLY = "https://calendly.com/quotadoctor/30min";

const employees = [
  {
    icon: Phone,
    role: "Your AI Receptionist",
    tagline: "Never miss a call again",
    description:
      "Answers every call, text, and chat message 24/7/365. Qualifies leads, books appointments directly into your calendar, and texts you the details. Sounds natural — callers never know the difference. Powered by our MissNoCalls system.",
    id: "ai-receptionist",
  },
  {
    icon: Star,
    role: "Your AI Reputation Manager",
    tagline: "Build trust on autopilot",
    description:
      "Automatically requests Google reviews after every completed job. Responds to reviews — positive and negative — so your online reputation stays strong. Monitors competitors so you always know where you stand.",
    id: "ai-reputation",
  },
  {
    icon: Share2,
    role: "Your AI Social Media Manager",
    tagline: "Stay visible without lifting a finger",
    description:
      "Posts consistently across Facebook and Instagram with on-brand content. Keeps your business active and visible online so customers see a company that's thriving — not a page that hasn't posted in 3 months.",
    id: "ai-social",
  },
  {
    icon: MessageSquare,
    role: "Your AI Follow-Up Specialist",
    tagline: "No lead left behind",
    description:
      "Follows up with every lead that doesn't book immediately — by text and email, automatically. Reactivates past customers to rebook. The leads you used to lose now get worked until they convert or opt out.",
    id: "ai-followup",
  },
  {
    icon: TrendingUp,
    role: "Your AI Marketing Strategist",
    tagline: "Get found when customers search",
    description:
      "Manages your SEO so you show up on Google when people search for your services. Keeps your business listings accurate across 50+ directories. Runs targeted ad campaigns that bring new customers straight to your phone.",
    id: "ai-marketing",
  },
  {
    icon: LayoutDashboard,
    role: "Your AI Operations Manager",
    tagline: "One dashboard, everything tracked",
    description:
      "Every call, lead, review, message, and appointment is logged in one place. You see exactly what's working and what's not. No more juggling 6 different tools and logins. One system, complete visibility.",
    id: "ai-operations",
  },
];

export default function MeetYourTeam() {
  return (
    <section id="meet-your-team" className="bg-white py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <SectionLabel>YOUR AI WORKFORCE</SectionLabel>
          </motion.div>
          <motion.h2
            className="text-[28px] md:text-[40px] font-bold text-[#0A2F4C] leading-tight mt-1"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
          >
            Meet Your Team.
          </motion.h2>
          <motion.p
            className="mt-4 text-[#6B7280] text-lg max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: 0.15, ease: "easeOut" }}
          >
            When you work with QuotaDoctor, you get an entire team of AI employees
            working for your business 24/7. Each one handles a specific role — so
            you get the output of a full staff without the overhead.
          </motion.p>
        </div>

        {/* Grid of employee cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {employees.map((emp, idx) => {
            const Icon = emp.icon;
            return (
              <motion.div
                key={emp.id}
                id={emp.id}
                className="bg-white rounded-xl border border-[#E5EAF0] shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-200 p-7 flex gap-5"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.5,
                  delay: idx * 0.08,
                  ease: "easeOut",
                }}
              >
                {/* Icon circle */}
                <div className="shrink-0 w-14 h-14 rounded-full bg-[#0A2F4C] flex items-center justify-center">
                  <Icon size={22} className="text-white" />
                </div>

                {/* Text */}
                <div>
                  <h3 className="text-lg font-bold text-[#0A2F4C]">{emp.role}</h3>
                  <p className="text-[#4AACDE] italic text-sm mt-0.5 mb-2">
                    {emp.tagline}
                  </p>
                  <p className="text-[#6B7280] text-sm leading-relaxed">
                    {emp.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Callout bar */}
        <motion.div
          className="mt-14 bg-[#0A2F4C] rounded-2xl p-8 md:p-10 text-center"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <p className="text-white font-semibold text-xl md:text-2xl mb-6">
            6 AI employees. One monthly fee. Cancel anytime.
          </p>
          <a
            href={CALENDLY}
            target="_blank"
            rel="noopener noreferrer"
            id="meet-your-team-cta"
            className="inline-flex items-center gap-2 bg-[#4AACDE] hover:bg-[#3A9CCC] text-white font-semibold px-8 py-4 rounded-lg text-lg transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-0.5"
          >
            Book Your Free Strategy Call →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
