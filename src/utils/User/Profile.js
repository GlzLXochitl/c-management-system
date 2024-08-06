import React from 'react';

import '../../components/Common/Header/header.css';
import '../../components/User/Profile/profile.css';
import '../../components/Common/Footer/footer.css';

import AppHeader from '../../components/Common/Header/Header.jsx';
import AppProfile from '../../components/User/Profile/Profile.jsx';
import AppFooter from '../../components/Common/Footer/Footer.jsx';

function Profile() {
  return (
      <>
        <AppHeader />
        <AppProfile />
        <AppFooter />
      </>
  );
}

export default Profile;

