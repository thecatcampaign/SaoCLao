import React from 'react';
import LikerModal from './Liker.modal';
import { useToggleModalWithContent } from '../../contexts/SingleModalContext';
import DynamicModal from '../Common/DynamicModal';

export const TrackItemLikesCount = React.memo(({ track }) => {
  const toggleModalWithContent = useToggleModalWithContent();

  return (
    <div>
      <button
        className=" underline mx-1"
        onClick={() => toggleModalWithContent(<LikerModal track={track} />)}
      >
        {track.count_like}
      </button>
    </div>
  );
});
