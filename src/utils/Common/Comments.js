import React from 'react';

import '../../components/Common/Header/header.css';
import '../../components/Views/Comments/comments.css';
import '../../components/Common/Footer/footer.css';

import AppHeader from '../../components/Common/Header/Header.jsx';
import AppComments from '../../components/Views/Comments/Comments.jsx';
import AppFooter from '../../components/Common/Footer/Footer.jsx';

function Comments() {
  return (
      <>
        <AppHeader />
        <AppComments /> 
        <AppFooter />
      </>
  );
}

export default Comments;