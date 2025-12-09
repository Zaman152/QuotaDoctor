"use client";

import React from 'react';

export default function CommentForm() {
    return (
        <div id="contact" className="px-4 py-24 bg-[#0A0A0F]">
            <div className="max-w-3xl mx-auto">
                <div className="text-center mb-8">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#0F4C75] bg-[#16213E] text-[#3282B8] text-sm font-medium backdrop-blur-xl">
                        <span className="h-2 w-2 rounded-full bg-[#3282B8]" aria-hidden="true" />
                        Contact
                    </div>
                    <h2 className="section-title mt-4">Partner with QuotaDoctor</h2>
                    <p className="section-description mt-4">We'd love to hear from you. Tell us a bit about your sales challenges.</p>
                </div>

                <div className="p-[1px] rounded-2xl" style={{background:"linear-gradient(135deg, rgba(50,130,184,0.35), rgba(15,76,117,0.35))"}}>
                    <div className="rounded-2xl bg-[#16213E] backdrop-blur-2xl border border-[#0F4C75]/30 p-8 shadow-[0_10px_30px_rgba(2,6,23,0.30)]">
                        <form className="space-y-5" onSubmit={(e) => { e.preventDefault(); alert('Thanks — we\'ll follow up to schedule your AI strategy session.'); }}>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <input
                                    type="text"
                                    name="name"
                                    required
                                    className="w-full rounded-xl bg-[#1A1A2E] border border-[#0F4C75]/30 text-white placeholder-[#BBE1FA]/50 p-4 focus:outline-none focus:ring-2 focus:ring-[#3282B8]"
                                    placeholder="Name *"
                                    aria-label="Name"
                                />
                                <input
                                    type="email"
                                    name="email"
                                    required
                                    className="w-full rounded-xl bg-[#1A1A2E] border border-[#0F4C75]/30 text-white placeholder-[#BBE1FA]/50 p-4 focus:outline-none focus:ring-2 focus:ring-[#3282B8]"
                                    placeholder="Email *"
                                    aria-label="Email"
                                />
                            </div>

                            <input
                                type="text"
                                name="company"
                                className="w-full rounded-xl bg-[#1A1A2E] border border-[#0F4C75]/30 text-white placeholder-[#BBE1FA]/50 p-4 focus:outline-none focus:ring-2 focus:ring-[#3282B8]"
                                placeholder="Company"
                                aria-label="Company"
                            />

                            <select name="arr" className="w-full rounded-xl bg-[#1A1A2E] border border-[#0F4C75]/30 text-white p-4 focus:outline-none focus:ring-2 focus:ring-[#3282B8]">
                                <option value="<500k">ARR &lt; $500K</option>
                                <option value="500k-1m">$500K - $1M</option>
                                <option value="1m-5m">$1M - $5M</option>
                                <option value="5m-10m">$5M - $10M</option>
                                <option value=">10m">$10M+</option>
                            </select>

                            <textarea
                                className="w-full rounded-xl bg-[#1A1A2E] border border-[#0F4C75]/30 text-white placeholder-[#BBE1FA]/50 p-4 focus:outline-none focus:ring-2 focus:ring-[#3282B8] min-h-[150px]"
                                placeholder="Message (Describe your sales challenges)"
                                name="message"
                                required
                            />

                            <div className="flex gap-3">
                                <button type="submit" className="btn btn-primary w-full py-3 rounded-xl font-semibold">Book Your AI Strategy Session</button>
                                <a href="https://calendly.com/quotadoctor/15min" target="_blank" rel="noopener noreferrer" className="btn btn-text w-full py-3 rounded-xl text-center">Book Your AI Strategy Session</a>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
