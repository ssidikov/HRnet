import { dataColumns } from '../../data/dataGridColumns'
import moment from 'moment'
import { DataGrid, GridToolbarQuickFilter, GridLinkOperator } from '@mui/x-data-grid'
import { Box } from '@mui/material'
import './EmployeeList.sass'
import Header from '../../components/Header'
import { statesList } from '../../data/usStates'

/**
 * Formats a date to a readable string
 * @param {Date} date
 * @returns formatted date string
 */
const formatDate = (date) => {
  return moment(date).format('L')
}

/**
 * Maps full state names to abbreviations
 * @param {string} stateName
 * @returns {string} state abbreviation
 */
const getStateAbbreviation = (stateName) => {
  const state = statesList.find((item) => item.name === stateName)
  return state ? state.abbreviation : stateName
}

/**
 * Retrieves employees from local storage and maps data
 * @returns {Array} employees with formatted data
 */
const getEmployees = () => {
  const storedEmployees = localStorage.getItem('employees')
  if (!storedEmployees) return []
  return JSON.parse(storedEmployees).map((employee, index) => ({
    ...employee,
    id: index,
    startDate: formatDate(employee.startdate),
    dateOfBirth: formatDate(employee.birthdate),
    state: getStateAbbreviation(employee.state), // Replace the name of the state for the abbreviation
  }))
}

/**
 * Returns a search toolbar
 * @returns {JSX.Element} Quick filter toolbar
 */
const QuickSearchToolbar = () => {
  return (
    <Box sx={{ p: 1 }} className='employee-list__filter-toolbar'>
      <GridToolbarQuickFilter
        quickFilterParser={(searchInput) =>
          searchInput
            .split(',')
            .map((value) => value.trim())
            .filter((value) => value !== '')
        }
      />
    </Box>
  )
}

/**
 * EmployeeList page component
 * @returns {JSX.Element} EmployeeList page
 */
const EmployeeList = () => {
  document.title = 'HRnet - Employees List'
  return (
    <main id='employee-div' className='employee-list container'>
      <Header title='Current Employees' link='/' headerNavText='Home' />
      <section className='employee-list__table'>
        <div className='employee-list__table-main'>
          <DataGrid
            rows={getEmployees()}
            columns={dataColumns}
            disableColumnMenu={true}
            rowsPerPageOptions={[10, 25, 100]}
            components={{ Toolbar: QuickSearchToolbar }}
            initialState={{
              filter: {
                filterModel: {
                  items: [],
                  quickFilterLogicOperator: GridLinkOperator.Or,
                },
              },
            }}
          />
        </div>
      </section>
    </main>
  )
}

export default EmployeeList
