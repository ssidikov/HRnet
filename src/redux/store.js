import { configureStore } from '@reduxjs/toolkit'
import { selectStateReducer } from './slices/states-slice'
import { selectDepartmentReducer } from './slices/department-slice'
import { employeesStateReducer } from './slices/employees-slice'

export const store = configureStore({
  reducer: {
    state: selectStateReducer,
    department: selectDepartmentReducer,
    employees: employeesStateReducer,
  },
})
