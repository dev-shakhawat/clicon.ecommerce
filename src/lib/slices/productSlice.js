import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentCatagory: "",
  pricerange : [0, 20000],
  viewProduct: {},
};

export const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    currentCat: (state, action) => {
      state.currentCatagory = action.payload;
    },
    pricerange: (state, action) => {
      state.pricerange = action.payload;
    },
    currentProduct: (state, action) => {
      state.viewProduct = action.payload;
    },
  },
});

export const { currentCat, currentProduct, pricerange } = productSlice.actions;
export default productSlice.reducer;
