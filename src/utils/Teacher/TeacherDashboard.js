import React from 'react';

import '../../styles/views/teacher/headerTeacher.css';
import '../../styles/views/teacher/teacherDashboard.css';
import '../../styles/views/teacher/cardSportTeacher.css';
import '../../styles/layout/footer.css';

import AppHeaderTeacher from '../../components/Teacher/HeaderTeacher.jsx';
import AppTeacherDashboard from '../../components/Teacher/TeacherDashboard.jsx';
import AppCardSportTeacher from '../../components/Teacher/CardSportTeacher.jsx';
import AppFooter from '../../components/Common/Footer.jsx';

function TeacherDashboard() {
  return (
      <>
        <AppHeaderTeacher />
        <AppTeacherDashboard /> 
        <AppCardSportTeacher /> 
        <AppFooter />
      </>
  );
}

export default TeacherDashboard;