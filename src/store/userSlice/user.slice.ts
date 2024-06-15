import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: string = 'not'

export const userSlice = createSlice({
  name: 'userSlice',
  initialState,
  reducers: {
    authUser: (state, {payload}: PayloadAction<string>) => {
      state = payload
      console.log(state)
      return state
    }
  }
})

export const { actions, reducer } = userSlice