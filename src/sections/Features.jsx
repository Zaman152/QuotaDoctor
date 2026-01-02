"use client";
import { TrendingUp, Brain, BarChart3, Phone, Edit, CalendarCheck } from 'lucide-react';
import { motion } from "framer-motion";

export default function Features() {
    const features = [
        {
            icon: <Phone className="w-8 h-8" />,
            title: 'Data-Driven Coaching',
            description: 'AI-powered analyzer scores every call. No more guessing.',
            colSpan: "col-span-1 md:col-span-2 lg:col-span-2",
            bg: "bg-gradient-to-br from-[#0F4C75]/40 to-[#0A0A0F]"
        },
        {
            icon: <TrendingUp className="w-8 h-8" />,
            title: 'Fractional VP Sales',
            description: 'Executive leadership for a fraction of the cost.',
            colSpan: "col-span-1",
            bg: "bg-[#0A0A0F]"
        },
        {
            icon: <Brain className="w-8 h-8" />,
            title: 'AI-First Systems',
            description: 'We build the stack that scales your revenue automatically.',
            colSpan: "col-span-1",
            bg: "bg-[#0A0A0F]"
        },
        {
            icon: <Edit className="w-8 h-8" />,
            title: 'Custom Playbooks',
            description: 'Scripts & processes tailored to your exact market.',
            colSpan: "col-span-1 md:col-span-2 lg:col-span-2",
            bg: "bg-gradient-to-br from-[#3282B8]/20 to-[#0A0A0F]"
        },
    ];

    return (
        <section id="features" className="py-32 px-4 relative overflow-hidden">
            <div className="max-w-7xl mx-auto">

                {/* Section Header */}
                <div className="mb-20 text-center">
                    <motion.span
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="text-[#3282B8] font-semibold tracking-widest text-sm uppercase mb-4 block"
                    >
                        The Advantage
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-6xl font-bold text-white tracking-tight"
                    >
                        Built for <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3282B8] to-[#BBE1FA]">Scale.</span>
                    </motion.h2>
                </div>

                {/* Bento Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">
                    {features.map((item, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            whileHover={{ scale: 1.02 }}
                            className={`p-8 rounded-3xl border border-white/10 ${item.bg} backdrop-blur-md flex flex-col justify-between group hover:border-[#3282B8]/50 transition-colors ${item.colSpan}`}
                        >
                            <div className="w-16 h-16 rounded-2xl bg-[#3282B8]/10 flex items-center justify-center text-[#3282B8] group-hover:bg-[#3282B8] group-hover:text-white transition-all duration-300">
                                {item.icon}
                            </div>

                            <div>
                                <h3 className="text-2xl font-bold text-white mb-2">{item.title}</h3>
                                <p className="text-[#BBE1FA]/60 text-lg leading-relaxed">{item.description}</p>
                            </div>
                        </motion.div>
                    ))}

                    {/* Stat Card */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        whileHover={{ scale: 1.02 }}
                        className="col-span-1 md:col-span-1 bg-[#3282B8] rounded-3xl p-8 flex flex-col justify-center items-center text-center relative overflow-hidden"
                    >
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.2),transparent_60%)]" />
                        <h4 className="text-6xl font-bold text-white mb-2 relative z-10">3x</h4>
                        <p className="text-white/80 font-medium relative z-10">Faster ramp time for new reps using our systems</p>
                    </motion.div>
                </div>

                {/* Bottom CTA */}
                <div className="mt-24 text-center">
                    <a href="https://calendly.com/quotadoctor/15min" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-all text-white font-medium group">
                        <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                        Schedule your diagnosis
                    </a>
                </div>
            </div>
        </section>
    );
}