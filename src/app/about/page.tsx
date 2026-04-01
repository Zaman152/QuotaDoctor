"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import SectionLabel from "@/components/ui/SectionLabel";

const CALENDLY = "https://calendly.com/quotadoctor/30min";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.55, ease: "easeOut" },
};

const credentials = [
  "Generated over $4 million in enterprise sales and influenced more than $40 million in cumulative revenue across B2B, SaaS, and healthcare.",
  "Helped turn acquired companies profitable within 90 days — increasing profitability by 50–80% through operational restructuring.",
  "Led sales organizations of 40+ people and reduced customer churn by over 50%.",
  "Scaled a company from $2 million in annual revenue to $2 million per month.",
  "Built a real estate portfolio of 50+ properties using the same AI systems I now deploy for clients.",
  "Served honorably in the United States Coast Guard, running medical operations and managing a $15 million annual budget.",
  "Hold an MBA and MS from Regis University.",
];

export default function AboutPage() {
  return (
    <div className="pt-16">
      {/* WHO I AM */}
      <section className="bg-white py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Two column: photo + opening */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center mb-16">
            {/* Photo */}
            <motion.div
              className="flex justify-center md:justify-start"
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <div className="relative w-72 h-80 md:w-[360px] md:h-[420px] rounded-2xl overflow-hidden shadow-lg border-2 border-[#E5EAF0]">
                <div className="w-full h-full bg-gradient-to-br from-[#0A2F4C] to-[#1A4F7C] flex flex-col items-center justify-center">
                  <div className="w-28 h-28 rounded-full bg-white/10 border-2 border-white/20 flex items-center justify-center mb-4">
                    <span className="text-white text-4xl font-bold">DT</span>
                  </div>
                  <span className="text-white/60 text-sm font-medium">Dave Thompson</span>
                  <span className="text-[#4AACDE] text-xs mt-1">Founder, QuotaDoctor</span>
                </div>
              </div>
            </motion.div>

            {/* Opening text */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <SectionLabel>OUR STORY</SectionLabel>
              <h1 className="text-[32px] md:text-[48px] font-bold text-[#0A2F4C] leading-tight mt-2 mb-6">
                Who I Am.
              </h1>
              <div className="space-y-4 text-[#6B7280] text-base leading-relaxed">
                <p>
                  I&apos;m Dave Thompson. I&apos;ve spent 20+ years helping businesses grow — from
                  scaling healthcare SaaS companies to acquiring and turning around struggling
                  businesses to building my own real estate investment portfolio from scratch.
                </p>
                <p>
                  But QuotaDoctor started because of a problem I couldn&apos;t ignore.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Full-width extended story */}
          <motion.div
            className="max-w-3xl mx-auto space-y-6 text-[#6B7280] text-base leading-relaxed"
            {...fadeUp}
          >
            <p>
              When I was running my real estate company — buying, renovating, and managing
              over 50 properties — I couldn&apos;t find reliable contractors to save my life.
              I&apos;d call a tree service company and wait two days for a callback. I&apos;d reach
              out to a fence builder and get voicemail three times. These were good people
              doing great work. They were just too busy working to answer the phone.
            </p>
            <p>
              So I started building systems to solve that problem in my own business first.
              I deployed AI agents that automated my lead generation, follow-up, and
              customer communication. I cut my overhead, freed up my time, and grew my
              portfolio faster than I ever could have with a traditional team.
            </p>
            <p>
              Then I started helping other businesses do the same thing. And I saw the gap
              everywhere — especially in home services. Owners who are incredible at what
              they do, but losing thousands of dollars a month in missed calls, dead leads,
              and invisible online presence. Not because they&apos;re doing anything wrong.
              Because they&apos;re too busy doing the actual work.
            </p>
            <p className="text-[#333333] font-semibold">
              That&apos;s what QuotaDoctor does.
            </p>
            <p>
              We&apos;re not a marketing agency. We&apos;re profit consultants. We find where your
              business is leaking revenue — missed calls, slow follow-up, no online
              visibility, scattered tools that don&apos;t talk to each other — and we plug every
              hole with one system.
            </p>
          </motion.div>
        </div>
      </section>

      {/* WHAT I'VE DONE */}
      <section className="bg-[#F7F9FB] py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-12" {...fadeUp}>
            <SectionLabel>TRACK RECORD</SectionLabel>
            <h2 className="text-[28px] md:text-[40px] font-bold text-[#0A2F4C] leading-tight mt-1">
              What I&apos;ve Done.
            </h2>
          </motion.div>

          {/* Credentials list */}
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
            {credentials.map((item, idx) => (
              <motion.div
                key={idx}
                className="flex items-start gap-3 bg-white rounded-xl border border-[#E5EAF0] p-5 shadow-sm"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, delay: idx * 0.07, ease: "easeOut" }}
              >
                <CheckCircle2
                  size={18}
                  className="text-[#1B7A2B] shrink-0 mt-0.5"
                />
                <p className="text-[#333333] text-sm leading-relaxed">{item}</p>
              </motion.div>
            ))}
          </div>

          {/* Pullquote */}
          <motion.blockquote
            className="mt-12 max-w-2xl mx-auto text-center text-[#4AACDE] italic text-lg leading-relaxed"
            {...fadeUp}
          >
            But the thing I&apos;m most proud of is simpler than any of that. I figured out
            how to build a business that runs while I sleep — and now I help other
            business owners do the same.
          </motion.blockquote>
        </div>
      </section>

      {/* THE TEAM */}
      <section className="bg-white py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="max-w-3xl mx-auto" {...fadeUp}>
            <SectionLabel>THE TEAM</SectionLabel>
            <h2 className="text-[28px] md:text-[40px] font-bold text-[#0A2F4C] leading-tight mt-1 mb-6">
              The Team Behind QuotaDoctor.
            </h2>
            <div className="space-y-4 text-[#6B7280] text-base leading-relaxed">
              <p>
                I don&apos;t do this alone. Behind QuotaDoctor is a team of developers,
                marketers, and operations specialists with combined decades of experience
                across web development, SEO, paid advertising, CRM architecture, AI
                automation, and small business growth strategy.
              </p>
              <p>
                Our development team builds and manages every system we deploy. Our
                marketing specialists handle SEO, social media, reputation management,
                and paid campaigns. When you work with QuotaDoctor, you&apos;re not getting
                one person — you&apos;re getting an entire back-office team dedicated to your
                growth, without the overhead of hiring them yourself.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* WHAT THAT MEANS FOR YOU */}
      <section className="bg-[#F7F9FB] py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="max-w-3xl mx-auto" {...fadeUp}>
            <SectionLabel>FOR YOU</SectionLabel>
            <h2 className="text-[28px] md:text-[40px] font-bold text-[#0A2F4C] leading-tight mt-1 mb-6">
              What That Means For You.
            </h2>
            <div className="space-y-4 text-[#6B7280] text-base leading-relaxed">
              <p>
                I&apos;m not a tech guy selling software. I&apos;m a business owner who built these
                systems for my own companies first, proved they work, and now deploys them
                for others. My team handles everything — the setup, the technology, the
                management. You don&apos;t need to understand how any of it works. You just
                need to know that your phone gets answered, your leads get followed up, and
                your business shows up when customers search for you.
              </p>
              <p className="text-[#333333] font-bold text-lg">
                More bookings. Less overhead. More time with your family. That&apos;s the whole point.
              </p>
            </div>

            <div className="mt-10">
              <a
                href={CALENDLY}
                target="_blank"
                rel="noopener noreferrer"
                id="about-cta"
                className="inline-flex items-center gap-2 bg-[#4AACDE] hover:bg-[#3A9CCC] text-white font-semibold px-8 py-4 rounded-lg text-lg transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-0.5"
              >
                Book Your Free Strategy Call →
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
