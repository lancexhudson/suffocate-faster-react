import React, { useRef } from 'react';
import {
  BsFillPlayCircleFill,
  BsFillPauseCircleFill,
  BsFillSkipStartCircleFill,
} from 'react-icons/bs';

/* <i class="fa-regular fa-circle-play"></i>
<i class="fa-regular fa-circle-pause"></i> */

const Player = ({ audioElem, isplaying, setisplaying, currentSong }) => {
  const clickRef = useRef();

  const PlayPause = () => {
    setisplaying(!isplaying);
  };

  const checkWidth = (e) => {
    let width = clickRef.current.clientWidth;
    const offset = e.nativeEvent.offsetX;

    const divprogress = (offset / width) * 100;
    audioElem.current.currentTime = (divprogress / 100) * currentSong.length;
  };

  return (
    <div className="player_container">
      <div className="title"></div>
      <div className="navigation">
        <div
          className="navigation_wrapper"
          onClick={checkWidth}
          ref={clickRef}
        ></div>
      </div>
      <div className="controls">
        <BsFillSkipStartCircleFill className="btn_action" />
        {isplaying ? (
          <BsFillPauseCircleFill
            className="btn_action pp"
            onClick={PlayPause}
          />
        ) : (
          <BsFillPlayCircleFill className="btn_action pp" onClick={PlayPause} />
        )}
      </div>
    </div>
  );
};
export default Player;
