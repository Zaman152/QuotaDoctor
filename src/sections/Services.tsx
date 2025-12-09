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
  description: React.ReactNode;
};

const services: Service[] = [
  {
    icon: <Cpu className="w-7 h-7" aria-hidden="true" />,
    title: 'AI Sales & Lead Generation Tools',
    description: (
      <>
        <strong>Focus:</strong> Deliver a consistent flow of qualified leads using AI systems that handle the entire top-of-funnel process.
        <br />
        <strong>Key Value:</strong> Eliminate manual prospecting, ensure consistent outreach volume, and only engage with qualified, interested prospects.
        {/* Internal Reference (do not display): AI Cold Email Campaign Agent, AI SDR. */}
      </>
    ),
  },
  {
    icon: <Brain className="w-7 h-7" aria-hidden="true" />,
    title: 'AI Sales Performance & Coaching',
    description: (
      <>
        <strong>Focus:</strong> Turn sales data into actionable coaching and performance improvements.
        <br />
        <strong>Key Value:</strong> Personalized, continuous coaching for every sales rep; objective analysis of sales calls; automated performance tracking.
        {/* Internal Reference (do not display): AI Sales Call Analyzer, AI Sales Coach. */}
      </>
    ),
  },
  {
    icon: <Globe className="w-7 h-7" aria-hidden="true" />,
    title: 'AI Receptionist & Omnichannel Automation',
    description: (
      <>
        <strong>Focus:</strong> Automate inbound communications across calls, social media, and reviews to ensure no lead is missed.
        <br />
        <strong>Key Value:</strong> 24/7 availability, instant qualification, direct scheduling, automated social responses, review monitoring.
      </>
    ),
  },
  {
    icon: <Cloud className="w-7 h-7" aria-hidden="true" />,
    title: 'Custom AI Workflows & Automation',
    description: (
      <>
        <strong>Focus:</strong> Build bespoke AI systems to optimize internal operations and processes.
        <br />
        <strong>Key Value:</strong> Solve bottlenecks, streamline data flow, automate reporting, integrate disparate systems.
      </>
    ),
  },
  {
    icon: <BookOpen className="w-7 h-7" aria-hidden="true" />,
    title: 'Fractional AI & Sales Leadership',
    description: (
      <>
        <strong>Focus:</strong> Provide strategic oversight to ensure AI investments drive maximum revenue growth.
        <br />
        <strong>Key Value:</strong> Executive-level CSO/CAIO guidance without full-time hires; strategy, playbook design, and hands-on implementation.
      </>
    ),
  },
];

export default function Services() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(sectionRef, { margin: '-100px', once: true });

  return (
    <section id="services" className="relative overflow-hidden py-24 md:py-32 bg-[#0A0A0F]">
      {/* decorative gradients */}
      <div className="pointer-events-none absolute -top-32 -left-24 w-80 h-80 rounded-full" style={{background:"radial-gradient(closest-side, rgba(50,130,184,0.25), transparent)"}} aria-hidden="true" />
      <div className="pointer-events-none absolute -bottom-40 -right-24 w-96 h-96 rounded-full" style={{background:"radial-gradient(closest-side, rgba(15,76,117,0.20), transparent)"}} aria-hidden="true" />

      <div className="container relative">
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#0F4C75] bg-[#16213E] text-[#3282B8] text-sm font-medium backdrop-blur-xl">
            <span className="h-2 w-2 rounded-full bg-[#3282B8]" aria-hidden="true" />
            Our Expertise
          </div>
          <h2 className="mt-4 text-4xl md:text-5xl font-extrabold tracking-tight section-title">AI Consulting & Agent Implementation</h2>
          <p className="text-lg md:text-xl text-[#BBE1FA] mt-4 max-w-2xl mx-auto">
            Strategic AI consulting and bespoke agent development to drive revenue growth and operational efficiency.
          </p>
        </div>

        <div ref={sectionRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 18 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.45, delay: 0.06 * index, ease: 'easeOut' }}
              className="group h-full"
            >
              {/* gradient border wrapper */}
              <div className="h-full p-[1px] rounded-2xl" style={{background:"linear-gradient(135deg, rgba(50,130,184,0.35), rgba(15,76,117,0.35))"}}>
                <div className="h-full rounded-2xl bg-[#16213E] backdrop-blur-2xl border border-[#0F4C75]/30 p-6 md:p-7 shadow-[0_10px_30px_rgba(2,6,23,0.30)] transition-all duration-300 group-hover:bg-[#1A1A2E] group-hover:shadow-[0_0_30px_rgba(50,130,184,0.3)] group-hover:border-[#3282B8] group-hover:-translate-y-1 focus-within:shadow-[0_0_30px_rgba(50,130,184,0.4)] flex flex-col">
                  <div className="flex items-center justify-between">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-[#3282B8]/15 to-[#0F4C75]/15 text-[#3282B8] group-hover:from-[#3282B8]/25 group-hover:to-[#0F4C75]/25 transition-colors">
                      <span className="transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                        {service.icon}
                      </span>
                    </div>
                    <div className="h-2 w-2 rounded-full bg-[#3282B8] group-hover:bg-[#3282B8] transition-colors" aria-hidden="true" />
                  </div>
                  <h3 className="mt-5 text-xl font-bold text-white tracking-tight">{service.title}</h3>
                  <div className="mt-3 text-[#BBE1FA] leading-relaxed flex-1">{service.description}</div>
                  <div className="mt-6">
                    <a
                      href="#contact"
                      className="inline-flex items-center gap-2 text-[#3282B8] hover:text-[#BBE1FA] font-semibold focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#3282B8] rounded-md"
                      aria-label={`Build Your Custom AI Growth Plan for ${service.title}`}
                    >
                      Build Your Custom AI Growth Plan
                      <span className="inline-block transform transition-transform group-hover:translate-x-0.5">→</span>
                    </a>
                  </div>
                  <div className="mt-4 h-px bg-gradient-to-r from-transparent via-[#0F4C75] to-transparent" aria-hidden="true" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}


