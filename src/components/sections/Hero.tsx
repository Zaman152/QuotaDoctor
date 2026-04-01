"use client";

import { motion } from "framer-motion";
import MagneticButton from "@/components/ui/MagneticButton";

const CALENDLY = "https://calendly.com/quotadoctor/30min";

export default function Hero() {
  return (
    <section className="relative bg-white min-h-[100svh] flex flex-col justify-center items-center overflow-hidden w-full pt-20">
      
      {/* Background Kinetic Text */}
      <div className="absolute inset-0 flex flex-col justify-center items-center pointer-events-none select-none opacity-5 overflow-hidden">
        <motion.div 
          animate={{ x: ["0%", "-50%"] }} 
          transition={{ repeat: Infinity, ease: "linear", duration: 30 }}
          className="whitespace-nowrap display-huge font-black tracking-tighter text-[#0A2F4C]"
        >
          QUOTADOCTOR QUOTADOCTOR QUOTADOCTOR
        </motion.div>
        <motion.div 
          animate={{ x: ["-50%", "0%"] }} 
          transition={{ repeat: Infinity, ease: "linear", duration: 25 }}
          className="whitespace-nowrap display-huge font-black tracking-tighter text-[#0A2F4C]"
        >
          ANSWER EVERY CALL ANSWER EVERY CALL
        </motion.div>
      </div>

      <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col md:flex-row items-center justify-between gap-12 mt-12 md:mt-24 pb-20">
        
        <div className="flex-1 text-left">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
            className="text-[#4AACDE] font-semibold tracking-[0.2em] uppercase text-sm mb-6 bg-white/50 backdrop-blur-md px-4 py-2 inline-block rounded-full border border-white/60"
          >
            Your 24/7 Virtual Team
          </motion.p>

          <motion.h1
            className="text-[12vw] sm:text-[8vw] md:text-[5rem] lg:text-[7rem] font-black text-[#0A2F4C] leading-[0.9] tracking-tighter"
            initial={{ opacity: 0, scale: 0.8, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1, type: "spring", bounce: 0.5, delay: 0.1 }}
          >
            NEVER MISS <br/>
            <span className="italic font-light tracking-tight text-[#4AACDE]">A SINGLE</span><br/>
            CUSTOMER.
          </motion.h1>

          <motion.p
            className="mt-8 text-xl md:text-2xl font-medium text-[#6B7280] max-w-xl leading-relaxed glass-card p-6 rounded-2xl"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, type: "spring", bounce: 0.4, delay: 0.3 }}
          >
            Stop losing jobs because you couldn&apos;t pick up the phone. We answer every call, book the jobs, and handle the rest.
          </motion.p>
        </div>

        <div className="flex-1 w-full max-w-lg relative">
          <motion.div
            initial={{ opacity: 0, y: 80, rotateX: 20 }}
            animate={{ opacity: 1, y: 0, rotateX: 0 }}
            transition={{ duration: 1, type: "spring", bounce: 0.5, delay: 0.5 }}
            className="glass-card rounded-[3rem] p-8 md:p-12 relative overflow-hidden shadow-2xl"
            style={{ transformPerspective: 1000 }}
          >
            <div className="absolute -top-32 -right-32 w-64 h-64 bg-[#4AACDE] rounded-full blur-[100px] opacity-40 pointer-events-none animate-pulse" />

            <h2 className="text-4xl font-black text-[#0A2F4C] mb-8 leading-tight tracking-tighter">
              Ready to grow?
            </h2>
            
            <div className="flex flex-col gap-6 relative z-10">
              <MagneticButton>
                <a
                  href={CALENDLY}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-between bg-white text-[#0A2F4C] px-8 py-6 rounded-[2rem] font-bold text-xl border border-white/40 shadow-xl"
                >
                  <span>Book a Free Call</span>
                  <motion.span 
                    animate={{ x: [0, 5, 0] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                    className="text-2xl"
                  >→</motion.span>
                </a>
              </MagneticButton>

              <MagneticButton>
                <a
                  href="#how-it-works"
                  className="w-full flex items-center justify-between glass-card-dark text-[#0A2F4C] px-8 py-6 rounded-[2rem] font-bold text-xl transition-colors hover:bg-white/40"
                >
                  <span>See How It Works</span>
                  <span className="text-2xl text-[#4AACDE]">↓</span>
                </a>
              </MagneticButton>
            </div>
            
            <div className="mt-8 pt-8 border-t border-white/30 flex justify-between items-center text-sm font-bold text-[#6B7280]">
              <span>Cancel Anytime</span>
              <span className="w-2 h-2 rounded-full bg-[#1B7A2B] animate-pulse" />
              <span>No Contracts</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
