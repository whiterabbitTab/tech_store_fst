import { ReactNode, useEffect, useState } from 'react';
import { useTypedSelector } from '../../hooks/redux';
import { useGetUserQuery } from '../../store/api/userApi';
import styles from '../../styles/Checkout.module.scss';
import { MenuItems } from '../Basket/MenuItems';
import { OrderCart } from './OrderCart';

export const OrderSummary = () => {

  const isauth = useTypedSelector(state => state.user.slice(1,-1))
  const { data: user } = useGetUserQuery(isauth)
  const [elements, setElements] = useState<ReactNode[]>([])

  useEffect(() => {
    let elementsarr: ReactNode[] = []
    user && user.basket.map((prod) => {
      elementsarr.push(<OrderCart id={prod.id} count={prod.count} />)
    })
    setElements(elementsarr)
  }, [user])

  return(
    <div className={styles.order__list}>
      <h1>Order Summary</h1>
      <div className='w-full h-[1px] bg-[#CACDD8]'></div>
      <MenuItems heading='Items in Cart' elements={elements} id={'Order'} />
    </div>
  );
};