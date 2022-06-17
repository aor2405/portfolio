import React, { useEffect } from 'react';
import ReactGA from 'react-ga';

import '../styles/globals.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    ReactGA.initialize('UA-232331283-1');
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
