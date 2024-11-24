import { useNavigate } from 'react-router-dom'
import { LogOut } from 'lucide-react'

const LogoutButton = () => {
  const navigate = useNavigate()

  const handleLogout = () => {
    localStorage.removeItem('user')
    alert('Has cerrado sesión.')
    navigate('/login')
  }

  return (
    <button
      onClick={handleLogout}
      className='flex items-center justify-center w-20 h-12 bg-red-500 hover:bg-red-600 text-white mx-auto items-align-center rounded-lg font-semibold transition-all'
    >
      <LogOut />
    </button>
  )
}

export default LogoutButton
