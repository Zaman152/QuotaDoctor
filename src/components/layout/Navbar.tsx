"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import MagneticButton from "@/components/ui/MagneticButton";

const navLinks = [
  { label: "AI Workforce", href: "/ai-workforce" },
  { label: "Products & Services", href: "/products-services" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/#contact" },
];

const CALENDLY = "https://calendly.com/quotadoctor/15";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setIsOpen(false);

  if (!mounted) return null;

  return (
    <header
      className={`fixed z-50 transition-all duration-500 ${
        scrolled
          ? "top-4 md:top-6 left-4 right-4 md:left-1/2 md:-translate-x-1/2 md:w-[800px] glass-card rounded-full shadow-2xl py-2 px-6"
          : "top-0 left-0 right-0 w-full bg-transparent py-5 px-6 md:px-12 border-b border-[#0A2F4C]/5"
      }`}
    >
      <div className="relative flex items-center justify-between h-14 w-full max-w-7xl mx-auto">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-1 text-[#0A2F4C] font-black text-2xl tracking-tighter hover:scale-105 transition-transform"
          onClick={closeMenu}
        >
          QuotaDoctor<span className="text-[#4AACDE]">.</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[#0A2F4C] hover:text-[#4AACDE] font-bold text-sm tracking-tight transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <MagneticButton>
            <a
              href={CALENDLY}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#0A2F4C] text-white font-black px-6 py-3 rounded-full text-sm transition-all shadow-xl hover:scale-110"
            >
              Book Audit
            </a>
          </MagneticButton>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden p-2 text-[#0A2F4C] rounded-full hover:bg-white/50 transition-colors"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Drawer (Floating absolute) */}
        <div
          className={`md:hidden absolute top-[120%] left-0 right-0 glass-card rounded-[2rem] overflow-hidden transition-all duration-300 origin-top shadow-2xl border border-white/60 ${isOpen ? "scale-y-100 opacity-100" : "scale-y-0 opacity-0 pointer-events-none"
            }`}
        >
          <div className="px-6 py-6 flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                className="text-[#0A2F4C] hover:text-[#4AACDE] font-black text-xl py-2 transition-colors border-b border-[#0A2F4C]/10 last:border-0"
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-4">
              <a
                href={CALENDLY}
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMenu}
                className="flex items-center justify-center w-full bg-[#0A2F4C] text-white font-black text-lg px-6 py-4 rounded-xl shadow-lg"
              >
                Book Call
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
