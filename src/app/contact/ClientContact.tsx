"use client";

import { motion } from "framer-motion";
import ContactForm from "@/components/sections/ContactForm";
import { Star, Shield, Clock, Zap } from "lucide-react";
import MagneticButton from "@/components/ui/MagneticButton";

const CALENDLY = "https://calendly.com/quotadoctor/15";

export default function ClientContact() {
  return (
    <div className="min-h-screen relative overflow-hidden bg-[#F7F9FB] pt-24 lg:pt-32 pb-20">
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[40vw] h-[40vw] bg-[#4AACDE]/10 rounded-full blur-[120px] animate-[float-blob_20s_ease-in-out_infinite_alternate]" />
        <div className="absolute bottom-0 left-0 w-[30vw] h-[30vw] bg-[#1B7A2B]/10 rounded-full blur-[100px] animate-[float-blob_25s_ease-in-out_infinite_alternate-reverse]" />
      </div>

      {/* Hero Content & Form - Side by Side */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Value Prop & Social Proof */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, type: "spring", bounce: 0.5 }}
            className="flex flex-col gap-10"
          >
            <div>
              <span className="inline-block text-xs font-semibold tracking-[0.25em] uppercase text-[#4AACDE] bg-[#4AACDE]/10 border border-[#4AACDE]/20 px-5 py-1.5 rounded-full mb-6 relative">
                Your 24/7 Machine
              </span>
              <h1 className="text-5xl md:text-6xl font-black text-[#0A2F4C] leading-[1.05] tracking-tighter uppercase mb-6">
                STOP MISSING <br />
                <span className="font-playfair italic font-medium capitalize text-[#4AACDE] tracking-normal">Leads.</span>
              </h1>
              <p className="text-lg text-[#6B7280] font-medium leading-relaxed max-w-lg">
                Whether you want to automate your phone calls, double your Google reviews, or build a fully custom AI employee—we've got you covered.
              </p>
            </div>

            <div className="space-y-4">
              {[
                { icon: Clock, title: "24/7 Availability", desc: "Never miss an after-hours opportunity." },
                { icon: Star, title: "Scale Your Reviews", desc: "Automate your reputation management effortlessly." },
              ].map((badge, idx) => (
                <motion.div 
                  key={idx}
                  className="flex items-center gap-5 glass-card px-6 py-4 rounded-3xl group max-w-md"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + (idx * 0.1), duration: 0.6 }}
                  whileHover={{ x: 10 }}
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                    <badge.icon size={22} className="text-[#4AACDE]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#0A2F4C] text-md">{badge.title}</h3>
                    <p className="text-sm text-[#6B7280] font-medium">{badge.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Testimonial Card */}
            <div className="glass-card p-8 md:p-10 rounded-[3rem] shadow-xl relative overflow-hidden group border border-white/60 max-w-lg">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#4AACDE]/20 rounded-full blur-[80px] pointer-events-none group-hover:bg-[#4AACDE]/40 transition-all duration-700" />
              <blockquote className="text-xl text-[#0A2F4C] leading-relaxed mb-6 font-playfair italic relative z-10">
                “Shortly after launching AI Receptionist, I got a notification — 'You have a meeting scheduled.' I hadn't lifted a finger. The AI qualified the lead and booked it. It was wonderful.”
              </blockquote>
              <div className="flex items-center gap-4 relative z-10">
                <div className="w-12 h-12 rounded-full bg-[#0A2F4C] flex items-center justify-center text-white font-bold shadow-lg">MK</div>
                <div>
                  <p className="font-bold text-[#0A2F4C]">Michael K.</p>
                  <p className="text-xs text-[#4AACDE] font-semibold tracking-wide uppercase">Business Owner</p>
                </div>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              <MagneticButton>
                 <a
                   href={CALENDLY}
                   target="_blank"
                   rel="noopener noreferrer"
                   className="inline-flex glass-card-dark border-[#0A2F4C]/20 border items-center text-[#0A2F4C] bg-white px-8 py-4 text-lg font-black rounded-full hover:bg-white hover:scale-105 transition-all shadow-xl"
                 >
                   Book Free Strategy Call
                 </a>
              </MagneticButton>
            </motion.div>
          </motion.div>

          {/* Right Column: Lead Form (No Scroll needed) */}
          <motion.div
            className="flex flex-col gap-6"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2, type: "spring", bounce: 0.5 }}
          >
            <div className="glass-card p-6 sm:p-10 rounded-[3rem] shadow-2xl bg-white border border-white/60">
              <h3 className="text-2xl font-black text-[#0A2F4C] mb-2 px-4 sm:px-6">Ready to scale?</h3>
              <p className="text-sm text-[#6B7280] font-medium mb-6 px-4 sm:px-6">Send us a message and we'll get back to you within 24 hours.</p>
              
              {/* Form specifically injected here without the wrapper header/sidebar/paddings */}
              <ContactForm hideHeader hideSidebar pyClass="py-2" />
            </div>
            
            {/* Quick Stats */}
            <div className="glass-card-dark p-6 md:p-8 rounded-[3rem] shadow-xl flex flex-col sm:flex-row items-center gap-6 border-[#0A2F4C]/10 border">
               <div className="flex-1">
                 <h3 className="text-lg font-black text-[#0A2F4C] mb-1 uppercase tracking-tight">Zero Tech Skills Needed</h3>
                 <p className="text-[#0A2F4C] font-medium opacity-70 text-xs">We build, train, and test your AI agents.</p>
               </div>
               <div className="flex-shrink-0 text-right">
                 <span className="block text-3xl font-black text-[#4AACDE]">15m</span>
                 <span className="block text-[10px] uppercase tracking-widest font-bold text-[#0A2F4C] opacity-60 mt-1">Setup Call</span>
               </div>
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
}
