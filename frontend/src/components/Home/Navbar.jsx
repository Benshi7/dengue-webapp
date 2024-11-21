import { Link } from 'react-router-dom'
import ThemeController from '../ThemeController/ThemeController'
import { HomeIcon, LayoutDashboard, ChartColumn, KeySquare } from 'lucide-react'

const Navbar = () => {
  return (
    <nav className='flex items-center p-4 bg-base-100'>
      <div className='flex justify-center gap-24 items-center flex-grow'>
        <Link to='/'>
          <p className='flex font-bold gap-2 items-center'>
            INICIO <HomeIcon className='w-5 h-5' />
          </p>
        </Link>
        <Link to='/dashboard'>
          <p className='flex font-bold gap-2 items-center'>
            DASHBOARD <LayoutDashboard className='w-5 h-5' />
          </p>
        </Link>
        <Link to='/charts'>
          <p className='flex font-bold gap-2 items-center'>
            GRÁFICOS <ChartColumn className='w-5 h-5' />
          </p>
        </Link>
        {localStorage.getItem('user') &&
        localStorage.getItem('user') === 'admin' ? (
          <Link to='/admin'>
            <p className='flex font-bold gap-2 items-center'>
              ADMIN <KeySquare className='w-5 h-5' />
            </p>
          </Link>
        ) : null}
      </div>
      <span className='ml-auto flex items-end gap-2'>
        <ThemeController />
      </span>
    </nav>
  )
}

export default Navbar
