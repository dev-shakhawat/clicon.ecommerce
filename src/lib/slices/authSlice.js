import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    activeModal: "login",
}

export const authSlice = createSlice({
  name: 'authentication',
  initialState,
  reducers: {
    ActiveModalSet: (state , action) => {
      state.activeModal = action.payload
    },
  },
})

export const { ActiveModalSet } = authSlice.actions
export default authSlice.reducer
