import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchProduct = createAsyncThunk(
  "product/fetchProduct",
  async () => {
    const res = await axios.get(
      "https://my-json-server.typicode.com/Amiriiidev/fake-api/items",
      {
        maxContentLength: Infinity,
        maxBodyLength: Infinity,
      }
    );
    return res.data;
  }
);

const productSlice = createSlice({
  name: "product",
  initialState: {
    data: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProduct.fulfilled, (state, action) => {
      state.data = action.payload;
    });
  },
});

export default productSlice.reducer;
