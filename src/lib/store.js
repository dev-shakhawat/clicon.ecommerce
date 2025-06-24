import { configureStore } from '@reduxjs/toolkit'
import authSlice from './slices/authSlice'
import productSlice from './slices/productSlice'

export const makeStore = () => {
  return configureStore({
    reducer: {
      auth: authSlice,
      product: productSlice
    }
  })
}
