import { createSelector } from '@reduxjs/toolkit'
import { formatDate, getStateAbbreviation } from '../../utils/utils'

const selectEmployees = (state) => state.employees.employees

export const selectFormattedEmployees = createSelector([selectEmployees], (employees) =>
  employees.map((employee, index) => ({
    ...employee,
    id: index, // Unique ID
    startDate: formatDate(employee.startdate), // Formatting the start date of work
    dateOfBirth: formatDate(employee.birthdate), // Formatting the date of birth
    state: getStateAbbreviation(employee.state), // Transformation of the state into abbreviation
  }))
)
