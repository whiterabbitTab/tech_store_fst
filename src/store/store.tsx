import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { userApi } from "./api/userApi";
import { productApi } from "./api/productApi";
import { reducer } from "./userSlice/user.slice";

const reducers = combineReducers({
    [userApi.reducerPath]: userApi.reducer,
    [productApi.reducerPath]: productApi.reducer,
    user: reducer
})

export const store = configureStore({
    reducer: reducers,
    middleware: 
        (getDefaultMiddleware) => getDefaultMiddleware().concat(userApi.middleware).concat(productApi.middleware)
})

export type RootState = ReturnType<typeof store.getState>
export type appDispatch = typeof store.dispatch