import { Outlet } from 'react-router-dom';
import styles from '../styles/ProductPage.module.scss'

export const ProductLayout = () => {
  return(
    <div className={styles.main__product}>
      <Outlet />
    </div>
  );
};
