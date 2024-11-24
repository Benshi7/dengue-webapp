import { useState } from 'react'

const LoginPage = () => {
  const [province, setProvince] = useState('')
  const [department, setDepartment] = useState('')
  const [result, setResult] = useState('')

  const handleTest = () => {
    if (province && department) {
      setResult(`Usted vive en ${department}, ${province}.`)
    } else {
      setResult('Por favor, seleccione su provincia y departamento.')
    }
  }

  return (
    <div className='flex flex-col min-h-screen bg-gray-100'>
      {/* Navbar */}
      <nav className='bg-blue-500 p-4'>
        <div className='container mx-auto flex justify-between items-center'>
          <a href='#' className='text-white font-bold text-xl'>
            Mi Web
          </a>
          <div className='dropdown'>
            <label tabIndex={0} className='btn btn-primary btn-sm lg:hidden'>
              ☰
            </label>
            <ul
              tabIndex={0}
              className='menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52'
            >
              <li>
                <a href='#test'>Test</a>
              </li>
              <li>
                <a href='#footer'>Footer</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Body */}
      <main className='flex flex-1 items-center justify-center'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 w-full max-w-4xl'>
          {/* Image Section */}
          <div className='flex justify-center items-center'>
            <img
              src='https://via.placeholder.com/400'
              alt='Placeholder'
              className='rounded-lg shadow-lg'
            />
          </div>
          {/* Test Section */}
          <div id='test' className='p-6 bg-white shadow-lg rounded-lg'>
            <h2 className='text-2xl font-semibold mb-4'>
              Complete su información
            </h2>
            <div className='mb-4'>
              <label htmlFor='province' className='block mb-2'>
                Provincia
              </label>
              <select
                id='province'
                className='select select-bordered w-full'
                value={province}
                onChange={e => setProvince(e.target.value)}
              >
                <option value=''>Seleccione una provincia</option>
                <option value='Buenos Aires'>Buenos Aires</option>
                <option value='Córdoba'>Córdoba</option>
                <option value='Santa Fe'>Santa Fe</option>
              </select>
            </div>
            <div className='mb-4'>
              <label htmlFor='department' className='block mb-2'>
                Departamento
              </label>
              <select
                id='department'
                className='select select-bordered w-full'
                value={department}
                onChange={e => setDepartment(e.target.value)}
              >
                <option value=''>Seleccione un departamento</option>
                <option value='Capital'>Capital</option>
                <option value='General Paz'>General Paz</option>
                <option value='San Martín'>San Martín</option>
              </select>
            </div>
            <button className='btn btn-primary w-full' onClick={handleTest}>
              Ver Resultado
            </button>
            {result && <p className='mt-4 text-blue-600'>{result}</p>}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer id='footer' className='bg-blue-500 p-4 text-white text-center'>
        <p>Síganos en nuestras redes:</p>
        <div className='flex justify-center gap-4 mt-2'>
          <a
            href='https://instagram.com'
            target='_blank'
            rel='noopener noreferrer'
            className='text-xl'
          >
            📷 Instagram
          </a>
          <a
            href='https://facebook.com'
            target='_blank'
            rel='noopener noreferrer'
            className='text-xl'
          >
            📘 Facebook
          </a>
          <a
            href='https://twitter.com'
            target='_blank'
            rel='noopener noreferrer'
            className='text-xl'
          >
            🐦 Twitter
          </a>
        </div>
        <p className='mt-2'>"Siempre construyendo el futuro, juntos."</p>
      </footer>
    </div>
  )
}

export default LoginPage
