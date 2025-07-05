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
    },
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
      className="py-16 w-full flex flex-col justify-center px-5"
    >
      <div className="flex items-start justify-center mb-10">
        <motion.div
          variants={h3Variants}
          initial="hidden"
          animate={controls}
          className="mr-4"
          style={{ transformOrigin: 'center' }}
        >
          <Quote size={30} style={{ transform: 'rotate(180deg)' }} />
        </motion.div>

        <motion.h3
          variants={h3Variants}
          initial="hidden"
          animate={controls}
          className="leading-9 text-xl text-center"
        >
          작은 일에도{' '}
          <span className="text-[22px] font-pretendard-semibold">책임</span>을
          다하며,
          <br />
          <span className="text-[22px] font-pretendard-semibold">
            효율
          </span>과{' '}
          <span className="text-[22px] font-pretendard-semibold">헌신</span>으로
          최고의 결과를 만드는 개발자입니다.
        </motion.h3>

        <motion.div
          variants={h3Variants}
          initial="hidden"
          animate={controls}
          className="ml-4"
          style={{ transformOrigin: 'center' }}
        >
          <Quote size={30} />
        </motion.div>
      </div>

      <motion.div
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={boxVariants}
        className="max-w-2xl mx-auto space-y-6 py-8 px-10 rounded-xl bg-gray-300"
      >
        <h2 className="text-3xl tracking-tight text-center text-gray-800 font-pretendard-extrabold">
          추천서
        </h2>

        <div className="space-y-5 text text-gray-800">
          {REFERENCE_DATA.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </div>

        <div className="text-right font-pretendard-extrabold text-xl mt-4 text-gray-800">
          {REFERENCE_META.author} @{REFERENCE_META.role}
        </div>
      </motion.div>
    </section>
  );
};

export default ReferenceSection;
