import { configureStore } from "@reduxjs/toolkit";
import categories from './categoriesSlice.js';

const store = configureStore({
    reducer: {
        category:categories.reducer,
    }
});

export default store