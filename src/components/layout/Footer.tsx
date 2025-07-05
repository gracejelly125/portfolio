'use client';

import React from 'react';

import { Mail, ArrowUp } from 'lucide-react';

const Footer = () => {
  const email = 'gracejelly125@gmail.com';

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      alert('이메일 주소가 복사되었습니다!');
    } catch (err) {
      console.error('이메일 복사 실패:', err);
    }
  };

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-center space-y-3">
      <button
        onClick={handleCopy}
        className="w-12 h-12 rounded-full bg-gray-200 hover:bg-gray-300 text-black flex items-center justify-center shadow-lg transition"
        title="이메일 복사"
      >
        <Mail size={22} strokeWidth={1.5} />
      </button>

      <button
        onClick={handleScrollToTop}
        className="w-12 h-12 rounded-full bg-gray-200 hover:bg-gray-300 text-black flex items-center justify-center shadow-lg transition"
        title="맨 위로"
      >
        <ArrowUp size={22} strokeWidth={1.5} />
      </button>
    </div>
  );
};

export default Footer;
