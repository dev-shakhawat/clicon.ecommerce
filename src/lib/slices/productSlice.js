import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    currentCatagory: "",
}

export const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    currentCat: (state , action) => {
      state.currentCatagory = action.payload
    },
  },
})

export const { currentCat } = productSlice.actions
export default productSlice.reducer
