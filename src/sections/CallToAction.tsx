"use client";

import { ArrowRight, Star, Sparkles } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export const CallToAction = () => {

const sectionRef = useRef(null);
  const {scrollYProgress} = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  })

  const translateY = useTransform(scrollYProgress, [0,1],[150,-150]);

  return (
    <section ref={sectionRef} className="bg-gradient-to-br from-[#16213E] to-[#0A0A0F] py-24 overflow-x-clip">
      <div className="container">
        <div className="section-heading relative">
          <h2 className="section-title">What Happens in 15 Minutes</h2>
          <div className="mt-8 max-w-2xl mx-auto">
            <ul className="text-lg text-[#BBE1FA] space-y-4 list-disc list-inside text-left">
              <li>We map your current sales flow and pinpoint inconsistency</li>
              <li>We show how film-room coaching tightens fundamentals fast</li>
              <li>We outline next steps (Analyzer now; Coach/SDR when ready)</li>
            </ul>
          </div>
          <motion.div
            className="absolute -left-[350px] -top-[137px]"
            style={{
              translateY,
            }}
          >
            <Star className="h-8 w-8" />
          </motion.div>
          <motion.div
            className="absolute -right-[331px] -top-[19px]"
            style={{
              translateY,
            }}
          >
            <Sparkles className="h-8 w-8" />
          </motion.div>
        </div>
        <div className="flex gap-2 mt-10 justify-center">
          <a href="https://calendly.com/quotadoctor/15min" target="_blank" rel="noopener noreferrer" className="btn btn-primary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black" aria-label="Book Your AI Strategy Session">Book Your AI Strategy Session</a>
        </div>
      </div>
    </section>
  );
};
