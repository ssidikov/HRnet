import { configureStore } from '@reduxjs/toolkit'
import { employeesReducer } from './slices/employees-slice'
import localStorageMiddleware from './middleware/localStorageMiddleware'

export const store = configureStore({
  reducer: {
    employees: employeesReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(localStorageMiddleware),
})
