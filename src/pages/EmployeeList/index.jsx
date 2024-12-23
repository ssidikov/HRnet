// import React from 'react'
// import { Link } from 'react-router-dom'
import { dataColumns } from '../../data/dataGridColumns'
import moment from 'moment'
import { DataGrid, GridToolbarQuickFilter, GridLinkOperator } from '@mui/x-data-grid'
import { Box } from '@mui/material'
import './EmployeeList.sass'
import Header from '../../components/Header'

/**
 *
 * @param {Date} date
 * @returns new date formatted
 */
const formatDate = (date) => {
  return moment(date).format('L')
}

/**
 * returns an array of employees
 * @returns {Array}
 */
const getEmployees = () => {
  let employees = JSON.parse(localStorage.getItem('employees'))
  employees = [
    ...new Set(
      employees.map((employee, index) => {
        return {
          ...employee,
          id: index,
          startDate: formatDate(employee.startdate),
          dateOfBirth: formatDate(employee.birthdate),
        }
      })
    ),
  ]
  return employees
}

/**
 * returns a search toolbar
 * @returns {JSX}
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
 * returns the EmployeeList page
 * @returns {JSX}
 */
const EmployeeList = () => {
  document.title = 'HRnet - Current Employees'
  return (
    <main id='employee-div' className='employee-list'>
      <Header title='Current Employees' link='/' headerNavText='Home' />
      <section className='employee-list__table'>
        <div style={{ height: 500, width: '100%', backgroundColor: 'white' }}>
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
