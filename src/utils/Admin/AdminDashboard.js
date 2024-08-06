import React from 'react';

import '../../components/Common/Header/header.css';
import '../../components/Admin/AdminDashboard/adminDashboard.css';
import '../../components/User/UserDashboard/userDashboard.css';  /* Aqui se encuentran los estilos de Jumb.jsx */
import '../../components/Common/CardSport/cardSport.css';
import '../../components/Common/Footer/footer.css';

import AppHeader from '../../components/Common/Header/Header.jsx';
import AppAdminDashboard from '../../components/Admin/AdminDashboard/AdminDashboard.jsx';
import AppJum from '../../components/User/Jumb/Jumb.jsx';
import AppCardSport from '../../components/Common/CardSport/CardSport.jsx';
import AppFooter from '../../components/Common/Footer/Footer.jsx';

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