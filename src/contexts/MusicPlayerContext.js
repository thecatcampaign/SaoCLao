import constate from 'constate';
import React, {
  useRef, useCallback, useState, useMemo,
} from 'react';
import { useImmer } from 'use-immer';
import { options, musicPlayer } from '../constants/musicPlayer.constant';

import { SoundCloundApi } from '../constants/soundClound.constant';

const isCurrentTrack = (trackId, currentTrack) => trackId === currentTrack.id;

const useMusicPlayer = (params) => {
  const [currentTrack, setCurrentTrack] = useState({
    id: 11,
    playing: false,
  });

  const onAudioListsChange = React.useCallback(
    (currentPlayId, audioLists, audioInfo) => {
      setMusicPlayerOptions((preOptions) => ({
        ...preOptions,
        audioLists,
      }));
    },
    [],
  );

  const onAudioPause = React.useCallback((audioInfo) => {
    setCurrentTrackPause(parseInt(audioInfo.lyric));
  }, []);

  const onAudioPlay = React.useCallback((audioInfo) => {
    setCurrentTrackPlaying(parseInt(audioInfo.lyric));
  }, []);

  const getAudioInstance = React.useCallback((audioInstance) => {
    musicPlayer.setInstance(audioInstance);
  }, []);

  const [musicPlayerOptions, setMusicPlayerOptions] = useState({
    ...options,
    onAudioListsChange,
    getAudioInstance,
    onAudioPause,
    onAudioPlay,
  });

  const playTrack = React.useCallback((track) => {
    if (!isCurrentTrack(track.id, currentTrack)) {
      console.log('play diff song', track.id, currentTrack);
      addTrackToAudioList({
        name: track.name,
        singer: track.artist,
        cover: track.artwork_url,
        id: track.id,
        lyric: `${track.id}`,
        musicSrc: () => Promise.resolve(
          `https://api.soundcloud.com/tracks/${track.id}/stream?client_id=${SoundCloundApi}`,
        ),
      });
    }
    musicPlayer.getInstance().play();
  }, [currentTrack]);

  const pauseTrack = React.useCallback((track) => {
    musicPlayer.getInstance().pause();
  }, []);

  const addTrackToAudioList = React.useCallback((track) => {
    setMusicPlayerOptions((preOptions) => ({
      ...preOptions, // if use global state: musicPlayerOptions instead of local state: preOptions,
      // it will cache the initial musicPlayerOptions because of useCallbackOnce
      // Maybe this doesn't apply for dispatch in useReducer, I don't know

      audioLists: [track, ...preOptions.audioLists],
    }));
  }, []);

  const setCurrentTrackPlaying = React.useCallback((trackId) => {
    setCurrentTrack((preTrack) => {
      const currentTrack = {
        id: trackId,
        playing: true,
      };

      return currentTrack;
    });
  }, []);

  const setCurrentTrackPause = React.useCallback((trackId) => {
    setCurrentTrack((preTrack) => {
      const currentTrack = {
        id: trackId,
        playing: false,
      };

      return currentTrack;
    });
  }, []);

  const isCurrentTrackPlaying = React.useCallback((trackId) => currentTrack.id === trackId && currentTrack.playing, [currentTrack]);

  return {
    currentTrack,
    isCurrentTrackPlaying,
    musicPlayerOptions,
    addTrackToAudioList,
    playTrack,
    pauseTrack,
  };
};

export const [
  MusicPlayerProvider,
  useCurrentTrack,
  useIsCurrentTrackPlaying,
  useMusicPlayerOptions,
  useAddTrackToAudioList,
  usePlayTrack,
  usePauseTrack,
] = constate(
  useMusicPlayer,
  (value) => value.currentTrack,
  (value) => value.isCurrentTrackPlaying,
  (value) => value.musicPlayerOptions,
  (value) => value.addTrackToAudioList,
  (value) => value.playTrack,
  (value) => value.pauseTrack,
);
