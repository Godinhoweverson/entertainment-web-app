import { configureStore } from "@reduxjs/toolkit";
import {categoriesReducer, bookmarksReducer} from './categoriesSlice.js';

const store = configureStore({
    reducer: {
        category: categoriesReducer,
        bookMarks: bookmarksReducer
    }
});

export default store