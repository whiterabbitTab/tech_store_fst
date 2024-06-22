import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IPassChange } from "../../types/users.type";


const initialState: IPassChange = {
  password: '',
  newpassword: '',
  confirmpassword: ''
}

export const changePass = createSlice({
  name: 'changePass',
  initialState,
  reducers: {
    changePass: (state, {payload: pass}: PayloadAction<{[key: string]: string}>) => {
      state = {
        ...state,
        [Object.keys(pass)[0]]: pass[Object.keys(pass)[0] as keyof object]
      }
      console.log(state)
      return state
    }
  }
})