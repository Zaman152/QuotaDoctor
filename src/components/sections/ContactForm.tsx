"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Linkedin, Instagram, Facebook, CheckCircle2 } from "lucide-react";
import SectionLabel from "@/components/ui/SectionLabel";

const CALENDLY = "https://calendly.com/quotadoctor/30min";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    business: "",
    challenge: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate async submission — wire up to Netlify/Vercel forms or API later
    await new Promise((r) => setTimeout(r, 800));
    setLoading(false);
    setSubmitted(true);
  };

  const inputClass =
    "w-full bg-transparent border-b border-white/30 focus:border-white/80 text-white placeholder:text-white/40 py-3 text-base outline-none transition-colors duration-200";

  return (
    <section id="contact" className="bg-[#0A2F4C] py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <SectionLabel className="bg-white/10 text-white border-0">
              LET&apos;S TALK
            </SectionLabel>
          </motion.div>
          <motion.h2
            className="text-[28px] md:text-[40px] font-bold text-white leading-tight mt-1"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
          >
            Tell Us About Your Business.
          </motion.h2>
          <motion.p
            className="text-white/60 mt-3 text-base"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: 0.15, ease: "easeOut" }}
          >
            We&apos;ll reach out within 2 hours.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-12 md:gap-16">
          {/* Form — spans 3 of 5 cols */}
          <motion.div
            className="md:col-span-3"
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            {submitted ? (
              <div className="flex flex-col items-center justify-center py-16 text-center">
                <CheckCircle2 size={52} className="text-[#4AACDE] mb-4" />
                <h3 className="text-white text-2xl font-bold mb-2">
                  Thanks! We&apos;ll be in touch within 2 hours.
                </h3>
                <p className="text-white/60">
                  Keep an eye on your phone — Dave will reach out shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="text-white/50 text-xs uppercase tracking-wider block mb-1">
                      Your Name
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Smith"
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label className="text-white/50 text-xs uppercase tracking-wider block mb-1">
                      Phone Number
                    </label>
                    <input
                      id="contact-phone"
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="(555) 000-0000"
                      className={inputClass}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="text-white/50 text-xs uppercase tracking-wider block mb-1">
                      Email Address
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@company.com"
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label className="text-white/50 text-xs uppercase tracking-wider block mb-1">
                      Business Name
                    </label>
                    <input
                      id="contact-business"
                      type="text"
                      name="business"
                      required
                      value={formData.business}
                      onChange={handleChange}
                      placeholder="Smith Plumbing Co."
                      className={inputClass}
                    />
                  </div>
                </div>

                <div>
                  <label className="text-white/50 text-xs uppercase tracking-wider block mb-1">
                    What&apos;s your biggest challenge right now?
                  </label>
                  <textarea
                    id="contact-challenge"
                    name="challenge"
                    rows={4}
                    value={formData.challenge}
                    onChange={handleChange}
                    placeholder="Tell us what you're struggling with..."
                    className={`${inputClass} resize-none`}
                  />
                </div>

                <div className="flex flex-col sm:flex-row gap-4 pt-2">
                  <button
                    id="contact-submit"
                    type="submit"
                    disabled={loading}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white text-[#0A2F4C] hover:bg-[#F7F9FB] font-semibold px-8 py-4 rounded-lg text-base transition-all duration-200 shadow-md disabled:opacity-60"
                  >
                    {loading ? "Sending..." : "Send Message"}
                  </button>
                </div>

                <p className="text-white/40 text-sm">
                  Or skip the form and book directly:{" "}
                  <a
                    href={CALENDLY}
                    target="_blank"
                    rel="noopener noreferrer"
                    id="contact-calendly-link"
                    className="text-[#4AACDE] hover:text-white underline transition-colors"
                  >
                    Book Your Free Strategy Call →
                  </a>
                </p>
              </form>
            )}
          </motion.div>

          {/* Contact details — 2 of 5 cols */}
          <motion.div
            className="md:col-span-2 flex flex-col gap-6"
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="space-y-5">
              <a
                href="mailto:Dave@quotadoctor.ai"
                className="flex items-center gap-3 text-white/70 hover:text-white transition-colors group"
              >
                <div className="w-10 h-10 rounded-xl bg-white/10 group-hover:bg-[#4AACDE] flex items-center justify-center transition-colors">
                  <Mail size={16} />
                </div>
                <span className="text-sm">Dave@quotadoctor.ai</span>
              </a>
              <a
                href="tel:7204651809"
                className="flex items-center gap-3 text-white/70 hover:text-white transition-colors group"
              >
                <div className="w-10 h-10 rounded-xl bg-white/10 group-hover:bg-[#4AACDE] flex items-center justify-center transition-colors">
                  <Phone size={16} />
                </div>
                <span className="text-sm">720-465-1809</span>
              </a>
              <div className="flex items-center gap-3 text-white/70">
                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
                  <MapPin size={16} />
                </div>
                <span className="text-sm">Denver, CO</span>
              </div>
            </div>

            <div className="pt-4 border-t border-white/10">
              <p className="text-white/40 text-xs uppercase tracking-wider mb-3">
                Find us online
              </p>
              <div className="flex items-center gap-3">
                {[
                  {
                    href: "https://linkedin.com/in/david-thompson-720",
                    icon: Linkedin,
                    label: "LinkedIn",
                  },
                  {
                    href: "https://instagram.com/quotadoctorai/",
                    icon: Instagram,
                    label: "Instagram",
                  },
                  {
                    href: "https://facebook.com/profile.php?id=61585199853574",
                    icon: Facebook,
                    label: "Facebook",
                  },
                ].map(({ href, icon: Icon, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="w-10 h-10 rounded-xl bg-white/10 hover:bg-[#4AACDE] flex items-center justify-center transition-all duration-200 text-white"
                  >
                    <Icon size={16} />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
