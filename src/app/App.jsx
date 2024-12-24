import { HashRouter, Routes, Route } from 'react-router-dom'
import CreateEmployee from '../pages/CreateEmployee'
import EmployeeList from '../pages/EmployeeList'

function App() {
  return (
    <HashRouter>
      <div className='app-container'>
        <main className='content-wrapper'>
          <Routes>
            <Route path='/' element={<CreateEmployee />} />
            <Route path='/employees' element={<EmployeeList />} />
          </Routes>
        </main>
      </div>
    </HashRouter>
  )
}

export default App
