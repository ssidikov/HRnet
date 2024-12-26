import { useSelector, useDispatch } from 'react-redux'
import Header from '../../components/Header'
import Table from '../../components/Table'
import { dataColumns } from '../../data/dataGridColumns'
import { format } from 'date-fns'
import { statesList } from '../../data/usStates'
import { useEffect } from 'react'
import { loadEmployeesFromApi } from '../../redux/slices/employees-slice'
import './EmployeeList.sass'

// Function for formatting the date
const formatDate = (date) => {
  return format(new Date(date), 'dd/MM/yyyy')
}

// Mapping of the full names of the States in their abbreviations
const statesMap = statesList.reduce((acc, state) => {
  acc[state.name] = state.abbreviation
  return acc
}, {})

const getStateAbbreviation = (stateName) => {
  return statesMap[stateName] || stateName
}

// Page of the list of employees
const EmployeeList = () => {
  document.title = 'HRnet - Current Employees'

  const dispatch = useDispatch()

  // Receive data from employees from Redux
  const employees = useSelector((state) => state.employees.employees).map((employee, index) => ({
    ...employee,
    id: index, // assign a unique ID
    startDate: formatDate(employee.startdate), // Formatting the start date of work
    dateOfBirth: formatDate(employee.birthdate), // Format the date of birth
    state: getStateAbbreviation(employee.state), // transform the name of the state to the abbreviation
  }))

  // Load data from the API if they are not in Redux (and, therefore, in Localstorage)
  useEffect(() => {
    if (employees.length === 0) {
      dispatch(loadEmployeesFromApi())
    }
  }, [dispatch, employees.length])

  return (
    <main id='employee-div' className='container'>
      <Header title='Current Employees' link='/' headerNavText='Home' />
      <section className='employee-list__table'>
        <Table employees={employees} columns={dataColumns} />
      </section>
    </main>
  )
}

export default EmployeeList
