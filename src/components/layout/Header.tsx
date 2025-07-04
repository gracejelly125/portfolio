'use client';

import React, { useEffect, useState } from 'react';

import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 mx-auto flex justify-between items-center py-3 px-6 
    transition-all duration-300 ${
      isScrolled ? 'backdrop-blur-sm' : 'bg-transparent'
    }`}
      >
        <h1 className="gradient-text text-2xl font-pretendard-extrabold">
          JEONG EUN HYE
        </h1>
        <button type="button" onClick={toggleMenu}>
          <Menu size={30} />
        </button>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="fixed top-0 right-0 w-full h-full bg-black z-50 flex flex-col py-3 px-6"
          >
            <button
              type="button"
              onClick={toggleMenu}
              className="self-end mb-4"
              aria-label="Close menu"
            >
              <X size={30} />
            </button>
            <nav className="flex flex-col space-y-6 text-2xl">
              <a href="#hero" onClick={toggleMenu}>
                Home
              </a>
              <a href="#projects" onClick={toggleMenu}>
                Projects
              </a>
              <a href="#contact" onClick={toggleMenu}>
                Contact
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
