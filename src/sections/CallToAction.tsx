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
          <h2 className="section-title">Ready to Transform Your Business?</h2>
          <p className="section-description mt-5 text-[#BBE1FA]">
            Partner with QuotaDoctor — Fix the system, elevate the reps, scale the revenue.
          </p>
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
          <button className="btn btn-primary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black" aria-label="Contact QuotaDoctor" onClick={() => document.getElementById('contact')?.scrollIntoView({behavior:'smooth'})}>Contact Us</button>
          <button className="btn btn-text gap-1">
            <span>Learn more</span>
            <ArrowRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
};
