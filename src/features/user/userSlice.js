import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    logged: false,
    user: {}
  },
  reducers: {
    logIn: (state) => {
      state.logged = true
    },
    logOut: (state) => {
      state.logged = false
      state.user = {}
    },
    setCredentials: (state, action) => {
      let userData = action.payload
      userData? state.user = userData : state.user = {}
    },
  },
})
export const { logIn, logOut, setCredentials } = userSlice.actions

export default userSlice.reducer