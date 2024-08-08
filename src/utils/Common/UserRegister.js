import React from 'react';

import '../../components/Views/UserRegister/userRegister.css';
import '../../components/Common/Footer/footer.css';

import AppUserRegister from '../../components/Views/UserRegister/UserRegister.jsx';
import AppFooter from '../../components/Common/Footer/Footer.jsx';

function UserRegister() {
  return (
      <>
        <AppUserRegister /> 
        <AppFooter />
      </>
  );
}

export default UserRegister;