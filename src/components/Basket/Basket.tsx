import styles from '../../styles/Basket.module.scss'
import { IBasket } from '../../types/users.type';
import { BasketItem } from './BasketItem';
import { useGetUserQuery } from '../../store/api/userApi';
import { useTypedSelector } from '../../hooks/redux';
import { useNavigate } from 'react-router-dom';
import { MenuItems } from './MenuItems';
import { menuItems } from '../../constants/basket.constants';
import { useEffect, useState } from 'react';
import { Image } from 'antd';
import { useUpdateBasketMutation } from '../../store/api/userApi';

export const Basket = () => {

  const isauth = useTypedSelector(state => state.user.slice(1,-1))
  const {data: user, isLoading, isSuccess} = useGetUserQuery(isauth)
  const [updateBasket] = useUpdateBasketMutation()
  const basket: IBasket[] = user ? user.basket : []
  const navigate = useNavigate()
  const [subtotal, setSubTotal] = useState<number>(0)

  const handleClearCart = () => {
    user && updateBasket({ ...user, basket: [] })
  }

  useEffect(() => {
    let summary = 0
    user && user.basket.map((prod) => summary += (prod.price * prod.count))
    setSubTotal(summary)
  }, [user])

  if (isauth === 'not') {
    navigate('/login')
  }

  return(
    <div className={styles.basket__main}>
      <div className='flex flex-col gap-y-8'>
        <h1>Shopping Cart</h1>
        <div className='flex w-full gap-x-9'>
          <div className={styles.basket__products}>
            <span>Item</span>
            <span>Price</span>
            <span>Qty</span>
            <span>Subtotal</span>
            {
              isLoading ? (<div>Loading</div>) : isSuccess ?
              basket.map((prod: IBasket, i: number) => {
                return (
                  <BasketItem key={i} id_product={prod.id} count={prod.count} />
                )
              }) : (<div>Not found</div>)
            }
            <div className='flex w-[716px] justify-between h-[50px]'>
              <div className='flex items-center gap-x-2 h-[50px]'>
                <button onClick={() => navigate('/')} className='transition-all duration-200 hover:border-[#73767c] hover:text-[#73767c] h-[45px] py-2 px-[21px] border-2 border-[#A2A6b0] text-[#A2A6B0] rounded-[50px] font-semibold text-sm'>Continue Shopping</button>
                <button onClick={handleClearCart} className='transition-all duration-200 hover:bg-[#383838] py-3 px-6 bg-black text-white rounded-[50px] font-semibold text-sm'>Clear Shopping Cart</button>
              </div>
              <button className='transition-all duration-200 hover:bg-[#383838] py-2 px-6 h-[45px] bg-black text-white rounded-[50px] font-semibold text-sm'>Update Shopping Cart </button>
            </div>
          </div>
          <div className={styles.basket__payment}>
            <h1>Summary</h1>
            {menuItems.map((item, i) => {
              return <MenuItems key={i} heading={item.heading} elements={item.elements} id={i+1} />
            })}
            <div className='bg-[#61616160] w-full h-[1px]'></div>
            <div className={styles.amount__list}>
              <div className={styles.info__row}>
                <span className='font-bold text-sm'>Subtotal</span>
                <span className='font-bold text-sm'>${subtotal.toFixed(2)}</span>
              </div>
              <div className={styles.info__row}>
                <span className='font-bold text-sm'>Shipping</span>
                <span className='font-bold text-sm'>$21.00</span>
              </div>
              <div className='flex w-[70%] text-[12px] font- text-[#A2A6B0]'>
                <p>(Standard Rate - Price may vary depending on the item/destination. TECS Staff will contact you.)</p>
              </div>
              <div className={styles.info__row}>
                <span className='font-bold text-sm'>Tax</span>
                <span className='font-bold text-sm'>$1.91</span>
              </div>
              <div className={styles.info__row}>
                <span className='font-bold text-sm'>GST (10%)</span>
                <span className='font-bold text-sm'>$1.91</span>
              </div>
              <div className={styles.info__row}>
                <span className='font-bold text-sm'>Order Total</span>
                <span className='font-bold text-lg'>${(subtotal + 21 + 1.91 + 1.91).toFixed(2)}</span>
              </div>
              <div className='flex flex-col w-full py-2 gap-y-4'>
                {/* <button className={`${styles.payment__button} ${styles.default__button}`}>Proceed to Checkout</button> */}
                <button className={`${styles.payment__button} ${styles.default__button}`}>Proceed to Checkout</button>
                <button className={`${styles.payment__button} ${styles.paypal__button}`}>Check out with <Image className='ml-4' src='../../../paypal_icon.png' alt='PayPal' width={72} height={18} preview={false} /></button>
                <button className={`${styles.payment__button} ${styles.other__button}`}>Check Out with Multiple Addresses</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
