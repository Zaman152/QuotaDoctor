"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function MeetDave() {
  return (
    <section className="bg-[#F7F9FB] py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Photo */}
          <motion.div
            className="flex justify-center md:justify-start"
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="relative w-72 h-80 md:w-[340px] md:h-[400px] rounded-2xl overflow-hidden shadow-lg border-2 border-[#E5EAF0]">
              {/* Placeholder with navy bg and initials */}
              <div className="w-full h-full bg-gradient-to-br from-[#0A2F4C] to-[#1A4F7C] flex flex-col items-center justify-center">
                <div className="w-24 h-24 rounded-full bg-white/10 border-2 border-white/20 flex items-center justify-center mb-4">
                  <span className="text-white text-3xl font-bold">DT</span>
                </div>
                <span className="text-white/60 text-sm font-medium">Dave Thompson</span>
                <span className="text-[#4AACDE] text-xs mt-1">Founder, QuotaDoctor</span>
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <span className="inline-block text-[#4AACDE] font-semibold text-xs tracking-widest uppercase mb-4">
              FOUNDER &amp; LEAD STRATEGIST
            </span>
            <h2 className="text-[28px] md:text-[40px] font-bold text-[#0A2F4C] leading-tight mb-6">
              Meet Dave Thompson.
            </h2>

            <div className="space-y-4 text-[#6B7280] text-base leading-relaxed">
              <p>
                I&apos;m Dave Thompson. I&apos;ve spent 20+ years helping businesses grow — from
                scaling healthcare SaaS companies to acquiring and turning around struggling
                businesses to building my own real estate investment portfolio from scratch.
              </p>
              <p>
                QuotaDoctor started because I built AI systems for my own businesses first,
                proved they work, and now I deploy them for other business owners. I&apos;m not
                a tech guy selling software. I&apos;m a business owner who figured out how to
                make sure no lead falls through the cracks — and now I help others do the same.
              </p>
            </div>

            <Link
              href="/about"
              id="meet-dave-learn-more"
              className="mt-6 inline-flex items-center gap-2 text-[#4AACDE] font-semibold hover:gap-3 transition-all duration-200"
            >
              Read Dave&apos;s full story
              <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
