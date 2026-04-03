"use client";

import { motion } from "framer-motion";
import { ArrowRight, Phone, Star, Zap, Shield } from "lucide-react";
import Link from "next/link";

const CALENDLY = "https://calendly.com/quotadoctor/30min";

const trustItems = [
  { icon: Phone, label: "Every call answered" },
  { icon: Star, label: "5-star reviews on autopilot" },
  { icon: Zap, label: "Instant AI responses" },
  { icon: Shield, label: "No long-term contracts" },
];

export default function Hero() {
  return (
    <section className="relative min-h-[100svh] flex flex-col justify-center overflow-hidden w-full pt-28 pb-20">

      {/* Subtle background blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-15%] right-[-5%] w-[45vw] h-[45vw] rounded-full bg-[#4AACDE]/15 blur-[120px] animate-[float-blob_20s_ease-in-out_infinite_alternate]" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[35vw] h-[35vw] rounded-full bg-[#1B7A2B]/08 blur-[100px] animate-[float-blob_28s_ease-in-out_infinite_alternate-reverse]" />
      </div>

      {/* Faint background watermark */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
        <motion.span
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, ease: "linear", duration: 40 }}
          className="whitespace-nowrap text-[18vw] font-black tracking-tighter text-[#0A2F4C]/[0.025]"
        >
          QUOTADOCTOR&nbsp;QUOTADOCTOR&nbsp;
        </motion.span>
      </div>

      <div className="max-w-6xl w-full mx-auto px-6 lg:px-8 relative z-10">

        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left: Copy */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0 }}
              className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] uppercase text-[#4AACDE] bg-[#4AACDE]/10 border border-[#4AACDE]/20 px-4 py-1.5 rounded-full mb-8"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#4AACDE] animate-pulse" />
              Your 24/7 AI Workforce
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.08, type: "spring", bounce: 0.3 }}
              className="text-[clamp(2.6rem,5.5vw,5rem)] font-black text-[#0A2F4C] leading-[1] tracking-tight mb-6"
            >
              Never miss<br />
              <span
                className="font-playfair italic font-medium text-[#4AACDE]"
                style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontStyle: "italic" }}
              >
                another customer.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.18 }}
              className="text-[#6B7280] text-lg leading-relaxed max-w-lg mb-10"
            >
              We give small businesses a 24/7 AI team that answers every call, captures every lead, and runs your marketing — for less than one part-time hire.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.26 }}
              className="flex flex-col sm:flex-row gap-3 mb-12"
            >
              <a
                href={CALENDLY}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#0A2F4C] text-white font-semibold px-7 py-3.5 rounded-full text-sm transition-all hover:bg-[#0A2F4C]/85 hover:scale-105 shadow-lg shadow-[#0A2F4C]/15 group"
              >
                Book a Free Call
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </a>
              <Link
                href="/ai-workforce"
                className="inline-flex items-center justify-center gap-2 text-[#0A2F4C] font-semibold px-7 py-3.5 rounded-full text-sm border border-[#0A2F4C]/15 hover:border-[#0A2F4C]/30 hover:bg-black/[0.03] transition-all"
              >
                See the AI Team
              </Link>
            </motion.div>

            {/* Trust row */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.36 }}
              className="grid grid-cols-2 gap-3"
            >
              {trustItems.map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-2.5 text-sm text-[#6B7280]">
                  <div className="w-7 h-7 rounded-lg bg-[#4AACDE]/10 flex items-center justify-center shrink-0">
                    <Icon className="w-3.5 h-3.5 text-[#4AACDE]" />
                  </div>
                  {label}
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right: Glass card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, type: "spring", bounce: 0.35 }}
            className="glass-card rounded-3xl p-8 relative overflow-hidden shadow-2xl shadow-[#0A2F4C]/08"
          >
            <div className="absolute -top-20 -right-20 w-56 h-56 bg-[#4AACDE] rounded-full blur-[80px] opacity-20 pointer-events-none" />

            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[#4AACDE] mb-6">
              Start in 24 hours
            </p>

            <h2 className="text-2xl font-bold text-[#0A2F4C] mb-2 tracking-tight">
              Ready to stop losing leads?
            </h2>
            <p className="text-[#6B7280] text-sm leading-relaxed mb-8">
              15-minute call. We&apos;ll diagnose exactly where your business is leaking revenue and show you how to fix it with AI — at no cost.
            </p>

            <div className="flex flex-col gap-3 relative z-10">
              <a
                href={CALENDLY}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-between bg-[#0A2F4C] text-white px-6 py-4 rounded-2xl font-semibold text-sm shadow-lg group hover:bg-[#0A2F4C]/85 transition-colors"
              >
                <span>Book Free Strategy Call</span>
                <motion.span
                  animate={{ x: [0, 4, 0] }}
                  transition={{ repeat: Infinity, duration: 2 }}
                >
                  <ArrowRight className="w-4 h-4" />
                </motion.span>
              </a>
              <Link
                href="/products-services"
                className="w-full flex items-center justify-between glass-card-dark text-[#0A2F4C] px-6 py-4 rounded-2xl font-medium text-sm hover:bg-white/30 transition-colors"
              >
                <span>Explore Products & Services</span>
                <ArrowRight className="w-4 h-4 text-[#4AACDE]" />
              </Link>
            </div>

            <div className="mt-8 pt-6 border-t border-black/8 flex justify-between items-center text-xs text-[#6B7280]">
              <span>Cancel anytime</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#1B7A2B] animate-pulse" />
              <span>No contracts</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#1B7A2B] animate-pulse" />
              <span>Setup in 24hrs</span>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
