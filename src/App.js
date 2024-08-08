import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; 
import { AuthProvider } from '../src/context/AuthProvider';

//import ProtectedRoute from '../src/routes/ProtectedRoute';

import AppAdminDashboard from '../src/utils/Admin/AdminDashboard.js';
import AppAlumnListAdmin from '../src/utils/Admin/AlumnListAdmin.js';
import AppForm from './utils/Common/Form.js';
import AppChangePassword from '../src/utils/Common/ChangePassword.js';
import AppComments from '../src/utils/Common/Comments.js';
import AppHelp from '../src/utils/Common/Help.js';
import AppLogin from '../src/utils/Common/Login.js';
import AppLoginNotRegistered from '../src/utils/Common/LoginNotRegistered.js';
import AppNotifications from '../src/utils/Common/Notifications.js';
import AppPrivacy from '../src/utils/Common/Privacy.js';
import AppAlumnListTeacher from '../src/utils/Teacher/AlumnListTeacher.js';
import AppTeacherDashboard from '../src/utils/Teacher/TeacherDashboard.js';
import AppProfile from '../src/utils/User/Profile.js';
import AppUserDashboard from '../src/utils/User/UserDashboard.js';
import AppUserRegister from '../src/utils/Common/UserRegister.js';
import AppFormRegisterCourse from '../src/utils/Admin/FormRegisterCourse.js';

const App = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<AppLogin />} />

          {/*<Route path="admin-dashboard" element={
            <ProtectedRoute>
              <AppAdminDashboard />
            </ProtectedRoute>
          } />

          <Route path="alumn-list-admin" element={
            <ProtectedRoute>
              <AppAlumnListAdmin />
            </ProtectedRoute>
          } />
          
          <Route path="form" element={
            <ProtectedRoute>
              <AppForm />
            </ProtectedRoute>
          } />

          <Route path="chage-password" element={
            <ProtectedRoute>
              <AppChangePassword />
            </ProtectedRoute>
          } />
          
          <Route path="comments" element={
            <ProtectedRoute>
              <AppComments />
            </ProtectedRoute>
          } />

          <Route path="notifications" element={
            <ProtectedRoute>
              <AppNotifications />
            </ProtectedRoute>
          } />

          <Route path="alumn-list-teacher" element={
            <ProtectedRoute>
              <AppAlumnListTeacher />
            </ProtectedRoute>
          } />

          <Route path="teacher-dashboard" element={
            <ProtectedRoute>
              <AppTeacherDashboard />
            </ProtectedRoute>
          } />
         
         <Route path="profile" element={
            <ProtectedRoute>
              <AppProfile />
            </ProtectedRoute>
          } />

          <Route path="user-dashboard" element={
            <ProtectedRoute>
              <AppUserDashboard />
            </ProtectedRoute>
          } />
           
          <Route path="user-register" element={
            <ProtectedRoute>
              <AppUserRegister />
            </ProtectedRoute>
          } />

           */}

          <Route path="admin-dashboard" element={<AppAdminDashboard />} />
          <Route path="alumn-list-admin" element={<AppAlumnListAdmin />} />
          <Route path="form" element={<AppForm />} />
          <Route path="change-password" element={<AppChangePassword />} />
          <Route path="comments" element={<AppComments />} />
          <Route path="notifications" element={<AppNotifications />} />
          <Route path="alumn-list-teacher" element={<AppAlumnListTeacher />} />
          <Route path="teacher-dashboard" element={<AppTeacherDashboard />} />
          <Route path="profile" element={<AppProfile />} />
          <Route path="user-dashboard" element={<AppUserDashboard />} />
          <Route path="user-register" element={<AppUserRegister />} />
          <Route path="form-register-course" element={<AppFormRegisterCourse />} />
          
          <Route path="help" element={<AppHelp />} />
          <Route path="not-registered" element={<AppLoginNotRegistered />} />
          <Route path="privacy" element={<AppPrivacy />} />
          
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
};

export default App;

