import React from 'react';
import { useMusicPlayerContext } from '../contexts/MusicPlayerContext';
import { isBrowser } from '../helpers/utils.helper';

export const musicPlayer = {
  instance: null,
  setInstance: (instance) => (musicPlayer.instance = instance),
  getInstance: () => musicPlayer.instance,
};

const audioList1 = [
  {
    name: 'Despacito',
    singer: 'Luis Fonsi',
    cover:
      'http://res.cloudinary.com/alick/image/upload/v1502689731/Despacito_uvolhp.jpg',
    musicSrc: () => Promise.resolve(
      'http://res.cloudinary.com/alick/video/upload/v1502689683/Luis_Fonsi_-_Despacito_ft._Daddy_Yankee_uyvqw9.mp3',
    ),
  },
];

export const options = {
  // audio lists model
  audioLists: audioList1,

  // default play index of the audio player  [type `number` default `0`]
  defaultPlayIndex: 0,

  // if you want dynamic change current play audio you can change it [type `number` default `0`]
  // playIndex: 0,

  // color of the music player theme    [ type `string: 'light' or 'dark'  ` default 'dark' ]
  theme: 'dark',

  // Specifies movement boundaries. Accepted values:
  // - `parent` restricts movement within the node's offsetParent
  //    (nearest node with position relative or absolute), or
  // - a selector, restricts movement within the targeted node
  // - An object with `left, top, right, and bottom` properties.
  //   These indicate how far in each direction the draggable
  //   can be moved.
  bounds: 'body',

  // Replace a new playlist with the first loaded playlist
  // instead of adding it at the end of it.
  // [type `boolean`, default `false`]
  clearPriorAudioLists: true,

  // Play your new play list right after your new play list is loaded turn false.
  // [type `boolean`, default `false`]
  autoPlayInitLoadPlayList: true,

  // Whether to load audio immediately after the page loads.  [type `Boolean | String`, default `false`]
  // "auto|metadata|none" "true| false"
  preload: false,

  // Whether the player's background displays frosted glass effect  [type `Boolean`, default `false`]
  glassBg: false,

  // The next time you access the player, do you keep the last state  [type `Boolean` default `false`]
  remember: false,

  // The Audio Can be deleted  [type `Boolean`, default `true`]
  remove: true,

  // audio controller initial position    [ type `Object` default '{top:0,left:0}' ]
  defaultPosition: {
    top: 300,
    left: 120,
  },

  //   // play mode text config of the audio player
  //   playModeText: {
  //     order: "",
  //     orderLoop: "",
  //     singleLoop: "",
  //     shufflePlay: ""
  //   },

  defaultPlayMode: 'order',

  // audio mode        mini | full          [type `String`  default `mini`]
  mode: 'mini',

  /**
   * [ type `Boolean` default 'false' ]
   * The default audioPlay handle function will be played again after each pause, If you only want to trigger it once, you can set 'true'
   */
  once: false,

  // Whether the audio is played after loading is completed. [type `Boolean` default 'true']
  autoPlay: true,

  // Whether you can switch between two modes, full => mini  or mini => full   [type 'Boolean' default 'true']
  toggleMode: true,

  // audio cover is show of the "mini" mode [type `Boolean` default 'true']
  showMiniModeCover: true,

  // audio playing progress is show of the "mini"  mode
  showMiniProcessBar: false,

  // audio controller is can be drag of the "mini" mode     [type `Boolean` default `true`]
  drag: true,

  // drag the audio progress bar [type `Boolean` default `true`]
  seeked: true,

  // Displays the audio load progress bar.  [type `Boolean` default `true`]
  showProgressLoadBar: true,

  // play button display of the audio player panel   [type `Boolean` default `true`]
  showPlay: true,

  // reload button display of the audio player panel   [type `Boolean` default `true`]
  showReload: true,

  // download button display of the audio player panel   [type `Boolean` default `true`]
  showDownload: false,

  // loop button display of the audio player panel   [type `Boolean` default `true`]
  showPlayMode: true,

  // theme toggle switch  display of the audio player panel   [type `Boolean` default `true`]
  showThemeSwitch: true,

  // lyric display of the audio player panel   [type `Boolean` default `false`]
  showLyric: false,

  // Extensible custom content       [type 'Array' default '[]' ]
  extendsContent: [],

  // default volume of the audio player [type `Number` default `100` range `0-100`]
  defaultVolume: 100,

  // playModeText show time [type `Number(ms)` default `700`]
  playModeShowTime: 600,

  // Whether to try playing the next audio when the current audio playback fails [type `Boolean` default `true`]
  loadAudioErrorPlayNext: true,

  // Auto hide the cover photo if no cover photo is available [type `Boolean` default `false`]
  autoHiddenCover: true,

  // // custom music player root node
  getContainer() {
    return document.body;
  },

  getAudioInstance: (instance) => {
    musicPlayer.setInstance(instance);
  },
};
