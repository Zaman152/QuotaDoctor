import Link from "next/link";
import { Linkedin, Instagram, Facebook, Mail, Phone, MapPin } from "lucide-react";

const CALENDLY = "https://calendly.com/quotadoctor/30min";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "What We Do", href: "/#meet-your-team" },
  { label: "Who We Help", href: "/#who-we-help" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/#contact" },
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
    <footer className="bg-[#0A2F4C] text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12">
          {/* Col 1: Brand */}
          <div className="flex flex-col gap-4">
            <Link href="/" className="text-white font-bold text-2xl tracking-tight hover:opacity-80 transition-opacity">
              QuotaDoctor<span className="text-[#4AACDE]">.</span>
            </Link>
            <p className="text-white/70 text-sm leading-relaxed max-w-xs">
              We make sure no lead slips through the cracks.
            </p>
            <div className="flex items-center gap-3 mt-2">
              {socialLinks.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-lg bg-white/10 hover:bg-[#4AACDE] flex items-center justify-center transition-all duration-200"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="flex flex-col gap-3">
            <h3 className="font-semibold text-white text-sm uppercase tracking-wider mb-1">
              Quick Links
            </h3>
            {quickLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-white/70 hover:text-white text-sm transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Col 3: Contact */}
          <div className="flex flex-col gap-3">
            <h3 className="font-semibold text-white text-sm uppercase tracking-wider mb-1">
              Contact
            </h3>
            <a
              href="mailto:Dave@quotadoctor.ai"
              className="flex items-center gap-2 text-white/70 hover:text-white text-sm transition-colors"
            >
              <Mail size={14} className="shrink-0 text-[#4AACDE]" />
              Dave@quotadoctor.ai
            </a>
            <a
              href="tel:7204651809"
              className="flex items-center gap-2 text-white/70 hover:text-white text-sm transition-colors"
            >
              <Phone size={14} className="shrink-0 text-[#4AACDE]" />
              720-465-1809
            </a>
            <span className="flex items-center gap-2 text-white/70 text-sm">
              <MapPin size={14} className="shrink-0 text-[#4AACDE]" />
              Denver, CO
            </span>
            <div className="mt-3">
              <a
                href={CALENDLY}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#4AACDE] hover:bg-[#3A9CCC] text-white font-semibold px-5 py-2.5 rounded-lg text-sm transition-all duration-200"
              >
                Book Free Call →
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-2 text-white/50 text-sm">
          <span>© 2026 QuotaDoctor. All rights reserved.</span>
          <span>Denver, CO</span>
        </div>
      </div>
    </footer>
  );
}
