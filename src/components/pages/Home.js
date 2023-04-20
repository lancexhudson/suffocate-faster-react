import React from 'react';
import '../../App.css';
import Cards from '../Cards';
import HeroHome from '../HeroHome';

const Home = () => {
  return (
    <div>
      <HeroHome />
      {/* Remove Cards section to cut page off at the Hero */}
      <Cards />
    </div>
  );
};

export default Home;
