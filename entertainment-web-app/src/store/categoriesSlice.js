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

const bookMarks = createSlice({
    name:'bookmark',
    initialState:{isBookmarked: false, title:null},
    reducers:{
        isBookmarked(state){
            state.isBookmarked = !state.isBookmarked
        },
        handleTitle(state, action){
            state.title = action.payload.title
        }
    }
})

export const categoryActions = categories.actions;
export const bookmarkActions = bookMarks.actions;

export const categoriesReducer = categories.reducer;
export const bookmarksReducer = bookMarks.reducer;
