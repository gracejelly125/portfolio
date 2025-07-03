'use client';

import React, { useEffect, useState } from 'react';

import { AnimatePresence } from 'framer-motion';

import Splash from '@/components/Splash';

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence>{showSplash && <Splash key="splash" />}</AnimatePresence>
      {!showSplash && children}
    </>
  );
}
