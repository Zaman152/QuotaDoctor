"use client";

import { motion } from "framer-motion";
import { Home, Briefcase, Store, ArrowRight } from "lucide-react";
import SectionLabel from "@/components/ui/SectionLabel";

const CALENDLY = "https://calendly.com/quotadoctor/30min";

const cards = [
  {
    icon: Home,
    headline: "Home Services",
    description:
      "Tree service, fencing, concrete, pressure washing, roofing, HVAC, plumbing, painting, landscaping, and more. If you're on the job site when the phone rings, we make sure that lead never gets away.",
    link: "See how we help home service companies",
    id: "home-services-cta",
  },
  {
    icon: Briefcase,
    headline: "Professional Services",
    description:
      "Dental offices, chiropractors, physical therapists, med spas, law offices, accounting firms, and real estate. If your team is with patients or clients when new inquiries come in, we handle it.",
    link: "See how we help professional services",
    id: "professional-services-cta",
  },
  {
    icon: Store,
    headline: "Local Business Operations",
    description:
      "Restaurants, fitness studios, auto shops, salons, property management, and retail. If you're running a lean team and can't afford to miss a single customer, we're your back office.",
    link: "See how we help local businesses",
    id: "local-business-cta",
  },
];

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.5, ease: "easeOut" },
};

export default function WhoWeHelp() {
  return (
    <section id="who-we-help" className="bg-[#F7F9FB] py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-12">
          <motion.div {...fadeUp}>
            <SectionLabel>WHO WE HELP</SectionLabel>
          </motion.div>
          <motion.h2
            className="text-[28px] md:text-[40px] font-bold text-[#0A2F4C] leading-tight mt-1"
            {...fadeUp}
            transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
          >
            Built for the Businesses That Keep America Running.
          </motion.h2>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {cards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.headline}
                className="bg-white rounded-xl border border-[#E5EAF0] shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-200 p-7 flex flex-col"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: idx * 0.1, ease: "easeOut" }}
              >
                {/* Icon */}
                <div className="w-12 h-12 rounded-xl bg-[#4AACDE]/10 flex items-center justify-center mb-5">
                  <Icon size={22} className="text-[#4AACDE]" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-[#0A2F4C] mb-3">
                  {card.headline}
                </h3>
                <p className="text-[#6B7280] text-base leading-relaxed flex-1">
                  {card.description}
                </p>

                {/* Link */}
                <a
                  href={CALENDLY}
                  target="_blank"
                  rel="noopener noreferrer"
                  id={card.id}
                  className="mt-5 inline-flex items-center gap-1.5 text-[#4AACDE] font-medium text-sm hover:gap-2.5 transition-all duration-200"
                >
                  {card.link}
                  <ArrowRight size={14} />
                </a>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
