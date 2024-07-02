import React from 'react';

import '../../styles/layout/header.css';
import '../../styles/views/user/userDashboard.css';
import '../../styles/views/user/cardSport.css';
import '../../styles/layout/footer.css';

import AppHeader from '../../components/Common/Header.jsx';
import AppUserDashboard from '../../components/User/UserDashboard.jsx';
import AppCardSport from '../../components/User/CardSport.jsx';
import AppFooter from '../../components/Common/Footer.jsx';

function UserDashboard() {
  return (
      <>
        <AppHeader />
        <AppUserDashboard />
        <AppCardSport /> 
        <AppFooter />
      </>
  );
}

export default UserDashboard;