'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import {
  Smartphone,
  Globe,
  Cloud,
  BookOpen,
  Cpu,
  Brain,
  ArrowRight,
  Terminal
} from 'lucide-react';

type Service = {
  id: string;
  icon: JSX.Element;
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
};

const services: Service[] = [
  {
    id: "01",
    icon: <Cpu className="w-8 h-8" aria-hidden="true" />,
    title: 'AI Lead Gen',
    subtitle: "Automated Prospecting Engine",
    description: "Eliminate manual grunt work. Our AI agents handle the entire top-of-funnel: list building, qualification, and initial outreach. You only speak to interested prospects.",
    tags: ["Cold Email Agents", "AI SDRs", "List Enrichment"]
  },
  {
    id: "02",
    icon: <Brain className="w-8 h-8" aria-hidden="true" />,
    title: 'Performance',
    subtitle: "The 'Film Room' For Sales",
    description: "Turn every call into data. We objectively analyze your rep's conversations to provide instant, personalized coaching. It's not just recording; it's active correction.",
    tags: ["Call Analysis", "Auto-Coaching", "Rep Scorecards"]
  },
  {
    id: "03",
    icon: <Globe className="w-8 h-8" aria-hidden="true" />,
    title: 'Omnichannel',
    subtitle: "24/7 AI Receptionist",
    description: "Never miss a lead again. Our voice and chat agents answer inbound inquiries instantly, qualify them, and book meetings directly onto your calendar.",
    tags: ["Voice AI", "Review Monitoring", "Instant Booking"]
  },
  {
    id: "04",
    icon: <Cloud className="w-8 h-8" aria-hidden="true" />,
    title: 'Automation',
    subtitle: "Custom Workflow Logic",
    description: "Connect your disjointed tech stack. We build bespoke automations that move data seamlessly between your CRM, marketing tools, and reporting dashboards.",
    tags: ["CRM Sync", "Data Pipe", "Custom Bots"]
  },
  {
    id: "05",
    icon: <BookOpen className="w-8 h-8" aria-hidden="true" />,
    title: 'Leadership',
    subtitle: "Fractional CSO / CAIO",
    description: "Get executive strategy without the executive salary. We provide the playbooks, the hiring criteria, and the AI roadmap to scale your revenue team.",
    tags: ["Sales Playbooks", "AI Strategy", "Hiring Support"]
  },
];

export default function Services() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start end", "end start"] });

  return (
    <section id="services" className="relative py-32 bg-[#050505] overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent,rgba(5,5,5,1))] z-10 pointer-events-none" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#3282B8]/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#0F4C75]/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="container relative z-20 px-4 md:px-6" ref={containerRef}>

        {/* Section Header */}
        <div className="mb-24 md:flex md:items-end md:justify-between border-b border-white/10 pb-12">
          <div className="max-w-2xl">
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="flex items-center gap-2 text-[#3282B8] font-mono text-sm tracking-wider mb-4"
            >
              <Terminal className="w-4 h-4" />
              SYSTEM_CAPABILITIES
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-7xl font-bold text-white tracking-tighter"
            >
              Our <span className="text-white/40">Expertise.</span>
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="mt-6 md:mt-0 text-[#BBE1FA]/60 max-w-sm text-lg"
          >
            Strategic consulting and bespoke agent development to drive revenue growth.
          </motion.p>
        </div>

        {/* Services List */}
        <div className="flex flex-col gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>

      </div>
    </section>
  );
}

function ServiceCard({ service, index }: { service: Service, index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group relative"
    >
      <div className="relative z-10 bg-[#0A0A0F] border border-white/5 p-8 md:p-12 rounded-3xl hover:border-[#3282B8]/50 transition-all duration-500 overflow-hidden">

        {/* Hover Gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#3282B8]/0 via-[#3282B8]/5 to-[#3282B8]/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-in-out" />

        <div className="grid md:grid-cols-12 gap-8 items-center">

          {/* ID & Icon */}
          <div className="md:col-span-1 text-[#BBE1FA]/20 font-mono text-xl group-hover:text-[#3282B8] transition-colors">
            {service.id}
          </div>

          {/* Title */}
          <div className="md:col-span-4">
            <div className="text-[#3282B8] mb-2">{service.icon}</div>
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-2">{service.title}</h3>
            <p className="text-[#BBE1FA]/60 font-mono text-sm uppercase tracking-wider">{service.subtitle}</p>
          </div>

          {/* Description */}
          <div className="md:col-span-4 text-[#BBE1FA]/80 text-lg leading-relaxed">
            {service.description}
          </div>

          {/* Tags & Action */}
          <div className="md:col-span-3 flex flex-col gap-4 items-start md:items-end">
            <div className="flex flex-wrap gap-2 justify-start md:justify-end">
              {service.tags.map((tag, i) => (
                <span key={i} className="px-3 py-1 bg-white/5 rounded-full text-xs text-[#BBE1FA]/60 border border-white/5">
                  {tag}
                </span>
              ))}
            </div>
            <a href="#contact" className="group/btn flex items-center gap-2 text-white font-medium mt-4 md:mt-0">
              Build Plan <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform text-[#3282B8]" />
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  )
}


