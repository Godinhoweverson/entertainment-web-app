import {createSlice} from '@reduxjs/toolkit';

const categories = createSlice({
    name:'category',
    initialState: {category: false},
    reducers:{
        categoryChoice(state, action){
            state.category = action.payload.category;
        },
    },
});

export const categoryActions= categories.actions;
export default categories