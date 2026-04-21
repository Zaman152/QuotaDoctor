"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Phone, Home, Search } from "lucide-react";

export default function NotFound() {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-4 py-24">

      {/* Ambient blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[50vw] h-[50vw] rounded-full bg-[#4AACDE]/20 blur-[130px] animate-[float-blob_18s_ease-in-out_infinite_alternate]" />
        <div className="absolute bottom-[-15%] left-[-5%] w-[40vw] h-[40vw] rounded-full bg-[#1B7A2B]/10 blur-[110px] animate-[float-blob_24s_ease-in-out_infinite_alternate-reverse]" />
      </div>

      {/* Scrolling watermark */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
        <motion.span
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, ease: "linear", duration: 30 }}
          className="whitespace-nowrap text-[20vw] font-black tracking-tighter text-[#0A2F4C]/[0.04]"
        >
          404&nbsp;NOT&nbsp;FOUND&nbsp;404&nbsp;NOT&nbsp;FOUND&nbsp;
        </motion.span>
      </div>

      <div className="relative z-10 max-w-2xl w-full mx-auto text-center">

        {/* Floating status badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] uppercase text-[#4AACDE] bg-[#4AACDE]/10 border border-[#4AACDE]/20 px-4 py-1.5 rounded-full mb-8"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#4AACDE] animate-pulse" />
          Error 404 — Page Not Found
        </motion.div>

        {/* Big number */}
        <motion.div
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, type: "spring", bounce: 0.4, delay: 0.05 }}
          className="relative mb-4"
        >
          <span className="text-[clamp(7rem,20vw,14rem)] font-black text-[#0A2F4C] leading-none tracking-tighter select-none">
            4
            <span className="font-playfair italic font-medium text-[#4AACDE]">0</span>
            4
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15, type: "spring", bounce: 0.3 }}
          className="text-3xl md:text-4xl font-black text-[#0A2F4C] tracking-tighter uppercase mb-4"
        >
          This Lead Got Away.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.22 }}
          className="text-[#6B7280] text-lg leading-relaxed max-w-md mx-auto mb-12"
        >
          The page you&apos;re looking for doesn&apos;t exist — but unlike your missed calls,
          we can still fix this. Head back and we&apos;ll get you where you need to go.
        </motion.p>

        {/* Glass card with CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, type: "spring", bounce: 0.4 }}
          className="glass-card rounded-[3rem] p-8 md:p-12 flex flex-col sm:flex-row gap-4 items-center justify-center"
        >
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 bg-[#0A2F4C] text-white font-semibold px-7 py-3.5 rounded-full text-sm transition-all hover:bg-[#0A2F4C]/85 hover:scale-105 shadow-lg shadow-[#0A2F4C]/15 group w-full sm:w-auto"
          >
            <Home className="w-4 h-4" />
            Back to Home
          </Link>
          <Link
            href="/#contact"
            className="inline-flex items-center justify-center gap-2 bg-[#4AACDE] text-white font-semibold px-7 py-3.5 rounded-full text-sm transition-all hover:bg-[#4AACDE]/85 hover:scale-105 shadow-lg shadow-[#4AACDE]/20 group w-full sm:w-auto"
          >
            <Phone className="w-4 h-4" />
            Talk to Dave
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </motion.div>

        {/* Helpful links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-10 flex flex-wrap justify-center gap-x-8 gap-y-3 text-sm text-[#6B7280]"
        >
          {[
            { label: "AI Workforce", href: "/ai-workforce" },
            { label: "About Dave", href: "/about" },
            { label: "Privacy Policy", href: "/privacy-policy" },
            { label: "Terms of Service", href: "/terms" },
          ].map(({ label, href }) => (
            <Link
              key={href}
              href={href}
              className="flex items-center gap-1 hover:text-[#4AACDE] transition-colors font-medium"
            >
              <Search className="w-3.5 h-3.5 opacity-50" />
              {label}
            </Link>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
