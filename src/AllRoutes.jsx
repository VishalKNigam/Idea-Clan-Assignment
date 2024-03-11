import React from 'react'
import { Route, Routes } from 'react-router-dom'
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import CourseDetails from './pages/CourseDetails';
import AvailableCourses from './pages/AvailableCourses';
import ScheduleLecture from './pages/ScheduleLecture';
import ManageAssignments from './pages/ManageAssignments';
import ManageSprints from './pages/ManageSprints';
import DeleteCourse from './pages/DeleteCourse';
import DeleteSchedule from './pages/DeleteSchedule';
import DeleteAssignment from './pages/DeleteAssignment';
import Dashboard from './pages/Dashboard';
const AllRoutes = () => {
  return (
        <Routes>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Dashboard />} />
          <Route path="/coursedetails" element={<CourseDetails />} />
          <Route path="/availablecourses" element={<AvailableCourses />} />
          <Route path="/schedulelecture" element={<ScheduleLecture />} />
          <Route path="/manageassignments" element={<ManageAssignments />} />
          <Route path="/managesprints" element={<ManageSprints />} />
          <Route path="/deletecourse" element={<DeleteCourse />} />
          <Route path="/deleteschedule" element={<DeleteSchedule />} />
          <Route path="/deleteassignment" element={<DeleteAssignment/>} />
        </Routes>
   
  )
}

export default AllRoutes