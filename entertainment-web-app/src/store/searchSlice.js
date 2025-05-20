import { createSlice } from "@reduxjs/toolkit";
import DATA from '../data.json';

const search = createSlice({
    name: 'searchContent',
    initialState:{
        query:'',
        result:[]
    },
    reducers:{
        searchingContent(state, action){
            const query = action.payload.searchQuery.toLowerCase().trim();
            const result = DATA.filter(item => 
                item.title.toLowerCase().includes(query)
            );

            state.query = query;
            state.result = result;
        },
    },
});

export const searchActions = search.actions;
export const searchReducer = search.reducer;