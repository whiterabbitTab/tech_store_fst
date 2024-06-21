import { NavLink, useNavigate, useParams } from 'react-router-dom';
import styles from '../../styles/UserAccount.module.scss';
import { Outlet } from 'react-router-dom';
import { navigation } from '../../constants/useraccount.constants';
import { useTypedSelector } from '../../hooks/redux';
import { useEffect } from 'react';

export const UserAccount = () => {

  const { id } = useParams<string>()
  const userId = useTypedSelector(state => state.user.slice(1,-1))
  const navigate = useNavigate()
  useEffect(() => {
    if (userId === 'not') {
      navigate('/')
    }
  }, [userId])

  return(
    <div className={styles.user__page}>
      <div className='flex flex-row text-xs font-semibold'>Home<span className='mx-2 text-[#0156FF]'>{">"}</span>My Dashboard</div>
      <h1>My Dashboard</h1>
      <div className={styles.dashboard__blocks}>
        <div className={styles.dashboard__navigation}>
          <div className={styles.dashboard__links}>
            {navigation.slice(0, 4).map((link, i) => {
              return <NavLink key={i} className={ ({ isActive }) => isActive ? `${styles.nav__link} ${styles.nav__link_active}` : styles.nav__link} to={link.path}>{link.text}</NavLink>
            })}
            <div className='mx-auto w-[90%] h-[1px] bg-[#d4d3d3]'></div>
            {navigation.slice(4, 8).map((link, i) => {
              return <NavLink key={i} className={ ({ isActive }) => isActive ? `${styles.nav__link} ${styles.nav__link_active}` : styles.nav__link} to={link.path}>{link.text}</NavLink>
            })}
            <div className='mx-auto w-[90%] h-[1px] bg-[#d4d3d3]'></div>
            {navigation.slice(8).map((link, i) => {
              return <NavLink key={i} className={ ({ isActive }) => isActive ? `${styles.nav__link} ${styles.nav__link_active}` : styles.nav__link} to={link.path}>{link.text}</NavLink>
            })}
          </div>
          <div className='flex flex-col items-center gap-y-6 py-4 px-1 bg-[#F5F7FF]'>
            <h1 className='font-bold text-base'>Compare Products</h1>
            <div className='flex flex-col gap-y-1 items-center w-full'>
              <p className='font-medium text-[13px]'>You have no items to compare</p>
            </div>
          </div>
          <div className='flex flex-col items-center gap-y-6 py-4 px-1 bg-[#F5F7FF]'>
            <h1 className='font-bold text-base'>My Wish List</h1>
            <div className='flex flex-col gap-y-1 items-center w-full'>
              <p className='font-medium text-[13px]'>You have no item in your wish list</p>
            </div>
          </div>
        </div>
        <Outlet />
      </div>
    </div>
  );
};
