import React from 'react';

import AboutMeSection from '@/components/main/AboutMeSection';
import HeroSection from '@/components/main/HeroSection';
import ProjectSection from '@/components/main/ProjectSection';
import ReferenceSection from '@/components/main/ReferenceSection';
import ThankYouSection from '@/components/main/ThankYouSection';

const Main = () => {
  return (
    <div className="flex flex-col space-y-40">
      <HeroSection />
      <AboutMeSection />
      <ReferenceSection />
      <ProjectSection />
      <ThankYouSection />
    </div>
  );
};

export default Main;
