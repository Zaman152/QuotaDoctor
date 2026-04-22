"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import { RefreshCw, Home, Phone, Zap } from "lucide-react";
import Link from "next/link";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log to your error reporting here if needed
    console.error("[QuotaDoctor Error Boundary]", error);
  }, [error]);

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-4 py-24">

      {/* Ambient blobs — red-shifted to signal error */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[50vw] h-[50vw] rounded-full bg-[#4AACDE]/15 blur-[130px] animate-[float-blob_18s_ease-in-out_infinite_alternate]" />
        <div className="absolute bottom-[-15%] left-[-8%] w-[45vw] h-[45vw] rounded-full bg-rose-400/10 blur-[110px] animate-[float-blob_24s_ease-in-out_infinite_alternate-reverse]" />
      </div>

      {/* Scrolling watermark */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
        <motion.span
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, ease: "linear", duration: 28 }}
          className="whitespace-nowrap text-[20vw] font-black tracking-tighter text-[#0A2F4C]/[0.04]"
        >
          ERROR&nbsp;SYSTEM&nbsp;ERROR&nbsp;SYSTEM&nbsp;
        </motion.span>
      </div>

      <div className="relative z-10 max-w-2xl w-full mx-auto text-center">

        {/* Status badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] uppercase text-rose-500 bg-rose-500/10 border border-rose-500/20 px-4 py-1.5 rounded-full mb-8"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-rose-500 animate-pulse" />
          System Error — Something went wrong
        </motion.div>

        {/* Icon & headline visuals */}
        <motion.div
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, type: "spring", bounce: 0.4, delay: 0.05 }}
          className="mb-6 flex justify-center"
        >
          <div className="relative">
            {/* Outer pulsing ring */}
            <div className="absolute inset-0 rounded-full border-2 border-rose-400/30 animate-ping" />
            <div className="w-28 h-28 md:w-36 md:h-36 rounded-full glass-card flex items-center justify-center shadow-2xl">
              <Zap className="w-14 h-14 md:w-20 md:h-20 text-[#0A2F4C]" strokeWidth={1.5} />
            </div>
          </div>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15, type: "spring", bounce: 0.3 }}
          className="text-3xl md:text-5xl font-black text-[#0A2F4C] tracking-tighter uppercase mb-4"
        >
          Call Dropped.{" "}
          <span className="font-playfair italic font-medium capitalize text-[#4AACDE] tracking-normal">
            We&apos;re on it.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.22 }}
          className="text-[#6B7280] text-lg leading-relaxed max-w-md mx-auto mb-12"
        >
          Something unexpected happened on our end. Unlike a missed customer call,
          this one we&apos;ll recover from. Try again — it&apos;s usually just a blip.
        </motion.p>

        {/* Glass CTA card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, type: "spring", bounce: 0.4 }}
          className="glass-card rounded-[3rem] p-8 md:p-12 flex flex-col sm:flex-row gap-4 items-center justify-center"
        >
          <button
            onClick={() => reset()}
            className="inline-flex items-center justify-center gap-2 bg-[#0A2F4C] text-white font-semibold px-7 py-3.5 rounded-full text-sm transition-all hover:bg-[#0A2F4C]/85 hover:scale-105 shadow-lg shadow-[#0A2F4C]/15 group w-full sm:w-auto cursor-pointer"
          >
            <RefreshCw className="w-4 h-4 group-hover:rotate-180 transition-transform duration-500" />
            Try Again
          </button>

          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 text-[#0A2F4C] font-semibold px-7 py-3.5 rounded-full text-sm border border-[#0A2F4C]/15 hover:border-[#0A2F4C]/30 hover:bg-black/[0.03] transition-all w-full sm:w-auto"
          >
            <Home className="w-4 h-4" />
            Back to Home
          </Link>

          <a
            href="tel:7206062741"
            className="inline-flex items-center justify-center gap-2 bg-[#4AACDE] text-white font-semibold px-7 py-3.5 rounded-full text-sm transition-all hover:bg-[#4AACDE]/85 hover:scale-105 shadow-lg shadow-[#4AACDE]/20 group w-full sm:w-auto"
          >
            <Phone className="w-4 h-4" />
            Call Dave
          </a>
        </motion.div>

        {/* Error digest — subtle tech detail for devs */}
        {error.digest && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-8 text-xs font-mono text-[#6B7280]/50 tracking-widest"
          >
            Error ID: {error.digest}
          </motion.p>
        )}
      </div>
    </div>
  );
}
