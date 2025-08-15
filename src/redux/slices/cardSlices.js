import { createSlice } from "@reduxjs/toolkit";

const cardSlice = createSlice({
  name: "card",
  initialState: [],
  reducers: {
    addCard: (state, action) => {
      state.push(action.payload);
    },
    deleteItem: (state, action) => {
      return state.filter((i) => i.id != action.payload);
    },
    increacesQuanity: (state, action) => {
      const myTarget = state.find((i) => i.id === action.payload);
      myTarget.quanity++;
    },
    decreacesQuanity: (state, action) => {
      const myTarget = state.find((i) => i.id === action.payload);
      myTarget.quanity > 1 ? myTarget.quanity-- : null;
    },
    resetCard: (state) => {
      state.length = 0;
    },
  },
});
export const {
  increacesQuanity,
  decreacesQuanity,
  addCard,
  resetCard,
  deleteItem,
} = cardSlice.actions;
export default cardSlice.reducer;
