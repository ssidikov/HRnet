import { createSelector } from '@reduxjs/toolkit'

// selector to receive all employees
export const selectEmployees = (state) => state.employees.employees

// selector for receiving an employee by ID
export const selectEmployeeById = (id) =>
  createSelector([selectEmployees], (employees) => employees.find((e) => e.id === id))

// selector for receiving the selected department
export const selectSelectedDepartment = (state) => state.selection.selectedDepartment

// selector to obtain the selected state
export const selectSelectedState = (state) => state.selection.selectedState
