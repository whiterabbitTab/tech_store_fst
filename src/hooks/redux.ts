import { RootState, appDispatch } from "../store/store";
import { TypedUseSelectorHook, useSelector, useDispatch } from 'react-redux'

export const useTypedDispatch = () => useDispatch<appDispatch>()
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector