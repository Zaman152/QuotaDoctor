"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import {
  MessageSquare, Star, Share2, Database, MapPin, Mail,
  Layout, BarChart2, Rocket, Send, Bot, ShoppingBag,
  Zap, Link2, TrendingUp, Map, ClipboardList, Megaphone,
  Camera, ArrowRight,
} from "lucide-react";

const CALENDLY = "https://calendly.com/quotadoctor/15";

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, type: "spring", bounce: 0.35, delay },
  },
});

const products = [
  {
    id: "conversations-ai",
    name: "Conversations AI",
    tagline: "Capture leads, book appointments, engage 24/7",
    description:
      "Centralize every conversation — calls, SMS, email, web chat, Facebook — into one intelligent inbox. AI handles responses instantly so nothing falls through the cracks.",
    Icon: MessageSquare,
    accent: "#4AACDE",
    accentRgb: "74,172,222",
    category: "Convert",
    featured: true,
  },
  {
    id: "reputation-ai",
    name: "Reputation AI",
    tagline: "Grow reviews & boost credibility with AI insights",
    description:
      "Automatically request reviews, respond to feedback in your brand voice, and turn your reputation into a growth engine. Watch your Google rating climb on autopilot.",
    Icon: Star,
    accent: "#F59E0B",
    accentRgb: "245,158,11",
    category: "Engage",
    featured: false,
  },
  {
    id: "social-marketing",
    name: "Social Marketing",
    tagline: "Create, manage & grow social media presence",
    description:
      "AI-generated, on-brand posts published at the perfect time across Facebook, Instagram, and more. Stay active online without hiring a single social media manager.",
    Icon: Share2,
    accent: "#EC4899",
    accentRgb: "236,72,153",
    category: "Attract",
    featured: false,
  },
  {
    id: "crm-ai",
    name: "CRM AI",
    tagline: "Grow sales with an AI CRM — auto-update & insights",
    description:
      "Automatically log calls, update deal stages, and surface actionable insights via natural language chat. Never lose a lead to a spreadsheet again.",
    Icon: Database,
    accent: "#8B5CF6",
    accentRgb: "139,92,246",
    category: "Convert",
    featured: true,
  },
  {
    id: "local-seo",
    name: "Local SEO",
    tagline: "Boost local search rankings with easy listing management",
    description:
      "Sync your business info across 70+ directories including Google, Yelp, and Apple Maps. Show up first when a nearby customer searches for your services.",
    Icon: MapPin,
    accent: "#10B981",
    accentRgb: "16,185,129",
    category: "Attract",
    featured: false,
  },
  {
    id: "email-sms",
    name: "Email & SMS Marketing",
    tagline: "Automate campaigns with AI-driven personalization",
    description:
      "Send the right message to the right person at the perfect moment. AI personalizes every campaign so your emails and texts feel hand-written — and convert better.",
    Icon: Mail,
    accent: "#EF4444",
    accentRgb: "239,68,68",
    category: "Convert",
    featured: false,
  },
  {
    id: "ai-site-building",
    name: "AI Site Building",
    tagline: "Beautiful, optimized websites built by AI — fast",
    description:
      "Launch a stunning, SEO-ready website powered by AI in days — not months. Our AI builds, writes, and optimizes your site so you get leads from day one without the big agency price tag.",
    Icon: Layout,
    accent: "#0EA5E9",
    accentRgb: "14,165,233",
    category: "Attract",
    featured: false,
  },
  {
    id: "advertising-intelligence",
    name: "Advertising Intelligence",
    tagline: "Unified PPC reporting for easy ad performance insights",
    description:
      "See all your Google, Meta, and other paid ad campaigns in one dashboard. Know exactly what is working and where every dollar is going — in real time.",
    Icon: BarChart2,
    accent: "#F97316",
    accentRgb: "249,115,22",
    category: "Attract",
    featured: false,
  },
  {
    id: "matchcraft",
    name: "AI Advertising",
    tagline: "Scale ads efficiently with results-driven automation",
    description:
      "Automate and optimize campaigns across search, display, and social. Machine learning finds your best-converting audiences and allocates budget where it matters most.",
    Icon: Rocket,
    accent: "#6366F1",
    accentRgb: "99,102,241",
    category: "Attract",
    featured: false,
  },
  {
    id: "yesware",
    name: "Email Outreach",
    tagline: "Streamline email outreach to close more deals faster",
    description:
      "Track opens, clicks, and replies in real time. Get notified the instant a prospect engages with your email so you can follow up at exactly the right moment.",
    Icon: Send,
    accent: "#84CC16",
    accentRgb: "132,204,22",
    category: "Convert",
    featured: false,
  },
];

const platformFeatures = [
  { Icon: Bot, title: "AI Workforce", desc: "A full team of AI employees that automate marketing, sales, and operations — 24/7, without headcount." },
  { Icon: ShoppingBag, title: "Marketplace", desc: "A curated library of AI-powered tools you can add to your stack in one click — tailored to any business need." },
  { Icon: Zap, title: "Automations", desc: "Trigger powerful workflows automatically. When a customer pays, the review request goes out. Zero manual effort." },
  { Icon: Link2, title: "Integrations", desc: "Connect to the tools you already use — Google, QuickBooks, Stripe, Zapier, and 500+ more." },
  { Icon: TrendingUp, title: "Reporting", desc: "Automated proof-of-performance reporting delivered to your clients — keeps churn low and relationships strong." },
  { Icon: Map, title: "Multi-location Portal", desc: "Monitor reviews, listings, and performance for hundreds of locations from a single dashboard." },
];

const services = [
  { Icon: ClipboardList, title: "Listings Management", desc: "Keep your business info accurate and visible wherever customers search — across every major directory." },
  { Icon: Megaphone, title: "Digital Advertising", desc: "Boost brand awareness, traffic, and conversions with expert ad strategies across search and social." },
  { Icon: Camera, title: "Social Media Management", desc: "Grow your audience with custom content and engaging social strategies managed by our AI-powered team." },
  { Icon: Layout, title: "AI Site Building", desc: "AI builds your full site in days — SEO-ready, conversion-optimized, and beautifully designed. No agency markup, no waiting months." },
];

function CategoryTag({ label, color }: { label: string; color: string }) {
  return (
    <span
      className="text-xs font-bold uppercase tracking-[0.12em] px-2.5 py-1 rounded-full"
      style={{ background: `${color}18`, color }}
    >
      {label}
    </span>
  );
}

function ProductsHero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  return (
    <section ref={ref} className="relative min-h-[100svh] flex flex-col justify-center items-center overflow-hidden bg-[#F7F9FB] pt-28">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-20%] right-[-5%] w-[55vw] h-[55vw] rounded-full bg-[#8B5CF6]/12 blur-[120px] animate-[float-blob_22s_ease-in-out_infinite_alternate]" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[40vw] h-[40vw] rounded-full bg-[#4AACDE]/18 blur-[100px] animate-[float-blob_18s_ease-in-out_infinite_alternate-reverse]" />
      </div>

      <div className="absolute inset-0 flex flex-col justify-center items-center pointer-events-none select-none overflow-hidden opacity-[0.035]">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, ease: "linear", duration: 40 }}
          className="whitespace-nowrap text-[12vw] font-black tracking-tighter text-[#0A2F4C]"
        >
          PRODUCTS & SERVICES PRODUCTS & SERVICES&nbsp;
        </motion.div>
        <motion.div
          animate={{ x: ["-50%", "0%"] }}
          transition={{ repeat: Infinity, ease: "linear", duration: 30 }}
          className="whitespace-nowrap text-[12vw] font-black tracking-tighter text-[#0A2F4C]"
        >
          CONVERSATIONS AI LOCAL SEO CRM AI REPUTATION AI&nbsp;
        </motion.div>
      </div>

      <motion.div style={{ y }} className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <motion.span
          variants={fadeUp(0)}
          initial="hidden"
          animate="visible"
          className="inline-block text-xs font-semibold tracking-[0.25em] uppercase text-[#8B5CF6] bg-[#8B5CF6]/10 border border-[#8B5CF6]/20 px-5 py-1.5 rounded-full mb-8"
        >
          Full Product Suite
        </motion.span>

        <motion.h1
          variants={fadeUp(0.1)}
          initial="hidden"
          animate="visible"
          className="text-[clamp(2.2rem,5.5vw,5.5rem)] font-black text-[#0A2F4C] leading-[0.9] tracking-tighter mb-6"
        >
          EVERYTHING
          <br />
          <span
            className="italic font-medium text-[#4AACDE]"
            style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontStyle: "italic" }}
          >
            You Need.
          </span>
          <br />
          ONE PLATFORM.
        </motion.h1>

        <motion.p
          variants={fadeUp(0.2)}
          initial="hidden"
          animate="visible"
          className="text-base md:text-lg text-[#6B7280] max-w-lg mx-auto leading-relaxed mb-10"
        >
          Powerful AI tools to attract, convert, and engage more customers. Stop juggling 10 apps and start growing with one intelligent platform.
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
            Get a Free Demo
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </a>
          <a
            href="#products"
            className="glass-card inline-flex items-center gap-2 text-[#0A2F4C] px-8 py-3.5 rounded-full font-medium text-sm hover:scale-105 transition-transform"
          >
            Browse Products ↓
          </a>
        </motion.div>
      </motion.div>

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[#0A2F4C]/35 text-xs font-medium"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <div className="w-px h-8 bg-[#0A2F4C]/15" />
        Scroll
      </motion.div>
    </section>
  );
}

function ProductsGrid() {
  const categories = ["All", "Attract", "Convert", "Engage"];
  return (
    <section id="products" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-14">
          <motion.p
            variants={fadeUp(0)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="text-[#4AACDE] font-semibold tracking-[0.25em] uppercase text-xs mb-4"
          >
            Core Products
          </motion.p>
          <motion.h2
            variants={fadeUp(0.1)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="text-[clamp(2rem,5vw,4.5rem)] font-black text-[#0A2F4C] leading-[0.92] tracking-tighter"
          >
            AI TOOLS FOR
            <br />
            <span
              className="italic font-medium text-[#4AACDE]"
              style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontStyle: "italic" }}
            >
              Every Stage.
            </span>
          </motion.h2>
        </div>

        <motion.div
          variants={fadeUp(0.15)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="flex flex-wrap gap-2 justify-center mb-10"
        >
          {categories.map((cat) => (
            <span
              key={cat}
              className="px-5 py-1.5 rounded-full font-medium text-sm glass-card text-[#0A2F4C] cursor-default"
            >
              {cat}
            </span>
          ))}
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {products.map((p, idx) => (
            <motion.div
              key={p.id}
              variants={fadeUp(idx * 0.06)}
              initial="hidden"
              whileInView="visible"
              whileHover={{ y: -6, scale: 1.015 }}
              viewport={{ once: true, margin: "-80px" }}
              className={`glass-card rounded-[2rem] p-7 relative group overflow-hidden flex flex-col ${
                p.featured ? "ring-1 ring-[#4AACDE]/30" : ""
              }`}
            >
              <div
                className="absolute -top-12 -right-12 w-36 h-36 rounded-full blur-[70px] opacity-18 group-hover:opacity-30 group-hover:scale-125 transition-all duration-700 pointer-events-none"
                style={{ background: p.accent }}
              />
              {p.featured && (
                <div
                  className="absolute top-0 left-0 right-0 h-[2px] rounded-t-[2rem]"
                  style={{ background: p.accent }}
                />
              )}

              <div className="mb-5 flex items-center gap-2.5">
                <CategoryTag label={p.category} color={p.accent} />
                {p.featured && (
                  <span className="text-xs font-bold text-[#4AACDE] bg-[#4AACDE]/10 px-2.5 py-1 rounded-full">
                    ✦ Featured
                  </span>
                )}
              </div>

              {/* Icon */}
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center mb-5"
                style={{ background: `${p.accent}15` }}
              >
                <p.Icon className="w-5 h-5" style={{ color: p.accent }} />
              </div>

              <h3 className="text-xl font-bold text-[#0A2F4C] tracking-tight mb-1.5">{p.name}</h3>
              <p className="text-xs font-bold uppercase tracking-wider mb-4" style={{ color: p.accent }}>
                {p.tagline}
              </p>
              <p className="text-[#6B7280] text-sm leading-relaxed flex-1">{p.description}</p>

              <div className="mt-6 pt-5 border-t border-black/5">
                <a
                  href={CALENDLY}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-semibold text-[#0A2F4C] hover:text-[#4AACDE] transition-colors flex items-center gap-1.5 group/link"
                >
                  Get access
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

function PlatformSection() {
  return (
    <section className="py-24 bg-[#0A2F4C] relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#4AACDE]/30 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#4AACDE]/15 to-transparent" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-[#4AACDE]/6 rounded-full blur-[140px]" />
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
            The Platform
          </motion.p>
          <motion.h2
            variants={fadeUp(0.1)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="text-[clamp(2rem,5vw,4.5rem)] font-black text-white leading-[0.92] tracking-tighter"
          >
            ONE PLATFORM.
            <br />
            <span
              className="italic font-medium text-[#4AACDE]"
              style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontStyle: "italic" }}
            >
              Infinite Scale.
            </span>
          </motion.h2>
          <motion.p
            variants={fadeUp(0.2)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="mt-5 text-white/55 text-base max-w-lg mx-auto"
          >
            Scale your business and help your clients succeed with an AI-powered customer engagement platform built for growth.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {platformFeatures.map((feat, idx) => (
            <motion.div
              key={feat.title}
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
              <div className="absolute -top-8 -right-8 w-24 h-24 bg-[#4AACDE] rounded-full blur-[50px] opacity-5 group-hover:opacity-12 transition-opacity duration-600 pointer-events-none" />
              <div className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center mb-4">
                <feat.Icon className="text-[#4AACDE]" style={{ width: 18, height: 18 }} />
              </div>
              <h3 className="text-base font-bold text-white mb-2">{feat.title}</h3>
              <p className="text-white/50 text-sm leading-relaxed">{feat.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ServicesSection() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -bottom-20 left-1/3 w-[50vw] h-[25vw] bg-[#4AACDE]/8 rounded-full blur-[100px]" />
      </div>
      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <div className="mb-14 text-center">
          <motion.p
            variants={fadeUp(0)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="text-[#4AACDE] font-semibold tracking-[0.25em] uppercase text-xs mb-4"
          >
            Done-For-You Services
          </motion.p>
          <motion.h2
            variants={fadeUp(0.1)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="text-[clamp(2rem,5vw,4.5rem)] font-black text-[#0A2F4C] leading-[0.92] tracking-tighter"
          >
            NOT JUST SOFTWARE.
            <br />
            <span
              className="italic font-medium text-[#4AACDE]"
              style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontStyle: "italic" }}
            >
              Real Expertise.
            </span>
          </motion.h2>
          <motion.p
            variants={fadeUp(0.2)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="mt-5 text-[#6B7280] text-base max-w-lg mx-auto"
          >
            Marketing and professional services to grow your agency and your clients&apos; businesses — delivered by our expert team and AI.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {services.map((svc, idx) => (
            <motion.div
              key={svc.title}
              variants={fadeUp(idx * 0.1)}
              initial="hidden"
              whileInView="visible"
              whileHover={{ y: -5, scale: 1.01 }}
              viewport={{ once: true, margin: "-80px" }}
              className="glass-card rounded-2xl p-7 flex gap-5 items-start group relative overflow-hidden"
            >
              <div className="absolute -top-8 -right-8 w-24 h-24 bg-[#4AACDE] rounded-full blur-[50px] opacity-8 group-hover:opacity-15 transition-opacity duration-500 pointer-events-none" />
              <div className="w-10 h-10 rounded-xl bg-[#4AACDE]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                <svc.Icon className="text-[#4AACDE]" style={{ width: 18, height: 18 }} />
              </div>
              <div>
                <h3 className="text-lg font-bold text-[#0A2F4C] mb-1.5">{svc.title}</h3>
                <p className="text-[#6B7280] text-sm leading-relaxed mb-5">{svc.desc}</p>
                <a
                  href={CALENDLY}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-semibold text-[#0A2F4C] hover:text-[#4AACDE] transition-colors flex items-center gap-1.5 group/link"
                >
                  Learn more
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

function SolutionsBar() {
  const solutions = [
    "Agencies", "Franchises", "Software Vendors", "HVAC Companies",
    "Dental Practices", "Plumbers", "Real Estate", "Contractors",
    "Restaurants", "Retail", "Law Firms", "Home Services",
  ];

  return (
    <div className="bg-[#F7F9FB] py-8 overflow-hidden border-y border-[#E5EAF0]">
      <p className="text-center text-[#0A2F4C]/40 text-xs font-semibold uppercase tracking-[0.25em] mb-5">
        Perfect for
      </p>
      <div className="relative">
        <motion.div
          className="flex gap-3"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, ease: "linear", duration: 25 }}
        >
          {[...solutions, ...solutions].map((s, i) => (
            <span
              key={i}
              className="whitespace-nowrap glass-card rounded-full px-4 py-1.5 text-xs font-medium text-[#0A2F4C]"
            >
              {s}
            </span>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

function FinalCTA() {
  return (
    <section className="py-24 relative overflow-hidden bg-[#F7F9FB]">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[#4AACDE]/8 rounded-full blur-[120px]" />
      </div>
      <div className="max-w-3xl mx-auto px-4 text-center relative z-10">
        <motion.h2
          variants={fadeUp(0)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="text-[clamp(2rem,5vw,4.5rem)] font-black text-[#0A2F4C] leading-[0.9] tracking-tighter mb-6"
        >
          START GROWING
          <br />
          <span
            className="italic font-medium text-[#4AACDE]"
            style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontStyle: "italic" }}
          >
            Today.
          </span>
        </motion.h2>
        <motion.p
          variants={fadeUp(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="text-base text-[#6B7280] max-w-lg mx-auto mb-10"
        >
          Join thousands of businesses already using this suite to dominate their local market. Book your free strategy call now.
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
            Book a Free Demo
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </a>
          <Link
            href="/ai-workforce"
            className="glass-card inline-flex items-center gap-2 text-[#0A2F4C] px-8 py-3.5 rounded-full font-medium text-sm hover:scale-105 transition-transform"
          >
            See AI Workforce
          </Link>
        </motion.div>

        <motion.p
          variants={fadeUp(0.3)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="mt-7 text-[#6B7280]/50 text-xs"
        >
          No credit card required &middot; No contracts &middot; Cancel anytime
        </motion.p>
      </div>
    </section>
  );
}

export default function ProductsServicesPage() {
  return (
    <>
      <ProductsHero />
      <SolutionsBar />
      <ProductsGrid />
      <PlatformSection />
      <ServicesSection />
      <FinalCTA />
    </>
  );
}
