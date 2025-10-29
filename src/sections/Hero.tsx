'use client';

import ArrowIcon from '@/assets/arrow-right.svg';
import cogImage from '@/assets/cog.png';
import cylinderImage from '@/assets/cylinder.png';
import noodleImage from '@/assets/noodle.png';
import Image from 'next/image';
import {
  motion,
  useScroll,
  useTransform,
  useMotionValueEvent,
} from 'framer-motion';
import { useRef } from 'react';

export const Hero = () => {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start end', 'end start'],
  });

  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);

  useMotionValueEvent(translateY, 'change', (latestValue) =>
    console.log(latestValue)
  );

  return (
    <section
      ref={heroRef}
      className="pt-8 pb-20 md:pt-5 md:pb-10 overflow-x-clip relative"
    >
      <div className="absolute inset-0 bg-[radial-gradient(600px_400px_at_50%_30%,rgba(139,92,246,0.35),transparent),radial-gradient(800px_500px_at_80%_70%,rgba(59,130,246,0.25),transparent)]" aria-hidden="true" />
      <div className="container relative">
        <div className="md:flex items-center">
          <div className="md:w-[478px]">
            {/* <div className="tag">Version 2.0 is here</div> */}
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight bg-[linear-gradient(135deg,#8B5CF6,#3B82F6)] text-transparent bg-clip-text mt-6">
              Eclipse Technologies
            </h1>
            <p
              className="text-lg md:text-xl text-gray-300 tracking-tight mt-2 italic opacity-0 animate-[fadeUp_0.6s_ease-out_0.4s_forwards]"
              aria-label="Company motto"
            >
              "Illuminating Innovation, Eclipsing Expectations"
            </p>
            <p className="text-xl text-gray-300 tracking-tight mt-6">
              Supercharge your business with modern software, AI solutions, and cloud expertise
            </p>
            {/* <div className="flex gap-1 items-center mt-[30px]">
              <button className="btn btn-primary">Get for free</button>
              <button className="btn btn-text gap-1">
                <span>Learn more</span>
                <ArrowIcon className="h-5 w-5" />
              </button>
            </div> */}
          </div>

          <div className="mt-20 md:mt-0 md:h-[648px] md:flex-1 relative">
            <motion.img
              src={cogImage.src}
              alt="Cog image"
              className="md:absolute md:h-full md:w-auto md:max-w-none md:-left-6 lg:left-0"
              animate={{
                translateY: [-30, 30],
              }}
              transition={{
                repeat: Infinity,
                repeatType: 'mirror',
                duration: 3,
                ease: 'easeInOut',
              }}
            />
            <motion.img
              src={cylinderImage.src}
              alt="cylinder Image"
              width={220}
              height={220}
              className="hidden md:block -top-8 -left-32 md:absolute"
              style={{
                translateY: translateY,
              }}
            />
            <motion.img
              src={noodleImage.src}
              width={220}
              alt="noodleImage"
              className="hidden lg:block absolute top-[524px] left-[448px] rotate-[30deg]"
              style={{
                rotate: 30,
                translateY: translateY,
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
