import { Check, AlertCircle } from 'lucide-react';

export default function LeadLockerPricingPage() {
    const pricingPlans = [
        {
            name: 'Growth',
            price: '$1,500',
            period: '/month',
            popular: false,
            features: [
                'AI-driven outbound calls',
                'Lead campaign management',
                'Voice script builder',
                'Basic call logging',
                'Google Calendar integration',
                'Email support',
                '7-day free trial with 30 minutes of AI calling'
            ]
        },
        {
            name: 'Professional',
            price: '$3,000',
            period: '/month',
            popular: true,
            features: [
                'Everything in Growth',
                'Up to 100 project members',
                'Unlimited calls and campaigns',
                'Advanced call logging & analytics',
                'Custom script templates',
                'Priority support',
                'Advanced dashboard insights',
                'Call recording & playback',
                'API access'
            ]
        },
        {
            name: 'Enterprise',
            price: 'Custom',
            period: 'pricing',
            popular: false,
            features: [
                'Everything in Professional',
                'Unlimited project members',
                'Dedicated account manager',
                'Custom integrations',
                'White-label options',
                'Advanced security features',
                'SLA guarantees',
                '24/7 premium support',
                'Custom compliance settings'
            ]
        }
    ];

    const drawbacks = [
        {
            title: 'Limited integration options:',
            description: 'Currently lacks CRM and marketing platform integrations beyond Google Calendar.'
        },
        {
            title: 'Restricted lead targeting:',
            description: 'Platform adheres to Do-Not-Call and FTC regulations, so only opt-in leads can be contacted.'
        },
        {
            title: 'Niche use case:',
            description: 'Primarily optimized for outbound sales and appointment-setting; not a general-purpose AI platform.'
        },
        {
            title: 'Lack of extensive user reviews:',
            description: 'Minimal third-party or community-based feedback is currently available.'
        }
    ];

    return (
        <div id="pricing" className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100 py-16 px-4">
            <div className="max-w-7xl mx-auto">

                {/* Header */}
                <div className="text-center mb-16">
                    <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
                        💲 Eclipse Technologies Pricing & Drawbacks
                    </h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Review the pricing plans for <span className="font-bold text-indigo-600">Eclipse Technologies</span> alongside a look at the potential drawbacks:
                    </p>
                </div>

                {/* Pricing Options */}
                <div className="mb-16">
                    <div className="flex items-center justify-center mb-8">
                        <span className="text-3xl mr-3">💵</span>
                        <h2 className="text-3xl font-bold text-gray-900">Pricing Options:</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {pricingPlans.map((plan, index) => (
                            <div
                                key={index}
                                className={`rounded-2xl p-8 transition-all duration-300 hover:scale-105 hover:shadow-2xl ${plan.popular
                                    ? 'bg-gray-900 text-white shadow-2xl relative'
                                    : 'bg-white shadow-lg'
                                    }`}
                            >
                                {plan.popular && (
                                    <div className="absolute top-4 right-4">
                                        <span className="bg-indigo-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                                            Popular
                                        </span>
                                    </div>
                                )}

                                <div className="mb-6">
                                    <h3 className={`text-2xl font-bold mb-2 ${plan.popular ? 'text-white' : 'text-gray-900'}`}>
                                        {plan.name}
                                    </h3>
                                    <div className="flex items-baseline">
                                        <span className={`text-4xl font-bold ${plan.popular ? 'text-white' : 'text-gray-900'}`}>
                                            {plan.price}
                                        </span>
                                        <span className={`ml-2 ${plan.popular ? 'text-gray-300' : 'text-gray-600'}`}>
                                            {plan.period}
                                        </span>
                                    </div>
                                </div>

                                <button className={`w-full py-3 rounded-xl font-semibold mb-6 transition-all duration-300 ${plan.popular
                                    ? 'bg-white text-gray-900 hover:bg-gray-100'
                                    : 'bg-gray-900 text-white hover:bg-gray-800'
                                    }`}>
                                    Get Started with Eclipse Technologies
                                </button>

                                <ul className="space-y-3">
                                    {plan.features.map((feature, idx) => (
                                        <li key={idx} className="flex items-start">
                                            <Check className={`w-5 h-5 mr-3 flex-shrink-0 mt-0.5 ${plan.popular ? 'text-green-400' : 'text-green-600'
                                                }`} />
                                            <span className={`text-sm ${plan.popular ? 'text-gray-200' : 'text-gray-700'}`}>
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
                        <h2 className="text-3xl font-bold text-gray-900">Drawbacks:</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
                        {drawbacks.map((drawback, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
                            >
                                <div className="flex items-start space-x-4">
                                    <div className="flex-shrink-0 p-3 bg-red-100 rounded-lg">
                                        <AlertCircle className="w-6 h-6 text-red-600" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold text-gray-900 mb-2">
                                            {drawback.title}
                                        </h3>
                                        <p className="text-gray-700 leading-relaxed">
                                            {drawback.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Additional Info Card */}
                    <div className="bg-indigo-50 rounded-2xl p-6 border-2 border-indigo-200 max-w-3xl mx-auto mt-6">
                        <h3 className="text-lg font-bold text-gray-900 mb-3">
                            ✨ Trial Information
                        </h3>
                        <p className="text-gray-700">
                            7-day free trial included with 30 minutes of AI calling to test the platform before committing to a paid plan.
                        </p>
                    </div>
                </div>

                {/* Bottom CTA */}
                <div className="text-center bg-white rounded-3xl p-12 shadow-xl">
                    <h3 className="text-3xl font-bold text-gray-900 mb-4">
                        Ready to Get Started?
                    </h3>
                    <p className="text-xl text-gray-600 mb-8">
                        Choose the plan that fits your business needs and start your free trial today
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button className="bg-gray-900 text-white font-bold px-8 py-4 rounded-xl hover:bg-gray-800 hover:scale-105 transition-all duration-300 shadow-lg">
                            Start Free Trial
                        </button>
                        <button className="bg-white text-gray-900 font-bold px-8 py-4 rounded-xl border-2 border-gray-900 hover:bg-gray-50 hover:scale-105 transition-all duration-300">
                            Contact Sales
                        </button>
                    </div>
                </div>

            </div>
        </div>
    );
}