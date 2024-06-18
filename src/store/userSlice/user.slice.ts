import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IBasket } from "../../types/users.type";

const initialState: string = 'not'

export const userSlice = createSlice({
  name: 'userSlice',
  initialState,
  reducers: {
    authUser: (state, {payload}: PayloadAction<string>) => {
      state = payload
      return state
    }
  }
})

export const { actions, reducer } = userSlice