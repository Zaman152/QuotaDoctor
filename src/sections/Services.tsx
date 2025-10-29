'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  Smartphone,
  Globe,
  Cloud,
  Palette,
  BookOpen,
  Cpu,
  Mic,
  Brain,
  MessageSquare,
} from 'lucide-react';

type Service = {
  icon: JSX.Element;
  title: string;
  description: string;
};

const services: Service[] = [
  {
    icon: <Smartphone className="w-7 h-7" aria-hidden="true" />,
    title: 'Mobile App Development',
    description:
      'We build high-performance mobile applications that offer smooth user experiences, robust security, and scalable architectures, designed to meet both user needs and business growth.',
  },
  {
    icon: <Globe className="w-7 h-7" aria-hidden="true" />,
    title: 'Web Development',
    description:
      'We create responsive, high-performance websites with secure, scalable back-end solutions, designed to enhance user engagement and support business efficiency.',
  },
  {
    icon: <Cloud className="w-7 h-7" aria-hidden="true" />,
    title: 'Cloud Consultancy',
    description:
      'We provide cloud consulting services to optimize your cloud strategy, strengthen security, and deliver scalable, cost-effective infrastructure tailored for your organization\'s growth.',
  },
  {
    icon: <Palette className="w-7 h-7" aria-hidden="true" />,
    title: 'Graphic Design',
    description:
      'Our design team delivers expert graphic design services that elevate organizations to new levels of creativity and visual impact. We help you capture your target audience\'s attention with compelling and innovative designs.',
  },
  {
    icon: <BookOpen className="w-7 h-7" aria-hidden="true" />,
    title: 'Ebook Development',
    description:
      'We craft interactive, device-optimized eBooks for a seamless reading experience and enhanced user engagement.',
  },
  {
    icon: <Cpu className="w-7 h-7" aria-hidden="true" />,
    title: 'Advanced Technologies',
    description:
      'We design custom software solutions that improve business processes with advanced integrations, robust security, and scalable designs to drive your growth.',
  },
  {
    icon: <Mic className="w-7 h-7" aria-hidden="true" />,
    title: 'AI Voice Agents',
    description:
      'We develop intelligent voice agent solutions that automate customer interactions, provide 24/7 support, and enhance user engagement through natural language processing and conversational AI.',
  },
  {
    icon: <Brain className="w-7 h-7" aria-hidden="true" />,
    title: 'RAG (Retrieval-Augmented Generation) Systems',
    description:
      'We implement advanced RAG systems that combine the power of large language models with your proprietary data, enabling accurate, context-aware responses and intelligent information retrieval.',
  },
  {
    icon: <MessageSquare className="w-7 h-7" aria-hidden="true" />,
    title: 'AI Chatbots',
    description:
      'We create sophisticated AI-powered chatbots that provide instant customer support, streamline operations, and deliver personalized user experiences across multiple platforms.',
  },
];

export default function Services() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(sectionRef, { margin: '-100px', once: true });

  return (
    <section id="services" className="relative overflow-hidden py-24 md:py-32">
      {/* decorative gradients */}
      <div className="pointer-events-none absolute -top-32 -left-24 w-80 h-80 rounded-full" style={{background:"radial-gradient(closest-side, rgba(139,92,246,0.25), transparent)"}} aria-hidden="true" />
      <div className="pointer-events-none absolute -bottom-40 -right-24 w-96 h-96 rounded-full" style={{background:"radial-gradient(closest-side, rgba(59,130,246,0.20), transparent)"}} aria-hidden="true" />

      <div className="container relative">
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-purple-200 text-sm font-medium backdrop-blur-xl">
            <span className="h-2 w-2 rounded-full bg-purple-400" aria-hidden="true" />
            Our Expertise
          </div>
          <h2 className="mt-4 text-4xl md:text-5xl font-extrabold tracking-tight section-title">Our Core Services</h2>
          <p className="text-lg md:text-xl text-gray-300 mt-4 max-w-2xl mx-auto">
            Eclipse Technologies — Illuminating Innovation, Eclipsing Expectations
          </p>
        </div>

        <div ref={sectionRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 18 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.45, delay: 0.06 * index, ease: 'easeOut' }}
              className="group h-full"
            >
              {/* gradient border wrapper */}
              <div className="h-full p-[1px] rounded-2xl" style={{background:"linear-gradient(135deg, rgba(139,92,246,0.35), rgba(59,130,246,0.35))"}}>
                <div className="h-full rounded-2xl bg-white/5 backdrop-blur-2xl border border-white/10 p-6 md:p-7 shadow-[0_10px_30px_rgba(2,6,23,0.30)] transition-all duration-300 group-hover:shadow-[0_20px_50px_rgba(139,92,246,0.35)] group-hover:-translate-y-1 focus-within:shadow-[0_20px_50px_rgba(139,92,246,0.40)] flex flex-col">
                  <div className="flex items-center justify-between">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500/15 to-blue-500/15 text-purple-300 group-hover:from-purple-500/25 group-hover:to-blue-500/25 transition-colors">
                      <span className="transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                        {service.icon}
                      </span>
                    </div>
                    <div className="h-2 w-2 rounded-full bg-purple-300 group-hover:bg-purple-400 transition-colors" aria-hidden="true" />
                  </div>
                  <h3 className="mt-5 text-xl font-bold text-white tracking-tight">{service.title}</h3>
                  <p className="mt-3 text-gray-300 leading-relaxed flex-1">{service.description}</p>
                  <div className="mt-6">
                    <a
                      href="#contact"
                      className="inline-flex items-center gap-2 text-purple-300 hover:text-white font-semibold focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#8B5CF6] rounded-md"
                      aria-label={`Discover more about ${service.title}`}
                    >
                      Discover More
                      <span className="inline-block transform transition-transform group-hover:translate-x-0.5">→</span>
                    </a>
                  </div>
                  <div className="mt-4 h-px bg-gradient-to-r from-transparent via-indigo-200 to-transparent" aria-hidden="true" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}


