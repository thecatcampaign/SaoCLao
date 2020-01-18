import { message } from 'antd';
import { myApiAxiosInstance } from '../../constants/myApi.constant';
import { useRemoveFavoriteTrack } from '../../contexts/TrackContext';
import { errorSelector } from '../../helpers/utils.helper';

// eslint-disable-next-line import/prefer-default-export
export const useUnlikeTrack = (track) => {
  const removeFavoriteTrack = useRemoveFavoriteTrack();

  const unlikeTrack = async () => {
    try {
      removeFavoriteTrack(track);
      await myApiAxiosInstance.delete(`tracks/${track.id}/likes`);
    } catch (error) {
      message.error(errorSelector(error));
    }
  };

  return { unlikeTrack };
};
