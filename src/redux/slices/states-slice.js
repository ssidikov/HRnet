import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  selected: false,
}

const stateSlice = createSlice({
  name: 'state',
  initialState,
  reducers: {
    stateSelected: (state) => {
      state.selected = true
    },
  },
})

export const { stateSelected } = stateSlice.actions
export const stateReducer = stateSlice.reducer
