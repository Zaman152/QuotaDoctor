import { Calendar, DollarSign, MapPin, Mail, Phone, Linkedin, Instagram } from 'lucide-react';

export default function About() {
    const infoCards = [
        {
            icon: <Calendar className="w-8 h-8 text-indigo-600" />,
            label: 'Founded',
            value: '2023'
        },
        {
            icon: <DollarSign className="w-8 h-8 text-emerald-600" />,
            label: 'Funding',
            value: 'No public funding reported'
        },
        {
            icon: <MapPin className="w-8 h-8 text-rose-600" />,
            label: 'Location',
            value: 'Draper, Utah, USA'
        }
    ];

    const contactInfo = [
        {
            icon: <Mail className="w-5 h-5 text-indigo-600" />,
            label: 'Sales',
            value: 'sales@leadlocker.io',
            link: 'mailto:sales@leadlocker.io'
        },
        {
            icon: <Mail className="w-5 h-5 text-indigo-600" />,
            label: 'Support',
            value: 'support@leadlocker.io',
            link: 'mailto:support@leadlocker.io'
        },
        {
            icon: <Phone className="w-5 h-5 text-indigo-600" />,
            label: 'Phone',
            value: '(213) 205-0656',
            link: 'tel:+12132050656'
        },
        {
            icon: <Linkedin className="w-5 h-5 text-blue-700" />,
            label: 'LinkedIn',
            value: 'Eclipse Technologies',
            link: 'https://linkedin.com/company/leadlocker-io'
        },
        {
            icon: <Instagram className="w-5 h-5 text-pink-600" />,
            label: 'Instagram',
            value: '@leadlocker.io',
            link: 'https://instagram.com/leadlocker.io'
        }
    ];

    return (
        <div id="about" className="bg-gradient-to-b from-white to-[#D2DCFF] py-24 overflow-x-clip min-h-screen py-12 px-4">
            <div className="max-w-6xl mx-auto">

                {/* Header */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-indigo-600 rounded-xl mb-6">
                        <span className="text-3xl">ℹ️</span>
                    </div>
                    <h1 className="text-5xl font-bold text-gray-900 mb-4">
                        About Eclipse Technologies
                    </h1>
                    <p className="text-xl text-gray-700">
                        Learn about <span className="font-bold text-indigo-600">Eclipse Technologies&apos;</span> story, mission, and background. "Illuminating Innovation, Eclipsing Expectations."
                    </p>
                </div>

                {/* Company Info Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                    {infoCards.map((card, index) => (
                        <div
                            key={index}
                            className="bg-white/60 backdrop-blur-lg rounded-2xl p-8 border border-indigo-200 hover:bg-white/80 transition-all duration-300 hover:scale-105 shadow-lg"
                        >
                            <div className="flex flex-col items-center text-center space-y-4">
                                <div className="p-4 bg-indigo-50 rounded-xl">
                                    {card.icon}
                                </div>
                                <div>
                                    <h3 className="text-sm font-semibold text-indigo-600 uppercase tracking-wider mb-2">
                                        {card.label}
                                    </h3>
                                    <p className="text-lg font-bold text-gray-900">
                                        {card.value}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Contact Information */}
                <div className="bg-white/60 backdrop-blur-lg rounded-3xl p-6 sm:p-10 border border-indigo-200 shadow-lg">
                    <div className="flex items-center mb-6 sm:mb-8 flex-wrap">
                        <Mail className="w-6 h-6 sm:w-8 sm:h-8 text-indigo-600 mr-3 sm:mr-4" />
                        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Contact Information</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                        {contactInfo.map((contact, index) => (
                            <a
                                key={index}
                                href={contact.link}
                                target={contact.link.startsWith('http') ? '_blank' : '_self'}
                                rel={contact.link.startsWith('http') ? 'noopener noreferrer' : ''}
                                className="flex items-start space-x-4 p-3 sm:p-4 rounded-xl hover:bg-indigo-50 transition-all duration-300"
                            >
                                <div className="flex-shrink-0 p-2 bg-indigo-100 rounded-lg min-w-[40px]">
                                    {contact.icon}
                                </div>
                                <div className="flex-1 break-words">
                                    <p className="text-sm font-medium text-indigo-600 mb-1">{contact.label}</p>
                                    <p className="text-base font-semibold text-gray-900">
                                        {contact.value}
                                    </p>
                                </div>
                            </a>
                        ))}
                    </div>
                </div>

            </div>
        </div>
    );
}