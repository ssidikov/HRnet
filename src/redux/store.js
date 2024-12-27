import { configureStore } from '@reduxjs/toolkit'
import { employeesReducer } from './slices/employees-slice'

// Middleware to maintain a state in Localstorage
const localStorageMiddleware = (store) => (next) => (action) => {
  const result = next(action)
  if (['employees/addEmployee', 'employees/setEmployees'].includes(action.type)) {
    const { employees } = store.getState().employees
    localStorage.setItem('employees', JSON.stringify(employees))
  }
  return result
}

// Store creation
export const store = configureStore({
  reducer: {
    employees: employeesReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(localStorageMiddleware),
})
