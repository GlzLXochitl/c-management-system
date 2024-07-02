import React from 'react';

import '../../styles/views/admin/headerAdmin.css';
import '../../styles/views/admin/alumnListAdmin.css';
import '../../styles/layout/footer.css';

import AppHeaderAdmin from '../../components/Admin/HeaderAdmin.jsx';
import AppAlumnListAdmin from '../../components/Admin/AlumnListAdmin.jsx';
import AppFooter from '../../components/Common/Footer.jsx';

function AlumnListAdmin() {
  return (
      <>
        <AppHeaderAdmin />
        <AppAlumnListAdmin />  
        <AppFooter />
      </>
  );
}

export default AlumnListAdmin;