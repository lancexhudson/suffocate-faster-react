import React from 'react';
import HeroShows from '../HeroShows';
import Cards from '../Cards';
import '../../App.css';
import HeroShowsFutureImages from '../HeroShowsFutureImages';
import HeroShowsPastImages from '../HeroShowsPastImages';

function PastShows() {
  return (
    <div>
      <HeroShowsPastImages />
      {/* <Cards /> */}
    </div>
  );
}

export default PastShows;
