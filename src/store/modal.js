import { createSlice } from "@reduxjs/toolkit";

const modal = createSlice({
    name:'modal',
    initialState:{open:false},
    reducers:{
        modalClose(state){
            state.open = state.open
        }
    }
})

export const modalAction = modal.actions;
export const modalReducer = modal.reducer;