import { createSlice } from "@reduxjs/toolkit";

const LiveChatSlice = createSlice({
    name: "live chat",
    initialState: {
        messages: null
    },
    reducers: {
        addLiveMsg: (state, action) => {
            state.messages = action.payload;
        }
    }
});

export const {addLiveMsg} = LiveChatSlice.actions;
export default LiveChatSlice.reducer;