import React from 'react';

import '../../styles/views/teacher/headerTeacher.css';
import '../../styles/views/teacher/alumnListTeacher.css';
import '../../styles/layout/footer.css';

import AppHeaderTeacher from '../../components/Teacher/HeaderTeacher.jsx';
import AppAlimnListTeacher from '../../components/Teacher/AlumnListTeacher.jsx';
import AppFooter from '../../components/Common/Footer.jsx';

function AlimnListTeacher() {
  return (
      <>
        <AppHeaderTeacher />
        <AppAlimnListTeacher /> 
        <AppFooter />
      </>
  );
}

export default AlimnListTeacher;