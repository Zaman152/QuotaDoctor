"use client";
import { Phone, TrendingUp, Mic, FileText, Calendar, Clock, Edit, BarChart3, Save, CalendarCheck, Brain } from 'lucide-react';

export default function Features() {
    const products = [
        {
            icon: <TrendingUp className="w-6 h-6" />,
            title: 'Fractional Expertise',
            description: 'Executive sales leadership and strategy without the full-time salary and overhead'
        },
        {
            icon: <Brain className="w-6 h-6" />,
            title: 'AI-First Methodology',
            description: 'We build and use cutting-edge AI tools to ensure scalable, data-driven results'
        },
        {
            icon: <BarChart3 className="w-6 h-6" />,
            title: 'Proven ROI',
            description: 'Predictable revenue, reduced sales cycle time, and clear return on investment'
        }
    ];

    const features = [
        {
            icon: <Phone className="w-6 h-6" />,
            title: 'Data-Driven Coaching',
            description: 'AI-powered call analysis and rep performance tracking for continuous improvement'
        },
        {
            icon: <Edit className="w-6 h-6" />,
            title: 'Custom Playbooks',
            description: 'Tailored sales processes, scripts, and messaging aligned to your market'
        },
        {
            icon: <CalendarCheck className="w-6 h-6" />,
            title: 'Revenue Intelligence',
            description: 'Real-time dashboards and reporting to monitor pipeline health and forecast accuracy'
        }
    ];

    return (
        <div id="features" className="min-h-screen py-24 px-4 relative overflow-hidden bg-[#0A0A0F]">
            <div className="pointer-events-none absolute -top-32 -left-24 w-80 h-80 rounded-full" style={{background:"radial-gradient(closest-side, rgba(50,130,184,0.25), transparent)"}} aria-hidden="true" />
            <div className="pointer-events-none absolute -bottom-40 -right-24 w-96 h-96 rounded-full" style={{background:"radial-gradient(closest-side, rgba(15,76,117,0.20), transparent)"}} aria-hidden="true" />
            <div className="max-w-7xl mx-auto">

                {/* Header */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-[#3282B8] to-[#0F4C75] rounded-2xl mb-6 transform hover:scale-110 transition-transform duration-300">
                        <span className="text-4xl">🤖</span>
                    </div>
                    <h1 className="text-5xl md:text-6xl font-extrabold section-title mb-6">
                        The QuotaDoctor Advantage
                    </h1>
                    <p className="text-xl text-[#BBE1FA] max-w-3xl mx-auto">
                        Sales optimization, fractional leadership, and AI-powered systems to compound win rates and scale predictable revenue.
                    </p>
                </div>

                {/* Two Column Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

                    {/* Products & Services */}
                    <div className="bg-[#16213E] backdrop-blur-2xl rounded-3xl p-8 border border-[#0F4C75]/30 shadow-[0_10px_30px_rgba(2,6,23,0.30)]">
                        <div className="flex items-center mb-8">
                            <span className="text-3xl mr-3">📦</span>
                            <h2 className="text-3xl font-bold text-white">Products & Services:</h2>
                        </div>

                        <div className="space-y-6">
                            {products.map((product, index) => (
                                <div
                                    key={index}
                                    className="bg-[#1A1A2E] rounded-xl p-6 border border-[#0F4C75]/30 hover:bg-[#16213E] hover:border-[#3282B8]/50 transition-all duration-300"
                                >
                                    <div className="flex items-start space-x-4">
                                        <div className="flex-shrink-0 p-3 bg-[#3282B8]/20 rounded-lg text-[#3282B8]">
                                            {product.icon}
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-bold text-white mb-2">
                                                {product.title}
                                            </h3>
                                            <p className="text-[#BBE1FA] leading-relaxed">
                                                {product.description}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Features */}
                    <div className="bg-[#16213E] backdrop-blur-2xl rounded-3xl p-8 border border-[#0F4C75]/30 shadow-[0_10px_30px_rgba(2,6,23,0.30)]">
                        <div className="flex items-center mb-8">
                            <span className="text-3xl mr-3">✨</span>
                            <h2 className="text-3xl font-bold text-white">Features:</h2>
                        </div>

                        <div className="space-y-6">
                            {features.map((feature, index) => (
                                <div
                                    key={index}
                                    className="bg-[#1A1A2E] rounded-xl p-6 border border-[#0F4C75]/30 hover:bg-[#16213E] hover:border-[#3282B8]/50 transition-all duration-300"
                                >
                                    <div className="flex items-start space-x-4">
                                        <div className="flex-shrink-0 p-3 bg-[#3282B8]/20 rounded-lg text-[#3282B8]">
                                            {feature.icon}
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-bold text-white mb-2">
                                                {feature.title}
                                            </h3>
                                            <p className="text-[#BBE1FA] leading-relaxed">
                                                {feature.description}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>

                {/* CTA Section */}
                <div className="mt-16 text-center rounded-3xl p-12 shadow-2xl border border-[#0F4C75]/30 bg-[#16213E] backdrop-blur-2xl">
                    <h3 className="text-3xl font-bold text-white mb-4">
                        Ready to Transform Your Sales Process?
                    </h3>
                    <p className="text-xl text-[#BBE1FA] mb-8">
                        Experience modern sales engineering with QuotaDoctor — fractional leadership, AI systems, and measurable revenue outcomes.
                    </p>
                    <button className="btn btn-primary px-8 py-4 rounded-xl font-bold" onClick={() => document.getElementById('contact')?.scrollIntoView({behavior:'smooth'})}>Contact Us</button>
                </div>

            </div>
        </div>
    );
}