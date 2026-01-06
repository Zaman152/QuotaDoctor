"use client";

import { ArrowRight, Menu, X } from "lucide-react";
import Link from "next/link";
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Image from "next/image";
import Logo from "@/assets/cropped_logo.png";

export const Header = () => {
  const [hidden, setHidden] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    if (latest > previous && latest > 150 && !isMobileMenuOpen) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  // Lock body scroll when menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

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

          {/* Nav Items (Desktop) */}
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
            className="ml-2 px-5 py-2.5 bg-[#3282B8] hover:bg-[#276690] text-white text-sm font-semibold rounded-full transition-all hidden md:flex items-center gap-2 group"
          >
            <span>Book Audit</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </a>

          {/* Mobile Menu Icon */}
          <button
            onClick={() => setIsMobileMenuOpen(true)}
            className="md:hidden p-2 text-white/80 hover:text-white"
          >
            <Menu className="w-6 h-6" />
          </button>
        </nav>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[100] bg-[#0A0A0F] bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(50,130,184,0.15),rgba(255,255,255,0))]"
          >
            <div className="flex flex-col h-full p-6">
              <div className="flex justify-between items-center mb-8">
                <Link href="/" className="flex items-center gap-3" onClick={() => setIsMobileMenuOpen(false)}>
                  <Image
                    src={Logo}
                    alt="QuotaDoctor Logo"
                    width={48}
                    height={48}
                    className="w-10 h-10 rounded-full object-contain"
                  />
                  <span className="font-bold text-white tracking-tight text-lg">QuotaDoctor.</span>
                </Link>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2 text-white/60 hover:text-white rounded-full bg-white/5 hover:bg-white/10 transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="flex flex-col gap-4 flex-1 justify-center items-center">
                {navLinks.map((link, index) => (
                  <motion.a
                    key={link.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 + index * 0.1 }}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-3xl font-bold text-white/80 hover:text-white transition-colors tracking-tight"
                  >
                    {link.name}
                  </motion.a>
                ))}
              </div>

              <div className="mb-8 w-full">
                <a
                  href="https://calendly.com/quotadoctor/15min"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex w-full justify-center items-center gap-2 py-4 bg-[#3282B8] text-white font-bold rounded-xl text-lg hover:bg-[#276690] transition-colors"
                >
                  Book Your Free AI Audit
                  <ArrowRight className="w-5 h-5" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
