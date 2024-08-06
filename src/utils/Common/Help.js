import React from 'react';

import '../../components/Common/Header/header.css';
import '../../components/Views/Help/help.css';
import '../../components/Common/Footer/footer.css';

import AppHeader from '../../components/Common/Header/Header.jsx';
import AppHelp from '../../components/Views/Help/Help.jsx';
import AppFooter from '../../components/Common/Footer/Footer.jsx';

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