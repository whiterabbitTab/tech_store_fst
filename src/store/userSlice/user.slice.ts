import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUser } from "../../types/users.type";

const initialState: IUser = {
  id: '',
  username: '',
  email: '',
  password: '',
  user_icon: '',
  basket: []
}

export const userSlice = createSlice({
  name: 'userSlice',
  initialState,
  reducers: {
    changeCountProduct: (state, {payload}: PayloadAction<{ id_product: string, countProducts: string }>) => {
      state?.basket.map((el) => {
        if (el.id === payload.id_product) {
          if (payload.countProducts === '-') {
            el.count -= 1
          } else if (payload.countProducts === '+') {
            el.count += 1
          } else {
            el.count = Number(payload.countProducts)
            console.log(el.count)
          }
        }
      })
    }
  }
})

export const { actions, reducer } = userSlice