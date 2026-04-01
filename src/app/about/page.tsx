"use client";

import { motion } from "framer-motion";
import MagneticButton from "@/components/ui/MagneticButton";

const CALENDLY = "https://calendly.com/quotadoctor/30min";

const credentials = [
  "Sold over $4,000,000 in services purely through high-end closing.",
  "Turned around bankrupt companies into cash-machines in under 90 days.",
  "Run a massive 50+ property real estate portfolio completely hands-off using the exact AI you're buying today.",
  "Ran a $15M budget for military medical operations in the US Coast Guard.",
  "Scaled a company from $2M a year to $2M a month.",
];

export default function AboutPage() {
  return (
    <div className="pt-32 pb-20 relative overflow-hidden min-h-screen">
      
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full mb-32">
        <div className="flex flex-col md:flex-row gap-16 items-center">
          
          <motion.div
            className="flex-1 w-full text-center md:text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, type: "spring", bounce: 0.5 }}
          >
            <h1 className="text-[5rem] md:text-[7rem] lg:text-[9rem] font-black text-[#0A2F4C] leading-[0.8] tracking-tighter mb-8">
              MY <br />
              <span className="italic font-light text-[#4AACDE]">STORY.</span>
            </h1>
          </motion.div>

          {/* Photo */}
          <motion.div
            className="flex-1 w-full"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2, type: "spring", bounce: 0.5 }}
          >
            <div className="glass-card-dark relative w-full aspect-[4/5] max-w-sm mx-auto md:ml-auto rounded-[3rem] overflow-hidden flex flex-col items-center justify-center group shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-[#4AACDE]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
              
              <motion.div 
                className="w-32 h-32 rounded-full glass-card border border-white flex items-center justify-center mb-6 shadow-xl relative z-10"
                whileHover={{ scale: 1.1, rotate: 10 }}
                transition={{ type: "spring", bounce: 0.6 }}
              >
                <span className="text-[#0A2F4C] text-5xl font-black">DT</span>
              </motion.div>
              
              <span className="text-[#0A2F4C] text-3xl font-black tracking-tighter relative z-10">Dave Thompson</span>
              <span className="text-[#6B7280] text-xl font-bold mt-2 relative z-10">Owner</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* The Issue section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full mb-40">
        <motion.div
          className="glass-card rounded-[3rem] p-12 lg:p-16 relative overflow-hidden shadow-2xl"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, type: "spring", bounce: 0.4 }}
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#4AACDE] rounded-full blur-[100px] opacity-20 pointer-events-none" />
          
          <h2 className="text-4xl md:text-5xl font-black text-[#0A2F4C] tracking-tighter mb-8 leading-tight max-w-2xl">
            I built this because I was bleeding money.
          </h2>
          
          <div className="space-y-6 text-xl md:text-2xl text-[#6B7280] font-medium leading-relaxed max-w-4xl">
            <p>
              When I was running my real estate company, I couldn't find a reliable contractor. Every time I called a plumber, an electrician, or a roofer, I got sent to voicemail. They were too busy working to answer the phone to take my money.
            </p>
            <p>
              So I built an AI to answer MY phones simultaneously, around the clock. Suddenly, my businesses ran themselves. Leads got answered in two seconds. Jobs got booked while I was asleep. 
            </p>
            <p>
              I realized every home service business needed this exact machine. We aren't marketers. We plug the massive holes in your sales bucket using high-end technology.
            </p>
          </div>
        </motion.div>
      </section>

      {/* Track Record Bento */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full mb-40">
        <div className="text-center mb-16">
          <motion.h2
            className="text-[4rem] md:text-[6rem] font-black text-[#0A2F4C] tracking-tighter"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, type: "spring", bounce: 0.5 }}
          >
            THE PROOF.
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {credentials.map((cred, idx) => (
            <motion.div
              key={idx}
              className={`glass-card-dark rounded-[2.5rem] p-10 flex flex-col justify-center min-h-[250px] shadow-lg ${idx === 0 || idx === 3 ? "md:col-span-2 lg:col-span-2" : ""}`}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.05, y: -10 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: idx * 0.1, type: "spring", bounce: 0.5 }}
            >
              <span className="text-6xl text-[#4AACDE] opacity-20 font-black absolute top-6 right-8">
                0{idx + 1}
              </span>
              <p className="text-2xl md:text-3xl font-bold text-[#0A2F4C] leading-tight relative z-10">
                {cred}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, type: "spring", bounce: 0.5 }}
        >
          <h2 className="text-5xl md:text-7xl font-black text-[#0A2F4C] tracking-tighter mb-10">
            Let's build your machine.
          </h2>
          <div className="flex justify-center">
            <MagneticButton>
              <a
                href={CALENDLY}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex glass-card border-[#0A2F4C]/20 border-2 items-center gap-4 text-[#0A2F4C] bg-white px-12 py-6 text-2xl font-black rounded-full hover:bg-white hover:scale-110 transition-all shadow-xl"
              >
                Book a Quick Chat
              </a>
            </MagneticButton>
          </div>
        </motion.div>
      </section>

    </div>
  );
}
