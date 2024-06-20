import { ChangeEvent, ReactNode, useEffect, useState } from "react";
import { createUserSlice } from "../../store/userSlice/createUser.slice";
import { useTypedDispatch, useTypedSelector } from "../../hooks/redux";
import { patterns } from "../../constants/patterns.constants";
import { loginUserSlice } from "../../store/userSlice/loginUser.slice";
import { countries, regions } from "../../constants/checkout.constants";

export interface IINputInfo {
  regtype?: string;
  type: string;
  label: ReactNode;
  placeholder: string;
  name: string;
}

export const InputInfo = ({ regtype, type, label, placeholder, name }: IINputInfo) => {

  const [validate, setValidate] = useState<boolean>(true)
  const newuser = useTypedSelector(state => state.createUser)
  const existuser = useTypedSelector(state => state.loginUser)
  const dispatch = useTypedDispatch()

  const handleUser = (e: ChangeEvent<HTMLInputElement>, regtype?: string) => {
    const input_user = e.target
    let name_input: string = input_user.name
    Object.keys(patterns).includes(name_input) && input_user.value.match(patterns[name_input as keyof object]) === null ? setValidate(false) : setValidate(true)

    if (validate) {
      if (regtype === 'registration') {
        dispatch(createUserSlice.actions.createUser({
          ...newuser,
          [name_input]: input_user.value
        }))
      } else if (regtype === 'checkout') {
        console.log(input_user.value.match(patterns[name_input as keyof object]))
      } else {
        dispatch(loginUserSlice.actions.login({
          ...existuser,
          [name_input]: input_user.value
        }))
      }
    }
  }
  if (type !== 'select') {
    return(
      <div className={`mt-3 flex flex-col gap-y-4 h-20`}>
        {label}
        <input onChange={(e) => handleUser(e, regtype)} name={name} type={type} placeholder={placeholder} />
      </div>
    );
  } else {
    const [selectedCountry, setSelectedCountry] = useState()
    const handleChooseCountry = (e: ChangeEvent<HTMLSelectElement>) => {
      const value = e.target.value
      setSelectedCountry(value)
      console.log(regions[selectedCountry as keyof object])
    }

    return (
      <div className={`mt-3 flex flex-col gap-y-4 h-20`}>
        {label}
        <select onChange={(e) => handleChooseCountry(e)} name={name} id="CountrySelect">
          <option value="Choose country" disabled selected>Choose {name}</option>
          {countries.map((country, i) => {
            return <option key={i} value={country}>{country}</option>
          })}
        </select>
      </div>
    )
  }
};