import { isBrowser } from './utils.helper';

const getToken = (params) => {
  if (isBrowser) {
    const token = localStorage.getItem('token_access') || '';
    return token.replace(/\\"/g, '"');
  }
};

const setToken = (token) => {
  if (isBrowser) {
    localStorage.setItem('token_access', token);
  }
};

const removeToken = () => {
  if (isBrowser) {
    localStorage.removeItem('token_access');
  }
};

export const localStorageService = {
  token: getToken(),
  setToken,
  removeToken,
  getToken,
};
