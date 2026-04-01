"use client";

import { motion } from "framer-motion";
import MagneticButton from "@/components/ui/MagneticButton";

const CALENDLY = "https://calendly.com/quotadoctor/30min";

const employees = [
  {
    role: "The Receptionist",
    description:
      "Answers every single call and text right away. Answers common questions, books appointments into your calendar, and lets you know. Never sleeps, never calls in sick.",
    id: "ai-receptionist",
  },
  {
    role: "The Auto-Follower",
    description:
      "If a customer emails or texts but doesn't book, this bot checks in on them for you until they do. Turns cold leads into real money automatically.",
    id: "ai-followup",
  },
  {
    role: "The Review Collector",
    description:
      "Automatically messages customers after you finish a job and asks for a 5-star Google review. Your business looks perfect online with zero effort.",
    id: "ai-reputation",
  },
  {
    role: "The Social Media Manager",
    description:
      "Keeps your Facebook and Instagram pages fully active by posting high-quality content automatically. Shows customers you are busy and thriving.",
    id: "ai-social",
  },
];

export default function MeetYourTeam() {
  return (
    <section id="meet-your-team" className="py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        
        {/* Section header */}
        <div className="text-center mb-24">
          <motion.h2
            className="text-[4rem] md:text-[6rem] lg:text-[7rem] font-black text-[#0A2F4C] leading-[0.85] tracking-tighter"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, type: "spring", bounce: 0.5 }}
          >
            MEET THE <br/>
            <span className="italic font-light text-[#4AACDE]">DREAM TEAM.</span>
          </motion.h2>
          <motion.p
            className="mt-8 text-[#6B7280] text-2xl font-medium max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, delay: 0.2, type: "spring", bounce: 0.4 }}
          >
            Instead of hiring five different people, you get one perfect AI team that does it all for a fraction of the cost.
          </motion.p>
        </div>

        {/* Liquid Glass Masonry Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {employees.map((emp, idx) => (
            <motion.div
              key={emp.id}
              className="glass-card rounded-[3rem] p-10 lg:p-12 relative flex flex-col group overflow-hidden"
              initial={{ opacity: 0, y: 80, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{
                duration: 0.8,
                delay: idx * 0.1,
                type: "spring",
                bounce: 0.5
              }}
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#4AACDE] rounded-full blur-[80px] opacity-20 pointer-events-none group-hover:scale-150 transition-transform duration-700" />

              <h3 className="text-3xl md:text-4xl font-black text-[#0A2F4C] tracking-tighter mb-6">
                {emp.role}
              </h3>
              <p className="text-xl text-[#0A2F4C]/80 font-medium leading-relaxed">
                {emp.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Callout bar */}
        <motion.div
          className="mt-20 glass-card-dark rounded-[3rem] p-10 md:p-16 text-center shadow-2xl relative overflow-hidden"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, type: "spring", bounce: 0.5 }}
        >
          <div className="absolute -left-32 top-0 w-64 h-64 bg-white rounded-full blur-[100px] opacity-20 pointer-events-none" />
          
          <p className="text-[#0A2F4C] font-black text-3xl md:text-5xl tracking-tighter mb-10 leading-tight">
            An Entire Office Staff. <br />
            <span className="italic text-[#4AACDE] font-light">One Easy Price.</span>
          </p>
          
          <div className="flex justify-center">
            <MagneticButton>
              <a
                href={CALENDLY}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-4 bg-white text-[#0A2F4C] font-black px-12 py-6 rounded-full text-xl md:text-2xl transition-all shadow-xl hover:scale-110"
              >
                Launch Your Team
              </a>
            </MagneticButton>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
