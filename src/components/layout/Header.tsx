'use client';

import React, { useEffect, useState } from 'react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 mx-auto flex justify-between items-center py-4 px-6 
        transition-all duration-300 ${
          isScrolled ? 'bg-white/10 backdrop-blur-md' : 'bg-transparent'
        }`}
    >
      <h1 className="mx-auto text-white text-lg">정은혜의 포트폴리오</h1>
    </header>
  );
};

export default Header;
