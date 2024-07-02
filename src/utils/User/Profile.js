import React from 'react';

import AppHeader from '../../components/Common/Header.jsx';
import AppProfile from '../../components/User/Profile.jsx';
import AppFooter from '../../components/Common/Footer.jsx';

import '../../styles/layout/header.css';
import '../../styles/views/user/profile.css';
import '../../styles/layout/footer.css';

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

