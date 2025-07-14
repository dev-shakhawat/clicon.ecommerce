import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    activeModal: "login",
    userInfo: localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null,
}

export const authSlice = createSlice({
  name: 'authentication',
  initialState,
  reducers: {
    ActiveModalSet: (state , action) => {
      state.activeModal = action.payload
    },
     
    userInfoSet: (state, action) => {
      state.userInfo = action.payload
    }
  },
})

export const { ActiveModalSet , userInfoSet } = authSlice.actions
export default authSlice.reducer
