import React from 'react';

import '../styles/header.css';
import '../styles/home.css';
import '../styles/cardSport.css';
import '../styles/footer.css';

import AppHeader from '../components/Header.jsx';
import AppHome from '../components/Home.jsx';
import AppCardSport from '../components/CardSport.jsx';
import AppFooter from '../components/Footer.jsx';

function Home() {
  return (
      <>
        <AppHeader />
        <AppHome />
        <AppCardSport /> 
        <AppFooter />
      </>
  );
}

export default Home;