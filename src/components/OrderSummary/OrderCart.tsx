import { Image } from 'antd';
import styles from '../../styles/Checkout.module.scss';
import { useGetProductByIdQuery } from '../../store/api/productApi';

export const OrderCart = ({ id, count }: { id: string, count: number}) => {

  const { data: product, isLoading, isSuccess } = useGetProductByIdQuery(id)

  return isLoading ? (<div>Loading</div>) : isSuccess ? (
    <div className={styles.order__cart}>
      <Image src={product.image} alt='Cart Image' width={68} height={68} preview={false} />
      <div className={styles.cart__info}>
        <p>{product.details}</p>
        <span><span>QTY {count}</span>${product.price.toFixed(2)}</span>
      </div>
    </div>
  ) : (<div>Not Found</div>)
}