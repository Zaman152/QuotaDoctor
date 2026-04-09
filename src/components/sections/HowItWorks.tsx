"use client";

import { motion } from "framer-motion";
import MagneticButton from "@/components/ui/MagneticButton";

const CALENDLY = "https://calendly.com/quotadoctor/15";

const steps = [
  {
    number: "1",
    title: "Talk With Us",
    description: "We get on a quick 15-minute call. We figure out where you are losing customers. No boring sales pitches.",
  },
  {
    number: "2",
    title: "We Build It",
    description: "We set up your new phone and text system. You don't have to lift a finger or learn any new software.",
  },
  {
    number: "3",
    title: "Watch It Work",
    description: "Your phone rings, the AI answers, and books the job for you. You just focus on doing the actual work.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-24">
          <motion.h2
            className="text-4xl md:text-5xl lg:text-6xl font-black text-[#0A2F4C] leading-[1.1] tracking-tighter uppercase"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, type: "spring", bounce: 0.5 }}
          >
            HOW IT <br />
            <span className="font-playfair italic font-medium capitalize text-[#4AACDE] tracking-normal">Works.</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
          {steps.map((step, idx) => (
            <motion.div
              key={step.number}
              className="glass-card rounded-[3rem] p-10 relative flex flex-col group overflow-hidden"
              initial={{ opacity: 0, y: 100, rotateZ: idx === 1 ? -5 : 5 }}
              whileInView={{ opacity: 1, y: 0, rotateZ: 0 }}
              whileHover={{ y: -20, scale: 1.05 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: idx * 0.15, type: "spring", bounce: 0.6 }}
            >
              {/* Massive glass number */}
              <div className="absolute -top-10 -right-4 text-[12rem] font-black text-[#4AACDE] opacity-20 pointer-events-none group-hover:scale-125 transition-transform duration-500 blur-sm group-hover:blur-none">
                {step.number}
              </div>
              
              <div className="relative z-10 mt-12">
                <h3 className="text-2xl font-black text-[#0A2F4C] tracking-tight mb-4">
                  {step.title}
                </h3>
                <p className="text-base text-[#0A2F4C] font-medium leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-24 text-center flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, type: "spring", bounce: 0.6 }}
        >
          <MagneticButton>
            <a
              href={CALENDLY}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-4 glass-card-dark text-[#0A2F4C] font-black px-8 py-4 rounded-full text-xl transition-all hover:bg-white hover:shadow-2xl hover:scale-110"
            >
              START NOW
            </a>
          </MagneticButton>
        </motion.div>
      </div>
    </section>
  );
}
