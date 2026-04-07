"use client";

import { motion } from "framer-motion";
import MagneticButton from "@/components/ui/MagneticButton";
import Image from "next/image";

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
      
      {/* Hero Section Container */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full mb-32">
        <div className="flex flex-col gap-12 text-center lg:text-left">
          
          <div className="flex flex-col lg:flex-row items-end justify-between gap-8 mb-4">
            <motion.div
              className="flex-1 w-full"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, type: "spring", bounce: 0.5 }}
            >
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-navy leading-[1.1] tracking-tighter uppercase">
                MY <br />
                <span className="font-playfair italic font-medium capitalize text-blue tracking-normal">Story.</span>
              </h1>
            </motion.div>
            
            <motion.div 
               className="flex-none max-w-xl text-lg md:text-xl text-text-muted font-medium mb-4"
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 1, delay: 0.2 }}
            >
              <p>
                People do business with people. Before you trust QuotaDoctor with your lifeblood—your leads—I want you to know who I am, what drives me, and who I'm building this for.
              </p>
            </motion.div>
          </div>

          {/* Large Horizontal Family Image Frame */}
          <motion.div
            className="w-full relative rounded-[2.5rem] md:rounded-[4rem] overflow-hidden glass-card shadow-2xl group block"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, type: "spring", bounce: 0.5 }}
          >
            {/* Note to the developer: Make sure to place dave-family.jpg in the public folder */}
            <img 
              src="/dave-family.jpg" 
              alt="Dave Thompson with his wife and dog"
              className="w-full h-auto block transform scale-100 group-hover:scale-105 transition-transform duration-[2s] ease-in-out"
            />
            {/* Ambient overlay for the liquid glass feel & text readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/30 to-transparent z-10 pointer-events-none" />
            
            <div className="absolute bottom-8 left-8 md:bottom-16 md:left-16 z-20">
              <span className="block text-white text-4xl md:text-5xl font-black tracking-tighter mb-1 shadow-sm drop-shadow-2xl uppercase">
                DAVE THOMPSON
              </span>
              <span className="block text-blue text-lg md:text-xl font-playfair font-medium capitalize italic drop-shadow-xl tracking-normal">
                Husband, Dog Dad & Founder
              </span>
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
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue rounded-full blur-[100px] opacity-20 pointer-events-none" />
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-navy tracking-tighter mb-8 leading-tight max-w-3xl uppercase">
            I BUILT THIS BECAUSE <br />
            <span className="font-playfair italic font-medium capitalize text-blue tracking-normal">I Was Bleeding Money.</span>
          </h2>
          
          <div className="space-y-6 text-base md:text-lg lg:text-xl text-text-muted font-medium leading-relaxed max-w-4xl">
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
            className="text-4xl md:text-5xl lg:text-6xl font-black text-navy leading-[1.1] tracking-tighter uppercase"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, type: "spring", bounce: 0.5 }}
          >
            THE <br />
            <span className="font-playfair italic font-medium capitalize text-blue tracking-normal">Proof.</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {credentials.map((cred, idx) => (
            <motion.div
              key={idx}
              className={`glass-card-dark rounded-[2.5rem] p-10 flex flex-col justify-center min-h-[250px] shadow-lg relative overflow-hidden ${idx === 0 || idx === 3 ? "md:col-span-2 lg:col-span-2" : ""}`}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.05, y: -10 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: idx * 0.1, type: "spring", bounce: 0.5 }}
            >
              <span className="text-6xl text-blue opacity-20 font-black absolute top-6 right-8">
                0{idx + 1}
              </span>
              <p className="text-xl md:text-2xl font-bold text-navy leading-tight relative z-10">
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
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-navy leading-[1.1] tracking-tighter uppercase mb-10">
            LET'S <br />
            <span className="font-playfair italic font-medium capitalize text-blue tracking-normal">Build Your Machine.</span>
          </h2>
          <div className="flex justify-center">
            <MagneticButton>
              <a
                href={CALENDLY}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex glass-card border-navy/20 border-2 items-center gap-4 text-navy bg-white px-8 py-4 text-lg md:text-xl font-black rounded-full hover:bg-white hover:scale-110 transition-all shadow-xl"
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
