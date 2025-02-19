import { configureStore } from "@reduxjs/toolkit";
import searchReducer from "../utils/searchCacheSlice";
import liveChatReducer from "../utils/LiveChatSlice";

const appStore = configureStore({
    reducer: {
        searchSuggestion: searchReducer,
        liveChat: liveChatReducer
    }
});

export default appStore;