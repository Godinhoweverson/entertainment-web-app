import { createSlice } from "@reduxjs/toolkit";

const modal = createSlice({
    name: 'modal',
    initialState: { open: false },
    reducers: {
        openModal(state) {
            state.open = true;
        },
        closeModal(state) {
            state.open = false;
        }
    }
});

export const modalAction = modal.actions;
export const modalReducer = modal.reducer;