import React from 'react';

import '../../components/Common/Header/header.css';
import '../../components/Views/Privacy/privacy.css';
import '../../components/Common/Footer/footer.css';

import AppHeader from '../../components/Common/Header/Header.jsx';
import AppPrivacy from '../../components/Views/Privacy/Privacy.jsx';
import AppFooter from '../../components/Common/Footer/Footer.jsx';

function Password() {
  return (
      <>
        <AppHeader />
        <AppPrivacy /> 
        <AppFooter />
      </>
  );
}

export default Password;