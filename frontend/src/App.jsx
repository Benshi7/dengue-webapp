import './App.css'
import Home from './components/Home/Home'
import DashboardPage from './components/Dashboard/DashboardPage'

function App () {
  return (
    <div>
      <Home />
      <div className='App'>
        <DashboardPage />
      </div>
    </div>
  )
}

export default App
