import React from 'react';

import '../../components/Common/Header/header.css';
import '../../components/Admin/FormRegisterCourse/formRegisterCourse.css';
import '../../components/Common/Footer/footer.css';

import AppHeader from '../../components/Common/Header/Header.jsx';
import AppFormRegisterCourse from '../../components/Admin/FormRegisterCourse/FormRegisterCourse.jsx';
import AppFooter from '../../components/Common/Footer/Footer.jsx';

function FormRegisterCourse() {
  return (
      <>
        <AppHeader />
        <AppFormRegisterCourse/>  
        <AppFooter />
      </>
  );
}

export default FormRegisterCourse;