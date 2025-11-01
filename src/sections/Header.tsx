import { ArrowRight, Menu } from "lucide-react";

export const Header = () => {
  return (
    <header className="sticky top-0 backdrop-blur-lg z-20 bg-[#0A0A0F]/95">
      <div className="flex justify-center items-center py-3 bg-[#0A0A0F] text-white text-sm gap-3">
        <p className="text-[#BBE1FA] hidden md:block" aria-label="Company motto banner">
          Fix the System, Elevate the Reps, Scale the Revenue
        </p>
        <div className="inline-flex gap-1 items-center">
          <p>Start with a free strategy call</p>
          <ArrowRight className="h-4 w-4 inline-flex justify-center items-center" />
        </div>
      </div>

      <div className="py-5 bg-[#0A0A0F]">
        <div className="container">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="text-2xl font-bold text-white">QuotaDoctor</span>
            </div>
            <Menu className="h-6 w-6 md:hidden text-white" />

            <nav className="hidden md:flex gap-6 text-[#BBE1FA] items-center">
              <a href="#about" className="hover:text-[#3282B8] transition-colors">About</a>
              <a href="#services" className="hover:text-[#3282B8] transition-colors">Services</a>
              <a href="#features" className="hover:text-[#3282B8] transition-colors">Features</a>
              <a href="#pricing" className="hover:text-[#3282B8] transition-colors">Pricing</a>
              <a href="#contact" className="hover:text-[#3282B8] transition-colors">Contact</a>
              <a href="https://calendly.com/quotadoctor/30min" target="_blank" rel="noopener noreferrer" className="btn btn-primary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#3282B8]">
                Book a Strategy Call
              </a>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};
