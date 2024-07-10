import { Routes, Route } from "react-router-dom"
import Users from "../containers/users"
import Programs from "../containers/programs"
import Levels from "../containers/levels"
import Courses from "../containers/courses"
import Questions from "../containers/questions"
import Dashboard from "../containers/dashboard"
import Login from "../containers/auth/login"
import UserDetails from "../containers/users/userDetails"
import Profile from "../containers/profile"
import Notifications from "../containers/notifications"
import Admin from "../containers/admin"
import Settings from "../containers/settings"

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path='/users' element={<Users />} />
      <Route path='/class-management' element={<Programs />} />
       <Route path='/levels' element={<Levels/>} />
       <Route path='/courses' element={<Courses/>} />
       <Route path='/questions-management' element={<Questions/>} />
       <Route path='/login' element={<Login />} />
       <Route path='/users/details' element={<UserDetails />} />
       <Route path='/profile' element={<Profile />} />
       <Route path="/notifications" element={<Notifications />} />
       <Route path="/admin-management" element={<Admin />} />
       <Route path="/settings" element={<Settings />} />
    </Routes>
  )
}

export default AppRouter