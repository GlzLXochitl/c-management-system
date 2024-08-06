import React from 'react';

import '../../components/Common/Header/header.css';
import '../../components/Teacher/AlumnListTeacher/alumnListTeacher.css';
import '../../components/Common/Footer/footer.css';

import AppHeader from '../../components/Common/Header/Header.jsx';
import AppAlimnListTeacher from '../../components/Teacher/AlumnListTeacher/AlumnListTeacher.jsx';
import AppFooter from '../../components/Common/Footer/Footer.jsx';

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