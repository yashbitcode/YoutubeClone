import { createSlice } from "@reduxjs/toolkit";

const LiveChatSlice = createSlice({
    name: "live chat",
    initialState: {
        messages: []
    },
    reducers: {
        addLiveMsg: (state, action) => {
            state.messages.unshift(action.payload);
        }
    }
});

export const {addLiveMsg} = LiveChatSlice.actions;
export default LiveChatSlice.reducer;