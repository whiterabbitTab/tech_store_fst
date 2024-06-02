import { Image } from 'antd';
import styles from '../../styles/Home.module.scss';
import { IProduct } from '../../types/products.type';
import { Link } from 'react-router-dom';

export const ProductCard = ({ prod }: { prod:IProduct }) => {
  return(
    <Link to={`/product/${prod.id}/about`}className={styles.product__card}>
      <span className={`flex items-center gap-x-2 ${prod.status === 'in_stock' ? 'text-green-500' : 'text-red-500'}`}>
        <Image src={`../../../public/${prod.status}_icon.png`} alt={prod.status.replace('_', ' ')} preview={false} width={12} height={12}/>
        {prod.status.replace('_', ' ')}
      </span>
      <Image src={prod.image} alt='Product' preview={false} width={150} height={150} />
      <div className={styles.product__rate}>{prod.reviews}</div>
      <p className={styles.product__name}>{prod.description}</p>
      <div className={styles.price}>
        {prod.discount !== 0 ? (<><span className={styles.price}>{`${prod.price}$`}</span><span className={styles.prev__price}><div />{`${prod.price * ((100-prod.discount)/100)} $`}</span></>) : (<span className={styles.price}>{`${prod.price}$`}</span>)}
      </div>
    </Link>
  );
};
