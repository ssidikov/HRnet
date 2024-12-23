import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  employees: [],
}

const employeesSlice = createSlice({
  name: 'employees',
  initialState,
  reducers: {
    addEmployee: (state, action) => {
      state.employees.push(action.payload)
    },
    setEmployees: (state, action) => {
      state.employees = action.payload
    },
    clearEmployees: (state) => {
      state.employees = []
    },
  },
})

export const { addEmployee, setEmployees, clearEmployees } = employeesSlice.actions

export const employeesReducer = employeesSlice.reducer
