'use client';

import React, { useState } from 'react';

import { motion, AnimatePresence } from 'framer-motion';
import { Mail } from 'lucide-react';

const EMAIL = 'gracejelly125@gmail.com';

const ThankYouSection = () => {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(EMAIL).then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      });
    }
  };

  return (
    <section
      id="thank-you"
      className="min-h-screen flex flex-col items-center justify-center px-4 text-center relative overflow-visible"
    >
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.8 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="relative inline-block"
      >
        <span
          className="absolute left-1/2 -translate-x-1/2 -top-8 md:-top-16 text-5xl md:text-8xl font-pretendard-extrabold text-gray-300 opacity-20 select-none pointer-events-none whitespace-nowrap user-select-none"
          aria-hidden="true"
          style={{ zIndex: 0 }}
        >
          Thank You
        </span>

        <h2 className="relative z-10 text-2xl md:text-5xl font-pretendard-extrabold gradient-text mb-3 md:mb-4">
          포트폴리오를 봐주셔서 감사합니다 :)
        </h2>
      </motion.div>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.8 }}
        transition={{ delay: 0.6, duration: 1 }}
        className="text-gray-500 text-sm md:text-lg max-w-xs md:max-w-xl mb-3 md:mb-4 px-2 md:px-0"
      >
        궁금한 점은 언제든 편하게 연락 주세요!
      </motion.p>

      <motion.button
        onClick={copyEmail}
        type="button"
        aria-label="Copy email address"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.8 }}
        transition={{ delay: 1.2, duration: 0.8, ease: 'easeOut' }}
        className="flex items-center space-x-2 text-gray-300 hover:underline cursor-pointer text-base md:text-lg font-pretendard-bold"
      >
        <Mail size={18} />
        <span>{EMAIL}</span>
      </motion.button>

      <AnimatePresence>
        {copied && (
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}
            className="mt-2 text-xs md:text-sm select-none bg-gray-400 text-black py-1 px-3 rounded-xl"
          >
            이메일이 복사되었습니다!
          </motion.span>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ThankYouSection;
