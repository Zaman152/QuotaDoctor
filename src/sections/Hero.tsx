'use client';

import Prism from "../components/Prism";
import { ArrowRight } from "lucide-react";
import { motion } from 'framer-motion';

export const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-[#0A0A0F]"
    >
      {/* Background Prism */}
      <div className="absolute inset-0 z-0">
        <Prism
          scale={2.5}
          baseWidth={6}
          animationType="rotate"
          hueShift={0.6} // Matches the blue/cyan theme
          noise={0} // Removed grain as requested
        />
      </div>

      {/* Radial Gradient Overlay for better text readability if needed, optional */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#0A0A0F_120%)] z-0 pointer-events-none" />

      {/* Content */}
      <div className="container relative z-10 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-7xl font-extrabold tracking-tight text-white mb-8"
          >
            Film-Room for Sales.<br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#BBE1FA] to-[#3282B8]">
              Fix the Mechanics That Close Deals.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-[#BBE1FA]/80 tracking-tight mb-8 max-w-2xl mx-auto"
          >
            Start with the Sales Call Analyzer to diagnose every call, coach every rep, and build repeatable wins. Add Sales Coach and SDR when you&apos;re ready to scale.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <a
              href="https://calendly.com/quotadoctor/15min"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-xl font-bold text-lg text-white bg-[#3282B8] border border-white/20 backdrop-blur-sm hover:scale-105 transition-all shadow-[0_0_20px_rgba(50,130,184,0.3)] hover:shadow-[0_0_30px_rgba(50,130,184,0.5)]"
              aria-label="Book Your AI Strategy Session"
            >
              Book Your AI Strategy Session
            </a>
            <button
              onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 rounded-xl font-bold text-lg text-white bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all flex items-center gap-2"
              aria-label="See our solutions"
            >
              See Our Solutions
              <ArrowRight className="w-4 h-4" />
            </button>
          </motion.div>

          {/* Feature List */}
          <motion.ul
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex flex-wrap justify-center gap-4 mt-12"
          >
            <li className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-[#BBE1FA] backdrop-blur-sm hover:bg-white/10 transition-colors cursor-default">
              <div className="w-1.5 h-1.5 rounded-full bg-[#3282B8] shadow-[0_0_10px_#3282B8]" />
              Score 100% of calls automatically
            </li>
            <li className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-[#BBE1FA] backdrop-blur-sm hover:bg-white/10 transition-colors cursor-default">
              <div className="w-1.5 h-1.5 rounded-full bg-[#3282B8] shadow-[0_0_10px_#3282B8]" />
              Turn feedback into weekly coaching
            </li>
            <li className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-[#BBE1FA] backdrop-blur-sm hover:bg-white/10 transition-colors cursor-default">
              <div className="w-1.5 h-1.5 rounded-full bg-[#3282B8] shadow-[0_0_10px_#3282B8]" />
              Create consistent, predictable performance
            </li>
          </motion.ul>
        </div>
      </div>
    </section>
  );
};
