import { fieldsInfo } from '../../constants/useraccount.constants';
import styles from '../../styles/UserAccount.module.scss';
import { InputInfo } from '../InputInfo/InputInfo';
import { useTypedDispatch, useTypedSelector } from '../../hooks/redux';
import { useGetUserQuery, useUpdateUserDataMutation } from '../../store/api/userApi';
import { ChangeEvent, useEffect } from 'react';
import { changeUserSlice } from '../../store/userSlice/changeUser.slice';
import { donechange, emptyFields, samePassword, samedata, wrongpassword } from '../../constants/authValidate.constants';
import { Bounce, ToastContainer } from 'react-toastify';

export const DashboardInfo = () => {

  const isauth = useTypedSelector(state => state.user.slice(1,-1))
  const changedUser = useTypedSelector(state => state.changeUserSlice)
  const changedPass = useTypedSelector(state => state.changePass)
  const dispatch = useTypedDispatch()
  const { data: user, isLoading, isSuccess } = useGetUserQuery(isauth)
  const [updateUser] = useUpdateUserDataMutation()

  const handleChangeData = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (changedUser === user && changedPass.newpassword === '') {
      samedata()
    } else if (Object.keys(changedUser).filter((key) => changedUser[key as keyof object] === '').length !== 0) {
      emptyFields()
    } else {
      user && updateUser({...changedUser, id: user.id})
      donechange()
    }
  }
  
  const handleChangePassword = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (changedPass.confirmpassword !== changedPass.password) {
      wrongpassword()
    } else if (changedPass.password === changedPass.newpassword) {
      samePassword()
    } else if (Object.keys(changedPass).filter((key) => changedPass[key as keyof object] === '').length !== 0) {
      emptyFields()
    } else {
      user && updateUser({ ...changedUser, password: changedPass.newpassword })
      donePassword()
    }
  }
  
  useEffect(() => {
    user && dispatch(changeUserSlice.actions.changeUser(user))
  }, [user])

  return(
    <div className={styles.account__information}>
      <ToastContainer position="top-right"
        autoClose={1000}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        draggable
        theme="light"
        transition={Bounce}
        closeButton={false}
      />
      <h1>Account Information</h1>
      <div className='mx-auto w-full h-[1px] bg-[#d4d3d3]'></div>
      <div className={styles.account__fields}>
        <form onSubmit={handleChangeData} className={styles.info__fields}>
          {isLoading ? (<div>Loading</div>) : isSuccess ? fieldsInfo.slice(0, 4).map((field, i) => {
            return <InputInfo key={i} label={field.label} name={field.name} placeholder={field.placeholder} type={field.type} regtype={field.regtype} value={user[field.name as keyof object]} />
          }) : (<div>Not Found</div>)}
          <button type='submit' className='mt-10'>Save Changes</button>
        </form>
        <form onSubmit={handleChangePassword} className={styles.password__fields}>
          {isLoading ? (<div>Loading</div>) : isSuccess ? fieldsInfo.slice(4).map((field, i) => {
            return <InputInfo key={i} label={field.label} name={field.name} placeholder={field.placeholder} type={field.type} regtype={field.regtype} />
          }) : (<div>Not Found</div>)}
          <button type='submit' className='mt-[143px]'>Change Password</button>
        </form>
      </div>
    </div>
  );
};
