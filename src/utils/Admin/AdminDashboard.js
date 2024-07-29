import React from 'react';

import '../../styles/views/admin/adminDashboard.css';
import AppAdminDashboard from '../../components/Admin/AdminDashboard.jsx';
import AppHeader from '../../components/Common/Header.jsx';
import AppJum from '../../components/User/Jumb.jsx';
import AppCardSport from '../../components/Common/CardSport.jsx';
import AppFooter from '../../components/Common/Footer.jsx';

function AdminDashboard() {
  return (
      <>
        <AppHeader />
        <AppJum /> 
        <AppCardSport /> 
        <AppAdminDashboard />
        <AppFooter />
      </>
  );
}

export default AdminDashboard;