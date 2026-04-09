"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Terminal, Send } from 'lucide-react';

export default function Contact() {
    const [focusedField, setFocusedField] = useState(null);

    return (
        <section id="contact" className="py-32 bg-[#050505] relative px-4">
            <div className="max-w-2xl mx-auto">
                <div className="mb-12">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="flex items-center gap-2 text-[#3282B8] font-mono text-sm tracking-widest mb-4"
                    >
                        <Terminal className="w-4 h-4" />
                        SECURE_UPLINK
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-5xl font-bold text-white mb-4"
                    >
                        Initialize <span className="text-[#3282B8]">Partnership.</span>
                    </motion.h2>
                    <p className="text-[#BBE1FA]/60 text-lg">Direct line to our systems architecture team.</p>
                </div>

                <form className="space-y-8" onSubmit={(e) => {
                    e.preventDefault();
                    const formData = new FormData(e.currentTarget);
                    const payload = Object.fromEntries(formData.entries());
                    console.log("Submitting payload:", payload);
                    // This is where you'd send 'payload' to your webhook
                    alert('Transmission received. Audit request logged.');
                }}>

                    <div className="grid md:grid-cols-2 gap-8">
                        <InputGroup label="IDENTIFIER_NAME" name="name" placeholder="Enter full name" active={focusedField === 'name'} onFocus={() => setFocusedField('name')} onBlur={() => setFocusedField(null)} />
                        <InputGroup label="CONTACT_EMAIL" name="email" type="email" placeholder="name@company.com" active={focusedField === 'email'} onFocus={() => setFocusedField('email')} onBlur={() => setFocusedField(null)} />
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        <InputGroup label="PHONE_NUMBER" name="phone" type="tel" placeholder="+1 (555) 000-0000" active={focusedField === 'phone'} onFocus={() => setFocusedField('phone')} onBlur={() => setFocusedField(null)} />
                        <InputGroup label="ORGANIZATION" name="company" placeholder="Company designation" active={focusedField === 'company'} onFocus={() => setFocusedField('company')} onBlur={() => setFocusedField(null)} />
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="relative">
                            <label className="block text-xs font-mono text-[#3282B8] mb-2 tracking-widest uppercase">CURRENT_REVENUE</label>
                            <select
                                name="arr"
                                className="w-full bg-transparent border-b border-white/10 py-3 text-white focus:outline-none focus:border-[#3282B8] transition-colors appearance-none rounded-none"
                                onFocus={() => setFocusedField('arr')}
                                onBlur={() => setFocusedField(null)}
                            >
                                <option value="" className="bg-[#0A0A0F] text-gray-500">Select Range</option>
                                <option value="<500k" className="bg-[#0A0A0F]">ARR &lt; $500K</option>
                                <option value="500k-1m" className="bg-[#0A0A0F]">$500K - $1M</option>
                                <option value="1m-5m" className="bg-[#0A0A0F]">$1M - $5M</option>
                                <option value="5m-10m" className="bg-[#0A0A0F]">$5M - $10M</option>
                                <option value=">10m" className="bg-[#0A0A0F]">$10M+</option>
                            </select>
                        </div>
                    </div>

                    <div>
                        <InputGroup label="MISSION_PARAMETERS" name="message" textArea placeholder="Describe operational challenges..." active={focusedField === 'message'} onFocus={() => setFocusedField('message')} onBlur={() => setFocusedField(null)} />
                    </div>

                    {/* Consent Checkboxes */}
                    <div className="space-y-4 pt-2">
                        <label className="flex items-start gap-3 cursor-pointer group">
                            <input
                                type="checkbox"
                                name="sms_consent"
                                defaultChecked={false}
                                className="mt-1 w-4 h-4 flex-shrink-0 accent-[#3282B8] cursor-pointer"
                            />
                            <span className="text-xs text-white/50 leading-relaxed group-hover:text-white/70 transition-colors">
                                I agree to receive SMS messages from QuotaDoctor at the phone number provided. Message frequency varies. Message and data rates may apply. Reply STOP to cancel, HELP for help. Consent is not a condition of purchase.
                            </span>
                        </label>
                        <label className="flex items-start gap-3 cursor-pointer group">
                            <input
                                type="checkbox"
                                name="terms_consent"
                                defaultChecked={false}
                                className="mt-1 w-4 h-4 flex-shrink-0 accent-[#3282B8] cursor-pointer"
                            />
                            <span className="text-xs text-white/50 leading-relaxed group-hover:text-white/70 transition-colors">
                                I agree to the{' '}
                                <a href="/privacy-policy" className="text-[#3282B8] underline hover:text-[#5aaee8] transition-colors">Privacy Policy</a>
                                {' '}and{' '}
                                <a href="/terms" className="text-[#3282B8] underline hover:text-[#5aaee8] transition-colors">Terms of Service</a>.
                            </span>
                        </label>
                    </div>

                    <div className="pt-4">
                        <button type="submit" className="w-full md:w-auto group relative flex items-center justify-center gap-3 bg-[#3282B8] hover:bg-[#205a85] text-white px-8 py-4 rounded-xl font-bold transition-all shadow-[0_0_20px_rgba(50,130,184,0.3)] hover:shadow-[0_0_30px_rgba(50,130,184,0.5)]">
                            <Send className="w-4 h-4" />
                            <span>TRANSMIT REQUEST</span>
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </button>
                        <p className="mt-4 text-xs text-white/20 font-mono text-center md:text-left">
                            * Encrypted transmission. Response ETA: &lt; 2 hours.
                        </p>
                    </div>

                </form>
            </div>
        </section>
    );
}

function InputGroup({ label, name, type = "text", placeholder, active, onFocus, onBlur, textArea = false }) {
    return (
        <div className="relative">
            <label className={`block text-xs font-mono mb-2 tracking-widest uppercase transition-colors duration-300 ${active ? 'text-[#3282B8]' : 'text-white/40'}`}>
                {label}
            </label>
            {textArea ? (
                <textarea
                    name={name}
                    placeholder={placeholder}
                    rows={4}
                    className="w-full bg-transparent border-b border-white/10 py-3 text-white placeholder-white/20 focus:outline-none focus:border-[#3282B8] transition-colors resize-none rounded-none"
                    onFocus={onFocus}
                    onBlur={onBlur}
                    required
                />
            ) : (
                <input
                    type={type}
                    name={name}
                    placeholder={placeholder}
                    className="w-full bg-transparent border-b border-white/10 py-3 text-white placeholder-white/20 focus:outline-none focus:border-[#3282B8] transition-colors rounded-none"
                    onFocus={onFocus}
                    onBlur={onBlur}
                    required
                />
            )}
            <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: active ? 1 : 0 }}
                className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#3282B8] origin-left"
            />
        </div>
    )
}
