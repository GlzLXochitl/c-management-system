import React from 'react';
import AppHeader from '../../components/Common/Header.jsx';
import AppJum from '../../components/User/Jumb.jsx';
import AppCardSport from '../../components/Common/CardSport.jsx';
import AppFooter from '../../components/Common/Footer.jsx';

function TeacherDashboard() {
  return (
      <>
        <AppHeader />
        <AppJum /> 
        <AppCardSport /> 
        <AppFooter />
      </>
  );
}

export default TeacherDashboard;