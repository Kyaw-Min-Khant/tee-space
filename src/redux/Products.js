import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
};

export const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      state.products.push(action.payload);
    },
    removeProduct: (state, { payload }) => {
      state.products = state.products.filter((item) => item?.id !== payload);
    },
  },
});

export const { addProduct, removeProduct } = productSlice.actions;
export default productSlice.reducer;
