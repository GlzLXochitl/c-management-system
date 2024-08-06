import React from 'react';

import '../../components/Views/Login/login.css';
import '../../components/Common/Footer/footer.css';

import AppLogin from '../../components/Views/Login/Login.jsx';
import AppFooter from '../../components/Common/Footer/Footer.jsx';

function Login() {
  return (
      <>
        <AppLogin />
        <AppFooter />     
      </>
  );
}

export default Login;

