import { Box } from '@chakra-ui/react'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'

const Layout = () => {
  return (
    <>
      <Navbar />
      <Box my={4} mx={6}>
        <Outlet />
      </Box>
    </>

  )
}

export default Layout