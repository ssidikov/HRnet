import { createSelector } from '@reduxjs/toolkit'
import { formatDate, getStateAbbreviation } from '../../utils/utils'

// Selecting the employees from the state
const selectEmployees = (state) => state.employees.employees

// Formatting the employee data
const formatEmployeeData = (employee, index) => ({
  ...employee,
  id: index, // Unique ID
  startDate: formatDate(employee.startdate), // Formatting the start date of work
  dateOfBirth: formatDate(employee.birthdate), // Formatting the date of birth
  state: getStateAbbreviation(employee.state), // State Transformation into Abbreviation
})

// Selector to format the employees
export const selectFormattedEmployees = createSelector([selectEmployees], (employees) =>
  employees.map(formatEmployeeData)
)
