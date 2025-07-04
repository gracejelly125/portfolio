'use client';

import React from 'react';

import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const HeroSection = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <motion.h2
        className="text-4xl md:text-8xl"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.8 }}
      >
        GROW TOGETHER
      </motion.h2>
      <motion.h2
        className="text-xl md:text-5xl mt-2 md:mt-5"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.2 }}
      >
        함께 성장하는 개발자, 정은혜입니다.
      </motion.h2>

      <motion.div
        className="absolute bottom-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 15, 0] }}
        transition={{
          opacity: { duration: 0.8, delay: 2.2 },
          y: {
            duration: 1.5,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 2.2,
          },
        }}
      >
        <ChevronDown className="w-8 h-8 md:w-12 md:h-12" />
        <ChevronDown className="w-8 h-8 md:w-12 md:h-12" />
      </motion.div>
    </div>
  );
};

export default HeroSection;
