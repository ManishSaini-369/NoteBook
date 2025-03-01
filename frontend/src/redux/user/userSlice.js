import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  currentUser: null,
  errorDispatch: null,
  loading: false,
  theme: "light",
  
}

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    signInStart: (state) => {
      state.loading = true
    },
    signInSuccess: (state, action) => {
      state.currentUser = action.payload
      state.loading = false
      state.errorDispatch = null
    },
    signInFailure: (state, action) => {
      state.errorDispatch = action.payload
      state.loading = false
    },
    toggleTheme: (state) => {
      state.theme = state.theme === "light" ? "dark" : "light";
    },
    signoutStart: (state) => {
      state.loading = true
    },

    signoutSuccess: (state) => {
      state.currentUser = null
      state.loading = false
      state.errorDispatch = null
    },
    signoutFailure: (state, action) => {
      state.errorDispatch = action.payload
      state.loading = false
    },
  },
})

export const {
  signInFailure,
  signInStart,
  signInSuccess,
  signoutFailure,
  signoutStart,
  signoutSuccess,
  toggleTheme,
} = userSlice.actions

export default userSlice.reducer
