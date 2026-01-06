"use client";

import { ArrowRight, Search, Zap, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";

export const CallToAction = () => {
  return (
    <section className="relative py-32 bg-[#050505] overflow-hidden border-t border-white/5">
      <div className="container relative z-10 px-4 md:px-6">

        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight"
          >
            The 15-Minute <span className="text-[#3282B8]">Blueprint.</span>
          </motion.h2>
          <p className="text-[#BBE1FA]/60 text-lg">Your roadmap to revenue recovery starts here.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-12 left-[20%] right-[20%] h-px bg-gradient-to-r from-[#3282B8]/0 via-[#3282B8]/50 to-[#3282B8]/0 border-t border-dashed border-[#3282B8]/30" />

          {[
            {
              icon: <Search className="w-6 h-6 text-white" />,
              title: "Diagnostic",
              desc: "We map your current sales flow and pinpoint the exact friction points costing you deals."
            },
            {
              icon: <Zap className="w-6 h-6 text-white" />,
              title: "The Fix",
              desc: "We identify the specific AI agents or coaching protocols needed to plug the leaks immediately."
            },
            {
              icon: <TrendingUp className="w-6 h-6 text-white" />,
              title: "Scale",
              desc: "You get a clear implementation timeline to turn 'fixing' into 'compounding growth'."
            }
          ].map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              className="relative flex flex-col items-center text-center group"
            >
              <div className="w-24 h-24 rounded-2xl bg-[#0A0A0F] border border-white/10 flex items-center justify-center mb-6 relative z-10 group-hover:border-[#3282B8] group-hover:shadow-[0_0_30px_rgba(50,130,184,0.3)] transition-all duration-300">
                <div className="absolute inset-0 bg-[#3282B8]/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                {step.icon}
                <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-[#16213E] border border-[#3282B8] flex items-center justify-center text-xs font-bold text-white">
                  {i + 1}
                </div>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
              <p className="text-[#BBE1FA]/60 leading-relaxed max-w-xs">{step.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-20 text-center"
        >
          <a
            href="https://calendly.com/quotadoctor/15min"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-[#3282B8] focus:ring-offset-2 focus:ring-offset-slate-50"
          >
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-[#0A0A0F] px-8 py-1 text-sm font-medium text-white backdrop-blur-3xl transition-colors group-hover:bg-[#16213E]">
              book_free_ai_audit <ArrowRight className="ml-2 h-4 w-4" />
            </span>
          </a>
        </motion.div>

      </div>
    </section>
  );
};
