import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './components/Home/Home'
import DashboardPage from './components/Dashboard/DashboardPage'
import ChartDashBoard from './components/Estadisticas/ChartDashBoard'
import LoginForm from './components/Login/LoginForm'
import PrivateRoute from './components/PrivateRoute'
import LogoutButton from './components/Login/LogOutButton'
import Admin from './components/Admin/Admin'
import Unauthorized from './components/Admin/Unauthorized'

function App () {
  return (
    <Router>
      <div className='App'>
        <Routes>
          <Route
            path='/'
            element={
              <>
                <PrivateRoute>
                  <Home title={'Dengue Dataset'}>
                    <h2 className='text-4xl font-bold pb-4 text-center'>
                      Bienvenido
                    </h2>
                    <LogoutButton />
                  </Home>
                </PrivateRoute>
              </>
            }
          />
          <Route
            path='/dashboard'
            element={
              <>
                <PrivateRoute>
                  <Home title={'Dengue Dashboard'}>
                    <DashboardPage />
                  </Home>
                </PrivateRoute>
              </>
            }
          />
          <Route
            path='/charts'
            element={
              <>
                <PrivateRoute>
                  <Home title={'Graficos Dengue'}>
                    <ChartDashBoard />
                  </Home>
                </PrivateRoute>
              </>
            }
          />
          <Route
            path='/admin'
            element={
              <>
                <PrivateRoute adminOnly={true}>
                  <Home title={'Admin Dashboard'}>
                    <Admin />
                  </Home>
                </PrivateRoute>
              </>
            }
          />
          <Route
            path='/unauthorized'
            element={
              <>
                <Home title={''}>
                  <Unauthorized />
                </Home>
              </>
            }
          />
          <Route
            path='/login'
            element={
              <>
                <Home title={'Login'}>
                  <LoginForm />
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
