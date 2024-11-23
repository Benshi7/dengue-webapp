import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'
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
