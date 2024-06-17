import { ChangeEvent, ReactNode, useState } from "react";
import { createUserSlice } from "../../store/userSlice/createUser.slice";
import { useTypedDispatch, useTypedSelector } from "../../hooks/redux";
import { patterns } from "../../constants/patterns.constants";
import { loginUserSlice } from "../../store/userSlice/loginUser.slice";

export const InputInfo = ({ regtype, type, label, placeholder, name }: { regtype: string, type: string, label: ReactNode, placeholder: string, name: string }) => {

  const [validate, setValidate] = useState<boolean>(true)
  const newuser = useTypedSelector(state => state.createUser)
  const existuser = useTypedSelector(state => state.loginUser)
  const dispatch = useTypedDispatch()

  const handleUser = (e: ChangeEvent<HTMLInputElement>, regtype: string) => {
    const input_user = e.target
    let name_input: string = input_user.name
    input_user.value.match(patterns[name_input as keyof object]) === null ? setValidate(false) : setValidate(true)

    if (validate) {
      if (regtype === 'registration') {
        dispatch(createUserSlice.actions.createUser({
          ...newuser,
          [name_input]: input_user.value
        }))
      } else {
        dispatch(loginUserSlice.actions.login({
          ...existuser,
          [name_input]: input_user.value
        }))
      }
    }
  }

  return(
    <div className={`mt-3 flex flex-col gap-y-4 h-20`}>
      {label}
      <input onChange={(e) => handleUser(e, regtype)} name={name} type={type} placeholder={placeholder} />
    </div>
  );
};
