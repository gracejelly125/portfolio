import React from 'react';

import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header';
import Main from '@/components/layout/Main';

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <Main />
      <Footer />
    </div>
  );
};

export default Home;
