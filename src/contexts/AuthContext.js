import React, { useState, useCallback, useEffect } from 'react';
import constate from 'constate';
import { firebase } from '../constants/firebase.constant';
import { myApiAxiosInstance } from '../constants/myApi.constant';
import { localStorageService } from '../helpers/storage.helper';

const useAuther = () => {
  const [user, setUser] = React.useState(null);
  const [refreshToken, setRefreshToken] = React.useState(null);

  React.useEffect(() => {
    // Listen for auth state changes
    const unsubscribe = firebase.auth().onAuthStateChanged(async (user) => {
      if (user) {
        const tokenResult = await firebase
          .auth()
          .currentUser.getIdTokenResult(true);

        localStorageService.setToken(tokenResult.token);
        setRefreshToken(true);
        setUser({
          ...user,
          admin: tokenResult.claims.admin,
          username: user.displayName,
        });
      } else {
        localStorageService.removeToken();
        setUser(null);
      }
    });

    // Unsubscribe to the listener when unmounting
    return () => {
      unsubscribe();
    };
  }, []);

  const loginWithEmail = async (email, password) => {
    await firebase.auth().signInWithEmailAndPassword(email, password);
    window.location.reload();
    localStorageService.setToken('authenticated'); // for showing user section quickly when token is empty because google auth is slow
  };

  const signOut = () => {
    firebase.auth().signOut();
    window.location.reload();
  };
  return {
    user,
    refreshToken,
    loginWithEmail,
    signOut,
  };
};

export const [AuthProvider, useAuth] = constate(useAuther);
