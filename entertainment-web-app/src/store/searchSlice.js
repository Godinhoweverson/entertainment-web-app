import { createSlice } from "@reduxjs/toolkit";
import DATA from '../data.json';

const search = createSlice({
    name: 'searchContent',
    initialState: DATA,
    reducers:{
        searchingContent(state, action){
            state.filter((item) => {
                let nameTitle = item.title.toLowerCase();
                let payload = action.payload;
                if(nameTitle.includes(payload)){
                    return item;
                }else{
                    return "We don't have that...";
                };
            })
        },
    },
});

export const searchActions = search.actions;
export const searchReducer = search.reducer;