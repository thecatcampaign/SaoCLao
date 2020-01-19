import { useEffect, useState } from "react";
import { message } from "antd";
import {
  myApiEndPoint,
  myApiAxiosInstance
} from "../../constants/myApi.constant";
import { useAuth } from "../../contexts/AuthContext";
import { useAddFavoriteTrackIds } from "../../contexts/TrackContext";
import { errorSelector } from "../../helpers/utils.helper";
import { localStorageService } from "../../helpers/storage.helper";

export const useFetchFavoriteTrackIds = () => {
  const addFavoriteTrackIds = useAddFavoriteTrackIds();
  const { refreshToken } = useAuth();

  useEffect(() => {
    const fetchFavoriteTrackIds = async params => {
      try {
        const res = await myApiAxiosInstance.get(
          myApiEndPoint.FAVORITE_TRACK_IDS
        );
        addFavoriteTrackIds(res.data);
      } catch (error) {
        message.error(errorSelector(error));
      }
    };
    if (!refreshToken) return; // false mean firebase haven't release token, so throw unauthorized error
    fetchFavoriteTrackIds();
  }, [refreshToken]);
};
