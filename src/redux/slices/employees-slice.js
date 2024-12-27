import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

// Utility for loading employees from Localstorage
const loadEmployeesFromLocalStorage = () => {
  const employees = localStorage.getItem('employees')
  return employees ? JSON.parse(employees) : []
}

// Thunk to download employees from API
export const loadEmployeesFromApi = createAsyncThunk(
  'employees/loadFromApi',
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch(
        'https://raw.githubusercontent.com/ssidikov/HRnet/refs/heads/main/src/data/employees.json'
      )
      if (!response.ok) {
        throw new Error('Failed to fetch employees')
      }
      const data = await response.json()
      return data
    } catch (error) {
      return rejectWithValue(error.message)
    }
  }
)

// initial state
const initialState = {
  employees: loadEmployeesFromLocalStorage(),
  loading: false,
  error: null,
}

// Slice to manage the condition of employees
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
  },
  extraReducers: (builder) => {
    builder
      .addCase(loadEmployeesFromApi.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(loadEmployeesFromApi.fulfilled, (state, action) => {
        state.loading = false
        state.employees = action.payload
      })
      .addCase(loadEmployeesFromApi.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload
      })
  },
})

export const { addEmployee, setEmployees } = employeesSlice.actions
export const employeesReducer = employeesSlice.reducer
