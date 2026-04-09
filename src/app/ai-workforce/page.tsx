"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import {
  Phone, Star, Briefcase, BarChart2, Target, LifeBuoy, Wrench,
  Rocket, Zap, ArrowRight,
} from "lucide-react";

const CALENDLY = "https://calendly.com/quotadoctor/15";

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.85, type: "spring", bounce: 0.35, delay },
  },
});

const aiTeam = [
  {
    id: "receptionist",
    title: "AI Receptionist",
    tagline: "Capture leads & book appointments automatically",
    description:
      "Answers instantly, books appointments, and increases profit margins by 15% or more. Never sleeps, never calls in sick. Works across phone, SMS, web chat, and email.",
    Icon: Phone,
    accent: "#4AACDE",
    accentRgb: "74, 172, 222",
    stat: "+15%",
    statLabel: "Avg. revenue lift",
    badge: "Most Popular",
  },
  {
    id: "reputation",
    title: "AI Reputation Specialist",
    tagline: "Generate & manage review requests automatically",
    description:
      "Protects reputation, responds automatically, and drives more reviews without manual work. Turns every completed job into a Google review opportunity.",
    Icon: Star,
    accent: "#F59E0B",
    accentRgb: "245, 158, 11",
    stat: "3×",
    statLabel: "More reviews",
    badge: null,
  },
  {
    id: "sales-assistant",
    title: "AI Sales Assistant",
    tagline: "Automate CRM updates, research leads & get insights",
    description:
      "Transcribes meetings, summarizes key insights, and provides actionable tips to convert more leads. Keeps your pipeline air-tight with zero manual entry.",
    Icon: Briefcase,
    accent: "#8B5CF6",
    accentRgb: "139, 92, 246",
    stat: "2×",
    statLabel: "Faster close rate",
    badge: null,
  },
  {
    id: "data-analyst",
    title: "AI Data Analyst",
    tagline: "Analyze CRM, reviews & social for instant insights",
    description:
      "Uses the AIR framework to turn CRM, reviews, and social metrics into actionable growth roadmaps. Know exactly where revenue is leaking — and how to stop it.",
    Icon: BarChart2,
    accent: "#10B981",
    accentRgb: "16, 185, 129",
    stat: "100%",
    statLabel: "Data visibility",
    badge: null,
  },
  {
    id: "inside-salesperson",
    title: "AI Inside Salesperson",
    tagline: "Qualify inquiries & book high-value meetings 24/7",
    description:
      "Qualifies every inquiry and books high-value meetings automatically. Handles objections and fills your calendar — instantly, around the clock.",
    Icon: Target,
    accent: "#EF4444",
    accentRgb: "239, 68, 68",
    stat: "24/7",
    statLabel: "Lead qualification",
    badge: null,
  },
  {
    id: "support-agent",
    title: "AI Support Agent",
    tagline: "24/7 empathetic support via SMS & chat",
    description:
      "Instant, resolution-first support using the HEARD framework. Resolves issues, captures leads, and keeps customers happy — all without lifting a finger.",
    Icon: LifeBuoy,
    accent: "#06B6D4",
    accentRgb: "6, 182, 212",
    stat: "< 3s",
    statLabel: "Avg. response time",
    badge: null,
  },
  {
    id: "custom",
    title: "Custom AI Employees",
    tagline: "Build AI employees tailored to your exact workflow",
    description:
      "Build AI employees that work like you — only faster. Tailored to your workflows, clients, and business. From intake to invoice, we build it for you.",
    Icon: Wrench,
    accent: "#0A2F4C",
    accentRgb: "10, 47, 76",
    stat: "∞",
    statLabel: "Possibilities",
    badge: "Custom Built",
  },
];

const setupServices = [
  { Icon: Rocket, title: "AI Receptionist Setup", desc: "Expert configuration so your AI Receptionist learns your business, handles calls perfectly, and starts booking appointments from day one." },
  { Icon: Star, title: "AI Reputation Setup", desc: "We train the AI to respond to reviews in your brand voice and auto-trigger review requests after every completed job." },
  { Icon: BarChart2, title: "AI Data Analyst Setup", desc: "We connect your data sources, CRM, and review platforms so your AI Analyst delivers weekly insight reports automatically." },
  { Icon: Briefcase, title: "AI Sales Setup", desc: "Configure AI to qualify leads, handle objections, and book meetings directly into your calendar without manual work." },
  { Icon: LifeBuoy, title: "AI Support Setup", desc: "We train your support agent on your knowledge base so it resolves customer issues 24/7 using your exact processes." },
];

const stats = [
  { value: "70%", label: "ROI increase with AI Receptionist" },
  { value: "< 3s", label: "Average AI response time" },
  { value: "24/7", label: "Availability, zero burnout" },
  { value: "8.2M+", label: "Businesses already served" },
];

function ParallaxHero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative min-h-[100svh] flex flex-col justify-center items-center overflow-hidden bg-[#F7F9FB] pt-28"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-15%] left-[-5%] w-[50vw] h-[50vw] rounded-full bg-[#4AACDE]/20 blur-[120px] animate-[float-blob_18s_ease-in-out_infinite_alternate]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40vw] h-[40vw] rounded-full bg-[#1B7A2B]/10 blur-[120px] animate-[float-blob_24s_ease-in-out_infinite_alternate-reverse]" />
      </div>

      <div className="absolute inset-0 flex flex-col justify-center items-center pointer-events-none select-none overflow-hidden opacity-[0.04]">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, ease: "linear", duration: 35 }}
          className="whitespace-nowrap text-[15vw] font-black tracking-tighter text-[#0A2F4C]"
        >
          AI WORKFORCE AI WORKFORCE AI WORKFORCE&nbsp;
        </motion.div>
        <motion.div
          animate={{ x: ["-50%", "0%"] }}
          transition={{ repeat: Infinity, ease: "linear", duration: 28 }}
          className="whitespace-nowrap text-[15vw] font-black tracking-tighter text-[#0A2F4C]"
        >
          AUTOMATE EVERYTHING AUTOMATE EVERYTHING&nbsp;
        </motion.div>
      </div>

      <motion.div style={{ y, opacity }} className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <motion.span
          variants={fadeUp(0)}
          initial="hidden"
          animate="visible"
          className="inline-block text-xs font-semibold tracking-[0.25em] uppercase text-[#4AACDE] bg-[#4AACDE]/10 border border-[#4AACDE]/20 px-5 py-1.5 rounded-full mb-8"
        >
          Powered by QuotaDoctor AI
        </motion.span>

        <motion.h1
          variants={fadeUp(0.1)}
          initial="hidden"
          animate="visible"
          className="text-[clamp(2.2rem,5.5vw,5.5rem)] font-black text-[#0A2F4C] leading-[0.9] tracking-tighter mb-6"
        >
          YOUR AI
          <br />
          <span
            className="font-playfair italic font-medium text-[#4AACDE]"
            style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontStyle: "italic" }}
          >
            Workforce
          </span>
          <br />
          NEVER SLEEPS.
        </motion.h1>

        <motion.p
          variants={fadeUp(0.2)}
          initial="hidden"
          animate="visible"
          className="text-base md:text-lg text-[#6B7280] max-w-lg mx-auto leading-relaxed mb-10"
        >
          Boost more traffic, capture more leads, and book more appointments with AI employees that work 24/7 — for every business you serve.
        </motion.p>

        <motion.div
          variants={fadeUp(0.3)}
          initial="hidden"
          animate="visible"
          className="flex flex-col sm:flex-row gap-3 justify-center"
        >
          <a
            href={CALENDLY}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#0A2F4C] text-white px-8 py-3.5 rounded-full font-semibold text-sm shadow-lg hover:bg-[#0A2F4C]/85 hover:scale-105 transition-all group"
          >
            Book a Free Strategy Call
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </a>
          <a
            href="#ai-team"
            className="glass-card inline-flex items-center gap-2 text-[#0A2F4C] px-8 py-3.5 rounded-full font-medium text-sm hover:scale-105 transition-transform"
          >
            Explore the Team ↓
          </a>
        </motion.div>
      </motion.div>

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[#0A2F4C]/40 text-xs font-medium"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <div className="w-px h-8 bg-[#0A2F4C]/15" />
        Scroll
      </motion.div>
    </section>
  );
}

function StatsRow() {
  return (
    <section className="py-16 bg-[#0A2F4C] relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#4AACDE] rounded-full blur-[100px]" />
      </div>
      <div className="max-w-5xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 relative z-10">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            variants={fadeUp(i * 0.1)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="text-center"
          >
            <p
              className="text-[clamp(2rem,4.5vw,3.5rem)] font-bold text-white leading-none mb-2"
              style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
            >
              {s.value}
            </p>
            <p className="text-white/55 text-xs font-medium leading-snug">{s.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function AITeamSection() {
  return (
    <section id="ai-team" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.p
            variants={fadeUp(0)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="text-[#4AACDE] font-semibold tracking-[0.25em] uppercase text-xs mb-4"
          >
            The Full Team
          </motion.p>
          <motion.h2
            variants={fadeUp(0.1)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="text-[clamp(2rem,5vw,4.5rem)] font-black text-[#0A2F4C] leading-[0.9] tracking-tighter"
          >
            MEET YOUR
            <br />
            <span
              className="italic font-medium text-[#4AACDE]"
              style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontStyle: "italic" }}
            >
              AI Employees.
            </span>
          </motion.h2>
          <motion.p
            variants={fadeUp(0.2)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="mt-5 text-base text-[#6B7280] max-w-xl mx-auto leading-relaxed"
          >
            Instead of hiring a staff of 7, you get one seamless AI team that works every hour of every day — for a fraction of the cost.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {aiTeam.map((emp, idx) => (
            <motion.div
              key={emp.id}
              variants={fadeUp(idx * 0.07)}
              initial="hidden"
              whileInView="visible"
              whileHover={{ y: -6, scale: 1.015 }}
              viewport={{ once: true, margin: "-80px" }}
              className="glass-card rounded-[2rem] p-7 relative group overflow-hidden flex flex-col"
            >
              <div
                className="absolute -top-12 -right-12 w-36 h-36 rounded-full blur-[70px] opacity-20 group-hover:opacity-35 group-hover:scale-125 transition-all duration-700 pointer-events-none"
                style={{ background: emp.accent }}
              />

              {emp.badge && (
                <span
                  className="absolute top-5 right-5 text-xs font-bold px-2.5 py-1 rounded-full text-white"
                  style={{ background: emp.accent }}
                >
                  {emp.badge}
                </span>
              )}

              {/* Icon */}
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center mb-5"
                style={{ background: `rgba(${emp.accentRgb}, 0.12)` }}
              >
                <emp.Icon className="w-5 h-5" style={{ color: emp.accent }} />
              </div>

              {/* Stat pill */}
              <div
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-bold mb-4 w-fit border"
                style={{
                  background: `rgba(${emp.accentRgb}, 0.08)`,
                  color: emp.accent,
                  borderColor: `rgba(${emp.accentRgb}, 0.2)`,
                }}
              >
                <span className="font-black">{emp.stat}</span>
                <span className="font-normal text-xs opacity-70">{emp.statLabel}</span>
              </div>

              <h3 className="text-xl font-bold text-[#0A2F4C] tracking-tight mb-1.5">
                {emp.title}
              </h3>
              <p className="text-xs font-semibold text-[#4AACDE] mb-3 uppercase tracking-wider">
                {emp.tagline}
              </p>
              <p className="text-[#6B7280] text-sm leading-relaxed flex-1">{emp.description}</p>

              <div className="mt-6 pt-5 border-t border-black/5">
                <a
                  href={CALENDLY}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-semibold text-[#0A2F4C] hover:text-[#4AACDE] transition-colors flex items-center gap-1.5 group/link"
                >
                  Get this AI employee
                  <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-0.5 transition-transform" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function HorizontalShowcase() {
  return (
    <section className="py-20 overflow-hidden bg-[#F7F9FB]">
      <div className="max-w-6xl mx-auto px-4 mb-10">
        <motion.h2
          variants={fadeUp(0)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="text-[clamp(1.8rem,4vw,3.5rem)] font-black text-[#0A2F4C] tracking-tighter text-center"
        >
          THE COMPLETE{" "}
          <span
            className="italic font-medium text-[#4AACDE]"
            style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontStyle: "italic" }}
          >
            Customer Journey
          </span>
        </motion.h2>
        <motion.p
          variants={fadeUp(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="text-[#6B7280] text-base text-center mt-3 max-w-xl mx-auto"
        >
          Stop juggling tools. We bring acquisition, conversion, and retention together into one seamless AI-powered system.
        </motion.p>
      </div>

      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-5">
        {[
          {
            phase: "01. Attract",
            title: "Capture More Leads",
            color: "#4AACDE",
            features: [
              "Snapshot Reports — Identify marketing gaps instantly",
              "Social Marketing — AI-created posts 24/7",
              "Local SEO — Auto-sync business info globally",
              "AI Advertising — Automated multi-channel campaigns",
            ],
          },
          {
            phase: "02. Convert",
            title: "Close Deals Faster",
            color: "#8B5CF6",
            features: [
              "AI Receptionist — Turn visitors into leads instantly",
              "CRM AI — Track every lead with zero manual work",
              "Email & SMS Marketing — Right message, right time",
              "Marketing Automation — AI handles the repetition",
            ],
          },
          {
            phase: "03. Engage",
            title: "Retain Clients Longer",
            color: "#10B981",
            features: [
              "Reputation AI — Turn reviews into a competitive edge",
              "Business App — Branded portal for your clients",
              "Conversations AI — All channels, one inbox",
              "AI Campaigns — Personalized re-engagement at scale",
            ],
          },
        ].map((col, idx) => (
          <motion.div
            key={col.phase}
            variants={fadeUp(idx * 0.12)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="glass-card rounded-[2rem] p-7 relative overflow-hidden group"
          >
            <div
              className="absolute top-0 left-0 right-0 h-[2px] rounded-t-[2rem]"
              style={{ background: col.color }}
            />
            <div
              className="absolute -bottom-12 -right-12 w-40 h-40 rounded-full blur-[70px] opacity-10 group-hover:opacity-20 transition-opacity duration-700 pointer-events-none"
              style={{ background: col.color }}
            />
            <p className="font-bold tracking-[0.2em] text-xs uppercase mb-3" style={{ color: col.color }}>
              {col.phase}
            </p>
            <h3 className="text-xl font-bold text-[#0A2F4C] tracking-tight mb-5">{col.title}</h3>
            <ul className="space-y-2.5">
              {col.features.map((f) => (
                <li key={f} className="flex items-start gap-2.5 text-[#6B7280] text-sm leading-relaxed">
                  <span
                    className="w-4 h-4 rounded-full flex-shrink-0 flex items-center justify-center mt-0.5 text-xs font-bold"
                    style={{ background: `${col.color}15`, color: col.color }}
                  >
                    ✓
                  </span>
                  {f}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function SetupServices() {
  return (
    <section className="py-24 bg-[#0A2F4C] relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[#4AACDE]/8 rounded-full blur-[120px]" />
      </div>
      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <div className="text-center mb-14">
          <motion.p
            variants={fadeUp(0)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="text-[#4AACDE] font-semibold tracking-[0.25em] uppercase text-xs mb-4"
          >
            Done-For-You
          </motion.p>
          <motion.h2
            variants={fadeUp(0.1)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="text-[clamp(2rem,5vw,4rem)] font-black text-white leading-[0.92] tracking-tighter"
          >
            AI EMPLOYEE
            <br />
            <span
              className="italic font-medium text-[#4AACDE]"
              style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontStyle: "italic" }}
            >
              Setup Services.
            </span>
          </motion.h2>
          <motion.p
            variants={fadeUp(0.2)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="mt-5 text-white/55 text-base max-w-lg mx-auto"
          >
            Let our experts set up and optimize your AI agents so they&apos;re ready to work from day one. Zero technical knowledge needed.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {setupServices.map((s, idx) => (
            <motion.div
              key={s.title}
              variants={fadeUp(idx * 0.08)}
              initial="hidden"
              whileInView="visible"
              whileHover={{ y: -5, scale: 1.01 }}
              viewport={{ once: true, margin: "-80px" }}
              className="rounded-2xl p-6 relative group overflow-hidden"
              style={{
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.09)",
                backdropFilter: "blur(20px)",
              }}
            >
              <div className="absolute -top-8 -right-8 w-24 h-24 bg-[#4AACDE] rounded-full blur-[50px] opacity-8 group-hover:opacity-18 transition-opacity duration-500 pointer-events-none" />
              <div className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center mb-4">
                <s.Icon className="w-4.5 h-4.5 text-[#4AACDE]" style={{ width: 18, height: 18 }} />
              </div>
              <h3 className="text-base font-bold text-white mb-2">{s.title}</h3>
              <p className="text-white/55 text-sm leading-relaxed">{s.desc}</p>
              <div className="mt-6">
                <a
                  href={CALENDLY}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-[#4AACDE] font-semibold hover:text-white transition-colors flex items-center gap-1.5 group/link"
                >
                  Get started
                  <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-0.5 transition-transform" />
                </a>
              </div>
            </motion.div>
          ))}
          {/* Inline CTA card */}
          <motion.div
            variants={fadeUp(setupServices.length * 0.08)}
            initial="hidden"
            whileInView="visible"
            whileHover={{ y: -5, scale: 1.01 }}
            viewport={{ once: true, margin: "-80px" }}
            className="rounded-2xl p-6 relative group overflow-hidden flex flex-col justify-between"
            style={{
              background: "rgba(74,172,222,0.12)",
              border: "1px solid rgba(74,172,222,0.25)",
              backdropFilter: "blur(20px)",
            }}
          >
            <div>
              <div className="w-9 h-9 rounded-xl bg-[#4AACDE]/20 flex items-center justify-center mb-4">
                <Zap className="w-4.5 h-4.5 text-[#4AACDE]" style={{ width: 18, height: 18 }} />
              </div>
              <h3 className="text-base font-bold text-white mb-2">Not sure where to start?</h3>
              <p className="text-white/55 text-sm leading-relaxed">
                Book a free 30-minute strategy call and we&apos;ll map out exactly which AI employees your business needs.
              </p>
            </div>
            <a
              href={CALENDLY}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 w-full flex items-center justify-center gap-2 bg-[#4AACDE] text-white font-semibold py-3 rounded-xl text-sm hover:bg-[#3A9CCC] transition-colors"
            >
              Book Free Call →
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Testimonial() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[35vw] h-[35vw] bg-[#4AACDE]/8 rounded-full blur-[100px]" />
      </div>
      <div className="max-w-3xl mx-auto px-4 relative z-10 text-center">
        <motion.div
          variants={fadeUp(0)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="glass-card rounded-3xl p-10 md:p-16"
        >
          <div className="text-5xl mb-6 opacity-15 font-black text-[#0A2F4C] leading-none">&ldquo;</div>
          <blockquote
            className="text-xl md:text-2xl text-[#0A2F4C] leading-relaxed mb-8"
            style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontStyle: "italic" }}
          >
            Shortly after launching AI Receptionist, I got a notification — &apos;You have a meeting scheduled.&apos; I hadn&apos;t lifted a finger. The AI had qualified the lead and booked the appointment. I did nothing. It was wonderful.
          </blockquote>
          <div className="flex flex-col items-center gap-1">
            <div className="w-10 h-10 rounded-full bg-[#0A2F4C] flex items-center justify-center text-white font-bold text-sm mb-2">
              MK
            </div>
            <p className="font-bold text-[#0A2F4C] text-sm">Michael K.</p>
            <p className="text-[#6B7280] text-xs">Business Owner using QuotaDoctor AI</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section className="py-24 relative overflow-hidden bg-[#F7F9FB]">
      <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
        <motion.h2
          variants={fadeUp(0)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="text-[clamp(2rem,5vw,4.5rem)] font-black text-[#0A2F4C] leading-[0.9] tracking-tighter mb-6"
        >
          READY TO
          <br />
          <span
            className="italic font-medium text-[#4AACDE]"
            style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontStyle: "italic" }}
          >
            Deploy Your Team?
          </span>
        </motion.h2>
        <motion.p
          variants={fadeUp(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="text-base text-[#6B7280] max-w-lg mx-auto mb-10"
        >
          Join the growing list of businesses using QuotaDoctor AI to answer every lead, fill every calendar, and grow without burnout.
        </motion.p>
        <motion.div
          variants={fadeUp(0.2)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="flex flex-col sm:flex-row gap-3 justify-center"
        >
          <a
            href={CALENDLY}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#0A2F4C] text-white px-8 py-3.5 rounded-full font-semibold text-sm shadow-lg hover:bg-[#0A2F4C]/85 hover:scale-105 transition-all group"
          >
            Book a Free Strategy Call
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </a>
          <Link
            href="/products-services"
            className="glass-card inline-flex items-center gap-2 text-[#0A2F4C] px-8 py-3.5 rounded-full font-medium text-sm hover:scale-105 transition-transform"
          >
            View All Products
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

export default function AIWorkforcePage() {
  return (
    <>
      <ParallaxHero />
      <StatsRow />
      <AITeamSection />
      <HorizontalShowcase />
      <SetupServices />
      <Testimonial />
      <FinalCTA />
    </>
  );
}
