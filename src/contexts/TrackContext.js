import {
  useReducer, useCallback, useMemo, useEffect,
} from 'react';
import constate from 'constate';
import { useImmerReducer } from 'use-immer';
import pull from 'lodash/pull';
import remove from 'lodash/remove';
import { trackActionTypes } from '../constants/actionTypes.constant';
import { myApiEndPoint, myApiAxiosInstance } from '../constants/myApi.constant';
import {
  convertArrayToObject,
  findObjectsByKeys,
} from '../helpers/utils.helper';

const initialState = {
  tracks: {},
  trendingTracks: [],
  favoriteTracks: [],
  favoriteTrackIds: [],
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case trackActionTypes.TRENDING_TRACKS_FETCHED_SUCCESS:
      const newTracks = convertArrayToObject(payload, 'id');
      const newTrackIds = Object.keys(newTracks).map(Number);

      return void ((state.tracks = { ...newTracks, ...state.tracks }),
      state.trendingTracks.push(...newTrackIds));

    case trackActionTypes.FAVORITE_TRACKS_FETCHED_SUCCESS:
      return void (state.favoriteTracks = payload);

    case trackActionTypes.FAVORITE_TRACKS_IDS_FETCHED_SUCCESS:
      return void (state.favoriteTrackIds = payload);

    case trackActionTypes.ADD_FAVORITE_TRACK:
      return void (state.favoriteTrackIds.push(payload.id),
      (state.tracks[payload.id].count_like += 1));

    case trackActionTypes.REMOVE_FAVORITE_TRACK:
      return void (pull(state.favoriteTrackIds, payload.id),
      (state.tracks[payload.id].count_like -= 1));

    default:
      return state;
  }
};

const useTrack = () => {
  const [state, dispatch] = useImmerReducer(reducer, initialState);

  const addTrendingTracks = useCallback((data) => { // useCallbackOnce here helps prevent previous tracks re-rendering
    dispatch({
      type: trackActionTypes.TRENDING_TRACKS_FETCHED_SUCCESS,
      payload: data,
    });
  }, []);

  const addFavoriteTrackIds = useCallback((data) => {
    dispatch({
      type: trackActionTypes.FAVORITE_TRACKS_IDS_FETCHED_SUCCESS,
      payload: data,
    });
  }, []);

  const checkIsFavoriteTrack = useCallback((trackId) => {
    const isFavoriteTrack = state.favoriteTrackIds.includes(trackId);
    return isFavoriteTrack;
  }, [state.favoriteTrackIds]);

  const addFavoriteTrack = useCallback((trackObj) => {
    dispatch({
      type: trackActionTypes.ADD_FAVORITE_TRACK, // desc order insertion
      payload: trackObj,
    });
  }, []);

  const removeFavoriteTrack = useCallback((trackObj) => {
    dispatch({
      type: trackActionTypes.REMOVE_FAVORITE_TRACK,
      payload: trackObj,
    });
  }, []);

  return {
    tracks: state.tracks,
    favoriteTrackIds: state.favoriteTrackIds,
    trendingTracks: findObjectsByKeys(
      state.trendingTracks,
      state.tracks,
    ),
    addFavoriteTrackIds,
    checkIsFavoriteTrack,
    addFavoriteTrack,
    addTrendingTracks,
    removeFavoriteTrack,
  };
};
export const [
  TrackProvider,
  useTracks,
  useTrendingTracks,
  useAddFavoriteTrackIds,
  useIsFavoriteTrack,
  useAddFavoriteTrack,
  useAddTrendingTracks,
  useRemoveFavoriteTrack,
] = constate(
  useTrack,
  (value) => value.tracks,
  (value) => value.trendingTracks,
  (value) => value.addFavoriteTrackIds,
  (value) => value.checkIsFavoriteTrack,
  (value) => value.addFavoriteTrack,
  (value) => value.addTrendingTracks,
  (value) => value.removeFavoriteTrack,
);
