import React from 'react';

import '../../styles/layout/header.css';
import '../../styles/views/common/privacy.css';
import '../../styles/layout/footer.css';

import AppHeader from '../../components/Common/Header.jsx';
import AppPrivacy from '../../components/Views/Privacy.jsx';
import AppFooter from '../../components/Common/Footer.jsx';

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