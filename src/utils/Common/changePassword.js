import React from 'react';

import '../../styles/layout/header.css';
import '../../styles/views/common/changepassword.css';
import '../../styles/layout/footer.css';

import AppHeader from '../../components/Common/Header.jsx';
import AppchangePassword from '../../components/Views/changePassword.jsx';
import AppFooter from '../../components/Common/Footer.jsx';

function changePassword() {
  return (
      <>
        <AppHeader />
        <AppchangePassword /> 
        <AppFooter />
      </>
  );
}

export default changePassword;