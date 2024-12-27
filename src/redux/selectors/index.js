import { createSelector } from '@reduxjs/toolkit'
import { formatDate, getStateAbbreviation } from '../../utils/utils'

const selectEmployees = (state) => state.employees.employees

const formatEmployeeData = (employee, index) => ({
  ...employee,
  id: index, // Unique ID
  startDate: formatDate(employee.startdate), // Formatting the start date of work
  dateOfBirth: formatDate(employee.birthdate), // Formatting the date of birth
  state: getStateAbbreviation(employee.state), // State Transformation into Abbreviation
})

export const selectFormattedEmployees = createSelector([selectEmployees], (employees) =>
  employees.map(formatEmployeeData)
)
