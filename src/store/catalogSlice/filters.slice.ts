import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IFilters } from "../../types/catalog.type";

const initialState: IFilters[] = [
  {
    name: 'perPage',
    params: [0, 20]
  },
  {
    name: 'category',
    params: ['all']
  },
  {
    name: 'price',
    params: ['all']
  },
  {
    name: "colors",
    params: ["all"]
  },
  {
    name: "brands",
    params: ["all"]
  }
]

//params: ['custom', 'msiAllInOne', 'hp/compaq']

export const filterSlice = createSlice({
  name: 'filterSlice',
  initialState,
  reducers: {
    handleFilter: (state, {payload}: PayloadAction<IFilters>) => {
      const newState = state.map(st => {
        return st.name === payload.name ? payload : {name: st.name, params: st.params}
      })
      console.log(newState)
      return newState
    }
  }
})