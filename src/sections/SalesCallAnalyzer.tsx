'use client';

import { motion } from 'framer-motion';
import { Terminal, ArrowRight, Mic } from 'lucide-react';

export const SalesCallAnalyzer = () => {
    return (
        <section id="analyzer" className="relative py-24 bg-[#050505] overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent,rgba(5,5,5,1))] z-10 pointer-events-none" />
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#3282B8]/10 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#0F4C75]/10 rounded-full blur-[120px] pointer-events-none" />

            <div className="container relative z-20 px-4 md:px-6">

                {/* Section Header */}
                <div className="mb-12 md:text-center max-w-3xl mx-auto">
                    <motion.span
                        initial={{ opacity: 0, y: -10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="flex items-center justify-center gap-2 text-[#3282B8] font-mono text-sm tracking-wider mb-4"
                    >
                        <Terminal className="w-4 h-4" />
                        INTELLIGENCE_TOOL
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-6xl font-bold text-white tracking-tighter mb-6"
                    >
                        Sales Call <span className="text-[#3282B8]">Analyzer</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-[#BBE1FA]/60 text-lg leading-relaxed mb-8"
                    >
                        Get detailed analysis of your sales calls with AI-powered insights. Upload your call data to receive instant feedback on performance, objection handling, and closing techniques.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="flex justify-center"
                    >
                        <a
                            href="https://leadlockerai.app.n8n.cloud/form/c3176ff1-1a1b-4824-b9ae-1694ed78e645"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group relative inline-flex h-14 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-[#3282B8] focus:ring-offset-2 focus:ring-offset-slate-50"
                        >
                            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-[#0A0A0F] px-8 py-1 text-lg font-medium text-white backdrop-blur-3xl transition-colors group-hover:bg-[#16213E] gap-2">
                                <Mic className="w-5 h-5 text-[#3282B8]" />
                                Analyze Call Now
                                <ArrowRight className="ml-1 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                            </span>
                        </a>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
