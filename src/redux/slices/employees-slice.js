import { createSlice } from '@reduxjs/toolkit'

// Function for loading employees from Localstorage
const loadEmployeesFromLocalStorage = () => {
  const employees = localStorage.getItem('employees')
  return employees ? JSON.parse(employees) : [] // If there is data in Localstorage, pars them
}

// initial state
const initialState = {
  employees: loadEmployeesFromLocalStorage(), // Download employees from Localstorage
}

// Slice to manage the condition of employees
const employeesSlice = createSlice({
  name: 'employees',
  initialState,
  reducers: {
    // adding a new employee
    addEmployee: (state, action) => {
      state.employees.push(action.payload) // Add an employee to an array
      localStorage.setItem('employees', JSON.stringify(state.employees)) // Save in Localstorage
    },
    // Installation of the list of employees
    setEmployees: (state, action) => {
      state.employees = action.payload // replace employees with a new list
      localStorage.setItem('employees', JSON.stringify(state.employees)) // Save in Localstorage
    },
  },
})

export const { addEmployee, setEmployees } = employeesSlice.actions

export const employeesReducer = employeesSlice.reducer

// Thunk for fetching data from github
export const loadEmployeesFromApi = () => async (dispatch) => {
  try {
    const response = await fetch(
      'https://raw.githubusercontent.com/ssidikov/HRnet/refs/heads/main/src/data/employees.json'
    )
    const data = await response.json() // Get data from github
    dispatch(setEmployees(data)) // Send data to Redux
  } catch (error) {
    console.error('Error loading employees:', error) // Logging the error
  }
}
