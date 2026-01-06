"use client";

import { ArrowRight, Menu } from "lucide-react";
import Link from "next/link";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import Logo from "@/assets/cropped_logo.png";

export const Header = () => {
  const [hidden, setHidden] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Strategies", href: "#services" },
    { name: "Leadership", href: "#about" },
  ];

  return (
    <>
      <div className="flex justify-center items-center py-3 bg-[#050505] text-white/60 text-xs gap-3 font-medium tracking-wide">
        <div className="inline-flex gap-2 items-center">
          <span className="w-2 h-2 rounded-full bg-[#3282B8] animate-pulse"></span>
          <p>Start with a 15-minute AI strategy diagnostic</p>
        </div>
      </div>

      <motion.header
        variants={{
          visible: { y: 0 },
          hidden: { y: "-100%" },
        }}
        animate={hidden ? "hidden" : "visible"}
        transition={{ duration: 0.35, ease: "easeInOut" }}
        className="sticky top-6 z-50 flex justify-center px-4 mb-8"
      >
        <nav className="flex items-center gap-2 p-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-xl shadow-2xl shadow-black/20">

          {/* Logo */}
          <Link href="/" className="px-4 py-2 flex items-center gap-3">
            <Image
              src={Logo}
              alt="QuotaDoctor Logo"
              width={48}
              height={48}
              className="w-12 h-12 rounded-full object-contain"
            />
            <span className="font-bold text-white tracking-tight text-lg hidden sm:block">QuotaDoctor.</span>
          </Link>

          {/* Nav Items */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-4 py-2 text-sm text-white/70 hover:text-white hover:bg-white/5 rounded-full transition-all duration-300 font-medium"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <a
            href="https://calendly.com/quotadoctor/15min"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 px-5 py-2.5 bg-[#3282B8] hover:bg-[#276690] text-white text-sm font-semibold rounded-full transition-all flex items-center gap-2 group"
          >
            <span>Book Audit</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </a>

          {/* Mobile Menu Icon */}
          <button className="md:hidden p-2 text-white/80 hover:text-white">
            <Menu className="w-5 h-5" />
          </button>
        </nav>
      </motion.header>
    </>
  );
};
