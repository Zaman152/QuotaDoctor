"use client";

import { Instagram, Linkedin, Mail, ArrowUpRight, Facebook } from "lucide-react";
import Link from 'next/link';
import Image from "next/image";
import Logo from "@/assets/cropped_logo.png";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export const Footer = () => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end end"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [-100, 0]);

  const socialLinks = [
    { icon: Facebook, href: "https://www.facebook.com/profile.php?id=61585199853574" },
    { icon: Instagram, href: "https://www.instagram.com/quotadoctorai/" },
    { icon: Linkedin, href: "https://linkedin.com/in/david-thompson-720" },
    { icon: Mail, href: "mailto:info@quotadoctor.com" },
  ];

  const mainLinks = [
    { label: "Home", href: "#home" },
    { label: "Strategies", href: "#services" },
    { label: "Leadership", href: "#about" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <footer ref={container} className="bg-[#050505] text-[#BBE1FA] relative overflow-hidden">
      {/* Subtle Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(15,76,117,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(15,76,117,0.03)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="container mx-auto px-6 py-24 relative z-10">

        {/* Massive CTA Section */}
        <div className="flex flex-col items-center justify-center text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col items-center gap-6"
          >
            <h2 className="text-5xl md:text-8xl lg:text-9xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-white/40">
              READY TO SCALE?
            </h2>
            <Link href="#contact" className="group relative inline-flex items-center gap-3 px-8 py-4 bg-[#3282B8] text-white rounded-full text-lg font-medium overflow-hidden transition-all hover:pr-10">
              <span className="relative z-10">Get Your Audit</span>
              <ArrowUpRight className="w-5 h-5 relative z-10 transition-transform group-hover:rotate-45" />
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out" />
            </Link>
          </motion.div>
        </div>

        <div className="border-t border-white/10 pt-12 flex flex-col md:flex-row justify-between items-start md:items-center gap-8">

          {/* Brand / Copyright */}
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-3">
              <Image
                src={Logo}
                alt="QuotaDoctor Logo"
                width={48}
                height={48}
                className="w-12 h-12 rounded-full object-contain"
              />
              <span className="text-2xl font-bold text-white tracking-tight">QuotaDoctor.</span>
            </div>
            <p className="text-white/40 text-sm">
              © {new Date().getFullYear()} QuotaDoctor Inc.<br />
              Elite Sales Systems & Performance Coaching.
            </p>
          </div>

          {/* Main Navigation - Horizontal on Desktop */}
          <nav className="flex flex-wrap gap-x-8 gap-y-4">
            {mainLinks.map((link, idx) => (
              <Link
                key={idx}
                href={link.href}
                className="text-white/60 hover:text-[#3282B8] text-sm md:text-base transition-colors font-medium relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#3282B8] transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </nav>

          {/* Social Icons - Minimal */}
          <div className="flex gap-4">
            {socialLinks.map((item, idx) => (
              <Link
                key={idx}
                href={item.href}
                className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/60 hover:text-white hover:bg-[#3282B8] hover:border-[#3282B8] transition-all duration-300"
              >
                <item.icon className="w-4 h-4" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
