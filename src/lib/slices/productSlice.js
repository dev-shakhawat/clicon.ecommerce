import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    currentCatagory: "",
    viewProduct: {}
}

export const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    currentCat: (state , action) => {
      state.currentCatagory = action.payload
    },
    currentProduct: (state , action) => {
      state.viewProduct = action.payload
    }
  },
})

export const { currentCat , currentProduct } = productSlice.actions
export default productSlice.reducer
