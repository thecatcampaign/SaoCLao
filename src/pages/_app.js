import React from 'react';
import App from 'next/app';
import '../style.css';
import { AuthProvider } from '../contexts/AuthContext';
import { TrackProvider } from '../contexts/TrackContext';
import { SingleModalProvider } from '../contexts/SingleModalContext';
import { MusicPlayerProvider } from '../contexts/MusicPlayerContext';
import LayoutComp from '../components/Layout/LayoutCom';

class MyApp extends App {
  // Only uncomment this method if you have blocking data requirements for
  // every single page in your application. This disables the ability to
  // perform automatic static optimization, causing every page in your app to
  // be server-side rendered.
  //
  // static async getInitialProps(appContext) {
  //   // calls page's `getInitialProps` and fills `appProps.pageProps`
  //   const appProps = await App.getInitialProps(appContext);
  //
  //   return { ...appProps }
  // }
  render() {
    const { Component, pageProps } = this.props;
    return (
      <AuthProvider>
        <TrackProvider>
          <SingleModalProvider>
            <MusicPlayerProvider>
              <LayoutComp>
                <Component {...pageProps} />
              </LayoutComp>
            </MusicPlayerProvider>
          </SingleModalProvider>
        </TrackProvider>
      </AuthProvider>
    );
  }
}

export default MyApp;
