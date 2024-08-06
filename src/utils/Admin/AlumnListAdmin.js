import React from 'react';

import '../../components/Common/Header/header.css';
import '../../components/Admin/AlumnListAdmin/alumnListAdmin.css';
import '../../components/Common/Footer/footer.css';

import AppHeader from '../../components/Common/Header/Header.jsx';
import AppAlumnListAdmin from '../../components/Admin/AlumnListAdmin/AlumnListAdmin.jsx';
import AppFooter from '../../components/Common/Footer/Footer.jsx';

function AlumnListAdmin() {
  return (
      <>
        <AppHeader />
        <AppAlumnListAdmin />  
        <AppFooter />
      </>
  );
}

export default AlumnListAdmin;