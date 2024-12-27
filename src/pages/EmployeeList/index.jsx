import { useSelector, useDispatch } from 'react-redux'
import Header from '../../components/Header'
import Table from '../../components/Table'
import { dataColumns } from '../../data/dataGridColumns'
import { useEffect } from 'react'
import { loadEmployees } from '../../redux/slices/employees-slice'
import { selectFormattedEmployees } from '../../redux/selectors'
import './EmployeeList.sass'

// Page of the list of employees
const EmployeeList = () => {
  document.title = 'HRnet - Current Employees'

  const dispatch = useDispatch()

  // Use a selector to obtain formatted data from employees
  const employees = useSelector(selectFormattedEmployees)
  const { loading, error } = useSelector((state) => state.employees)

  // get data from a localstorage or API
  useEffect(() => {
    if (employees.length === 0) {
      dispatch(loadEmployees())
    }
  }, [dispatch, employees.length])

  // Conditional display for loading and error states
  if (loading) {
    return <div className='loading'>Loading...</div>
  }

  if (error) {
    return <div className='error'>Error loading employees. Please try again later.</div>
  }

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
