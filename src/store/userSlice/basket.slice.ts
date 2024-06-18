import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IBasket } from "../../types/users.type";

const initialState: IBasket[] = []

export const basketSlice = createSlice({
  name: 'basketSlice',
  initialState,
  reducers: {
    addToBasket: (state, {payload}: PayloadAction<IBasket>) => {
      if(state.filter(prod => prod.id === payload.id).length !== 1) {
        state = [...state, payload]
      } 
      console.log(state)
      return state
    }
  }
})