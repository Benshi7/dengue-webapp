import { useEffect, useState } from 'react'
import styles from './Login.module.css'
import { useNavigate } from 'react-router-dom'

const LoginForm = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const navigate = useNavigate()

  useEffect(() => {
    const loggedInUser = localStorage.getItem('user')
    if (loggedInUser) {
      navigate('/')
    }
  }, [navigate])

  const handleLogin = e => {
    e.preventDefault()

    if (!/\S+@\S+\.\S+/.test(email)) {
      setError('Por favor, introduzca un email válido.')
      return
    }

    if (!password) {
      setError('Por favor, introduzca una contraseña.')
      return
    }

    const role = email.includes('admin')
      ? 'admin'
      : email.includes('user')
      ? 'user'
      : 'guest'

    const mockUser = {
      email,
      token: 'mockToken123',
      role
    }

    localStorage.setItem('user', JSON.stringify(mockUser))

    if (role === 'admin') {
      alert('Bienvenido, administrador.')
      navigate('/')
    } else if (role === 'user') {
      alert('Bienvenido, usuario.')
      navigate('/')
    } else {
      alert('Bienvenido, invitado.')
      navigate('/')
    }

    // Reset fields
    setEmail('')
    setPassword('')
    setError('')
  }

  const switchToRegister = () => {
    alert('Temporalmente deshabilitado')
  }

  const handleGoogleLogin = async () => {}
  const handleFacebookLogin = async () => {}
  return (
    <div
      className={`w-full min-h-screen flex items-center justify-center -mt-40`}
    >
      <div className='backdrop-blur-md shadow-lg border border-gray-300 rounded-xl p-10 w-[32%]'>
        <div className='flex justify-center gap-4 mb-6'>
          <button
            className='flex items-center justify-center w-1/2 h-12 bg-yellow-500 hover:bg-yellow-600 text-white rounded-lg font-semibold transition-all'
            onClick={handleGoogleLogin}
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='20'
              height='20'
              fill='currentColor'
              className='mr-2'
              viewBox='0 0 16 16'
            >
              <path d='M15.545 6.558a9.4 9.4 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.7 7.7 0 0 1 5.352 2.082l-2.284 2.284A4.35 4.35 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.8 4.8 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.7 3.7 0 0 0 1.599-2.431H8v-3.08z' />
            </svg>
            Google
          </button>
          <button
            className='flex items-center justify-center w-1/2 h-12 bg-blue-800 hover:bg-blue-900 text-white rounded-lg font-semibold transition-all'
            onClick={handleFacebookLogin}
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='20'
              height='20'
              fill='currentColor'
              className='mr-2'
              viewBox='0 0 16 16'
            >
              <path d='M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951' />
            </svg>
            Facebook
          </button>
        </div>
        <h2 className='text-center text-2xl font-bold mb-6'>Iniciar Sesión</h2>
        <form onSubmit={handleLogin}>
          <div className={`${styles['form-control']} ${styles['btn']} mb-4 `}>
            <input
              type='email'
              placeholder='Ingrese su email'
              className='input input-bordered w-full'
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
          </div>
          <div className={`${styles['form-control']} ${styles['btn']} mb-4 `}>
            <input
              type='password'
              placeholder='Ingrese su contraseña'
              className='input input-bordered w-full'
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
          </div>
          <div className='flex justify-between text-sm mb-4'>
            <label className='flex items-center'>
              <input type='checkbox' className='checkbox mr-2' />
              Recordarme
            </label>
            <a href='#' className='link link-hover'>
              ¿Olvidaste tu contraseña?
            </a>
          </div>
          {error && <p className='text-red-500 text-sm mb-4'>{error}</p>}
          <button
            type='submit'
            className={`${styles['btn-primary']} ${styles['btn']} w-2/4 `}
          >
            Entrar
          </button>
        </form>
        <p className='text-center mt-4'>
          ¿No tienes una cuenta?{' '}
          <button
            onClick={switchToRegister}
            className='text-blue-500 hover:underline'
          >
            Regístrate aquí
          </button>
        </p>
      </div>
    </div>
  )
}

export default LoginForm
