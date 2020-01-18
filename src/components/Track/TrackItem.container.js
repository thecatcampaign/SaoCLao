import React, { useState, useEffect } from 'react';
import { Avatar, Icon } from 'antd';
import { useHover } from 'react-use';
import classNames from 'classnames';
import { TrackItemLikesCount } from './TrackItemLikesCount';
import { TrackItemHeart } from './TrackItemHeart';
import { TrackItemAvatarAndButtonPlay } from './TrackItemAvatarAndButtonPlay';
import { useIsCurrentTrackPlaying } from '../../contexts/MusicPlayerContext';

export const TrackItemContainer = React.memo(({ track, numericalOrder }) => {
  const element = (hovered) => (
    <div
      className={classNames(
        'p-1 flex justify-between items-center hover:bg-gray-200',
        { 'bg-gray-200': isPlaying },
      )}
    >
      <div className=" font-semibold text-lg w-10">{numericalOrder}</div>

      <TrackItemAvatarAndButtonPlay track={track} hovered={hovered} />

      <div className=" flex-1">
        <div className="">{track.artist}</div>
        <h2>{track.name}</h2>
      </div>

      <TrackItemLikesCount track={track} />
      <TrackItemHeart track={track} />
    </div>
  );

  const checkIsPlaying = useIsCurrentTrackPlaying();
  const isPlaying = checkIsPlaying(track.id); // this line has to be placed before useHover, so it can pass isPlaying variable to element
  const [hoverable] = useHover(element);

  return <div>{hoverable}</div>;
});
