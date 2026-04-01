"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import MagneticButton from "@/components/ui/MagneticButton";

const CALENDLY = "https://calendly.com/quotadoctor/30min";

const cards = [
  {
    num: "01",
    headline: "HOME",
    subhead: "SERVICES",
    description:
      "Tree service, fencing, concrete, pressure washing, roofing, HVAC, plumbing, painting, landscaping, and more. If you're on the job site when the phone rings, we make sure that lead never gets away.",
    colSpan: "md:col-span-2 md:row-span-2",
    alignment: "justify-between",
  },
  {
    num: "02",
    headline: "PRO",
    subhead: "SERVICES",
    description:
      "Dental offices, chiropractors, physical therapists, med spas, law offices, accounting firms. If your team is with clients, we handle inquiries.",
    colSpan: "md:col-span-1 md:row-span-1",
    alignment: "justify-start",
  },
  {
    num: "03",
    headline: "LOCAL",
    subhead: "BUSINESS",
    description:
      "Restaurants, fitness studios, auto shops, salons, retail. If you're running a lean team and can't miss a single customer, we're your back office.",
    colSpan: "md:col-span-1 md:row-span-1",
    alignment: "justify-end",
  },
];

const fadeUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
};

export default function WhoWeHelp() {
  return (
    <section id="who-we-help" className="relative bg-[#F7F9FB] py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section header: Editorial style */}
        <div className="mb-20 flex flex-col md:flex-row md:items-end justify-between gap-8 border-b-2 border-[#0A2F4C] pb-8">
          <motion.h2
            className="text-[3rem] md:text-[5rem] lg:text-[7rem] font-black text-[#0A2F4C] leading-[0.85] tracking-tighter uppercase"
            {...fadeUp}
          >
            WHO WE <br />
            <span className="italic font-light text-[#4AACDE]">SERVE</span>
          </motion.h2>
          <motion.p 
            className="max-w-md text-lg text-[#6B7280] font-medium"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 1 }}
          >
            Built for the businesses that keep America running. No corporate jargon. Just raw, unadulterated growth.
          </motion.p>
        </div>

        {/* Masonry Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-6 auto-rows-[250px] md:auto-rows-[350px]">
          {cards.map((card, idx) => (
            <motion.div
              key={card.num}
              className={`glass-card rounded-[2rem] p-8 md:p-10 flex flex-col group relative overflow-hidden ${card.colSpan} ${card.alignment}`}
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: idx * 0.15, ease: [0.16, 1, 0.3, 1] }}
            >
              {/* Massive background number */}
              <div className="absolute -bottom-10 -right-10 text-[12rem] lg:text-[18rem] font-black text-[#0A2F4C] opacity-5 select-none pointer-events-none group-hover:scale-110 group-hover:opacity-10 transition-all duration-700">
                {card.num}
              </div>
              
              <div className="relative z-10 flex flex-col h-full justify-between">
                <div>
                  <div className="inline-block bg-[#0A2F4C] text-white px-3 py-1 text-xs font-bold tracking-widest mb-6 rounded-full">
                    {card.num}
                  </div>
                  <h3 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#0A2F4C] leading-[0.9] tracking-tighter uppercase">
                    {card.headline}
                    <br />
                    <span className="font-light italic text-[#4AACDE]">{card.subhead}</span>
                  </h3>
                </div>

                <div className="mt-8 flex flex-col sm:flex-row gap-6 justify-between items-start sm:items-end w-full">
                  <p className="text-[#6B7280] text-sm md:text-base leading-relaxed max-w-sm font-medium">
                    {card.description}
                  </p>
                  
                  <MagneticButton>
                    <a
                      href={CALENDLY}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#0A2F4C] text-white hover:bg-[#4AACDE] transition-colors shrink-0 shadow-xl"
                      aria-label={`Book call for ${card.headline}`}
                    >
                      <ArrowRight size={20} className="-rotate-45 group-hover:rotate-0 transition-transform duration-300" />
                    </a>
                  </MagneticButton>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
