import ThemeController from '../ThemeController/ThemeController'

const Home = () => {
  return (
    <main>
      <ThemeController />
      <section className='2xl:pt-22 xl:pt-20 md:pt-12 sm:pt-4 '>
        <h1 className='text-4xl font-bold pb-4'>Dengue Dataset</h1>
      </section>
    </main>
  )
}

export default Home
