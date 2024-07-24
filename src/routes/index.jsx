import { Routes, Route } from 'react-router-dom';
import Users from '../containers/users';
import Programs from '../containers/programs';
import Levels from '../containers/levels';
import Courses from '../containers/courses';
import Questions from '../containers/questions';
import Dashboard from '../containers/dashboard';
import Login from '../containers/auth/login';
import UserDetails from '../containers/users/userDetails';
import Profile from '../containers/profile';
import Notifications from '../containers/notifications';
import Admin from '../containers/admin';
import Settings from '../containers/settings';
import CourseMaterials from '../containers/courseMaterials';
import PrivateRoute from './private';
import ViewCourse from '../containers/courses/viewCourse';
import ViewQuestions from '../containers/questions/viewQuestions';
import Permissions from '../containers/admin/permissions';

const AppRouter = () => {
  return (
    <Routes>
      <Route
        path="/dashboard"
        element={<PrivateRoute component={Dashboard} />}
      />
      <Route path="/users" element={<PrivateRoute component={Users} />} />
      <Route
        path="/class-management"
        element={<PrivateRoute component={Programs} />}
      />
      <Route path="/levels" element={<PrivateRoute component={Levels} />} />
      <Route path="/courses" element={<PrivateRoute component={Courses} />} />
      <Route
        path="/courses/details/:id"
        element={<PrivateRoute component={ViewCourse} />}
      />
      <Route
        path="/courses-materials"
        element={<PrivateRoute component={CourseMaterials} />}
      />
      <Route
        path="/questions-management"
        element={<PrivateRoute component={Questions} />}
      />
      <Route
        path="/questions-management/view/:id/:course"
        element={<PrivateRoute component={ViewQuestions} />}
      />
      <Route path="/" element={<Login />} />
      <Route
        path="/users/details/:id"
        element={<PrivateRoute component={UserDetails} />}
      />
      <Route path="/profile" element={<PrivateRoute component={Profile} />} />
      <Route
        path="/notifications"
        element={<PrivateRoute component={Notifications} />}
      />
      <Route
        path="/permissions/:id"
        element={<PrivateRoute component={Permissions} />}
      />
      <Route
        path="/admin-management"
        element={<PrivateRoute component={Admin} />}
      />
      <Route path="/settings" element={<PrivateRoute component={Settings} />} />
    </Routes>
  );
};

export default AppRouter;
