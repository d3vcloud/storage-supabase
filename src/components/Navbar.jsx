import { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'

const Navbar = () => {
  const { user } = useContext(AuthContext)
  return (
    <nav className='flex justify-between items-center h-14 mb-10 px-4 bg-slate-800'>
      <a href="/" class="font-bold px-3 py-2 text-lg text-orange-600">Welcome: <span className='text-yellow-400'>{ user.email }</span></a>
      <button type="button" className="px-3 py-2 bg-gray-200 rounded-lg ring-gray-700 font-medium">
        Logout ➡️
      </button>
    </nav>
  )
}

export default Navbar