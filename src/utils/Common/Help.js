import React from 'react';

import '../../styles/layout/header.css';
import '../../styles/views/common/help.css';
import '../../styles/layout/footer.css';

import AppHeader from '../../components/Common/Header.jsx';
import AppHelp from '../../components/Views/Help.jsx';
import AppFooter from '../../components/Common/Footer.jsx';

function Help() {
  return (
      <>
        <AppHeader />
        <AppHelp /> 
        <AppFooter />
      </>
  );
}

export default Help;