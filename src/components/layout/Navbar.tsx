"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "What We Do", href: "/#meet-your-team" },
  { label: "Who We Help", href: "/#who-we-help" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/#contact" },
];

const CALENDLY = "https://calendly.com/quotadoctor/30min";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setIsOpen(false);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "backdrop-blur-md bg-white/90 shadow-sm border-b border-[#E5EAF0]"
          : "bg-white border-b border-[#E5EAF0]"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-18">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-1 text-[#0A2F4C] font-bold text-xl md:text-2xl tracking-tight hover:opacity-80 transition-opacity"
            onClick={closeMenu}
          >
            QuotaDoctor
            <span className="text-[#4AACDE]">.</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[#6B7280] hover:text-[#0A2F4C] font-medium text-sm transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <a
              href={CALENDLY}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#4AACDE] hover:bg-[#3A9CCC] text-white font-semibold px-5 py-2.5 rounded-lg text-sm transition-all duration-200 shadow-sm hover:shadow-md hover:-translate-y-0.5"
            >
              Book Audit →
            </a>
          </div>

          {/* Mobile Hamburger */}
          <button
            id="navbar-mobile-toggle"
            className="md:hidden p-2 text-[#0A2F4C] hover:bg-[#F7F9FB] rounded-lg transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`md:hidden border-t border-[#E5EAF0] bg-white overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-4 py-4 flex flex-col gap-2">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={closeMenu}
              className="text-[#333333] hover:text-[#0A2F4C] font-medium py-3 px-3 rounded-lg hover:bg-[#F7F9FB] transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-2 pb-1">
            <a
              href={CALENDLY}
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMenu}
              className="block w-full text-center bg-[#4AACDE] hover:bg-[#3A9CCC] text-white font-semibold px-6 py-3.5 rounded-lg transition-all duration-200"
            >
              Book Your Free Strategy Call →
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
