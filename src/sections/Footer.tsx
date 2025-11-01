import { Twitter, Instagram, Linkedin, Youtube, Mail } from "lucide-react";
import Link from 'next/link';

export const Footer = () => {
  return (
    <footer className="bg-[#0A0A0F] border-t border-[#0F4C75] text-[#BBE1FA] text-sm py-10 text-center">
      <div className="container">
        <div className="inline-flex relative">
          <span className="text-2xl font-bold relative text-white">QuotaDoctor</span>
        </div>
        <nav className="flex flex-col md:flex-row md:justify-center gap-6 mt-6">
          <Link href="#about" className="hover:text-[#3282B8] transition-colors">About</Link>
          <Link href="#services" className="hover:text-[#3282B8] transition-colors">Services</Link>
          <Link href="#pricing" className="hover:text-[#3282B8] transition-colors">Pricing</Link>
          <Link href="#features" className="hover:text-[#3282B8] transition-colors">Features</Link>
          <Link href="#contact" className="hover:text-[#3282B8] transition-colors">Contact</Link>
          <Link href="/privacy" className="hover:text-[#3282B8] transition-colors">Privacy Policy</Link>
        </nav>
        <div className="flex justify-center gap-6 mt-6">
          <Twitter className="h-5 w-5 text-[#BBE1FA] hover:text-[#3282B8] transition-colors cursor-pointer" />
          <Instagram className="h-5 w-5 text-[#BBE1FA] hover:text-[#3282B8] transition-colors cursor-pointer" />
          <Linkedin className="h-5 w-5 text-[#BBE1FA] hover:text-[#3282B8] transition-colors cursor-pointer" />
          <Mail className="h-5 w-5 text-[#BBE1FA] hover:text-[#3282B8] transition-colors cursor-pointer" />
          <Youtube className="h-5 w-5 text-[#BBE1FA] hover:text-[#3282B8] transition-colors cursor-pointer" />
        </div>
        <p className="mt-6 text-[#BBE1FA]/60">
          &copy; 2024 QuotaDoctor. All rights reserved.
          <br />
          <Link
            className="hover:text-[#3282B8] transition-all"
            href="https:zama.framer.ai"
          >
            Built with care
          </Link>
        </p>
      </div>
    </footer>
  );
};
