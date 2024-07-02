import React from 'react';

import '../../styles/layout/header.css';
import '../../styles/views/common/comments.css';
import '../../styles/layout/footer.css';

import AppHeader from '../../components/Common/Header.jsx';
import AppComments from '../../components/Views/Comments.jsx';
import AppFooter from '../../components/Common/Footer.jsx';

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