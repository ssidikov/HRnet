import { createSlice } from "@reduxjs/toolkit";

const initialSelectState = {
    selected:false,
}

const selectStateSlice = createSlice({
    name:"selectState",
    initialState:initialSelectState,
    reducers:{
        stateSelected: (state) => {
            state.selected=true
        },
    }
})

export const { stateSelected } = selectStateSlice.actions

export const selectStateReducer = selectStateSlice.reducer;