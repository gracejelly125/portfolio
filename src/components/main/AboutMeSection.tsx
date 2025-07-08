'use client';

import React from 'react';

import { motion } from 'framer-motion';
import { MotionProps } from 'framer-motion';
import Image from 'next/image';

import { EXPERIENCE_DATA } from '@/data/EXPERIENCE_DATA';
import { SKILL_DATA } from '@/data/SKILL_DATA';

const fadeInFrom = (direction: 'left' | 'right'): MotionProps => ({
  initial: {
    opacity: 0,
    x: direction === 'left' ? -50 : 50,
  },
  whileInView: {
    opacity: 1,
    x: 0,
  },
  transition: {
    duration: 0.6,
    ease: 'easeOut',
  },
  viewport: { once: true, amount: 0.3 },
});

const AboutMeSection = () => {
  return (
    <section id="about" className="scroll-mt-16 w-full max-w-4xl mx-auto">

      <h2 className="text-4xl md:text-5xl font-pretendard-extrabold gradient-text border-b pb-4 px-2">
        About Me
      </h2>

      <div className="flex flex-col md:flex-row md:space-x-12 mt-8 md:mt-0 md:border-b md:py-10 px-2">
        <motion.div className="flex-1" {...fadeInFrom('right')}>
          <h3 className="text-2xl md:text-3xl font-pretendard-bold mb-6">
            Experience
          </h3>
          <div className="space-y-6">
            {EXPERIENCE_DATA.map(({ company, period, details }, idx) => (
              <div key={idx} className="bg-gray-900 rounded-xl p-5">
                <p className="text-lg md:text-xl">{company}</p>
                <p className="text-gray-500 text-xs md:text-sm mt-1 mb-2">
                  {period}
                </p>
                <ul className="list-none space-y-1 text-gray-200 text-[13px] md:text-[15px]">
                  {details.map((detail, i) => (
                    <li key={i}>- {detail}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div className="flex-1 mt-10 md:mt-0" {...fadeInFrom('right')}>
          <h3 className="text-2xl md:text-3xl font-pretendard-bold mb-6">
            Awards
          </h3>
          <div className="text-base md:text-lg mb-2">
            <p className="text-lg md:text-xl">
              스파르타코딩클럽 최종 팀 프로젝트 대상
            </p>
            <p className="text-xs md:text-[15px] mt-1">
              - 1인 가구 청년 자취생을 위한 종합 정보 제공 플랫폼 ‘HOLO’
            </p>
          </div>
          <div className="mt-6">
            <Image
              src="/images/award.png"
              alt="certification"
              width={800}
              height={800}
              className="rounded-md mx-auto w-[70%]"
            />
          </div>
        </motion.div>
      </div>

      <motion.div className="mt-8 px-2" {...fadeInFrom('left')}>
        <h3 className="text-2xl md:text-3xl font-pretendard-bold mb-6">
          Skills
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {SKILL_DATA.map(({ Icon, name, description }, idx) => (
            <div
              key={idx}
              className="flex items-start space-x-4 bg-gray-900 p-4 rounded-xl"
            >
              <Icon
                style={{ width: 24, height: 24, fill: 'white', flexShrink: 0 }}
              />
              <div>
                <p className="text-lg md:text-xl font-pretendard-bold">
                  {name}
                </p>
                <p className="text-xs md:text-sm text-gray-400 mt-1">
                  {description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default AboutMeSection;
