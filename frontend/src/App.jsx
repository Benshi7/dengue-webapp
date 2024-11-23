import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
<<<<<<< HEAD
import './App.css'
=======
>>>>>>> 8bdca3cf6b5f5c826020a6ca72d761db35dc72a3

import Home from './components/Home/Home'
import DashboardPage from './components/Dashboard/DashboardPage'
import ChartDashBoard from './components/Estadisticas/ChartDashBoard'

const App = () => {
  return (
    <Router>
      <div className='App'>
        <Routes>
          <Route
            path='/'
            element={
              <>
                <Home title={'Dengue Dataset'}>
                  <h2 className='text-3xl font-bold pb-4 text-center'>
                    Bienvenido
                  </h2>
                </Home>
              </>
            }
          />
          <Route
            path='/dashboard'
            element={
              <>
                <Home title={'Dengue Dashboard'}>
                  <DashboardPage />
                </Home>
              </>
            }
          />
          <Route
            path='/charts'
            element={
              <>
                <Home title={'Graficos Dengue'}>
                  <ChartDashBoard />
                </Home>
              </>
            }
          />
          <Route
            path='/admin'
            element={
              <>
                <Home title={'Admin Dashboard'}>
                  <h2>Hola, admin</h2>
                </Home>
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  )
}

export default App
