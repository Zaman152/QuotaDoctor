"use client";

import { motion } from "framer-motion";

const features = [
  {
    headline: "Answer Every Call",
    body: "If a customer calls while you are busy, we answer it instantly with AI. We even text them right back. You look like a massive company.",
  },
  {
    headline: "Save Money",
    body: "A front desk human costs around $40,000+ a year. Our AI costs a tiny fraction of that, and it never calls in sick.",
  },
  {
    headline: "Get Found Easily",
    body: "We help you pop up first on Google when someone searches for your service in your local area.",
  },
  {
    headline: "Book More Jobs",
    body: "We text your old customers to bring them back, and reply instantly to new ones so your calendar is always full.",
  },
];

export default function WhyQuotaDoctor() {
  return (
    <section className="py-32 relative overflow-hidden min-h-[100svh] flex flex-col justify-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        
        <div className="text-center mb-24">
          <motion.h2
            className="text-4xl md:text-5xl lg:text-6xl font-black text-[#0A2F4C] leading-[1.1] tracking-tighter uppercase"
            initial={{ opacity: 0, scale: 0.5, rotateX: 45 }}
            whileInView={{ opacity: 1, scale: 1, rotateX: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, type: "spring", bounce: 0.5 }}
          >
            WHY <br />
            <span className="font-playfair italic font-medium capitalize text-[#4AACDE] tracking-normal">Choose Us.</span>
          </motion.h2>
          
          <motion.p
            className="mt-8 text-lg md:text-xl text-[#6B7280] font-medium max-w-2xl mx-auto glass-card p-6 rounded-3xl"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, delay: 0.2, type: "spring", bounce: 0.4 }}
          >
            Because doing everything yourself is exhausting. Let our AI do the heavy lifting.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {features.map((f, idx) => (
            <motion.div
              key={f.headline}
              className="glass-card-dark rounded-[3rem] p-10 flex flex-col justify-center min-h-[250px] relative overflow-hidden"
              initial={{ opacity: 0, y: 80, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              whileHover={{ 
                scale: 1.05, 
                rotateY: idx % 2 === 0 ? 5 : -5,
                rotateX: 5
              }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: idx * 0.1, type: "spring", bounce: 0.5 }}
              style={{ transformPerspective: 1000 }}
            >
              {/* Floating inner blob for strictly visual glassy effect */}
              <motion.div 
                className="absolute -top-10 -right-10 w-32 h-32 rounded-full bg-white/40 blur-2xl"
                animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0.8, 0.5] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              />

              <h3 className="text-2xl lg:text-3xl font-black text-[#0A2F4C] tracking-tight mb-4 relative z-10">
                {f.headline}
              </h3>
              <p className="text-base text-[#0A2F4C]/80 font-medium leading-relaxed relative z-10">
                {f.body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
