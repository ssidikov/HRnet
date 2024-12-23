import { createSlice } from "@reduxjs/toolkit";

const initialState={
    employees: [],
}

const employeesStateSlice = createSlice({
    name:"employeesState",
    initialState,
    reducers: {
        addEmployee: (state, action) => {
            console.log(action.payload);
            state.employees.push(action.payload)          
        }
    }
})

export const { addEmployee } = employeesStateSlice.actions

export const employeesStateReducer = employeesStateSlice.reducer;