"use client";

import { motion } from "framer-motion";
import MagneticButton from "@/components/ui/MagneticButton";
import Link from "next/link";
import Image from "next/image";

export default function MeetDave() {
  return (
    <section className="py-32 relative overflow-hidden flex items-center justify-center min-h-[80svh]" id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
          
          {/* Photo panel */}
          <motion.div
            className="flex-1 w-full"
            initial={{ opacity: 0, scale: 0.8, rotate: -2 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, type: "spring", bounce: 0.4 }}
          >
            <Link href="/about" className="block w-full relative rounded-[2.5rem] md:rounded-[3rem] overflow-hidden glass-card shadow-2xl group cursor-pointer">
              <Image 
                src="/dave-family.jpg" 
                alt="Dave Thompson with his wife and dog"
                width={1024}
                height={682}
                className="w-full h-auto block transform scale-100 group-hover:scale-105 transition-transform duration-[2s] ease-in-out"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/20 to-transparent z-10 opacity-90 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
              
              <div className="absolute bottom-6 left-6 md:bottom-10 md:left-10 z-20">
                <span className="block text-white text-3xl md:text-5xl font-black tracking-tighter mb-1 drop-shadow-xl">
                  Dave Thompson
                </span>
                <span className="block text-blue text-lg md:text-xl font-bold font-serif-display italic drop-shadow-md">
                  Husband, Dad, Dog Dad & Founder
                </span>
              </div>
            </Link>
          </motion.div>

          {/* Content */}
          <motion.div
            className="flex-1 w-full"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2, type: "spring", bounce: 0.4 }}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-navy leading-[1.1] tracking-tighter mb-8 uppercase">
              MEET <br />
              <span className="font-playfair italic font-medium capitalize text-blue tracking-normal">Dave.</span>
            </h2>

            <div className="space-y-6 text-text-muted text-lg md:text-xl font-medium leading-relaxed max-w-xl">
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
                  className="inline-flex glass-card-dark items-center gap-4 text-navy bg-white px-6 py-4 rounded-full font-black text-lg hover:bg-white hover:scale-105 transition-all outline-none shadow-lg"
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
