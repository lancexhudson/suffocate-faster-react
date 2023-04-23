import React from 'react';
import '../App.css';
import './HeroShows.css';
import { Button } from './Button';
import HeroShowsPastImages from './HeroShowsPastImages';

const galleryImagesPastShows = [
  {
    img: 'https://scontent-ord5-2.xx.fbcdn.net/v/t39.30808-6/338008634_925921508417343_462578496551102803_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=mAeJ5kwiXCMAX_TvW9U&_nc_ht=scontent-ord5-2.xx&oh=00_AfBeNScuX3_15rVSRj7PmvQgUk2Dv0Eu29sFnwhZrHOMUg&oe=644A59BC',
  },
  {
    img: 'https://user-images.githubusercontent.com/106623072/233835008-818c2917-e90f-4832-a6c8-d256279356e9.jpeg',
  },
];

function HeroShows() {
  return <HeroShowsPastImages galleryImages={galleryImagesPastShows} />;
}

export default HeroShows;
