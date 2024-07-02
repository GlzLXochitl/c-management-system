import React from 'react';

import '../../styles/layout/header.css';
import '../../styles/views/common/password.css';
import '../../styles/layout/footer.css';

import AppHeader from '../../components/Common/Header.jsx';
import AppPassword from '../../components/Views/Password.jsx';
import AppFooter from '../../components/Common/Footer.jsx';

function Password() {
  return (
      <>
        <AppHeader />
        <AppPassword /> 
        <AppFooter />
      </>
  );
}

export default Password;