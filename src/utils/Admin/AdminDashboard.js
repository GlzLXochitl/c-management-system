import React from 'react';

import '../../styles/views/admin/headerAdmin.css';
import '../../styles/views/admin/adminDashboard.css';
import '../../styles/views/admin/cardSportAdmin.css';
import '../../styles/layout/footer.css';

import AppHeaderAdmin from '../../components/Admin/HeaderAdmin.jsx';
import AppAdminDashboard from '../../components/Admin/AdminDashboard.jsx';
import AppCardSportAdmin from '../../components/Admin/CardSportAdmin.jsx';
import AppFooter from '../../components/Common/Footer.jsx';

function AdminDashboard() {
  return (
      <>
        <AppHeaderAdmin />
        <AppAdminDashboard /> 
        <AppCardSportAdmin /> 
        <AppFooter />
      </>
  );
}

export default AdminDashboard;