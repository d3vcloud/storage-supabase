import { Routes, Route } from 'react-router-dom'

import Dashboard from '../components/Dashboard'
import Login from '../components/Login'

const AppRouter = () => {
  return (
    <Routes>
      <Route path='/' element={<Dashboard />} />
      <Route path='login' element={<Login />} />
    </Routes>
  )
}

export default AppRouter