"use client";

import { motion } from "framer-motion";
import MagneticButton from "@/components/ui/MagneticButton";
import Link from "next/link";

export default function MeetDave() {
  return (
    <section className="py-32 relative overflow-hidden flex items-center justify-center min-h-[80svh]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="flex flex-col md:flex-row gap-16 md:gap-24 items-center">
          
          {/* Photo panel */}
          <motion.div
            className="flex-1 w-full"
            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, type: "spring", bounce: 0.4 }}
          >
            <div className="glass-card-dark relative w-full aspect-[4/5] max-w-md mx-auto rounded-[3rem] overflow-hidden flex flex-col items-center justify-center group shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-[#4AACDE]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              
              <motion.div 
                className="w-32 h-32 rounded-full glass-card border border-white flex items-center justify-center mb-6 shadow-xl"
                whileHover={{ scale: 1.1, rotate: 10 }}
                transition={{ type: "spring", bounce: 0.6 }}
              >
                <span className="text-[#0A2F4C] text-5xl font-black">DT</span>
              </motion.div>
              
              <span className="text-[#0A2F4C] text-3xl font-black tracking-tighter">Dave Thompson</span>
              <span className="text-[#6B7280] text-lg font-bold mt-2">The Guy Behind It All</span>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            className="flex-1 w-full"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2, type: "spring", bounce: 0.4 }}
          >
            <h2 className="text-[4rem] md:text-[6rem] lg:text-[7rem] font-black text-[#0A2F4C] leading-[0.8] tracking-tighter mb-8">
              MEET DAVE.
            </h2>

            <div className="space-y-6 text-[#6B7280] text-2xl font-medium leading-relaxed max-w-xl">
              <p>
                I am not a tech guy trying to sell you software. I am a business owner just like you. 
              </p>
              <p>
                I built this AI system to stop my own businesses from losing callers to the voicemail void. It worked incredibly well. Now, I set it up for other business owners so they never miss a job again.
              </p>
            </div>

            <div className="mt-12">
              <MagneticButton>
                <Link
                  href="/about"
                  className="inline-flex glass-card-dark items-center gap-4 text-[#0A2F4C] bg-white px-8 py-5 rounded-full font-black text-xl hover:bg-white hover:scale-105 transition-all outline-none shadow-lg"
                >
                  Read My Full Story →
                </Link>
              </MagneticButton>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
