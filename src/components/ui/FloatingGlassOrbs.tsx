"use client";

import { motion } from "framer-motion";

export default function FloatingGlassOrbs() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      <motion.div
        className="absolute top-[10%] left-[20%] w-64 h-64 rounded-full glass-card-dark"
        animate={{
          y: [0, -40, 0],
          x: [0, 30, 0],
          rotate: [0, 90, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute top-[40%] right-[10%] w-96 h-96 rounded-full glass-card"
        animate={{
          y: [0, 50, 0],
          x: [0, -50, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-[10%] left-[30%] w-72 h-72 rounded-full glass-card"
        animate={{
          y: [0, -60, 0],
          x: [0, 40, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      <motion.div
        className="absolute top-[70%] right-[30%] w-48 h-48 rounded-[3rem] glass-card rotate-45"
        animate={{
          y: [0, -30, 0],
          rotate: [45, 135, 45],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
}
