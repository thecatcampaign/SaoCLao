import { useEffect, useState } from 'react';
import { message } from 'antd';
import { myApiEndPoint, myApiAxiosInstance } from '../../constants/myApi.constant';
import { messages } from '../../constants/message.constant';
import { useAddFavoriteTrack } from '../../contexts/TrackContext';
import { errorSelector } from '../../helpers/utils.helper';

export const useLikeTrack = (track) => {
  const addFavoriteTrack = useAddFavoriteTrack();

  const likeTrack = async () => {
    try {
      addFavoriteTrack(track);
      await myApiAxiosInstance.post(`tracks/${track.id}/likes`); // update db
      message.success(track.name + messages.TRACK_LIKED_SUCCESS);
    } catch (error) {
      message.error(errorSelector(error));
    }
  };

  return { likeTrack };
};
