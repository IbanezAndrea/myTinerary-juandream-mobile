import AsyncStorage from '@react-native-async-storage/async-storage'
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
    setCredentials: async(state, action) => {
      let userData = action.payload.user
      let token = action.payload.token
      userData? state.user = userData : state.user = {}
      token && AsyncStorage.setItem("token",token)
    },
  },
})
export const { logIn, logOut, setCredentials } = userSlice.actions

export default userSlice.reducer