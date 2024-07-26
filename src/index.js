import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import AppLogin from '../src/utils/Common/Login.js';
import AppLoginNotRegistered from '../src/utils/Common/LoginNotRegistered.js';

import AppUserDashboard from '../src/utils/User/UserDashboard.js';
import AppProfile from '../src/utils/User/Profile.js';
import AppFormApply from './utils/Admin/FormApply.js';

import AppAdminDashboard from '../src/utils/Admin/AdminDashboard.js';
import AppAlumnListAdmin from '../src/utils/Admin/AlumnListAdmin.js';

import AppTeacherDashboard from '../src/utils/Teacher/TeacherDashboard.js';
import AppAlumnListTeacher from '../src/utils/Teacher/AlumnListTeacher.js';

import AppNotifications from '../src/utils/Common/Notifications.js';
import AppchangePassword from '../src/utils/Common/changePassword.js';
import AppPrivacy from '../src/utils/Common/Privacy.js';
import AppHelp from '../src/utils/Common/Help.js';
import AppComments from '../src/utils/Common/Comments.js';

import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<AppLogin />} />
        <Route path="/loginNotRegistered" element={<AppLoginNotRegistered />} />

        <Route path="/userDashboard" element={<AppUserDashboard />} />
        <Route path="/profile" element={<AppProfile />} />
        <Route path="/formApply" element={<AppFormApply />} />

        <Route path="/adminDashboard" element={<AppAdminDashboard />} />
        <Route path="/alumnListAdmin" element={<AppAlumnListAdmin />} />

        <Route path="/teacherDashboard" element={<AppTeacherDashboard />} />
        <Route path="/alumnListTeacher" element={<AppAlumnListTeacher />} />

        <Route path="/notifications" element={<AppNotifications />} />
        <Route path="/password" element={<AppchangePassword />} />
        <Route path="/privacy" element={<AppPrivacy />} />
        <Route path="/help" element={<AppHelp />} />
        <Route path="/comments" element={<AppComments />} />
           
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();