'use client';

import { Check, ClipboardList, Wrench, Zap } from 'lucide-react';

export default function Method() {
  const steps = [
    {
      title: 'Diagnose',
      description:
        'We analyze calls, pipeline, messaging, rep behavior, CRM data, and conversion points to identify revenue leaks and system weaknesses.',
      icon: <ClipboardList className="w-6 h-6" />,
    },
    {
      title: 'Prescribe',
      description:
        'We design a revenue treatment plan — process, scripts, coaching structure, reporting, and automation tailored to your team and market.',
      icon: <Wrench className="w-6 h-6" />,
    },
    {
      title: 'Implement',
      description:
        'We install the Sales Operating System, enable reps, roll out training, build dashboards, and hardwire accountability + coaching loops.',
      icon: <Zap className="w-6 h-6" />,
    },
    {
      title: 'Optimize',
      description:
        'We refine based on performance data — improving messaging, tuning automation, leveling up reps, and compounding win rates.',
      icon: <Check className="w-6 h-6" />,
    },
  ];

  return (
    <section id="method" className="py-24 px-4 bg-[#0A0A0F]">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#0F4C75] bg-[#16213E] text-[#3282B8] text-sm font-medium backdrop-blur-xl mx-auto">
          <span className="h-2 w-2 rounded-full bg-[#3282B8]" aria-hidden="true" />
          The Quota Doctor™ Method
        </div>
        <h2 className="text-4xl md:text-5xl font-extrabold mt-4 text-white">The Quota Doctor™ Method</h2>
        <p className="text-lg text-[#BBE1FA] mt-2">Fix the system, elevate the reps, scale the revenue</p>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-6">
        {steps.map((step, idx) => (
          <div key={idx} className="bg-[#16213E] backdrop-blur-2xl rounded-2xl p-6 border border-[#0F4C75]/30">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-[#3282B8] text-white mb-4">{step.icon}</div>
            <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
            <p className="text-[#BBE1FA] text-sm leading-relaxed">{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
