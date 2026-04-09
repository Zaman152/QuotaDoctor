"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Linkedin, Instagram, Facebook } from "lucide-react";
import MagneticButton from "@/components/ui/MagneticButton";
import Link from "next/link";

const CALENDLY = "https://calendly.com/quotadoctor/15";

export default function ContactForm({
  hideHeader = false,
  hideSidebar = false,
  pyClass = "py-32",
}: {
  hideHeader?: boolean;
  hideSidebar?: boolean;
  pyClass?: string;
} = {}) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    business: "",
    challenge: "",
  });
  const [smsConsent, setSmsConsent] = useState(false);
  const [termsConsent, setTermsConsent] = useState(false);
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
    await new Promise((r) => setTimeout(r, 800));
    setLoading(false);
    setSubmitted(true);
  };

  const inputClass =
    "w-full glass-card border border-white/60 focus:border-[#4AACDE] focus:bg-white/60 text-[#0A2F4C] placeholder:text-[#0A2F4C]/40 py-4 px-6 text-base md:text-lg font-bold rounded-[2rem] outline-none transition-all duration-300 shadow-md focus:shadow-xl focus:-translate-y-1";

  return (
    <section id="contact" className={`${pyClass} relative overflow-hidden`}>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {!hideHeader && (
          <div className="text-center mb-20">
          <motion.h2
            className="text-4xl md:text-5xl lg:text-6xl font-black text-[#0A2F4C] leading-[1.1] tracking-tighter uppercase"
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, type: "spring", bounce: 0.6 }}
          >
            LET&apos;S <br />
            <span className="font-playfair italic font-medium capitalize text-[#4AACDE] tracking-normal">Chat.</span>
          </motion.h2>
          <motion.p
            className="text-lg md:text-xl text-[#6B7280] mt-4 font-medium"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, delay: 0.1, type: "spring", bounce: 0.5 }}
          >
            Fill out the form below and Dave will reach out within 24 hours.
          </motion.p>
        </div>
        )}

        <div className={`grid grid-cols-1 ${hideSidebar ? 'gap-0' : 'lg:grid-cols-12 gap-16 lg:gap-24'}`}>
          {/* Form */}
          <motion.div
            className={hideSidebar ? "w-full" : "lg:col-span-8"}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2, type: "spring", bounce: 0.4 }}
          >
            {submitted ? (
              <div className="glass-card p-16 rounded-[3rem] text-center">
                <h3 className="text-[#0A2F4C] text-3xl font-black tracking-tight mb-4">
                  All Set!
                </h3>
                <p className="text-[#6B7280] text-xl font-medium">
                  We got your message. Dave will message you shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                <motion.div whileHover={{ scale: 1.02 }} transition={{ type: "spring", bounce: 0.5 }}>
                  <input
                    id="contact-name"
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    className={inputClass}
                  />
                </motion.div>

                <motion.div whileHover={{ scale: 1.02 }} transition={{ type: "spring", bounce: 0.5 }}>
                  <input
                    id="contact-phone"
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Your Phone Number"
                    className={inputClass}
                  />
                </motion.div>

                <motion.div whileHover={{ scale: 1.02 }} transition={{ type: "spring", bounce: 0.5 }}>
                  <input
                    id="contact-business"
                    type="text"
                    name="business"
                    required
                    value={formData.business}
                    onChange={handleChange}
                    placeholder="Your Business Name"
                    className={inputClass}
                  />
                </motion.div>
                
                <motion.div whileHover={{ scale: 1.02 }} transition={{ type: "spring", bounce: 0.5 }}>
                  <textarea
                    id="contact-challenge"
                    name="challenge"
                    rows={4}
                    value={formData.challenge}
                    onChange={handleChange}
                    placeholder="How can we help you?"
                    className={`${inputClass} resize-none rounded-[3rem]`}
                  />
                </motion.div>

                {/* Consents */}
                <div className="space-y-4">
                  {/* SMS Consent */}
                  <div className="glass-card border border-white/60 rounded-[2rem] px-8 py-6">
                    <label className="flex items-start gap-4 cursor-pointer group">
                      <div className="relative mt-0.5 shrink-0">
                        <input
                          type="checkbox"
                          id="sms-consent"
                          checked={smsConsent}
                          onChange={(e) => setSmsConsent(e.target.checked)}
                          className="sr-only"
                        />
                        <div
                          className={`w-6 h-6 rounded-md border-2 flex items-center justify-center transition-all duration-200 ${
                            smsConsent
                              ? "bg-[#0A2F4C] border-[#0A2F4C]"
                              : "bg-white border-[#0A2F4C]/30 group-hover:border-[#4AACDE]"
                          }`}
                          onClick={() => setSmsConsent((v) => !v)}
                        >
                          {smsConsent && (
                            <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                            </svg>
                          )}
                        </div>
                      </div>
                      <span className="text-sm text-[#6B7280] leading-relaxed" onClick={() => setSmsConsent((v) => !v)}>
                        I agree to receive SMS messages from QuotaDoctor at the phone number provided. Message frequency varies. Message and data rates may apply. Reply STOP to cancel, HELP for help. Consent is not a condition of purchase.
                      </span>
                    </label>
                  </div>

                  {/* Terms Consent */}
                  <div className="glass-card border border-white/60 rounded-[2rem] px-8 py-6">
                    <label className="flex items-start gap-4 cursor-pointer group">
                      <div className="relative mt-0.5 shrink-0">
                        <input
                          type="checkbox"
                          id="terms-consent"
                          checked={termsConsent}
                          onChange={(e) => setTermsConsent(e.target.checked)}
                          className="sr-only"
                        />
                        <div
                          className={`w-6 h-6 rounded-md border-2 flex items-center justify-center transition-all duration-200 ${
                            termsConsent
                              ? "bg-[#0A2F4C] border-[#0A2F4C]"
                              : "bg-white border-[#0A2F4C]/30 group-hover:border-[#4AACDE]"
                          }`}
                          onClick={() => setTermsConsent((v) => !v)}
                        >
                          {termsConsent && (
                            <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                            </svg>
                          )}
                        </div>
                      </div>
                      <span className="text-sm text-[#6B7280] leading-relaxed" onClick={() => setTermsConsent((v) => !v)}>
                        I agree to the{" "}
                        <Link href="/privacy-policy" className="text-[#4AACDE] underline hover:text-[#0A2F4C] transition-colors" onClick={(e) => e.stopPropagation()}>
                          Privacy Policy
                        </Link>{" "}
                        and{" "}
                        <Link href="/terms" className="text-[#4AACDE] underline hover:text-[#0A2F4C] transition-colors" onClick={(e) => e.stopPropagation()}>
                          Terms of Service
                        </Link>
                        .
                      </span>
                    </label>
                  </div>
                </div>

                <div className="pt-4">
                  <MagneticButton>
                    <button
                      id="contact-submit"
                      type="submit"
                      disabled={loading}
                      className="w-full glass-card-dark border-[#0A2F4C]/20 border-2 text-[#0A2F4C] hover:bg-white px-6 py-4 rounded-full text-lg font-black transition-all duration-300 shadow-xl hover:scale-105 disabled:opacity-50"
                    >
                      {loading ? "Sending..." : "Send Message"}
                    </button>
                  </MagneticButton>
                </div>
              </form>
            )}
          </motion.div>

          {/* Contact details */}
          {!hideSidebar && (
            <motion.div
            className="lg:col-span-4 flex flex-col gap-12"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.3, type: "spring", bounce: 0.5 }}
          >
            <div className="glass-card p-10 flex flex-col gap-8 rounded-[3rem] shadow-2xl">
              
              <div>
                <h4 className="text-xl font-black text-[#0A2F4C] mb-6">Reach Out Directly</h4>
                <div className="space-y-6">
                  <a
                    href="tel:7204651809"
                    className="flex items-center gap-4 text-[#6B7280] hover:text-[#0A2F4C] transition-colors"
                  >
                    <div className="w-12 h-12 bg-white rounded-full flex justify-center items-center shadow-md">
                      <Phone size={24} className="text-[#4AACDE]" />
                    </div>
                    <span className="text-xl font-bold">720.465.1809</span>
                  </a>
                  <a
                    href="mailto:Dave@quotadoctor.ai"
                    className="flex items-center gap-4 text-[#6B7280] hover:text-[#0A2F4C] transition-colors"
                  >
                    <div className="w-12 h-12 bg-white rounded-full flex justify-center items-center shadow-md">
                      <Mail size={24} className="text-[#4AACDE]" />
                    </div>
                    <span className="text-xl font-bold">Dave@quotadoctor.ai</span>
                  </a>
                  <div className="flex items-center gap-4 text-[#6B7280]">
                    <div className="w-12 h-12 bg-white rounded-full flex justify-center items-center shadow-md">
                      <MapPin size={24} className="text-[#4AACDE]" />
                    </div>
                    <span className="text-xl font-bold">Denver, CO</span>
                  </div>
                </div>
              </div>

              <div className="w-full h-px bg-[#0A2F4C]/10" />

              <div>
                <h4 className="text-xl font-black text-[#0A2F4C] mb-6">Socials</h4>
                <div className="flex gap-4">
                  {[
                    { href: "https://linkedin.com/in/david-thompson-720", icon: Linkedin, label: "LinkedIn" },
                    { href: "https://instagram.com/quotadoctorai/", icon: Instagram, label: "Instagram" },
                    { href: "https://facebook.com/profile.php?id=61585199853574", icon: Facebook, label: "Facebook" },
                  ].map(({ href, icon: Icon, label }) => (
                    <motion.a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={label}
                      className="w-16 h-16 glass-card border border-white flex items-center justify-center text-[#0A2F4C] transition-all rounded-full shadow-lg hover:bg-white hover:scale-110"
                      whileHover={{ y: -5 }}
                      transition={{ type: "spring", bounce: 0.6 }}
                    >
                      <Icon size={24} />
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
