import React from 'react';

import '../../styles/layout/header.css';
import '../../styles/views/teacher/teacherDashboard.css';
import '../../styles/views/teacher/cardSportTeacher.css';
import '../../styles/layout/footer.css';

import AppHeader from '../../components/Common/Header.jsx';
import AppTeacherDashboard from '../../components/Teacher/TeacherDashboard.jsx';
import AppCardSportTeacher from '../../components/Teacher/CardSportTeacher.jsx';
import AppFooter from '../../components/Common/Footer.jsx';

function TeacherDashboard() {
  return (
      <>
        <AppHeader />
        <AppTeacherDashboard /> 
        <AppCardSportTeacher /> 
        <AppFooter />
      </>
  );
}

export default TeacherDashboard;