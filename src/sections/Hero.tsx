'use client';

import { ArrowRight, Settings, Waves, Star, Sparkles, Zap } from "lucide-react";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValueEvent,
} from 'framer-motion';
import { useRef } from 'react';

export const Hero = () => {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start end', 'end start'],
  });

  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);

  useMotionValueEvent(translateY, 'change', (latestValue) =>
    console.log(latestValue)
  );

  return (
    <section
      id="home"
      ref={heroRef}
      className="pt-8 pb-20 md:pt-5 md:pb-10 overflow-x-clip relative bg-[#0A0A0F]"
    >
      <div className="absolute inset-0 bg-[radial-gradient(600px_400px_at_50%_30%,rgba(50,130,184,0.20),transparent),radial-gradient(800px_500px_at_80%_70%,rgba(15,76,117,0.20),transparent)] z-0" aria-hidden="true" />
      <div className="container relative z-10">
        <div className="md:flex items-center relative">
          <div className="md:w-[478px] relative z-20">
            {/* <div className="tag">Version 2.0 is here</div> */}
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-white mt-6 relative z-20">
              Film-Room for Sales. Fix the Mechanics That Close Deals.
            </h1>
            <p className="text-lg md:text-xl text-[#BBE1FA] tracking-tight mt-6 max-w-xl relative z-20">
              Start with the Sales Call Analyzer to diagnose every call, coach every rep, and build repeatable wins. Add Sales Coach and SDR when you&apos;re ready to scale.
            </p>
            <ul className="text-lg text-[#BBE1FA] tracking-tight mt-6 space-y-2 list-disc list-inside relative z-20">
              <li>Score 100% of calls automatically</li>
              <li>Turn feedback into weekly coaching</li>
              <li>Create consistent, predictable performance</li>
            </ul>
            <div className="flex gap-3 items-center mt-8 relative z-20">
              <a href="https://calendly.com/quotadoctor/15min" target="_blank" rel="noopener noreferrer" className="btn btn-primary px-6 py-3 rounded-xl font-semibold" aria-label="Book Your AI Strategy Session">Book Your AI Strategy Session</a>
              <button onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })} className="btn btn-text" aria-label="See our solutions">See Our Solutions</button>
            </div>
            {/* <div className="flex gap-1 items-center mt-[30px]">
              <button className="btn btn-primary">Get for free</button>
              <button className="btn btn-text gap-1">
                <span>Learn more</span>
                <ArrowRight className="h-5 w-5" />
              </button>
            </div> */}
          </div>

          <div className="mt-20 md:mt-0 md:h-[648px] md:flex-1 relative z-0">
            {/* Floating Gear/Cog Icon - Mid Left (Main decorative element) */}
            <motion.div
              className="hidden md:block absolute top-1/3 left-8 md:left-12 lg:left-16 z-0"
              animate={{
                rotate: [0, 360],
                translateY: [-20, 20],
              }}
              transition={{
                rotate: {
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear",
                },
                translateY: {
                  duration: 4,
                  repeat: Infinity,
                  repeatType: 'mirror',
                  ease: 'easeInOut',
                },
              }}
            >
              <Settings className="h-20 w-20 text-[#3282B8]" />
            </motion.div>

            {/* Floating Settings Icon - Alternative position */}
            <motion.div
              className="md:absolute md:h-full md:w-auto md:max-w-none md:-left-6 lg:left-0 z-0"
              animate={{
                translateY: [-30, 30],
              }}
              transition={{
                repeat: Infinity,
                repeatType: 'mirror',
                duration: 3,
                ease: 'easeInOut',
              }}
            >
              <Settings className="absolute h-16 w-16 text-[#3282B8]" />
            </motion.div>


            {/* Floating Waves Icon */}
            <motion.div
              className="hidden lg:block absolute top-[524px] left-[448px] rotate-[30deg] z-0"
              style={{
                rotate: 30,
                translateY: translateY,
              }}
            >
              <Waves className="absolute h-16 w-16 text-[#3282B8]" />
            </motion.div>

            {/* Floating Star/Flower Shape - Top Right */}
            <motion.div
              className="hidden md:block absolute top-12 right-8 md:right-16 z-0"
              animate={{
                rotate: [0, 360],
                scale: [1, 1.2, 1],
              }}
              transition={{
                rotate: {
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear",
                },
                scale: {
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                },
              }}
            >
              <Star className="h-12 w-12 text-[#3282B8]/60" fill="#3282B8" />
            </motion.div>

            {/* Floating Sparkles Icon - Bottom Left */}
            <motion.div
              className="hidden lg:block absolute bottom-20 left-8 z-0"
              animate={{
                translateY: [-20, 20],
                translateX: [-10, 10],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                repeatType: 'mirror',
                ease: 'easeInOut',
              }}
            >
              <Sparkles className="h-14 w-14 text-[#0F4C75]/70" />
            </motion.div>

            {/* Floating Zap Icon - Middle Right */}
            <motion.div
              className="hidden md:block absolute top-1/2 right-4 md:right-8 z-0"
              animate={{
                rotate: [-15, 15],
                scale: [0.9, 1.1],
              }}
              transition={{
                duration: 3.5,
                repeat: Infinity,
                repeatType: 'mirror',
                ease: 'easeInOut',
              }}
            >
              <Zap className="h-10 w-10 text-[#3282B8]/50" fill="#3282B8" />
            </motion.div>

            {/* Additional Floating Cylinder - Bottom Right */}
            <motion.div
              className="hidden lg:block absolute bottom-32 right-12 z-0"
              style={{
                translateY: translateY,
              }}
              animate={{
                rotate: [0, 180],
              }}
              transition={{
                rotate: {
                  duration: 15,
                  repeat: Infinity,
                  ease: "linear",
                },
              }}
            >
              <div className="h-12 w-12 bg-gradient-to-tr from-[#3282B8] to-[#0F4C75] rounded-lg rotate-45" />
            </motion.div>

            {/* Floating Curved Shape - Top Left */}
            <motion.div
              className="hidden md:block absolute top-24 left-4 z-0"
              animate={{
                translateY: [0, -30, 0],
                translateX: [0, 20, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <div className="h-20 w-20 border-2 border-[#3282B8]/40 rounded-full">
                <div className="h-12 w-12 border-2 border-[#0F4C75]/40 rounded-full m-2" />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
