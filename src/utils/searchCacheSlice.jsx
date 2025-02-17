import { createSlice } from "@reduxjs/toolkit";

const searchCacheSlice = createSlice({
    name: "search cache",
    initialState: {
        suggestion: {}
    },
    reducers: {
        addSuggestion: (state, action) => {
            const {search, data} = action.payload;
            state.suggestion[search] = data;
        }
    }
});

export const {addSuggestion} = searchCacheSlice.actions;
export default searchCacheSlice.reducer;