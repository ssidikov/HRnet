import { createSlice } from '@reduxjs/toolkit'

// The initial condition for choosing a department and condition
const initialState = {
  selectedState: null,
  selectedDepartment: null,
}

// Slice to control the choice
const selectionSlice = createSlice({
  name: 'selection',
  initialState,
  reducers: {
    selectState: (state, action) => {
      state.selectedState = action.payload
    },
    selectDepartment: (state, action) => {
      state.selectedDepartment = action.payload
    },
  },
})

export const { selectState, selectDepartment } = selectionSlice.actions
export const selectionReducer = selectionSlice.reducer
