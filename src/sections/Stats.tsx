'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

function useCountUp(target: number, durationMs = 1200) {
  const [value, setValue] = useState(0);
  const startRef = useRef<number | null>(null);

  useEffect(() => {
    let raf: number;
    const tick = (ts: number) => {
      if (startRef.current === null) startRef.current = ts;
      const progress = Math.min(1, (ts - startRef.current) / durationMs);
      setValue(Math.floor(progress * target));
      if (progress < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target, durationMs]);

  return value;
}

export default function Stats() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  // Subtle parallax for background gradient
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start end', 'end start'] });
  const translateY = useTransform(scrollYProgress, [0, 1], [40, -40]);

  const revenueMillions = useCountUp(15);
  const reps = useCountUp(200);
  const companies = useCountUp(50);
  const winRateMultiple = useCountUp(3);

  return (
    <section ref={sectionRef} className="relative overflow-hidden py-24 md:py-32 bg-[#0A0A0F]">
      <motion.div
        style={{ y: translateY }}
        className="pointer-events-none absolute inset-0 opacity-60"
        aria-hidden="true"
      >
        <div className="absolute -top-24 -left-24 w-72 h-72 rounded-full" style={{background:"radial-gradient(closest-side, rgba(50,130,184,0.25), transparent)"}} />
        <div className="absolute -bottom-24 -right-24 w-72 h-72 rounded-full" style={{background:"radial-gradient(closest-side, rgba(15,76,117,0.20), transparent)"}} />
      </motion.div>

      <div className="container relative">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-extrabold section-title">Our Achievements</h2>
          <p className="text-lg text-[#BBE1FA] mt-4">Proven results that scale with your ambitions.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 text-center">
          <div className="rounded-2xl bg-[#16213E] backdrop-blur-2xl border border-[#0F4C75]/30 shadow-[0_10px_30px_rgba(2,6,23,0.30)] p-6">
            <div className="text-3xl md:text-4xl font-extrabold text-[#3282B8]">${revenueMillions}M+</div>
            <div className="mt-2 text-[#BBE1FA]">Revenue Impact</div>
          </div>
          <div className="rounded-2xl bg-[#16213E] backdrop-blur-2xl border border-[#0F4C75]/30 shadow-[0_10px_30px_rgba(2,6,23,0.30)] p-6">
            <div className="text-3xl md:text-4xl font-extrabold text-[#3282B8]">{reps}+</div>
            <div className="mt-2 text-[#BBE1FA]">Sales Reps Coached</div>
          </div>
          <div className="rounded-2xl bg-[#16213E] backdrop-blur-2xl border border-[#0F4C75]/30 shadow-[0_10px_30px_rgba(2,6,23,0.30)] p-6">
            <div className="text-3xl md:text-4xl font-extrabold text-[#3282B8]">{companies}+</div>
            <div className="mt-2 text-[#BBE1FA]">B2B Companies Transformed</div>
          </div>
          <div className="rounded-2xl bg-[#16213E] backdrop-blur-2xl border border-[#0F4C75]/30 shadow-[0_10px_30px_rgba(2,6,23,0.30)] p-6">
            <div className="text-3xl md:text-4xl font-extrabold text-[#3282B8]">{winRateMultiple}x</div>
            <div className="mt-2 text-[#BBE1FA]">Average Win Rate Improvement</div>
          </div>
        </div>
      </div>
    </section>
  );
}


