import Link from "next/link";
import { Linkedin, Instagram, Facebook, Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";

const CALENDLY = "https://calendly.com/quotadoctor/30min";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "AI Workforce", href: "/ai-workforce" },
  { label: "Products & Services", href: "/products-services" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/#contact" },
];

const legalLinks = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms of Service", href: "/terms" },
];

const socialLinks = [
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/david-thompson-720",
    icon: Linkedin,
  },
  {
    label: "Instagram",
    href: "https://instagram.com/quotadoctorai/",
    icon: Instagram,
  },
  {
    label: "Facebook",
    href: "https://facebook.com/profile.php?id=61585199853574",
    icon: Facebook,
  },
];

export default function Footer() {
  return (
    <footer className="relative bg-[#0A2F4C] text-white overflow-hidden mt-10 sm:mt-20 rounded-t-[2.5rem] sm:rounded-t-[4rem] shadow-[0_-20px_40px_rgba(10,47,76,0.15)] border-t border-white/10">
      {/* Decorative Top Glow */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#4AACDE]/50 to-transparent" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-[#4AACDE]/20 blur-[120px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 sm:py-24 pb-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16 mb-16 sm:mb-24">
          
          {/* Brand & Value Prop */}
          <div className="md:col-span-5 lg:col-span-4 flex flex-col gap-6">
            <Link href="/" className="text-white font-black text-3xl tracking-tight flex items-center gap-1 group w-fit">
              QuotaDoctor<span className="text-[#4AACDE] group-hover:drop-shadow-[0_0_10px_rgba(74,172,222,0.8)] transition-all">.</span>
            </Link>
            <p className="text-white/70 text-base leading-relaxed font-medium">
              Your 24/7 AI workforce. We make sure no lead slips through the cracks, ever.
            </p>
            <div className="flex items-center gap-3 pt-2">
              {socialLinks.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 hover:bg-[#4AACDE]/20 hover:border-[#4AACDE]/50 flex items-center justify-center transition-all duration-300 hover:scale-110 group shadow-lg"
                >
                  <Icon size={18} className="text-white/70 group-hover:text-[#4AACDE] transition-colors" />
                </a>
              ))}
            </div>
          </div>

          <div className="md:col-span-7 lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {/* Quick Links */}
            <div className="flex flex-col gap-5">
              <h3 className="font-bold text-white text-xs uppercase tracking-[0.2em] mb-2 opacity-80 decoration-[#4AACDE] decoration-2 underline-offset-8 underline">
                Explore
              </h3>
              {quickLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-white/60 hover:text-white text-sm font-medium transition-colors duration-300 flex items-center group w-fit"
                >
                  <span className="relative overflow-hidden">
                    <span className="block transition-transform duration-300 group-hover:-translate-y-full">{link.label}</span>
                    <span className="block absolute inset-0 transition-transform duration-300 translate-y-full group-hover:translate-y-0 text-[#4AACDE]">{link.label}</span>
                  </span>
                </Link>
              ))}
            </div>

            {/* Contact */}
            <div className="flex flex-col gap-5">
              <h3 className="font-bold text-white text-xs uppercase tracking-[0.2em] mb-2 opacity-80 decoration-[#4AACDE] decoration-2 underline-offset-8 underline">
                Contact
              </h3>
              <a
                href="mailto:Dave@quotadoctor.ai"
                className="flex items-center gap-3 text-white/60 hover:text-white text-sm font-medium transition-colors duration-300 group w-fit"
              >
                <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-[#4AACDE]/20 group-hover:border-[#4AACDE]/40 transition-all shadow-sm">
                  <Mail size={14} className="text-[#4AACDE]" />
                </div>
                Dave@quotadoctor.ai
              </a>
              <a
                href="tel:7204651809"
                className="flex items-center gap-3 text-white/60 hover:text-white text-sm font-medium transition-colors duration-300 group w-fit"
              >
                <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-[#4AACDE]/20 group-hover:border-[#4AACDE]/40 transition-all shadow-sm">
                  <Phone size={14} className="text-[#4AACDE]" />
                </div>
                720-465-1809
              </a>
              <span className="flex items-center gap-3 text-white/60 text-sm font-medium">
                <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center shadow-sm">
                  <MapPin size={14} className="text-white/50" />
                </div>
                Denver, CO
              </span>
            </div>

            {/* Action */}
            <div className="flex flex-col gap-5">
              <h3 className="font-bold text-white text-xs uppercase tracking-[0.2em] mb-2 opacity-80 decoration-[#4AACDE] decoration-2 underline-offset-8 underline">
                Ready?
              </h3>
              <p className="text-white/60 text-sm font-medium mb-1">Build your AI workforce in 24 hours.</p>
              <a
                href={CALENDLY}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#4AACDE] hover:bg-white hover:text-[#0A2F4C] text-white font-bold px-6 py-3.5 rounded-xl text-sm transition-all duration-300 hover:scale-[1.03] active:scale-[0.98] shadow-[0_0_20px_rgba(74,172,222,0.3)] w-fit"
              >
                Book Free Call
                <ArrowUpRight size={16} />
              </a>
            </div>
          </div>
        </div>

        {/* Massive Typography Decoration */}
        <div className="w-full flex justify-center py-8 border-b border-white/5 pointer-events-none select-none overflow-hidden mix-blend-screen opacity-40">
          <h2 className="text-[13vw] sm:text-[11vw] leading-[0.8] font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-white/0 font-playfair italic pr-4">
            QuotaDoctor
          </h2>
        </div>

        {/* SMS Disclosure */}
        <div className="mt-10">
          <p className="text-white/30 text-[10px] leading-relaxed max-w-5xl uppercase tracking-wider font-semibold">
            <strong className="text-white/50">SMS Disclosure:</strong> By providing your phone number and opting in, you consent to receive text messages from QuotaDoctor. Message and data rates may apply. Message frequency varies. Reply STOP to cancel, HELP for help. SMS opt-in data will not be shared with third parties for marketing purposes.
          </p>
        </div>

        {/* Bottom bar */}
        <div className="mt-8 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-5 text-white/40 text-xs font-semibold tracking-wide">
          <span>© 2026 QuotaDoctor. All rights reserved.</span>
          <div className="flex flex-wrap items-center gap-6">
            {legalLinks.map((link) => (
               <Link
                 key={link.href}
                 href={link.href}
                 className="hover:text-white transition-colors duration-300"
               >
                 {link.label}
               </Link>
            ))}
            <span className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-[10px]">
               <span className="relative flex h-1.5 w-1.5">
                 <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#1B7A2B] opacity-75"></span>
                 <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#1B7A2B]"></span>
               </span>
               Systems Operational
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
