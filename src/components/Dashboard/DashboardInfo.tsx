import { fieldsInfo } from '../../constants/useraccount.constants';
import styles from '../../styles/UserAccount.module.scss';
import { InputInfo } from '../InputInfo/InputInfo';
import { useTypedDispatch, useTypedSelector } from '../../hooks/redux';
import { useGetUserQuery, useUpdateUserDataMutation } from '../../store/api/userApi';
import { ChangeEvent, useEffect } from 'react';
import { changeUserSlice } from '../../store/userSlice/changeUser.slice';
import { emptyFields, samedata } from '../../constants/authValidate.constants';

export const DashboardInfo = () => {

  const isauth = useTypedSelector(state => state.user.slice(1,-1))
  const changeUser = useTypedSelector(state => state.changeUserSlice)
  const dispatch = useTypedDispatch()
  const { data: user, isLoading, isSuccess } = useGetUserQuery(isauth)
  const [updateUser] = useUpdateUserDataMutation()

  const handleChangeData = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (changeUser === user) {
      samedata()
    } else if (Object.keys(changeUser).filter((key) => changeUser[key as keyof object] === '').length !== 0) {
      emptyFields()
    } else {
      updateUser({...changeUser, id: user?.id})
    }
  }
  
  useEffect(() => {
    user && dispatch(changeUserSlice.actions.changeUser(user))
  }, [user])

  const handleChangePassword = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault()
  }
  
  return(
    <div className={styles.account__information}>
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
