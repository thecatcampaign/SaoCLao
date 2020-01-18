import { useState, useEffect } from 'react';
import { message } from 'antd';
import { myApiEndPoint, myApiAxiosInstance } from '../../constants/myApi.constant';
import { errorSelector } from '../../helpers/utils.helper';

// eslint-disable-next-line import/prefer-default-export
export const useFetchLiker = (track) => {
  const [likers, setLikers] = useState(null);
  const [loading, setLoading] = useState(true);

  // only trigger if different track count button was cliked
  useEffect(() => {
    const loadMore = async () => {
      try {
        const res = await myApiAxiosInstance.get(
          `${myApiEndPoint.PEOPLE_WHO_LIKES_TRACK}${track.id}`,
        );
        setLikers(res.data);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        message.error(errorSelector(error));
      }
    };
    if (track.count_like !== 0) loadMore();
  }, []);

  return {
    likers,
    loading,
  };
};
