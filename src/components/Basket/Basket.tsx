import styles from '../../styles/Basket.module.scss'
import { IBasket } from '../../types/users.type';
import { BasketItem } from './BasketItem';
import { useGetUserQuery } from '../../store/api/userApi';
import { useTypedSelector } from '../../hooks/redux';
import { useNavigate } from 'react-router-dom';

export const Basket = () => {

  const isauth = useTypedSelector(state => state.user.slice(1,-1))
  const {data: user, isLoading, isSuccess} = useGetUserQuery(isauth)
  const basket: IBasket[] = user ? user.basket : []
  const navigate = useNavigate()

  if (isauth === 'not') {
    navigate('/login')
  }

  return(
    <div className={styles.basket__main}>
      <div className='flex flex-col gap-y-8'>
        <h1>Shopping Cart</h1>
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
        </div>
      </div>
    </div>
  );
}
