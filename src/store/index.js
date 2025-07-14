import { configureStore } from "@reduxjs/toolkit";
import {categoriesReducer, bookmarksReducer} from './categoriesSlice.js';
import {searchReducer} from './searchSlice.js'
import { modalReducer } from "./modal.js";

const store = configureStore({
    reducer: {
        category: categoriesReducer,
        bookMarks: bookmarksReducer,
        search:searchReducer,
        modal: modalReducer
    }
});

export default store