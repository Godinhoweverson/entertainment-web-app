import {createSlice} from '@reduxjs/toolkit';

const categories = createSlice({
    name:'category',
    initialState: false,
    reducers:{
        categoryToggle(state){
            return !state;
        },
    },
})

export const {categoryToggle} = categories.actions;
export default categories.reducer