import axios from 'axios';
import { localStorageService } from '../helpers/storage.helper';

const myApiAxiosInstance = axios.create({
  baseURL: 'https://us-central1-react-movie-2dee0.cloudfunctions.net/api/',
});

myApiAxiosInstance.interceptors.request.use(
  async (config) => {
    // const token = await firebase.auth().currentUser.getIdToken(true); slow
    const token = localStorageService.getToken();
    config.headers.Authorization = `Bearer ${token}`;

    return config;
  },
  (error) => Promise.reject(error),
);


export { myApiAxiosInstance };

export const myApiEndPoint = {
  TRENDING_TRACKS: 'tracks/trending',
  FAVORITE_TRACKS: 'tracks/likes',
  PLAYED_TRACKS: 'tracks/plays_history',
  FAVORITE_TRACK_IDS: 'tracks/likes/ids',
  PEOPLE_WHO_LIKES_TRACK: 'users/liker/',
  CREATE_NEW_ACCOUNT: 'users/',
};
