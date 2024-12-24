import { HashRouter, Routes, Route } from 'react-router-dom'
import CreateEmployee from '../pages/CreateEmployee'
import EmployeeList from '../pages/EmployeeList'

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path='/' element={<CreateEmployee />} />
        <Route path='/employees' element={<EmployeeList />} />
      </Routes>
    </HashRouter>
  )
}

export default App
