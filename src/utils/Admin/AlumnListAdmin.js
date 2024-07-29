import React from 'react';

import '../../styles/layout/header.css';
import '../../styles/views/admin/alumnListAdmin.css';
import '../../styles/layout/footer.css';

import AppHeader from '../../components/Common/Header.jsx';
import AppAlumnListAdmin from '../../components/Admin/AlumnListAdmin.jsx';
import AppFooter from '../../components/Common/Footer.jsx';

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