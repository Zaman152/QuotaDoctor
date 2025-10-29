"use client";
import { Phone, TrendingUp, Mic, FileText, Calendar, Clock, Edit, BarChart3, Save, CalendarCheck } from 'lucide-react';

export default function Features() {
    const products = [
        {
            icon: <Phone className="w-6 h-6" />,
            title: 'AI Sales Agent SaaS:',
            description: 'Voice-based assistant that handles cold and warm lead outreach autonomously.'
        },
        {
            icon: <TrendingUp className="w-6 h-6" />,
            title: 'Lead Campaign Management:',
            description: 'Set up and manage outbound call campaigns with built-in tracking and reporting.'
        },
        {
            icon: <Mic className="w-6 h-6" />,
            title: 'Voice Script Builder:',
            description: 'Create dynamic scripts to match industry tone, brand voice, and compliance needs.'
        },
        {
            icon: <FileText className="w-6 h-6" />,
            title: 'Live Call Logging:',
            description: 'View call details, access recordings, and analyze outcomes for performance insights.'
        },
        {
            icon: <Calendar className="w-6 h-6" />,
            title: 'Calendar Integration:',
            description: 'Real-time syncing with Google Calendar to avoid conflicts and improve scheduling efficiency.'
        }
    ];

    const features = [
        {
            icon: <Phone className="w-6 h-6" />,
            title: 'AI-driven outbound calls:',
            description: 'Automated voice agents handle lead outreach, qualify prospects, and schedule meetings without human reps.'
        },
        {
            icon: <Clock className="w-6 h-6" />,
            title: '24/7 availability:',
            description: 'Calls can be made any time of day, including weekends and off-hours.'
        },
        {
            icon: <Edit className="w-6 h-6" />,
            title: 'Custom script builder:',
            description: 'Businesses can create, update, and test voice scripts to reflect branding, tone, and compliance needs.'
        },
        {
            icon: <BarChart3 className="w-6 h-6" />,
            title: 'Dashboard with campaign insights:',
            description: 'Monitor calls, results, and outcomes with a centralized dashboard.'
        },
        {
            icon: <Save className="w-6 h-6" />,
            title: 'Call recording and playback:',
            description: 'All calls are saved and available for QA, training, or auditing purposes.'
        },
        {
            icon: <CalendarCheck className="w-6 h-6" />,
            title: 'Google Calendar integration:',
            description: 'AI reps can book appointments directly into calendars to reduce manual steps.'
        }
    ];

    return (
        <div id="features" className="min-h-screen py-24 px-4 relative overflow-hidden">
            <div className="pointer-events-none absolute -top-32 -left-24 w-80 h-80 rounded-full" style={{background:"radial-gradient(closest-side, rgba(139,92,246,0.25), transparent)"}} aria-hidden="true" />
            <div className="pointer-events-none absolute -bottom-40 -right-24 w-96 h-96 rounded-full" style={{background:"radial-gradient(closest-side, rgba(59,130,246,0.20), transparent)"}} aria-hidden="true" />
            <div className="max-w-7xl mx-auto">

                {/* Header */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-2xl mb-6 transform hover:scale-110 transition-transform duration-300">
                        <span className="text-4xl">🤖</span>
                    </div>
                    <h1 className="text-5xl md:text-6xl font-extrabold section-title mb-6">
                        Eclipse Technologies Features & Offerings
                    </h1>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                        Discover our suite of capabilities at <span className="font-bold text-indigo-400">Eclipse Technologies</span>:
                    </p>
                </div>

                {/* Two Column Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

                    {/* Products & Services */}
                    <div className="bg-white/5 backdrop-blur-2xl rounded-3xl p-8 border border-white/10 shadow-[0_10px_30px_rgba(2,6,23,0.30)]">
                        <div className="flex items-center mb-8">
                            <span className="text-3xl mr-3">📦</span>
                            <h2 className="text-3xl font-bold text-black">Products & Services:</h2>
                        </div>

                        <div className="space-y-6">
                            {products.map((product, index) => (
                                <div
                                    key={index}
                                    className="bg-white/5 rounded-xl p-6 border border-white/10 hover:bg-white/10 hover:border-indigo-400/50 transition-all duration-300"
                                >
                                    <div className="flex items-start space-x-4">
                                        <div className="flex-shrink-0 p-3 bg-indigo-600/20 rounded-lg text-indigo-400">
                                            {product.icon}
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-bold text-white mb-2">
                                                {product.title}
                                            </h3>
                                            <p className="text-gray-300 leading-relaxed">
                                                {product.description}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Features */}
                    <div className="bg-white/5 backdrop-blur-2xl rounded-3xl p-8 border border-white/10 shadow-[0_10px_30px_rgba(2,6,23,0.30)]">
                        <div className="flex items-center mb-8">
                            <span className="text-3xl mr-3">✨</span>
                            <h2 className="text-3xl font-bold text-black">Features:</h2>
                        </div>

                        <div className="space-y-6">
                            {features.map((feature, index) => (
                                <div
                                    key={index}
                                    className="bg-white/5 rounded-xl p-6 border border-white/10 hover:bg-white/10 hover:border-purple-400/50 transition-all duration-300"
                                >
                                    <div className="flex items-start space-x-4">
                                        <div className="flex-shrink-0 p-3 bg-purple-600/20 rounded-lg text-purple-400">
                                            {feature.icon}
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-bold text-white mb-2">
                                                {feature.title}
                                            </h3>
                                            <p className="text-gray-300 leading-relaxed">
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
                <div className="mt-16 text-center rounded-3xl p-12 shadow-2xl border border-white/10 bg-white/5 backdrop-blur-2xl">
                    <h3 className="text-3xl font-bold text-white mb-4">
                        Ready to Transform Your Sales Process?
                    </h3>
                    <p className="text-xl text-gray-300 mb-8">
                        Experience the power of modern engineering with Eclipse Technologies — Illuminating Innovation, Eclipsing Expectations.
                    </p>
                    <button className="btn btn-primary px-8 py-4 rounded-xl font-bold" onClick={() => document.getElementById('contact')?.scrollIntoView({behavior:'smooth'})}>Contact Us</button>
                </div>

            </div>
        </div>
    );
}