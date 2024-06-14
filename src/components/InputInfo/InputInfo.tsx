import { ChangeEvent, ReactNode, useState } from "react";
import { createUserSlice } from "../../store/userSlice/createUser.slice";
import { useTypedDispatch, useTypedSelector } from "../../hooks/redux";

export const InputInfo = ({ type, label, placeholder, name }: { type: string, label: ReactNode, placeholder: string, name: string }) => {

  const [validate, setValidate] = useState<boolean>(true)
  const newuser = useTypedSelector(state => state.createUser)
  const dispatch = useTypedDispatch()
  
  const pattern_email = /[a-zA-Z]{3}[0-9a-zA-Z]*\d*@(gmail)*(yandex)*(mail)*[.]\D{2}\D*/
  const pattern_password = /[0-9a-zA-Z$@!?%]{7}[0-9a-zA-Z$@!?%]*/
  const pattern_name = /[A-Z]{1}[a-z]*/
  const pattern_username = /[A-Za-z]{3}[A-Za-z0-9_$]*/

  const handleCreateUser = (e: ChangeEvent<HTMLInputElement>) => {
    const input_user = e.target
    let name_input: string = input_user.name
    if (name_input === 'confirmpass') {
      name_input = 'password'
    }

    switch(name_input) {
      case 'email':
        input_user.value.match(pattern_email) === null ? setValidate(false) : setValidate(true)
        break
      case 'password':
        input_user.value.match(pattern_password) === null ? setValidate(false) : setValidate(true)
        break
      case 'firstname':
      case 'surname':
        input_user.value.match(pattern_name) === null ? setValidate(false) : setValidate(true)
        break
      case 'username':
        input_user.value.match(pattern_username) === null ? setValidate(false) : setValidate(true)
        break
    }

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
