import React from 'react';

import { Icon } from 'antd';
import {

  useIsCurrentTrackPlaying,
  usePlayTrack,
  usePauseTrack,
} from '../../contexts/MusicPlayerContext';

import TrackItemArtwork from './TrackItemArtwork';

// eslint-disable-next-line import/prefer-default-export
export const TrackItemAvatarAndButtonPlay = React.memo(({ track, hovered }) => {
  const checkIsPlaying = useIsCurrentTrackPlaying();
  const playTrack = usePlayTrack();
  const pauseTrack = usePauseTrack();

  const isPlaying = checkIsPlaying(track.id);
  return (
    <div className="relative">
      <div className="flex justify-center items-center inset-0">
        <TrackItemArtwork track={track} />
        {(hovered || isPlaying) && (
          <Icon
            type={isPlaying ? 'pause-circle' : 'play-circle'}
            onClick={
              isPlaying ? () => pauseTrack(track) : () => playTrack(track)
            }
            theme="twoTone"
            twoToneColor="#f50"
            className="absolute text-3xl"
          />
        )}
      </div>
    </div>
  );
});
