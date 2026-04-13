"use client";

import { motion } from "framer-motion";
import { ArrowRight, Phone, Star, Zap, Shield } from "lucide-react";
import Link from "next/link";

const CALENDLY = "https://calendly.com/quotadoctor/15";

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
              initial={{ y: 24 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.7, delay: 0.08, type: "spring", bounce: 0.3 }}
              className="text-5xl md:text-6xl lg:text-7xl font-black text-[#0A2F4C] leading-[1.1] tracking-tighter uppercase mb-6"
            >
              NEVER MISS<br />
              <span
                className="font-playfair italic font-medium capitalize text-[#4AACDE] tracking-normal"
              >
                Another Customer.
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

          {/* Right: Dynamic Interactive AI Visualization Card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, type: "spring", bounce: 0.35 }}
            className="relative w-full max-w-lg mx-auto lg:ml-auto perspective-[1000px]"
          >
            {/* Ambient Glow Behind Card (Vibrant Apple-like Blobs) */}
            <div className="absolute inset-0 w-full h-full">
              <div className="absolute -top-10 -right-10 w-64 h-64 bg-[#4AACDE]/60 rounded-full blur-[70px] animate-[float-blob_10s_ease-in-out_infinite_alternate] pointer-events-none z-0" />
              <div className="absolute -bottom-10 -left-10 w-56 h-56 bg-[#1B7A2B]/40 rounded-full blur-[60px] animate-[float-blob_12s_ease-in-out_infinite_alternate-reverse] pointer-events-none z-0" />
            </div>

            {/* Central Liquid Glass Card */}
            <motion.div 
              whileHover={{ rotateY: -5, rotateX: 5, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="rounded-[2.5rem] p-8 relative shadow-[inset_0_1px_1px_rgba(255,255,255,0.8),0_20px_40px_rgba(10,47,76,0.15)] border border-white/40 group transform-gpu z-10 bg-white/30 backdrop-blur-3xl backdrop-saturate-[150%]"
            >
              {/* Refractive Light Sweep */}
              <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden rounded-[2.5rem]">
                <motion.div 
                  animate={{ x: ["-200%", "200%"] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear", repeatDelay: 5 }}
                  className="w-1/2 h-full bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-[30deg]"
                />
              </div>

              <div className="relative z-10">
                {/* Status Header */}
                <div className="flex items-center justify-between mb-10">
                  <div className="flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/50 backdrop-blur-2xl backdrop-saturate-[150%] border border-white/60 shadow-[inset_0_1px_1px_rgba(255,255,255,0.8),0_4px_10px_rgba(0,0,0,0.03)]">
                    <div className="relative flex h-2.5 w-2.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#1B7A2B] opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#1B7A2B]"></span>
                    </div>
                    <span className="text-[11px] font-bold uppercase tracking-widest text-[#0A2F4C]">Always On Duty</span>
                  </div>
                  <div className="text-[11px] font-bold text-[#6B7280] uppercase tracking-wide bg-white/40 backdrop-blur-xl backdrop-saturate-[150%] px-3 py-1.5 rounded-full border border-white/50 shadow-[inset_0_1px_1px_rgba(255,255,255,0.6)]">
                    Answers: <span className="text-[#4AACDE]">Instantly</span>
                  </div>
                </div>

                {/* Simulated Interactions */}
                <div className="space-y-5 mb-10 relative">
                  {/* Connecting Line */}
                  <div className="absolute left-6 top-8 bottom-8 w-px bg-gradient-to-b from-[#4AACDE]/50 to-[#0A2F4C]/50 z-0" />

                  <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.8, duration: 0.6, type: "spring" }}
                    className="bg-white/60 backdrop-blur-2xl backdrop-saturate-[200%] border border-white/60 rounded-[1.25rem] p-4 shadow-[inset_0_1px_1px_rgba(255,255,255,0.8),0_8px_20px_rgba(10,47,76,0.05)] relative z-10 hover:shadow-[0_12px_25px_rgba(10,47,76,0.08)] transition-shadow"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#4AACDE] to-[#3a8ebf] flex items-center justify-center shrink-0 shadow-inner">
                        <Phone className="w-4 h-4 text-white" />
                      </div>
                      <div>
                        <p className="text-sm font-bold text-[#0A2F4C] mb-0.5">Incoming Call • New Customer</p>
                        <p className="text-xs text-[#6B7280] font-medium italic">"Hi, I need a quote for next week..."</p>
                      </div>
                    </div>
                  </motion.div>

                  <motion.div 
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.6, duration: 0.6, type: "spring" }}
                    className="bg-[#0A2F4C]/85 backdrop-blur-3xl backdrop-saturate-[200%] border border-white/10 rounded-[1.25rem] p-4 ml-8 shadow-[inset_0_1px_1px_rgba(255,255,255,0.1),0_15px_30px_rgba(10,47,76,0.25)] relative z-10"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-[#4AACDE]/20 flex items-center justify-center shrink-0 border border-[#4AACDE]/30 shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)]">
                        <Zap className="w-4 h-4 text-[#4AACDE]" />
                      </div>
                      <div>
                        <p className="text-sm font-bold text-white mb-0.5">Your Assistant</p>
                        <p className="text-xs text-white/80 font-medium">Customer scheduled on your calendar! ✨</p>
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* Integration Row */}
                <div className="flex items-center justify-center gap-6 py-5 border border-white/40 mb-8 bg-white/40 rounded-[1.5rem] backdrop-blur-xl backdrop-saturate-[150%] shadow-[inset_0_1px_1px_rgba(255,255,255,0.8)] relative z-10">
                  <div className="text-center">
                    <p className="text-2xl font-black text-[#0A2F4C] tracking-tight">24/7</p>
                    <p className="text-[10px] uppercase tracking-widest text-[#6B7280] font-bold mt-1">Ready</p>
                  </div>
                  <div className="w-px h-10 bg-[#0A2F4C]/10" />
                  <div className="text-center">
                    <p className="text-2xl font-black text-[#0A2F4C] tracking-tight">100%</p>
                    <p className="text-[10px] uppercase tracking-widest text-[#6B7280] font-bold mt-1">Answered</p>
                  </div>
                  <div className="w-px h-10 bg-[#0A2F4C]/10" />
                  <div className="text-center">
                    <p className="text-2xl font-black text-[#0A2F4C] tracking-tight">$0</p>
                    <p className="text-[10px] uppercase tracking-widest text-[#6B7280] font-bold mt-1">Lost Biz</p>
                  </div>
                </div>

                {/* Action Button */}
                <a
                  href={CALENDLY}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-between bg-[#0A2F4C] text-white px-7 py-4 rounded-2xl font-semibold text-sm shadow-[inset_0_1px_1px_rgba(255,255,255,0.2),0_10px_25px_rgb(10,47,76,0.3)] group hover:bg-[#001f35] transition-all hover:scale-[1.02] border border-transparent hover:border-white/20 relative z-10"
                >
                  <span className="tracking-wide">Hire Your New Assistant</span>
                  <motion.span
                    animate={{ x: [0, 5, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                    className="bg-white/10 p-1.5 rounded-full shadow-[inset_0_1px_1px_rgba(255,255,255,0.3)]"
                  >
                    <ArrowRight className="w-4 h-4 text-[#4AACDE]" />
                  </motion.span>
                </a>
              </div>
            </motion.div>

            {/* Decorative Floating Elements (Outside Card) */}
            <motion.div 
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -right-8 top-16 bg-white/70 backdrop-blur-2xl backdrop-saturate-[200%] rounded-[1.25rem] p-3.5 border border-white/60 shadow-[inset_0_1px_1px_rgba(255,255,255,0.8),0_10px_20px_rgba(10,47,76,0.1)] flex items-center gap-3 z-20 transform rotate-3 hidden sm:flex"
            >
              <div className="w-8 h-8 rounded-full bg-[#1B7A2B]/10 flex items-center justify-center text-[#1B7A2B]">
                <Star className="w-4 h-4 fill-current" />
              </div>
              <div className="space-y-1.5">
                <div className="h-2 w-16 bg-gray-200 rounded-full" />
                <div className="h-2 w-10 bg-gray-100 rounded-full" />
              </div>
            </motion.div>

            <motion.div 
              animate={{ y: [0, 15, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -left-6 bottom-24 bg-white/70 backdrop-blur-2xl backdrop-saturate-[200%] rounded-[1.25rem] p-3 border border-white/60 shadow-[inset_0_1px_1px_rgba(255,255,255,0.8),0_10px_20px_rgba(10,47,76,0.1)] flex items-center gap-2 z-20 transform -rotate-6 hidden sm:flex"
            >
              <div className="w-7 h-7 rounded-full bg-[#4AACDE]/10 flex items-center justify-center text-[#4AACDE]">
                <Shield className="w-3.5 h-3.5" />
              </div>
              <div className="text-[10px] font-black text-[#0A2F4C] uppercase tracking-wider pr-2">
                Secured
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
