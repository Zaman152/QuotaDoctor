"use client";
import { Mail, Linkedin, Instagram, ArrowUpRight, Phone, Facebook } from 'lucide-react';
import { motion } from 'framer-motion';

export default function About() {
    return (
        <section id="about" className="py-32 px-4 relative">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                {/* Left: The Manifesto */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <span className="text-[#3282B8] font-semibold tracking-widest text-sm uppercase mb-6 block">Who We Are</span>
                    <h2 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-[0.9] tracking-tighter">
                        We Fix The <br />
                        <span className="text-white/30">System.</span>
                    </h2>
                    <div className="space-y-6 text-lg text-[#BBE1FA]/70 leading-relaxed font-light">
                        <p>
                            Most sales teams aren't failing because of effort. They're failing because of friction.
                            Broken feedback loops, invisible performance gaps, and coaching that never happens.
                        </p>
                        <p>
                            <span className="text-white font-medium">QuotaDoctor</span> isn't just a consultancy. It's a surgical intervention for your revenue engine.
                            We install the infrastructure that turns "hope" into "predictable scale."
                        </p>
                    </div>

                    <div className="mt-10 flex gap-6">
                        <div className="flex flex-col">
                            <span className="text-4xl font-bold text-white">2024</span>
                            <span className="text-sm text-[#BBE1FA]/50 uppercase tracking-widest">Founded</span>
                        </div>
                        <div className="w-px h-12 bg-white/10" />
                        <div className="flex flex-col">
                            <span className="text-4xl font-bold text-white">Denver</span>
                            <span className="text-sm text-[#BBE1FA]/50 uppercase tracking-widest">HQ</span>
                        </div>
                    </div>
                </motion.div>

                {/* Right: Command Center Card */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    className="relative bg-[#0F4C75]/10 backdrop-blur-3xl rounded-[2rem] border border-[#3282B8]/20 p-8 md:p-12 overflow-hidden group"
                >
                    <div className="absolute inset-0 bg-gradient-to-br from-[#3282B8]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    <h3 className="text-2xl font-bold text-white mb-8">Direct Line</h3>

                    <div className="space-y-4 relative z-10">
                        {/* Email */}
                        <a href="mailto:info@quotadoctor.com" className="flex items-center justify-between p-4 rounded-xl bg-white/5 border border-white/5 hover:bg-[#3282B8] hover:border-[#3282B8] transition-all group/item">
                            <div className="flex items-center gap-4">
                                <div className="p-2 bg-white/10 rounded-lg"><Mail className="w-5 h-5 text-white" /></div>
                                <div>
                                    <p className="text-xs text-white/50 group-hover/item:text-white/80 uppercase tracking-wider">Email Us</p>
                                    <p className="text-white font-medium">info@quotadoctor.com</p>
                                </div>
                            </div>
                            <ArrowUpRight className="w-5 h-5 text-white/30 group-hover/item:text-white" />
                        </a>

                        {/* Phone - Added Back */}
                        <a href="tel:17204651809" className="flex items-center justify-between p-4 rounded-xl bg-white/5 border border-white/5 hover:bg-[#3282B8] hover:border-[#3282B8] transition-all group/item">
                            <div className="flex items-center gap-4">
                                <div className="p-2 bg-white/10 rounded-lg"><Phone className="w-5 h-5 text-white" /></div>
                                <div>
                                    <p className="text-xs text-white/50 group-hover/item:text-white/80 uppercase tracking-wider">Call Us</p>
                                    <p className="text-white font-medium">1-720-465-1809</p>
                                </div>
                            </div>
                            <ArrowUpRight className="w-5 h-5 text-white/30 group-hover/item:text-white" />
                        </a>


                        <div className="grid grid-cols-3 gap-4">
                            <a href="https://linkedin.com/in/david-thompson-720" target="_blank" className="p-4 rounded-xl bg-white/5 border border-white/5 hover:bg-[#0077b5] hover:border-[#0077b5] transition-all flex flex-col items-center gap-3 text-center group/social">
                                <Linkedin className="w-6 h-6 text-white/70 group-hover/social:text-white" />
                                <span className="text-sm text-white font-medium">LinkedIn</span>
                            </a>
                            <a href="https://www.instagram.com/quotadoctorai/" target="_blank" className="p-4 rounded-xl bg-white/5 border border-white/5 hover:bg-[#E1306C] hover:border-[#E1306C] transition-all flex flex-col items-center gap-3 text-center group/social">
                                <Instagram className="w-6 h-6 text-white/70 group-hover/social:text-white" />
                                <span className="text-sm text-white font-medium">Instagram</span>
                            </a>
                            <a href="https://www.facebook.com/profile.php?id=61585199853574" target="_blank" className="p-4 rounded-xl bg-white/5 border border-white/5 hover:bg-[#1877F2] hover:border-[#1877F2] transition-all flex flex-col items-center gap-3 text-center group/social">
                                <Facebook className="w-6 h-6 text-white/70 group-hover/social:text-white" />
                                <span className="text-sm text-white font-medium">Facebook</span>
                            </a>
                        </div>
                    </div>
                </motion.div>
            </div >
        </section >
    );
}