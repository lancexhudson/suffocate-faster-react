import React from 'react';
import Player from './Player';
import { useRef, useState, useEffect } from 'react';
// import lostOnes from '../assets/lost-ones.mp3';

const PlayerLogic = () => {
  // const [songs, setSongs] = useState(lostOnes);
  const [isplaying, setisplaying] = useState(false);
  // const [currentSong, setCurrentSong] = useState(lostOnes);

  const audioElem = useRef();

  useEffect(() => {
    if (isplaying) {
      audioElem.current.play();
    } else {
      audioElem.current.pause();
    }
  }, [isplaying]);

  const onPlaying = () => {
    const duration = audioElem.current.duration;
    const ct = audioElem.current.currentTime;

    //   setCurrentSong({
    //     ...currentSong,
    //     progress: (ct / duration) * 100,
    //     length: duration,
    //   });
  };

  // const finalPlayer = () => {
  //   <div className="PlayerLogic">
  //     <audio src={lostOnes} ref={audioElem} onTimeUpdate={onPlaying} />
  //     <Player
  //       songs={lostOnes}
  //       isplaying={isplaying}
  //       setisplaying={setisplaying}
  //       audioElem={audioElem}
  //       currentSong={currentSong}
  //       setCurrentSong={setCurrentSong}
  //     />
  //   </div>;
  // };

  // return finalPlayer;
};

export default PlayerLogic;
