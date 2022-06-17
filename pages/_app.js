import React, { useEffect } from 'react';
import ReactGA from 'react-ga';

import '../styles/globals.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    ReactGA.initialize('G-0X45ZENJ0M');
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
