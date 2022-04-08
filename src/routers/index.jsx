import { Routes, Route } from 'react-router-dom'

import Dashboard from '../components/Dashboard'
import DetailsBucket from '../components/DetailsBucket'
import Layout from '../components/Layout'
import Login from '../components/Login'

const AppRouter = () => {
  return (
    <Routes>
      <Route path='login' element={<Login />} />
      <Route path='/' element={<Layout />}>
        <Route path='dashboard' element={<Dashboard />} />
        <Route path=':bucketId' element={<DetailsBucket />} />
      </Route>
      
    </Routes>
  )
}

export default AppRouter