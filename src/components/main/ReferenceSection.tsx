'use client';

import React, { useRef, useEffect } from 'react';

import { motion, useAnimation, Variants } from 'framer-motion';
import { useInView } from 'framer-motion';
import { Quote } from 'lucide-react';

import { REFERENCE_DATA, REFERENCE_META } from '@/data/REFERENCE_DATA';

const boxVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: 'easeOut',
      delay: 0,
      staggerChildren: 0.2,
    },
  },
};

const paragraphVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
};

const h3Variants: Variants = {
  hidden: { opacity: 0, y: -30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

const ReferenceSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [inView, controls]);

  return (
    <section
      id="reference"
      className="scroll-mt-16 w-full flex flex-col justify-center px-4 md:px-5"
    >
      <div className="flex items-start justify-center mb-6 md:mb-10">
        <motion.div
          variants={h3Variants}
          initial="hidden"
          animate={controls}
          className="mr-2 md:mr-4"
          style={{ transformOrigin: 'center' }}
        >
          <Quote size={24} style={{ transform: 'rotate(180deg)' }} />
        </motion.div>

        <motion.h3
          variants={h3Variants}
          initial="hidden"
          animate={controls}
          className="leading-7 md:leading-9 text-center md:text-xl max-w-[400px] md:max-w-none"
        >
          작은 일에도{' '}
          <span className="text-lg md:text-[22px] font-pretendard-semibold inline-block">
            책임
          </span>{' '}
          을 다하며,
          <br />
          <span className="text-lg md:text-[22px] font-pretendard-semibold inline-block">
            효율
          </span>{' '}
          과{' '}
          <span className="text-lg md:text-[22px] font-pretendard-semibold inline-block">
            헌신
          </span>{' '}
          으로 최고의 결과를 만드는 개발자입니다.
        </motion.h3>

        <motion.div
          variants={h3Variants}
          initial="hidden"
          animate={controls}
          className="ml-2 md:ml-4"
          style={{ transformOrigin: 'center' }}
        >
          <Quote size={24} />
        </motion.div>
      </div>

      <motion.div
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={boxVariants}
        className="max-w-2xl mx-auto space-y-4 md:space-y-6 py-6 md:py-8 px-4 md:px-10 rounded-xl paper-texture"
      >
        <h2 className="text-2xl md:text-3xl tracking-tight text-center text-gray-800 font-pretendard-extrabold">
          추천서
        </h2>

        <motion.div className="space-y-3 md:space-y-5 text-gray-800 text-sm md:text-base">
          {REFERENCE_DATA.map((paragraph, i) => (
            <motion.p key={i} variants={paragraphVariants}>
              {paragraph}
            </motion.p>
          ))}
        </motion.div>

        <div className="text-right font-pretendard-extrabold text-lg md:text-xl mt-3 md:mt-4 text-gray-800">
          {REFERENCE_META.author} @{REFERENCE_META.role}
        </div>
      </motion.div>
    </section>
  );
};

export default ReferenceSection;
