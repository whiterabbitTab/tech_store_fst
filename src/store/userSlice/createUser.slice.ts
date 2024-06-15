import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUserCreate } from "../../types/users.type";

const initialState: IUserCreate = 
  {
    username: 'None',
    email: 'None',
    password: 'None',
    confirmpass: 'None',
    user_icon: 'None',
    firstname: 'None',
    surname: 'None',
    basket: []
  }

export const createUserSlice = createSlice({
  name: 'CreateUser',
  initialState,
  reducers: {
    createUser: (state, {payload}: PayloadAction<IUserCreate>) => {
      state = payload
      console.log(state)
      return state
    }
  }
})

export const { actions, reducer } = createUserSlice