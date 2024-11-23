import Navbar from './Navbar'

// eslint-disable-next-line react/prop-types
const Home = ({ title, children }) => {
  return (
    <>
      <Navbar />
      <main>
        <section className='2xl:pt-16 xl:pt-12 md:pt-8 sm:pt-4 '>
          <h1 className='text-4xl font-bold pb-4 text-center text-primary'>
            {title}
          </h1>
          {children}
        </section>
      </main>
    </>
  )
}

export default Home
