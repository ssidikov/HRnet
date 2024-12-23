import { createSlice } from '@reduxjs/toolkit'

const initialSelectDepartment = {
  selected: false,
}

const selectDepartmentSlice = createSlice({
  name: 'department',
  initialState: initialSelectDepartment,
  reducers: {
    departmentSelected: (state) => {
      state.selected = true
    },
  },
})

export const { departmentSelected } = selectDepartmentSlice.actions
export const selectDepartmentReducer = selectDepartmentSlice.reducer
