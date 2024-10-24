import ThemeController from '../ThemeController/ThemeController'

const Home = () => {
  return (
    <main>
      <ThemeController />
      <h1 className='text-4xl font-bold'>Dengue Dataset</h1>
      <button className='btn btn-primary mt-4'>Botón de Ejemplo</button>
    </main>
  )
}

export default Home
