import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./slices/productSlices";
import cardReducer from "./slices/cardSlices";
export const store = configureStore({
  reducer: {
    product: productReducer,
    card: cardReducer,
  },
});
