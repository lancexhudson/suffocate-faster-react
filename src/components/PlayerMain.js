import React, { useState } from 'react';
import Player from './Player';
import { songData } from './SongData';

const PlayerMain = () => {
  //hooks
  const [songs, setSongs] = useState(songData);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentSong, setCurrentSong] = useState(songData[0]);

  return (
    <div className="PlayerMain">
      <audio src="/src/assets/lost-ones.mp3" />
      <Player
        songs={songs}
        setSongs={setSongs}
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
      />
    </div>
  );
};

export default PlayerMain;
