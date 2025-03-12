import React, { useContext } from 'react'
import Login from './Pages/Login'

import { ToastContainer } from 'react-toastify'

import { Route, Routes } from 'react-router-dom'
import { DoctorContext } from './Context/DoctorContext'
import { AdminContext } from './Context/AdminContext'
import Dashboard from './Pages/Admin/Dashboard'
import AllAppointments from './Pages/Admin/AllAppointments'
import AddDoctor from './Pages/Admin/AddDoctor'
import DoctorsList from './Pages/Admin/DoctorsList'
import DoctorDashboard from './Pages/Doctor/DoctorDashboard'
import DoctorAppointments from './Pages/Doctor/DoctorAppointment'
import DoctorProfile from './Pages/Doctor/DoctorProfile'
import Navbar from './Components/Navbar'
import Sidebar from './Components/Sidebar'




const App = () => {
  const { dToken } = useContext(DoctorContext)
  const { aToken } = useContext(AdminContext)

  return dToken || aToken ? (
    <div className='bg-[#F8F9FD]'>
      <ToastContainer />
      <Navbar />
      <div className='flex items-start'>
        <Sidebar />
        <Routes>
          <Route path='/' element={<></>} />
          <Route path='/admin-dashboard' element={<Dashboard />} />
          <Route path='/all-appointments' element={<AllAppointments />} />
          <Route path='/add-doctor' element={<AddDoctor />} />
          <Route path='/doctor-list' element={<DoctorsList />} />
          <Route path='/doctor-dashboard' element={<DoctorDashboard />} />
          <Route path='/doctor-appointments' element={<DoctorAppointments />} />
          <Route path='/doctor-profile' element={<DoctorProfile />} />
        </Routes>
      </div>
    </div>
  ) : (
    <>
      <ToastContainer />
      <Login />
    </>
  )
}

export default App