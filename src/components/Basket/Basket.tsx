import styles from '../../styles/Basket.module.scss'
import { IBasket } from '../../types/users.type';
import { BasketItem } from './BasketItem';
import { useGetUserQuery } from '../../store/api/userApi';
import { account_id } from '../../constants/api.constants';

export const Basket = () => {

  const { data: user, isSuccess, isLoading } = useGetUserQuery(account_id)
  const basket: IBasket[] = user ? user.basket : []
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
};
