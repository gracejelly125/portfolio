'use client';

import React from 'react';

import { motion } from 'framer-motion';

const texts = ['FRONTEND', 'DEVELOPER', 'JEONG EUN HYE'];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.6,
    },
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.8 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const Splash = () => {
  return (
    <motion.div
      className="flex flex-col items-center justify-center h-screen text-3xl md:text-6xl font-bold z-50 fixed top-0 left-0 w-full"
      variants={container}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      {texts.map((text, index) => (
        <motion.div key={index} variants={item}>
          {text}
        </motion.div>
      ))}
    </motion.div>
  );
};

export default Splash;
