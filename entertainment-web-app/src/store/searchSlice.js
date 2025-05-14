import { createSlice } from "@reduxjs/toolkit";
import DATA from '../data.json';

const search = createSlice({
    name: 'searchContent',
    initialState: DATA,
    reducers:{
        searchingContent(state, action){
            const query = action.payload.searchQuery.toLowerCase().trim();
            return DATA.filter(item => 
                item.title.toLowerCase().includes(query)
            );
        },
    },
});

export const searchActions = search.actions;
export const searchReducer = search.reducer;