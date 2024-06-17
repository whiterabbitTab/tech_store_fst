import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ILoginData {
  email: string;
  password: string;
}

const initialState: ILoginData = {
  email: '',
  password: ''
}

export const loginUserSlice = createSlice({
  name: 'loginUser',
  initialState,
  reducers: {
    login: (state, {payload}: PayloadAction<ILoginData>) => {
      state = payload
      return state
    }
  }
})