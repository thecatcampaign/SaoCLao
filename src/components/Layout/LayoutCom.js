import React from 'react';
import Link from 'next/link';
import { useFetchFavoriteTrackIds } from '../../hooks/track/useFetchFavoriteTrackIds';
import Logo from '../Common/Logo';
import Login from '../Common/Login';
import Register from '../Common/Register';
import UserSection from '../Common/UserSection';
import { localStorageService } from '../../helpers/storage.helper';
import DynamicModal from '../Common/DynamicModal';
import MusicPlayer from '../MusicPlayer/MusicPlayer';

export default function LayoutComp({ children }) {
  useFetchFavoriteTrackIds();

  return (
    <div>
      <div className="flex z-50 w-full fixed top-0">
        <Logo />
        <div className=" bg-dark-charcoal w-full flex items-center justify-between flex-wrap p-4 sm:p-0">
          <button className="h-full px-4 text-gray-500 border-r border-black hover:text-white">
            <Link href="/">
              <a>Home</a>
            </Link>
          </button>
          {!localStorageService.getToken() ? (
            <div className="p-2 hidden sm:block sm:flex">
              <Login />
              <Register />
            </div>
          ) : (
            <div className="p-2">
              <UserSection />
            </div>
          )}
        </div>
      </div>

      {children}

      <MusicPlayer />
      <DynamicModal />
    </div>
  );
}
