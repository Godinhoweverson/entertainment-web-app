import { configureStore } from "@reduxjs/toolkit";
import {categoriesReducer, bookmarksReducer} from './categoriesSlice.js';
import {searchReducer} from './searchSlice.js'

const store = configureStore({
    reducer: {
        category: categoriesReducer,
        bookMarks: bookmarksReducer,
        search:searchReducer
    }
});

export default store