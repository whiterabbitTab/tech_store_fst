import { useLocation, useNavigate } from 'react-router-dom';
import styles from '../../styles/Checkout.module.scss';
import { InputInfo } from '../../components/InputInfo/InputInfo';
import { fields } from '../../constants/checkout.constants';
import { useEffect } from 'react';
import { Checkbox } from 'antd';
import { OrderSummary } from '../../components/OrderSummary/OrderSummary';

export const Checkout = () => {

  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    window.localStorage.getItem('isAuth')?.slice(1, -1) === "not" && navigate('/login')
  }, [])

  return(
    <div className={styles.checkout__page}>
      <div className={styles.fields}>
        <div className='flex flex-row text-xs font-semibold'>Home<span className='mx-2 text-[#0156FF]'>{">"}</span>{location.pathname.replace('/', '').replace('c', 'C')}</div>
        <h1>Checkout</h1>
        <div className={styles.fields__data}>
          <h2>Shipping Address</h2>
          <div className='w-full h-[1px] bg-[#CACDD8]'></div>
          {fields.map((field, i) => {
            return <InputInfo label={field.label} name={field.name} placeholder={field.placeholder} type={field.type} regtype='checkout' key={i} />
          })}
          <div className='w-full h-[1px] mt-4 bg-[#CACDD8]'></div>
          <div className={styles.checkout__options}>
            <h3 className='font-bold text-[13px]'>Standard Rate</h3>
            <div className='flex justify-between items-center w-full'>
              <div className='flex items-center gap-x-2'>
                <Checkbox name='Rate' />
                <label htmlFor="Rate">Price may vary depending on the item/destination. Shop Staff will contact you. $21.00</label>
              </div>
              <span>$21.00</span>
            </div>
            <h3 className='font-bold text-[13px]'>Pickup from store</h3>
            <div className='flex justify-between items-center w-full'>
              <div className='flex items-center gap-x-2'>
                <Checkbox name='Rate' />
                <label htmlFor="Rate">1234 Street Adress City Address, 1234</label>
              </div>
              <span>$0.00</span>
            </div>
          </div>
        </div>
        <button className={styles.next__button}>Next</button>
      </div>
      <div className={styles.checkout__information}>
        
        <OrderSummary />
      </div>
    </div>
  );
};
