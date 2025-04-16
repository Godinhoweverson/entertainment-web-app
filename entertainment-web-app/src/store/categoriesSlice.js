import {createSlice} from '@reduxjs/toolkit';

const categories = createSlice({
    name:'category',
    initialState: {isClicked: false},
    reducers:{
        categoryToggle(state){
            state.isClicked = !state.isClicked
        },
    },
})

export const categoryActions= categories.actions;
export default categories