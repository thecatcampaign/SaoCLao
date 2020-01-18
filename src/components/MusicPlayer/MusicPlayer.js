import React, { useState, useRef } from 'react';
import 'react-jinke-music-player/assets/index.css';
import ReactJkMusicPlayer from 'react-jinke-music-player';
import { useMusicPlayerOptions } from '../../contexts/MusicPlayerContext';
import { isBrowser } from '../../helpers/utils.helper';

export default function MusicPlayer() {
  const musicPlayerOptions = useMusicPlayerOptions();

  return (
    <div>{isBrowser && <ReactJkMusicPlayer {...musicPlayerOptions} />}</div>
  );
}
