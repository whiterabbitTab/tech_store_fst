import { FormEvent, useEffect, useState } from 'react';
import { InputInfo } from '../../components/InputInfo/InputInfo';
import styles from '../../styles/Auth.module.scss'
import { inputValues } from '../../constants/auth.constants';
import useLocalStorage from 'use-local-storage';
import { useTypedSelector } from '../../hooks/redux';
import { useCreateUserMutation, useGetAllUsersQuery } from '../../store/api/userApi';
import { Bounce, ToastContainer } from 'react-toastify';
import { userExist, differentPass, occupiedUsername, emptyFields } from '../../constants/authValidate.constants';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import { IUser } from '../../types/users.type';

export const Auth = () => {

  const [haveAccount, setHaveAccount] = useState<boolean>(true)
  const [newUserAccount, setNewUserAccount] = useState<IUser>()
  const { data: users } = useGetAllUsersQuery(null)
  const [isAuth, setIsAuth] = useLocalStorage<string>('isAuth', '')
  const [ createUserAccount ] = useCreateUserMutation()
  const navigate = useNavigate()

  const userData = useTypedSelector(state => state.createUser)
  const account = () => {
    setIsAuth('ui1')
  }

  const createUser = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (userData.email === 'None' || userData.password === 'None' ||  userData.username === 'None') {
      emptyFields()
    } else if (users?.filter(user => user.email === userData.email).length !== 0) {
      userExist()
    } else if (userData.password !== userData.confirmpass) {
      differentPass()
    } else if (users.filter(user => user.username === userData.username).length !== 0) {
      occupiedUsername()
    } else {
      const { confirmpass: _, ...newUser } = userData
      createUserAccount(newUser).then(response => setIsAuth(response.data?.id)).catch(response => response.error)
    }
  }

  useEffect(() => {
    isAuth !== 'not' && navigate('/')
  }, [isAuth])

  if (haveAccount) {
    return(
      <div className={styles.auth__page}>
        <div className='flex flex-row text-xs font-semibold'>Home<span className='mx-2 text-[#0156FF]'>{">"}</span>Login</div>
        <h1>Customer Login</h1>
        <div className={styles.auth__blocks}>
          <form className={styles.login__block}>
            <h1>Registered Customers</h1>
            <p>If you have an account, sign in with your email address.</p>
            <InputInfo type='email' placeholder='Your E-mail' name='email' label={<label htmlFor='email'>Email<span>*</span></label>} />
            <InputInfo type='password' placeholder='Your Password' name='password' label={<label htmlFor='email'>Password<span>*</span></label>} />
            <div className={styles.buttons}>
              <button type='submit' className={styles.login__button} onClick={account}>Sign in</button>
              <button type='button' className={styles.forgot_pass__button}>Forgot Your Password?</button>
            </div>
          </form>
          <div className={styles.new__customer__block}>
            <h1>New Customer?</h1>
            <p>Creating an account has many benefits:</p>
            <ul>
              <li>Check out faster</li>
              <li>Keep more than one address</li>
              <li>Track orders and more</li>
            </ul>
            <button onClick={() => setHaveAccount(!haveAccount)} className={styles.createAcc__button}>Create An Account</button>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className={styles.auth__page}>
        <div className='flex flex-row text-xs font-semibold'>Home<span className='mx-2 text-[#0156FF]'>{">"}</span>Login</div>
        <h1>Create An Account</h1>
        <div className={styles.auth__blocks}>
          <form onSubmit={createUser} className={styles.login__block}>
            <h1 className='w-full text-center'>Complete Forms</h1>
            {inputValues.map((input, i) => {
              return <InputInfo key={i} placeholder={input.placeholder} type={input.type} label={input.label} name={input.name} />
            })}
            <button type='submit' className={`${styles.createAcc__button} ml-[25%] mt-8`}>Create An Account</button>
          </form>
          <div className={styles.new__customer__block}>
            <h1>New Customer?</h1>
            <p>Creating an account has many benefits:</p>
            <ul>
              <li>Check out faster</li>
              <li>Keep more than one address</li>
              <li>Track orders and more</li>
            </ul>
            <button onClick={() => setHaveAccount(!haveAccount)} className={styles.haveAcc__button}>I Have An Account</button>
            <ToastContainer position='top-right' autoClose={5000} closeOnClick draggable theme='light' transition={Bounce} />
          </div>
        </div>
      </div>
    )
  }
};
