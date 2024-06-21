import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUserChange } from "../../types/users.type";

const initialState: IUserChange = {
  email: '',
  password: '',
  user_icon: '',
  username: '',
  firstname: '',
  surname: '',
  basket: []
}

export const changeUserSlice = createSlice({
  name: 'changeUser',
  initialState,
  reducers: {
    changeUser: (state, {payload}: PayloadAction<IUserChange>) => {
      state = payload
      console.log(state)
      return state
    }
  }
})