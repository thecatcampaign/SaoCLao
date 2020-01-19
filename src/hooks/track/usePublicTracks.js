import _ from "lodash";
import { useState, useEffect, useMemo } from "react";
import { message } from "antd";
import {
  myApiEndPoint,
  myApiAxiosInstance
} from "../../constants/myApi.constant";
import { errorSelector } from "../../helpers/utils.helper";
import {
  useTrendingTracks,
  useAddTrendingTracks
} from "../../contexts/TrackContext";

export const usePublicTracks = (endpoint, limit) => {
  const trendingTracks = useTrendingTracks();
  const addTrendingTracks = useAddTrendingTracks();
  const [offset, setOffset] = useState("");
  const [hasMore, setHasMore] = useState(true);

  const loadMore = async params => {
    if (!hasMore) {
      return;
    }
    try {
      const res = await myApiAxiosInstance.get(endpoint, {
        params: {
          limit,
          lastVisible: offset
        }
      });
      if (res.data.lastVisible == "end") setHasMore(false);
      addTrendingTracks(res.data.collection);
      setOffset(res.data.lastVisible);
    } catch (error) {
      message.error(errorSelector(error));
    }
  };

  useEffect(() => {
    loadMore();
  }, []);

  return {
    trendingTracks,
    loadMore,
    hasMore
  };
};
