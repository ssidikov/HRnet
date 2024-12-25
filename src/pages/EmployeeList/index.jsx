import { useSelector } from 'react-redux'
import Header from '../../components/Header'
import Table from '../../components/Table'
import { dataColumns } from '../../data/dataGridColumns'
import { format } from 'date-fns'
import { statesList } from '../../data/usStates'
import './EmployeeList.sass'

/**
 * Formatting of the date
 * @param {string} date
 * @returns {string}
 */
const formatDate = (date) => {
  return format(new Date(date), 'dd/MM/yyyy')
}

/**
 * Maps full state names to abbreviations
 * @param {string} stateName
 * @returns {string} state abbreviation
 */

const statesMap = statesList.reduce((acc, state) => {
  acc[state.name] = state.abbreviation
  return acc
}, {})

const getStateAbbreviation = (stateName) => {
  return statesMap[stateName] || stateName
}

/**
 * Страница списка сотрудников
 * @returns {JSX.Element}
 */
const EmployeeList = () => {
  document.title = 'HRnet - Current Employees'

  const employees = useSelector((state) => state.employees.employees).map((employee, index) => ({
    ...employee,
    id: index,
    startDate: formatDate(employee.startdate),
    dateOfBirth: formatDate(employee.birthdate),
    state: getStateAbbreviation(employee.state),
  }))

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
