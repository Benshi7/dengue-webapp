import { Link } from 'react-router-dom'
import ThemeController from '../ThemeController/ThemeController'
import { HomeIcon, LayoutDashboard, ChartColumn, KeySquare } from 'lucide-react'

const Navbar = () => {
  return (
    <nav className='flex items-center p-4 bg-base-100'>
      <div className='flex justify-center items-center flex-grow gap-6 sm:gap-6 md:gap-18 xl:gap-20 2xl:gap-24'>
        <Link
          to='/'
          className='transition-colors duration-300 hover:text-accent p-2 rounded'
        >
          <p className='flex font-bold gap-4 items-center'>
            <span className='hidden sm:block'>INICIO</span>
            <HomeIcon className='w-5 h-5' />
          </p>
        </Link>
        <Link
          to='/dashboard'
          className='transition-colors duration-300 hover:text-accent p-2 rounded'
        >
          <p className='flex font-bold gap-4 items-center'>
            <span className='hidden sm:block'>DASHBOARD</span>
            <LayoutDashboard className='w-5 h-5' />
          </p>
        </Link>
        <Link
          to='/charts'
          className='transition-colors duration-300 hover:text-accent p-2 rounded'
        >
          <p className='flex font-bold gap-4 items-center'>
            <span className='hidden sm:block'>GRÁFICOS</span>
            <ChartColumn className='w-5 h-5' />
          </p>
        </Link>
        {localStorage.getItem('user') &&
        JSON.parse(localStorage.getItem('user')).role === 'admin' ? (
          <Link
            to='/admin'
            className='transition-colors duration-300 hover:text-accent p-2 rounded'
          >
            <p className='flex font-bold gap-4 items-center'>
              <span className='hidden sm:block'>ADMIN</span>
              <KeySquare className='w-5 h-5' />
            </p>
          </Link>
        ) : null}
      </div>
      <span className='ml-auto flex items-end gap-4'>
        <ThemeController />
      </span>
    </nav>
  )
}

export default Navbar
