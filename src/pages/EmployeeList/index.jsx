import { dataColumns } from '../../data/dataGridColumns'
import { DataGrid, GridToolbarQuickFilter, GridLinkOperator } from '@mui/x-data-grid'
import { Box } from '@mui/material'
import './EmployeeList.sass'
import Header from '../../components/Header'
import { statesList } from '../../data/usStates'
import { format } from 'date-fns'
import { memo } from 'react'

/**
 * Formats a date to a readable string
 * @param {Date} date
 * @returns formatted date string
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
 * Retrieves employees from local storage and maps data
 * @returns {Array} employees with formatted data
 */
// const getEmployees = () => {
//   const storedEmployees = localStorage.getItem('employees')
//   if (!storedEmployees) return []
//   return JSON.parse(storedEmployees).map((employee, index) => ({
//     ...employee,
//     id: index,
//     startDate: formatDate(employee.startdate),
//     dateOfBirth: formatDate(employee.birthdate),
//     state: getStateAbbreviation(employee.state), // Replace the name of the state for the abbreviation
//   }))
// }

const getEmployees = () => {
  try {
    const storedEmployees = JSON.parse(localStorage.getItem('employees')) || []
    return storedEmployees.map((employee, index) => ({
      ...employee,
      id: index,
      startDate: formatDate(employee.startdate),
      dateOfBirth: formatDate(employee.birthdate),
      state: getStateAbbreviation(employee.state),
    }))
  } catch (error) {
    console.error('Error parsing employees data:', error)
    return []
  }
}

/**
 * Returns a search toolbar
 * @returns {JSX.Element} Quick filter toolbar
 */
// const QuickSearchToolbar = () => {
//   return (
//     <Box
//       sx={{ p: 1 }}
//       className='employee-list__filter-toolbar'
//       role='toolbar'
//       aria-label='Quick Search Toolbar'>
//       <GridToolbarQuickFilter
//         quickFilterParser={(searchInput) =>
//           searchInput
//             .split(',')
//             .map((value) => value.trim())
//             .filter((value) => value !== '')
//         }
//         aria-label='Quick Search Input'
//       />
//     </Box>
//   )
// }

const QuickSearchToolbar = memo(() => {
  return (
    <Box
      sx={{ p: 1 }}
      className='employee-list__filter-toolbar'
      role='toolbar'
      aria-label='Quick Search Toolbar'>
      <GridToolbarQuickFilter
        quickFilterParser={(searchInput) =>
          searchInput
            .split(',')
            .map((value) => value.trim())
            .filter((value) => value !== '')
        }
        aria-label='Quick Search Input'
      />
    </Box>
  )
})
QuickSearchToolbar.displayName = 'QuickSearchToolbar'

/**
 * EmployeeList page component
 * @returns {JSX.Element} EmployeeList page
 */
const EmployeeList = () => {
  document.title = 'HRnet - Employees List'
  const rows = getEmployees()
  return (
    <main id='employee-div' className='employee-list container' role='main'>
      <Header title='Current Employees' link='/' headerNavText='Home' />
      <section className='employee-list__table' role='region' aria-label='Employee Table Section'>
        <div className='employee-list__table-main'>
          <DataGrid
            rows={rows}
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
            aria-label='Employee Data Table'
            getRowId={(row) => row.id}
          />
        </div>
      </section>
    </main>
  )
}

export default EmployeeList
