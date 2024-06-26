import { Image } from 'antd';
import styles from '../../styles/Catalog.module.scss'
import { Outlet, useParams } from 'react-router-dom';

export const Catalog = () => {

  const { id } = useParams()

  return(
    <div className={styles.catalog__page}>
      <Image src='../../../public/catalog_greeting_image.png' alt='Greeting image' preview={false} />
      <Outlet />
    </div>
  );
};
