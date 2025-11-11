import { Check, AlertCircle } from 'lucide-react';

export default function LeadLockerPricingPage() {
    const pricingPlans = [
        {
            name: 'Sales Call Analyzer',
            setup: '$2,999',
            priceRange: '$999/mo',
            popular: false,
            features: [
                'Score 100% of calls automatically',
                'AI-powered call analysis',
                'Pipeline review & diagnostics',
                'Revenue leak identification',
                'CRM data analysis',
                'Monthly performance reports'
            ],
            cta: 'Get Started'
        },
        {
            name: 'Analyzer + AI Sales Coach',
            setup: '$4,999',
            priceRange: '$1,499/mo',
            popular: true,
            features: [
                'Everything in Analyzer',
                'Turn feedback into weekly coaching',
                'Continuous rep coaching',
                'Weekly coaching sessions',
                'Performance dashboards',
                'Script optimization',
                'Quarterly strategy reviews'
            ],
            cta: 'Get Started'
        },
        {
            name: 'Analyzer + Coach + SDR Engine',
            setup: '$6,999',
            priceRange: '$1,999/mo',
            popular: false,
            features: [
                'Everything in Analyzer + Coach',
                'AI-powered lead generation',
                'Automated outreach campaigns',
                'SDR automation',
                'Full sales automation',
                'Custom playbook development',
                'Bi-weekly strategy calls'
            ],
            cta: 'Get Started'
        },
        {
            name: 'Fractional VP Sales',
            setup: 'Custom',
            priceRange: 'Custom pricing',
            popular: false,
            features: [
                'Executive-level strategic leadership',
                'Hands-on sales team guidance',
                'VP-level expertise',
                'Custom implementation',
                'Strategic planning',
                'Team building & hiring support'
            ],
            cta: 'Contact Us'
        }
    ];

    const drawbacks = [
        'Custom implementation timelines vary based on team size and complexity',
        'Requires team commitment to process changes and coaching adoption',
        'Best suited for B2B/SaaS companies with $500K+ ARR',
        'Limited availability - we only work with select clients for quality assurance'
    ];

    return (
        <div id="pricing" className="min-h-screen bg-[#0A0A0F] py-16 px-4">
            <div className="max-w-7xl mx-auto">

                {/* Header */}
                <div className="text-center mb-16">
                    <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
                        Choose the plan that fits your business stage and start scaling today
                    </h1>
                    <p className="text-xl text-[#BBE1FA] max-w-3xl mx-auto">
                        Review QuotaDoctor pricing tiers and select the right level of coverage for your sales system. 15-minute film-room diagnostic included to diagnose your sales system before committing.
                    </p>
                </div>

                {/* Pricing Options */}
                <div className="mb-16">
                    <div className="flex items-center justify-center mb-8">
                        <span className="text-3xl mr-3">💵</span>
                        <h2 className="text-3xl font-bold text-white">Pricing Options:</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {pricingPlans.map((plan, index) => (
                            <div
                                key={index}
                                className={`rounded-2xl p-8 transition-all duration-300 hover:scale-105 hover:shadow-2xl ${plan.popular
                                    ? 'bg-[#16213E] text-white shadow-2xl relative border border-[#3282B8] hover:border-[#3282B8] hover:shadow-[0_0_30px_rgba(50,130,184,0.3)]'
                                    : 'bg-[#16213E] border border-[#0F4C75]/30 shadow-lg hover:border-[#3282B8] hover:shadow-[0_0_30px_rgba(50,130,184,0.3)]'
                                    }`}
                            >
                                {plan.popular && (
                                    <div className="absolute top-4 right-4">
                                        <span className="bg-[#3282B8] text-white text-xs font-bold px-3 py-1 rounded-full">
                                            Most Popular
                                        </span>
                                    </div>
                                )}

                                <div className="mb-6">
                                    <h3 className="text-2xl font-bold mb-2 text-white">
                                        {plan.name}
                                    </h3>
                                    <div className="text-sm text-[#BBE1FA]/60 mb-2">Setup: {plan.setup}</div>
                                    <div className="flex items-baseline">
                                        <span className="text-2xl font-bold text-[#3282B8]">
                                            {plan.priceRange}
                                        </span>
                                    </div>
                                    <div className="text-xs text-[#BBE1FA]/60 mt-2">Month-to-month after setup. Upgrades anytime.</div>
                                </div>

                                <button className={`w-full py-3 rounded-xl font-semibold mb-6 transition-all duration-300 ${plan.popular
                                    ? 'bg-[#3282B8] text-white hover:bg-[#0F4C75]'
                                    : 'bg-[#3282B8] text-white hover:bg-[#0F4C75]'
                                    }`}>
                                    {plan.cta}
                                </button>

                                <ul className="space-y-3">
                                    {plan.features.map((feature, idx) => (
                                        <li key={idx} className="flex items-start">
                                            <Check className="w-5 h-5 mr-3 flex-shrink-0 mt-0.5 text-[#3282B8]" />
                                            <span className="text-sm text-[#BBE1FA]">
                                                {feature}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Drawbacks */}
                <div className="mb-16">
                    <div className="flex items-center justify-center mb-8">
                        <span className="text-3xl mr-3">👎</span>
                        <h2 className="text-3xl font-bold text-white">Drawbacks:</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
                        {drawbacks.map((drawback, index) => (
                            <div
                                key={index}
                                className="bg-[#16213E] border border-[#0F4C75]/30 rounded-2xl p-6 shadow-lg hover:shadow-xl hover:border-[#3282B8] transition-all duration-300"
                            >
                                <div className="flex items-start space-x-4">
                                    <div className="flex-shrink-0 p-3 bg-[#3282B8]/20 rounded-lg">
                                        <AlertCircle className="w-6 h-6 text-[#3282B8]" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold text-white mb-2">
                                            {drawback}
                                        </h3>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Additional Info Card */}
                    <div className="bg-[#16213E] border-2 border-[#0F4C75] rounded-2xl p-6 max-w-3xl mx-auto mt-6">
                        <h3 className="text-lg font-bold text-white mb-3">
                            ✨ 15-Minute Film-Room Diagnostic
                        </h3>
                        <p className="text-[#BBE1FA]">
                            15-minute film-room diagnostic included to diagnose your sales system before committing to any plan.
                        </p>
                        <p className="mt-3 text-sm text-[#BBE1FA]/80">
                            Month-to-month after setup. Upgrades anytime.
                        </p>
                    </div>
                </div>

                {/* Bottom CTA */}
                <div className="text-center bg-[#16213E] border border-[#0F4C75]/30 rounded-3xl p-12 shadow-xl">
                    <h3 className="text-3xl font-bold text-white mb-4">
                        Ready to Start Scaling Revenue?
                    </h3>
                    <p className="text-xl text-[#BBE1FA] mb-8">
                        Choose the plan that fits your business stage — or book a 15-minute film-room diagnostic to diagnose your sales system.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a href="https://calendly.com/quotadoctor/15min" target="_blank" rel="noopener noreferrer" className="bg-[#3282B8] text-white font-bold px-8 py-4 rounded-xl hover:bg-[#0F4C75] hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-[0_0_25px_rgba(50,130,184,0.5)]">Book Your 15-Minute Film-Room Diagnostic</a>
                        <button className="bg-transparent text-[#3282B8] font-bold px-8 py-4 rounded-xl border-2 border-[#3282B8] hover:bg-[#3282B8] hover:text-white hover:scale-105 transition-all duration-300">
                            Contact Sales
                        </button>
                    </div>
                </div>

            </div>
        </div>
    );
}