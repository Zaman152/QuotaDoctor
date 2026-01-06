'use client';

import Prism from "../components/Prism";
import { ArrowRight, Play, CheckCircle2 } from "lucide-react";
import { motion } from 'framer-motion';

export const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-[92vh] flex items-center justify-center overflow-hidden bg-transparent"
    >
      {/* Background Prism - Optimized for Dark Theme */}
      <div
        className="absolute inset-x-0 top-0 h-[100vh] z-0 opacity-60"
        style={{
          maskImage: 'linear-gradient(to bottom, transparent 0%, black 15%, black 85%, transparent 100%)',
          WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 15%, black 85%, transparent 100%)'
        }}
      >
        <Prism
          scale={2.2}
          baseWidth={6}
          animationType="rotate"
          hueShift={0.65} // tailored blue/cyan
          noise={0.02} // subtle texture
          offset={{ x: 0, y: -90 }}
        />
      </div>

      {/* Content */}
      <div className="container relative z-10 px-4 pt-10">
        <div className="max-w-5xl mx-auto text-center flex flex-col items-center">

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-8 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md text-xs font-medium text-[#BBE1FA]"
          >
            <span className="w-2 h-2 rounded-full bg-[#3282B8] animate-pulse shadow-[0_0_12px_#3282B8]"></span>
            Now Accepting New Audit Clients
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
            className="text-4xl sm:text-5xl md:text-8xl lg:text-9xl font-bold tracking-tighter text-white mb-8 leading-[0.9] text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-white/40 max-w-[90vw] break-words"
          >
            Film-Room<br />
            <span className="text-[#3282B8]">For Sales.</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-lg md:text-xl text-[#BBE1FA]/60 tracking-wide mb-10 max-w-[90vw] md:max-w-2xl mx-auto font-light leading-relaxed px-2"
          >
            Fix the mechanics that close deals. Create repeatable wins with AI-driven diagnostics and elite coaching methodology.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col md:flex-row gap-5 items-center justify-center w-full px-4"
          >
            <a
              href="https://calendly.com/quotadoctor/15min"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative w-full md:w-auto px-5 py-2.5 md:px-8 md:py-4 bg-[#3282B8] text-white rounded-full font-semibold text-sm md:text-lg overflow-hidden transition-all hover:scale-105 hover:shadow-[0_0_40px_rgba(50,130,184,0.4)] flex justify-center"
            >
              <span className="relative z-10 flex items-center gap-2">
                Book Your Free AI Audit <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out" />
            </a>

            <button
              onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
              className="group w-full md:w-auto px-5 py-2.5 md:px-8 md:py-4 rounded-full font-semibold text-sm md:text-lg text-white/80 bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all flex items-center justify-center gap-2 hover:text-white"
            >
              <Play className="w-4 h-4 fill-current group-hover:scale-110 transition-transform" />
              See How It Works
            </button>
          </motion.div>

          {/* Micro-Features */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-16 pt-8 border-t border-white/5 flex flex-wrap justify-center gap-8 md:gap-16"
          >
            {[
              "100% Call Scoring",
              "Weekly Coaching Loops",
              "Predictable Revenue"
            ].map((feature, i) => (
              <div key={i} className="flex items-center gap-3 text-sm font-medium text-white/40 uppercase tracking-widest">
                <CheckCircle2 className="w-4 h-4 text-[#3282B8]" />
                {feature}
              </div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
};
