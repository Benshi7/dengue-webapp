// Unauthorized.jsx
import { ShieldOff, ArrowLeft } from 'lucide-react'
import { Link } from 'react-router-dom'

const Unauthorized = () => {
  return (
    <div className='flex flex-col items-center justify-center h-screen -mt-40'>
      <div className='text-center space-y-6'>
        <div className='flex mx-auto justify-center items-center bg-red-500 text-white w-24 h-24 rounded-full shadow-lg'>
          <ShieldOff className='w-12 h-12' />
        </div>
        <h1 className='text-4xl font-bold text-primary'>Ups, lo siento!</h1>
        <p className='text-lg text-base-content'>
          No tienes permiso para ver esta página. Si cree que se trata de un
          error contáctese con el administrador.
        </p>
        <div className='mt-6'>
          <Link
            to='/'
            className='btn btn-primary flex items-center gap-2 w-1/6 mx-auto'
          >
            <ArrowLeft />
            Volver
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Unauthorized
