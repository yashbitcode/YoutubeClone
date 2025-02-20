import { createSlice } from "@reduxjs/toolkit";

const LiveChatSlice = createSlice({
    name: "live chat",
    initialState: {
        messages: []
    },
    reducers: {
        addLiveMsg: (state, action) => {
            if(state.messages.length) state.messages.splice(30, 1);
            state.messages.push(action.payload);
        }
    }
});

export const {addLiveMsg} = LiveChatSlice.actions;
export default LiveChatSlice.reducer;