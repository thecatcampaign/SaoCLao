import React from 'react';
import { Avatar, Icon } from 'antd';
import { useLikeTrack } from '../../hooks/track/useLikeTrack';
import { useUnlikeTrack } from '../../hooks/track/useUnlikeTrack';
import { localStorageService } from '../../helpers/storage.helper';
import { useToggleModalWithContent } from '../../contexts/SingleModalContext';
import LoginModal from '../Common/LoginModal';
import { useIsFavoriteTrack } from '../../contexts/TrackContext';

export const TrackItemHeart = React.memo(({ track }) => {
  const checkIsFavoriteTrack = useIsFavoriteTrack();
  const isFavoriteTrack = checkIsFavoriteTrack(track.id);
  const { likeTrack } = useLikeTrack(track);
  const { unlikeTrack } = useUnlikeTrack(track);
  const toggleModalWithContent = useToggleModalWithContent();

  const handleLiking = (params) => {
    if (!localStorageService.getToken()) toggleModalWithContent(<LoginModal />);
    else if (!isFavoriteTrack) likeTrack();
    else unlikeTrack();
  };

  return (
    <div>
      <button className="" onClick={handleLiking}>
        <Icon
          type="heart"
          theme="twoTone"
          twoToneColor={isFavoriteTrack ? '#f00' : '#000'}
        />
      </button>
    </div>
  );
});
