import React from 'react';

import Header from '@/components/layout/Header';
import Main from '@/components/layout/Main';

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <Main />
    </div>
  );
};

export default Home;
