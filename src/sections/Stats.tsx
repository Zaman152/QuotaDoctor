'use client';

import { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, useSpring, useInView } from 'framer-motion';

function Counter({ value, prefix = "", suffix = "" }: { value: number, prefix?: string, suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const motionValue = useSpring(0, {
    damping: 30,
    stiffness: 100,
    duration: 2500
  });
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [motionValue, isInView, value]);

  useEffect(() => {
    return motionValue.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = `${prefix}${latest.toFixed(0)}${suffix}`;
      }
    });
  }, [motionValue, prefix, suffix]);

  return <span ref={ref} />;
}

export default function Stats() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  // Subtle parallax for background gradient
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start end', 'end start'] });
  const translateY = useTransform(scrollYProgress, [0, 1], [40, -40]);

  return (
    <section ref={sectionRef} className="relative overflow-hidden py-24 md:py-32 bg-[#050505] border-t border-white/5">
      <motion.div
        style={{ y: translateY }}
        className="pointer-events-none absolute inset-0 opacity-40"
        aria-hidden="true"
      >
        <div className="absolute -top-24 -left-24 w-72 h-72 rounded-full blur-[100px]" style={{ background: "radial-gradient(circle, rgba(50,130,184,0.3), transparent)" }} />
        <div className="absolute -bottom-24 -right-24 w-72 h-72 rounded-full blur-[100px]" style={{ background: "radial-gradient(circle, rgba(15,76,117,0.3), transparent)" }} />
      </motion.div>

      <div className="container relative z-10 px-6">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-[#3282B8] font-semibold tracking-widest text-sm uppercase mb-4 block"
          >
            Impact
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-extrabold text-white tracking-tight"
          >
            Results That <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3282B8] to-[#BBE1FA]">Scale.</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
          {[
            { value: 92, suffix: "M+", label: "Pipeline Generated", prefix: "$" },
            { value: 250, suffix: "+", label: "Sales Reps Coached", prefix: "" },
            { value: 50, suffix: "+", label: "Companies Scaled", prefix: "" },
            { value: 3, suffix: "x", label: "Win Rate Increase", prefix: "" },
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="group relative p-8 rounded-3xl bg-white/5 border border-white/5 backdrop-blur-sm text-center hover:bg-white/10 transition-colors"
            >
              <div className="text-4xl md:text-5xl font-bold text-white mb-2 tabular-nums">
                <Counter value={stat.value} prefix={stat.prefix} suffix={stat.suffix} />
              </div>
              <div className="text-sm font-medium text-[#BBE1FA]/60 uppercase tracking-widest">
                {stat.label}
              </div>
              <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-transparent via-[#3282B8] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}


