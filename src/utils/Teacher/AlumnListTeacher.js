import React from 'react';

import '../../styles/layout/header.css';
import '../../styles/views/teacher/alumnListTeacher.css';
import '../../styles/layout/footer.css';

import AppHeader from '../../components/Common/Header.jsx';
import AppAlimnListTeacher from '../../components/Teacher/AlumnListTeacher.jsx';
import AppFooter from '../../components/Common/Footer.jsx';

function AlimnListTeacher() {
  return (
      <>
        <AppHeader />
        <AppAlimnListTeacher /> 
        <AppFooter />
      </>
  );
}

export default AlimnListTeacher;