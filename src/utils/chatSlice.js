import { createSlice } from "@reduxjs/toolkit";
import { LIVE_CHAT_COUNT } from "./constants";

const chatSlice = createSlice({
  name: "chat",
  initialState: {
    messages: [],
    comments: [],
  },
  reducers: {
    addMessages: (state, action) => {
      state.messages.splice(LIVE_CHAT_COUNT, 1);
      state.messages.unshift(action.payload);
    },
    addComments: (state, action) => {
      state.comments.push(action.payload);
    },
  },
});

export const { addMessages, addComments } = chatSlice.actions;

export default chatSlice.reducer;
