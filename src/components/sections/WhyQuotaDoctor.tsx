"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, CircleDollarSign, Target, CalendarCheck, Zap } from "lucide-react";

// The Advantage Data
const features = [
  {
    id: "01",
    headline: "Answer Every Call",
    shortLabel: "Active 24/7",
    body: "If a customer calls while you are busy, we answer it instantly with AI. We even text them right back, making you look like a massive, highly-responsive company.",
    icon: Phone,
    colorFrom: "#4AACDE", // blue
    colorTo: "#FFFFFF",
  },
  {
    id: "02",
    headline: "Save Money",
    shortLabel: "Slash Costs",
    body: "A front desk human costs around $40,000+ a year. Our AI workforce costs a tiny fraction of that—and never calls in sick, takes breaks, or sleeps.",
    icon: CircleDollarSign,
    colorFrom: "#1B7A2B", // green
    colorTo: "#4AACDE",   // blue
  },
  {
    id: "03",
    headline: "Get Found Easily",
    shortLabel: "Top Search Ranking",
    body: "Dominate your local market. We help your business pop up first on Google when someone searches for your high-value services in your area.",
    icon: Target,
    colorFrom: "#0A2F4C", // navy
    colorTo: "#4AACDE",   // blue
  },
  {
    id: "04",
    headline: "Book More Jobs",
    shortLabel: "Full Calendar",
    body: "Say goodbye to empty schedules. We proactively text your old customers to bring them back, and reply instantly to new leads so your calendar stays full.",
    icon: CalendarCheck,
    colorFrom: "#4AACDE", // blue
    colorTo: "#1B7A2B",   // green
  },
];

export default function WhyQuotaDoctor() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);

  // Auto-play interval
  useEffect(() => {
    if (isHovering) return;
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % features.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [isHovering]);

  return (
    <section className="py-16 md:py-24 relative overflow-hidden bg-bg-white min-h-[85svh] flex flex-col justify-center">
      
      {/* Background Ambient Spheres for Outer Glass Flavor */}
      <motion.div 
        className="absolute -top-1/4 -left-[10%] w-[600px] h-[600px] rounded-full bg-blue/10 blur-[120px] pointer-events-none z-0 mix-blend-multiply"
      />
      <motion.div 
        className="absolute bottom-0 -right-[5%] w-[500px] h-[500px] rounded-full bg-green/10 blur-[120px] pointer-events-none z-0 mix-blend-multiply"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        
        {/* Superior Header */}
        <div className="flex flex-col items-center text-center mb-10 md:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass-card mb-4 border border-white/60 shadow-sm"
          >
            <Zap className="w-4 h-4 text-blue" />
            <span className="text-xs font-bold tracking-widest uppercase text-navy/80">The QuotaDoctor Edge</span>
          </motion.div>

          <motion.h2
            className="text-4xl md:text-5xl lg:text-[3.5rem] font-black text-navy leading-[1.05] tracking-tighter uppercase max-w-3xl"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 1, type: "spring", bounce: 0.4 }}
          >
            NOT JUST DIFFERENT. <br />
            <span className="font-playfair italic font-medium capitalize text-blue tracking-normal">Fundamentally Better.</span>
          </motion.h2>
        </div>

        {/* The Split Interface */}
        <div 
          className="flex flex-col lg:flex-row gap-5 lg:gap-8 items-stretch w-full max-w-6xl mx-auto"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
           
           {/* Left Menu / Mobile Scroll Pill Bar */}
           <div className="w-[100vw] relative left-1/2 -translate-x-1/2 lg:w-[32%] xl:w-[30%] lg:left-auto lg:translate-x-0 flex flex-row lg:flex-col gap-3 z-20 overflow-x-auto lg:overflow-visible snap-x snap-mandatory pb-4 lg:pb-0 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden px-4 lg:px-0">
              {features.map((f, i) => {
                const isActive = activeIndex === i;
                return (
                  <button 
                    key={f.id}
                    onClick={() => setActiveIndex(i)}
                    className={`shrink-0 snap-center text-left px-5 py-4 lg:py-5 lg:px-6 rounded-[1.5rem] transition-all duration-500 relative focus:outline-none flex flex-row lg:flex-col items-center lg:items-start lg:justify-center min-w-[200px] lg:min-w-0 lg:w-full min-h-[50px] lg:min-h-[110px] group ${
                      isActive ? 'lg:scale-[1.02]' : 'border border-transparent'
                    }`}
                  >
                    {/* The animated highlight pill container deeply frosted */}
                    {isActive ? (
                       <motion.div 
                         layoutId="activeFeatureIndicator"
                         className="absolute inset-0 glass-card shadow-[0_8px_30px_-10px_rgba(10,47,76,0.12)] z-0 rounded-[1.5rem]"
                         initial={false}
                         transition={{ type: "spring", stiffness: 300, damping: 30 }}
                       />
                    ) : (
                       <div className="absolute inset-0 bg-white/20 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0 rounded-[1.5rem]" />
                    )}
                    
                    <div className="relative z-10 flex flex-row lg:flex-col lg:items-start items-center gap-3 w-full">
                       {/* Numbering */}
                       <div className={`font-playfair font-black transition-all duration-500 hidden lg:block ${isActive ? 'text-blue text-3xl lg:scale-105' : 'text-navy/30 text-2xl group-hover:text-navy/50'}`}>
                         {f.id}
                       </div>
                       {/* Text */}
                       <div className="flex flex-col gap-1 w-full text-center lg:text-left">
                         <h3 className={`font-black uppercase tracking-tight transition-all duration-500 whitespace-nowrap lg:whitespace-normal ${isActive ? 'text-navy text-sm md:text-base lg:text-xl' : 'text-navy/70 text-sm md:text-base lg:text-lg group-hover:text-navy'}`}>
                           {f.headline}
                         </h3>
                         <motion.div 
                            initial={false}
                            animate={{ height: isActive ? "auto" : 0, opacity: isActive ? 1 : 0 }}
                            className="hidden lg:block overflow-hidden"
                         >
                            <p className="text-blue font-bold text-xs tracking-wide pt-1">
                              {f.shortLabel}
                            </p>
                         </motion.div>
                       </div>
                    </div>
                  </button>
                )
              })}
           </div>

           {/* Right Glass Display Window (The Canvas) */}
           <div className="w-full lg:w-[68%] xl:w-[70%] h-[350px] sm:h-[400px] lg:h-[500px] relative rounded-[2rem] p-2 glass-card overflow-hidden shadow-[0_12px_40px_rgba(10,47,76,0.08)] flex-shrink-0">
              
              {/* Massive ambient liquid blob radiating purely through the main glass layers */}
              <AnimatePresence mode="popLayout">
                <motion.div 
                  key={`blob-${activeIndex}`}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 0.5, scale: 1, rotate: [0, 90, 0] }}
                  exit={{ opacity: 0, scale: 1.2 }}
                  transition={{ duration: 1.5, ease: "easeInOut" }}
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[500px] md:h-[500px] rounded-full blur-[80px] mix-blend-multiply z-0 pointer-events-none"
                  style={{
                      background: `radial-gradient(circle, ${features[activeIndex].colorFrom} 0%, transparent 70%)`
                  }}
                />
              </AnimatePresence>

              {/* Inner Screen Layer: Acts as the deep frosted pane clamping the colored fluid */}
              <div className="absolute inset-2 md:inset-3 rounded-[1.5rem] bg-white/40 backdrop-blur-2xl overflow-hidden border border-white/70 shadow-inner z-10">
                 
                 <AnimatePresence mode="wait">
                    <motion.div
                       key={activeIndex}
                       initial={{ opacity: 0, scale: 0.98, filter: "blur(8px)" }}
                       animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                       exit={{ opacity: 0, scale: 1.02, filter: "blur(8px)", transition: { duration: 0.25 } }}
                       transition={{ duration: 0.4, type: "spring", bounce: 0.2 }}
                       className="absolute inset-0 flex flex-col justify-center items-center lg:items-start text-center lg:text-left p-6 sm:p-8 lg:p-12 xl:p-16"
                    >
                        {/* Feature Icon Panel nested glass */}
                        <motion.div
                           initial={{ opacity: 0, x: -20 }}
                           animate={{ opacity: 1, x: 0 }}
                           transition={{ duration: 0.5, delay: 0.15, type: "spring" }}
                           className="relative z-10 mb-6 md:mb-8"
                        >
                           <div className="inline-flex p-4 md:p-5 rounded-3xl glass-card border-white shadow-xl bg-white/60">
                             {(() => {
                                const Icon = features[activeIndex].icon;
                                return <Icon className="w-8 h-8 md:w-12 md:h-12 text-blue drop-shadow-md" strokeWidth={1.5} />
                             })()}
                           </div>
                        </motion.div>

                        <motion.div
                           initial={{ opacity: 0, y: 20 }}
                           animate={{ opacity: 1, y: 0 }}
                           transition={{ duration: 0.5, delay: 0.25, type: "spring", stiffness: 100 }}
                           className="relative z-10 w-full max-w-xl"
                        >
                           <h4 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-black text-navy mb-3 lg:mb-5 leading-[1.1] tracking-tight drop-shadow-sm">
                              {features[activeIndex].headline}
                           </h4>
                           
                           <p className="text-base md:text-lg lg:text-xl text-navy/80 leading-relaxed font-medium">
                              {features[activeIndex].body}
                           </p>
                        </motion.div>
                    </motion.div>
                 </AnimatePresence>
                 
                 {/* Intense Inner Frost sheens simulating edges of a glass prism */}
                 <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-white/80 to-transparent pointer-events-none z-20 opacity-60" />
                 <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-white/40 to-transparent pointer-events-none z-20 opacity-40" />
              </div>
           </div>

        </div>
      </div>
    </section>
  );
}
