import { configureStore } from '@reduxjs/toolkit'
import { stateReducer } from './slices/states-slice'
import { selectDepartmentReducer } from './slices/department-slice'
import { employeesReducer } from './slices/employees-slice'

export const store = configureStore({
  reducer: {
    state: stateReducer,
    department: selectDepartmentReducer,
    employees: employeesReducer,
  },
})
