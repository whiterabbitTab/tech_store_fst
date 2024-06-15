import { ChangeEvent, ReactNode, useState } from "react";
import { createUserSlice } from "../../store/userSlice/createUser.slice";
import { useTypedDispatch, useTypedSelector } from "../../hooks/redux";
import { patterns } from "../../constants/patterns.constants";

export const InputInfo = ({ type, label, placeholder, name }: { type: string, label: ReactNode, placeholder: string, name: string }) => {

  const [validate, setValidate] = useState<boolean>(true)
  const newuser = useTypedSelector(state => state.createUser)
  const dispatch = useTypedDispatch()

  const handleCreateUser = (e: ChangeEvent<HTMLInputElement>) => {
    const input_user = e.target
    let name_input: string = input_user.name
    input_user.value.match(patterns[name_input as keyof object]) === null ? setValidate(false) : setValidate(true)

    if (validate) {
      dispatch(createUserSlice.actions.createUser({
        ...newuser, 
        [name_input]: input_user.value
      }))
    }
  } 

  return(
    <div className={`mt-3 flex flex-col gap-y-4 h-20`}>
      {label}
      <input onChange={handleCreateUser} name={name} type={type} placeholder={placeholder} />
    </div>
  );
};
