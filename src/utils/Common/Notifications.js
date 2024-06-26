import React from 'react';

import '../../styles/layout/header.css';
import '../../styles/views/common/notifications.css';
import '../../styles/layout/footer.css';

import AppHeader from '../../components/Common/Header.jsx';
import AppNotifications from '../../components/Views/Notifications.jsx';
import AppFooter from '../../components/Common/Footer.jsx';

function Notifications() {
  return (
      <>
        <AppHeader />
        <AppNotifications /> 
        <AppFooter />
      </>
  );
}

export default Notifications;