import { configureStore } from "@reduxjs/toolkit";
import searchReducer from "../utils/searchCacheSlice";

const appStore = configureStore({
    reducer: {
        searchSuggestion: searchReducer
    }
});

export default appStore;