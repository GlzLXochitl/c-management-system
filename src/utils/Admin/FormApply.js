import React from 'react';

import '../../styles/views/admin/headerAdmin.css';
import '../../styles/views/admin/fromApply.css';
import '../../styles/layout/footer.css';

import AppHeaderAdmin from '../../components/Admin/HeaderAdmin.jsx';
import AppFromApply from '../../components/Admin/FormApply.jsx';
import AppFooter from '../../components/Common/Footer.jsx';

function FromApply() {
  return (
      <>
        <AppHeaderAdmin />
        <AppFromApply />  
        <AppFooter />
      </>
  );
}

export default FromApply;