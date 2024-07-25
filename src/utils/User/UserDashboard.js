import React from 'react';

import '../../styles/layout/header.css';
import '../../styles/views/user/userDashboard.css';
import '../../styles/views/common/cardSport.css';
import '../../styles/layout/footer.css';

import AppHeader from '../../components/Common/Header.jsx';
import AppJumUser from '../../components/User/Jumb.jsx';
import AppUserDashboard from '../../components/User/UserDashboard.jsx';
import AppCardSport from '../../components/Common/CardSport.jsx';
import AppFooter from '../../components/Common/Footer.jsx';

function UserDashboard() {
  return (
      <>
        <AppHeader />
        <AppJumUser />
        <AppUserDashboard />
        <AppCardSport /> 
        <AppFooter />
      </>
  );
}

export default UserDashboard;