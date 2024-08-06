import React from 'react';

import '../../components/Admin/HeaderAdmin/headerAdmin.css';
import '../../components/Admin/FormApply/fromApply.css';
import '../../components/Common/Footer/footer.css';

import AppHeaderAdmin from '../../components/Admin/HeaderAdmin/HeaderAdmin.jsx';
import AppFromApply from '../../components/Admin/FormApply/FormApply.jsx';
import AppFooter from '../../components/Common/Footer/Footer.jsx';

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