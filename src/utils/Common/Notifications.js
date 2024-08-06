import React from 'react';

import '../../components/Common/Header/header.css';
import '../../components/Views/Notifications/notifications.css';
import '../../components/Common/Footer/footer.css';

import AppHeader from '../../components/Common/Header/Header.jsx';
import AppNotifications from '../../components/Views/Notifications/Notifications.jsx';
import AppFooter from '../../components/Common/Footer/Footer.jsx';

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