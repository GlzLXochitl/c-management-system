import React from 'react';

import '../../styles/layout/header.css';
import '../../styles/views/admin/adminDashboard.css';
import '../../styles/views/admin/cardSportAdmin.css';
import '../../styles/layout/footer.css';

import AppHeader from '../../components/Common/Header.jsx';
import AppAdminDashboard from '../../components/Admin/AdminDashboard.jsx';
import AppCardSportAdmin from '../../components/Admin/CardSportAdmin.jsx';
import AppFooter from '../../components/Common/Footer.jsx';

function AdminDashboard() {
  return (
      <>
        <AppHeader />
        <AppAdminDashboard /> 
        <AppCardSportAdmin /> 
        <AppFooter />
      </>
  );
}

export default AdminDashboard;