import { Calendar, DollarSign, MapPin, Mail, Phone, Linkedin, Instagram } from 'lucide-react';

export default function About() {
    const infoCards = [
        {
            icon: <Calendar className="w-8 h-8 text-[#3282B8]" />,
            label: 'Founded',
            value: '2024'
        },
        {
            icon: <DollarSign className="w-8 h-8 text-[#3282B8]" />,
            label: 'Funding',
            value: 'Bootstrapped'
        },
        {
            icon: <MapPin className="w-8 h-8 text-[#3282B8]" />,
            label: 'Location',
            value: '[Your City, State, Country]'
        }
    ];

    const contactInfo = [
        {
            icon: <Mail className="w-5 h-5 text-[#3282B8]" />,
            label: 'Sales',
            value: 'dave@quotadoctor.com',
            link: 'mailto:dave@quotadoctor.com'
        },
        {
            icon: <Mail className="w-5 h-5 text-[#3282B8]" />,
            label: 'Support',
            value: 'dave@quotadoctor.com',
            link: 'mailto:dave@quotadoctor.com'
        },
        {
            icon: <Phone className="w-5 h-5 text-[#3282B8]" />,
            label: 'Phone',
            value: '(coming soon)',
            link: '#'
        },
        {
            icon: <Linkedin className="w-5 h-5 text-[#3282B8]" />,
            label: 'LinkedIn',
            value: 'QuotaDoctor',
            link: 'https://linkedin.com/company/quotadoctor'
        },
        {
            icon: <Instagram className="w-5 h-5 text-[#3282B8]" />,
            label: 'Instagram',
            value: '@quotadoctor',
            link: 'https://instagram.com/quotadoctor'
        }
    ];

    return (
        <div id="about" className="bg-[#0A0A0F] py-24 overflow-x-clip min-h-screen px-4">
            <div className="max-w-6xl mx-auto">

                {/* Header */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-[#3282B8] rounded-xl mb-6">
                        <span className="text-3xl">ℹ️</span>
                    </div>
                    <h1 className="text-5xl font-bold text-white mb-4">
                        About QuotaDoctor
                    </h1>
                    <p className="text-xl text-[#BBE1FA]">
                        Learn about <span className="font-bold text-[#3282B8]">QuotaDoctor</span>'s mission to help B2B and SaaS companies scale revenue through fractional sales leadership and AI-driven optimization. 'Fix the System, Elevate the Reps, Scale the Revenue.'
                    </p>
                </div>

                {/* Company Info Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                    {infoCards.map((card, index) => (
                        <div
                            key={index}
                            className="bg-[#16213E] backdrop-blur-lg rounded-2xl p-8 border border-[#0F4C75] hover:bg-[#1A1A2E] transition-all duration-300 hover:scale-105 shadow-lg"
                        >
                            <div className="flex flex-col items-center text-center space-y-4">
                                <div className="p-4 bg-[#3282B8]/20 rounded-xl">
                                    {card.icon}
                                </div>
                                <div>
                                    <h3 className="text-sm font-semibold text-[#3282B8] uppercase tracking-wider mb-2">
                                        {card.label}
                                    </h3>
                                    <p className="text-lg font-bold text-white">
                                        {card.value}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Contact Information */}
                <div className="bg-[#16213E] backdrop-blur-lg rounded-3xl p-6 sm:p-10 border border-[#0F4C75] shadow-lg">
                    <div className="flex items-center mb-6 sm:mb-8 flex-wrap">
                        <Mail className="w-6 h-6 sm:w-8 sm:h-8 text-[#3282B8] mr-3 sm:mr-4" />
                        <h2 className="text-2xl sm:text-3xl font-bold text-white">Contact Information</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                        {contactInfo.map((contact, index) => (
                            <a
                                key={index}
                                href={contact.link}
                                target={contact.link.startsWith('http') ? '_blank' : '_self'}
                                rel={contact.link.startsWith('http') ? 'noopener noreferrer' : ''}
                                className="flex items-start space-x-4 p-3 sm:p-4 rounded-xl hover:bg-[#1A1A2E] transition-all duration-300"
                            >
                                <div className="flex-shrink-0 p-2 bg-[#3282B8]/20 rounded-lg min-w-[40px]">
                                    {contact.icon}
                                </div>
                                <div className="flex-1 break-words">
                                    <p className="text-sm font-medium text-[#3282B8] mb-1">{contact.label}</p>
                                    <p className="text-base font-semibold text-white">
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